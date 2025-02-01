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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSBCPLY6%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBgnsDbL7u0hpVL6Yf4ooEP31VGm03jFM9%2FXVw2KBw1oAiAbo7dbciw4wtOzieYwkO1Dcy%2F0ZE0mLMEdT%2FepIanJaSqIBAjS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8f26q0o%2FsLRjDAuYKtwD7jjOxIVh3WOig%2FeV7%2FpSID7owKJNpkdetsf16vE8T1pjupuQ9mlFrCxfN5wIFhxaeuR9kRU8zJaWEdAs0QDzSHjRk6uNBDuI%2FCDvqXQqZTwzQJXhqcqisMUGTwXfSBPr2cCc4P1k0tDMrO0O0sCoGdudaYvF%2BuGQZJaYOLPiyv3KKEF1JQ%2BiN%2Ft50W0ZLSu5jIBQ5UvU2PaagH7yNRQtdYjo2yYTLnQaQFf0Raa3cJ5i2GyxDCrjHhCIEDQceqFONgNfGZb7dSe27OzET8WsLGTC2YqOkTfi0bNmiKUfLZNwGB4PXKPuBbEfEwHCM3fD%2BAdz13Eo5BF68E1AoUsDhp41k9ur%2FusXj5NqN6se8%2FBfUg1DMKP0ThWLqEQZNRu1VjNwBDLKDuASlz3rfqiMF%2BmhfhhDvaGUEcRm%2B1DlD7y0186js9OMNLgLfrSITgSGo77AVPNDltx2S2YgN3X7CREAUmzM9pAPal%2FNRUbbeL0ya2RT3NRUcqXtE7jD0%2FAVAo1klUByVuOOlCYkPGTJTX0OxWW5QBt5nwDgWAxcRVa0JuZDK0FtQR%2BlVdjjimP8nqcl%2Bqu2chLdjDgvYgwH%2BZwy1a4ZbmewEsKujYJIYOESbsHqJgzQ1fdb6SEwzrn3vAY6pgFwLbq87wTtcAgrNGi9Lh0L8KvbETzM3P36iQfXSCKRyPes%2FKfJDuO26SpGQsa%2FajgL%2BB0oOYmfklTEj4K5kA3kFbYrxYkkmId%2FEtlM0mrvAYIVyTFEAI9%2BqW3cmzTQVGyznQd%2FU5n2SSKuWl6j9BJeSiAKvjzBDsvwfMVFwsNGOg9xLMSCILNZQppmDR4etk7ShELtV8nimbZVSMN5qcUtB9BUY7Np&X-Amz-Signature=2f338fc3fa64971a6b2c5848eacf798413c99b1148a26f5be68d074f0cd94878&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RRMFWFM%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T140151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCma2rVRFSN2XyWYSL%2FOL6lxIsFaNDEu48n1FSRQLZVUwIgQsdE3%2BvzfbYINORY3G9ONnqJkSq7e%2Bp0PW0io734aSwqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBFnI%2FkmBVbtb85T%2ByrcA58bgt0Cql4epJUvhYCELn7l%2BNd%2FEtOzm7wmSYuwzfMUAij%2BNaIK4d5K829YppsIGHa7DvgmuAor2f8BAo97g%2F8jSB6%2FClTR2Uupz94XJktGLrp0FQucukF6w1Hjkp%2FHrGD5%2BjXYegHZDKvDFHPXWzfnu9Jo7uGRhMZ8T28ioFQNq81tr2lGcnfYv3VvDOdRXoyUcEqU256th8uHyN7FERmzRrTmHQshqQVu2soi%2BQmi7Jqv8asY5IipnQF4DmhCg81k475SoUtJ%2BeVKOKaydJ5mjzbAuppeOMPJAb%2BVzxpg%2BOVPr4AOVTQ6tn2y89Q4Iftd1UBeK1dkTG5SZeMkpvNT%2Bb65C0N0WRKoImvPhK%2BSQ%2BI77HetE4n2ddVTIjthqBMYmGdETQyQIgLXBPXHAN2PyG9l7cLP8jhSQubFpny%2BBkujPOS1soqqboJt6T2T3%2BafXxDljXPT41p%2BReLHAVm50tvBhbu3eMrmuZvOUxUyoakxBtKlErk3c0mSy5dRqE3xS7oRegb84Fo8ccj%2FhR6VpvtJvtzJawT5I5XH1mXJe4UHmbm8OLzfp2iAIWr6LNPQehnPF2JCTpbID%2Bhofo6HUzyGNEeagNYBfqqCeqewf1J4ypHTJfo%2F9wWfMJXD%2BLwGOqUBDKV3u7W3SgBO5rJ%2FVj%2B8tExLAqyRyh0BJsr9hOsvnfKvihI1uAcdeXEkhqTwTz7Ys3J2%2Bx%2FUPmiYSaJZQ0EMkxrxB9e7RBK%2BBgXUr%2BGltyapyVxnh8eTHDACx6zQaPy%2F7k3Kfk2KFX9qw5H4jVP32HhOo%2B1zjtwD1EmxsqU9HlSD5HgLgM236IlhBpsHgbAh9O8c4hJ135YfLpNXV241petvKKC%2F&X-Amz-Signature=07c994ca80ec7041af3f391df1c6e4790a34bc9835091655c03df9d5c81f7f68&X-Amz-SignedHeaders=host&x-id=GetObject)

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
