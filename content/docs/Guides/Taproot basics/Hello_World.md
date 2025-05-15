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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z6Y4X5M%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHnmDQ5BIUT3uP2KVVD%2FTunfgKn4LjWvdq5RDt0dZJABAiEAlKXhJXjvX3dhBX27rk962BaJtnKn5vFeN4ZmVEeVtK4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFABukWchNtiLULLjyrcA19XzwaUpugTOZY5VQgh0CiRsmKj%2ByrlsXvb3xZqVMIger8MFe%2FS%2BBkALUcOdVs53Q5rPuVLgAWDQWB778Y1fq6u2aOM22G1xYVfvIh66LXP62O0%2B3XGApIWasXllgBpcJKLDUIy%2Bg3WJnDpKB6w9DQSYhZ2GpHDUQK7ZE8Npzxk71tu8gUbk3A%2Fxy9mf6Ndu49rV6q5gkrPCeRizNkCHykT9qUQzgESP5mFG9HMfkqlIQO1T1WqXMHGwFExPd6XubE%2BQEbr6s9%2FUx6RSQ%2BeF6iiaolaLm%2BMateG%2BrbnNdTNXR4tnDwGSyu9BD4s5qrPsJWREdSjMMQZiqqiVus461soOHMLym6SANMQvD7Zapx5LTdzmYwr2FfzxohytRMHNpVYJLR3gXcWZ48CX%2FvDjHD6cMT9rZ29WZ4OLaAmoCP57QJI0TbNOJlJYu5bI8wq7KVdxwKF6qeNFy%2BsmatW3bs%2FfTqOduqCaR5hiuuJgFDaMTCaj9vdVcJHgYx%2FWy9IWgVvYJ9eNtP0eyrkQsb32YaCtn2QDpUUjKkN9Zo7CpyDatYFk6Kfe6Wqpd7chWezj%2Bdub%2FZNu5k7Ifqdu9cCCo9qxdifc0SRqKED4uPKYtz75Z%2FIOKDg%2BWA56QllMIysmMEGOqUB4SHiy90YqZEepKWp%2BtLLxvwcfvbOCEUaS3D3l39oueIuZ64lC8Kr4BCg2X03juX0Qx0g3rkwPqx%2BXJjnuBXbdPUqpwWQQ95HW8121Dq00%2BerMMyY5nBu%2BETvLOV3L%2FZQqLlwu3p%2FJu5Iu6yvl5pu5MXiQCNZ7W%2BqBqdClHK%2FoOnIUMxFdXtWCfOoZmjmw0h5dfk5FUKoWDa8hfcq3fwBtwbOyRCs&X-Amz-Signature=f99b4225b29ad470e2f927d5657e95306cf45fefbc44ab161cbe232c2c519f1e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664Z6Y4X5M%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCIHnmDQ5BIUT3uP2KVVD%2FTunfgKn4LjWvdq5RDt0dZJABAiEAlKXhJXjvX3dhBX27rk962BaJtnKn5vFeN4ZmVEeVtK4q%2FwMIMhAAGgw2Mzc0MjMxODM4MDUiDFABukWchNtiLULLjyrcA19XzwaUpugTOZY5VQgh0CiRsmKj%2ByrlsXvb3xZqVMIger8MFe%2FS%2BBkALUcOdVs53Q5rPuVLgAWDQWB778Y1fq6u2aOM22G1xYVfvIh66LXP62O0%2B3XGApIWasXllgBpcJKLDUIy%2Bg3WJnDpKB6w9DQSYhZ2GpHDUQK7ZE8Npzxk71tu8gUbk3A%2Fxy9mf6Ndu49rV6q5gkrPCeRizNkCHykT9qUQzgESP5mFG9HMfkqlIQO1T1WqXMHGwFExPd6XubE%2BQEbr6s9%2FUx6RSQ%2BeF6iiaolaLm%2BMateG%2BrbnNdTNXR4tnDwGSyu9BD4s5qrPsJWREdSjMMQZiqqiVus461soOHMLym6SANMQvD7Zapx5LTdzmYwr2FfzxohytRMHNpVYJLR3gXcWZ48CX%2FvDjHD6cMT9rZ29WZ4OLaAmoCP57QJI0TbNOJlJYu5bI8wq7KVdxwKF6qeNFy%2BsmatW3bs%2FfTqOduqCaR5hiuuJgFDaMTCaj9vdVcJHgYx%2FWy9IWgVvYJ9eNtP0eyrkQsb32YaCtn2QDpUUjKkN9Zo7CpyDatYFk6Kfe6Wqpd7chWezj%2Bdub%2FZNu5k7Ifqdu9cCCo9qxdifc0SRqKED4uPKYtz75Z%2FIOKDg%2BWA56QllMIysmMEGOqUB4SHiy90YqZEepKWp%2BtLLxvwcfvbOCEUaS3D3l39oueIuZ64lC8Kr4BCg2X03juX0Qx0g3rkwPqx%2BXJjnuBXbdPUqpwWQQ95HW8121Dq00%2BerMMyY5nBu%2BETvLOV3L%2FZQqLlwu3p%2FJu5Iu6yvl5pu5MXiQCNZ7W%2BqBqdClHK%2FoOnIUMxFdXtWCfOoZmjmw0h5dfk5FUKoWDa8hfcq3fwBtwbOyRCs&X-Amz-Signature=4f29865ef7f1b7f287aeb1379e0d96476f25f2cc5e9482219396dabb647c7cd7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
