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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMVB4RDK%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJIMEYCIQDdI4AmqahZILW2bAZekkoZfyJq6%2BL2bmQOzXgSFDPWcgIhAPKGjvgwR2agsgfTtAgKh9bCJO1o7%2BL1OIzPWkpN2UFiKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyjYAq%2FDv7kdOOrQcwq3AN160%2BVN4H6Mae54yLb0bMfz5nUj94a6cup0qr8tNBNhcog22RzOxNJ2bx8BN88SHwNmrVVzU5K5blz7e%2F3aGzq18fxnKDL5G5ANa4rx8bXUdWU8Pmn5Ub7mdvLmFlgLwTsVPJEq%2B9918QiF%2B491ZrClG3pFRH1g4N%2BN49rjHtyS7N502cbNLwFUuhxpF2cnf1JaJ0VXueGAdUIRGxPedcOeNtEaz4wpQUD20aKNriLL8X81e1PaPiqOSp8tWhIpavbiLyf9goX36H7REPX2ZGm1YU76J22P8il%2BrE3zojJJFQcDS6W3XXjv5txvZx8mE6SjQEg4m4THzJUUb4JXWT5TdV2fyQaffR6KukAUrg377W835RUYlUfzNkEEnza2bq3qDrlYT6E8y7aSC%2F7EFyi4HAorEXBDL%2BDQ%2BDbJA%2FSF8dcIWuGRDICdJSUYch8iuwLqynpYxu9Zi2BZadY9%2FJBFJaeQpXnvR4OBrOj3jKuRup8NfRzI0cXTkVywbm3x2o6RAwLnt%2FS2jHSnDTt2gI5yUWqn9qQWoaXQdaCZyzY82%2Bf2tsxIN4pA2qTrbp3Llhi252z03FYw%2FejGH9JaQe6soPAEAN%2BdKk%2BltU%2FceAm%2Fm9kWqnMn71%2Bj8KDtjCXzf%2B%2BBjqkAcBt9gYIZ1BYNOduO29iUZady6y6TvucjaEqspYjUxlZK6M0HDcd6un31COXeBR0MIEuorvlz1EsA40mhpHd9kjf6W5LfTswsF0Y7wrngvArYBcM4L7XUfm8Y%2F9djvIW3i23X7ThRTcjwsUY%2BW5gz4LGm3D1Mb0%2FXThAVSbANGexIlCCo5KbaZuDtRtILaZ5UsTvjjWUDOn1oJ9chguxUGNNjQmN&X-Amz-Signature=55d54a191785b6751200045baef2a66c803778245a77efb21b80c67e6b31972f&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YBS5RQX%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T131355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIGfcUpHKdfNkTICmiKuHelQNBtiOG59UpGyhPqtkIJ4yAiEAxAOs9tKebp77uTZVYqEO4eK5C8KHdJWJEbOpqgYBp4wqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLfVChLUkLDsbLqKPSrcA2FvqRB1cJynJbV8iVzPQnQ9zB6SU8%2BOn57bTdVTI25%2Be8UgvgnjhJ%2B98hel%2FJYzWrb6vh9YdWrGQ3%2BMekm3OEaTGWKHMpTgTFgvq9HFA9XZluUw1DwOmvFQRgzl8kHKcpo7Vk%2Baebz%2F5rvoqCjcX%2BX2qsv%2Fv9f6kvzZDNBxBfx3WNtc1paXsdy12xg82mXbp0s5BUy5hF92X7X2jKXiPhzwqVLjYsY2cl8krXEcb5CNWq0X%2FOtCeaiCCwB2x4fk5hZKq9H9OnmdaPbdpl%2BwX7zgzt3fpCi%2B2QA6KZaHqiSfjtGPY0xkJHjxrnvb5WLn76zIDtT9ncq0ONk%2BfhOxXU%2FYpmnUTZMxysBTbgDPgWm6vxDPyKANUYcBUxcw6sI8LDE5kZ0zAHkNJg14XI4nUSi08jAl0h4qi1uDsok46T86cQumL00CPFNDinrZmgwhzMLko%2BA9M6zGZf%2BGJuLhSBKea8tVbhX%2BsDYi6oEoGZQmJ1diTSf6V74y7oQ6b%2Fg7oU0uaJ1gN0JEGd1WYDMTi3W5kk6%2FD0QVF3oFCeTPNwHw%2FO%2FxeHM5vnmAV936c6%2FIenJErMlzv1ggIQpHiTeVFVJKdqFdSroTSlaGfQQBW2ym81luedsoMQpaAasPMJ%2FM%2F74GOqUBuA11xkmGK5s7lTkWjLJvkyE0hubj1nM3xQ%2FqqpMXQA4mPs4CBD%2FUgcPjDmRAc%2BphQvbECP12y2ShbF1AH1MN48OzLgRagq2QCiRgO8RiEI33ckoI1k3o79%2BteaD%2FU3qihePyR2sz0OtHi0DvnYfF6w%2FjsDNea%2BeELp0kH7xrQ9tMm0kMHcL5tW1SznitLMpPONpGCxO5WJJIKvTR38HcAPs4OgDa&X-Amz-Signature=f63539b215429c5b558f161cf7d7e0d991185fa25a786b16b23b251e99db961a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
