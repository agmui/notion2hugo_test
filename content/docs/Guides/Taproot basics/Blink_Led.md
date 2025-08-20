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

<div style="display: flex;flex-direction: row; column-gap:10px; justify-content: left;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V53EQB3%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHqqaURfrVstIEvMQkzxxYdBeS0LNsjVtO%2BvrLG6ISFWAiEAgNUNqC5aKYDhOfHHGLzOEL5eP9Y1rRnWQogyZJbuFfoqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE%2BL%2B%2FbyNIKbVNV%2BACrcA2PFHV1ueMkjexUPwlmPpf9PkeSFzO%2FKP2OBe%2F40sq58T1PuYDNjXTVFGXZg9fyovXx%2BUDTdRwbC5PIuTtAexbOA0jJBe9JsvAJOoByhfiFrI5Q4bKMT4489jn7YA73%2FtAXLWdpPs4YPDNree%2BEs9vclsNRZj735t1TFlYYGc9QD%2Fk1wHdgzPHeWpnGxTXp2BA0UItSl%2FUSQVU8ne0Kn57NQKkzjrN3yx%2F%2BpgWq4m2I0W09yh8gJUpASOVoxdzSO1SuDyFFTPPlJIp8Ut2DHqj1F4b1xJOhraRDd%2BbjcyTUtUimnbuyXX4HGMQ53YwT9SQEfL8Gv9DIC1hLj07UVtXL1s7OzOzuphkLV3wCW7W6ORSm6abClKXMSHOoztETMt0LdeYF2RPMDbUuzJ6q23HSojnJ1LY7ObYCBmibaQnbUA555PI0DJhfEtQABxpKE45a49S1hNOkoAgZLLdwHZyf3mJ8J8M0SsHk%2F6VgTT4A7EdZu%2BSMCNweTdcooPr7Bw0E05wv2h1tXNvmUFez3Kcn4JbEvTJ96WrAiO2SaxEDfTCRz4MV343AncCmFis33zHegTP9hWDQb2QM4edkylFd%2BGMrgmnf8rTlCn%2BNHuTjSu%2FpltJOYyb5KTuzMMIj5lcUGOqUBbifhbWKdT2WcvGCNIXSEid0nuOBPxqpMCCqvlPLbDm8W6oPWxGQh9zwHmYgrrj7BHFUxvTbinmzNINMbaggJEbIQmGEE9BOJ4RNSID9l2NQBdullm9zm0RKcCjpe8kwK2jksYqSGxiakjOBqJUdkXjaFAxJLStxDsNQ6yI7gbdRyITJFXPIVDuuT1hIuKbrjy%2BbMM1mXWsbSvYx4EZ0pKFEtjqnY&X-Amz-Signature=f348765daed6534d5562ebe611a3071510eaa7e0ad5105c2b76decfb9d27f75a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NSUEG2%2F20250820%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250820T075252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZMqOqNuUEGGnpbYe0YVXUe7X6b5xjbpzzWk1cMnKX%2FAIgU1BYCClNLx%2B4fbufMzH5AGesdbTIQ76kWg%2F113SGJbUqiAQI0f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA20Muhm53zCEUuRqircAzzTxuTax4ePPzGVrKI1b0PH0GEIR5ppl7JNxlcuukzpWHWLxHNUIedcKOeisnZiosBtbdS1Aachsgm3IVQDk%2BC6Rt4IvtTJazs1ApwiZasKTdMRCQW9MYQUkm6Eeqigz6IVjfwT1c3prByZxy2I5nL9FE7azes3p9X93Zjnx14zmn2lAdg%2B0Eg0B2P9paepibtfUoZs%2F%2FXiEN3VS9ijH1gVQU7a6g2zvLDan6FKExhxHRFPYrdA3X8MCoiD9SCOavzCGzLIan4TiKbj9K8IV5V8%2B2N%2F%2BC7syaPcuMUtLD7B9%2BRt3dXuL9XYs%2FlGDAL%2F26oHECBsJTn7tjTn2ZzyIaD3OwU6FwtGAOin7EB%2F5jIB1U%2F47pbvI0qP9wAwwNU8O8DYkc569gYW3t9nllcbNCHBvnWUxquHrYeQPfEBblOJBqqszKOcARv4DKjKZp%2FGY55%2BxKB3mloF7lq8ha9MB%2Fg3JodzHMTGmd7%2FjuxWTe6DGu6TXAMT8mEeCMzxiCd2xkyTYF3Ts0Z6ZDwvMpcw%2BxcyIcygwGloJfyZA3ZdepEJZ58Vt2pV7MrvxOeL%2Be7BYUMVpK1Nu%2FLMnZNXxB1fp8narRuKAn7E8VYmtKZ%2FwIWCQBOlqooYNFaoXnl4MIf4lcUGOqUB8fDx3ZjfpOgcT4Vd3ThmlH2ak%2BaD6Yip3lcOuIyWWQY7rmqlAZ2fn%2BlX6nae%2Ftv2YpE8c1Ujwi3cPYF%2F%2B19UbovuQCup226bO0qf8BcBaCT7CFNAoygOKavvv3ti0K5Oz6%2Bb0zAi5B%2FX4vqyKfgLJjKr8Tj7SYcGfifxKXFrxSakj86a3pHepZkj7crE7iuNWmWk2q63EhtcPPv3hSHoaovJOapF&X-Amz-Signature=783b818864573e99b65a23fb76de3addeb37bde96b51d54b80f542981df45343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
