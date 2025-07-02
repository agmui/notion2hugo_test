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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675MN3GTV%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDFw3Nafq8NgBi0XMAjhypn7htCiVEMXFBx%2FtvmPQJqogIhALPrCDPz2kUzOTvfIDitvUDNGQaWyrblOD5UHf7MZ5VeKogECOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy2Rg4DlJF3xNzsZYAq3AOHdnin3a5z6s5LbuYEAB96kn9uYHnkxCGAANYzzefaNSkcvRUAyu%2B1VoFvfDTukGVCOkI%2FxAje%2BYQ%2FzMilWT5%2Fs0KKpkW50c0G5%2BH6o7Z6BiX2dE86rHudHv6MU15F70j33KbWbgsDZAjsmUD8LicyJ5zR8MDCJfyH0l8KGj9UMPAGN6qmKpeF7K0XFyWZGIKcA6Br5EhEqbr%2FMQukrHW2WMNefv9zD%2FitMTlrzQQ9CoCeHac%2B%2FQ5pX8cifuGM%2Bkcg6rL%2BliaRsnCj52BRVtUPhdM0r2W6zBa%2BqqFwl0nHfn0H6waA0l10D7IR23T1fe%2BTrR%2FgkuQH3C2aZcwzaLpN5Kf7J%2Bowpprg2EhrmPu63uAlqptmQ277Me59ql%2FREytujb4%2FPg7%2BXPxARP7soCoXjD2LgkrAtt0BvoKa0wQ9xBMt%2B1T2ZK6toNP%2FCm2fV3EgcMNlYK4hxjmm%2BzGWIptM3gGsEV6AdJ5WAVGDg4G4DOy1bMLh0NeU0lIXo0hstGg3WUfDZmtJuE5Rx6mfKC4Y7kfYGRmWvW3VywzF%2By34AEIcOJ1DrWENhniIetmZE5qZ%2FQTCSsBYHvQAAMHZk5mxYtF6v5eHdop%2BAqr9A07o4IW6rpTcFLaovT7PbzCtnZLDBjqkAWcDopw8b5IOWRpk%2FNFdWBQfF3Gy%2B3wD0oKJaiUkd6grdbrMZHYv8BqfCVgxUgGQCPqNYUeaLoIoGpUDe6lI4sBminyd7Vd6fDMxKj8eeD6Gnk0HIK4qekmPx85FYZHEVq72uA8tEcJMedpdFL3eqRn7ltrgRoI985G2uZoKqAoy%2FB2GUQ8szlo3pflX%2F9cXllrGybGXVElve6OhqSW7V0uX8aHm&X-Amz-Signature=3c0f9a1adb34b92e2565065261c679ec5bc6835e95c930c8bd34bd25003d6a56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQJBFPUY%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T034328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCaDVKB804O0Chi1dnFtHO6bBF09LRiDuUiGPh49R8j7AIgZ6S6v6hn%2BUrmjMSlpl4tj1l04fV8OmUp0kMvxL%2Btd78qiAQI4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMvkPiBP4vxjTChYbyrcA1otqeVYX81jdUKtWi3IleUsnoISxxebug3zSSRwF7t4WjhAmAU4TyPRndStZszAs%2BUq9BztKvgizq0N5rdmEUuxhpziY2SsxScyhPW9iXe9SbmrAzgTxYS%2B13NJJG6%2BVfJp10XGJ6LyafKUW7oHdWi0%2BXlWDdM9PgLjcfwVJJi9tFMjz4sxf0ZLhz0jd3sIzJU58zfuVjQALUSqfZ%2BSpzmcRf2Iih0gb0RIpf%2BC43OROWz9o04xBNd8eDBZyj6RYqeSBcyDpMYrBX7DArxw5csOfyjBH2FluIvtdGPKWDhKYu6iXIGXWid%2FyeddZNxLmfvZZ%2BoY2UvUCeFk1lBaXplVyzAzcilf1A37hlb1bN5iSgRvSzYkJ4BadRKIOs20YP8rUPz4VAbJgCdmR%2FNzdarGtXfG3jhRSlv9KUtL9Mff6jUA8pFWO4fSx2qj8j6luzs8221Vt1TgSp1xLK4kmeoVPVbsjcsq60bk3x%2BsrasZEIjG%2FwRaf16qaA5SSRzgqelQ4q9R6urVVWD02d30JdSwFFEqz3S7BjIKSXqYAJ3CU8tRsrgBVnolsIsL5SYc0PAwdz8gTOq%2FfHXsuZes%2BWOUBzsUKXylhp7JzWUuDv9XtjQx4YnLWAaORgN%2BMJOeksMGOqUBSOewr875eNvsXz6dJue3RUXD0qrpyFGdQkYrLjJNb3l5ZPClQoZnCPF15%2Fcdy4L1cJdCqEeX9tl8US6rL7FwYsR6KmRHWblnCg%2BuZzkyK%2BP%2FveXugN0AVG9Bzbh6jaONKDtAsK436J0UF6wsEuMb2WIiU06FW%2Bs5UIaPbsfIqb2P1hjs7sJrozpuqiM9MXOjEXRd6%2Bva0W6Xa3keZJf31sf4wYf1&X-Amz-Signature=1efe4eee817314d4ffe7881041cce2a6769cd020449ca992e521a04c6be00c46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
