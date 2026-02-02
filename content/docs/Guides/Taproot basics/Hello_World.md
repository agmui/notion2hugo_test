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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNLQZ6KS%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIFCR9q0GN9JVn68ri3YdyRMNY85NuGYhJgIY%2BJTQHeZpAiEAgsyU7NW%2BSeY9wTOFFrNi6ypi6l8NpXdB%2FGxgCPlrRSEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3RjSR71Bp1%2BD4wHSrcA%2Bfyy%2FSJfUX%2BLJ1ydkkExVORRrqhNLXd1ZKJ6j0SXkboaZPqYbYNLIKPiF5cFyORQfvp4Lvc0xp%2F6vdp1s9SI78AM7rA7yU6j%2B4K5APDJkLdhGz%2BFF6Zd3Tm0GaZpwVrQR635vfM0wNsmYoC3AFvmElcbnVuCQ0DJLSqPe%2FJCG%2FHrsFDgUCjZrgGLF3NlxTXabCHcZh%2FIcXcOGh%2FzCFpNTEegOSESNLAUPFISrp1c758BvJMfM4wJZ5VIZhhtLx63FXQ4OlcKhCMGJZgA4tCvZv4cTikjElaA8wFzzdVft8wPjus53Kyr5Swe2%2FEOUKy5QaPlXzCons3LsSSaCzBtzB3O2jiqSROaBt%2B5vKUNMYiG9JHyC8HkSTLg2W4PoRVR45pd4vYmsUSGK2%2FiX%2BGJgsgLfy1LPKxzYXtmGESJ3PYghEKOEeEerC6TjMrhtn5WtM5XYDJdUBUwaxexab7bsEeBQPsWqzIE7R3doLH3945g3hsedE2aQoErYkTyo0WkVVH6ibVBIRzz6z%2Buvnsgo5qChwo74OkKe4LeER1Pm3xaHM8dan5Qz7jLyP90R7AuIgPdQjnZoG8rsJkfJvibN7HRD3SfzyJWXqY5XwPSHbrrgurdrFd8JI687PQMM2HgMwGOqUBTHlFYb%2FjkUo%2BV2G3vEHFCtOdd4N3Gcmko7Aswf0i35BFqYtrT5ecW8KPDislwlvh6S74EgSB3lS32ia42vsC1ZMGAFM6SE%2BoA8UwGmVMT99ynpj0aYyxWZ3%2B8Je0dHM4TDU2xLyGlwkti0aP5y5aSaLHa%2BCMJeirb1qTWBdrtxz1D%2BOJO4rNtOeU9ZowSolmXyKHQbw1IYEH5OWFuTWYOpW7%2FZZQ&X-Amz-Signature=4ddefb99e7d702f792bb7c340e1f20390fbd8b94c5a7ac63c3891a33ff8815fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNLQZ6KS%2F20260202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260202T021244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBIaCXVzLXdlc3QtMiJHMEUCIFCR9q0GN9JVn68ri3YdyRMNY85NuGYhJgIY%2BJTQHeZpAiEAgsyU7NW%2BSeY9wTOFFrNi6ypi6l8NpXdB%2FGxgCPlrRSEqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG3RjSR71Bp1%2BD4wHSrcA%2Bfyy%2FSJfUX%2BLJ1ydkkExVORRrqhNLXd1ZKJ6j0SXkboaZPqYbYNLIKPiF5cFyORQfvp4Lvc0xp%2F6vdp1s9SI78AM7rA7yU6j%2B4K5APDJkLdhGz%2BFF6Zd3Tm0GaZpwVrQR635vfM0wNsmYoC3AFvmElcbnVuCQ0DJLSqPe%2FJCG%2FHrsFDgUCjZrgGLF3NlxTXabCHcZh%2FIcXcOGh%2FzCFpNTEegOSESNLAUPFISrp1c758BvJMfM4wJZ5VIZhhtLx63FXQ4OlcKhCMGJZgA4tCvZv4cTikjElaA8wFzzdVft8wPjus53Kyr5Swe2%2FEOUKy5QaPlXzCons3LsSSaCzBtzB3O2jiqSROaBt%2B5vKUNMYiG9JHyC8HkSTLg2W4PoRVR45pd4vYmsUSGK2%2FiX%2BGJgsgLfy1LPKxzYXtmGESJ3PYghEKOEeEerC6TjMrhtn5WtM5XYDJdUBUwaxexab7bsEeBQPsWqzIE7R3doLH3945g3hsedE2aQoErYkTyo0WkVVH6ibVBIRzz6z%2Buvnsgo5qChwo74OkKe4LeER1Pm3xaHM8dan5Qz7jLyP90R7AuIgPdQjnZoG8rsJkfJvibN7HRD3SfzyJWXqY5XwPSHbrrgurdrFd8JI687PQMM2HgMwGOqUBTHlFYb%2FjkUo%2BV2G3vEHFCtOdd4N3Gcmko7Aswf0i35BFqYtrT5ecW8KPDislwlvh6S74EgSB3lS32ia42vsC1ZMGAFM6SE%2BoA8UwGmVMT99ynpj0aYyxWZ3%2B8Je0dHM4TDU2xLyGlwkti0aP5y5aSaLHa%2BCMJeirb1qTWBdrtxz1D%2BOJO4rNtOeU9ZowSolmXyKHQbw1IYEH5OWFuTWYOpW7%2FZZQ&X-Amz-Signature=330a6107143b65e279850ac84e0c152bf6e7c67de1562146767a1a41b6689960&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
