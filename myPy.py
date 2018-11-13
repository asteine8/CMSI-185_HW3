   Td = (b * f(T, RH)) / (a - f(T, RH))   where:

   f(T, RH) = ((a * T) / (b + T)) + ln( RH )
   a = 17.27
   b = 237.7 degrees C

def f(T, RH):
    return ((a * T) / (b + T)) + ln( RH )
