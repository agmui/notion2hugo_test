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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNKCNPOO%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2NhZVp39YGSGxMhOCQQBgbi%2B6L6M5JSnQyKZVF2RXAgIgK%2BQ4nB6ghijCTI8161EeKqXUoKc%2Fx9wCjDUgr5DrmEgqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBoyk0h6aaW7GCejxCrcA8yX28aXJLmT66EyaHPcmqrO0hUH2XPd2UN5R36vmZzkpoiHss3ofm46ZMaooTgO8eTm2dxayak1phBwk8a7hB9p76fXtUpVhq42bxD092nedaXwJgDyDo%2F3trNW2Z3%2FPsKW9W6CIp8wHckOrkPLLchWbCe4CZJE%2BK2dPei41HyP0w9kccqxhpZvPJFsmTZFHJiP5rUGmYrLflrWInDfXBccBOprWm%2FR9q9PrLlDECVZEnXiFRjjqwvuCaSbk7HMOJAH3ssQih5F5ZDUwrTqTyT2SamPsUIH%2Bka1y7tNyw%2BsGoMTol%2Fa4wI3iWIHoubV8n%2B%2BzJCUR4hynOpTccCHdtMGq3SX76mJOykLyV1PTvR4Xp%2BG4UqhZSUC%2BBlJWERIlfRrw1fqlzBAuBN9FEkNw73EbFJBIS%2FtfJVYPmck0%2FQiJwI4%2FcF2kVoT89t%2FVS1Z431V7xx1rsQFAyJA%2BnHCLHau98xKpDG%2FkxD2aYxQOTTDvFz1HlEJ0jIqeUnRD32vafOJAO6qfxtGxZ6pMo72FNe4b74onEAYOQycVqG0MHC4dJXVlGJfrLP%2Bi56kl36Uk42LFAYlWkRJgR1zfoZRe0Qzgrl7SleD5JPHQhCoqIT7yQM0mRE1Rh8JuEFVMK7K7cEGOqUB%2BhOO8%2BZUdg4XKOX%2BxnEpvkSuYy5LFSN6msnmpIJY1Ntm12rlWV%2BGB7mmIwtXCXeCzVvnWx%2BSOiBYOrF%2By45EmBo6SRcb5fklaSVhPXnv9n%2FJDnFxii1kG8tca6ganraicWWccmsinSkVPyDloywYVMdkC0Ph5rCK9dE7MGCBQxF%2FRK4dwsDMD18yg5ABxpsLKhcJbcQXX5hCLNV%2BzFodBD%2BJ1IU1&X-Amz-Signature=54c61a1e7119c34c806c2d41a738558f5aa27b03e4a306cb65608a36cf5d10ff&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46627KHHRFO%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T230801Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDG6AMZQL3fax6rsYB3aE6UEP58SXHerGPikLsbzg9RQgIhAO%2FJdQ3qPHSj5vayZl41fJoqiiA4uz8OpAyZgH4kJiXaKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0hkRsHQXW5UBv7cUq3ANZjJdqUAJbnbOzcJ1R%2FbJqJcsA7Du9N8DZpV1aWAR0n6Lnyy7XXMfNrrmpzUwzvgFY7E0F9KjSZmskURMAD2z3IKUE6MAmyjUDZxsOgH2db8rsUHhXKFdQOiZcdsTe1m8m3sCOdX8emHXFb7yBLAEjRNo9vjwX4qGgpAvhAhVn4rP7YCucYi4dNHDMg8rNmIA595fk99Hg%2FZvyGvuyjPeHdHATH3K1Ie%2FYTOrJPWlJjViLZwKDiI7gHk4dVX4KcSeG1eFdBv8zpxdF6EtEN5sJsQgF%2FJ2IzfosGCTuN3pTgLCVuDTsYXYpBgKX4%2FEFpiJAnFgWdrzS81jLKgiHd4yu1x67YpApq2AZ3ywDj4or6PgrLL9EoVd0uy7xBmmzadObnwY2wl6SDDDiP8%2BmJz9RD0OwCsvjhvV1TpOqEBqpuuKLMW5ntiZkRZy1XDMHC7WF8SfhL%2FdKgymlX3%2FTpRUzlvP9cxeOyb0F9p5EhcVrmso0cVtI6vl3TSLEo1PceiCQvBuYgyj6n4eV7gduXHzFAd8lUGit65xfeYfy0IJHP%2BoDtCO9kgDMXPE3%2FdPKZl01G3EMvNRmX5yCDwYUKmKSUuPEchDO9Z%2FJCGbwglssYbKX%2FL4PeT6qRd3GCjC3h%2B7BBjqkAQ1Ck8WbXiY1ZAJo39C984jkyf9e1%2FuyzMVXXyjeOVpxqjWdDqmmr7Hc4PpaXT4exmq2GVIyLFbAawf2kAM22hi1cRslgSu976LiwrSci3C763rEqHcCrQ4sPoFkDaf0CRb%2BoKJwS%2BxpYxVJ8T1QwK1yZijjN1UKEw5am%2FkIiE5NcRcI6TF0DR0Yod5mCF%2FflYjPcfUc8sTKz%2FaWC5VIAFe1N%2Bnf&X-Amz-Signature=9f7976e87742c5695dfceb34c7c7715d7883b5871df1f10458e8a19a383a7409&X-Amz-SignedHeaders=host&x-id=GetObject)

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
