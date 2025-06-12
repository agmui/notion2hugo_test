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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVNMUASF%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC6VlUucswcpxUGyo2%2BnG356yNrglIReE4dX0nY9PTjBQIhAJZg8naj02pXmzxOkLALMZdKGmyCfIRjv2KqwZ6KZpK6KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwSb%2FbstYrnDQA8dsq3AP8wWje6fzsga%2FJy5k4v%2FGNAErxgr81qrvdLRAdbMhw3pV06w35tMlmqOExE3u9c4ptwQgsa7OW%2FmYQrGZ0ncuXhVfh79wRGBld6cOTuhs8cxhvgQ3hpHReQ%2FS8oJ8kwm5PRPhcKXDzWHuuiYjbcR5FM3Nr%2BQdNZFHS%2BpoPBhqtZ%2BmoJaYrT7pdYV8zjEACqQ%2BOqoB3dz4ofwiBLS3GsTfE78DU6XyIFJcD5bt%2BUWE2gqUxV%2B6j0TZfxIhVu6y9iAJIOPn4aChfq5qDyYOvnZCRaU5nj5BxgbyXBf%2FrZoKjLGOR2a9vQbwKaNHiqWILsoWk0v4AEeL4ms0hO2Hmb7rF%2B29qjWWLk3P0oOp6XR6T1M%2BvYs94%2B%2F5fChzyqx12SRpAWG89V7JG5Bm5CG2K6kSGxjongA6u%2BdopEZ0kppSPh%2BnQ0aP1tkWykcciLWOfElWLn4hrOXdbigZnjf6%2BqP1LLDhhlN%2Bs7lfHeoIPJ2BbAXcZWRKrfTW1Qq6b9vWZZWBpah%2FHY5LgoGH14ZWg9uMZyZ9hfJEzxiStcynRCeWBz%2BvMJ9dzF7pQtRPOw4JtG8Gigy4KImm6sJIx%2FPKzK2jexb2F29DXua3qzym8W%2BMPoATNUNIaZrLS4tssfTCPwqnCBjqkAUowXzxbvLFrql5mOHN%2BrRd1BgFjI8VRqCXWVArhmfSC1n7RBO9XXc4U1I9a5z2jXkQFNE%2FbkJO4ogHp2gJl%2FKlxK4c7EovuqFAwouGOkASyLqA7Xi53rg07os2%2BK9HFbUhju7k4iIeGemUgRj6yl%2FEZKxXLuCtdk5Dg86oks5LCwW45AkjLI3aLWz0U%2FoLmJ3%2BcCNqaoC2aJr11zgiZEfvoQy1g&X-Amz-Signature=3ab3184fa3ca37080acb699b484028458db520f93f3331f387a4917c23f4a284&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVNMUASF%2F20250612%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250612T061329Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJIMEYCIQC6VlUucswcpxUGyo2%2BnG356yNrglIReE4dX0nY9PTjBQIhAJZg8naj02pXmzxOkLALMZdKGmyCfIRjv2KqwZ6KZpK6KogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwSb%2FbstYrnDQA8dsq3AP8wWje6fzsga%2FJy5k4v%2FGNAErxgr81qrvdLRAdbMhw3pV06w35tMlmqOExE3u9c4ptwQgsa7OW%2FmYQrGZ0ncuXhVfh79wRGBld6cOTuhs8cxhvgQ3hpHReQ%2FS8oJ8kwm5PRPhcKXDzWHuuiYjbcR5FM3Nr%2BQdNZFHS%2BpoPBhqtZ%2BmoJaYrT7pdYV8zjEACqQ%2BOqoB3dz4ofwiBLS3GsTfE78DU6XyIFJcD5bt%2BUWE2gqUxV%2B6j0TZfxIhVu6y9iAJIOPn4aChfq5qDyYOvnZCRaU5nj5BxgbyXBf%2FrZoKjLGOR2a9vQbwKaNHiqWILsoWk0v4AEeL4ms0hO2Hmb7rF%2B29qjWWLk3P0oOp6XR6T1M%2BvYs94%2B%2F5fChzyqx12SRpAWG89V7JG5Bm5CG2K6kSGxjongA6u%2BdopEZ0kppSPh%2BnQ0aP1tkWykcciLWOfElWLn4hrOXdbigZnjf6%2BqP1LLDhhlN%2Bs7lfHeoIPJ2BbAXcZWRKrfTW1Qq6b9vWZZWBpah%2FHY5LgoGH14ZWg9uMZyZ9hfJEzxiStcynRCeWBz%2BvMJ9dzF7pQtRPOw4JtG8Gigy4KImm6sJIx%2FPKzK2jexb2F29DXua3qzym8W%2BMPoATNUNIaZrLS4tssfTCPwqnCBjqkAUowXzxbvLFrql5mOHN%2BrRd1BgFjI8VRqCXWVArhmfSC1n7RBO9XXc4U1I9a5z2jXkQFNE%2FbkJO4ogHp2gJl%2FKlxK4c7EovuqFAwouGOkASyLqA7Xi53rg07os2%2BK9HFbUhju7k4iIeGemUgRj6yl%2FEZKxXLuCtdk5Dg86oks5LCwW45AkjLI3aLWz0U%2FoLmJ3%2BcCNqaoC2aJr11zgiZEfvoQy1g&X-Amz-Signature=4ed75a1b7360b3b0ffc90886066930eddd8869d31ddd280d1758a82baec027fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
