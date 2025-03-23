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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYEXWQDM%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCzAc046kMVGTDlBAJPpX2dDnjR8U8Qy%2BUcexMFcS21VQIgCQh%2B2okopsvRAakwMJmiPMXle%2F4IEmTpLlDYqFY8gpUqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxUA5HSo4Z1KUtfWircA8qbY4c8rqB3v8cY0SBcUC%2Fi5NsOs8tX7PieYu95houndvN8MIVvcft4wwT79WbD6AaRYqxcuh%2FdPpJd2r4%2BN1AWL6Xnd2I0EpTS9sM99pkJlrFBT3szniso1TLn%2BBST8J7MsFmsFByDaYGeMl5zOofbU8Txc%2FsCNMy1gioSXNXoaWh3eHn6oqIBXBAE5wgiR%2FiBMH5sfZMo612wYLuXsqyk93o7uc2YsQqi7Dx9sP0tHXHP%2FAZPY7Tmf31l5hjLcIXrurmIbI6m5GWRvFxzhXdugYx13LuvKVbGBVGWaOk8%2B%2BFHz6Nc8QjOJCCAeekF5anVVOhtgP332ebKBYVl%2Bw%2BOKzcc4K1t3oQPdsFpUD6Z8nKiVrwZ9DQG3U06TmJYOhWGCN%2FQA5idFEXroDd8MGHTI182XfWCTnO3IDtmUIXlL1UEklFAe8n3RJtXu1GmGiUPp5h1KcPj8Rzl2mzt6S3E9UoSfpZ9JL56%2BtPq4XpNowT2MNNvhNORURTdzi0HVdSr4qtYexMtFHgKk24KcyjjKmAomGldxHR9P%2FfnzKEEOzqa%2BpmuHLMif0XJEUmiRqSkBShStTn3sNb9RnTzDv9VObvOKlKVjpsYqhBMEVV2nZRJjjkubM9NINM2MIPN%2F74GOqUB%2Fz7XEZu%2FiX7ZJeaJeGdAJtPIrFpBkLX0z%2F6BwYCkhSd%2BUJuZPDu2OaigjkPkRSWjdjaAjPI%2F5qAeyJLSv%2BhKnfHev42Qi11U3vIZD1Hcj1x8g9Mte3C1OKgDuAIUT1ozDY32kok1bUnrSozpv6Un6tY4rkaHA0JhuPeZCHCuhKhI2nCtVEmPK%2BjNiSJfN%2BUNvMWyCxwSckampts%2Bv2QkmCH7uuDx&X-Amz-Signature=5c872132e947723d317d4e3655b524c42a46936d9dbeb247b96cc789b1f2b89b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QYEXWQDM%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T121249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHsaCXVzLXdlc3QtMiJHMEUCIQCzAc046kMVGTDlBAJPpX2dDnjR8U8Qy%2BUcexMFcS21VQIgCQh%2B2okopsvRAakwMJmiPMXle%2F4IEmTpLlDYqFY8gpUqiAQI1P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKxUA5HSo4Z1KUtfWircA8qbY4c8rqB3v8cY0SBcUC%2Fi5NsOs8tX7PieYu95houndvN8MIVvcft4wwT79WbD6AaRYqxcuh%2FdPpJd2r4%2BN1AWL6Xnd2I0EpTS9sM99pkJlrFBT3szniso1TLn%2BBST8J7MsFmsFByDaYGeMl5zOofbU8Txc%2FsCNMy1gioSXNXoaWh3eHn6oqIBXBAE5wgiR%2FiBMH5sfZMo612wYLuXsqyk93o7uc2YsQqi7Dx9sP0tHXHP%2FAZPY7Tmf31l5hjLcIXrurmIbI6m5GWRvFxzhXdugYx13LuvKVbGBVGWaOk8%2B%2BFHz6Nc8QjOJCCAeekF5anVVOhtgP332ebKBYVl%2Bw%2BOKzcc4K1t3oQPdsFpUD6Z8nKiVrwZ9DQG3U06TmJYOhWGCN%2FQA5idFEXroDd8MGHTI182XfWCTnO3IDtmUIXlL1UEklFAe8n3RJtXu1GmGiUPp5h1KcPj8Rzl2mzt6S3E9UoSfpZ9JL56%2BtPq4XpNowT2MNNvhNORURTdzi0HVdSr4qtYexMtFHgKk24KcyjjKmAomGldxHR9P%2FfnzKEEOzqa%2BpmuHLMif0XJEUmiRqSkBShStTn3sNb9RnTzDv9VObvOKlKVjpsYqhBMEVV2nZRJjjkubM9NINM2MIPN%2F74GOqUB%2Fz7XEZu%2FiX7ZJeaJeGdAJtPIrFpBkLX0z%2F6BwYCkhSd%2BUJuZPDu2OaigjkPkRSWjdjaAjPI%2F5qAeyJLSv%2BhKnfHev42Qi11U3vIZD1Hcj1x8g9Mte3C1OKgDuAIUT1ozDY32kok1bUnrSozpv6Un6tY4rkaHA0JhuPeZCHCuhKhI2nCtVEmPK%2BjNiSJfN%2BUNvMWyCxwSckampts%2Bv2QkmCH7uuDx&X-Amz-Signature=05fd71ab0b15121f84ed66204520a1edb9a666fb795ae2f26a68a3840e4ebb67&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
