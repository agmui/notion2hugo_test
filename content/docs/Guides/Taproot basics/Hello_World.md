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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662574KUOQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDGdRmiWmyONVDHcUdkFmi8wp4NbT%2BCSVEUZNYgFIuCHQIgfjRSJOxC%2B%2Br2sESfptrjv9xoanE1%2B5NQRSq%2F1LxNMXYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDENDJ8eqjOKkKsVwmircA8kQ5vm53xS5xY9MvJ%2B9y1cW8cAhj32qpUhiOoZAzOiCTDZiPUsHrm53yiwTAri%2F5mhOTZ12a744JObKH5Vrha%2BGZSna67kzcetGF3p1Z3PZU7u57a56C4xMy1bHaVE8RhaYPHg5Xb9we9QAt6IVo8ar5M4g1fgPOdoHTmQ4spsXKDT7CFNRlWH05zpmuSQiptL0qiCXnZfCE3wg99HezyzKETe%2BUS3AyvS%2FvV27DP%2F%2FrOmMk4e6ehGlwBxQTTZsjjrkXUFuv%2BLdT%2FWb3X%2FZeVHm0MHEDc%2BEJCn8fkBSLoD5fiKHDTXlboopen4GhqLCF5lfvDpQYympnD%2BrJbjc1aUfvArd9S8l85OVTU8hglERQ5UhM1DVQOcgh0CZHCcn698HZWR%2BH3rzMky0TVxNdoKn5548K5paJaexwtth2Pw5GVqcieWGVh%2FJ7%2B%2F4TXQIg6tIkJy7YbutfIdPyfkKC99O3rZZ0ylMk40%2Fi%2F3Q8Y8pu4tCDTmL1oU%2FKizF5ccwlkNKWKRxtgoWbLYrDNLRydogdhhWq%2FAmtyIgl38OelyVCpFm3PIGg5oUEyyt7YOJgplDiqPc3bdjBlYARBlH9C98t9Ll5VnwX6TeoRo0%2F6dAef5525fGfMZxQWSEMM7pu70GOqUBkN0YI6MsnmjWBbwodLOaPbC6NQj2%2Bb17fRvlQz6BOOllhrOuNhBo1j7g7%2FD2BfyE1OTaMMV9c9QP%2FD6tDRBEAIjP7KJTuZbhnNBRVgCz%2BeX9ZK7ho123C5wEXFnYxq07j2KdIj8sJORvOBKKvRURX9%2B%2BVbo3l%2FFwIkwx%2BK8LuGXhqd%2FCD9SxHjLMGJnylfLc3Mez0GkPsdSjq2n63noHqNnnlywf&X-Amz-Signature=bd86cfff6b2ddbe4c2271590e23736f3fcb20779ffdd1bd577c8e513d4961bb1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662574KUOQ%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T090757Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQDGdRmiWmyONVDHcUdkFmi8wp4NbT%2BCSVEUZNYgFIuCHQIgfjRSJOxC%2B%2Br2sESfptrjv9xoanE1%2B5NQRSq%2F1LxNMXYq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDENDJ8eqjOKkKsVwmircA8kQ5vm53xS5xY9MvJ%2B9y1cW8cAhj32qpUhiOoZAzOiCTDZiPUsHrm53yiwTAri%2F5mhOTZ12a744JObKH5Vrha%2BGZSna67kzcetGF3p1Z3PZU7u57a56C4xMy1bHaVE8RhaYPHg5Xb9we9QAt6IVo8ar5M4g1fgPOdoHTmQ4spsXKDT7CFNRlWH05zpmuSQiptL0qiCXnZfCE3wg99HezyzKETe%2BUS3AyvS%2FvV27DP%2F%2FrOmMk4e6ehGlwBxQTTZsjjrkXUFuv%2BLdT%2FWb3X%2FZeVHm0MHEDc%2BEJCn8fkBSLoD5fiKHDTXlboopen4GhqLCF5lfvDpQYympnD%2BrJbjc1aUfvArd9S8l85OVTU8hglERQ5UhM1DVQOcgh0CZHCcn698HZWR%2BH3rzMky0TVxNdoKn5548K5paJaexwtth2Pw5GVqcieWGVh%2FJ7%2B%2F4TXQIg6tIkJy7YbutfIdPyfkKC99O3rZZ0ylMk40%2Fi%2F3Q8Y8pu4tCDTmL1oU%2FKizF5ccwlkNKWKRxtgoWbLYrDNLRydogdhhWq%2FAmtyIgl38OelyVCpFm3PIGg5oUEyyt7YOJgplDiqPc3bdjBlYARBlH9C98t9Ll5VnwX6TeoRo0%2F6dAef5525fGfMZxQWSEMM7pu70GOqUBkN0YI6MsnmjWBbwodLOaPbC6NQj2%2Bb17fRvlQz6BOOllhrOuNhBo1j7g7%2FD2BfyE1OTaMMV9c9QP%2FD6tDRBEAIjP7KJTuZbhnNBRVgCz%2BeX9ZK7ho123C5wEXFnYxq07j2KdIj8sJORvOBKKvRURX9%2B%2BVbo3l%2FFwIkwx%2BK8LuGXhqd%2FCD9SxHjLMGJnylfLc3Mez0GkPsdSjq2n63noHqNnnlywf&X-Amz-Signature=e145daed7d0740e1d0e6547b947cae9e3ce3b4bd8c23fe1e4fc0f9e50548f79d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
