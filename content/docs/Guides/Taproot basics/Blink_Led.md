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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQCGIJSQ%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNz4wg8j31C5q53T2jfAtD1mpSWqYXGJeWDW%2F0WLYPQAIgd8Y6GBgxNzH12taaHb6ibVA1Iq888V2SUvh0K2dSxVIqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ6YtLTuHbJUBELADCrcA7VrLdxI1Ym4ONELPQgOx8oRmN11lJeq0u14g8OER3zi7aRTYvk%2BpYr9qeVvoDXlHW810TFCCzi8xdL601vO%2BDslccYjaAYZWetdZ51BmYSm02IPXGMtjQNqcBqBToiZqFj1K75wrkvscPVYD5yi6q6xY7N4k0W4Cc5Q%2Bd6BGuMJLYouxeXplEzKqojMnMNvZHr3CiY3d2WVXPiW3avOJxKgk6BEoyOYee9nUOUOj22B%2BG%2FcazL%2B1Btx9zMx7slt5r2yXvTiimk8KSKdivaYE6Gk%2FOpjbdCJgeQ9jkgRkmRud0iwtM7EAq5VzYnkYU5wxAknOPUq22GbZu%2FaSdFyZzdStu%2BD9ZDcBBLZff%2Bkq3Euib7GDazlO8a8aRqaVD%2FFFKh1oTg%2BYwuphuELmpwomPdHw5eZGqYdEDV%2Fs7jUk%2BjTJmjrdHv5V9WzfbU3M%2FEzUU625S7kmol3QNs0ATu3Nd7FOzllBOolENSBiYxaVRwuKqF8tN2eJTZWwyjXZLkmE6tranesBJjuEQO%2BGzRDnkX8mm%2FTqusvnyowg7R2IG9AirpDCw7DIUXyWc1QOf2NeJhaCF0wvU28fsl1dmdePlx1rTa0%2FVxfrMSPvU85ElpRXcT%2Be4FSBogupSuSMMT06L0GOqUBgLT4wqg28Q55lZGhGDH3U%2BR4FXu6Z1Z9kRZppWPMnXVp%2BmZ%2BOfw4%2F0xiE3k%2BJM3e%2FNriPdIyg0jCqlAfyaV1lAwTUtye75v5mRMfxmRPCivnK%2B1eo9UKdImsLj7w%2Fmx3nx9yACwJb3xb8w714ssmO50vGkJBTahpFu1jBNcK%2B4LIPcxEA4M68eRVzFQN4Ir6YTTLDlxXeBsiSGzid2eKNkJFbedp&X-Amz-Signature=02d3dfe2626b1ab706ebef25ddf1fcb4bb3f8d5c9c51bc47d14fb654d7417eaa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663M5GMWDI%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T021513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDmUBG6v2cdMaXLzkbNR7t%2FhJ6hItKqNcay70l7aoDkPAIgKcE6va1BwDj0dg916CKRIKXMM01wOmAYnEkL%2Frgp8dEqiAQI9v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOkCt16vL5SOtuJlYSrcAye%2F51MyvFmAhE6x3ytId%2FeZzMfjVd2ySlMivhO0YNEU3svA5f9nbH5R27vC8xFor%2FVFX8gyt4eg4I%2FvqC3J8gZVYcjTSceSW4KQGWJPHSqJkPS%2B3RBaO7kxs%2FDtpyfa8cTwfqaweEypZnPxZ2AbCnZpNGVvRUzOPMMf4Z25SC7UcaAxhK8KuiuZupcoRO43gUCLPx%2BTSoom8SzRRk4izZSOZYrmyRRUcDgYiHYx%2BUufzp8Z17pUA5utbrUQ6zo%2Br1NHMOuMRnLfxXNfUBFkqlaVfW178Nzy5ljFP4i4qpdNwEaeyU9DWQpqgVdgTN7s0HelDRfTMgQn%2F63H%2Fm1X6wa0c7Bi0WrlXaSb3%2BmsIpy0%2FgCRTpuZDKU910bZv1sVYCxs1UkwfQYk24LL%2FTkBMW3UHGQcGke1EKIIZS%2FKJTdj7%2Baq2gEfXAVhcVOcPvA1aAvhGDKkrwY65lFMwWoRY04kixuUki6OIAX173Gnlnex%2BgWgibuT%2B08hwnSmmIig2XtwnH8LGBF5%2Ffb1QbPtboVF0budcei25BVWlBjN683A0tfhohX5SddElxGbGMu9qy71RvtPNePncNK5OhJ2LEFMXq2m6%2F4Qt0P7TqBscuRJVhOaLtm4nUlQhhsAMK7q6L0GOqUBjomlrCxB1lqWB6A66Q0w4kStsnRDx2YfaRdpaL%2BkK2hKvqw241dMClqoEcNvWewNNi6b8%2FPlWQEw0Dlec%2FBLIiz4D0kkgdTJpAnIgv7Ush8%2Bnnh46pxplv%2F2CnPJdsMVv5dhV2GTfIon%2BKatCMINSSphg%2BL868eTdMx8kipOU4sKpU0DmbqWTs%2BTH6tOv1vxzDujV3J0sdWDKP5NVFLg3hmrNc13&X-Amz-Signature=9275f6340238464c2544574303f30440e6737844cc0340191ed27df67d512dc6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
