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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QHPUFFM%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAdePVDiCGgCaOnGh4sdMlzV8jOMjnrPx%2FS41OQorQkEAiBlTH7%2BS2PUa0YYI2ntQmitx55qYhq7LmgiswRtjxoddCqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlpPCdgQQayDjf0YPKtwDieuACY%2F0iPWyLzNnZSRCkjyn2X18kHzWTkpXYkJCy1v26hXjfHl%2B77dWuPAzgB6f9Uu6Rf%2FeST5ryp9%2FQwZhAQUPLjfvuuEnML0fpUUZHd9yw2vLQVI4vOcUG%2BbjkeN34WWZnimAIaijt5VJ633clvcIpdJPlNiR7%2BS0IMfr5eQvqLl7fXW29zTTPsaYspJcNZFphaD8CjYMDRtqE1H0f%2Fq49tHwbm3a57Ujhftml8iaEnVaVeua%2Fs54fjxdaAoWMVdyAljI8qddIxz6uGAUZdugcpA7T96n1Xjo%2B%2BYwSV%2Fp3oXnXiETokj3rORqyNVzE3WWeOiR7ajrTaJrC6XVxLXxrRrn7dPeyp%2B3i4RAVFHnWSbGIBwuymsSWA63bjQj51qIpgqzlHAz70opunFgBYPHoPibLZ%2BrOk6bG74S%2BTLhNPQColwolaUkr7IcbEOq7VEdyywSeqkNcr3NMdki16P%2FKQbLOQ%2FnncTW2pqReSYNoR0lneh%2B40RIIMFA0eEi8kQWTzMRp7C%2FckDpNjdDtYCAxJnNXmEJ2eCd56x%2FPPdVWPou71n6cPvra60m3GzqlJUJ0xJH2xtIOWPu36AfgbUdWgcpw1bB3fuF3OPDrXVd7jiQf118DokTQnAwsvz6wwY6pgHt5DqfMN1wFSA2dcmPBO0hB6%2FmKxmDcFcqvAgjPcgv1NTs96bafQCblg4eMqCcdROtC0zcLofBVZwepZ0lYyxgcu1VZHCswwIrzl8sm04gbR%2FIxReT1XXFUw6VLgCk3yXHuQFUPFx9hotQI8jjdnsNfB9i9BGEdMPDvL%2FJcTwKjFjhiDW1Xh23E2TdZRzqpcvuRdrYu1owHwvpB64W70Qxfd4AXkSt&X-Amz-Signature=2332c30c07175e55e10b26de6bbe8083a7ac6aead5b829a08197ef1f1831690f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQCTEJJN%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T230858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICG045u%2Bbw6xCzTCU2a5J%2BZKl9Uo%2FKJcjlIga%2FV4jM8LAiBM6u8z8EYT8Po3Zj8losa2U%2FDSU%2BryFG203nKN2RcWPyqIBAjg%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0kWbHottcZ%2Bq2LArKtwDPaTG4JyI4nemMU95A5qcoSNffNkrQGXEGCov2Shlk2yJoPi70%2Fl4aItq9OM9MjvqnR8XFlFFJZ7PdqAzuB1c7nx3BSFQdZJdsBOcVYnUu05Q%2Fm0thhAaB%2Ff1ArLS6ywIDrsPOhf4Y%2Ff81NQ3pnCK3hXP%2BkxBsCH1H9m%2F7TGAgvXV3utLgX7c4L0NPAuqmaHgFHYunCLfT9W6ysVjkp1OjKKT%2B1pqzoCDp6Kr%2BxPRiYz8Eden5KZOeTLPXl0n%2BiELfYI%2BiK4yvn0pB%2BWD4%2B%2Fw2tPCbxbq6f01UpZn6NybPWbiPMJiMex5O%2F%2FaX0emXIhws4zJ%2BfoAnX%2Bd1%2BwTF2MGia2ZP52%2F8zBRIEfbVd2z001AtcxoBFK0jfxoTckXPwTQU7z5TKMc%2BY8YF1Dc%2FBGt18vVQyEmwoXG8scxNYt%2Fy4tO19FLsG%2B8%2BaJwl9PUNxWcxnInq07FYxVcW%2BxG3Z9Mar27hEJEo02qha6UadsornKXxKTsm99vNM6Amwv5bPaz6VrWRKlHYNsOQx36EDbx%2FgRIpRxW4ltapEfwEi0JVuZttnCrW%2FtzQ5gi3PIRXVNY4VEjswSVI9AWIru5DNhxfHx%2BKkS6J%2FdPXKYQlZm%2BmYoDN%2FRsdsbrdKf2%2Fakw7fv6wwY6pgHIX%2BMkwo%2F6na1hD7hkC6HqPu2vp4OnEjLv4wyo%2FUNS%2FysO63rXIedak9OlW1vG34jXSre6vP%2F19X5Razi4KpLP%2BPv%2FCe%2BWbYWD%2BBxmlbFKecQKA0aIYwoOIqlDR30ryYJUp6fXqnm5JsyDi371lb%2F4SPCHkxE2pI9pGu%2Fo2Vxc2nR%2F9duzKFaoQ2G43cGAEl62V1AEox%2FzQOJY8pajtPXnZVomUyra&X-Amz-Signature=67fb1ef2ac9c523fcc4f59d094a05136287d0f92f6a9b4953cd1b36008d6929f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
