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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LKN6PW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIE4ZXHyr4tBEYlOEIIh0fA13znVy1fpE7brlyJ%2BXqaRaAiEA1EZ%2BJJl5xgH0aQuXh4Dx5XP6JkO0j1FDBedjlj4%2FI4UqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9zr9SjYnzB2f6F4CrcA%2FnKylqdMOZUaU9Pm%2BAGDfSIAy%2FexBHYmoK9OAmWyt%2BDLnbtpKz3%2B40EAakFBdm9yocJEsA0CNLGHGTMoXy%2FqSfcex3vu8lJH1rOq%2Fd%2FSiMlwdDMVUZQL3JMR8yCEGoa6mh93k0PAxNLfocgNFYL3ST94WT1%2BdyrEBj7yLyXsAHiEIwpX%2F3WqnVnkv5%2F5VV%2BrWig3NWWOX243Wuxcva8tRJdM30QKTv6AzcFsP6PAUwF4kfAzd%2BucTUJn1f8vBzJeKzZTNq36KKU7dqE44%2BDpmBJdv4LiaS%2BR%2F30Ii%2BGFDaQrhdrWnifJdzkWlZ6LCwdHsuQpOX5TjIGXk2zh4c%2B%2Fm99oaSu1XgxXtGKeNtp%2B03PcTSTgD%2BoMXyMcjGDktAsR91SvUKOJw9u%2Fcwb1KSaadOC%2BwbRHeRx2%2FmZyBvGU9J4luNqCKTz%2BDuErUTCNmUhDGe5P8RzaU9Yxu%2Bl%2Bjn2AN%2BI6STi3zj0IaWLdIfnuAagzT8kTBKwYOSzfkAjH2SFiDjMvtU6bCWAeoeyqUBvbxqF%2BzYnkRi97r2n5mBAuenypI8Fyn%2Bsb%2BD6QWqzzFLBp58HnUdNNpDWoNhNDYRTLhVS2OsNMWcVnKzxTs%2FMeFHFDztD%2F%2Fj6rqLRht3kMPKFp78GOqUB9f9AHkLPXAyinRsyJ4I%2FzYEgaXQyLTMdLemxyfXHOCS5Nb5UK3XBwry%2BOWhnv9XmSQAJrJSE75G1dmfuwHLKGdM8pYJX4SuNuwtxUfDch%2BuKfKWDrZrE8yjIwYYlwGR37DnVRphsPQ8fI1VLqb7a3bDBbAq%2F7fnvtBtUolj4E74xh9IIwj0H%2B3%2BzM%2BUZiCPMx%2B6d97eGYtOngipA1tRTY6OQ5WGr&X-Amz-Signature=d38081abb49a4aa050a4dfaf1d11f8de0694c52cc5705d36182ecf216c709939&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z4LKN6PW%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T230657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIE4ZXHyr4tBEYlOEIIh0fA13znVy1fpE7brlyJ%2BXqaRaAiEA1EZ%2BJJl5xgH0aQuXh4Dx5XP6JkO0j1FDBedjlj4%2FI4UqiAQIl%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA9zr9SjYnzB2f6F4CrcA%2FnKylqdMOZUaU9Pm%2BAGDfSIAy%2FexBHYmoK9OAmWyt%2BDLnbtpKz3%2B40EAakFBdm9yocJEsA0CNLGHGTMoXy%2FqSfcex3vu8lJH1rOq%2Fd%2FSiMlwdDMVUZQL3JMR8yCEGoa6mh93k0PAxNLfocgNFYL3ST94WT1%2BdyrEBj7yLyXsAHiEIwpX%2F3WqnVnkv5%2F5VV%2BrWig3NWWOX243Wuxcva8tRJdM30QKTv6AzcFsP6PAUwF4kfAzd%2BucTUJn1f8vBzJeKzZTNq36KKU7dqE44%2BDpmBJdv4LiaS%2BR%2F30Ii%2BGFDaQrhdrWnifJdzkWlZ6LCwdHsuQpOX5TjIGXk2zh4c%2B%2Fm99oaSu1XgxXtGKeNtp%2B03PcTSTgD%2BoMXyMcjGDktAsR91SvUKOJw9u%2Fcwb1KSaadOC%2BwbRHeRx2%2FmZyBvGU9J4luNqCKTz%2BDuErUTCNmUhDGe5P8RzaU9Yxu%2Bl%2Bjn2AN%2BI6STi3zj0IaWLdIfnuAagzT8kTBKwYOSzfkAjH2SFiDjMvtU6bCWAeoeyqUBvbxqF%2BzYnkRi97r2n5mBAuenypI8Fyn%2Bsb%2BD6QWqzzFLBp58HnUdNNpDWoNhNDYRTLhVS2OsNMWcVnKzxTs%2FMeFHFDztD%2F%2Fj6rqLRht3kMPKFp78GOqUB9f9AHkLPXAyinRsyJ4I%2FzYEgaXQyLTMdLemxyfXHOCS5Nb5UK3XBwry%2BOWhnv9XmSQAJrJSE75G1dmfuwHLKGdM8pYJX4SuNuwtxUfDch%2BuKfKWDrZrE8yjIwYYlwGR37DnVRphsPQ8fI1VLqb7a3bDBbAq%2F7fnvtBtUolj4E74xh9IIwj0H%2B3%2BzM%2BUZiCPMx%2B6d97eGYtOngipA1tRTY6OQ5WGr&X-Amz-Signature=e95ddce6511d5f090a7bbb766c359dad130794ff6dba9d382327ca1de1e2a0f5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
