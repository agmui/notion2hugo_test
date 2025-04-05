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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WGG5QOX%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131422Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCbym5YW2GNz%2FPZ6Ae%2FGiwWYgRSFBSkQMq99Jjx1tJtwIhAPo%2F%2FuXyRQxOvMX0ZbbYs0pBTzMek7m9MVPmCgv6eNWIKv8DCCoQABoMNjM3NDIzMTgzODA1Igy%2Br%2BaDGTprs2Ac1H8q3ANE%2BAA2hmsdPo%2BtkxAu6oKyxWXRZF27wEJfEUnosnx2BGY2nz0WX14meYDu%2Bt7pPK%2BfGzKZwPQaEtuDsPvRlG4fIWDPZbib7jp4NNEbYkIDVbgjDzBMO7U%2FszveVMdXZPZ%2FswMqaj%2Bh%2FvVQpt2D9dTRVjvIHGuBpUSduYMqHap1PQEVYiKHWl5qZLg1s%2BnvCbR2ADuZ7wUG7%2BSmHDHyKFJSnglzXPDpPCrykGEvttou6sOUVPG%2ByjTjCZzvErbm7nzq97nuoAgW%2BCaUiI%2FxGQLqRG%2FiawTPixURAMX7GQKFfj4Pundbg2Kib7e2vQa3P5V3q01MAPPtmGCv9bkpJSi4ucJVA0uiIEJE1bB6cMNnUgSZwogQPPPuVPZ%2B3fQJ607oFXlAfpAkc6KsNETwjMKXZQyqdFFZcW492nXt0SDPfGnyt1TjZxcsh87RieHM5XNdtJkYDfQZlYQXhOPcajoe%2BtybD%2F%2FgotsJbLx4WNnfm8Sskn1hnThVmriWVBCBLBYi2VPzdaUu4Z9vLVV%2BG4st1m8fvHNvCYmXIZOXnWpTwqc%2F%2B9OX1vAp0Sp3qSyI7lk%2F%2FXf%2F1zzQQoe3ZglNmoT9fBlIBWLndi%2BM%2FkQgJcJMndVJ9%2BtJUT5E0ivy8TCd5MO%2FBjqkAaFiBVdrHlBmrD6y2h%2FtUCLiIlYedOmS9xAixUyZHAcvt6sK0igVWTQFIRB6Jm3cwYK5j5Lfo4rHX4h%2FJvCHTwtkAJY4QOby09mpUgM599fKQooX5kLujt37BrSVUR8d2csN0F58IdePZA1huQpg95SUN%2FdS7EIYx9cpc8fBf1MeyEbTGmQZd6Nribev2z1QzXOT6xnmpL89WuehGPbKlvKP54pE&X-Amz-Signature=0829adc9007bbe7ca04d26692072decf57b42e101833f97ac75d2d9bedc44d32&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THYYFIGM%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T131425Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHVPHTQYicC3xd22aKEJj6mZkz3trvhwQ%2BK6fch7BM7iAiEA8v%2FDvxZ1KCsYP0UnnrfUjMVZvsoca27w3EgiXSl2oucq%2FwMIKhAAGgw2Mzc0MjMxODM4MDUiDKad0zIW8hZaNWLPdSrcA%2B6SwFUji77LHy6K4X4Sz4DDf6MzDPfRb1%2F5lCVQ5trvpy9qJDOfgZUlXu%2FjyoXdBeorU8f2H9K4Vqhb7U7q9tz%2FWxbIIdmbKW2oUCHuO687lm8LETnzayyEU%2F70Hd4GmR2lPS8%2BaJ7ibIKTPJWHC%2BZ6Ps80Bn3J4gXw6vCILceIiAFGqq%2BGNrhyEAb11tBklwb8HNGaAve90wY2wav3oBESDAQAgphHRCZo8O1RmmLO4AnPNNUK9X4ngNSO%2BwK5LtPZWJUsvKbEAbbVXXs%2Batv5mVeTKlsQXia6CL4oiWAjvG34ssW9LSgKvY2MqiXybXs1cRADs%2FQ%2B72guclTHGeREAP03AGGiyd7CBfL3vWQdkZfVjs9go0mD%2ByD6efR7RgudjOdC8R61JuUih43O90IERarOX%2FQVLqGS08IlN568G%2B7I59kfpB7ICqT%2ByOBN7GZwDD5MMWbuXYJNo6vz4wV0shlsDwk7XgA9j6lzHgQXw%2FJUc0MYRsTcVPnrmhI25spF2TImf65jaS3fl0x5CmLhmrgI4UIhgPQyHU9n66iO0lpKaZEY8wny6xifpsrCxh2ZGLdbTYSCHGFWGi6y2jQLBNcCzSASEELSuKkRHZXxAD49kTAApdDQbLTCMOPjw78GOqUBv%2BkV62BQBGQiumWoGews6KSugb3ita%2Bhf5tVurYv1bYolhBHFyMWmJd4xvU2kp%2FPhmftH9p65rgVz3wxL82u3TIe0Us2J6gsHc%2FSlvPWvKU%2F0o4FRsJU6ja0U9kWnMksaoD1cgeqjkQJNYewIABBzOHpBXFHrHGIFhH%2BQuiENTxT6mMnW0BOXLJkOhq5qzGvpowKcnV3CtO%2BtqGSIksR4XIcFkFC&X-Amz-Signature=01aeb2e717b4cf74f03a380068f62faff92fa3174bc71e93c2b5a41a9c0a3592&X-Amz-SignedHeaders=host&x-id=GetObject)

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
