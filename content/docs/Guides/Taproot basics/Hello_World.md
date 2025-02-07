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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ZJU7TA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCF6qBLitVK%2FCtlhNL%2BhfRzNUEm6Kd6n4ygt7Jmu4D1fQIhAL0XH29D84%2Fme%2BKKQRPXnkMP8ha3p%2Bfv1iKqmJ458CFPKv8DCGkQABoMNjM3NDIzMTgzODA1IgyftWzyZXh3kW5EMRYq3AMrClsPRH3nzN2AaculWAc6gcpeW056g9yKfbi1SMp4DqtdUcGzJ%2BDXtx9DBi2ps4u6d1Ioj9MMLf4hw4nKGJ9dBHWDOUJBPzkmHGbAnpO78U6%2BQKA5Dl61E2xnmM42b04y8GQvnJy15rDIwbEebOdwpvGvw1iWnMY3Z4U%2F19IxiXLkfguzFsPAvZ9mWzZ%2BVSTOfheqkiBgogKT8Jd%2FmDp43fWP2D8wrr3URb61kBEQmBk6%2FfR7pABVsm5uU8mevWawsixFt6C3GJkcYUP2MqL6E1MyXr%2BdY3cq3ThP4zYnRLK40QKWEWQKT7j93MEqw7R1I%2FEnaLVu01C5CoEJLDIHzN6hPiezHyx7Au8K5ZG6381IHV5zCIBxAOKWjSG8yfwyeQuBf9Dh%2FvWEESE60KyDbOJc11F8BkhvNceMBVcuoH4YWOcsZmg5qVmQXqyQYK3L1FOjTwTkJTMtIwqJhbqwvJA4pe5OiI0AqF7BAYUansVHk%2BSwsp5eSk7PQ1mQEUL7IzUZxt2KQhFbzhZQbBhXznQo5sXd8nR5uL1WwxChYTLN6UH2YV4eC%2BvIsKe7jmOnwnfA7R3BhkUeIbx41SwCb%2B0JVq1DX9rM7YlpQ%2BCqG58JlL8BIpyga32HVTCHm5W9BjqkAYDPPW2d7UisOQ9lubGVXW3RtaNAE4M5HiUUIdRv9rWDnlc7rHMZFE4i3rqc0v01hWHMPo3Ld0wwtTon3%2BNZSyx2escLIjj4LGyE%2F1PKd9UAejAjB7Q00kEdP3EWGPgNg6MEMTDflQ%2BHPAII3EuEAPg%2FjOjooM3XfD%2FhbtNWo63lRBWigGEFNteYUkm1S%2BMz5qQXNjMAKSXe000L%2Ftw6Y0OuJxJI&X-Amz-Signature=0e22601482a5347ba16c99d32397df988cec8b9e959cf9ca1d7f8d9fbdad96c5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5ZJU7TA%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T003554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJIMEYCIQCF6qBLitVK%2FCtlhNL%2BhfRzNUEm6Kd6n4ygt7Jmu4D1fQIhAL0XH29D84%2Fme%2BKKQRPXnkMP8ha3p%2Bfv1iKqmJ458CFPKv8DCGkQABoMNjM3NDIzMTgzODA1IgyftWzyZXh3kW5EMRYq3AMrClsPRH3nzN2AaculWAc6gcpeW056g9yKfbi1SMp4DqtdUcGzJ%2BDXtx9DBi2ps4u6d1Ioj9MMLf4hw4nKGJ9dBHWDOUJBPzkmHGbAnpO78U6%2BQKA5Dl61E2xnmM42b04y8GQvnJy15rDIwbEebOdwpvGvw1iWnMY3Z4U%2F19IxiXLkfguzFsPAvZ9mWzZ%2BVSTOfheqkiBgogKT8Jd%2FmDp43fWP2D8wrr3URb61kBEQmBk6%2FfR7pABVsm5uU8mevWawsixFt6C3GJkcYUP2MqL6E1MyXr%2BdY3cq3ThP4zYnRLK40QKWEWQKT7j93MEqw7R1I%2FEnaLVu01C5CoEJLDIHzN6hPiezHyx7Au8K5ZG6381IHV5zCIBxAOKWjSG8yfwyeQuBf9Dh%2FvWEESE60KyDbOJc11F8BkhvNceMBVcuoH4YWOcsZmg5qVmQXqyQYK3L1FOjTwTkJTMtIwqJhbqwvJA4pe5OiI0AqF7BAYUansVHk%2BSwsp5eSk7PQ1mQEUL7IzUZxt2KQhFbzhZQbBhXznQo5sXd8nR5uL1WwxChYTLN6UH2YV4eC%2BvIsKe7jmOnwnfA7R3BhkUeIbx41SwCb%2B0JVq1DX9rM7YlpQ%2BCqG58JlL8BIpyga32HVTCHm5W9BjqkAYDPPW2d7UisOQ9lubGVXW3RtaNAE4M5HiUUIdRv9rWDnlc7rHMZFE4i3rqc0v01hWHMPo3Ld0wwtTon3%2BNZSyx2escLIjj4LGyE%2F1PKd9UAejAjB7Q00kEdP3EWGPgNg6MEMTDflQ%2BHPAII3EuEAPg%2FjOjooM3XfD%2FhbtNWo63lRBWigGEFNteYUkm1S%2BMz5qQXNjMAKSXe000L%2Ftw6Y0OuJxJI&X-Amz-Signature=b7041e1be7171bfead0077bbd159bdfa9f85a320c4eb660aeef98f82b905be85&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
