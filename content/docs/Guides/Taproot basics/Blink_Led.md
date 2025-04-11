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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGMWGEIR%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIQCi4aHTUMnJHNE5TFm%2BbWL1JiYKKybOHKW59TacQhJDDAIged1Iu%2FpjGRW87yLbGkrGvCgzoHHjGZ7zx164w9IVDogqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLMISyvQpkzAAmFMNCrcA98lmyjm11BpVlRYjlAG07XGLl4edmfnlT1Ni70sC1NRpDq0Wf4X1QqO7f8gAJeQBTZPYMcQMcVhPiO3A%2FvZFR7dvIe4FZSflMzAirwb67frk1XkPdp5Fg%2FHCgfqZXRVvd7hgZ1b4BNf6%2Fe699p6V%2F2%2FDb1tJAK8ydfYg%2B0lYsmfFgzj0PJM2WI39JdQgJXuwAQ%2F3IEZY%2Fab%2FwxKVUCHwARep3yWnbz8E5bt5fLR2DTniTt8t5y1gfNgzy2HJU4y0HavEyMSuJxmTB6FByUKbWcqEhh%2Bys12PazO5%2Bgn1UQ%2FPkQGhi%2B2VziSAM%2BjZV9xE17nUkZCB1XIJ9jcxGEnzyIzX2ta0Bwjbs0yoH3zNsQOfkS66bzHnpUFe31wkpiBn4mNCmKbShvxXj8xia7m4CUpJqlV1nGISdIjMz%2BSzhIG4Igc1qk27WkomXgOPSBhFHRtNe1ddMJjE7HFXiaO55ow4zCoBkJMU%2FyJAdBx6Ksc2Efspi6wOrxbjumP6t7u%2FhcuEpYTqRS2Sr0Gn7CzB1rKN0y8uGbRtPw9zZgrzWN6s7cw%2FSXXsvTcK5hDm3PW1aw8iOCWA5BI%2Bi00z1FOPDwN%2BMJ1OE6EYmtq6qN4XVTjZKyA0NZfP36r%2BrjiMNeS4r8GOqUBU36D4pNDmuOyHLliqBJEykvHEo3J6fizRmTDl89g3xVGOsQUO7ITI%2Fdz6X%2BHZRT4FbzFOKb7p8tOO1d2LGOu3G6pO%2BZFw5SvE%2F7jkVn9l%2F518ELgwofBmcbqloJmeOF5TKDVdC9Aa6TR%2BWfOxZ7HdMTYFOvprRjU4kQzJCzECc0xz%2BOdV3qTg37USEmmcUaVdxMyPdOh4Emcxh9jQTXJRhbceLcO&X-Amz-Signature=7420b8400b91283a086fedc29c4f70f69027ea694c2a9466f68a0a1ab9ee5249&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GKIMXCO%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T032609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDsaCXVzLXdlc3QtMiJHMEUCIHPwZ3anyHoR0orYEu7MXTlU6Yr7Rd2Wm5T%2B5oEceQ8%2BAiEA%2BCmqs58SZaZ5PC2m2Hw0FZi87L5NTk2MYC8N4Boc1K0qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIyouGAOO2ILqnRhkSrcAy%2Fk2ErVmWhX0aUAfdzLYoJkm%2FUx4kaJ8Z3bYcvoRsD83RPvGtqY%2BMyCti60klUJs%2B50G5W8G0%2Fdzgxv5g1hnoLXym9FMVdO4q%2BRBJ%2F78mU5YrDsRYMkAWX5ojHtePIkCCM%2ByTQIT30oCtg5IAnZFkSj67cw%2BqmLtZvkEcIeAfv8dkxX98E0tERi0NYEWO1S5WMYaXCPQLEVwRBEH3adzTMFoy5XNK%2FpiyOGvSZKB83%2FETA6CIN%2Bjsi692jUsplStiKAQhDeKwyeZHok8GxhPgiirkDOVAcg6ZVtHCy0U%2Bss6H%2BZZIjq5Ojf%2BtJXFcFEpl8HWKP%2FedSSfXyj%2BPGrdUWL4xRn0svq0XZhbOlscApJo%2BEw8b8mF0zbEB0keNHYTcOIk3BqRtKSVWU8JQ%2FPlhhYHmz01ChziHpUgiQGBI5%2BXRJBMR1dDwR5I3LtqXOZUPPqoTwsPqh28EF4YUBHxmCpYE7E7JWzV%2BT8sGM9VT5nFV8A%2Bugb8GzEg1pzO29AkVPrs7mISuMpqLndvPkrSuqCJ1u5vl9Twqrh4O02dR3AGnSsFfPevdaZ%2BJ3SSD6OKJLP4bypS8TEwQyj4G9eJTjfonGKe1LG1i52ZiJAUUK5DIYRCSGcfOJr27R4MOaS4r8GOqUB9eZL5DH7mdClDabFM7%2BMduXRU%2BGqBS8GvLND51DxyVEa1rnP34wOdW2dFDkvvKnCfmwq4KD6jCI89OPHT6%2Bsjzjwdt2hGfJ4Ol%2FuZM4Gqp9Oc8bB1UTiQU87MDA5fmckUhgH6o5bF%2BVZtpXCsgRsWlqzkpV%2B%2BUdfWmS8ZnemQdegmRAmTMw%2FWAB6ACadQvbKPlKpxzdgMdnWjV73RaT1MP0u5us2&X-Amz-Signature=f8242a287274faf1650a5d985215c86a0234578a5b93c9bc3fb8d7a037bbe3fc&X-Amz-SignedHeaders=host&x-id=GetObject)

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
