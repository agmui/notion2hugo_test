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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFQBWK3W%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIGAC23GCveVEgme%2BShc5RzC0FtZ0HUkrI0Et43ASnVxPAiEAiF%2FH7%2BvWp3yfGMdS%2BvqkfOtuSd0%2FgWBRKsqVLYmBHBoq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDFqJ9YuTIPlrqAo7wSrcA9C3XBuzX8kdvosKJE94rhyv8vXnY%2BCGpPFY5%2BlZMObGrAv5TXMl%2F04xwziEQUFPRZNWl%2FlYDkG%2FyWBf%2F32598tqXWRt2BdoC8UTFXhhBUQdPEybGs5T34CX%2Fs8%2FIBwDwWRifGzVzKGIQ0fqEaN%2FKBl2wM68EXwtBya%2Fdj35A32wodigbku83Rr4tavDqb2k1VfK6k6bOlaQHRtYElTC6WnS1RJmgtPdGzS4WR%2FgVl35TkSw15zVx5PA00qGiVLd4yanwPVh3sMaJuSKAp2nKLcqglG%2Bs3rULb5PKgeYzV%2BTcjmL4S5sE0gmsMg8iNx22xcW3LYtt9N9JqJUmpuzan2v0L9GyDDAgW0Lad9P0MRl6SatvNzJhIyYM4JjYf8O2RJ5pefpc63FEgCSZ4jJFJD%2BmjEQ%2BkoS6v052EeZe8Up6xrQjyOrtkxNGfzxnCao3mOQEGWtKlxEHF63qXuqnVA1uI0bDVkjbp1RDzebNTzVZBm7FOnQdM7gd2V99o8U%2FH7%2FD0hgP3m1KmvXETRgUDZDf2POIMlW55bUBnBqnCRe6AGK6gnZBDwZL8pT9Cg3t4aIkq8dfM2Fsonk73F0OY2lcJ4CFE1XYF%2B3sKJNBR8zPPCtjsZzbfWKKHHIML%2BQ3cAGOqUBP4OxSeTmmMK0FMlxIAFpCJlDAC%2Fesv1WAxitQ9mnsgIDqgnc%2B7RRjnqXbKMpkLk2fayrcUX7jnCEb%2BetjeGywbsWGqm%2FbEE5voie7nz0jKTShBQujtnmsSjYSEOCtuFJlGZ80Dql2anv4C4XUEFr7bBqmhqeW6X3022Fq6lnP7%2FvUpwwur6IoV0D4xDhXxcRrxj8bPAknmuWNAU8l7gnwa%2F3Kroz&X-Amz-Signature=87661b9adda024fddcf2ead8f9022f9f2107c26c5a591b1e3bb58c26212e7a78&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PEMDG6W%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T150726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQCfbi%2Bse7ELb72%2BRG8FPmy6Kx0ckprqiN%2BxNWtArvDrtwIgexKGJvJ%2BNH%2FAMJ%2BtolBdTONCMKUmJ%2FYJQ5iddLXYXXAq%2FwMIFBAAGgw2Mzc0MjMxODM4MDUiDKqFThhz%2BPCiLrBoRCrcAyMaAlihxV10pkq9n4%2F3b8Jcc7X5EAG5OtuhCxQo99aF8nnSRTCV7lCuVLQovBSs3eRpj3QAc%2FVgqDQh8qAkxZbUtDCZJACwWbsihL6YLkcuWxhJDnCsyal%2BRZN6dbQ0o%2Bj1AZITAsIsL520sMMLm2fg7tAQGIdzIVIOy6xGbbAjeLba0KthddaeHT3g%2BBsvR34v0ujSwVt0Lp3MB4TYgKEQlO8K4BCQxe4JQiqTbsjhAFLEtvFezjk%2BaoqkPF5HgJgNgukdvRF9G3odZXqhrfd6%2BSsaXkHJn8aU3bPkqgCO8tQmYkhtoRUAmz9RAH4aLOUMKTwi%2Fkj1jhPBl47lAGAVlsoTb2kEEoJhhUd%2FLfg3qrhOye56%2BEPC3cZHyBPizTTAQ8pqaLqAJqwrUznHWT%2ByzTbjrFTPU6bu98093KFHU6Lt1sV%2BVzNkTwVwld2R8%2Fd5p0C%2By%2FXGsJLQIYNIQDD1ESPgk8jpHptUVTffc7xdvawzuNmnQnXwxJmCB4mYPaRjXc7fFhWuLTRk5jVEMjQtwuQLdqac0utUbGLPnMpaMon8eI9Bjqi9f93nZgi%2B%2BX3ak3Alng1ldqysKF6xrZuXrUiq2wtzhaCDdiAOXGMMy2z9Po7mWXYTkuXrMNmP3cAGOqUBuavp2TnGV7NS7HSCqQ%2BVxH7UB4Mz0bceJUXxRo4NcvLA2k9j5F15rlrYSsX%2B7YJhxvTTNk9VljS5n%2FKzAjVyWYhsqlGoPe9b3RFnLy9ljeS1Kq6015XHFlb4rK4tCN%2F%2B3RCz%2Bn9H6BU%2BAmin%2FlhnBTzQdXKKvYD%2F0Ws6tENSiLJFi%2B0UTDN%2FX45rzCCFT2LGB3jFjRLS2zUtGgkFTc8juFz%2BzcEJ&X-Amz-Signature=c9da412b3a94f6068e4e9b2b2717c43c0df76099321964f1d72f2004acfaa778&X-Amz-SignedHeaders=host&x-id=GetObject)

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
