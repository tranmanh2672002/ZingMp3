import EmHatAiNghe from '~/assets/musics/emhatainghe.mp3';
import EmHatAiNgheImage from '~/assets/images/songs/emhatainghe.jpg';
import BinhYenNoiDau from '~/assets/musics/binhyennoidau.mp3';
import BinhYenNoiDauImage from '~/assets/images/songs/binhyennoidau.jpg';
import DaoNuong from '~/assets/musics/daonuong.mp3';
import DaoNuongImage from '~/assets/images/songs/daonuong.jpg';
import baMotKhongBay from '~/assets/musics/3107-2.m4a';
import baMotKhongBayImage from '~/assets/images/songs/3107-2.jpg';
import anhSaoVaBauTroi from '~/assets/musics/anhsaovabautroi.m4a';
import anhSaoVaBauTroiImage from '~/assets/images/songs/anhsaovabautroi.jpg';
import dynasty from '~/assets/musics/dynasty.m4a';
import dynastyImage from '~/assets/images/songs/dynasty.jpg';
import thiThoi from '~/assets/musics/thithoi.m4a';
import thiThoiImage from '~/assets/images/songs/thithoi.jpg';
import saiGonHomNayMua from '~/assets/musics/saigonhomnaymua.m4a';
import saiGonHomNayMuaImage from '~/assets/images/songs/saigonhomnaymua.jpg';

const audios = [
    {
        src: anhSaoVaBauTroi,
        title: 'Ánh sao và bầu trời',
        artist: 'T.R.I',
        img: anhSaoVaBauTroiImage,
    },
    {
        src: dynasty,
        title: 'Dynasty',
        artist: 'MIIA',
        img: dynastyImage,
    },
    {
        src: thiThoi,
        title: 'Thì thôi',
        artist: 'Ready',
        img: thiThoiImage,
    },
    {
        src: saiGonHomNayMua,
        title: 'Sài gòn hôm nay mưa',
        artist: 'Hoàng Duyên, JSOL',
        img: saiGonHomNayMuaImage,
    },
    {
        src: EmHatAiNghe,
        title: 'Em hát ai nghe',
        artist: 'Orange',
        img: EmHatAiNgheImage,
    },
    {
        src: BinhYenNoiDau,
        title: 'Bình yên nơi đâu',
        artist: 'Sơn Tùng-MTP',
        img: BinhYenNoiDauImage,
    },
    {
        src: DaoNuong,
        title: 'Đào nương',
        artist: 'Hoàng Vương',
        img: DaoNuongImage,
    },
    {
        src: baMotKhongBay,
        title: '3107-2',
        artist: 'Duong, W/N, Nâu',
        img: baMotKhongBayImage,
    },
];

export default audios;
