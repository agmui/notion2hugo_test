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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46667BTVZFO%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQDRqR1IV1%2FL5edY%2BwQzf7pTgrZGBtsGOQ4zfSp9s0wCOgIgKz2fG0qnJZharOXlF1yDVb9lWBfT7dVPflsADuj2d1wqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDO34pJECubxM8ciICrcA4OaG1Jn8qei2MzlVNIZUG%2FiREunrCUgJxsP%2B9RWx%2F8IiQERpCGXyYvmrvAt42HkrrPAXtXt7W0h0L12IIVKq0s4NaYDIHlPZwVYbiEqcNNkBnKueH%2Fu%2Fko5sF7IPVGO798EgrQeXf8m%2BashaCOvukWbR4Tu8ROpidQewXJNbaiyv5m90Yi%2F4%2FqP8oK0TN%2Bi025BDajEIEwt47teE%2FNxarEXtbuLtWdVaKyKGg%2F29BfTjjCs5ZQjOFS5g0FwUsmFrjSV0rgI59HJs86iRAFtvJQpvGLMoH8NcER7rYDglC3sJj5fbrfrUj4drnnXm7tp91DLPKPyOk5o68vAcxOxKkwYTANjTBlfCNY9mX6E3QN%2BiT7X4A72eHvghfoQ3Y3uCVJJN0asnEnwUhEbzCeChVRJrmui4wz8rZ%2FGv7AtGYcgZTMilWQF9csmfxCFZSztZniHbyS3%2FolHwBvGLGb4D1%2FoRzPMXGPn%2F8qsjcjnA6xCqiu1hMjhUFt8mZ3SUxb3peNXPORWcHS5mkhM9KTDHK3Rbm7Fzkg5tUHSi25EjhkOB9ou2ZA0gD0eAyAjru0D3zCkfqSrzU2vXIVkoP0RWXHdbtEBcJe2rR93u2ZalMfPtWrMgK9cUvpQUqCnMM6krb8GOqUBvvOoY0Hfl8r9Wl1ZeFG8X3MloYdD31nEGC%2FdgCP8eL%2BONVeUKVhgvz4j6C7gSTqIHzG1F4%2BqTiQB9yuy%2BdW8UIhimcN5BTBhFoF2WAf50gknjMNpQ2xJD29CWfvYZv0w%2FvrA%2BWKj2CyZDNtQfR3A7Qt5M4OmQDoTdf%2B7yylxPkAx5jIH0kDrNwFTdyWLIqyt9zlLddexFV3qZ71BJu200eEjVdAm&X-Amz-Signature=07755fe39bb07f20afca3a790891a130845d11d28a2f3f92926ac5290edfbd1d&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MDY4UTN%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCIQC34eHTywS0Exrjl4g2bQqB5F2JvAB%2F7D9hmmz7xNL83QIgB5yFnyvGhwoEH6ULBoHD0o9S1zGxyHpPuC7%2BHIqOwm8qiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP%2FSCjIVE6EBLn4sOyrcAxeYwvdCoLhRn2o1I4dx295Opwyzvte3N14Yfulz7OibYIpuztOcwRvHg0bTxpdyX6wxQQNUgBnCYARgkQ%2BrI8exlARQJEFLL1NfsYEAI6p6pGZZwRO6LWb0WN1QajYbMWuHYpfJA7znUe1HINvjBvm7LfXWTGZEVAtqvQeNNvzoZIZe16GMVGqUibIL%2Fx7MPd9CJuKikAK887pNHD9rCxKkKt7lGKrD5S83M7b2YXI0cJHhfA3jE93uoTKrxmWKlaiMJ4C%2F9ZQ9ZJ%2FPfgmiV5vIscyt9d4nsBvWy1VRkkGcGTc1w0NfLaDq6MXzogn7XGTGVP6xoH4X36TZNzhf5coPeusCG0EtOX3UyIykOLdRZ%2BUQyh0P0XUQlE9ACCxaL30EydQ4S1%2BLlD8%2Fr80rBoMoSwRKgDk3X1AEjMYB9%2Fd3XmILs7xGSI%2FF%2F3qmXKG%2BKHMba2u%2Bkcp2mRKOT%2FVQQoy7EjOrv2982t0xe%2F4Iw6LMpgEasEdf7crp9VdW02h%2FcwsZF90Q57mUSl15LgTc6LGlvyKCrYF6OazNcJWzNIuRGOVFqY76yHxY2vZY4dhWyeAp%2BavzvS7f%2FnoevlekegSEeTudev%2BaDk1fRnq8IWusrQl1ORzcHyt%2FjnqPMKylrb8GOqUB0JxXBSSB484R%2FuLBC8dxUvqWl14rH%2BHqsYSquEvtPJHff28%2Faem061U1eXJDyb1u9HTeQu5guKduGE0Pcw0CZNPlR1O4tnt56sUZibRVvGmoJR4YmyDBHKD7dZSiKazYWjmBXWGJbD%2Fn3FFXthOh6HEW67EqCG9vqiMxFYHZcV5L7WS2sNZlXqXk5BcNyKQXa5rrMRU2ugdw2JeGb5rYZUCTHd4Q&X-Amz-Signature=1dcb6186bb4409a6870c151c183e4a3cdfc79c958b7f63dbffd1defd3602b7f8&X-Amz-SignedHeaders=host&x-id=GetObject)

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
