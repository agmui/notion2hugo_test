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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Z3DIKHV%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgRActhfE7edObXyzdre%2Bapg6Qg%2FZ2WFx7v4jIxLLdRgIgQE5sMZ3qZsgC%2BuaCSkDL4fgPXEZoZYYl5Ggm8%2BbbfEkq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDH2LG9L3zZiQqPAJzSrcAw4kRzmve%2FAthnzZoGg3CystyBp%2FVsDSuOp1whosEsDBTfFLm8Jyd3rC2y%2FIq5w%2Bci4lsOP6X0VEfTV4iVEUyptvis5bOcMkfnTsTVC4y37lobrF47Q5ulHx0noZVB2RV6saYyx3qavTCpcCgYoyGcN7T5gW2iFNOeSRfw%2FP9RG03kE%2BRj1VjwxpYX28U1fwWYaQ%2F9VFAkrkuX%2BZVc3qhekvLVTRQzU8T%2FrKuR2yq%2Bajptk483ymwtjP%2FxQlpFsplXal2cM9ahMMdh24W6v%2BUP0GK5Kn%2FP6Z%2FZLtvsIqn7QlXjWFui4CMfyKTUV6ONxLs3zPABkgdvec0rrX50w%2FJPqDPVaUxvotQCEaM%2FAmgXgkPZSeFRyGLVair57cmL2wMYO9g5wvyGI9cguhtNr0YtDuPbouC8iNEADaHiVy3NN6CbASFHi8P3vFBhfkNKaqIH0%2BtRuEVeyoeFC%2B9h9%2F1xpXGBnilDUEs8M1z45dI9FXFT9bD8RKz33ITInR41xxwacOQaV%2Fw%2BK7NDwW0KCWsDAW8Q96EZ6J9JzhEXU4Jijs1C0tEn%2F5xHYSvNNxvKwJu2jrNKI7hYgjIAHjSpMDJ5UzCQz%2FxGgXVWqRYxfi2039mKsPJWPLsEo4Mu7lMJSHsMAGOqUBFn9r64LjQ8a9uEHhTODojsDIc0PSZvCQCZOxo5sPl23JPrRljsVb6%2FgV6D2PeUo6fW9oNULCWmzEV2aAvjbQRIHCTute%2By89Cv2IRdyQDVj%2BqgoMh8gKNWmWFOkz9eNui91G1swqvy9KFnkTrJtXcFxGfKHyL6xLGW0%2B5MokgY%2FbnJSkg4CQT1y71Fgu8WX9yLSVxtl%2B%2Fc%2BHFxZSjh9ON4dd2cTn&X-Amz-Signature=a68687f0202724daf54ce2820a3c2140af5e54b53b626fe8fa63a7a16cb05877&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFLMGII6%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T220759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtAUtTX7brZEoOqcHC1gRSfyqv8PQTjf%2FS%2F2ODwb0TzwIgTOMGV4GD1Wm9TKmYrtTIdHY2bDuZj8pwln3bYBWzxTcq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDOMTtqhzS%2BVUmPi61yrcAwS3o91rs072QVolgMo10vLtYmZXKpwvoTJ3s7Wp4t9eriL9Ugmz%2BGeYIpjQ%2FBvk%2Fw4o%2ButLlZCp8%2Fqfbq9i3vhFynwIDbxx9J2j%2BnES9Da5gnBgpel4mjr1tjTv24HpuA1MNZqaw8h3yKvaUQqXiQbuGUk7gngjOAxMySQRJMd0%2BevGlrAzRKn9P4phX0%2FsX%2Fo2qUshCyMiqAx6gHJl2dLEZEX7JH2abIL77fi8K9DFJmCrpJt8AN5vlBymVVXJzJNJVbnEqif6M8rbClTx15trSHfuzYyepehty8OjFVXwe62%2BgG9lZo7P1pqU%2FlBaePSU%2FODIHCMPYyD60MTFL8AK%2Fk130TnxLmbF03TzS0DF9GKRkfUJIR6RYBovrcDuJOUopOZqdMTIgr5EML0G2fomG6%2BAezOpV3Ksh9vs32WBxdj%2FfiNbG8rFqATACodyuR%2Fy9fJBLHojN9i%2FgXm%2BFrHzJrfVN8SLwix%2FwBsC3ObeEgYzVt0nKEo5kr4ItbSkxGKg%2Bb7tXfD2BNM8QNLN39rXDJ%2FI%2FjuUac6WaFmIblZiTQSWrw%2BcCWYFdwwuF4aSyFZ8T19CL%2FpRClnM6InVVyJ7y3FAvjhToZXBEOzXy%2F8%2FQFVTK1DLv2O5B%2Fa4MISHsMAGOqUBPvBq%2F%2FvpVhfVGgoIrFNkmFD%2BQ4WQ%2F501Vxn1wjjZQ1GEIr2YJOGV8w4FjflM7OawBBGQL2GotG%2Bvg4uBSRfwYNI%2FBpjs3QjFsvYJ61%2BynejgPIkUUHprP7wgAVDr2azXrBslDBgkvsUw2%2BXxlhjr1qoYmykVbDM9aGExm8u1CSh%2BczdDODl8elOKLELp9MMPLdcKvglBaOrf5TwfhvPM%2B8j627DT&X-Amz-Signature=93568191abb5f27c4a8c5b1780c927e063964a1e554a2a2cff32585575de0216&X-Amz-SignedHeaders=host&x-id=GetObject)

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
