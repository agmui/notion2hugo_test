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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UJ3RVN5X%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJH%2Bj6AgVkRi5rHVXnXb7ugaOqSVickglmAn98e3Lv3wIhAKK9FgYrxKmIjTrVp%2BbZX1qpvlPYR9uHtp1nx6SBCiEYKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgytGfo8lwcevomSkB4q3AOslyuiQearZn8e2ogEs67yp1pCHD9m9r4ojPuogp7%2B03trMfsK7izDQm9lQ0wH%2FvIhLs5hIHOFBxknjsm2%2BPheepD%2BFirEqET%2Fvw%2Bw%2BPIPyfgA2fR7W9tFUPc28JSn79mtKiaS1Aa61DoKBF74WffwDsmvTohbAmPE%2BroLQLHoqxEBMubq7GrNdGk6gtjL6hvbx9F5xYzLNl0FQN2JM30pNpaTxXElOhgD36BQp5o3SYqyODE%2FK0vGUZjOUYej6knlXfJjMrFfk0sAod4nGrCkJPu8DPB0kMO46QT%2BrYyAXmTqBD0vKxp4RCZHmH0Plh5OIGf3hrGHsOGVPZfZ2r6d1C2%2BLw22jS7XG1BB9Un2X7K%2FEFKD70viFgSCa9Keky8ttDZZVzByqlcio71DkhrWG3ix0P%2B3TEd6YlIYK3lfkznH7eHmtIv%2FxAb7fklrqaFHuBIDw%2FZio2Ht9YScurem5mCrUeOnb0gDa6o5lvKL5rhed8dDS0Mo8KrUgnZQFkKCB4AWhCWtuIbIoDH%2B5k8LwxxEltyA3YQ5xOq%2FQNuHUls%2F0zavIL%2FP9hcy%2BfsLxmIbe5hFznVlvA8eLVxwFSOeDrmx3ZgM%2BMMzKdI6%2Bq7XCsUp7U6R5xFPqBtDozC9lrDTBjqkAdJ%2BPqGQWuI6hh52JXtDH75jB7NUnLYUfgujslJj6KJXKTm0TKXS%2FCdcy%2BBitB%2BsbM6ZbZi2%2BOa%2FRVHtdkwW4wIQ80VhoGihzk9NhEGWrPVyEar3020tRegq1bZlOxow9bTa5TTdOrnPm9mK9w9ZPHPRKDzoSnDPVj7mOqQcCNPZX8Dc5OnJzOUh2S4KzjBufsmHNliZKuYRtJ4VnM77WPWA9gbm&X-Amz-Signature=d4c542345c31d5ba95b354dc46cbd5f2d677fd54d9f50f0c038da3e73321793b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HWICDIO%2F20260731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260731T024910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCELOKff7szhzD4Pllyfh8OU6vyX2VlVZ6KjXXURzjz7gIhAPPvnI%2FTK9LyzzzR4CJHkNaofHXOXFOMKVZsEuvkAkfwKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgymIwM2QNjz26%2FRe0Mq3ANS93cPo%2FbL3ZeyHclJ7%2BZGHVHEzjTkdFVLlElELzRun3KAsymfL0xlY15XUxNwiKssWfS75oh0fwssfXinE05BRsJyTn9BVIzT0u%2FIGji55%2BnzC%2FCGzESHSTOUmm58FOrZoYFucaGsKP6geY10ofG4Qe5jLlRgCO9ZNtazZ3dhqeMIOhL7DOUDD017n0ikg9S%2BxuImaQKY6BoDyW%2Fdcmi75vm%2BTjbG%2BqnOZF3U6ruEo4N3%2Bctyxk%2FuK%2Fy6Ct89FmkEOf0aDM3gI51%2FR7%2FlBtEjZ7cJCUqTDEYChqVqeYQyQnHJM9eK9inY1MZhd9XCV8djCWDs4UoEkWcTsGnOE1%2FoXjQKFgRtm85GIBPLTIOcgiuexOoPQvUTT6ntZPMsZ1vUib7CceB4%2FNTAomH7%2FdWTusLVm8lgSaeOTDvs3UXUKsdBMgc4zPOPV%2FAlyIl4M70VQzModeWw7kBd%2F5QHsJiP6K%2Bz6dlbvWUFEcVxya0KXVhDhxlM85eX08MbEWbdwMoxHOadvXLYZdDetBDg58lE8%2Fu5s4Dv3hMFI7Qwk9qXtKwZxUQGTRPFQKQLLRf1E1ZQJKoAxmsyOQA6zbReANd%2BLh3Iyhqy8nMWNxyz1eNw8f4xRxNznw6tZZPMPDDalbDTBjqkAbJalnTcFJiBzHz5r2VmHSCKVaEsa9lnCYINsEGVJTWBwAtCZdWNcnNFfBwds7TxXv7F3uM1PPnOfLX3cR5tb1lc4S6CVmzFRGhUermpeztCRurKcqOw7X0%2BjB9JrLacsHrp4fbinl7I50JSrM%2Fye0J4Kg1Dx2XourfA%2B0Fx2fq7eQNv9pcfvzaf%2FtYixunwgzgJxY2dnxG%2B4JM0S79V5cIf35H3&X-Amz-Signature=7101fd8ae58110c18d0dcfd563dbb96eb763aa1a974da5a749d27c2f09348954&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
