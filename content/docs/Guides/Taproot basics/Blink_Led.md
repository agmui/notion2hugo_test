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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIWN4IOD%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJHMEUCIQDsKaH1lEhSv5srRprFE5Vs%2FiTQbKU7T5OzqPqwFehPjwIgAiLqLQ5LSFuJtsaMtaSFufauKmB6na761NalKX0LpMkqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB93ZVKqPTC%2F5%2F0%2F3SrcA1WxlDsjv4KuH%2FbvWIPlmAyDmttABbX3cLoSurfijSrFYbwf7icfLLO8RAF3VS78nvOMrkK6Ty1%2F%2Fkwp0hukp%2Bk%2BcPaGzBJg%2BudxnM0MK%2B8IBAuIeIXET8D7EWZ5xA%2F7FnsHB%2FeilpIEg0KAeSABpvWmwdXxCiW4Y6omur2bMtVgz3r%2BwMuyO43SPJxlyET%2Fvr%2BMCt6%2BWqagzRqaEDTOZJuECshdImd%2Fqf5PNEJSMD8h%2BHSlh10%2BK2hscuScQ3RbuiqUeXyI%2FfiImwpnxf%2FRCzqzQhRQewBswK7QeNGiWIGICTMDfTmp2aoTeWh8PtR1tfVEldyZSH71XOySWoBKEiwQVhIv9qYaYglucY00exH0ZkRRPFC5vxe%2BVtJIRvmG5gEvTVDpVY6JvV7MU5OBCiAAZADZFK%2F%2FKwG8bOPjX0CZTCfnhzAKEdbO8P6zWCr9o3kov8xkPGoLQNZKyed48Q%2BKS%2F7OKWFcjxzNwXEikHWb24gwqOUraeg42XhQaywq4XU6vwg%2BGRPPjpg9tbJh%2BI3Jg1mSjr8Rael2zaImPKeNdiK6QFWETshBGTXhg%2FfstHG1v1UJrMFt3Vkjt9RASSLSvBaWa1gstFKB3%2FILSAjUxtcFR9FbcJpqNHl%2BMKvf8MEGOqUBMMhncAIBTby5UCeRoT3zqYrWHd1pv%2FwCpzK%2FXis2okU%2F%2F0Um9ev%2BKOTe4mVGRh6OH9Yt%2BzTwfUe1pBpLNmInNjoG%2BNdxNCwqzJV%2BYpHoczz0x7jcAsTGYuKBKX4lGJz4mTi9EotmqHhl0U%2FQB%2FtZZGh4IIJ2Llf4mIhwKv%2BJM%2BTLxRC58DtUOmSWWWotej%2F8RV5F7Pt7vnbkoND4Z2Pfoihqr7nj&X-Amz-Signature=8babcc73b96d7bda72863424745babb21caef665e5a9c253b0965dd3e4ca1217&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPLWLGZV%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T121412Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAsaCXVzLXdlc3QtMiJIMEYCIQDnOyskDZufohY07mwFgXDtohOCO0lPotQvF6AnBzGqTgIhAJBisSJRTqUbKdb9q7EUU6eAx2v4kAvi%2FhnCmjToNgddKogECNT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwuex0kTrZuwUxbDbwq3AP0OTLVG%2BkDuvpID%2FvOsNh0LJq2kSp1FccXI3NdBTlsJgRcg6DN%2BC0p2viMaFY7qOoBexS3Jm%2FxS95ckdRFX1m%2FKAAA8zcnDofzpUMiU2A6aQ1t0IpiCCYGJXzCd%2Fh%2FKJd5qpXd6SvU%2FwwGlGLDCBMtorH8xyxWzdhW9OAGmRq6%2FJH60k4fSwI%2BKMwoIh2MPogK0davTZvIQtlQ2kV%2FcjSAS8v9xhmS7AJeh24y68ks3bUgoCdpLlUA57imHNuAkRi%2FSSI2lUUpRRcE%2Bhr6IDJrzskyexcTMtPKJHxg8jHo6mQwtZsxSHbqKOaXIYBLrY1DfMnECnrEisrqpn0ndbc%2BzvLX982J0FU7piEFb1lewPa16Y7c5SJuRhV3JNmS90WBKbQ518FtKm7n%2FM8dloFWuKToLl2UL8INSm5ffOHbcN3IgYrShSfVjjqZn7lHO1R%2BwaNInqF8Kw%2BU99o%2Fvvxal8LNXFI8uG6TWscw8XqVnu%2BMIxSRsj7W0XPkNv4OiaYYSz255SY%2FaSuJf1V3KBao%2BQJj%2FS6ER8gLG8pGu0eGnhx4QG2Dl11zkCsMeLXSrTdCF4ra6NW2xk9GsD94ouqZyjLkVjGwU5g2xPcxdi1Qc3i2HU4r68H4pjHDETC%2F3%2FDBBjqkAY62XnIGAL7hMkF2QMGuIvfoh1tXHJ5ZehGkyHII2rT%2B7HJqK8n6cEXLVcNGg8pd4qE5peJl0YyuA%2F5Oc1vdJ8m0qmqcitfgYsgmETgyIhaj6%2BNRGB%2BloOQx4u3kEk0DcTsloYl8mcAII8X7aifx8Juz8xeV6tD5qElk7sf0y%2BBXZaPAiqho70LMbqEpBNFUoLS7iW%2Fj99qHXKjjw%2FVSYRoJLNLk&X-Amz-Signature=6b3e899d04f36320940ff6916eb1e61a93763dff5e6d6ddf78c997245e888bc0&X-Amz-SignedHeaders=host&x-id=GetObject)

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
