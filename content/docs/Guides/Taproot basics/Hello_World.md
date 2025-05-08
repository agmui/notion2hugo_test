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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BFQHUTI%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0cLDkmCIC9y1xvGYFZVYAKKGzdqzTNggbTlZ1j8pXsAiEAvB5drPz4UUAmntoEJ4w4Ssu%2BbHTwKvkF4LpnA280688q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFRcqc%2Br6xqbIyWz%2FSrcA4yAN3zGubJ0CHAlKzEhYW9aepB%2FjBbl%2FyycMXpo%2BJH2sv9rn4QT4pq0gtXiAzrBY1AaPTsmh7UU3dZODbY4rNbpFaHoFmB%2F5FGTzMj2sMKh9lhgXoISe1eyzxVS8CbVtGPPq%2FlSgvVFgy4LdrIVorYNuVMMBgl5xm58vI8Nw4enLbdpkwiz5krGyAxlOvZGuXs8P0%2BJAW42nIhk0ushu1r3GHtgvXWi4Zrj1Qj%2Bb6IXa%2FkJzcFuuauKaG%2FbMyQZD%2B7UC5sFWsX6jVXyMH6O2XcWm6LiHPxRusldf9dJebteC7nEZzMT2pVn2P%2Bsqt%2B%2Bo4wBoyQmHeQTwBVa8NUhxHVJUcU9YRodMBKhwqsej61f%2BVeXNT7MWQDZzp45fyXHLLn43%2FDMp6ZdmZXli6SKCtthUDYdo7K3u4VFU2Pq30dgmClSw%2FI8kMpuMebCE2UEh3Pv5zNmGwfPDdOLeFQADwgJjvvyPnQiDS%2F3nF6waPGmIPHdrkYjgKuSQiP3eYXDjC0u2cJ41NeLkyoImyTVwPc9FRcnoQoY%2B9sFyNKVBogdylqYZOtzvmWR0LRhaUOgaf82HQ7CzWXuxbfqleG5yBAPEbl21%2BkLC1Lx%2F4vHz3ZzRhfuh93Ok2%2BCS4frMN%2Bx9MAGOqUB5KfqIJ7bQXjmIc1nTHslyv0kKN8ZMfbC4kpT%2BwSpI0WvIvqeX5Lt9BpUDtd%2B3%2BOJfRjoypj%2FdopN8q99%2BbvLt%2FVvZ1NfGk4EnzRM3WOQbvnhyEEZ%2BrH18lkrMDYy4IikE7PsGOj1fnhJkzmWTzJd5JIWTVwBj5NmkviAdaO8iGEMWutjr4WaLcf6emuWW2s2AGWicxhHKKzxBkR7H4MGUSpE8Iud&X-Amz-Signature=7b210f39dfcf56a1c25fc92443a878f6f4a79b7c22f14cbea1e6e6294aacea9f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BFQHUTI%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T210736Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF0cLDkmCIC9y1xvGYFZVYAKKGzdqzTNggbTlZ1j8pXsAiEAvB5drPz4UUAmntoEJ4w4Ssu%2BbHTwKvkF4LpnA280688q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFRcqc%2Br6xqbIyWz%2FSrcA4yAN3zGubJ0CHAlKzEhYW9aepB%2FjBbl%2FyycMXpo%2BJH2sv9rn4QT4pq0gtXiAzrBY1AaPTsmh7UU3dZODbY4rNbpFaHoFmB%2F5FGTzMj2sMKh9lhgXoISe1eyzxVS8CbVtGPPq%2FlSgvVFgy4LdrIVorYNuVMMBgl5xm58vI8Nw4enLbdpkwiz5krGyAxlOvZGuXs8P0%2BJAW42nIhk0ushu1r3GHtgvXWi4Zrj1Qj%2Bb6IXa%2FkJzcFuuauKaG%2FbMyQZD%2B7UC5sFWsX6jVXyMH6O2XcWm6LiHPxRusldf9dJebteC7nEZzMT2pVn2P%2Bsqt%2B%2Bo4wBoyQmHeQTwBVa8NUhxHVJUcU9YRodMBKhwqsej61f%2BVeXNT7MWQDZzp45fyXHLLn43%2FDMp6ZdmZXli6SKCtthUDYdo7K3u4VFU2Pq30dgmClSw%2FI8kMpuMebCE2UEh3Pv5zNmGwfPDdOLeFQADwgJjvvyPnQiDS%2F3nF6waPGmIPHdrkYjgKuSQiP3eYXDjC0u2cJ41NeLkyoImyTVwPc9FRcnoQoY%2B9sFyNKVBogdylqYZOtzvmWR0LRhaUOgaf82HQ7CzWXuxbfqleG5yBAPEbl21%2BkLC1Lx%2F4vHz3ZzRhfuh93Ok2%2BCS4frMN%2Bx9MAGOqUB5KfqIJ7bQXjmIc1nTHslyv0kKN8ZMfbC4kpT%2BwSpI0WvIvqeX5Lt9BpUDtd%2B3%2BOJfRjoypj%2FdopN8q99%2BbvLt%2FVvZ1NfGk4EnzRM3WOQbvnhyEEZ%2BrH18lkrMDYy4IikE7PsGOj1fnhJkzmWTzJd5JIWTVwBj5NmkviAdaO8iGEMWutjr4WaLcf6emuWW2s2AGWicxhHKKzxBkR7H4MGUSpE8Iud&X-Amz-Signature=01be623f63cff263e901a97ab9bd8a29face53e8ba3b63935fabb841e4d12a80&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
