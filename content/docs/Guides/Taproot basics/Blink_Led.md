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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHKTICQQ%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3CIKZubICFj52MxBTaoC6Z7e8yb07d51B30whtFv5%2FAiB%2FO7XvoAVfRqmaAjgkRkMs6fDFno6X8k2KjhBMUDokKyqIBAj6%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQNc2XnYesakwWEJVKtwDt489RTHn%2F9rS9%2BPSh%2Fy8gRZexf783ZhFw87%2BWHvawk7ljK5SkY551AYPjf49P8YAicbnDr8yeE9fhEiJSIyffhrLI%2BpKdr%2F9qhAUTJjoPaqP16qy38txwevsAiyXPZvOdzLf73Q6R7lqc%2BVJKv0UF9bFi8DsAADqw2Rn6ZpyQB2qGQIYXq%2F8SpeW7KUOEtzuU5qcG%2FyhZRfZomDx8QkjUgIUi5IvKiFPau2R37Q7DTVmgL0AADgK0QPQBjqKcfBOsJ80JFuqm7YIse0ccXKzQodJzhSd%2FY%2FyJhX9dW8YI93mhZ7mrdxFTQTzISlCuA3pJUezSzaW3oRcl9WU5o51DtU6s%2BR%2B0HAWJ5g0e9qyzKnkzsBc1w0SZF25M8Rz5U50MjxsCrGn0QtoNPIT1Vt%2F%2F32%2B8ReJSfX1POwxn9Kfx1QmqFkJfxyBz%2FMIhOl50KaFXMJizAOxLDGUGQ5xWXKdDk8qZbTi%2B9yNt8bul9YQAqTR3IiFsTYeLY63zXBg%2BKBto6QLW2ujQe8dPCu1355KpLE7mYVeySC3Pp4%2FRoDC1hxAqeCz9pd3atpKz9rYmrX%2F7SGV4cFDBrEjO8nz2wERWzZRUhUvBbY0fUdB%2BKyz0ybDXww8%2BXDh5sT7OSsw7J69xgY6pgFadKdnkLgZCV9%2FSBg6dsPX%2F24Pwg1q5JAdS5LJM0o0c2h3GLI1ZFFfxbVVl8C8g2034C00YZme5t1vMPXXV2bvGxrSZhvfqN7Cm8xPfs9SgiEsJi8psKqT%2FJS7LaT4LAQttIjwq4UKWIFwvksZBt41nQz31VuODAUE0JaXnCbf6gJkM0LoAKkfK2emVToGFKqFfI52MnpHa7ND1HtZ9zdqakE%2Blkij&X-Amz-Signature=752c2e3cb78ecb987480277fd9f420d248379f9596dd7280647d60d117b401ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667YOHG7ID%2F20250921%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250921T013833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCUgdiuwptuuDzwcmHA23uYCSp3wEL2RY7JpUcX%2Bz6X3gIhAJ9iLstDSpw0R6TnGMl0oK0M9Y4BrktaA7ZHByFuxVLIKogECPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyTBewACX6wz7P6m3Aq3AOu8mqoq1%2FLW%2Fsm5bOyhpYz2vlJIONs6frlGc%2BYfoFqNJGMZHUshD5Ca8GM22ZJLdI7mBPkQRBk7TlKjdQUeHSlW9q09ciQ7svHj5GlA3jhIzhT3xfeRYN3HNwSSBkfBr7Q%2F4%2B5IPVwXu%2B9MUDvGha7wqODt%2FeCGItdDeJXjce%2BC6bmcofb8Ml%2BOafpaHVKcl%2BubwP0Fb8wyL60e1K0fdozALYJM9pxgfYlsG5Le37SDnPFgDktoyb5OG6xOySpsrJypfxDKPnyXrgA2S3OHDVtC2c8y69BaTpdm0n610Ra6bvrJUxvkrc2RR2j9DNwL4TupFM2BVFgVdNILW72r6hDHl39mOJOsfMK2YVnvcMl%2FjeuU%2B3eW8eXolMqzfgi%2B7BbUb7PAv4spGRxnmA1UtVar7JLttGKc1oA57D6EZJ70AKt%2F9H1CzcpIPNtOO8c7kXWrChuyZ1HgTEu1snhQWuKCLfHa3Sur%2FflQ6Hje6wuyZaQM0QgBb4bEMMz942ZMRfCpwN1HWCAKGePQbNybjVDeDFAQ0IGsVVzWKS02riWh8S%2BvPmlQNcjmoia8f%2FuGHZ3ByNKMTDk27xGjpg72t3w2M3pn98AxriWm0OXdqe4qvauZFbirmaaAqQrSTCKn73GBjqkAVYhjgfbEVSwG9%2FJXX0JBuOY2pO2VMBUcqmKs%2BbpJU%2By6Njv6AL%2FeOe5hY%2F2BM1ryj97JVQvPOFVEE0INFgcs5HWJPas6VVXbNAOUs0GNZfzD5ZXIRgjHyOZNjRSqIkCrh8uyxQ5dznJWutyoM6tFPCPjdlevuoAg3ZpUHw7mFALZZsEsOYm%2BgcmMCeCD7mX8Z%2FKxjuaCkKPg0PufSZuXn7eBOF%2B&X-Amz-Signature=963298386e78c25b027623197e87cdbfce1a278db4298aeaf599c7453844ad30&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
