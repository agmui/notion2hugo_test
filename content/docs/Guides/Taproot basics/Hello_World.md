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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQHHNQ5N%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjxMwGdDoJdeNcZjljKOgjG6kjsq05Kd13PisuCsi9SwIhAJogc1MFrya6li7wmhc1qtJITqKz3EanSb3VFSkiuj4JKv8DCFQQABoMNjM3NDIzMTgzODA1IgyvTV%2B9j1IjD3npYzMq3ANpYFwjk7lgFhw0GuoX6As37OYojfL1JwKA2sTwVHNrxCPFMteq2HxrZpDgxQx1ydehCbgmmS4aU9NwBd99TFbFH7cPPSh38vzoD91sZzdLkzB82UN4VPORagJwFagWqysdWGZt2C6M0kARnuHZ1lPL1pYc%2BiWmp8n1%2BiwOqQRd2vZUjE%2FrgzXXo5qMjmeBxjhkWRep6l3I9F9145GNVGxL%2Fodhb2pHvocKESo9DXI5FFbto3t4jlpWJ88pJkFGlqhVFF6XyI%2BjxWX0F3PXwz5WYiQB9H%2FfA%2BMH2AoqDuvB7E9EvvustEdfuouUUI72wJFT2TuWot4gIfrXeao2PWuMKRDPLGkztgrKFzX280gTqYp2adt%2BV%2FFelCD5G01WvPkexXFTUeccm3jr3g5sAe8HKTVQykYUa1NWvIigPfVhoBymcdMjrcMiQFbOgoBp%2BttlI5W3mrEJmYoywkKh09PVTJpxOVzxiEEWkjH02QuT7Jhm2y1wra9TKluHIpb%2Foo0XM7ruDm%2BvgHCAK7NlQt8YUfIoHX6R1bqWrOAvk%2B3O6uSBsiVBS9LgNHbAriNc7Rn%2BCBt%2BVhs5vOv4puHRfPPZS%2FZa6eGKY9fbqhFjB9rTA0LjH8wxlOKjkjRFzTC6iezOBjqkAXw%2Bu36hJG8%2FAl9JIAu5BuJtI50pRy7GM29qCMDQEJIJGrEqwbN9UZRA8pG35UIQsdqsAkzdw0ljspc%2BMmcHO9dpisP%2BykSgjZ0O3lXDh6EZJeBEdjWxC3%2BwAsyOp77XM4fzbeskQxRip6SDUOZcoKX5obwZ1cckNMSADJpRvF5kxDINkIWb5QAkRVIuatHXi%2FybYoV%2BLIh5fta8rtVpVWHyOn9p&X-Amz-Signature=e06d7df7bac89004a07a5d85c303090c2d28b5b0cd3b8ead5bf41d1b0524b304&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQHHNQ5N%2F20260412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260412T023846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjxMwGdDoJdeNcZjljKOgjG6kjsq05Kd13PisuCsi9SwIhAJogc1MFrya6li7wmhc1qtJITqKz3EanSb3VFSkiuj4JKv8DCFQQABoMNjM3NDIzMTgzODA1IgyvTV%2B9j1IjD3npYzMq3ANpYFwjk7lgFhw0GuoX6As37OYojfL1JwKA2sTwVHNrxCPFMteq2HxrZpDgxQx1ydehCbgmmS4aU9NwBd99TFbFH7cPPSh38vzoD91sZzdLkzB82UN4VPORagJwFagWqysdWGZt2C6M0kARnuHZ1lPL1pYc%2BiWmp8n1%2BiwOqQRd2vZUjE%2FrgzXXo5qMjmeBxjhkWRep6l3I9F9145GNVGxL%2Fodhb2pHvocKESo9DXI5FFbto3t4jlpWJ88pJkFGlqhVFF6XyI%2BjxWX0F3PXwz5WYiQB9H%2FfA%2BMH2AoqDuvB7E9EvvustEdfuouUUI72wJFT2TuWot4gIfrXeao2PWuMKRDPLGkztgrKFzX280gTqYp2adt%2BV%2FFelCD5G01WvPkexXFTUeccm3jr3g5sAe8HKTVQykYUa1NWvIigPfVhoBymcdMjrcMiQFbOgoBp%2BttlI5W3mrEJmYoywkKh09PVTJpxOVzxiEEWkjH02QuT7Jhm2y1wra9TKluHIpb%2Foo0XM7ruDm%2BvgHCAK7NlQt8YUfIoHX6R1bqWrOAvk%2B3O6uSBsiVBS9LgNHbAriNc7Rn%2BCBt%2BVhs5vOv4puHRfPPZS%2FZa6eGKY9fbqhFjB9rTA0LjH8wxlOKjkjRFzTC6iezOBjqkAXw%2Bu36hJG8%2FAl9JIAu5BuJtI50pRy7GM29qCMDQEJIJGrEqwbN9UZRA8pG35UIQsdqsAkzdw0ljspc%2BMmcHO9dpisP%2BykSgjZ0O3lXDh6EZJeBEdjWxC3%2BwAsyOp77XM4fzbeskQxRip6SDUOZcoKX5obwZ1cckNMSADJpRvF5kxDINkIWb5QAkRVIuatHXi%2FybYoV%2BLIh5fta8rtVpVWHyOn9p&X-Amz-Signature=9e8ace7a709b6320a2221a148edc72cd95e238f3f510e06ea9ad9e0690025b90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
