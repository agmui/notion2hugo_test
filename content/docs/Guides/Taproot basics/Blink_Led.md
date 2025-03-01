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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U7KWKTPL%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJHMEUCIBcZ032F6YsZtMN%2B3pAEyVr7%2Bof1AThJgy9D6dUtnzT%2BAiEA71Wm3usG9CFmokd5gigklozh4CM%2F5YA2R8j7NDAgL9EqiAQIm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCcd2hnPnRcgZsN6uCrcA1l5YBI4%2FaqZjBYVhqzVtk%2FtYcYSY8GnOBpStbaS8C%2FjpPMmjRXyuBpydrexd4wlwGHHn6RfbUYR8SoVIVw4PNFfvIiYI%2FsdNcqIzZieUABJ89UYX%2F2v9byRXAab%2BmNxrq9GjOoeqXaMrluoD2H1zBqOkJb7GrT6QhNvfWpQF5%2FtHmbZj7gR%2FNOLKOel7y0QZdpjkfGhLlk5d8Qt1AjjMxXjlNCXkZOolQbVLFGKVvDYeN5AhMxw%2FfpIRryv0MnTF2OQS0YNuo7MCcpUr%2F0dDd7%2FW3JVfeiMDMXmocijuHLCNVCBN%2FhOQ%2FgyEz5qda2YlQSr1O3nT3L4v4tjB8qCgOOg%2BNrst%2Fs9m8iup%2FFdwi3hQ4XWqDhzxUOax3gkdbwRVS7XpOWhEaEUcBAoJtaPCNhIPcrA5NRssByjSBHI5MDAFiOJ05hKL%2B9ueu17D6yIo5yoZ9eYjSvZCbQLzVLZ1jejftmFqjNw00QYkqsRB1pn%2Bk%2BGs1CioHAiS5DT6D386kA8BQldS0ymkqoZ70mBm9zqLpy37XKxmjRy0Qgh2N6qEE3dT5%2BmUNqeocDP3ZeBBZpzEW%2FUM37PNfqXzM8HFk0Ipor2p%2B%2FJbfry0XzOre2n2PWVGm1xUoA1oMMlMMzUib4GOqUB6w2da8KIo2Z6Zk%2FkxoJUVGCEF5kiYGETv7P8%2BJtZnblKqnRibT%2Fjbza6y30Nk2WY0%2BHG4KCnTYsP%2BFi4HSbOLHT%2BqJAJwD6qlxO50XxmmWoBXdUzde2p89zLVBYRzXycD%2Boz%2Bea%2BF2pOQww1vcuNJs23qL76FN6EJAQmyxyGg937W1hhimlQ%2BO%2BwQjzS34xJtgQKBlswaL1GVhsuvJNk%2FZQrsIZ5&X-Amz-Signature=c723a27f733c2e800eb67e1c9d474a344eee84b2725d7af9a631b450928f68a4&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GY7WCQ3%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T021759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGIaCXVzLXdlc3QtMiJGMEQCIEJr2bQfdU1RgN3AR3OsXZmk3f9MnAXg6zi4dmNgcUoAAiB1t1TNRSXmel0%2B6tqlCKLRJY1Qy6JbXhuqH277uEAj3yqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXGdwuFUo89kuFcv7KtwDrNTYXy5UmOiNSIggLe75HfDV3vtxQ5L90O8DCBbHLDx0i5isVe1SVaOKyDxOJL2j1zoFEJSTmI65pCmMRNMHtM3dgDtVHVjpSJnk11dbTS3MzqhIiSQL%2FwH9diW47j4sVEnzeSH3FziQiemMM8bS1liicqe3eKBsZjcdQ6dK%2BHwYqnpmgRZGsBHciDHW3iY%2B7bfzVNi1hinrkqnyGvtPohVMICJi6bq8Yed3uGJyCtZqbr%2BYEsXp2Y06HBwfI%2BXGOvgiUorh4gcgUn%2BFpZVr3gCnyQC8CXL8aocdUcPZmfTwQ3RS78rjpWE9aGjxHKDn3RK4nJRAh2Xz6JXo9XE3ynhFJFwi2ueYivvXwi446V3qhRn%2BW6ioNKrlD%2Fe1WUc8lLzo%2B6anZ%2BpBXYdt9XwLssPQZTG1mlaIXhNmBP7KAK0lJ6fefKb%2BkGDZfcKOfsxB7n5w4H2EwiI9HVQ8WQF8PxRooc2jDMw8GR56lkYGKEpnEy3QqIsgby3KhhtlgUkhblHjt3DNQKSZTLM4WFjAx2cI%2FedgHE3UoQ%2BIWUBZjFr4p4mDXSZ03%2FyIFe1XtozuQilCmVmbpYYqrYy4bzlT8Yysww2QnaEj1JdG4X6FMgS2PyGHK3DuURJEzmww2tSJvgY6pgGI7ZTxQPQk4wlPSjbjlpREW30N8iJC6AMaSNCC54lSiRhrSlyTVuBqHv8M1wkXNGkl%2FUHbQSSLPHCJkiOmmevvTK4pno8V9W9EMHoIhBclO8eSWDDoh8ydomq8xVl21gUXFPzxngqjNJDq2WD3gz6102%2F8KsrLVKaV7drWGo4r6HiN99JbXryO%2BnBzkki1jnVZSe4gzVQYauon%2FFMgXjqq51dbmWwt&X-Amz-Signature=acc0b2f7e30df764583e57fd760f3a182baf07e9117205da4e3e1f0127b36a26&X-Amz-SignedHeaders=host&x-id=GetObject)

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
