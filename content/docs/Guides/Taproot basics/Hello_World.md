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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRVHEF4N%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIJ3Zkpd%2BSEs%2FYa94yMW0QvSm5SslCYj3vpfVuEtjO7AiEA4%2BMqTKgJr%2BkVsJaNJvleEhx3X0rIZlFHUTSKlXQwIf8qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDX0ut8smizOgW2tvyrcAwgzREt5mj88DJqsTqXqsNAsKl%2BSYTzcK%2FO7KDnTsRWUbFXUsCWw6c%2FxMyPCcSa66Ve15n%2B0GpF0FqBKUZH43QJeUtW723vqxTpArT2TDM%2Bc5o4VGuTlTpcdU%2FTf6fOMVa7hIb%2BO8PSFxAV%2FjLh9Wn15LLfp83uDxIDwEddBNns8akCpyAaw%2BUTkOeZqvLQ%2BdRtEc2dfrYEj19T3aiwP%2BDfspSQ5fKrZCZm%2FRZXP8gH3rW%2B1elxlu5RJquRxM3POuVWvETCeLKSH19DdwlWRHmrNm9LYEGaaaEMO4UQIkR12owuH2ZGEet0uXVfDnx3epSbIcIyZAAqSslLZQnze73Krau9fnXDWEDnULhvVbLZxOjKY%2BKFNkstmWIqgyv0Ug9Hxx7x%2Fexi3ilWtwcBgUli9uWQi02uZu3AgqgTC2O9PDtauM5uEtWMqAvU%2Bz5bg7gpfEqfPaSWspu5NgYLscDC7khUnth%2BIx9amCYrG3URT%2FyIyxxVFtfYjx%2FA9mhVmRPjRXp8k6lx6CjjARPPPX9Fg82ZT7Pd3qLoQRNK4ppOIgYtCdTR1WtJwaxj9UhBSkEbgfuJodQVmVBWiS%2FLMcEoaDKWoD07g9JrHlgpeJrmh2xvpndat0iso7Q%2FlMLzUtMMGOqUBl8xKL47UnqJih5zu%2FxHU7cABc76KXpliHbgCnoW9oOwWRFuRE1NMJAWXAezuF3OsyWu5AYnJJlfi3t98jES7WXH0Rfu5CwfMj%2BizRQZ6C0x%2FH6J6pKkLu4iIkr5py2bVSRNJQNM4E6OEqfyce0fwzqic2W1WxxW1n8%2BsmzhpkRWbuGceNfARccPJKkh9SxFSEjamU7o6cyrW467xZtQR3aDCBwD0&X-Amz-Signature=11d175066108bc1aa1a5eeab4535364ee12a0daec82b6d6320972e894643fb3a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZRVHEF4N%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T150904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAIJ3Zkpd%2BSEs%2FYa94yMW0QvSm5SslCYj3vpfVuEtjO7AiEA4%2BMqTKgJr%2BkVsJaNJvleEhx3X0rIZlFHUTSKlXQwIf8qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDX0ut8smizOgW2tvyrcAwgzREt5mj88DJqsTqXqsNAsKl%2BSYTzcK%2FO7KDnTsRWUbFXUsCWw6c%2FxMyPCcSa66Ve15n%2B0GpF0FqBKUZH43QJeUtW723vqxTpArT2TDM%2Bc5o4VGuTlTpcdU%2FTf6fOMVa7hIb%2BO8PSFxAV%2FjLh9Wn15LLfp83uDxIDwEddBNns8akCpyAaw%2BUTkOeZqvLQ%2BdRtEc2dfrYEj19T3aiwP%2BDfspSQ5fKrZCZm%2FRZXP8gH3rW%2B1elxlu5RJquRxM3POuVWvETCeLKSH19DdwlWRHmrNm9LYEGaaaEMO4UQIkR12owuH2ZGEet0uXVfDnx3epSbIcIyZAAqSslLZQnze73Krau9fnXDWEDnULhvVbLZxOjKY%2BKFNkstmWIqgyv0Ug9Hxx7x%2Fexi3ilWtwcBgUli9uWQi02uZu3AgqgTC2O9PDtauM5uEtWMqAvU%2Bz5bg7gpfEqfPaSWspu5NgYLscDC7khUnth%2BIx9amCYrG3URT%2FyIyxxVFtfYjx%2FA9mhVmRPjRXp8k6lx6CjjARPPPX9Fg82ZT7Pd3qLoQRNK4ppOIgYtCdTR1WtJwaxj9UhBSkEbgfuJodQVmVBWiS%2FLMcEoaDKWoD07g9JrHlgpeJrmh2xvpndat0iso7Q%2FlMLzUtMMGOqUBl8xKL47UnqJih5zu%2FxHU7cABc76KXpliHbgCnoW9oOwWRFuRE1NMJAWXAezuF3OsyWu5AYnJJlfi3t98jES7WXH0Rfu5CwfMj%2BizRQZ6C0x%2FH6J6pKkLu4iIkr5py2bVSRNJQNM4E6OEqfyce0fwzqic2W1WxxW1n8%2BsmzhpkRWbuGceNfARccPJKkh9SxFSEjamU7o6cyrW467xZtQR3aDCBwD0&X-Amz-Signature=f0b9f79632bfaf67ccb943ef86dd03d8978bed13b5dcf2cb350d81aee2ab6bbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
