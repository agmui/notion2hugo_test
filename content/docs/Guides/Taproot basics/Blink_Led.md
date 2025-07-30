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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WCS4FNC%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDv3R1%2BnsFco4cYERvbQVGQGWf0LLJvm01JVzTroveKngIgBDrubwgV7zRbH1kfzg6a7olW0ou4VMbS1Vwjud5GuhcqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFYzIP%2B8F8JOf7W5tyrcA0TI1WOYMUcbK%2B2JEGWIZOBTAHOVW28X7cK9fHoZdMjQUCzeo1K%2FOTMSxVG8q9OnvoBgThoUR%2FiZPNlPTg2gubiiEt0mtgSckfr1%2F8xX5giN6PGSmkPzAZZLs3y9w8cU%2BZBbhddP7mN1xS87XXjvSYVLTprW2Mjb8bCXC6pHYqaH3fzf0IQXKJqv1PqSVvvBNHTFz4BHcJDQ20DjaJxRdrsGDnUyfoe%2F30HF0%2BfaONLEse%2BjF4%2Bo5gipue0%2BWLbtPElWtfbaqZ279Atin8lY%2FSaMKiit7F96WuV%2BCk3AuJ2pYCiD%2FgjjyokVwsaUPC8RGc0n%2Bp42B7PCA8I4lKPB6agyVyUOO5GgPqCGPPSEIek%2FJXqnXTIlCiTs1GWYlHKaLzZu0L5i4E1Khjwhjqan9%2ByJeHGY8G1MD7X3HP3ugEPXflYUPBZ7Bqh1nrj73bb%2FYmdJk3ZYaSvOOcn%2BoqtkhebVe8NhiufBzVS6WN5CvxEIjfQwX8akpZ2JwgoSFbc8ffioijDGMfkLePsHz9ypFAcPQ1Ox6kQBd6zi4Rv6pjJcjM4GlgI1hfTIs9pIzMoIS5y7OJc5gDx%2FOLfySoDS9nSz%2FLNzKnwA%2FgDytkgIvcQulMV924AREbw%2BUSOpMJyiqMQGOqUB4HD%2BLsci0DY%2FUGmTcddXpkEre%2Bwsimv5xQ%2FK38k83WNgX1noGPcTlw6CNQkmWTmRST%2B6h2DhxgTrUpLT3E%2FH5AKbi1UIl5j4X0o%2F44z2pcWPro4cUb%2Ftm%2B7XMswdHH7Gt8hOXXYXdRYFQatTLIPm%2B6HdwnI%2Fo7QnKvU%2BgPi4Ug05vfM34HmPtbyuVfx%2B71vBSukTm9R6TKYy6fYPSH9WOPlHpVAT&X-Amz-Signature=dea911c81d10ff081dae6b79c03b460cd30823f47200d13646511b1bf2215e11&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666H6CKTIZ%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T161156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDE6ujgALuiexePOJTiUQjz%2FEnUw7YAbrrXgdyjcGjAXAIgbr839e1njAcsfuBbdQCMK879zXb6mAetbXBqAB68ylMqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB%2FNkMH%2Bba3rNoiu0ircAw%2FgJPeh0Zz5IHl3jvBbfzvV1tLYVYArdp1qEUxYYVKzH3n8tQJZNdIFiVHyI502WlGdl4pPYzaBgnP4OcOHHH13jLiG6zeh3SjpbROIBefl5c7FJeqBCSRA6tHPzmalgrGNN8OXCfGp%2BF2TU6kpjNcrINW2DiP2oQBEr0xcGwJtPB0ttFayU6d%2FU0TuAZOIkLi%2Fz%2Fx8bpqJhsXxFPkkxQup%2FAex0pXTi7EN5Sikyi8K%2F9cdYTBQLX8ocv04lwr8iR8jkWYBkjWlo%2BpOcd2%2F1GNauPcjLwVWyeThh2C2UATAYFTaJNMHQgksobUIUddmLkI6C6T1bVO6wEPg5wG1PoDsih6cGugzLphiOqvy6Qa4UCbyj53hulPBydm3yyNZlRa5F4AlueGVP3xbyOEa1joZEO1Yakod6rE7qigJ9LXyw8HYVaXMPWyAGLZdSe%2BOP2zugTH86UbLTOm9fg%2Baaoan%2F6z3XiAjXGVGNWJayxgua%2BLKCrR5utQGR6illGzqBVgd5dRxhsi%2FLgTVmWsikr9AxIGSepYui78ANzW%2BOugsbTqr7vHJ%2Fm%2FY5iSDgrQWl6Pgi6Fd52y7uampkr%2Fy1hgbLpzi9CE7Uz2JH0xWBBbY29FOvJnp4xTfxPXSMIejqMQGOqUBmH3VaNx4%2Be1oM3Xr9SZ8luF%2FE%2F95yrj9j9dRbeZfnksLoMla94uPh118NvKOzS8vt7H3%2FzwyecqraWld0j1B%2F%2Fz8KReVSX%2BEkpGxuZxWitAuLzTeKQWYMZF7St3DQ2RES7ftGeQmKwVLQb9InpebSJ7TFKaAisE%2BpAq4shtRJ5Vvu7d4vnKxB1O4bm2S2%2BBjEfVW%2BTJQwAJ3ecmCIyKZDjIVYeOA&X-Amz-Signature=4787263eb5de21632fa9a4829afb1dc9416eac7377806c87987aa494f3562345&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
