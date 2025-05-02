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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XL2RH564%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQDbeJxYJcPlanpmtkBvgl5BhY5BSJHqNKnJ45thVzSgTQIgBOVepLbMpENwnG0tQjzKNYu2eCddmAV2TsOGWoHqR%2BUqiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCR8A9sYWaab%2BTo44yrcA0s2N0wjuiidzGGtI4M8kzHKrEXqP7MF62aT555ZaA8b6Q6PFYv%2Fgf%2BQBTMjpYUjnCDLQVMa%2BMMXYlXUS3RINdfwfmmzwUZDcWyhZT53A7xYrvjY6FHM%2BdQVdq1HT4RwLd1wX30BrwkZSeZuI8E7mLrE4NxD4Z%2FO9cJaS2keuDJYjii1w13pf2mPSetsjQEaU72HP1KejaF4eaG55zowxIt4g0fmkFWSeSeo%2FMTHo9HAUcNlXlrcVPuDWScQNCVsgi7bQ7i1cDS2PgCyfJFYR%2BWxvtxWc0rG9OIJRpOPj9mYGYNDSul%2B%2Bwn7EWDAbWmbOA91HthgIay8rn05efDL2ryXE92h4DeffCOg6bLQNVD8PqkEjAV8bl4WY5cD1tujRiBA2lBPBXlPl3gPxnHrH79JFuPG7qC1p7jFXva5tLU9F2wCaASv2hM3NyiKxV4IlYzMxSPBho1cjXRzPRV%2FxQIcogMCjTfmfzEhdj0XZVriy0RKzegpnGm9tXXg1DXeQFUe%2F9z%2FtoNpttTn1Ik0gLhWfkdVj8Xo%2BdjNDV%2Fft%2BWqHH3rquhtuGKURCQ4Z0qfOZN%2Fq2FdqgaRlvNLIfPzVMUPrJNc6T4j6YraeA8H0FHve1LQU6a0CJMkflqjMICp0sAGOqUBQ9GnrSh0ZOajZHeJA2%2Fykq1snq%2B2AEjOVOzsYEbjb130cgQfu4vypRqe8HimTfyrPbByL3wKOiKeloNfDCBYP%2FGMDHb2bgoUQFRkEWzM6WBxdgGbRDlco2crYpJ58LtLDmKN4Qx%2F8H%2BAX3J4m7kiq71Czw6m5cx%2FP2e8rT%2Byhz5%2B7w%2Fs0KhaMj8v5lx5VKRSFzzMCVJ1PS1GsanWq49GO9fZQQws&X-Amz-Signature=ec27cc652930c3d4309b07339d7d4600474dd8af72786f3f4d18f02970f7b5f3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SHOIY6M%2F20250502%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250502T100925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJHMEUCIQCmE9SZ8iVzdw02lfa1%2Fj5EzDMRNcvbhwuahAantpVN2QIgUTxBwyawJwtCC%2FK11F2ITurvFKNUqlS33wbSNP9IYx4qiAQI0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLG4q4gQLjITfor46ircA6mhZkgGXRFP2sQ%2BRV%2BJN1q6KixTPM5faZHWgkQkLQHCAgAQrlBraj5nUbj4xnO%2B1YF0ux5b0PVnNs26hkhNhAbF3PIdy2i9ErizaZO9KvW8ce%2FC1XqIIc%2FmqniM725m5lE%2BMYUQEsnTYtx1B%2FNkedLOttUsm11%2BLn9qhc%2BkEJk8Ucm%2B9%2FaXTrU4%2BUEdtTNA6f0ohXOPmAHai4nDLU3L6bQvgvmDjI%2Fjba8%2BV3Hc42myzElO9%2Fb%2B73I4Co%2F%2BmFw52cFuCKs5k8l74o%2Bxfx%2Bhd7K%2FjbCmONEOyjHenUOb6dW0NG9bkH6ey7UohQA%2B0IwEI3wMRdrpqkDkHxolUghXhmPfYvsITNw%2BCcvyNjhgAZJL%2Bv9WZxr5AAKYQ3dyaA47FMQGP6fn%2Bj%2BrV4UL4Bva6MvXBZDcm5r7IelLvlveldzGgE981Co8YMheG00c2Gp22780cceqaoxoq9ienkYAxLY6doH5pb7LzmyBm7nb7Nw9VMSJA%2FmKa5foYzchYjoVLhWZR9KG4Ckc%2Fc7iTSBbHSxRV5%2FehBaIXsqPpMLyNCkxn18Xbc%2Bt92SFgqdPIz8MdHNOtV77vg0dwWJK49g6FwQIZdgSFMqC17qVfVC6yTOkiEYy%2Fzav4PeMoAGMMMOp0sAGOqUBD4lzNKMK88%2FtPrWbAd9q58NgXKtUikHCgEQI56FNV7IZL2Ni8d%2F7XDL7FdNwyPS4kdiz99FiPVGDmDRKuiufhuJLgjEenJLLH%2Fxc1cy8M8b7pmQyeqhI71jZjfg8E4TRnmuUVREl6A4pFK1cvcP7%2BC38HxyEAiZLnIeHZfeV%2FZFxolvgQlwsesHxYfp5R9ebCvmlDaj9Q%2FlTUn9w37P5yBEetlws&X-Amz-Signature=b1ac352ff55f6a6318d223c8e57629cb6a1b6a1498c1560a38e8abf8c958ee48&X-Amz-SignedHeaders=host&x-id=GetObject)

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
