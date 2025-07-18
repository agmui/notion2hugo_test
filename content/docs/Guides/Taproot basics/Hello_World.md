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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YND6IWVV%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCQIf8wnAUoQJyiBVaXquvJ2poT1lsvDHsc1%2FV%2BZZ6WTQIhAMfRSkbVuIqtHj58ppZMuZwMqn0kSrwQRbv9sYaufQJ1KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwe9Z8JSrRhPrVrkpUq3AN3mevVTrBJOIwZeq2x4TbjYRBFNJh%2FfYjC0cX3q0S8GMMGfAbc9Z%2Bk5voyrUHbrWVknNDPwL2e526dCFQDXrAiMkDd215dv2B1VvzKBG%2FZsmB2HyaLU3PWwAAWLFcsEuhTHXC5V%2Fw1P69UhyCRfgvMYk8v4BdRX6QHfgUyC8BAQbBahfsVqLfOw83dBbkzF0a%2FoUYC1S7duMcqDWHr6d6By7wYnq8gRhx6yGU8ojJCmIQoVWGJqxh6I0rWxXF0vTjpn9xLWNcvVQzsuD%2FrWQt6zH81EeMZqqLpsfwnM2dFs8o4kJlpvun9IwzyVyCYHs90lIZaPQPNClEED7Ly9eI9EM0%2FSdV%2Fm6SUKCmE5Dnnuwxen9sS0T2s%2BSZCAA65uprppw6Njm35Lip3YQddxgN1rsBdFPcf2uYWLfCy0ZOqP3ODY42nrTDGHCyLQFjdkfP0LandumNNVMSRQo3BbLZU7kwIf0bGQ5UHr2qo%2FzGc4HHiOL%2F6tOiGtUI7hGZnQgR9v4hKcZBY3x8nNyUdgkshQ7ZlHZLhp%2F%2Fd%2FnpC9Q4X%2BlsbGClyGD2ME3VS78PHg6R8AbAXJ3pFlcldg3NOU5MmEHseDyDtEaNIjyOZj1Wfob2D3elGxo4IrFjbfDCb0OjDBjqkAZtc8S%2Bs3s8cRlYDn8dWxOYRDq1LV2se9YQqEqJhJdcYzh23R6%2Frzjss2T7gykKJ3pZ4dwyUbj1SB6WWzaXBG6kY2J%2F%2BtYNWfwzp9BZ1uZbQYozB%2B0Y44xDwP%2Bmp%2BCtfM9PEcIc0d1M1aFEr7xz3qvHmR9JrANX5MtP0b1LlD6xILlj1yMma8dL2FNgRZqleqvwIMuza%2BkibuOP23IFbPtKKakM6&X-Amz-Signature=ec605ae5d07fe6ce2e9e6cfa1562ff22d303ac63333e76c73315c99e2bcd9a08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YND6IWVV%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T110820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCQIf8wnAUoQJyiBVaXquvJ2poT1lsvDHsc1%2FV%2BZZ6WTQIhAMfRSkbVuIqtHj58ppZMuZwMqn0kSrwQRbv9sYaufQJ1KogECIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwe9Z8JSrRhPrVrkpUq3AN3mevVTrBJOIwZeq2x4TbjYRBFNJh%2FfYjC0cX3q0S8GMMGfAbc9Z%2Bk5voyrUHbrWVknNDPwL2e526dCFQDXrAiMkDd215dv2B1VvzKBG%2FZsmB2HyaLU3PWwAAWLFcsEuhTHXC5V%2Fw1P69UhyCRfgvMYk8v4BdRX6QHfgUyC8BAQbBahfsVqLfOw83dBbkzF0a%2FoUYC1S7duMcqDWHr6d6By7wYnq8gRhx6yGU8ojJCmIQoVWGJqxh6I0rWxXF0vTjpn9xLWNcvVQzsuD%2FrWQt6zH81EeMZqqLpsfwnM2dFs8o4kJlpvun9IwzyVyCYHs90lIZaPQPNClEED7Ly9eI9EM0%2FSdV%2Fm6SUKCmE5Dnnuwxen9sS0T2s%2BSZCAA65uprppw6Njm35Lip3YQddxgN1rsBdFPcf2uYWLfCy0ZOqP3ODY42nrTDGHCyLQFjdkfP0LandumNNVMSRQo3BbLZU7kwIf0bGQ5UHr2qo%2FzGc4HHiOL%2F6tOiGtUI7hGZnQgR9v4hKcZBY3x8nNyUdgkshQ7ZlHZLhp%2F%2Fd%2FnpC9Q4X%2BlsbGClyGD2ME3VS78PHg6R8AbAXJ3pFlcldg3NOU5MmEHseDyDtEaNIjyOZj1Wfob2D3elGxo4IrFjbfDCb0OjDBjqkAZtc8S%2Bs3s8cRlYDn8dWxOYRDq1LV2se9YQqEqJhJdcYzh23R6%2Frzjss2T7gykKJ3pZ4dwyUbj1SB6WWzaXBG6kY2J%2F%2BtYNWfwzp9BZ1uZbQYozB%2B0Y44xDwP%2Bmp%2BCtfM9PEcIc0d1M1aFEr7xz3qvHmR9JrANX5MtP0b1LlD6xILlj1yMma8dL2FNgRZqleqvwIMuza%2BkibuOP23IFbPtKKakM6&X-Amz-Signature=616374f711fe1b144f523e5673c065f45aaccdef7b6800bad96fd9e466a19b22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
