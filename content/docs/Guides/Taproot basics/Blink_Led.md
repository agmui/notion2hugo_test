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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662DECLPT5%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJGMEQCIDSwi30XwsOiDS%2FOKFfdgBtXf1LfFo0SeZkegWFt2yrDAiA8INp5w3qnZZ6z%2Fvsy9F7BAGgm5qicO%2BkhATLP3eIdeSqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfwarBK5FFfpK5SFDKtwDX3qFH%2B1OVhvdiYo78IBZiWXKR3rDMta1TlUPTOmouJ10xQ8wOrbWQG5eXoZx%2B4W%2FSE5sn2mp4S5SzGSjg%2BHKqaVHUVbxKlAJVtgiPvzS7ReGOpuAsQbfsKN7frBjW38cwJRrv3dQrrjDylHdsS9FAVfCyOqqBzeOCrNicQ3Kx4NCbjvSrYz16Iv2cRxgJ0QllH9R69dt1htVQMJbDNs%2FHuvGcgpzgGD5JKl5445RYTj4QNqjd%2FZCNTrPfzYQkosFdN8yYU1%2FnfxETmcCG9qWaOJvC1oARCt9PnU63NJb6aze%2BKAfIUT5gsCtO3KgH5yG8RuNe1%2BRlIXys4hnzgs7ienH3xNBLoyuVlOTID%2FbA4EgHmD%2B1fDsD0%2FlAFtZhXBN0j9VWlt0v6hte1bgvog15U9dlNcn3en26b5PaUd%2BmY2S4UfdWZsxeYrlOJuyeuNScVRCmrulYEDe5iE%2FH0FIgtEbjqcoqQ8p1V4FUxQvbRQdiXb3ChMr%2BE%2FONdtKeNRYA8V%2FzWyhP8nSbTAfGpEBXYwUL1EwHZeQ%2BWRHan9ELVaWjN8YpWNMYPdillW9BaG%2BYxmk84yZ8OX023dP99mtXNkpDdQrZox3Xx822uGxHa02DUsd%2FNV%2B08SBsZYwrL3uvwY6pgErU8neXVfvrZ7uI0gNgpHosWeT%2FpPGGrqpn56Tf0gcjKIMvlyPIecuuwNDmcPAozpthZwHp76yoaB8sTg1T%2FnEQTNPTFW7oD11jGQ%2BYXev6DImTdPF3VTSlExzakSt0ZogBfkMeXpBZ01GYKM0XV4PQWaBbqFsa5NzA2NKjIU%2B%2B8PWQuzghSlrEzhTV0n9LKFCmE4QwDCucHGgkGBEQlh0waquPkXi&X-Amz-Signature=3bf17eb37bc7e31366695e813877a4411e5f63db695f206ef36656ea26cd172c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663F7RGLCW%2F20250413%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250413T150709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIDQvs7Znyc2%2Fi%2F74oFqVnkIuQTUtGQBwT4BSrrUoKVCRAiEApFJkA0R7bkbz5ch%2Fx59Nvgkqyl0KUD6WnmJiDJxHGuoqiAQI7f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPNS0IvNlNBPFOmxDyrcAwTLn6VhT4L%2Fd0l5vH7r3xj6rj2qD2BOGBV3TMMPWZmfWdanWKMaKkPHrikAsA4oiLdpnE%2Fvr2lK1mZ9CXV2g6f0GcJ5r2WZgNZWDlK6cdAP3FuhiJyNK%2F2UeBlVUAm4xnIwAFnUF1j5VQGaIhmXJx6BMYdAcMJM8QGJU7wAkvS8a%2FR5zJ3Br5WQbMXhaJqJJsstYsCxTsl5qtKQ%2FuARyX6P7YQbnRCIjSPJBuxhbjPR1Im%2FWnmCAWCvWA%2FJs9szbuor6HDUwLOMleLqJHxiNizCAmVQLOywCD5lPKmOvNMc4A0WnzJwCV39BJujMtiopy3277eoy3FKcHmd6FuS7YyS2lJ9ICVZ%2FfL7t68KhQlaEeiLwFRQ3BNhBBDQQWr5kn%2BY76u7IagVkx46u68QkOMfaRqm49ZFp0UnODlrq5y3hct9oFUntZKRtJ%2FaqgVr%2FNDTmd3kGezw0AqcdoTAxV7rtI4LAp3LwZOXkByh2NU1yw2LVb1oRrO2kKLK%2BE1m2j0%2BaeYpk9KbY1ZaRnQAYwMAnc8n7ijo9V9nVBxQ4m%2Ff%2Bke%2FxqnMcg0B324Bp33%2BQn5Vfr0I6lrsXPhJ78DSbQYLoGpw94B8HxvCS7CSrf29RRiydVgj%2B5hAclz%2FMNS97r8GOqUBOKC38Slu1Vq7gDT%2Bl0k2umeue2wft8tMfkoGCxx%2F75YP%2FQACri7JnWaZk3seVrdEGtjCfas8O3XPgfAin658roRM6n6LOw%2FG1W%2B1w%2BpEbp2vV%2BUL2FlN%2BwefT3gMYTi%2F48K4w8d7NAKdgywWgsJCXNOrgx4qHGK%2FmXp2C%2FZr6IWG6Oi%2BS%2FF2CYFL4oS4VtWPwNkndJbvIi9%2BTcWQybKUWHWAlX9Q&X-Amz-Signature=f698eb6cd992ed886d873446d0212e3c8e813ed697b0939583edb19f08351ade&X-Amz-SignedHeaders=host&x-id=GetObject)

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
