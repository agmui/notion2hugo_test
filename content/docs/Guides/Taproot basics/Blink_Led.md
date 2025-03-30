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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMS3RZMV%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180932Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIH79bcYy62mPDeNjIDynik%2B8k3JSyX2ki2bvaoO3yWkVAiBajsIt3XIi%2FgDEmpY7QaBzwTDJREGa%2BGnmGUyFk6cCwCqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfzpAix2hci%2FKvAqRKtwDxl4Xbyphfjat7iB%2BgJo8gx64beetSp7iteK%2BJezMfdRUmTeZ0tuWWRgdYMeF5bU%2BktlT23LRQn6621AkA3ytLrAm6gexknimcKxZ59XJOIwQUlMgYXBP%2BvhvrpU6vqtr2nbES1AA3b9%2BZBTFk%2FUeCd4W%2BsOu%2BGxRzj3K1wlxVmK%2BAbX%2F676evZ5Mb0KD9vAEbXdhYvn4oX4pg1ccHIITDPoTVkQnYvNOcbulKHY1qXvuVFsR0tcQ3JDa4EVyhJJwPRB3atHqZs0iYiEoYMpDAxdbSCmDB1G4LSumJZkj5ssouK2FndY%2BxzdPzjAf7lpslwWhCL44GZJoxhGsLeIrTdXnyiojZiOfp5AEpsY8qDBubPSMGtEyNsdQoNULDr6X4Bp5gOs%2BX%2Bi8xlYYKFXod%2BUyVDdhht851PrQDnhg%2FKpoVoWXA0RmlxJU6fUbckrykVKCCfRL0WT%2FWlIq6B5oUenjCkqYmSpWq833m%2F%2FI6OTR8%2FsmM%2BopQW1lxtzUcO36xpI20LCFqxSQcPbWktU68tenh4%2BDxP%2F%2FvnCCynuO5DI3F7G%2BvQZiudcHGp4HlkHf%2BdkLklfZsQUb5d%2BR%2Bu6zBEjpSJwMpYmUTmgU8UcrGW5lAcZfaLVQyMD%2F0HswkO6lvwY6pgGuQ2jZEawDGs%2FhU8nERDb5RHPVsZnnGCzR6cypSJg99O9qyFdaRwPeGVjOaOIYw6SMECax8AtavQqhq4mIHtmB8QMo4NB4eEXwpgk36S%2Fa5SeWSVGELkLV2M%2BoMRDX%2B5mTv11JZ5ms0uanM17QIm4aM%2FhAMa4bAcbjBT1nx7g4iUmsLFw7I5DfkvMeFLnfbek34NwY1RTIaVp7gSa1gGSsBwXU4Oyx&X-Amz-Signature=5f36cba0cbee6dfd2f55ae2d021ec289948c9c5125aada710a868684be4b79e1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5A5SLOZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T180933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJHMEUCIQDxJoVfKzfvU2twvfqbhv5ORCsA3TW2fE7pSPL9tdGkKQIgAKNYzLeAxSubM%2FQy3hdcdzvZrUG26bbUDr0yb0alffUqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbijUtxws9xu7NOCCrcA%2F4UeamQYK6Gk1tZIhOKYY8fw5hI3DTOyC6qXSMxMlBYxwSkiqHRTk4gooU1SciDv4d9bk7f7jsUsqQokLY%2BLXEmrfciEXj7iIPQbgke6xuMmPzL1bBenFlOYG3p495ryYQ5URY7jHQdr9zA3mPN%2B%2FNXBIS%2BePtjjpgnS5m12j8xde22GbuLxo3xsZLTiC1X9YNDxRyVu3ejFqZVnb1R340nXYBtZqLFWSpX47167hk6uVOODbQwTh%2BFWOt5uXYKZm4f82aPRXm6sZ9wv3zBfKeA6Lj5nKA%2BZXt7isRutKqRfqhzYAPgRK193IOC%2BqledrhP3hR4wCDTkMtWyKu7f7KLhr8u6gKdPL4pBfoYdTQdbzch5dUJ8g7a0wP3a4FtsBsUaICM37cCUhgbUbZgM7ItZRBRTVau3bNltmbLlK3ZNxLWrHOsohzLsrUpGeCNuDgMvw%2BERw90BQjd0RQJhfNvZthCFIpuqLbRYlxGVzaQ1dgpl3Wee7Fm%2FlinPjWUXv3hnxHC5LHU7notIMci0Wgz7Rr0bszrC6dxolW2bNweSQGFISo1XNGTCUTr3PhPJ98Pj%2FoDxaauIw31ifKjwJ7vFd9OyLngGMcjsDENFPEMTZRL8t7mresFb252MPTtpb8GOqUB5qLymhgOGkxrAUoyosQjcuY1%2FZ4cGSsyXxJySPOTwNVId21zk%2FncJXfBimSXp4V5kH8xCUQEsh2KXdn%2BaukGandm%2BH92WAXwt%2FJWai0VYpMTSfU1SXiI9zTQNk1ackVmbXDd8wuC%2BlGqj7kFcO9%2FBc%2Bifz5f15txslp%2B%2BKRvUWOeitlxqbuPJhRfMUw9d0ywHn6cccfd84pA0y%2Fog7AOz%2FOTSHGF&X-Amz-Signature=398a57979928aad4fe2b2899bec49f164b36affe2b47c5de8b4e005091944ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
