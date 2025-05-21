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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RCZFBFW%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCoyh9yIN3LmabKFaDWJW%2FPtwkErIa79e8G4H4S7yV5sgIgdJzrsa2V2pt7ZA7prNl%2FE%2F07kIRSwI44asJq%2FrLpWAsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgwxbmyYTFn9LENeyrcA4DV9rjrehsdy7%2BAHuNVXL8yrXs09zFv59Eck3fr3%2B8n677Uj9PoqRtHdmtKVfzQVMOBRQNwxaqZkq%2FTNbof9cJoVrU5Ozu2NTzsY8M2TA9aZjgqOTPkmvpZNtyN%2FvfTLNN0qWqCE%2FdMBDnjhBAZmjpnurNXAFhIhtSFiILpH497RvPT0Z14gYAm0GXaVZPJio3%2B9Zn4wxaB8JQtIJCKQn32WOy%2Bibh0u2A5BIlaU9IsLF87fGzRgRfQdEveIpg9N4hXQyIT66Gl23XLA9X12dRQP%2BmSl1O8C7nyHTVo51ntllccuNtPaItRxxAFad6Sa%2B6ZTKxSGklxZX0fCvko%2FeMmv5KN2mYFJeh96sCtqvGvNnw7z9KpAAL6zalBf7NTdOo8oPxmjx5pw2KbPwlfmoZgqnSSK9l5B7qHmWMf6FaPvvj0zGZPgHv9kJ5ntwnoy6thQBpDjSAgrZogXjEhYsgM3uajS168EmH4QYwtse5gPeCVwJFWPK%2BHwXhLcSDXGsj6vpW3q8SYepSy58TKbJLl%2Fx3lQumWfSM873NmHn03NsxW%2FS1HS1OZnXaRTgz4MCnysU7L2obTJKzhNQHUXVbPkuMyHZ089tJu1yaEm0XJ%2FGn83jpzYt0br2ISMKjwuMEGOqUBqXgfgzEQv0T%2BZJmSj4v6CXtHHpJhoMgsb1ehYL1pnd7dEtCU44YgFBJbrxF6%2FMICGkFgzDO%2BBZGWLH3xPNURR2Y7x6kT8DzH7E4aFb8wr%2F0bGh%2BMHfs3k8OCs1HXLwrI9B%2Bg%2B6KvpN1cGR7Zuin9m9M%2FPLFtSvQ4eMlHzEBgfEnnjTTh5vxJtmTf123H5TNiW%2BfUe1mIwsWJ3xLCAPqBwrh82C4u&X-Amz-Signature=2cd5d54e042c1245eb75304dceaf3199ad7ec0390c7dbc2491648acd8eab2c24&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664RCZFBFW%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJHMEUCIQCoyh9yIN3LmabKFaDWJW%2FPtwkErIa79e8G4H4S7yV5sgIgdJzrsa2V2pt7ZA7prNl%2FE%2F07kIRSwI44asJq%2FrLpWAsqiAQIxv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLgwxbmyYTFn9LENeyrcA4DV9rjrehsdy7%2BAHuNVXL8yrXs09zFv59Eck3fr3%2B8n677Uj9PoqRtHdmtKVfzQVMOBRQNwxaqZkq%2FTNbof9cJoVrU5Ozu2NTzsY8M2TA9aZjgqOTPkmvpZNtyN%2FvfTLNN0qWqCE%2FdMBDnjhBAZmjpnurNXAFhIhtSFiILpH497RvPT0Z14gYAm0GXaVZPJio3%2B9Zn4wxaB8JQtIJCKQn32WOy%2Bibh0u2A5BIlaU9IsLF87fGzRgRfQdEveIpg9N4hXQyIT66Gl23XLA9X12dRQP%2BmSl1O8C7nyHTVo51ntllccuNtPaItRxxAFad6Sa%2B6ZTKxSGklxZX0fCvko%2FeMmv5KN2mYFJeh96sCtqvGvNnw7z9KpAAL6zalBf7NTdOo8oPxmjx5pw2KbPwlfmoZgqnSSK9l5B7qHmWMf6FaPvvj0zGZPgHv9kJ5ntwnoy6thQBpDjSAgrZogXjEhYsgM3uajS168EmH4QYwtse5gPeCVwJFWPK%2BHwXhLcSDXGsj6vpW3q8SYepSy58TKbJLl%2Fx3lQumWfSM873NmHn03NsxW%2FS1HS1OZnXaRTgz4MCnysU7L2obTJKzhNQHUXVbPkuMyHZ089tJu1yaEm0XJ%2FGn83jpzYt0br2ISMKjwuMEGOqUBqXgfgzEQv0T%2BZJmSj4v6CXtHHpJhoMgsb1ehYL1pnd7dEtCU44YgFBJbrxF6%2FMICGkFgzDO%2BBZGWLH3xPNURR2Y7x6kT8DzH7E4aFb8wr%2F0bGh%2BMHfs3k8OCs1HXLwrI9B%2Bg%2B6KvpN1cGR7Zuin9m9M%2FPLFtSvQ4eMlHzEBgfEnnjTTh5vxJtmTf123H5TNiW%2BfUe1mIwsWJ3xLCAPqBwrh82C4u&X-Amz-Signature=8dd348b8934eccaa3b13a2489cfbd7a4d353f574495c98f43d44d268b0ccf14b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
