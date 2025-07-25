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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YHA2YHG3%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T200952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJHMEUCIQD4ZGffH0aSpOdwTZ4BeHlhdgvXSXLcjqLGCOB1RmW45wIgIXgfiG7DSvfkBoYmqc7mYf8Wq%2FA2KY%2B1I4WG438Qvecq%2FwMITBAAGgw2Mzc0MjMxODM4MDUiDGE0kPICODNLNVYCyCrcA2JWx7e1%2BzsEqHt%2Fo6WMZH8UR5IVvoG0vMnFsPJVOh6u%2Fe4ngFeBUAJISOkrtDbOiQWmeb3ut6lv%2FsgCwOSmnEGLhmn%2B96mg%2BOrwHOE5g4t9Iy0jDbB%2F21LQ6VDpQNrB9O5vmRSWdogu%2BTSzC7x6F2Gz%2B3zwou%2BAU7Ag3aHN4Kwxz5nk8AkoqnwRfLyOdrNlaaDJwwrkoARxTJbp%2BDbzrXds5WHYxnrTUto%2BHfVKVEMIosbfD%2ByVXsH%2FYuPcYv4%2BApEJoS1gNAwHjszhBfYpppWKIH7cJi86oc7vgqPz34WgGOAi3gbUhfCooUTCAO9yVyyj8nVlqsczVQC1upR%2BtNwCAMHWTPjbb3ELkjt27IJLFRSR3t0WSPs9ZfJCKxGgs7KMq3bcW6zqBtH7wNjFkNMzZlTxBDQaBgHx%2BJN9chAG1Z0LjemUfaktLXpjqQK5zsE9U4HqsY3Wrfi%2BJr9urrRw7hOKOBiKrEkcE%2Bpig7DkA3LnQUKH5Gfux6jFPYcBzAZ%2F%2BT5gtl4ntKpVYdLmTrIAMXrHSp5c2dRjn0vvpTqJuLX2ZDh8iuTiP3v7Gdk4KHGh1BRX8S63hmbhfgqKZpPY3Nu%2B8iZsQL2CrEShLu4fISD1nK%2FHa74zIyqGMMGqj8QGOqUB0Rd7hjLadt%2BYZwwUDODOL9%2B0SL6Yl6RDOnlGZ9c5aYi6rb1u%2BXqb3mDAJHCQOSl9sOeOs5NdVKrQrktBLGQ7u96WtGZ%2BF4ee6P6EUMNGXX8CqkyvCjYrPZI8YbkXJ0OWn8VNKZGz64L6Jwak59rhz%2B6Y%2Fj9CNSLqFEhOBvepg5fAHY%2B8Ydmsq2inw0FppKRD77HkjWYfb1LgHnsvXm4KeMULI04L&X-Amz-Signature=7f1c6a1035eb12084e6c2e8892e9d673e61e5bafdb1694c60c4e3ee124a8f7a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUZYVZY2%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T200953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECMaCXVzLXdlc3QtMiJGMEQCIEzk%2BXPIphfzZmBksSpfS4aARtlG1%2Fl6oiqYCCZjeCaTAiB2kz1cZ6mePbama3lwBZBFyV25G7zTIaArFM6rAuuExSr%2FAwhMEAAaDDYzNzQyMzE4MzgwNSIM%2F6nR5RpZZXWov3y%2BKtwDl51rm4GxLvvSdbzp2f%2FYoDXEUlVxss7Zm8vOug%2BJ9tswwWjkdUZW3yqjvZ%2B7y7C%2FZkgb%2FSL%2B1IAojczmYlmAWcmzhifF%2FFWRJdRyd64iECEcH0nFGEfAt71nq3u4WnUJ%2FyXnQ%2Fw0stPrmRA1EO2KXcMNQ7WeGFuMBfJDz71me4uMaIIeQMc2V9Nt8ygHx48hDurTVMijrL1Co2BF8eH3e7wfYvICapFTE0CIv3U61XMkUieETVpdtMZVxB3rqZS5qFJObA4OO5EuYkIW6ysI%2F5TTlNa8Wy1vambhkkqSsVeBzPxBJklXaQzxEOwzwVWQtr6S6tQuk0IM8ufzQuLdyvZ1AiA2PV6qfnlG0FplsZWnIOoZ%2FT%2BqTGh7ibynTmSZDPn8qGXKTMo4CgopEehK3wi8Cn55NTiuJWOTq57mJY3MgLi9DkRKWi5JkPm%2ByiCk%2FA%2FO7DJIJrMGhoV02GotymzVpfZiMFzY7MxF3vz3sFrD43KlzbOHxjEcapLgCnJydPJGAAjlIbowYJ6j8ELPUfwIhpQ9HVG%2BSv%2BtByTmuG7Ix01GkMypx1W3WGv9RW9QPuTLF%2B6YDXJunZcD5oovRqhHymY1OHaMzrwdnpr9KSX6WmnbIEThzWQ1k00w96qPxAY6pgF87hyllDMDDrEYqou3YDIcAsZNQEGvDaWfXrR3vfbrWswP4PqTPtExr1Qmh1iQl7qWbdJI7ZNC2AF5%2BeJPxYDs9EBXX4SPxuzkpCAnLyw3H24QOXRTp5DKE%2BF3YloGJDIagv3aU58mwPQwKLgjbW%2BeDhk%2BUhyhJ4th5tEFJweuz5tph8MU3yLZAtWh2jQTehNkuUYupIMSahcST%2BUazCf8gzZLOLdB&X-Amz-Signature=820be4b7cbab9a7c1bf4ff6b9c1cdd60a88aeb42a3d02764e5bdc336bdcc0ec6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
