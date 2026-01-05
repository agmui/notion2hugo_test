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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGQS4IBN%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCS%2Fm%2BxOF8%2BjcVcoBPIKaDliWKQ%2BExxnYsepLnJhBPOkgIhAPUYutpBOmTdR%2FLy%2FP3%2FcdrsMV52g4SvhgEEuEzpBDWvKv8DCDcQABoMNjM3NDIzMTgzODA1IgxxPcJ5Hoh9LhmBz8Uq3APRzimyoXAO%2F79CkyDOTaXwyj30hLeY45qUHB9ZGqN04LkuJbWt3eNBZUHe8ktTPiKEMb61QO0yQF5je%2BRO%2FDc3hKkUEXTiFSjfLHP9A7m9NF1VjPhx2O8sY%2FeO6rFIoTS2Dmd3vpFz%2FhNz0VDHvlO4BhDgcq%2Bao3XZWtlVZDo7uww2mSxZAirtpCXNP1qcKIzhyyDQ040RSl15frzzF6ryfV5Ygbr4qMIyDHJr1Zt4sMX2zolx7%2BggZa%2BhA9fk8ZmID4wVhdwDXIskmGsDJjEwkNLgdeEFKRYmKAOuh1ld0Zm74h%2BfZRiMs03g58%2FLT2YR6M0mxvfzRzsOfTu5oYqcN1ek6yiV%2BxoVYBIKvsftCOk0Z2IfNUSJ%2BrzoEyZFaE7xxloFiJpK3rUtsGyBYBJp2LfE7X6ran7DkC6Gau1K7MvBjnmz7Uv6LQwlWsiybpwwlbXAVlRH3LkBcpFJdW0lGRWqJEKWQth4iDTyRSdN1lL4jy12wB18eeB6UgqAfxIBGGMJcudT13izQis2iabiUBfRzMiPsVzMlZ7pzBKw5SRuB2rjXjCn7wdJrPgKDe99WbmNhdxDgqrzAg2FPmuoahriSx9If5YGHtvEqe3KoZnUVCb7H3uoEtPyQDCrxevKBjqkAaPwudxY2dWwjdaqIClEeCBMxvKsI%2F9rsmDpPWCHnKp%2BkwW2Yeyjla%2BCGOdZluhqLg%2B9eDmjmSqPrCyAHw%2B2Vz4kvherLf243Ll05Gv6pvJz4Uk8mLK6FKW6SfBoxB30xlzvZbhI2a61IfR%2FNchC5nZTzL1mElLg173PLiraKyMQC%2Br3MYmbN5C9u6CdQuJbPH2qjfmcuW%2FsEHj4wqxHl%2ByxTPe1&X-Amz-Signature=5ea0d1a96727cd92f1e2c7382757b2083acc1df5ad40bf85e3282286651431f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SD7YXVR5%2F20260105%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260105T015700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIDRhIsLswbQQLI0o5kawGx2JvxQIbMUZ%2B54FEp3lEHT3AiEAhZOS%2BDdCp2MVJh%2BixnZFjdRE9Evq0Vd%2F%2B6bi9NI8mfAq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDLqzQ4hKsVsJ%2FDgGnSrcA3V6n1ZJM6Pe%2BVNejThPtZHKBXk8BGkcINECV9PUYFrZhH9Osbi9DBX11zRIv0o58ADddgfuyUF6Nl48PL12Ww5GJvm2ttDNqRSqYj3Ath4MQYrgCJfHb4ATHSMFnoZ%2FqVQbquYLeDrxOyQrJseHP59BK8jSCLOGZANCoQin1Zhe83HhbiRkf3u2JatIZq%2BnLXgIx3MACrAiWz0S1w7qUoKcJpUNzMltyQ7RyjrMLMGNL6VF0MXUiTAiXR6goPd1XcFl%2BoPaWoSbHR7C1XeLLitFvnfmpsE0vBEZps8LZaycnXQYJZjqlmm8Qc6CH0PK52ijhOIpDpzPrWE%2FR03GXeHRXunv3ycz40AIoMyzXEri%2FjLJajUwN90aVArHVqCODfNvzv7KPADSYl8Dg1I82KZSETDGd7Qx3kr0PAN%2FOyf%2Bz%2FbTANOJH2zRQqhHm3HFYK1iwS8uLMiklm%2FN7CMnud4ShmSCcqBmwMNj583yuruZUqP6dWW9CWC5HM5nN553bXi8LIJoqsOX%2BMQuJSkIDgWpH1JOAzk6AITz8S3m5C9Ki3gX%2BtMXac3e4rwZa5TiUZrIeZ53Ltjy6BSNej9VKvN9muTGx6jFy3BG6ikGtBshcHZICu9hOaJIotbcML6668oGOqUBhG8bWqe5RtaeQuisBVPaYcQ559Mmp7q7%2Fc8WLF1GJ1jrtHeib7F5JdwxfGK5ZRXC%2BOJbHX4dw40td0r4112DSqRDTjiKyp5EGhCrXtBFZEsykVG2Ey8A7riBjZkzyv4c0Ne5WXwwPCIc9z%2FCIa1uKgkyIAe0qE076Tzg1RTAAp4QVa3fC5yBgfLD4M1y%2BjMzn79e5R8ybzVhJknq90Bnde51LaGA&X-Amz-Signature=294eb24dd45deee7b0df21925944d1902bc9dda3d0ac2708b82d9c503107486e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
