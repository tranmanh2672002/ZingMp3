import styles from './PlayControl.module.scss';
import classNames from 'classnames/bind';
import { useState, useRef } from 'react';
import audios from '~/components/Audio';
import TimeSlider from 'react-input-slider';
import { BiSkipNext, BiSkipPrevious } from 'react-icons/bi';
import { AiFillHeart } from 'react-icons/ai';
import {
    BsShuffle,
    BsPlayCircle,
    BsPauseCircle,
    BsArrowRepeat,
    BsVolumeMute,
    BsVolumeOff,
    BsVolumeDown,
    BsVolumeUp,
} from 'react-icons/bs';

const cx = classNames.bind(styles);

function PlayControl() {
    const [audioIndex, setAudioIndex] = useState(0);
    const [isPlay, setIsPlay] = useState(false);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);
    const [randomIndex, setRandomIndex] = useState(false);
    const [loopIndex, setLoopIndex] = useState(false);
    const [volume, setVolume] = useState(50);

    const audioRef = useRef();

    const handleClickPauseClick = () => {
        if (isPlay) {
            audioRef.current.pause();
        } else {
            audioRef.current.play();
        }
        setIsPlay(!isPlay);
    };

    const handleLoadedData = () => {
        setDuration(audioRef.current.duration);
        if (isPlay) audioRef.current.play();
    };

    const handleTimeSliderChange = ({ x }) => {
        audioRef.current.currentTime = x;
        setCurrentTime(x);

        if (!isPlay) {
            setIsPlay(true);
            audioRef.current.play();
        }
    };

    const handleVolumeChange = ({ x }) => {
        setVolume(x);
        audioRef.current.volume = x / 100;
    };

    const handelVolumeIcon = () => {
        if (volume === 0) {
            return <BsVolumeOff className={cx('volume-icon')} />;
        } else if (volume === 100) {
            return <BsVolumeDown className={cx('volume-icon')} />;
        } else return <BsVolumeUp className={cx('volume-icon')} />;
    };

    const handleNextSong = () => {
        setAudioIndex((audioIndex + audios.length - 1) % audios.length);
        setIsPlay(true);
    };

    const handlePrevSong = () => {
        setAudioIndex((audioIndex + 1) % audios.length);
        setIsPlay(true);
    };

    const handleRandomClick = () => {
        if (randomIndex) {
            setRandomIndex(false);
        } else setRandomIndex(true);
    };

    const handleLoopClick = () => {
        if (loopIndex) {
            setLoopIndex(false);
        } else setLoopIndex(true);
    };

    const handleOnEnded = () => {
        if (randomIndex) {
            setAudioIndex(Math.floor(Math.random() * audios.length));
        } else {
            setAudioIndex((audioIndex + 1) % audios.length);
        }
    };

    const formatTimer = (number) => {
        const minutes = Math.floor(number / 60);
        const seconds = Math.floor(number - minutes * 60);
        return `${minutes < 10 ? '0' + minutes : minutes}:${seconds < 10 ? '0' + seconds : seconds}`;
    };

    return (
        <div className={cx('wrapper')}>
            <div className={cx('play-control')}>
                <div className={cx('play-control-left')}>
                    <div className={cx('left-img')}>
                        <img src={audios[audioIndex].img} alt="img" />
                    </div>
                    <div className={cx('left-content')}>
                        <span className={cx('left-song')}>{audios[audioIndex].title}</span>
                        <span className={cx('left-singer')}>{audios[audioIndex].artist}</span>
                    </div>
                    <div className={cx('left-save')}>
                        <button className={cx('save-btn')}>
                            <AiFillHeart className={cx('save-icon')} />
                        </button>
                    </div>
                </div>
                <div className={cx('play-control-middle')}>
                    <div className={cx('middle-actions')}>
                        <button className={cx('actions-button')} onClick={handleRandomClick}>
                            {randomIndex ? (
                                <BsShuffle className={cx('btn-icon-click')} />
                            ) : (
                                <BsShuffle className={cx('btn-icon')} />
                            )}
                        </button>
                        <button className={cx('actions-button')} onClick={handleNextSong}>
                            <BiSkipPrevious className={cx('btn-icon1')} />
                        </button>
                        <button className={cx('actions-button')} onClick={handleClickPauseClick}>
                            {isPlay ? (
                                <BsPauseCircle className={cx('btn-icon2')} />
                            ) : (
                                <BsPlayCircle className={cx('btn-icon2')} />
                            )}
                        </button>
                        <button className={cx('actions-button')} onClick={handlePrevSong}>
                            <BiSkipNext className={cx('btn-icon1')} />
                        </button>
                        <button className={cx('actions-button')} onClick={handleLoopClick}>
                            {loopIndex ? (
                                <BsArrowRepeat className={cx('btn-icon-click')} />
                            ) : (
                                <BsArrowRepeat className={cx('btn-icon')} />
                            )}
                        </button>
                    </div>
                    <div className={cx('middle-time')}>
                        <audio
                            ref={audioRef}
                            src={audios[audioIndex].src}
                            onLoadedData={handleLoadedData}
                            loop={loopIndex}
                            onTimeUpdate={() => setCurrentTime(audioRef.current.currentTime)}
                            onEnded={handleOnEnded}
                        />
                        <div className={cx('left-time')}>{formatTimer(currentTime)}</div>
                        <TimeSlider
                            axis="x"
                            xmax={duration}
                            x={currentTime}
                            className={cx('range-time')}
                            onChange={handleTimeSliderChange}
                        />
                        <div className={cx('right-time')}>{formatTimer(duration)}</div>
                    </div>
                </div>
                <div className={cx('play-control-right')}>
                    <button className={cx('volume-btn')}>
                        {volume === 0 ? (
                            <BsVolumeMute className={cx('volume-icon')} />
                        ) : volume === 100 ? (
                            <BsVolumeUp className={cx('volume-icon')} />
                        ) : volume <= 30 ? (
                            <BsVolumeOff className={cx('volume-icon')} />
                        ) : (
                            <BsVolumeDown className={cx('volume-icon')} />
                        )}
                    </button>
                    <TimeSlider
                        axis="x"
                        xmax={100}
                        x={volume}
                        className={cx('range-volume')}
                        onChange={handleVolumeChange}
                    />
                </div>
            </div>
        </div>
    );
}

export default PlayControl;
