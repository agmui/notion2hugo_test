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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663A3GXBGD%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIG2lrr1jrxEca9AZZCCbymPnHNf7f0LsHsTlsHN7hwhSAiEA37P4HcOfvx6PoSBxjdiUHC2QPHbZMjtoaDjLjno%2B6B0q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNmYh7rrXtMcq2m%2FUCrcA4wejRxU%2F3HBeoU6YjB94EoScBnSPR4W1CYzUZ8dy9fLFd%2FbH0yObK6zDgxPwSDkmc96%2BDiMJqHPs7Pmdw%2FeVv9GFrjPRGpDZY1raamQU%2BNRE4%2FyaYzkekqSIN%2FpyS9qUiJJysmNC2YrBUiK6fFgupWxzmLqNTdjgCqowtUvYNjUgai4fojjgi5mpqPHmh8TtzGuXETyect6kQl%2Fzm7C%2FL5wk3O0tRDMuEG2o059azuQ0nKP2rnhXxh2t0RzWwEU0yeAUQ2rhMuyBxbWIX9ueIsQqoiEdA5Y54RrtmxLms%2FvjzP7valKaP0CdR3s1F3MHMI8cPUZZk%2BF%2F02M0gGFh%2BI5mkEx23mUHru8P6O5b4s1TYX8ZMY%2BYTAzilMySMfQZgTq%2B1PQNYxuHSGZ9n%2BypbPS7RADXcRTaS77vCPFFZ08sUUHxPNkFUCbJL2mi3QDeIT1tk3e5gStjO%2B7mUKzC2GtMthwU9wqnO1W7MTbqgFd2QPsbIRUuq5yale7KrNc9Hi3J36c9VPgXffv45VwirhtvbWbPCn5gz711lJXhEfYPmu2eqMgpe4lrInoD7OBgSBro01Z0kpt8srH51CDNG%2B4IEAdaNJ6B6DUZ96p%2Bg3ld3YpAN%2FrukQ%2BJh3hMNL96L4GOqUBTyWIh%2FLL1oCamSZU8iA3EAIgd7Z8eoJT1KLdE4fqwLa5pm6HdWFS3XKopBEK084U18GpoARtWncHPMIol58iVyaj25wrGPvVc1j0IqSm%2FkLl2SZmBAxDLO25yRxmthRRYYI9YzyPdPX7rR8LO6se0hSKG3YYQNLcABHRCa4LseBqAzgtvXSzF7mxGQRgElF1RSge12fuLiUld%2Bb0LqCHevwCTUPq&X-Amz-Signature=f697edf95d167e1ea1c16a2cd4c3e4ba7f2d7189389fa439f33129d3ff92638d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QNKZG6PI%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T050822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBQaCXVzLXdlc3QtMiJHMEUCIQCTSF5ZJ1KfUeLpSFvUMNN%2BBj3k7D8omxgx1t9wfQnUigIgVmAjQJ0esIE65NpWZIXqIiSTcTj%2BHCYqJELiGLETbH8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNCDz6bAY4Ar9O8S8yrcAwHSBAk6q%2FaiJM%2Fe84OgBRVENe3Vc1msAsYpUwL5BfyzNZdMRrZKzSaCRVwhMtonAqkCXQsKXOWr60mfhWPLMNLQ4kXy%2FMs7Hn4eB9H16b05zr0xJ4TCaluxppKoYI1vFFx2LUiSX7o%2Bw94RmEYcfL1wAp%2FgT8i3DpZTPaBVU9T4rifj5tNEd%2BUMKi%2BvchG0BXDYXQAJYQJJRkEvwwxlCjUuI8a%2F%2B3nirHruGtJ0GlNSKSMk9bg0MRS80sDzsdkUtmXwdFsTZ7ngm1otDX%2B7vqotpIx69fvpC0a4vmyZ92dd0gEIoR6%2FqnO8RFNVsws3cHl6R30Wxn985LAaj4MCNNhyXIfvvWm6TMFAGslp5d6BzUB0ZPQA2XuoYCq4ll%2FQAn3IX9YlzuefQ6CSlrd%2BfCA98ewhIv1M3C%2BVSrveqPEmom29wWaM8TynC7%2FUDPqmWzHW%2BumWckEMuPR7aCd9yuZ064c0coeV5umsbBHZSWfuRKbJVanHEiP0aKisRP4VaoSnf%2BOlUXhZG7%2Brg1Uk7%2BPQ8vlG8fLNXi1RjcD6BumA6iBLuO9OtIiG%2F2jLoxZ1EOB9Vqmvqaq1PnpvnNjyIfRvNqBFb47A%2FJzYfE%2B2%2FLZAMn1DUN6nsuOkaoCRMOv96L4GOqUBbu%2Bhl7Ojg6ulIkYbz6Ul3h4YusWdzKb8MeDqBcciy87I41aFLwzZBDijsmZfXspvD%2FURKFwMRiPFBh93NVzMVUWYxvmIK84XlD1n9kdxZwZkEb2ATa9ifi8JOtLRmQ2oxiKLPjgKAXLekVOJro%2FInFEN1IXVpIMuAHHPl2EyMza1RjWQEbz3EJTKPRVjfCUUooODfdeHXjIJRjUJ76FTYz3fiSv7&X-Amz-Signature=a73bacae8ef7bcde1278dfb019ae4c8519204124454f9d3b931459ace6a94858&X-Amz-SignedHeaders=host&x-id=GetObject)

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
