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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCR4VZBL%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJHMEUCIQCJ2dmkhsDyE3RcLKst8BON0ZYqlgNZ3z2KrjQPrvAkXAIgaMM0Q76mwAViO%2Bq15QOClMjwZB3d86FKkEXwp9kQDkgq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLuU0Nite6eeg8RwwCrcAzvcjbK57pAW364slUX5QhB7ucIi5jJzzlxcmx5Ed%2BiAz27tZUvP8IhonY%2F28fpToYjIos072ZZkJWklHKBFclUPeuvkbapA0hRrVRYN%2BWJeFeZwYZda1TQFhKt02yS8PDYBu%2F1KJb19A7cgn2Tdk6oMX12nHBLmxWx1I97BMUjN6i%2BITRfzeoeAxlaDYoNYjOYnnO759ZuW8%2FPiVQ4ZKtO%2FC1zFr0YlUg1K5KITihtgXCaefwGGq5io%2BAOX5MyhavDjwDt58M7RhJv8VNChKh%2BEe66uF6o8l2yrUhbfX7yxbMKCGVDm5RW7X1wQy5i1spIjEGEl50LyQo7lmjUzNo4trnF9PfRbKAH8N8UdrRaYaJ4UZC6OZDu5obh5q%2BEXxo669haLXtEhKzPlSwZ3FJlev64PBtNK6RYNKn7%2F6ztA46NTI1hGUrykjTyugryvM5%2FANiCjMeyrQa6SiKh%2BQdYtpeuNbkGD6pJtygX439hzYaBkbEE83y4jP5UtzU91NG9cj8Ib37uKs3FbELM3KPRkeb%2Ft7Sgk%2BBIIzXtpebET%2Bn6JMbqi7Royo%2BEBeCikiNl8wf%2BFPz36HFOdFYKXZDi8HmveV7QQ8QIqRZPwHWIlnTmE%2FNWP0CvbRWBBMPPj6b4GOqUBH2BUKyF60QbRo%2FnV3Lke6sOdv00caQCrA08w2Kx86Jr1CDakO1L7UUrLBT45qA%2FJXc%2BEnR3sBjjpIQ5E9BvEM2u%2FXNtDAts6My5rpYIxF9DRa9wRQ6aJP5qzOL5EiXtvfWvhG87KAVcrAkxA4xY%2Bch7zJP82BEASFw7Tefl6lVr1wmfhyGL8qNEB8u8r9M%2BItZRYIioji98HmZw5b9EM3D78AYrj&X-Amz-Signature=4a46505da6905f1a9861b0901497c8f96375a2b7f446aaa7dd20cf0cabd9164a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XBQ3V63%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T081045Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBgaCXVzLXdlc3QtMiJIMEYCIQDwSUhowh2CBGEFka5jNSPk5gFdWX4GsYVlCu94ClEfDAIhAIcrVaVKvDrqQ7k9d%2FncRRrl3rZgg7Tj%2BdEv%2FubbWOi5Kv8DCHEQABoMNjM3NDIzMTgzODA1Igwg6iBgFfoQPTLbsz0q3AOLY02o9jd%2B76FctEkh%2F44ukvXWZsG2jbwxZ8K70qEXDdbwXmlmtEm8WcFIF3cCZ9JQLPsSUYIfsDFuM3eVT3Cu7%2FdvV9U7zLpiAyJe5fTm%2BU2Xzf5SPmdhiPxa%2BRHNOO5qo3JHOh7aQnYNJH5DrSigBD2yf5uJCuFny4gMU6QQRuavzqeX9FV7YxtgTjNkt2okACHa%2FQ8kDvyPe0sCiHnbtPtwynqlYfpaMKRA2v2zSsVAQoaTAuKDvCKkHwlYy%2BGQlAmuHh%2FE9eOrw1kFKG138C7lhWrKoyiin3AdgaD056q%2BprGua3J5DGLkxu9nX5E9WvSTZiI4JnwQesb7nGDkzVkjVtGuqfs2G74%2F%2BazM%2FoKkjU488v294pAmNP5x9LmwkYu2EkWyQHWu%2FmLKJZOj%2BYAty1UQp%2BiTikjgNxRV25dKQE22p%2BypdxNwiAayhr9e%2BIW8bsMfxLyqMx3EEPFtZ94pUg0mLznoWv14nCPozTRMoqSCT11sdOJFvvhByZIv%2B81CySp4O%2BhGKO2tEyOfiDoGpTCBM8jTRF0KyXF70szgPEgdZvojERdgl18DPXJk4NNrsr48M84tDHYxueYsROdQItGl%2FiBy13sd7rN3cN6TvDmTIukT%2FhE11TDd4um%2BBjqkAU5Fm1m9ka4iyir9E0mVEsTtaboL8%2FcEb6WEj4rH8yydKUqoeI455tXCAMWyDsnHqwIXKyWewZh%2B2l2oxMj79CywiPv3iNP6XHL9bZYxRcwbEWtwB4PgS8LZ5Y%2Fm6PCxIhrpiYH4SuBzunbLZXiUx6iD6O07wYrBArFBwi8Alv37TF19E1vROMMss6QnL2p3f97NskWNny9Obk4smfWe3X0Gv9Rb&X-Amz-Signature=aea8e36616949fdc7719bbc5b0f21dc76bd8ed15998f6c6f52f743c1074cabe6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
