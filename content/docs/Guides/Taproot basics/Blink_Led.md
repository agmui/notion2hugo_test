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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SUHUBI5%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCH3QC5ekGoEDpWecrtS3C6HGFXB3QiBloaoxq7%2F3ZpacCIQCK4DQ79FMLvVpp5lPbN7helcWJCPcigfJfOlAbVzZhJir%2FAwhrEAAaDDYzNzQyMzE4MzgwNSIMcqNcdNVMICCYyDzcKtwDcgHxZ8ePsb%2F9eqJiTYCWTOTnFb2aa2tvsfa8JR98hnSGWfwo2Ufk00zxKkvE65i9FlJ3e3Phq0vKbdvfpQ2%2BybNtPdvIAl5o5Gck1k0u9StKwFcvve9e4EcwHN6nEnjRToM59zD5bL84q0YIcQrCL08cGxRo3DGPvcXyM628cFp%2F4clbaUsZAosN4jp9z5Plnlyn2eYoV4wwyHyfvJ5qvxQ8LP%2BCXyQ47vdEPwTqMA309IsxT5VSjkuZ1Y09q6IwfkWLQBXpsEMOp%2Bs8z7XN9PBFwbr4L0l2EnzDa2lPfUUp0ctpfUpvNwtBaRUpJKcipspce9%2F1WkyCHcl2zx9W5TwibUHAeKzxcJVD1R%2FZdbN2A9yAsLpkYANxqPD4zgOGdaKrSGPZDSFxC5P7iOMUN0dC9TJqvD4lGEcv%2BsKXm5NwRugAb7dZ48t43WJBQU8Ab9C%2FtfE9SRpnT%2F3if3qdxHLkTcVb3CUol8XlZbs%2FIluB0K9Wzc3gEN9HjgfCS8SHAiLN4niJ7ufK47aC1ASr9DQpPkEAhYN71I%2F2BZpeSbSwpKohkOx0Aj6o0Tk%2FP3LT1rkouI%2Bmt0uKfoAHnKnqM1Y26bv8UGqEsl8HhfcAm9g%2BhiwPjGDaI8el5YEwsoWlwQY6pgGHsaoNHNLepnW8o2j97l0CikubJbYlvX%2FlAhmUy5XMH6c58tdhpUw%2FMbUFzqeCEdSy4zd%2FzQwwCO0Guo%2Fydpm0TBYVwOpg%2FBaS7AVhqR9qMmO2ZA37RQN5Xr5svedR2tLfpwb5ePFzczqeqkmEMMORFKepNL5d0Pe4PfFSgJhHwcwxmE7PgQv6HnwR7mW7Jgraqa%2BU%2F2erPtlw0VzjX6fOcmqsMbs5&X-Amz-Signature=c7ea3b30f0e2ed0ff77596e6defc1245d49f10bec7583e5436f55198f6962ab1&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UM2ADD2A%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T033841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDD8FmfakhHEo%2B4YlCVm6t9DIhHawjWVab%2FRQ7QPxfE0wIgfBm7i1N6LA6Xlp%2FMR0xljfjY6iaj6bk1ajlYkSgLkX8q%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDHWH8HJsipCLH3F0VircA3s4UGBZ%2BJzCMgqtz4Vqu%2FZtDifT%2FsTEZXKJqDrG%2FWIKeuY6jwWr9%2FGuWFxyhybbsI8YBWPwHfF%2FKsBb9wzu%2BBLaz7CXCLsg8DbX5jmi5U7gxMbAnIJTALO%2BJUNjvJuTHKAh7VxkLADnujvquq6PiSunovqPCFXPLtCU4aDSlBuP%2F5lBzPlC50PKglK%2FkImFbdE99Cnx0MAodxlQbUat56s7dXagrBmmPcj4uhsCjhDhJmwHrTcdxpkAeuLpaD3rIB8F3%2BvTm6tSkCBv2Y6exrVNX64Gwjrsd8ucoymDL2VmAJLURg93iicRU%2FBwQ0vzRArkwxsZkWadX0QMvd%2FhRnrG8XUsqOUoTztMXCNqhTiL4N3%2Fozt16k0lV0ceDxl%2ByyC3HhmD8K7NMO%2FM2hH%2Fgwt8H26Qlz2x6mZAEgx%2FcnpNhXzbT9YTkoqzzCpuZc3HH5MpgCHAoPl%2FX3v0YB8fgwO0F7ATwaWgfc4VtQqJPJgi5qP1lV4KhWwejQtZc2nnXqmzcfmXE1IdMTYrFPo4vfMZ6xwZuPqPfoNeaHjEoVde09FSzbxQjFL%2BQZLLMGLmlG6EDcIhTs5S9D6cwLzUtV32ppRtp%2B1aNYPUvdsKH7TdihV%2F2j%2BTPWpKlBrZMMmqpcEGOqUBWMmKi%2FE6WEAfiBs64GIwI0UgvLX0aEY2o4RxFeaFewx%2BzKy%2Fme5dDfqLhoE2fju0bhXkPoIQ6OTOlhcwEtxiYcdEjgduCfOxUamihog%2FnZCKjb22KTuFWWHXvnF6Xb3db8cKN1chrfujbBZNdb%2BfsgqF1jkGaIDywILuIoadSMZrtQ%2FsDjMy3kH4CwFVq0onhxybXWCuXbSsq4DsF%2F0qAAE2dntw&X-Amz-Signature=0bee7665c5e27e678df6771de7e2e8193cf7778e036746773135efd8341a8573&X-Amz-SignedHeaders=host&x-id=GetObject)

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
