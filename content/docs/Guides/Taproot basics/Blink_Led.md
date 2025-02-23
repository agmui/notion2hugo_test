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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QM5NUGMO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVRXXnuS%2Fk7WCI1onSAhvvnMBh3Fck1GBZL01prGDzwwIhAMVIypgsDvRVKtklnNz6ZTOROlx5g%2FV8EnaNTmBNoOr9Kv8DCBkQABoMNjM3NDIzMTgzODA1IgybYYn%2Fks%2By0qRmq%2BMq3AOkDlDcARgz3f8gSVJj5D01RIKfxiCj3YXcyLycmAnJG0gtmZai7rVenSTwFUjtYyFFwBdjXankYGRPmcl2zmetGbAPW8WgOsLrBSGR0YYZFkrmHpQ%2BMeaHmo2r4lEjkTzcSy1L0cxI5xQrOkVfLlIHRPGRDvar1yBWcuECzDDJBhwjxojJL21IAaJFeRwBnWfv5%2B8N7KcKuQUEQ76iSuwQs5QCS%2FJE3AaK7MItzunyn04kEIaaP9z1nTZdK4a27ucgS7vaUybHFfc0ukidu7p564rky6drAQ7p0XX%2BJghfon6B7ypBPIGxeC19bc7WWntU96dRw6rrMMFkiAT0zUPuZGiDdT0jZMIxl6P2EKkdJ4kSY2iRzsmMSMoSAzosU5R7wXFw%2B6roeg2W5snqqUI8wqtcSAKrDl%2FkH%2FU2105J51UCMXCOJmZWV6FTknwlmryhYrqIPV0od%2FIpJFLHJJ9rdDIsaM%2FjmltqiN%2Biu5GXnSB5ymclcAop7IicDFNqv5rmZrtA5MK2PT9VfLFjia0IdCMe7MiTNiFOkoS5h7uw2tofrCIF0nzILke7HPHwzVVqpLnmtA5bSFKPiUlG5fWrvrBFEuV%2Bh2cZJR1kszTBZRCMt3KhRCL1AqNP%2FTDFi%2B29BjqkAVvok5BlkOxvQaEMnTf5EROC0fEspM6D5cpENi%2BXnu7E%2FTPvQEzHTVaxHtZhqvoTtbF64%2BxP5z21odkk3vouPWBBEdt5SPaXCFERwowj2%2B9DxTZ1wo0o9dmXI4GBLAHwSoFG90hp%2B1kU4qct8rlV%2BmmTcXVbGOW4jI0m9j1aSzsEJHua9j6whgaTBauzyacikaN0oQzKU2oE3EvoEPkPYmJSyGA6&X-Amz-Signature=a09012f4488cc36f380ec2587ed44cb40d6602b230b8521497f1c0e720b9bb9e&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y643D6UF%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T210108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxbWyrttt7DQwkfCC7h8eWd%2FovPPBY8K%2FmUWcMYf3F1AIhAMEFG6iRAIXoKPRGFV0uGqP4KFzgo1l5DDi7h1ZZ4Qp2Kv8DCBkQABoMNjM3NDIzMTgzODA1IgzOyokykl1BXyFijY4q3ANSf7KtCP0ZrWbYFS5dNKLlvcPipMEpTp9vhXcDhdgBq31%2FbJp3ldSiGqGyWp334g7MPWDS5Pu5i7%2FqVMj73e%2BsM9O8KIw3MfzwZzuMJO2a4EzXSqZvm8PnMNKdcFIX4%2FVZFqmMlYqUqgQDCOZ%2Bwb%2BVfKIAy0p3bToVmpsIMjKuLyPpY493k1koJr%2BcjyociSqAiJCQrVuDaGlI4jVnsMJgTvUhifKYcMTcgYDPC6nmKzqewy8xcuYs5ZfxXVLnFOnfhGSU6p9T%2BV9Igx8JMNHh6j3AA9I0NdFqexncvlE9P8nDNBCSOHdhLTRDI4VO8PFgne0Nkh6u2HYlXBXsUI75CnZqzbYcOva9NdbUZVaM5DHo9vT7OUzlBnD6Wblvm4kmjlqprBanGkgY%2BjG%2BaSyZd0gd2zepdqkHaHZzrjryCQji1uQS0hprxAw6lfBHTv1gFMxT%2B6%2F9KECBx3Vc%2Fag00UvpteQKoXFIzf7SXDSc5AXiTsVOY6NFnpGjrDCS%2BJbxFi3CVueR294nS%2Bh9JUj6MBpAmALwIq4nZPJqt6Gb9CmSwK%2F%2FRN8XvK4%2FzFJRPJdhVhtZ7U9IBQ02E8gKpH2l3UzL3YH42FPDF71o%2Ff%2FfYYoaOhVik%2FxZVialpzD9ge29BjqkAcLwsd%2B1Ptk7OFXVbhCFTrlHTMjZU8TNmBNFgIbB8MWYs0LRBEXl7YWcHEfcZstbD1vgaEIiAQEUdyD3aonXCyqUU9ZwfkjPCk1ABa7Vbi7IrklRPwQj5%2FNwjDduQyIjPcMYjMv%2FZ%2Fi2KJ%2BURzGQIunkiuFfJ9kwc29YxhE9mSsoXXR%2FxMlPodmZ91vj07%2FfBWv1iwEtTp8Pz%2BzKVBxOhW0bunf9&X-Amz-Signature=6ba939978b2f6d49be7b4716aaf6477dbf056561bb2e2b82edf2690a04b4a3fd&X-Amz-SignedHeaders=host&x-id=GetObject)

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
