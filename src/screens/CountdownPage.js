import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Alert } from 'react-native';

const CountdownPage = () => {
  const [timeLeft, setTimeLeft] = useState(9*10); // 5 minutes in seconds
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft(timeLeft => timeLeft - 1);
      }, 1000);
    } else if (isActive && timeLeft === 0) {
      clearInterval(interval);
      setIsActive(false);
      Alert.alert('Countdown Finished', 'Sorry the festival is over. You cannot participate anymore!');
    } else if (!isActive && timeLeft !== 0) {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive, timeLeft]);

  const toggleTimer = () => {
    setIsActive(!isActive);
  };

  const resetTimer = () => {
    setIsActive(false);
    setTimeLeft(60 * 5);
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Countdown to Tamu Lhosar</Text>
      <View style={styles.timerContainer}>
        <Text style={styles.timer}>{formatTime(timeLeft)}</Text>
      </View>
      <View style={styles.buttonContainer}>
        <TouchableOpacity 
          style={[styles.button, isActive ? styles.stopButton : styles.startButton]} 
          onPress={toggleTimer}
        >
          <Text style={styles.buttonText}>{isActive ? 'Stop' : 'Participate '}</Text>
        </TouchableOpacity>
        <TouchableOpacity 
          style={[styles.button, isActive ? styles.stopButton : styles.startButton]} 
          onPress={toggleTimer}
        >
          <Text style={styles.buttonText}>{isActive ? 'Stop' : 'Not Interested'}</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={resetTimer}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent:'space-evenly',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#333',
  },
  timerContainer: {
    borderWidth: 2,
    borderColor: '#333',
    borderRadius: 10,
    padding: 20,
    marginBottom: 20,
  },
  timer: {
    fontSize: 48,
    fontWeight: 'bold',
    color: '#333',
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent:'space-evenly',
    paddingHorizontal:100,

    alignItems: 'center',
    width: '90%',
  },
  button: {
    paddingHorizontal: 5,
    paddingVertical: 20,
    borderRadius: 5,
    marginHorizontal: 20,
    alignItems:'center',
    justifyContent:'center',
  },
  startButton: {
    backgroundColor: '#4CAF50',
  },
  stopButton: {
    backgroundColor: '#f44336',
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
  },
});

export default CountdownPage;

