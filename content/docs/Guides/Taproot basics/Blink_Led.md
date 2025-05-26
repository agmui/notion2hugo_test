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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZFG5XQ2Y%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIQD5V1rDxCTqrcYNutp%2BB06wpsVVye5944zMtQixpMK5eQIgVjXZSCKXlPTU8z9MnIPwbbgmNDhIFR4m6soD3xYdrBUq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDDiwFKfQW0Qia4JPYSrcA7V91SIdRpyDnYx2b0lHyONiq6LP53huPxqBiamII0QI%2F9oFz9kDzENGoq3VOfryiAdkNk0iOTpURm0N33MdLhVsuNCTXswaet%2Bj1nkkuhlIEu6XdXszXdBBxMK9fdwS4UGc5vQc3h4LOXR5JbaMemyM%2FOzth3oAxLYCwLr16cycwbKJ10%2Fvi8snUoAfyH%2FfUAMM7kjYrU2aPQHddk1Akjh3LUYBtsux4NfqdeRtiXJX2MMQPbLv7M8e8BV3nkzJqeHUqYDUjmaEmyk%2BOUkHBTxY7DPq1zD4SQHD3htpIE24hEaqfgIwuVCD9FgIveG8rgQMX3frYaDBF6kQNvR8qBuY%2BredTjUSnwx6QBKIhBONlScdfbveb0nFDFF29Xy3hlY6S5ryuT8%2BMaQyLfW0H738D6y4lHcRjNsCZ2kDCTesdO%2FIE7mOhkR5QLVdm7XvhuDFd%2BsyRuegEppN0Nmt%2FgLL29bJoVSrznv8ynA09ij5TUYofH6mrMl0iwel8%2FDsB5SWPvbcQaH9Itct0hb8AJWAWTm8FeE7yQd7Aeyb8BHobReRoMPTx8IDxo0G0yrCbG4uyCy%2BQyn5XQS3IgRj6A%2F%2F7SqM8fn7STASyVNTGh%2FIfygq3TvWyQ9qYXEWMNvW0MEGOqUBjZ9Ew1wDsWVCqINdEA3VcNG9f8Llkg%2Bv%2FEDAylAIyGb%2BUNr%2FwrdvKHDOfe%2F62HjSjsz3twobW1dv%2Fs4oUaLKETV3nZqcegR9b6SomPBBYie12KvYT6lP1S6%2BOEI%2FPIgYWWiuZRLo%2Fa8RjVNOSVLTizWALdYtotsH%2FjbVFyCNdtEG6cBogKOFEoEtaGYg%2Fjz236DU13b2%2FLIWJtwzceoXpPX6UGO4&X-Amz-Signature=f23431bbe86dc5bde7a69ad5df89e28413276306af5acfcc7284c2f6b768b809&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5GWFCYY%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T110715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIA%2F6MP7w%2FKyvW%2BtjKXcgIVHqwM209UHceM03nbXqy3R4AiEArhNr%2FtzFwdHkQPI8TJ87FsqY5sJ5udytdradDvHXbPcq%2FwMIQhAAGgw2Mzc0MjMxODM4MDUiDF5RpXBgYBE0Fcp2DCrcA%2F%2B2dU5sEODlFP%2Fo%2BoeI%2B9KfVlZW209mSmvu0SoDHmwVKiraOg2GHSRf%2BN00%2Fd8QRY%2BnviMbcZH02tSfE10q1Y5FnQ6vSoq4IdRC0636Nbfbd9fqCet9Sg%2BimiDRb7zofYgBrFXgQxhdKtPbamAqa7j4802Cic0w%2BL1QxgRhkR%2Bj6xsBLLsaX5fLvLpPZUapPOfzyQRhmF%2F5wAs6bIx7kXMgODZ8JOM0%2BpoA%2BwOxi3%2BeRKqLBKe03e1Qp5MpZ75APtTdLyZB6HVqdg7ZRIVX5D3jHERC%2BquzU52dOYpIxE9y%2B8ojFZ3hcj1DWPxdGIFqk60pP%2BuamZQiHuDjQU41pSJlNg31YLZXfGLe9HzaNiWTqcdTirNr6zpJpTwTYJTEK%2FqDdJDZq6Be7jZolLPNXRgBLtXKlCakdrD3G%2BcACp4WXg6%2BMvtqcoGFUlna8J0idEoJOcdzwXObsJHu7wf6w8hnWdIp4LPtLck%2B%2F5s8kIRHj916c76689Z1mPy6%2Bx63W88%2FOAeIAgjK9yFQTXRBdnDtPCNKdB%2Bdn7Qlh1bjZjFN5t5aKrpU8Q6q1QqgELcAl9nrLYNTOj%2F1eeq39pC5ceyNfcHaBNGFHVcz%2BwsWMcYif9DIFFzk4QOXiVp5MJLW0MEGOqUBP8JonrUopi6IDlgLwf8aYwPqfPJ%2Fz7CoKz3%2FrEziNavQC8u%2BuMUzcyyWwDs262lUVJhGWM88xAQyYKYEfiODZ%2F1OY8oty7%2BFYH44DTauWHW0Kpy0pr5DowtYdqMU2ytAnKNedZMP0tJ1xnw%2B0UrSf8oYD57DNXy9QSJxXWgf90sIkAu1WMLwodRP05UdwGXMIAsRFjVldskhsDtQT74J6mnyvQxG&X-Amz-Signature=57f142d5416f30d5c29192388bf8c304c3ae5efa3c370c374883012b58930f81&X-Amz-SignedHeaders=host&x-id=GetObject)

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
