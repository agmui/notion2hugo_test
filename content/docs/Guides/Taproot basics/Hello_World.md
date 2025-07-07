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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5SABL3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGid5iCaMyKrKyWWwgRUwjwg%2BNYV0sy60tI%2F7u%2F6zMmFAiBZqxJuWFrUyTjyk5AEOD2QpgmhPCJmBR2PvKK1EyCK3Cr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM9Qx2iKy8TkHmuNyKKtwD5RBSlaLLa0bR9zsBwSvutcjUcHfXgjAdHTwhqDRQ2DszppHuWCiwSwlPWJKS4dgknyjSxtexx%2B3P0QksMGeucAsujErxB4mKAOmdUauJE%2FDeS5pqrwXIbWTo9FdoKm9PF0v28Lz87wHRuUlKWfLwzeuMph64pCsmVCjDivlp%2FzlSihGp7Ie42%2FdZAYhQGSOQZhy4xF4szR1KJ7WML8ebIYea62HoCpkLfkYS3GQBkG6K3IHdsVAwt%2FF5p8hLYEC2srUrrU%2BMxTksa%2FeM8AKTb7SgUSS2Go7F4ATEp53NtfDrdG1vINYWqPsRkMI30jNcF4XGRi0KjztB0Ceee9YVC7NXNqHsPT8Qd89Ybl%2F95qgnzpSrlYu37fJRlxz6WOzmZGlPMGqjygpA6%2BoozQtt4AwPTHgg5oSnZ399t%2B6WyY3ZWpaiYyd8M5kYXTZvdIIKJ8l21%2BR6WfBMhwSm%2Bmxj7adMdUVOebPm6RunZsPPdN8fdBJnmXo9HKzwuFmyzRzMh5feEy3dSesa7NVEVXUayWv2x9vlSf6MjLaMHS9%2FGfa2wFvK%2Fw3Y7zZQoAEtJS2Xz535n2Qp0VEvbxD2zEfmAlcUg3xkyn4xmn3zkA420yxi4ABcqlVfyu9fDKQwtrivwwY6pgEhcwTzNbmBlBr329LXoVyRoM0izWMLJDMIPP7kpA9oLrjK0VQ%2BKd2yNSiEQ10iL1VyRJieJFhHJJ5KAH8vo88gKBdFL4zvHkzQhmxs5kiO4OgxXEvslJDyLOiIdu4l9YV4fgjUCs4SELTu35ydT8KpjIKbKZjFZAb%2FP2A0I8Fc%2BAmXLi6Df7DE5BRCh5W1kItl1ZqkRdutV6m%2Bwd8BuQOpUa1vPfGF&X-Amz-Signature=52740532c46521e615b445369f92de96131d8c5ebc26e4fc2b45424c72a291f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W5SABL3%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T161050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJGMEQCIGid5iCaMyKrKyWWwgRUwjwg%2BNYV0sy60tI%2F7u%2F6zMmFAiBZqxJuWFrUyTjyk5AEOD2QpgmhPCJmBR2PvKK1EyCK3Cr%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIM9Qx2iKy8TkHmuNyKKtwD5RBSlaLLa0bR9zsBwSvutcjUcHfXgjAdHTwhqDRQ2DszppHuWCiwSwlPWJKS4dgknyjSxtexx%2B3P0QksMGeucAsujErxB4mKAOmdUauJE%2FDeS5pqrwXIbWTo9FdoKm9PF0v28Lz87wHRuUlKWfLwzeuMph64pCsmVCjDivlp%2FzlSihGp7Ie42%2FdZAYhQGSOQZhy4xF4szR1KJ7WML8ebIYea62HoCpkLfkYS3GQBkG6K3IHdsVAwt%2FF5p8hLYEC2srUrrU%2BMxTksa%2FeM8AKTb7SgUSS2Go7F4ATEp53NtfDrdG1vINYWqPsRkMI30jNcF4XGRi0KjztB0Ceee9YVC7NXNqHsPT8Qd89Ybl%2F95qgnzpSrlYu37fJRlxz6WOzmZGlPMGqjygpA6%2BoozQtt4AwPTHgg5oSnZ399t%2B6WyY3ZWpaiYyd8M5kYXTZvdIIKJ8l21%2BR6WfBMhwSm%2Bmxj7adMdUVOebPm6RunZsPPdN8fdBJnmXo9HKzwuFmyzRzMh5feEy3dSesa7NVEVXUayWv2x9vlSf6MjLaMHS9%2FGfa2wFvK%2Fw3Y7zZQoAEtJS2Xz535n2Qp0VEvbxD2zEfmAlcUg3xkyn4xmn3zkA420yxi4ABcqlVfyu9fDKQwtrivwwY6pgEhcwTzNbmBlBr329LXoVyRoM0izWMLJDMIPP7kpA9oLrjK0VQ%2BKd2yNSiEQ10iL1VyRJieJFhHJJ5KAH8vo88gKBdFL4zvHkzQhmxs5kiO4OgxXEvslJDyLOiIdu4l9YV4fgjUCs4SELTu35ydT8KpjIKbKZjFZAb%2FP2A0I8Fc%2BAmXLi6Df7DE5BRCh5W1kItl1ZqkRdutV6m%2Bwd8BuQOpUa1vPfGF&X-Amz-Signature=86b695ae5f2f04c77a43051b407be265fd2352944e88d78a12f5ecb1d67953f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
