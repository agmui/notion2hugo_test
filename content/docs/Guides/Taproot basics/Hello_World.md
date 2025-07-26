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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FT3U6TW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIEtOq%2FRm7DvcBFBSnGe3JiH%2FBEYWj%2BjeWqmFSv6IVnhYAiBhZy8alN43CXzJJF4bt4UAouIgIg%2BvxOub0YrHzR%2FKJir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMYFhVBEL4VJA5UpB%2BKtwD%2FOZIMkWkgbRIf4TtOeozorwzAjXxqsQhenMvOQW2GsPosi0i9ZqRK1lqTHZAQISYmipE%2Bq1LFDBQPJ0jFjOMzmnvqzrdrm1QzMmDbTAP3OrjNDrLj0hfBbFep%2BESpJL33sFCRuJGuNHI0zejXELBuW%2Fovgh5CcbF%2BdT7nzyiPudTzwDlNTyIfxBsBHDgOSw8MrtfWchxedwssAj56421fWdx%2FfftugugyDaCULtrbKefYA6zQYj1RutOx3RmInI8ymXn7%2F9c8bAFOV1rbazu4cA77JEv8Clwm6UbBtt1OX5bHpoHlBHTrDvBA5nFIs1w4hOaTXvnV1tr3X9BFGQWb%2FLAh%2FTGAgvP88%2B0WW7UWc0TS6R6sdWvsZp9K0FsnSRKZc77TikFCFTxH1G2xk65AomA0XR%2BUIUpzl5hLRfhBtO951Dka2TcMsOEMI7tK9WsLw%2FvsRNqP6c8pSc%2FdEk4IOSeCI33DEmWbLF7X%2BXMon46uQHAsW4%2F7p9p6JroX0c75xinEg%2FhRHUQYmqN3ChKXA3Qj7KyCl1F3mYDEJa6F4U8EbfNJJqhfwbGvOYiFSxwobGjlFPx3InWIfcTtCIOqGmgCQAqoLs%2F9w4nBaKrqFAknixyrg7fxat%2Bewowu6uSxAY6pgEdbsX358Pk0ulnSdzvlKpC5CPmYGD5UE%2B0eXS6jlIwWViH7KhaJQd8LCEmuFYjhMinhIKi%2BdfKGECegL5VM%2FP4xsPztPWqquD%2BZsV74y0e9vLFwyhOq9oP%2FS54py87VGj7uzKh37eYt6V3PqKMvAjTGGNlmcxtjcfqhu8QKQGMCVZYUuL5gE6LG37WibSj7z9FRaquXDk7CA4xcica23XI9MqTJMOi&X-Amz-Signature=3ae284b0869582e564e11b6ff30e114aea26c7e56e332d3d34c3b5f85e6632b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FT3U6TW%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T110725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJGMEQCIEtOq%2FRm7DvcBFBSnGe3JiH%2FBEYWj%2BjeWqmFSv6IVnhYAiBhZy8alN43CXzJJF4bt4UAouIgIg%2BvxOub0YrHzR%2FKJir%2FAwhaEAAaDDYzNzQyMzE4MzgwNSIMYFhVBEL4VJA5UpB%2BKtwD%2FOZIMkWkgbRIf4TtOeozorwzAjXxqsQhenMvOQW2GsPosi0i9ZqRK1lqTHZAQISYmipE%2Bq1LFDBQPJ0jFjOMzmnvqzrdrm1QzMmDbTAP3OrjNDrLj0hfBbFep%2BESpJL33sFCRuJGuNHI0zejXELBuW%2Fovgh5CcbF%2BdT7nzyiPudTzwDlNTyIfxBsBHDgOSw8MrtfWchxedwssAj56421fWdx%2FfftugugyDaCULtrbKefYA6zQYj1RutOx3RmInI8ymXn7%2F9c8bAFOV1rbazu4cA77JEv8Clwm6UbBtt1OX5bHpoHlBHTrDvBA5nFIs1w4hOaTXvnV1tr3X9BFGQWb%2FLAh%2FTGAgvP88%2B0WW7UWc0TS6R6sdWvsZp9K0FsnSRKZc77TikFCFTxH1G2xk65AomA0XR%2BUIUpzl5hLRfhBtO951Dka2TcMsOEMI7tK9WsLw%2FvsRNqP6c8pSc%2FdEk4IOSeCI33DEmWbLF7X%2BXMon46uQHAsW4%2F7p9p6JroX0c75xinEg%2FhRHUQYmqN3ChKXA3Qj7KyCl1F3mYDEJa6F4U8EbfNJJqhfwbGvOYiFSxwobGjlFPx3InWIfcTtCIOqGmgCQAqoLs%2F9w4nBaKrqFAknixyrg7fxat%2Bewowu6uSxAY6pgEdbsX358Pk0ulnSdzvlKpC5CPmYGD5UE%2B0eXS6jlIwWViH7KhaJQd8LCEmuFYjhMinhIKi%2BdfKGECegL5VM%2FP4xsPztPWqquD%2BZsV74y0e9vLFwyhOq9oP%2FS54py87VGj7uzKh37eYt6V3PqKMvAjTGGNlmcxtjcfqhu8QKQGMCVZYUuL5gE6LG37WibSj7z9FRaquXDk7CA4xcica23XI9MqTJMOi&X-Amz-Signature=d82b011c90f6472717343fc2e52937c379bf7806e13ac5ba16ec9747eb38f300&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
