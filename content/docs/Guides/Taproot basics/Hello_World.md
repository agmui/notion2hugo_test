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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI6KXKEK%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiO%2Bv3iGvcyTDhG6roSgjjKCrk1uxDZFeCniYqFwOLEAiAM0nZLibrqWJLgVOPvuDI%2Bi1Rc%2FKM8xT8Mlx0B11g90SqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjAprupNm3IRKOd6SKtwDcFV2xS8OyCMBhH4xjaunCRoBL3BoG%2BXudXsQzml3RfcsgxavqKem7IX0%2FXXCHQPpVGzzXgBrhRJ%2FqqdjVa3lwt2bzNwhN3Fs7YjF%2Fh%2BvqA8MsM8SIrZUaG7EIWlBFJv2adeha5%2FiS3Ke%2FZ2oqJ1gjQTGdeecEyZ95AgP09Kbt791EGY8GrFzk7LCXf2dOLOE%2FDWs3FvsWEsj4TcXUZ%2FDwSa1xnmHmbXSChwNbGk%2BHWdF8epiIT5797O7VccJ4cSCry2ZqtrisgCryHRmE219HwAYnZtu2PJ4T90m546eUx6%2BE%2BLuk%2FULoPVXB9LNDZSSeB6uMuGTgt0aQkJoTk3y%2F0yfROQM8nur0OyFMGRNhbnHvZ%2BoIZ6MuqmpAfU781piTB81RRNQ3U33LmhXDHtrb1ZyyB85e7D82FteuXWGW1WVuZW2nLta0VTIOnHnKpnlb%2FNvnKsyOo0sen36eMzAbt970VYGr4JEjsRmoCqpPdF6YakMjTwRPWnnG0KGYdUnbrGlM03F4wluIQgVp5Mr1a7GdzADA7H0%2ByN0vNBYybe5AY2hYPtAuDzBU5bGPvjCWt%2BhSw7tH0GMWusO8RL1d2S9jND7YHe7ZkG2NUOeLHEAwdBDs%2B4mSTz9uvgw8N%2FCwAY6pgGejHfm17DTanqGK%2Fj8ZssZdtvlnlXBr9P7W3Eh4ZCL%2FVMRwCWHeVfbXAVfWVwC%2Byxt9uakR0VNmCynJvBLZnpgk47aVeb2B8FZJQf7LuzryYejF1Ena5Ubllte2kJitwzvJrLSXFLehao0aHNBPYBb57aaC%2FEVclIU6WqbSTNkynZTI2g4v497s3m%2B4KtWygZGtWGo95r0Vw9Yauf%2F4eNdUBbaS41L&X-Amz-Signature=c64ba714bb44d0de53b420171a52f773e59331828b55080c8a37462cff6dc212&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YI6KXKEK%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T110727Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBiO%2Bv3iGvcyTDhG6roSgjjKCrk1uxDZFeCniYqFwOLEAiAM0nZLibrqWJLgVOPvuDI%2Bi1Rc%2FKM8xT8Mlx0B11g90SqIBAiM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjAprupNm3IRKOd6SKtwDcFV2xS8OyCMBhH4xjaunCRoBL3BoG%2BXudXsQzml3RfcsgxavqKem7IX0%2FXXCHQPpVGzzXgBrhRJ%2FqqdjVa3lwt2bzNwhN3Fs7YjF%2Fh%2BvqA8MsM8SIrZUaG7EIWlBFJv2adeha5%2FiS3Ke%2FZ2oqJ1gjQTGdeecEyZ95AgP09Kbt791EGY8GrFzk7LCXf2dOLOE%2FDWs3FvsWEsj4TcXUZ%2FDwSa1xnmHmbXSChwNbGk%2BHWdF8epiIT5797O7VccJ4cSCry2ZqtrisgCryHRmE219HwAYnZtu2PJ4T90m546eUx6%2BE%2BLuk%2FULoPVXB9LNDZSSeB6uMuGTgt0aQkJoTk3y%2F0yfROQM8nur0OyFMGRNhbnHvZ%2BoIZ6MuqmpAfU781piTB81RRNQ3U33LmhXDHtrb1ZyyB85e7D82FteuXWGW1WVuZW2nLta0VTIOnHnKpnlb%2FNvnKsyOo0sen36eMzAbt970VYGr4JEjsRmoCqpPdF6YakMjTwRPWnnG0KGYdUnbrGlM03F4wluIQgVp5Mr1a7GdzADA7H0%2ByN0vNBYybe5AY2hYPtAuDzBU5bGPvjCWt%2BhSw7tH0GMWusO8RL1d2S9jND7YHe7ZkG2NUOeLHEAwdBDs%2B4mSTz9uvgw8N%2FCwAY6pgGejHfm17DTanqGK%2Fj8ZssZdtvlnlXBr9P7W3Eh4ZCL%2FVMRwCWHeVfbXAVfWVwC%2Byxt9uakR0VNmCynJvBLZnpgk47aVeb2B8FZJQf7LuzryYejF1Ena5Ubllte2kJitwzvJrLSXFLehao0aHNBPYBb57aaC%2FEVclIU6WqbSTNkynZTI2g4v497s3m%2B4KtWygZGtWGo95r0Vw9Yauf%2F4eNdUBbaS41L&X-Amz-Signature=fe21c4e0531a6d86b3e4115e316253fbf30ddc5a9c552a2daca1edd482bc35e8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
