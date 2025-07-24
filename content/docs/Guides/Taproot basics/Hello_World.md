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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3JQXBK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC1qOUGBD9ZUQriH31VBkxhpKR4TSgk2BC7X1qoRcJ7nAIgRXzZhsGMVqtkqZWRM1eZGTd3huXpt72Ea6Lz41BSIQ8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHmJvdomHgYVtVr%2BEircA2YnZJwFfbQyDbeK8peOEOWPvjer2pnp7V%2Bvov2XN5ACf5zWhSvUGLvrH96l34uuNTqPQ7b%2F35iAoS%2FmZ25x2b8%2F4%2BLa7JnOKsor0oiidH82jYGvOnj7b7oocbxGuHDKgG8NgsbWNwaDCkGT%2F2jOS32XjRhQRhKi6HFzjR59hAt7qwpZ5Vx%2FHUOhSUI44XkWb6l%2BgAwsS9ck0G2t01Hq5OTARbN2YGy6eauYV7Xg82VdEbXyh3oqO4DzsJHGwdBeodBuEcybVXeU1gdRPMSLIzDD%2BScD18KOmmEidr%2FjDqyJUOc5Y51S96dj3uBZGrgzpmtxMMQmxOblJR0oonJt1POVChjYzjOKLERiBEw2o2uvld5fCRO3qIRupB35cmI7S4%2BjejLnj6Y9HehP2KPn4fLXR6XS8Ti88IRysOFRqqoAptLQmLJpTCBjGzrf2LiOk0ONQ931p%2BAAJsQWA3wAZ8lKx5tsUJDmNGBnUNtGRur3VgZOLtG3PqBXyFHe6hwh53NvqTAP%2Bslp7DF8XMuyXCaCwlHBfFOgrFSI9npDj85a2mUmtBzOjRIkzU%2FqfhdgQ86PAPldcfcTkINBfaOSUlMgP%2F2y5UOMZH3CxFuss7MWatzSSZOz%2FR8L40bhMMzZiMQGOqUB8xJOfz%2BqpH0v2fcrykCZkgbQZJkiwbSec%2BXU%2FyVvNrQL0ga1a%2F3W%2BDIwgeFB9D6stX%2BmG2TUIyf8vkz5ZYCQ7e07tssoFX48FB1uD2hsekM0PIluD8d14pv%2BNz008AE%2BRteLcFwZMfAiO%2FozXIG%2BXvjuwIBoSuy4%2F6TyEiNO5Lr6RezIWkfJyShEmiPgwv19%2F1UpZ%2FcdaBDZWLTvfDUMIIjm%2FElb&X-Amz-Signature=bdb72bb511777fcfa164b879f4c6b11ff3061f7be3c215aaa0a82a1602fe5f7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YU3JQXBK%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T150931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAUaCXVzLXdlc3QtMiJHMEUCIQC1qOUGBD9ZUQriH31VBkxhpKR4TSgk2BC7X1qoRcJ7nAIgRXzZhsGMVqtkqZWRM1eZGTd3huXpt72Ea6Lz41BSIQ8q%2FwMILhAAGgw2Mzc0MjMxODM4MDUiDHmJvdomHgYVtVr%2BEircA2YnZJwFfbQyDbeK8peOEOWPvjer2pnp7V%2Bvov2XN5ACf5zWhSvUGLvrH96l34uuNTqPQ7b%2F35iAoS%2FmZ25x2b8%2F4%2BLa7JnOKsor0oiidH82jYGvOnj7b7oocbxGuHDKgG8NgsbWNwaDCkGT%2F2jOS32XjRhQRhKi6HFzjR59hAt7qwpZ5Vx%2FHUOhSUI44XkWb6l%2BgAwsS9ck0G2t01Hq5OTARbN2YGy6eauYV7Xg82VdEbXyh3oqO4DzsJHGwdBeodBuEcybVXeU1gdRPMSLIzDD%2BScD18KOmmEidr%2FjDqyJUOc5Y51S96dj3uBZGrgzpmtxMMQmxOblJR0oonJt1POVChjYzjOKLERiBEw2o2uvld5fCRO3qIRupB35cmI7S4%2BjejLnj6Y9HehP2KPn4fLXR6XS8Ti88IRysOFRqqoAptLQmLJpTCBjGzrf2LiOk0ONQ931p%2BAAJsQWA3wAZ8lKx5tsUJDmNGBnUNtGRur3VgZOLtG3PqBXyFHe6hwh53NvqTAP%2Bslp7DF8XMuyXCaCwlHBfFOgrFSI9npDj85a2mUmtBzOjRIkzU%2FqfhdgQ86PAPldcfcTkINBfaOSUlMgP%2F2y5UOMZH3CxFuss7MWatzSSZOz%2FR8L40bhMMzZiMQGOqUB8xJOfz%2BqpH0v2fcrykCZkgbQZJkiwbSec%2BXU%2FyVvNrQL0ga1a%2F3W%2BDIwgeFB9D6stX%2BmG2TUIyf8vkz5ZYCQ7e07tssoFX48FB1uD2hsekM0PIluD8d14pv%2BNz008AE%2BRteLcFwZMfAiO%2FozXIG%2BXvjuwIBoSuy4%2F6TyEiNO5Lr6RezIWkfJyShEmiPgwv19%2F1UpZ%2FcdaBDZWLTvfDUMIIjm%2FElb&X-Amz-Signature=095d6415cf43f4a54b4550ab0adf8b17ba09044ec2e7417cf84d26a84f456b42&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
