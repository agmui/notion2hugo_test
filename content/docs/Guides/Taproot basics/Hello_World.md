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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VNUKDVO%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBuTDTYY8uALxOJ6ps6EBFHjMWVi2Tc9pYlIU1AM7T%2BvAiEAlfZDzhYn9MEApBSXsKj4qV71auXtS0U1JbjAXf%2FAG5sqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAplVZ9OLioHLRqooCrcA6%2FEMBLoJ2vlG35Lzroh3bwq%2FOJHJR3RTN3DVSG%2BTYI4ekXttpNj1fvkBLAphKlXdd7T%2Fz5%2Bj23Q1Ricd4Z6z02n9mavro4xNNyK8U8dWws0pnT1YFuVEYcVr%2FEwQ5IOAmGYcxj06yQE74xwZaXeRZ4Nte5FaGXLiHGjsNK9JjI0xAc2seOoyXrQpJBaR4n3R%2FCmVdenOhNwzofbYrHKP8aSvT8xLKFzU1jhd9n9xMBbArwOUk5SB2h%2FLf1xneI1NJK7EdknqrYLX2dGiy51BttDGn5vtouj4xbzLESSEUyib0DCtZDdEN2%2FTROyA%2B2oH7bppYPb3yXrNuHJmcEYPOdnQAVKEZWtpXbsHjez2zwPKBiMEfDfgvNSpEJG8xu3%2BlYKsPVzEFu6TC4mtoXaHgZGZf%2F5lwQd9TeUket1p%2BTfSSBKtAlwmqPYcQEwNjwAOViZQ7Es7G42x9PBzsImmZMi9j0LfhnFNFbiWGO%2ByY7%2B7HmN5JdYjJBiUWSZuc9o8AYNiOWsEv7UXIEcAVUOMgrAuziVFe%2B%2FJr8wSh9KHuz7egshNGzO%2BYgzJZFBuHemumkg76gI3xtP92VONM2TxXy1b%2B405j82a%2F0Ni%2BnM9lHxiReFyvvqfWJy2NJKMPuEqdQGOqUBOndCEaahn0ZUbYKYxKO2RqZ%2FONRoS%2FugHCP6hTV0089zVG%2BWtXxuSYSZUb%2BA8Wqdtwus21iT0%2FTzNBr6Eti8%2F0U%2BIpYW%2FvZWapD7HcoCYVuKdeapYWfgMJZUBsz7PD99VRNXFCG5zMqSMpKsg1qvI%2FGXWmeThxn8qjwrAg4Q%2Ftn98tSTsnoJNCERfTyblxdwQLDpsIMFdId%2Fxofp8YSJ5xszPaQV&X-Amz-Signature=18e2fb851e5bae72d8cc60a9679bbab5fb79daae05188dd69ad840dba1ddc343&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VNUKDVO%2F20260823%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260823T011829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIBuTDTYY8uALxOJ6ps6EBFHjMWVi2Tc9pYlIU1AM7T%2BvAiEAlfZDzhYn9MEApBSXsKj4qV71auXtS0U1JbjAXf%2FAG5sqiAQIyv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAplVZ9OLioHLRqooCrcA6%2FEMBLoJ2vlG35Lzroh3bwq%2FOJHJR3RTN3DVSG%2BTYI4ekXttpNj1fvkBLAphKlXdd7T%2Fz5%2Bj23Q1Ricd4Z6z02n9mavro4xNNyK8U8dWws0pnT1YFuVEYcVr%2FEwQ5IOAmGYcxj06yQE74xwZaXeRZ4Nte5FaGXLiHGjsNK9JjI0xAc2seOoyXrQpJBaR4n3R%2FCmVdenOhNwzofbYrHKP8aSvT8xLKFzU1jhd9n9xMBbArwOUk5SB2h%2FLf1xneI1NJK7EdknqrYLX2dGiy51BttDGn5vtouj4xbzLESSEUyib0DCtZDdEN2%2FTROyA%2B2oH7bppYPb3yXrNuHJmcEYPOdnQAVKEZWtpXbsHjez2zwPKBiMEfDfgvNSpEJG8xu3%2BlYKsPVzEFu6TC4mtoXaHgZGZf%2F5lwQd9TeUket1p%2BTfSSBKtAlwmqPYcQEwNjwAOViZQ7Es7G42x9PBzsImmZMi9j0LfhnFNFbiWGO%2ByY7%2B7HmN5JdYjJBiUWSZuc9o8AYNiOWsEv7UXIEcAVUOMgrAuziVFe%2B%2FJr8wSh9KHuz7egshNGzO%2BYgzJZFBuHemumkg76gI3xtP92VONM2TxXy1b%2B405j82a%2F0Ni%2BnM9lHxiReFyvvqfWJy2NJKMPuEqdQGOqUBOndCEaahn0ZUbYKYxKO2RqZ%2FONRoS%2FugHCP6hTV0089zVG%2BWtXxuSYSZUb%2BA8Wqdtwus21iT0%2FTzNBr6Eti8%2F0U%2BIpYW%2FvZWapD7HcoCYVuKdeapYWfgMJZUBsz7PD99VRNXFCG5zMqSMpKsg1qvI%2FGXWmeThxn8qjwrAg4Q%2Ftn98tSTsnoJNCERfTyblxdwQLDpsIMFdId%2Fxofp8YSJ5xszPaQV&X-Amz-Signature=4118072519ae4905f6d42a8a68dcc756de656d0a6c426aab2e46837f0dae37e2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
