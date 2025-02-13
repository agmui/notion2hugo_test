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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB4RE4A2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZbhTtoV%2BTWZzxe%2FQTDHaM7HNLyGQOrK0PwWe9w1Hx2wIgZmeWzMXuCAlnSGLKD1fgPYQVxefQbgVvJ1KeWflfCawq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMcYNDG7D%2B1rUNL4KCrcAwTLvWeqa7nKH5dduZQ9LmlRbu%2FpWpjnkTbAACdj1gkNF4e4VXxQHdE%2BE0U2afrX5YG3%2BhpMvNF0wn%2FFP9YYbEvqaSmI%2BGOULUTiN7aSsTL9OIhzdqDQKNGchFRueXtrfBE8qAKqly1QLQ7DN4%2FCMwPOW8Gexf29lOiPcI5It1w9E8MdsDF9ttuu35gnBkGOR0fXpQpUO%2F3fzCxGau4pOVLnkR2RHMfnM%2BzQvTVTs3lrjpnXj8JaL3e3DSiDumFtjoTEjzRRGcG7m9iJ5M5FDDMQRlDnfvWHufO1uHfj6tYQrfZ%2BW6%2FhVfrBsX4VBn3b2Z34sTDCI9O0leoS7gkW0OxZ7Ppxi7KazG8HCTWamHtThYD01fPOIdPcn3fqFf8Kgl091mHR4C8WG3UJvFY7xBV%2FRBvRh2JBPaFoZ3G%2FSvu%2BKKN7jZQtpb4JTEVedZ9FVeAXI5MV5p7u9yzXXDW6wC27GYmYrZvga7Rw%2FFEDwOEfk7dFiS5C%2FP8wf83L1gVvw4gbDU%2BLoVKE9IlbTRrDX%2Bj%2BaZw%2BSRN%2FpsFxImJ4%2BqD0qwBb8z%2FGm8PStQ80xUUxETWP2TuFrrMelUz6wRCqImQIpSFjFIq0humpYanvVw1m0zS5DTPOdYmK0rmOMJWqtr0GOqUBBnibWAOVd5wqcysVHdjJWsRwSMhCBnsuj09bbdql6m92bhRBjavsHDDLGsxnarMsuNTwjGIX7wwOCuG160Z53XUYMRYkHt4kSxI3pUN9NLug0pQ0mrI0NwKBhIOCQYyqvWJBDyr9eTUEgW9sQmfE3nV7xk5ZobPNZkfcGfsuiEx1E3omCIcVMhbJ5PCu8yBy8ckKYbkcbv79pBnLfbTuT0adxcto&X-Amz-Signature=1c1f76463961563a4163ffefc671c1b401c8c78778959ff3df7214a9d62de004&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB4RE4A2%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T070802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZbhTtoV%2BTWZzxe%2FQTDHaM7HNLyGQOrK0PwWe9w1Hx2wIgZmeWzMXuCAlnSGLKD1fgPYQVxefQbgVvJ1KeWflfCawq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMcYNDG7D%2B1rUNL4KCrcAwTLvWeqa7nKH5dduZQ9LmlRbu%2FpWpjnkTbAACdj1gkNF4e4VXxQHdE%2BE0U2afrX5YG3%2BhpMvNF0wn%2FFP9YYbEvqaSmI%2BGOULUTiN7aSsTL9OIhzdqDQKNGchFRueXtrfBE8qAKqly1QLQ7DN4%2FCMwPOW8Gexf29lOiPcI5It1w9E8MdsDF9ttuu35gnBkGOR0fXpQpUO%2F3fzCxGau4pOVLnkR2RHMfnM%2BzQvTVTs3lrjpnXj8JaL3e3DSiDumFtjoTEjzRRGcG7m9iJ5M5FDDMQRlDnfvWHufO1uHfj6tYQrfZ%2BW6%2FhVfrBsX4VBn3b2Z34sTDCI9O0leoS7gkW0OxZ7Ppxi7KazG8HCTWamHtThYD01fPOIdPcn3fqFf8Kgl091mHR4C8WG3UJvFY7xBV%2FRBvRh2JBPaFoZ3G%2FSvu%2BKKN7jZQtpb4JTEVedZ9FVeAXI5MV5p7u9yzXXDW6wC27GYmYrZvga7Rw%2FFEDwOEfk7dFiS5C%2FP8wf83L1gVvw4gbDU%2BLoVKE9IlbTRrDX%2Bj%2BaZw%2BSRN%2FpsFxImJ4%2BqD0qwBb8z%2FGm8PStQ80xUUxETWP2TuFrrMelUz6wRCqImQIpSFjFIq0humpYanvVw1m0zS5DTPOdYmK0rmOMJWqtr0GOqUBBnibWAOVd5wqcysVHdjJWsRwSMhCBnsuj09bbdql6m92bhRBjavsHDDLGsxnarMsuNTwjGIX7wwOCuG160Z53XUYMRYkHt4kSxI3pUN9NLug0pQ0mrI0NwKBhIOCQYyqvWJBDyr9eTUEgW9sQmfE3nV7xk5ZobPNZkfcGfsuiEx1E3omCIcVMhbJ5PCu8yBy8ckKYbkcbv79pBnLfbTuT0adxcto&X-Amz-Signature=99ce812e220bf1346a50ad22390e7126338733df7320445dea194739ab02e1f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
