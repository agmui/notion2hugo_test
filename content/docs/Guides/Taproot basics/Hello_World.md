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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPC2UE5%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCFUUkRlN82bnNkbMv0PsuCgKEJjNzlY1rR7uQywXSEDwIhAI6AST6UuOF0igBcqufAqhRQUwvjqeaWswiwZ6NYFSMGKv8DCGIQABoMNjM3NDIzMTgzODA1IgwMOvkTQCEmU3eJP2Eq3AOj0diheaFWYo99bY%2BQmXVp3cM96l6Wrvq6twY2GmyFGby%2BsM2yICroKhLY1d0g7a9br5V9A%2BRYPOp%2FeCeJ97zbrsRIvFN0tZgG51KMoH8kenm8vIjb8HNF%2FkQx1ADXULnYTb6kAqAiW4jg%2FhRa6fEulYZoBBl184AZ46FsU%2B7HVw5vZot9watQuQGSX4mFt8B%2FAoipwX5tDu7PVggLiGxHFIEPngEJBVAV04aofUjLIYeL7WDZIfn9n4AH3sNFsyOOax2%2B16VMGZ14gxNy%2Bsw8cBa6y66xulSJX9%2BaKvHwFctybIl9quGgcuaKLSaEYe17GsgQfn%2BlafegPCTWLTKJrQEH7dni0aiJylxrYnCLt0cphY%2BSpyh8%2B8N3XE4NXd2NjqX9PtIOjNUys8cpo6zcvIf5AblqXWJSDHdvB0qae%2BQaQ8biF5xxjfR927ZwcKuzQy3%2FQwI6YgSUEcuRaNcozRK%2BCNPhgvC1sHjLCfo7lCse%2F0qwI%2BGNUv82cnKf3fjfesy2TZYZPbSJyt8q2aHftBBmg0QL8%2BD%2FVlex%2BWjSpa%2B60nmbFb1eMqjBUeE9unymQeA13qOh%2B7abqLeQdOPakk6%2Bxg80WsA8%2BVna0y8lrX%2FLzfPCnC8r8Y8VVjDptN%2FDBjqkAZ3GoM0VErFRQOunhwJxrTLyBalOue149IDnq5%2BdZE8ZydykdPV9ennhggFRL3BqRbry740KCt4CpBk4xqGY901%2BDI8QNtP8FBtKSWRM15xIjYUiGpEBd0ZqSB2XdVDrXy%2B%2BQRz8fuEOXDAtV7HqhLkXNKvC%2FEVRFeVJ5ffgbj%2FIKLfHK%2FGajzKig6Jx%2BPWKn93QWDujJsK21TldmTm3J0LUTVB3&X-Amz-Signature=55ad8596209e573b3daac28440569989d2f1e2fc0a6274b09db3cf5bc0f00c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPC2UE5%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T171136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCFUUkRlN82bnNkbMv0PsuCgKEJjNzlY1rR7uQywXSEDwIhAI6AST6UuOF0igBcqufAqhRQUwvjqeaWswiwZ6NYFSMGKv8DCGIQABoMNjM3NDIzMTgzODA1IgwMOvkTQCEmU3eJP2Eq3AOj0diheaFWYo99bY%2BQmXVp3cM96l6Wrvq6twY2GmyFGby%2BsM2yICroKhLY1d0g7a9br5V9A%2BRYPOp%2FeCeJ97zbrsRIvFN0tZgG51KMoH8kenm8vIjb8HNF%2FkQx1ADXULnYTb6kAqAiW4jg%2FhRa6fEulYZoBBl184AZ46FsU%2B7HVw5vZot9watQuQGSX4mFt8B%2FAoipwX5tDu7PVggLiGxHFIEPngEJBVAV04aofUjLIYeL7WDZIfn9n4AH3sNFsyOOax2%2B16VMGZ14gxNy%2Bsw8cBa6y66xulSJX9%2BaKvHwFctybIl9quGgcuaKLSaEYe17GsgQfn%2BlafegPCTWLTKJrQEH7dni0aiJylxrYnCLt0cphY%2BSpyh8%2B8N3XE4NXd2NjqX9PtIOjNUys8cpo6zcvIf5AblqXWJSDHdvB0qae%2BQaQ8biF5xxjfR927ZwcKuzQy3%2FQwI6YgSUEcuRaNcozRK%2BCNPhgvC1sHjLCfo7lCse%2F0qwI%2BGNUv82cnKf3fjfesy2TZYZPbSJyt8q2aHftBBmg0QL8%2BD%2FVlex%2BWjSpa%2B60nmbFb1eMqjBUeE9unymQeA13qOh%2B7abqLeQdOPakk6%2Bxg80WsA8%2BVna0y8lrX%2FLzfPCnC8r8Y8VVjDptN%2FDBjqkAZ3GoM0VErFRQOunhwJxrTLyBalOue149IDnq5%2BdZE8ZydykdPV9ennhggFRL3BqRbry740KCt4CpBk4xqGY901%2BDI8QNtP8FBtKSWRM15xIjYUiGpEBd0ZqSB2XdVDrXy%2B%2BQRz8fuEOXDAtV7HqhLkXNKvC%2FEVRFeVJ5ffgbj%2FIKLfHK%2FGajzKig6Jx%2BPWKn93QWDujJsK21TldmTm3J0LUTVB3&X-Amz-Signature=e07141a95548dd3b5fb765af4c3d86151cb7fefbb591dc4ed2171cb1c6c52b26&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
