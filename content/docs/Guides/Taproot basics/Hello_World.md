---
sys:
  pageId: "b2ee05fb-e371-436a-9c42-fdfc687f0bf6"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:58:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Hello_World.md"
title: "Hello_World"
date: "2024-10-06T19:58:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 124
toc: false
icon: ""
---

> Make sure you have the the TTL to usb adapter connected to uart2 on the `type-c` 

	[link_to_page](3b7f0872-f00d-41cf-857e-646938c49bd0)

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"// allows for printf
```

use namespace `tap::communication::serial` for ease of use

```cpp
using namespace tap::communication::serial;
```

get drivers and initialize the type-c

```cpp
    src::Drivers *drivers = src::DoNotUse_getDrivers();  // gets the driver object
    Board::initialize();     // initialize the whole board
```

initialize the `UartTerimalDevice` object and `IOStream` object.

These two objects are what allow us to print through `Uart2` on the type-c

```cpp
    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);
```

print “Hello world” and sleep for 500ms

```cpp
s.printf("Hello world\n"); // print hello world
modm::delay_ms(500);       // sleep for 500 ms
```

### Code:

```cpp
#include "tap/board/board.hpp"
#include "drivers_singleton.hpp"
#include "tap/communication/serial/uart_terminal_device.hpp"

using namespace tap::communication::serial;

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers();// gets the driver object
    Board::initialize();     // intalize the whole board

    UartTerminalDevice ter(drivers);
    ter.initialize();
    modm::IOStream s(ter);

    while(true){
        s.printf("Hello world\n");
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}

click on `serial monitor` on the bottom bar

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KB22IS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEVRvFXMn8FlCP5LY%2FzcXz%2FVaVxzgFeOZ7BN8%2BlUagVYAiBLEi2x%2FGYa4xJ1p932Q95UM%2FotijCpb2x8JxILMPqZGiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5OI20tduFzmHDzmPKtwDpxpvR%2BJKIA5ZmCqTFYeRPKt6yrpa4chfmgJ5I%2FNKsAshDVPf9angWbK4VAprTXZqYgG6bu5eskp9Ap2K7jgI9bFGAU2DHQQqoohzrhFZ7hd5gLFaHYUBamvjp8V9mLr%2BajcQnrc%2BpdqGQIqILi234iQ%2FRjp3FX15V2jggNnEthjWx%2BuDa%2BrzOiLUChfVCtw3B5hTYZWupdR%2Fy%2F3CJmM96RT5EzOVBTI7%2Fpcc1mN0%2BvaMkiSrIR%2BK4DeWSjWhHUkyrXw96KOKzLqdYZ6jKXSY1Ar4DWk11zHfaJVa7pJhUpNgR2EvjUpc5IfTV%2B0at8gW7skwEOhueF9TeqdFIi%2BAN2cJqbw6Jl%2BSuYNh%2BhfLCbhNVN80xNf5PBaVKFVtfoA3fio%2FthlLEOZEJZfSMIj%2BoorEd5QFLOYQ2hCB9HzQxlpN1jMWMGmSehEX1f94NH6mDC%2Fb%2FeCbOrUEte8yXA%2Fdz7bQXwlghm6MOmtNgNRYIHtdF23qIT%2FLIL2qCQ8AZfGXxaq8YCPbcl4lGS5r13WOoCCdnDy0Ui4rT75A4pDS3W3j2JGrKNcbjXCFUlh5PGbZi%2FCAFoziGV6nOoc4lbwwmnO4XfdXO54JuPfrARmlr4Z4biPWlRuw3q%2FOv3Iw4O2lvwY6pgEbqkrvYryNPm0zOEZiRg%2FjjPpyMyTLfo0lpOl466JpR3SX6BPVHjD%2F5xfPWfE9NwzrXRUJXQ1fU3Yb8EqRig6w%2FltAz0PkVv4c4e1HUBO9tagB2nn9crk%2B82t78eusdBf0uyYEOP3XrSyjr9x9HSJ675u5uEZcxmeo4wHGi6AThVaUIOlY74UWNKPI8yr8CgG0KFmuJaQzxgexBTMhNGyhkAM8IPGK&X-Amz-Signature=9f90cc19f051ea67d8545f738124e052d2c33cd535428c299fdff2cecb649435&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676KB22IS%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T170057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECkaCXVzLXdlc3QtMiJGMEQCIEVRvFXMn8FlCP5LY%2FzcXz%2FVaVxzgFeOZ7BN8%2BlUagVYAiBLEi2x%2FGYa4xJ1p932Q95UM%2FotijCpb2x8JxILMPqZGiqIBAiS%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5OI20tduFzmHDzmPKtwDpxpvR%2BJKIA5ZmCqTFYeRPKt6yrpa4chfmgJ5I%2FNKsAshDVPf9angWbK4VAprTXZqYgG6bu5eskp9Ap2K7jgI9bFGAU2DHQQqoohzrhFZ7hd5gLFaHYUBamvjp8V9mLr%2BajcQnrc%2BpdqGQIqILi234iQ%2FRjp3FX15V2jggNnEthjWx%2BuDa%2BrzOiLUChfVCtw3B5hTYZWupdR%2Fy%2F3CJmM96RT5EzOVBTI7%2Fpcc1mN0%2BvaMkiSrIR%2BK4DeWSjWhHUkyrXw96KOKzLqdYZ6jKXSY1Ar4DWk11zHfaJVa7pJhUpNgR2EvjUpc5IfTV%2B0at8gW7skwEOhueF9TeqdFIi%2BAN2cJqbw6Jl%2BSuYNh%2BhfLCbhNVN80xNf5PBaVKFVtfoA3fio%2FthlLEOZEJZfSMIj%2BoorEd5QFLOYQ2hCB9HzQxlpN1jMWMGmSehEX1f94NH6mDC%2Fb%2FeCbOrUEte8yXA%2Fdz7bQXwlghm6MOmtNgNRYIHtdF23qIT%2FLIL2qCQ8AZfGXxaq8YCPbcl4lGS5r13WOoCCdnDy0Ui4rT75A4pDS3W3j2JGrKNcbjXCFUlh5PGbZi%2FCAFoziGV6nOoc4lbwwmnO4XfdXO54JuPfrARmlr4Z4biPWlRuw3q%2FOv3Iw4O2lvwY6pgEbqkrvYryNPm0zOEZiRg%2FjjPpyMyTLfo0lpOl466JpR3SX6BPVHjD%2F5xfPWfE9NwzrXRUJXQ1fU3Yb8EqRig6w%2FltAz0PkVv4c4e1HUBO9tagB2nn9crk%2B82t78eusdBf0uyYEOP3XrSyjr9x9HSJ675u5uEZcxmeo4wHGi6AThVaUIOlY74UWNKPI8yr8CgG0KFmuJaQzxgexBTMhNGyhkAM8IPGK&X-Amz-Signature=42eff1dac5a9ea1b110e01e122e8b60f4ca4973b4aa6ff1604d2f356833d708c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
