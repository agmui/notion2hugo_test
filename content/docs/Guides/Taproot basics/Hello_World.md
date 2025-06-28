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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSVGSTH%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDK3YUyLBG8VQqXvuoEXKbSQwBfOnkec4ce%2FVAupncRSAiEA8jFSluC%2FDhIkrzC0wTxWBYNTKqM4gjSfsUNUGcDEmP8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLa0ywwJc340scRcCrcA5lRjCf9c3TLSlnplciXu7cT92s3ohLfb6KIxFBtnhGKpHYx5oYtDIq%2BG35BTrSzgFyqageHYpuBuYVoKJcUsByPqcxXqYBXfFuX48%2FENdVCYI5XojW6iItwLoD7G%2B0zyFBU8yNcQsUiuYpPELqBT%2BT%2BUcZ4p%2BseoPLEk6L2Wg4qbf1moJCjn49RGGaBASUBW5gxIraXuvE0cO0YDRPH0YQbFnJnOutuQnseVrePa%2FRfn9V0EQ7baFdshO2vM919iine5fP558yHL5PUkfoWCY4v%2Fnwp2V0cJypp0l%2BNYynzdzdbDmFNamenETvQ%2B4OiHhWP79lMw%2F5X9goeVp%2Fx5QYyuhtrRcjB3NZjK8bBVB0SY2StHUxoWVofZDz8EkG2%2FJuLwz6oVcyDnjHG6WJu%2BRRXDNoeJxC8YHJfXMJZB7V51TyzTyV58UO4P%2FXfAeF3ptUUzUre1h0bsA8Sbw4ke2DeEADNJOcDojM6jfXUUrSdkTiPsy%2FpcnzU8OvMLoadyRAVsEyiJFPK31xsSMOXYL3ivhJBHqXNT465L1iD%2B%2FqXC74gQRmhUq6QxA9dfsbxvXUICQ74dEzLXQoBQZDuycl0wn1hlddFwePQpK%2BCPRFEM%2FEhDI2JVaFQuy0kMMWQ%2F8IGOqUBDpMnO%2BrXthntp4GQSS%2BvrRvdCU%2B6ybU%2BvWiYIys%2BLl58WjskAuqHxZNTbkEmbbR9h7O7Xc47KeECpUKei4vb0H6TFSKuRo7yO6lsMvY12MDhrqGKpxEJEyLr1TBIxns77DZnT%2FabZpxBqqcq3kNJkd1KZrovYMOFKRTETYFmqukfOjtWTZ1pWEVnGTPJy1vvVrT7IaOB4aPxm5BrjPhQ8NYpvA4R&X-Amz-Signature=1c21727fb47a4d42b37e8d02bc37572aed36e2f9888ac1014f5f42ac0f8e432e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SFSVGSTH%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T121359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDK3YUyLBG8VQqXvuoEXKbSQwBfOnkec4ce%2FVAupncRSAiEA8jFSluC%2FDhIkrzC0wTxWBYNTKqM4gjSfsUNUGcDEmP8qiAQIjP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFLa0ywwJc340scRcCrcA5lRjCf9c3TLSlnplciXu7cT92s3ohLfb6KIxFBtnhGKpHYx5oYtDIq%2BG35BTrSzgFyqageHYpuBuYVoKJcUsByPqcxXqYBXfFuX48%2FENdVCYI5XojW6iItwLoD7G%2B0zyFBU8yNcQsUiuYpPELqBT%2BT%2BUcZ4p%2BseoPLEk6L2Wg4qbf1moJCjn49RGGaBASUBW5gxIraXuvE0cO0YDRPH0YQbFnJnOutuQnseVrePa%2FRfn9V0EQ7baFdshO2vM919iine5fP558yHL5PUkfoWCY4v%2Fnwp2V0cJypp0l%2BNYynzdzdbDmFNamenETvQ%2B4OiHhWP79lMw%2F5X9goeVp%2Fx5QYyuhtrRcjB3NZjK8bBVB0SY2StHUxoWVofZDz8EkG2%2FJuLwz6oVcyDnjHG6WJu%2BRRXDNoeJxC8YHJfXMJZB7V51TyzTyV58UO4P%2FXfAeF3ptUUzUre1h0bsA8Sbw4ke2DeEADNJOcDojM6jfXUUrSdkTiPsy%2FpcnzU8OvMLoadyRAVsEyiJFPK31xsSMOXYL3ivhJBHqXNT465L1iD%2B%2FqXC74gQRmhUq6QxA9dfsbxvXUICQ74dEzLXQoBQZDuycl0wn1hlddFwePQpK%2BCPRFEM%2FEhDI2JVaFQuy0kMMWQ%2F8IGOqUBDpMnO%2BrXthntp4GQSS%2BvrRvdCU%2B6ybU%2BvWiYIys%2BLl58WjskAuqHxZNTbkEmbbR9h7O7Xc47KeECpUKei4vb0H6TFSKuRo7yO6lsMvY12MDhrqGKpxEJEyLr1TBIxns77DZnT%2FabZpxBqqcq3kNJkd1KZrovYMOFKRTETYFmqukfOjtWTZ1pWEVnGTPJy1vvVrT7IaOB4aPxm5BrjPhQ8NYpvA4R&X-Amz-Signature=c90226ecb25b0bc8e3998541980f06cde4b54164e840e594fb6280750b93cf20&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
