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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSF5BDV%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIBITEPu9sb4MWGjSJswbzNm8ax%2B1H%2BZVxldgy2n2TLz%2FAiBYPjcJ5dJ91WYaFeTT5yVOnIREymKp0tddZgyMRsE4RCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw8q3hAKiVa8TnG00KtwDaZfIgCmj%2FgKJ02XmXTQgHYIfh1sAxaENI4AVZm3O58FW91x5kF84d10p9g6RDKwinq3pW4d2eGq2d2Uit6W%2FJKHSyBLGWHcrHqbljK40CrVfIKU9Ok51SzQm5loZPqIvRrqkHyWS89hMNIx7p%2FLYhZkpmmb2DmbNB2LLQ9uxRLnIgHBGM7vneQKlaVLzQxg4mfkB5IfY%2F0491YxEj39X%2BVpBKP1Jl%2BOdwcF4%2FIK1amwCgelm86BEw10p%2B4bGotprrFylk5d1%2Bm7L1ifk6g8PfQIwiFUTrb%2BbljRFlMGi%2FoMbwiYYbYwZ2saR20XuntOspLEBvheJj02%2BU2dJ52DIrPUa4PW8a5zJCv44yMkqVbKh1g%2F02IJzSg1NYvJ%2BvOgnT1Ys4SeDwo4Cu7%2B3kmzuWHJq%2F883o9GU7fl3AQb%2BrlB79epWVEFtTmxQeygyxtdVqGocoEpZIhRgAVEQ%2FDshqhD3GVhX5imztYLtfHQy9m4P2RJwSxf7upkw7TgHV%2Ff3i0Xd7eBOAig4wmbHuhHvBYHxyfhoLQiDZ34YCoyPU3NBKy5gigq9IF9vRw2U0XlvzIt0Z2Zy5mtCNLVCbrUhnSg1zdVJkTGlACPEDkeZ2fuLvDYy87UMmCj4AgkwjsT5wQY6pgESJqii4YKgD%2BWh6eefIjPDS8v79mvpZH4abCb06LD2ZHl6HcKwn3d4P6aHGPBFgagojQnxIyTLN%2B4oh20ZvfBD5ZLJp9eee6V6WfgaJANHjfXbSQA1SJLnG1iTBkpC3ua8Dd1TGCufL2lqPXHRvSfOFedfBBV4ClV6Q7JgxUJr5VWVn1Ig46ScaXIcUZIZ6gfb2aRr5dhVVGmAyDeAacPh%2F1HjVqdo&X-Amz-Signature=0f9c004c2b7c31629c6f8b01e8db554dbdfe02bb2a2dcf8ed496f4cbd7b2740b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YKSF5BDV%2F20250603%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250603T033909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJGMEQCIBITEPu9sb4MWGjSJswbzNm8ax%2B1H%2BZVxldgy2n2TLz%2FAiBYPjcJ5dJ91WYaFeTT5yVOnIREymKp0tddZgyMRsE4RCqIBAj8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw8q3hAKiVa8TnG00KtwDaZfIgCmj%2FgKJ02XmXTQgHYIfh1sAxaENI4AVZm3O58FW91x5kF84d10p9g6RDKwinq3pW4d2eGq2d2Uit6W%2FJKHSyBLGWHcrHqbljK40CrVfIKU9Ok51SzQm5loZPqIvRrqkHyWS89hMNIx7p%2FLYhZkpmmb2DmbNB2LLQ9uxRLnIgHBGM7vneQKlaVLzQxg4mfkB5IfY%2F0491YxEj39X%2BVpBKP1Jl%2BOdwcF4%2FIK1amwCgelm86BEw10p%2B4bGotprrFylk5d1%2Bm7L1ifk6g8PfQIwiFUTrb%2BbljRFlMGi%2FoMbwiYYbYwZ2saR20XuntOspLEBvheJj02%2BU2dJ52DIrPUa4PW8a5zJCv44yMkqVbKh1g%2F02IJzSg1NYvJ%2BvOgnT1Ys4SeDwo4Cu7%2B3kmzuWHJq%2F883o9GU7fl3AQb%2BrlB79epWVEFtTmxQeygyxtdVqGocoEpZIhRgAVEQ%2FDshqhD3GVhX5imztYLtfHQy9m4P2RJwSxf7upkw7TgHV%2Ff3i0Xd7eBOAig4wmbHuhHvBYHxyfhoLQiDZ34YCoyPU3NBKy5gigq9IF9vRw2U0XlvzIt0Z2Zy5mtCNLVCbrUhnSg1zdVJkTGlACPEDkeZ2fuLvDYy87UMmCj4AgkwjsT5wQY6pgESJqii4YKgD%2BWh6eefIjPDS8v79mvpZH4abCb06LD2ZHl6HcKwn3d4P6aHGPBFgagojQnxIyTLN%2B4oh20ZvfBD5ZLJp9eee6V6WfgaJANHjfXbSQA1SJLnG1iTBkpC3ua8Dd1TGCufL2lqPXHRvSfOFedfBBV4ClV6Q7JgxUJr5VWVn1Ig46ScaXIcUZIZ6gfb2aRr5dhVVGmAyDeAacPh%2F1HjVqdo&X-Amz-Signature=1a900626d73b102b0aa9b3ad1abecd19dbcb208bfbc6ab176fa74a5db6a6cb56&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
