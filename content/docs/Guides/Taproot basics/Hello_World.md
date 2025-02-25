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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXT6LVV6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQD5bhdXy1KJflCKPEY0UK2KTGcUjPff1mU27V4zxeAk9gIgHztVQnfKTFnImp67CEb1GnU%2B3%2BnhD1lEP36FOcCr2Xoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEAJhrBG2PQh%2FOiFQSrcA6dhrOIJwsMcPb9bSXHc1GYNWMt73Cm2BmBwjP2Xud9FFI9WcaBpadEwB7mE%2BXVUPX3QQ8uOuz5%2BX%2Fq7x%2F3pnOq99Ryg5Rddn147Yl3KQ05kYLuVSvdqKflWADn86X9JUjfnzFEiFupCgG31m6z%2FB4sM75y2HY%2B5lvuGNeUklzwvyv%2FEn76is5bj%2FfDAu%2B8GPFOIA6l12nwBDv%2Fv8KdY3cS3Yjx2GNn%2BduZQq9illDAtBg%2BzLK03x0bJahszCf6utBUUEDYfhmnhhNlfwlPQlKFqSIQ6WUwVeRB5f57iry729Zdb%2BgcFQf4mAOm8iiI%2BozWSQSxs2mxo2La4k0vjUtNp8eU%2BnKQG8C%2BwzW3ll7QtnhTkkTW3E8ifA7Op9GWqa39Ney%2FHSe4vdXb7gsnbg6jhnvovuj1pPiD3g85R%2F%2BWdDF25NwbkpftOlJjIL6%2BxIg9kR%2FMjsZpRyar0aq0BeW0M3GNupCDpkIPNns%2FXoqgd8%2BHkK1IKLZSDOuAq9TkVvEmUiaL9o6V%2FD4%2F9kRc%2BM9dmByMMBa%2Fv1JBu7OXRAvPXQoylZ20WeR1R2DqvTxswmmCjTiE1WSmvi3tNNBE6Cki8p4c0%2F9Xxv1dff05elTrm4vFGx3%2B1lUqvQt%2B2MOOz970GOqUB81pEc6j7mBtzxDIQ4FUMCA5%2FcL8BHD56ckgVDqKhkLdbfxeJSYusB4kgfmvPGzvkbUSnbAb%2Bv0mi8G53TnDof6IdT%2FXfHE1ByXrckwy2UFsqjVJJC4wW%2FYs097NrugqRLCQRiUHIwtrvki8qeXq%2BemRLALNgJOv8TYx5heUm7nJ7nwgm8OPlBj0T7Xu%2Fo1SS%2BBaMhoD600ZUyiYSSB3TpgZLqveI&X-Amz-Signature=7cdcbce09b87ff0148233487bd3556285839b7198a0ea59e3a5c030bb3f06f8c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TXT6LVV6%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T150816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA8aCXVzLXdlc3QtMiJHMEUCIQD5bhdXy1KJflCKPEY0UK2KTGcUjPff1mU27V4zxeAk9gIgHztVQnfKTFnImp67CEb1GnU%2B3%2BnhD1lEP36FOcCr2Xoq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDEAJhrBG2PQh%2FOiFQSrcA6dhrOIJwsMcPb9bSXHc1GYNWMt73Cm2BmBwjP2Xud9FFI9WcaBpadEwB7mE%2BXVUPX3QQ8uOuz5%2BX%2Fq7x%2F3pnOq99Ryg5Rddn147Yl3KQ05kYLuVSvdqKflWADn86X9JUjfnzFEiFupCgG31m6z%2FB4sM75y2HY%2B5lvuGNeUklzwvyv%2FEn76is5bj%2FfDAu%2B8GPFOIA6l12nwBDv%2Fv8KdY3cS3Yjx2GNn%2BduZQq9illDAtBg%2BzLK03x0bJahszCf6utBUUEDYfhmnhhNlfwlPQlKFqSIQ6WUwVeRB5f57iry729Zdb%2BgcFQf4mAOm8iiI%2BozWSQSxs2mxo2La4k0vjUtNp8eU%2BnKQG8C%2BwzW3ll7QtnhTkkTW3E8ifA7Op9GWqa39Ney%2FHSe4vdXb7gsnbg6jhnvovuj1pPiD3g85R%2F%2BWdDF25NwbkpftOlJjIL6%2BxIg9kR%2FMjsZpRyar0aq0BeW0M3GNupCDpkIPNns%2FXoqgd8%2BHkK1IKLZSDOuAq9TkVvEmUiaL9o6V%2FD4%2F9kRc%2BM9dmByMMBa%2Fv1JBu7OXRAvPXQoylZ20WeR1R2DqvTxswmmCjTiE1WSmvi3tNNBE6Cki8p4c0%2F9Xxv1dff05elTrm4vFGx3%2B1lUqvQt%2B2MOOz970GOqUB81pEc6j7mBtzxDIQ4FUMCA5%2FcL8BHD56ckgVDqKhkLdbfxeJSYusB4kgfmvPGzvkbUSnbAb%2Bv0mi8G53TnDof6IdT%2FXfHE1ByXrckwy2UFsqjVJJC4wW%2FYs097NrugqRLCQRiUHIwtrvki8qeXq%2BemRLALNgJOv8TYx5heUm7nJ7nwgm8OPlBj0T7Xu%2Fo1SS%2BBaMhoD600ZUyiYSSB3TpgZLqveI&X-Amz-Signature=536263c3d6be863cff9bd187a879cb931329eed7906a4dbe929c9cdfc4cfd837&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
