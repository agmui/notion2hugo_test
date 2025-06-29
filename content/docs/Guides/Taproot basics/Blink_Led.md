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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ELXJXPL%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFE4VSkuiFfOkN643PeKLU0aM9%2FyigIi7PmH%2Fsn%2BWM%2FMAiBBDHGmH6Tc%2BoBYGi8Bzpz91plNdgj%2BSL17HiWb5PdzACqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMENaVenztlatrlHYSKtwDQkgC1p2U4GJQhItITiFz6ULrGMI%2BHI2Vt1uzQgV%2FYT2sShMRIdTzga%2F3gAu21%2BGDQ%2B3xmkmJb0WQPaZgtUU1l6NTVu3Naueg3RhXhWV0r%2FopezObD7nRo7iX%2BPGmf1muFEfgSPLMwCGqwYov479mI3Ur%2FoOpF92nqSdPMKzNBj9l%2Fiy2W%2BgP366KG%2FgSuKOdBTr2ydLhlgP6xpIBi%2BW5X32Y2I%2FQojtdlinZNBx%2BGUITksgymjY2r63BiEhPBmYL1ezlCh96ledthMJDj9r5%2FofeUQSNIQJrnyJwmSmUho5%2BaFL0stri6lOYHb%2FKj%2BQytTYZ5vf4XXuRYwutgfCIdAYmADa3d2i9AuqxXg7cDImAYiuM7hiAecqBxOWrMV8jC6W3JkXknJFBzr9ae6tsGW8%2F0JFEOAh4Te%2BdbEN7KUjm8R%2FSuiVjuKocJzOCTsGVF4NJ3bUoN5AW%2Fa%2FnDwkn%2Fl51uWDWdmBA9NsNP7pqmLDzaairwleCMYTBIqUAJ7aRSL39zvs2E9vQ3yiTvIAiNx%2B26aqgpOQ3f6cm7yFEAybXMCTvPv%2FhlPrJRNJ302YFAEYapxaFcY9sesiBZP%2FA4f2jvK2mDtK%2FQFZedmX3Dw2UkaL8J5%2FmXwxLUnEwjs2GwwY6pgFKyggG0Dtgy%2Bw5Q7knrLg5jTuPzR7T4B%2B2HyrLjvwApzXpJlfvkPQvOL%2FRSUjjDpSsdM3Qdxsv1v7%2FhlgWY261IvBNV0AhNsGDbgU2ExV9d38J2kDFDZq%2FbDkmr8fd6w68UN%2B7p2ce8EKgIx1djgfx9Q8dXX8ulJsBvh7QycsrDuNMOu07w2loeHi2iXJL1Qn1cRBVKRuyA5cbK7H6Z%2F1afBkg26oB&X-Amz-Signature=581a79fd0106915ece7c55062308ec458d10ebfef48c0a5069cdcd782490386d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EIJEL4Y%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T220751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICsitslxzcKPv7jpN4ITVGAD3AhZeFpMYZZjXygG2B%2FRAiBK6iRcbKn%2Frt5pnjqQn5fU4ZzYTRE8xBY45AsBAGWVSiqIBAiu%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMNu%2Fbly2f8Vx1UERbKtwDNNbtEzLM8x%2BMf%2Ft1oqOznpD8DmAJMbV1im%2BX4kTOHDuN4Ni2buyC4%2B%2FbeVxmWPDrKYtfYwJ081BsEPhRTikcenmBROLtSpdbzs%2Fqpt1uT4DS9tGAQnft3bLIIWQfxMc%2FWZParNmb2s6am6Swy%2B9B11PxblopPMRQBOI1Iclij9FSDNXkfg4d4UGwtiW30SfV0LYerehbEDbDyICVNUOcrL4cC4sJG%2FBJMfTwQNkNlnWch%2BvDChjgUlWk9dcxp42XU3Mdq9Fl5tVcp76X6E1UV9LQWfr8MveeclD%2F0FkV9xHLDWtYtw1hAVIfXxARtbXIVCA6XomSe9WN9RA%2FUp4BafrnRfh5HquO8oc6FTtiDQnPRD31oTczKceNEvLIqzDT%2B0zD9hNT5pYmF%2F%2BNCqVn3pOEEEZDFnzkNJc%2Bqaa%2FdpQQZxT%2BKbQEsGTFnQGDXdUKt%2BUM%2BPEf%2BIoQMR7gGXjdWz%2B25CBmmhHmJgeIYLwRFGDxm8tYX3qql31%2BkY9PCqnX%2F5gvBaV8BsQyCtUETsPqJglU24g0c%2BycyzLCl2KlLE8GyZudQbUSeYRMKDAKxi7U9gMtkpGxAvrrO%2BmzgbyU2%2B2nPqlDlrYHUtr2baZzMpjk9ys8d9SrA4%2FobyAwl82GwwY6pgG%2B3vLpoxRLEewWsW2pmK6XYhATAUj2PBAzENrNNzNr3xZhNUdNp8Pprt2tl2maoNdx9pNkqVrCA7SFvtr9QEhvluSF3mw0WE%2FYH%2BInCKzFi%2FkDH82Q1ElEhxEW8tW7bho3rWYH4LR6HAZtaOtAtYphPve2ld6d%2BsiarZ2GppmDjWkQoIU2%2FsiXJaLMTDR84ffvQVQE91lsXNzuct3bzOZ8%2Fv5wErzC&X-Amz-Signature=8d9891b33fd558f12d0db3fdd925ce7bb0e9c5db0a39db7f40409dd9e0d37e79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
