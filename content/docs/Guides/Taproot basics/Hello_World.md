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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYVUXI3C%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFruhSaL%2FlC%2BZV3RI2Ip6m4mB7u%2BD1kbN5%2BIBZYyajrjAiEA4G99VzANxvFxhsFggmfl0gsCuDvzz%2BgjbLrc5iZ8HHsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARUJ1xPArA9Rnuo6yrcA78uPN80bHADn2jDB7P8Jhi4%2BlpvrBaFI57BzsnWjO5WXhkLx6XveBoOazZcL9jRXgRrJu2AqCc40QF8d2cNeRQAM1NkHCob7jPdVM5Opd951%2FxzOOTVUuQcY8zFcpNE48HPm72RRdGZs1A7g86DEDY99mEKbVhJBBImkYDUXsmFeVHF0pUlsOl6I3EYXs3k0%2B75diNG5Lk2IBRxde7kjtU%2FJa1%2BWdpzF%2FOEP6MNlStEUPHHNFgLVb5gxr7Iy5g7pwlB1%2Fpz%2FdQ8%2FcT5WIHkDi%2BdwyfTigKLKnadz157AUvzckQE1PmobkFjK%2Fzq7jnfNJoa3HnZgSdcAoFRfBT8tYTyl2gt2xwOPHzME0stwtOUrviX13eZ1m0KVq%2FDVP7P%2BN20fsvnEbr4Vt82hStnaqVRtXXzIgdBPrCozBFr8W5vgbneaFqMluBo1WP541ZDOPDBkUTrUt91n0PuoLZYOaxh8NPe1u9uZM3Rq5jHg%2Fw30oSIsfIolSacIqANeeCqyow%2BD6gMYyQccnxwpFLUmgzbRQfF6AM05bhr2Tsk%2BCKEGTnIWZhYkt98ftE8Gr7WNTi32X5%2B3wcfPU7m165W%2FPJefBdIPKzEjNm9wwaR1L7jPC%2FMeVGJlMKcXrfOMPz5%2FcIGOqUBMwmSurqssLg5zwMap8EvO4aQ2Bxg2xjpuo52s71jz13yvO3J7u6xSBPMDPZ9GwV78W0sZk0Nr9hIDrq9JO4Ou4HtebliApBlVvOCW7srfZ16rMgXU%2FVyUfgkPUV1OA8EkiBcUDNS%2BDgAUL9krngQ9%2BoWITNXcay4MhUROdb4dHr9KGFrHN2AqVLj3tw9dH8fh5DpscewGbjYJ7Q08HbxDvUnS97V&X-Amz-Signature=ea83f590c73dcc7b5d00419c8acd8c4a2b89d9a5bb5acab49d6003ddf400e928&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYVUXI3C%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T061123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFruhSaL%2FlC%2BZV3RI2Ip6m4mB7u%2BD1kbN5%2BIBZYyajrjAiEA4G99VzANxvFxhsFggmfl0gsCuDvzz%2BgjbLrc5iZ8HHsqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDARUJ1xPArA9Rnuo6yrcA78uPN80bHADn2jDB7P8Jhi4%2BlpvrBaFI57BzsnWjO5WXhkLx6XveBoOazZcL9jRXgRrJu2AqCc40QF8d2cNeRQAM1NkHCob7jPdVM5Opd951%2FxzOOTVUuQcY8zFcpNE48HPm72RRdGZs1A7g86DEDY99mEKbVhJBBImkYDUXsmFeVHF0pUlsOl6I3EYXs3k0%2B75diNG5Lk2IBRxde7kjtU%2FJa1%2BWdpzF%2FOEP6MNlStEUPHHNFgLVb5gxr7Iy5g7pwlB1%2Fpz%2FdQ8%2FcT5WIHkDi%2BdwyfTigKLKnadz157AUvzckQE1PmobkFjK%2Fzq7jnfNJoa3HnZgSdcAoFRfBT8tYTyl2gt2xwOPHzME0stwtOUrviX13eZ1m0KVq%2FDVP7P%2BN20fsvnEbr4Vt82hStnaqVRtXXzIgdBPrCozBFr8W5vgbneaFqMluBo1WP541ZDOPDBkUTrUt91n0PuoLZYOaxh8NPe1u9uZM3Rq5jHg%2Fw30oSIsfIolSacIqANeeCqyow%2BD6gMYyQccnxwpFLUmgzbRQfF6AM05bhr2Tsk%2BCKEGTnIWZhYkt98ftE8Gr7WNTi32X5%2B3wcfPU7m165W%2FPJefBdIPKzEjNm9wwaR1L7jPC%2FMeVGJlMKcXrfOMPz5%2FcIGOqUBMwmSurqssLg5zwMap8EvO4aQ2Bxg2xjpuo52s71jz13yvO3J7u6xSBPMDPZ9GwV78W0sZk0Nr9hIDrq9JO4Ou4HtebliApBlVvOCW7srfZ16rMgXU%2FVyUfgkPUV1OA8EkiBcUDNS%2BDgAUL9krngQ9%2BoWITNXcay4MhUROdb4dHr9KGFrHN2AqVLj3tw9dH8fh5DpscewGbjYJ7Q08HbxDvUnS97V&X-Amz-Signature=8f5299679adb88158d7470b81114d04c9fd7d3c4d323e82330b9daf784141780&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
