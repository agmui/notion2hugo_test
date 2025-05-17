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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCB35UO5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFKjdnWTioq1ZcB9lJxGC2Po%2B0RyOGJrvU%2BwGnB9V98AiBcgaPLKv0EoLzzP7%2FjO0jm5nsMubDd4EzqcoyyZLJ%2FWir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMSoJxEKAnlwLR1VlVKtwDlD7r6aWC1R6YPkQHh%2F%2BVJUKv7LRBQ33%2BfSW8bQ%2FROIoO%2B1B4%2BUtVaUimNMktHI%2Fd7fcEhUJhp8eNijmUWBvhb9tiBppABb6NTqdidbsIbI36nxbkxRBIohMl7Ihscjap5QtbBEYSFGCXkMfop6tR4JuMLuLCAfX1fLXlc28NYF%2FtTxbFUQQNtBQMtu%2BBAFnDYELr4FgwtBLTpYnj6cnNi0WxZP%2FflEE%2BV2KF5BLpgU8h4LXm52lCWh%2FEC01l3zM6jPSJaaLKN71uzso5nEWQAmvyp7Rbor5URmU88PJR7oZk41nWi3%2BE3YV0TXTSc3XyxxyK%2FbBOuAnK1S2asqVTn2zf2SLgBgi%2BvFyQxyGpvxLIMfU9OBsO2ACu45PkYtWUBZDUMSckewHYvBlQ6keiZrri2Q8Ue75yMpgjJ1dua44Wh9Gi3zJ8ce%2BQML7ahixfiNrAUebxmXtJ435M1%2BPylDLrGwAfmzhwngNxrfjKzyU9ohWb6jUIVnv0j69azsB50xGdnZW5xmZkY8uibLXU3Ty1jCOYy3VkZbpei1LkHnUmNlnWsuI7jjwvnxntMaIfEubljaLYsZzfa5X%2B%2BG3lonhteDjxrnOhBbuCuBMksb%2BSqPrDd51JsHSad9Ew0bWiwQY6pgEh%2BPbzyZzGN1XFeNBzAcJiQjOCP7NbCTlZSPnsP86HaCdkDEnEeFze1SADuPvynK%2FNqBLxD%2FZEQ0eLxjV9vOJfEv1n0MhW8Ov9prVh0LlQHFgjxgDQK3Luos1tLdH2mdWnwIknym5iTw%2BlEvczY6Ah6x4MX1PJ3ulG98hZSh3fzfNHD%2BjK%2B4kNKeAlQX8U0d2Xdv%2FdKOJBmOfttY2JUkstyumUedyO&X-Amz-Signature=088955091bb8bdad3c7aa5ecc2a019deeca66eb23c389531c34701328bee5ec5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCB35UO5%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T181024Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFKjdnWTioq1ZcB9lJxGC2Po%2B0RyOGJrvU%2BwGnB9V98AiBcgaPLKv0EoLzzP7%2FjO0jm5nsMubDd4EzqcoyyZLJ%2FWir%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMSoJxEKAnlwLR1VlVKtwDlD7r6aWC1R6YPkQHh%2F%2BVJUKv7LRBQ33%2BfSW8bQ%2FROIoO%2B1B4%2BUtVaUimNMktHI%2Fd7fcEhUJhp8eNijmUWBvhb9tiBppABb6NTqdidbsIbI36nxbkxRBIohMl7Ihscjap5QtbBEYSFGCXkMfop6tR4JuMLuLCAfX1fLXlc28NYF%2FtTxbFUQQNtBQMtu%2BBAFnDYELr4FgwtBLTpYnj6cnNi0WxZP%2FflEE%2BV2KF5BLpgU8h4LXm52lCWh%2FEC01l3zM6jPSJaaLKN71uzso5nEWQAmvyp7Rbor5URmU88PJR7oZk41nWi3%2BE3YV0TXTSc3XyxxyK%2FbBOuAnK1S2asqVTn2zf2SLgBgi%2BvFyQxyGpvxLIMfU9OBsO2ACu45PkYtWUBZDUMSckewHYvBlQ6keiZrri2Q8Ue75yMpgjJ1dua44Wh9Gi3zJ8ce%2BQML7ahixfiNrAUebxmXtJ435M1%2BPylDLrGwAfmzhwngNxrfjKzyU9ohWb6jUIVnv0j69azsB50xGdnZW5xmZkY8uibLXU3Ty1jCOYy3VkZbpei1LkHnUmNlnWsuI7jjwvnxntMaIfEubljaLYsZzfa5X%2B%2BG3lonhteDjxrnOhBbuCuBMksb%2BSqPrDd51JsHSad9Ew0bWiwQY6pgEh%2BPbzyZzGN1XFeNBzAcJiQjOCP7NbCTlZSPnsP86HaCdkDEnEeFze1SADuPvynK%2FNqBLxD%2FZEQ0eLxjV9vOJfEv1n0MhW8Ov9prVh0LlQHFgjxgDQK3Luos1tLdH2mdWnwIknym5iTw%2BlEvczY6Ah6x4MX1PJ3ulG98hZSh3fzfNHD%2BjK%2B4kNKeAlQX8U0d2Xdv%2FdKOJBmOfttY2JUkstyumUedyO&X-Amz-Signature=54128a31a3bd151439b6d125c46bb34ed36a7acfb0f1a28c132df63bff6b542b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
