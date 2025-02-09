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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYP5FA3L%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc2T53JtYgGLHfh7rpyN6u%2FXC9t%2BJv6NGHW%2BKZWbSLQAIgWfOfQQVK%2F%2BvRkVKcZxlHXIzdTEGtCOmrs4BWQgNh8JEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoTU%2FSDfnYc5FK1vCrcA9m%2Bj%2BLqX1TK%2BDAnDOQrjyopx4jQlZXhxth5r5b2BzsQHmeO27%2FpE1mhCZ3JPzyPZjucd90r2Nf%2BoYPW5%2F0LOTXYRUvvC1YiTU3SgiwWH8pUxz2S26lvHSrlM8RVJwUQakvagT%2FLt4sKUQxcdp%2BIR1n3K3b0786RaTDNbfJKwVwdNJvhobo%2BfSxMlKwwP2ItfZzfvapS0MnxoUOEDzacRHT8pWN2fd1hNp6%2BjGMywUc3OsRv00arV%2FQUQyuVvhX9RIuMaGDD0I0yZFPMqVAEkvbOn2UD8ZmXpfRrm6RELV%2FAN6k%2BuMg33xMJ423M4wrbP3kq%2F1cgJFNvr8j8%2BcfBGkGUIHB1AKilp6cHKX7bldTgdgMP%2F6ceQvL6UOqFCCmJ2%2BgpdOjOSwkGtXxCYzW5OgWdLCxzexl0ovv3WrynaMPqNO8xoTdez0pRsMtxFchIku9dhK%2B4sZ3nvGkFwMsTR%2BMFhACNvu%2B3Iz0bckCfVWYj5lbT%2BYqqK235DwyqmkjzCvOoHRUj5XOLl4GUNoXcXm80OmovAjdWtpwOMGk3c4ozV9W5dA42ugfTQZ%2BK6jbu0jEcriIG%2F6Kb1W4XUu7ID2m0BHoL2M0FyTGX%2BW0YU5VY0cW08mvu0C609APmMPjjob0GOqUBYyXmhLjxuvFsvTIk5fqWa5hDEVpvQ7%2BvhvJsKFmWBMfGWGkPK57Caacn7IpD%2F725i9SVkiQmbtVCGX3h0fhIeo%2B7sJwEl%2BADsnxDnKuz4MiRGc9LXCppKa%2BahqdEi8wAynZzLyuNYElIPIIqG8Cq68VakMaXMAAkU23dBBJfKuSPWjUNfFmqsCsu7VQWIeJtWu1Hmm7e6pfB%2Fs4ToysxCn6%2Fi5W5&X-Amz-Signature=20775640e5b539d38feec153e08fc2561aac7781f6fc913974ce9f956f14b6d8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYP5FA3L%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T121143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCc2T53JtYgGLHfh7rpyN6u%2FXC9t%2BJv6NGHW%2BKZWbSLQAIgWfOfQQVK%2F%2BvRkVKcZxlHXIzdTEGtCOmrs4BWQgNh8JEqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCoTU%2FSDfnYc5FK1vCrcA9m%2Bj%2BLqX1TK%2BDAnDOQrjyopx4jQlZXhxth5r5b2BzsQHmeO27%2FpE1mhCZ3JPzyPZjucd90r2Nf%2BoYPW5%2F0LOTXYRUvvC1YiTU3SgiwWH8pUxz2S26lvHSrlM8RVJwUQakvagT%2FLt4sKUQxcdp%2BIR1n3K3b0786RaTDNbfJKwVwdNJvhobo%2BfSxMlKwwP2ItfZzfvapS0MnxoUOEDzacRHT8pWN2fd1hNp6%2BjGMywUc3OsRv00arV%2FQUQyuVvhX9RIuMaGDD0I0yZFPMqVAEkvbOn2UD8ZmXpfRrm6RELV%2FAN6k%2BuMg33xMJ423M4wrbP3kq%2F1cgJFNvr8j8%2BcfBGkGUIHB1AKilp6cHKX7bldTgdgMP%2F6ceQvL6UOqFCCmJ2%2BgpdOjOSwkGtXxCYzW5OgWdLCxzexl0ovv3WrynaMPqNO8xoTdez0pRsMtxFchIku9dhK%2B4sZ3nvGkFwMsTR%2BMFhACNvu%2B3Iz0bckCfVWYj5lbT%2BYqqK235DwyqmkjzCvOoHRUj5XOLl4GUNoXcXm80OmovAjdWtpwOMGk3c4ozV9W5dA42ugfTQZ%2BK6jbu0jEcriIG%2F6Kb1W4XUu7ID2m0BHoL2M0FyTGX%2BW0YU5VY0cW08mvu0C609APmMPjjob0GOqUBYyXmhLjxuvFsvTIk5fqWa5hDEVpvQ7%2BvhvJsKFmWBMfGWGkPK57Caacn7IpD%2F725i9SVkiQmbtVCGX3h0fhIeo%2B7sJwEl%2BADsnxDnKuz4MiRGc9LXCppKa%2BahqdEi8wAynZzLyuNYElIPIIqG8Cq68VakMaXMAAkU23dBBJfKuSPWjUNfFmqsCsu7VQWIeJtWu1Hmm7e6pfB%2Fs4ToysxCn6%2Fi5W5&X-Amz-Signature=74dcf68a163b451bc3a19a9f232c53f74580095e16c6cc8949942a2463165b87&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
