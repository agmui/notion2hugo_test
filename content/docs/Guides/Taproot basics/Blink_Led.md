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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHEYDQ2Z%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061320Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECQaCXVzLXdlc3QtMiJHMEUCIQCBblxBumuFYGrxXrLM%2BiWi%2BiN%2F8olgMUFVUu%2FOloAAqAIgEnHjYwitUBbkBT4gCLx3%2Fi42VQ%2FdvxyvrD1FkUmi0%2BYqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIbiCE%2F6XJMd693rGircA4Q4uoRt%2BwRN0mVQdNaZux24pVzThn7p4lWUXMVQGIAbCLTfr95o%2FzensXP9wWgK1Y8D90aFT4ZGz3wY4lSfEXZVbNRze287CkMH58Wz6hoSHXwH2wlTeCVXtlhfuE2xSz%2Fea8b76fEaVflUr9%2F9SbJAF6rUFHqySZJNwFS0AVdpFlJSom5bz2qwrihQ7EHfBBO86RvYImH0ELNhqTc8mj4yFi5B4w6u87gOKt%2F%2FPUD7zhM7s1qNKJWDXNcay48gBuwrE3GP7ORb0tH2O7TEVCuZhZC0mYC2UNGhapNcW4n4xcceliFluHvnLq6HSXKjgBbVAqbsm55DyxjrEW4un0AAgO6uNfGMuGXcXBDEMA%2BO2qtEeQN8lJvWP7pJ13sQLPOkJARzywiBOpClfd6mYVt%2B3IbSyVxopEd6KYagp3QDANe2j5WLjZTXQAjUj%2B%2FHNKdUR7pHDxdEOm1kSGacfOInCBny89ePqSNse5dSAKnxiUNx35Fe27HnsjWNXpgx4N6uq2tbDMSr3fwBiht0ZsuqRC7RrL579IlfmcMUH15C3J2cad7m7aF7EDfBzTZrAivBwHb7KPWCUJi1PGx%2BNxlGMpUIBVCRva0iafkgjG3TZxaLvWQYPtn%2B0GwEMLm1rsIGOqUB4WiaLoB6n%2F7yYdororeOpPxaPvbcsWamM4qf3Fj%2FOfe5cSI99wnxorHo5SevRWolPfgttu6GlYRdXFCZ9Vse1OhBtcFL3ls7lkA1rB%2BOIKRwUvva%2BrcZqJQuGLXBAqZlsb%2B%2F6LrOtfpSh0%2FoFlAlCDGxUt0AWZ9fVkh9ywKLpb6vLNTGipPmwDo6YsNL72TRx7Qu9pI8KtvuTWGk4XM0npCsm0mI&X-Amz-Signature=a8553be2b27d33123ccbcc1731323ec0009593b93039cb6a181f03ac6e9a9ee1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QD3ILWH%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T061321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJIMEYCIQCgYwmML%2Fgdm5QOqYI0S7Fb1o5z0U%2F%2FEwcEzL2xBf7BwgIhAOIv0A4dkVLTBu78Y9tRJP%2FEK%2B1OSRrmQYA0F4qCnsSfKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgynB0oWNwUUpvVoLwAq3AObfEhHAblYCOr2uvCD7jcA3EM6lJmUKY8nwf4X41Bq9btvVcKxSvjyEMSu8jYOk3mZbBtP1bo0nwmKe58pcc3uuVfUAniNMeLAqJP%2FcWSvdaq4Y%2Bk8%2Bl9fIUpTJeevfxVK7JO8bFfA9oBDjbzi3ZwFhX89lg30tpctNa8gKWuup59%2F6%2BNvnnjHaTsjjDYZUVKLb73yqZ8Pe%2B8ZW4PPxFk6CS7hPtUVW1RToM0yGI94E7l6snmH7W3RKz87aGVMQXXM5qUMnrmJcP7S2ljAyFYHMzS5G8sM6%2BdAfREV5zB20fVuLRlauQxh9IyTN8nhVXxnfV%2BuFHid%2Fqjeb2r141dli%2FjgBuAl%2FKoZ0juLAOaSGInnxgmW23RPWPuXrs%2FjSrsSTeGW20ATjgZN66CGgoLAewWcWewIpBSdcEtfz86TkH4kMw9vUNU6Eu6UgyD5Wuis26hrIfccVTRdmdR%2BvFG2DpF0MFa%2FjnMUDs%2FQ1GGdpifuNc%2BbUm%2BZB%2BotKIMNY1tK%2FCgd9VAs1u6D31RgJRgLR%2FCSzxo6l20PcLydM8XE1zQfIaQVAwqtdJX%2FVKsRT2%2FefhpgKz9b5Syj639b2VvEovU5PodF4ot9lqCMCcLWNk3GB5MDFzDB3wICyTDM167CBjqkAWEWl2tYHzv6c%2FupkHo60ioFItNrMJanY7KH1%2FDDajZ82%2Fm5nFs4PTMpVShQndJBI37SegSoF%2FOR%2FAt%2FnJmtIyhJAKL98x6ywJvSthOc1CKruoiN6BH84rzGYLrtRHk9N5mEkgfCpeiWlVUXEnogjF6BND9ijkhiHn%2B918XfyV5bUHpATswRgsP9IxCq0II8RztY1mn0K3DbbxghoO3ZOzP9Jarc&X-Amz-Signature=c4c613697e208510659fd70e5e90358373f815cfe2968e266d1b1ffa25cc4d7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
