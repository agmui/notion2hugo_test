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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXR4EIUM%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDnGEQj2Ij%2BX2Tw18DxyzLm5bsvCsOJbWiwB%2BCJ0qlE%2FwIgRm29l5CyZVS%2BaKtlGLizjldIvvkZYEXk9Q3w4Ubl50cq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGIupXC10O%2BlnUCCpSrcAxjJqWIOoGr0RkRWh1Bh9nVS18KTAaJpvT%2FOKqDBF0woghdroH%2FeQkd4SJHTo1BewJAjiCeSVUHOEzDuwaBSSKDg1hMnrSPAuLj6WESPLtSCEYmicAhi2hgNKX62Hv9iMxpMIX1i9VaxhMjPGuqHssxjrxqpR0kkMtb1T5a3J5PuyCEx1qnHrPfObVkSfGWut28JYyXrQ3iAlVDW7nPQ5Z8HY4FSpe6OBte9a9jmK6b%2BExGGDq0yFhi8BLz3HBxUm13%2FNmsza03uPer29N7Znnq6U3lIES7SHTMlTx%2Bhuh9Vrsb2bCyU1TlHK2j6u4ANUNQvUIPNHaiuEPSj3%2BZgg1GJHA2eQK24ftOYHsqaqafEXSTpeEIfU6gjLVa4Qs1CyVpIrN6yfBi5eTNtLLwWCpMvOf8AUq9jkqY6Ba6hA4XwSSLxWAFaYHukmrKlqmKBOByC3N9IMws8wR95JNcqz8x1UlxMqc572O3P0W5kAtI495Xu2Di7xws2M6X9Cgiep%2FxtESw%2FRsaMWEhgBz3KnhpR9X5e9w78fAQyb%2Bm6UeNAdav%2FGylKcMLXzERNu57bYcoOGg17b%2BJPM40g6gGDjITaLadkb7JL7HYj4qE%2FIKO9AKz%2BvVarl6lxwF%2BTMOj22sEGOqUBOuTysv6KobW3XDCmfaBgPy%2FgB1RFlnC18tPOfRMX%2Br2cC7eZaebKqmFxj3q%2BoxUkCdjxG2u%2FI1%2B0Pu1HYueiUV0z0b1pEhNZdRivJau0qeOmJdX0Ia4OcSsYqxd1%2BZXuZiu9GYFLmWF51WNf7d3icLivrH6j7R%2BYbEs7b2OYslQNlqsBO3NeWLWW0FUh1Uf28cv6WFRoXK8hIrOFKxA6RsmoOLes&X-Amz-Signature=cdb83a9ced6dbe3d64bdfec97a070f23dd3cedb188a11b6b31862cd8b4013fcf&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK4FMPM6%2F20250528%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250528T101015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCmwTwJpJwbN%2FPArt0zf4Kf6tQGGx0W2qC68CQnQQE7bgIgI7DV1%2FDUiaPKsqY2iVgMsVldMhSYkdOkSkFncdl5AgEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDUQVcLj%2FqRGAidJSSrcA7XpKRk%2BmNj76uS2PDjjOHnmORS67oBamuaEmZdsLktj2I%2BAp2jHEpfYGRHryV9qXKG%2F7NhOMdoteNZmAchY5E8H38oQuEWzywUV1%2F4bZdiJxzSB849RUrpUgHgjK7xkWrcLadtDXufiDxUQHCCJzwikY3wwWsQYqNpwDiiHtuHxVshCmqqbWx5Yfqqj6FoE6A9QFAIZlrTLct7seEtQ1Z6sjGXnpzblnQK3BS1CKogkqoQCLcGx1qykEu4MVjPbyrT4RAbxDS2uDq7VJpbF97xCVjdKIkYPTTso8BinbrzEZQ%2BSapRYIq5PyD7kr9S6Nrx3shyxpiXpC27h7UNpz8mBb7Jw1WqKNy%2FsOPnmKYzVKKPddaXfwWdJIZPUf%2FeVYvzdLwIJHYYfSQZEmGDh3tfRzAxVsZQwqNYFS65kycOSgAxEjHnI27jB81QnglCAr3H2VlFVAP9GabkRQc%2FHZEW%2BWd%2FLYjiIjCyKAIyqcALNW4OlGELWZaMPVJMTcd4%2BkxONmCLbZpwFjf7HZAMA%2FdLI5lO5bCigDIZqFFmQEq1BjvBVUCbiljMaAnyspA%2Bn%2FGfFSwA3FLFoY2WP12xxDmmFcyb3annoVuwoVUf5fz62onk4%2FDlN1lkrnQQCMOn12sEGOqUBkR%2BYFNE%2FBv0ndek2cFSDsHvD2Vg1KnmD%2BRtLeRwn92bg%2FgTpQm2QPoprxE5f4Fdx%2BsC%2Fqh9CGwyh8NOW1ERQiUXdn3FjzmRU6PGkf1nWPGJAoteguBmfozNWfbme5hkj9BJ7bLnI7S367lix66w%2BozBTeb6f%2F1B7AaKn2undQF2gF%2BM0HvdeS3pcci3Eu1v81GTU8U96sBcuj5BDI6H40hvwORbq&X-Amz-Signature=ab19944fc5a76b8cc2103abed654b839a4069e2d7ba2b60a4fb65fadbb563504&X-Amz-SignedHeaders=host&x-id=GetObject)

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
