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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W74YKPVK%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCujT%2Fx2OKQf88hjx1b%2B940Z318rnpEbY4RPawQDLrkvAIhANEPqwF45hLQ%2BYDhu1Y2NYIYNBx3GL93HpbKOBVLENKvKv8DCCcQABoMNjM3NDIzMTgzODA1Igy2kYp5arl9b1YbChEq3ANrOv0XsgpQg3b5quqP14LWjFSKj%2BMuIOiz%2BRk5MGNM14dp2Ts50uZC8tZg90pfKidgC3ssxsf%2By2EnO6Oifasw6C1prbofxfueiVqk5jn7rkbVvyEC9djbAFtC42p9w9NNwjx0qs%2BVD%2F2q9N4%2BHSYb3svV2zLif%2B9he2B1LcSdyT2qBmyW9gSGGzCRn%2FcCTu7ELVoGpElFERrwsLneXxW6an%2Fe1NgyvuxGTNFtxbUgzmOkg9%2BekCT50STJiSqEz0jxJUFTHrI7iDDng2VtdZQ5QsWWCxuC2rOUweQE%2FVzOJ1UAJTYjZRH1Br9yxPTxvn%2F3SK%2BnYYt0mrs2KhLiCsMY0Gwhpfe58ayQFu8KDwWibWtk6zOAT%2FcSHquh3bREb2qupcoRWexWXEYT62dcBt3LlPWjNJei0Ib8t7aZky5bH%2FtEmjT9QK0hz%2FcaOr%2FWLdXKtbugJ%2BgIfwlseQiaGQOfsSBIZgL1IBEMmBGTSMGoc3W%2B7qvPhXM6h%2B4KOiIPfMVFGvaCiy3DufT4Umj2v3t%2Bg5dOKUsdxRY1V069tj1xkIxv3GIE88jeXeBkk9x4ucFz62Pi7zsVe7f6ksWnffsFgEFxnCcwWkpZL6qKPms4wo6L%2FJwdMIym6kfnVDDHq7u9BjqkATlr2GjShG13sQ56fZ5prKnPJ44a6IRkIrrwmBPbnu2iexbRKvOftV9B4Bl1EpY3K4OQ4AMMZ2HE%2BVqMw%2FNfRpiR%2Bfa2Ipk4TAu8Czos66l0jpKgZeJSL3VysRe6X%2F05dsazExhRLHUpG%2FBCbuoydqyvQf3KCTL9l0q%2BX%2Bd7QxEZG5B0iRmxsp%2F%2F%2BbcdCu2IlLkg2Ya831%2B8j0XWjrWXtLGdPXMl&X-Amz-Signature=712c1dee8ffa3d19bd301c0c21ba21b1609ac73c35646c6358257c77e3619bb7&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OSFMBZU%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T061037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGWZwt3T6tY7%2Bh3J5i2z%2BK60rhdTpmLtA%2FD%2FzGXClekTAiB2FSpKZT6h6dxSDsjoPAcSxsHLh4FmhgL2susSzsgyySr%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIMAdUhnckgnwrp8rnyKtwD1Xi6jZ%2FPDCxLDxdydIo2wIwi9lENK8GOT0UdY0d0okMSsVGY7RKnTY%2BS%2BD4R3Iz48yGr%2FraLNXSAn2wsJ%2B4%2FNdk0tYg%2BGWbRBDQ7Hq0UJhKvhbaaEf35haBS369cPqe7juVVKchMnnFqrVUfaUffwF6d4pjOock%2BGINn0s%2FL2O%2BMpimwg4Jcv7w8c9NBiqaO%2B%2F%2F6bhvJGBVy%2B%2FhZJonIB0I61eEAD3q0Q05W6MGUmlMIE3%2FXErRWWMFRofp3QAY6Aks4P4s6bKLJaK8%2FAh6XjdSez8q38yj6mFjCERRcpmZUfDtlQO20KafuIJ1dm%2BN7a3ItRPqqdsYPT5t5J%2F2N0xHJXGumyJCh0jQm%2FD3P74jo1o390kByE84o83Xp4NwBqhFlR%2FauyjqzrI1uVn33IC%2BjOpR9qQiG2d7CpxDq5tecdl2T3PTQbGG9KP2nSdSDXKUdPDqOVD2BeJkOoZ4czBIItBuia1Z7ygPAHr2BmIGWboIMF7WPqtXaR6C4zAxzu6AMFSBFAngnlRvLJXuffWRXIwRcy%2FxVzAHKPJmTBl57X1F58%2FvjrdwHwIPkIWuH3%2FyITp%2B2Dbe57PRi2x04bv2Noziut6gDysBCcdEFAZCIgEa3EyaJDwWlqqww8aq7vQY6pgEgsOMxruuDycWmik%2BghUkzCLcNnHiKQqjyXoX1JYQvWkwc1NPoClaE4aEHvI%2BFSCDx22CtBxCr%2Fw5%2Bu8guEv5JS%2BXVSk%2B4LkKPHVhbQZ%2B172txwpLWyYZynCx1sda%2FjHC%2BLJTxxbhn%2FZY3%2FM44Vb2RiaBZub7I0niRrg14CDN%2B%2FZ1OjCHZ0jV7G8q7FwCUMYUTiIpx1Sy4UfXyDEGySUGz8pmU95ad&X-Amz-Signature=518e934a008e1e654a28d8af8bffb3aa01f8a325fa4b40322202273118a3eb44&X-Amz-SignedHeaders=host&x-id=GetObject)

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
