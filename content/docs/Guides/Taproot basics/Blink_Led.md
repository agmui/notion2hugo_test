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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNUQIDGX%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIQDfSOCdzLWRX00fpiNZyRUmpU%2F5NzsBOKx8N7ybOgGMbAIgN3wog42AEfvvfZJvZ4jJVfHXSvXjDw%2FEWB0WTP9T4oIq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDM1bjN%2F46P7yaSnaUyrcA8rXLKnU3FIPVZAK2htFnOrUqC2EZMgF3dve%2FWyoTEudf6cF%2BAencRgbx91SI6lmGFDOFe4Wl2ElHtusU4UQ9wrl84aNoxrl3V7BaKrVDOgEr7sm%2FbMd%2B13WM%2BzTKZJnz6pXqQRp6MDBe6dq87LaW4HSvS6uFmnQtGXFZVebZW%2FgquAlzUOhqjyiNY6Ek93NWIZNH47QF6cN8mQmgpCTwW5p%2FcQLpqO5YlUBgoos%2BjrCmXrkoJM3jRZ2wMgEiBSz%2B8ZqL%2BAyboPh3oLqswxhAWmjjNgoxckjlmDLFllkD9kvPC654ZFWXEW%2BJxD2Gp0yeKjKzjTG4am%2F%2FqGslUtWllclg%2F9nkmRH2qVJdqBorQ4wHBVVnzMEe4RuNmPZ9IhkZGirOpQJXaWNeWtw546p%2Bzc2epSF0Be8n3rr%2FXiKVHhLldDLGTwXxZ%2FtqA8qKY5m5a%2FD8VFZdncx58qnuwEbmhEXrF%2FYUkk%2F6GmOKnZpRrKCpYyXZikvkM0iMNFdGbk4DvVl7a4KdXGaikT9IpF%2FL2%2B1Htp73%2FCQAped8vUCDPg5NtgFOwDfuA2io7BrQKMwpioGrq9yN%2BfZkjIaK0ZR1%2Bzp82JpcCSb1R1P1Oyp%2BGKD32UhlxMwpTjBJKdWMJvOqcMGOqUB1Q5JCBiR57exF3RQLTY3%2Fe4BdBXVdrwOziqKSiW%2FVjsXgGsIWf4sGK9GbLCaq73p6I5GQJYSk%2BQqsAhq%2BGAvsT7Cs%2B%2FL4p%2FHqreHnMoyjGuWZxdI9L0PBbxJAI9vpBgZ6MveGrO%2Bq%2Fem%2B%2FtHfaaK81M7ClehL6vef%2Bmo9VrpeWiH2FPPgf8DbQ9mnFh06VCyQvdkrH7pAifnLeIJoMWu7G29HMDB&X-Amz-Signature=fbaefad77df1ea6c58bd1b4adeef96ffa35ac062b7b23279b37fd17280c98265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUG6OT3S%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T170730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJIMEYCIQC%2BS26yKRDv9zEph8SmR7CQcFKSgqfTXr2IddfZ9frOTQIhAItjQ4aHCSQHZYXRs%2Fxnout8dWF8ZLZTs2hwailLe6MdKv8DCF4QABoMNjM3NDIzMTgzODA1Igzez2vvuYZ7s24GsEoq3AMkVWQxlECVGScchVAiH1MmR2z79h3X%2Bz%2FYSSkNfEU2%2FDSSzLLlCqMyYXUx8mIK3olKYg1t5xlBDZ5yd%2Fy7fLtqgJllPOS5QuCRlWK6L0aHOxpRU9Dt9OAE7qHKoKNYDLz0dMrF8FwCKODkI3o%2BVXwlfpNZDY18x53PfYf0cRehAZZMlZWWpXaPo7ZKbsgCp2Qub%2BotAPAswdjUkYO9cVSCXwzYCjYtDsu5HDo2hCYIv1IMh1FPZVJKYtHi%2FHGNJmRaoiU1NiRB4it%2BMiP0k9emC8qFzm%2Ff0zLvvrllUswEST1d9Trr3v0eScMOilGB0bUL1o2J2t7gHFbOExsytP0LcCFNQe5empU%2BKg%2BsLWZLimpeW9hzP%2B5I0Qau2BpNGUANF5p2%2BENMIgK3zhmL2zTrOk0kYRAXeVdFknf6e0LeuJoj1PBypbIMMHeRbLmpxcwxEW70rR9jbkFVG%2FWoZbZUnm%2FH%2BOZNp2EUu0UuFU5jmuB9mfZL6KsE3o55ImrGPwNCVx0YHJmD1uaK%2BqW0bOggkGS35vTGXgeAgKNMvIt6qcPM53Cm7Q0lPE%2FmAWiRUQq4reQdpvKz5WVb1jVS0jkQzXBFTk%2B2vssW0on6ZQYV0iAzaf05iFBiZaRaAzCm2anDBjqkAa6gMJxveQIHcSjURckxiKdzWxSWBu2Gc5FnPo5kp7CJbqadAWdZ7U2ruebPF1ZdM285eaUBtRmal%2BYHoScwVDFkyCzvhmxTrem3%2Ff3k0lP0TEooM86bnS3I%2FDg3ls0rrIN78Kewh1k3XZLMsq8rNwRs8Fpk4IsfrMj3EIlgyJW1pZcL4x%2BX5%2BrRVhxuRBbQMWYAviIH4SDy008hIIIqEP%2Fn4f3Z&X-Amz-Signature=65a285bab8e866003494142e6eb6e123607a3e6d59bbb506b374dd53ea9934c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
