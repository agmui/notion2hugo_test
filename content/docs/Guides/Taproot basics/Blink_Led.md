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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EIYZKED%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQDinDMNtk4Mv0Tp1dZ9DD%2B8Ur7CYEUBO8UTWMfuHBongAIhANVeWLZf0minAeQHHoC9Yd4CbyjFn%2BAOb8lPYG4%2BaCikKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwG9ERy1dVruaTyOScq3APUdHQxfnU7ehIbQhMv2OGw8Gu0nN7qPWTMfiHYI5I0b30gKqGnQ87wlzvCDRJZDW9Tv4a01rik0%2FezyWui9nnkDnh%2FJB2wPaiiaXFcFQiPQ6UJUYZ4FCmVJlZERtKdiv%2FH1Az29PH6XMCwYMnzsNw%2BXrvB39SlDOTzXGKawDaxKkLsrIDBOEmJwXr7Z6TVBcYVZ88x2p3IQ416UXyfBRfjr9sfH%2F9uFtF5aIaBxT%2F7H4Ohm6E9VDIE6sowcQ6bCi43DMrpkdwZAYCyb%2BnYlM1ocnk7fSfkcGJER7IG%2BaAxhng4fLrw%2FADx2wXzyKh22KjkWqmmgS9lBNKOqndKAZ5oV1MFEdSWFg0tbR2VGrOC3%2FF4czvaX61qq%2FZViFuANyADngkrY1DHBUrRlLY27uq0s%2BI%2Fd1HqKPY1n82nXZ33HlmMEuYvfC4%2FQalOHhhlgAD4HbYLyxCV8Ev%2FnZnABI0kb%2B%2BVdxXNU2dIWErcBMqEhocS32yd6hjEniRL5ftp7C%2BvC4mvA%2F0W9HWzB9CipWcKWolf6VllIhISraftiA%2Bk%2BIx9BA72DtY4aly9flXvHnxql17h19Ilhhww%2F%2BKawqEydicw7gYeg5pHEU8HZaGURVQ1RdfNKlIuVF4AyDC93Na9BjqkATvBihFfRvUckG5JWf5xJBtn48PSLl7v4nMROyEgjfB1pUzlre6AZ1Q8q2EhXWX3XsNJ3ouw%2BBtLAKB1JS76wLIgGh0M71UlA1bS0S4XMg0pfI27x0vDhY5re7abcsbIoDy69jFFcJkPLUhTj5bqzpGxrxFbfks1GkAbUDJqJ3Ve%2Brrqy3rXMOB2U3QLdLC93VE1tD3kDsrYGJl7AwctN4LwFUEK&X-Amz-Signature=7df52996bb8cc64bb697b6482deb945f4a23b055bed29565211f651a05894ea4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VU2UCLK%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T110112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIFVb2zgsW%2BXaF48wvbLMJydB7p0JIUevP5idOXeaVhcjAiEA22ACUjg%2Bu1ZJspoesAdwNYKbKZLCmv%2BgjkCpgxJPyqAqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGHZKXJLlI8Y1DCUYyrcA7AphekUfuXPQaCnCXKhRlML69PtlLfUqgXkmawi0af3nWIY%2FKdYwWPP%2FYuQZIueR3Knfb3mQhbk5kEnjw0AigWoRXGRtkKJ5t3omz%2B2z0RJ69De%2FQviX6gTdhlExkyExWJeC%2BxBY17NaO7WW5Wr48k%2F8uGkwWoy5N0SsKe1vNErBYoNUi5PwYDCTg2P0Wz75jSWFKLXy9428JHh1yZwLEdvkDcYLMAcid7xPBtmKBo%2BH8IFHFSUwx%2Bvh7ZcfP2NkuRjn%2Fk1DBA8VYXlA8OEcBofIN2Qld%2BGBoVYqXg8pw7o65mc81PCoS3in3oPIYd1mpJLpb4136ZbqmuDxpx3gIRIewHGnAqwybqsRxbLYxvRihDYKO6r9o2cxMKeiYe4dMbRCdL2I%2FjvyLoZhT32L8DFD%2BABtNgtmsQhSQXHal92VsrQ1jreZ2qJcS9feKbrBrDe7RXr15NgBGeOgXYX94LBnQogo3dMrPdVq%2B%2B4EMZGxzb3zHH%2FFdlxg5P%2BjDVMqWx3YZt3P4Al0cxoiCgbVEjhugyy1re2XoM%2BKdfdILFlNda9hLAXJluMAr75hkhlbD1l1tGgvskTUyUo36dZfw%2B8AL%2B4f9GLI0Z7XMmm73YW8AhFGMrtk%2BYURm9gMI%2Fc1r0GOqUBOG65Zw1SkU1fkF%2Bs4NRaxHYO%2FvwEVfoips4z6y0BrvQyum5sPIfsJ%2FzRYlHThL0nbnDir4NCzJF8W6U5McMBCXcR6UFufJb3mhEoQBU1H74sZXR4bAhsQ93ZeAcxLNccIph%2FYQnLn%2BiCSDCGjKPs9ferEo7LmTS7Gso0RRNR0bDbvxQPYLpf8zBdfd%2BtITdhU6A38Iecm%2BwurcFz0ot27SAMWWNo&X-Amz-Signature=9a9c8fa2c12eb04b229df0db9d0fb8d5f0b482988d990c50be0d45a3800cf184&X-Amz-SignedHeaders=host&x-id=GetObject)

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
