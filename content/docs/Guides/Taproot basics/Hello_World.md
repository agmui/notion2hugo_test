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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM55CMCM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJiPpD6zxAm4Bv2StvLcy6EeaxIuaOUnzwKjJeuzRW7AiBaRC%2BGLGvJAEVET%2BY9pvwf%2BELqSRM12ZtUW1AFwiMZmCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM1uR7ERUdl6MExJFPKtwD%2B4tDx8EGalsjLory6SYVhNV82DRtlI0IFohIUFwe%2BUIAkw6o%2B%2BRX%2FJ2tnnDIIYS2Jq1uYunPa8poEdq1e8Rz0Qd0gO%2FEDNY3CSyvmxBXOAl6cSqIHRqh%2Fwt8iMel1FcIhROU4fd05PX8oZqQhQ%2B504Jb%2BhyjkAWzPSbIH0X70vG6ldNjMD6tn73DicE9yqtpacK9Sb4X8Wb7rTob7RWdXiI2I%2BPOnrIJVVCvj3ug2nz9%2BIxy3JzB884NMdXowQSUAQNFGg7lzDXcs%2F2xywYtY%2BJ%2FlFch0ZHZqAXGcQ4jtGbu7ks%2FPPQiI3vWo3QDAc6Kfgn6NHYliuqQMfY5nHB5iuxIVM1374t2ijMUv%2BK9fkBz%2FnzewZ827CCHYUeoYxdORXJb8Jg%2Br1uKInZTAEUGpDMRszxHb%2BQ94nXAjyM10R0Umg2Cm1Jo7CKVt8%2BbP8rOdQyLZiK4SiT6HVckI%2FlPPHJg7AudVEg%2FNvHd7o9mWQ9iC4ml78sOiXmyPe%2BtvNr4mbX%2FdXFruwuOQXAGPBqLzdBh5H45WucObjuvNjfGw3A%2FHK0HQQS58fZ1lbwndnCv7%2FXWvmLfzG03llxl5nTAKObCtbxKwD2Ia8JNdp8qaJ5hb6RUenlVwdNtpjswxYSywAY6pgHO1IIS9S7%2BLK9GCOSarIGF4DkSVXOOqglooyOYij9Ft%2BX9oPrk3s5jrsObpYYyET%2FItWJ%2BHGpuEdNzZRNCCVs4cQQmTet73taMSG7SHlyXtMgFhAs5TzJptpBLwVDoDth5Zvy2I0m3IeWHV%2FXTmaOMuMdzPJCVDdmRMV5frk%2Fu58fYYxuDQStqExkP5BeEyNBdq4KhamlP12FxDK0Jza%2FQRJLA1tSy&X-Amz-Signature=ddb3818535565219f66c7e05ffdbcaf840d15f06a8c0c99c508e622872888bba&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SM55CMCM%2F20250426%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250426T070730Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHJiPpD6zxAm4Bv2StvLcy6EeaxIuaOUnzwKjJeuzRW7AiBaRC%2BGLGvJAEVET%2BY9pvwf%2BELqSRM12ZtUW1AFwiMZmCr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIM1uR7ERUdl6MExJFPKtwD%2B4tDx8EGalsjLory6SYVhNV82DRtlI0IFohIUFwe%2BUIAkw6o%2B%2BRX%2FJ2tnnDIIYS2Jq1uYunPa8poEdq1e8Rz0Qd0gO%2FEDNY3CSyvmxBXOAl6cSqIHRqh%2Fwt8iMel1FcIhROU4fd05PX8oZqQhQ%2B504Jb%2BhyjkAWzPSbIH0X70vG6ldNjMD6tn73DicE9yqtpacK9Sb4X8Wb7rTob7RWdXiI2I%2BPOnrIJVVCvj3ug2nz9%2BIxy3JzB884NMdXowQSUAQNFGg7lzDXcs%2F2xywYtY%2BJ%2FlFch0ZHZqAXGcQ4jtGbu7ks%2FPPQiI3vWo3QDAc6Kfgn6NHYliuqQMfY5nHB5iuxIVM1374t2ijMUv%2BK9fkBz%2FnzewZ827CCHYUeoYxdORXJb8Jg%2Br1uKInZTAEUGpDMRszxHb%2BQ94nXAjyM10R0Umg2Cm1Jo7CKVt8%2BbP8rOdQyLZiK4SiT6HVckI%2FlPPHJg7AudVEg%2FNvHd7o9mWQ9iC4ml78sOiXmyPe%2BtvNr4mbX%2FdXFruwuOQXAGPBqLzdBh5H45WucObjuvNjfGw3A%2FHK0HQQS58fZ1lbwndnCv7%2FXWvmLfzG03llxl5nTAKObCtbxKwD2Ia8JNdp8qaJ5hb6RUenlVwdNtpjswxYSywAY6pgHO1IIS9S7%2BLK9GCOSarIGF4DkSVXOOqglooyOYij9Ft%2BX9oPrk3s5jrsObpYYyET%2FItWJ%2BHGpuEdNzZRNCCVs4cQQmTet73taMSG7SHlyXtMgFhAs5TzJptpBLwVDoDth5Zvy2I0m3IeWHV%2FXTmaOMuMdzPJCVDdmRMV5frk%2Fu58fYYxuDQStqExkP5BeEyNBdq4KhamlP12FxDK0Jza%2FQRJLA1tSy&X-Amz-Signature=a566c9949e9dbd7eef35c6335268959f80207fc86935cac0f9ea3f5627026f3f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
