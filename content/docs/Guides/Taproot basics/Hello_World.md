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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADANO6M%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDY7kxZDha7Agcl7rTPwhV35cdfjquUycbdMoKOuwSv6AIhAIJBfjKkrU55RAR1zkWhqEQp4QRkmInQghtU%2Bt%2BqsdtdKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYxxWrOEQn7mxsyiwq3ANxSmcYVXdvEbcf4unXq6uLe8iOG4C9mgUF%2FR255AC1mVt2GPrFoAPil5Qu3lp%2BNIkYnGiyGcMe9PHh2ELbmkTfgVXaipxYsFxSkM5mOpC%2FaiDDalHBLFxeIs2X3LqUg5%2BAX9wqOXT6WsiO0IVlKZIkAUc0ErB58BWKovYGpMn2uxCN9f6Nvp%2FaXoWMJaxa4LYjMv5im5Fv8qD7qO47z2wP%2FTyKQ4ydzb4GGYvBYVrvtbZJ71xapVcgJH6K%2FwfYC47kSi1dK%2B%2FmBFtutZjVYx7SyKL%2FdM2zYrlD6ZfVkcWCfEyLpY9O39YqiBSx3D9D69e9dI4Ht1mmXbgCeOeAUY%2F%2FJrNbkFtz7vklDMfQ9xZdEb7v9TKnmwyy7GvVu5DD8DslA40r5TNXrOSbqc8CAmM%2FtYvP1wBI%2FWPX%2F2JlYXdVwhR3TqxtDyT4mfeHC5dbIbwW8f8%2FdTdxXwFTEo7PgsjfDHQGBhxHNMpLgXlhHipZQBOpWhXBAogwHfvjfRC3tp4FkPNkbtKcPnoXfdtKBh3%2FgCo6t%2B2uj7N0kgKGQys3fKGRXI4YTVE00NAfYN4%2FLYPDYURseKxpwJ4lE2tLmzOC6WGio2k6yvDXApiG7KNm19tllepRqz1mGpO5sDCDstK9BjqkASJaRCoIaXguU1rASc0r678S6gTOuZf4mr5jaQP1AqlnnZjAd2ax6dDTLBWFPTbxpGiNhpPfA84woFtxpmaOFyyB9g21nLF3l9oVy56LjeIsP3eRC80tmkQ4Ujrp2klGUkZwXKGNh5vR5eBK8nivHpplWahbbie67%2FXXG2%2FZGIr7AhPJbjhaQ8gPdSEeO%2BQkr36jwACz%2Fn0y129fJaWE%2BuayR3xX&X-Amz-Signature=9173ec3a3cbe5e8c15ae6f6399cdca8984bc34a9894997d294cf0ded68efc6c9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QADANO6M%2F20250218%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250218T170718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJIMEYCIQDY7kxZDha7Agcl7rTPwhV35cdfjquUycbdMoKOuwSv6AIhAIJBfjKkrU55RAR1zkWhqEQp4QRkmInQghtU%2Bt%2BqsdtdKogECI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyYxxWrOEQn7mxsyiwq3ANxSmcYVXdvEbcf4unXq6uLe8iOG4C9mgUF%2FR255AC1mVt2GPrFoAPil5Qu3lp%2BNIkYnGiyGcMe9PHh2ELbmkTfgVXaipxYsFxSkM5mOpC%2FaiDDalHBLFxeIs2X3LqUg5%2BAX9wqOXT6WsiO0IVlKZIkAUc0ErB58BWKovYGpMn2uxCN9f6Nvp%2FaXoWMJaxa4LYjMv5im5Fv8qD7qO47z2wP%2FTyKQ4ydzb4GGYvBYVrvtbZJ71xapVcgJH6K%2FwfYC47kSi1dK%2B%2FmBFtutZjVYx7SyKL%2FdM2zYrlD6ZfVkcWCfEyLpY9O39YqiBSx3D9D69e9dI4Ht1mmXbgCeOeAUY%2F%2FJrNbkFtz7vklDMfQ9xZdEb7v9TKnmwyy7GvVu5DD8DslA40r5TNXrOSbqc8CAmM%2FtYvP1wBI%2FWPX%2F2JlYXdVwhR3TqxtDyT4mfeHC5dbIbwW8f8%2FdTdxXwFTEo7PgsjfDHQGBhxHNMpLgXlhHipZQBOpWhXBAogwHfvjfRC3tp4FkPNkbtKcPnoXfdtKBh3%2FgCo6t%2B2uj7N0kgKGQys3fKGRXI4YTVE00NAfYN4%2FLYPDYURseKxpwJ4lE2tLmzOC6WGio2k6yvDXApiG7KNm19tllepRqz1mGpO5sDCDstK9BjqkASJaRCoIaXguU1rASc0r678S6gTOuZf4mr5jaQP1AqlnnZjAd2ax6dDTLBWFPTbxpGiNhpPfA84woFtxpmaOFyyB9g21nLF3l9oVy56LjeIsP3eRC80tmkQ4Ujrp2klGUkZwXKGNh5vR5eBK8nivHpplWahbbie67%2FXXG2%2FZGIr7AhPJbjhaQ8gPdSEeO%2BQkr36jwACz%2Fn0y129fJaWE%2BuayR3xX&X-Amz-Signature=371b9a3be55b5b3dc1e44c13a6e0a99690841306e0522c25c9a5484075608a6e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
