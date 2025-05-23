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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYDSZ4OI%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQDI3tv%2BqO7Zj7%2F3WCmKIovJJND6%2BpxrlgjqMK31rGFXuAIhAOYLYg2bPyWDT9Kl2wQIyyYCQTSvcKQ6DI5%2F0rOP%2BFCIKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbBLznv6A1ieDGkBMq3AOxZ3o4Wsu35aq9EbF2KW5EjQ%2BMHkNgYdGNrFpFnkW4cnaxj9mxNgAQHfnR9WVHsSPQXR2pPaYbHUJMdJgahW02AQ2wm%2F8M%2BldLTkYeOE72bhCeK8pJRlb6pL0GFHE%2BBU3FxM9F2WOgghtKQ%2B45vTTQwWXgRoP4%2BBDbP0QCNNW%2FzVvfgvoJlAXfj%2F3IRoSyd4lL%2Btd92ukSkji4RnADf%2Btkx%2F6mj%2BlSkdREIZAZzkCENdvRYZ8M4IeodZfj2%2FIp2Fxdr2EV77FjaWZHZzMqdAJzkvNM66Wq%2FjvPM3cFNNjH0N6f%2BdBCIPFu5JEEErhyPvW4jSiq3WforkwEmlYUu5Bpjio9DgFyM46D6Rhik5ogArvndlc6%2BjBpkW8WSM6ts%2BgX2EG3wKmBNgmR4odZWKHV9tEi5Y0KBAwrBUcf23%2BM2ZyJt5IxuQZ1yEsMVQrsJoPWPq%2FuDRGA6k3U9gIket6H1HpaWPTmnzHB05QqVgnmKlDGDKLM6z0Hp49Sq1O%2FHultQC6KwrmiDiu9CqAwDd4pLQBmo9oBPuNcWWNY03YwE6KeeNwkz%2BAjZPOtAs51SSxoHqnpF1Ll799c9o8uGihoTG3zLcW4Pa0X2Prhsczh5ftoLYwIUmJEA6YkkDCP68PBBjqkAUbvH24kDZbj0oKP9RuW%2BFZw3ASeHLHMzKbpmw0GkMh1ArDYYZW%2BzzUHFPQKimK%2BUZgsZAOdrfcU%2BZMQeZ9gIbeZn8RCZ0n6UruBgGvB6OxmgUpprGGXpdSwTshKY3f4V%2BLo2%2BZbeBbsJljuig9hUYjg4w7bCKsOYJvzdkFo2PqhWV8LyTafG%2BD7jTaGIs7bxpNcePUu06kKhYmtW86rDfpD2uYc&X-Amz-Signature=d0bc738d87359a5df77cddffd7430037224cbd161af0b0146638a235b149fca2&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQAETNAN%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T230830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJGMEQCIF%2FumOu8v%2B3owJp1MnQ67RmbMsjBSQjRtAEJTmuOByDfAiBGOi%2BSLAFICcrvjzdOSA4AFgHGqGYvv%2BuUZdfuR9cjkSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMczeJeWnxoXZHSnD6KtwD%2FMXUesZE4sTCsN%2BDd4rp6o%2B9zlMlqwNKRD1gyaCVm%2FTEdZatc99FTCFSZHQK0KBb8n9IAHMcCbsz%2BQHVOZ1quGd7AFsutheWMySL%2Bq3HN1dPicFAPZAV3oe0dqYluP13FaGk3JXyh1AnxprCGH6bwzuiJraQo2rXahOA4C3sKbRxdPIbX8eA8eqrBxs02X9UwnsoPrzjNRjEVxXyplCdXG6Y2%2BUgBt1iZvXNtSynxB%2BKwFCDlbmyNPfblaTs8ZZ8MQUBn4l9ZoK5cU4fPsRHFve4Z7eo%2BqSlWb4p5d90eMwvX7g%2Bw9olH1vTXcbEH1jFzLKJkGvGlaX3ww5QWYlUyfBEUgw7dOrSLV3WEI%2BqzOwVRZAZFjPrQclJrBrB0IdbLkoKBUKCPnkQKU16ONgTFYjVeNbuq2yEr3bFdIWbUjY9b8Lz4BPBd9CePcis9WirDa9KfTldgyM0zWfK2L3tQ8VdMuVGT9Q3EoEjPID14QlD0PixXn9k2m8WP63XznEKPzBLItU4RrW9zkqKtT4eKdr9beXGk0U9HsTBQmlWXOZ1lWjnfa%2Fd%2BTGj07UAwIdGzImX6WOumHq2EQpCyJfGCkCu%2F3UMQTvBDplWf6UMYzNrZZyZjzHlpLPMXCwwwvLDwQY6pgFxYj4RytsdUY2orP1DTyPSZ1RV1m8XS6vorBhaBC8W4bq9hjEHImUw8Jblf%2B%2F68moCS8kgLFQdgusiabzasYQXmgcqU6hm%2F4MvH8%2BtxuR%2BCEiCGw0Kg1PFVsdGkWJ3UMtaC5kxRUUUl3ZPxp6z6jpW%2BQHXyHsnrJwJd8uyt1E0v5dGnOrNKSADMbo6V8JbIqlpOUMx0lUUSl4LXcF7b6Jymxv43Sbj&X-Amz-Signature=8955d117dfc70a1acbfd137c6ed6c38fb20925a48cd3359239148e8cdd0c217c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
