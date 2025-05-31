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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KJYPX7X%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnQRjCpZStiFNS7JtSot8JuoXiaYTxPSs1hxfveTu50AiEAl6P5OJYMpoi3FEUmUY5K3GzFd2tJFq8geQ74G3jFUC8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNqtRcCgfiTaG5UseSrcAyjPhQTG0uE8o90eFpBZO%2Fqb%2F7Q9fYYbS2USALL8epBft7zHtitMeiid%2BmfURjdkhKR3HEWGJefvd1bU5JHQTq8bvKyFN6VbytlPWXBTpk7sE3DEpusNPZeemFtnxZMjjHOC1nV2a0E3SGhk3Aa9v%2FwaBnH8ipxGZe6%2BF7nMaU5JqOjVuE9epBLQ8XzPI%2BGh24O8ELbO4mT5A%2BhI7VhmeTnMP9Eb8x4G3Ah8kLUcK%2BF9WSH%2BV073dnbkrYnS%2FYkeorBhGN07zquy0a2aS%2F3UrBR%2F8I9yJrirFJkh%2FEtHJ5pMB7VvQFZyxiNfauFqpVg%2F5PxV%2FH%2Bfkez7Sx0Ft1LnDbr1PuC8No0NA0QgrIzCPw0Mlgu2chmt7KZP6nNxX%2Fg93Rq33ym6IFPBJgw7%2FJK%2FqWURFbMysMqGh%2BboifThwHI2jA%2BJsReJMO1xfdfnuhptnwmjG%2FdGFSLjNpsYowv6SpIINF4VtZj4XJRImEFBdFczLHOhv3Gb%2BkXT932KIU4E%2BpBfg68hIxsAlBpCI4isOw%2F9%2FmKwxuYwDJHDELmzu4pQ0y9xflm%2BrdeqPj4YKS4ypwFlXZvhoARrC7Y3nVgGLRNO5SjC98vcnCR1KDBHnGdKyGRVb3uoQ%2FQHRwfoMO3k6cEGOqUBF9wc9qY8CdinrYigac%2Fg5WwIyc3rHIhGEVfhtyZdioyRfmxYVvZ9l%2BIs03PM7fM3uRLFn34XCYZM7oHLqeFiqzJAE7xcEsB0ngBj37MHehWTXIgMcYfndaM22HsmPfsvbwJQhucOBf%2F0Aloqp%2F%2BG73T1iFfIeC%2Br8VxCABjL1JWjYjKNvRxiK9Ygz2vS6hfYkGAo6KBWGddn70OsvkPirNQvHvMt&X-Amz-Signature=8d86b688b4dc27d67350e7c02752e3f97eda7997e09d8a8b939bea8405d45ec7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662YTQGFDM%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T041225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdKTISe4A8kRwCUWEOrP6CiXAyVY8ua46FEDIxVGBX7gIhANcjgzpEo82u%2BXA2UFgdF4MfUboMz8jtYptx99lTIMzhKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwBM36elOvO%2BHaGMeQq3APXpSJIbR5decNgtH%2BJVQ%2FEIu5MgY1mQcg%2Fhri622dr0%2Ba2ioS99yaW0Mz6fx8qJBMfvpjn743ZHJL3q7WAc12i1zjxc%2BleO2tghQ7hkfIQdmu2gDRQH4JdB6XjeWW9j7eUtdpJpnCnN%2FnVfvTlbuITBmPWsYv7Zx7zMqIqR2UWR776TBk1bNnBNb1dCARLT4086O01uzndzdNPsN9Qlx0R87NaETm24fspQb4muOI3XpMzCzH2EsDgPYilCFKjHKps94UcSJRPxwYyyADl345Lgs16fRO8FRBSwCDr2SBxtaDEtnZwzcq1Fz9vM0F7921NHG6LgwFlDNvycQ6EghgiWr6%2FruzmAHgO6fKJP4raXxdS7E6KLXGqapKrkaoMr5i%2Bk4Cy4DWqYjFakuZMFkpC9QtZwNmRyVVaTizVWw4Ljbcej5hA%2FZqoh11AEOUh6aa5MfOdyvTKMmHwViRke6r45eSku%2B19IpMOTW9At%2B90ccp%2FGHnOzNw%2B%2Be%2Bcgz5EPU%2Fr1ZdWCs5lJd4EuzIbouRO8eNcWTXhKyOsoOCEIzB1XhNwRMW7m5AkAGhOM7mnhdOf%2FXr8FdEtzobUCJo5Xp%2FKXiTIMO%2BitgOGT44mbRv8UkSf8Hr6M92HPeLRYjCJ%2BenBBjqkAck4lKH7lujVrYFbacI8xtFeoRmlnC0w5ejSqd5pUugShQebYNmE1KpvqdiM3vesDh0ShSrGNzjxGCFJ3t%2BEQuppPCqbeBPAClOcFNCp41EMlWQOKc2TUziziRwStn0xXAAYQ2YxUcyXGK%2Bed1oTJDj0XCyDOq%2BUByQq9gmgPz0ZfwFY708qfqQ2wbVBDY%2F39rKSSTsFMyOOom2a%2F6LB00eNwUny&X-Amz-Signature=b6f0bd1712744627bd6254492dc5ab8cca3302f08109bbee5a6c749f016e9f95&X-Amz-SignedHeaders=host&x-id=GetObject)

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
