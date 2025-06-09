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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TEY57AO3%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWOs1042kNcYrBXFoshCNdB%2FEbC9YkGDJVw3b6BdBvOAIgFMOhdzNjQ2mZ%2FSGY4YTnMXX6yzlk9Cz9YoMksfkeFOIqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2B8Q76daSnz5H3vQircA3tKXkdTLWqZe78qA9YhteiuFFzRVcoZ0kuSYPGTKuWoMgmDEgbeYaotGlpd0OMut7xX%2BLGOkay8foLV0AKN8ZErJ1AB2Pp%2Fr4XZ%2B3oZavOEd5Kfu9%2BiBnTu4krHxRDbDg6QHthAN1DRZQVG4duaNBu1qRfOpmgdanb9ine55LFwMQY%2FlOLT0ZqhquCSNVyBFuGQTWCwkgGhFxBKHjK3ECyLCg3TLIpUwaNm9pwlYizKTrzl8ZCKrc2WzKgFawCGhDFeVmYQO6xKK7%2BkvaX4W%2FMTzimPYPKbouj03UHjdyrjeayC5HaSQ1xfngy4BorlWgTIg5vytVf%2FlaBNuQ5vev6I%2FNgJsl56qEgcbvIZTrZR%2FvhHQ9hfg7%2BshHqSTQSGA29QZWus0oTH%2FDFT7KYZyzocc2LOCpkwXFUI7JWDgvmRe2KVpRIAozoOf2PwFItmehfhyoCbK9akuZ73Bv1%2BCykiYpJ5mg1jPBLpwNmjtuyBCVs73sRG9kPTq5qe5IUENSLKmuZ88Lj9XS1IAhhnsc0AoQ3e7DSddkE5rWWjtb3PGYkVctFe1cJCCTnPf2ooTuhhbU7JisoeNcDVILTnG%2FaPrT15g%2FcPh%2B6wErlXPAtZqXA4xiVIw8kwuIlgMLftmMIGOqUBWe9NJNzPoP6UtBENUx0MOQORJPnBHOGSPIQAz07wnpiAdXozRF6TMq9tvidsAfcLDak1%2BmOAdhIQD7PBpuiE94v%2B%2FOQ7e5HXRaT6iDirbD2WLufgmeo87dYqVb6vhQobfZnO5BaJIvJgcdP9naK70qWHr2Gi6NlPA%2FN74TgemidvvfsUQ%2FEEWXvG2YX13HM39KWuUUMNXjVc7oHxspKPIBuTBPQm&X-Amz-Signature=53f89e82eeca6efeaf91da9de7701b058bd64149071f5a1b0474e04bfd4a480b&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3Z6XIJ7%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T051101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQp8m9W1PoWjUzM5ssULi7vOvY6KDjRA6VfHF7zu8Y5AiAFV0UyRl8pX9zNIl5zErTBVyoddEyQIiRj1Lx%2BA1TniiqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhjqbJAwjeWTnPi90KtwDgbeOXrprZ%2FHl6P43PIozMRvz5btOa5N1n2pnmyUK1BbV9rIPQwkrjxc8K2a3d9wBlGRcBdA7%2Bz1FAHWCrbogkQZZINFgTpt1HcK7TYuDAzWiWlJ9uKNu6GCcpigFUoniEf%2FkYupQNuGzGD6wnoy%2BxCUubX0HhuablXH8%2Fk3ESuJwKzBxhRqagnSvAV2%2BQglFLXkLk2WaOXXE23wgJCiadKnrFdREwwbCogrQY1mqAIEalcLzH7Qz%2BDCOO2fggpyjiECBof8SHP%2FhTe%2FJYuoV75ynNx%2FXv4EI7AKpnNzMbUrm6AHMT3M44BwGFv6gFrNhzNKbSEL%2FKiYIDIzbBMFl%2FSGXOhjesORCU9JOIw7K4fhQ8gvqFbrHaYyS6bd75ril%2BAG3iVABgJT7RHiT7xkSj0b%2ByThHEHmPbmI6S5WgYJUf%2BoDWkJV%2B39LapRlH%2FvK9cHCSnD6ktbPEf6DZWrDZ%2FVJigwa82hdacasEku29nAq5Pda%2F2n%2Bt21YO8cVwBa%2Fq3kjuAXFaCeBQHbI%2Bzkk07OwTqqYHDwzfTIw1Ir41tmWYgev%2BqtGWpNPP0psl88ULuhoQUf0XQYuI%2FNqBoAEFxQwdTiCMyWKESXwyMlOlJ8BgYOiFn%2FU%2Bc5%2B6JGMwsMyZwgY6pgFj8NreYS1Or6BnBBj1cpN9OxJZPk6MCrz6q4BXbaCrc8lqhxgkd21itSHMhLBekeZK4nMaNy5GdKAYsfKC7%2B9em1BGEMKNBT%2FlOx1k37aNvhKwC%2F7UTTCFm%2BBD0QkbgXyMAaHPp53187vz0mzmF8r9Oqqq%2F7SI%2FC%2F7XwCl8e3W%2BhdzBgg%2F31%2Ba2cwMlIytq%2FPau1HKfWEdxuKZJKWX1KZ1TBd%2BVZo3&X-Amz-Signature=2231c505238f9698ff45cef56cedd480e638e71852e56b121f70f1733cb49f69&X-Amz-SignedHeaders=host&x-id=GetObject)

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
