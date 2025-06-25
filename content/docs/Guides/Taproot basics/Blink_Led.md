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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2HGDJQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIFMIApxAQRRjmp8FvpjTBRLdyms3CJMLF3P4OvVY8GtKAiEAztQuYsGLyw%2BuJ9GIATOMkZz4Uc5ih7r8C6%2F%2By9IyDQsq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDBk09MkYuhbbOdu5pCrcA7EpnGwkUXaJ9zSqNYevECyRWqdvFgCnO%2FjNXMRLH0NKg3mQYHJlzcsh1yXVyteROVXpNR8Nn12ECleDnygU5xesK1hIlG6Nn24gIz1HhwwH%2FAZRwx6NOxoA2uwcvqFOXJiT538231zjt3uokB%2BFS3%2FdpqDl0SOlg35Q8c9iY2wx8UcMSF0lWgYXMQVhkBpwu8RZYfVspf0gDuKXPUU0AwRyMrjPEfW9Gt7qdul6JXw31106%2FeTblTOc4EqUK0CQy7wpl7jRcKez3RBb5E%2BF%2Fut8XQkpTfYmlJ6zp8IH5YHuTv%2BcfqOZx2I2Y2kcgEJWGgk7%2BpNR9eFRUEhVpbKaoApQid%2BR5gUMZs1MPKf09BCyyDILoVea8Buo3i8dYRtL4sa%2BwdfaAlM5Zx0x%2FoymgEyyMLWj2MDjClwOpUQrQLOreYxQsLMcoRfmeEXgwi2gsg8fhs%2Fx1lDE94I6NSB3690Q30GY5%2FISaZXTGut2XXLBsphJibK2O553GILHdG1c1p5F8kyeuViJwRAd3L91sGk%2FN50sFzteyqKioAYclfZj7v3RywJEWou4iN%2FTNFB1Wx9j97qa3o89j8tjKgQJTLSjvPFO%2BDWHqDTMy59zJl5kQgDxIfcXstMwDLtAMKXC7cIGOqUBkJh3ko3UEEyrDyMN8hoAZu0MEyS%2B9CHWFRPPhSCokof0hkyM8uJFIdCq5ukaoLZif174O7Xmvyq%2FXjdWk3RC%2F6cD8%2BXKGhFoXK%2BvfqJxnhD4yqDv1DPfnpjHSzJiEixOV1aNn4WI9mjxSCZPatOoy%2F8Ro%2BRY2fZQCO4CxStOeAye7hslB3oHNTDfwAWK5coI7cJcPCu4RxRxcwUjqg0m5bk9HD2M&X-Amz-Signature=88ee274592e627c258e95c53ada656ecef786c9f8d1ab3be67eff9a19745d632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YII6CDW6%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T034326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIA61F%2BD3xINvLnbmateBZnfi7WgET4Vc%2B9kJue%2FXXtXYAiBdexaDhC2fuhhVo%2BJR7NgCp%2F17K38r570OcoRWV2LOWCr%2FAwg8EAAaDDYzNzQyMzE4MzgwNSIM%2FzqXQKwT4JqSWfefKtwD86ARXgFYYK7V8PqBeNmC5hk%2B2g9jF4HegQ1Nv2s7eBp36EskjV19KFn9W6Zm4Pv0vlUnN0a%2Fwx0KCTOCM%2FzXw9CRmp%2BpL3wAfUnFxKZfhq%2FjTw9BmkdZLHiNwiT%2FfgTIDFbOBmh1Oi43%2FcWt5DPFZf6Kzfh3awF0FoMUHNJTIHbdKvwA2NnUMY7Ubled5pmdNa9LgJvVPTeDHc7UnniiekpBFO0%2Fmi5YI4FaLu7hGoJdIvm8dD2Dnv0U1ArftGtdaXDkYsv5I8b5dEKrnhSAkQG%2FMyb8PnE1qmjepqYnhOy9PrNedY3VF3WKgW7OpBqSRdv7GwoECQ7O0oWTsKTS40YyRZZ4WL5MfFqbT8tyP2F%2B3H4xOo39rQ3BR93aXG8VeoEKbdM3H2yWRrYBr%2FWJ22IUC6bK9W%2FMs5JaJU3iotKt1nzsgbFEMHEKyJwAg%2Fg1dSolptqsTkq14%2B4cn8UtVXDxLhSt5QWWrEo%2FCbz0H9xZRZL9lEGj9%2FM0gTKJta1Uwv7iyWyc4rmneF4a103dmXcpwDCMigztSiZky77YytBUpDSNU%2FVMhotb3fXetN7ri9teDmMJaou5kSWbrobbFyHe4tZEHJsLhxoHsBVl5%2FNnxYInP25TMFms0JswmMLtwgY6pgHNDd5BDNwU%2F3JpxNWv%2F7AsQDsKrR0bldmsJbU9C4AcLze1gFEQRvyND6u70eHqVHERoQIlTQfEmapJG7bcm7nHaiQG%2F6d%2BQlbsINO0P%2BvHuqdR31vnubq5zrvmndEeMVG%2FfHqdG%2FDcRYWBnoQTXG47thyYKo2OMCYSr5nRe9Wi12UGQsgFj0FW17YCR26y5D5lCzCc7ayntilIE8zE1PbJMVmq8FKx&X-Amz-Signature=01bc2478ef2f743805f0ed1fa73ccf2ddabcf116cf189d566063edbe442017eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
