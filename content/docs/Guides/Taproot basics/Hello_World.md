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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HD5DAR7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZGcwyshRfSL2rkCtOmvYPpq3vxa0ZZOlBKUicEyAghAIgdpeSClwN2ek3S4spOE2hwsNwZl%2BMNHG35JEM9vGe6QQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDIPZf%2BPkxK5QAy7EaCrcA3yA5qsHWP6fJmDA6oQdHAlo4yuuZ28tvNCFS7cTN4gW4Niyfkx8V2mGEY0J93auI5wa%2B%2FI8qfrVGiQiFceAqkl4qAUu0IT5Xka%2FCYEDE%2FvXz3e9roTQU1SIFhYLabYCqb8TxE70K0Xn9X0DBjfA%2FDu%2FcgBFgRW3uaPTvR8inB2NlwaZBAaJVOyJhBSaITKM652c35iCKkt6omIkR9BcPAajRL119s8i9DWMJuS8izO9GL1kkeKq0jv7FZgAl4VPQS4WWHGjuZt4EXX83ixHGOWYqNo%2BjEW0OBNBYKSAUgKyZZrmVQ9eE5Kzu%2FomwrPhPFP4ChyiEJrGw%2F%2BTCiqqOXvlvDqaSiT9nKCUqv22jAJPVso1DLaMTupZBzGWdMQHoMKVAahtI3uzZjPlm7KGONOQZvo1DktYGunW4nVITJWkbjx8aSvkDi5zg20pD1ajdpK9PslAsAvFiBCh1bK6VYzMBPQMmVbWnPUAS9QscZOHqBnHB11bMATmvF03t1tlLGJrumrq2sNrCsxjPNdMr%2BkG%2BfeBGPE7BIT15h80aHpG3L1NdLxhVkhzWXlsYD87GvtZxSXW6Sp3EGmhV7gZEcWAoWr6ENvUr5RcPLM3mSEejZZtr3O9vws2NGkcMKnp7sAGOqUBpmHLSF%2Fu1%2FOKNjQhDuSqh86tLIHvRDx5XFwuuNxLExLD8v5oFYaZrgeQeiYMT59RNHwc7UR026NL2jmd5dvA8mSgLvLjEndkZ6Hdfxx6J0i6C8VHw3lwD6Ot0VnfejG%2F5%2BotCAb02dNhxPs9EwLxW8cVPseFBmmi3iyqsGBSniaN0PqkaeRxFwzPTZ7za6MfftvsmUx%2FN9QZTiBCFeaJGTcNLxXS&X-Amz-Signature=f43a2bd430bb1d0ff86e57d019c7b671fd265ea43eca7afa53d9a07126d5d66e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HD5DAR7%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZGcwyshRfSL2rkCtOmvYPpq3vxa0ZZOlBKUicEyAghAIgdpeSClwN2ek3S4spOE2hwsNwZl%2BMNHG35JEM9vGe6QQq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDIPZf%2BPkxK5QAy7EaCrcA3yA5qsHWP6fJmDA6oQdHAlo4yuuZ28tvNCFS7cTN4gW4Niyfkx8V2mGEY0J93auI5wa%2B%2FI8qfrVGiQiFceAqkl4qAUu0IT5Xka%2FCYEDE%2FvXz3e9roTQU1SIFhYLabYCqb8TxE70K0Xn9X0DBjfA%2FDu%2FcgBFgRW3uaPTvR8inB2NlwaZBAaJVOyJhBSaITKM652c35iCKkt6omIkR9BcPAajRL119s8i9DWMJuS8izO9GL1kkeKq0jv7FZgAl4VPQS4WWHGjuZt4EXX83ixHGOWYqNo%2BjEW0OBNBYKSAUgKyZZrmVQ9eE5Kzu%2FomwrPhPFP4ChyiEJrGw%2F%2BTCiqqOXvlvDqaSiT9nKCUqv22jAJPVso1DLaMTupZBzGWdMQHoMKVAahtI3uzZjPlm7KGONOQZvo1DktYGunW4nVITJWkbjx8aSvkDi5zg20pD1ajdpK9PslAsAvFiBCh1bK6VYzMBPQMmVbWnPUAS9QscZOHqBnHB11bMATmvF03t1tlLGJrumrq2sNrCsxjPNdMr%2BkG%2BfeBGPE7BIT15h80aHpG3L1NdLxhVkhzWXlsYD87GvtZxSXW6Sp3EGmhV7gZEcWAoWr6ENvUr5RcPLM3mSEejZZtr3O9vws2NGkcMKnp7sAGOqUBpmHLSF%2Fu1%2FOKNjQhDuSqh86tLIHvRDx5XFwuuNxLExLD8v5oFYaZrgeQeiYMT59RNHwc7UR026NL2jmd5dvA8mSgLvLjEndkZ6Hdfxx6J0i6C8VHw3lwD6Ot0VnfejG%2F5%2BotCAb02dNhxPs9EwLxW8cVPseFBmmi3iyqsGBSniaN0PqkaeRxFwzPTZ7za6MfftvsmUx%2FN9QZTiBCFeaJGTcNLxXS&X-Amz-Signature=35d52da220f9bd44a69de2bb37e594a4625b83d38516b3d9d0ab6f85879eb081&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
