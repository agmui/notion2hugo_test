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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5YQZE7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Dq4FqtHqjm35Sfy9Gu4Bn9i5SG6yevPqmjjTYEThuAIgJAAd9fLGihzkc8vFuh3M1FASiDiV%2B7cFOPazFYUYWp0qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQkdkDuCf72vfuAeyrcAzPKKS74T9WGWPUYi60ZwyQSlY0c1W6ElnEfe4XGwyNwrCWAdjpQkMeFZCTYEZSELCUXInHTSIFYDu1dzs4gRY9msTq8CjqEielgszK%2BTVmR%2FxmJ81Es%2F4bKgosqiMp85cqZEezNqgoosdG%2BTPY4hToooVY4mxQJzEGTkAoTVW9zP%2BLOxCwDfdV%2BJvgIX%2BlhIuiVnM843sKQPNw5YQ1xT4wf9MFNXKOLL2vtCkRuNL49lWYU8DYbqDc61RtF6DoFhYNjlU4f5UWaOpOdMSC9aKpgP4OoT1SmBHiGy1gDiVVI9MTIFfwzJNPzw4bIlGtFKn5X2CAnZWrpfXod48j3AuMb1VXeLUfXlNmCXmkCpJNCz7j4bgifX8XSJpvy1Va3F1kjz%2FeWtPuOV%2BMcoi1YI3bk8n7FLbtu%2BV8aFLFzD3YTDjh1nhlcLXqAF%2F88mLiATdjfRTGvTWpIOHVZefSurodzmD%2BOZBZPOaII010HBymlIEjqdiTKgilrXT0AfdYuESyCim2fueM6mSJlmrD50bnINBceXM%2FXzY7jl%2BfTIHmgrIg1E45F9kty6PDJU1ci2pEupG2qyHQD4Lh%2FLiMhS%2B%2Fn3MZFVx%2F6TIXmOe4P0YW8KZQekISN%2BXleV8HsMMS%2BoMIGOqUBRKAbfsSvSd18rM4pCWy0ZD2MoUhTeRoIasWYUG%2FaTdKCbqDFO6QugpEWd0%2FBdzIHrUdPMGjF73xovD%2FPTPePZJEsP6oWy1kgy%2BXT8%2FyQBFjNCOQug67hP0KfGnJq3Je%2FIKWXo0iU7tXbgPJw1QI7gTxY9eVn5yHH4UF4WQMkgFtHIDqS73MxEhg1lDqe1D681ASKV6A8KX97J1LVbfIZoybxh1%2Bw&X-Amz-Signature=5558469973615e3b9cce1a91b1e679505420397e68a73b11875fd824f8ca56aa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UN5YQZE7%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T132609Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6Dq4FqtHqjm35Sfy9Gu4Bn9i5SG6yevPqmjjTYEThuAIgJAAd9fLGihzkc8vFuh3M1FASiDiV%2B7cFOPazFYUYWp0qiAQIvf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDQkdkDuCf72vfuAeyrcAzPKKS74T9WGWPUYi60ZwyQSlY0c1W6ElnEfe4XGwyNwrCWAdjpQkMeFZCTYEZSELCUXInHTSIFYDu1dzs4gRY9msTq8CjqEielgszK%2BTVmR%2FxmJ81Es%2F4bKgosqiMp85cqZEezNqgoosdG%2BTPY4hToooVY4mxQJzEGTkAoTVW9zP%2BLOxCwDfdV%2BJvgIX%2BlhIuiVnM843sKQPNw5YQ1xT4wf9MFNXKOLL2vtCkRuNL49lWYU8DYbqDc61RtF6DoFhYNjlU4f5UWaOpOdMSC9aKpgP4OoT1SmBHiGy1gDiVVI9MTIFfwzJNPzw4bIlGtFKn5X2CAnZWrpfXod48j3AuMb1VXeLUfXlNmCXmkCpJNCz7j4bgifX8XSJpvy1Va3F1kjz%2FeWtPuOV%2BMcoi1YI3bk8n7FLbtu%2BV8aFLFzD3YTDjh1nhlcLXqAF%2F88mLiATdjfRTGvTWpIOHVZefSurodzmD%2BOZBZPOaII010HBymlIEjqdiTKgilrXT0AfdYuESyCim2fueM6mSJlmrD50bnINBceXM%2FXzY7jl%2BfTIHmgrIg1E45F9kty6PDJU1ci2pEupG2qyHQD4Lh%2FLiMhS%2B%2Fn3MZFVx%2F6TIXmOe4P0YW8KZQekISN%2BXleV8HsMMS%2BoMIGOqUBRKAbfsSvSd18rM4pCWy0ZD2MoUhTeRoIasWYUG%2FaTdKCbqDFO6QugpEWd0%2FBdzIHrUdPMGjF73xovD%2FPTPePZJEsP6oWy1kgy%2BXT8%2FyQBFjNCOQug67hP0KfGnJq3Je%2FIKWXo0iU7tXbgPJw1QI7gTxY9eVn5yHH4UF4WQMkgFtHIDqS73MxEhg1lDqe1D681ASKV6A8KX97J1LVbfIZoybxh1%2Bw&X-Amz-Signature=200857361c665363098b27eb31727d0f6e3bad0d73353a538f6745e62fc5d689&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
