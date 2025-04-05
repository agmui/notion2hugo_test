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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVNP6HMC%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5OYgwc89wJBP%2Bh1tUVmLoJfE1IUt8PrYpOZ2YgiSrAgIgVIg8jIj2Q6x%2FD5F226wmIBSe7bxIqX9MMsM0FiAy0Doq%2FwMIIxAAGgw2Mzc0MjMxODM4MDUiDJbwYyGHqc0bnSC83ircA9b0BkXe4awQpCZZTz29iFBJ4anMo9jZQ%2FAXKRHs66mom1Z%2FjI09PQ2%2FVWqpbtFPD2iHSmpoSyXYr7bnyuOFTbZURiAX0YJds4Cl7ht2NLwoCc%2B9OibNczu3mXF4zfJw8sYr1KnNwrZT4XUaTzKGN%2Byze4Muo%2BD6uDE3OynRVGYXFbP5G%2BFxX5chjuaom9A2wNP3eB7lvQov0gmEkmfEASnd%2ByFYuDriur5pXc%2BHp82I6%2Bi33mb0naYjzG9PQXbw0SoeKMWDiatP2zsUNE4Osdqiq5hhUit2kVLi8z2i4%2Bvl7rHW9rhMY%2FKP45sIgqni1aqs7zwTy0y9%2BuebPG1K7x%2BMegwl8C7JFhN747xOsxTX6I0b8vVpRidBKM7HxTSotbE1OyW971LzUp%2BWjouiPvb1GZG1%2BV%2FAeBoyAHV368pLmrijch6Q9J8Xilz0JvrZrx9n%2F06oKzs5Bl2H8UVsSxs8YzNG5%2BLzk%2FzNtHjmfElr44srhv2AOBuAVDURarZejP6Vvc02duOe9%2B208JlacUCDOPSHU%2FFpd9RorbUMuyybBbr5B8pAKa9MOCBMoe9At1hT%2FglbMKQjWcE4%2Fs%2FSZkJHX96wPjgjIPyeR5B64B9IHR36HePLMlC1PYShMMaiwr8GOqUBPDhenrt9LbwKcO5iM3N8KAxpuP2os0%2F2Yh1acSzqblolczCppEXj6WHiFiY1LBEwBqKI1s%2ByB5RmD9umWfGrAiCIxUpcNRX8LkMUS83NhmYO0Coekxeb1GzBFrCVs5TFIydudl4QWgwnxHs%2FtPinpKYws9WqPM1NA%2BSI3Nhr4giiR9qgTRLI54xlQ%2B4RoKyxReIc0WaC4gpcQEM7UGRCwxgTgOZW&X-Amz-Signature=b95a7a186089434a8936b7fa842c71b93fa62d12fe1145031d174cf64f4d6de3&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTJWVNY6%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T021602Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZ4F8g14OfFnxLeT9QDRuSEzG3l8W1%2FtNXkX4m0tjKHAiAYRCHcCpxxYreyoHo9S9c4VsBWezguUwuu1qLRwPKRqCr%2FAwgjEAAaDDYzNzQyMzE4MzgwNSIMSiEJ85yZs5xShK9eKtwDVB4QuC%2FEsAACNuqJXsgUyrJ75VCNgNVFd2KHNCashf99oimBvFXsLgwsgdKOHAHOAlD6D5LEtGcwDW8y%2Fx2wk79A97Y6v1a7EJIysRbdhcXYi24A0ldtbihrfABPQ7kdorhVwV7AktP8DEWofm6CFC6BuPod3wjLXP1FrUavPXzv%2FpINh63yUa%2BQHJMt1Ei6TVc18IwEsEM8vuYMVeV51mxJkrHarI4TB6BtTk9A1ad0QS5EsXc43p3JBY%2FvI6ssIVZqMm%2B7FIk%2B5SzE%2FYshsEMhBkrRzswEGjT61HID3XGO9tvfR6mZIOiIoygdN7oqr0hddC5nZ54MIKoQBT2%2FbG%2FxCqsLkZiQi2xAqNYmx%2BbM%2FGGOWzJ2AUZclPyCaxcdmcXOx2NuZLbIH0yeQ2FZYxQL81wv1wTWbPzdvm%2FOuDAngj0g%2Fd7KOkQli%2B1TbZogEsk%2FS0GBQjEs31MtR2fJ8fN8XBurYFLhE8iIurr70PiSkneJjGHnlcWNnTTPvEhwtC%2BfSA94qOA%2BPCCg26FMjBH3GLeYjufzEtMDx33WglRpKg%2BCuDPmMyN3flOyA5d8LdXLLXOppb8b91HJmUYmTEmBGPdns2hm7fmWVThqtpPzh%2FgV1UBwrv5w0yUw6qLCvwY6pgFjhfsdxADChrmwtM1yQfVRM4nHK84xNBwPGyFxKgNHFhbDBFFGhxU5PF6x6m7o%2B7cxinEDTB590HaOzOHSTmISQoDLAOtjmuSwk%2BfrceWEIvCwyvqYTVRl3cMbmYzpoVV54vMMCcuuqhlVM9pxQlC0rFPpppn35yT7jnw1wLJpv2fEhJnwbV2WzrcZmwtDTCujXb75kfkrvQGbQBGuu8xfsZNwe5nC&X-Amz-Signature=652700575bb3a47afc05a6b5064c8142a84761c3c6e200b51607cbaf5051463d&X-Amz-SignedHeaders=host&x-id=GetObject)

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
