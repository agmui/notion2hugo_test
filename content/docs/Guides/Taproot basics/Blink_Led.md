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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WE4IBZCD%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJIMEYCIQDvX7OnQTtEvS70E6oSzdnq%2Biz16vlHRQW69wEelEqg5wIhANbHBlZ92NQwTHNtM8C%2Fd95ZEwClPza%2BEthUMniR5D0ZKv8DCGYQABoMNjM3NDIzMTgzODA1IgwFunca5LDCVxKriBkq3AOyhQQ2%2BcuWbGL9nbeYPar%2BHt3ciUTZT0Q%2FyTnF2ov8YFjtGf9hze0lAcQl6FSflmeF0O1RDOYKkCKvOSkEitmcUMyZE9nqb%2F3p4KjxE1asQg3iCMf8CkCDwPZu%2F2pPnckaLsW71JFhWPRYxCPvqrXEy6MIdnPLgQ7IP1YqMuicuatZG38qcUiLjZmX9z6ql8VHHseNcAsELKQrzozNWVgZqIx5HDsrG%2F15Gua7pKzsKBq3G4bzns%2B2xYfA%2B4pETBWFLu0nGNAahWC93TTn9fSZeu7AlodMlbysaNpU7VaMLZjolZV4D%2BKI5UhzDshOCJSg6p83yw9F8NqdVUT%2BU2DHiVQaUhARX3oxtedOa91931iPb%2BPy3gEXc7yV9w%2FWdGM7yhWN1rwFyNgnIv3t8FoBCVXLNd%2Fine0pQwjra0%2BdHQdK8%2FEWF4nv4FIFn9yIHqghOQWHoZaGmgxfn9xCNCpGEG1LlO8ZAroQcj6AVmuaN%2BjynCtyYj4rONfiDx6KB%2Fd%2FdgaZ0kr0K9vSPqURM6x55UxMPZvyBUfk7Hh2erFgJjfBMVTQ3S9hwmj3axV%2BuvYJpNQB4RUp1MHfxpy8vfZIKpf3wkJiasBv4xmNRkGbtGdUiPcQScluyM%2F4VzD4uJS9BjqkAcQT9T%2FG2S%2B1HujzgOQgCmX8WdJbZPMFMUZfWYLE%2BRYubrAWO0HH1FciGQeHS4uCPW2lOHQgjx%2FnwxsYJIyC0mVzF2q9Ax%2BMZTvdMz8mrbnX1i6w4i0mKJFt9M0ZxVY6L19tXZPS8L0dwBGpzXygFIkacnN72KCODjkcWlaADvbVqDoDU8OJBaL7PKvH55bidQfpR9hEELkBpakqyLisBI3ISkMK&X-Amz-Signature=9f2511fd6bd1ab70a198ec70f33da0f89da94f8abd8bf4bb5b692db47785fd16&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W33HKTT4%2F20250206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250206T220734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE0aCXVzLXdlc3QtMiJHMEUCIQDVoAfG16CrAe8AHy4g%2FMuAsu10V7LZLMhJE1ISD%2FUB0wIgQeisOJTLsTjMIFaVMZTqDrL%2Fkyl6X15r81DUnmzO68Yq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDMx9yTgCqlhqbbgclyrcA%2BUHCPgf5N91rLceo38quHQACB%2FOQI%2BM7ZHAilf8fCbH8ackLFnkb7S%2FWkFzW0lQrY2gCaZoGG%2Bxeb5EoAYwbj5gnIZedeT1iXsfywJT%2Fw9bLP%2BbK5ZJfsgO7s3cXZkpSzCoz1wk7S7PfQ5sXUYrPUzz53jA%2FX6pr5Ld%2BqmuVGLA688ef%2FfrE8GjC9ELg5N0Ej%2B%2BbK%2FnJOoHJOvJKrIUDbxA6BpX6gVV%2FxB8vUhtS6f1dBCJTmZqOXrow6YjU1qQAUmsjmmsxWMYtR%2BMbOcFDvwvWOhM%2F%2Bo%2BI3Ou%2Fywcpp5UPBfRm%2BlYCJ6s1otBoAD5WV1gYIeiGMdVzvuabLSjCWvRMls3AmsqxmgeZHPRkfEpKfMvF0qpwqKK1pVFc%2FXV%2B6odsBZOQ4EjDQgwj9qmZBcOu1G3LaBr3FVRfjigoczbPuSEZNnAUkrgLYDk59jAhr5o0yb09mXv9nbq40ujHtxjr6ObMSThyHhWrwqHaUQL6t3CnaRaFaRAuOnwEV0YysQe7TFWAiqxunBQUQmccvSTgvM04sYYKPNgiv5C%2B4KsT8PwI3ldrqNFgAAOzfval%2FcS2FLOkU%2BBBp5Z9tX8jWzx7edroKFj%2FouIjHs%2FY8Z9BOgR%2Fe68sYk%2FLuHbMMC5lL0GOqUBehtyrfsrY6vp16AP9m4werUS7iywg2h5R0FnmfVE3cYhmPJ3vqIsKuR%2F0M0eoXsRhinNfXhzm5XMMh%2Bi8azuoR3%2F9ClJ8G0NYs%2BscOI%2BQUwpYBB1rSJJmdF2xSOWYupyyFqUWi4CghS8RwJ6JQMbja1heytwB2EEyBdx%2FdJDnVreeAIW8rSM9JwRNXrHFgYFgrjuXb%2FWU2IfXZnTYYI48oYwsDXk&X-Amz-Signature=bff39f45333e42259931c44ab057f08a47501e5f1b941597540c039ac6b7b550&X-Amz-SignedHeaders=host&x-id=GetObject)

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
