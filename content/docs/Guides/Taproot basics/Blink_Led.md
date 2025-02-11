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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GAWOLKV%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140102Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIuDfck5Ecj8rk48JjkA1MYEAZgpYcp%2F4r76RnDwj02AIgYMf0Lwyr9eN2EvCZh6TPua%2FuvBvW0P%2FFGtzx8VabwtoqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBU2IawOaLAk0Muo3yrcAzgWa97YYaU1rW5ZmBXFj%2FhPuDtTSErqVEZbSNAcTsZ6CN9XRp3%2Fm5TVsDjLI2QSIDgV%2BuNs%2BXpPA%2B8fWEo7Cig64dsKrXuMNCyqFQeuNllyGTtj5rVgQTB94ARQyu3uZCTOr%2BJp0A1kLAw8UTd7GM8cvU8HYSa73m7J000qLWvZcvNPdboiJT9eRXMNjs%2FEvXdMXG7u%2B7aertAIEBd1v1JniNZVxT5%2BD9Tcafi4rXTzsS2nZtmMvZnSsMowSngyvUjXimJMlvizqIENJR%2Bf8egL%2F4gnt4a6einjXNFL3UOa8gpXLasdBZlYfvUfB2tYJQU%2F2Q49DMkwBV4Vvl0JmZr8IOS%2FOhoVKDsWvEIrSqx9344vzzNMdAhbR7ON1wsMt15dZCW2ua4SBp3tJJ9cAOCQQdAmOmsFDlZ1JMTmUorJfC0tbxBEGuRdmMjBUGEhFBje2Wz%2Fy0SpxhZ8aBKOVRtMFZDhnG4JYc2ljZ%2BMAAJzonztf7DSoMxy7BPJYvy9%2Bmp7XN2Eu90IvDSmXB07s83EDA9ooZyZ%2BHxlpfvdHRfdmyoD8rsWGzaioVGhVAQ35NZ7vF%2FkVwiKZa%2Fsm%2Bh52MVHU3W3Z8RDvKluWBMff0zJMa%2FJMxDtBIHhlpCMMMSlrb0GOqUBYS%2BuZVKLfuqvGHb%2BivpOUckNkyz3F%2BIduqMNT1k2LE1s69Uq1%2FtBrbisCdshXk7qq1GfAcuxSf34isGQ2nIPqoE6CuSk23gJjUeHPqbCQWVgNpUXhx2YHjAJMZqVGy2obzCx%2BpbaYNriddS3eDOD3eCyOVNB770WreALcfEH02fQ%2BxvjS4TsuRXRd3H%2BDrS0sdh8W8qLB0NVmkty64ffhJSY2PKd&X-Amz-Signature=0d7fdf80b225f8d28e200a2d6b252e7b815b7f4b010f26e004580935231e861a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REJA3PC2%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T140103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvWszssqpG53gOgEYgJpYyuJAcPjyESO%2FC6IolCi%2F6ywIgahT%2Bp7lpEu0AISurggSUcpDACn7lhGA8lMca5%2F%2BqCjEqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKvmiyTfiN0LcO3MDyrcA6S1XN%2Bjmpm8P9zyg0ilN3N5W3VLtc6q%2BKlVIPdOUl9qs%2FODmA12Fz3Vg7ioOb2ORWbaaQ0Gpz%2BP7%2FhytoLnTZy2bAOYj%2FTwC1ykyECSBokus2%2BBU9lHp7chhNnl5Y2CdVM%2F6vcSzkNu84rDwhsziX1aDlKpMqwH2m4VUNcWyAZtWXnokStiPWWAb%2BQju7Piea9Cg8HtUgRYf%2FTR71a2tz0xELaPa%2F5uOUwfDLP6LZCO%2BosHPCjXJdQ6cBPsbtJXg3s0tx23Olwx9cjq8%2FY0Kl0PEc3jkAEjxJF1WVMGpDlEgQ4kYddVbSaQNxt%2Fsu3EPODgmvJHO0JIlizNjscPyanYicV4cEQImPeapX%2FQQw3U%2BbZVmevPmZQTFccF0dcvuZ3GdJYC%2FqUDPsssroEun4RxuLgf3gLLBGJ640rJTnomMgitOFqzyNvem3drlV7cQPf9frcNxcSsAJxSdX7JczbXbbOdCuqx96vD8qrHbxtggB3OdB4IkTZgJctC%2ByokFD52%2FfeyC34CZ%2BCijcaQmxULvYql%2FJl4KIQkBUUi1dhV0IeHZORS%2FT%2FH82iPVHrNnwQXOKtD3TgrFg3tgDJTJxgWsz5ndxJDVfH7uIlob23UtVD9aDDQU%2BQp%2BQlMMLqlrb0GOqUBLaa5Qeo53So6tsY3b3q3H7WU9%2FdEq2hPPE0bImk7fHqIrBPcKbPF5e3AcnEfz7UjpKCaagWpccfCuNe4lMw97rpCi9r2nsycTjrExR65%2BryaCleO4Sdpfr%2B90V8Udnf8%2FnI9ls8lXr9VdUeQ8qQcWxCzfdyZRG1Nz0HyLhK6cGwSHQpHTh3P%2Bz0G%2Ba4twulU74Ta3QFzqUDZQPBOtcppTSJssh9%2B&X-Amz-Signature=76bff9bf2d8b84d0bd61b82c94a9c8a117cf7bd3b76d3e998099380658ba520e&X-Amz-SignedHeaders=host&x-id=GetObject)

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
