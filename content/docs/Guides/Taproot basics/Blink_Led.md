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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTP2ZSCP%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJHMEUCIEfzVZo3D4tludJqRV%2FPYUHOCDLK%2Fqvb4eJMSOKhTwSOAiEAuEVgqJfjyKATdFWcogKITgu779GZOhnRBDGpkuiY%2BzwqiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEASNXVJcycbVr75VircA%2BX4n2RXtB5FV3VUSeMZzF9CdAxzcuK3wjqckrH%2FJtzOxNXLoBHaL3KGfWcGaUP1PW5lDW%2BjxIUbxTgiM1M7S5Yw06bWgRpipjwEab2cOXkIa2GKhmwnIf0BWafUpuXopqLB5gR7oarGVQOOsey2bwZhu3K5XHKSANppz4h%2BEZdIbo8k1jguNdxA0B92RLBeUOwGqLR%2Bs6EphNyISqA7IhR4cNgRLhjrZA7YT2iieoEwKYkYEDlsP%2FniyZQdCaroxp08abjmxBTyAuBge7YuBlcfNcLumgtxnsK5UPwm4Q3g8mglL2d%2FWqElJtHW8AWiePUbyBFxwPDisMf6x7BTrgAxWSOKueRNKw0KAoRObbQqABbzBIPhCp%2B1FgHg2d2rLfggjgX4ci6YrgqKDO2Kc9v2euZSkb6UjDnNjOxNBOCPhmrjic5aELQkb9%2Bwzr4IRYyItTwYl6hlLO6tBvQN1S74Ulnj6dIDGKqVrwB8WT3gIT9zedaB5qR6mJBoO0vWG4caI3VcpXgAVR5euQ14O%2FG2yWTi0CfJieH4aSZ6i61XDVSoOLgU3LULRULXC%2BqDG0K3MXWzEuFmNVOxXQi4uPMB47BeJbSMxVTwJBCeLr4oV2QCo4HK2afG6506MIDD9cEGOqUBP2ykyQMmvDRbJGAKJFESJ2hxP48txnKLwq1m0lZysuQVH20Ht%2BmQzQuGXh2y1G8ZCj6yysxgz1dy%2BZrUVm2SyfJhqUM1xZM6RaUhVrqPxdpGuW7FgvZdKoZV6MHAeJYMMDv6X%2FWHf4R6pIGCi88aazlu54j3UMa5Wl9LYi1r9MdQ1SlqapFuxtHvr%2FIhTsfpPQDnutqxPTGEhGBj4XRruu5DlrII&X-Amz-Signature=153dd96bc003fafd6096eaf4f00e5650a80ccd298cc4c1c3e41eed3c1de32025&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSM43ONE%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T091025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECEaCXVzLXdlc3QtMiJIMEYCIQCCQC5QJyVyOCOPAYk5wlvOUI1SpDC262wbNhOD8W5wlgIhAPioUJsOTo0Xyes%2Bl6pB81kGFunfl%2BzxneAVSJqclqm2KogECOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxxb8znFC3dvJNmp7Iq3AM0krasLUfPr0ce8joO4shX4slAJPgs1DE9C4VcTgxbOF3VzFVDoIds3lapZaeZ3jVG3aBSFtU5gRp4YzPqxLsvTy8gzAlHmpguTAdrjLpF7patob3tWvS3YbIVyzvxW0vXeyl%2Fxa6WLUF54hgDzAraVvqT5oqnQ38GOnKZnWVreFX%2Fwh9xVdU42XkFB3WyGgDg%2B0JfiXaKQF0AqG%2Bb4EKdH2RQpo%2BP%2FF3kN3qIkpYVKN6jqva8uhIqGBscX9E92hj1UyakG784Zq0KBASeswI%2BWcdZwyEq4Fu4IvY3GrVPW%2BaR%2FQ4hpW2d04joggcrmZBS4DvnanQ10aSl5e%2BnfhvlI7iYfepugJdeeuKRylS0XFE4IXJUDPIiKiO0JIneFBD594BuknId3yr1oXYm5g0szhzGJNMPCFW7TPC68WUwvpse04oPkIYd2jJnXSPNQ9zg010cZrhS4ciSq6XbEnQpkXTtsX8REHsaqugzZEimptt88dzptKQo7rriLpxyb9XFgZouxKl5d%2FskxAzxxRfBgRPZNXFJsdTYzDKvRCI68y1kq0NO3oGW4BhWLYqSj1w3qspBIZHh7iFxzvj6l6Lp6d9yZ7GlxOfgiUgAVb%2FTZZSyqnEW6fkWdljmHDC%2BwvXBBjqkAbFdtECCQTVAvE8qYfH948fAMM91kjZ2W%2FmjHa%2BG5axWpSTNv%2Bq44JwswqyrW0WYtsw1W940HUyshQ5r8wZ49UNpsUid3Pp76vu%2FP841rhuQYetN55SCNt76KUymla7SzhUqcsLw5Zcr3%2F6sUnNkvSKrF6Px7UPSOw5%2Bz2v%2BP%2FwZ3tfI%2FXNGG%2F4xUawF0%2Fb45nhcb7jf4i%2FiwoCqE31W9EqdIyez&X-Amz-Signature=c215d65e11f6a8b7fe44dab0a12813da365f19bd61b5e275338e4ff6a7526bed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
