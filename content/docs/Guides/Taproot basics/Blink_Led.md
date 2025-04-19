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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ANCRPAU%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCIG6%2FOl9b%2BeujREQeqXsDjgvxmstW1cutLhc2BNWSBJAWAiA4HSenPntto6XvLo9O0TQy7XrPzR1YBc7EMjqcMjf0eSqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM4OZr%2B5Wn2RBX6oVjKtwDEDSGswI8Gpb6IaDgHyMxkiXMWnCCHnPU0zsuKPbp2ApZBqSpZzsDesZMAsDxWL9Z%2B0EtC3PfQSWL7efNVLrb5z0ktiVpjP4xVRm%2BWqRafuWTKKfYO4V5iA2i0UBogM3fIXLfzhHOpzO8CtpgsGlYSEukipmHkVSBih0JyMn7pxk0etH1tD087sZ9faNFjeT8gwLwRaujmxZht0E3tr3zYcKnmoqUcezdEcAfb5Hbc%2FM63ozpG4SKkV8N0%2F2G9i%2BKUxwfwEC%2Bgs6D1wZh60HgFo2C71y4uMmr1GwMpHH4sRJZ%2F9qrp1LA5pTnPxaoTRZEfjCUUcskoh%2FCUEHRzr6Tva0cn%2FB4hPRgAWD0BgJ%2FuaCkQ0arNbMiDqnsy6k7nxCwd4oS6yNhbRdPjbZXqSSu7j2EE7gEqMedi00uBNS%2FldwZE%2FRXkzu6Hs3Hq0%2BOE9vcKcqErtjOFiDXR97enI2JRTJPndehLNmaGdaR91xU7vgPueLQGVhRNavuV6uENJRZVDZKe4TSzYyxXKCu1RAEi4byZMwmQDRb4h%2BYxt9SvT8WqqXFBzTYTRwH5tSy2xY6xDDgqfvwOajsZRip2g5TGURLTgTdRlaJhBNvx%2FpFc9194euFTVAP8iBuO%2F0wioOPwAY6pgEdFDHcVucW8cnYUTc6q5%2BJIyyM6fJ7x4JcJluxDQwSswNdhaulzu2MRPuPcAmaq8qG236E6cs7nJ775Hh0fiDB5VCArrxs9AIblTTXlFBg%2F0i7lcbPoKN5DRJwfwlrsX4emzgx%2BBdSq2vADVc%2FzPrvp4srBo3%2BnzsY9srMUezNpB3HRewHByKxJnJIXfXmA%2Bh%2BGO%2FC5aEGk9fQqvfHfwoEwzR7%2BG7i&X-Amz-Signature=53e1778cc29860a9c343e8cd287bf05152cd06f713cd97c7cbeb27b911807f03&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZDMUKSE%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T160825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJHMEUCIQC31kSE9Bktv4KO4KlhwM7f2A5RwdUAOWOjfGWI%2BkIddQIgZXoflthYACzIidAj3DjOGQAhcKk7FcFUuYysqRHsEtQqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFoqukDFZS%2BSzV6Z5yrcAwQCH6%2FbhTxWAEg7WjIwtN5CGGcEeTGFSH4nttaPflilIwP46gXTfIGst29rrQQImogHFXEHnOQhJa%2F2kw02z49iZuiqTBhBUXOLH1m7%2FGdtb3x8IsrAnPC0paEnSsKcnVJzgXwKbH320gGy9n5gvWi4KhqiarILimaKI%2BFaGb%2Fixtp8xsnpGVywoauJWFaNIcN8wZ4EwrJCDznll00HxJBACrTBzpuks4ixuqe6LQ9v4xKb%2FFU1dFqhibEoL%2BojbqMwdWhUw%2FbhDiTPnpnEyJd43U44Nodx%2FsOc6oBHLTZTK1vHqSMHljaJTj7no8p1v3oMfPhrylAxxWxXxRdW7y7XOCwH5ocLDRiM0uF69vzal9Zm9%2FHC%2BtqqjUAvwEamwdRSk95Ojk04%2BeijttxjW3vwd9G4gol8zStUJNH7WVoPmIWQFUxnv%2Bb8zmVl6yv7vBL1mNkCu4juOTKawBXTxeIMNtKGl7VFM0zjdIg17JLDSw3r3h3fLVuCgeITVn9ciZieY9oldpSpfuL8200M2KYMYnoO6J4sRMB8ajnFtrDBtPC9TYyk3mfZ7peo4%2BDPZ%2BnIj9geNMGpQyAfpkI3YcmHqrB9M2z2PRXfPKVyekUjDupWkxc3oxRuQGR%2BMOiCj8AGOqUBEBSNN7oEpzvfsyPkroz3VkM0Q3%2F1Sp00MtJdnhG8NxDeY7%2BrTviRhDtjBzmDEhL0WXMYtg%2FlTpd%2Fd0bmEFoXd5Y1bPJHkcDXgFcJLaPsBhGrlZZtnmrwUMOQGkQgzx0CMQmqQ00GP78ed04o06HU7qAefiuRmRX01P5j46fz9aZE1sid6MMc2q1nl5BANInYVcMUTispQwe9V%2F95bZzqwXlVyLpa&X-Amz-Signature=74876d0fa8af9242e53ae77b5db6a22a30274eaf361da399a1e4c4225e849fcf&X-Amz-SignedHeaders=host&x-id=GetObject)

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
