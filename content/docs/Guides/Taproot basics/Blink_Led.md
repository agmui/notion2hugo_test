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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGTUY3IY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICTXZ%2BFmer%2F2WaMoJ8%2Bi5zJ%2FXLO%2FgzjEya1iX3CVJcHHAiEAkMg0tBHzXLt0kKHLdNIq9Ny5O%2BBdyO2FjBcGow6M%2BI8qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUkqHsUAc%2B0kBeRfCrcA645By80MKBMoHW7i92Ldt9qCfjUQ9wsuxShqbweeR%2BypcnNvpO14R8K21UPNfYBpT21DixjIp8V4AuOSizD%2Fcs2qTnt6P4hSe7R7BwYBubfriS9jpL4S4MNN6eWe3Ced6mBg780yjEw3ky86dGiUNfBfliV59ZJjOb6Ei7t6Wp3Utt5KAbVies9WkcSnrJkK7vWaPMR6zNpJrqnzLQVniZsLGiNaHW2Slg4f0vxvyBpr7XiIKDuasz%2Bk53i6sn7dn1DRy7%2BXBXkA9ZwWQAcciK6rrradvmkr%2BjyIQMJHYWl77erqhqhcfqJk6k7c13%2FGMaJVXc06Eag9U2zpQpm%2BMplQ%2FXCEUL8x61sTqx6zWXtme5C%2B9R3rIAfBbA%2BSWtOVDcpeKW4%2BVACIfFYU5V1CRSgowea8A%2BeDkk4DXv3WBPW62%2FG9cpzFGJF1ce1Z1aII%2Fx7XFctE5GmBqvi7hnsw3HJaWd2im%2F3g7DUCvnOKDcJxgWdEMu%2Bm3HxSIXakNK%2Fe8pJa16UmcrB32jAtjbpatZtzd9hzu4nLBB29%2BFW%2Bt47nyud4Z59ASr3e5%2B88IyPSpsyTZ6QSkOk6EdVry%2BRzeNX4j%2FJQPGAQIu4Cjlv%2FpMBRsMH5mzYvEfB37lnMMWutcEGOqUBjY6CqKaO2x%2Fyg4dR63pjyF2vmkb2gDkVTJJQLCTJYqMvf6Zz688U7w4ksVlPUTVFHUZVyBm87L9GG4hYEIlxQGtxmZOo4o6EdO83BWR2QF5lq7VzaJ4cGFOUb%2FxZzZM0%2FvVh9%2FDlWglixdKcNfK9wydObsj%2BgISaR05G5wG0d6L6V6RCZ1ptoU5o1INNLAnymLcb1cIpuZpkuJV2Y8hhcSEwe%2FVR&X-Amz-Signature=5e6a13a538c93170acd7345d1c78a24b3ad72636b8b7acff914b71bb55515af8&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMCODEGY%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T061306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB8L5ye9PTD0b%2FRGDyDfZ5PrmxguBmL9uFCD1Wd4Xm1nAiEA7kSb69SrY9AL45jfVUaFI8JJfGX6Yj%2BLiD1bIeWRFDoqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPWBepGDoS5OlW8JyCrcA6Musx1W0ZPMMWMWORVy3OsBzRAVffSCX0%2BQwIRjqhZeRxA8X3fX%2BjJxE2S%2Bj7xji2GS4BArZ1ICNoZTI%2BQ7mEiTJptEDGQ%2B2IMyqBu2HrdzABJGCRX%2BPD5C7dAh6QpPGwRs7vGQMpToKzdUMhTe5Bsnv5hODmBeDPZCtjutap45uu46G0WTgkmJXVjk9Ap8qNZ98%2FWaa%2B0EKz8dFc0Mjw8sUobzHzJUaEg11amEaPOunya2VbRCxeiqrDeQpAsoaVZJ8id9Y6b76HlbuHRs6c%2BtK7s%2FUJv0SK2TwdPX%2BUfvpKEt0JynDCK54n%2Fgoae1HQ6Ct4oE%2FydlbWTVsrnK5rlQghTEMfNfyTGBsshkmeq%2BfH73Nohg1ifPdgpPtU0HGbpZU3rUTkV9a7%2BWIqrnjNQepf52tIlcak%2BKKZeackHD99EsmcHyD4WF%2Bq3HpYFtc842KQE4GLjnVnr3GKYyf9ta1auPnCWg7qOWwbVWgnH0XLmt20bWE3wd2w05y7oZnVePTQrrjIk9uxS%2BoFV6W54vWai1oldxzQhf8DN%2F7jEv8m%2B10K1sLRmRhxvSd6Sb1HaD4UAsD4c3k8z98mo0%2FF6Id0LG4Bnza6J1kZC1O3nd2jmRUc%2FaTwDzh7m0MMOutcEGOqUBO8im38lMHMLA%2BFjSq2Y3fShTg%2FBc7Va%2B6LT3%2FqIPFW5Me2LxS%2Bn1buphkJXJS69w1M8rbRdY3qg5K9Is7%2F65Xjr4re6EAxqqY2T2mfx5Hwse9MI0rVlCkcKAO3xqq2pv%2BcWlFlHO3nabcOonI2FE15ik4WtizPcxYq9PAso0ZprnxCwQKspDyZvFI6cP5DfsFZaABRkl5Err2T64XxshaRJd%2Fq8D&X-Amz-Signature=345c65e1076ab9e7f7b761b12c2bc75a86f11e0125762eaad4da1106f171b941&X-Amz-SignedHeaders=host&x-id=GetObject)

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
