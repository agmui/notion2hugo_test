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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYGRACW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEQjoJRe1K0EOib6oStKlwXZbrcRKN7i4NknJFkoDviYAiEA9%2FgTKQPCs77x6mfBsK%2F3PaRR3iq4S22mqUytjCEcWXgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIcvLmvLOfiYpExZEyrcAzwdbpTlHGftLu7huG4VWTxndEiMQcRArrpHUnUw8x%2FmL%2FClajKmKmlHInbccfXTjupRjZKCBbLDmQDM4BFrkMPhBWUEIXBGdGGNuiUYxXQyhMjfdyUWhQ6mm4esxeU%2B7PyCBotp2IuQzyvUjHTu4eli2wTnZ1M40f%2BzuEhhfX5Xclz5MBnbxkmjXOjka0Q5uZllnHyYR5F7tMajWTmCGoNPtnZMoPPq3LKzNWjb2XNPIMNT8grc3nuWq5JCZEwT7cnwiq27biXEaMxp%2Fg%2F4EQpN%2FLdvoFHr3ZTmF%2BJyBaW%2FBp7zlhvMPdvs2dl2AxNvPbXJ%2BCFO6Lu2HMjeqV%2BEFB%2FFz%2FIReTe3qP918Fj26b7meNzgGoDMUsSRX7C9QY4DJ1EaBuh4Bz942Mw4hf4qnjPIpUyGyyhS9I5ElRW%2Byfk2%2F8%2B9taTfim5QndkzX%2Bbqs4trvdndEea1pir1J%2BLGIwg5FxeHyzODe4joVavsAIBXG%2B%2BiNKkzf2psem8ksFXFULg%2FnB1o83XgTm5FlXoDk3hPTlDv8jYLQBcDKwjPew%2Boh4VHxOo0u2rK2%2BnMEQVcGWo1DdBqkQhTKUnvsneTEGblHYqgkMvR46%2BlCFrTyR3O8KHdL%2F0HW85xjTq5MInRj8QGOqUB5g6eAffmcZAX9FYeJfRhjmFXNAXe2TIhWfjWYpT14JZV3anG0tiSg22ZPD0h53Jrvu7PwkwyNF1RvVqEy0ubkKSSdsANaRaOWdkSCLIyEn51oYb2S0%2Bi2CvG48ztHuGRTbMkvTxnj4y96V1JaF7F9gndCfesw3%2Fj3AvEy9moQky4P3pSoO9JkyohQ3R3TPPnUhO7qDhdlqgc0J7qnaOCjTzgGSRP&X-Amz-Signature=72bd416c2444eb0ab3d8e81686e463520b3328bd958e084c07bbefeaf1b8df08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USYGRACW%2F20250725%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250725T210816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIEQjoJRe1K0EOib6oStKlwXZbrcRKN7i4NknJFkoDviYAiEA9%2FgTKQPCs77x6mfBsK%2F3PaRR3iq4S22mqUytjCEcWXgq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDIcvLmvLOfiYpExZEyrcAzwdbpTlHGftLu7huG4VWTxndEiMQcRArrpHUnUw8x%2FmL%2FClajKmKmlHInbccfXTjupRjZKCBbLDmQDM4BFrkMPhBWUEIXBGdGGNuiUYxXQyhMjfdyUWhQ6mm4esxeU%2B7PyCBotp2IuQzyvUjHTu4eli2wTnZ1M40f%2BzuEhhfX5Xclz5MBnbxkmjXOjka0Q5uZllnHyYR5F7tMajWTmCGoNPtnZMoPPq3LKzNWjb2XNPIMNT8grc3nuWq5JCZEwT7cnwiq27biXEaMxp%2Fg%2F4EQpN%2FLdvoFHr3ZTmF%2BJyBaW%2FBp7zlhvMPdvs2dl2AxNvPbXJ%2BCFO6Lu2HMjeqV%2BEFB%2FFz%2FIReTe3qP918Fj26b7meNzgGoDMUsSRX7C9QY4DJ1EaBuh4Bz942Mw4hf4qnjPIpUyGyyhS9I5ElRW%2Byfk2%2F8%2B9taTfim5QndkzX%2Bbqs4trvdndEea1pir1J%2BLGIwg5FxeHyzODe4joVavsAIBXG%2B%2BiNKkzf2psem8ksFXFULg%2FnB1o83XgTm5FlXoDk3hPTlDv8jYLQBcDKwjPew%2Boh4VHxOo0u2rK2%2BnMEQVcGWo1DdBqkQhTKUnvsneTEGblHYqgkMvR46%2BlCFrTyR3O8KHdL%2F0HW85xjTq5MInRj8QGOqUB5g6eAffmcZAX9FYeJfRhjmFXNAXe2TIhWfjWYpT14JZV3anG0tiSg22ZPD0h53Jrvu7PwkwyNF1RvVqEy0ubkKSSdsANaRaOWdkSCLIyEn51oYb2S0%2Bi2CvG48ztHuGRTbMkvTxnj4y96V1JaF7F9gndCfesw3%2Fj3AvEy9moQky4P3pSoO9JkyohQ3R3TPPnUhO7qDhdlqgc0J7qnaOCjTzgGSRP&X-Amz-Signature=aeb484e3647b08b69600d93d8e82588ae661ecbd898a7a8eaa1a03e4081040d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
