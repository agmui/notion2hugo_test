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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNDXLZPY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5yh2sXkO6DZKKRMgawW0y8iyU%2F%2Bo2gR1k%2BveIQnMlFQIhAP3d9bvLawXcWkU6ypS8xNxSqqUB0LD7zv5Z1j51Quo%2FKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxygfwfAHHdp%2Fuz1q0q3ANf3AvqtOdaRdDcR1qYu6k0bgqrYneyGNtb0pFnAhriTFMHPnSTQu8MqK3WP6eEPbKlAa5dTtPy3AQZXZFBIRc0Fhe15iaHaWYjA80yMQHJxIFM6b0XfqO0%2BV0VWmur2fOnpjcJBJT8Xox4VtU8mRWMI9QYQJ9l6StEzXzIeKNTwepv9e%2BEMwhzop0CDn%2FJLL94SLFTBmHaesmN5Z%2B5e1JkU4F%2B8LbJ3n3pJdIIl3SSpmCj98cwNA%2FUrTWmmDBElF7BxbWPp29%2BOD6Dgk7Q1ddb6qk%2BEvK7YvUrJ5G%2B8DHraH%2FAGnkLEWfWXHbNyZEGd5G34LV6%2Bfd7sCYSmEwgwfOmyQD6mfAuHnOd4z%2BpCXIe9GCG2aIAa2NXWTJtCiLlQI2Aigo5MnxLcNXrGzP4FEL0TPeTnDrent1zd8TPxiaipb7nRJDJaFCO%2F9B2x2gEELvN8LBxDtScNSJ33f7z%2BkRI412l832C2F5DV6MooHpRZthej2UJs5gxcBT%2FJaU%2FngvE0wLR66VPQ8ly01jGyJDfEZ%2ByIe8rQeHaJDMC%2F8jeS8QUfdwqE74v6KVr888k3arJwfQ2BD3HfBtkJBpWST5NDUCWRPe4bkMphvmePBUQYdtdgNFs6tgawdNxOjCQz%2BS9BjqkAXRwDKgpBWCIIuusYqTnUZN%2B4CkugavpFT7ZlXbPk43gI5dmTHsF4LytIMiYWNMxEIWe1Srfk3DmAUWHMZXZcEYeg%2BQst7dBmehXWXRk3pmHH2dLoFezgOBKue%2BnLAxz8%2FnreuZCbvuLkLRhISGVVAWog%2BRtijaDzZIbhUp%2FSZTD7S9lENahVACCO5oudBAKD%2BvffMW6SJAulG9o3iSwOh3EN0qI&X-Amz-Signature=af53f8196cc9f379039e6cea576110d8bc4bbea9fc6054aa0856fac4818d68b2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RNDXLZPY%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T020624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD5yh2sXkO6DZKKRMgawW0y8iyU%2F%2Bo2gR1k%2BveIQnMlFQIhAP3d9bvLawXcWkU6ypS8xNxSqqUB0LD7zv5Z1j51Quo%2FKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxygfwfAHHdp%2Fuz1q0q3ANf3AvqtOdaRdDcR1qYu6k0bgqrYneyGNtb0pFnAhriTFMHPnSTQu8MqK3WP6eEPbKlAa5dTtPy3AQZXZFBIRc0Fhe15iaHaWYjA80yMQHJxIFM6b0XfqO0%2BV0VWmur2fOnpjcJBJT8Xox4VtU8mRWMI9QYQJ9l6StEzXzIeKNTwepv9e%2BEMwhzop0CDn%2FJLL94SLFTBmHaesmN5Z%2B5e1JkU4F%2B8LbJ3n3pJdIIl3SSpmCj98cwNA%2FUrTWmmDBElF7BxbWPp29%2BOD6Dgk7Q1ddb6qk%2BEvK7YvUrJ5G%2B8DHraH%2FAGnkLEWfWXHbNyZEGd5G34LV6%2Bfd7sCYSmEwgwfOmyQD6mfAuHnOd4z%2BpCXIe9GCG2aIAa2NXWTJtCiLlQI2Aigo5MnxLcNXrGzP4FEL0TPeTnDrent1zd8TPxiaipb7nRJDJaFCO%2F9B2x2gEELvN8LBxDtScNSJ33f7z%2BkRI412l832C2F5DV6MooHpRZthej2UJs5gxcBT%2FJaU%2FngvE0wLR66VPQ8ly01jGyJDfEZ%2ByIe8rQeHaJDMC%2F8jeS8QUfdwqE74v6KVr888k3arJwfQ2BD3HfBtkJBpWST5NDUCWRPe4bkMphvmePBUQYdtdgNFs6tgawdNxOjCQz%2BS9BjqkAXRwDKgpBWCIIuusYqTnUZN%2B4CkugavpFT7ZlXbPk43gI5dmTHsF4LytIMiYWNMxEIWe1Srfk3DmAUWHMZXZcEYeg%2BQst7dBmehXWXRk3pmHH2dLoFezgOBKue%2BnLAxz8%2FnreuZCbvuLkLRhISGVVAWog%2BRtijaDzZIbhUp%2FSZTD7S9lENahVACCO5oudBAKD%2BvffMW6SJAulG9o3iSwOh3EN0qI&X-Amz-Signature=4d04520d25c5c23cf8f68ad6c31b02fb2f46d6453dd55cb1b402e6f0d63320f8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
