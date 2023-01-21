import {
  Pane,
  Heading,
  TextInput,
  EyeOpenIcon,
  Checkbox,
  Button,
  KeyIcon,
} from "evergreen-ui";
import "./App.css";

function App() {
  return (
    <Pane className="login">
      <Pane>
        <KeyIcon color="success" marginTop={10} className="key-icon" />

        <Pane>
          <Pane class="cancel-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="ionicon1"
              viewBox="0 0 512 512"
            >
              <title>Close Circle</title>
              <path
                d="M448 256c0-106-86-192-192-192S64 150 64 256s86 192 192 192 192-86 192-192z"
                fill="none"
                stroke="#a3a2a2"
                stroke-miterlimit="10"
                stroke-width="32"
              />
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="32"
                d="M320 320L192 192M192 320l128-128"
              />
            </svg>
          </Pane>
          <Heading size={400} marginTop={-23} marginLeft={32}>
            Log in
          </Heading>
        </Pane>
        <Heading size={200} marginTop={6} marginLeft={7}>
          Become a member -- you'll enjoy exclusive deals,offers,invites and
          rewards.
        </Heading>
        <Pane className="line"></Pane>
        <Pane>
          <Heading size={400} marginTop={12} marginLeft={7}>
            Email
          </Heading>
          <Heading size={500} marginTop={-17} marginLeft={45} color="red">
            *
          </Heading>
          <TextInput
            marginTop={10}
            marginLeft={8}
            width={300}
            name="text-input-name"
            placeholder="info@pixselz.io"
          />
          <Heading size={400} marginTop={12} marginLeft={7}>
            Password
          </Heading>
          <Heading size={500} marginTop={-17} marginLeft={69} color="red">
            *
          </Heading>
          <Pane>
            <TextInput
              marginTop={10}
              marginLeft={8}
              width={300}
              placeholder="Enter your Password"
              autoCorrect={false}
              secureTextEntry={true}
              textContentType="password"
            />
            <EyeOpenIcon
              style={{
                position: "absolute",
                marginTop: "18px",
                marginLeft: "-25px",
              }}
            />
          </Pane>
        </Pane>
        <Pane>
          <Checkbox marginLeft={8} label="Remember me" />
          <Pane className="forgot-password">
            <span>Forgot Password?</span>
          </Pane>
        </Pane>
        <Button className="Button" marginRight={16}>
          Login
        </Button>
        <Pane>
          <Heading className="footer">Don't have an account?</Heading>
          <Heading className="footer-link">Sign up</Heading>
        </Pane>
      </Pane>
    </Pane>
  );
}

export default App;
