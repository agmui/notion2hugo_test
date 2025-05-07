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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWGNYBI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAz1PeDFtyamiuIucyE%2FMQgsqUTkebi3I4kW%2Bp%2FwlJg1AiEAlmMYRrtlnk%2Fy8yOlSNSti2plfF4COrtSZh7xOGjmgPcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDL5OtsnpcT6%2BiZyYFyrcA0jS05vmiKls09pUE2JcYDgSe3AWfNq8KXrHL8OhlkyGJLldscXYi0WVu4ziil5IukRMOAaxN%2BPzfy0adoLunSEBcDsbzW4ENPRVBReUvY386NA4gruSWtBriHe2cNarOuxrJeY6QkfDhg4zGpfqJeT3m129fbhBK7mYjMgpCbSi9rKXzRggLZjVgVpZbEB41W7lDyFkeKvyee4njYGtz6yTCXKR8mhtEwQXb%2BfGHPKuIGs6PpkqedJDRdUeXbYSybO%2BPYJuuPUeNZHmw0faX38LebrzYYth7F7Z8Hl%2FWdsT1jiFdzk5c8bS91QUU5MM8CD0wHBLzZNWmRtYzAEnRImM5TbmuMP3i3X7n%2BggLRtBYZO%2FPNpm%2FVKy%2FTXcg3YByb%2BZOqbKIdocZ08lo847BzmvAn0s4Y8sVzPDnkcXQnvyPK%2BK6bmMwcabnlFvywCLc4iK1U85avpD%2Bu4K2Q9i76i%2FStoe%2F0zPHZjGLFTze4gMHz9Cp%2F9J1HhIM09w%2F%2BWcEesLNDDqXOTJEQwIFF%2FwSdD94hgVWHp96DEGGYhNsLlWpLqhc0iD9NHiN0Y8qf7tKuyHlGrlYZr%2BHwowbhe9Ttzf%2BuuttpOHALOPBcN9ks4Py6Si34Zj%2FsXtHZfHMJf46sAGOqUBPOyrA4lyS2KDz7ogc9UcLa7XEXUy3tj43KOnDDhMGDeTZyxYFw7utWNNNJpfKc0wamGrytPX3a4T7jdQRv86eX9ZHaTYG2fHWVJFApFhGm1rW%2BZNm9kHkc5J%2ByJ6jGUKrill5m55PSme6nMfPlpDX%2B5LOASk9B5SIlZBQKcY1MIJwIF5B8AQzO6H7hj4iurZNnfIANKgE4Ev81y%2Bov1%2FeklSTuyi&X-Amz-Signature=e5d2bb77f017be0e4e1e6f1a60206ea1a530c17d5869a091928f91462687c764&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZWGNYBI%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T022619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAz1PeDFtyamiuIucyE%2FMQgsqUTkebi3I4kW%2Bp%2FwlJg1AiEAlmMYRrtlnk%2Fy8yOlSNSti2plfF4COrtSZh7xOGjmgPcq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDL5OtsnpcT6%2BiZyYFyrcA0jS05vmiKls09pUE2JcYDgSe3AWfNq8KXrHL8OhlkyGJLldscXYi0WVu4ziil5IukRMOAaxN%2BPzfy0adoLunSEBcDsbzW4ENPRVBReUvY386NA4gruSWtBriHe2cNarOuxrJeY6QkfDhg4zGpfqJeT3m129fbhBK7mYjMgpCbSi9rKXzRggLZjVgVpZbEB41W7lDyFkeKvyee4njYGtz6yTCXKR8mhtEwQXb%2BfGHPKuIGs6PpkqedJDRdUeXbYSybO%2BPYJuuPUeNZHmw0faX38LebrzYYth7F7Z8Hl%2FWdsT1jiFdzk5c8bS91QUU5MM8CD0wHBLzZNWmRtYzAEnRImM5TbmuMP3i3X7n%2BggLRtBYZO%2FPNpm%2FVKy%2FTXcg3YByb%2BZOqbKIdocZ08lo847BzmvAn0s4Y8sVzPDnkcXQnvyPK%2BK6bmMwcabnlFvywCLc4iK1U85avpD%2Bu4K2Q9i76i%2FStoe%2F0zPHZjGLFTze4gMHz9Cp%2F9J1HhIM09w%2F%2BWcEesLNDDqXOTJEQwIFF%2FwSdD94hgVWHp96DEGGYhNsLlWpLqhc0iD9NHiN0Y8qf7tKuyHlGrlYZr%2BHwowbhe9Ttzf%2BuuttpOHALOPBcN9ks4Py6Si34Zj%2FsXtHZfHMJf46sAGOqUBPOyrA4lyS2KDz7ogc9UcLa7XEXUy3tj43KOnDDhMGDeTZyxYFw7utWNNNJpfKc0wamGrytPX3a4T7jdQRv86eX9ZHaTYG2fHWVJFApFhGm1rW%2BZNm9kHkc5J%2ByJ6jGUKrill5m55PSme6nMfPlpDX%2B5LOASk9B5SIlZBQKcY1MIJwIF5B8AQzO6H7hj4iurZNnfIANKgE4Ev81y%2Bov1%2FeklSTuyi&X-Amz-Signature=766251d83e4f55983de30c6a52356c609335330f95e0d50523baaa7760711d28&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
