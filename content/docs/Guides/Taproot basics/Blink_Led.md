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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7TGXX42%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T070956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnu7bEhn9knAW88c0jHUKJg3iOPUARdCH4eUTuEBspYAiEAunW0uIKUbz1OpwNbJxgZszy0ukPjaGoUUczTHF2xfm4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMdJymswVJROWuGS3ircA04uqm5oxatZZ%2FmQOceBMALKPT3b52Z%2FF78LJ%2BfBdeU%2FSaf39OcuZqHnn03Mu7sSs2bXscLLlG7llvwvKPYBTtF6BgCy1U1W6LbeOkRXlvnxv2pNr7jux1YTyG7T%2BOZH%2FGYOoREU4w6vXckP0%2FQvh%2BuRjni6tn6mOzBoSv5BGPvCmAKEdNNY8jGg8AyZO%2BZA5SXLCBEAnVMyluZrBU0Z%2F5a61AbV7FzwuUXUynVni%2BY8vFEOu59qS6e%2BvHWM5sQWHPU9WQpHHcsE7npscD36AL3H5oTReYFVAa8UlbYpTfBnS6fC5CvFz%2Bz47ML057r1qsEKUGuio%2B6CY1xu5AS4Dfzd5JOQwP1xvmG%2BUDT3vPOsIIzWzW8crf5%2BysCdWpSwPZhSHKjE1TG3SczqGpGADNlwMfFiH6CfHNt4jwjZoaauD3W3IsFUAm03zMzB6g4EeOe1v%2F8i6JhREKn56tqyppp2irF2ba5AhGRW9ddYgHszLOzR8BsW8VZSkRfYmR99k3m5pOsy78%2BugcV0Q6hDlJ9eJ0lpSriFdEncf4hDiloIkZshVXnNrMRJaN9GDc1%2FUe7S7ePl1zeJWkx%2FxYbbF%2F90o%2FU8NI2J7kTgmEv1BDC9xnjAQcplv2O%2FiXFzML7fzsIGOqUBe%2BsTofVXhq4gQCsbYhSj0D%2FTvSDd4O1w%2BJ4QfNmQcw1insUdh4Z%2F6pgAdLS1wcNUqvRsI2tSr7N8Cg%2FJWg1C1MIE9i383sMjYFSE7DVbU00G33ANo%2BW3GLQw1sqmVCFhTShrhCgmk%2FaVVAaaMDMUam40oYS2R%2BZcOffzgeKUExteMZHo%2FJJ1RWNoDoIT4P8zmqcFGxXPlmpVkCcEKbI24YcC1p44&X-Amz-Signature=1a99cc3f53dd36813c765b95fef20920110b1627f1ba912fb53fca3288c57eb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654TVSQ7Q%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T070956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCLYrDUUVTGLMuwVZ908O460b1kwvAOkq570WmE9maagQIhAIr1SwLT9lVugVKHW6w22cRNEDl8GtEfBETCc2mOkHUNKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgweRo6j8HWe0WPjJowq3AMMTzU13GtVxBP19FarIIoXnpljVMGdLNvcaN%2FB8kbVVaPCPI2pVdX%2F0MzuzNivZPGGZ%2BrHpo3Gkl7i5frReOE6Lrg1wFKtrEM0sum46bB0RyeHXfwV8zPuocLs9gTxVnb2yPTf%2Fgu1kSqYUGihC6J61TSHRZQIcUYCTLDiSJZGGfoQCH4FM3mCOt2hQshqFNQE%2BNq%2F89zNJdazd3sYUUQnuAlioPpl18koKvgeyzHHjjlN3QPIdMehYxAAmbOM2G3e%2Fi2CVsE4UHf7hgNx4QLnB4%2F60Tmm4dCuJD2KRzUAEnfkhRoZmrXIJsShDCbWguz0KFw77l3Ym920aCLoVPTCEuofCGtfCUmM3hM98QEQgt13AIGIu8ZcKHPB91%2FSq0bOHm0tkHPdhA4%2B6qRyDCIsPT9jS5Ck4FT8NjTuQ6xrxbHc7c%2BSne9f2hJHoyGUYrdeYIYmpqkwRTVZPPmoucbhNH%2BcjSTR2InY9lAXVrYTPDEOitm4CZrat5azNbusluetpw18v1WHeMb%2BT4sYW7fTqUsbys%2FormmJ8cDVQZhTpqAjUMhuUFQ5UHKWRyRsJ9S4o54P7cdVyvC4zmkM0vyyU%2FiWKojqVmjIIfnN5ebG%2FZc%2BbOmm5dsAtfleJDCu4M7CBjqkAUWOBqX5ZGeysoZLjlL71VYWhdCgXdFygkBYKhUrZ15iQLac%2BSKrJbUWyCSeYB989NvfHMl55CZI2CObWA3mSAan6V4v5ZegVmHo%2FOsfNXPVviuoFKHiNl4haCkChNoaGL1h4f69VV92ATukjXKo2JUPHIPaaAg9Lj42MzdBhj7A26iVYRwH2Ex35MXgHXlbRT3PqDwhjb3JTRGv7%2BdW3BVTcd7I&X-Amz-Signature=a9b08b7066986403185f48c96f9bd0bfc1cd72835ad8289f592fa663673b7a78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
