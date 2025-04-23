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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46633Z3T4KD%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJGMEQCIE5LzVgUD%2Fxlh4cgbkHWQu%2BnNDh%2BeeL9MwTO3Z21oPd4AiACd1PlRORwlIEjRUpcDwZ2O7hxHoca%2F0xdKeOn7HUKDiqIBAji%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMR7BaOq%2BkBeDaXXSmKtwDdq1MU6xKLkUdXwuBq%2FALsOdIMovNiQ3JnszAn62EVFxHT0VtpYtDhmPC3B2VGSSqIc1IfOLxLT8DyZxH1TOcAZWbUHlZa819xNHHRYOWVjFPewv32v4gNRIs8jYAo9AqZ%2BwqLeWA4c7eaYn1cyEOZYyKrsTYEfTS7miwGXgyK%2FYNV1OX7Oh%2FEmFZCRgud9qOxYXIDVkNb4%2F%2FkpJZo8OU52cX1z8u9yse0vlYaDo3xZ3E2y535QejkqSNcMEgzhn6sONN5nm%2Bfe8R4rZBdN3Ci1R0iYSLHwAulVIdBIVTUIZxj6ryLOSEdI33qdZqJ85VHaEmjxxGqgiCQd8ZKnw%2BLyKEzzBE659lIpUvQlwxz%2FvyENtf%2BRaIpYuugtuSQh6a86vR1vB2XIm2joIV0QlXqHeWV6ANR1Y38xPa12XTa1fRb59MHUT%2FBKhas3ZeyeKe6nDnKUfDMdFKLUMonWTKY2%2BZMFOzuzQwYQBzXfaPDwwyQA4ohoSrlTPvTQytr2oEpnEFpt91klHnLIeEfs20DW0NbRwr3Bof7gbbRDh5WFFLWMFXOCStXRzU2O9NSjGThkdypplUPkkA3pWudC0VYbziG1rZzH%2BICEkr%2Bvz6ZVb6Br4ROp1Op6oy3hUwl%2FOgwAY6pgH9Za3jlKYp%2BB6RuAUl4TRoigQJhrIKuyVOSqgN0XWJZchNLUw3Eo9I2ELe1ZfU9mE7N%2BdyjhpxnpdZsK9tdm5xLd4Rhlyft2VYa1wbYyUkyOXJDWiPOMmPfSbe9h9ijXOWsifpKPirUbZsTtzNf9lSO4GccIQoIzRXqBHN8dQcRjbGkZJKh0E4KcNxoNDgQjLCJBpcGLD5%2BSmteKU8DCdYdLKl%2F%2B1T&X-Amz-Signature=8abb3f24ef02f07a7c00981c42176f94204c368dcd36ec3edb5b5fb13fc672b6&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TE4LG4Q7%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T032911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCDVXMIcOnoGsqbjXNVFSOyQYow%2FTV3BaDFWeyYqINrcwIhAPkNz2y3YNGgGmc5PxJELPShs5rN1xdX06%2BnL%2BFp6a1zKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyf3dHH%2BRVCPaY3pIcq3ANiLX7%2FDqD03xaKrEUKlFDR7FoK1p6TXIeWWOOGgqmUSIMr1qLzhX6UuxsHuakzuc1HFpzfAxbC56YRulnvJwCTpFABt3d5LsQ0eKjr44EtmAHVUutQD2aWLPR2rn0BcWnMrBZYNW8Hdg5RRnLlqrJUMXbHZlwNGpiggP7hHa5%2BS%2BWrKK3ZLyKwhy9USzffuxme3q2bFQfjPsFWRpJ64j8YBjVH6QtjLeEly96zctUtbCBYAJybaD0FoWK0wd0RPgDuKLVFx3B51gv7jOSwYkYTrsyAdbzAS%2F%2FVhlx4OSFzLzRo5s1hMcN54gPePgfn1Y%2B3bIcFi3MUtsf%2BZVzZjA3gBWFM8TpN1do6YvFfLS8Epf6l1F1AzYPxEX3hDLAFow2LeTugbZrB6Vi8rXtumUh2QnFD2skVTupugDppjniOqfXgz1PiB7nxLi209iiaF8PRPajoiR5srH3HT3hWuPHf26Go%2FYJIu828Xl1xtuvN4qQLN0zfJsTsyuwupkmqD7AfddOIfqPIeFA1IghXy%2BS2bZuyyHgmksdvopuTAB%2B0MgHrOpWVD0VnaDr7veIBIztZrKFo9LWCz9s%2BU7sx0ZwNrIT6SfAXkHDdm8YU4LbRcvjZn0TbJzuHaEV%2FZzDc8qDABjqkAcQ29s4AvDjS69IJvxX2ZJA0By6%2FaSVIpwxkflGwHeVfH721u7FZXoLMDnrYe1TUDDQY87jCeRKLbsyzavNE8N2XXHxZgDt0aHrSrq64mddxc3OX78Jo0woHuRF0%2BIJ27JVG6J5SC%2FFg6s69EPvA3cUsf1OIwaw34qsiMCdWKZeI7P38KW07ynypHveWNrNbu81%2BPLVpupC0%2B7IZl1OVKnYHun%2FP&X-Amz-Signature=03ed9086a538446b2505b2cf029e75a6f9896bfc0a9d827f1f20db1916ab3e3a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
