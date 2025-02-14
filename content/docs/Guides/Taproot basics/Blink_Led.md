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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VVLCFL4%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIDd75ix9IIm%2BB8FJ21Zf%2Fv4guKKEr1bq6FWzaqilUfRlAiEA6Ga%2BFFTJcp2IklMlh4b%2BuW6xnPHliCyaK0v%2BtnYdAVYq%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDAT2lGkiGVLQBZfqPCrcA3S35Y2NRWRq%2Fkp2zB3phyXaM%2Fv3oQHxe2y2xp5ybt%2F0oxjHA%2FN8foO709cmNF58TJNsdN9z2Ah7GpJPoyQQbNXDXpf71f7oW1A0FJBpxgqYSYhMo11EET4H8d%2B8cSv6l45BgoaEkoWhWLVf%2F0Z8FY7lYeEevSn6JBr1AfWfI2NgYbbtLgzXjDX%2BnTdjS3Ns6GHE%2FUmM5gUGa4%2F3r1XbsybIgc0ZYuacSp8kkikGQobdmfemHUSXCpU0mcgOjaB1UpkaWEiA6KiVCYIvEtftVneX9UfLqA%2Fckl9rGFmuGK4KLu8ryO6qw0e%2Ba65B4WiX8XiVRspuxr6dn6%2Bh8Lyg7iJzD%2FBHBMmVQZOUjyjlm%2FhmKWG%2BWJDVdSqG%2FbIH45tlLiXPkFP6mRO7cWVT6n%2FSXqcJP9bUt6J1GE%2F5%2FbC0Q%2BbU%2BdFfQh04j3p8Kpl8Tgn4NTNtpmugUhBZJgtLnX7ivW3ZbTx3QCbwJo%2F0NECHJJXTngE4ApkzZOyPRoTKraHxpiHZSUtSfDIWqayUah3W5LULnTfLdi1qXBax5RLzb5Y1kabaiBnzlGFH6Ym0GROiO8a3FqcN6OkTybwmS10A%2F9UHS5AVs80lNy9cb18zCbmE%2F3DSLfDWgiBZftZiMP36vb0GOqUBU%2FxIA9frnkjpg5ilU2n6v1q2PCMXZBRiC1o0CnJwCWfjPopt4qRko7M74%2B7QEQCiCQVfOZaHI8hQDIR1b3pjpkMoOwCePD%2B7%2B%2F27c5iBu8tr3O5lsgXzlncddO4Jm%2FiZBTVwxa2kpXcwHBXWpTeuQTLxWwiIK%2FENS%2FubscddZ%2FreUNPDMJLhQN0zNS%2Fsd7E7m0N%2FnYrg596TYb9xQVPixDPxkwVt&X-Amz-Signature=18f41ee4c4f5f0e6f5a6fd2a55d84fe3988360971d5f8786de31eb627cc06ca2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GMVKNTI%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T180956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCICQTw79n%2FIe%2B9IcR6WCGm%2FUegQMabsIOVnTSNJoDcKCAAiEAxNAYaaHNxRlftIWEwU8bQzkSAEyy5lPjlnLy%2BEFYd24q%2FwMIMxAAGgw2Mzc0MjMxODM4MDUiDEI9AiR%2F6enA8KJ%2BHCrcA45E8z%2BqKR3ksi8G%2Bvb0mupUXF8Wfc3W18f3ROp1QRs8ud5iQ4CUCQ4Eth9gEMVeabdbCU%2FgIypTrVXHNZZXo0mL%2Baj23falxsx5Lri4NvjKXa%2BUNOAww4RAA9mCzAhD%2FNk1zH32DT%2FHn0J4kX5Y87zcKyxKFelHBQzyWVISqVapsDAlDXxkobvewTEywte3wRoXhbD4fCqUxpyj0KwgtQSv1LHM%2Fn1tOwwiTg4POV9tVyVZvOLKJreOTInTpxb937t7goH06lT8H0nmhBldV%2FqbpZTXuhlNNAdhQOHGlOGj4RK1PiMWPVdzphFPFmbbwGIEqezgzY0rdhn6amEYAg8Yx7482BDZk3hEApf0kcK4Fszbr22x8zFnsgC%2FFeWomw2qZoTDAzuy23iWMH0OtMyAvSgIILAN90lxTXZ9T0tON9AT8g0ttEMOg%2BBVXzJqsMSIdAi%2Fn4vTub6sabD4adad0wvzpRyTpxC0CBrMZbkE50b%2BA3wMiivcR97IbJStB37xBFWcO%2FszEvQYNjX6Ni%2FOhllb%2B%2B9CLZiB30HLuJqxWqUOFXmOhk%2BPW6qYgW3dCtr2JDIhZ4xgAAp%2FGuiLrAFhXfOZlWLuoYlp7klTqCEEDLKiulnCIiPxLMuyMML6vb0GOqUBKX5%2F3ej%2BXjOFvbgYU%2BXTTCGAwkf3Y1j1n%2BZ45Og2Vz05aExwzDLfOQxqGWJsS4BUsLggLnmmE72oaHKf%2BXu08ejfL8%2BdZlueDMOxUbFPGoRQYTFW2HSJLJEqDJy%2B85e9jewmkMU0uI66FKNCamJOZ75F4ct8O4xTt%2Fg%2FgZKjbBBV8Dv3evLlCNAjF85cNDkVJdp1R3T3hEPIauoJUjuE%2FA6E7nDP&X-Amz-Signature=63b36ca61556ab57794c0dffd2597befb296fb89cb89e3bf7f0ca772f016099b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
