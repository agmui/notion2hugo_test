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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2JLONGW%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCJu4VcPVZUMDZYBR%2FsbYJlR2F8mysK0HlwVoCADBK0owIhAMXhC7SVxe5Io1j1P1xGeQj2E3WIDg%2F9BWpqbh2omwCsKv8DCEcQABoMNjM3NDIzMTgzODA1Igw6GCHF5tEU%2FCGLEScq3AOYJOBCpY1b%2Bk2GCZt8NRUJZhNs6gUFIdNXlgT7vvQCbUzr1E4vl0BC5QecY89dDFMTqjNi%2FOiBCK06RdZeDbpUUloWJf9c%2BTvfd4g4gHVAR6rrzGK18YjjMU24OEdC9mE3tNb0jUoxsLKpYJAPZBogZJd5rdhzFncV%2F95e8gW4e7ZXhm4CA5ixq%2Bhi%2B373z9AnLozStCKcFNO1o8dDmhvjr%2BtKlfkUYu27vdh1uq%2BfmQ10WmVBxcSIlGnve5a0jph6RCdW%2F%2BF9jppwpJtTzEpkShhzP0jBr1jw5btFSwtETPDUwNS6lCc7FolV8BT%2Bni%2BZGeU88u8T0fNYHAWLHtY3rZrbVax4PAruqITqCBsWKNshyvuFlz00mdvXs0OZRsIQAkTOkiH%2Fxnhvwg3ohOibWz75jw9k7IH%2BgLAi8v6GsPM9byFaMs9socFS6RHVzK%2BinRg%2FUA%2Fx8Dk44Wljnk1youbH5HCRYl9%2B62s%2BmAP2gX7xnTM37Y0R3mhHrQ415VeXzj%2FXlZM4NQ%2F8IL78HdVKBHmdIof%2BcmY6gq0cYGKQG4fhVAutZzwF2g8WzIK0E8cx22oowGDFprqNRjXHPo0vC6%2BolSJihWEgG9gkONddZNVo2pMM8O25ILVwmjDwxcK9BjqkAXhCNL9CGRkRR%2BFrbwc4lA4pt9Bo02QBOEpmrcjkQhUra%2BdOvx2cx3PMAafo6tu%2F11PdDXHROCk4dZj3vosYwkpZIPqRrWiIQE7lYpupa43TJu9BKjqK0tT5FVhC1eQouPKS70WJ4KzgkfBE%2BZBnnG%2F%2BojPFpd%2BC6y4WAObJBpMQIp4ODDh6XZMOzIHCQfqVy%2Fyzx15mOFEIrqpwbM2JGmGpNO5Q&X-Amz-Signature=79af3e15051c9637ebc8231d2a3ddaae70480202dd00c8a57eba7116fbadc911&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2JLONGW%2F20250215%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250215T160715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJIMEYCIQCJu4VcPVZUMDZYBR%2FsbYJlR2F8mysK0HlwVoCADBK0owIhAMXhC7SVxe5Io1j1P1xGeQj2E3WIDg%2F9BWpqbh2omwCsKv8DCEcQABoMNjM3NDIzMTgzODA1Igw6GCHF5tEU%2FCGLEScq3AOYJOBCpY1b%2Bk2GCZt8NRUJZhNs6gUFIdNXlgT7vvQCbUzr1E4vl0BC5QecY89dDFMTqjNi%2FOiBCK06RdZeDbpUUloWJf9c%2BTvfd4g4gHVAR6rrzGK18YjjMU24OEdC9mE3tNb0jUoxsLKpYJAPZBogZJd5rdhzFncV%2F95e8gW4e7ZXhm4CA5ixq%2Bhi%2B373z9AnLozStCKcFNO1o8dDmhvjr%2BtKlfkUYu27vdh1uq%2BfmQ10WmVBxcSIlGnve5a0jph6RCdW%2F%2BF9jppwpJtTzEpkShhzP0jBr1jw5btFSwtETPDUwNS6lCc7FolV8BT%2Bni%2BZGeU88u8T0fNYHAWLHtY3rZrbVax4PAruqITqCBsWKNshyvuFlz00mdvXs0OZRsIQAkTOkiH%2Fxnhvwg3ohOibWz75jw9k7IH%2BgLAi8v6GsPM9byFaMs9socFS6RHVzK%2BinRg%2FUA%2Fx8Dk44Wljnk1youbH5HCRYl9%2B62s%2BmAP2gX7xnTM37Y0R3mhHrQ415VeXzj%2FXlZM4NQ%2F8IL78HdVKBHmdIof%2BcmY6gq0cYGKQG4fhVAutZzwF2g8WzIK0E8cx22oowGDFprqNRjXHPo0vC6%2BolSJihWEgG9gkONddZNVo2pMM8O25ILVwmjDwxcK9BjqkAXhCNL9CGRkRR%2BFrbwc4lA4pt9Bo02QBOEpmrcjkQhUra%2BdOvx2cx3PMAafo6tu%2F11PdDXHROCk4dZj3vosYwkpZIPqRrWiIQE7lYpupa43TJu9BKjqK0tT5FVhC1eQouPKS70WJ4KzgkfBE%2BZBnnG%2F%2BojPFpd%2BC6y4WAObJBpMQIp4ODDh6XZMOzIHCQfqVy%2Fyzx15mOFEIrqpwbM2JGmGpNO5Q&X-Amz-Signature=e64d1085fce4852cb4cab1b4c926152c6a843fc3ab7f03f58b6eecabbec9ed73&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
