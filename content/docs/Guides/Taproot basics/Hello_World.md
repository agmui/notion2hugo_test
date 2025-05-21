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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFWQXHFR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCMRKjz2di0YYyHgz%2FdxdWhfi0tbt1DR4IY2AO6UH5kPQIhAND316QKCvMNTGsOdsugjHszAq1znLp4bOiRI2MnxXbWKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxtj517KQJsu7Elj7Uq3APtOsDUo%2F9qPxukrwYaSZQqhERToUSHA8FtAjtJ6wvNlE01YTrPfK%2FBQ6zFTlaXWIToUEC73O2HEM10IvOFabkSb77%2BB84AoYiQdSn41vkGvTxwrqvEg9LRYPhOw%2FXT4TsRO0ks%2FXnZUfP0kTIr9tlnfa5XFuJXuIstBQSAJmtOjQsxIQoqQ3ncGngnurnW%2FJdupbM3Unof7odtU94DxMHmhIE9b7LJ4Lu1GRWP%2Fyrm0Y5Cb5AdW8TiEyMI1bLQz1yeWeidv5QFAv4qGIjJfpBr6ARQ7Wtc5dx49tqmRLvWiee6p1SFtdTNhKa%2FJyUbL4C33nejf0%2FPX%2BcT7L6cZ1I4mfN1gJLKNvZWwMEwTGbCOPSs0S5aJpWbjYxVWQP7h%2FLPqGtD%2FTPodS9MhRJ9xwlUvEsLFSQDbDdlZun%2FjaW2eJDxNqUcUuKeBDxuDFjWjhRvyJjre0A1ibfV6MqMKbg5lkCROgJePIyyjwlV0JJZE%2BzzFvr82Y6uFjcBDYG2IcKBKNRkEoCEv%2BU70JczZNvo%2FHMCbJDmMl%2BLs0ddqEdDLIVg6uuXhI1OkhcRPpjY9ti5GA%2F2tR8DeaP9D66H%2F7gM0XiecDiIkBp%2BdML5VDTaJZhNR5ER0%2F6KQMcm6DCc7rbBBjqkAcaIlsyNvAL8Vhx5amrECKtSkeKXWwG9666wD66SZGShDbIx1Ex%2FIcCudCPB6k4MIw6HVE59pgg393K5Z4X4MAWoxkvsCZwrqSiwNv2oNuH3dnuhoWiwZ2bhwjyVcH2a4ZtCZdz3LOVN7eawrsqPTOXy1lrtNJbq8Ld1P0bIkhDatIQ6IUWDOhd5IITOP8mt72dQIZF2KHcuJBputg%2FKc%2FgIy5Jx&X-Amz-Signature=b8bb55bcc088674becf6743e7f499f6e7eab17068dc544030d5bf44acaff18af&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UFWQXHFR%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T140901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCMRKjz2di0YYyHgz%2FdxdWhfi0tbt1DR4IY2AO6UH5kPQIhAND316QKCvMNTGsOdsugjHszAq1znLp4bOiRI2MnxXbWKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxtj517KQJsu7Elj7Uq3APtOsDUo%2F9qPxukrwYaSZQqhERToUSHA8FtAjtJ6wvNlE01YTrPfK%2FBQ6zFTlaXWIToUEC73O2HEM10IvOFabkSb77%2BB84AoYiQdSn41vkGvTxwrqvEg9LRYPhOw%2FXT4TsRO0ks%2FXnZUfP0kTIr9tlnfa5XFuJXuIstBQSAJmtOjQsxIQoqQ3ncGngnurnW%2FJdupbM3Unof7odtU94DxMHmhIE9b7LJ4Lu1GRWP%2Fyrm0Y5Cb5AdW8TiEyMI1bLQz1yeWeidv5QFAv4qGIjJfpBr6ARQ7Wtc5dx49tqmRLvWiee6p1SFtdTNhKa%2FJyUbL4C33nejf0%2FPX%2BcT7L6cZ1I4mfN1gJLKNvZWwMEwTGbCOPSs0S5aJpWbjYxVWQP7h%2FLPqGtD%2FTPodS9MhRJ9xwlUvEsLFSQDbDdlZun%2FjaW2eJDxNqUcUuKeBDxuDFjWjhRvyJjre0A1ibfV6MqMKbg5lkCROgJePIyyjwlV0JJZE%2BzzFvr82Y6uFjcBDYG2IcKBKNRkEoCEv%2BU70JczZNvo%2FHMCbJDmMl%2BLs0ddqEdDLIVg6uuXhI1OkhcRPpjY9ti5GA%2F2tR8DeaP9D66H%2F7gM0XiecDiIkBp%2BdML5VDTaJZhNR5ER0%2F6KQMcm6DCc7rbBBjqkAcaIlsyNvAL8Vhx5amrECKtSkeKXWwG9666wD66SZGShDbIx1Ex%2FIcCudCPB6k4MIw6HVE59pgg393K5Z4X4MAWoxkvsCZwrqSiwNv2oNuH3dnuhoWiwZ2bhwjyVcH2a4ZtCZdz3LOVN7eawrsqPTOXy1lrtNJbq8Ld1P0bIkhDatIQ6IUWDOhd5IITOP8mt72dQIZF2KHcuJBputg%2FKc%2FgIy5Jx&X-Amz-Signature=6a0d12799cc36511ac452e9be7210d308cc8936767d20237cd9a48b1ac1c9e2a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
