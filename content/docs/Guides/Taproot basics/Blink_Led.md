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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664P2AIIGK%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDHVVaSmasalNICDbFxkN6Ug%2FyL2DABe%2BcwJoXG5TOIwIgPDoJeXlgoZXm6eDfacFQR8kB7oMuWI76kQi%2FXUx3La4q%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDKmcI%2FvPPDLbUwT96yrcA1Bb9hZPRnSqa4vHcNmNR%2FoIhhMh8YtQAZSxhi7m95HvfEuhHDUDCGOQXA9iBO5Qv0zMBujH9wAvnr%2FwhJkzkWPTTjP9nIsP2ltLpIglY4lVK6G20BslTBIK66GI%2B0zksnAokVAW6eJDrN2XCidxnusAnKLC0aDYJV%2BjS1KYC2XZjO%2FKkM5ZO6Cc3GbwkJurF%2FiwjeS1paFyTfMWLpQXrSc%2Fro9wTVkeFAJzld8Tz7Zpwx%2BzgTQDaVAyLbri%2BBTCdWQ3uDuRfQ0vnscEWca5vbiBkBVnqFu5mJKp42Y3%2F9KEFoUDYt3zT91K0terOrtWHEB3QdKh5PoUKvHQwZVpgp9aY%2BKFg%2BvUZPQShqZXbfKFDazmJ40dKUtIEFmoYOELuKahct1a%2F9dbjLFhyHWu9wKf7g28lRhjRpYdp%2FfEy5%2Bof4udlJLe2rpRXLZw4b%2FFmeHUtfkHsxjvKKMasdIgixwroN4zOM0vJeG6vHgJdg94tRi7e3ptmLpAGH2olNaGL%2BYriPdmJNJf1C1qU3AhrXl4cKZU8UYYydmj59mTdb%2FU%2FRfRMlZqqrYqpqu2D8dddF%2B7Vz1F9LoBq4fif%2FDUOiy0Fou0qhm2g5ppxeHeGGDvoqdmRyrKCxLymLxGMIrRz78GOqUBAV9Zduy%2Fad9Z6OFe8pmCv7s0Hm%2BTs5rDoXL9ium7Q7%2Bxb8uZHLdTLQ41DUNamo1f0hyMVU%2Bgk11QmtOLwhf55L8ui2d62qX6rYsfmrDatGoflqdK2DfnedqN713sFTnVNoBfuXys7GpCYhXB2u5GBmaxUVQJrKEVzb0ZKIGW6FtbJdMsm5vV28OzaDSaplmiKvNKAV%2BDGf8I4UMXCKfELycB4Cpo&X-Amz-Signature=729d5fe152c475032227062f0c3d1d4e011d7807345f4f02d6e3a8ee460093c5&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIAQQG43%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T150834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBMRzQ0%2FxJtRN1P%2BN1RVM7M7MuYw6%2BC9ZHiZQt9RuqytAiEA7MzBxnj%2BzdWOhML2MCRUspA9Wul%2BiArDXYLyhP2JbFUq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDK4KYfKX5jyPBz0VUyrcAxQ3PUgTLqHzA7VAEBxsQ%2BxUy86sQGYv%2FlwSUxYXrxnzFdFFUqu3qprjP6C8CcL5JycIlmRC4SZVH6I02zePy%2F1kA6AFE6gb6QCpAtGD1KpdupNsJAlZ9wsadmP0WNatJ2D6uc07debj6PlIrxcNanXCQFw1fG4NnNs%2Fb0jKKJNgQfCWp7yISkZO89%2BrP5ti8YK%2FYsGCCgczSWBJVYL%2BovFEOKGfTADBLcuDZhpF1a6qxYOI8lGQAPIGbB7CT8lsuZkiE3H6RZ7kCNsmfrXKbMKu88NA3CysnhuYpBus92hFcsRv9KZPwQd8kzA6FOLBEBxUqeObN%2B8UHXgIVCmxGr%2B7UVISb42rUPbOVBxdyfs6wMcWyIXZNXeJk7w2uBJ0%2FNL%2FuPjWInbckOof8SCFz1E5sUG5WqR9KKCeDl2I%2Fpc6izS5vjyhhmxwBPgzDsrqlzrL17ZVjUX4YU0TC0%2BJ%2FpRG2eU5H06XFycnsz3Tr5TdOSU8QR8%2BcBkN%2B%2BQFuXze36JTz%2FtE%2F4helzmLMp8ufYR5th6r3bbqPFPNsWKtjN2nyb99jghdn9as5iTUBnWUplveGQDzUtfK6YkZpU6HaxLaQzXPD6C9kivq1QTM3vjtCxknaPdVsjW%2F1XIDMPzRz78GOqUBmP%2Fo8SL7kYcIYHCGJYMCtJIjr2ZF2u%2FWTCYHv8snDofzknH7DQgyziGUWHOGKM9ZIBOAWKxrXG%2BW1it8mwiHTtMUWHmx3f1S2qIy5AGvJTkDFusHYzy1HfM%2F1lTKOjhGyORIRwqKotaCCGztIDK0QNFKazXGmseusP2%2B8R1cFRWcgHvY9Th0FIs80NeBwmwW7mz8EQG%2BI5MVGEKGIK%2BKKzAA%2FVXd&X-Amz-Signature=24f3bbed10f5c6c9d3219da27e8f6261ffa6f47f24873d4fa96e0102f55e35c1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
