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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAXECQFV%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASaCQhDCq6o8XzzIznV11labLDL8p%2FlwpztbYbwCbPbAiAiR8%2Fp5EAJ%2F%2B7PJl%2FdAulI172UZPMYFjHR%2FokFoxNwySqIBAjk%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdkXVZbmbhi9dv3%2FQKtwDIOf9B4Jf53m1ORUA8l99rPyDvwNcH17srwoYqNTIkd4fjKWA7kO5PVjsvN%2FQPcUopRbZCnszxPoHAoCqmFJVv7d%2BXiV86igr6rD4VMC0e2gQ2xYZ0G9LafjlAwuW7aMDxEzr6uNoUBEGsQg956%2ByflEy2bAU1ibQ4p4Kjt4kk1oBrd1QQnxXFsA659C9MPDXEm2jyAQK6w%2FgGK%2BTSH0Ff0ksqUkv4SRxPXe%2Fl2BFqZ3k4RwjM09LA957bc%2BKYG1ROhKrficQCKkJQ7mUKNDkt6PEVl3Dm0%2FchAnglvkPGi5Z1tZ7pB45El%2BXi0yd8QKYwBv3fKsQhtcXWhNWuFxYW57uyad7yW0e60Gwos6h9WG2RQV7ZZJdBL%2BamxozWE0pHKOdpljsnRi%2FnE69nu390xTdRxwcGvf%2BIG2CL9eOVw5XsSqDz1GmGGWicUXiXt8F75mLpksQRjsEy5G4hHVWUf9H9fbBILWReNRrrbi0MKG9zxnfuiJss2oKsbwrI1mLYFFqEm8YRPZ7XE%2ByvtrPVjvfTEJU0BJp%2FCmf7uMbuvCa9xPB8%2FCQMx8EnedOBSQp0rzyyqfcyEAWSfwx3nuNv6wIlxrrtYx5XvvC13GkBnmMS1FMv%2BqzMaxtVg0wpcuwxAY6pgE%2F2A5OCW0uO6JpXT949se6cZ1YYU%2B3IE5Jfl5VNEAOgXThTnkVglcuHwLNU95rqe%2FBtzEA38NbYJDpJPZLElXsmyt6UTI8MuGMlKdE3vsQqkMAYWOnWdtGtE2QpKvzcNQnEfzAi%2F8yMCyTzsl1ItvQB8vipR4zbIAasCh4snhmQI2tzyfNAheypqdNG4SIvKC8qmXXyhIC8emH14rdr8mQTDRGx6PW&X-Amz-Signature=eb0eecdd0085945d61180c5829dde385d86b65f79b4694f82cf44e3f65cd1394&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RAJKXMXM%2F20250801%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250801T030615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYm9yKM2LztlT9rc8cUGxsL5vq13P%2FmXQEejs6iWYxeQIgbQGqrSosl0bFj7fUS%2F9BfD0BIqdo3M5N0iQWL%2FSjxfkqiAQI5P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLRYhiTcYa32E5uTCyrcA2AVq%2Bmi1gBgp8jp%2BdaT4blcI1EVYtN4c0Xj%2BmXRb0bNWZFfFLQGzZSWEP4HBd5py9MrcBnY2TMbE9a7ZDMtChwU94Ik7Wy7hKcVgbrw9v9Qw3gdMBgwVEfKmGlNXmMkBSLdOad%2BUWFlOZaJ44VKgAMl%2BhX8JQlPPT%2FnVvFxjBt%2BzlhevJGfW3ublBXR7R7%2FjMovgEijmQ5DzyD0P7mcpXpsuG4kXE1J5iw3B%2BXq6Vp0EpkWgflTykCFchouRt%2F6Q9xqGHKF2WNpXK6aXSlw4UTRVjUbytlJqWWpCm5Kve%2BmJKkmEo9SrAguK722v1j%2Fx55v9AIwsB32N1eEt1e1WR8Gdq2oBp0zdeOxbAtqWM45BCe3ISvnF1VlUEuqG82QPwrpv1sQwLKrYZ%2Bwwe%2BGhHqt28MPE8BdohCM2TQD9h24Hof%2F6PVpO9ibh8AQdSfpKgw3ch4IWxv7OK2gHKEzFzLzXdRWzh3PTtieN13gxyW%2F554%2F9NkQ%2BKKSGY%2BTjVOiNd7Vw%2FNt9wfw%2BLyIr8qNWigwu1NAXY1r66cc8w1yqwC3ieLk%2BTRdL6Vco%2FZcs8O38nMaa7ZNxonF1fiCwoTApbgy2qFbFrJ1RGbiAZm6Jw816Hm9gtAhaBHe3%2FF7MPfLsMQGOqUB9PjNS6IaNN9%2BRgu7Hfav73XJ1q1tAy%2BcRNsdSMnL%2BuMQD7DbMdDpHlb%2FZw855BEPzIRDoslV%2FOtGToHbQi%2BR%2BNTWr4gCTVtldEEVQ5vNgHbOVUZzu684yca3ZY1z0NM4h4ebDmc69DNqh5hG1cuMYNC1RAdMF%2BIe5YIFLuX3Wj9MyQ8RQLKXazmIr%2BMBiseb74MoPQvUoVLl5mmF9JNjQkKmQ6sH&X-Amz-Signature=e96843f210a1bc49a650dfbed3ed8b24dced7e11d6cd367dc2189a9ba3c1d0dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
