const DialogueBox = ({ db }) => {
  return (
    <div className="comic-bubble">
      {db == 0 && (
        <p>
          Can you find which elements generate noise in this image? Once you
          find them click on the badges to see how many dbs are caused.
        </p>
      )}

      {db == 70 ? (
        <p>
          Wow, you found the car! <br />
          As part of traffic, cars account for most polluting noise in cities.
          it generates 70db
        </p>
      ) : null}

      {db == 85 && (
        <p>
          There it is! Music can be a loud noise that travels throughout the
          city.
          <br />
          Music from speakers can be even noisier than traffic, creating
          approximately 85 dB of noise.
        </p>
      )}
      {db == 100 && (
        <p>
          Correct! Construction noises such as building and road and pavement
          resurfacing works can be very noisy.
          <br />
          Construction tools like jackhammers can reach around 110 dB. That’s
          extremely loud!
        </p>
      )}

      {db == 110 && (
        <p>
          Plane noises are a significant factor in noise pollution, producing
          one of the loudest city noises.
          <br />
          As you can see from the decibel bar above me, planes can create
          approximately 100dB of noise. Some aircrafts can even produce 130dB
          worth of noise!
        </p>
      )}
    </div>
  );
};

export default DialogueBox;
