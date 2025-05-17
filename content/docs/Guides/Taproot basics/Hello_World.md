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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JSMDY3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F4tGTrRj6AUHx0j1FNBJZrmx3I2Q%2FLXqT0i3Cxkmf1wIhAOLi7zowhLCqp2h9I5EryeeMrwlibQGdVYABQ4D569%2FOKv8DCGUQABoMNjM3NDIzMTgzODA1IgwNtOSEyOooQBqIPW8q3AP9BVahioL1i43OTZQ3ctBirirVCScPs6QO9ani8PX7MVkRO8R15KTw5BXUWjL65uts0qJWwe5VH6LhKC8%2BLJvC%2BzGLc0I5lM8G3Z9rBUNidKrHgEBdW3ixJ11BUBdm7SoDhKx1BiAGp2le0plwNt8Wu%2Bicd2alN%2FGqmV%2F0bTW8Y7d%2FZq4B865xE9UKf0hukj7BC44EhDRgi%2BNx2NFuFdk1h6QgtM2a3LAJXdO0HMif9LtkJEHV2C1qS4%2BK9WOx72E%2FZ%2BAufoxKEF5SRVXfyK10jejO1Y2%2BeVX1iFUlXM1F%2BRtMBQ6HmFVRNqeMaNNvLECLNCYVjai5Q7fr3mxUfJRNUwBlai09PEOCiarzeV%2Bwj5u5EiAIT84GUWKvhNfFDuWNZAM5rVBlr7HntGTiEIO8cEZRL4SELvXPDXBCJBVrEB3mb09CGGQBmROJvheSrJYqQ4xcbjREHuI3kowT1%2F2P16yPRAob0lyzULrcBjOxEq2S1Hww1lFJcTWB%2BynGQZXXVFcjL8IrPW8F1gUUmLhnt%2BvjgpGh2F02%2FmNFnFhh6Ao%2BvP9QFCZaUHvLVD9Vo5qcLKmE%2BAeRs738JiJHbNbWgi3DAggTOWmXyu6NLVFDB%2B5gCIyj9oTdUM12%2FjCzy6PBBjqkAZ2z1VP4z990EtpgjBmyJKNI6CzcI2KHbtK9cMVycsih3yRmADwZheDn%2F%2FFPxzvCVZu9W2jVMQk8w3hdW9hthIF1W1BxOrwIi%2FLTk1gNLFMz7JQLn4v0CfXv3xTNKBz8K7M0KGtUqk6057XqPrsw5KNUnuLspSCYpAoYvSD0z5iAkZ9ihLnDHz%2BO8WhjmgbMWJ0UJTnUc4glFwA9rPrCpU3DH78P&X-Amz-Signature=84d61ca545a66cfc2876c0c1509d3dbadc61911796b9b14d23a34be04be2937e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q2JSMDY3%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T210705Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2F4tGTrRj6AUHx0j1FNBJZrmx3I2Q%2FLXqT0i3Cxkmf1wIhAOLi7zowhLCqp2h9I5EryeeMrwlibQGdVYABQ4D569%2FOKv8DCGUQABoMNjM3NDIzMTgzODA1IgwNtOSEyOooQBqIPW8q3AP9BVahioL1i43OTZQ3ctBirirVCScPs6QO9ani8PX7MVkRO8R15KTw5BXUWjL65uts0qJWwe5VH6LhKC8%2BLJvC%2BzGLc0I5lM8G3Z9rBUNidKrHgEBdW3ixJ11BUBdm7SoDhKx1BiAGp2le0plwNt8Wu%2Bicd2alN%2FGqmV%2F0bTW8Y7d%2FZq4B865xE9UKf0hukj7BC44EhDRgi%2BNx2NFuFdk1h6QgtM2a3LAJXdO0HMif9LtkJEHV2C1qS4%2BK9WOx72E%2FZ%2BAufoxKEF5SRVXfyK10jejO1Y2%2BeVX1iFUlXM1F%2BRtMBQ6HmFVRNqeMaNNvLECLNCYVjai5Q7fr3mxUfJRNUwBlai09PEOCiarzeV%2Bwj5u5EiAIT84GUWKvhNfFDuWNZAM5rVBlr7HntGTiEIO8cEZRL4SELvXPDXBCJBVrEB3mb09CGGQBmROJvheSrJYqQ4xcbjREHuI3kowT1%2F2P16yPRAob0lyzULrcBjOxEq2S1Hww1lFJcTWB%2BynGQZXXVFcjL8IrPW8F1gUUmLhnt%2BvjgpGh2F02%2FmNFnFhh6Ao%2BvP9QFCZaUHvLVD9Vo5qcLKmE%2BAeRs738JiJHbNbWgi3DAggTOWmXyu6NLVFDB%2B5gCIyj9oTdUM12%2FjCzy6PBBjqkAZ2z1VP4z990EtpgjBmyJKNI6CzcI2KHbtK9cMVycsih3yRmADwZheDn%2F%2FFPxzvCVZu9W2jVMQk8w3hdW9hthIF1W1BxOrwIi%2FLTk1gNLFMz7JQLn4v0CfXv3xTNKBz8K7M0KGtUqk6057XqPrsw5KNUnuLspSCYpAoYvSD0z5iAkZ9ihLnDHz%2BO8WhjmgbMWJ0UJTnUc4glFwA9rPrCpU3DH78P&X-Amz-Signature=896e76280f433b8c0a8396374e288a49c0d52b65657832dde04f449a4bda0ef5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
