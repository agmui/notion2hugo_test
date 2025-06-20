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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY2FB324%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT6mkUK9eAPQbwAkl7R%2B0GGaFemHxl2RcaQjgr1AbPUQIhAJIyrIppunll%2BvmoQlt3ZwXTfYqJukV4XtIPBUbguu2aKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ1ZTD2%2BLGvY%2B0nT0q3ANU7MVUD8ups7%2B1ucSOak0nMyD9FlS9djrDjVskZ3yokB65wTDFoKBz9b62i%2BZNh9Pq3IO6HfKcS4tOcjP3QfOg75GQnVHPAKUHBKgUc2solf%2FGViSMAZuvSeLxUNl0iOA040V8hSAZLVpcG9SsiSkc0u79NGI%2B0kJEBeXfgH9EZzboSE0d7zywdfBWed%2BMBzpkVhwkKsXzng%2FW4S4PojVua4%2BYTehObhLdywkCseqDcMbkX6RjGcBB1rrU6V1saDD100KysJhOuEyT1L1Yr97nSjHFcvB%2Ba9y0HojEcMA2gda5uY6iUmXfUxAA5EmTcwu1XGcsjP6lWfUtdYqPzcpZ79K66IwnNC4QBfzh%2FiQQ4i5TacveEDYv8TdHRI5WFH%2FpIvDVuUIxumKqsmO%2Bd2pw4hu5iyFnScAloxAtN11wrVpz47IAo%2BttJMw2OJbfywgyzrh0yT1oAqThWue%2FrvahXJuUurCghuErrOz5im2D712HP56z8BtLdUoe7hk1lMRTqpnaGBK%2FDZJRMUPIGPCfy442NnQ0dLKw5Z8%2BoOMuXBf7eVPtgMqAEmkoGdKrw2dPt3jBc%2F6tD2XgRTCVqdcec3g9vdXNuIVcpCvVzifgWSV5Ve10AkZBF95wCjDLstbCBjqkAchqYBJNXuAQPMuL3mNJT41jGjIG7%2FSVnnxpwGy76iHb53cmNgwwqlw0w%2FTY00RAFimVzfSgebQLkT2eolguX39Y76UrODRl%2Fuc94dev20LLTlaVHgYGEQemqfyTD8uOFCPiepkYrZZKZWczk4lhHp9GCDAFHvMLfPfUdyHEJk3oZ0iorZCLbiec1OEThAs8LRLfkJNeyFrB9l04phStodK2NNBY&X-Amz-Signature=861748ac4e1042d69481e1e86d83d21b85e2689e05172e6d428378d2e08d38f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SY2FB324%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T181140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCT6mkUK9eAPQbwAkl7R%2B0GGaFemHxl2RcaQjgr1AbPUQIhAJIyrIppunll%2BvmoQlt3ZwXTfYqJukV4XtIPBUbguu2aKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzJ1ZTD2%2BLGvY%2B0nT0q3ANU7MVUD8ups7%2B1ucSOak0nMyD9FlS9djrDjVskZ3yokB65wTDFoKBz9b62i%2BZNh9Pq3IO6HfKcS4tOcjP3QfOg75GQnVHPAKUHBKgUc2solf%2FGViSMAZuvSeLxUNl0iOA040V8hSAZLVpcG9SsiSkc0u79NGI%2B0kJEBeXfgH9EZzboSE0d7zywdfBWed%2BMBzpkVhwkKsXzng%2FW4S4PojVua4%2BYTehObhLdywkCseqDcMbkX6RjGcBB1rrU6V1saDD100KysJhOuEyT1L1Yr97nSjHFcvB%2Ba9y0HojEcMA2gda5uY6iUmXfUxAA5EmTcwu1XGcsjP6lWfUtdYqPzcpZ79K66IwnNC4QBfzh%2FiQQ4i5TacveEDYv8TdHRI5WFH%2FpIvDVuUIxumKqsmO%2Bd2pw4hu5iyFnScAloxAtN11wrVpz47IAo%2BttJMw2OJbfywgyzrh0yT1oAqThWue%2FrvahXJuUurCghuErrOz5im2D712HP56z8BtLdUoe7hk1lMRTqpnaGBK%2FDZJRMUPIGPCfy442NnQ0dLKw5Z8%2BoOMuXBf7eVPtgMqAEmkoGdKrw2dPt3jBc%2F6tD2XgRTCVqdcec3g9vdXNuIVcpCvVzifgWSV5Ve10AkZBF95wCjDLstbCBjqkAchqYBJNXuAQPMuL3mNJT41jGjIG7%2FSVnnxpwGy76iHb53cmNgwwqlw0w%2FTY00RAFimVzfSgebQLkT2eolguX39Y76UrODRl%2Fuc94dev20LLTlaVHgYGEQemqfyTD8uOFCPiepkYrZZKZWczk4lhHp9GCDAFHvMLfPfUdyHEJk3oZ0iorZCLbiec1OEThAs8LRLfkJNeyFrB9l04phStodK2NNBY&X-Amz-Signature=37bf58b8551603256c3bfe4805325b2493bab1410e1672866247169b6fecd0e0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
