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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6S7OYPT%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCMqMJXjIoUAcPnSX4rstnnRTcJS3noikDOF1O4NuC5cgIhAL7PZHJB5pgxfBcqy6PR9cysg%2FCslsTO%2BQ7usVHV0bzxKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxGaeh5ED5Qeitdikq3AOgL69t5tWCb%2BS0gOcnGnjTYIJlTpEx9olQajPvjzQpSsKBNGKzNhr3jMG0t0r9R1qcqJuveh%2Bm4CoIydm6GxlQWV1Tj2ssOPYDDrVlxyFggV3Il%2Bht12p02Zkc2WZk0ENj508Vsu3GYhpiMYSw6cIZW2mkUQXf3ErZPxBE5v0gJ8My2HXFBFKYAs%2F5yiACTW2QTZ19UQ4FDUlgLvcWvNzsTXxidFo99G3m7v%2FAjlvc%2BywzlhLM6ZmxobdvHXMgAH%2FBPLm4eLGi9edlZefuXn7AzPjzf4qrt%2BjeDXdtCEcDdUP5attDuib4NoASLswgL34vvsk0WdxZ5u9ww%2B%2FohhKwtPoEflDsOdf6OhJxCFE7b86tkNQzMz%2FZq0mP5%2FfjQZ5Or60cmp9ruQ1G0EQVR9Ve7Nc7xYc%2F6LMzXILKLenqA0ViackxW%2Bf%2BKsbAxwDayeX8hNeSQK0phlHkD%2BYcO4iKzscm4xcyJjyYjAp7SDO43NO4RzEUJVmY%2FNQSB%2BO%2FOkRciE48BbCTt8MoEUOXOT1fjNXdLkpj00iBQWyvqggZbHGw8RnwfKXRgPoetpcFkDQOrwkiAaIgJUmJo%2FZ0IbCYYVKcVomJHOLwOJSM3lwhmoH2PCNFKcECBEaZyDDgxqXABjqkAVCAbdkOZBwzaBiiqWVX%2FxxS6xkZVw0UsXMyLQNMt6L729CoorHyG7%2BxDX0am57L5QScsvghW67SdPi7BOKNxprbgT9gxdXvHaUGYMfpUAA%2BCQ4Pv3U8%2Fv80Nj9EUK5LMNI4cYl0HBhW011xBWd71ILIYPUJ0roUrXkDGyUhp3bdXgGSvLnXXSbfQdJgi%2BgzOsIxlK%2BwQqbJQpwGNAx3HzDDkG2N&X-Amz-Signature=3c1b89aec85679b71586fdce4cf712a2b04795f40f091b231308685ccb0a6514&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6S7OYPT%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCMqMJXjIoUAcPnSX4rstnnRTcJS3noikDOF1O4NuC5cgIhAL7PZHJB5pgxfBcqy6PR9cysg%2FCslsTO%2BQ7usVHV0bzxKogECPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxxGaeh5ED5Qeitdikq3AOgL69t5tWCb%2BS0gOcnGnjTYIJlTpEx9olQajPvjzQpSsKBNGKzNhr3jMG0t0r9R1qcqJuveh%2Bm4CoIydm6GxlQWV1Tj2ssOPYDDrVlxyFggV3Il%2Bht12p02Zkc2WZk0ENj508Vsu3GYhpiMYSw6cIZW2mkUQXf3ErZPxBE5v0gJ8My2HXFBFKYAs%2F5yiACTW2QTZ19UQ4FDUlgLvcWvNzsTXxidFo99G3m7v%2FAjlvc%2BywzlhLM6ZmxobdvHXMgAH%2FBPLm4eLGi9edlZefuXn7AzPjzf4qrt%2BjeDXdtCEcDdUP5attDuib4NoASLswgL34vvsk0WdxZ5u9ww%2B%2FohhKwtPoEflDsOdf6OhJxCFE7b86tkNQzMz%2FZq0mP5%2FfjQZ5Or60cmp9ruQ1G0EQVR9Ve7Nc7xYc%2F6LMzXILKLenqA0ViackxW%2Bf%2BKsbAxwDayeX8hNeSQK0phlHkD%2BYcO4iKzscm4xcyJjyYjAp7SDO43NO4RzEUJVmY%2FNQSB%2BO%2FOkRciE48BbCTt8MoEUOXOT1fjNXdLkpj00iBQWyvqggZbHGw8RnwfKXRgPoetpcFkDQOrwkiAaIgJUmJo%2FZ0IbCYYVKcVomJHOLwOJSM3lwhmoH2PCNFKcECBEaZyDDgxqXABjqkAVCAbdkOZBwzaBiiqWVX%2FxxS6xkZVw0UsXMyLQNMt6L729CoorHyG7%2BxDX0am57L5QScsvghW67SdPi7BOKNxprbgT9gxdXvHaUGYMfpUAA%2BCQ4Pv3U8%2Fv80Nj9EUK5LMNI4cYl0HBhW011xBWd71ILIYPUJ0roUrXkDGyUhp3bdXgGSvLnXXSbfQdJgi%2BgzOsIxlK%2BwQqbJQpwGNAx3HzDDkG2N&X-Amz-Signature=7eb4a1bc698f7a0974b3330ca715273e89edf3d22a84f1cf50d9c0d9cbde2d4c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
