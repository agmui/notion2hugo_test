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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V43NDDIZ%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhNqlt8QQJtB1WmIVuC3OFba9MA5C1o%2FhvMYgOjq5O0gIhAOAhCKTMoNwQHdvYtyYFma2yYosoRpMnC19Kisu9LlpgKv8DCFYQABoMNjM3NDIzMTgzODA1IgxipOjMBuZ%2F8SO%2B434q3AMQrV6nYyERexZqkCtxh9tAPXvvrVdAfGoyGCoFeT2wu5r4So4z1t3BF8YAYXanGY6Yma9VcYy90gOFkCetUbp2MGcCVH9515N%2F%2Frj9t1ZEWcKcdsqYTzN4U3Gp%2BlpnM6ajnkwCVSz7fFBijK4oX5Z%2BZerLCu8QSgGnxR9ZeRlHCdMVrfVyy7fFc4WOXXNHGPwEt3bd4ILKS5rNOB7lc5mjQj3X7FetNal5tfKHR%2BCp%2B%2FJgBY3vsUafsfkp72lme%2B%2FrbPvyZFG3If8L5nEQWjiENQttWPmxty3MJW0SNAlGMCR39e807i%2Bs5h9Q%2FegaSLsExCghfyceZDjSXG82MBSEl9B4UvcvsMakgUWYMj5EmsqyjaDlSithd2BG85JpbMKBpKSOOBhwbNzL64mOdOMMGh60aHgOg%2FUITmPDBkl1QZv1%2Fw%2Bv4CkBzzn2m7cVwC38%2FPYcJpHmWvIgsAbLPqtnfZxqNvTE0Lwc%2FFhwQZDUey8qdCDatQ7reB0xLDLWsv3KCtRUZXG1Rf8BZY44LroIu0%2FRCbb3s0quFKhtF0CBuHqp399k9Aw%2FwSczamF6ZiUeUb01vGL0eaubTTHCabSZ%2BJtlXaBgdFZkNJKMCuv90CxwcP8YlXuk1d3ASDCH7bbABjqkAbvMxCXepRE3XZAVb%2BUGTWq8vJ8JzY6htl4U2OsVZqh1sscFCOiPrl%2F22aFuSj1SkH5%2B3MqWwKzmJLUFS4p0y32I5al6oCtQaoCgJV2PBCg0hClWH%2FNpDF0jt%2Fg3dVIpW%2FFyNAzCN0O37W0hrCEB%2BpIAJ8Y2DxnF20drOsmFR9Ui61BHoQrGiSC0h9fIHnLU6wLUuCBrzSub9fDDtlE%2FOc0Xdv7p&X-Amz-Signature=3a1a47fb03ebc5733b8e9caf4e067e1d3c82472699b76f14982fcd61174efb9c&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XALCSUF4%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T100739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQdXNKo25RsFLVz6yxNKbCI27A2hhbCLRIcrQSrC1fhgIhAOvh5n0Gg0HwG8EBsX43i9kuj8htm10ntv4WMlLH1g7AKv8DCFYQABoMNjM3NDIzMTgzODA1IgxlA9HGu93rA4ztIAAq3AO7PGpJ8Z1hAv1xNCSXhGE%2B9S1ccuEnAQkXBTmgD2Hp8uwiCMt4dDYSXa3lDVIzgMIgsi8DtQQSLmcM%2F3Q5JaEdRz%2BzW82Cv0OrR5ydGc6f5htXHIpbT%2F6T5ABoRmSXQYbfyrCiKQ%2BvR8%2FHEWJ75kyqgGU59KOUoJZDhDXayvQjCtylMYcQVG7aSJ2eCCfIT6C8z5D4t%2FGLwavCSd61vK1ADlSIn3MJ5N75ahd9d3kqKzzgfwR4fePj%2B1bUhjereQ5AiaG6sPQil6tckqCfVZkNeIYyP7PnkBxphZbL3gj4Yrdq3MSYDhfI%2Brqrxw3jovjfdlw0iAtuPdaiZSW%2FYDxtuTHnwVA415AHAF03PxI4%2FyvhJrwDZ2jYAU%2F6x7lovjaKbuxrr%2FAl5oZMMoxU1OiDj4iYW%2F1K3P%2FA5y406zc8YJVtJ5j3HX%2Fnc15tm1MCOpZcLNPlUN8cbinckKVVcVuztf5obUkkYoPRJaVpVvwQ2qKex0pLXXt%2FGzCaReIkYx1l9la6LQ5FhK52kRiSvNuJ%2BCIaECl3wD6xXqrX6rJ71eYRm9akhvbQsw07ZSB3K3Yo3kiGw26mAA2nIEWdw6%2BOrnTpKXh1YL0ZGDcf2TJXuF%2FK%2BzOU7WAAOxiJDjCQ7bbABjqkAQat%2F8WDEauXZMBCKPwqulID3DU2uEsX7vX%2BvXssnEzy50J5SQqntcjyxv1eLV5UmlZlI%2BuseTGX0dUNuncRRbYdpWqc7aC0FSvUlwMn1Spdr%2FJGuiL2BqXkB319Zzx2FhMykQLyv8jFp9IH%2B6aL5ZvOoQw22CrbCCihdKsi5oK8OnveiZncMwWwlo3ZFkuwzfdFH3cniKHX%2BxPI%2BTBcjy9LMJzN&X-Amz-Signature=365ca1818137e0152e09c1c44d0d897510640e6d75de853dd5235df8503b8941&X-Amz-SignedHeaders=host&x-id=GetObject)

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
