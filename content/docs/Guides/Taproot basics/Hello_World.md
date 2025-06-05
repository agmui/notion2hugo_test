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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPKB3N7H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDzomIb0KoJAE6OAN8dOPM8SPip%2FiXZL4ZFOh4qnZZkXAiEAq23aC0gnI6FI8Q7a8sHcBezucCbEprmffWYWCZOaeHQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDG%2BPMCOstHmKpuUjMSrcAxGkYvb7wB3Dn%2Fc2nw2yzLh%2FJr4oVJwg%2B0udadarc9nuXM%2BzGYirCPgMItZLVHIMC%2BbenSlqRUTv8DifawtDrkUMCAVRcJF2Ck9Z7unZT38RisXnVT20hRpomroPXR4IgY9DXfy3owJtfi1kQNkvxMLzPGCN2F3bbQrNyBod5ddLugVPlKLfbmyVnS%2Bzfs3ytXEsZ6flm5iA6DLrZDSsWVRNZqWEbX80bDqOwNXh%2BqCyssidg1u2RseSa43ntGmc1mmt%2FdqnHWWulbr1NyzR0iWNpMJVxHCIZ1lG3mh6NQfjuispQlTFcJu0FpOgRn4ZbpsHM46sLq8BYyCrL6xsbwAWACwtgowwc0Mz7JkjVcbm8dHn8F1bn8EhBG3SnJN9iEmFZnaGTxw3%2BwXg66ceNfY04a7f1ScthZALXGQ%2BSy232tGOZOgAVDb0C4LnBBKkCKd4M3KGOXJRi0uzixhhNUJgrFJ5pdZpgErEErfoeNQaAtOAxNHTbPENHmdTGIaeD8TPK83v6rgicEGqc8iYV0LnAmSOkx61OEDYBZYfd%2FHQVIvnQrGEUamxOE4BU34V8v3FnG0mmkmllNjvQowcr14BLFY7ji8HF6BRj4nw%2F4h3KnU2Pd79JWqrU1QHMJaNhsIGOqUBLG4PJRumIJvqC63R9Ha9DAylLMhwHRgsukA5k2IU8KiNdKjX%2FGjk24F%2B8XIqo1V4XzMONy3HsbpyXJ9nas9bdsUDr0MIVC2bJEbNaDrylypCV17erkws2LSp7NNUdrmubTfAe5RZCb64GrqKRM3EwTvLi9zn7U0pvt3gP8eW7CuXQVx4CEtsOna1Iji2zvjIKVJLxAVwB8df7uYDxt91kUxOaqUQ&X-Amz-Signature=660d14616483f7815cd3c6681c1b1bd20a80babad6086574f7b3e3465816d0b7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UPKB3N7H%2F20250605%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250605T121633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJHMEUCIDzomIb0KoJAE6OAN8dOPM8SPip%2FiXZL4ZFOh4qnZZkXAiEAq23aC0gnI6FI8Q7a8sHcBezucCbEprmffWYWCZOaeHQq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDG%2BPMCOstHmKpuUjMSrcAxGkYvb7wB3Dn%2Fc2nw2yzLh%2FJr4oVJwg%2B0udadarc9nuXM%2BzGYirCPgMItZLVHIMC%2BbenSlqRUTv8DifawtDrkUMCAVRcJF2Ck9Z7unZT38RisXnVT20hRpomroPXR4IgY9DXfy3owJtfi1kQNkvxMLzPGCN2F3bbQrNyBod5ddLugVPlKLfbmyVnS%2Bzfs3ytXEsZ6flm5iA6DLrZDSsWVRNZqWEbX80bDqOwNXh%2BqCyssidg1u2RseSa43ntGmc1mmt%2FdqnHWWulbr1NyzR0iWNpMJVxHCIZ1lG3mh6NQfjuispQlTFcJu0FpOgRn4ZbpsHM46sLq8BYyCrL6xsbwAWACwtgowwc0Mz7JkjVcbm8dHn8F1bn8EhBG3SnJN9iEmFZnaGTxw3%2BwXg66ceNfY04a7f1ScthZALXGQ%2BSy232tGOZOgAVDb0C4LnBBKkCKd4M3KGOXJRi0uzixhhNUJgrFJ5pdZpgErEErfoeNQaAtOAxNHTbPENHmdTGIaeD8TPK83v6rgicEGqc8iYV0LnAmSOkx61OEDYBZYfd%2FHQVIvnQrGEUamxOE4BU34V8v3FnG0mmkmllNjvQowcr14BLFY7ji8HF6BRj4nw%2F4h3KnU2Pd79JWqrU1QHMJaNhsIGOqUBLG4PJRumIJvqC63R9Ha9DAylLMhwHRgsukA5k2IU8KiNdKjX%2FGjk24F%2B8XIqo1V4XzMONy3HsbpyXJ9nas9bdsUDr0MIVC2bJEbNaDrylypCV17erkws2LSp7NNUdrmubTfAe5RZCb64GrqKRM3EwTvLi9zn7U0pvt3gP8eW7CuXQVx4CEtsOna1Iji2zvjIKVJLxAVwB8df7uYDxt91kUxOaqUQ&X-Amz-Signature=b647fb93f9defebb0143514f514b2aa630360c4b0fd385690f6651b15cea5504&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
