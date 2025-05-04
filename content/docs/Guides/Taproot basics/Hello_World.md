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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBBB2QH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCID%2FFrhjb2KY6K98yFexVXvVwgOOozb83YeARhIT76cv7AiEAyifwlutrS9jxn6b%2ByjBVYK%2FmqWfqcpaVt4Uj%2F0lwTF8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCPpVlq4Ufp1PVvU7ircA4Nrwwm0Hs5CYVsLcM27N9HEGDfPHJ4RlYzu3W4V4BMmRdMeEQ4YKUzO3qicJZYapNQ7CDMpxU5ZtGCB7%2BcIiVHIOWIkMBnJ46GuG6DPOHFJqySXbkWw3lJ167bnFqpVpS36kwrcLZhXeS9MiSriuR%2BDRv1tnO9Q31Ag%2FUC%2FvnOwn3L%2FkdWdOS4OIQetoMOoNsfvq8KqZRuer3PBqMlf8PfgIXwSLV0otYdwI6PF6rp3ajd4NeQvmLDGfprHCByaG5tLPTr6YaOtO3I%2BXTgygse%2FQMma4Jeg3wABtwAr%2BJNb0AwQIsOTLrouWVpdNP3Vfp7Dv35dSARmIX6tAkPO425yr8ea78DtkgFg4u4lY%2Fd2A4LdUcRDjAuffudQG3huHNqOyj4OloMBG99rDQ4rV78FTNtnhaUNWkr6%2BDRbgKSiaEZU5NwUad7LcuwM%2BNNgvdKSCX%2FKjL9VBsXxQCf69kMI%2BjAZKtza8c%2F%2B%2BcsmIk5D89twwmhBirjlJK933JTKsiI0qQgxJHhCf3mU6B97L6ARhmu0e6b3CN5enjWRk%2FJNuWbTTr14MSZCkQ1We%2FEBCUwV3RZ8FKi28%2FrmYanShoMDQCy2jFt%2FDwh68L%2BfXO%2BVTAf%2ByYsY5DtMSXc4MM6s38AGOqUB1QhE8YBOBsmliHbAPvFLeQskSnXY8hh13VYcV%2FixxdFCdrP%2BrwfxaZxK0OOiqyDUJW45WJsk8WYs1M8IuxMH73Y6PNIVD%2BRupe8DiEDLfsBcMlHDLmWYBBta0YILtOa7KeXJewNy3m0tNc5YTUCy%2Bayt3pyNnxnpOiX223%2B55TtMlbtn5IhYM63RJRBVTf4q2VXZeIvYb76%2Btu%2Fw73gWPUSXIFym&X-Amz-Signature=6ff70f0383d5291ea8c17b8919341d9e318c77d2ddbd9b2f61a0d0cc71d1f474&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TBBB2QH%2F20250504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250504T220723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCID%2FFrhjb2KY6K98yFexVXvVwgOOozb83YeARhIT76cv7AiEAyifwlutrS9jxn6b%2ByjBVYK%2FmqWfqcpaVt4Uj%2F0lwTF8q%2FwMIHhAAGgw2Mzc0MjMxODM4MDUiDCPpVlq4Ufp1PVvU7ircA4Nrwwm0Hs5CYVsLcM27N9HEGDfPHJ4RlYzu3W4V4BMmRdMeEQ4YKUzO3qicJZYapNQ7CDMpxU5ZtGCB7%2BcIiVHIOWIkMBnJ46GuG6DPOHFJqySXbkWw3lJ167bnFqpVpS36kwrcLZhXeS9MiSriuR%2BDRv1tnO9Q31Ag%2FUC%2FvnOwn3L%2FkdWdOS4OIQetoMOoNsfvq8KqZRuer3PBqMlf8PfgIXwSLV0otYdwI6PF6rp3ajd4NeQvmLDGfprHCByaG5tLPTr6YaOtO3I%2BXTgygse%2FQMma4Jeg3wABtwAr%2BJNb0AwQIsOTLrouWVpdNP3Vfp7Dv35dSARmIX6tAkPO425yr8ea78DtkgFg4u4lY%2Fd2A4LdUcRDjAuffudQG3huHNqOyj4OloMBG99rDQ4rV78FTNtnhaUNWkr6%2BDRbgKSiaEZU5NwUad7LcuwM%2BNNgvdKSCX%2FKjL9VBsXxQCf69kMI%2BjAZKtza8c%2F%2B%2BcsmIk5D89twwmhBirjlJK933JTKsiI0qQgxJHhCf3mU6B97L6ARhmu0e6b3CN5enjWRk%2FJNuWbTTr14MSZCkQ1We%2FEBCUwV3RZ8FKi28%2FrmYanShoMDQCy2jFt%2FDwh68L%2BfXO%2BVTAf%2ByYsY5DtMSXc4MM6s38AGOqUB1QhE8YBOBsmliHbAPvFLeQskSnXY8hh13VYcV%2FixxdFCdrP%2BrwfxaZxK0OOiqyDUJW45WJsk8WYs1M8IuxMH73Y6PNIVD%2BRupe8DiEDLfsBcMlHDLmWYBBta0YILtOa7KeXJewNy3m0tNc5YTUCy%2Bayt3pyNnxnpOiX223%2B55TtMlbtn5IhYM63RJRBVTf4q2VXZeIvYb76%2Btu%2Fw73gWPUSXIFym&X-Amz-Signature=6cb1b4ab858e37b5349886be0c17320989c2a210ddfa94d92cf2d8172bb05e89&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
