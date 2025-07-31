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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXML5AXG%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCu97J2GPnFRxRe575QlRU7qPoIzH91mHPSBC3rWdlG7wIgV%2BSZFylXkzjpoQlViKUnQSKl21NVjzBCBWv1WBH65vAqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP8UJxMoV1803UIBBCrcA9%2BoqqwPGd2OVdXK8RChXoulzcm2mbRviavHvuohKF%2BegZ6Km61gh5VJuU%2FNwtPXkaP3Lpn4PKTsiOw6xSK1iO4tsqwIID%2B9fHJJc8e7dGKTfQ8ROb2pgV1QVvuFWEWnBULQCXMZ8XwvsWxKhFHP%2F3OcBmIyttY%2FcT7arwfY9hFm5KLTqe9m3S5v9MaoUJc330wGbpgxd%2FCGo%2FdzfigZL4msqYgsqggihC9BJM8V83APjh%2FhNhIXZvq4T7G6LiHX0kVRMaoK2Znktf3NKkam4mzqhvq34aZR%2B9LCK3%2BDXMQDoSjHcoH9CojIIHldqj9sh5L3FjtbQsJuhCOnnqTOUTAq2lZ0HWltqt%2FDtzA8h9jE2oX%2Fvd%2FxAAZ%2BUzaOcYRvuTtEEbWx4JhP2pMoH0M37orsMTd53GZT6nNgBrPntCzQ0TyD5ZEI%2F7QHciBMPJtsI2HZQYJtQTKhJPclILVBt%2F4Zge%2BQnvq6voR6GcOlw4ICTVaRM1po%2FFaJYjIWAhgsS9DVUF1%2BixfjIB3IyHIhe8ME0trUTaNi9T6URickaWO0oanOBv0E%2BBaMnbe%2FfH0rV1X9Jk4WRhHMqp9S9f4LvnLxw1qJSePvBI35HhemSRDbVIMJdGmJWsv%2FpuCcMKeZrMQGOqUBBYcnkN%2BE5KUwDZBcqYFASMAILb9kqz5VxZ1clxdsq8r4u135Bvga6zJuZNWBL6aci6D7oCwsv1ikUYq%2FvtHvcMplLBcZqt7ScLS46O%2BH8qivprNsR7M7DNeYr0Te81Q83b%2BVJ2AJckbQXQDDd9QwypaPS9RZydydG7UuMzWa1u3qoFoQZmZOWN3zZxo0E%2BLW3LjCP4MqJn2fsoA05nLVunNnoaej&X-Amz-Signature=91fbffe66995868a950edbb9bb3e54e4c5eb7a404abbce6d982bd324c58beabb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUZZQG3O%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T101017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3GHOkrQduKrluoQCNs8N6ALW48ovv0jEkwmA91bgubAIhAOeBnaTUHanA7g9vgm1GyLSbWuSP4fHrnlCcisN4RyGaKogECND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2FGXc8VYCohMYQiAMq3AO0jgiUIqON2DMvVMosGL6vJfjl0mjjgTrkV0syL%2BqW1JpnvJtzWEU5GqVMKvgYD9qoY99JT9BUzSpOl8myY355Th9nhgLnFEz7gyymIDUjvujEIoueKxJtUnQRl5F3QJWdTxURxS54D0lpebwY7fBMJ3wWpQPJc7UhIXyABfpQ3r9PQQixg0zY4YU9jaLL9%2FX5xb3VQYUtPWyaiGzCRR0xaAI7I0W9mnhEm1tHhPyRXBAmT7xOje9fEOi2jiqT3%2BPmXCKu%2Fx%2FitgFo%2BMQ%2FjoHIq1xcljzW77YaZk7Iag7jxXoOTfgVh3LJj9YoF%2FwifjVJm0adLuuhwmHnDL8Elhr1He2AhjN5qPXQVpNluQ%2B7Fe%2F%2BFve8cv0f%2Bq94cpdWa1X0dz6bSgeMNkcOrxrg8YMxZqbS1enQXKOMdfw%2BBG5ecj5P12wf183eGYY%2FYumIyUNGp3fhzFZPcTqud6V2mfIbbZZ2BLFegqrV7c8grx3PyZUb8lMmxFsaOBxmhc6kR8XmRd1qN%2Bazlo6E2HcjgwDu7Ih4uhtXXYzpHiC%2FuVPGvHk7I8Kw6exVXhTGNxO%2B9r%2Bb8ALLNYCDHXwyEdyo%2FO%2FjX3eWy7O5qGtIepJ9O0L7Q%2BcUVODtFRlEtl2BITDImqzEBjqkAdPR%2BbnU9cHW1Qywe%2BpD%2F0oem943QW7BrfJtCAaqD15SItPwaZ%2FCYtsfrY8G6dVHM7z8Vf6sv2VydplKLdans%2F673pOjz%2FUtlc9BHZTl4pAZm1Ba15yaF94DE4FXUGTay5tSY%2FSUQ55KmbE9f9WoUf2akfAfq%2Fdi%2Fq7mbShzyws%2FcLLJk6ae2V2EYIpbm9FDDPrXiVwhsPquaG12RcrT%2BJll1%2BYD&X-Amz-Signature=fdfaf1105e623446562bfb5d1bc636262bdb08768f57c1f275a64ef4f29ad71d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
