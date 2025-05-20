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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NMTYUGR%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDciA08Sqwwc74aj%2Bz3E2ww%2FM7cBc%2BiMk3CVTSQKkmdHgIgOdU%2FDGJPrwOzSsn0jGxcAclH3jJjfJQ6qqC48Q8gOIcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgzGVWUoadlXXVPAircA9scW%2FpOcqSoE%2BDXol6wOM%2FQaJBVfBt1B3ghhc1sChJpdsGpU3ydY%2BsZDp%2FnSSbJtLTcygMom31sJusFXDEYCF1eDThK5unhgyYKqtmwQmiYf9c8n93W3sS42%2BzlDRJIGv%2BxDqmtzH3iQlTO1IDEtj6rDT0O%2FQN59z0PLfEWSzSF5dsQQMJh5iJ5B4wg%2F8T0tOA%2BViYA%2BZ9g9BVlCe7PJj%2FkR19zG3WABBJjP5jrYoWSGZ59AMShxxVcYcVPv2JU1LUsQuBFTL28eZgeNi76pcvG7B1SJsG97TSsim1HpreKA%2BF4QWjEfNcmcqP3uwxkfQdwpNdSUS%2BPj5EfnWCe3f%2FsFUveCAfI%2FVlK2M4n7vPxxMa9Dp%2FuxTqPAU3cnF1F4ivhS0W26S2lXQGT6cUdYypA5Rb1yLsgWCqqNos8FxkG2bC6ym%2F0xzBzs%2BkULd43xRkGy15kf2jWz0EbNEdFlnwv%2BDODGNBs%2Fakcn2PFs19MLnOopEAO%2BU2KALOIIf8NHSwv3XCccSG%2Bbk%2BQR9vD7XcsFQL%2F31z0BeyRZ1XQcpbIBgze8cEFUPzHvdMetgeTg%2B2eyWeINB7MLbX%2B0e%2BLeBMWx3%2FhGJWbVH4XgKtKP8wfnHGtoWaEM8ias5udMOL6r8EGOqUBllqqJkZ48QfYf3prhQRn3fuIiR7nFccAU5%2BC4D9O3WTiJxOO%2F82EFPZKNLydaETtsRJ4yuOau4Hf4QcZgePfg%2FUBV5AcwobzBZmFsvSloFETCAiUHW8zOFm%2BgtuvlU0jRVJoLw27KSSSa%2B2gNyHyrsvD7x2NvvT16a9UDf1Of3jag3VBi%2FF%2BazosQA4xaBbIhCgqIYgLsmTOvPcaNzSuYFMKMa9J&X-Amz-Signature=3bbc62ec879528e9cd172ec1becd256770db12fdc20171777e3d1133fe78c444&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NMTYUGR%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T041217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDciA08Sqwwc74aj%2Bz3E2ww%2FM7cBc%2BiMk3CVTSQKkmdHgIgOdU%2FDGJPrwOzSsn0jGxcAclH3jJjfJQ6qqC48Q8gOIcqiAQInf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAgzGVWUoadlXXVPAircA9scW%2FpOcqSoE%2BDXol6wOM%2FQaJBVfBt1B3ghhc1sChJpdsGpU3ydY%2BsZDp%2FnSSbJtLTcygMom31sJusFXDEYCF1eDThK5unhgyYKqtmwQmiYf9c8n93W3sS42%2BzlDRJIGv%2BxDqmtzH3iQlTO1IDEtj6rDT0O%2FQN59z0PLfEWSzSF5dsQQMJh5iJ5B4wg%2F8T0tOA%2BViYA%2BZ9g9BVlCe7PJj%2FkR19zG3WABBJjP5jrYoWSGZ59AMShxxVcYcVPv2JU1LUsQuBFTL28eZgeNi76pcvG7B1SJsG97TSsim1HpreKA%2BF4QWjEfNcmcqP3uwxkfQdwpNdSUS%2BPj5EfnWCe3f%2FsFUveCAfI%2FVlK2M4n7vPxxMa9Dp%2FuxTqPAU3cnF1F4ivhS0W26S2lXQGT6cUdYypA5Rb1yLsgWCqqNos8FxkG2bC6ym%2F0xzBzs%2BkULd43xRkGy15kf2jWz0EbNEdFlnwv%2BDODGNBs%2Fakcn2PFs19MLnOopEAO%2BU2KALOIIf8NHSwv3XCccSG%2Bbk%2BQR9vD7XcsFQL%2F31z0BeyRZ1XQcpbIBgze8cEFUPzHvdMetgeTg%2B2eyWeINB7MLbX%2B0e%2BLeBMWx3%2FhGJWbVH4XgKtKP8wfnHGtoWaEM8ias5udMOL6r8EGOqUBllqqJkZ48QfYf3prhQRn3fuIiR7nFccAU5%2BC4D9O3WTiJxOO%2F82EFPZKNLydaETtsRJ4yuOau4Hf4QcZgePfg%2FUBV5AcwobzBZmFsvSloFETCAiUHW8zOFm%2BgtuvlU0jRVJoLw27KSSSa%2B2gNyHyrsvD7x2NvvT16a9UDf1Of3jag3VBi%2FF%2BazosQA4xaBbIhCgqIYgLsmTOvPcaNzSuYFMKMa9J&X-Amz-Signature=5792f35f91a2f07251d9f28811bc6430c50e9642e45fb7ada30aaf3d6894e5bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
