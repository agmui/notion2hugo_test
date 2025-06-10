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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPILZEG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnxR0M2VmJWXPRmDK2F3J0rCeMlZcnDhGNnhsLeoeF0wIhAMu%2Bo9Iw5TfKlIFHk7f8eSH%2BjmqXNAgt83CQy5kbBq%2BmKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypCe6eGLCYIX7xGrUq3AOedzminWRX62InBnr%2BxMF3Hv%2B%2FmHebNF4M3vdV2b5E0LjWaf73zLqRemRTK07EEctEq8BqE3t%2FGi5taX4SbrWRPeVDoYMmQfvCy%2FQ3EhauBojNcRZckpXpq9kZK6NpuyxVghwENcqJDPmTm5wgTE3S0Xjs8TCP8HJAfKTL9II%2BzK6F%2BEuXMgUI6jG0mGFDpQ49ZTI%2Bv%2BRgzxpuU87mRBwDT9og50AB4pbBpNcsrlep7Zq9PTyufJSglFzSYwKrxd5pAsEDwLJ6limIhOEvOwN3DsFtLaz8efmxluuUTjjU4z1xo63jyo%2B3b4rqmHWqd6uDHNeyU3TeFDlAonq25t8mWJlDwW7hT99lhqLcamAaAkqVEvghQ4M51sQ2uO4BXFOQfXLeb2Jp4VJ3R9mKuLomdDaK3ESV5QOdpVMC0z9uZ%2FdFkGsbWOv%2Fuiy58A5cUtopafQW8hQ%2Fb%2FcXTZQC4bt9rre9onkZ2Wt8RgsRkpmWcVDXclG%2BKwjE6zv3c5QCEg9tPS1D0WtVm87AbPn3gQvJ%2FOjS%2F%2BQV82tXZkloWZUM%2BOp0kUjAu0td1MzZf8LJ5alfS7y5xV8WPAbjLRrKecCaIdIxQt3U8VW2OqGvDuxqMtXobvlT4RxwQNHxKTC7v6DCBjqkAXXuWY3CbThooF%2F4Xi2JjqD84EIgeO9plam26pxm%2Btm1VEKF0St7JEA2SYCFeZOWWpDllpq01UH0ai7DGmuh9Toez3xwhFwO1SEEWnB7U%2BxosTBdhBB%2FM6Zt0EISiJ3yk%2FjZrwmkrYY%2FkINb2gbPDRVzyF0zcnf6vLHKJUewGSYGa8cK5piJ%2BgjGlaCRWkS%2B9AWI8csbT5ViUvZRAjntIY%2B9VKQ5&X-Amz-Signature=400d7266237c3893d72aeea6ee46837fe30d162e23fa8ea1bcb3fcc50305752c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQPILZEG%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T121649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnxR0M2VmJWXPRmDK2F3J0rCeMlZcnDhGNnhsLeoeF0wIhAMu%2Bo9Iw5TfKlIFHk7f8eSH%2BjmqXNAgt83CQy5kbBq%2BmKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgypCe6eGLCYIX7xGrUq3AOedzminWRX62InBnr%2BxMF3Hv%2B%2FmHebNF4M3vdV2b5E0LjWaf73zLqRemRTK07EEctEq8BqE3t%2FGi5taX4SbrWRPeVDoYMmQfvCy%2FQ3EhauBojNcRZckpXpq9kZK6NpuyxVghwENcqJDPmTm5wgTE3S0Xjs8TCP8HJAfKTL9II%2BzK6F%2BEuXMgUI6jG0mGFDpQ49ZTI%2Bv%2BRgzxpuU87mRBwDT9og50AB4pbBpNcsrlep7Zq9PTyufJSglFzSYwKrxd5pAsEDwLJ6limIhOEvOwN3DsFtLaz8efmxluuUTjjU4z1xo63jyo%2B3b4rqmHWqd6uDHNeyU3TeFDlAonq25t8mWJlDwW7hT99lhqLcamAaAkqVEvghQ4M51sQ2uO4BXFOQfXLeb2Jp4VJ3R9mKuLomdDaK3ESV5QOdpVMC0z9uZ%2FdFkGsbWOv%2Fuiy58A5cUtopafQW8hQ%2Fb%2FcXTZQC4bt9rre9onkZ2Wt8RgsRkpmWcVDXclG%2BKwjE6zv3c5QCEg9tPS1D0WtVm87AbPn3gQvJ%2FOjS%2F%2BQV82tXZkloWZUM%2BOp0kUjAu0td1MzZf8LJ5alfS7y5xV8WPAbjLRrKecCaIdIxQt3U8VW2OqGvDuxqMtXobvlT4RxwQNHxKTC7v6DCBjqkAXXuWY3CbThooF%2F4Xi2JjqD84EIgeO9plam26pxm%2Btm1VEKF0St7JEA2SYCFeZOWWpDllpq01UH0ai7DGmuh9Toez3xwhFwO1SEEWnB7U%2BxosTBdhBB%2FM6Zt0EISiJ3yk%2FjZrwmkrYY%2FkINb2gbPDRVzyF0zcnf6vLHKJUewGSYGa8cK5piJ%2BgjGlaCRWkS%2B9AWI8csbT5ViUvZRAjntIY%2B9VKQ5&X-Amz-Signature=4668b6de8561c42835d507207302504f8d352f3cc8d35456f7a0873a77de806a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
