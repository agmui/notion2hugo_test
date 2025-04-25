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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QQC65BU%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCLQTscNgbvKbQoC52G55oLJlkDTAB1XocRjiHGmxV9HAIgKf3HR85pUmKw5Av%2B0wlk8y5hRZVnQm39FBwS0pr1VUMq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDChT6SItejF0e2GFuyrcA7nB4WIjz8bkmjaNyQqqehrKYBa1A5RGFi61FOLfKEhYvNImMlYcxjONQVhf999RJ9nkMIpNWtnFPxzGi54XGbUEmKVvL2O2qBQyE6CCMCjv%2FHWiNw3wzD7cLvXgqcQAk%2F6HkPSeV%2FfffLzUftYrFFgJWCdZe%2FTJ9YzQo37y767pwq8Y9555qPT6g3kmzBjnTrCAEWr8mqD7eLzf1KSZ%2F6ubIoQVD%2Bzecch9bjhx7cw1IiAsDBDeY2AfFks9U1ot5cqmRGCEyy6J66YgIr0RKiJG79z703a%2FQzRK8V2t6hWB%2BR%2FLvUKAfWvr0u%2Fz0P1%2Bj7kzbndrZA0GZTAa%2FD6oxm6mKcoWlytccLMxIt3PbwerBe1OxIcYCjsJzc3Diq6LlEfoBYhyOPrncR3neaoqWyOb6rbNwt99yWOMBxn7PwFyjCDXFcKfrjM0JXc1I%2BPk40Rwt20sVf06QEKgnVPDgHQjwtOBo%2FnRNTJmb1%2Fo56UlCP6vnYkU2rKRtihP50QisdHRDbRQZP4XcXTstufD1cisfbkinds7T7vijBXww4x3R%2B4hUraajw85tgHmbIGTawBRbUiMQ9B92KmnP72%2FrU1I8pdacpyCrzCTN4vWb1TjTUGWcRj%2BK7%2Fjz8ZmMJHorsAGOqUB9FSpOsHydK51B4bPFWKyNUSJT38%2BF%2FcXwAonYCNcvLEM1KJjIAXeFB0Go1Sqti706tjt8YhECBADeb2JACgjqN6o8yafc9LLicY%2F5RZqnjYTmHoIi9vD8er9WXIx%2F4rLzbxkOutT%2BZ%2BM7g7pKVHQKzPgY6jJ6IvMSxHN%2BSzmdRmpTNKisJqSdPwdG3jj0TL93e2JFUgO2FrlwyX66d4dZqJcdr3S&X-Amz-Signature=eedf66d67b6e437d80a0d2b4b55081ebaae7bcfe1ea20ff38a85aff99cd836cb&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QQBSSMO%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T170732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoYodpMPY3dKnC9ASG%2Fr6Ed%2BU4cqhaJUjJdLQBDrASDAiEA59Cme6bnxziliOKyai21RUxpyD90p%2Fv%2BJC70kw77xIsq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDI7%2BbTcZAI3K11PR0CrcA%2BGpKF0uduqKt8HWKjIbjctF4EZqtNxIw7DBioSUKt%2FXV4NWGr9zZxQAVDaV0xJHGzQuv%2Fu8qkLW13%2BfjMY5P3eYxxjFce25r6zflDkNgVyEafu2YTCcCWjcCPkeXRaoA2%2F7Y5lvqkTdDfp1Vq00aRb8mDLxBwWAhFAJqKvRHR%2FoULcMOWk3Bymmi1gwt3tX9j17l7sbPuLiHkV9vLPTYqnUJCENVJSws%2F9iUk79fkj%2BsxnemDm6Cz%2BgSrp5%2FY99U%2Fj5eyhzNt6TaOvLpI00Ryb590RTqGs3BT5SAMHcFJSfJ2RLvnZugXHiqRXjzxQDubRPaeIGzyW3hw2ciYFkpkZAgUswVK9afitRcl8GsyID2JPJNz4%2F%2BlAlThZJsCE45zyvDhj7i5ZrKNu3M73chTueU%2Fyr2G0t1y9LgBcmQ4Zbuh2bUhQqYN%2BWaUKf25mmHRefHZ5LrxdgP3B7eGNddn36uLitREmELI3ru6JIAPndgPtEqeN5IoK1XRK1i36WMHwrG2mvueHmWiBqqMpfDY5Pd%2FrAkRIVcxFsSBCJzFS3mN5UCBJVgUCZQQcREF3oz7V9AGntnxpatJ6E3Vc%2B9YN0UQIuGVBgcXRtr1thAukzUfT79cDvGYfihIVjMJzorsAGOqUBivcKdD9ZAeNC4IYpVAQFGHSan8utgNIn2RbXuvA1BH8lQSlxwk3XhIvfJC1b7W%2Bvk2W1Rh7Dm1uL7cZ3byEemSTFt3sZ1GvW9CDE87ZwKfjtlJanJyRLz5SD8p6vBww0R4F4J9qzPtyCSwuAd6MJLMf8jivhNgZhBTmfBrAxrVtum1wZnY%2BNdEeJUKUwNHEi5yaD%2Bfs9BVDYUrqFofR5fIRXAvDK&X-Amz-Signature=6f2d3ca1f69c4e2e8bc2b2d1269161bfcd7e3c246bc0b6a8d06f0f4645c72bfe&X-Amz-SignedHeaders=host&x-id=GetObject)

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
