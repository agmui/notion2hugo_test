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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466355QL5BG%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7jTGpEuxaQ3xdHxB5sxI%2BWYQTOdiNK%2FhZaMSnxhpVVQIgQn%2FF1trDp5jSB4PhjjBEa4h10mhXnUstVBaS8rQgDkIq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDN4xVwltO1E7xvP0RSrcA4pUEbVKh4y%2BUHqwogkDU9Pzi79eJ5mLWU4Pqn6ZWOJO6iE4U9w0JRc1kIpMSW45phcGle1TUppLYYpnhnPxqZyZwTiZa3k75VWLHFWR3Z8T7A9gtfcJtX8p%2BGNWqo61EpE5W2CmgHZDFxmwkJkj%2B4UaO%2FVXtwd2y69XQlAtoKvrQZa1NwwDPiOwlo7e%2BzgGG8qQF0MVYRJxRBiLo%2BPtFRzIKOGwYpducJr7h4IinQpbREgRCrRSD4qxIYQACvhoiB%2BzjKn4UfIgLiF4X%2BO%2B8BrYNDg14iZRo6J8XirS1iz8yw8gFhOQGgh8reO9wfDQTAw%2BSX4iJKnPvxjNlHlLs%2FfnoGr6w4EmKvAYzwImPGPX2QYnC1mhufDQC2Zwq9kIx4U4gRSIME7SRrfSiH2WG%2FjSon6w8bYIszIyTbh0C5KhI5vVOlOaaMIAhpdMawPBh1sMztwGRqxW4DV3PSgtLTeWYYAclYgAkj9kUdr0NCYweH03BIT%2BvDvJSjL%2B5c2suB1I8Rdnwq5SzqgKvmD08%2Bf4Hc%2BJMc5ME6UdvxdmSkZk5wJhxsFCvRClxXnLSsoDB2KY7VCwIo0jUUH6dpMBhx8VRQLLuCbvNMfWCmlGsS5Mxr0xqdH5cvKBM36sMPCOnL8GOqUBEDmtroC8Efj2PKxk%2FnfWbQYZJAUgxGtopdh52cO1cNRaKOOwNX2vKDqdb3BZr%2FYQTr%2FXCyy6LUB6zfkiT6koVelEYt9fDGKVOMGZTbHNnxTHLLUNDIrwbfx1Fl7Ddt8ZNQO6YWY0sQyHw9F6KhaF%2B7siKnhTgKp2wxguJVgxMPlWMhKdckJTIQUVkNdEyFOkWnGLqBriH%2F6abQ40fmRHpiEQrwJY&X-Amz-Signature=1b6db3cc8481a20c784f39ddf6600b3543f1e0ff5c09032541b180d5fd97efb2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5NSF4VL%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfxwyfcpn6tK1lmFi3os0HvQ%2FldeZHIedDz9mB4GFMeQIhANh72mJw3TcSmWZqxXwXOty8vPFnT6pyFnPk162NYeoUKv8DCGYQABoMNjM3NDIzMTgzODA1IgyjrY4nxFckkydKhtoq3AMrtac2R8crM4gcYtGHF%2F3hODmB2bicPy%2FHj0APLmUghQ%2BmsOpbyUAvwMaHisN58pzEN23STNnuUO6%2BjPDSfuSq90F6VZi0NTB92AvrIkmjT5EXDS1FtJFz6WULgmOTebk77iwLJjsFLBJnJfUPBjhvaGeUNSauL%2FIpzjWMt3LKxkQNIuhxgUrAAwb%2FDEHjFxOsRKg%2F8gB%2BME7tPbqkneGE%2BfcJRmbzD6gwBJqIx0QJv55TTXuie4ZcgRaSrlYNpVPM1jIXL4aoFzz1w9%2FAch3NdcbPiSGICNFh4Z72TTsbOP4UpgF%2BfPIEK9nop9PzXzx62SR%2F6%2FifRc41X6COqiWNuSy25clVrJP52TdWsP0GyUgTKcQQvrrZihOAA775LcC4yaQ9UyO%2FNfclGbYMajDUQ2j%2B7hN0ubpLZ%2Ffk1EHilJXojUWjLBI16%2FMwg50zgHXRCpn0QSGv24CJbaL1jEwzGiWJIkESeOWCzrMLXrAbo%2BY5N%2BrmV0ChY80gn9HVgKT6ElcndHm7gp4HdanucaIWEyXmMeH4k3xzzHwt4VLqSQPG9N4R9tnIhGI1ztdZCpDkJamKKb7AymZAQ97O%2B21jQd8ZCcnIrT7v9cp%2FiWRcyq8luar9L%2FjTqpHrpDC%2Fjpy%2FBjqkAcCZ0iw%2BgJPOm%2BHkj%2BEeDTy3HldYwjped4rJKTSU3Mj43uOviVaV%2BFh4wtA6B6qZHJDSXe430VE4siW6X998bNQkCo%2FpQrGDyw%2BtxRP%2FwmvRTWo9nBe5EJZJyzEHt4XUIF%2FBESApaO09R0zAl%2BjbbBISxiFRe8k5joGEneTehKjeCWO1L6bCQEJf%2FncZhJwUqASTzqjqiEYEr5GwepmZRwTJerTz&X-Amz-Signature=ed940b59e7ff36f49a76863209e6be28e8b32cf4e362669ef7d04d70e5bc41a3&X-Amz-SignedHeaders=host&x-id=GetObject)

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
