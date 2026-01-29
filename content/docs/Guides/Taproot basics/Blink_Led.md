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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLOLOJH3%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCsAjzYeJsPPBhtOuElHEenf2svxasu7mU60vSzvG1FoQIhAPjxsjue9T2vxIVfDjNnQP3czA4w8XxPFgJ9Oh9vAI5UKv8DCHsQABoMNjM3NDIzMTgzODA1IgxMRED2YagAH7dEULoq3APGEEsDdoF3XgIsbjgczft81io0%2BD%2BVBx%2BoeQ8EwjkGQfd70gAxdTkTKDEiOcKzVRYlSh98OMajJfdsppG3lVRMdQv4lBwUb4IarIgjANkzfCgWuoraGmJhrzcrJ4lZnVpyeTPhUz4KBZtvd4VstI3vepkCIQpJofPDzw%2FeAOPYdziYdlppItb%2FI9wNvDI5W%2FurLiJXccWbSKfTZa%2FysHTcJ1IubYtE4DTNuTc3DSNVBg9EtcT0PudOPCh45UNgy6DYlS%2FgPZXt7CRGjSIvDHpnPvC%2B7yhuNT%2BvOB4nc8tRJCXhBX6jQRIln3JNo1%2B0FG1ijEaWD9JJV1zUyKhlCfcqUwdEkIDFMoIIsR3cL4UMiDjLkrhuVn97MVv%2BJmE43rxyJDmFUbC%2B5t5wELTPuo0ONNHiAcbMTmb%2F8zYr6cdNHnI5X7DxreIJ3It%2BPcuuJU50wnbjqYuMdW%2F60CsEc2WIyW06yw5XXaTioUUFEyKQdcoKLPo4vkcQqDw6PsDRQ5EHcM9%2FlsjUbmBu89tGH7XoGmDjAmTetS59F71gw22Ym4FBAYmqoBfdDj0YFJ9Zm4iORmecI%2BdOY5eUs%2BEpaZOMrOPYKOE3YilT1ulmcZ1Pq5brPIfBGn18%2BBP3wzCu9erLBjqkASn%2BkfCccL2hRAnviKYI4Uu2Rn87KD6K6cd%2B32L57h9kY3t9j%2FTwc7OSwBNLzfGFlhf4HcLQlQlQipxzrFAHJpyiJfWIPQ6bnVZothhk0UsPfohifZ6uSG%2FdUw0nH%2B23tTkWLLcsHaFXu%2FiQ5bjunjbLljHm6ZMEiqxFSsgTxVBNA%2B38CeNiit%2FQBD4ixpj1QclgiJO6q8p%2BMozswQmYZR7SL%2BsK&X-Amz-Signature=a514045801f1211915081b6fcfd1235fd1ac4acf100bb63431bb226aac5ac40c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663T6KI2AI%2F20260129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260129T020442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgSijEPR94CEZOWIXVtVe2sHa0XiLqPT8lEYXrOw7o%2FgIgLWXzaAmnYr6y4%2FoYc%2FZJ5xX%2BTQXtUXB6fScj7d6gT0Qq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDLFpPjg1J9%2FjiHRjYyrcAzlSu3UmeXCQ9VnQ5Tnzn%2Fmw%2Bsl5RN%2BdfL7X%2BA4ilfmS4k6Iaha%2BhDZ9SOPdW07rpJjrrp0n38mQEf1h3jQeKVxcjB4qlUmd1OCq1n6ZhRD2FdNm4P3Au8TaOXwoqt4iBaOuDp2RffY5fBvDM5FNSveCbbubmYn0XKkUptSVeyEiW1XhXbyQoOyWhd8rvyJA9enuUG4K2OFt61X1p8un9MKPxZtypbmcS5KRqRxEYwW3UNLWvRO8jnp5FBKxgsaH4%2Ff5kxukAcAUGvSNqdDT9P17iYjNpTaJ6ftDF2sC0hfoL%2BMwcZwfQ8KpKCiZJSMZ7WhNG3rZ6ZIGiKokXQD%2FyWg0e2IBctW5rNQkOGGz5hF%2Bt8AYZdJXEgLgcc%2BOmglID7idOYi%2BNJVGmgAU0AVbT35ERZEXo1hf3KIvg5oM1NFFjto4cK4IlMjwPDsSQJ5paIG3dzrMqgqd%2B3uUfoL929lAW08nkJrnBzDtcTiiP1cCvLUi7%2By8C8atXJwOfOTXEaWDfDjxX1G3goqqI9IjHgzY5WRKgZM5G0CPm7GwShFcXwqAZ7MVpLYj0jWbDSS%2Bi6hYyNyjgZhohkhAsKbWaiX%2BLzGE0bbdoMMmpholUhfwzu7eysllDHaLj934MOz26ssGOqUB9rsBWGyp0cyqOMEWFDj0cDKHF%2BTSmANdXX%2BX3fJtYQcUzRxW1LSM2H6kCZFl2ZcdQ48JQIchn1kVuFeNCN9W1AKqv%2B8wd52k3iPmqGlqjYS4Jqk6%2FNzjpWpITB1DYU5gbBntvQNuJWrMQqujl8TlF4%2BwIKLyLMHF4p3nR9vxwHwvKDzgAM5BeNc%2BzxOb7wC8QvaZ9aVgikkAiiFJVS81eBVfnF43&X-Amz-Signature=c8b4b02a822c62781332dd293af69f3313a2636c70d4c11bc9b5ad03be3888bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
