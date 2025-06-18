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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNMPDGGR%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9Ah8UfBrmQol7HANSCO5n996b5sjXEMU8i9hicSKF1wIgX%2FCoL1RZbGWkzaMGQuEIz1T4g0ncdUZVE5aXc9B3NzkqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDAS%2FjLJInCoP7hQ%2FircAwQhD6SLVTiWQnULm0cIZKUL8gclbERNdKwETDlWHfgUjROqAKXEaVpSP3bTrLQL6AR9%2FYw5WaL8Dqqf1AqneIW6rXcMW2Gc0SwPlCUjfwJdSL2IGJcS5oUtrQBhClqPkoCNH9HD9vaTQ5HvfhacSLox%2Ba3NtWpae8aITnlrHHzoMAg%2FzctqxR26SKaBay2klXygaICR%2B%2Bv2XypXDccvwULCeexILQOY6uIVCkqZfqfHDBzq6OKGyNw8DTq7K7rSiyVBzpa%2FADNQQC0EI7TO6AjSgMtNd7PISPdNHJg%2FB0l0NHpIkem1Shn1bFVXChxs9OzYCWHLlknwAaofQLQO5FTPddIaP6FrMkJDX8TYeVDks6jjEyR8%2FevLwsJ1ufoYLxNnOo59%2FFZk2VD%2FgAGNgX5wl1j1lOYSGBSRV5RDNfbbA2EiHx9EXbpZLpFsUo0ACLwm7KEWc6LWRjQBgT0Z6ARWa5jgQGSOABp%2FEbnAeF1bStOTX0l4AE2FqxumkCwnyuwtFJqIU7YwUsxo5KP7cwqt10bAHMvZE%2B4VYdjc1nTbdvxk1gnBJiL0aMplpCRDRjDu8OQsOQFnkFQcAeN%2BGRm%2FhV2fFafkuc3CIf4S0TebTSGYDqN07H1FdJHgMIXcycIGOqUBmslQGmWB2QBXuEu6n1i0wK6G12r3Xx5ZNtqf0IY2zZh7iHeReqHnpBXRL11WypXVxj9iy3pRhNrUWbtRrqkg2Ijgnt50E9d7%2FxHkmRr6ZHHHqcyVanwhBi7lRiUIrCdY2FWbzcTJb8SbRne6DzKt2APBdd%2BoYrQO72nlVGEfKjJ10HbcOngCqN2Qx3H0BZrjxukIjsZBUm9jXhB%2B6yW49I42c6PV&X-Amz-Signature=a6169b621b49df7d510fc1f2c7fb1f2e3bb8cb09ac5becf3fcf3f1e4644747ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RULRMHP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T091022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMweMviWVSDli4ZdqYKXZIQWsd6Zm9lCouZakOdfs4aAIhANYVZGikMuWF8Y0rotiZN%2BON2JQG6EakmQZfnFTYHhAxKogECIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsrZpPQ2C0RyXZpsoq3ANiDh93UvcKB5znj4Xoy5Q5c5LQs6iOo%2FThrnaPX6oZodpGOoBrl1Yqs5E12XqFhU68iTIjvjQY8i3jzzwGrGvell6Dn6VlfHnCcFglwILY5jO0QIAFfbLh5PHExcIrTwz8fg7Ynxr3UOLIY67rlVhxoiP9FuPPQVwYbxw%2FdRMgw3%2BrpXnhPY4LX33bEBY5uNdbP2igOUKcgbuHPo362eBCHwWXVd%2BVLw8ZHiP0WHDMPku8SMS0b5kmGb8Hp7qtdFy2%2F%2FeKtuVCbEQ32PLKxmo6gDzMbv%2ByGJ3dXKnb4vY%2BPA5MKJzsClZNX83b8USsmnnv5dMqDweuojSkdNXZ90tZhy6mHjv5eIGSQRP9eSsGkZ6EOsJ8Hw4zpDZI3%2B7xChmmD5SxwENx3RzvWmh2U%2BsUj07EDsdBTQFqYN9%2FYExiwDc4vepqS%2FOpLWHoKFAnesohXCXWD1p%2F%2Bg2uAFcml7fVyf48BYcMmGZYOgowtuH3ATaL9%2FmFCB7dtl3xVrcGFptRh0cyxg24gkCIOlc%2BV4Cq1Ppvh8ePZhwDwPNkOLBgv1z99Kby5uqd8uiDF7ZHKm0BwMzZcFsxTeU7dYk7Co2%2BBYPQYD6OBGkIIPM0K55GOWmeDYFndqxOVMtaYjD%2B1cnCBjqkAYQEK4DuonuReWWWDYiUJ1ilSwlcPqwvSs4da2EM8J2wl9mfFXHIPfFy%2FYuj6qthZyO6pzo3cymhQzGxv3V1xPgH6NNhr%2BE1xvJBiHhVXoSXP%2FYcUSNBUEHX%2Fg6Hgwiv6BO0RYLgZm8o%2B0H6xlXHm1VAARH3RSutScp6Lp7eVlZb1qSL8Il%2FNauJ9IBjaCuQ00%2FK7rGYpTZvtv5F3NoMb7ZOtjtg&X-Amz-Signature=95c53d85bd46d234c1dee9081338f958319126f9b19ad74aa42b9e0e8cc456be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
