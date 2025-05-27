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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRBI2M2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGE6ZZKTGfgvXLBwbcJIjQvdJlYBq2ES3xm8rXCzQF0iAiEAxWKlpejsTm75FCdCiXOU6Q7ZHVZWGnlB2qAiU8YvoB8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLoV8syn1NCbS%2FBPlyrcA0nD3Y2kWQKWTq7VjsuOCpn%2FJXFIg7mRtBJh6KuG4uOFE4jrkLrwfA3zH6baEaTh93RCE%2FQ3e%2FeNrGo2%2B0%2B19%2BF2N9JMj%2FNJDKVZv1UWcKKNZ9jTmoQf8AP1HhshV%2FcnDBIY5qdXbTUv95Fl5ic0oSXhW39ugC0unsCANNBlNNuVJaq0vygHNL426MqxTA8ZQKrLIG%2BoUEuNuEw0t7pLWpXvMX0%2BG%2BzRs73E1w0tFf5LgFhNdfppN10ugM5vGPbkovpIOmTeVAdIw2TxFTf0csBQ3OyqbUAdsx7YRxkAFbAOME%2B%2F9Puy8lC6vK8%2FEfeWRYAOCZbv2KBFfrWGV2K9qBkC2cpojjCcDCKwRrtqLHg909lO7BKdq3LnTix%2Fu5Q0v3O%2Fj3XwkSUAw69qPkncIjdq%2BUXuA7%2F2NVATMPZGGT%2F0VzKaK1QIeegjYZQAZ3bEalg0beEVNrQkmgHUASd9fcLYZsTNnlOBZcKvdniRbIw2Zpqo3K3%2FwgmBrOqpagCqXqr7bFxwrJjkT2p8KRmmRZ26LXqof6SdpbzL1UVxHfv3i%2F0JVRGowEudTRqZX92oAyl8%2F%2BK3wBpwLZOOemioGViInVChp1W17HXf2oZYI9a71a9AQulqKbyyBtkLMOvJ2MEGOqUBXeAeVUd2zPoKYDJVPbiBYPbQdkWJvGXPXK%2BsgNmsmN4Tj0b9R0ZwA6tOSxHjGNZp1kFzDXXdeQaG7L4yzEV8JTv533eoY0Zhj7%2BnReO%2BciHvVdLRlJAVPBqjdrtd23TZtxvA2y515wumXWRw6Agi0wi1xSsrUo%2FL78jxKKiQ4lkhtIgJToLKrG4Rb%2Bv1YnrKypjPykL%2FIZXAvybP7BczDQ3Ilfct&X-Amz-Signature=f156f9571f993ae9568a5e2a3bcde25120b52127744d3c26e870681bc874547a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662QRBI2M2%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGE6ZZKTGfgvXLBwbcJIjQvdJlYBq2ES3xm8rXCzQF0iAiEAxWKlpejsTm75FCdCiXOU6Q7ZHVZWGnlB2qAiU8YvoB8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLoV8syn1NCbS%2FBPlyrcA0nD3Y2kWQKWTq7VjsuOCpn%2FJXFIg7mRtBJh6KuG4uOFE4jrkLrwfA3zH6baEaTh93RCE%2FQ3e%2FeNrGo2%2B0%2B19%2BF2N9JMj%2FNJDKVZv1UWcKKNZ9jTmoQf8AP1HhshV%2FcnDBIY5qdXbTUv95Fl5ic0oSXhW39ugC0unsCANNBlNNuVJaq0vygHNL426MqxTA8ZQKrLIG%2BoUEuNuEw0t7pLWpXvMX0%2BG%2BzRs73E1w0tFf5LgFhNdfppN10ugM5vGPbkovpIOmTeVAdIw2TxFTf0csBQ3OyqbUAdsx7YRxkAFbAOME%2B%2F9Puy8lC6vK8%2FEfeWRYAOCZbv2KBFfrWGV2K9qBkC2cpojjCcDCKwRrtqLHg909lO7BKdq3LnTix%2Fu5Q0v3O%2Fj3XwkSUAw69qPkncIjdq%2BUXuA7%2F2NVATMPZGGT%2F0VzKaK1QIeegjYZQAZ3bEalg0beEVNrQkmgHUASd9fcLYZsTNnlOBZcKvdniRbIw2Zpqo3K3%2FwgmBrOqpagCqXqr7bFxwrJjkT2p8KRmmRZ26LXqof6SdpbzL1UVxHfv3i%2F0JVRGowEudTRqZX92oAyl8%2F%2BK3wBpwLZOOemioGViInVChp1W17HXf2oZYI9a71a9AQulqKbyyBtkLMOvJ2MEGOqUBXeAeVUd2zPoKYDJVPbiBYPbQdkWJvGXPXK%2BsgNmsmN4Tj0b9R0ZwA6tOSxHjGNZp1kFzDXXdeQaG7L4yzEV8JTv533eoY0Zhj7%2BnReO%2BciHvVdLRlJAVPBqjdrtd23TZtxvA2y515wumXWRw6Agi0wi1xSsrUo%2FL78jxKKiQ4lkhtIgJToLKrG4Rb%2Bv1YnrKypjPykL%2FIZXAvybP7BczDQ3Ilfct&X-Amz-Signature=bc4f626ef3a6088409091badb0edf38c85ab5410cb440b1b6d9db29083578206&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
