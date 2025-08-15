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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVIVRKXG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGG7j1lxADY8IFyygVgD%2BL2qPfj3RPSJNfON%2FhDz0w0eAiEA%2BwXP2diuv8xFn4ihiKjPIyV3qUxSelbzzYDJlXnRO%2FUq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMevasVWl1aP%2ByHVPSrcA8ebyuQCQCH4Lfnch9Wqt%2BxDbrSAUfjz0Mp%2FKEp3cTTmcgLAQyFYGfhlBPVgoiyWlwttdRpiri%2BlR3KT%2Fr2EItooV75%2FIhsJaMhFNSRwYaQAGeOqRhgUk1EQtIwmS8jSNrOK9N8ks4gGkjWJkZ%2FmmXSBdyYhY7wUa2bxLpjCK2hj7qgX4rxaZdoiv4c0UoG9BRKsevzZSDW6bYKlKkI0XIEHssRicVofEIQznGDh8u0gklxoG%2BfWfXVPP8xscSF6dpgvEDVip%2B58whsp5OKdQGsLOvpy0x6PQaYPwyPk8WsMBVjSoWBtwte7AUJK8sj8n6%2F64tvwD6qql6e3G%2FWQo7ZK%2FeRu58OdzCa%2Ftv1eI9FyzQbYM0qZveaEJFJUPzV0sXhXvUWI%2Fiz6AiJ2Dwf4gPDJjFKYPC%2BcnR6pm3pg32zUUSfLxzrQCormadxQTo8nPOALolg3v2Ekm%2BwLyRvZlM3TFOYCjGU%2FD783yzmmFTvILwi8Nzp4Qeq9oh8hnibuN1ajC3KxAwp6X5A8GGMMVaNGTw7wQBYq%2F5ja2Rb07giF0om0BhSUL2Kg%2BF4m4vnABd576aHBSACfyU7pa7XzSNEYjqF3v9%2B7qQ5Q3CyF5KwagHAhQkptC1zLaXRGMOvX%2FsQGOqUBI50je3I9%2BOl3gk%2BXjvSJYngeROZokxY4lFbTQo0EVDDmovo6TgeRNsQpvsMcMDht224jUsvjEjMUAFntUOtInuufeE8Mu%2FqZNEYg56p1AQT09vWgXZejfAflnDjJqk9R3QWprWPHImIagwvGSW09aYyMlrBejOWISj3mTAMPs5NIgzi9I7%2FkJGS2U8diLIDI6%2BqfM1WWeTk%2Fb9IkYpgZswCiYAfu&X-Amz-Signature=529c9e1ee218465b4e6d7ee610db103bc760fe174f4bf73c48977d233466fe00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVIVRKXG%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T220848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIGG7j1lxADY8IFyygVgD%2BL2qPfj3RPSJNfON%2FhDz0w0eAiEA%2BwXP2diuv8xFn4ihiKjPIyV3qUxSelbzzYDJlXnRO%2FUq%2FwMIZxAAGgw2Mzc0MjMxODM4MDUiDMevasVWl1aP%2ByHVPSrcA8ebyuQCQCH4Lfnch9Wqt%2BxDbrSAUfjz0Mp%2FKEp3cTTmcgLAQyFYGfhlBPVgoiyWlwttdRpiri%2BlR3KT%2Fr2EItooV75%2FIhsJaMhFNSRwYaQAGeOqRhgUk1EQtIwmS8jSNrOK9N8ks4gGkjWJkZ%2FmmXSBdyYhY7wUa2bxLpjCK2hj7qgX4rxaZdoiv4c0UoG9BRKsevzZSDW6bYKlKkI0XIEHssRicVofEIQznGDh8u0gklxoG%2BfWfXVPP8xscSF6dpgvEDVip%2B58whsp5OKdQGsLOvpy0x6PQaYPwyPk8WsMBVjSoWBtwte7AUJK8sj8n6%2F64tvwD6qql6e3G%2FWQo7ZK%2FeRu58OdzCa%2Ftv1eI9FyzQbYM0qZveaEJFJUPzV0sXhXvUWI%2Fiz6AiJ2Dwf4gPDJjFKYPC%2BcnR6pm3pg32zUUSfLxzrQCormadxQTo8nPOALolg3v2Ekm%2BwLyRvZlM3TFOYCjGU%2FD783yzmmFTvILwi8Nzp4Qeq9oh8hnibuN1ajC3KxAwp6X5A8GGMMVaNGTw7wQBYq%2F5ja2Rb07giF0om0BhSUL2Kg%2BF4m4vnABd576aHBSACfyU7pa7XzSNEYjqF3v9%2B7qQ5Q3CyF5KwagHAhQkptC1zLaXRGMOvX%2FsQGOqUBI50je3I9%2BOl3gk%2BXjvSJYngeROZokxY4lFbTQo0EVDDmovo6TgeRNsQpvsMcMDht224jUsvjEjMUAFntUOtInuufeE8Mu%2FqZNEYg56p1AQT09vWgXZejfAflnDjJqk9R3QWprWPHImIagwvGSW09aYyMlrBejOWISj3mTAMPs5NIgzi9I7%2FkJGS2U8diLIDI6%2BqfM1WWeTk%2Fb9IkYpgZswCiYAfu&X-Amz-Signature=e146b1c8d1f2ed800ea74d301112f38ae015387a6ad1923391ddd0924a7587a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
