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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y53EGBGS%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJGMEQCIEM%2Fu5pB%2BQiNTWgienetye7mEz%2F0kl76VXwTr%2FVps2O0AiAr9rHjnbwm%2BJxvbUupabe6T6K%2F6YIq6ErmK88FHsWiDyr%2FAwgiEAAaDDYzNzQyMzE4MzgwNSIMtCkMwzwyF9tIUaQ5KtwDNS3qgwtNpIDumxmLwjrX%2BqQz2Z1W0iEh5i1yKJAsqx1ervSwewQjFUj2yX5EIERlZKiZQQEeJOli8IYYzymmwvmBrIQgYDYiP9JwYFanBqV8aV4dg7BXhoCJL2SkmpThZ0%2B2fzWffo%2BGpai2By1ia%2B%2BkXoXuIC6QVvPMWDtUxhu7PFzztIUP0UhUGsQvoIiwdkqhOqPR37ZiKpPGURiJVXoCZkYbPs%2FMtugEfneXHgkSJJrtlhl45SPo6eOhqVfD%2B7T%2FcePZbH1C98cY80a4vcd9f8YAUzU05f%2FzV%2FIQtuSKWCRkeFHoga5jLIfH1udk5l1Vrtua771EBmhuKtFvtchnqqivgTrjGHgXYAvo0z%2BoxZbXDt0TKh6f01UlfQqdCWHpIEM2l092BvNZmyFG6abJeIO1%2Bil%2B1qG2LzQmcSdeUlBqDgvu88DPrFSjtzOtt5Bkcj5Va1IotCzW5S1x16VFdKZbCeqGRWSP6TPN5EuJuFZ0JDT%2FOAPJcu%2BEoZXkt8dnBPuqbHCk%2FLAX7RFlZn3yO%2FRCyo2z8knIPV%2FUoNniL6HYyYb%2BRTTLRRNMWXPqJn7g6T3nS6M8ofo2%2BF9O68ywl%2BI9dN6Cz6oFGinRrcAtlEupJXCwU7%2Fn2uwwr%2BuUwQY6pgHDbnFnwMzdc%2BBPpfqj2Gyc3zp3yS0R%2BU37iPohqyTNQ5ItpDDvNIh89AbfdkJmBFXmdC8HVblpSZd1fQsFxs9GcRrFBqUOnIAfBISHCLagS8raUcL8wWWpY0LgcHdwx4OORJm2Mos3i97jTzV1PYDGk0YpSXKlt74L6HjJ%2FSwp43GQNMJsptNIS883xorROkXQ%2FBG%2FLQeERJr9DDghjwI%2BCAHELP6U&X-Amz-Signature=a85992de0375e86db12673ab91d481ec321977993273c28124e79631042e2f0e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AU6XJ7I%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T004057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGkaCXVzLXdlc3QtMiJHMEUCIQDrtxmAhVkwvv2CmseK%2Fmk3bYHBsvRnbRUqtpCA2xNyIgIgH3peVM7pjrxBGlvrn91Me9Ta1eGWFAZ%2FfVLKyppHevUq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDLC1RkjgJN5d%2BlNXmircA9fvQIoy8azne85CPPPaDXPxAq8z65pSrrW6DgzdL%2FYsdoubIptzkI1dcxLScerOi34nFtPMxdzQJXFVne8laVe9mw8h%2BJQdfyaZ8Z67T3ZMpdLiyOpzNgkcjBBywm653a8mjuoFhLh5aDLVQHjIhbLXHBL6P4Jkkf8fScPIgGScnW5k8Kydsfvw5u5RDzIwkAna1rufZJCSsAgFCop8rh90v7Jz4ZdRGYpDBaSHpfTxTTIdwJzziB%2FNSxu%2BZxAQtFd3pq6tmI8amQuaB68F39t29eXg2kGF9hxq5skjKalhpYHwD%2B4cG8tz%2FGIzqao%2F5HP%2BPoAJNX2e4OftCDTloxeyD%2FS6%2BMIt8lCW%2Bzr0xppv3NtkibWibO5WrFyCtrcmThZekSP%2F8mmYodOBfnDlZwIKjt0LLqdF0%2F9fZFQoqbFYB94xwT50BAjxSup1AMvpelaWr2qaeptCVyPOMVjONN894uv7PK7O6nhO4xqyC0DupQQGb5Htxc9L2K0iDaXXnVQNWMJFI%2FJGzyYfLjM4KuUrpKLfWwOk%2BMB07QfglulbK8ecAuWSOtY9Cmcs6GmxMq2Mjn7LhHnAe9KZHs%2FOrDbjxTyXjBTs4tIvOVWSbQBx1feBUAzq8UqVPKsSMJjslMEGOqUBPvylQpMynGklIl9TEOCHk7SpO85wobls6bvkGPBVJC1cOO%2BpJlHVfb2WKUlcnhvRfXv1GmaALyZvc7YsZwnRAew%2BRpXvn%2B00ucf%2BGpOMAxGQbQ47b1oa1CIaB3laXkj%2FqZwzQhMJE0VWnyXSa5G5Viu9YBH9uazdujcajvFcYJC%2FYMc0%2FS7%2FdAa8Nnv1J5SpNFhymYmC2vDX28RP35ugFraoYgNW&X-Amz-Signature=675d6bf14419e9152aa20237cb8aadee2881b8bf1b148236c9495701aafab3c7&X-Amz-SignedHeaders=host&x-id=GetObject)

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
