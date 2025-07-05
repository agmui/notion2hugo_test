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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625GRDLLI%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC6S50mPp2dKrkeOyVzY0D1lkh2enBsAOVMfjOc4K7TawIhAPy%2BU7D%2FN3hnYHCiJzqhbIOcz7r49VTve8sBsLsd8wxHKv8DCEYQABoMNjM3NDIzMTgzODA1Igw6mzcDL44ctMzYPasq3AOsMr1pGiStBHRiaR4yRZa9X3fiVjjXCQcbxFyvpW8UvADtXHr6P%2Bn%2B0zzxPpX0FgK68%2Bv4W3D0a296KJtusoZ7dqUYsm4Cp5iwJeq%2FhFxycXL4DB3Kq4yjmRyQJiSavahNMgxmaJQBtlaJKHYPGfo6tn6Er5j%2FgdGj2lZTaIId2HY5N5dGt1v%2BtXjagCLvBO7cU%2BXzDgjPsjJJnNc3L3dXbPiwavlFx65DLvS23XhTqM9ZDsOs%2BaGkYR9M8UgtmiMPyjeayDXZhbgWlXS%2FIAdHtd53yIhMyeK7%2FIBFZNqpJr1arj39uoKryDM8K2ssklGI8pmHn69E4CfnSUPh6K6C8GTggue7O7pUXZW%2B3TZK1109NaOYKVs0QYUhwFbWZp9dLFedZMdpB0S9iy6G0X%2BdSkwP49yGDpj71LH1PN7pPytu2M%2F9eKoli%2FcN%2B1Dj8kG8aGm1stoY2qPczPos0usEW5WcYVtV7VVJ3%2FGEyLp33zUVTXgj%2Bg4YzIKU8%2Fx3oGUBYhF9JM3PrmSiiJh4ukw2ok7juYgqjVv1mDd4gw7d%2FbMLj73QkKlh4sTq7qUkQtfUHCZxYQG82izbL8HsEd9b3A6zrYoDAfDmOZxdNshQFs%2Bl%2Fl0rDoBlmlbuhDCdu6TDBjqkAUwj4VA5VSyYSeB3%2B%2F4dFcb8wKLAmVHBUlwKI1PcYRO3GaPTyoe68bg8OdWUYiipq5MsxsUTCTSbMsPuZ6gCYTyFABRgvhRN8qiSK%2B3zXJ5NWmVZlJJQOLMZ9aOhRj%2F%2FoZDgbIpaGkpNqCtmOF15VP%2F6HXO8MV%2FWadolPRnoRuTt14zGQJXo6YCXTv%2Fck%2FzAPPScDWgbGcQoiQGBmdB7MAkmqSlR&X-Amz-Signature=e7a79f57ff499fb0101f6727942821298a67532b167e32e619cf8a5fb24e6f83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46625GRDLLI%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T131913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJIMEYCIQC6S50mPp2dKrkeOyVzY0D1lkh2enBsAOVMfjOc4K7TawIhAPy%2BU7D%2FN3hnYHCiJzqhbIOcz7r49VTve8sBsLsd8wxHKv8DCEYQABoMNjM3NDIzMTgzODA1Igw6mzcDL44ctMzYPasq3AOsMr1pGiStBHRiaR4yRZa9X3fiVjjXCQcbxFyvpW8UvADtXHr6P%2Bn%2B0zzxPpX0FgK68%2Bv4W3D0a296KJtusoZ7dqUYsm4Cp5iwJeq%2FhFxycXL4DB3Kq4yjmRyQJiSavahNMgxmaJQBtlaJKHYPGfo6tn6Er5j%2FgdGj2lZTaIId2HY5N5dGt1v%2BtXjagCLvBO7cU%2BXzDgjPsjJJnNc3L3dXbPiwavlFx65DLvS23XhTqM9ZDsOs%2BaGkYR9M8UgtmiMPyjeayDXZhbgWlXS%2FIAdHtd53yIhMyeK7%2FIBFZNqpJr1arj39uoKryDM8K2ssklGI8pmHn69E4CfnSUPh6K6C8GTggue7O7pUXZW%2B3TZK1109NaOYKVs0QYUhwFbWZp9dLFedZMdpB0S9iy6G0X%2BdSkwP49yGDpj71LH1PN7pPytu2M%2F9eKoli%2FcN%2B1Dj8kG8aGm1stoY2qPczPos0usEW5WcYVtV7VVJ3%2FGEyLp33zUVTXgj%2Bg4YzIKU8%2Fx3oGUBYhF9JM3PrmSiiJh4ukw2ok7juYgqjVv1mDd4gw7d%2FbMLj73QkKlh4sTq7qUkQtfUHCZxYQG82izbL8HsEd9b3A6zrYoDAfDmOZxdNshQFs%2Bl%2Fl0rDoBlmlbuhDCdu6TDBjqkAUwj4VA5VSyYSeB3%2B%2F4dFcb8wKLAmVHBUlwKI1PcYRO3GaPTyoe68bg8OdWUYiipq5MsxsUTCTSbMsPuZ6gCYTyFABRgvhRN8qiSK%2B3zXJ5NWmVZlJJQOLMZ9aOhRj%2F%2FoZDgbIpaGkpNqCtmOF15VP%2F6HXO8MV%2FWadolPRnoRuTt14zGQJXo6YCXTv%2Fck%2FzAPPScDWgbGcQoiQGBmdB7MAkmqSlR&X-Amz-Signature=0d4567881f79210957405c7b0ad3f78d38388caac54b200d627de638ceaf0974&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
