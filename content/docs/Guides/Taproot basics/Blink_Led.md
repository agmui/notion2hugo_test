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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWHL5RJT%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLJOb3u%2FnhNd6Kw6dsurThHb5j5eBQs3IOc2239fMGJAiBLq2hLThoy1daY3IXqPzvjrSrrT4E3j0Y%2FVXK3UiTY9Cr%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMr2YLXgJyR53CP8TRKtwD5sWOo%2FomjxnbyFI%2B8KRwsWEaaOgr7leZOFAu%2BC%2BTUbDeEEuxeEH%2BpTlW%2FDgauDjXJTC7i9J8pb%2FV7ROPCMMCERDFT7eVDu792Hvh9feObOQ6l9cejj12NDdC74D8WqHRNXLno7vaOgUS%2B6sj%2FM%2BC9hq0lifkKBpRTdpSGiVtkjLjhM9aj3Uf7kQvhUGdyO7Bk1IF4ImrP018u6Q5PwXG6vVu5cptfbG3xdTmd%2FUhgY%2FtlxUds81ZPsYGqrJ%2F8u7QvtDrLS0aISpvw3o%2FHJxvvF7tnurj3uUh2Szv0KQyTjYiRH9cwjqx%2F7Km6o4kNMDEnvgDhZXe2HS5bTDBdWYOhjAiZZj%2FC%2FMQWnid5lpdylPDPjii7zcnu5qGYEMZQ%2FYiNvoFLzltPGTJjfQBiPMdNC6UfW8IB0%2FgVrfpW75Jw8q2c%2FW9StL4Vu682V9%2BWHsHXXmrDa78FuRBDoQ7paH%2F9qHAA0FYvyk62u76EogdRi7BPUMO%2FrGNf%2FLcptnz%2BzqxWOP6fwcMBGRcDFLgMOZj5lVZs%2FyD7I3DujdWbUaS8htePwScVWPO8wq9FPtgxvRAoBhE54930zP065aOoYqKRXX5RGZeBFyofL3yqa6HOUoMRYysiVVL%2FR%2F9G1Yw4uPDvwY6pgGCW3w9iImVsm6%2BK8GkRmYnHeil1BxQqQDnzQpTgMthEtNnSOsjZpCaDkXGUcU6ZrYKJtjVzmbh9%2BWxnHaI7UiWlf2KGg66Cm07m%2FbzqKJn7Y9gM7hcUQSdYyG60RhkGPKcyBJiDbrmgdJJ3Nl%2FYZmUFwLtuFfq7mbNTRujpJ9A5OUjfQ4Ftbn4%2BLT45YpmVQnmP%2B6CMeS2vGKuCnjqfjk6MioZdZCf&X-Amz-Signature=e34ae256c05758fc5648d7a3c86099e31dba21c34eff10b0c3cdb0811fe9cc7a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666N6CP4W3%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T090749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4LApZjj6HvzJUSiQf8LnDRbTgxEWIVdvzje86R1qTfwIgPs2pHWvjnayBsMFJ40OdASGOqs938OVRMGojPyUSOsQq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDDnHIRDfFw54tr728ircA26GOXaAK8juo9OglaYCSNURTGU2eJ0%2BgxJL0J6SxO7pExBN%2FmTZAdnTTrRqWIzrF93ts7awKP%2Fe%2B7XmCGM0wBBGYYm2wp1t77jh6YkvLbAhqzOc07gtT%2F6cB5EM%2Fa0%2BKiW%2FQQqtvrEG3yiRLfn%2Fu0fTKFjltOwQ0g0qYpXWytrQqBBdJTuFJF53Q1NbzlU5BpznNnW6p50vTmvfIJYCbuKxBXSINghcKBvga5d%2FFuKwtZ7UIxnLNOBZMwLUvfRTBiGXkEqdYhYcOltsQj%2F7j7aUzTmPvVLSN5zu%2FZ5Fw4X2aM%2B2oufBSel%2Fpw%2B%2BRlDG2V9Yk24dN%2B9aYmBx1uQMrhmGHyHUSOqUryqCcFNCH7YjyX%2BYqNUNc5hRJHeY8yOmfFoKzJFcAy7SjuKSaeo3arvffjqQaHfpFQVOIdSyZsElK4vP1e87%2Fk%2Fy3CnVFC%2F5dbR2obs1y4z%2BXAK90QxvoKyirl9bS%2FVYfIG0AiZXbYoupcqKW3IQFCEwYaRY7HRyr9QPJ0ccpC0zirwjPmq6nj2cVd%2BmOQ1SK7mpK4eUZrJoTqzyYsD1vNutvGJSWTaeZyEdYsCixkJCl13vfISPz3NejczNXPLRiH7kl8py4tXAj8tGuW42RcrQpnfNMOPjw78GOqUBThgj4QpsPUoAyytZH2iUktEI%2BS1d%2B4iS95N7ihEOlVppGTtySjQI3%2F49KXv%2FOLtG6B1FH2g8RnZW0OUK%2F7gKn%2BDwAtPgukLnn5AezdRPSRDlr7IXz28pITquFKqPnu3diy9Df7vl%2B1zV%2BLL4mkm53Ffz3jac%2FsbUV8eD7BCIY5ucPYavHAPxceSrYPdQREDCj%2BbHE4dGJwMkikqruouli5f0qYPA&X-Amz-Signature=3b10a9b9538a1d8c4fb7cc5e096cb97b9861233935fdd02906073d8dea98824a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
