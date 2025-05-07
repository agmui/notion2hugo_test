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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646IOO66T%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNuwzjhoULHC4A5798d5lqD5clslPcrb07nSVH41MNZQIhAOXhZrdlwzgM9IiqkroBMbps4xL6DNqr3xo6VKYYNQEnKv8DCGgQABoMNjM3NDIzMTgzODA1IgyeHVB4FyWg%2B%2FmAGKcq3AOIllvwM94OCt9Aqk00IBQqxVX1Jyd%2BtO2mjcSJnaHfG3a4Bzb1qPKSoecP9s04eI8ssCAOGEKQ2it6bw97R5GgMdkxwjDPHwuUW%2FqLpGxS1m7hgfAeOsKAcvoD4PqsXeuajBEDHN1uYcM1aoXAhpNJ4X47thIjN6fbxoHqEBB2eizw7zlV5PCOU6eiF%2FCQAxr4QlTljIheaM2ZE2JPtbAwOJ2PzyeQNIEt8Ds%2FV3BVNz%2Fm5oGuZ0Gwrc9t1yTuWLVuJBRxQ4mMEG8wr3C4V%2FZEPcGN0fC4Vk63Rpm5udwunORBXGZd8blnyYVp0%2ByxHa1%2BDOSlnWgWejd0fbG%2BWmVKPZqEBe4ylxK4fNHFR8Ly%2F1BOaixnPTyhJndwotw7FUR8BaQ9crBsCEIiF7nrZMuc1GkiDnOjVQLSrhH6mghlz%2FrxWJC1T7AeyLSoRI5eE9CG4zEEapX1KWFLdkcyRv%2BEm9caALb4EtSfV6CLmV4JBJzq8XF2iJPunwfkVr%2B31snwORtJBVL1asYBwNk15wUh7WoMW7tuAMHSx9wQ7BF8YOcTErRx91d%2FHSxtaSnsJUY1YKlHE42S4L1OG2AolbruzbsokRIG1WPWAE%2B21BYBVA4kiHci3dEzqbDvdTCyxu%2FABjqkAXeFJIoqvXu0ELftpSAIOMnCYsaOFhzKKuUwEWrxG5z5gp5S1HGKuXYF8BNOvAlLQrZeXOxH90PrCfSYiyLTrF2A5XButABdniHKuOPEEPD4rIbLjwVcJj0YjO%2FAZTg3kw%2FJOYv%2B8AkHlti9EoaUzdh1gxJl5lwh3TOqKOzRO0lIjrl1QIDmZC%2FwYyjFv3Bu9T7%2Bc9T9Lp6ZKu6eDvUiKirMuu6L&X-Amz-Signature=8f63c9174e18ca57d1cd7f731ec651cee886f8f3522c61040c31b06a3cc57443&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646IOO66T%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNuwzjhoULHC4A5798d5lqD5clslPcrb07nSVH41MNZQIhAOXhZrdlwzgM9IiqkroBMbps4xL6DNqr3xo6VKYYNQEnKv8DCGgQABoMNjM3NDIzMTgzODA1IgyeHVB4FyWg%2B%2FmAGKcq3AOIllvwM94OCt9Aqk00IBQqxVX1Jyd%2BtO2mjcSJnaHfG3a4Bzb1qPKSoecP9s04eI8ssCAOGEKQ2it6bw97R5GgMdkxwjDPHwuUW%2FqLpGxS1m7hgfAeOsKAcvoD4PqsXeuajBEDHN1uYcM1aoXAhpNJ4X47thIjN6fbxoHqEBB2eizw7zlV5PCOU6eiF%2FCQAxr4QlTljIheaM2ZE2JPtbAwOJ2PzyeQNIEt8Ds%2FV3BVNz%2Fm5oGuZ0Gwrc9t1yTuWLVuJBRxQ4mMEG8wr3C4V%2FZEPcGN0fC4Vk63Rpm5udwunORBXGZd8blnyYVp0%2ByxHa1%2BDOSlnWgWejd0fbG%2BWmVKPZqEBe4ylxK4fNHFR8Ly%2F1BOaixnPTyhJndwotw7FUR8BaQ9crBsCEIiF7nrZMuc1GkiDnOjVQLSrhH6mghlz%2FrxWJC1T7AeyLSoRI5eE9CG4zEEapX1KWFLdkcyRv%2BEm9caALb4EtSfV6CLmV4JBJzq8XF2iJPunwfkVr%2B31snwORtJBVL1asYBwNk15wUh7WoMW7tuAMHSx9wQ7BF8YOcTErRx91d%2FHSxtaSnsJUY1YKlHE42S4L1OG2AolbruzbsokRIG1WPWAE%2B21BYBVA4kiHci3dEzqbDvdTCyxu%2FABjqkAXeFJIoqvXu0ELftpSAIOMnCYsaOFhzKKuUwEWrxG5z5gp5S1HGKuXYF8BNOvAlLQrZeXOxH90PrCfSYiyLTrF2A5XButABdniHKuOPEEPD4rIbLjwVcJj0YjO%2FAZTg3kw%2FJOYv%2B8AkHlti9EoaUzdh1gxJl5lwh3TOqKOzRO0lIjrl1QIDmZC%2FwYyjFv3Bu9T7%2Bc9T9Lp6ZKu6eDvUiKirMuu6L&X-Amz-Signature=f43c10e7226075875707ce1878c39be03e6811537ae4ca5a757e35126e05fedc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
