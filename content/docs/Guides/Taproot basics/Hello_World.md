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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4MS2RR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz5ur76eUEmsw4G5MWffSPslygwonrXZ9nA6Pj8mi0OwIgXca8CvYQ7excpAr%2B50gA4XXKsEBuIeG7%2FbvnZmLHm0IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBz5u1%2F3UiIjFEs8MCrcA2vQct1uT%2Fx7HxyRjA%2F2Hzu2knlpjDIJEVjRuuWwXPwYhs8PT2CxMSVXPGB4N3WbLL724NQTDvIUhjlnl8CGZ9nkizGw%2F5a827bnUFtZjqzeTWR8YIYGRtbtLmPEfU%2BnXmngjHE7BT85fJsq7t39fKr7GynDfh6MikgK7lNqxmklPFskdrfxoUGhbSuObxFdE%2F4JAJUUeL1bpoyQrpxlHa6iqWU9wLGLesxc5N06BYAlDePs0T%2FeplQtCNaUXOaPckcrKjVl4D3QuEe0%2BRW7tOVS6JhPO5CKHu4Wb4TdJrJlr6bOC9hJLW6ABcIpLyx2kNZj7aDXMKYEaGjTr993mBRABjwJZpMuYpsg9B6DvTHGUwrjRdenGZm2f1JX1fGkJLZ0QBYnh5nesXdVb48flXNVnsh1%2F16BBgdzqK%2FQg11RwLkfRJFrMJDzU2WU0jZHAK72KPdNceYIKvBqBz2izWqiGRNpomNvs8siV9SL0sEJLktuCwcZ9mvTkYq7TevqGUH6rqyRN%2BLuqOSoB%2BfRH66a6wasxB3ouOONe5gkcherOnGfHjGMSc9w4Wv87xUKBWXgX%2Fh6iFTwObaMVsLljwsFb7F9Llxfq47qRywRBfzVAXPHutqbf47qACXDMN3o3MQGOqUBtsTrMsN1X%2Bf9t9Rsx1VTXULY712fW598LJ7BiV8CLVzbfiwTAm1kBbbxprC0LUVBpN9F0Qn6FTC0hYOi05qIiAZJVTpalKQz4SBGt29QDu4ylkIqqEvoSPQi5M%2FvFrXrikebyuO8EScYPm6D0pgjAhF4Xf%2B9lAGY9dTnOkiMboSztAqG%2Fy%2BHwjLb0Z57MjVpgGDopGXTCbyGIpDch3agYAtcaAmX&X-Amz-Signature=0ad5f5ce10fbce55bb91a1f3dd8f8561f629fec4b59a61918f75c09dcae4106f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SW4MS2RR%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T140754Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDz5ur76eUEmsw4G5MWffSPslygwonrXZ9nA6Pj8mi0OwIgXca8CvYQ7excpAr%2B50gA4XXKsEBuIeG7%2FbvnZmLHm0IqiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBz5u1%2F3UiIjFEs8MCrcA2vQct1uT%2Fx7HxyRjA%2F2Hzu2knlpjDIJEVjRuuWwXPwYhs8PT2CxMSVXPGB4N3WbLL724NQTDvIUhjlnl8CGZ9nkizGw%2F5a827bnUFtZjqzeTWR8YIYGRtbtLmPEfU%2BnXmngjHE7BT85fJsq7t39fKr7GynDfh6MikgK7lNqxmklPFskdrfxoUGhbSuObxFdE%2F4JAJUUeL1bpoyQrpxlHa6iqWU9wLGLesxc5N06BYAlDePs0T%2FeplQtCNaUXOaPckcrKjVl4D3QuEe0%2BRW7tOVS6JhPO5CKHu4Wb4TdJrJlr6bOC9hJLW6ABcIpLyx2kNZj7aDXMKYEaGjTr993mBRABjwJZpMuYpsg9B6DvTHGUwrjRdenGZm2f1JX1fGkJLZ0QBYnh5nesXdVb48flXNVnsh1%2F16BBgdzqK%2FQg11RwLkfRJFrMJDzU2WU0jZHAK72KPdNceYIKvBqBz2izWqiGRNpomNvs8siV9SL0sEJLktuCwcZ9mvTkYq7TevqGUH6rqyRN%2BLuqOSoB%2BfRH66a6wasxB3ouOONe5gkcherOnGfHjGMSc9w4Wv87xUKBWXgX%2Fh6iFTwObaMVsLljwsFb7F9Llxfq47qRywRBfzVAXPHutqbf47qACXDMN3o3MQGOqUBtsTrMsN1X%2Bf9t9Rsx1VTXULY712fW598LJ7BiV8CLVzbfiwTAm1kBbbxprC0LUVBpN9F0Qn6FTC0hYOi05qIiAZJVTpalKQz4SBGt29QDu4ylkIqqEvoSPQi5M%2FvFrXrikebyuO8EScYPm6D0pgjAhF4Xf%2B9lAGY9dTnOkiMboSztAqG%2Fy%2BHwjLb0Z57MjVpgGDopGXTCbyGIpDch3agYAtcaAmX&X-Amz-Signature=891927cc6317c796b9c8772bcb63b1993ed03f4336ee107a24fde06ff332eb6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
