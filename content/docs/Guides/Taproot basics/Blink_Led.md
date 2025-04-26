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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3XLFDHF%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICSKeFi0xdbfrlSR8nnlr7VcziIbCCJIQA%2B3buLlA%2BaXAiA0vdOG2Hob2ntTn9AMtzsflmWe9ldhW6xs8PRFtsIE3yr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIM0OG1A8GdSz82zOl1KtwDiZJlTiv0BfhHZd1aCs8Avw%2Bjj4l%2BF9VncafzsTCeMpVRMi7G9c5nzDQdPs5nZs4f9HstqUM%2BuvpwcQcRsinLHf%2BV3vNGfwjlmD7LCbHK7kHAFNEeIW2iUg2efs5WaJXdZAvFMy%2Frsh%2BqGcFKoswUguPB%2FeXerIufSUPs5lsQpi%2F0FbrpWc27kniIOzWXEhsg001AZEYzjxJFFEXqTe%2Fz04hzlUL2PAATvOBfplI6rcQa23A%2Bv%2FROnBW8bFdSA0siIQUYa4pu49bKzEau5ej%2B0bjwAUwSMcBtiF0cT%2BjraUbdEYz3VvUBEhVjFMaEKV%2FGIhoyrh3Kk2UUHlWJUn91h79KXrGHI9a%2B%2Fj9a08tOUsKoMMBD1HWPAnk3OU62apFs22dkWwsHRjhGbX0HBR%2Bo7utjHn8QhEKExKIVpm1KjIOqCuhDhFMAIphnAUsO1B6gcbi8%2F8%2BqxHBFSCbxl%2FwJDcocmVcli321%2ByUBGKO2cCa4KkXnBWIJgVtA55kVyKEYgHRUR191qcVofu6y0dwyN%2B%2FjieJiPCBT2eJyGvy7WvMTDZ%2FH8jkp97WYsEFMbHimglQocCcFrsPTDM9oj533pmRDCsM%2BVz1DJIEmPVoPRBS4if9KXlJdeUPyKyIw3qm0wAY6pgEa0vBhcRJJ36O4GmwCktjm0g6moT9B4t%2FKOXYczDaMFGozAOWxU3QwxxU5NH92h0mIcpzb9n2B4IAcPQysDKgf4hsHmZAtMAG0OokCn2cX9g5%2FcmtQlLkytfhlIU7XUdsKUx%2BPYgcViFLHOBH4vZflcdsmIh9PWNvpxavBSzyWAWLyTb0gZM9t%2FYIDgl%2F6qoAYYqqxKid77PU0NvoTA5PdoIo5pKz%2B&X-Amz-Signature=11ff4a11b33447327adcd56c0db214ea70f42930b3244f6a21781110f3e978be&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TC4BYYKB%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T190058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNOWpt%2FczLOvSo8AAUOSm92q0vhvvYpgOrK0sbSydZbQIhAJcXyLUMHWRhPmk07IRKomVJt%2FPQhc3XCO1dW6vQSeAaKv8DCEoQABoMNjM3NDIzMTgzODA1Igw7GnpfoSl%2Fl4tkJj4q3AMa4IUPj4YuKMXWK%2BSuxA1%2BuMSA%2BVTg7ZlJ0v7EoKjJYUZ9WCsr87EyYMojzrOtUK2vedLCLvx%2BZgfSIHq8K2M%2FjFrDSVJCaE0Dwm7VwDVu%2FXZKhjdtF8P5XaSPebUhk5nAT4sArZNbX9Rx0x%2BrXDE380riMvtUASwilDEuld2I8ir7fRVa%2BZGZnsN5gJT6lNVfM7tn8Kn9loo7oErKH4d%2B%2FsF8h2JeuXXQfSAGC%2Fv6mRYVqR4Go3MEkVT6Pzz6I%2BtlT74o84S42PVWF%2Bj7RBx8xBLvcqbIiKPcD%2BnRfBSdCHErsLSgETtobNOlrP2KgyHzIZD6JN%2BI2j52TcluFRBuXrnGNnP1zfqtMyeNq1O2QKdcCajrNp%2FTFfR5e6mzm9ZX71TEczIvmiO%2B586tbgsu0rvNn828qvP3QYumlsN0KXy7RAQXsaRa7j0Ne0bDNJ61HeNsLQkUcm5eBm0%2Frl%2FakTuXBPX7DSJsXk3RluacRqVQ3Y3jd6PeJGoYt7rrzWahvlDw5KCV4cA9%2B0WhE0XyUMBffyuZGCQ9z5vPNXhSx2Pd6JKB%2FgSPNtndi8hpGsMwx4fk%2FmYDSuCmj7tm%2BhPrs3L%2FHXZ%2B%2B1iEiPhkIk4Fa%2BjXGsCCOBL5PQNagzCXqbTABjqkAdKJDeGK90%2FhRnl69SmoywhiLN8DjuEYvfL698YrzlaNL1m6Ap3qAu%2F26FDi9X7iKPEvuWzJSq0xkZ5VIoZ6%2Bq1MkILIBGgeKGrl3wM%2BvJwB2pjn34MNObMUUUhtO%2B50BfZV5OEc%2BY%2B0TSwu5p9QalCmpq2pABC81Xjvg0QWfjjXhkbbBrzNPK90bM3kump4%2B898sY5zc4VscSXEE1oP%2FHJhZvqQ&X-Amz-Signature=f30151d9f931b832c23d7a94edf5ec81c567eab63206bba243d8afef36a0dde0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
