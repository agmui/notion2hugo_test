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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664ICAB6K2%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190104Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJGMEQCIEg7%2FJOvvaJqI2p%2Ftt8jxJBtpHS9Erxb3UEHXhzyBOFoAiAZCWymYJMtQSL45JQik%2BA7H2eTCWqT2b%2FoGWEOP6CZiyqIBAjY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEbQgc71UI6EfpEFDKtwDCWaIyd785WIy%2Bwp6RUcaZ0xuYTf4Q5lXpxCu1qfoKRT19Lt6mkegoP3773biNemfcsVmxWMOkdtBkY92hwBJJ93Fgifv317FiFmjQKGBFM77hPoU5jVVViB7bCghBCfKXMzz4t8OJoM1RMCpYpuIV1u9Yftt8jC0YIN2EYU0funbW61ECgcqvP%2FocEH3HkR6MNUgOtN9PcxMlbTvwgjML6yKf8dzLrWWE0KMWueXIMBkg0DvxnmjN67IUcXDAz6jBgcgkkSPDoMPfbyP6mFMRcI71uNM3TU12TJZUIXfDQliTYiB%2FXaGd1CmFAclyayC6PtUSSCmDe0LoMYqMeENGj%2FZ9KSc7vzzZu5Cs9JKVsfQpNwSSNiykYgrkumAQiSvJHcjYzobn%2FWmuiE5n1MUIeCqsSMboUwvC0l3Z3LaxeHfyrXyfgbbwaJ03v0E91C9YIYPmyDvtrXotthyWG2XbTcPZsNfj7ZPmr2QooKwjP2rF4c8c3QXdo81RYpHPoL3BZjIH7OayiObtRRa8%2BYKYAKZrWjOOOJ8PZPOhvVLmosUASmxynIsYud%2B8ieCADLQR2a0%2BVoweTdsdZVfbGt0KSele6jBDGSunjz4NL553CrF%2B%2FNXRZEPfKoKXdcw%2BPvpvwY6pgHvyw8%2B6tqhvs07TUxzdypbPXWJreIMI1059PSGmYOK538ZSTsIDHyGn%2FiFRtW8VCdMzRvNwxRoEuDcmUywslzGiWBhqcwMpTLW1aoTaSrHdG%2FgMaqcgA5QkZmtwOxtXNtsRKw7XmIT5ayJtfCdiV4Gbzu%2FiCZW03C%2BEsZjyJSfsPac0iNzjujXbKxXowJk8I5F9k7gp512ZeoPBqMiF7HbrwhqGouD&X-Amz-Signature=d4f4fd9d5d034eb06109a9e58c7d9d32fd75fdef72d0233eb8dc4694c2811fae&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XZWFLHN4%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T190105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCAErFKEY1d1v4S1SCv3ZP4uZPPFF6XscATY%2Fyu4IT%2FawIhAPVSHTPlMEjvo4o4yef8CDtlPDhIzokfV2kN%2BhMGrSK%2BKogECNj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy4zcNPzbtYl3FTI58q3APU%2BP5r4TG4fBFzpyXaT3LNGwvsp%2FiSTUE%2Fna0Di4lXTEs7HlMBAm%2B%2F1lj0OLm%2F2w%2FoktJnOkdT5VhqPeiXs4pt1adblVg7JLeKuX4FVMYAG%2BzH%2FYTkRzfox0HDYzqGaj79aqrFB%2B1SR7chjZkdvKZEk%2BhkpcflIgpB14aGsprKbjqfCeedOZNUg7CywIoyNRwZOc0zJ7nezBbazhJquyduNtb1MMDw8tdkqB5dz8%2BFU7yP%2FVopDxDZgDG8XOTj2veHR1ts88RQH9MbtbkW5p6hyP3Sk2CbYchPx0vQKCs8rP7g0sqOZQvcS4%2B60qGiN9y1i1UxfEXYWYdDhaNZvttxIzfJjAgpba7pGhz0eCzj1dcQdJ7znDmacIcNZaf4RTojLH9Gy6k4LZ3KfqRt7dc4ah66eivImyDgrb8JnN1HhsVwkoziZE6X2WrgNxZdgXoYeGX3iaEQ6NdbedWHQfcdKi7%2FwPP71ugGPTaISu5D3zf5g0XbAYXFxjPDd8vs%2BBNcv6cnu5Dv6xNYA60JO8jPQNaktkn2H2xH%2FDqmThbVLVqGG1D5d15%2BSZ0Nrl%2Fn5PBYJNW%2BW0Qa4Rj5qweWqExB%2Bg3yZvG5G7xnqF6TP37zW0Mkke%2BBTFSHJojvujDl%2B%2Bm%2FBjqkAXJbYAP1Lkng6I6yPJ0zl3drfWxVz3OSMcsYzSatcFpfC%2BO3cDVtxFh3ByRbTEki%2BImbViGJQKXbm2a0F3X2brWv3sM4e%2BbI%2FHqpGw%2Bf2ZuC60QmNK%2FV2LERvGA2MgpFSiKJEv5CMiA14WvbdtjIARnlTwiOn9TgNeLAvCItLbPaCm5H%2F9k6mKy%2BdJroMmpSKNEVvWu%2BW2R87TMhaB%2B9%2FwREVIW2&X-Amz-Signature=e2cbf4832c2609efed5afc57a32178f69db8ae4b98a0a14157887b8fbd074a51&X-Amz-SignedHeaders=host&x-id=GetObject)

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
