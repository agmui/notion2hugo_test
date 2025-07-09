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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAASEEHX%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071113Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCBm78lC7RnI%2BFHJQlCRrg%2BFsLEfDTqdDxCUFWVO00b7wIhAP%2FgjMQ%2BIv%2BUr3nJkEDUPeLOnkQWU%2BFwG74aBhx%2BjQj5KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwIoKb1qQn7rY5FidYq3AOZlwUido9BKrGXNWTA2GBYSfDiqlUAgGA8u%2FP1vrakdEC8g9%2FPm79j%2Bgqx%2BREnc0su19i6wBm5XRFh0Cj5p%2Bj1y9za0fgYqxPE7TK3hg5b5hxKLha3EBkbO%2B7H1zuj5YUK7Gxf9Yw79X3j01D4KKMLLsoApJdtlwqlHo%2BP%2BWNXx9zLw0QzDbfl1SV4rv9alUY69idRmg58a5FtrFNeqDMbFeQP8WXceIe0t39rCoyFUEfULLCv5nv8XXzD%2F6Cy2sdKkhZQ9pIZFXQbJZO888lkspREdk1OKifOITk%2BNSd2ysDMjK7ZGZwuuKoPQL1EFhW59%2Bo%2BZ2Qh%2BefWktvFBIxap8oaebH6%2Fi%2F6tcqwYheu%2FtP37Feensq3htAOdfAxfG290PuZ1jsfs%2FrU8TJ7nVIpTVt6jRXj7h2WvCqhDP%2BHG%2FpxaIICnJtvy56IHj6vwsT7y663sebeIzmlqKvN5poV37vpjFUkRGD6fNjmDAZMwiHbQVze0nc375CNyOC7jZhwcPCEgCfmeQVnHeRIGXyBh1vQFbshG%2FKDwuwdnm2UBLQjA%2F1s5uwU6JLiGd%2B5cGUoREJjTiIUiLpNbkNpwjEQeGZrLgY3V0NtIhaVxPiLgU0WHCgmwIlzfG1%2F0zCmo7jDBjqkATBLTwmnNRJ1TTGZSL8KlvqzvClv%2FHvq6hD4gAR7oolpThlPcNFl0JcZn%2FdbeRhyR8uGuUIAf%2BQ45J%2BzG%2Ba3ky0V8bb2fmj9il%2BAz%2FErW7kFdnXEcM08orFzO2ffeBiedMNAD8XiLvczF%2FN0Jm5PBw%2B6i4W%2FCso1WmJ4MET5RrGz%2BchCrmr7u4Ye5em0f%2FD8l9KeZ3KUISiiZWbIDDqQqNSh%2BIOc&X-Amz-Signature=28d3a83ef4678d21858f386ce06c2114a77b6d7c5cf6f1c0f4269edbc372dbdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664FYAVQ2Z%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T071114Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2BcwF179MdcFnRf6PZAASDEAoAwd1TMm%2FZrlX191jbdAIgaaKV1DgBlz6eSxZYLzimvOHfyVOg9uHVxp10GZMbcKkqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOdeVDBuISXfiSMcFSrcA4DpTXZzKP5c0PsNU64HxL08dyVk3LTxfTIAgj%2F%2FOYvA%2BOxtZc8svUSZn7vu9tCBUCyqrAbRgnxrp%2FhDY1pBVE7Eb%2Ba6x1wkz61eHagQ%2FSiYiZRLIFzTE%2Fcm17NM%2FDoXeT9CYEYNsJIWhIQPTOw96kpQZAasAtbl%2BF2f1vHnoyQfDRMUEPUsukCnh7u%2F4Hf1z2wFjWJ7Hp2qarv%2FOz3WCiRIAKf%2FtAT0%2B9c1GucctVp%2BKwhq6ViqW927u3rarxX5Xh2cri4q4fpHYf66A8XFgNbgVi2q767IrsLMBUF10jzOJkhw%2BK%2Bz2UkaocRKfnlVdW6jRs4f1VoSbZcc5DAtP6i3w%2Fw1WUb6EJjlGr5qx9%2BpXy87HL3Cs6AYdWHra2rdnWv9kyJxxvd4CojL11DjTfcbpPvydsxdbnWzhvJW2eP5jz3mLBlYzvI%2FJ2dbqa8%2BH10TOyM45MhRj4CknmUEGZ2Hdb%2FujXP1QdnqEOs56MIzEr8qw4dRPDbrEYjDRHlJ9JaJAggdyLZyIGLbOZ%2BOQyIhGEsgzGix4Tkgl03FOPLPCxxsSwNkxbmMthLU%2BVilzRxvv4VNHP21p9sefmh5UED9%2FxmpkzJ71NaNNKfJgtMCt7IAVEDZaGDXkkd1MOqjuMMGOqUB1CaKJle3uGRysprknqkksPOzm%2Bv2xFpPOQczOnXVLQ3vhvMzOyilrds9wvLyEX%2BKYFeb1bZOUy6QuASFxrdW2VL7pzOs1V1ySFL732qvAO8U7idD2xi4sDIVSYIQoqt1SBD%2F8AHJ5wooMZnDZUfsWHxPm%2FQC9NINXfej3NJT5RTwddk7zJC%2F4FIn3WPaKWK7OI4jq9z1DFCnGGJjYI7gJo5SFKjS&X-Amz-Signature=e329cbfb59bbdcb15aa3d15bc9ae769bc6cc4c2c31c08da9312155487900e47f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
