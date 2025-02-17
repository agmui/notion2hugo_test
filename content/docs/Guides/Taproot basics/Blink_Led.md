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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKTX3774%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIHLaKM0ln5A4yccRJcl9W4miC%2FlHyEg68Y2yBJYerTtVAiEAuAeCFcfHAbERdi%2F1xI2rQHYQQ9g9ynwaNrm4gZmM%2BfYq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDCR8YK%2BFKSOixES0nCrcA7Z2lQIBCLd0Pc6%2FbBWWPVrBTzh4rz9VA58H1FWVT5Y7FuHXOBoDDFxIdjM0Xt%2B1r0PcWIXBy5cVI2IBfyStlS5TKXDnhY2D0RxlLg1id4XaPJj6qHxK0nrm%2BRy2xDyL%2FXL1T8OBdrYtJx%2FTq3410e82jtUy41UG6Zx6T4Zp%2BVXCxHhoOcguSVqIe9WBRgib3cmizAysK4CnBObeDUeD1k3gZNUk1JAYS0wU4MlF5xPvyJ6mRnijoQX41TBoGdjMTvHs%2Bhu5Z4Ov4jKjvFqNVkx6DDJx5hjnkK9m9XJGa44CFreVrkutvY8%2BU%2BNSHUIBhC38WljDzmVRK8ZytBzwQIzNqFCWAUUeunPUGDAXwKCXDOKvdG1hoi8Au5Xs79A1iIss13I6b7WC2B%2BDb55qFUSUViVe1Ya04bE5LgiGmckGG5OQdnFWfozOcxcAocZe3he0A6KVqOpuJS38KiDqKh%2F8M1wmeShjwjj4eyBXA6fB82TDG4N5UNubtFzu0T3WF1MGbh5fZih8yehI%2FjKbyTI1i9ekTPp%2B4umK9Ezhnnjw1qiapHNqdeeEd5PvSw7ZxF9r3v1DxPtnAgE7XYin7lHb3CSQGDSgilHnk4ZuWXwhOFuDMFcGnLEqPTtGMN3rzr0GOqUBRuy6SvpSbq6N8W1taNKYKD9kkoveoC5HU%2FV%2B8yMVBCg3mTwBrRVnlairXoOgw7KD22lHIxh6eiYr0EyiEMb4N8kiRfxgv2h6d6Nxvpr566DLWm2KoNDVGWatYtb5J6WXxf6rPEoZ4fHU0h2m%2FxDydyDOy794CpB0SKllwxFSQlmGosPiGGbhDm0M4Ql2K3oHbflNYTJ0%2BJPU5%2BP0qHdll6dPVWMf&X-Amz-Signature=9eaf8c9486c93302587f2b8d692f3199442d5a34030fadd3c7bdc1329517a848&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYXWVI3B%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T230711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQCxOQd1WmhOcoxLuD0Uepxwul05vRFMsn2fMzYbIv8CtAIgAXxaZKbPZmh48JJcgiArMDEz9LYEmuOXe6purkqnPYgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDGAzEJ0AdMBGG9SugSrcAwZc3qQXwU8WRXD4F5iCo52CWJ9ZFaEp1jbfIXXtvHKZp%2FuxFbaSoOkOJ7dvXj7RZMSCHohJzSeRns7BMPsplVGmLqpmEnFJRHEqx27u9CY84VdTkMkmqMPRPTtrRuBQN5Ca3FisItS5DwfRSoVBwa0vRce%2FwP8bUvs%2B9xulUurg4QCSKLg2NvY6NMzBfsQCtefioz7WgCQUgKItLx0pAHJbxIgHd1NCHcnq8E1mIGH%2B8bq02nHmhH5G6ZuWC49T9ph3CwafEh39GYBhY0z5fJqB%2FnIfO2rAluazJr455kK0OSAaQtWJLxn2TiYqCMIQpbNVnUQdU%2BzTyQT5R5fpNxB2%2FZG650Dis8txvNw%2F7l%2FK7m7cLos2%2FCwgY4jsLKgfQa%2B8fc7witrah6ytDT4K2TErQws%2B9fgjNF2wXMvj4jortOkc0T25qO1npjEbio78eD%2BxFjJ6%2BlAwaMLZ2JCmkzWgVf7XDiDL7%2Bt3%2FL2%2Bb%2Bc6NII3DhYD9Adx97aEy%2FmKsIJarMGx5Q5xINVo8Ck3ExQmVu5%2FN9pk1nTjiFY6xHM28tYgQt2EmWqmaPGhS3AG4TqCboWFIW%2BcDTGa%2FKHJV1SMspFzOqTrM966vEgcJMy59ZOtdHadtTgCyIsXMLfrzr0GOqUBxKM2z%2FvsM2qQtnO0LdkaNQbzUwPfU3RNq6f7W4eqsCNPJCYnj9UG6op5TWPzIXvMpqC6sbkggSY1PiaU5BnMPX%2FhyDe3oqxzDWObNfrxeVBjUaejT7%2BRa1jYb8k4etHDActpyHoOaTu4dAjsky6PV3T2BtuZ7SW0HQIO28wP8euJF2ZbleZNox%2FFqA4EmsfVSJ1l1aOuGApv51AjjshZO5XU0nNh&X-Amz-Signature=8ea4f4234932a52fc964fc1c042ce9cd190b98d7a2cb14ec217c27db9b5ab836&X-Amz-SignedHeaders=host&x-id=GetObject)

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
