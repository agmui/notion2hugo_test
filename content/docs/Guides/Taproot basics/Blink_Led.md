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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTTJQVQV%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7FlsjWk8yvaIwnaUI0x2IC0AKz5hPl8LJC0TKSMaVlAIgQS1D0f6mCp6PQt2%2FPT04JVmMlC9l6c2b3C3M%2Fbw4%2F0wqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCxTLNIhdR0QYO52qircA36LcskHDMH9Z0VGxLcY8Pu4nMb0Ved8IU2JE41XYAppe1GIjUHwk2wYx6sHGPvebKXu7nJGLs2Rd7rJTqdGcQB5ECAUqW4snieOsGzWVK8ycgL%2F4wVSUxIholmW4CRLGHVwjpRaPJxIwG0GEDtm6YPn9PDe925SqL1FB8%2BPPcU%2FAEMfzZhynL9HGh4oFI8s7tJK%2BXrGMWafodcsazTDbi118GzZvyijrOZAQSlZlcILiF5Xe6NPAYES4Pm64A6auYqQNao1hvRq7faSvhyII35tHrqUScVjpk4AJK8%2F9RTlTCTVSehr98DCsRguQpOJzflGLMG4PvqEkMhANc%2Fpwedv4vXXMVG7ILlUSqDrRLUWz8erVXl9hDbw3qdTO9xuOKazZ186kYJRWjDh%2BQj21KWGX50r6%2B%2Fs3V0oZwXjXk1Ys57%2BO2nS2hNPyYdxwg8kNPrspzdBxMFHQnszRW7D9FlnnoniNaRNVRpM81Z3UpTVfuf3cGb2e%2B%2BbJzQhvrVrYOXI8wubd1E1OOqW0tf1EmXt22c%2FTgA%2BDi6iC4fyW0CFYmlozlgVuNRxhkJ2M2xH3vaT3hD55r40PQLsVAt5QGkHxPrgMtJ%2FztX44Z3LQIN%2Fm%2FKaL9sHWP1eZTiJMOLstcEGOqUBZcmMyE4RoC%2BxaWzu%2BMArIW7JkLMhVXYYGad3FjLw0tHJF7nU%2FnT5VUaT%2FDPosaULvwRlq1VLDr%2BLd1u8nb4hC8DnJFerPSA4LKGXolE6uksNNoXkNBmXG9f%2FJT0tC9%2B7rFh4jolf8x%2F7nmKiBoWx8OrsaoqMFRT36A%2FTmW%2Fd61RTAc7MZTfNFMbS9SHVAcWe%2FJaF7gxxYfoD1I6QqcKEmjY6UYB4&X-Amz-Signature=7379a0ee4f16d8b914d597c98e06682c6597ddb9c9fb24061f7ac085a2236127&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PPEF2LG%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T090943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHTod6B7bZVupJtcYR5iMzxKy%2BNJJEOOejyFKgXUYL3QIhAJoFKmLSSPaWIvLzdr97nuqTfb4SjQW60kdx1kFPzOIDKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzUk9dcw7gntf1WVsQq3AOjEfSjq4Zxauso9jgw4H2BQj%2FVn9DD1jw1%2FTDj4Qvyttnvd%2FdrLqKcAJCJgs13Me%2F8jFTR3kbqc8XtZp4LNgcakL%2BneG9vm7ybZOkd6J67DgGoWNlEldAwciRmjP7Zrn8MLRLYnyfq1X2pGsE7vabuw6kwKOtZ7CAugsE5gOtiRPXBjju5DPQhEe1SbMUrK18oH%2BiWJYpZymwqfFgGcTLqFu7MZu%2BQ07TeHubmcKGn99GNe%2FdBt8TsDEwBfVHDVlDdoGQzxw0NjCq19dlZGqBUHAKSnhqAAth%2F8LPmwqfOzXRzjbpHliGu0roxroTlbUz0dYFxdhoaZdCpnXr5hp%2FsbMkhxJdibLuQZYJs5aAA8kdQxXOwt2%2BSD7bL43Yb8YVo6drN51ep2PIpxPdh4xnE%2BuUQa4YA3ZowUcUU%2B9XgDnrpJCXL8A0q7moIgsYgMp2IQemec7CDpP8EICYdJNeQYOPIAn8dpf%2FjXaexbzEtmsaF3CDXcZsNfP3QtM87QC96YfPu8aNz%2FZvdRIAahsVesxOWAc2zXJ61AU0Qu%2BrQCUk9uRgvFJF9Tz8opnPY8nsS%2F%2By627Gu4JE3gqT0uKaY8XeCAi8hMlqB8g7%2BP7kztg%2FWXlleA6doq7bhQjDO7LXBBjqkAXtwlnhuTw1BnlrPc5KR0akKZY3sKtajcdcQz9L9t7Eui%2FDLcVlEAcoPagDMA0jNI048ybzZd0YlTbQDBI52MHkc%2FlJcGF3c0EIaQ0lnJIPN1wyZd%2Bq0nP59QmPc4OwanPw1RFbFlDiq8wn9ER1V%2FVAfV6JOOXSZcWXauFiud3Xc2%2FqX0RaE4rzLA4qo908yOGALpmQ7LM6bakEScWtjL50G4zet&X-Amz-Signature=bc1b1fd4e67492cb7c74c137c24ed656f076de16d3925a0f9a89e6525f162233&X-Amz-SignedHeaders=host&x-id=GetObject)

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
