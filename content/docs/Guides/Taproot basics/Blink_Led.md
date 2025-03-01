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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SXQPFI5U%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJIMEYCIQDXg%2FGRUYGy%2FJOzEDSM28rHxz%2BIzB3HMTXet4Bo3GS7agIhAL%2BNXAZQeNHYMPSU1XEQcdqgkMT5EkkZeZQKStafay8VKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwy8xUQRzmdAiW3mvQq3AOaZRnJf2%2FGpmS%2FTBpckRy%2B1vZv6iPN6OfInriKZHz57m1ZAL%2Bp0aE8ixTjBY9QpvVlSzVK3YIO5IW%2Bv9mzMYNBzoPEiujWfRwdiB26x2u5tUze1TepPznyT4FGUkQnljvPvWTuVG6isUECcEt4UxgY1yIYunngvHbMsgctlt6kYf3qRDOx%2BYHk9TOa5KPsO2uod46a9Vw61CqkOHCy89WRx5wHNOD9DVisPgBODxKAtMxxgMxNzmnDDchvCFCp4ZCbzMVq5%2FexUvE5Lk%2FpqObUekVb6hMRG83hLfi5xv2CHZqCCpFYBcjrMCicsVqffFDBXwSGy2Pdo4FTG2UtIiAiHmDmtbA8Fxy080aPHtADtNTuKaZmZcfpRg9lut%2BWBfSkk5ERd%2BmDq8EuycrmNIAmv5mx1nmww40GWsNZmaf1f%2BRthF85i8oAEG%2Ba5EikVO4HVCqYb2I5jTAIBrLOVTk%2FGMB%2F%2Fv6gxukTPcVY6Kf%2BOA6XBqLVCtLHegfxRp%2FFRWWPuvQXKKlH8n0HguXjd5i43i9r9ccJWqQRlfSnGZrNAGSsQLHGJFlzOq0HJRQf0maVaFEBGG4tAplTJKoTB9wQQh%2Fsc4YMs1o9BpypqY1ABfCpwOJecqHsEBK%2FIjCSuou%2BBjqkASoxa3Wtyn0YLCiAV9heFjJBcVsC02svT8K0A4Ea%2FlW%2FKMuWrIaYkJgeF1BXghd8wBYxLrNi5Gu1ECRB7RTvXMI02L4VGbZmhB0QiWB9dUWi1e85BH%2B5qGTouW854h3DlwsnwqLebbXIdcrQFXxz5MIPkYsqoQbXAZMSS2kENIYjGxC%2B7AAUYU%2B4nEedzewcb%2Fi2ugk4AVzM2UZILBHKpnTmiRSQ&X-Amz-Signature=4b110ff433e9274fcd4109060456ae5dba967bd3d2bdeb6db584e7471864d770&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIGBSFZN%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T110133Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQCFoyy7IiDyZVRJTC1sbjnqO%2Bv2Mak1R7X2RlvYGHj02wIhAMGk7OVUYF33TbsobRw785hAsa01e5aqCDPogRKlltEeKogECKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw0x4XfC5PNfryGvFMq3AMRHEkA8H7goWX%2BGsfppzN0XbPtBPN%2BZWSW2N6sr%2FC0F4Koybx6pRp57ndakdz5sGcPCY2ln4GXnF8fn4Ev9q%2Be96mtFbwcpEDrVYHWThz3hRTPTpGFdS%2Bj7w%2Fw9E7IgBoM9bwY1I5L0hfURtkP2B96fjjVcmJmvnPud%2BKsdr8EFLeMPfsNOJ2aCMYlKsrzXPNMJaYwnthokBzyiyJNRr8VERgnZm5rsJeyORujUWvucbzStbJrBb1Zpsdtd6%2Bj3ov%2F8fYIx9m%2F4i9o3DixZbz9Y%2BMdanTpvNXBsd%2FjosAfep5hYmx%2FheVKZa10at6bLW7pQDFVpaQp3KtbahCDkm1dD48rVHYH%2FMr7H0tDSqLWrzId1D6ipqRhO42jcH4%2FFh8in2betessn%2BZMv495mjzid7n5Cu3ZLqf7wfG%2BJnHYjjr1Yi3DY0nE3CxAYNfAg6dYu48TCLl1Jcqjd7nyK9trX2ew%2FjT9WSDHxRARruCC4zhQjdsxf3%2Brja9P2RKIzME2HoHgEEYdQ%2FM0bMkQMq1%2FQiLSxuCS%2BhXPdB9onjoac5Kv%2BCYjfwlDUAi8d9faOqmdTBtbfbCxx4gHWaOZ2%2FAeW%2FKi8jWtaLs04kFy2PlvQmuDWyXI7D2jvLvP%2FDDhw4u%2BBjqkAQkiGjwJuMUIk6cYSoO1dzsaEFYFuxtZOALmOnzx16eO0MyBnv7v5H3huCzsHZSB3Ve7gLzyzBZaGKXrJWJIQvKh0WCYv96MN0eMVhBQAWLhzwJPl%2FqGlk%2FSNHQc2dVALr9FVHopDai0QHs52xxWfI4feMBGLZMGeL0Y4b6hDVATqeDlMBrkaHxpYzhsYs%2BM5s8RNvBITSkMTNVayuAQjVMbWoBH&X-Amz-Signature=20094e0d959faa2c89ef70ea15dca656faa2ca237aeb4af49bfe6aaf434a48b1&X-Amz-SignedHeaders=host&x-id=GetObject)

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
