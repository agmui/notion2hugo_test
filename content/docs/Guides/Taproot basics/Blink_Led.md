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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V6USIER4%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu5nqqayk5vT46AoTA9YmHf7zDTurrXQG0r9qiokejxwIhAOjzuIWmI55ZjnYpEOC%2BspDBHyWsQKG7aB8jB1KTbymUKogECKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy9AyH2T2vnAouNEiUq3APMj5D7CPEJeonslw6uqro7EqQLEMQeujCCKfuTdgTwNBmbbhqxhZa8BN0wUsnQXkB9QrHCw45gClrFo3meQpegwMHzgNKpti%2FeDQ0z3BNbXT6IMTgBVqf%2Bsqmv3Mq0nILhgQ1M%2BdwDDa7Kj9cl6OuwJVhcr0TU%2B74FNSz5aWbljqdjyd4rXIzn1cZLsjXPJIkuMgIfCDakr%2B8fqkjYDDSKPeD%2FOSMi38TtJe4J9uQFgU3%2BRRNKWHTn%2Ba1FxBrGqjaWZ4gChvZbY7QOGlJZHGDc1buvviZfEuLf4S4gDOhfvZ55Wd5pCrOzKpdsY%2BdoO6lm6LH%2F%2BeE%2FKh0q50TZ%2BSPJYeDCn8OSnM5CzE0OWMX1cbm9DTmnn8c2ddmxeS2oVRznI60zGkz5XG8tVfhxxoq%2BxiWkYQIjgl1xU1kxSs7OhbYSGnhEaOMUi8Bnur%2FwjQ3o9AhJOYgC7GMyl9Bt5hD2Ia9FgYVzQ4TjDvbj9fzIPJcXb8OtXpvvCA5xnvYQKlplC5t9npKGZVeiAKOzl9meGaFKbrYnFy27Dn8U47hjKYgxZ%2FomaOBLZcv72zaC1aNrNd4jxM7UVlJ7eXydv9dIBI%2BxRpTJGCSv3y%2FaXV8yBIdPIu%2Bmib13rIN%2B6jCC67nDBjqkAWIIb%2BgvliWPipX3fHwqaxyg%2BenQ99HPVXliNR%2Fc5oHKeMbUb%2FUTMc%2BZ%2FEjdZNDD%2B1rvXPcr7Y0z4SshP5z2N0JjQb%2FLU01kUW0gq9NJw6Y%2BBoMK140S7x5zgXRh3zur7Y0z8pd685%2BZKg3hdkloziYyocNh1JEKEZjn3NB1XRgwfEAKwVqIHqbiw1H%2BVF03fprrzAsGIULv7pIkrqCkRoAmYmz7&X-Amz-Signature=9b4b939039848cff110884a4bd1e8edc59b478a687db3a9b94188baef13447c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6JI4MEW%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPGrU3taYQW2xavkh3SrPGJjNlknLxCAFWIVlvAukKewIgapmpsBYDIiBfxwRpvxz8iKmpkAtiMU%2F%2BJAa%2F94A5uX0qiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDC2E3ai4BNDfZl0S%2BCrcA%2FE7A8hZf0s9fSp3dFqfDwRrc69LcILS%2F1XGyW3N9o5VheI7CdbRER%2F74h3dHMuWOQ9gYycrlKvgx%2B%2FnVB%2Fl9nqxODK5Bs6A9m%2BhNl3kiMXv5GvUyOplmjnqKZUYs0kWOtnOwDEHBGXzsbYHbmeMvX8MeXngKcWhnIbQ633Gzn9JnHOTzgPB2UrhaC1RuM7aei3gPWgKoCu6eiYOtHfXkAsLnC9U3NTdWyLkwoYt5F4kiFXkjGl%2Fz17ZZDs7oHnpK0Q1dJSc8ROEc3wt%2FYyZihbKeG3JiFE8WMpARbFDqkpXwITEcOkaa%2B9PWuRFTFLq7GdgCToFWpxUb8sgX54JZjaCiOZwc6o5OPMLfSIuAPRizdlwpsSgCT63sPJMA%2BtebLe6zL3scamsL4x8wboqinSZZmfk%2B9qYiKcxAGucq8OTaCB8R9uu8vDQYNbLEzNiKJfB6kY0oRP31423Bg7FShIdSF1WxnKkB3Iw0xhTz8ND%2Bm4WqessKMF6efL7PbFcC2R7CYTRe75xBakVjRZODol%2F7fb8fZDfV00M3sEuybwziGlMpKseDrvYrPPOdkv3Pk4f20bWunW3zANRXD%2FUPDx354PMcpdsAFyAemu6pI1kv1LQWF1sA86azlFwMLDrucMGOqUBM%2BtcqpguLM5C%2FG2H8Cy0LhG8xwifrf%2BxveM2ctlmuMabaRmwk36XgrEV1DvkcUpMLp%2F7hLDXgMUDlmfAKCGI6vQ0b7pOVPbQs%2Fzvvz%2BXiXVLJHJv2NhT%2BZh0ZJk0lJsbEa2WvnuiLb%2BCNFcQjUTF%2BZEjL88U%2BDBiMZV5u8RR7MWyTc3A3hTd6S1V2Kt60Bud1SNXLWp6CXwW9sJhneZMRv6hc8lF&X-Amz-Signature=3624f94082f6c58d83d36d8ac06dc7c8fd3d4213ba16879e1028822f0d307483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
