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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZT2F7BZ2%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIE65ox7WhPYwP8AaPkiJEThuRIDtJ0X7s2dYpF%2BCWRPeAiAxzI68YGARJZjXRUYCo65AFjyCjVgkoEcS0CGxEMziPyqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FKbY9LxHTVLyJVboKtwDXVyzqkogWjrw91yeMvkrff0hrgrkt72eSg%2BE7e5zZYKlHI69QREBC7B5KZU9zimsWfHASBDAAPX090RZF8DySSyqdfP29VJMjeNa9%2FJ%2Fu%2FVqz5FCOJVnj%2BHo2B1cRLACGeHWGqoTcxSTLRnCDFFPUnM%2BUwBHBDGz6iZRebdWDJbOdt2pmArHz7U%2BsABPT0%2F7yrVOd5D%2B5VEIDRbDg7LNt3MnnEnJG14y%2FRPqppw0oKYKwvBqyx%2BHNchSyduE%2BMNvUL0WqZ7LO3XiJrhkdhPYAWkxFyj2GEYeXEh3924aKjtwpp%2FzeN86SGfqaPrxe3SySDXITAVY4c%2BoZHIKs6IJ%2FfV5v10HAD9muwZjzKVpOXW1jJV1QAGBj7qHN6X%2F4GpS5gVBITZ6t5Zu7wjlvLyMQkAV9d3wP61MYeqKWMyxqKcruE8LrsfQ3dgikZgxpJcAcovgB9FDbxiO1AQzkaxvNl0%2BHdUuWmX0bBTuNn98sVOGroRvw0W1d1X0P%2BCD%2F8zE5Qx76f8ohNwhmPnDw5E2sdnXQt6G5DCydzq8Wn8Ri2jvH9WeIiF9uYaqK8KRXvRoCFt0qXSEcV6gyu8QkUdA%2BOYATwOufopf3NE%2Fl6YHsZA0O7EsNlVtLXYKxfEw%2FdemvwY6pgFRi13%2FXzk1tgzUFAf4akgshbwSqrWjWj475fhZQSQ1Zzq9HH1SS02ExhEcxyIyndihkH9vWIl2ihVf3JTx3TMp%2FR3dRQG8GnZkpWUhFmV%2FUsz9SHrkpSQMZpKjtg7EGZqLHAUnkR4%2FICEZBiF67gvljEnLtML5A%2FsBNdVYS7PHeqfNx5NpyjigQoau14RK0wtKSkWXFtDsb%2Bqv2Nr%2BX6YmSpr5ZwM3&X-Amz-Signature=fdce96158942278986f9db54bcfe956942c96a6319f8b694032cfd5be8e2f497&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBGBP7AW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T220715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQCtzF2aT%2F7V%2FLGo5YZAVRR5vy6DdkrG6vJcMHoyzwE5CwIhAJuN1AlnFI3TMjW1755M0PCcc%2FKplU125hUj7SG3emHWKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy1w%2B3bYnqwEktBmS8q3AMQmnJdKQHbEwNjjklsKZld7PppE7qWQPb1bx4rStaeHtzAuI0dYSSekyLuHyAGZ61vAQxuEy2ssXsU%2BWRrKDA%2Bjywloc7E6GjcEXSRhbJ72SgoCpiNgzc9rJBlIVG%2FWsx3zxIGvUJ3Tm%2BM06XlWaI03K4pAovhkwx9ltjOpaXA6CB2UQprfbTl3v7NjL2%2Fn6N6YRYlTa3lxmBDa1JBlb%2FpAnDvHi5kdShk%2FmISVTdd3xDOymOT4YkW6WaGjVRPqBFxO9IWOWt6DDNJpzSTFJ0mU821EcpWHTemC94%2FYFMpCtKn9GQhuVZoIPyTDIT1NZAS%2FsdPrh4eXrOzAMvCsWuENq%2FZh8fKhfAaxiFW88bKmNiURtxEq9C%2FWEOq0js5%2BBBsD4HXOjlkbdR1oQxYIDukCvF1c0yx2x6gII3kGpXx4vmlatT%2BnhCnQDZpXUsYfEP9uUE6wRA97ZlzoHLmh1K0Z9neUui%2BrG2B0FC02EIFx8tP0LeMQCSCsPWwNNHl8FkgG6BngrF%2F445arZz4VA%2BS409lB1gRN1UJwiUfwJdnYUMzXgc%2FbY5Y%2BYzwab9tmU947UlwHWv87dbjqo1tnCJN%2FIaAqhMB6e14WMkiP4Of8fnwgXC905sinuokKjCL2Ka%2FBjqkAdWW9GH5L72W1kVgOp4aiGQOE1JqSk4UV2A7T6K%2BWfLDHiPa%2Bhce1WYL5XrxsqfZCLRuSVfoa%2BW7qQ9BGMrBezpdpmORXQfaX4PoDm1LhLa6pMq9weX6xMN2oaC5lMZpDz4TzAVg8hNiEKVMsL1FeJ1zK2m8EWDUn6FDsQ1u3dCCIVT2HsVOcd4lieInxGFb8M7PdLTcV5vPMVsi3Fi5JVz4Rt8Z&X-Amz-Signature=2eae249d4897866a8319e2e366e32bdfb7cea2c71d29f7a439bda3a8b0b37aed&X-Amz-SignedHeaders=host&x-id=GetObject)

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
