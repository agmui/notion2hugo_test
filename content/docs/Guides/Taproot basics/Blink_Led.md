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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XNKOIGOI%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIAiqmY%2FGTC%2BlfNyod0QRxlPWgcvEm4mKF33ot%2FmpSthCAiEA740q3oIfLoSkhgZWk3w96AqPWvAIF6nJ5Ksc6jdtwiQq%2FwMIXBAAGgw2Mzc0MjMxODM4MDUiDDm0tP5UIPnnQrxRByrcA%2Bz%2F8gBW%2B4nzArQnEturt5A09o3IWBzo1jTo%2BMkAN8Ssr%2BodLp06nrQU8%2B85%2FHbIJqcDcWcOZxgAGfOI96P%2FHyNWwR%2Frk4gs0dsc62Iuhn2DDIEn4waedfIi3YaLaSWTzzumeZr0cCTZ%2BzWfcm%2BYVPBGe8HefzrzfUhCYFhIynNX0v9ZPxbRZiKbG2CPLTd%2BCRSISalws8K10I31Su9hZTsjzhRokj0EQP70r%2F7%2BeFr1zf4csxXHfJtr5N%2Fk4BUN76Ti3e8iR7t2w%2FlvGwD1XqmotgIVzTRDoha2TtKO97hbCeMbaJx37pNX6fNJ0mJJN%2Fld9A%2BYhv7OCYraMbeCH73JqDATn2Dn2QOcrWMxeWs1oaGzHdmMpHthM%2BIcnIcSPWeW1O%2BzuRNlXNjQHAedGuZ7ETKJUC4z2KDqa5ZsP8vl7qdthZj5kAX7nmOWb%2BOs3Vmi8BmjXzvlldWJuccg6nue%2B5c0RX5EMLTZtRjcQY%2FDQzLoMKJkOTcrwl2Ua8Ur076NwUcia7WmK5Iyj5nzs6PaEHZURIwKBm0mYZ315JD9Sq5Yx7urEZW2%2F9asotIoUlVMfJGgnHJzaRMfmOdn7MlIrjz96JNhB5rrb1PmXczibLYkmv458CKZquDoMJGT3sMGOqUBcWjxQDrXNEkh6xpaTCSvGEn6fRG7KAqQcWQ0dgJdlkmq9WcS3YvBqH%2FHRb5gZ9Gk%2FrO%2B5MmMWXIDbJU6hPlbIOFLIYME%2F6htJQv%2FIga30NzM896LK8D8rdz3nz8HVpRnfNmIH%2FsP%2FoX0%2BtZ4gDGwpAU7yZHK7bCyFKfO2TV4Dz%2FGnnN9XaC72gZ9svkHnfQa6HRuMlYYIZoNRoEeJgrzKRE%2FrA%2FE&X-Amz-Signature=26a67dffb36b2d33b2b0bbd9cae37e545cc24a29f290a3c38113429082e2846d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLZ62KOY%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T161121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIByAgJDR4WyqDsEAKwVXq%2BnVGBobQevpAvWd%2BWiGK45zAiACGrGC4T1vum9s8JXXZ9BBa8UWYODVndXVfecJ7Ur%2FcSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMHpMa2OB8k590zWQ9KtwDyqu5Bdb0sfRv7Xqkb1LuSRoDx%2BUNuuDEGldLwafzb0dA8vPtSOHJK2%2B7YNldXXy0U5yVDLF25pQSdV9Wi%2FL%2BUDUX6uX1lsW29E5j1o%2B03wktvCN2V%2BuVBXIMGh733rdrVrWpuFBcbOGcaJz3d0W68tATEE32pLLuZtaZyWnHMRRKEI4h73qqQjGuWp82oftjpbqF90h%2Fa%2F9cR%2BUzjjD6eXBOoBm8NT25qK6U9QjWn1bkeHo7EyESQSYTZWLc8br6TNJaTnCHGQU6eH%2Bv1D8zkUs9NdGOUfFB0EZeIPxc2hOr2zdTDIVVejGgWv6Kh92wxCm%2FcpXOkS51XoTx07Ee7YdXQeBwzghhyaSDno9yGOJQCkrXbxeu1f5WlYRrjCMgvIcKR4O2NdhiAFVAKlV0aHEcbI8OfrJNZtWus1x0df2V0mFy20CHzcA9ceekukHyru%2BjkKf8pFQwXVy%2FkBsV5I%2Fk1Npoah2nuL%2BcD7USSpbJz6pEM2jLh1O5TcbDS6%2BZX%2BZuKkA75AToHdkmVlJNa%2B0yq1InYIV9qsNaig1%2FHHdbnxAii0EoYwvo5rhfhr%2FzLVqCubqUey%2BxedCZ0TA6BWWU2uVdyrNWQKZdEOafQDWEO%2FOImBGwpABihdswwpPewwY6pgGiIEqKRQEtAja3%2FWXJh7jnYyYvDmXJTNF1HbKCZb97%2FEfrt%2BGF2TgSPbKug2mrp6mxgxvLRnASg83t7UpeWgCLJJ0Rgc%2BCkgkSRbjmzRfSolL1j72Cm4DfQFN2D3akGZ%2FlTPR34Jv192pk32snHLFYCd5fj4N7RH8zBDfN7rUNjj3eieH2H%2FfpyeALx4xYCsuPwij%2BOsaHuTt1wNn6iYX%2FTGqPwm75&X-Amz-Signature=ba27cecc7752a7ee3b174b716dff1a31924cbd23bbc72e47b5e200cef48dc3f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
