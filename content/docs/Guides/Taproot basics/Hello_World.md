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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDJKT2FO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLmzVdb3Cz3ZiiRThbHfkHaDLlu040eyEIbhtBUUWeBAiEAzpgv4Ji9opYxUDuf97BqfgL0o7AxR2p6IdYg5NGm7J8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNcfCCMa%2BaaqYNhFYCrcA%2Bw4%2FdJ1cgEP4%2FXftzVi8tq0Xp37N%2FBkZA7fG8LOIxcAqtOeXcb0RVf7aU121ha%2Bs7az20xbqLlhYhImP8hFIViwitDKuFu8XZOHiBkEYqpDL%2BF445Mnnleybsujggpp52xgUiKfFlsce32HwzzIYS8EPC%2FGYpVFiNvn9ydU48Xcq5NxWjbA2ZinbxSKZcoQ55QJRFZaNZbWAJ2C0jJ%2FMN%2B5uAgHfH9KKRSr7Js%2FNZKMCgKnOhyNU72aOXpRUXWnVOKBnJ0Oey%2BB5F4b%2B9a2CXQZazLzUqWdurdpizAL3xDKZVHc84k%2BvYArR6Mygkxq945iqU5l5cgAthKx74B36oYU91zhbylAKbNnY2Mvstbi44WHL61HtEEiKQVILPGMPaTWmwKEeErmWoDmektMeb2O4rDj7ZOEpc9%2BAXlfIsxLJ6xdNHFO4%2BwkrjHDQIcrypCrClWlLNi58mqjQalr%2Fdxdri40oUtVD3TvcHMuxe%2BjMfyp2auWZ%2BdB539iAVrVwWE4eoRRA4n5PdlUlaBpbzxBu9x3l9lt16geMXmAwwQA3x3ra3dIdzVr8EOPJYoj9jLXm7lQVApzLyvgNud44WLsClPw%2FgiQaWSKxCzwSzf5%2Bt5Q48xO4rJmuJapMK2T7b0GOqUBlN%2B%2B1tXXC1d4nx1b47x3mpZNBTSteR4VI8XxiWsTrvVgCKeK2rlaOwLpxAEiD4IwQoXs5lr11FDKxI5Vi4DFg%2Fls6c%2Bnye4DFxZ8zn7dQ9xAnwKS9heGpyafR1xUn14QS9YWbbyggqbAPyA%2FyQ3D6%2BFpJxL2MWLd0e8wUzKgY0x0MnHxSQlykVlam2WNzAMWEszRR0plAKu5e2v24c3%2BvMEfMJbt&X-Amz-Signature=0fcb78b8c5adb003e1ce053702da20b3831483c1e66c89563824b456ff7dd31b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WDJKT2FO%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T200732Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHLmzVdb3Cz3ZiiRThbHfkHaDLlu040eyEIbhtBUUWeBAiEAzpgv4Ji9opYxUDuf97BqfgL0o7AxR2p6IdYg5NGm7J8q%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDNcfCCMa%2BaaqYNhFYCrcA%2Bw4%2FdJ1cgEP4%2FXftzVi8tq0Xp37N%2FBkZA7fG8LOIxcAqtOeXcb0RVf7aU121ha%2Bs7az20xbqLlhYhImP8hFIViwitDKuFu8XZOHiBkEYqpDL%2BF445Mnnleybsujggpp52xgUiKfFlsce32HwzzIYS8EPC%2FGYpVFiNvn9ydU48Xcq5NxWjbA2ZinbxSKZcoQ55QJRFZaNZbWAJ2C0jJ%2FMN%2B5uAgHfH9KKRSr7Js%2FNZKMCgKnOhyNU72aOXpRUXWnVOKBnJ0Oey%2BB5F4b%2B9a2CXQZazLzUqWdurdpizAL3xDKZVHc84k%2BvYArR6Mygkxq945iqU5l5cgAthKx74B36oYU91zhbylAKbNnY2Mvstbi44WHL61HtEEiKQVILPGMPaTWmwKEeErmWoDmektMeb2O4rDj7ZOEpc9%2BAXlfIsxLJ6xdNHFO4%2BwkrjHDQIcrypCrClWlLNi58mqjQalr%2Fdxdri40oUtVD3TvcHMuxe%2BjMfyp2auWZ%2BdB539iAVrVwWE4eoRRA4n5PdlUlaBpbzxBu9x3l9lt16geMXmAwwQA3x3ra3dIdzVr8EOPJYoj9jLXm7lQVApzLyvgNud44WLsClPw%2FgiQaWSKxCzwSzf5%2Bt5Q48xO4rJmuJapMK2T7b0GOqUBlN%2B%2B1tXXC1d4nx1b47x3mpZNBTSteR4VI8XxiWsTrvVgCKeK2rlaOwLpxAEiD4IwQoXs5lr11FDKxI5Vi4DFg%2Fls6c%2Bnye4DFxZ8zn7dQ9xAnwKS9heGpyafR1xUn14QS9YWbbyggqbAPyA%2FyQ3D6%2BFpJxL2MWLd0e8wUzKgY0x0MnHxSQlykVlam2WNzAMWEszRR0plAKu5e2v24c3%2BvMEfMJbt&X-Amz-Signature=83a0236214043f52560b3890bf69014eca5269f74bf23ece0069cf784ce26417&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
