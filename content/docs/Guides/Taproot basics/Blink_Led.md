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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GBN4NAW%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDEiAtL4jrY2kw3rXILuNhWVPoHdjtS73%2FtpZt6uJinrAIgAuxXxjNhxDAe0rdeFTYp212fTSPPAyCrjftHrMZKuGgqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGZEYgMKmTLDzOn0zSrcA90D4%2BSjEjTap4FDGh5e5roNSpiX99IxI%2FWgbeZu2fZh3wuwEevVzI4HtKcmGfbgRlTHStoQOD4Ya82XsC0kVJNXkBGaPI2AtHeFlUwzbM1dzLMgpPpReqIHLUnw1Wr7z0cSyQbSJa5BQXiisc9NVZI%2BvrJbWORUMf7DbwoR2jBbYOieT1%2BhAGtZypG0LHMgTbTi6TpeXp%2FOwKLC7xkkvu2TQXLecnjH8%2ByXHbsCa6yLWWKhf0wVV5TuUwmuva%2FzixoWYl2O%2BT8mR%2FO8ALHblRNZF06mNbvCjZwnHNt%2BSnFMfC3vv7q1R7tAFTzQVz2JPRWp03TY3EqcPb61GxAC5eJy%2BblNMIGMmbqXg1r5wWpaacdqDlkpkTV2NIV0a608iv5l78D948rPJchYKNSBOVK8V0Xn0IFP1pU%2FyC4wVEUY9bXpxFjYiPvS6VGL8wfc5gRzY60MXQUYZCKW0sPQl94yEwDrnaggh6hCpcBuQewpkmH%2FE40qC9vNkkwfkeS3gAHN8yZr9KlxW1JWFBlfOcmyMAfbNxehWjkvDuTn6ghD9GZIFjhUbsDJRu67hPiZKLbvSHX2lCWUmpm1hzwAObnZdYwK4AbYRWHOVA3sG5CPJGp%2BBestTr2BWvn0MOPE%2BLwGOqUBPsbMGZypHZPx4%2FsKXo1CNzTksaJ0QCMC%2F4J%2BvMIeU8orUSVpHcum9%2FAuCXhQ6%2BLRtGtBgDOfmYyTbN672PLku2fFjHrBpJpOyfHFrVxVyO6Dr3InF2ktr8jffmiijMvNN509eOOefPdfge31iyslefkqDKUSnwY4zXslSfKPrNeiFSKK7gVJUnfaYNxNDgoA9uHY3OnpeEusLPRknMsCcfS014gp&X-Amz-Signature=f29ca5538dbaf673e4915b7ba0a632abfab5699315a0d40caa1d4166ac732a30&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677Y2KDRJ%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T180838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIuGxfv1G8BsXhJmhCEYvdZJqu4G1xxaMy2Fc9RHyKgAIhAPxEnw3W480wF68%2Fx1tsqmKwJIex7d%2Bu6%2FueGH66d2puKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwmO5QIgO2DC0gjRSoq3AMgYEm4DCbJmMUaHpk3XB6tObA0REEIH1qH2UuS94s%2FxkdEjX1RYOAX1b8dKLKRoOKtTgavr3HlfIlhwdhM3%2FbaY%2BVCRF0nW1KEjP4dPTbWYdUiXeNqZaJRfXv3GLBC2PkMz0UpB%2BqAoLClIqCu1qHs%2B4%2BbPwcjrYPks9FiuZ1qs9SPckHKYvfLBovTPjLTyRR8CaSwt5A%2BWV0d6RXJzEOe50vUIoShCt08Qo9cb7BALH%2BJ%2BLd4os%2F5vYXhclPnj1NdF%2BS6120hhRTnakmR72v1X9jmB77oP%2BdCCYKknYeW7aFfiYSEHAXBBd8ZS6rJJwUNmMYlM83CTQbrhMs0zUutAYUe91Z5epFTx9kTen9Xxs9QGZEnVGpEjuVtmLu5p8STXZO7r2UI4QhW6pnkXi0DPbH4IdMMnRT4npUtfdaogc4TTElkzXrk8d8UjfluKRZe2YJeBprvO0AQjjz4T%2FJvPjdB8m%2F4EKcYghMowF1yfzhvQgi188QIo4rCdql%2B51iFQuy10oFR3uP96v17bkslbbRfyi31hn3iw0ld9hCg%2BzNn%2BJ2zKrecc61%2Bn%2FxnqkgkOwRdQ0hQE09wks6OaKNMCx128oN7zBBOz7bJbnnQslXLcS3oCE88Fb3apjCSxPi8BjqkAdBZ7%2FcLy7S81W6xTmuElouVFBff3MPBsX0nkoRbumnqvkQKTN4sTAA%2F2NqrkcyqiEz0k1U93YkhGOy4Cc7znYqB10HmamvwGoI%2FqyDAFEVV50lCBIFTSnRweRz09Wq%2FlwMX3G486XX3ztNBqnOdjrmz2j9%2FJ7g4%2FyCr2ZGJ2PGpcs7x19s%2BBIDkjHaUNQkTWVJQUbrJ8oCvTi1wtDIcRo4hs4tr&X-Amz-Signature=f22830f41ea781b3ba0f246d9403e80b87bf575c0e42350fd18b0754d71ecc82&X-Amz-SignedHeaders=host&x-id=GetObject)

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
