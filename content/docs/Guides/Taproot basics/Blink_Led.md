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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666INFBMRP%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJIMEYCIQDioGgZxj3EUE58bompctS%2BJV4pmEjXzk%2BvWjxU%2Fuq1FAIhAKn63wK4ISAz1DgfnoxfM5Z9FkSPhtKk4dqbUJnvpvlaKv8DCGkQABoMNjM3NDIzMTgzODA1Igx4ycKonGFX%2Fzfsn1wq3APXXLOvSoM61I6DX7MxjLjO1KXz4OuTF562APFxn6vP1G9RNBxsJbJ4ndPyH%2FThxqjWmHMbg14eDgcg%2Fo7RQ9aqTpvSsX89y%2Bz35SbZm0Ob2th1I8ZDJSRHOPL128JXOxdJ4Rdmba%2Bckzu0PlYDnxmvi0ks%2BULZO1c5RrPALULdtJStfdAisYqF1X6A3jeS6YTZak5kVqYymfuy3HimcKR%2FMxFxkR%2BEkjNUCIDt7ZiVrSt3q9s%2FRoxMmWLE6RDvadN5z44UaechqX1iIaNpXD975AuKohEwHo41wHbYi2osHwAIEix%2FKvuac%2FMR6Ew8q3d6c1RrkdLTyTfKz9DYhXr%2FqbnOg5Q4zk74UxNNKRBfEAkuEu%2Fx4VVAh74QfoYZTmW511RzVnq463Qtu1hLg3YPzyJAO6H5pJg9uScRyXrrlMM5h6Jx2zBxJI1rKSqV2KGMBmd9SfJu7j0NlQ1%2B%2F6scc29WwThaFTuClHkzkzLO09HWbT4DYvXeWXkkesWbMRE8bzAk%2Fyg4t3a58kx8e0Nlp3cLpfh0EktV5NFNKHRTaLQe7nu2k9OFbHrIuS6n8UPNrpFE72d8CFK7ZU4aT2CxjLfbdny%2FK30mp9Djy8jSCyxQnKQrrHHB%2FF5qmjCAgMq9BjqkAX1ljqqlc%2Fe%2F3ynpeM8Li2%2Fmg6cQGYRGa9Bm4kygDp2z7Q9tYAUbVKHSxtOi9Q3lUOF6UFV7i4Qgqlt3U560yn8uLcGqY%2BJPVwtJT%2BMlzrQyJXw1NJIm%2FkpVWtpI6mlPJ%2F7tpLqO4UZ8kI0tnyO35btGLqZfOpJD3WPugA6Ubdi9xEs4cpTQWa3ps4540n4dTx8G6%2Fndk%2BzBovVG7hikXx1qP%2Byu&X-Amz-Signature=2461252d58dc5bffb1a160125693d64fecc08170709c7a12ec1b4ed752fce303&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYXNUZVX%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T003825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEEaCXVzLXdlc3QtMiJIMEYCIQCLzzs4DJIdzne%2Bj%2BeWNukqrn39xb%2BTsE1j%2FWr3l9Y9MQIhAIEsTrIVydqIV6ZMGcQLjIrseUwHmmkF7VXqY7qMW9A0Kv8DCGkQABoMNjM3NDIzMTgzODA1IgyATeeFi%2FxZ91rZjxwq3AMkhRTVRVZKvsuAH8zAbVd1LF%2FE%2Fbklmwb7BYC4GX6J6CwehZr5XcMvKrm0vDPs6GbgmbyGCTS5BhQb0nHARhzmizFLTRh0sIksWjcl%2FKaoUm%2FtodnBN4PaP4W0yu7DsMJEWSLJLhjNTzkXcC348AHdG9De1whO2PanW%2BG%2Fv0zYc1oGorVkAxymuPjsiNiqyxIQkJsfF%2BPoX3Hw0BWZcTW9%2BOi82vftTvDOtwE8SuM0mKnPDf0XXvBVivEqyNGMGFM0Ezi1nkpziMorZAzlvqyr63RPEAMMWrqXRJuSpXVgwfu0nRIm2QT4ayUi4%2FJJs9AtQ2gLQNe2bvLNjNYAVoiURWtXOGbpAHHTXdPajZQObSds8efvggjFAJM1x3RlzFdkWHKY%2FGq%2Frs5gZz1jOPLxaAnvZsypASMbXBqezI2NHHy3SmPOMhehjAmlMnQJf6s5oQ8nwhtoXefzl0AHThxAOU7ziYhYUglb8ftaAF%2BrRWt3138oFz6Vr79AD36SW2UMd2zNScQIX566wFF%2BVPmViKgmOdI5iN8Lo4aRiuIlokj4SAo%2Fj%2FqVOLmxUfp8af2bvKha9D2p03%2BaZ%2Bpg9k7VqXDl0FLpfw5jaxGK%2FTcUcE5YHWrWUN8mZr00vDCPgcq9BjqkAQ4aaFzfTq2DXFLsqsF9SeEZ97dWtfhfhZ8gWMPP8izTp0IwHcVRadptL6J%2FAPhCh2eZmGrs%2BNLVZl5E3z6ZvY0m6Dio4X6%2Fj%2FhTREqGmUBi8KBGVj8JVX6z3yRi18iTvREtbeL7Wh6bKPLbKNkPqZVv1lGHxsX7Toz0L3JSXlyVm3uuJwkjM2Hs9EjdoQrdR6pPJmHRqYpi36A9h84Sm3KnsDAl&X-Amz-Signature=2c40eb7e42ec5d9e401969eb6f3cadcb7ae5fda6080eaca8459972195857793d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
