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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W4DGSSEP%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIDUeqz3g%2BSqFsIOMVxa6DP1%2BeZd4FvEkbfHhkS4UcRx%2BAiALTLRZMJ2OnGwcp9ItWBzMS%2FvC4zTD%2Fc7CrvBqx2EavSr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMEMIk3lkaAa6kf0QHKtwDrSaT%2B8kQcM6qkqobtFw4YiUptu5euI9spYITdscjND4N1b%2BScyXPQ0pVhhk9OckFdAWaBu8vEKTEAVDaGPT%2BRSoJURrWK7wP9OwMmF9HTw%2By3AV%2BFgXISrdoalZyN2NVyMf8kGBiIIPzbxwvcRGeakKibjfQlqfYET30KTP9vN3E9hdm0WJrawWtLgSL%2BeCOxJFNHJpcNVkd0TJ%2FpWMtqRo7AoI2pktEq2xj1AX3kr88f%2BvK95XT2mw67VzegR2IKCpNv1iI5AARwgL1blzhixg2JW3T8bzk1PdfbqBOXDBDMEBxsHtrjsHGQ1RpoZuVAD71SxXcFHvw6kSqvfcWsQphbLqNJH3ukz8ShbBzWIi%2Fj51uMwDLTkVMN3QFnV0PCidd4rmRj1WZEqb%2B0Pj%2FlObfVSAmL7BRW6XXemc9s6w97Ym%2FLi4kmwdD4oM8GyfhoGW0n%2Fwao6XgEyeLt%2FwaF0GtfXeQgwKMSD8NcZhg6otHn%2FKY8kX3oTQxYdo7ohu6AQOrI1qiSrSoqOuJPZIUH5BrKYjObcfbt%2Bu8z5UZSHd3J2Ce%2BjOBhv9LBp75lcbdQ5NY8KoVMWiiEBBG9%2FVrmRWwQOS2bTx9gpH1O5fWAJBDh%2BGBRnVaUrgcTAYwkLyOvQY6pgFCLBhsSR9qLoCCth7pm8Qg2eRFUDjOQjJvraAn0dd40xh066rEogMgiiwdBBYnkZHMKuu0CdM6K4OQIKPmKw%2Be6els6b8yx7NuhmdiIPCOGQQZclasathUokWThfEPzaYvdgD1a4krL4%2F6O20KTuN%2FJiP4SwXNf3vFxVvA8WtdNiRK1lF5S9HYyY1GsxMYGEbV%2ByuqS5W9ockD0g5yaXPN2EdWoU1P&X-Amz-Signature=01243f4bc54200ee1ec60125a56274f70638ea52901e96cabe487581bf9c3ba4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWJL6UHT%2F20250205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250205T181014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJHMEUCICpV8n%2FrK%2F9AdwgG9KOpRP%2FZSD%2FQbQlv0F4lyoZxRZriAiEAobcPGPfVSpRDPJlbqhymh%2FP6IHWp8GxLsGO6jIUKeoUq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDOamold8vyYvkXXooSrcA9EHEZBr3KJCaGM6xu84gYcWciT28pkM5E%2BeBFnqC%2Bg%2FnjeXHINF%2FsXHl8cpp506N0yGhJVDmUDeYZ8QZrhHwKpL%2FnVfsib89t3eNFxGZq3hYMGvP8ZT6%2BFhIk5SuYl9xlxFCkLpR75GB%2B4lbliDQe3yacUUd5TFAn%2BGbGZshSDKeEHUwr0eIv06ul6YlwkY0RT1h8z1j1kazv%2B4l5oSTLTXvChERozhtgT9cyWQJ4hYljpdBg50BhS0o7NY22%2FuK4OZbDNy3xzxsbMOXA7GxK7z0XwLrdEqALMtSojOTyno6jlwHHZZq%2BoEHU%2FKtxqvQAzWHeFgF06a4md8lYkVWM59%2Bt7u%2Ft1ujb7q9aQsyoiiGM0ILcmsIAqVKtPcyePKRDpHpICvQLvl60bOHyLQxt4eneGUYxZMTR1ATcF3sGg0DQO4m1eswrEyXslcxCmDRaaUIWESPqydh%2FENO64lxO9ox0UlQG272wJwOcxCvk4J7yRxM62%2Ba2Q%2FFj6u%2Fh%2FDyftICSlyuxLovDs8%2FG0vcG%2F9ZcpKGIcwr8bP2oW28WuIeENdWkPA5oegkiuwTpMnpDn9kxBX4RyF1qqWc2iW9rSx4HOJjhBm%2FWFkId70p48CC2W0qZnldflsACOmMOq7jr0GOqUBwsc0RHf3yaitohMCjd%2FC78%2F3Z5boSn08UjjwrnSCmlE05qJZm173uZnLeqn04fcJQTVgfXaVK22T29VpcBYClqZS0WJQqnFFVfsGQHUpzf1N33L%2Fq7t4tq2vudoFsCH9HGjeBC1yJ70u0OwRqvamR2bmlyQ%2B6DF1bTSv7CSgAwnDtmvZ2M8GM4%2B2SKkt1uQZgZlnXksVxL4EJsTNGPTXJVr%2FVEGC&X-Amz-Signature=ec670100ade10e5fb679b7639c7dd254328a114e7f002251135e05d9db84536f&X-Amz-SignedHeaders=host&x-id=GetObject)

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
