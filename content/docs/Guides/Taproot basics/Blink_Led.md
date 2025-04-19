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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAMF4TIG%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHTjSma3uqL3fsp0whtvOoWx2eEUSSkFh9haf1k2g2cmAiEA%2FLPWnj1dfc4YSV24vUrlsAlB349gldTmUBKbLyL6Iw0qiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7eI1X%2FBgptNf%2FKSCrcA7zBiFA8l%2BbDIvttRviDPhSLSrq8rDc2oQcqK0B9gwyN2sEGlVvaRIIH%2BhT%2FolKGqXZTQdzsfGykFlOr6si62h2LowUJd0dkFK75G6su0KNgj4seN25asiMyVrMs06PcqRF6xI7lCAlC9kuwPangNHnHa8hMI7vmKp2A0iD6%2Buus9O73Djm5WypBp10TjJibomx0SANShoUs6qaFKkCtK%2BEYXrxr6QK0bepjImd1Ar%2Bj6N8XMzs1EOSShZWbmlWidxqc2EC3kSjrRvYa4Wga0iHuNJDKl5%2FWjyZIVBgZSVKPz%2BiezqjV1Y3EeVntG8M6tyf59jcG3EJ0phQhziHSCJ3ulS849dEpe8DD7TUhOugQcZr21vR4GEFbZshcLwU2dOQIwS1AyZK6sMGq6SRtMuGACkEjot4Vb4lFJPxIQ2Z3RlQtXfof0lw4gefbRe0REfHbZWiSGY%2By7ferIhPGGJ%2F4ZoA81th884TJOXCEH53vCC3NrWf21YR4Hr%2Bdeg3ZgRLUbqIWnbFS3vDSW%2FML8eE8jTY5EFai7FIBZOoguoL5p3u9f%2BerP3LW1N0kENz3Ug4y8Y3u%2FkeSTfRVQbHzjX37Zu0U65RpLqDOMpDMwXoZCpTnOzOBseLz4amnMPP7jMAGOqUBrZGBG7PJANfxu%2B2JgHl7WRRGJ0YncxHOMDiuqTZHSVxHL%2F2EFjHl3MYbowqCZ95j0aOr4g3M6lVei0O%2BP6Y2ibMOM988%2BcEBCoB6Qnu47hfrITnx91jCXx2SfscSUG6aR8zxbMTpwHorU%2BHlb%2B3A7okmROfI7Cv5DfgaXvZWTKRmxBjAsAlr4WwUwt6yogNsYNgV4TR%2BGugYXttTyZrjXiOaRPPl&X-Amz-Signature=03ff986c2a09dbf518f9b6b8f43222b5d52abcb84f2d047315268c9504ca728e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMZI4KJW%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T090739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSzBZT9ZdIDOgwfZ%2FZd93zIDBNMbYyOBU1cLT79EWwggIhAKbJHBZsm9FFI3%2BR%2BgJI4okgX6TRNoZ21O7avAa3rzurKogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxNIWMduU46U3P93h8q3AOtipN6V0j5yI9Y%2BnmkXvCQbN9XO24iZK0Ake5LQ0uvAtlthjHzjeSD7hm96HRO1l5pXZLNLoit4MHa03KNkxo0ftGOBqU%2BYEQs8luPYfEeii344ffLdbtkcIsNfEh5clMRIwzLlAXcBItbt9nh9H4qDqkbyISLlhuOoZ%2FnWp9EN2L%2FXKYCabVCpNmZ%2BAI7p78o%2FkBT31Tx5hb4v0admwvE5dIiSV8cQO3h06S%2Fw7cZ9W20j78dZ8%2Bh0d8wk%2Fgx%2F%2BVKI7qE1m236QWBh534niBxKJmM2YH5ZyeFO%2FZfYbgB3XexNAUB%2F8%2BJ2bYsoAhGgOFEfR5BuuLLfh%2BeKTYBwpHeL%2B%2F3yyLxgZ7XfsiVStCqbpNjsIXgpPbXQK%2B7xS2KOSzC78AgcVMV4mkO8Bm4EVylpEAo7x68%2FEwL3pnFAImWsPMEEJ5fJFhRW8DUUkbi4%2Bt9Tx%2BqUNmXy1KhwgmGlIRj5y3a9jaB9%2BML2A32b5yvDOcRNMZftt2vejbepUjDg%2FWjiGhZNFXoQkqum%2FrKDpVHi8Nvu6%2BVpjmYjOA%2FhFWOJB4NX7R2heXjLnSCDBcL47%2Bq6Rlc64UxgFq4KPNORrgRFu31%2FJkz4nPpwYlqVqZY%2FoC8%2BaMpuA3f5DLuaDCG%2FIzABjqkAUgSU0cc6d1ZLRWJtF4Nnp16NjJZO8jqdwwdHZiMQx8zq28wAMQrnFC5fo1mpb3ahEz7M0MAF4cIaaoIOUWuGD6rJHcmeZcPL4g15ZGVCs1unsz9v9aAP%2BiGQa33P2gXef%2Fkb%2FkTgRE7vYbFbUtRwF%2FRqiKWdJnMaqqW72V%2F0cQPf46dmcYgRl6sxo73jFMHmHpSjdcoEgqkFsac3KH3yMt2tfez&X-Amz-Signature=46ecc404a5cf701199921328250055d5dbbc98d5843163ee970d05eb5b9d5ff6&X-Amz-SignedHeaders=host&x-id=GetObject)

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
