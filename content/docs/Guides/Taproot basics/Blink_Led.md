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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YTBJRYQ5%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCguAo95oJzcODLx%2FWw9Ef3n3mStQPrYC0a34QWUapQJgIhAIrpRwUJAyCjHDFOge89o%2BdnpwN62DCz18e75K32x%2BKPKv8DCAoQABoMNjM3NDIzMTgzODA1IgwvHasSbBe%2F9SR2q%2Bcq3AMwQ1gwhuh2TXtnG%2F0gG1nnVG%2FzSjNYSmGkBXCmNnLJGcGnsLA8GRLL6l3wOFThP%2FQxu1pCbf2QA8x5Cb63M%2BMDBc1l2i1OxiU8zQokvF6Hb1%2FokzjVGdTW%2F%2BnL4jrLzskhyjC0I5TR4zv6Ia1WxRzJEqht%2BNMpkYOmPGyycB4WtixSXsFemAGlHe306L9tJab9bqeG2HLoccnrjWTC525rr9yslKk1i0%2FNhcyFp6a946lhfXShUsJlLfZEnNKLIWh3rBwNZ8F2RiRn5932zDw3KBPAiaSf05FBKRqU%2F1IptVlWPaDSrCWlnqKdhX4OzhIheDzzSHf4XuWLoHlLc1ge47EbsrRJ3olr6cm5gPN7RU%2Bny%2FWb2tay40j%2FhFVtVt%2FR7pzbw0j%2F8%2BdF7T0PRH7LZ65bxBK%2FJkXJs%2FMq7UEFCtvGWoesClDvUJogcaJyhZDO307rmyqivjDV3w1z2ULk9%2B4CMJ7dtEzI2c0S17dymjzwMXH46yjB9qhER0kG6RnDmXfIVTIlOH21a3mOpDOJ%2FVeGxjtaHiI0dw0s%2BnMwpeDgMOOflXYeTTyuNBukCbakY%2F8%2BSzzukqS73iTqk4c08cRutRjMUm%2BSkth1%2B31n%2BoNjAlyarLVVA04TATDmnLPNBjqkAV7zmVXzndH0nfWtUFPp7Qcieg5DcO1yALqkhxL6KgWcIUjBnI5RhialFLZ8aOQw4ctHvf01wEAN1vYXTdMbdeW%2BRUl%2BRYW7hsMFaKrk0FJYE43UH9WND98Qo%2FRJWmteWucLthPDik90FHp6jh5sBZFQ3fNpqKaz%2BRk9Kt8xcVDRGYR3aAe81rso3TzbUS5vGSpoYQrlV3kehIlWfGkhZWiXI1od&X-Amz-Signature=33ad01d93ad1a7554dd6420410eaf993522c5e4dbee61ac6c338cfb01b71a7bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F45LNUV%2F20260308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260308T020940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQDeUAdxAzv06zKRrx1Or7ixGvxr8COSuGNWlv5S9%2BnxQAIhAOVEZiH9mIBBy2oNWrpggx6qru2pfYlg6vLe9HpBmbyeKv8DCAoQABoMNjM3NDIzMTgzODA1Igz6fU1mrM%2FbM343rskq3APBsow2P5h67fsvH0%2FvrIegKEDHWMoqKSf6J6AR5xmYgGXFCYg8f%2BkwVBFoAqDgSpXIUmLY42YEQFvO9giTxHDcQCiOE2V3MKhf8Mfped4bEF15wH9CKKOsxVqkAgDawRGGVfH5wDgvw4ciIhI5NE7zDwiPKVOMt04qp89723NxDHS839srFEbBs94qsVHNUxyFTSXllhOLcoLxMRVsPLNGLmzgU0ECTqsUVUV9qkdFgUgBR5IGNMMdfthsPJ76Wvw05jc4Ogkd9BZwtBM3v%2FSStNsY7lf9y4iCxcNfLuTba%2BmB%2Fcz4F13FklPiqIFDZXU3UFp5s6Di4Vj5VlRBUaf7JqZPmaoWYIC6ySByNwUFMel0imrX4GQFrTH39MOeg6E0jDWz%2F8iVbeOgSiwMnbhjLYagf8ZAvVRDLblmIYbN3yFOYxY%2B10slWYZVsSCLEFpLBn18Ms0QMkc%2Fsn9Zqkp%2FctnwVoq3sGiXAW90WKhbEGTlDZr8HA0GLH3N4dw1RVFOTDGX48F8Sg47kSkmBPrKLWP93YnxZ%2FAZHUZqpWI7l24GNZD%2BYFzRQ%2BeLohk1DTpM%2FhxcsWYZfMoeWDMX42wbZMhmLWUBIzEo2svLnrYJJazWM%2F%2Fsv49v8NknpDDhnbPNBjqkAaLE5XyyKr4zS4vMq9g6%2Borrn%2Bhq6Hr12o10RA5MrJ0%2BD9%2BwtKC4fBz5ujJPTwzP%2F7o8HTy6ZcHV%2BzWhlXjcrc%2FAwA34EBBchu%2BEBkF3CeM1sFiKfiUg6cbfK0qMHHP1iUPDC6FIWG80dCnvC55tcdB%2FDM2mJqz2mWo1nneQbTyNNtl2iyYpgB3LyWoa3caWRYWM6uYfK%2Fbk4D9EtN9Wp7cocT%2FU&X-Amz-Signature=ea22454e454e138521b57fc81747c2774964b881a64b1a12bd4caa555c8248d9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
