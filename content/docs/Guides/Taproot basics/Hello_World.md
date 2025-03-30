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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MXDDKCN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCpvH3NlLjF3FNEEUJL5pIUCGRB2HyoBTbDmCNaZ8qGkAIgGk4N0aW18jcsSwfTjsPMYAYyUTm%2BeKizaA9egxlGbCMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBY7SubflV4LGA3XYyrcA3EyVjVQz4axeadogjUc0WMeSAvW%2Byo6OlFQjFxBUy9QyIBSy7S93axlhCYoY72%2FeTSnHDh23UzMIovqqKiFsu%2BOTC1VpjOE3VaI8FRF%2Feqvs6RKb2Icf%2FwMCiLvicqFa4rFDP1cGrTgy3VCzJx4s7AxAxbZy6Mi3tOmAh8AelN7s7p9NpevvQFJmVgZDDh3vdTIzZIIzj%2B8%2FYfSzWKHaQZ5yn17gDfRlTCYJOOcNOR3uozYoE9Gx3iMleFov71JpiJ9o4t7tJOPkFjnqArkTUwo5CERgvSZFhwnXjpppEvWzGGFTUqntmplJToZO4dO9hAMyQe3lTQafwzQkxzLZdmw7p33gZlESweZy1df4qOyZNy3tPthhIPrweG6FH0pFoBYX3NvDRzz%2BOVABTjYiG9DJ4D7poSnUWOvd%2B5Ze0oDfSCcATQ%2ByqdLqhM%2B4U02Ac9iI8MYrZ7yyNBjd96x1Lcuo5BS5TJ2DTMCQZ%2BrK7BDUYLVXWglk7Sv28FJqc4gNF7SHMY%2F4LT0g3eLBIKbk7csU5nJN2YV%2B3l%2BMUY0wsWQf30WPVGc2KvWTcmkCE2GFezvDdGY6GfKF%2FpEKQbjaiTy%2FHGrNxNG89NIZYy%2B073AI4qC%2FzOG9HJ0fRE4MJzqor8GOqUB8QuiDK5wu6kcrW0fP9ZaH%2FmPIMjYmHk8XzBYPTwK06kdF%2Bm2zOCiEj3c0SzGdxVraxUYu2JzF1RKJImAkPY6%2B%2FaNZrvvMcRCmCIqEROmbILmWN8o6sHCguY6dPY9dJa9VaDV82LsiGScvKPQMZ0mphYv5GjacG11eOpeI1ZWoDi020j14QTylgN752%2Bx8oCWRgxcCIAQBhFD9JDb%2FBpGiWReMwnZ&X-Amz-Signature=78494ea878b1ee4492b027d60e9bb2cc5e53e9d63314218d60397528b2a81635&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MXDDKCN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T032942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIQCpvH3NlLjF3FNEEUJL5pIUCGRB2HyoBTbDmCNaZ8qGkAIgGk4N0aW18jcsSwfTjsPMYAYyUTm%2BeKizaA9egxlGbCMqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBY7SubflV4LGA3XYyrcA3EyVjVQz4axeadogjUc0WMeSAvW%2Byo6OlFQjFxBUy9QyIBSy7S93axlhCYoY72%2FeTSnHDh23UzMIovqqKiFsu%2BOTC1VpjOE3VaI8FRF%2Feqvs6RKb2Icf%2FwMCiLvicqFa4rFDP1cGrTgy3VCzJx4s7AxAxbZy6Mi3tOmAh8AelN7s7p9NpevvQFJmVgZDDh3vdTIzZIIzj%2B8%2FYfSzWKHaQZ5yn17gDfRlTCYJOOcNOR3uozYoE9Gx3iMleFov71JpiJ9o4t7tJOPkFjnqArkTUwo5CERgvSZFhwnXjpppEvWzGGFTUqntmplJToZO4dO9hAMyQe3lTQafwzQkxzLZdmw7p33gZlESweZy1df4qOyZNy3tPthhIPrweG6FH0pFoBYX3NvDRzz%2BOVABTjYiG9DJ4D7poSnUWOvd%2B5Ze0oDfSCcATQ%2ByqdLqhM%2B4U02Ac9iI8MYrZ7yyNBjd96x1Lcuo5BS5TJ2DTMCQZ%2BrK7BDUYLVXWglk7Sv28FJqc4gNF7SHMY%2F4LT0g3eLBIKbk7csU5nJN2YV%2B3l%2BMUY0wsWQf30WPVGc2KvWTcmkCE2GFezvDdGY6GfKF%2FpEKQbjaiTy%2FHGrNxNG89NIZYy%2B073AI4qC%2FzOG9HJ0fRE4MJzqor8GOqUB8QuiDK5wu6kcrW0fP9ZaH%2FmPIMjYmHk8XzBYPTwK06kdF%2Bm2zOCiEj3c0SzGdxVraxUYu2JzF1RKJImAkPY6%2B%2FaNZrvvMcRCmCIqEROmbILmWN8o6sHCguY6dPY9dJa9VaDV82LsiGScvKPQMZ0mphYv5GjacG11eOpeI1ZWoDi020j14QTylgN752%2Bx8oCWRgxcCIAQBhFD9JDb%2FBpGiWReMwnZ&X-Amz-Signature=84d042953f1ac3b5604f6fa56ffae1f2bcc55e74b122a9644c66b4410b8229d4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
