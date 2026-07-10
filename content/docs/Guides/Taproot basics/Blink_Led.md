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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667APYO4D2%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032031Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAHlR8XhMwUFvmrjAzIJ8Ok9MICBvUwBxp43xCC0DghGAiEAqWObsfSuC2ypnm5mqwzRwbK%2B4fhDmlHCInu8cf1K%2FzcqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCrmPqvE3Y6hMo5EFyrcA8aMSA%2BmJqFNRadEmK0Iax2YzA%2FdVSNejItE4it2ShEyTuyg7K1CV8pqpEMBpm%2B0YTKV10qgEdlG%2B%2B8WmeAfurAhVM04yQsIWShE6tv5uPonj60b3sEYOsIqmEVcISiFexH9afkT0cfQj5vmqPI%2F4wWlYy%2FhwpMS8eKfviwlICBXhtS%2F%2F39bO98w2wUVEESCZZPf%2BECVMUYenDI7yfk6ATFjcZgFDS0OwiFEb9tYFohHUWiO0ndT8kiRMPin01nGtFTqf1ubq6m6eewYQOunr1ZYd2CBYzFUZizk2kymM%2B%2Bwbr7Nr%2FCArGPoPcsaBJvA1LmnLBquVVeWdvTGE3tbn4eTbgiUPm8UmWJx4aWkiyRpoUz15ejLk0JxmV8SOZfDoUelec9ASTCa7HLR4gQnyft0%2FhaLkVJHoIbjklqYm7Qo0l8VVhsGuLwSah7CYEbtKYFfChy%2F4OzXMD08q%2BhcwwLJIcCS8Ijs4RT18TTIla2IVumZDtc4xg2yBK7ZNkkFeqivxwjweh2QAQcy1%2BkR%2B%2FgQZpdvheyT4W6cLlmHx9scZ08P7ouZ6y0W5DOil98kP%2BJddsjIbmmVi6HcZZUBgJDHeSfDUpzVZNjefle5sdWF7Uaz5vaKQpVr56QGMLK2wdIGOqUB60EnKKg9veNw%2BXrWKdvlMg0QnOK6i8ikoq2PtVusk1xSnScRLkiXQsxpuTS5VYFvFRUcqczbNWz7BNfcSX48waWzdO2jxuA%2FGwGI2dWQmQTg8KlIJ1C04ZUzTqNmIfWden9PY7ejRTna599GLon5UxJPxKMIbjaZf7hN00QimPquCAdX%2BHyeR4AsNdvaot6liqlz6ZhUs2ZddIDyra9i0M1fBXIV&X-Amz-Signature=be6c8d03d92af659929a3150d50f67f64881f6f521d59c0a184ece325dbd5800&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667KBJ73ZL%2F20260710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260710T032032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcSLejMA%2BG4NeV44m4R09qbpBvFWzTeLSZJ8ObHFzR2AiAMHDInTBUwIiZ8Vl2E0NY6cDvVOFlaBkITDmqdx31ZVSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQvBPb5wqJ4s056IlKtwDx2Zd15WJYz%2BE742KNHBFn5cpiW9OGxTcSmdmGF9dS8xSpJzV19VNIFgOKMzW9YPeWyLQOZJfJ8ipunvbbN8XJer3YuMkRS8wNiU%2B%2FXBgz23WnobcWad%2FjVkCcEWX1UiMrJ%2FoJK1AupSl9CRb6U0lQawEwUkHiYAlsOtogEOjUd0x1iYYRtbIbQy0LAgj5ezZTNiX%2BK%2BUdMKZg1krplcrvsKF9syjRzJvsyHWbwDt5STaboKyUM12xyuv23eKDFRDycRC8oMAtjDKXWaLbbeR72CxO7LPCJcCSG4N8qIvyxbP6cQZXfj5U0jA4Et1hoep9PUrMf3vnf1Fq78GngX2VE61%2BkP4d30MyJVWYS0GohAQM%2BEYmO4%2BnhICV5SfKasFCFlzku3zo4bclzXNG190rthKmuG1%2BZeDZ91%2BDxZg5LUA32BEl20UpzAblLajU9xqaQ3eMTah%2F8%2B2AkiH4RhcWwVl5X4tHg4ZzkHaAY3Ez4vKH3E1%2BqzyGxXPkS0zch1%2Fh2rU05WLmp%2BjZAhGomsK2NWPRuNv93jOGUTUO%2Fa1oQMGTrxvXHwMt53LSRBo3qqG1KXye8R%2FJvTLX3zByC2ZM5x97kkoIxbbyhTH7hE2ZNUIoSMM9EyEURx0s0YwrbrB0gY6pgF75U7QGJ4nDvMBVYfHmWPSTL4nbfRJLPrhF%2F6vsim4TL5Xooddw422MjQOOapfBZK0ch09OKbdeShDAtmpHjZ9dg%2FQYsOZI1z8Qd1M%2FZueujvG13f5HLnmOn8GgSPxoy4eLc%2FnGnP%2FRAAYqGryrJfp6HiwLfcOFR43Mblzpg8xbnMC9XvqUVaDInVXfq35K8Os1LNWnOd0r8kyNXiRhfQXz19lS%2BwL&X-Amz-Signature=145acdaab2766e27ae6926e99e1dd0b03183ba8b5e92315c12be7b84629e1607&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
