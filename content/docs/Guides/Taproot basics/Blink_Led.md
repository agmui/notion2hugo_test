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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCSNKS5A%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD62V9NV4FHhTh95%2BbZb6HKl7ctyEfn7XSupXy4nxJiYgIgPtPbjGBw0UZ96HMiUgNdZNBCLvO8PmMhOcvTmWAMPgUqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMhBGYn01%2FDgYV9ptircA%2FKEK081IS2GMCyBTgXAcFnclMTZoXikZQJEDQNFyc813kcXvNPP5Q7ygPj2IchP05woC6Mgfj6xRtZWgmD05Ff8wd9LebA8FLD06yX7hNCJMtqGHcEzJVShZyjJVe7VHz0IISB9%2BPj808%2BOu%2FYEjC5Gvfqo1MO054%2BPgiYgxlwuP2a05Kxl2YXgRThUrIjrutT33QLQc9swHrKRI92G1yPLDqvltkbgGgztb7LsujhK%2FCfiJziBIt36fXfQb%2FbnIa%2FkOo3KAC7VaRP%2B29Pm0Px91HoU%2Fr3izo6MJq1Mbw%2F3OMh9z1v6k0CFK9F3C5Q5bOw5Sqjfzbi7cjXpW7X6KLclCR%2Fx1eZlqULhQDmmwzAFSkAeJeXaFxtf7mRb4fPRltxz60FKEpBI5UW4GDYgRlsELyH%2BztYv4Y53IGxeMo9ThSplKJExYS3mT%2FwMrvRY0IGqVdJyqRSdRMWcDLLumY%2FO9tnT6vZUcZcYI4G%2BuZS4JlOMEP%2BBEmBAThQTfwiZcS6m8XRmyz1O04pfgABdtzYr06DTjXZaGqCrEd6ujDSIkGjgX8YJyYxuyTtxTUqUFSWBS0YviQjWgseR1jUVvXgKAf6byF7otoUIYS%2BXp6Cb58NJySh6HfCTZ6OpMNHDnr4GOqUB1HRYdulDMLipGxjc1Dyxw2fUvwdrbzCDko4TwBn6UN%2FbovV8hbP2oYbbHICm%2B1%2Bjt2FbRAFStTjldO6392bCECCmbcT%2BDoAjk1SRqoZDRCJn1UoL5JSVpMFVTMCe11DqIqYL9GUZ%2FntYO7VX719peyl1KINFl4L9wae9qx575hceArqiAIkG6ezTR4Qli3zCPpNoYB5%2Fj%2B3O3H35uZGPrsgwBWHD&X-Amz-Signature=0a633f0a9aff689628a44eb4ae2b796d4b9d46be44e1f045602c29a1a83d9aec&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGOFDDYY%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAduAjaceHY0%2F7FiLu449A96%2BtiaYyWQguf0Ff1WefrBAiB35mC1dbabaRHFi2ixJ%2F4VB9H2KCW232%2FG5rXG5%2F1%2F1iqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZNfO%2F%2F2hGucDDtySKtwDngijy%2BeIRJnAnlP5lG5oe68zWLxjvslbspJ9dmN5yTwzW2Irw3CKwVKmfhtt1l7ISBAoEAdhjl%2B3ZKjl4Zj7g1td8HmBQZ7AHfiurPd5tK2j4MPUO1BWFfy%2FjEjiLBB5%2FdjiuIwKcrFhsj0D54Kh6YqzL88e02Aib%2BSr2dr6vIKWKyRslf1jceJklwHI8egt%2Bsc2tI9YT7xJ76FGLFgfkzzGekhzq9xvhCCADI1pGf%2FTg28XItFHU0TJx%2F5h20xyboe5ASVS3W7XyGT7SFCNzJWJQc6H6MZ2qHoq4v7Gw%2FfJIPY8f3auwgAXACnE2Wk4pWDBSIkbRnKD8ktG6FN1n0laTgaMHrybuUVESZZmxCcDSKZL5JZkJR7LN8RCssyaWrPeJI7kx5AotAerFTjL6IcV4EX61gICUgQN0vN5C%2B8%2F8yVmYpkjUtEphZtjncEia4gizuEc9g7zXq7Tv8zFelVy8bUJQ%2BTXV8lXbAzDHPuDx14LbgWIB9yuBV9aYHsrqrFCK5vKnYe9Ww8xNhWy%2BuNHscEue6uxWmOq7cgC1OWznwWnxeTUKChEeFe81CQHJxAlmAhr1aJwTc8AyNRukw6wrKVSIr3ZxWPp6sQX2ZLcsHyDlzXi6d8wEP4w0sOevgY6pgGveG%2BhPzyvhYKJMMYltSU2KTFvV6FxxvdBMS3k9%2BR0kWkxGb%2B0wty493JvGwHmK8i6C4J%2BfCAn44ZCoMgEIysaEjj6J0iEFGY0l8YT4V%2BpMZ%2FI21%2FrqFBSWh3hguS%2F6UqNQDLxQzMEZDPPPJrCUy5q5cybYZ%2BGugckYSlHGA6Z%2F%2BygovVEJ%2BCVwq1q64McsLWBnBs%2B0NW0ywnC%2B4pE51m755A%2BydSU&X-Amz-Signature=59aa0f0b97c5c1337fa3f1107db509b2d6d8b1f583ed4a26b21750d5d13a9ccf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
