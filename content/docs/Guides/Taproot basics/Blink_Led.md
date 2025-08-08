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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FKS66CD%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIFleriKp2mM9dlSw%2BKqPeWCFLe0zUsV2%2F%2B4w66hOo1sqAiEAzU%2BgStQnqT5YnPnrMI1LG3oFWp%2FLTvDdz%2FYa0%2FsLAlcqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCTJWn87V9l3mX86RCrcA8DEbaHCLD4fDOvRL9Ty%2B%2FzRgVE7fAGGcOXxllybErdwAXPIz5jDRH%2FASXM1PhtfaVO6tKpdbfzcZKC4RGQTCFpJ0Nw89x%2BSHBBm7TFCSpi1NKzRyQVxPu0d%2BR%2BCBBZSJyPQzJvw1FryBHnOacR1AR0N%2BvmWVFCXPr5WmWHyrs2wmMVqJXkcmrj4Qp55pHobYLc7FvVF7%2BhYKo4Whid0Gi4agFD6pPTsAtT30IXuTIlh2c7%2Bbdbsh6Jdk0GbGlA73%2BFVDGKF%2Bp%2FQvMIe0r5dJQX%2FmyGM7O4osw%2B3qh7TK9T4GfmOHATRafirzdbpKk28s8ZPliLtDxKxz8kuA8XVevUCVuoWep4dskYRgb1KntoJcdklUwjK48qePPJ8vXl6uh9g%2F%2FzbiomHdlrssrfz4u3FLy10XBG049eApOv0VWilR3grH4XO8gswCAbm6FUyic0VL508oyW7mB9oGfvDhIgZ%2FJ7CkaoOfR7k6CetRBmt%2BTqQ29PKk8nxev3bB62h7f2noIgLjX1uplaIKFjWxy4U0oZ34k3O%2FkqvAQqtbzlEARWo8dTgo13AtB%2Bsk6Dnj%2BF7FHrkrCAafv5jwRfAuq86zC1leNxdM7JFuDRlivSC6cLW8lw2X9wjOa8iMNvH1sQGOqUBjD5t4Qg31JF7Q1Val%2F5K2oOwD0cujMo1RlN0EB8xnuGcgZj84FFuDfEidcBdEGSXMmA8tmJGhX90d94GHmdT%2BJ46pZM4VAnrsXKixnISCzyU24ao38HY6A4%2BwiheT%2FNR21AMKOpbyNwRonW3A0s%2BeLGvybF46QvuiH%2BrgKA7VJUjxlNOMY1SZ%2FZ7sIdlsvSV9y%2B%2FucIpbSt%2BvDaY781AFD%2B%2BgIaL&X-Amz-Signature=2f1e6a81604aa9a703778de6b07e910e2381dd3833f0ae49c1853810af37fe32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZI4LCDL%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T081349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQD9qZ1XphACtTa%2FWQr3mvlYKDuiUor8y8fjzrKqCFlUVwIhAMz48U0jNfHbiTYn%2BK9YRuZYnVo%2BVMf%2Bznsgn8osTW3SKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwqG%2B%2BrSsWWM27oI4cq3ANqbPnbxLwiAXGVv15IJQDn6zNjmpCimY8lYcRzNYEOynh2Y%2BzUByCbAhUoaBKHzV%2BSgWco7Hok5GfqlRCx6NyvO2Fi49QrD3%2BWKJ7%2FP1r0Bz2VpgsS%2FrL3Uo3p0IBICyPoAMqHTbd9ZJTTmV5wGw3KctTJ5sYCfykXUQYtYv%2BEptPSUBhL7fyT4G%2BQeq20FJo4zvPW%2BR98BmALAbIUemytTQfDyv7fAim%2FomMbiwttSOrWL2Rz%2FYeVKEEElpYVKdmIIOY2FgwwBHfJChGDxBIlFF9tDbkbGeEoUaPWqK5Lm4Xz9U1uUfSzUcjsakbO17hGdsa6CoxzWh4CvWCw3EfGblF5nXz0wVi%2B%2F6x%2FJLp2kHaZ%2FRGhJa59O699JI%2F5PPvgg4jHZYtQGFJBZu8rlL4AF13SjnIsUrsDs3Ey5UU0atcngt8TDxw7ldTr4or%2FUI8OdefKN5jZoqglxP3JQ4Q86le1pkVsWVemsCRGVE6L%2BvaXS5V4FKkak03l%2BZxE0ZTo9ZHiQEyjUtdOZ1YsevWY6kqb5csU2eR6MI0%2By7dVRESGk5kzITf0bZDL1SY1Fnj8WtNQcmQkQzL1FM18ncFPcHJEtfSeziSk1ZSGgSUGnIbeiiMnpOWGDHnGADDnx9bEBjqkAWmD60cCOwHzJytIiIM6b3j0vOUM3dZ24TfkdmF46KOIIOAffTrfN7ManSMrUPYe9LM8R%2FqHo2KVpIUKfOMo1RWzAWryTwv5ogOwfpoUukSC0AWWiCjoOPWqmP%2FkTESdR6AXHTuktZknVnu4OdsA9DQe1GE0MHhlBne%2BcED49iBiZTlmkcM81G1ZVEWzes5Bnhb8AtSsBLpWuTHgGF3ifDirQrTP&X-Amz-Signature=871ddfd803140ba54aabcffa95d0300b6008cb572701c39f91949649424653f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
