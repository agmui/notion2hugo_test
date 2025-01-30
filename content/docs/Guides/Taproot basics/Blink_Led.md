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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTBDKGMQ%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCF0JsEzZACx80FelqHiR2k0zK12X87B7pWFmgcITOlzgIhAO%2BoJuaUCDiaLdDpCGTPhKGIA%2FtcPDzCdtOK0LvfcknsKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwgYIrjNUQoEKhOdtkq3APW111Ei6ITlgcGQFyXv5jXaSzdFUbPi18VvYZGdfQ9dAkRLpUKw%2BI5BQqByj9V0wO2a2UdebV3kjdxTWHSAfDsq3Avhd4o23JPOPN3NSsQFuKb0hGrQjOrCSWBWB2Xd%2Fu7ZfQkG01RQn1FqvMvhUNW04r4uVyJ%2FYCU2SJ1afEFG9ctd0tBi4T3CVTiwJxfqf3QNNRdamlavK6Z3OtXLPRbegCmZsztrs9vjNN4sq52yLdOL1hZOrsU0q%2Bo%2B8KxGpe22yXvTtPM3sm%2B7ydCOxqvfY46Es7zM29rubXWK65gig4YO4GDVWeaCSsqc0mx9YrBNiWbRLSqwMGWccSA390wsAxTHWCdQOL7v%2F874PGMI1ZhA8qnVpZJjzZIxpwrS53ADXniPKt0tHfDIxUc2pDA%2FVqV%2Fr0nEnj%2B8CeWpIFhaoMYuACzOxm3ZEWu0LcVJTgvrA4rBmz%2BXahgI8yE585Gr6gSUIeQckbdbRHxgGWOth09K8Y%2FHz5sjXCxb1NHCyQBXsVDPKS0B0iGqIgnB4Pc3XtvtCERsqtxmPvBXPNaEdcXourS%2B6NUcWnNym2npBLr3oAEYw5wJF3mtlGwMdMBrQsmA1ywaKOytF%2B55E6KmXnZEEzreePHb6qYtDD%2B%2FO28BjqkAVLIgmUXAeG7q6qLWL6Lv4lRhKktZ2zGenWnXGspwcgKitjVRKaHF20lgj9GTrDmZ6QUVeG3SelsqXASA%2Btx4tMkDhTKOaFqiqZlPxUUkJ1GNPusxkPO8hoPqwL2PTLupWxltVFT5vBMfD%2BOR%2Frdzngxm5NrAm91R5vse45TMfwOJGY6%2BzWafAANjbxMhrbOKpE8iN6wA%2BGBnTqRUo%2BzHxHapiXi&X-Amz-Signature=849ab141fb804f6bc28d268ad0ce5a56c25b9ecbadac451cadf7bdc813326b53&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNXKF6TD%2F20250130%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250130T140717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC2SKJA9Qw4UMe3WI%2FSZNA5wiKpnRoGHsE%2Bxn0dNBDXwQIhAKbUv9HYzT3h%2BLNYVty8bJkgx3wBJ10xgddNIof7STagKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxSdWXzUGfZKIvC%2B3kq3APciINbyK%2BY9uWmx307iReqm816Uxm3DVbaUYQUGtwXAca3bK8OqU%2BIPlYE%2FpD%2FnxS5KCeDd5%2Fmj%2FILrzyRW4jzHffuPkQaHn1yL20%2BohoprRo%2F7DlqnNz%2F%2F1txfhMXHtj3yu0SAtHwopCYYrvqwlomF61t5clpvuNTBo53lUKnVp7ueE6s3VEbTwIJbwwdBTYZCD%2BGjDWBdCquUU4zsvcxF543cp9UC8VpJP%2Fs91e9Q%2Ff0GNR%2BVnkekBjpKZFXLDXsu4vAfO4HKVtcEU6lTSA50ztXhzOzyUxE2d5cC36AFj7l9V7nisWynN5S28m6%2FiWHtZUeApoks5xnOW3gfodCe6jqcWfcAaAEZytQTCMcAxedVqE6b7OMDT3%2FT98B4gcbiZbB3Q4R3yxSgwmzNZEOfgVEc700AChgIszDDtbqQXOCMQUxG15SCgP8SwfVF2mk76GOs3dNys9zNEYjMCNIDGmJb1ZpzceaW4qHF07ZUQy9O32VYQ7FF9ooUCpHfMoDbEB744ktYqi6mf%2FLm%2Fqddaj1AcYSGq71OXnKsNRlqpCt%2F%2FRnAOMKa5ivoaqsjEJfpXiNB8Q03Ec%2BamDbQjAt4qMpzSs2q9akucgblTfcaC112bueZcSR%2BNOI5TDE%2FO28BjqkAfkKQvyc3YS84kI%2FBMS7ntdJEeGP9dp%2FuhMPPgaaLe3mh%2FkQB0B2sCJk8EvXPjFuyGsfQ5csoniHiBPAqzHdsKfgAf7zObDy%2BF3giVo%2FDn1ZZHLG1W5WcQ2aLyzvgWnXDpxvDIsi5u17E3CAF5XedFlYqTLb%2F39BshDzIhkss5bfNHLlTpFs0U3dEuoWoetiVxanFT2cNdI5M%2FJqVQLOePXne%2Ftd&X-Amz-Signature=8c28e26d9b58420b1266a36bab49b398c545a431d6e2f13602c0e3c214900d4b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
