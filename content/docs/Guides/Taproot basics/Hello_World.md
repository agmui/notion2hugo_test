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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDBGU7C%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIB66VYUikMhDKOdskLzWHV3Pw4f73u07iotIsLoFitxHAiEA39d4VZWUKuajCSRqFr0JxK4ViLWK5THinOkvZNsupP8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBVwnD4mroYnp4Yv4ircA2bloZ5trT6xFbjOa8%2BBRbws59maJG9F6PLgaXuTHPYJyVC8oaxSY7a2wD%2Fb9mK1dFAeJYu6iLZIloWEmewd4BnzgCmXgy%2Bn6t%2F4liwce%2BeuG9v2QellIlgOjsAGCQ0bQ0uWy4fViZEvT9d%2FLGbW2P56XF8BykyncQH6MJHwUINGFlH3Caua%2F2I2Kw%2BbXN2Ze1TlGI6HSuwADX6qNwuGw3cAuGkwiJbJzp6Ml2JrX6eRBKOftQCI%2B4er6ZMafHBjwIlHCoWJTFFrIYaQwx8nUIMcYe3M5Jv32%2Fi8vR74uDOM2cocBXBcb3%2BMrcNom2Tpu%2Fu5EUYfymGuadS4916WimYKvFVsJjjNY6Vk3qV5jE6YPHfbNwoIK%2Fi2Q0d7x9LYN38eKyT%2FPYKDddUhLN0AuM1GXhtkGoo%2F9h1RH5Ee4DXvb91hrENCW1lSr47hM1NMomEl8OQjI1Ldn4BM2nxqp7VbVzqt31qePyNFS2BJv%2FkA7hJpvq7HFmwfZbExblfO9ulbYWUz98VHrV3FLB0u9dhLL870pOgv3zRT4y%2FOQvF0IpDKGXd5Z8gWwrXYSg7hidQzR0Mh0muHxZF9oyTCmKiEDUwV77ZnAUfjUkYMJ7RJttuPzunHduXSWiiKMI7CtcIGOqUBQ0s9vDIhL4nP3My8JOTrgifwlMmhN6OFrDoUoYLl1iRT4b6u2LpUpRoYjgSjjX8FxgM%2FdB8Z9U0GmkvTWIsZAueP3%2FUs0TGn9QaZ4lZcqvZQXVQG2lzuar%2FeGJP8iV4XD14yIPsKj246d9bezaU2zVdzl%2BEhckn6VOicuGXX0QAoD7RIH3jpcYuZ9pNMHXrv8yhfqNQV%2BfT44lBg95y7mX%2B8BCch&X-Amz-Signature=1f73ce166616dea7107dc2b1cfdac6f46d699dbf2b7762973e05ff8857486453&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XRDBGU7C%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T140659Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCIB66VYUikMhDKOdskLzWHV3Pw4f73u07iotIsLoFitxHAiEA39d4VZWUKuajCSRqFr0JxK4ViLWK5THinOkvZNsupP8q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDBVwnD4mroYnp4Yv4ircA2bloZ5trT6xFbjOa8%2BBRbws59maJG9F6PLgaXuTHPYJyVC8oaxSY7a2wD%2Fb9mK1dFAeJYu6iLZIloWEmewd4BnzgCmXgy%2Bn6t%2F4liwce%2BeuG9v2QellIlgOjsAGCQ0bQ0uWy4fViZEvT9d%2FLGbW2P56XF8BykyncQH6MJHwUINGFlH3Caua%2F2I2Kw%2BbXN2Ze1TlGI6HSuwADX6qNwuGw3cAuGkwiJbJzp6Ml2JrX6eRBKOftQCI%2B4er6ZMafHBjwIlHCoWJTFFrIYaQwx8nUIMcYe3M5Jv32%2Fi8vR74uDOM2cocBXBcb3%2BMrcNom2Tpu%2Fu5EUYfymGuadS4916WimYKvFVsJjjNY6Vk3qV5jE6YPHfbNwoIK%2Fi2Q0d7x9LYN38eKyT%2FPYKDddUhLN0AuM1GXhtkGoo%2F9h1RH5Ee4DXvb91hrENCW1lSr47hM1NMomEl8OQjI1Ldn4BM2nxqp7VbVzqt31qePyNFS2BJv%2FkA7hJpvq7HFmwfZbExblfO9ulbYWUz98VHrV3FLB0u9dhLL870pOgv3zRT4y%2FOQvF0IpDKGXd5Z8gWwrXYSg7hidQzR0Mh0muHxZF9oyTCmKiEDUwV77ZnAUfjUkYMJ7RJttuPzunHduXSWiiKMI7CtcIGOqUBQ0s9vDIhL4nP3My8JOTrgifwlMmhN6OFrDoUoYLl1iRT4b6u2LpUpRoYjgSjjX8FxgM%2FdB8Z9U0GmkvTWIsZAueP3%2FUs0TGn9QaZ4lZcqvZQXVQG2lzuar%2FeGJP8iV4XD14yIPsKj246d9bezaU2zVdzl%2BEhckn6VOicuGXX0QAoD7RIH3jpcYuZ9pNMHXrv8yhfqNQV%2BfT44lBg95y7mX%2B8BCch&X-Amz-Signature=5af81ef2db90108761bb7e186d00547f3b264223310682bf737eb34d5218f880&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
