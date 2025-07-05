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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXGIQCMV%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJGMEQCIE6cuGHfAnnoxB9WhDDt%2BphJ3sAN9awRcV3Jhx0CuI5NAiA6pX0bYSK06NSywg%2BaP4G4KH4NT6Oh%2FQcER%2FW5x%2FACmyr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMiGDJM%2BBwv%2FBmDcRKKtwDqEmwC6FwlhiH0F8v%2BFDA9k8EAmJ8vk%2BvvsK6J7OzNS7gs8YIWsN0MRIx%2FHI3Dx7wHPOod%2BTCqiqVJWgGJFWqVsOtU0HbucI2Vmk8KzNUDi1UQb20k9861tOhXiv6nYBpZAvwZWZMR%2BPJeRy81b8BRwCp%2B6R0c%2BAIF1npFa2YTEeE6GRAVKE2szrSNyJzRESZqTafir2%2BqzlfytcJUMD2lu8cWkQeNSua4y5jrR12LD6f2iivNZThvPMdxLCqBYaPfjDYf%2BsHZOimvmWmH6qztU1rxJXcbyJ0LpBgUC5sDfWN0jfHAfmCjk1j0SbvqJlGJ58FzB9DRkyANDSF0%2B4oukbpgmtJg0JcKpC%2FGTJ9WcS6%2BdIvE6w0Ekz%2BWu%2BRiTSAIt0DBMZG22sZRhvAGyYxdmJwkwtYtjowPboe5%2F1WsS2TWaagdYsT%2BNblbs5gm43IIvK9RNuS11JvAiOGn53KMf4HHKgEw7cUlGqDFQpElzMgtZChtm0%2BXJ7u924hievsQzmS61J5xljChQOmgdMcz1AJ9uLftdryBVM6Zi0ov1rfLwD9EMQDs9L6BMaAaUaPwVb6UTpEHDrTnYAuLt9MLdzy3IdTisWFi1tGsN2iVVpxttbHik5YX%2Bv8MTgw7KSjwwY6pgEeD4TM2kQ%2FMl030UrBYP0ytYiYeQWkgsZRMMJwl26j%2FAEQEDpmfT9XGre0CDEV50gqGEHr7sHiZu7SFe5BT6EY8QnhAII9LMQdqbW1YI5HnfhZGK7rUoo8HP3R%2Feg0W4Uoa9yWdGIW9EsVz4AHVoGDX6%2FOIEuQE0xHtZkFrSQe5KY9EyFWmjKhuP2VS%2B9XvLCK%2FjyJujfTnlykzObrLiptOd9E3wnu&X-Amz-Signature=65966da0eda25d028a4c40a79761c348ace84c6408c6d351736c5d65d0141257&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SA24B5ZH%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T121408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDgaCXVzLXdlc3QtMiJHMEUCIAbOmdxe2njVlkbKY4ahxbv5kf%2BlYpmlfDFrCGLwEGlKAiEA4f6N1r3W7hJ%2FxVvuTpti%2B1V%2FZI8xsYcuVzf3fgfRqKEq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBKZyKdzEZar3lS2wircAyeWPvRoZcoM27PeeywUI2NzK%2BTmySWG4%2FkG6Gq1Ary6AibiHmQ8VRSuY41OolzVHH5h1PCfjFvfAEdal5Td7mvSsbVEXgGH8Hu%2F8W2QPpdhEMNQaLEqQ%2BpSMNu5HUpfP5hKPvll%2BKAHl1jMYz4zt7yF8JaNzWnTPKatoRf11dPcOO7ON3J65n9laLLdjGocgRU5Lxy2YBMWfcv94HF0xj1P8xhhy9l1dw14i2uoUxDKNd1uFuFqOQU%2F1V5Q7rKyhQhHY1ec4%2FKL4uWdYdiwytg3KBH%2BdD4R5vVsUGNN31DC8WEDF%2FLH5%2BsmlV6aRclEPJfeX5PIUM0lw2c7uw09a7XlMx7gX%2FairO1l9bEtb1rbUSbaJP3O0TIfC2e9tB%2FvG10GwXMCbDtpgKyQJThNsW1rV0tUAwATolt74RFgB%2FIWS8fpkAd0pSM%2BUX4f62S9%2FwX%2FWE19K84JcKHj8JdzaruQRCK164i4ujMk0EYMutoqXn7SgLAnF%2FtTsiJ4uP8LspH0wWWa3sVhp%2BNjO4SpSInIMR%2BtxfBR8d8VIj4oHxUHwnXqkenMCLIyuYxOzjxDpYXpjbWZyRyY8HWaEsR3Xje1y772Bh0W1pP8l82DfLnPB3HAcAf46lY2hWTGML6vo8MGOqUByrlG%2FaL1id6Au3FRKt8eUEvhbU1L33l7Q8nteyyBWWaZ%2FbtDjOxSFlfDj26DybYyx0V4Z%2FlRi1Bq2ZKqHBKAw%2BY%2FKjfpEE6NMXmWOVGF42w%2BQjFWnPpGWEakehmjlk2p4Sd0ZLQI1WW7b6USJL10A2nLOvc9N8CffbbqfrArCgzG3Ei4vKzfWu%2FRSynJlLvokjJY%2FI76Xb9Ospk5EH46sZVb6o5H&X-Amz-Signature=fe5f00851405482c576fd49783cf2afb7f8bdd3aad7580bfc703bb85cafd687b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
