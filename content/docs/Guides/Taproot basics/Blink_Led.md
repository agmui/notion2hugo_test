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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NIYT2AV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJHMEUCICBqZB5irku2oTuwXX09zTaNaF0%2B1eBPzZLygHASR5uDAiEA3l%2B0ndWvIreE%2B%2FFb4nIawYJBel21BLciGoJdyQf3Wg8q%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDLs%2Blj%2Fuk2rIue9j7SrcA03UXeXsdihT%2FKFzWpx503%2BYwQIKw6xxRVQ78ldznhGjV3bpuydcOwXicv6ecRD8YjfDTKsNMxAI5ZzvK00ztG3YqAl7zeWXrpgBr3HLySyQ4yI%2Bpqmy7jZCbj5i7NHqYpE0CGAXLb4XSksb%2BlxGycazFPTzI6gmhzeTQDlJRWDjmr%2FuLFRZWb2wW%2FjPSe27uLPFDJ5gGNqpEFOyx3I04ZJVDm%2BIzUMt%2Bt1m73RPMobvSLIeMsonbTmQJ3qSUT35Ch9capnGeRmyZtKzZpV09cIysXUYTSCt0iOmTV%2Ff0j8JVP7SwMZ3OD%2By%2BgAwErYvi7fClAFd6B5UwhuYMwclmhOV7iVT9vkvegVQnyX1PevMjjlPCS7z31CXGrOTW3lR9Re6fCMAORy35QEvqYhaB3nOf1O5rkMXbC4hBK4o%2BFj2rNpW1hKB%2Bad9aJFCZe9e3eCofTDg9v4Q7sDaLY1ft03JTn2Od%2BAFUC0vtQTpn0r7b5t6yS2HFtoHl53bkCHj9C8NAMFBO9pmt%2B3v5P3j6YfLCd18we6L17zpHNCklRqMsG576qnfM9JWQlbT1OSG01HqSCWYq5sossoN7Zd2w7yRzReCeN2uNyXxj60LSAN8HW7UVWQ0U1EnREJlMPf5zL0GOqUBfCQZBlW6LdrAfQ56MreXZE0LmdPvk%2F4yIgRZQ3zNhVTtlSTp16qdOVvbhQPFEk%2BiJVt0HyO7F41Y3nf7e1XYBXXYehVQh7Cb6%2BlhAZhlWDkTO1Rb%2BnPcqjmi9RJeSgePgeieIcOJCDzMXfIPS6BzVxDXcPxWpRQ7XpoB4ArjbdglmtGeTjcbJAfjrxZzfvGkPQmL8nHGlZMmv9UA2vDokfhsvOlR&X-Amz-Signature=266438ec2783c3214fd8620dd06c9cf4432cf9d39fc98b97c1882a3ee1ceb90b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BNK3FLO%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T140741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE4aCXVzLXdlc3QtMiJGMEQCIGJLbbApHZkVC84xLuhDv624sap%2FynnV7wqFDT4DfbbtAiBmwL%2BPipzQIehE3lYujfvf6jQ%2B2rilHGT0USetNYXHjSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMSvmbsiwN4TTScpkqKtwDdKgixguxtXn7jUQsE73u9TQG%2Bj1SrtCE8e%2FuR5rPzToP9KRNU0ySdnLWJLA5fJde0wZxCRAfq%2FCyqkqtlpm1ACKM0zLzIPbIiEi5xYXRKsU2dfJQoJE7UAQrF7yWOdmC0rdCEqnDaz0vNSSdrsbjCbNhAkouC1KWS9t5xLX%2B27mPw%2Bgw%2BrgxuwpcEqoaf0R7pCCgG4cAyDCRwKv5VMnjZz9HAMvFwFAmqpDuDnYJn28RB9bzb6s7%2BSwa65obclfyGeB%2FILm7oDwEJ7%2BHglflBAVHwoWk7ilICMvogFjOdi59EKqZ4%2Bt8YuCOXQO3mVrwE1P6HJFMDJ84ZCg9dIMNkj%2FKQHMjUOJwgo3tkavJuZGjVKm88wDjGM0BBwUKIZOx5qdzEHZy8kJ3OM4mRqmauvEJ7%2BEzlZC9BPhN8HqkwtURNhxbN7ha1vGPkpYixOKpBEqXMdsOrRFJNpXgHAl0cSYgWVZQv9BrpmMl%2B2dooUI9hrraZCXHHyCk4cajkxJGxBuDfx6ED7wMMi243umHMDDFotXBHyg%2F1YL0ojhYo4Ry3RCaZDCZ%2BJ5xWN2iGqxNf9DikfgdVxEEgyzuhSkUGWgd%2BsXlK%2Fbi%2F4OFZbS6t3lrw4R1mN9JJyebxU8w4fnMvQY6pgE1qKKGRstIsO0jNiQzGQoRc%2BlBxTj%2FHxk2EkvSAYjYvzcBe0QB%2B61lHxig4g5ul2mk7Vor1HDK90yEb%2FHsudKeIZkIV0d8qWpbeBVsPfn3miXKvMXOxdOWwpNhgfMyEAW93j2dI131E4LWwGFp6m07q%2F8uyqDS3sxm1yaO%2BMfW2f18qUkVaM9E0CtBUQnJDMcuKxNhWCAaMgZv2NmaJSqglvEknS5Q&X-Amz-Signature=d5ea8775fbf35d7c67d0ed4ed38a930c2433ad2f7c6343b0350eeeb06bf0d631&X-Amz-SignedHeaders=host&x-id=GetObject)

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
