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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF4E6KT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCRFOUqfAS4GC5sISBJCMexqoJ6snwIWxTtTUFyacG35wIhAOCS%2BS8HBQr8r0iZ358DV%2Fi31BSR8z0VxPxre%2BuSOqTXKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BL4G2R72XYiBhuxgq3AO%2Bi7ACdYHeA%2Fta7uIRnB89fvQtETq5J%2Bzk%2B0fnit3pfJxyqh2%2FzhLggM7n%2F0YHr7WfecSoOwN4bG5mnIGYCAX6n5lHgRYmyMTfAJ24lxmLef6hlN3wCPewwUw%2BVQuNgJjOstOC34aEWKkcnq%2Bvv2mJaM5R9UY9lT807ZvripwSL3TKpuYNNFCVee5GUnre4JM0uCiX2%2BN8HA8hssEH6zOvyUrLDMji4DdE7lbl1On9JdjmKTUSxZu1mnLYygGGW1cNTlaG1zDl3lJ9f5Ol80t3YxLXI31ewvTMD1UBHD8Uxmro0yVeIDz%2BE4%2FrugJ5pGWi8C%2FvTaz00PB5OwpG4OnzKj8bngBo%2FB8SZhBSYQf5hcDKXNNl868IYac3J%2FipqrdxKJTY9uqbokomYS3NOP4PgC8VCC1YBy%2FoHjWBkXfvputIXzKhqPAPC7Xw8rRKGyEdbd%2F35YJesRxUXrsb57Zqv6Pn0lxhSfxeGFxFPoxmx5wHp44I27c4z%2FnUMtquQ9WtBXdrxp1MyU6Ozdwy%2BKCJftwHSl57fRDUTrkoV4A9om6Njh61sNO3FPAJToCfdS1jDW4WSmPFXj7xG3N5kHQFR4iU7Q9siNKvpOcblg9Q66MvDIWd6jqdA%2Fcu6TCCpJLABjqkAdIpMMixv43PxPH405ldrUl72tEbRIlxhsPDJNO7gzg0WlYNilGOx%2BL31ZcC%2F%2F9Ta0K0OKc7elCmGdUJitkbWB9e5D2DcWIykON8kHHgIS01pxbgygUeElCTlkS4RG%2ByYBNOSUeXJVE4GhRDp8XhJVE2unOoE7IgiQpZTsvhwNGflK3uBPfa3uGbAjF5QsTBMMLNHX0QMB7swC%2FpTQlBpHQg8Rj7&X-Amz-Signature=7eb90023e50d0518fa6c147805e98ac2309df8530081122ef3b0f8d15c0afc0e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UF4E6KT%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T090729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJIMEYCIQCRFOUqfAS4GC5sISBJCMexqoJ6snwIWxTtTUFyacG35wIhAOCS%2BS8HBQr8r0iZ358DV%2Fi31BSR8z0VxPxre%2BuSOqTXKogECJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2BL4G2R72XYiBhuxgq3AO%2Bi7ACdYHeA%2Fta7uIRnB89fvQtETq5J%2Bzk%2B0fnit3pfJxyqh2%2FzhLggM7n%2F0YHr7WfecSoOwN4bG5mnIGYCAX6n5lHgRYmyMTfAJ24lxmLef6hlN3wCPewwUw%2BVQuNgJjOstOC34aEWKkcnq%2Bvv2mJaM5R9UY9lT807ZvripwSL3TKpuYNNFCVee5GUnre4JM0uCiX2%2BN8HA8hssEH6zOvyUrLDMji4DdE7lbl1On9JdjmKTUSxZu1mnLYygGGW1cNTlaG1zDl3lJ9f5Ol80t3YxLXI31ewvTMD1UBHD8Uxmro0yVeIDz%2BE4%2FrugJ5pGWi8C%2FvTaz00PB5OwpG4OnzKj8bngBo%2FB8SZhBSYQf5hcDKXNNl868IYac3J%2FipqrdxKJTY9uqbokomYS3NOP4PgC8VCC1YBy%2FoHjWBkXfvputIXzKhqPAPC7Xw8rRKGyEdbd%2F35YJesRxUXrsb57Zqv6Pn0lxhSfxeGFxFPoxmx5wHp44I27c4z%2FnUMtquQ9WtBXdrxp1MyU6Ozdwy%2BKCJftwHSl57fRDUTrkoV4A9om6Njh61sNO3FPAJToCfdS1jDW4WSmPFXj7xG3N5kHQFR4iU7Q9siNKvpOcblg9Q66MvDIWd6jqdA%2Fcu6TCCpJLABjqkAdIpMMixv43PxPH405ldrUl72tEbRIlxhsPDJNO7gzg0WlYNilGOx%2BL31ZcC%2F%2F9Ta0K0OKc7elCmGdUJitkbWB9e5D2DcWIykON8kHHgIS01pxbgygUeElCTlkS4RG%2ByYBNOSUeXJVE4GhRDp8XhJVE2unOoE7IgiQpZTsvhwNGflK3uBPfa3uGbAjF5QsTBMMLNHX0QMB7swC%2FpTQlBpHQg8Rj7&X-Amz-Signature=ab91a866b932740b5d26d3103aaf68c20fa98a661094eed123527d8e21e8a063&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
