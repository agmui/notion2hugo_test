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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ6P2MAZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBfodKiL%2F928bpj%2B%2Fsu8k0ugu%2FQ5XcKcjys6rjtlIz%2BAiEA%2B5iQfTkRVbAUHHxg3SfSjzcU%2Fg0Ec81JZmt1bfxY%2FRoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFFYW3aJ4uBY2ox45SrcA9VM8mk8nyQXpKeUfF%2Ffz3TDXrdo2uh1B5cNWzvOuCmia8bNucOdhkAjB5nlO7WWqA4WE5vTvG0mdEhg9ntwtis5rI3vo%2FNdOeuvOlJfHp1tlAS0B53KJ%2BncUMBtetDmPRU1J86wNwTtVZ4R6kVtNc67fGuiccQJwHIxNz%2FjmHJEvfsREWaVNHC7mKEBhJvN7F4tPs6zyRS9ApXmkuoiAkpizmgD8%2F2AKM5%2BdVWfeaPyGQMQakJhnxqoLGbZH42OiE2eTO2WS31kwx8xdXZp1siOUwinglCqZjikcoeK4GArtZRUzJldlvCGxPGnMLaHk3ts6FnlyVX69TmU7QnndFyGUuHlu4rqVfZ4fiwvMrpADyrMkj15DHn5LNPkYpzY%2FswADzfFosJjNyaJx3dlj%2BmRxdzF47g6DRwQ5f5Oljm4EjZETkYqfObgOiUUx3wv94VSGeKP5v6d7wEiyqwAPaJY%2BTNCi0sxFnxyYCBVYpDbsViyBmL66v6O7VAfDacp1s3fvIDK6Cgf7NW4APqnpb0f9%2BckoFqNrdhkHqrsuK0Ygpc1sl1DxcGd1D9NjIr3xLFh%2Fqd7umwVXK4HGjp3PTSXhuB31umXAhxhxYZUV4SzdXejDIxLmV8T%2FH%2BmMIDqmL8GOqUBnUyHxuPQ%2BXxK03eIqdbE7ZHDQOLHkOhJRZ8s1n90NdgM7lDQ9Nt9kqSdYNVTkNuPhOIuDt%2FiAa7WWWF8SockbY6Tyy2k8KFWdSWb9w57KBSF%2F8Dg0SMClxmtS7yfD8s3hDOCH%2B4w9ZxxELc821z%2BnrZFRpbXVfX7jX3iuslmXTxCXuPyFVMyKKHtRfeY%2BtMjcv9Zo6fSRO30j%2FzBfCK6NWGeNVnw&X-Amz-Signature=024d342def176f9a8ec04d7d9d278894552c1162baa7f98f646cd0331c875ed7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ6P2MAZ%2F20250328%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250328T061151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDBfodKiL%2F928bpj%2B%2Fsu8k0ugu%2FQ5XcKcjys6rjtlIz%2BAiEA%2B5iQfTkRVbAUHHxg3SfSjzcU%2Fg0Ec81JZmt1bfxY%2FRoq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDFFYW3aJ4uBY2ox45SrcA9VM8mk8nyQXpKeUfF%2Ffz3TDXrdo2uh1B5cNWzvOuCmia8bNucOdhkAjB5nlO7WWqA4WE5vTvG0mdEhg9ntwtis5rI3vo%2FNdOeuvOlJfHp1tlAS0B53KJ%2BncUMBtetDmPRU1J86wNwTtVZ4R6kVtNc67fGuiccQJwHIxNz%2FjmHJEvfsREWaVNHC7mKEBhJvN7F4tPs6zyRS9ApXmkuoiAkpizmgD8%2F2AKM5%2BdVWfeaPyGQMQakJhnxqoLGbZH42OiE2eTO2WS31kwx8xdXZp1siOUwinglCqZjikcoeK4GArtZRUzJldlvCGxPGnMLaHk3ts6FnlyVX69TmU7QnndFyGUuHlu4rqVfZ4fiwvMrpADyrMkj15DHn5LNPkYpzY%2FswADzfFosJjNyaJx3dlj%2BmRxdzF47g6DRwQ5f5Oljm4EjZETkYqfObgOiUUx3wv94VSGeKP5v6d7wEiyqwAPaJY%2BTNCi0sxFnxyYCBVYpDbsViyBmL66v6O7VAfDacp1s3fvIDK6Cgf7NW4APqnpb0f9%2BckoFqNrdhkHqrsuK0Ygpc1sl1DxcGd1D9NjIr3xLFh%2Fqd7umwVXK4HGjp3PTSXhuB31umXAhxhxYZUV4SzdXejDIxLmV8T%2FH%2BmMIDqmL8GOqUBnUyHxuPQ%2BXxK03eIqdbE7ZHDQOLHkOhJRZ8s1n90NdgM7lDQ9Nt9kqSdYNVTkNuPhOIuDt%2FiAa7WWWF8SockbY6Tyy2k8KFWdSWb9w57KBSF%2F8Dg0SMClxmtS7yfD8s3hDOCH%2B4w9ZxxELc821z%2BnrZFRpbXVfX7jX3iuslmXTxCXuPyFVMyKKHtRfeY%2BtMjcv9Zo6fSRO30j%2FzBfCK6NWGeNVnw&X-Amz-Signature=a69d5ba2ab41c2b8237a43cfb980298b7fd72aee3a6b44e9d2a261f7d2f3018d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
