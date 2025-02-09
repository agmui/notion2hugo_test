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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHLYPCZ%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7u0GNWNN8m3TSIZF79GgzwJZtgWzdTCtwKAasgZhHsAIgSaZrojkR%2FIrt70vECddyzt0viGWbUIA9PmQ9t6tXkAgqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDICkSt5M4CBBnCpp2ircA5bYfNqXTo%2FKhJIkVBg1m9u5IPq3%2B7%2BmmHvCyCCas4C5XVt0aUbDdTG9OYk63lgC9lfCdaimNUTQDmJXMleHvkW10fjdshYxGi456IuVZhXZ23fhTBVJgqGwtqK%2FNNbCOG8BoYhzo0gqxl5UHTwtaT31c7q4wCsEGNVe4VxnMIZl9NdMzaXC4305f%2BSvX%2FLe1HAvTbnyMDNVfSmW6ZUQHyhWta7SDdyVc5hXB46pHPVau2Ux8uyVV4FdA1U2UnmIA2cJIGM6RSRMTjo%2BnQX3Cd%2BcBJin%2FKi7o3GcIqnQxB4Pc5tJtJBYwDy3uuRXquVNb3BP%2FyP44KQpV6sEUBIRCQWccNkq0r2VM9nt1l%2F79kfHLM5FLO%2FGWwZVE9lkK6T37IPhcKBKq0oE8YL%2BAnvhGklmK7ddKmv7BdlBtRVDtputbedUavjqc6vU9Ce2D9wgE6h1IAXb078Inc8ia9CdlnalGRbg5i242YgJQDhY24%2FCh6rRewN9LYAdoFczabOb6r8p%2F0CGb3vJxYVxewdQebrZrNFiblqpql4pjcYarjl6fJF2nxwr6BkWZGdl2I5bLjdUaIX7aO2xnrYLGDspUYeMxJDTmZJD39w8s%2FZ%2F6Fo7BzSWBIVHX9mghrWhMMzkob0GOqUB%2BXubdNNb%2B7wXxA2E0EkOD1hLpIT2Dsqxe%2BTQ9Ons0G5ujCX2c3bdodTY%2B%2FmqxeN9v4Nz9EXuLeJH04ktHpZXiv3nH5e3egcoNCl9ttwGAYlxycqH7sBPYNt%2FaE2tHJe3k%2FnnO3GJlrK1pK1YgywZeww%2BvhvYPg4d4gulzCOAk2pxYwLBdL4BdBYEBNQa2ZWC6C2AL6JqUMu9LzNpdjSb83Hojti5&X-Amz-Signature=4632dc861656a584ef627049105f98c9cbf4d5e930522c3b1c38e81becbc4fe9&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH6DYK7O%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T150138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCaEv9POh3ZAvTV7ogFcToQZAZhHAb5q4nWI54BlA0eAIgGmjvS6XxPix16oJV2254w90KfTVnWNghZfdZqQjnVSYqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNezI%2BYEeplaalsZQircA7s27lk6RcXAiAGdHLVbSyax%2FufAaWhz90vhHORnPyXff2%2BGl7TznlkhEpznOqk9pOO2mTFbwuikWqPDiGwnbu7LUg1qD%2BbRcCEukvr68ucoJRqWY25OfPtTUnobR7ZWymJ2WXW%2Fxqrq89dvC0iWKpPEZF2c%2B0O1dEDLhBmOK2zFTr0D6i5nsQqkDP47mOBnXJ6XV394olnKaoDBC69nXg3nVTci2C3XYzP%2BbIBIgzKg4mcZILAa3tiGhh50gWK3KWlAd6chy69rxqJ8bHZQEKL9EgHjKlgF44CNajywjWHrwWv0qkNAH9Zeck0nXLDTLdhBNa5hZnGonMGm5I2sbg6u3pCIaBRSpH8vzbLFEr31xaBmiY%2FWZshgCIbI%2BWoLBC8idZe59qLF6LHJshA7Fzl8rtJC9r046UZOhN%2Bgibatespx5kz4IkrNA%2FaKqwTmB4ZjqF7ey1kKdSCRbtcQMZ1pwhes4wOi5wYsnCpD9RRVzWjXrOi%2BJxYkWyIp2SxJNYfq%2BSIMWVNcRz4HJclDO3YEoC65PLJSzdkuqL9Kcq6qEI7R2DqivFVrVLdkcyzH%2BEy4ZoCtufrkbn12Go0zXD8XCebFsPNCwCRaNFVZd6eKwA6mLTyZyhiWymoFMNnjob0GOqUBfszQqsk5Ya19UUtFPLX8rQmUGa1GFOTeq7pflXpEwNhLt6yQjjcFpv57XUm%2FNr%2FJnPCyseHw2yvbHcwwLHRLCSAqhtBBZTfZ22acxLsj8Hod90cIHRxwe5hmlUasXjUah5A%2F6HmUiO0bcf8hYvv0lvJLn6d%2BTyAtj6Rnrh9RGpRLKDL4Y8C%2BBwvVVfJhuQieQLfj2gaMNB%2B1MxkDeNqpcDlIRUaE&X-Amz-Signature=541729fe4eec1996a50897c9ee3e6f8274be3cb9782a4888214ec31cd60618e8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
