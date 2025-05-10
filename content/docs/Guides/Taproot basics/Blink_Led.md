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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHMTN3MF%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0X8HJuuClxlTNqfSKHWNAPBNjUXUVL%2BpciazjFXMDXAIhAJQqZtjJXc6Z2G2mxCJwa5DeyL0IAfW3yTmwTb0lfZiaKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwTgagKJ22XFWxPVTwq3AMJRtdgcuhl44UtfIsFM9tvBTtZB147NcikXGO64tqVUgLd7DHaXHejGPiD21Oc4Yw3cDuDF5wyU8bsb0DkQrjYf1Mio%2Bwmg%2BiD%2FCdDPCc%2FJ%2B69vAfuTl99XmCy3P29zpKwo74cKCUq1PemuYP%2B9A5VSi2CEzPYXJ4Oc8N9ZedxSa0JYHxJO3pv9qkfEEqUUvB1rrYVTHP58shBEVPUdUUN%2FBNGxwCQ%2F81izL6cX2madToTXqV%2BVwB7OOA8%2BNk%2BJQmXj7A94p0I8pe%2FR7%2F%2Fw1G1PLKSMe6kcDbav9FUgJzkibnYuxYxE5M5UckoxJWZCFj%2BsviCa73MRhZhWPr9IwOAPp7xg6djM7qBWfQml7NbswO4FoAmyvFnTtqRoMX4y%2BEXMxNu9yuoy4N7ZeHQQmTlUe740WuX4oUsw7x3uDONx7lfKJMssBRy1xn8CKitbFvbhsNGXGf68Td9ogi%2F8t2kJaB3zIfd14JnnpdKvNjzqLHvfhcqdZeQL4QsD83IycRkJy7aENvE5ABH7AH6F36UDvoZHlrOwcDmIhH5rdKCUGILzWZ7LL%2FrB7k6Az6Ry8K1iiWD1hhwNy92%2F4x8Cq1x%2BX1yrshSxx03nuv2IA7TJvQ3XTATFEK%2BPruNATC6j%2FzABjqkAac0OSRbyIw9yXd2AFTs5Raqt4pogtfdjVouZIsztquX8nD7KPAAVh%2BY%2Fi9t%2F%2BYsL0WJ7gp9Tg36FPwbOjexAjexlox2dTZkIiVamgmLiV0yWouvpqg6xmG0z1EMTDk5jUoWm3E7XtmK6dxVtAfInCvySGzQ6DbR62w103LxB7TXLae6TJF6XRTLvwG3ml1VUpkBzjPoZRwrEKvxV9g9mkYru9gO&X-Amz-Signature=a07873d8c6f789331d7677f1d1dbd9bdd6314670a262fa51dd700cbf9ee4c2b8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGVVDENT%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T081003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDK91%2BXZR48tXqKR7SFD7XQLnYgqoY%2FRPyBLAyPKZZU3wIhALZ4zqQYuDQ6Iph4vXVMMyrxxS3ioo%2FNrHS%2By30CHMcIKogECKH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyB%2BY3DF%2ByeyFk0a0Qq3AO2Nh279IOH2FOs4fb1qddnssSIFY3rAgSs9dsneB5N5fiT%2FUuhg7xzpVJDhtdrZSNqu1mX6ud%2FAuWvSWmOlnvNWCnKqlPqmUIKq0ZZFKantFh2Pis%2FVONCeSBRDoU%2FqgGGV031ZxvVYMUz4dVbEO4ZpIpqJpEBna%2Buc35dyiJS8AkwSapUn4hocME2bu4YxCI4kHwEsS1AQXNY7Jo2nSDzer34D25LDWK167EOytoOfNnMGu3FYisAW3wyZmTSx%2FNzb6vsXCn8kKdoYrIryWTuRsynb3GRmTkYv0ObZLnS1Q3SL99rF%2FGwG%2BigbL5sgg90rBvofxszB3Wu7bqFGYpUcay72fbAjKtuKIsU1KlyGFntgiF29HicfGdm95YfyXNGLbVZmD0nmXXt6iFhoiOIQk5Y3%2Fmr3uEB2MJyNybamJko42FIac2VNGOII7Gz59gmRLltS1pcnYvVtfZJEoQY%2BkDqAU6e0urno4iTK4GTfp8FOx7CzaBscNrEc2PKS7u8HGVyXjuVm%2Bu9e4lABQcd8m2aSmI4EEn2xJ9wLReycYzSp9wUtzCpT%2BuQApPIsdrnZGCZ5EG556%2FC%2FF04rPTb7L5yamLiAQAwbsVO4zQeFftsX%2Bt8%2F6pg%2BM6xrzDYj%2FzABjqkAdIwIQRyVQ7hCofcTSA7fcJ%2F1l5m56fxUbd1Srn494WWZp6BKBtRxpvbsL%2FfC43Elqt7gJp7pukLT8EOOAx2EpogTxIq9pEaEJovtEWGW7A%2FEVRtk15axWjVgDsMC8M4LqmOqh4%2FO1GaVQwEk9Liw3RnK0j9Rc5wRiM4DLMeubErAdx5rkZ4KZMtiP%2FwpUV14dmMr5J2wdm8Z58r3muogkfHAdSU&X-Amz-Signature=8f5ecdbee5cd448f10ea1b2be47fa1c3df86bfc115418a099f1b17012439d336&X-Amz-SignedHeaders=host&x-id=GetObject)

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
