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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA5BO2BK%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCmNQs0Mvofgk0B0cf6jzjFFAKcp7qaB74bZCWLL5R0HQIgJEI6kAvDOCJxWTJFHcwY%2BddX0FAp9tS6X9KdC5sk3Zoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFeQne70lmGMLOJ1RSrcA1dI0XYJfBO7s46RqqaziB3McpQ87B9oOaR%2B1aQFDpvkQUHELjdWFSEZ%2FnnuT%2F5EYlD13VjPue7p6MsiPx9kT7xbId9D%2BZOYvxmjKpnhyyjRJimdmCS30gxF7iG81WI3KcG6l3IPira1ubK7b7Bm9GGLZwE%2BQWIuHO1IHTuY0opg4OAMpLr4bVvD%2FWz3vuT1Scy3Dk7KRfXcHqNL6I8BdJ8NKLO5DpxMzGGR09lXkTgM6oKWaNiKmzjPsToVzkz4XFtQfGdQPtl4iV5SxvNgUvwlqzsaESGrfXqcZS3PnS2bkaSuovL2GmXwxmKS2t1coGrezIjJoMhd%2BgAy1hFL5d7mkvAto39XZarbn0BCmmxKMZY3Cmg7WFIbgSi5okAj23PSn5OzQcnKWDqqz%2F4TuKMFQTeipmhO2u57sJAtgUsytz%2Fe%2F%2Fd%2BUHpG6msl6rPXG2xk3Vpm6qfyuhlD0OXHFCl1OL8mV6eB%2FHRspEwFL65D5SwtCHgw2GylB1bnWbbYZI%2FnBl7fyxPxMAcrEEyBNkqKPxAtGSTCF%2BIdiXv3l%2B9%2FWOGvCYaLXRqGUzG2cYjvGWXeEZ40CcmKhtMl4xoXrJXAnl0%2Bwf3cfwNa8xHZxXzRzFGmWiHylQZKlZH8MI2qxb0GOqUBMw3zscK%2FLOXmkUQIqsQHkJ%2B6nVgb1VlBH%2BpkFgvtoURQscQcHiEkRc7nNBlMjSNaklpJH1KcsM29E7bjDrveKZasGGKi3wkGo%2BBIkXFaJ4nEdYFfGtRMW0CSGZQscW8%2BoGSh2Qx7dWWusTxsD1A4gvTnZTVR1ISvUsTh3daNf8qpSX%2FkZJqGAsASSHxR5iS22aBgQBJ4F5gUMphhlu6%2BmSJXuZ8s&X-Amz-Signature=0725623c3df737ff1eec9d2a41cd13da43b2b0d41a0d0788225c42eabba9211b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XA5BO2BK%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T031526Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJHMEUCIQCmNQs0Mvofgk0B0cf6jzjFFAKcp7qaB74bZCWLL5R0HQIgJEI6kAvDOCJxWTJFHcwY%2BddX0FAp9tS6X9KdC5sk3Zoq%2FwMIVBAAGgw2Mzc0MjMxODM4MDUiDFeQne70lmGMLOJ1RSrcA1dI0XYJfBO7s46RqqaziB3McpQ87B9oOaR%2B1aQFDpvkQUHELjdWFSEZ%2FnnuT%2F5EYlD13VjPue7p6MsiPx9kT7xbId9D%2BZOYvxmjKpnhyyjRJimdmCS30gxF7iG81WI3KcG6l3IPira1ubK7b7Bm9GGLZwE%2BQWIuHO1IHTuY0opg4OAMpLr4bVvD%2FWz3vuT1Scy3Dk7KRfXcHqNL6I8BdJ8NKLO5DpxMzGGR09lXkTgM6oKWaNiKmzjPsToVzkz4XFtQfGdQPtl4iV5SxvNgUvwlqzsaESGrfXqcZS3PnS2bkaSuovL2GmXwxmKS2t1coGrezIjJoMhd%2BgAy1hFL5d7mkvAto39XZarbn0BCmmxKMZY3Cmg7WFIbgSi5okAj23PSn5OzQcnKWDqqz%2F4TuKMFQTeipmhO2u57sJAtgUsytz%2Fe%2F%2Fd%2BUHpG6msl6rPXG2xk3Vpm6qfyuhlD0OXHFCl1OL8mV6eB%2FHRspEwFL65D5SwtCHgw2GylB1bnWbbYZI%2FnBl7fyxPxMAcrEEyBNkqKPxAtGSTCF%2BIdiXv3l%2B9%2FWOGvCYaLXRqGUzG2cYjvGWXeEZ40CcmKhtMl4xoXrJXAnl0%2Bwf3cfwNa8xHZxXzRzFGmWiHylQZKlZH8MI2qxb0GOqUBMw3zscK%2FLOXmkUQIqsQHkJ%2B6nVgb1VlBH%2BpkFgvtoURQscQcHiEkRc7nNBlMjSNaklpJH1KcsM29E7bjDrveKZasGGKi3wkGo%2BBIkXFaJ4nEdYFfGtRMW0CSGZQscW8%2BoGSh2Qx7dWWusTxsD1A4gvTnZTVR1ISvUsTh3daNf8qpSX%2FkZJqGAsASSHxR5iS22aBgQBJ4F5gUMphhlu6%2BmSJXuZ8s&X-Amz-Signature=79c20ad566a081fb290308a90fc4499a5cf81e1a0b98781f47d941af09959699&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
