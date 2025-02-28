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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZDAETT5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDqXCgTjJ36c36XRtP7pfSHxrOa%2FLrbkEhlW%2F7Qvz25pQIhAPZmv7JxNCq9u8cPNfHK2jtqBtiC9P8MO704e60JNBd2KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl8kzLov5CRsNSAX0q3APNQIwFybOY%2FXxRPWOKOb8TmJJzSByz9Ca5XiK3LolX6IZ%2B0wTg3cs3GHlw%2Bd%2Fbc%2FPwGuY17iN1cJ2Rp2J%2FDrEhSBXYUpMuD7Q3dR4D7gJ07PO8ey9%2BHIKYvVPlEtTsZkDjw1wWqi8FVOeDujuaayx%2BrKYYwkkdrQaozc1ziMvOmwOWBN7T87Jbmo8bv%2Ftky4L8%2BDjwEm4%2FyMEyll1TzYJqNkQ7trWaxT3TZCY7Dxn4RQbROUbcTmuv%2B8u%2FbH17qX8VV9nHJXi53ieAUnUG03jBe3wPF%2FhNNBlemav%2BNFkPZEKUBUEhIqfRmuy76d8Iwk3e9DzyLT6nYY8JGsgNFnFvwFmrsh8vvZyOTd519z6CU1X5K0amvIePOiFZhfzK7It2vb2oM3nABLIV4jkJ0IKbSLj5LLe50f7m78SpRnplZvbQEY71U0V%2BdQ7%2BbEfEdFgM4KkE4XX7q73zOZQMnpn2IOPDpJCmSrW8IHM4Cs5RgvtR57I%2BPDOtJCYS8%2FPP%2BdQiWyGbZyspJGt1i8kkHj8fTv%2Bd%2FsHhLtltTtuxFO14RluaCv82%2FKFPSgJyIWHlNqLWZbYS2TEthtAIaeIKgbXr%2FFCresX0MPWyFiOUhS%2B9OQ0uOs5nfI%2F0W912ljDwr4W%2BBjqkAXzwBg86BWp%2FbVPq2Nhy4qiazb17FjGPifXICnLBE2O7BQWpBE8dpT6Phpki18uGPcX3N0whIwCPE%2FUrvAubvSqTrXKSy7bQvbtO5XLcogwo7kLDDeKP4MfVeU5i1yVB8mNTIm8hLXI54WKpSth0V1eKwE21Lx7jXusLPDFoVWldPZKFgyOH2atH2b7N2RwcVsRj3E3X7ZZDlvrOE4Lh7hni%2BJo4&X-Amz-Signature=658eecde0ed02d3ae3cdfb04ddaf1b500498ae997155274fb393b25ba3e5d8fd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZDAETT5%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T070809Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDqXCgTjJ36c36XRtP7pfSHxrOa%2FLrbkEhlW%2F7Qvz25pQIhAPZmv7JxNCq9u8cPNfHK2jtqBtiC9P8MO704e60JNBd2KogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyl8kzLov5CRsNSAX0q3APNQIwFybOY%2FXxRPWOKOb8TmJJzSByz9Ca5XiK3LolX6IZ%2B0wTg3cs3GHlw%2Bd%2Fbc%2FPwGuY17iN1cJ2Rp2J%2FDrEhSBXYUpMuD7Q3dR4D7gJ07PO8ey9%2BHIKYvVPlEtTsZkDjw1wWqi8FVOeDujuaayx%2BrKYYwkkdrQaozc1ziMvOmwOWBN7T87Jbmo8bv%2Ftky4L8%2BDjwEm4%2FyMEyll1TzYJqNkQ7trWaxT3TZCY7Dxn4RQbROUbcTmuv%2B8u%2FbH17qX8VV9nHJXi53ieAUnUG03jBe3wPF%2FhNNBlemav%2BNFkPZEKUBUEhIqfRmuy76d8Iwk3e9DzyLT6nYY8JGsgNFnFvwFmrsh8vvZyOTd519z6CU1X5K0amvIePOiFZhfzK7It2vb2oM3nABLIV4jkJ0IKbSLj5LLe50f7m78SpRnplZvbQEY71U0V%2BdQ7%2BbEfEdFgM4KkE4XX7q73zOZQMnpn2IOPDpJCmSrW8IHM4Cs5RgvtR57I%2BPDOtJCYS8%2FPP%2BdQiWyGbZyspJGt1i8kkHj8fTv%2Bd%2FsHhLtltTtuxFO14RluaCv82%2FKFPSgJyIWHlNqLWZbYS2TEthtAIaeIKgbXr%2FFCresX0MPWyFiOUhS%2B9OQ0uOs5nfI%2F0W912ljDwr4W%2BBjqkAXzwBg86BWp%2FbVPq2Nhy4qiazb17FjGPifXICnLBE2O7BQWpBE8dpT6Phpki18uGPcX3N0whIwCPE%2FUrvAubvSqTrXKSy7bQvbtO5XLcogwo7kLDDeKP4MfVeU5i1yVB8mNTIm8hLXI54WKpSth0V1eKwE21Lx7jXusLPDFoVWldPZKFgyOH2atH2b7N2RwcVsRj3E3X7ZZDlvrOE4Lh7hni%2BJo4&X-Amz-Signature=4dd1050bdecfb9c0aae071dc2559f892fb85838aa6839ba756da04f9052c42fc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
