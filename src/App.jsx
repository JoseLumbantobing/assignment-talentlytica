import React, { useEffect, useState } from 'react';
import SelectInput from './SelectInput';

const options = [
  { value: 1, text: 1 },
  { value: 2, text: 2 },
  { value: 3, text: 3 },
  { value: 4, text: 4 },
  { value: 5, text: 5 },
  { value: 6, text: 6 },
  { value: 7, text: 7 },
  { value: 8, text: 8 },
  { value: 9, text: 9 },
  { value: 10, text: 10 },
];

const aspek_penilaian = [
  'aspek_penilaian_1',
  'aspek_penilaian_2',
  'aspek_penilaian_3',
  'aspek_penilaian_4',
];

const App = () => {
  const [outputJson, setOutputJson] = useState({
    aspek_penilaian_1: {},
    aspek_penilaian_2: {},
    aspek_penilaian_3: {},
    aspek_penilaian_4: {},
  });

  const [rekapNilaiAkhir, setRekapNilaiAkhir] = useState({});

  useEffect(() => {
    console.table(rekapNilaiAkhir);
  }, [rekapNilaiAkhir]);

  return (
    <div style={{ padding: '0 200px', margin: '0 auto' }}>
      <h1>From Penilaian</h1>

      <div style={{ display: 'flex', gap: 10 }} >
        <div style={{ display: 'flex', flexDirection: 'column', gap: 15 }} >
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '540px' }}>
            <span></span>
            <span>Aspek Penilaian 1</span>
            <span>Aspek Penilaian 2</span>
            <span>Aspek Penilaian 3</span>
            <span>Aspek Penilaian 4</span>
          </div>
          
          <SelectInput
            label="Mahasiswa 1"
            id="mahasiswa_1"
            options={options}
            setOutputJson={setOutputJson}
            aspek_penilaian={aspek_penilaian}
          />

          <SelectInput
            label="Mahasiswa 2"
            id="mahasiswa_2"
            options={options}
            setOutputJson={setOutputJson}
            aspek_penilaian={aspek_penilaian}
          />

          <SelectInput
            label="Mahasiswa 3"
            id="mahasiswa_3"
            options={options}
            setOutputJson={setOutputJson}
            aspek_penilaian={aspek_penilaian}
          />

          <SelectInput
            label="Mahasiswa 4"
            id="mahasiswa_4"
            options={options}
            setOutputJson={setOutputJson}
            aspek_penilaian={aspek_penilaian}
          />

          <SelectInput
            label="Mahasiswa 5"
            id="mahasiswa_5"
            options={options}
            setOutputJson={setOutputJson}
            aspek_penilaian={aspek_penilaian}
          />

          <SelectInput
            label="Mahasiswa 6"
            id="mahasiswa_6"
            options={options}
            setOutputJson={setOutputJson}
            aspek_penilaian={aspek_penilaian}
          />

          <SelectInput
            label="Mahasiswa 7"
            id="mahasiswa_7"
            options={options}
            setOutputJson={setOutputJson}
            aspek_penilaian={aspek_penilaian}
          />

          <SelectInput
            label="Mahasiswa 8"
            id="mahasiswa_8"
            options={options}
            setOutputJson={setOutputJson}
            aspek_penilaian={aspek_penilaian}
          />

          <SelectInput
            label="Mahasiswa 9"
            id="mahasiswa_9"
            options={options}
            setOutputJson={setOutputJson}
            aspek_penilaian={aspek_penilaian}
          />

          <SelectInput
            label="Mahasiswa 10"
            id="mahasiswa_10"
            options={options}
            setOutputJson={setOutputJson}
            aspek_penilaian={aspek_penilaian}
          />

          <button
            style={{ marginTop: 10, width: '100px', alignSelf: 'end' }}
            onClick={() => {
              setRekapNilaiAkhir(outputJson);
            }}
            type="submit"
          >
            Simpan
          </button>
        </div>

        <pre style={{ marginLeft: '100px' }}>
          {JSON.stringify(rekapNilaiAkhir, null, 2)}
        </pre>
      </div>
    </div>
  );
};

export default App;