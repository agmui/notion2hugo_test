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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6AH7UJL%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAihstG3kzUU5AzCDehCFoXTvHee%2FwoOAwMzBCcXX8JWAiBb%2FDrkCPfQaEMWQ1YZIZwqWB8GIxy49RlG%2B3cAU32wXyqIBAjx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMy67pGtQhoSp3bOEwKtwDTiAovHeGkDQe%2F70wPr1x2n1R%2FCcx9lNcueyQlz%2FBM1rylhi2GO6UO4iSoYe01trN%2B6GxE2eRHcnsfD6Yhm5Q8u7y%2FyXWH2knU%2BGBSNyrYfuywwoCaTA%2BMcNIKG1vmcZA9PAB2CryXCNzdpIqNkHhU2dbTbe1Uj3%2FYVQS4lHmFL%2Fpu%2F%2FXKk6Aad9I%2FHD9Mzfcy8c2p7X2R37zip6xT6si9NQ%2FT45NE49idpzUraEgiv5wMLsnbgVoMHoCrbFLmQHnIU9HqnpCmYWP%2FSPNPv%2FCrPHPS35xFe%2BfMT50fF%2FHqwno7zZ%2BrforgTqSOTBPNYyHqsPYrnNP%2BMRg50stVpy0TMJ%2FdAaHF22yktHc7kzUgkRaegFKdch6zukXsdupo1KQaYwifigSx3nViZ9Dj71nf9dlossDNMyCo5%2BDXtZTrPOBNgVcSR4E4xuQmVBRICelacMXV9B39YFAduf09sVMDiAZor3NrWZZxoGlqGsm1MCZq%2BTEDPYEPIiU4j3UAB7LbpyOwxMKc4NPExoYD2bMkUWriTeDrkxcK54rrW31P3fRS%2BEjTwmclfbaM0kSUqjkyTH1kcUEqqXSraGW0EuPIdcMgxzfQNlsk5wOIlUkoi%2Bwa7GQ%2F%2FBmKFmBls0wmqHoxAY6pgGMEfiXe14u7qvIpiEa3hx7cMkaUDbBROhIIU7Vnplpeu8c13xfuI1BAUc7vGDjYds2XNxhOPCZxwysDov23aYWMIzpU5EDvEfGLJC04Li4FVGP6yZdqHx7DpkAoNhrDtYDbpncq%2BDC3iPm7d%2BCmv7cXxxoj4%2FzXlqsdJkSVgl8QwIf91IxoIlgwefTWOdi2KsAxSP9nHw08GV05yClPEonqqrI%2BOcS&X-Amz-Signature=976a2f0129b6c57e9549ad892d946847020f5bc05c89c813cd4d4159beb2cd1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSPGDDP5%2F20250811%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250811T161137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBZWx8mwbd7HaewA%2FcLkLoJ%2BRJuW1Ucwj1T4c%2BcZb5F7AiEAvRAhvsM1F38KW%2BeKg%2FLy8K2mr0WXQgEFDUmAHemWv2IqiAQI8f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlB%2BKvFL2o9R4ubNyrcA6CpwDDYS5isThYkwlOoMw%2Felq8eLw4Wt0x%2BkYNvsT8N2RcTcn%2F0eCWlB1YUpLMf1Lm5ZRTRDt5wiRFSMoBWdvEyYOy2hJEE0HvZ48vFr39aX3YIbhg1La7LY6IHURpN5qSf5rtspF4LUTyWS%2BVSKx93fBaE%2FZgklKDBjWz4asLhgOZqZnL2PeYhcw6zEjHJ4TN4TCBmBvbJsRWYnQw53N7VUjH2t3zJCY0BB9RhfqB5mDWKGmTKaXK698nyxM%2BD%2BzgIy4uYZBoZqxGU%2FPxRMcVCv511ExzgqRbDpUnFH8c6aVUd%2B18M668OrFKyNYFoQ7TiPk1jfGjHmKU8CJLDDUxcJEjuvaXn%2Bvk%2BSD2TbUkBMMtxk2elC7N15GzGusxkSk9O5qBBqJIH0nrSKSYrCkd4uJfbyeI7clFc40kTXf24zq%2BqXhAEAAnr%2BdVyu1y3f7XG8RlitNyCJyAmUs7U%2F%2BDZc%2FcrKWOe54rkI73Sm%2FL8SeZgde28OFHeyMOXal%2BwlB804JTFNSXDCXxcGk8T30L9BQ0S7%2BjlhmmvTkzFiMk11LACpRf6i%2BaZNeS8gqIXtz4%2B84U7DZVvaBaj%2FxQrwzVnYA8Ic0wzfOG1JxBhDagIzzPUoFJ%2FHuDQKJ%2F7MJSi6MQGOqUBK%2Fp3feXldisjayiMv4Iv5%2F5gBsoWjhS0MnqPkk%2BdFeNI4RlSwMbk9Q2xomSwHzU%2BmTfS8rqMiQPO%2B35Ti5hL1MK%2BtKFIm2yBhA%2Bgtxh7kQhZE2tOFObn6mKJg51gODHvVAFqvsI1IuLqXhMaTvFdsfL%2FZM%2BwEaXivthC8q7ckyCblBtNDb4sk29yIIHRn9b6njIcQN6U3hWyTgIUgQzK80del%2BGP&X-Amz-Signature=515303c20d19b39686c3862dcce9c3cf0c45a44875c9ef560245fef09f69cd6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
