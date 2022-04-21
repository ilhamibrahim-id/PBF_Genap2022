import React, { Component } from 'react'
import './Tugas.css'
import Post from './Post'

class Tugas extends Component {

    state = {               //komponen state dari react untuk statefull component
        listMhs: [],     //variabel array yang digunakan untuk menyimpan data API
        insertMhs: {
            id: 1,
            NIM: 1,
            nama: "",
            alamat: "",
            hp: "",
            angkatan: 1,
            status: ""
        }
    }

    ambilDataDariServerAPI = () => {
        fetch('http://localhost:3001/mahasiswa?_sort=id&_order=asc') // alamat URL API yang ingin kita ambil datanya
            .then(response => response.json())      // ubah response data dari url API menjadi sebuah data json
            .then(jsonHasilAmbilDariAPI => {        // data json hasil ambil dari API kita masukan ke dalam listArtkel pada state
                this.setState({
                    listMhs: jsonHasilAmbilDariAPI
                })
            })
    }

    componentDidMount() {   //komponen untuk mengecek ketika komponen telah di-mount-ing, maka panggil API
        this.ambilDataDariServerAPI();
    }

    handleHapusTugas = (data) => {
        fetch(`http://localhost:3001/mahasiswa/${data}`, { method: 'DELETE' })
            .then(res => {
                this.ambilDataDariServerAPI()
            })
    }

    handleTambah = (event) => {
        let formInsertMhs = { ...this.state.insertMhs };
        let timestamp = new Date().getTime();
        formInsertMhs['id'] = timestamp;
        formInsertMhs[event.target.name] = event.target.value;
        this.setState({
            insertMhs: formInsertMhs
        });
    }

    handleTombolSimpan = () => {
        fetch('http://localhost:3001/mahasiswa', {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(this.state.insertMhs)
        })
            .then((Response) => {
                this.ambilDataDariServerAPI();
            });
    }

    render() {
        return (
            <div className="konten-artikel">
                <div className="row">
                    <div className="col-sm-5">
                        <div className="TopBar">
                            <div className="form pb-2">
                                <br />
                                <h4 align="center">Masukan Mahasiswa BARU</h4>
                                <br />
                                <div className="form-group row">
                                    <label htmlFor="NIM" className="col-sm-2 col-form-label">NIM</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="NIM" name="NIM" onChange={this.handleTambah} />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row">
                                    <label htmlFor="nama" className="col-sm-2 col-form-label">Nama</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="nama" name="nama" onChange={this.handleTambah} />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row">
                                    <label htmlFor="alamat" className="col-sm-2 col-form-label">Alamat</label>
                                    <div className="col-sm-10">
                                        <textarea type="text" className="form-control" id="alamat" name="alamat" rows="3" onChange={this.handleTambah} />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row">
                                    <label htmlFor="hp" className="col-sm-2 col-form-label">No Hp</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="hp" name="hp" onChange={this.handleTambah} />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row">
                                    <label htmlFor="angkatan" className="col-sm-2 col-form-label">Angkatan</label>
                                    <div className="col-sm-10">
                                        <input type="number" className="form-control" id="angkatan" name="angkatan" onChange={this.handleTambah} />
                                    </div>
                                </div>
                                <br />
                                <div className="form-group row">
                                    <label htmlFor="status" className="col-sm-2 col-form-label">Status</label>
                                    <div className="col-sm-10">
                                        <input type="text" className="form-control" id="status" name="status" onChange={this.handleTambah} />
                                    </div>
                                </div>
                                <br />
                                <center><button type="submit" className="btn btn-primary" id="simpan" onClick={this.handleTombolSimpan}>Simpan</button></center>
                            </div>
                        </div>

                </div>
                    <div className="col-sm-7">
                        <div className="isiKonten">
                            <br />
                            <h4 align="center">Daftar Mahasiswa</h4><br/>{
                                this.state.listMhs.map(Tugas => {     // looping dan masukan untuk setiap data yang ada di listArtikel ke variabel artikel
                                    return <Post key={Tugas.id} nimMhs={Tugas.NIM} namaMhs={Tugas.nama} alamatMhs={Tugas.alamat} idTugas={Tugas.id} noHp={Tugas.hp} angkatanMhs={Tugas.angkatan} statusMhs={Tugas.status} hapusTugas={this.handleHapusTugas} /> // mappingkan data json dari API sesuai kategorinya
                                })
                            }
                        </div>
                    </div>
                    </div>

            </div>
        )
    }
}

export default Tugas;