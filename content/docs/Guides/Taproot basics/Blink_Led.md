---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMVJLHW7%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIQCqrAaFZB8cbTUjmAWaXUk9dyfjklarv5NdmGCSYI36GQIgZrHTFk7YFGS5bgBaGm1KNhCegqtqh3amangF6YJutM4qiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNT%2Fc%2FVlw33fitHgFCrcA07x0YGyOysd5bSbeCo16EzTsp71PbAI%2FXqQAc9lma8CSX8uS1pmaCBtIDeTF7s%2B62rqn9%2F3xswzzuPOftM%2FuSvJSrk7R2WnoubdreMD7QjH5f8IppLoZIKIIMUi0IsXUEYLyv%2FZhf7GjqOsjOvFvsKmIRm4P0MJ1L4YzUFA7XO1%2FoYSYBONLz7Y1YzXYeRNVqVSoTiWUSKkrXYDBm%2FPVCJPZWurahoo73HUitrkRxTdKXyEOjUDzETqPSDxAY4tCpp8whZN%2BHPd79wry05ImqZWEz8OyfuqznqYsiS5cgODZzvk300n5%2FaR9UdxFrmjB9JbPNtvJ8S01dhkOjlOd9au2GjyIHelsCOLrAPGQSWTLSzVG6vGKZOFDl3S24BTzTxShEZDeoijvG9oWX9Fw7zIXzccHtXG8DliKeEaw%2FKAyvuPZV1Uw3QL2b7S9IHbY%2BEiq%2FYPXbzS0JW2X2ks4%2FFHg%2Fk18VJCOJw7KDzmCWg9%2BNrdcr41utXKXj3IJWu2SoBhTdVxPK5xr5X1GRq3JUTDTanb51R4V%2BB%2BDQZ42Yn%2F7ho8EMs9W6V7tz2lax%2BBnSOAJtr8WPVBD7f6ygNr3VQL5GbyZ%2BrrZb8KhHr1fp5nsDsLlINZWGgHTpaaMLLr%2Bb4GOqUBtFFYAgvG7sttJ%2Fy3onkHu3gZFmhMMfsujCO%2FyQ2HK%2FGOs5WHlR9DGeQjFxIlRr8eXE2ePrb5uZw7UolOap9SNLXoVsnefT3o5xpAElRcP5gniKZqws2I2I7OO5CQJoSldLtKJIpd%2FIu%2B91jWaUfqnPoO64q%2FJhd%2F0ED4z%2FIjy%2F9rx05ICKxOexc%2BW3s9luIjTDVPcHLd7mNmzORZYADVbFAixSOe&X-Amz-Signature=0f6c873e400a9a8639061dcbb642918d2f6eeb0b80a0edb6b6ccf0df5cede7c3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSOL3DLV%2F20250322%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250322T090716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJIMEYCIQC7byDvtyiuaT2hwpIXwiCaMh4D5opBglbU9wlJJZlbYQIhAJl7yI5Op9IB%2BgRLFbnc5MXzse7JC7sOd95UNUVtJwLgKogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0XOyWTPaX8QGEaQIq3ANYvXBVZHKAsEMPOFUs6LJSsMyhLl3dQ%2BgVfeQPKttiy%2B7Luo%2BwoeHc53NJDyoXFcDBnSEFDLF6nZNdA7mYr%2FOH6%2FL5jwO0Zn8qtGmeTjLYy7%2FDIc4BFuviWOe8a6nSh7tZVkuodbNihiCbyG%2FAwJDdtinV88L9Wp9nFx2FKNrPZ0VOstOnzA4GBHLoLmflipwx3hmKKTKsrgd6qIkf7aYO%2BNXTIaBMYcSWsiLAQRjkH%2BJFjuSIzXz39iAt7w4txIW%2FDrZs%2FYkx5JkXqNa%2Bgzt0DN5nogPzr3sbS0CKrHRcWO8CQIAGHGQTCkyrjZqDxfWBF2pI7FYcw71aBou%2BlMDaLGRtSIacfjTlxiIQSaO2DfEh4yARuuXyB07ogdevj6EECxJNm3ZNvJwo%2BOtCuLpMOZMQCZMQq4DOsaerv%2FRFPF6P%2F2aGD4hzHdBaxHh%2BpYgVRUbI1pZ8DPQV13d8TcsLxUgaG%2F9ooDik7irjZtiumbwUrWx%2FbUePFOiejWxngp7B4Lm8DvC2WtUVs%2BVGby9JtqNVHkw8Tql3dgpD8daSHPW37KerAKKwuU6MPeyaTjte7jJz3KsqMOyyh%2BJBG7Kcp5iqIlJayg982jIcX7odRK7udL22F35SknKN2DDt6%2Fm%2BBjqkAbyWRGymr%2FGZN7fivN7YHJRT9m7w8Xeq%2FW83wbtJDwtcTa%2BrS4X8NDo5ufQqq7oW1eh7H7IjGNqJaOMhszvo3LSVf8fEMjZrhQPdL84K%2F2FXYVzdPWtufZ5%2Fn%2Bk6%2BMFbhrZ%2FMdQ5M1GJGIjX0azFl29lTk4%2F2jYoCVYNgV8L4TXyF5v2qPdvAO48FG7aALmaBPRci59IhYWUb1RKahfE2E1plBe4&X-Amz-Signature=91c76d675acad82ea0d87b7269db582fc47b55a4b76ac4c6cb2e9102315981b5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
