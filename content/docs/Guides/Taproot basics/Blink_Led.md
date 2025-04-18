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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667CP5OOWY%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiPn5RbzGStDxjN581vl1homHF99QgB0KveLqI453HNQIhAM6wIGelv9v4SqBAfR3WfL751hekpP%2BB1Yi07aIQtSWsKv8DCGwQABoMNjM3NDIzMTgzODA1Igy98tzXA%2FdaRnANc4Yq3AMg9BC4XNNmeUxD4q%2BqZJVn5IhB2A%2Fgy8Aup3RGENj2GfiPm36fxzXhFu07YsGTJcKX3D%2FhSrEvDjgXGUIhaboJgDqm5Dg7j%2BWz%2F67KT%2BnGUnRmRQ%2F8eoZrp%2Bhx9UU95jSy3Aq0MD8R6x5cU51dCa7Cus6biOfjRm4W3ipsqUALEDY3yed90p16DrVXzM%2B2mqwR%2Fp%2FRPbUqk8m74tfSAkqRzVXqL%2BXdld3KPakRazjjguTRHJIUwg2MR3eq6UAtsiyvnEvTmwdJV7JCoF8Ze60AeAVgOaSkzFqOtV189zy4D%2FYpww3IekJH5dq1h20nQNdYwhPJ%2BuoKqnvZ7Cr3Z1AeNFuIq3Ef5kGwfKg195Gnm%2Fwy%2Ft6I5npxpG3XdslbtOi%2B7YCSZC8Gp5eoAqtT4V41PyP1CQCKr8h4ItE3r6ivAJ3R%2BE80zjqN6SOc%2BvOJTTDYYbSfB9M%2FtohIfuyEOVb31rWYxpIOiNIa2G3J%2FVWb3TkKMt65lQdT12ZJ0IeMfc%2BLYNEr%2BZUVjbFgXMSHHwWWi6jlWDKDsLZTsTHINwpVHR%2BhzIzIOm3sxidykcioUPT0qEUGy4XSIC2cCfEm7jh19VoCFsKVxFdqM2N2NEK5JILt10hd0CJzri%2B8dTC29IbABjqkAd%2ByRy2QyjvXT5jvuTBrUw%2FPnEdIY%2ByLnHqxRfnpIBrN7fZw8eO7sknheEC5aWQS0EquV2WGsl6T0EfwzhqcepCXYB9J2cltv%2BsWBGh8bJG6aI%2BpIyCo1vHdSdhVIsIabdwEgmaDRTwgjZXeamY8VKrpsfMkvJoDjiGsKmpYxEQQtb2jN2cv2R3pbIvCJNQk5fFWq9ouhml9I7u%2FenM%2BCFnbynHj&X-Amz-Signature=fdfbfcdbfdaeb350f463138be6b870b1f6bda688ef270b3f722dd284b846e5fa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RYIKTWRP%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T032541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCn%2FHQ1VhONhHSVdD86UxeciVqudp0uoXVrt544QiyQlAIhAIvxZ%2F3AavTvbkHpwfC7QXUuoL2yYHnI5fpVg7Hs0yg2Kv8DCGwQABoMNjM3NDIzMTgzODA1IgzwjovBiHVslHf0mEMq3AOtRYEMjbFH8oaxpO5Mza2eF8KUbuznuaak16GvS9CXMrDcwVSWvB23sN2t24k1pYlG4738pP7IGg81TkY%2BZTmx%2F10B3ojFdUvQc4tRC0NMSvI8RDqUYleBMS%2BWSO%2BHjdKIlTzvMkR8a8heTb5i16o5wRa3e%2BKWy80kmKvqG%2FdU6PV8%2BxHWE2Sk160yLfBVbCJlwk9xmoHkcIJCr3djW9UJT%2FC2eAiDLi4yialRGiURb4U0I%2FOpe%2FVFyIaAycjPSd1wJYmT66FVwUEGri%2Bqhxunq2j344kvlvDNUAGlFAgsn1X2xb2FQ4s1zH6P2FJl15ZuHuP3%2FvFaq4G9NtXAcLC9cwjRHgoW4bjADi2R7%2FZOVkR1HnaDrVjeyrZqSJgnuckHLPvsvd0oRTBfHWvZBtiEyCgCfKt2Qh5L8ACOWYrImw91SYbXKC%2B9GoPknp3potJDChZiDo6%2Bbq54gcJlQAWjN7l%2BIDmdY6laQF4TRc0niHQJmEFAfO61soDP7ECM9tv730oRW2L7LEHHwbwgnlXhRatLCGhLkQNYYVsqsdkHy2wWiAREIo1ymiqqrkrLbKJmBv0acUasC0BOklzZ1kmHSXljweJr91k0KsVLbeD4zDI0TiqVkAuOeXEUnTCU9IbABjqkAf07TeXOViI6UR8CvGbyc%2F8DVu0ZCUBfMbjOWwhI4fkC349nJePrgi8AYzU%2F8VEsY6p3u1YCMz9hcEPo%2F0hZ7qosnud0%2FAxMVBvp5gmAstlEGQPO32WF0pLg7elBQcSzwAnaMtQ9aMPup4vnR%2FmqYhl6V3Ne2BpcoiHl0K8oWfRvz2Xksu67wQ3Fp62H%2Br4mjpRKbPmjxzgTy6q6NBMFC%2FhFrLm2&X-Amz-Signature=6c72b0e1deb596aa05171caa8c297f779e9b93fe42adc21620ed74f676f4dc52&X-Amz-SignedHeaders=host&x-id=GetObject)

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
