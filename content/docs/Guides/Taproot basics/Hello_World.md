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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656FCLX5N%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9IYIGfzE5vpzrPqVyLBsdAVVT1xI%2BVaep5UkJO8p2IAiEA0YZ7taHAV9oWugWVeeOlvpz0eK%2FbAaEYH%2BYR6%2FhdcsgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6QVCXbvOgUbxBIMyrcA8NXGKk5dN0T%2B9ZZygwlV5HMIpfS79ZEx8s953k50w4X3Vopq6TfL90HLWZtSqRf66j1t5qIfEWxzL0v2kjs9DOR%2BWtECruPiHfN2lJXQb36sQnVdf5X5%2FtkHX2Tm6dlD8ubygLLO6rVFxsM4jJh4k%2FnCFC%2FHJRPJ2zgmuKZ794ZK1qW8s8hQVeaTpqyQfMVYBc7ZLg6dnbY3RVGgLtLofgrErwiTQMDYcKbUdxKA%2BrCJY1PXF%2BAsrfU%2B5NoeLtImY0KiT57PNUiocc7f%2BKnOq5H5WmmwhMgOX5%2BunoMMDqSK57TUf7FtgH9%2FpuEeEkKDXSxmC5gkDDZC%2FOlwJOz%2BdC6tBTFSd0PNtdHpOB2oAtLDV3AUTWif5CyH%2BOSvIZ1Xz8FlJi0wO8mNkt9GoVkKb%2B4nU%2BdwkLe%2BmZ46HtwcGKgBt%2Ff%2BH1im5lUyYKXvrAIvcHJOHvEBwNdoTrKYGAeQtUi0PY3OdRnAN3%2BaBsB8Kd%2FifoUZLd6msEC811CkNvbcAoDJXYYXwZ%2B7xyV6ft9r4yRy5iV9W8FXK54LZQiJr0IQUxYSMM9mBxtx5BK7bgEMO1HSihHzDrLRf3K1x0oLEsOW6MWQO8Khj1nKngbI6swD9W5lf26ZRl4WCs9MLym2r0GOqUBzIselRF6KJC6f0JLyso1rx%2FHLV7oMPC068v6KPeIGFG%2FL1eJHLpx83iYzbSUEx8EifYp6tcPrDdonAgwgzQwtmHwRC6pSh9bRHRImi7dVQOESmYok1fZYUKJVlXGOlpQNyStIxnkjDNUC2YQNmJ0a0v2BE29wTPgB0yQYzXQ17X9YTxiv7YQgGLPr3nyJNxS%2BQIavPxh7mcCUfCuIPpyRVRDQ9ub&X-Amz-Signature=0748936381a042c96aa32970435b315db326ef232cb8a43844d9c954188a1650&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656FCLX5N%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T031324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID9IYIGfzE5vpzrPqVyLBsdAVVT1xI%2BVaep5UkJO8p2IAiEA0YZ7taHAV9oWugWVeeOlvpz0eK%2FbAaEYH%2BYR6%2FhdcsgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD6QVCXbvOgUbxBIMyrcA8NXGKk5dN0T%2B9ZZygwlV5HMIpfS79ZEx8s953k50w4X3Vopq6TfL90HLWZtSqRf66j1t5qIfEWxzL0v2kjs9DOR%2BWtECruPiHfN2lJXQb36sQnVdf5X5%2FtkHX2Tm6dlD8ubygLLO6rVFxsM4jJh4k%2FnCFC%2FHJRPJ2zgmuKZ794ZK1qW8s8hQVeaTpqyQfMVYBc7ZLg6dnbY3RVGgLtLofgrErwiTQMDYcKbUdxKA%2BrCJY1PXF%2BAsrfU%2B5NoeLtImY0KiT57PNUiocc7f%2BKnOq5H5WmmwhMgOX5%2BunoMMDqSK57TUf7FtgH9%2FpuEeEkKDXSxmC5gkDDZC%2FOlwJOz%2BdC6tBTFSd0PNtdHpOB2oAtLDV3AUTWif5CyH%2BOSvIZ1Xz8FlJi0wO8mNkt9GoVkKb%2B4nU%2BdwkLe%2BmZ46HtwcGKgBt%2Ff%2BH1im5lUyYKXvrAIvcHJOHvEBwNdoTrKYGAeQtUi0PY3OdRnAN3%2BaBsB8Kd%2FifoUZLd6msEC811CkNvbcAoDJXYYXwZ%2B7xyV6ft9r4yRy5iV9W8FXK54LZQiJr0IQUxYSMM9mBxtx5BK7bgEMO1HSihHzDrLRf3K1x0oLEsOW6MWQO8Khj1nKngbI6swD9W5lf26ZRl4WCs9MLym2r0GOqUBzIselRF6KJC6f0JLyso1rx%2FHLV7oMPC068v6KPeIGFG%2FL1eJHLpx83iYzbSUEx8EifYp6tcPrDdonAgwgzQwtmHwRC6pSh9bRHRImi7dVQOESmYok1fZYUKJVlXGOlpQNyStIxnkjDNUC2YQNmJ0a0v2BE29wTPgB0yQYzXQ17X9YTxiv7YQgGLPr3nyJNxS%2BQIavPxh7mcCUfCuIPpyRVRDQ9ub&X-Amz-Signature=bbf1551281784fcf4ed74d8c35fa1a0f9ed0db9e0338a29590c8d2171196a945&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
