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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z42Y3EP4%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJGMEQCIFvQUmtcUdF5b1k8vjgbQcjayZqC7B4mo8xxgag38qYMAiByNTznoMIE5fn6I83DubZi1gdzOQJV5lcCEARf2mXjgyr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMgzEPtd7sAiN6Uj5iKtwD8bwq7DryO3LLPGDUZuVUdAmSfm4o1nAm4VCKJ3mRTx41bBZQUUKp7bJRXARp6r58dkdjFzSveAkvcHWG3uXjXSslTyLs47wlLbDoncaH1Xr7f7M7pu8AuUgOus1o8kZhAEQR%2BkkRhJGS8xyScj0huCpiICeZEkRhaM4vWjw6AvqTMeCYdZTMkj%2Fp8%2F5Rav99niYR%2FxIeElfJZLDPUMR6alG4sysAyl3ocCZo26xrBg8YFnO3b6pj7EZRkU8yiChxk0YGCXH%2BOX6S%2FvHsHUmgJ9inL0p1UYFPdfQxVQvhTfwYlKPSvbtNvb%2BcqSxLqVUFxNYE%2F5G8cz%2FetpiEZf3qOU3%2FOI%2FTFvdDJ%2FUjqMZGqh%2BV9sc9a5Iy0gHHyKD4zLyqNZ22JrcKf9tAXOTz6XpWXxHitysECG3KZs8028eYhXYayYk7F8D%2B4MgZ8Pld4Hp6NlxWNANHbfAy0bJImJobJILh8o0Ge1m4HUOOsrZsFjVr%2BLnRzkO6yA4nxf%2FVn3Cv%2Be5qTlQAUT7pAObTVumtBp3dt2Cobr9SQ7nmI51z126%2B2wuj9otq4IhwSk9GGlkCLWzmYPn6YIKGmPf0AMUwJYQgm7JlwyGAXCq7%2BjGhfPst%2BATX9rlCiO4blwkwvuCvvgY6pgHIcS4QScGc5Nm3ZqFsAcXrKbcd5VQzIL%2B%2B0w1S7qOgT8t%2Btt3Tbefyc6fs9wO4%2BuDaBpAg8HtXb46k%2B1Vwv9GZ0hWfvJbEWcK%2F1JA7DoYDUTnWHmATsQCLe7mPxfkeq49pIohl3NfjeqlqL1iYKILb2I2B2sz6Va0c7Uv3BIoPuVm9XHzkT%2FigM3SDWhiYzc1fd7arGgG9SnQUBh%2Bc08QZJJ2cjE8t&X-Amz-Signature=d1d60511f4579dad7ef53cca0cabe286b719819e96862d296bea386957023aee&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMHXC62F%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T090146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQD0DTduGA2aME2rkGKJr4vq8MB2uyZkdnuWvbCkj6sTpgIhAK%2B85VTOq0sPUmF9bCsbECAcs4FooG1F3Qq82Tg%2FYHQdKv8DCFgQABoMNjM3NDIzMTgzODA1Igyw0dpLpewXKIhLfrMq3AMM5pFdyGbnazOHsM0j9Y5RVGkDEY43RAxZ5GaN0U6EbU1bk7MK6c409aUR5rpC9dnC5uWuu7M95OXCuTXtMvYemKcUXRp%2BZA8BZ6jRUmVEmVWl8MGzDaRnI2AZ%2FEISjpJySKHk2dGGIJDeev0cpLVLtvjfu1cy4fdkvlq8MXnQcdEgNOPRKSHwcjCLEgoKY%2F1clGnt2moYxRSwdLWZQGRmJirGG9bz6BF1%2B1f88u1kDxdUjwM0f7DYVjieU1h%2FKmF%2BiI7Gsz4s6ZHP3ByCEHl0I1oXZt%2BYQXWYO39nMINuOb%2F%2BTS0j0Ed8h5pSOqGrImAKTl1AmaemTAhhRpToqpChMVtyu46lTKcMtA8yvEcalts4TBvOzfDOh82%2Fuvcda%2BtEajF6rOnUMj7BCTEtL4eOHC7m589ts6lljKig2Z%2BQebGu7ClEnqvU7AEmw5vdHmp1lcasg1lEqst30VgKXZd0mJHC83zum1zcjhhe6TzFWg%2FSsa%2BcI5meq8fE82nxnLMkYnL%2FQ2xq%2FLw8uqnWTsDqztOJVwcs0tXv1kIXlbzY67ZCIJoJwHPySezFG%2FdSEcR6X%2Br0utKVwr41DoAB07xDE95cKGDP2ZzbMmMuv%2FkoUm8ziiTPnItg2ZLOpzCl4K%2B%2BBjqkAcRiVWkZ3itXMIjsh5%2FuliOE%2BCBQo22FfoLBov%2FNQTdmOiSVThRPx6%2BaRnoWH8OM756kNYxoLs1yxCXC8Dl7kIkYmPzAw1s5aJvpcaRUv8EzMriYANd9fP85uJT8a8N7qRcEiaEddbxfcInSAXU%2FoQEDSDG%2FNBFRINwhUCe3yCWU6xn%2BWRAKDwPhpTYmmJuspm%2F%2FmQqp4ckAqA1Eb02mFnj5vCY3&X-Amz-Signature=f1b43682169a32ec3f8b03fcb20868e0f80b8d7933d2329699ba9139106142b9&X-Amz-SignedHeaders=host&x-id=GetObject)

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
