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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IEXKOLM%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2B%2Bhwj1%2FodPrTU7MG4Dev%2FG6BIA%2B9HfNXBN59lRQoKRAIgeXPoYtO3GAy6cQLbQfPyJdulN0vwI4TbsmrTIteUV40qiAQI5f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOn1yQ4RWRdiLSDmCrcA%2FZXyc10QKNi93IoAB2%2FKNEv6lZUKb74kyibtA3gE64uokYdet7UVjz%2FP7JHB%2BPU%2BjyPaEb0XeTsoUonDJZjgRpeOe8%2BbhPGT37X30XL6sgPKdCdn51Vr4MQ7rCkQvjnDdr6%2FzYqRHlzhSBkbK7HGYbTFPbA2%2BkC%2F%2FzbLgKuQo%2FXznNdZLcowvYcvHbcY6eKA6%2FpqDsalYXNn0vz2N4VJBha2UjkeCTQ6PO93gUDxbj8IS44wOLvHe9O6nvMNy98YNoie8RLdJFt977pzUQdtgOZlH56czOpZFCDcB0g49iJO%2F22eSybV7pdbiNymJ0WOde3cbyxNaur0Bboo1AS6g3%2BNcjWWjNMWHfy66Kf7Lj4kNueH7kDhLKfndCJ9bHG0QA3Pjuh6WtzYmQU5P%2BNAKyLENoGzzrCd6rwTcFe%2B6aBxmCqEYkK5I4WmzwlYt5T70baHU0LzvcqETFQQOXVNGnFn%2B7QW2pPChJ7IaLEDKvDvV69JMrrGv7NadUheeMCN691P83udeoKctc3Okd9c%2B7emsyaVLksp5U%2FOU6sJGoHAGW%2F07Yp0HMq%2Bzmd2U0gNktUxO%2BBhmJRGHltKhvcDIWT%2BRFY0NI2M7GPNYtVjQ%2BH%2B6hKl6Pe2k1pYmVOMOKL5b0GOqUB1k01NELva8AlkG8y67mLIG7O7dSWcpSzEdeVwi84UFq8%2FIvsbAw%2FCHxQLXBJ3GOHyu1CB9R4wkhQrzs9newHVNQOx4Mr1vLAntVTZQAC5aFo7AfZAj1DCaFAldFvmgcj85xq8%2FQxb6pIFftmxbtrhCcI9XfQrzgnaqJLaoN1W7PIH9MdlZC99%2FvAEuHPD%2FB9HoNiR4j9srOFGljguAvY7yg5%2Fwcu&X-Amz-Signature=a60a441d1c3cdc52221577ec76ee4b8f1ca5758a3e3854f066f0ca45ec1191b0&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ROGE25LV%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T040848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDY4l7VMfx4vvDy5CSzcgoxIrb0JCSssQJG6RxrkJ6QyAiBM6RoSUtopwhjBRWcRjog6NTTZUADdtgMspLKp7RF4kCqIBAjl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMKa3Ta8TEjfAWOCMAKtwDRYyx6uJdfxMOFIHXHxAZpmNUBx%2FUHjNl5UHPx6e44PLYHfmzu%2FBV8YsB7pYPPKkkKlvgNMczZ0o0RZI95Q0kHg3CGAnhhLLJUKYeYXBpmXpYOZR%2B%2Fd5JZCtB3Q7PCMY5WyfuBeEZY7PXhsYVFU723a8kby7meUA1Vb%2F5nFq6F0tFcPrSDi31TOstasehbAT8e5bLoSfkpuy8tvCfxEWAkha5Igaw%2BSXkiDhrsCJ2pd123x7Czv6bTtNJ61MfrUX%2BuXzJfbFrOL%2BA76dxAdM4ZnoEUe9eT64EJ%2BFDVplsrR0QRjBAVjni6jaJ4%2FcJTcYLJuMIJPp1FBnnrZV%2F6OtWBuLQU6K6DWT0%2F5GCNYJREPIwAPX5A9BpXCuNbFyFcbdoY0hUBtCLfcqj8%2BUv9B4S%2BVtfDe5m7jZnx1PsNrShG7zAxXgJXbKpCPegiVuQ4qVp9PCAasItsaw9A4vQqaqzu%2B5BFSJ16wTalxCTe7co9rzCFLFIy8ClpvmUPyx7p4%2BhAmshXxalICJwct6WygRXqSaDwVDlgwqElRgVrecwxwu%2FGqJod4aNM%2FkwMiwOMakeMFYivJqeTNf9MHQvIEkkSaJ%2FW2XLtlff3x6UBUt9l8dVooMhcVTvNN3DmIAw5ovlvQY6pgHm8jmpGNWVMXY%2B5GJI8uKrapnyI5RpMApkksquSOJhL7AG2QvX5BGG15r64FxS3lXKFiSSsI8JobvjxvSQUL5ciMdyO0LVjIzj9eIlZZOWtufi71fvtGZ%2FfDD2S0dNs%2BaPcGcdKa0poUXo8HoVW6zaKeyXluQ8Nf9fFvkXiv%2FPnRTgxn4LVOnAFP265ODbJRd411FgIUIZiob4RdHkrGShIKuXYhHA&X-Amz-Signature=3817c047052c90b99ecead92476d212992165fc9e5b53f8555487b95a2535c56&X-Amz-SignedHeaders=host&x-id=GetObject)

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
