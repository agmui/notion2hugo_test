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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSCZ5COB%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T051956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIBTHASDxOKulZ7Y8E8k3ZuJcB1NHhOgSTNr0cECr4l%2FFAiEA8Y7Rmtxm3BXvSRAngP%2Bs84pme5gVtUFgwCg4LJJpUZUqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKfp6Zsbu3wjJ8OkRyrcA0gaAdqbwF2nVjRaa0kzukp0iQjuzg4d4q9zp%2FmNtawjp%2FzDBPs%2FJmcWPN8VFkONUruZozPhW88Gfrdww8OXcjtuLzpElngDlb8RPj30QHlq5au8VDSOeE3llplwlSy%2BMwydo4ivU55AngdkcAzCHiBk8HCcP5ZaugUSLG5aOi01jwXF8OxuUh7%2F3Q2VTVkDnxaZDwbSk%2FgpSMOWFhudVdniYscQaVJO6Ikd3yjHPVXjg1z2lJKLF%2B32w2afhC7qDoVeE5tXh8D372mw8HnBm3Q3eJvGqIXoCAhBAsLv%2BaaLDEL663n3PRB4V2HSA58BGc9JkJw%2FoJ0h5niClYCo5OUOWfS6tE6P7VdbujvL3%2BJ71d1zDk0yWTcpQ4easI6tiadbXB5%2BY0bZ7JbwH3fsdpRlI1utH4Di%2FAutfrwQpwzNmdg25ulfG1Z1W3n1ea9y7%2F9VnH7hY7Lhrmez%2FACVNQ5pnAT25I2h0NY3%2BGhYvmsSkd0h%2FCWm32h9sJEasUtwMZDo5fC7PfVE0RqoCctTPFtj9JYGU6yrcOKa%2BxCBpEzbVUARqnS3uhsWIrqVbw0UXVG7E6FDgtcTYKR2z8l%2BYmgz%2Ftexm97eHCW55trPIwm1k2ATQL80woTQxUG5MOLs0MQGOqUBmwIzLcZl1trJyOl9iaIcxuefZVq68c9F0PJN8%2By7AH4CBcQzR2bwouovomqUP9YIpDcpJLn5gmJtcFrcgz%2Bcyq8VHEc%2FkWB6EGspB8Bl3QhqeJUoOC73MwM8vikGcYsCC53S5faQFIzcZJ%2B8exm2w%2BE6VAoDmhsr3JPjncCAjorTP0rOpBs9yGXexAfBM7jkYqvxkOHpmuHUyhyUHn48Anmb61sf&X-Amz-Signature=3d53d541a162e9a8967c795924784f145bd933e4e4f6dad79c6f5232a0f47ac7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YV72UVJ6%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T051957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDM8IbH2hp1p2gprD%2Ff%2FKBnMfK%2Bg5B3vxRXGb4Lr35%2BYgIhAIPG54nnooNKR4e7mtHqxCuanEH1OWe3xlS4EgXmmGfmKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgybsRqucxdPe91vIk0q3ANncqwfd6pRIHvkhYwbbBtLYY80fkA45O499ncmPYW7kTTcWMFpK%2B04SaC9sG89NOxPRuc6PUZHUdnUOFPWldg%2FKVnAmrQLiL0KfR89C18SU4O%2BN%2FAd0XfUQizOs7L36S%2BFgx63yJfgNaBfQmGgCd7VEIMvyew4EdfbBl0%2BsVUHwQNmh6D4BRW9FayVcGPZlUHjcj3lKr0lCz7pFjADVncx2ByPY0AZNxusNif5agGbwiEP8z3jFbt5F%2FEL9zlEHU3xnEmtQ2lmgGvyWiTfMKNTpBZQVLsRvieEYEhhiWP5fhVOnGUpsX5grxektScWQq8D67IxP6y98FJzprwgoZKN8TcXIFMBE%2FBWzVQcDLF3Vm2E2SHCOADdZDzlMX9ZW4tTMHpiM%2BK71N1oxwZmhvxSWKejwY5%2Br4lF6RhNMxY2vQo4XS0c7ep60GR1nrEnQ%2BusZHvL6sz1K%2FL0zckG354Lv4wWskp%2FeP60Ycy4gso6I31spbITnQfBEB1TNknIO4DPXUmCYQEUWydKjmwWizfMpMWkhFdIp36g1HEBeRABxSS8hfL%2BpQCyY%2FxTHCi4ynQxy9sDNoeNh7o%2BW78GKLV4keDEGdJkdBvT2n8zIqwgMSQXyOkUM2QBueSdLjC47NDEBjqkAfm5gqHzgc%2BneAnjJeYU0EuNV1jRXo9snpjlha%2FgvJi6QokwCfGWR8IW6LstPtUeJcaAdqXDZkalgPEt9TOGsuSMIS28zR%2Bapyasl9C%2FxFguXd62AB9H4CXPByh7PgBzeMkdygz%2Bk9whoMeFRvWrJdqeX%2BRvIhTUQvMfxYNavEjU5eGK%2BYmRkXdWmDfyH6ljUH%2BnkdayGpeJMXcnmBqruVOIZ927&X-Amz-Signature=a7ffb17b8800147dbdbcc6bc8e4a8471dffa8bf5b7bc3e81e31301475c37c41d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
