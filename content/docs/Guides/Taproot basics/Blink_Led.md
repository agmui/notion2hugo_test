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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WYJETSWI%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHbsCpaxXbw17ZU9Rf0CxzHUH3h%2FeDusDp49JujC4y%2BqAiAd%2BlJHSzFGc0raBh%2ByzX2bLa8R7KUSIoqTQ7xcGx6Smir%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMaHl0Hxuqw27gkVogKtwDstJn6UekOozlflY%2FEZB1CC8uuHAMRFoWLIsDnXgY4Jf9hSXbCu6r2TONw6qL%2F4ysk8i%2FjnuUQ%2FDfE5SKVfRm8ExcvughWAxaZS6%2FSW44Qe6ZpueWQ%2Fi0KkgHShJSIC1xfZ8a5uuuAgfhNCicRc92UDx5R4QktEWcOsnxzQW7t%2F0jX5W1cn5mPAY5MhROIN1boDEhQZPhC%2BqCdxwUsaKxGMOnsBdrZmiTYAyeEJuotMrm0MTYiVLP76HhWxd%2FKwvAGyzN1RC2d6%2BiWwTrbOc9wp9%2FuEKmKlTefJZ5sBugnMVm7Y7oBvsBc7U%2FLiIPc%2FRMIrnZjjadQznXx1MfgLXDHybNC9Owvr%2FJgft0b%2BuIIDor3So2YPuxGGROh8YeMA64dQWFg4pxWxiLxfofNO9WXwS0LYMgNNQSVmAdNCsmYe6fekA%2B%2BdS6X9pAsG6MKX2e1j7f2Rwuu3qbEZvlnr0y6d%2FxGA7MdYn2pH4zNs3V8FzpZluQrFa88xLxEQtW%2BtWQUyiwsPah%2FKOlrLW8rRnBvpmHhCXcP5n8JqhfyTDsspauCtRnyBJuj%2F5fk8VcDuI0qHfWsPYj%2FrPc7wIL%2Fr5yWyvuTU1K8m%2F9nnaHn7xyevux8yn2nn0y9AfIPGww59fazwY6pgE9IQ0bFr%2Brxd7fUKnfJs4dI03b1XEOO5oFSE3kBY8n%2FiaMVZCC%2BVHHEb2UVGXoca14adTslTaQJLHEcWuoIOhxrwtFnfrL0P6bbhgZmSQ2vpAHk5lh53RXdVqqr1gFxoXpw0Au80%2FjDH7urIZW8pTGflbODKf7uKAN5Hi7BbJJ0hYOE9w%2BKzhzPgEtYCbQb5E%2BIEPPYC4I3Kqf3Rre%2BjU%2FxhCc59z2&X-Amz-Signature=07b43af409ecc1c3eb675e763e552d0d992d11af578c17371b86cddd32c2921f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SF4LV6DB%2F20260503%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260503T025649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2BCVzMED6Cfc1%2Bny9XSheLxWY57FkXFHhdaXPR3aUWTAiEAthk0IlHPt%2B3GX3Fmx5cmEkrSRTQvaE1RqpGjgRmkAz4q%2FwMISxAAGgw2Mzc0MjMxODM4MDUiDA6%2Bysva%2F4x44pEE2yrcAxGfKgec%2F%2F7OL6W0%2FhArN6Cz02bwCO%2FlhP9Rq5DWqXpRnh1Bu4azj5EHf479W36I28A0LiWlHH8NISPWiJwwQXn3KMSawkCgnc97t6TzbpdzuWuBLu%2BdnozaCACJA1E4O3otq9C4Z3%2B2M97aT2txpnMxgjiYJ5J8vZxlzkQ37vxJy5TuXIapWj%2BoRZNuSTXTn25MpVM4lsrArt9qgW8XrjwuIdQS0Pekb%2BDbdhihBQ%2FTVHHub28YmztKAcCRW97DEL70%2Bn6zmb8r33PFA5Vuq6S2TMSON%2F0qgQjEPRvEavUjmwtMZ9ZyyNwlV8cdgTO%2F7ZEKbzf5a2%2FQsbtolYI03mO2buk%2FXcTQBk5zjdA4FmPaRo9nDA15jcXaj6kaf8Ng4FiFnJAVqHNmOmJL9VxpzDndHl%2B4arydUDGtwuzla8mHzezj%2FJK0dyIvfojb1Du8hJwPGa63pPdhqtB6E%2FIB%2FMZHz84%2FR7wBoumyv4Ute0fPAIBm64is3fW6kIZ%2FuEhCITkernWS%2F%2B3yDCWoSL6QwKD5A4geRn%2BxnlKTXQl%2FsnVlQ6rch1tk5wARmRs1a7vcbKsixP2nMM%2Fsoyvu9wu%2FSUn90QDN7VxZZ9KxvEfesad%2FqxAH9mceAW%2BEfLR%2FMJbY2s8GOqUB9mHxVsB3lt7tjXTOcgcMrKvArXeu4E83setPma8ki8po8pJmiLkPJFkSkfzhVo6mJasSWvgV0e3n%2BFlvgPWXYP32pkEN5ETLjfq0sEBKBiDm5GscWyK09ZVeV13rmdG8%2BeUMctcYRRXAjy2OvoqSOMpD7%2FzhAO%2F92xWF%2FXgmd%2BdCVSOBB2cwdMDDkJNosZftDnKpXNtmuv42kRL%2F44WJivUDKygu&X-Amz-Signature=9850fbd0d9287966a6b94400a8134d23998b08516f21fab87ead3f35e9a4e15d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
