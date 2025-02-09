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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTNMBR32%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2F7wntVXHhrDh%2BwO7ZpPFQrU9emjZD1EkkjOPAyF3KGAIgdlJRZV1ZUm1YFfKqbXkXEm0qn2TnGEQaijg5t0DvKJcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNrjeKArUshK9aMf1yrcA7hiJlWp6PugY3nzHz0X9OhLAPA8n9uZSXgC9MV5NSwsw4T9R511K9hFEyU7UCi79op7k36FCrRoWhuP1UZs9SY24Dw4soEwpM9ry%2FQTl9OV%2FGFwIv65lH4e%2Bshnqz8BcmDo7XiU9P2akB065sy%2BzhX%2Fw7u%2BX8ph3ianPPDrs0d8YtX9rP0IqUtUB94GLu3nQdUsay470GibZFhP5xI%2BD17b03dS9sAT%2F96KWrKRyoTEo%2Fg4%2BduttcW7Hg65MLCVoxCTLydvDEmODjEEJaIEmAOUwcRTJ1z57JvgOY6LAluJMg9hjwM53%2BwuFSy%2F5QjLY7D%2Fjlex9S%2F59IpSMuRIjzPXYcgzz5IVPRHoUBCcTNucm3USOH5huwnQpfANLS%2FRHAi4noGO%2BM8C8nn8Ya2RgvWl6ozMyh8XY9eTjUWsmItcefUEX3kfkmlpAI0YZsn%2BhOP3WkfC0MH3s9Wz8jh9J5P4%2BhRqmO0wB17vxbslusXz5yAYZfIDcmFML6ieEa239sFByY4KuMj3fJABvSurvssWFfYbz9mJmrCfe0mABwY%2BIJUQrXH2d4%2FoyOpAd1pQNhRTBDbuL5u14o7GxnhC3%2FRHc9nF4NU8KIQf9UuCWdV2mpjS0pOO%2FnMLuRfTMKi%2FoL0GOqUB1r14ek0FfDqAW6cuSH%2BfSYkrfmdwUqy9zSAyYZuGBSNGF2UVNY06RUXt8yyIQ9Wt5dp7DNhZCHfqOvaeyWsXqKeZZWKnQ3LhuoOOkRkehWhK3%2FDfeCfp3QQtefn%2FqEZWGD3dmn5kGSL2975tIGaINdrIUlaEBSZIm3XLaa6PnPEzPdmRx%2Bub81my5u2sySYgWb2D1PBd4VjlcdnvFVZ0z9oF0iSt&X-Amz-Signature=bf1e08d3690cf21044ddff9a87ada6484c124cbf56c86f2fb4c1876a30f5dea8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666KCG4X5F%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T060927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDsF%2F%2B7xxB50gwV3XmRXNI2cqe98ZObywHf1Ug02jqztwIgVpQ1HIYxiTYm20%2FBGBtZL3kvX31FTTTTBeRdyC89O3gqiAQInP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDInO6FdAOZ3RinLJOCrcA50XONeYL5vaASwppwvY%2BZDczih8Duk0Rndvdt%2F2jckbpl8881hdFtVzsUrgIYDbsceWJxEXGUKDoJRm44YRgoXFPbyp8qTmVldUyUhDoIoptk3zOPBJGnHGduU70Zf%2FD2SLW8gNhXryMiyte963BFXD6jJpsRDGdDCDdN1pyTMzXoS780Vs1Lepmej8t6ZX6dR%2BGLTJENp3Zba52tcU4qbtqWILBX2ZtnPKa6O3jCOOqp0DIJtXYCPLv2D13izyTXzuX93YF3O5SOR%2BwtVn0H9AKkUi80UchW2pEzcxj4VkNNWdbkpls92ldmJ8ADdUMb3%2FYe6N3wpmPYlL8tyLbpDfTEeGuFcoPzCuPvB7uUGc%2FQZYIgj6%2FtICv1mYNFhI%2BqyajTDQhucBvjICi0lea0sQXnUmFJuRoN%2F6cVTrGSvvWr3tYdNO6lz0%2BMb%2B4uQmSb3tFyWougiewkczEMeDsNKnF5wQrSbioQIbszV7WKMNQcLnPo9JqEni7x1kABPZoMk5SAUmRHf3hd88KVWUXAm788Wq3yJTFa%2BTm4csnCTF%2BvS5FyJoKCLEpUanXmpvn9aDKdhaL0x6gle4LxBRPdfPZar9JtqoDFCvlFDmTcmBitY2H02MM%2FH%2BJEnxMNm%2BoL0GOqUB1SoslGb6x%2BhnPYBC10I0auKBPj6KtAzq617YXBPWCEwQcOGHj1vg%2Fnjx2TxI7ExID6uHwJ15O6mLagmzrCa7hZ4S6tipv%2Bv9GP1L30VGU71dSaynDcPKH1Pc2BdXSGwiKyHqlJFvnSrk1ok%2BrZiJHmgmEKoVXwvDWHVbMtO52vb9yz2hvMF3UHsvDtmjjdEc%2FX2Aq%2FjXoJBaBbVcjf%2B3eFw6Aqq%2B&X-Amz-Signature=bfc241bac064d1f84fc9c8b7775fddb2b8ff7e4f3edf1803ce8542e55b10041c&X-Amz-SignedHeaders=host&x-id=GetObject)

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
