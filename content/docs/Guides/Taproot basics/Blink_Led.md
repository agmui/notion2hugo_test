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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WB27VYN%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJHMEUCIAeaB7JZY6kUR5Cf%2BsYzgk0kxDw5EoMzVkqzEpIQlsUIAiEAsE2kTSTeqLd6wQ%2FQ0CYvX9KSgPoth51RcAwzYR2M0ogqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOGKfQ4jJReMcPFaDCrcAzKvRq97yYHTYVSNFf9tTE5xbTG9O5LtjP1ZpqDw%2FbwYtDzswwh3E05Yw02Ms3vaxyS2UDm9ChtvLAdWqbERcUzz3nSRkcav9Ng%2BhWnPKomkvQqw74%2F2iNWHPe%2BOhpbU04AEmD5Rc3aHMdMsVzmP0Wt7rMM5ukEnG%2B6T0J2y9yCB8N6qh2%2BdMElGwZxhvH%2BC809zx9NrwN9%2BamehBS%2BsZZOGKfXNPh0ubw%2FUKWli7NSmJGsbr59FOLDfAPD6ZQqtmFsg0JmuESdgwK3w0ZVWf1hlMRSxXRgRBtIH4E9zFH4ihT76Tqyq2LsGx06FywTJ7mqr50FatrQIHy74pd66nBSDC9k2ZLsDyQNWJTZQ7ktJDwWm2RaGFDiudXfTS2vWIYSt01ywlBo%2B%2FkWCTBE3YRwi%2Fz1lptcalIuPeHtBaBzMl62ZLr8QuDgzUUCBZcpQfvu%2BPy6uSJGmEruLm6mftYrQvJTWXVR%2Fwu%2BCgZRUArRmFcKF%2F25Bym8Lo4rNjIqs4Z7e8SjubU7NhVzGpnzBCunkcchaS%2F49fB3tZCl21Z06k%2B3v994XTc%2BmWxpXbb9g%2BOLv2NqRi7WS4vx5mZaey0NgB0h%2FtvSb4DIQyb9%2FIHLyFVsUs8d7OGJQxe4xMJ7YpscGOqUBYvZRWkAL%2BP8bGTUJDEVFy8NafoLMNHmr%2Fu8664sQaazZVMSXEQX2LuWX%2FHGypF7nSe7o8mou8gBHGgyLS5tW%2BOcSsHCCyN84gaznfi7QxeRfUYH0XTQlpG5IAiRphqJJoH4kdBkQvE1r9BidYmhl0hHHXww%2B04Vv7Q9H5sajIeAKnGFbqbYHd1WT5FNPPmPdBHjkUS691WbCOedwkmS1hSXjbWki&X-Amz-Signature=b2e0fb135b9dcfc2aeebe2efdbed43fdaa7b6e9ae5752225bacf33cd00c1c745&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZUSICN%2F20251011%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251011T012103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIAhtKuWzmW7e5h3kagzZSgNXSn6MQWOiBxGntDpH8fY1AiAMElTrd6faTU%2FLCkBVI3PCW9bnzbdKHP6QLFEaBBb6HiqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoTwJ6%2BAlWOBXznm%2BKtwDU5RqmRMCPoe9t9v%2BTQi0hXm0u%2BWTBCU5Z3jR7MKyEabqkxUhSXa29Qs3n3iGVpJh3Vs6B3uK%2B9%2B%2FcZ6VjzUab7aKgjzB4Wlh9xt5JfFEhKi8wXQVEqjdI32LCiV487s5wYpiJlTnZOCw0obquA45lxuhiZV0toa5CZeSYQQFgH3n3iPOf3XN0F%2B1yug7pDQUEXSoOnKDJnRyAMsQdS5P%2FWyd1QtaDkG3KWp9IYJPi9sg%2FBEjoWMdHJa7PyvtfCNwts02uRz%2F9axe2lXLpWkpqHqAp08UuljsKlWSeHFyhPlKT0snZiM3Z3TEm67JeI6yXFZ1lqx9m4mHIYOnrkQSVaz8lQKSt2%2FxqAU2dhYbZFp1oXl3wCyLk7oTcFmbJEK8X4fb3Ccu28u%2BCLrgD5p313P3eBuAtZolSGdBZt300wFurZhKlU3180u9fjLA10rM4Mq5jGIaqX40yB9E9opFC9C6V7UNF3LeIHGkW8oymVp8D5tulCRV4zIWyBnTHwKkyk%2Fjy%2BJXFXm0VWFFtOViRY1ec1nE85LhlZOF4RGbTuldrSHucwi%2BGNR4IHYl27MUt4zuXazVhLrAlO3FciSuPKMGzQ9ZfAbSs0WcmA3uxuVhWLN8axQopMwanO8wx9imxwY6pgH3RK6saeUUmc%2FwexfzTGJrMnzeWtqIlp9vG0GpNTLU4m2W3bG9nT3V0bS2j4L8Hwrj6KA5cjFUpBZNp7tqaZvzX0JhgIe7oCBOGVIxD8c8md%2Fj%2FedWaFGDI4w1OPJcpLwvdjne4lkI1Yz%2Fb5IhCaAC3STZBXSMXZGvftOyrxrPOmyzUykLSwaaj88z6%2F8x2oEaLcxxiddauqtHhFPsecBnOFj1scoa&X-Amz-Signature=9d3bcc05522879f70ccd27da47712bf5937fe43a654bdef51819248139341a68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
