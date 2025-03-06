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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MQNO7A%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICB6tdZyuwMfEhk%2FQ2D1LlCst30KjJ%2FLdt1ugq3viu%2BzAiEA4x5mbqV1KSSo1MjtjIYNpj6jp14j4A4vL9sfUCkXDncq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDB0YJ7XaTyC8b%2Bg2KCrcA4guQX7ROWUhU%2FWSssWi9SOmR5zpi8mfYSoBdRNdO3b3rl7Yn7xwXWiPmtek4ii3VX9FokdfzK9r6WxLHZ3i1kz6isgfcja8zJ5XFyDJYnSgYyMPimbpwAIcMbPElqIs%2FKdVcKAYIYv3T147gIilDjNRCzv0ubCwS%2BRUx2BPGPozTPfDOdrXuWAGerXDg5sPMzpXLoeY0HDvKTnPuYCLbmv%2Fgr7SElI5r7nnUUJdx%2BaA5F2GzAOAXB2ZqJhRCPtPuKDBJ6V6nnjn1cBPk6vFt%2BtHWCMW3JSqerlPfVPmaKcP4y%2Bc%2FEe6OzgOuHwHCngNJ%2FyTzHM5ggEm9SMa3X%2B5fMnrYm19af6U%2B1Kw0rmjYjrzm0qKJpE8ePjnzsAo1G%2FQqEvr4sodRSIDeWs1AzhY0Ysyxo4I5dI0AqhtOmFJAxUOILT0S3oBtv7ukil9hLF5meQ7eMxg7tKJx1skMsvcAnxZK7kUk4tfAW0%2BBwDM6WKJLPfjDwEZhppzFN56ijBjIVdrclLCFL6%2FOkSeJ%2BJgQ%2FrYPK%2FaepRe7UWs8Ifi87ZDY5iBbAiqXWBgbYaOwH%2Bp91EHrml4i4rlOjMZTtnQ5RJhPE674P5xUGtS%2BTSWnw7QYUloXL8B9X0BBGpLMI%2BQp74GOqUBBtuQqysFufoo%2FInLdEFziHoB5l5X2WNcni7YguasNtSjfFOTPpy37uUvG%2BqYVnDpO2eVZH7Aom2OZIbiADM47O8YzL9rG6zapXaVI3qgvmNqETVNJ9mcMkEapjIiqYrE6GXc6JSToOsHTbhskW1bXiJUOdit26FJ0p0cG%2Fe8zXW9xNT2k5b87Ar59vd8GWZL%2FkmoNuEX8t91siCECp1OT%2BgTxrVd&X-Amz-Signature=2cb3a71661627bfb3a6361dc26a7e8cfac0190dfcfe94b161e642d923b78ae5b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5MQNO7A%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T160929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICB6tdZyuwMfEhk%2FQ2D1LlCst30KjJ%2FLdt1ugq3viu%2BzAiEA4x5mbqV1KSSo1MjtjIYNpj6jp14j4A4vL9sfUCkXDncq%2FwMIMRAAGgw2Mzc0MjMxODM4MDUiDB0YJ7XaTyC8b%2Bg2KCrcA4guQX7ROWUhU%2FWSssWi9SOmR5zpi8mfYSoBdRNdO3b3rl7Yn7xwXWiPmtek4ii3VX9FokdfzK9r6WxLHZ3i1kz6isgfcja8zJ5XFyDJYnSgYyMPimbpwAIcMbPElqIs%2FKdVcKAYIYv3T147gIilDjNRCzv0ubCwS%2BRUx2BPGPozTPfDOdrXuWAGerXDg5sPMzpXLoeY0HDvKTnPuYCLbmv%2Fgr7SElI5r7nnUUJdx%2BaA5F2GzAOAXB2ZqJhRCPtPuKDBJ6V6nnjn1cBPk6vFt%2BtHWCMW3JSqerlPfVPmaKcP4y%2Bc%2FEe6OzgOuHwHCngNJ%2FyTzHM5ggEm9SMa3X%2B5fMnrYm19af6U%2B1Kw0rmjYjrzm0qKJpE8ePjnzsAo1G%2FQqEvr4sodRSIDeWs1AzhY0Ysyxo4I5dI0AqhtOmFJAxUOILT0S3oBtv7ukil9hLF5meQ7eMxg7tKJx1skMsvcAnxZK7kUk4tfAW0%2BBwDM6WKJLPfjDwEZhppzFN56ijBjIVdrclLCFL6%2FOkSeJ%2BJgQ%2FrYPK%2FaepRe7UWs8Ifi87ZDY5iBbAiqXWBgbYaOwH%2Bp91EHrml4i4rlOjMZTtnQ5RJhPE674P5xUGtS%2BTSWnw7QYUloXL8B9X0BBGpLMI%2BQp74GOqUBBtuQqysFufoo%2FInLdEFziHoB5l5X2WNcni7YguasNtSjfFOTPpy37uUvG%2BqYVnDpO2eVZH7Aom2OZIbiADM47O8YzL9rG6zapXaVI3qgvmNqETVNJ9mcMkEapjIiqYrE6GXc6JSToOsHTbhskW1bXiJUOdit26FJ0p0cG%2Fe8zXW9xNT2k5b87Ar59vd8GWZL%2FkmoNuEX8t91siCECp1OT%2BgTxrVd&X-Amz-Signature=af330596b90ecb27d5f18ce430603e310cb3b02e7fc5986a5bbc92715e1d59f5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
