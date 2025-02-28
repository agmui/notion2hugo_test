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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CRHQDBF%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGVmnsv%2FSVofCU4GDJN5wC6cniCElEJ%2B22r4jVcGR7AOAiEA48tETtVz%2Fjl2rxyz1iURvmB5lvExtmhcH878Y4eTuM4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAnrbgrXKgqMbJI1CrcAzST4FwUrBTmc9S3uHFbK31UHGa2mw15CZHSMFyicgHUS6rdiXb%2B0vpa2nHy8T3GQhO85C5GCZhjDMMy7rf8hPDjeNCfw58DZ%2F07LQDwOSo1T9oXOUAyJ9C8w%2B4gVNhKKgbukJZ0X3AQk6YVgF2Hv%2BeLKZDVDNAYpKT369nbyI4SGIlV49%2B7WeSDiQ%2BH0pLcle%2BtBFPIQza3xEt2%2B5D7PoRFFRvkmMgok5gTb04IpxsI2ztz5kRZhIHyqbcwxfqulKaNU9KjMkrIzoLT2Vo2jUJrDfF%2FpVWm5mjLBqJntSxxFes%2FldgXjsj7OYDsiR1CeDic04ZvF%2Bv3L04MhtGSvFmFSj9qWV8fKAZrV3cnCHJfOpdVbt7HpPGa1EM38tlfd%2FBKzvrEgXaUzH45kpwjpSwYTKdW3W0ODB%2F5PtA%2FQZSUptjE15Ut2tgPQWR%2BNb0SNXIwUCm2t124SuD1Gxds3dl3Ux0xNUFaRnxS%2FiLSc9TzA88OmRiag5IoWBlAopFgA7kJQjESDI9fm8DOEYhBVe6EVQUmXOVYh56LzjTW1e%2Fm9BMLKGcrlr%2F%2FBY%2FvApKom8gsiO4zmyyzJhb5AnmMlnpC8iBwfuqC27PdTiW8VMZLDKc2OR2iYtQG38SVMLmThr4GOqUBw5XQLdstbEAK%2BU%2FSg4bWolAa%2FX2VRt9lS%2BbByyZnmjwq0Ts2gkgy8BGj1hkB7xpBwnrAyXzt6hHmVkoIul08XiTQJVmNPd7DdUR6t1bp%2B3gMGSm6vHdoXxEHm50JZA5CQeb9nuW6j9Vne2aVVAtHnQj%2FjvLErllRF8Y0MkePAWkj9XJ6M1bB2VNxU7qTXu1J1UQwcCRTWcS76e58Oa5RER3bdRfb&X-Amz-Signature=6c6cbaa815384d0955bbdec2ae3a197abb770681bd515aebb0ce507d7ad477eb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CRHQDBF%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T100830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFIaCXVzLXdlc3QtMiJHMEUCIGVmnsv%2FSVofCU4GDJN5wC6cniCElEJ%2B22r4jVcGR7AOAiEA48tETtVz%2Fjl2rxyz1iURvmB5lvExtmhcH878Y4eTuM4qiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKAnrbgrXKgqMbJI1CrcAzST4FwUrBTmc9S3uHFbK31UHGa2mw15CZHSMFyicgHUS6rdiXb%2B0vpa2nHy8T3GQhO85C5GCZhjDMMy7rf8hPDjeNCfw58DZ%2F07LQDwOSo1T9oXOUAyJ9C8w%2B4gVNhKKgbukJZ0X3AQk6YVgF2Hv%2BeLKZDVDNAYpKT369nbyI4SGIlV49%2B7WeSDiQ%2BH0pLcle%2BtBFPIQza3xEt2%2B5D7PoRFFRvkmMgok5gTb04IpxsI2ztz5kRZhIHyqbcwxfqulKaNU9KjMkrIzoLT2Vo2jUJrDfF%2FpVWm5mjLBqJntSxxFes%2FldgXjsj7OYDsiR1CeDic04ZvF%2Bv3L04MhtGSvFmFSj9qWV8fKAZrV3cnCHJfOpdVbt7HpPGa1EM38tlfd%2FBKzvrEgXaUzH45kpwjpSwYTKdW3W0ODB%2F5PtA%2FQZSUptjE15Ut2tgPQWR%2BNb0SNXIwUCm2t124SuD1Gxds3dl3Ux0xNUFaRnxS%2FiLSc9TzA88OmRiag5IoWBlAopFgA7kJQjESDI9fm8DOEYhBVe6EVQUmXOVYh56LzjTW1e%2Fm9BMLKGcrlr%2F%2FBY%2FvApKom8gsiO4zmyyzJhb5AnmMlnpC8iBwfuqC27PdTiW8VMZLDKc2OR2iYtQG38SVMLmThr4GOqUBw5XQLdstbEAK%2BU%2FSg4bWolAa%2FX2VRt9lS%2BbByyZnmjwq0Ts2gkgy8BGj1hkB7xpBwnrAyXzt6hHmVkoIul08XiTQJVmNPd7DdUR6t1bp%2B3gMGSm6vHdoXxEHm50JZA5CQeb9nuW6j9Vne2aVVAtHnQj%2FjvLErllRF8Y0MkePAWkj9XJ6M1bB2VNxU7qTXu1J1UQwcCRTWcS76e58Oa5RER3bdRfb&X-Amz-Signature=56d321cbe9753593947d6c643d4c16fb55146f9717c680df2e3a35f94151b3e7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
