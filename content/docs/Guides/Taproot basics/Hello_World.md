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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NZUCCEW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9tjB7dCC7vZQjYfxmEZI4GvW2Kja4Jf7mEClMgG17RwIhAOjrNn2pmToOoPKHefkuE51aSBP3qxl0Oli%2Fuyv8ZjUdKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8cnMJ7vYeYW76Vd0q3AMhQndCGMXy%2BGYrJDpjetxIYtFecLzaCQbHu9NZ7HP0ltufJsz06%2Bg3Fs0XdE8%2BHuBQ67392T7Wr2tmXj4cZPkex0WwrW%2FcAHzkvAV%2FUgDry2iRXMXceMme92nhe8Cd3lCH8n0mMU1UKLpU%2BnGQvgUHgCNc%2FzvHdbRgXiAoOlZQPEgffVqt9nbiG0Aa2KmrrwXNoGjHVAAqsQQeCMC8dKnRhx1FQm%2BD7ixv9dJTjEMjXZjY324RiGvnwiKMIH57KOZ9bHLB0RN8tslbQWKAd36pfv2%2Fiqwr6ZrR%2BNmtLevLvsV5wA6%2BmPcJov9X1hO3FEpK4eg4gxcy%2B3sg3lI3DENlodegJhEZL0wWIElE8u2o8ftoi0npxSqqgS0Ua0GJmqxigRLhbS2aLJLh%2FLHNMzVa5HgRJ0tVGT%2FXdYAIa5lHsygwESMwmFa0S0Pt3DqU2yufLyql4HHJONy5kxHf8DceIA5wY4zfHoxj66A747vGkEsGSJXPiP3Zws%2BmisMYckNd0lzt6DZ7usUFMI%2FxM26P14%2B5mzWfgC5J29uI8d9IBJbew8VQWmNXD7CN25a%2FYBiMj1%2FTxedjhu%2ByVTtRF9jCPElSShdpbJsH%2FAfaxTfmZhtFQYz7Ttw6OZf88DCLsfLDBjqkAT7lHKj3GJI9b1zxePHv4hv77oFOeCuD02aj6U7yZpjUd3bXYQXxnoiqEnIXrGTC36c7ecQPLC%2FJzUR5ctJUwAe8kxgyyoGSXBqPra0ikGkTXjrtLjd0Gb8%2FAefBeJvI2LC4wsmJkr9EFJjoj1OBQ8wN3gtNQfpjsUIBPlRk%2BpZxmenJ%2FOOkw1cCoswBCY5ZUvSGofmz0RlHlrRsF%2FmxRASEKZPP&X-Amz-Signature=00e1c88a2b376299ef568b265cde69fd3240499c769160fe7521133cbf5e6205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NZUCCEW%2F20250720%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250720T110722Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC9tjB7dCC7vZQjYfxmEZI4GvW2Kja4Jf7mEClMgG17RwIhAOjrNn2pmToOoPKHefkuE51aSBP3qxl0Oli%2Fuyv8ZjUdKogECLj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx8cnMJ7vYeYW76Vd0q3AMhQndCGMXy%2BGYrJDpjetxIYtFecLzaCQbHu9NZ7HP0ltufJsz06%2Bg3Fs0XdE8%2BHuBQ67392T7Wr2tmXj4cZPkex0WwrW%2FcAHzkvAV%2FUgDry2iRXMXceMme92nhe8Cd3lCH8n0mMU1UKLpU%2BnGQvgUHgCNc%2FzvHdbRgXiAoOlZQPEgffVqt9nbiG0Aa2KmrrwXNoGjHVAAqsQQeCMC8dKnRhx1FQm%2BD7ixv9dJTjEMjXZjY324RiGvnwiKMIH57KOZ9bHLB0RN8tslbQWKAd36pfv2%2Fiqwr6ZrR%2BNmtLevLvsV5wA6%2BmPcJov9X1hO3FEpK4eg4gxcy%2B3sg3lI3DENlodegJhEZL0wWIElE8u2o8ftoi0npxSqqgS0Ua0GJmqxigRLhbS2aLJLh%2FLHNMzVa5HgRJ0tVGT%2FXdYAIa5lHsygwESMwmFa0S0Pt3DqU2yufLyql4HHJONy5kxHf8DceIA5wY4zfHoxj66A747vGkEsGSJXPiP3Zws%2BmisMYckNd0lzt6DZ7usUFMI%2FxM26P14%2B5mzWfgC5J29uI8d9IBJbew8VQWmNXD7CN25a%2FYBiMj1%2FTxedjhu%2ByVTtRF9jCPElSShdpbJsH%2FAfaxTfmZhtFQYz7Ttw6OZf88DCLsfLDBjqkAT7lHKj3GJI9b1zxePHv4hv77oFOeCuD02aj6U7yZpjUd3bXYQXxnoiqEnIXrGTC36c7ecQPLC%2FJzUR5ctJUwAe8kxgyyoGSXBqPra0ikGkTXjrtLjd0Gb8%2FAefBeJvI2LC4wsmJkr9EFJjoj1OBQ8wN3gtNQfpjsUIBPlRk%2BpZxmenJ%2FOOkw1cCoswBCY5ZUvSGofmz0RlHlrRsF%2FmxRASEKZPP&X-Amz-Signature=fe0fdc25f04d05fc536e2e89f6e2165db10fb11de35255554bf1b42d8e92130b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
