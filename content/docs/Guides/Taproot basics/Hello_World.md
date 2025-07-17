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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7TKOYF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC0oKdDZEVjY2dRhdu9nxCnDpsrDqMnCZ%2B8acGW4YWNXAIgY%2B0vnUiLrmkEKsb5oNdHdBXOax0nY5DhssK2pALine8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBUxdhlGG6ObLz%2F20CrcA88akCBqOMuWmmqPKOdLCWflyeUGQRkWnTF%2F3d5Q3PpNPCGrYrTBXwtVWe5MkBtXuJj2AJPQl6yO1HNoYsuOmrVYQHtc5YkY6KPyc5B6DY06%2FMy8HwmiavISigGrJqsC3HBefxRBW10ilPraCRP1U79TDstm3gEfvQL2eStXEJk74NCX6xpSl09t9yDxZgIWuCAqMDP8AML2r33c9hFem0ffoQuM9yVLsnMll9GPV8uTsNHzqsxoMRQjIY%2BnI%2F1KXSv%2BlkE8krddf4ne2MzwE3u45%2FhbD01DGOJ3i%2By7MXOvJ%2BeQbiuIUAwlBsf%2Fms9qUnxLt1QXF9c0xwGrUhG25HfF%2F9X0BnaY0kzsvZLwfe1ByatFhgxZX%2FBlbbTeYgPjRgeRqhfTPTun2HY314Sqc61FiPDUymzLUVBRI6%2FTIUR1AGaQ%2FAJDt7RAxFg7uu99qQ%2FZDGHdvkYxPzIDSaUvl7o9ZCcUvvZXyEjuSraZx1UCQ0w81CR%2BoZLGkkFL2xieb2%2BUy%2FFkRH%2FjanRUlbN61ihAapNtrpjCIaWJL9SKs0V79bbv6Q7BH8iDo3iloVESYAGoh2IvZa%2BHUq1%2Fv2MeYrOGgALPFVUb4WW6%2Fe89pQfdR2N9oIbPZozjuOzEMNm848MGOqUBc2B3jwCDomDlb5eo032ZLd6tEQrUr%2F6HYfgRQoDJUDn%2FZ9yC5O0KB%2F7ZYzUOJRTaOurw6Gcf36qq%2BoqVBjSRyq7O4OHWSpnqaQv8qLsOxfeyHOLszQ3cS%2FcdyZLLL796Pxfr%2FW02FPqUzebHZjoKg18XDHGjMIKi5XmcjEvWMdmiKp3XNG4vSltsJSZn6grILE3LGQjuVJNzuIrtyXwSlPAG0Xt9&X-Amz-Signature=d82673da444fc99c028c6118206b8ba60b1346374280453a83cce5768727e902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZL7TKOYF%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T121700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIQC0oKdDZEVjY2dRhdu9nxCnDpsrDqMnCZ%2B8acGW4YWNXAIgY%2B0vnUiLrmkEKsb5oNdHdBXOax0nY5DhssK2pALine8q%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBUxdhlGG6ObLz%2F20CrcA88akCBqOMuWmmqPKOdLCWflyeUGQRkWnTF%2F3d5Q3PpNPCGrYrTBXwtVWe5MkBtXuJj2AJPQl6yO1HNoYsuOmrVYQHtc5YkY6KPyc5B6DY06%2FMy8HwmiavISigGrJqsC3HBefxRBW10ilPraCRP1U79TDstm3gEfvQL2eStXEJk74NCX6xpSl09t9yDxZgIWuCAqMDP8AML2r33c9hFem0ffoQuM9yVLsnMll9GPV8uTsNHzqsxoMRQjIY%2BnI%2F1KXSv%2BlkE8krddf4ne2MzwE3u45%2FhbD01DGOJ3i%2By7MXOvJ%2BeQbiuIUAwlBsf%2Fms9qUnxLt1QXF9c0xwGrUhG25HfF%2F9X0BnaY0kzsvZLwfe1ByatFhgxZX%2FBlbbTeYgPjRgeRqhfTPTun2HY314Sqc61FiPDUymzLUVBRI6%2FTIUR1AGaQ%2FAJDt7RAxFg7uu99qQ%2FZDGHdvkYxPzIDSaUvl7o9ZCcUvvZXyEjuSraZx1UCQ0w81CR%2BoZLGkkFL2xieb2%2BUy%2FFkRH%2FjanRUlbN61ihAapNtrpjCIaWJL9SKs0V79bbv6Q7BH8iDo3iloVESYAGoh2IvZa%2BHUq1%2Fv2MeYrOGgALPFVUb4WW6%2Fe89pQfdR2N9oIbPZozjuOzEMNm848MGOqUBc2B3jwCDomDlb5eo032ZLd6tEQrUr%2F6HYfgRQoDJUDn%2FZ9yC5O0KB%2F7ZYzUOJRTaOurw6Gcf36qq%2BoqVBjSRyq7O4OHWSpnqaQv8qLsOxfeyHOLszQ3cS%2FcdyZLLL796Pxfr%2FW02FPqUzebHZjoKg18XDHGjMIKi5XmcjEvWMdmiKp3XNG4vSltsJSZn6grILE3LGQjuVJNzuIrtyXwSlPAG0Xt9&X-Amz-Signature=529ef12185c1bc8a7c744a30a959dd769cefd547b6df77badb5755798d74463f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
