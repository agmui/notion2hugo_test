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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466STKUH2TS%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQC0KG1e6ZW2rj3hrxigf7S0XAQ7ULQdqCdGSe52FggDEQIhAK8UXHqJIZ09zSyIaXvwb%2B40le2YZJEgXOuvsSFRdxSoKv8DCFgQABoMNjM3NDIzMTgzODA1IgwTPGxdLZhbsf23gcYq3ANBj28th0vUJHngzKI19zooO4kUArxSqH7l2Qqkr07QP8E0GCcDeKbh5SzRf3jtZvq6P57gw%2BzYiwt9DgXEmlLN3IJxBFxHsIqPkId9QIWToErBKm908VUeOXGlwapI6BAun66apSi6itBNPM2L8KlX7ujlGcwTHANlVz0rkXBj8gkAdk4hXQX7BMeYJB%2FnlEs2MfZ%2BOou5cjsWhAcPboklsLFiwFTfqU6hNFZzL2zZdvB65zEcN06%2BH%2FS7x%2Fufbl%2BAD2LrUX%2BH7SrQbfXYTItDufCm82r2IvxEE34wnHXWfQ2pZYzd79rHY8lfP9ONWQqh1mosqP%2FUCmXrmDH%2BmTAMw7rkLdG9rHn0YNd1Y0eALYrrVqg7LMAsJ%2BCxgewOlfbeibgukOQDJ%2BbQgwhf7q1%2FIFI%2BDcIa8DQ12xGFFzyJATMlNULmvXulPmgWfrFDH78kszVzFqCDdQbwcm60ODmbS5mXe1XjsSAsw6WwodFPXr7JNhbq0NWXRW0nQ9lT1xPjQ40b7R8r06UqVGLQS7Elos%2BsPWI%2FLzuINYVaXH%2FzWuWAlvyJsyObK%2BAFpeY6xDylUo6IeSblpLkxL8%2FvNkkx54RAfxdn8iiLmW0T973wgP7g%2Fj%2B%2FM5Zg6ub4tDDvkd3DBjqkAdQqpCxJTVreWuVCaeeDvdGWnVgnMdxUKK2dTt941rwtijGEs1RvhjrQvHn0t0%2F6L4dY1N4PabHoPSMMHEXeliM9HkDVaCpUGrHX8kaXoFFzsdEb%2BX3KiwmjF6Ja7WGJVwqt%2FLuTyw7Zcf1vrwRKgNnT3WLz7vGrg8WnQIklcxX8AqNgeXlAapeQFhmQySfNhCOozQn0oJZtFFBksMzK5EMJjpVU&X-Amz-Signature=33084da48e58ecf8f6a9c22d8e753be4a11b24deddaef86bafdbbc82346e81da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6S6P6ER%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T071240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIAGucsNrMN4E0nKunvYq0q0YoFfFiJTZ1DSsxNfv%2FkZdAiEApTJpRXOu1Je18faeLYgexJJk4WM7aKv21PWR4qOS7MMq%2FwMIWBAAGgw2Mzc0MjMxODM4MDUiDFtil7hyvLLfIlRXqircA79i238EQFd4ZPMz%2BZPd4bNnp7Cn1vgyaESqEBZFApsWrbj1AG9lxBNfNzmHXY3P5Cz4N5YZdYsu%2F4iWN3fEAODSL4KsmgHkPhy3idstURlbkQg64392CxYDTuFgvga0681L%2FWA4VE%2FqMusf3tUgtT6N%2BxWnzi43S214IuE1x3OBTjlJZ9pu1ewxIz5cKFBCXD1yVMnKM5YGb%2Bg%2F9YR9CDGJruri5t7r70rNPw%2B34lV9ZHznUloWps35%2FErbDvHKy2UNKAuAaSi4m1tYBgS2EOA5thh23Hxsm7zpTAzZtcvPFlSlYMZwsXqt%2BGU494Lxn5s200nfdCXYA0Xn1r4yeOuocrIJvERiEqPlHozePj5U34sCe1NxVGk5DWlJUaOLo4%2FDl5xmWXL%2FCYk9I9qcx0eBNV%2FLmJxKsXBmLuqPil%2FY9RyDq%2FXmlYPPsXvKXoEaJD71r%2F%2FYOz3Cr2mp86aZMIntb%2B7wItNCa00hJY92kfGKkKsoewvdcF1nvuEXoBftxntJ2rPKec0WQ49vlDb4PcU2wKirjZZXQiSHBXxFhDsi9KUAJhS9kom9UAt%2B5aY1ypJSRny2jnVt9X1R%2FrAS7By3Oq6IcEAmt98e5yHhtKKuSy92S10qA3k9c918MJ%2BR3cMGOqUBHzVAuSLvJ2XP%2FF1vBnmiYc0%2FuhzjmdbmEhR6h9t77T23XLOhawVdSEX7NB5LfNJqMI0Knn0IjCKSCpKfGdaOXSJDYjY7URLskzzW8N2Pcohv2xNCfVwDdaYdYMblq7A%2FAgVzSho9VM2QFVK7jGfOFwOihj6iSh4NmwaTAGFZLtGTCoTsta5UsqlX0Pt3dcZ4QbDQ8l5fB3OQjYI2Hh7VbNNh0jWI&X-Amz-Signature=0f0de333691f5abe211446588a40646d66ad996421e5da173377d8b7185ab850&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
