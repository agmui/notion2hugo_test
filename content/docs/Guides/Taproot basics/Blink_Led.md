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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL7A6COI%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIFdBnuk%2B4nZ7IhYkPApR4PGAnjP5UYrA%2BJMVGJW0bkDUAiAcIeoXk8HNQ9EoybcDBlzeubITig%2FybbVuSxn06K49GCr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMDnumsqAwtPf5%2FcMZKtwDKqpjPldAILla8ONqpe2q6%2FiDdmH60N2P2sdwIhK26Ay3MpLNE%2B59sqrMuJfHU9MfjaSxSny7GBog%2FZd88dy%2FZGB3Ev54XyI2GNnx4yR9D530rS23Z0kT7WUTDfq9wmXXeekIy7SOfxEvTj3Esm1GvzDVaPyiCaCLWjTXcztueBlCDXVZNefvZXKsaDoGp22bIdc77UXVzb%2FeBuDpss2mm8rIHqX%2FN4CNDtCY%2F%2Fl%2BLbSqTuHgwlKRFd4BI1%2F2D6Lu9XwAqyJ%2BgEeCoKgYqDvk85g8rP%2FaNJo3gDbHdAj9HKtXf2NSCqHhk0Ll5H5kTKcf4SdS%2F9WlkeXswryIdsPvED1M0byUPSZB7mArcSoHoSIBETMzB%2FJ3B%2FgwDtkonOT%2BqJXBN5m%2FZmXOlaC8dqwdPdIZMiF5HDyZfz4h4PXyChfsyVWHP%2BFdlIvIxfULP3zJUM3S9EEoereplInBMmhpL5djh%2F7AlTEG2Z4pL8Gylg1oOoY9sv7jmA9K4AGllTC0X%2B9ZCH7ix1kHgrcbCBUcIi%2FAgOc5LZXSDYGSfVa4tZDBNoS%2FzcQvvc4Qi%2B9g5rt%2FBhdankiq23UV%2BRZqHSpU7b6DZZnbvXaVFyEhN46RYp4An1ufegQEea03nZkwu%2FeAxQY6pgFTq5hR29anAEkNZf7IHTgucj56%2ByPwLZq8FqfsVWkp86HV2E7GU3jh8qqczG6IpR3SoltdC7fTmCrJs40w70xCl3BCPSpcXS4y4CaOGGG9rAQSzOMIsRJGz3XQCllPEMj195qbQM8rAu2YW%2FP7mHy%2F3A5DYd4Js0Ftr9TSY9FslRz93%2FYcogEuJw4PdBZLJqfG56ru9fMhvH5N7cpg9Stb0NISAgsF&X-Amz-Signature=3743e9154b24af680262e7b7bed3090bc4b87b89e097bf40950f6e0989cc012b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IZZPTPI%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T121437Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJHMEUCIG1iD8rl%2F%2BiInW8NGOoXD9RzvOxjGOwNbd3u8HbWizTzAiEAicHszbFBh2HP9TRwndd04DbSuYcf89T%2BTu9y1mJqlkwq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGfteIgc%2BcAksX%2BjhyrcA5C30o1RZNAeVCO8hVJKsIYTRmg5HTsTuf%2BeI5zoOhtCgLy5%2BxuTKbUEqXKd8wf8m7%2BwSPK%2BCZYtFh0vrojNsmWApsMeYz6BECureuZ0CsP2TXdU%2B4f3W2sEmUzJiMUITBtrLSF%2B1BkfKibmj%2BtFc0tQZ%2B%2FANtsoQ2U86%2Byo2NnNHAKfFusm2sTO3sWGWG4JYZInJl%2B5TSBT5BnK%2BwrFCEeVkY5%2BhjFAPPP%2FZvCTxSA9HMQyLp%2B3%2FkybPqkHVWU8ALV1pkajJ6ARVV7sYPRLZoG05AmQ3xb1irqPYcLyykwBczPH1DbVy7AS3uvlSe9M2f7HTGACk0vLmeBGmf%2F267VXg%2FJ%2B06PjmqS2FzEBb8MdJJQTYCKygGjm081Y%2FJm1s4IrWWZAQrbOOAQVSv3ywqCJrwvumOcXja%2BJXJcHnhamQptHdIvhF1C1u%2B6LOeWeb3crAm3YZDG5sNTiVl4hl6OsYwsOo%2Fqc96aBU%2FFhw9HKWaIIQFuZui3kLkVVAUCREsfDwEcwePsyiXBxq5FwqkLxshfQsVsxgWg%2FehH9YTbwUEwl%2Fvhy41feLvvJexkyu5VNw9IUr8NlyV6eZsSyxRffroBuUvSf3rF%2BtPKiBHXklcTVZ0yGrcyVRoqMMKn4gMUGOqUB7fm28hmra9fY7NSDbZROYhsMJWDb8WOF%2FvRvwtDj%2Br1ttjhXh8LZXFD8rLAWjys9JPJTaFfemQM4dfTyX8FGUtTI7lfdLPbkgCrFmRFoAtVHaJ7qJdiqctC3Dm4L83XMmLDx4y1y7VbxbxMxlWnYssl3NE2MfbqPqJvSrNVutQ131PyCYackjXjTa7i2RbD4isNgJp0Y3lX7H9ycPZ8sM06uDg4w&X-Amz-Signature=8b6c9ce0b9157c8c951d99f48dc8068ff7958c6fd41064747f4985deec5701ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
