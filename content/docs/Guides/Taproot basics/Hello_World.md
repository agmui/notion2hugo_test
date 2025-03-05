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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YARUJPRO%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxrI69nbNCE3ws2Scxsyf67KjU8AKac9sqSqpu5vMM4AiB2slguBxfCWTFNCACLlLtok8%2FK009cIoBMPa1c4s4dKCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMK17CRWcZEWuKUkVQKtwDC3NQShhvCGARq%2FnA82SUROaXz7YhtCKAtsTIMUHxkfRUbE8lSI7rlJ7atld0Iwsgdci1VSiTY3MGh03y9%2BTHMc9tocHTSQpOR1EkYZrH0QpYXjDc4JSdpKTJ28qwTTy5DRGKnmSiitSWyPRidzx8LbG2BvJqr9tRFn8ni5bxcop50MGV%2B1H%2BKVhgUJuivD5oscQbuYo2y%2FKmf962oHYnrIKKEhcFvNGxW%2F2AJ98ALnDZuupzDq8sM6iyMiXydn4At%2BAwtoIv00kwTClODKM7ydUNi%2BMLTR1jUniU7ZX0ThE%2Bfmn6PEOfVYds%2FtWK%2FhNLJlM2yENaj%2BuLO71wbSYD0FJovDRVZrpvDux38V4F9Z2YOpkr82QWlcaweMMuE7S80FouBOzGvGjIbwygwzddoyaBCoq010OHpIZbSphwqmcQcnkX7%2FErn%2B9r9TIEEHWfWRZYUiuerVWOPCdCAPYGVkEHXagOxCBw2rFxetSyP3yWKY96VRhZDfAMFdslYWPEJsJ5ufqh8ojhLK5qUnYzGtpHsAWrSrWYrMMnRoA2FcxjxVVuMV%2Ba2%2FafNaLCwOC6c8fGQXkCdNfQvPiFzW%2Bms9wUtF9H0rbF9HmPERncc3vfEczEk2dxBeAcMacww6%2BgvgY6pgG2pscXHT8JhKhwLgPXS4P%2FIFKl5Ie%2By8dm3RsQrFu9Yf3iS9oIRoRnFlNHhIVQmnY%2F4VmX7Te76NgDcBZNLZz19DloOXfbdMuV5XzOD4fQcW57PnEfIzrM%2Fs6%2FLZTIk0DEzY%2By1gmDT66Ah3pI2pFsFW1XTJ7nrYnmPqKjsyd4HcUktOBhsIgd1b9wgmeM7J75d94S%2Ff7PaLgwsUCElsc69hyVyUDm&X-Amz-Signature=53a0274363cc8d83df091ac3555b23620e2a2a4c4c7c94ecf5aa65592f959206&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YARUJPRO%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T100845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDxrI69nbNCE3ws2Scxsyf67KjU8AKac9sqSqpu5vMM4AiB2slguBxfCWTFNCACLlLtok8%2FK009cIoBMPa1c4s4dKCr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMK17CRWcZEWuKUkVQKtwDC3NQShhvCGARq%2FnA82SUROaXz7YhtCKAtsTIMUHxkfRUbE8lSI7rlJ7atld0Iwsgdci1VSiTY3MGh03y9%2BTHMc9tocHTSQpOR1EkYZrH0QpYXjDc4JSdpKTJ28qwTTy5DRGKnmSiitSWyPRidzx8LbG2BvJqr9tRFn8ni5bxcop50MGV%2B1H%2BKVhgUJuivD5oscQbuYo2y%2FKmf962oHYnrIKKEhcFvNGxW%2F2AJ98ALnDZuupzDq8sM6iyMiXydn4At%2BAwtoIv00kwTClODKM7ydUNi%2BMLTR1jUniU7ZX0ThE%2Bfmn6PEOfVYds%2FtWK%2FhNLJlM2yENaj%2BuLO71wbSYD0FJovDRVZrpvDux38V4F9Z2YOpkr82QWlcaweMMuE7S80FouBOzGvGjIbwygwzddoyaBCoq010OHpIZbSphwqmcQcnkX7%2FErn%2B9r9TIEEHWfWRZYUiuerVWOPCdCAPYGVkEHXagOxCBw2rFxetSyP3yWKY96VRhZDfAMFdslYWPEJsJ5ufqh8ojhLK5qUnYzGtpHsAWrSrWYrMMnRoA2FcxjxVVuMV%2Ba2%2FafNaLCwOC6c8fGQXkCdNfQvPiFzW%2Bms9wUtF9H0rbF9HmPERncc3vfEczEk2dxBeAcMacww6%2BgvgY6pgG2pscXHT8JhKhwLgPXS4P%2FIFKl5Ie%2By8dm3RsQrFu9Yf3iS9oIRoRnFlNHhIVQmnY%2F4VmX7Te76NgDcBZNLZz19DloOXfbdMuV5XzOD4fQcW57PnEfIzrM%2Fs6%2FLZTIk0DEzY%2By1gmDT66Ah3pI2pFsFW1XTJ7nrYnmPqKjsyd4HcUktOBhsIgd1b9wgmeM7J75d94S%2Ff7PaLgwsUCElsc69hyVyUDm&X-Amz-Signature=35448688de774362aea9309f13084e91116a197bc4757eb9242375ad64213064&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
