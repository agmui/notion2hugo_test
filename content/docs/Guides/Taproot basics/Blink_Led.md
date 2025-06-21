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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VAZROO3%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA15n9jXYCBbXRbLCLhpzZgcKmhD4NrF%2BRhfiLgyNynIAiA9eCG3bQPAlmd%2BbVsa9bgiZd5rSKvNwy%2BfXRbdwshPHiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4tRMobrq%2BagLuefuKtwDYluqJW9kRL8tKjlEhkklgLt2hU8zOA98OVYkF3wpnPTA2vSxrVKBcA2p%2BYvh%2F%2Fz8qDM4sWGF5wOTXydpUwCSn7QXvaL2YpxNUtxAhpPvQj0DPQEy85rNUPgXaabGfdOlswhsEXjIpkBZyzkxZq%2FwC33scan0auX40zUO2KaIlZsKvImKPrt3HEt2EGQRMi6olVfYpsWFL1SaQWhsVX8Yfug2P3yEaMgtFGDTzSh0seBAZPgtw93jzVchgMnJuK4GF5FH9PrlNtFmd8yENVQuIOQc7NhULJSC9xaNDGv0b7Om6Gn6jt%2B3veGnJV3rNGL94CKjGVOeBYXD%2B8s7kKgHKSkI3VbC1P8D3C%2FWrcOxfj1ZMrPO03ICCn4eWOqQzzfPhwFtwPtCY1UE0WUZ8PkZBbDTS9lycnyxTZWiEQ1m28DHgB3QbuXBOAupUQQ1Iosikzo19kllAa81uR%2FfmosERi9OowHw6mqkTT8Ub9NdsjqT3Ca37jSDQfdBFuoVyWXUzIBMc0sLSUIIXPvceksSX97AGqnAa6Siym5S5dl1WeeQwaVmb%2FADQSGWFg9mmsIjXyGo3jDfGP42t%2FEnzhDuHslLsFMCslH%2F1t21Q6rrKQXWvlwBXjPqN9GVNIYw%2F6%2FYwgY6pgHqgqRxAJzVmxAi5jsoIAQczVXsYre66NfJwQkvOfMxUb2vfuKVg%2FdtDZNAnztwZ5XK%2Fb6opTBaPSn0g6QIcihONpkOcdQy9AcqJ1P00iCkgsVUL8CJjMS9SQnzPxpz6i%2BilypPijsO8GhbQEMOBtl7fiUjT3D3X7bEp7WIyzfQ442IVgGnfEYTq1jTseENpT9%2BswKILzZmZhWCexvZ2DCJPUAT8SON&X-Amz-Signature=8f92b78f986f96c690428b058842f218eb46d5592dd42ae96e8e827c8656f9b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZLWJFCK%2F20250621%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250621T070804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHQ0e9LHJi%2FiN4yF1xf%2BEyM7xrkn%2FrqJ26yZ%2FEpacFuvAiAnsmyPG%2FnB5pi4vJILmEY2mojPn8qNKgqTPy03HB8zEiqIBAjM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUzhMRLZOnkHLmTk7KtwDoIuB%2BPm3syqqcA6NeH%2F3hqEXzjBLiKBXy7Hrb3A1gVaW7lhYF9jYHOLCq17%2FFdjAQ6paZ0W5qJU7cWRraHZqktV4bwa8rut%2Fb%2BOPchTlBWTuCwFyxhyJBxmeNbJRZQlGj9b4ngfkFinLtxwF9b5ucoAHzr%2BsZqqTK4LOpAn%2F%2BqY1uTPWSxa%2BxE2oGF71aDdx8F52pqXXAX8uJUUTWlnSAJX4L5KDzesu8zfJSjT%2FX225HYFbKI0%2BfsHF8FuK7jehT2PnYoYB4ICAN6%2BkoD9Gsft1CL0Q%2FsltZ7%2BSBEdamNCuaslZlclRbQsv%2FzLD30sLwbAsE4pjGgycpvuFtSJq7Wvltb6rd0Xr9YSHM1ggsGtDhZZM33VN4Wt0CwyFmCZ2DVh8IG%2Fs%2FfPHsvw6zsJ446jbGMRmvhXkxLx9XsiUGlKSKk3nsaOwSmw%2Bvsk9jADlIB3PqrNhFc7WchVrgRZMqgIVagtaJ6YnQW2f26HfUX%2F4SZjPcHXlnqgfFTZN5ruoV0fqtfzmgYakaaBXox%2BxZ1aTcVU1LrOEo4XDIaYu2%2F2Ida6ZHW7Un5eAkitKqPVuwIdpMRVScuGye5JDoiE0U6IPIU3LAj1L6XGvS6uYr2XHjYFIQLuCc2RGqnYw96%2FYwgY6pgFaRFGO21L8MUqbheFHGC9RQAYgOOi5qBE2H0TN9hvjt2ZiuKpltD2i385EZB65nipHYTDtaCBL9qwKivy5lvfQME%2Bj8BfBP9bX%2BY4lXxZAU%2F2Isb46GT2T4c36zFyrd3ofcGeoO5Ft7rkJtc5t18t4kpLqcag3oU44RMq8mzSNN69iVqTupCWUny7P%2FP3v8vxO%2B%2F836nnIqDSgxLZ5Q15v1FpBJRd2&X-Amz-Signature=73fc7e8d7932535bf6b60c17eb15831fea46b7ca64699fc627d274633be4f332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
