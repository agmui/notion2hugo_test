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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWGOSKMS%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD83ttsFpL4pfzbh%2BxrwAisuSUWGkKYMtHh0yi4TgNlmQIhAKZ3BVkZKCAGQIu3RuP822TzAUPoyXoIG%2BrrFQ%2B0Sy%2BqKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoK1Q1mRSloxU0v2oq3ANVwnsJDoJXCippZ%2B4KFi9vxloY%2FIE2Q6QGsmHkdnB17%2FN6tpFhLE2QynTCSSXKlqUAr4XE2PuGqulMsuQBw%2FOaLOtDTHKUA8d%2FoEteC8Qt7I7jBRtDjwDgzy70Os9AoN4K2EqA9qNU0KfTfPGCQLqSe%2FZh8Lf%2Fz5nYlxa%2B78VwpqJlgJ0gtdEAPzFCwIjVunW8exe%2BROa82TMlsGJPLC26WgP6IUV4B4zChZSI6ZUiMPUsjLHGh9jewYhlPaVw7LcM%2FIZ9tyTrD72BO5vVtvUdlJGOJva8ltEuoakurJQ7ADO7kcfuGtpoyINCuBcC1JcsODDtHxgxZXhYAxvc4FCg6V6K8PRlt07kKneBS8h2Mofs9VmwThPGHUk6aAfK6jmecyQRw2lgJWsCD2yh4k69Bv8ZDZO3uqTRdOfbjQiaw4FOG1wqKUPWYQOkn6RgLEMlDH0jjhJQU1B%2BXU5leHdW%2BlisujYodw9PammLO58BjKNNubaYV2jox23eMeh4ReQGb%2B4JJaoPbBGdOvQCKJzrBogYECMG0eCAYYwn7%2FBXp3a40Ym8DJ2fgBq2mBo4LiDyO7ILSnjJDKEJgWfVQigDqs1s80pI3n2vmg3pSdDo3wtYYrWiysOyySNHJTDY7q%2B9BjqkAXqSvSr4lJy%2Ft7xfdgvRBXD3LQxm18kknAlWdcVs6JOzoBUW8W2pPXgudDwpkFivCdwHrvel9fkTzzbntsbE7qXPlYNnF7L8kuIeRWVEp5uSdjD%2BVo%2BR2d%2BEoUvkM%2ByuF8GXPuoSzrsOSTgU9d7KCMksj9Y94pl6pGhtRFxhV8drY%2BoxDGKDM7IjiRQhHGQ6NSwJQ0LZhv6oYCH76x2EAQyxSgdk&X-Amz-Signature=21c747773ae9cc8a4152511b7d9bba070a418e9a11c6625ec9e7f0125732dbd6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWGOSKMS%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T040951Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD83ttsFpL4pfzbh%2BxrwAisuSUWGkKYMtHh0yi4TgNlmQIhAKZ3BVkZKCAGQIu3RuP822TzAUPoyXoIG%2BrrFQ%2B0Sy%2BqKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwoK1Q1mRSloxU0v2oq3ANVwnsJDoJXCippZ%2B4KFi9vxloY%2FIE2Q6QGsmHkdnB17%2FN6tpFhLE2QynTCSSXKlqUAr4XE2PuGqulMsuQBw%2FOaLOtDTHKUA8d%2FoEteC8Qt7I7jBRtDjwDgzy70Os9AoN4K2EqA9qNU0KfTfPGCQLqSe%2FZh8Lf%2Fz5nYlxa%2B78VwpqJlgJ0gtdEAPzFCwIjVunW8exe%2BROa82TMlsGJPLC26WgP6IUV4B4zChZSI6ZUiMPUsjLHGh9jewYhlPaVw7LcM%2FIZ9tyTrD72BO5vVtvUdlJGOJva8ltEuoakurJQ7ADO7kcfuGtpoyINCuBcC1JcsODDtHxgxZXhYAxvc4FCg6V6K8PRlt07kKneBS8h2Mofs9VmwThPGHUk6aAfK6jmecyQRw2lgJWsCD2yh4k69Bv8ZDZO3uqTRdOfbjQiaw4FOG1wqKUPWYQOkn6RgLEMlDH0jjhJQU1B%2BXU5leHdW%2BlisujYodw9PammLO58BjKNNubaYV2jox23eMeh4ReQGb%2B4JJaoPbBGdOvQCKJzrBogYECMG0eCAYYwn7%2FBXp3a40Ym8DJ2fgBq2mBo4LiDyO7ILSnjJDKEJgWfVQigDqs1s80pI3n2vmg3pSdDo3wtYYrWiysOyySNHJTDY7q%2B9BjqkAXqSvSr4lJy%2Ft7xfdgvRBXD3LQxm18kknAlWdcVs6JOzoBUW8W2pPXgudDwpkFivCdwHrvel9fkTzzbntsbE7qXPlYNnF7L8kuIeRWVEp5uSdjD%2BVo%2BR2d%2BEoUvkM%2ByuF8GXPuoSzrsOSTgU9d7KCMksj9Y94pl6pGhtRFxhV8drY%2BoxDGKDM7IjiRQhHGQ6NSwJQ0LZhv6oYCH76x2EAQyxSgdk&X-Amz-Signature=284748d0ff9136b1830cdf1d5094ec1e4e058c78493c52e9ab3246d14ff3a4b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
