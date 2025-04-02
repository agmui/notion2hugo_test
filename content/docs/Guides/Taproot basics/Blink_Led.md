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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRFNMUIP%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIGdMUq5oWaB%2B2En82d5tKCyRdZ%2B8tOqUqsE03YKK%2B%2B4LAiEAmS5D6d2E9kHuRWIUqY9kPFb%2FAY%2BcC7xULuaE8f%2FXXpwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGYd5jKbC5BI4z6NESrcAzlP9rMcjaVwesPOChfUCBK42Lvt%2BOE%2FBc1lZb3KlVMflTxR3U6CFnnq0OKES6R8ctHa3ICTuwzdEHG7UpurB8MvuzVat7RfLoAXpA42fjX%2Bo1YlhaRggYnsDEjGbL7CSFD3RXM45%2B5pNPUGKkXni5uvcVBx7ZWNTc9s5ECN1D8sBLOZhMt3Obq47xUBu%2Fy%2BNbhDguJCiCbHoreUoBTdSbgJmYf4mlVgKbJhPeC37bth5lntFRcsvxuZyT14bQh0BTNPLoEkEOt3kMJ9pnvJqZSfzzgp0F%2BdfrZhDSUgUTx0lWejTCxKUwFBDThV3qeGs79SDJeVWI68eePKJP4rcS8h2gnMn9fTTkb1spzVBsyebWTlANxR8uszP3S%2BCJx94YHI3b1aDQiV4sUWXpoKfCZUuoU5JAhlbiog%2BdJE1OZRwYpr84F12qTTzVY1rms4X1TJNYABl6xacagBS04ufcxvy2graDh9l0hDwKDCxssgr3jIv8kiQ5EaGdNJID9cX14ADZ1fQxOUUh7xZY1UUmACvfiE56MKblJYytvneX2yh1IFvlXN7887dHLtmM4m9mYcXibNkyjvrIuZPqWj4cqHxUc1sf4lLLDio0XRgVHAwnfEG67vGjxUEF8UMLzQsr8GOqUBplaTkU8C7OjPGElp%2FhyHjHyVusE3uPVMd3JlW2It%2F879YZ9TQ7U3xaSm9ZkYWJ4VszDSfckeeE6faAgrmvGHGs9tyybjJTWcaBIC9secglOISAqXnNxKblPoXuem9E%2BLMx50uaNZbFCAaL91%2F8I7UlJ4BlvekselVME9HN7IL7BdD8sVid30weVFn%2Bfp9mdIP1otYCmyETL%2FYcG0aGTcGsev3VaK&X-Amz-Signature=e1f1a37f67c14a86173aa6f1cadbe7558e6e30334191a34a7650e56b65bd607e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TLAFT7O%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T032517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJIMEYCIQCvRn%2F3s38xXCnuG4El8DeFfiPiIMLXvbVpfDpy1czRVwIhALufEVex5svByXZceSSiCA836q1mGyocbKYKAUDxVaGIKogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwrbWbD%2F0bVf2WQOwq3AOSYiANB%2Bxl%2Bj4rDddK7eoo8G2b6qIh3AXHilBRsDl0ZakCUum%2FpKnjsmQSpgwwu%2BnhKpv%2Bzsn3UpWxbjOhTgFdQy7v%2BwS1iHLuIrQoKxJ0tY4hWbRhepxGaIoy%2FRH4m87rTeiT5Q5N13i0xCLfPrMNSz0G8Dk00PrRs2N%2Bo3SAnAuJokiqoG6YUX9gG96Ocf6VySNhKhC2JMeaXz0qgs5ID%2B6Bmvcb72B16sZBfmDx%2BkXh8ZLlozQM7NQL%2FZZeFsKFFNHFLWKVEjYYjscEk3AuuA0FrroKK2I8Zs90ia6VQV25CD5WhsMbrGACP1EpTKdr7HZ1B2dIbTlh%2FroaAg8GqbKXJMJ97Dd0ghzMt%2F9IyEfmELv5ZoP8J7ybEHuf6e7SVjKdF%2B5HjhaJ9tQ7oN%2BheXS5bfyhY7CrgZcFgHc%2BIF42FQ4gGIy0ZOa6T3xdEBbNyYns8GGqsjaI5rjONTXnSShdec3QztJ3wvxEyq4F6LnTH0MYmpbX8TGXJs0i7y7PWSYkVXpZpbZSpZhx3GtBIrSqkKKXtzmsCcHubotxhPxEtiVNIg1x5DPA1AiHmYhBlCjdkaVs5ExOIGuepMzKL8F%2FteTymG3c3JigAUFHrS7DbpS731oV763VWTC40LK%2FBjqkAWOaCI6kUZY6MfdadSRNRMzon1M9KwXMp658mi8J09bOOSSCK6VUAcxMA9SGGs7UXrBke%2FoqCxJrT2ki9bSgea6J4XrVRP3GgbKh0mR7H9ICrOHQFMMf0goRN%2FWTVO9wxTeN4o3nDZHMMoGx2Vm9Nx1vjSJUbXzEWy7OyKU74torBQFutdV1VyVSCKp9jx%2FlpB7a%2BpkNiRJzQaRjMDgQq7H64Kbz&X-Amz-Signature=362564a943362e804d9cc67f568dc7271b8d7c5af7bca49f4d010ddcc3334e48&X-Amz-SignedHeaders=host&x-id=GetObject)

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
