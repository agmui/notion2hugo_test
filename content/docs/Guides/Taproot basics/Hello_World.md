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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672QDTP2V%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCGqIafeQGG9FrgbTQGyRm67Vj%2BavnhdRmfkOtHtb75uAIgITNaMccxStPLJ2rbW7n6HIJ9n8a8%2FW%2Fi1GfS9I89AhAq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDITepGKJQ89oIpFlNSrcAwTnP3v6Nh8KxWZnpmjL5eyTNoYDy4zSTP4zzZcAK2gNyNZ%2B%2F0mDNGxoFWLxTSvOo4DATJ%2F6GHhnmqdhO%2FGsvllLd%2Bmwpk77%2BpVRrOPqHILbHa21g7Eb%2BzG%2BQrMqJa8%2FdLvBZvBX%2Bi0wefCH%2BZJrcXvayJKksc2XQLbdnWoUozy%2BmV30RsOnCq3vPRtNMQBwH4CH8PNIYxy8qhWoXiNQRUJb8eb0zXKhfkuRpFgpsJ7qgPHA451Np0%2BYM7To2jl3%2By8HXn8LCfbLk3rXqFTJThT0ZPAgZGUQPyntW%2FNXqApXJi0vCC5e741h96yU%2FYVrIYAQWVGIUpod5XvvJsPtrZu71ZNRSQ52QQDetZG%2Bxw5d8a%2FdJTg%2BzL9hRP%2FoXyCmxL3d2Bq3Jm32MIwiDTHddsu3UpYwnXRcspLndLHqK2U%2Badjli2Kvw3qft%2BCmvdtNs%2F471EFfKOi%2BUXBxjeZ%2FWRLEXjjx9OD4m%2Bvy3kELbo4I1Mo38sRzdVfacd8dp9wKtpNL02W0uOFW5ML8n3gz83Olg3Foo%2FEgZbLPxxOFsUR4fjbQwwSvV4qR7TxpVwAV%2FUU%2BqYVGOIxF1BLOO2YwF%2FUg%2FixI9T0xAIhnal3%2BysfaPeQZC5hkjlwLUACQMJDfnL8GOqUBpGMN26F8pbauSyaeycuzm3CqczFnSDk7W21wbQ9AADUEzFMovk6ZpE41B5mLCcAu9Xk3f8c6vMBPCm1iUpR21qFxxgiVHXYtaOWT5fvq%2BYZngzCQpLVQJiD32m8lj6SiV%2BmaWrwwzkELNTAQgT2GSW1eolOe8XMNCnpMg%2FNt%2BdTePG7e1x6WeiI8oiJZL1RgjHEzxmxq49UkW%2FmyiTmb4VhVMyz5&X-Amz-Signature=422cfd4ce9e6ae24934329b396751546d11b9dff3b5c810ba73460093c0d750a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672QDTP2V%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T032107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIQCGqIafeQGG9FrgbTQGyRm67Vj%2BavnhdRmfkOtHtb75uAIgITNaMccxStPLJ2rbW7n6HIJ9n8a8%2FW%2Fi1GfS9I89AhAq%2FwMIaBAAGgw2Mzc0MjMxODM4MDUiDITepGKJQ89oIpFlNSrcAwTnP3v6Nh8KxWZnpmjL5eyTNoYDy4zSTP4zzZcAK2gNyNZ%2B%2F0mDNGxoFWLxTSvOo4DATJ%2F6GHhnmqdhO%2FGsvllLd%2Bmwpk77%2BpVRrOPqHILbHa21g7Eb%2BzG%2BQrMqJa8%2FdLvBZvBX%2Bi0wefCH%2BZJrcXvayJKksc2XQLbdnWoUozy%2BmV30RsOnCq3vPRtNMQBwH4CH8PNIYxy8qhWoXiNQRUJb8eb0zXKhfkuRpFgpsJ7qgPHA451Np0%2BYM7To2jl3%2By8HXn8LCfbLk3rXqFTJThT0ZPAgZGUQPyntW%2FNXqApXJi0vCC5e741h96yU%2FYVrIYAQWVGIUpod5XvvJsPtrZu71ZNRSQ52QQDetZG%2Bxw5d8a%2FdJTg%2BzL9hRP%2FoXyCmxL3d2Bq3Jm32MIwiDTHddsu3UpYwnXRcspLndLHqK2U%2Badjli2Kvw3qft%2BCmvdtNs%2F471EFfKOi%2BUXBxjeZ%2FWRLEXjjx9OD4m%2Bvy3kELbo4I1Mo38sRzdVfacd8dp9wKtpNL02W0uOFW5ML8n3gz83Olg3Foo%2FEgZbLPxxOFsUR4fjbQwwSvV4qR7TxpVwAV%2FUU%2BqYVGOIxF1BLOO2YwF%2FUg%2FixI9T0xAIhnal3%2BysfaPeQZC5hkjlwLUACQMJDfnL8GOqUBpGMN26F8pbauSyaeycuzm3CqczFnSDk7W21wbQ9AADUEzFMovk6ZpE41B5mLCcAu9Xk3f8c6vMBPCm1iUpR21qFxxgiVHXYtaOWT5fvq%2BYZngzCQpLVQJiD32m8lj6SiV%2BmaWrwwzkELNTAQgT2GSW1eolOe8XMNCnpMg%2FNt%2BdTePG7e1x6WeiI8oiJZL1RgjHEzxmxq49UkW%2FmyiTmb4VhVMyz5&X-Amz-Signature=98608cbb417f775764a6c2d86211751b2d03acabd2ac39f752269d82bd340f25&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
