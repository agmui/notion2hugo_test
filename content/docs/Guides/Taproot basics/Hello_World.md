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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUPIZSGB%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCICh9MXwiFUBIGpJVcu%2Fz51%2B9hZpa4ZJbJT8Nb4es89OnAiBmLJNIHpVJQBiDzWqVIF0vT0ueW2enEOiac4%2BR5tsBeyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUu%2FjvFZR3Z7eiohFKtwDyuLfq230gmPQphhZIwg4FJIS2BvfvdmJaBa7nrgbsPx11H5gV8tW52P8p9yp0gkA0xUTDakYtebhf7CNIrkQORdcPLW12DyzXGZ8OMQHOPtC3tVEpMqzJrS%2FZ5RLWmihetM7fiIr6O7LvUY8t8ufmQb1TiqMi8GoI9aNFG%2FH93lZ0u0dknNxEEdgbyMR4yfEb1lcfF6eFi4yezoA2Bt7J66WOf4oMcLP%2BOgRAHZBZSHQdYIkuH%2Bc8aMo3EJxTFM3DOXZzcDzdGVQdRsrFl78KMcQdcY84uamD626jQLFf8FSInTMWcYsMcb0N9Yuth50On107DSaquILQUIxQc6sLlasHAvwI%2Blc7bhpFChBxJVuK6FitcSMUvjZjxBHaIhoGzL3rg5teyS6P6qY3t5qmC7s2GiPb3rt743aEfH7ZSUHljYL4VLwJ8AKSg5AhnHQe3tKOw34d3eOMrCh%2FGjMbDIWiP4ROxDnocgYA53LrHUbl1Y8ztNNkuvkjd7bG6ueMxdVTH%2Bjrbr9LUQ1aROh2T4wQsIOj8INeJz8fL3YINK3%2FdeDZI1joW3wzMu65SKf1bLW%2BnKc0pb2IJkX3YhfK31IWAuyQUS9RWmKMZshxcPkKVoe6hwJGSCJrpQwptf3vgY6pgFFLHihWA84HLbcgSRmG1i4qEOifLZO80NsDf8fCPCHfJbe1AkhI5yrtGIJwVVmqrXGxbWiU532140ZjyTBkEMCvng2b%2FBN9TaNBUh67k0E9DVEsY30H8o5dulU%2BzuyimngcAVaEqIhu%2FCd7ap%2FxMWNN%2FhP%2B2FJ8%2BIZdjEwaV0QF8cTSBl%2Bo1rCA4TVZSsJBO1nla6JbVnlxbjc3ARNjTHHYUs0N30I&X-Amz-Signature=2136afc97ffc9ca8f07a81cd6448d59caadb4b47dce9aeeb5c17d3238763ca0c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WUPIZSGB%2F20250321%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250321T230734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCICh9MXwiFUBIGpJVcu%2Fz51%2B9hZpa4ZJbJT8Nb4es89OnAiBmLJNIHpVJQBiDzWqVIF0vT0ueW2enEOiac4%2BR5tsBeyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMUu%2FjvFZR3Z7eiohFKtwDyuLfq230gmPQphhZIwg4FJIS2BvfvdmJaBa7nrgbsPx11H5gV8tW52P8p9yp0gkA0xUTDakYtebhf7CNIrkQORdcPLW12DyzXGZ8OMQHOPtC3tVEpMqzJrS%2FZ5RLWmihetM7fiIr6O7LvUY8t8ufmQb1TiqMi8GoI9aNFG%2FH93lZ0u0dknNxEEdgbyMR4yfEb1lcfF6eFi4yezoA2Bt7J66WOf4oMcLP%2BOgRAHZBZSHQdYIkuH%2Bc8aMo3EJxTFM3DOXZzcDzdGVQdRsrFl78KMcQdcY84uamD626jQLFf8FSInTMWcYsMcb0N9Yuth50On107DSaquILQUIxQc6sLlasHAvwI%2Blc7bhpFChBxJVuK6FitcSMUvjZjxBHaIhoGzL3rg5teyS6P6qY3t5qmC7s2GiPb3rt743aEfH7ZSUHljYL4VLwJ8AKSg5AhnHQe3tKOw34d3eOMrCh%2FGjMbDIWiP4ROxDnocgYA53LrHUbl1Y8ztNNkuvkjd7bG6ueMxdVTH%2Bjrbr9LUQ1aROh2T4wQsIOj8INeJz8fL3YINK3%2FdeDZI1joW3wzMu65SKf1bLW%2BnKc0pb2IJkX3YhfK31IWAuyQUS9RWmKMZshxcPkKVoe6hwJGSCJrpQwptf3vgY6pgFFLHihWA84HLbcgSRmG1i4qEOifLZO80NsDf8fCPCHfJbe1AkhI5yrtGIJwVVmqrXGxbWiU532140ZjyTBkEMCvng2b%2FBN9TaNBUh67k0E9DVEsY30H8o5dulU%2BzuyimngcAVaEqIhu%2FCd7ap%2FxMWNN%2FhP%2B2FJ8%2BIZdjEwaV0QF8cTSBl%2Bo1rCA4TVZSsJBO1nla6JbVnlxbjc3ARNjTHHYUs0N30I&X-Amz-Signature=eaeec40da6ded9430222bd12f3a1c029ec7d3550a9ec2fa8233d5a7f843af66b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
