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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXH6PEVG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIHfd3wlzTtNlkziuXUE4ZrOlAdGblrN3KplK0EuailrrAiEAt9RKXE8cLuWVqYitHkPVL0QGPP5Tk8QLZOJJJ8eA12oq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDKMXFmMvB6Wb9foMSCrcA9M6MWDymwPaNc0bhgzk2Rz1sMygHaK3V3j0b5FiH6AE0a%2FlymTI0SyGsT0WqymYV77zRxoAwP%2B98p%2B9SuKwjxqt0oOMiBqsD38NssPVT8rQivFYwMqkWsn5Eh5CJFvX6hUMfyMfh2IFyxEguKQbuf7%2Fy57G7LctG3imGBr2veKK20fTQLk1RP7gWT3EojqtCIfa4i2A0tZRuwM8mCXUfUsc20MU%2FxYuxOfh3b2ElQGjsOQbyYfC%2BN0CNeGzEOcxdeSkTSGW1GIxUNsoAPnQCulEwmDAxyWWf798Ze%2BYG6sx4hJBTTDva2d2teWRP%2Fk92Jze9FQ7OqFjo1wWVd4od8mDB%2F%2BILeD7kFsxx5SefzmvjoOe5%2FT8kUaH5zV5CDhLoDaTIRNsSx4d3DREgDplREAl45oU60acvLJV4vl0D7LWbl6fsFMRqzmKqfliIFQJo00SCgnNS%2BqpxgqWAE27lfyfec7tfR6%2BL92ad3yxEMPdTrK0ilpbXX75LDeKJksWaIFPMa7XDbHHGlW%2BWbKqW5nvhiPvLUF7o8MX%2BAGjen2z3V%2Brj04AIvt5fCm92y7YP2uEdWeoeGR%2BmSF3NLV3YZLsNzRPXLclbxPKF6P364KLSIhTfItVEWqnGhbJMK6j%2BsQGOqUB2E9P9alvWHmTa9kMJpUqd%2FPTdPgP10Tvmnt8vhIP5LmPfKHSacMI%2B0p3lXcsrOkjBMg8AAq16cTsWmUjZ0R2HJGyH1M9ZXXNuXfCIU8kkmB%2BZcHt0sYPsykPlTGCUP8hNH2%2F3mAYfgN1R21HEoco%2FHHCma2vAksk54DdmlXPP2rC3DF2kQJEyPvFlq0fx6GIPX1Iy2aXq%2BEouuP06FZYw%2FsOBJrY&X-Amz-Signature=4099fb6dff2fd3c7624e591e3a5de44dc80d2e97b198d6a32a4bfa1778629fdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUAU4SH4%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAoaCXVzLXdlc3QtMiJHMEUCIQCv05Zm2r2rDqfO9mNEovd5pqDWExvvk3Aj1I%2Bd%2BPuZSwIge6beVpKc6lnN9SOtxaLIr3HSlfLBTX5uDWaAoXoik7Eq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDAXK%2FILbMZPBr6yaAircA2UAO%2FnWUrIg552dNNo0LhGncDvDHUGaTk43ujP2V4%2BLwH%2BVF%2BPBrv09%2FCTg9ae%2BZBsIC%2Bnfim915XPM8G%2Fcyo%2FSYCCgNtVx6ByGFyBI%2FchYprURQPMvc5iibafbq9xTJToAGGTNZN4JtMUrTsyfPBrdSGM%2FQ%2FmuIwWrQWw4Mfb79lwd4IA1eN2xkbxsVHNOQPbOW2MagmAH7FYTwPWZ6M0LBZLwEhMhiLJGMRKN6GXSjt%2Fm85%2Bcc%2FfNNKNNFIt8Csm2FHuJJiDkFLwTS0RixFisSuY4Y32YpQO0jS%2Fln3T2Ww%2FzRFA%2BEQeIogXQ7cuXpoNZlVQ%2FHL6Y%2FtqSZp0tvB9BQPJmAMPbJUWfpneyQ%2FBnrECON4b4aa9kRJMNpr38ie7IUvMP%2B4tzUz9RmfenX6PyLDnRafyMGya9nRCLkhBlojIxlAzG9w2OtjuKHQc9hrs9118XEa2hgpx8CT7K9AH9%2BhfDJokCR6fFZXGQv9uK%2BNUclBGN3RcP5CuSpziJdnfPQB3TIEgiEdroTXFlL5DN4fuNuTy8LLtmi6fczo8u%2FHkzM8PKsb%2BcRcBs1Yl9ZtX0eKCrMWRi%2BxIJNMa%2B5RC3Jh0Et7E4WZbIp8yRK%2BkAJHKr9fFihKS7j%2FWaMLCj%2BsQGOqUBK4rTICZWhK%2BOHOXMEnLzN39H3I1ocWo9Vsx26ZLgZPxa1AKYkWHaX2sItiR%2B66PWn0la3JsS6nemf1HesjehCREb0C02KYafXExQNcAVYlzbhYG0QbTYVH4PXbh9CusnK7d%2FNWMdlRGTGkWmRDY6AvNLDs9tdHXGqyfH%2FkrgvMfu%2FBzqGvDgtl5o1s5giZ5ERZGABEcscrq2M3XsUg%2FqSetZ0y%2B7&X-Amz-Signature=50e41aad5de39a129619661799f5ffbd8fef7a8951f8c95924a6171b1337626e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
