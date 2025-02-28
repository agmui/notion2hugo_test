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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VTATNC6%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCSFKWqHJvStcA%2BOrK%2BGIiPeDvmSwKDnzwPuvRGOa6xygIhALZ04cH0RUix4%2Frw0VpcnVGC1%2F1p%2BeKZ9y7rnEsi%2B5B0KogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyrHwhkDAMatpC43Toq3AN3H1BfheyF9BqrcbR6rWhnloFes70hFW9xBcHDNDkWYjup7o1AaA4hZwl5Iw681MsmFqyeHTri8D2LtIlyqYlXmQ5pbjLR7G8YLtdqz%2FGlI7o5pR%2FG7AWj8lk%2F%2FOzRzDpvCfVWiccNzPN6C%2BsnwnDRfl%2Ffi8CcQxJDL0bkDIKlTzjNbFiE2txNkQA%2FUv7eSN%2BpEiRqv5emCnbyatZX7Vo4G4jDgOextLIqLPu7IpMCVJkiJNWCbM%2F1KMc0q9NB0dXDANEfJUjlY7qfaqlDabZzh7mSrS0SSV3c2rAefLQ8TEhPRE%2Bi5LDcDdNV50mnpPQrvYGVxpqZf4ZdRyrpjy1OhmCd13Y3M7A00gm9HnxqJqTLDclO6ld4qeWKN4st%2BdAWxWU9vmTDsViHGNwMJJgb0aYqIwlewuDmpW4%2B6gnHqIeJ96Hq9sR1dO9xhSLZyIXfQbClCzYbv07xg%2BIKge8FYI87qmMfexdKWjytuingYJRnBPE7kyya0lgpdWJhDjf25dLvMpDVOLwB559QcaML5%2BA4YMwzq2n6Z39L%2FNCgDCPbN3rnW6Yt9uX7A40Qxo4zhoOyDsRxY9nwXY77BmCSXk1ZAJrxKjZaTnbOavMuGG%2FCVCKtNoup%2By5gTzDWi4i%2BBjqkAcZBFdE1xDADkd7dqQKdv9nDRWDBDmkdKos47zqpltyYjg5zKvgwq3%2BIbwVu%2FLOdPA6a21MhZjq6Q65pKCRZmRK7241bz9UwqO%2Bf%2BO4jDEHpJVDj9sjI0JizsDLF51KRBPqD33JaZlAdW4oTF%2BsW45Y9ngfhhl6cVIdHgtywQGqFzNF3f3tLDxwaKSlrVX5ugcJ%2FG8GPK14U%2B7LhQP3AJZKoIvMj&X-Amz-Signature=c24be244f0c57f876f521a4aa05db3a5ec07b628a7e45118fc6c73f19ac14ffa&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RN6PG4QA%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T220719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJIMEYCIQCb841saTmF23GHLrNYcuFDrgJjKIRJ3NZHNKxfinH24gIhAIst3i%2BN4qWPAs4T1Obnl4GRi544lIsDnzJ6YU7ldyjaKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwW6cn9CgSlvLiBWfEq3AP36EguunA0k8xJ%2BFowdedHUHRsexMS%2FyXJUvJWprsfqvQPfPkHEeIvCPq%2B1bUapZEJL7ieyZalU9%2F6QgOMaHm3FA9ZFxYNvp0pAkNt0%2FlpFRk7jEjWb9GYheltWzjx62jrWLrNdm64iB6lnRvrYnDaW3Jh%2BvRW1guOdF4GyvN69unlyA5BxtjlcWgUVH93HlDcoV3XOx8lR4u2HSSRaugnfaHij79CJNCDRhU8sEUSajQF7jfFqhuhDh%2FLzExfjoLSOEnnv%2B7Z%2FH3yhun6WoQ2y5n4UUciGjU8JhBCH%2F5GFHTWGa1erJLYBR1W6KbNJzDoEYah6m2wY49CnP7XDM8eT%2Bb5pbpu7Ik6OVCzLskztZsCT0AQk7lxO35fzQOuwz%2FxpRE%2FNKIKTZUd34gyXWTp4vrQUqyEHe3Lokr2vYO3D78w84x4ofH4OX3AMSyjbmi1O8%2Fx1PnfaOZ9XU6qNaeJcDNSFZprWDsaE2zos4WxIfZslDKZC2ro63P91V8RVtHk82XqNrI9sCQFqskKJZxZmRauulUDEKZ2RhHIM1mmvsrKoQXjaW9ko32Rx3DuZuGO7ZcFDUzw%2FhOX2UGlQaSGIvqfFa1sPDWxNqHLIrdOJKUWmhUpNLY2n6CrUTDLi4i%2BBjqkAUrYx3VOMS9p5Vbu5m8ZpJ4I6ntWBCp7tzUU7mpAuE2TU4dOoxJuhS3GWn7lM5pjUNp3kKgPf9XFd%2BswKK8u9QA%2FfdwmKmKlyYaxO4M%2FBE2nK8wNLk3mjxYVn9ySHqy3eA6I8CoDc0PLj7sSG3xy0h6m5gnpQ1VrSwYERiyTRghRLAOk5haiG1D34ctDq32dIm1HM92nnDRkcIzAU1D8rX9CqPQP&X-Amz-Signature=6f0d5556b599f67c45b60f7190ed9ef443fff83170ad08bdf8c190c37eb44356&X-Amz-SignedHeaders=host&x-id=GetObject)

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
