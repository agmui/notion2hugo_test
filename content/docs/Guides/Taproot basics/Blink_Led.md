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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TK6ORCO6%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIE7WvAeI0rERq9uuQXLvGAHZfCCuMSr4%2Bdp0%2BKxFLVu7AiEAgxl9ObRtBLWWGrgTPharNRievuO3HDDcMcyYuXLaBaAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDCGUoJwe2RCu3DakTyrcA023AqqN%2F2A5qW98q86RQWkYGyaGCv5lC4EuS%2BsISvbqCY0b9Yd%2FFPPDZbGQx7eCSQZz0g0BFIeskVgpk8SsTEtax7tJEX%2FRcN%2FMijqnYjMGseVwryAZnm5VW8J%2B8%2B9M4jg9vGygKJ3hbplO3Fc2niqHV3g2GCGoIMC9ICNZNOmRl7sobTN17MLlHhH6iQNLb5TNcUMLYWsAC%2Bl0taeFKqgncYfVPJOwFsBniUUF4wndLaTudXtVps4OZ71ePxYa9TuX03c55YrYeVXqcwnMw08H5GcL9hoaqgZi9bsESxCCDw90kc9UnzZTB6VhWKAE4b2saB8fbxZ2SARFYuTp4s8UNiSk7ChjtiV5NoM97%2FxBWybnDlryU%2FOnJpDCuTZgltZEC2z%2FSd1edb6JPtfQNwq6sUtMWLZFezu%2FEuZfj%2FyGLUZqpj3OML8ou8LpEoVsIybbzU5HhUlpH07OC8Np%2FIwv2OGWxXW1wInYjSxJRW2FXoefoomv%2BDP5AqTWFgUAdL2oj9oUfgUgHKe8Q0zltqbZm%2FjZkCP7W9p1JoB4%2FA8U9C1ai9b9MtVzTUUJwCN8czt5yN%2FiHeeJZbYtcigt22F0892vHTD2THYBs%2F7pGVykYiTSbxSsG135TeSSMMzNpMMGOqUB8bX%2FNCRMGqwY2G5vuKb0aYskgCsQIBIQWFnu78%2F7CFtt%2FRKVVF6bpR7VYUKLT6wL3YYdD1UjSCjYb7kaaJj2rznARDad9s5ed9ibT5ulUxnB%2FWN15mENNqfxAyFqMG3RL59YMpSJogIB4NCKH5gC4WbTcmpDZVo2il4kkTLwtGAvzjAdRHOmmukXdHgWbl3EGxeDKWjkRHbLbjhgAclKioAWGBZR&X-Amz-Signature=aa0e7a9909571ce4c8d6f19223a1e82aab832433c37b600f473434883bd83226&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR3AKFDC%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T140737Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJHMEUCIGCv5WqiioyBi80IRB80YJdeqHja6YzFlAdPMZ4RIQgIAiEAgVjDK6CcbaPfyMXxxV2%2FIITb7dn2oQdMhvZkGi5XYSAq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDFrZrCi%2B5REz%2F%2F8ePCrcA4NUym0TqIcI5GuTb9lX3u81AR%2Fart6LfeL66c2%2BJYBKUfYCDuY1BrEayK%2BNAlUYX%2FPiAQ4WrvmMlDXjJ5%2BQwhQ%2B%2BURW0HRbiaY7CAmyJYBDwy3Ka9kpXkMYgRSg9Hc%2BiLE07eX7c2sJ%2BJxVDrs5NbOytNfw7vDhNH%2B1mK68%2FHSTXeJgByqW4z35xdZeaLW1PENhvFbSo%2ByCUe8yy6qnUtywO013TDiZ8DUyBhSlgkb%2Bn0GAmrn0FImFLYmC%2B3pjgY4Ut3TvTbozZCoX5nQzJw8bwAjb7K7cOHl1EUa55p51u2tG1iKyK69IOnMQX2JW%2BUOzBLGHhoMsMkFlWaoPzdhcXXQnlnaiWCn8UQCBp9%2Blg%2BL8Ug9MR9q5gffp88rkF7v5uM1R1LOEHgtXdSK1AF4V32KeeuGTrcqxQWO0Kzoq5bVrlUVJgJXH9JQtHfjrOT4bmpYfAbIp%2FyOEezW7qY7CqZ5q%2BukMYYJ4g%2BCcAsAFhHrfWOzY2S%2B5Akm%2BWu64nIp%2FAOnsJgJLh%2BPiUvDwttRTVZm2brKbJioYGOOn5giZkqh%2BaC1MNTax10oE2MNTElbFLrLMrIEfJhRfh0qkUoFWty5psuurWIZA3Q6qro6AOZNAtP3EV%2Bp%2BVIWEMLbCpMMGOqUBCkCRJQNn9nr9FVKRTJct6ZVolV8bnuflihSieFZ6uW2%2FLnlb2%2BcQ4B0hPjCI94QmH%2F2PLxq03hOP3ULfyItNtPacdJVUCPyiP%2BIAmDh1PWIqk6p2uxHAKSd6t7svltgGTyefATQJhuXgVSx5e3qeEXEdJCxT6ZHVuYpdClDeAqqWtx9qTA9iVExoW6E8GL%2BMdWvjIXTIhbbPFYW0Le2jBINidXcO&X-Amz-Signature=77a5e8aab5c287a0cdbde1b12c69fc4050698e3dedaddc5ea8c0ceb54e3a9b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
