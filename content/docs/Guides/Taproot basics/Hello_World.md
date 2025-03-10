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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657ICE5HD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQD8vuhMg7jVHfZLr%2FB1VwLGKQOlnVtRTNGh2PgH2JbjRgIhAJI4Yzv8ihZA1MNLGjgzDtKzVsA0%2BqrS1SvU0lceqj%2F8KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3KOLCP2nv96OqQUYq3ANPVwDUK16ucnBY2EriYtWyaySK6vml1ix4sjPzA3OUqyL8zDiPRNdfywt3NKlX7j08CNLIgiqp8Am6tdrFqKw1VBlbYvOmB8NeXsI6ShDOqd3i6gHAvUHl2Mi4PNQPBWMFGSXxs2qowKKuW8xVFkJjWJfhj%2BjYNv4ImJzNBgWAkVNWVfH%2BEIgfVlD1af4nqwSl7On%2B7J15elayZtaMlotL3zk3pXs16PnlneOs5JFTWLaTE7P26ST8b%2FhQienDopv%2Bh9rxLoOabpgJqmMTlsR602NmVVxRPN4oDRwgU6Iz%2Frr%2Br8YGBKL3L9WAmFezGHGGfCnX92aIoQe78MzBC%2BoSwMQplYGgghBOzLycA6K49baGnHclcXWg4hYpiRy9Yvy8isP686fdZmjin7duN6a6o1edVtUB2yTxa9C3XuHxp7rGaA3tJhUix7O7sl8VysljDyoE5%2FT7xvhqtZISeKgftH8n%2B5%2FERrivarIz2Jyt1Y3B3uVxk5er0%2F340t4nt4bdc%2Fn3O1T2f0XXsDFDp5zwJZ2Rvm7y9v6sISlhUC%2B3Fk6fnbKHHjPjlrhC%2FCPCF550UhaVNLpx8SEDci0xP%2FlCP2kVmGwbLEqMxdnCgz5Ff3PXWr5nTgN1huDcazCA%2F7m%2BBjqkASUfTqgDipvxMQYGe3hCo%2BnObjag2QHmreei7CLp%2FuexZrWhXdCvHMeTBuAPwiebWu%2Fwwr2TIMePsJFIhJs6JocVeXYW9nuVBtph1G7GLvEnOeuTrudMBrIGp51O3c5%2Bp%2BGtPH3FGapegnbAnOihQdknrCL1fpzPH%2F99bes6LWi05a69ryZSJ7mZeuryIlOoJ8N7GkGq1OjuT7bQMHBQ8jq%2BTPYN&X-Amz-Signature=edf6b9da2101159cadbbb252a574c90be8a9e8795a224c2c2e501396808faee7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657ICE5HD%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T061011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJIMEYCIQD8vuhMg7jVHfZLr%2FB1VwLGKQOlnVtRTNGh2PgH2JbjRgIhAJI4Yzv8ihZA1MNLGjgzDtKzVsA0%2BqrS1SvU0lceqj%2F8KogECIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy3KOLCP2nv96OqQUYq3ANPVwDUK16ucnBY2EriYtWyaySK6vml1ix4sjPzA3OUqyL8zDiPRNdfywt3NKlX7j08CNLIgiqp8Am6tdrFqKw1VBlbYvOmB8NeXsI6ShDOqd3i6gHAvUHl2Mi4PNQPBWMFGSXxs2qowKKuW8xVFkJjWJfhj%2BjYNv4ImJzNBgWAkVNWVfH%2BEIgfVlD1af4nqwSl7On%2B7J15elayZtaMlotL3zk3pXs16PnlneOs5JFTWLaTE7P26ST8b%2FhQienDopv%2Bh9rxLoOabpgJqmMTlsR602NmVVxRPN4oDRwgU6Iz%2Frr%2Br8YGBKL3L9WAmFezGHGGfCnX92aIoQe78MzBC%2BoSwMQplYGgghBOzLycA6K49baGnHclcXWg4hYpiRy9Yvy8isP686fdZmjin7duN6a6o1edVtUB2yTxa9C3XuHxp7rGaA3tJhUix7O7sl8VysljDyoE5%2FT7xvhqtZISeKgftH8n%2B5%2FERrivarIz2Jyt1Y3B3uVxk5er0%2F340t4nt4bdc%2Fn3O1T2f0XXsDFDp5zwJZ2Rvm7y9v6sISlhUC%2B3Fk6fnbKHHjPjlrhC%2FCPCF550UhaVNLpx8SEDci0xP%2FlCP2kVmGwbLEqMxdnCgz5Ff3PXWr5nTgN1huDcazCA%2F7m%2BBjqkASUfTqgDipvxMQYGe3hCo%2BnObjag2QHmreei7CLp%2FuexZrWhXdCvHMeTBuAPwiebWu%2Fwwr2TIMePsJFIhJs6JocVeXYW9nuVBtph1G7GLvEnOeuTrudMBrIGp51O3c5%2Bp%2BGtPH3FGapegnbAnOihQdknrCL1fpzPH%2F99bes6LWi05a69ryZSJ7mZeuryIlOoJ8N7GkGq1OjuT7bQMHBQ8jq%2BTPYN&X-Amz-Signature=531846de6d463314fbc31144be878f5a48fd48aa61d55b5b7102a8def3002c58&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
