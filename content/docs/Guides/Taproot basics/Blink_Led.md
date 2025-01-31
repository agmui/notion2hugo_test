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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M45ZUCM%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJa47m%2BwDdEol1K7niZYC4Ftefh9g%2BjPMQM7EzlitFLAiBBWdN4Zw%2FSTv1lp9by2u8MKM3EsTL%2BupIprSVDONiiRiqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2B0SVS0RrjPt9ru%2BDKtwDDbnNiCQX9bvk3muwWtrq8BF5VV4C7sghLqrT3I3Uh4dXLxeXyr2jq9HttWMnrINg8NQwmOEXIFAbjdoZNv%2BZL9P%2FNlhzcm2OPb4kH2Z1EI%2FctUPJj2v1dp5QiiuQsh1daFicrcBz4zFtaE24W6hovYTZQLKaaUFrU%2Bez1qhscWlxWfWHbAhCCVpyasV4QCgR8qghzknSRqImnLEBuLGDT9I1Jbx4y7rCABrz5Xy8m%2FEVg5lcVNdkUAM%2F237bIniprAhU4rXDsyW7geqR6fFU%2BHgnk6FVRy5gNLKWoSHhnE7iO7Vmx2LK7LL%2BUlkaYBQbcoECA7RnOUfLbe6tyQncQGvL7Uy3djcOE%2F8Vdfjdl413UpMUTPQwRsCwpZ7RkZGDo%2BiukZpyNtEoVWMsBvD6WdBGFuP2l9L%2BbSUf7OA3kFxGuY9lTJ4MnEsuEro6fiARfQC%2FQM%2FTswu5j2seTVfrhCRZsmRQy%2BBhzgJBn7LOrSh2haCdB%2FuKX107CbCc%2Bf9ShNgAxnckB8OAfR7czITsWcQKwpfSNPgSBmgScP83hQsDrmNMGTLHVAHce%2BlKeASZ5LKdY0e%2FI%2F6YHSnLX9h%2FTK%2BQ%2Fx%2BfY3BHYfa453uur4hCJvlGuQ1wPh93uAgw19HwvAY6pgFpgw3NkMEPS5h%2Fzq8%2Bv45iMceBVbjPyh1ieMXrNAa26vH6iKCfGur2XmcCCFP5WYl2ncFzQ1zc1bp9cz6MuvjAYupDqfHV4ZwNtS02x0cdtxtNeqaMEg1O8WILKsLhn4C2r9MCtpQc4ZJ2YJfAyn76%2FGMVlkdBi06K4mSv3qqVw0Mw10AiSiCYRf%2F3qycbNMH4kfvRUp5M20R0g20WuKRE54Ude87J&X-Amz-Signature=7ee124b8a156ffc16b795416fe8c939a0d153842b2bbc7664742c28031036d60&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UGU3S6OI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T050735Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANiFxbuc6Rl2nF5RPZvKeU70t%2BXBAgs%2FlNqqFSjob0tAiAiKSYr0ERSz94Alys9a2u73d5PDhshHWS50KxizWRm5iqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0POH1G8d9z9V%2BT7CKtwD7yOpqfyFOcqEoSPKViZndw75xRFVENcc8gvCAr1KrQnD5FVGPHST4VtateBncB5YycsoFDfp1UUHP8B%2FxkSvjQuckQZjK7nb%2B%2BNqUMV5VGW6ZDPreUyTjibJe71WU9ZmbFiJuCKrs678T9SEeeenDy6CFW4fD3iT95ZsEHGUnvXlHF4P7dsL2re29f%2FvWnOsR%2B3f%2F6%2FQ5L6jZ9ZtJjpKPZ0aFoXc1cSf4XZwxjR9cHi6eIG6YnW4w2CZhXXpG1qoCHNOJrsbyk24idRddmc1NJuUSEjIKAanjit88u1wtC7wAOaXVPbKpPQbF%2F5FQM3rE9uU%2FwvLEqWe1UJluC3dxHvO4kUh0mnFMAX7f%2B0bzJy%2FXfDID5aMYOnCbJk0xCryQUl28mDEW2A%2Fe0hBIjSP6aTQvtqSBg6ZAJV9cTI1kbqxYqi0z0ko8%2FlcH57FwKlyjgTwdEob%2FHJA9WVogUnngAf5nXDMM4BDwGRTRA16PCpt1kvg3tIlaCd3pp7AF0OXwjbINhgteAtwBbbCwU3SjMkELilEvy1kD3xRIhNyW%2Fk0xiCeRjtolX8OlnjO2YrkiRTUaQJnpvsRM1yqvtnRsfb8iBgu4sEpL1wP64iliA3lSixvrcR0RMFV2oEwjtLwvAY6pgHAUqQAguq7a0TPlRdzOEB9wZQ1inxI4%2FNb5SP1XwEwsYO1hmGH7M62hpZ%2FYlUsi7%2Fp7bFVGJDyHAZ7sGrYceyrmc8Esn5OR8kVrji3hYIk0Q%2FF3KlLCIHZqVoo5azsDU4Oni2vhm5nyiurYGL%2F25wtpgWJIrvRtocI2sDxGmoQW1mV2D%2BmpJ4tkQLBUfzTggbJAudwPCfzukvMBB6rNEopZfaRX7XT&X-Amz-Signature=dd5cc77bb997d0682e5a98a1d2bec532aca6ed128b4698dfd4b237ac3bfa2e34&X-Amz-SignedHeaders=host&x-id=GetObject)

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
