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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ITJDYVT%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCIAbe6Xn7BFoG8EWY%2B0Mhetv2vcjLwLAA3VSdAql7hYJ3AiEA%2F1JFndLY67hDmLP0im55Jxxs2B8x%2Bl4ZR5NugapTH0Iq%2FwMINRAAGgw2Mzc0MjMxODM4MDUiDJIBY9GRAmwZ1YgXmCrcA472j3F710ZT56nubZKvWtICRuWWaybjX3rzA5TlJ2BOX4as6XFljo2HGUQyvB4m5KXUgjeb9QqRGFbHi%2FXnH6EGIlMJpNxSQ%2B2JIV52JqskdPB5c14NSrz5bQsg%2FbZ71afarepxuDL48y0mK5x5tkqFBusCpJB4CO%2BE%2Bb2ThYGeIMvlNT%2FsBOX57FR4hq837gZuPQ3DG5gkmgAFk%2FkbfnHpzWW%2B8dXiyRihMbkLAvJgUo3Ir0P4Nf6iaudWMzoalHYdPtDP2K6zlSaHi%2Bk3xc7fjROeUSqRRb3RH2wRucJvVodXFgudKTSLz%2BSdhrumWpJb%2BzT6U5wRa0vThxj1OfGEAoiYiYro%2FY6TdoUv6bn01JctX%2BC0veMsUrxWkyv%2FxeIW8sPsjOyDVg0hiY0pxYRltuLb0a%2FW1z%2Fc5hB8uBV95LyuMyX1vg7YbhkSa0Y286FiWNLd%2FcSGf7ByKNwXGVJMR%2FHKrHomm4Q%2FvaLd%2BpZU2z%2FME1wXc4p7u0VgPUcH9r6eFQcnQAF9Mm%2BpjwqQRzMOhxiRYhVcm9sxJPcV8ErzX%2BIHNAgr%2BHz%2FzErKqjCkY2wqZ%2BnXew%2FyYZBaulorUxcvPwqhzv9VtxXNj4C4OKMvaJDBwc6MfOksEHJhMOnnoMMGOqUBPMzLbVgtDZCncablDs2WHhDOeYwLqPgD%2FNsdXYnsj342OIaZ74r52%2FpjmpNe14xHmt54r5qWEw29UeIiHk8N%2FZzp3tdjc0WkBXV%2F%2FPRKe9nDoOE4QxCh2Ky4TMQGZlq6BBXRcFZuvWhXvc00LNeQejQHH71Q4SbdONqxfyjMu4FkcrEzuyBl%2BRYN0UnRwZ9qbwcaQEjPLttOsqI%2BqeunPULpqnw7&X-Amz-Signature=b6739b2bd689884498b87ab2c25d2a733ae9e92d0c0c1512372abfe1f79d1a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667IHVLSJO%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T200928Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJGMEQCIEyCeFhOOHaXZCh3ZLOv7lylySQPg5CO488jzCBm8OzjAiBiE3vdZAtdUpSebbSmT7BK3bltXlin9telYn55nnn0gir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMN%2BbxOqePtFv7v%2BXgKtwDYkRG3dtqX3x0yz%2FkZmWpfn5rUcHHxJdLlttve%2FQByR2FJspf2h%2BIu0FFnmxdLGlyPufuH304GzDjE9Ia6mgJMgjlvMjArAY3fd8KUhQPDZWC19EcBuganu79x8ewigW4iRA%2BDhvZVl%2FgZUoStm1AFGEwxlsRYg9GQWU0OppKbf4XxxMlGxYDqmdIiD9A2xBYF5pKBI9IQ8foTKPR%2BNf4B%2BEoJyhD%2FdvtGAA%2Bgd3xXih30DEygqloG1R43gbDoU1pox9auzwudnSeFaVfysImdP7T5Z76aYuJv4gWMfZhauaGeXadHCjc2vBNBK8CAidMcRKVfLuQ%2BpaWaGkogUL8doanO5pkjUQM9lekbe3oN85ugS4MBvsFTPjbkjq5dIb2CCgyqm8fil%2BO3e0mxPafvJL0YxOy6AQ%2FCjc%2BERy6g4RtdUHAa59WnofPlxV8fQM8Su4Bgw4ti%2FEQAsZXYujlbvHVdfCznr0ciB84ya5pqs8kvBN7p8E%2FKI3tbXzPM1X9FmBT%2F1f37BEIbflHzIlDZZiRYIJ5LVq1IoNKoDToKjGS3fAoHD9b8tlNj8VchlBf8PbqRHy8wvUnO0bKwI5fPIjyMLaeyVsA%2FCcULIOROLcwkKYEP9eX663h0%2B0w5uegwwY6pgFGKE5uM9lsMMffg%2F52SaDfBO4k4mswk%2B%2F0VBeuWA0dvha09Vl9yVRL%2BfHcXNGMOj806WyupJ0lQQf8lwlkkeWOScoXEcKi2yAT5M%2FexwBL10KF3gIkO2nPXO6c%2Fg2g1GbnGDCG%2Fn2B4%2BPBzUh2eci37ku%2F4zIQFubxhQosMxY%2FF%2BJV7eJJr0vv8mIo7QbyR67M4pg6D0nRM3FRDmOS0%2BkkTK%2BqNbpI&X-Amz-Signature=7c427a5160e94085f0db0ea225171496af75c44e5a4daf20ae80a15c2a702891&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
