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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBBWAMV6%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF5Nxmd3d8Ll7sBlAlX7NxbfwuBUJ5jfuB9R7aA135eoAiEA3d1OGIqSmk0PPeTYpC%2FO%2B66Kiq2h3KhgLRBRlfsyBJQqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPkHkqjiUdyCHF%2Fl7CrcA4L%2BIpHZrI6ysV%2FI5cFEg7EapaFbjV9MlSLjTYfdd%2By5E8xMO2ypxhIuneDeOhl4jau5e0pZjkZ%2BhxVsyuIpr3oyidgJ%2Fd%2B2%2F5iD9heN7k%2BlOyuZUllMUzTEIHzFWGXr0VqA3FXvrj91S%2F0v7R5AtjocKadWe7CFoafx1XKErcJvAZFAsdXa7FOe58bDmzw%2BTNfSyQ%2BbzXD5Bw3LXePpY2%2BLzNwDvYc%2BQHeFZuiPMqNuc9Zgxmsw00OpLuxQ%2FAhkKbUSTh8S867BQfiZjSQFNeISbUuJEN3%2FYO%2Bm7N9pMcVDDgQFOMp9%2FRHjjh5TI%2ByC9NHVUJgc5fBPqLIzx%2BxQsViEgxVlgZQi19pwBJrSDMm69F2SxoIOCHV9X0rIOtyUFLRiultfHEFCr6O8xl%2BrqG0PY%2F5aPPkQHeFVbTv%2FUneElbpI6nOsFJrop87NURGNHFDXe%2F%2BveHAqXynmjNOsD1wIraUfsAmeieclFgCIQ%2BfEWqdn0SXDwNy4nb7%2BgtXEXoJtA%2BJgTbKftYQL1c%2FuBi6hvA79N5upC3bfAIzFq832hlOUAXoeJlSld6obirkDkv1n2JKPLZX1yAYnhqhzGGWQTACc%2FDSOpJOC79ulwQf4nK4HCXdryYEW1zR4MPCU9bwGOqUBuY7eW22SVbe4l72xfiQsfWtLvL%2FN%2B9gC29RVzwTp3UK2hVuZJRqBnw7aWXRu38r%2BHq7qTuGAcMwe8cCZoaQTChgDWFYSnUAV%2F4oMfrDyDATE9zmqUHnRYkMd4KFXhTgp9HpO%2BkeG4C30uyy7X%2BmzXZqPUIAKAkxs47wVVAtdJPxgAeJczC8Iu%2FtrvM2UvJAgllpXejN3VIBlGgHodACYhRyGWPVD&X-Amz-Signature=61e111a76e4bab8d73bcbe6509016adde322a87114d1fa988ad7af60e48c8294&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OJCL7NT%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T230104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAu58n2o9dDxdJHFyZ%2BpA23AWk%2BqewqZX%2BkW8qoKlc%2BYAiEAh98tRGdaBuiEFCKMU4YwxTMAFMxWOxLsfFdYC9yci3gqiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLtAeZw8KnHi%2FcbTuircAymfHItZxu9u7fJWNeb64N29KmYiEmIEz9WwhWWgaKE4FPFaJW%2BIy9ihzIbFyO4KgVOoF5A1RFBA7KBKlC3uUhkBCqhng7lhf6mUWuqhK8MUlm4fGk3ly%2FSpcjxgoIFlxX9kP8nrroxRSUFPj9eoM7LLbAWuohC8EPP2IqhvFrn5AGDkN7BXoPfL9gaOA5nQMkxHRjLTmm71Yk6K0v6L7tY5skkTig3BFBJcBtwFsxLrdc0BE1EDSIXF%2BwqMagQZZu5wix7gU%2FAGgRRl3XeqJjocyaTrhvtV1yJqvaO84zn4ADFYa1t0KPI2v4QS2i%2BJllXA8uS1gqJTQXd5SUz2rMuUdObm1PwGmDuf42BZLMpN7I14SjCAe3VsppNeoYErJbYU6zzN4K3LRgrnRwul4YlCB2ZJv4M2CdjbCY0qGMMlPwU98rssjbqeFbLb8zyLoSRALEdCclJBhia6bituC0fHhBnuuKPAySHrk8WNAJXIrAjrz%2F4uWXI0euRI4vm2wWEL0lcOzUsWkx5tf6Ql1OX0XR30pXFQEDLje528QJtIWmqEItybcEeNPQmXbvBWfecB4QLUipiJD7PJnwAqBpfzLZb3ZnNqEF8bq9nrDI2qO843qlT%2FQmHF2%2B5dMPKU9bwGOqUBdFo3le3UGDEuNcVrMxDaTRrKEGm1jGVjvGLbYNQuDRzCFPnf1nIGJBxKTDB03AOrejgLIfABGIEuacr5EDfJpfhIxzejkYq80tCY7qTfEULR6jYtItnDr5zEa6QC%2BaH64CP8Jg4U4HUpNpfRgj4xn4WTzAj4YIeuJeIgx4lKRfhox5%2BY%2Fgv2Y3OeaW6lOOhXj8PvXVpeaTMhFETYQ9CT2PCAaiXu&X-Amz-Signature=8ae3cab2c40c54065db3ae7687ddcce450369aefd4454054f5de220147906b2e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
