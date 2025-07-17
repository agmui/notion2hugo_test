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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJPLUHIM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDhiREu4JODiIDEz5AR7hKzRQLtVz4RO%2Bzf37y7Dv%2FLjAIgHPQDnsJfafMHKr0lCTalG%2FyfH%2FbmDX2bWpwRYUtC4ZQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDI9kHbSf9L%2FNn6r%2F7ircA%2FU1s6Uv7vDqJAH1nzE6GG%2BYBWZ4YsMFqtV%2F68qKJLm%2Ff4Vo7Bv5fw6lXFeXE6SUzm8k0z8LySEe8AAFukvJK%2BwwCuGTJZnhLCDafiAGlz6PSh1%2F%2F4WjZwYtfwSLyMTOV1%2Fn4oILYWOzM7Eo719Oz3p9WRS89wN2DEmNdc01Zs79khOvHyyT%2BVhZcsd2kL7qRzxscWL%2FF%2BSP3m%2FmzKcCAZk9nHgHhCL3HPFSrfG7sOxVRR8hv8zjE6jWS63aQai144Z2BU8PBMP0vPh9IUYS9x8bLdsIe64%2FWt4535X6VN0vnuBR0iFTffZhSiFnWwLhs09krjvOznDBPhwDpg%2B7PR%2Bi9GlB33jpPMESMybukubJcEOAqz5BaqApu1jYXymHbH6yo%2B8txcajVvwdMwXD3P72WK1az4T%2Bb4oWMLMg9%2BIVl4wrJafgR1j9uibXfna83xPkz5SjjTj%2FUa4wo4sVoiNIccrPN8VJyz0ISbvumrNMG2Z5Rx9FnsfaqumTNwdAM9L4gOKkyH%2BkGTyIqWSJmPQX39u8wXz%2B%2FFp2X7kZh0GS7gb0d1bYFVaspGy3%2FonuLkgXOJivXJZ1OWGQlTH5zwj0XAXEYA92mjWt1Y%2Blzb7qkRt2TvTcCTTPdGwDMPWO5cMGOqUBmo7KSBim2zhiY4KXM6LKa8TOcvYt%2BJmk7DD7%2BV4yA4dhgPi%2BjVpckMOA01Yeatc6IfE5TpFQRrRmRtwLX%2Bc2q9k1mPVxgieKa34nU2G1ZKDmy93MbF6xaBk2Xy7fJesV2wev1mEbfom8Fv1Z3KrevpWC3EF8U71Wxru2ivgQTrsWA7DhwhpMbrrR%2BLsC7UayKNYJ4NquEmVKbTdS3sSddsYSkxye&X-Amz-Signature=b4769adffdd5ad04c9931e11fc3904d39fd2c43b2d8e3d7fadb4474baa821b6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJPLUHIM%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T200951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJHMEUCIQDhiREu4JODiIDEz5AR7hKzRQLtVz4RO%2Bzf37y7Dv%2FLjAIgHPQDnsJfafMHKr0lCTalG%2FyfH%2FbmDX2bWpwRYUtC4ZQq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDI9kHbSf9L%2FNn6r%2F7ircA%2FU1s6Uv7vDqJAH1nzE6GG%2BYBWZ4YsMFqtV%2F68qKJLm%2Ff4Vo7Bv5fw6lXFeXE6SUzm8k0z8LySEe8AAFukvJK%2BwwCuGTJZnhLCDafiAGlz6PSh1%2F%2F4WjZwYtfwSLyMTOV1%2Fn4oILYWOzM7Eo719Oz3p9WRS89wN2DEmNdc01Zs79khOvHyyT%2BVhZcsd2kL7qRzxscWL%2FF%2BSP3m%2FmzKcCAZk9nHgHhCL3HPFSrfG7sOxVRR8hv8zjE6jWS63aQai144Z2BU8PBMP0vPh9IUYS9x8bLdsIe64%2FWt4535X6VN0vnuBR0iFTffZhSiFnWwLhs09krjvOznDBPhwDpg%2B7PR%2Bi9GlB33jpPMESMybukubJcEOAqz5BaqApu1jYXymHbH6yo%2B8txcajVvwdMwXD3P72WK1az4T%2Bb4oWMLMg9%2BIVl4wrJafgR1j9uibXfna83xPkz5SjjTj%2FUa4wo4sVoiNIccrPN8VJyz0ISbvumrNMG2Z5Rx9FnsfaqumTNwdAM9L4gOKkyH%2BkGTyIqWSJmPQX39u8wXz%2B%2FFp2X7kZh0GS7gb0d1bYFVaspGy3%2FonuLkgXOJivXJZ1OWGQlTH5zwj0XAXEYA92mjWt1Y%2Blzb7qkRt2TvTcCTTPdGwDMPWO5cMGOqUBmo7KSBim2zhiY4KXM6LKa8TOcvYt%2BJmk7DD7%2BV4yA4dhgPi%2BjVpckMOA01Yeatc6IfE5TpFQRrRmRtwLX%2Bc2q9k1mPVxgieKa34nU2G1ZKDmy93MbF6xaBk2Xy7fJesV2wev1mEbfom8Fv1Z3KrevpWC3EF8U71Wxru2ivgQTrsWA7DhwhpMbrrR%2BLsC7UayKNYJ4NquEmVKbTdS3sSddsYSkxye&X-Amz-Signature=cd768ad85d6dd22c590b0e93dac4ab5baadada5cd08464b93f96f3a5a6333e5a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
