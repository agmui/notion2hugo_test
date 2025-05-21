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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GW6F22F%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQD88zUayrkWwMfN3FhkwvKPhQaB6oLRzFx5LNFaYyH4AwIgeWTAQ9qW6%2FnasaAV77ui40UR69iHmuAkXXqecQRMQjMqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDO5rl2h6rgURDWtJICrcA3cmmdTOLF3ACPy39L%2FR7FkQ4NScGPG7pR7tww%2FfTAqTrnqHFRCLjJJ%2BbbJ%2FFaZhtraGs24MjXqkpEZJkvUTYp8xCadfE9%2FhJYNfZ8i9d5r%2FUCOo1VMP4inVJ%2F8MLQQVskzbW55egBx%2FM5ThF7ZzT5KmCxEVk%2ByRIfJZAdD%2BqhY0FP9Uu7u73G1%2FXocYw%2FCg5TmfyqUsIUeXN3c7EC4cGf00rmABIKxBqLFhwok5T92UZALXxucttCVjLSvxNKARtycSBs4n9tmZomdNe%2B23v1uiPOrbeDjs3%2Bdlfv6o2WJVCmjOcrk11aE9ksApZEin7z%2BqjD0qS%2B0VEzU8tbqUzbYHxJgJOCTx2HENapDEVwphTpqG4ErTRPSpQ7gJU0FN0LO4hs%2FcZ5y4wpIsK6%2FoSaigYRH7CbZCb3wu3r6N5g%2Fti4Uplt5Gc4KhsF8sV8fqrrSpa4ijmfsXY9iFBD5JGkaJMq4pBE6VCbYoZfegs58h%2BJ94Pk%2B184L1MqnQr%2BxHh9CbnU0uWrNpBgmcPffjJtQAE3NzkxEzUUtwfXhrYUEuJDr5l0I1ooe4f1MfRR4CQzj5neOzsbm39OeceGxC23HUcbeq6Oaq%2BjQL%2FvV%2B9t62o8wT%2FHLIDKOecqHyMM6OuMEGOqUBhmazUV3zafaoJvd57JzNs2tnqQKxI6yjQYvl%2FTRA3gZJfk6eij0p%2Bv4YonmC%2BWgouqfs1F2SVQWkv1Zns29Ww%2BjLzdg51wklgMcR8bW8kLgz%2B63VOH3WR0h4rkLABDcF8oDOuADU2rtr8gfE2YuU0sI7pChkXgBpRS9eqLN01U357B%2BJKsqvsmBdej44quOgOucY1rxJSnPdFv9rTF%2FDkAP5NlP1&X-Amz-Signature=152b0b84b412eaf04877d717d037c6ccc72bd92f1fb58eb5c7c4921a45b16212&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSIFJQ2L%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T170756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQCj9P2q75YD%2FYLaHqWwV7zraSddpxjjOHS1dPTvNNbP0QIhAPJT23nUbQPY7wja3UuOLV%2BDl5Mc40aH7ja4ukVr7AmUKogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy4W1TJXb7WfTN6igq3AOaZ8tuenYIBbW8GtVVXo1JySbbexNPw5OzIqraYBJg%2BZ2CBXTX9BbHLCmoJCuYbvF35wjJeiI29C%2F%2Fxb3VMS2knG8u8SQsEKFcNVjeYAS1ZMeujAlGh7vFyfh1yN1rJ9YANd7hzWtvst%2B1kRmyw1uONbjQhGZkWfHPokTxctOsgP2hYTdAsFF3Oyv%2B3UBWytBB73yU500PJjBOrmPVIlW%2FsJ1E4iiEUTO%2FS40WuOZHXwN%2FN3le8fBiqb8UyG7dlb%2BcGfAIja5HONAi9YGhtBNrxHtZVIKROlxB5EufaiGyafGZ8z8tB0CTs6dLSM7DNAJUt1mi7r74CQro4wlXIlpqfTWG853XFWN8ErclTJdbZFUiSLccqtx9vHkPsdn0duA1Hhhx86N4fcFFYYh5K2ZAN3h%2FfYNXIc65HC7ZAa5KHtUCjcsBJwVVgXGlRYxS42kCWBjLiTFv0FUMMEdXIay53NooIpesdAtt93Yb2Htc8oVLUfMclWe17qEG1WJPJqK7BOUCRREO%2FXYXiqQe8sQSEKiZfke4UfFNKrmbr2hCsX1g2cSpIrualBCgn9VmwcJTKzWtCFokGNjCQDMmulKqY514Ao%2BT5a762L0IrPwdaXmHN%2BOp9JxnbOvLBTDljbjBBjqkAWwLAfwWfF2QA178Ioe8F1K2i0ksXJhZ5JVyzF2UVtBtYdkg56jlmACTAFKuuw888dyqg1Sf6tfcK3K0zmU03LtR6hImdUnhqIm%2F3gr2Ho8aDPpXKEw6zqcGt6kcs9HgJRlC524loEu1wI8RcZ62DpLLZTRCraoygJFL2%2BAdl7nFE0LQOoQtmsrLUW0JW6uhD1Piw0el9XxVHLK4e96qBV7b6aRX&X-Amz-Signature=1b06762c1391b885b21ef6e38adc7776a0faf35d216d7682d9751a6497402070&X-Amz-SignedHeaders=host&x-id=GetObject)

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
