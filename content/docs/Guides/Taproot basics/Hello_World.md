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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y33CDKTI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFuuGndH7NJQSKrC8dJhe1B0n67A46M1vGAhzW1C5mskAiEA0%2BvasQhjYKdRbSczSsYpPFsvmuiK5ELzIcK7KHZr1bgqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXsRnmeyrzz1qAiwSrcA5wMMd%2BFhBpbG6BN6byzi1p4VUTH73QQAd%2BK5mJPG8mlyoqjesJF2knaFeo2Lbdw1pDaxn9vZBeXnggAkzjSXjOimrHviboW4A6joZ4MVpSfbKxmub2b9RiFQQBa2MiUjOw5I3Efpf4rBMCnhHCec3FfU5QNRMvf%2FAaCOxsPdl1mZGKFJcdz7q3HOEzl%2FFrcep%2BRKHxQlZBabmvBRwbu2WCeNXBHUM2CTJB7k669ekwYEEUHUwJrditHUQ70VUC%2F9JxBlJUz1f%2BbOSGiont3DlB1sKBX1bdfLfRtCNJdpOI20HrWVLk0B3KiG2umfD01YhIE1MFgqmDysCnEXAwvG8nygVMhnC3sTUFyejypcxaKuOVKq2AqsR%2BdmU%2FEf9GCngYfZ%2FOe0GyHYg71BrpRMR6rDX6pyQ5JipeRs0BCnuyMOIXVnFvYbebEMzoGQTrgAcK43BoDKPFmeJr%2FQ7zro8BU3vejRcsQkwXoK5jVzmiiICukzArYILsj1FLdnuV2f1l63hdUu6Q3LAnQwTsWX8PaXbWYPVCA6Af5TVkJqmWIT1Q3oCVwPrijK1P%2BhikpnlLhqYIL9TUvdBKJSJdE77Z%2BHYOhLU6LwMeJ3uK4%2BdC3TfOq1slLr%2FU8U107MIDVjcAGOqUBEJKRmEy8m1hPht3r5xy8VOjDVF%2BVNYDJGdNlqPaMpp21SgTaAYC%2BSq8v4y3LTyWV20aDYxj6ox4Gt98y0YL4dN%2F42NZYj%2BALU0nxZHNgqaqsY8mc0ZdceBdSKDXqKNDjGNap2kN7dtnR2q4c4%2BqpVRnbexs82bt0nzukySts7zTSTdAqxB6A9X1FlG%2BPqWqE1%2BOD6F6mW37BmvJ0HCgPJ42%2FKYlf&X-Amz-Signature=b31dddfdc4fb3d55e2635e71ff46d2c05ca9c7cc03fea2f4c6bf77f29fe0f8d2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y33CDKTI%2F20250419%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250419T110148Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJHMEUCIFuuGndH7NJQSKrC8dJhe1B0n67A46M1vGAhzW1C5mskAiEA0%2BvasQhjYKdRbSczSsYpPFsvmuiK5ELzIcK7KHZr1bgqiAQIiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJXsRnmeyrzz1qAiwSrcA5wMMd%2BFhBpbG6BN6byzi1p4VUTH73QQAd%2BK5mJPG8mlyoqjesJF2knaFeo2Lbdw1pDaxn9vZBeXnggAkzjSXjOimrHviboW4A6joZ4MVpSfbKxmub2b9RiFQQBa2MiUjOw5I3Efpf4rBMCnhHCec3FfU5QNRMvf%2FAaCOxsPdl1mZGKFJcdz7q3HOEzl%2FFrcep%2BRKHxQlZBabmvBRwbu2WCeNXBHUM2CTJB7k669ekwYEEUHUwJrditHUQ70VUC%2F9JxBlJUz1f%2BbOSGiont3DlB1sKBX1bdfLfRtCNJdpOI20HrWVLk0B3KiG2umfD01YhIE1MFgqmDysCnEXAwvG8nygVMhnC3sTUFyejypcxaKuOVKq2AqsR%2BdmU%2FEf9GCngYfZ%2FOe0GyHYg71BrpRMR6rDX6pyQ5JipeRs0BCnuyMOIXVnFvYbebEMzoGQTrgAcK43BoDKPFmeJr%2FQ7zro8BU3vejRcsQkwXoK5jVzmiiICukzArYILsj1FLdnuV2f1l63hdUu6Q3LAnQwTsWX8PaXbWYPVCA6Af5TVkJqmWIT1Q3oCVwPrijK1P%2BhikpnlLhqYIL9TUvdBKJSJdE77Z%2BHYOhLU6LwMeJ3uK4%2BdC3TfOq1slLr%2FU8U107MIDVjcAGOqUBEJKRmEy8m1hPht3r5xy8VOjDVF%2BVNYDJGdNlqPaMpp21SgTaAYC%2BSq8v4y3LTyWV20aDYxj6ox4Gt98y0YL4dN%2F42NZYj%2BALU0nxZHNgqaqsY8mc0ZdceBdSKDXqKNDjGNap2kN7dtnR2q4c4%2BqpVRnbexs82bt0nzukySts7zTSTdAqxB6A9X1FlG%2BPqWqE1%2BOD6F6mW37BmvJ0HCgPJ42%2FKYlf&X-Amz-Signature=13ab2aee0381c4fdd250fc233e6a5615659e0900214f41eb3dc720fb208ee2e9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
