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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UCXUZF5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCNVWWMJS9xpQ%2FIAjlU1NnpBojxHycgEyE1263M2wmymAIhAKjrGMVzW4RGPAwBb9zrTmatHds3y7MUyIn2PM955PG0KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8sEMImPUVd9%2FyZmsq3AMgTvXr%2F7YwDu%2BwQUZNr8lZsWHV1%2FUr3C9sxummemtdGRwNMNCSlhRHVBhTozk4rLhrsDOoPVarz6oomOtbs08jvg2JFTV%2BvNPsTsMWH6udesSDnYt%2FNQQfHRIsTZ2aCwTtvaydrdIhSAu%2FNYw%2FENCkv09eEjH8NmCS3%2F%2BD5jIkUYQwumzxDW0Rd87si95zgyKtLKd7ReZWdOKMwA35v9%2BxpbsGzm4wVJT6muCOx2QwL9MHskxBcD11kgRVy70uPAVw2vrD2d79nt0w7fcB5C1W9aK7aS%2F%2FXdCJwXGRRrn7YmCcBasWc7xBVbwO5VfrbaDYQHA%2BMM%2B3UR6RBmfXTqqCz45pgMbRJo0hRcah6pL02A7W8lmoogjrKrb7ZGj7riOuTivXU%2BSaF%2B4d5ZsfeuDe3%2F0odEyVF6rRTLI35M98lGFPX6kwBP9pqORn1eeWw3GIBRuGeDbdKVW84C36pZghoJv%2BVBewZCFVA6BQvl%2BqkM6a2fAjHA1joqsbpXX%2FZu8GflhJYR7YUGgbGGaBoB9%2B1vMhTJcqf1DOMjrxZKwJOFFj08WJ7jLGoqpUO8AKWPMV8f%2Bc%2FFoETteszithA6JtwXUAXAvp9hiCTslpr3Wts6mQCGVhkSckmcR6DzCGpYHBBjqkAacz4SyU6K7MaPlO0a6aEc%2BSu65e5Yjf3HHNwsolfsopvCXsICBw4mceqXg0eXTOTquJ5TxkoncBcfsvhXVUuak37LTRXrzVtQKMcrIw3FnwS6blKny%2BqtvIauJHL5CZrXyQet6cRXX4RO3nlDwAfdaDjwOT1ugHh5jcJyfjTkCu7upR6BXW0H4Uygd8XbqW9SSviQYPHJa3UJqzpNzC66GKyTsm&X-Amz-Signature=45a3ee91b2316f9b57706a31b98a167ab0a4f9da5ed4b0f6fdf97e7ddc4460f1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UCXUZF5%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T081048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJIMEYCIQCNVWWMJS9xpQ%2FIAjlU1NnpBojxHycgEyE1263M2wmymAIhAKjrGMVzW4RGPAwBb9zrTmatHds3y7MUyIn2PM955PG0KogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8sEMImPUVd9%2FyZmsq3AMgTvXr%2F7YwDu%2BwQUZNr8lZsWHV1%2FUr3C9sxummemtdGRwNMNCSlhRHVBhTozk4rLhrsDOoPVarz6oomOtbs08jvg2JFTV%2BvNPsTsMWH6udesSDnYt%2FNQQfHRIsTZ2aCwTtvaydrdIhSAu%2FNYw%2FENCkv09eEjH8NmCS3%2F%2BD5jIkUYQwumzxDW0Rd87si95zgyKtLKd7ReZWdOKMwA35v9%2BxpbsGzm4wVJT6muCOx2QwL9MHskxBcD11kgRVy70uPAVw2vrD2d79nt0w7fcB5C1W9aK7aS%2F%2FXdCJwXGRRrn7YmCcBasWc7xBVbwO5VfrbaDYQHA%2BMM%2B3UR6RBmfXTqqCz45pgMbRJo0hRcah6pL02A7W8lmoogjrKrb7ZGj7riOuTivXU%2BSaF%2B4d5ZsfeuDe3%2F0odEyVF6rRTLI35M98lGFPX6kwBP9pqORn1eeWw3GIBRuGeDbdKVW84C36pZghoJv%2BVBewZCFVA6BQvl%2BqkM6a2fAjHA1joqsbpXX%2FZu8GflhJYR7YUGgbGGaBoB9%2B1vMhTJcqf1DOMjrxZKwJOFFj08WJ7jLGoqpUO8AKWPMV8f%2Bc%2FFoETteszithA6JtwXUAXAvp9hiCTslpr3Wts6mQCGVhkSckmcR6DzCGpYHBBjqkAacz4SyU6K7MaPlO0a6aEc%2BSu65e5Yjf3HHNwsolfsopvCXsICBw4mceqXg0eXTOTquJ5TxkoncBcfsvhXVUuak37LTRXrzVtQKMcrIw3FnwS6blKny%2BqtvIauJHL5CZrXyQet6cRXX4RO3nlDwAfdaDjwOT1ugHh5jcJyfjTkCu7upR6BXW0H4Uygd8XbqW9SSviQYPHJa3UJqzpNzC66GKyTsm&X-Amz-Signature=4728b083f4da427f429ebd4cd0a30289555a41f0e9f046ccd5f76c8809b664c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
