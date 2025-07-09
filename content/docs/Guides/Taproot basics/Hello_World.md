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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHMW2Z2%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA257rR40X5ZLvN4GNdrI4htiI9azN%2FBuSpdP0hULdaPAiEAxNKgE9mdpIU2wsc2LGt%2BJ5bk0Wtt%2BpiEce%2FTECvUFUUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FyQxIlm1Y0YmRBCSrcA%2BPsaqmFzfev5myFYz3bcVSK5zinPh38ct4UV6kKSCeoNZYF08KiQ%2FEPcymRU65s%2FNv1nomkHo5hiZ38%2FWDjXdQ%2B%2FWKr75IMeGV0AUuhK7dKoTXaON9ZBg%2BgIdJ3P1xAB8Vsoyp7vd0w2%2BBSn%2BeuXYdj0edahN2ROUXAAy3%2Fu%2Bx7BPtRSEeWhSunNKosvB1G0yokqTPaqwF4s99JLyXJFkvcb%2BCzb7syKpxHALdEV7NOJvTNM4q9AkHfZ0CkljyLlO%2BudVNbrCReU6XFdKUqU0v0%2BykSoRiT4Ck8HuwZivzUF%2Fo6ncgfoY41gBj0JeO7EI0Qobzu3icITZTJyX0BsDDO7FdRYHv44dQCU7ecsLoV1hQ9%2BU%2BaFQKgOal8VFAgNRl1DBVjsQx9ReeJ1DgfwV6k2e6zRRVgrzZ9jlj9xClNyDbZFHwjjaWJSPgBGnrV5SCL9o7gIoWKLnYCGoy6hgznmTW9E%2Bn9DWk4g9qd%2BKMZTlmEH7fsT2E%2FkBx3%2BzTv9cjtbHg7mm8d5idew9ftjKHTapE92w%2BW1KOm1XD%2Birg20eOI778BExBM%2Bnm1D4vE2AFjAJsNTTj7ItHYy3qDyv8%2F%2BJ7u7iXrveQfE4Q5Fpmo0eCmww1FEIjQbm4gMO6ztsMGOqUBnwe8bb7b3Y4uFyOT%2Bv7rrho%2FtxYCaMa4kM88vzjStr1aW5fRWjdHvGHkjtv9ooUgnWVl7hOgbyyTDQEClLAYl%2BPqW%2Fw5oS9C2qcV6iHtJ7D0wSdLmnzKnk8d4D%2FbJF%2Bca7eAQWmbT89Fxe7tYLIcRQpXViypwZHNzTxBvkPBYQ4ensNMAusibFP4720ELXIpTkar0HsmYe8BMDugKAFsWTdDLiKy&X-Amz-Signature=64925571e4e908296a250a2ed867df448d475df1c20b4f1f1377d3d900825713&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBHMW2Z2%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T004410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA257rR40X5ZLvN4GNdrI4htiI9azN%2FBuSpdP0hULdaPAiEAxNKgE9mdpIU2wsc2LGt%2BJ5bk0Wtt%2BpiEce%2FTECvUFUUqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2FyQxIlm1Y0YmRBCSrcA%2BPsaqmFzfev5myFYz3bcVSK5zinPh38ct4UV6kKSCeoNZYF08KiQ%2FEPcymRU65s%2FNv1nomkHo5hiZ38%2FWDjXdQ%2B%2FWKr75IMeGV0AUuhK7dKoTXaON9ZBg%2BgIdJ3P1xAB8Vsoyp7vd0w2%2BBSn%2BeuXYdj0edahN2ROUXAAy3%2Fu%2Bx7BPtRSEeWhSunNKosvB1G0yokqTPaqwF4s99JLyXJFkvcb%2BCzb7syKpxHALdEV7NOJvTNM4q9AkHfZ0CkljyLlO%2BudVNbrCReU6XFdKUqU0v0%2BykSoRiT4Ck8HuwZivzUF%2Fo6ncgfoY41gBj0JeO7EI0Qobzu3icITZTJyX0BsDDO7FdRYHv44dQCU7ecsLoV1hQ9%2BU%2BaFQKgOal8VFAgNRl1DBVjsQx9ReeJ1DgfwV6k2e6zRRVgrzZ9jlj9xClNyDbZFHwjjaWJSPgBGnrV5SCL9o7gIoWKLnYCGoy6hgznmTW9E%2Bn9DWk4g9qd%2BKMZTlmEH7fsT2E%2FkBx3%2BzTv9cjtbHg7mm8d5idew9ftjKHTapE92w%2BW1KOm1XD%2Birg20eOI778BExBM%2Bnm1D4vE2AFjAJsNTTj7ItHYy3qDyv8%2F%2BJ7u7iXrveQfE4Q5Fpmo0eCmww1FEIjQbm4gMO6ztsMGOqUBnwe8bb7b3Y4uFyOT%2Bv7rrho%2FtxYCaMa4kM88vzjStr1aW5fRWjdHvGHkjtv9ooUgnWVl7hOgbyyTDQEClLAYl%2BPqW%2Fw5oS9C2qcV6iHtJ7D0wSdLmnzKnk8d4D%2FbJF%2Bca7eAQWmbT89Fxe7tYLIcRQpXViypwZHNzTxBvkPBYQ4ensNMAusibFP4720ELXIpTkar0HsmYe8BMDugKAFsWTdDLiKy&X-Amz-Signature=102af7872bcac701f8784ce92efe7fb3d099e9aab296a3b9601054338f59d309&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
