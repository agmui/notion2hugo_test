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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZLMGVORN%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBdpvaFzFXA%2FRba7GRd6yzAmYxNrH2%2BbKU%2F6wQxwpygmAiEA9HVbx1PV%2BpkbrYyhJgCqsRjJ7hxOwkuxavMaIvdr6LIqiAQI9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPMvj1rH02UpE92jrCrcA%2BLQUh7v6WDoisO8m6u3KDUg2lDDM5nFRHz4goHspGvxHpk%2Bhh8xQ6dbIn73T%2BHCxUcvhKvS8YlQe4%2FN7SlvK%2B15XRLz6lVKuORp%2BJp9QRhmvAIJPXZ4F9SsoeWXxY%2B%2FkUOWixxRyl5LPGRzGWS9kbLpwBpQmMmHxRlj3x4QgD91cpFad24b39pqU8h8L1KsR%2FaiLfgEt4JtP5PZH0s7%2FO6uepOCWNDDzUDUP5UN8J0IOzyGziOD5MGgn5xNQkMlk%2FtY5yC9bCzMydstJNW3vCv8xh69A7Y6gWdk6UUBHo9iFrpSqCqgFnyRZBONxQ5CV3FWc7oWWbvHyfoydz5bLUQNUBIdo0kh3npC9YGvd1MZvJH3RAWc4%2ByqbVdqjSBVeNN8KRQtLQRDZIKDi%2BaHtfOBr2AbczPMgFqEUVlY56usL5mDl33k02iTiWVgGV4SAiTJt121N3r9KbqJvJKVu0QyvPZlBwoMrVA5x2qP2vsuXxkUUVLeQOHcmwe9Q%2FuQS1cV7Oq4BqMg2BxI3tJS4EP%2FqRXfexwNxBpc%2BrmLzguhPlF2VhdOe7fjD%2FeAw7zw%2BEHuc3ul%2Bugt7QvBeUPy6%2B%2FXSZLvAnOyd2nVUQgub9VQ4Ktnk8ubBwCWr51pMMiN6b0GOqUBVT3WMT5vo%2FDG%2FumW0TW4Ismq8umsGWGqpQf8A11KQiaOtfIjsuTtYGbx%2BocwW1OlkDDFDjGdEowL15Sn8KseviSj4yq%2FyBgfyuYQxKjBh1V4SFqsurXoPJTLK3yWGIofZWtB2Qf5didT7BQgit37NRPGv%2BW1BYM83h3B3i851pXNgds5VNZfDSt1DTsLkFtaf5lEODCXR6L3FP0vet3nKq%2FinIPH&X-Amz-Signature=07029e4f0097a157140cd5bca909848725022529639f4140e838be29c1c936f7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIUVPKYU%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T003914Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE99LIVSK1mD4ioarTFCJYAD8JhHdUuiQJj1cNLO1R%2BcAiBY1hTVhguXhzyLePwjNumAfRmrjRkhCcZczL1VvxgMTSqIBAj1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6ApeV5SKdCb%2F4rjbKtwDh4YLsw9zBZrllKJcfRzPEVoLpI4IUDu%2FL91%2Fy5o%2FH8JWQ71QmI1ASep8LeMbcUvwa1%2FwiDfoRas2IA1Yc9bcxrHrV6%2FCbk7Q4eNuCe8fbxGtqlnC0vXNQ3PXlR%2FQCaxvFBsWc0CDYX1yQ8rcn1Vs57ee761Zucv25SYyPAQ25pDB2iPxfvHebNS8t1skP%2BY3OCsJckYC0Zn3HiulyPRriRfhcgwiUph31sifnquyVPECzdHD%2Fo7GHKy2KgqCA8H1MsnQdMlAnS%2BDgkT93VuU30QBM6GUu0n%2B7xsV6sD1%2BkW39gmHDCptuFnwbUpJrTbZfomzm8C4dixN5fi9kU%2FccTC69Jg07CcCxFk72vAPbPo%2BRK%2FcfkkEsCmL%2BnZ8zjsphDtpO6054XEfjY4vF7S3J%2Bb6AbiAUx5bxbGFqJ0mip%2FtwyhXpBPS2JwHWxProMjhg5uhAhIjGjm9%2Bbk%2FWBZgV1FnQpeLvSbazQvzMpMFqHnrqCrRdNuJ%2FieIrkMuo%2FOnDI7aCT0pJsbxF2AcrV6NC3qf3Xo99qmE1Y1k1OlXDC5ygnGED328a0Zdn8j9h2S%2B8GzjfHCxl%2Bq2tYBot2BQQcYdrBIGlYeNZC7nXS7yaF%2F5%2BO0aNMoV7Bg7hH0w4tnovQY6pgEKYtIDXLGVWwuqOK9VV5ZXJy7JVO%2B6riW%2FQ%2FZrt2UuwiPZ7QJQ%2BnpHA0sN3D4GhJ4axTeRpFyL81lQPniduTkSdCQ25ND8SVrV%2B9QbyzOt9H2mrQi3rTve0PrqzhxADtIt0kC5688E3%2BQV70GhF%2BQzqi6P83r6cPymDDwGp%2BRoQH0WzfdAIstOABXRmHluFc%2BjvLgFgYz0dNKOFUSSBzazYXdRxLjl&X-Amz-Signature=56740fc71e73be1c5b450cf6a828885e91a0e479755151bee46a3cbe0e887e1a&X-Amz-SignedHeaders=host&x-id=GetObject)

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
