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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJBAFI3R%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAIS%2FZD6gXKzDT7iSAdpJHHC%2Bf2tsnn6z%2BFBuagrRg8LAiAPAX7bOXPTqZnfARwMCFkkJ3x4EVlsVvzmD0B9TSIWZSr%2FAwgfEAAaDDYzNzQyMzE4MzgwNSIM7Ts5VzIEErUaMxlCKtwDcr5K4TVJsHT1CY2Ad7aht%2B%2Fd0sNzjLgv0MueEQu2czmMDR2%2Bte3BXg14f35SCwq4c2kHykcbVvftudmf9PAw1vKar1ya1v%2FZ9p2xpWbUzG2BQ8%2BCKwTguwelmBq10j%2BByfLA9p4GVszooBez3AIdzLPXKPdqaaxnWLl%2Fz4e6LiaFzgCIJA7TS8hz5sONWjkJstrUcreVLToXXmSTAgalyYAufoW2%2BCWGjJjL9Wh9gccwzYbrK4su%2BNyromAPGiobCrsZy344OvUSiFe3jTUMtJ9ckEzz3Rz8x8CLEzbp2c4UmPMeHY5zVdFYJw7WPDoMs1IA%2BmxbwvFYkNVDPuV95FbnWzYg9Gl%2B2s2lbpfbyYRvCjH0h7tfqJv%2BrRtxc3IA88MamAzLLmmsyOzDfX5x%2BYXNe6PdXzVxqKyzzimlOR8yMamFLXieMUGmXhbHoTjC5TtDaMOnNpgD1cEyt1fATp4wepZ4JjIuBrR23r59Ky64ACPItSGyX9sXOKUs4VC8wRWv3NNvwTqV1zNcV4BtyXcF4EFtwAq6fD%2FtyY7tgxrLCrt5GVWbhe8mGM2mLRF0rvhb8fY%2Bsj7e%2FHMnQvSTTbQoyB1u103D1tORRnSz3yML6wW9W8aaWMYaATUw69qqwAY6pgE4tkTl4sOaKsCPApWt4gycJGd9ypp2jH1OafaSRPdI6XQQZDq9Qtbnah9RzxkKoKH4qGDwjOFQEJuP6Wvn5IY4r0zPymgAZMQzPbDnyQPZYFbvv5TVTpBSx6waTMuUnlxzZATQygjs6D8xOkS0gpYnX1EGRcw9pPt4g%2B6q%2BUsZ692Xptz6RlYZruOA%2BMyIPzX%2BVhGxMzarOM5Zz1RbQ63F5LN67HUS&X-Amz-Signature=d377f46b861c55b3ea586c0fa865d8bbd84eab61fe64940b45cc3de3901b3296&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIQAEGHG%2F20250424%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250424T220805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDj1FALkJ5yGqRHWyfCP%2Fna%2BBjorU2x5oX3PcxwKsgMzgIhANrdY2Bwi6z%2BML3bZj%2BVBl8gZV4FIr8cCNuWgtUMD5HHKv8DCB8QABoMNjM3NDIzMTgzODA1IgyhIuTC9l%2B1vODDs5Qq3AOqzsflga2%2BYk2FrdqE8uADBwlVy2qUWx4fvbXFw3BlhjqSVYNORGAy0rWGUnTxyPVkOxRwBVk6QZgu0VQZF7YMeTlFUw9ds2JAPvjwJeSj%2FAHWov7kyC6IRIQky%2BB1ij1qaJ6UzpER4XsCZpD75AVmfAuER%2F3t4JD%2F5xSpy6uGqCdkfoNBjxQFoMdfrAWSDuyhsoZd%2BTjCboaZkq1LLlt5gkA4su5cv5q0%2BL0RD0vVOMlz1Tti0BVwE6vwajPEsLku7N7We%2FO0krV18yjRdo7Eay%2Bx0Q3D%2FTlWG1BaEvN%2BEKSI6NEPaqnLI8YqOC%2BsKT7qz4xWRac8a83Ff7YLu6w9i1Exq8keGUmtshTATUNiuFLfchwa%2Bojl9ImDzPPoSA5Qx8kS0WjfjMWoFpgca%2BxYLD%2Fxvasz3nSBiwlQlpK9Vn1S7BNUZsIEiWPpLN2NMhgbRYdl9f4KOi4U8I6nuqsRZ%2BhYf4m3fkfU%2F4sienfLrY90B5xe95IPDH51HYE2W0fTBa9uLQt7L%2FU60%2BCa81Dn8Uo5ScfK3BRclLCDvl5V%2B%2BbJ1FDgy56UiRqgqb%2BoKMF2vhcyjfs3rn5n0630SljEUnQt%2FIPYEa4rG0sNkqidAf95D6%2BUwl%2FXJLSUijDi2qrABjqkAUoiqUURKBoBH8hLm7xNOMWyOokOfilQiGcqtJCrrQbI%2FT9GMPXENGt%2BD5xjMxzq5ojjYOGr9UbAAD%2BRSiEQzwOHlXTsfcfMRQ%2FRoMl1Vm0xxZ9CCehHCNfWdbJprrN9lJ1PeIGm5bXKd61o2eu7ona78V%2Bs1blg0IOODhiZ3CbiwgZsa3aIP8R2Mm20cI%2Fo5uh8EkyIzh7zS9keIVjPIp9hs9T8&X-Amz-Signature=b28384858c630d285c29b69a6b8b9333560e86c7838b9bef74b133fb51642785&X-Amz-SignedHeaders=host&x-id=GetObject)

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
