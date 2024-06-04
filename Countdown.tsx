import { Box, Text } from "@gluestack-ui/themed";
import React, { useEffect, useState } from "react";

const Countdown = () => {
  const [countDown, setCountDown] = useState(300);

  useEffect(() => {
    const CountDown = setInterval(() => {
        setCountDown(prevCountDown => {
            if (prevCountDown > 0) {
                return prevCountDown - 1;
            }
            return prevCountDown;
        });
    }, 1000);
      

    return () => {
      clearInterval(CountDown);
    };
  }, []);
  return (
    <Box flex={1} alignItems="center" justifyContent="center">
      <Text fontWeight="bold">Countdown</Text>
      <Text>{countDown}</Text>
    </Box>
  );
};

export default Countdown;
