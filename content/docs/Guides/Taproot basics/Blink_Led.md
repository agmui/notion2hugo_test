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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XTWPQFZD%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIHGYrdFT2HkTwUJEgwlTgMZ7AMWXwnKTPT1F0M87yp1mAiEAv%2BHzEMeRjovURzy975IfYFspJXc2W7ZvC8zJjbYNTBgqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDZeDXwSp5ngqtNILSrcA9kvmFg3GWdg6CYd4htONMAUOku7Jd45wydnfXD0E9Bmt7aXv9QHo42KEsVzNrQUEjsmqP366DOK7aPa9%2F7Whnb%2FJP%2FZAUjyP%2BZMU1Eezuv8FlhOKJc5Q6Xk3%2Bg4RJOeiA5qraTstI5HejpF0lbTZIEC598V50SZMa30HAepLv78olvRHvAzE7gb35TIv1Kq38j3wMZsQZ2gcBL%2Fy%2BmNSmtEtwOyV3W7yxUq%2BXv2pvNWT2hE%2FOWp1dYEVkToCOBM%2B5UosLtBHTcy1zXfdvTUnDb5B6dUa6KD0UbbB53fanwwGMDbigCMJKY5dFluSMK0a7UvP0Sq3fDxF7zABOLCthxgSU04RJtwmv07X4%2BXH%2BGobc6QwraHkDOrirsBACUpgLnh140y0JjAmznKCrz6gauIkAomLTTRxucEjsyVse50RcxdP5Wa2BRhRtYLDdPMYGEoUUxkgtHD5%2Fvi1iQ2Ul3Ni8j%2BB3j9m3cqFCyq2Nu1bU%2FmegqaKKCCAmr3gH87RNNXwzL1W1GqdcBHZpKVibfbVmEC1jNDhLG0%2BCBYo206Hy3vYvAiH42aur3hXUqJ%2FqFIDAy%2BoArOJsPOswlAYxbK6OBvPaTMigOGqSakMgXFoD%2F8QurKGohDBYO0MInc9r4GOqUB3aSAWlknCnRCJ%2B8NhFIboQiCzIX674odC5UKKZJNC4itc854ahesAHVENCOegxzBsO6QIqI1GFpGIad%2FLMYccidlD%2BRo%2BJEXyAkoEN0Kkcpi4RQZwNRG%2Fv4m3pIyuas%2BQlyKtsdxwJsDebfVTCnft03FBH3t890T%2FrT89GFZAlIDNJDojQVpcbT2lVLhcc0HTn3QCZX7GtcS2XBPti8gp19HYARd&X-Amz-Signature=1a6398c2b1e6e5aecdd8a67cd7cab2f94d9a7a2369abc65c1ed3136737e5af3e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIAMI2G6%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T200835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFMaCXVzLXdlc3QtMiJHMEUCIQD2QPwwjTo9p0KiFrQLKj6J1iY%2FAQCdR6wgal4i%2F88CuQIgVkUEucFcxChGnKSGs1zQYgd%2FfVIsBI2EdukhKVtJfgQqiAQIq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMMrGdYvNzEfpyL%2FxSrcA5%2Btfl0zq%2BKW5DpMJHYOgryR4Gt8vao06AfpRG2hALzft7QjSDkjyLQ3HoWjNAsi6AzqU2g5OgznlcmKYkTiS2YVWi7RTc1thAaK%2BxjOL89WYcBL6fEUwajp5BheO0Xsma26CqbBSNkiYFgCr9SYvVFuCqK90T4rdtHdIm8SQDiMmPNdIBastYobO346UJrJT0JpWsWTmonYCf2ZuRKvBAjx2e6gpVI90M8w4ZQeKrI5P%2FQlZedjNtVAcP8EMw0gx5kIfES4kx6rO6ZQRbwgmeFSjAg2J3GAA1o8%2Fj2LRdE%2B2Z3buBeB0%2Bj8JVSlrXFHD2gbwKXbdAVscGATpzwYLdMUW1XN7fpVcgRKv3mdA6tSDibdznq9WxFRHtVh9i%2Bt4MdamvdCA2q2u1XPL1zmJUL4aoV5ROVQr4uWlVgGkfRbbv%2Bn0dWx1zeFOVKKhyxTQzVMFYCkndQXrU3%2FhzN1%2FiY5JbQd%2F6JWNMB6wm6OkliCABPY5CDvSv6PkY2uCp06e5Q0mx4Qe2ytH3Y51eA1mxdvRbGtIalmcEnOLliPNOo1qBCbk7jX73meXeEl9gd0NvvPznR0meuMzSbbPUc1qEH387hBAEc6eYgmkD4FiHV6t42yWw7WD6lODUTBMN3b9r4GOqUB%2FAHbHN4QND17mQvpQ%2B1VR0RmzJ4Hs0a%2FCkbnY8qzKRMTjzeehXArqdLGbOfmkuonAvbrH9wDnE6vCfitdp5f1Wc7kj2B7rhfrA1dU7q%2BdkBe3fLZkEcTJJvbYuqqJ%2BXoJ0VpmyJFxiIk2q%2FQo3pv9%2BkiEvz32xJUx10Oa2m6O8NfTxXe7GvrwXU72davECYH3d47BUE%2Bc0Wf7jLy3bZxE2W0HM8X&X-Amz-Signature=03c7da1abbfe1a93adac899481f083b361d1e51934a0a5a834b3227b6bbed094&X-Amz-SignedHeaders=host&x-id=GetObject)

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
