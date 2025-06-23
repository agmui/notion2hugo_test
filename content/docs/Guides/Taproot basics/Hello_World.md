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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466524IC6O5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC8wvbQArOW1OACRgRZOiSE00mCZR335SvEoa3OylXcvAiA8FA9ZvTqz7LLfHos36%2FRfRsj5tiXj102QhGSlE9IaGir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMIEPefD1r2eKMeNBjKtwDAG%2FkkgetuPQ1RQBlsDYitAlCp3oh%2FjqV1USGijE%2BDWfu703Ya05xzizi4E6WvtQDFc%2BmpH6QYv3e9DI9A9xP4Y3Ap1R9MyMFMrGfhOR46EMZ%2Fz9wES2BKpZNp9TDoRVQuVfaGstLjW344hi0XcHdAluwGtAv7FgXYyElYWB5K5klcURAhRc5iHcjcHwGfsx7EBfMaMwi%2FqQmtoZFecv%2FORZ0QOxdWHSsReqEZnkERBYGZIyTImjAAWb3I2lN2VJ7YcGm%2B7I%2F6RDI3BD0I1Wi6kfhGHB0i06wJYfljVmm%2FXbHqJv%2FelRkL0IXHQPL%2FX%2FNAjteNH5adEPG%2BvmS%2FZAa7g4%2Fbk17tGLOwFAD3wFsWEKNai8gNfy9yDbeWGUTrGf6N%2FuO8OcMDunRl1zcBgrlUEU3JHquBy3HzFbP89ACpjU3%2FbkyhK6jfigbrkcihq3YPCaap3ix4lhw74Y%2BT1E4BJD%2BpvbZhXeW7QXLsXRPzR%2F4q3F3FE2%2BeP3HVR3o3SLs%2BsR32vqvmBsQ6sm6t5wn53%2BpsBqWvjrMC%2F2naFPvrzF110bondbjsBvmtcPsssQhHARdJ%2F2sOn2PiRtEmSvJJEn4Zl1hXL43%2FV%2FUpxgcRVqrM0%2BauH3LxO3SMWkwu%2B3mwgY6pgEayDrdCOuPdNb2MqBNxLDqByKaLXjv2sX8%2BGOcnrpby0Kz%2BJN0HQe1GEwmdgSfXe3YXoIrJ8W8T1r1N9ZFdxqCYCOwQ0SY2LGRnTkeRH4iEmxOOhQ172k2c5y%2BnKjPq2RvxrErE65xmVDB4Uyop7zN%2FrxKxQRL5%2BjKnBp6LcS59QZySthml86KRa1orAEub1i5n7rXg6l3D2YSk68eiH7H7%2Fhg1xQV&X-Amz-Signature=a56a84e97650059ff5e4df87c0480e72ca381c76c2b41daf2483ffe3892c32e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466524IC6O5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T220818Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJGMEQCIC8wvbQArOW1OACRgRZOiSE00mCZR335SvEoa3OylXcvAiA8FA9ZvTqz7LLfHos36%2FRfRsj5tiXj102QhGSlE9IaGir%2FAwgdEAAaDDYzNzQyMzE4MzgwNSIMIEPefD1r2eKMeNBjKtwDAG%2FkkgetuPQ1RQBlsDYitAlCp3oh%2FjqV1USGijE%2BDWfu703Ya05xzizi4E6WvtQDFc%2BmpH6QYv3e9DI9A9xP4Y3Ap1R9MyMFMrGfhOR46EMZ%2Fz9wES2BKpZNp9TDoRVQuVfaGstLjW344hi0XcHdAluwGtAv7FgXYyElYWB5K5klcURAhRc5iHcjcHwGfsx7EBfMaMwi%2FqQmtoZFecv%2FORZ0QOxdWHSsReqEZnkERBYGZIyTImjAAWb3I2lN2VJ7YcGm%2B7I%2F6RDI3BD0I1Wi6kfhGHB0i06wJYfljVmm%2FXbHqJv%2FelRkL0IXHQPL%2FX%2FNAjteNH5adEPG%2BvmS%2FZAa7g4%2Fbk17tGLOwFAD3wFsWEKNai8gNfy9yDbeWGUTrGf6N%2FuO8OcMDunRl1zcBgrlUEU3JHquBy3HzFbP89ACpjU3%2FbkyhK6jfigbrkcihq3YPCaap3ix4lhw74Y%2BT1E4BJD%2BpvbZhXeW7QXLsXRPzR%2F4q3F3FE2%2BeP3HVR3o3SLs%2BsR32vqvmBsQ6sm6t5wn53%2BpsBqWvjrMC%2F2naFPvrzF110bondbjsBvmtcPsssQhHARdJ%2F2sOn2PiRtEmSvJJEn4Zl1hXL43%2FV%2FUpxgcRVqrM0%2BauH3LxO3SMWkwu%2B3mwgY6pgEayDrdCOuPdNb2MqBNxLDqByKaLXjv2sX8%2BGOcnrpby0Kz%2BJN0HQe1GEwmdgSfXe3YXoIrJ8W8T1r1N9ZFdxqCYCOwQ0SY2LGRnTkeRH4iEmxOOhQ172k2c5y%2BnKjPq2RvxrErE65xmVDB4Uyop7zN%2FrxKxQRL5%2BjKnBp6LcS59QZySthml86KRa1orAEub1i5n7rXg6l3D2YSk68eiH7H7%2Fhg1xQV&X-Amz-Signature=1e23ec2802ac2b9360f2924697be8bd312a4ace493b77a7ef80a6a12440c2e4d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
