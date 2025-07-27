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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQLOE6ME%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCays8wZZk6f2R7OLceDQKJW2ihh6xF1bAZpRAUKA1TrgIgRbmfCkb2s6v34iZJloGZem7vtMQlVCwGev5mZxap2XEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKQpsEznPQWU2uAu%2FyrcAxqwU0871X251p9N3gIDHcFhe04m3xyteMLUpUcjngQ%2FJENouGUBYx6njn7DJ%2FKKu8fGG%2BL7rSSqSnK4j9ZvO9RNpAhd6GEhYlMGcuOHlqFT8vY%2BsXaZijOjbPVL6KpCom9u56H2P6UoW3OMufkYbPvQmr%2F9fLhrdY%2FTOLDitm%2BPwlLnBeppsAc1gPumRSqtPUJBMxahsYr5D8PzaYYPgf7H4Bxo7wqjy1eamUhHV98o%2BY7ZFd5%2BQPD5ypf4hn%2FvjEG3XE3mZR83JucuXmw8KLQoRZBSRHi2psJXvPxVlaGrISRmvCVyxw7eFz7NL%2FnBfGpnHdFhtlSIjENT9ZJoyUt2t8oJhlUN07aBe5qPo%2Bm5UKqAqcccl6EQMcaWpG0CGJT4LsouBqxsPxFXKDDmJIT5xIoyNxKOMuModAGrFYioVsqzA504MZZMVodMcZCdVd3C9ubSXKbD4wixn4rQUyNEZ6jPMloxAHjtFyNl4BU5IkhVN3HNDCN%2BOQCK4m7%2BvQYn48Bwdq8zhx1AxOsvXafhxC5hvzzfM0nRJIMoKjklFqMqolnFHTLR0yZBe%2F%2F4qxYDsYYy%2FTWILyLAVhfaKpKkoq608utgwVkAVvE7c6BfRPSddRF7Q%2Bt6R7EtMM3Xl8QGOqUBBVzI8bpgei7ReK9qOz2L7mKn57amvgAJu21MGZ2P%2BJ67vqXWsPJuZiw71Q56uewWLtBiCbT9bajHxeyM0B6WgQOz3AvWIkv5%2Bi%2BdIiV2y3FPm4jzf4XE86oQua3e%2BhG5ZHUzpsqmcT1lfZjF5UgO1JugJs9xhlkPpcgLgKyZ2XVqbAYKuB6QOq%2BtffFT%2FlikaqFlCtgWZ43RTq8qt6HyGwz5UzP5&X-Amz-Signature=8ef7fc06f5f3ba8f6b67629ae30501e4ff06319a0eba14ce2f65aff4f6a5868c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SQLOE6ME%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T121554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQCays8wZZk6f2R7OLceDQKJW2ihh6xF1bAZpRAUKA1TrgIgRbmfCkb2s6v34iZJloGZem7vtMQlVCwGev5mZxap2XEq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDKQpsEznPQWU2uAu%2FyrcAxqwU0871X251p9N3gIDHcFhe04m3xyteMLUpUcjngQ%2FJENouGUBYx6njn7DJ%2FKKu8fGG%2BL7rSSqSnK4j9ZvO9RNpAhd6GEhYlMGcuOHlqFT8vY%2BsXaZijOjbPVL6KpCom9u56H2P6UoW3OMufkYbPvQmr%2F9fLhrdY%2FTOLDitm%2BPwlLnBeppsAc1gPumRSqtPUJBMxahsYr5D8PzaYYPgf7H4Bxo7wqjy1eamUhHV98o%2BY7ZFd5%2BQPD5ypf4hn%2FvjEG3XE3mZR83JucuXmw8KLQoRZBSRHi2psJXvPxVlaGrISRmvCVyxw7eFz7NL%2FnBfGpnHdFhtlSIjENT9ZJoyUt2t8oJhlUN07aBe5qPo%2Bm5UKqAqcccl6EQMcaWpG0CGJT4LsouBqxsPxFXKDDmJIT5xIoyNxKOMuModAGrFYioVsqzA504MZZMVodMcZCdVd3C9ubSXKbD4wixn4rQUyNEZ6jPMloxAHjtFyNl4BU5IkhVN3HNDCN%2BOQCK4m7%2BvQYn48Bwdq8zhx1AxOsvXafhxC5hvzzfM0nRJIMoKjklFqMqolnFHTLR0yZBe%2F%2F4qxYDsYYy%2FTWILyLAVhfaKpKkoq608utgwVkAVvE7c6BfRPSddRF7Q%2Bt6R7EtMM3Xl8QGOqUBBVzI8bpgei7ReK9qOz2L7mKn57amvgAJu21MGZ2P%2BJ67vqXWsPJuZiw71Q56uewWLtBiCbT9bajHxeyM0B6WgQOz3AvWIkv5%2Bi%2BdIiV2y3FPm4jzf4XE86oQua3e%2BhG5ZHUzpsqmcT1lfZjF5UgO1JugJs9xhlkPpcgLgKyZ2XVqbAYKuB6QOq%2BtffFT%2FlikaqFlCtgWZ43RTq8qt6HyGwz5UzP5&X-Amz-Signature=7fedc842527cef63b7496e9d34acfb1da37bdbf79bf97b4a9eec368e6b738007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
