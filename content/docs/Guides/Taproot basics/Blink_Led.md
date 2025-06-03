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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYCULI7U%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJIMEYCIQD%2Fe%2BkQSJIA5C0EwF9fwHCUpdaMtEL1uyjXB7EQhh0E0gIhAIIrU3TsCQDt5bDmned5nW2JG2muPcmP%2FYshd7pBg%2BqGKogECPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydNL9u%2FLWWBeFcGPsq3AP%2FaTYhwh%2BTfDhEoZxTq%2FeQFKL45EBgNfvSrW%2FRpxnrRUVIjbVqRRlDHhpWNZqYz0FMhMFbmUAIgX6OEz%2BAksGba2cWYBpwvYnk3OKbjGL0dslqEU0VBeXPB4wqTy%2BiGdF2Leiwai%2B6jEGsmaS8JZM570RDhftgHEjeXW5SiKtIG2Wql8H680O4NWIVHqKkDsrTfg%2BiA8C6K92X0qSO5DqbgvBh%2FYcE2SI%2BTbjs3tyxELy2YEwFYrsxZEw8V6qwYPOLtHQKktyuXktAHfqt4cl4IsOlX63OKR2HrypwWXLHzV71SuNho5yO%2BX%2Fum3qxEOBHwdGhUtNPlR7ZPLIekM1l0%2B%2BTgLGCFJqRLb0o94hH9Jyt9%2BIm0o%2Bwj9JImE565lmYyaJHYGcJ8Ah%2FxhRK%2FHd2MbFJmo584EbxY4SsQSd0pRU%2BDpyEcghZ%2FDFCFBocWeactv%2FQMUVSG6lbKD%2FBW4x1LAJX6ZlOU6iD1HQi1sCSFwpwUAC5d5S5OZuVWWHYHd6S1QUH0CRrzlikP%2FpkjJbz9BzG%2BGcnWTUEj5PIrq6LGkyiRXc0BUeUHjf6axFTOloTKyLjXqE9Q7InuIvzuNPQkDVrcBaWGPefzkTsTTIDpV4zJIEsTlX8L0EByTC75%2FjBBjqkAaqVT3FcYaO5YohY0lrw2IUtWaO4p6Y%2BXmsBDkbJ5t0F8ZSQQ%2BhaxTF79ArsBW%2FTKXy2erTFAtDhMY%2BpFHBAOAzHJlgEVRK3r%2FAVjDySfiVPcKS8GlxCyxaP6%2B4mWxOjIptnwRlE4%2BjKp2I9iSld%2FMACuAKK9nKFLuDrl2%2BS3cVJ5aubDYljhuszEKGdsIfSMe%2BDHtwFDRHnXub1OSQbZeVtz4sV&X-Amz-Signature=073b71990f76b9db5e36f5a7d1364dc0654785c1662bbb4da147cebd29dfcc84&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TCEC5OV%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T004311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCmLrD3IoHXhuX4EMGi6v%2F%2BN5SCk5j1ybNrYuYiHlTVJAIgDnUZxGUZkLAnfwKMM2ZTZBHUrSIMV2oLGt0CJRTxGH4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDANQN8HjAx1OmZH0ESrcAwfpo3wcpvk%2F3YTgnyzuoZJoV4JbrNqLp9J00k1aQtoB4Aatms17dGEI35rLLnwVC1Qr%2Fcq0Mkz6v9v3hVtaedx7uU4OB2zBsRJQZJR%2BOnOdTUZ2uDxMtVvQUil0%2B2RVYPg8xZdivLFurSv3ym2Me5FJ145zJgQoK1xIXcQa26UAk%2F4j206akeIsTzCtWZ54o3TYfupG095YaIFY0VGGtVjBkdQILYqcZhw%2F%2BtlVr%2B6XakegU0uDQ9mFh%2FV1kJY9Ft5NsTL6uXZlrNaJcgLInjSPMUSuxsCmRanTZ807Na4wJwl4OyksQ8GqX2hRyyIHPF9CDgPglVzlCthm1ae7FCygU5OIB7WPhavuJuUb2yO5Gv6bQ07SJteDLs60jNkPTBGnhLjHIPYeUViYy69hE868SR9%2BdYRzUIEbmRRmgJPTakRaLNtGJUl4sAl1jKhuDRq9ANbO5%2BAh4GjJ0lcVNlzB3gZS3%2FIUb33q5XrZto6QKcSNXw1ABytaYMIobaPPwecv1cbtHi%2FwyudB2oVpHzfiLfJl9rFmfZGAUv%2FilyZCAS5YSK%2BeWJHt96YX5mWP%2BgWHFWZzIlaz1l090zLDlwJZZWD8B0IdDOfLogWSdlV6Avo1t3qeqAFI6nQoMKPn%2BMEGOqUBVGY42YyxDpK7mH4zqFLoe2Fc4SLKkemBXLNDgu2ur9fsQ4EGaPEIuOOuSL67WAXiHlJZbB%2FhmnUlIHm3NK6dc5w8hDxjEx1pkkRDFwaFKG3O4BO3NlOwdHwlAjc5svsl1S1LxIe5A%2FAV0X%2BKhFlRZ0yizKQI94QExcst6vmtglp0cpg9wQ4ziUopJShc0p1ALRdyAyW61l20WSVVnbXi2debwlF9&X-Amz-Signature=8ca8fac16c1ed6e438afabfda5b81b031036b8b35903adb92f112118fcb5b05a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
