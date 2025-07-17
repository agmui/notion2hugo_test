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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMSLQ67M%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFVrg6oQUivaIqMo6EGzUj%2Byy4Bc1zU8UNsOYzsR24UMAiB%2BRTN6Szu%2FvyvPfPMAn3MGjReofHvPqGcQNnJyNU16Uyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMvNqBujEg0UwSqwd%2FKtwD%2Bps%2FqvZJQv1JlOWP6vUFWoyT6WuwTOW0%2FzWP87FE9aWKAfuWQSgyLkIpD5zgmbJH2aOhNbNoQqCBNo35LoIao6ouMTde9WEbEXHu5rQWYFMKbO7Jmo7heVlHO5fi78%2FMPlPFL7a9K1gS%2FO540USYlKVfpjEtPEC%2BYA38xLZW0pYMxaKOFZzx%2F%2FRerfllXtS9Eskp%2BGP71%2FMU397%2BxawpA4EgcRsJ6etyE4eXAWi6CmJIAmPcV%2B1kmBmOT44wRy0QzHULcQqE%2F2LpExL7e26T8a7GZyu3zbgqcIOcfiZcGed6JuLb6D0vWeM2yBxTuCxKumE4sTg92wvyZNwjjVCOz62sCJzCfMLdYeh9mSqqLQDJHEJmvLq1lE60Xbk7GahbrTeYGkH0Ng41Pi0r%2BvJFU%2Bx2TFVuyWhD6b3etSWWvBJlyRhRIWiT2MlrZvj6THVdcIlotKVv%2FrQjHfst%2FjNDg0JXjdDYTJZ%2F2eiCic05UA%2FrqATa5QUhdXkWjYkBW%2BzoKsXaaWtUwtsAp%2BmUepw3VlLTDT0Ta28nyc8jS0iXE6PmPmpPuZqo%2FLWOyBdugTVfxbKLFzC%2BHPDrCSppLLP6oo4%2B4doPIvud3iEhieN0LHRC5zd9Al2YyCctQwYw043lwwY6pgG7U%2FQnPcpPliWvC951Z4tS%2FvDvx3vscxXy36tJXcJeblx0zuD%2BdtSKutDRTsX3Sa2DacU3xpW0%2FsQ%2BCkU6mp97YYkoWHaAUzaTvpMHw9arqGu%2Fmrn1zJYr6YSz2iRsETvaqkoZjUOlTmec%2BakkacGwEKC0SX9K9j7jYeaQemQAK8ao0L%2BUEfEgwPoOXzdEY0jy%2B255uQqHQo6bUH8wAkzrVLZecR%2B%2B&X-Amz-Signature=699c1a6ab438a5068c8ecc8c46d94dbde8305ceb962073f84aeaddc127072aaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TMSLQ67M%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T190936Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGMaCXVzLXdlc3QtMiJGMEQCIFVrg6oQUivaIqMo6EGzUj%2Byy4Bc1zU8UNsOYzsR24UMAiB%2BRTN6Szu%2FvyvPfPMAn3MGjReofHvPqGcQNnJyNU16Uyr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMvNqBujEg0UwSqwd%2FKtwD%2Bps%2FqvZJQv1JlOWP6vUFWoyT6WuwTOW0%2FzWP87FE9aWKAfuWQSgyLkIpD5zgmbJH2aOhNbNoQqCBNo35LoIao6ouMTde9WEbEXHu5rQWYFMKbO7Jmo7heVlHO5fi78%2FMPlPFL7a9K1gS%2FO540USYlKVfpjEtPEC%2BYA38xLZW0pYMxaKOFZzx%2F%2FRerfllXtS9Eskp%2BGP71%2FMU397%2BxawpA4EgcRsJ6etyE4eXAWi6CmJIAmPcV%2B1kmBmOT44wRy0QzHULcQqE%2F2LpExL7e26T8a7GZyu3zbgqcIOcfiZcGed6JuLb6D0vWeM2yBxTuCxKumE4sTg92wvyZNwjjVCOz62sCJzCfMLdYeh9mSqqLQDJHEJmvLq1lE60Xbk7GahbrTeYGkH0Ng41Pi0r%2BvJFU%2Bx2TFVuyWhD6b3etSWWvBJlyRhRIWiT2MlrZvj6THVdcIlotKVv%2FrQjHfst%2FjNDg0JXjdDYTJZ%2F2eiCic05UA%2FrqATa5QUhdXkWjYkBW%2BzoKsXaaWtUwtsAp%2BmUepw3VlLTDT0Ta28nyc8jS0iXE6PmPmpPuZqo%2FLWOyBdugTVfxbKLFzC%2BHPDrCSppLLP6oo4%2B4doPIvud3iEhieN0LHRC5zd9Al2YyCctQwYw043lwwY6pgG7U%2FQnPcpPliWvC951Z4tS%2FvDvx3vscxXy36tJXcJeblx0zuD%2BdtSKutDRTsX3Sa2DacU3xpW0%2FsQ%2BCkU6mp97YYkoWHaAUzaTvpMHw9arqGu%2Fmrn1zJYr6YSz2iRsETvaqkoZjUOlTmec%2BakkacGwEKC0SX9K9j7jYeaQemQAK8ao0L%2BUEfEgwPoOXzdEY0jy%2B255uQqHQo6bUH8wAkzrVLZecR%2B%2B&X-Amz-Signature=277d8601c194adcc56f18ab13c685bb457b16187855aecc984275f7835874b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
