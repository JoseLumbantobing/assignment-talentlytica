import { memo } from "react";

const SelectInput = memo(
    ({ label, id, options, setOutputJson, aspek_penilaian }) => {
      const handleOnChange = (e, aspek) => {
        setOutputJson((prevOutputJson) => ({
          ...prevOutputJson,
          [aspek]: {
            ...prevOutputJson[aspek],
            [id]: Number(e.target.value),
          },
        }));
      };
  
      return (
        <div style={{ display: 'flex', gap: 10 }}>
          <label style={{ minWidth: 100 }} htmlFor={id}>{label}</label>
  
          {aspek_penilaian.map((aspek) => (
            <select
              key={aspek}
              id={id}
              style={{ width: '100px' }}
              defaultValue={'default'}
              onChange={(e) => handleOnChange(e, aspek)}
              required
            >
              <option value="default" disabled hidden>
                Pilih Nilai
              </option>
              {options.map((opt) => {
                return (
                  <option key={opt.text} value={opt.value}>
                    {opt.text}
                  </option>
                );
              })}
            </select>
          ))}
        </div>
      );
    }
);

export default SelectInput;