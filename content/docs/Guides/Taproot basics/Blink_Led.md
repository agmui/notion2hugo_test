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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667C2ZTN5I%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQCnVsfdfyIJGeu7E6HGWimKDLM6Bb7c1n3db6zHjIbJ2AIhAOsJEsx2RrJy8swtlAMT9vHBWV7zRZSwNhCJi1ZRtcOUKv8DCCAQABoMNjM3NDIzMTgzODA1IgwX3BvSYTYy0p1hipIq3AMZo0%2BSB5eX%2FXOa1ny8QSmbZeQ9CTGCF94RAUOIWzsfDE6tRr2wouSI%2BzE8S0YXemkpsD%2FbLHjDaTWI%2BOhuuh60b2g55SjVlW60WdOYaajUn643HRvp%2BcmNjpARpqfJC6kIO5aKfvPIGQpfvHbFJEGKItnPvlABwxeYnXOipCxfBI5v3x0KkK26HCBOfQxB3ix4D587Dd5aRroT7fjOkuWvB8OtgKhBClGRIB42rYS3WEZ3T5wRGFrZQ%2FoNZUeDulsV06eaa%2F9MIfx%2FzwHVbMsNLBXMTdX5fPeyPsV0BWY%2FTM9E72geukTpRhfsbRu8fGtnwi9GaZSQ57HirBbDSyThNhKGpyWhSMhbhDzQLNp38kfSDCeAec25KeUfsps1Tt3ytqEJT2mZxEST4wH4DPbx3OciYZ5UXfQNm8Xs4AI6jJ8lCMNISfPCrWceZjtIvR3hJYdOBQyx9QQW98BjiwLgQ9BGhVEbxmMSD4nF8mplVpKGpLh68zNZM%2BzGZB3sXZ93152BgzLpgKbpN67wONQeLRj%2FmF79ncZp3eJNgJSNBVpeWOPGhqbLJQHaJoXoiIsWBHMp5jHgKLJOpsWZ0SZU%2Fl%2F0eul6okHYwDpBAgBfSRqStEXNGnG31LYGZDD927LCBjqkAWGQd24d8BenoFqHaWa7KicjhBTsbGmy6ygW5TBbaPDPezJF7%2FoILgxGRNXhDcLav3pRLxDxLy8NtHq4jZ8EPjszTyvUQAewwJVOk5SThfgEnlEEa4JiA5K%2Fmorl4ifEZgPxq0l89pvE8bqCyTPq8MPWlA%2FffOk%2FgEqw3seZJc7nOyh%2FfnQYr6qspo%2FW1R25PFXlwG9QyanhIr4Z2E8V5muT%2FBQk&X-Amz-Signature=01523e57757c4324948c8d8a90811dd5f6f930af24c4dfebf2703132c8058e5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ULXBRCL%2F20250613%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250613T230821Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJGMEQCIBKQYxzETtqBybznVFUfuyhUfz%2B8v8O3Wpk4mY2A0uSVAiBJf3f4Xhgp2sT7nxeqC7H3YRzEW5O3BUP%2FeXU7%2FD61WSr%2FAwggEAAaDDYzNzQyMzE4MzgwNSIMNBr6%2BJZiTLYG2SZiKtwDKPw2EsvI0Tguxv5EhPB1K9LsaycaD2G0eiRKvq253rJJjoiXwfc%2B1KBxcn9FBmOZO3duYEykThWckRpIvPEOuzjzXIni4lZn915BYJa%2FVzoinKArIaqctbJ3GqBxHbDTzrV9G1dklJJjJ%2BtkmCPljpHc2SRk9dzOr6KF47tl0gTFEO9EJl3Sc1hP%2FPGpEArxRYSawMtBMuewQqTPGfeWWsjE36MX%2B7krnqKFUEHA45U8BN%2F51dMdIrnTENlnjSGof3j6NTaweeFjKKMBFEZYMg6ite0ReBVYVJbgRlVkWdBkgIGwNkeHU7SpRbwJEomJAghBO9LtLIMgXAJJUhhFKvTN37TruAnwf5ScWPXXyn%2Fuxqw5ujK2w0wNwgoyIrOnEk3ozA%2FIPtAsBVahjDVUiYz7l3M3ipCwBqy9RUnZRXyafzioC%2FJgsVY%2BRjcMaH60bFdM9dR9Xswo%2FYyi%2F%2F0ZwWS%2F7rXjvGwA%2Bbm38U3X1R1GFFk4uNhEB0kOMpbVEuaem9uzt0TEforlU5Jvl%2BeXibjQRM0cJraNTlvLZwtEohcrzExa2oNAw%2B1pda9EcoRzxRVzBsjPZaR%2F%2FIHIS0g%2FKTnhF%2BxPAYZLSmtpp6fsT3bg8Z4ts01g1Vxi4dEwytuywgY6pgG7MgZqd%2Bkj81%2BrKpTrrlV49g%2BwX4%2B%2B1nZGzT5XteE8zujPCHqSL5K50qo0y3cDHLrmW0T6nU7amNn3yie%2BCdNSmYd5f4hOLnwc%2Br5bcfysduJxYBeZ%2Fm7whmZaWMj5%2B1FU%2FrEbkxDLHap4hTlWMf%2BpZmP8pV5T242kxt3XEbIQMOT%2BCu9UgFb8xKWXJlhOe6yEiuI8QM4YXyp51wfolAmcleS16VHC&X-Amz-Signature=b11a2dffc0f6a260397b9ea3414992e0b8b91f9678907c8fb1a99e6195a65b4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
