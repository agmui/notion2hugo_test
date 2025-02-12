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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4SYRI2%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb%2B9%2BC8uYS8pckNRolI8QGtjd5c3jeC3a8Lr9AxgdyOgIgFjXHSJn2s3YUYZCAS4RuNuVJgzjoXi44WZZLDqYLdd4qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxJeT%2BkokrKnHn40ircAzU5t4fEjXfGmKfzK5gyM58o%2B5voYR5KnNODCBrocHZjWF5xj0PjlF53%2FgttF1PsXetOlu80VQYG6FY1RxWoy%2B13O%2FqSFyeSdi5aeYm5Aag9bBlqpCf63Th5vtuzcJkHyYCjPCmQ6pT5W2zrvelZrGjQ9Nl9hyjnYogv2Dlzlxmvy7YzyV0YPFtIE%2F2djez207HGRTqsrHMnGFQFqKgKP0dYtMYPa7sFVaDq1lE58Kk1QVMttDNJL0fsAUjzba1un75mxGinI32pS%2BxVOPRoqy%2BnTzUhUVSBYJTBq9TR1J9fsJFUMypZg9Q3fHyC1BnqDEtuROAx7EMWnYEWNR%2BkoZOf9%2FkTYBgcmB3IjUiOArc6UKCuAigAIoGgq7GQtni83ge5xcs3XL3ezC07zyI7BrTJXevS8gBW%2FytqZe%2FVCJ091C%2Fao7nNTLanIYCd5kRfWt%2B15qdZ9ousP8KSiV8rJDzb68NyA7KxX2C8CoYYGZEnwk8vb6fXGOk4A25dsAES8KUs0LbCpv7X1Jv5iY7k22NJ8eFrw5IDWeMhcFIKmbJv6piEcQyG9MCU1yNZ%2Fq5Rh1YsFLn8yqLoM80Rf06WBJGkida97pNj2fi6T%2F1t3rVetMQ5uOgOl%2B%2FpKpbKMKuSsb0GOqUByxTJOId2iv%2BMysUzLAeYjlnuuXjxUkbQ9G24W7PH4nuGyt6%2F2pINGc7l4c7h8dt8fvQbRCDegjK9%2BcshibULTjRky%2FRP%2BaQpVaJNqKQ4tRl%2BrpDhDTNNo01cpdnU0VCcKN8Hwph8eVvzrVvUyiVOP2fGrJe%2FDOhjM6c4ZEvLllvai%2FxN5861QzCUg3uo16s129vndkjWRfksHFZeGrircluiiv%2Bs&X-Amz-Signature=334e44b333f5191a010da9275de38214a42d27b35381752bfb4e00e629abc9ea&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QO4SYRI2%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb%2B9%2BC8uYS8pckNRolI8QGtjd5c3jeC3a8Lr9AxgdyOgIgFjXHSJn2s3YUYZCAS4RuNuVJgzjoXi44WZZLDqYLdd4qiAQI6P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxJeT%2BkokrKnHn40ircAzU5t4fEjXfGmKfzK5gyM58o%2B5voYR5KnNODCBrocHZjWF5xj0PjlF53%2FgttF1PsXetOlu80VQYG6FY1RxWoy%2B13O%2FqSFyeSdi5aeYm5Aag9bBlqpCf63Th5vtuzcJkHyYCjPCmQ6pT5W2zrvelZrGjQ9Nl9hyjnYogv2Dlzlxmvy7YzyV0YPFtIE%2F2djez207HGRTqsrHMnGFQFqKgKP0dYtMYPa7sFVaDq1lE58Kk1QVMttDNJL0fsAUjzba1un75mxGinI32pS%2BxVOPRoqy%2BnTzUhUVSBYJTBq9TR1J9fsJFUMypZg9Q3fHyC1BnqDEtuROAx7EMWnYEWNR%2BkoZOf9%2FkTYBgcmB3IjUiOArc6UKCuAigAIoGgq7GQtni83ge5xcs3XL3ezC07zyI7BrTJXevS8gBW%2FytqZe%2FVCJ091C%2Fao7nNTLanIYCd5kRfWt%2B15qdZ9ousP8KSiV8rJDzb68NyA7KxX2C8CoYYGZEnwk8vb6fXGOk4A25dsAES8KUs0LbCpv7X1Jv5iY7k22NJ8eFrw5IDWeMhcFIKmbJv6piEcQyG9MCU1yNZ%2Fq5Rh1YsFLn8yqLoM80Rf06WBJGkida97pNj2fi6T%2F1t3rVetMQ5uOgOl%2B%2FpKpbKMKuSsb0GOqUByxTJOId2iv%2BMysUzLAeYjlnuuXjxUkbQ9G24W7PH4nuGyt6%2F2pINGc7l4c7h8dt8fvQbRCDegjK9%2BcshibULTjRky%2FRP%2BaQpVaJNqKQ4tRl%2BrpDhDTNNo01cpdnU0VCcKN8Hwph8eVvzrVvUyiVOP2fGrJe%2FDOhjM6c4ZEvLllvai%2FxN5861QzCUg3uo16s129vndkjWRfksHFZeGrircluiiv%2Bs&X-Amz-Signature=06f26d6a4f3bd2d750682e9579e8be3496316f64a35da6520314e6cf302e3b15&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
