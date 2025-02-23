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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TLBO3D%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDZhzhXqLpNRtY3%2Bn5QJiAtyWXCSGTOLXAlgJSWX5ehngIhAIMntfq5BUAUISysYkKkv7sTOVu2EJhq6A0o49UhcfAZKv8DCBgQABoMNjM3NDIzMTgzODA1IgxCP%2Bxogo0sNDXxr%2Fsq3APa3K8S1yAlLeP6n1cxpawbQmFFNahWOAk2cLXaH64wGx4pDU147Dj5l5YW1mVsbHVej89mwZSjXpNLeeH1fmpfMXoQPNouPV6e%2Fc5AI1OEOLwYvSIwxp092ORtPegLaYNBJUXDakuMsfTkNQN8yMEMIwoLzqVsUE6YTzO0%2FS6z98O7W6V8D1QoA0hMNJGP0ydW7FL6R%2BuvYvgq90Og8F%2Brn6bfL7azPHYGXefWaCUXTe3l019RRCbkoasjXZBITu%2BNThjDscuEYfXhSMA6hxQSvgZkz4RdcLhsLDg6j9gA7P0iGeR9BA7FLfA4SM33YqEA%2FN6Y2LnEH%2FuL6MiOr%2BJ4FEgZ02G1iQTrjmcByNN5vw9STkKQ3hhQPlWNffJ7sP9kxFQMAhpYkID%2B2cYJ9rUWh8SDEXgmP6dfOCCFyUihniZ8C0FbL1TgkYFrkxTWOeXQvyFSfx%2FlDVsHc1lBQ9MRRzm%2FQlZS0ZcegLx4JFAkPfMR%2FHUZJPK9L3nv3qqUK2GylVzx2KAb5A2bzS99JKtUZlVGdhEIJarSZba%2Fn8aieXOxQOAFGFLX7RbH4dtSc2htd7fNnththOmUar2zM0nEbbGwjsIHENaJDVelNeDEkLh%2Fq5iXCrk89kQ%2FSzCL%2Buy9BjqkAZdFGAbCS%2Fgdeh1xIvHXn44TzRSjDryUkkkuP8fHh5LQnQKqOmQ2czv%2FsyNLsF9DU9LfNKUnDDy6%2BQR3OIuO3V5NMB7QiGIvDRMHEcBKNAhK%2FBs3xON%2BHOTRbZDOE5ZtgaIxRB6gR6EnwNyUzhUdr08bYewULW6MYi4rlydMCTha50NTqvKsdAl4d3AoCSGGES5pLuLlYTEN%2FLGMEMEmDDo7GRAm&X-Amz-Signature=d8e67dccb008875f7252ae09ee12647e57aafb318deab6bbe05e587807f75982&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWK3RTPZ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190159Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICqO0qZThDvYXwasH%2BdPSRTm3DaiMzyT4fim%2Bi29bRejAiAPEgf3kfJLlnxiq%2BZO82YNKebouqL2wCXpWjyYD0P1TCr%2FAwgXEAAaDDYzNzQyMzE4MzgwNSIMaWnCzlkY9RtYYLyoKtwDfvYFfnv8Z1UIsNRyxO6Y%2BFfs7ry%2FTq9ySbHGO5zrbTLKqz3yIrRwnRCkf%2F3HJXTJ6lOAcsMSt6lH8qObfsN6PF0zQ5oeGGDyR0HSvv03oH%2BJ%2F%2Fb0lMPRIiaULiyHQxSqTFbdgeR1nxVyicajcqRDDtwsDru0ZQEJBI7LASb3%2BTlja4pULJHuSL5goWeFPYUxVm1nwr2UR9Sk%2FfohFs6nCNy6Dl4yRhsoQrMPSeRi0BrO%2F7%2FNjpDNfg0uhoUC8URR77Gkzwhm1Bj57sUTfzXdUKUko0q5zhxkPvNYNambzipa9RsNQw9Guhd0ijFHhmjNqOYarR10KeIJxkA1%2BO4FBYuzvR%2FqoxN%2FPtuCHCRoVxsLBuPuS%2Fyd2vdE04CK41gQZMjLRj%2FXajQEu8Tcs88J4kzDOhkDCueyQ%2Fs6JuqtjUf09G3b%2FvThfr9rNCdbyUABDfgLffWAimIc%2F4F86b7wQrQgWs%2Bg8%2BBNltq%2FOfQfHJiv9AjSP7VOg%2FAHoikCbHd%2B%2FJlcEJE6FVve52dpaOxMMQOMYXigxaZG%2F3c6Ekk%2BAuNhuYldxdplw5MpE4hkBfamxYZ6sYAqGYN79l1SFwOCLjwRyI0Eth%2BUtEpj3ezdPYst%2FywBzDXPOb9GLLgw9NzsvQY6pgFaBIxMER%2FdntIzFPec%2BKIrdoqKIzSpaehYWg8hgxrERJFbIzQBMqrqvDaoCEMUQG88Y8JQ1huOL11zj%2F3hZsIl2dr2R5GHNgRGTWEnq5YG63VRuBHiUj100wOnaM2yYOHCvPQymWwLvJONkAzpAn%2BSIFoG8RdpnRFJgWZ5MDh25EY90ZLMYQ5l7g8EVU4ajRW65mMMXFPWELjpQYkDYb2hGG39LgMX&X-Amz-Signature=6c93ad904f588e7d0a85707e0b7f9ba40bd9f0e3e0cb45f7fc8ddf11175eba4a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
