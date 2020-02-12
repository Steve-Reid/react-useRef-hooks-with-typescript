import * as React from 'react';
import './App.css';

interface AppProps {}

export const App: React.FC<AppProps> = () => {
  const nameRef = React.useRef<HTMLInputElement>(null);
  const ageRef = React.useRef<HTMLInputElement>(null);
  const marriedRef = React.useRef<HTMLInputElement>(null);
  const submitRef = React.useRef<HTMLButtonElement>(null);

  React.useEffect(() => {
    if (nameRef && nameRef.current) {
      nameRef.current.focus();
    }
  }, []);

  const handleKeyPress = (e: React.KeyboardEvent<HTMLInputElement>): void => {
    if (e.keyCode === 13 || e.keyCode === 40) {
      e.preventDefault();
      switch (e.currentTarget!.id) {
        case 'nameInput':
          ageRef.current!.focus();
          break;
        case 'ageInput':
          marriedRef.current!.focus();
          break;
        case 'marriedInput':
          submitRef.current!.focus();
          break;

        default:
          break;
      }
    }
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault();

    console.log('Submitted');
  };

  return (
    <div className="App">
      <header className="App-header">
        <h3>UseRefs Hook</h3>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <span>Name</span>
            <input
              ref={nameRef}
              id="nameInput"
              type="text"
              onKeyDown={handleKeyPress}
            />
          </div>
          <div className="form-field">
            <span>Age</span>
            <input
              ref={ageRef}
              id="ageInput"
              type="text"
              onKeyDown={handleKeyPress}
            />
          </div>
          <div className="form-field">
            <span>Married?</span>
            <input
              ref={marriedRef}
              id="marriedInput"
              type="checkbox"
              onKeyDown={handleKeyPress}
            />
          </div>
          <button ref={submitRef} id="submitButton" type="submit">
            Submit
          </button>
        </form>
      </header>
    </div>
  );
};
