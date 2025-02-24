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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663CBYCINM%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG3o%2FhVG%2Fm3%2Boqoqr4JKbQZbgwA0GON3iGPbUxAU%2BP5gIhAN2CuiS9kjbkAsNfPlw3WzB9ARzeyEe%2FzTDft8W9ugKuKv8DCCEQABoMNjM3NDIzMTgzODA1IgzrahEKowrnmgBgup0q3AN4h2dTb0B23Bam%2BUgF%2B6ZXf%2BocLN79FSi7iMKLHpzMLS6W7s%2FpYO7%2B4d6CSI%2B%2FcOLEXbaWAauzQKnwLBXaf6C7XGr8tZLG5ONXxaY%2F7bar3ocVSDp9iEgfc0MNPQZazs5oAADdiwkeCIdv26RnLVAhAN29%2Bf2ZM5EklzoIquT90e7IYStVhGFqFTgPNJX%2FpqSAF7Fjn%2FeDS85cQf12aKdYN0T5YDl0BCijYEl1Wm3K2b4eLBiyROfmjxMsBKvwZ8lToAWF4rKZntcHCNiQ3eYA5VdpRFA%2BlnKlMkRv3iN9Uv7s%2BXLDPHd3cTeT8%2Fe1syPxwa3sD0RU6yowhfP3LQ%2FEHOPB3SIeFAk40o%2FMydlHvz20jdirvmrAfJmla7nF3P0kLjIhLg%2F5l47rIBxu4k77jy8BaLapPpIYbt59C%2FlsV3xJtuoC%2FiFU7Mxpron82mMWpyd%2FAfwyj5Xgubz%2FopaPSqG3Zrolrb0%2BWHjT%2Fmw7eZGjneavpBi2X9UyVJxxfxCo1aVjvj5EE%2BfTUnNgncQJYFVU0bliQFvMVB98hC1FlsuNB4%2BC5URJotxzSBl9yeFlKNikK8oeKCMKIv3FSUJAchmVOO403QxhzArkbMeyfDUWSXls7kycEvuUMzDn8O69BjqkAcnaG7mjUl7adPu56lrA10VNoaEmt2T8i7jRjWXTduOs4%2BL9dwB30PYedWuiuWjnWcwTXlcAnEmdUPSAOORFRsDAkKVyq4xZYQ%2BUozhkyNvhbFCXWcskL18Xh4apGsXW%2Fl%2FeJ1%2BYHCwZcLylZYedvt83BMyynGA6uSLfhWF6x8kMFe5IYQgs2zMUg%2BB9nNLOjVyOilz1DNhsz0r7dmaUwlwqb%2Buf&X-Amz-Signature=9e6adf9b85903bea9ee345b83f22feda26423e9b7c7834a61f4ea72640d26f9e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665V5H5FIE%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T003749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCSrhug9WaHxTmwKfKnteCqaZqQgW7Ukb4r29apUnnOowIhALqlZ%2BimXflwMPT3K%2BhwIoPwwzHRQ8B%2Bml8Osd6c6M57Kv8DCCEQABoMNjM3NDIzMTgzODA1IgyNiiKYFBHMk8W0SS4q3AMkn%2FhNIPr1KH5Je579vNnaxMM8RABEtIN3OcWl6mW251pTkqrfvZnS2eYq%2FS%2BO6Qi3trDn0Us1IhXHn5xM1J3LGJUxFXelpMOfKGzVVfB19UU4fS3k4Ykqb7qim6L1%2BmVc0oca08R0obRPus9QYS%2B%2BDF54GxhtquO0u9seERNcRuDQSKIvEdyuh3fUz7urSXwOp5LH0cKxzFVGVHsEA8AaiY7kv09oZoeIGoWOM%2FPUr9Wj9ZZh0vEByu7xOGLFRA%2Bn5%2BMsvvnWOR%2Bek1571KpwDS86MpuNkmAROVlgmphpppeZBxWXxwdaoiUlTg1xyHYQin%2BthOB2HjIPnrNn97yLHOrlYbUpove3PE1saz%2BGlIqVMjaF4e8x%2FaLpIKrKrnvtZwXlc80hAyIyA%2BtZnEZDtax7FFV8%2FFb4iC54ZZfCoTVMPDCSPR9%2BdHNlfa6MuvicEs44qr6uxSWWUaw4v%2FXIOXDaq4FZGHfgq0pp92qdI52Jb1LxlTGk%2Fa4fhww9evg527kfIYt4fEB0O7iORz9%2F6UXzRlLz3HSX1cnOQTVNLbCaIp4Gro77GPiZFWRgP1QsFILinCdLSEyR51JVYhVtRYUGb1n8zo2%2FKiGmWri95f4KghLu3bc7aVnxRzCb8e69BjqkAVzcO7BH7prTPoBMJGloGIOYuq2KmYLlriyUaGqQ3%2B%2FgZTBmTesJnt2yEFnVE1Ri8xeIwizNbanE5dXz3RBWtSr38A2wy4n5wzKU5g8DRkuDJ8nTCQHoQANrhnzY3iO2N1Nz3kaRRRc0DNYXWgg0UEvzIVL8mNN5vZSqk%2FkF51y1xxte475NzTAAzKy29D%2F%2B4%2FfZT4ksRGuvC35n98Hs5094thlv&X-Amz-Signature=566a8d624029f595fc9e13ed6a05de413aaa87ffc4b3316e3b312e4b6e9c5635&X-Amz-SignedHeaders=host&x-id=GetObject)

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
