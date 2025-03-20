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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667OSN4QGG%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJGMEQCIHvMBKCNOjaxCX1xm5%2FuioizJxybe5MtdMf0nbuSB%2FSZAiANHI8t4LrNqUfc%2F77QxbtZk5JT4e%2F8Ct%2FnQkIfhxz9viqIBAiI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMcOISK9i6IkadAmsfKtwDaKNahXtKW8jlAJjdPJm3JBiF5R7CRU0jf9fcR%2F%2FhxWNj68dQSBoISym%2F7JHkl%2Fj27M6aWE2DC2H3OTbKySv5PDkrD0L2A%2FDbEpUxlzQSjDtPcjJnvOjvJMG%2FckCqnSz%2F5fU%2B5IC659IQg9xqKTssodBRN6%2FG%2BQCYGL7YE%2BQBvqZE1AJQulWjNsz6t%2BZfZZffB57ez%2FzvqcV8asWkchg8tx3zQnxvxB47o%2BMYHy1vAQaUM4Kl6zNEYNPNKJvNbp6LFyXTDs%2BD%2BkfvetY0eVMaXdhQqK7tq2b2cUxt7dlQgGTj8XJFrMaQxMgIL%2BMy5fVWVbC1dQfsa3XGvw9rSOdpDTDbnCpNH%2F%2FF6BjywdDw1HR2MUec4a1hsKeDlu4ZFqtPzIN0IutwMK6zcHYPMm5%2FEpmd2jJQ%2F1r7%2FpsK9T8abQKic%2BcqiVhOP8Refvv3W84udLDKcxIWdZqCOM0nPB7rA4VUlmZctnp%2BkJYOBWD8nmjZpc1MjfGlBPRm5Ze2I3mb6ee9HsApkqRuKTTPG6HNxLcHKFfqLHvAxlCCABx7kZVpsFn2d52eHOz7Kz%2BiZAKJlxsXbmNxNjo3Bs4UigMAYkdCI4iM%2BMxUfdhE6709FZRNTvXz2EpLs%2FpMGPYwu4XvvgY6pgFL1t8dLc1Y84ENC1ZtFEAu5wNHWMAjLy5vYP8TwcP85f8GGgkbHL1xGGiyTVaW90yGEzqgpCdr9AWIzdOX4GLVgAt9tPRzDk%2FBeBi2jBw5YeF96KNHTHpRh8kOv5ZxmqGXR8ASaqgGHxcoCSwOgYDJW3sAas%2FWvJj8IGf1W82rk2Q77Sg9tzaImgw0hdoZ5ZgeHBsoejJpF6d0nW5hAwa%2BM%2FVSgAP1&X-Amz-Signature=952ccd3796d3989c3adc0dc3e43eb76fd1ef2c4a35ff3041f788ad060d3ef5d3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YR52D3I6%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T081058Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCV%2Bgl7LVFNwTFWDKc3wgB5hbut%2BkSwJIZmdru3%2FloM%2BQIgTo9xBYSX3EKdLTllIsbhHGlqGarGtCN%2BpuPeajaW%2B3EqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAHK35yzABfsS65R3CrcAzDVmmjox3%2BS%2BMvJ%2BfydkljajyclOoclG3OnPQuQYhbpTl7YCCyjrEW%2Be97c1HeFQeZy2cnWzViMLbGIAwDTnY4fnYWmdXTBQ6naPPhlCyyfSvxIIFTnKJZWgM%2BRFP2G4KysN766U1f%2F1I76y3nhXxWWNiN1aowhWWqQfRQYVjtxFv2MZJpFK%2FlMbBiltFY8x46OOR4Xh5G1Itl6SFxlDnwV8IV7A8IWa6kS4CKxhV5qx9hoOdK7fGk3hVwv0XrjrfBu0uTTb7NfbJkErOJ9HAqA7FSCC9p4yMjL2WBjm3%2BLKWoQvlpdD5zEtx%2F%2FjSv9uZV0oIpFpoMxZcDpmzbASRUPd6ezO48V7GDYDKS3ymB1imq0CIK%2Fh0y3ZYTL%2FUW0Gxl1a8rzDYO04cL4l3eH04JLdM0i20FGpZ4J%2BkSlZvt0G7VATxbuVT1BpKq7LIm3v%2FY1YEpNnDIFmUdsuv7jb32x3WRIOya2zLhw0jkcnMhH2isa7KVCoSfFLysllzOEnucEnjrdNYrf6%2FXP%2BDIQoMIDAq3du%2Bi0xSAPO76y3LmeMctN%2F88DhUicliGLGs9z8iPvMGIiHgHNMAMpREYwokw7lkhNuRDJ8USu8Y8A%2F0o8q2nwHlPHYxBhleXTMIyG774GOqUBX9UQf%2FmD7g0nlDe64YXvEdF03AiTDvyTolxxZKZzSJ%2B3UwZu9wRhhU7S6PDU8ox7bcszua6b%2B%2Fxhuwn7l0ooanBX66B6U0khQuqj%2Fy6US0oT5OH7V5jFT9YakP1vdNxNo2VaLYqPJue7fg90wGbMrymPrhCFowolb5Nt%2Bv5hqM8c2MIaf2bJ8W%2BMguuAmA%2BDpnAMKihOknw53ht0anjOPfvIK82k&X-Amz-Signature=cb19d9bdadeacbc1ea19847824c9321e06bde67a7db8734ae80209efae3faa79&X-Amz-SignedHeaders=host&x-id=GetObject)

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
