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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662ZXX4CNS%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJHMEUCIDYpPoRAQ%2FFRiQkmC%2F1C%2B6h8eVg6hMApvUUDh%2B73V5C6AiEAv5qWjCSnCBudzBpReSE6fzej%2FM%2F1TA1hQrLjyrxE9d4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDG72jZyGbHG34VQpJCrcA1RsWVKEtXzuMt2Rnf8g1vuaVEad3LR9W3qYtJYNa%2BkKxOYR6CO5aDUNiWaQtUa9bUMYXoQ%2FKN9nAhwNw%2F6bt4%2FVMDRjFl2nC0Hnq4Tcuo0In2hFffeeaUzPaqPK8biZ2%2F8gXG%2FU%2BZZ2%2F%2BQGMDZoL5aiH2BReHejXzdF6uChUHhQv6YRvMJ2uq%2Bbozzq2QtSWlMGQr%2FVqCQYskHYjEHZ1jSLqQwwIkEnigAoG4iA6UI8HljSHEYzuTWbttmvCxUdnq4QcqLxCb8YJbbLjDOazHl4CKaR8VsPNROzCT%2BENGUNpn4EtuGlYZyxbiZqrk6k%2B6nGjqkYIjYijvYRYyu1mKr4Cm4eAUcb2R%2FbIBlk0DwbaWJh2b%2Fo1wTvChWW5RS%2BZmkrkwCDVIqmQY%2FOr6bJQlqxKIsk0mZYX4e0OTqVAqxnOR4TjzRNZ1Begok0UljRdZpiwA6XbENKdtGiJOpY1bQEn%2FlmBSAvmB5w3OCnl%2Bb8tRdbQlkScOBnZfUnDs3nUhy5tJBJHkXXXFDtQt4rAKEF7IHtuV9Xca5Y%2F%2BOLY%2BF%2BdMj%2Fpd82I%2BOOxENGKy5%2BWi6VPVX6pkmVBC6RUdyJsxqVFj1qbmMQe3quFwOm0J440vrZtCCgSLEXFGGNMJjhmL0GOqUBpGutxCuoPOvBYrXdnnvdvPvrqLwEYBJ5IeCk3TZecAQl4ooBddUw8Z6M9D6fKrP%2FZC32sfBLnQJvYAjG%2BF%2BMBTytXeOho2saUWITsJT54Dixfp9Ekq2M9FV2a%2FmOYte043Aqnn1qDWLliIkyGc2xOL789D6MmMNmTyWjsH6PKERKTGnd6SiBeyv9Q6pk%2FLZF%2FWl3Ycao92yEejTgS1fnAzkpc5K5&X-Amz-Signature=119a52e9910c54063d21d50b3113614ae649d170160d3d5e743e2fb3317f474a&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XW54NBHQ%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T170105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGAaCXVzLXdlc3QtMiJGMEQCIFkmGW6IXLZNEyb74hXsYy3GmmlJk1qc4jBK6wWazr8WAiB7qh%2Fef3vdQhC9mBtaslyvR49wgqQA7RTyWR%2FxCTqoVCr%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMtaX4AcVOOyx8jxJ4KtwD494y0TaInFKi1lrl8HIfKUEfIjy7iNZiF25F9SLrmFUY6MxrZNFSEeMJOdIB9nOJoR4wlWMXa%2FFJK5yQljezlEX98s0BhO5Eu9Z6yr%2BU9vVlfPcfrj1tFI5312CwyZJYD3sTlMNHOAvC6IfqOgB5t5nrcEdbxUOu6IjEThFwV9Gkc9fwC1jciv4GjWKe0lLFoHICFimhdHkfp0eTlLXbOBR7vVmPJjNZFa2czX1NoFc6h7QZxnce%2B7494PTGPn5JEI3c5MbpFkFd%2FsQa1Y477HPpf%2FPlJHhARBjMu3SkeRXeXfAygK5aywNdourbc0VWly1RiHNvw9bPzxk1He%2BRG%2FASQ3asXWh5aeK1YRA0ZlnF1mNhiGZFRgP64OjbodE8kQHW1yYadO1GelocHwcm1vVr7seNOiYNqIbU7NHUSne2t2J2%2BNG2w4gucGxfqV7KidGLb9FGHOm%2FImeaApbDvSFGPl9PKmRPCFlAqd2IZ%2FCrHPHlfnzluC%2Fx%2BuKv%2BcXEbrfJzEOhE6T63euHQl6lNtQsBUJLiHkrggUTDauscR2scFb1GaTZYOi%2FlC6Gr1o6tI5X%2BJaLvEYSr2TXpjQfuA0oeO6Hn%2FuZHESNzUfdPtx6iks4jje9TKXyetMwz%2BGYvQY6pgFU8dTr%2B3lP%2FsVS9OyfP8Fz7HYXNvUVucJkpIBRAwOLGZa937mG0TJRhIhqaD%2FU9Zp396Rw5Ze6HbfqFxxM26RRBTHPv8i0omNlVYGZ51UCmYeFZDeuHRwSraPNgYhOO76UC0Ske9KS%2F4X1Lc9SKaJIbR3Ee7W2bMMCRiSh0CADqg%2FNFCCJrhZEo65fGcKPdA%2B1%2Fet7tud9JcubZvu8U4sCE0nYd8NB&X-Amz-Signature=be6d4bee28b8bd34d220612a02dd560d1b14f2fb8077b313fbaa53a548d39d5b&X-Amz-SignedHeaders=host&x-id=GetObject)

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
