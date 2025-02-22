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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYSC6TGY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FrdnekWqJGzb5kpz5Lk7YK5LkkKKNDLKAY8RMkRgWOAiBc2wb4DQVORvxw%2F9B2Emixdzg11dqbgm6JGhlxzWvU7yqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY8OMGbD3bwmG5ghXKtwDhndG5yr3fXgpUMPOjpU%2BudXikTgSZZzvIkhOzxcvbH%2FL5zaxAELoK0ZowRXQutVwMt6XaEcX5o%2BDudziMXWR281JcmkqP2guJHWS1Q6DChgzhZXr5ATPy2soUOca8XwL1D7owUFL5Txei2Vq91Ge88tEzeV4eshKgx5jzfCw3nfxhSG1tnzizk66CJnooQrAlm%2FKZd7tHb3zR9xLJzqyLYGF8a2GY66Xs%2FXxmj8en5pMR5ANnIDD81cYw2Gbz%2F%2FDwe%2BKeSr6e%2B74Ku5vaXwjI36EglMlMA2QUa5i06TeWguUTrBFgMYMYeYPa4MK2Iwd%2FWfqzCLcWlixVr82eJROifjfAZtiaHR2bj0%2BzbDMxncoyIr5yMqzKDHxei7uEBMViaTPDfztgFHTLi1Ga1WXgnsxpczDLKq7Za5V4NIlpPLkMBmdo0%2BKAzWSFj4S3aT0VD1IW8J2DF9mT5NA8yFIW9OOhDZhalid04K3dKBjT7%2F9U9%2Fxi%2FddWr5eBmLLVgHZSckQ7uCyhGd8dRogom0YLa%2BHyytFwXDzEpeTxT67CRT1y2TH8TtIgavbMURIiujclqBtT5vWajIOlOI7QCl%2BzeOhXW%2B7BB3vTlX4TzADzUJYQrtpIMnQ6LSHzWkwyobovQY6pgFowcavJZ2Q77mgNl3XqUkA5FZ96njBzeIvteqW9X%2F16ykDjdAkGi0V4ZW28cUPjkOH%2BPWHWVT7q4wdBvuQCh%2FNArfAVhYkl9k5zRgIftTlu%2FHivLlnK%2F2n62MNErqEUkKUQgRJkLeWOeEDJ1Ur527BqUFpsmXH05SgQz%2B%2FQ%2FkqEtsGex%2F%2FqQnljxrPPk2tVWQhBF%2FHEuO7JnRdgeSZVNZAUfQBG15H&X-Amz-Signature=805e055ea50947a063f85eda9356a61f66a301f3b69cd7483a38b8872714ab9b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TYSC6TGY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T200718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2FrdnekWqJGzb5kpz5Lk7YK5LkkKKNDLKAY8RMkRgWOAiBc2wb4DQVORvxw%2F9B2Emixdzg11dqbgm6JGhlxzWvU7yqIBAjy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMY8OMGbD3bwmG5ghXKtwDhndG5yr3fXgpUMPOjpU%2BudXikTgSZZzvIkhOzxcvbH%2FL5zaxAELoK0ZowRXQutVwMt6XaEcX5o%2BDudziMXWR281JcmkqP2guJHWS1Q6DChgzhZXr5ATPy2soUOca8XwL1D7owUFL5Txei2Vq91Ge88tEzeV4eshKgx5jzfCw3nfxhSG1tnzizk66CJnooQrAlm%2FKZd7tHb3zR9xLJzqyLYGF8a2GY66Xs%2FXxmj8en5pMR5ANnIDD81cYw2Gbz%2F%2FDwe%2BKeSr6e%2B74Ku5vaXwjI36EglMlMA2QUa5i06TeWguUTrBFgMYMYeYPa4MK2Iwd%2FWfqzCLcWlixVr82eJROifjfAZtiaHR2bj0%2BzbDMxncoyIr5yMqzKDHxei7uEBMViaTPDfztgFHTLi1Ga1WXgnsxpczDLKq7Za5V4NIlpPLkMBmdo0%2BKAzWSFj4S3aT0VD1IW8J2DF9mT5NA8yFIW9OOhDZhalid04K3dKBjT7%2F9U9%2Fxi%2FddWr5eBmLLVgHZSckQ7uCyhGd8dRogom0YLa%2BHyytFwXDzEpeTxT67CRT1y2TH8TtIgavbMURIiujclqBtT5vWajIOlOI7QCl%2BzeOhXW%2B7BB3vTlX4TzADzUJYQrtpIMnQ6LSHzWkwyobovQY6pgFowcavJZ2Q77mgNl3XqUkA5FZ96njBzeIvteqW9X%2F16ykDjdAkGi0V4ZW28cUPjkOH%2BPWHWVT7q4wdBvuQCh%2FNArfAVhYkl9k5zRgIftTlu%2FHivLlnK%2F2n62MNErqEUkKUQgRJkLeWOeEDJ1Ur527BqUFpsmXH05SgQz%2B%2FQ%2FkqEtsGex%2F%2FqQnljxrPPk2tVWQhBF%2FHEuO7JnRdgeSZVNZAUfQBG15H&X-Amz-Signature=453e165d314e0f6a29e20dd8cda5234f2b018425e0d80e846b802773056182af&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
