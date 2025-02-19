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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNMMASYO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIECZIdTqTXNvL%2FmoWoWoyvVd3IyNV26aMj%2FMBEUpbLOvAiB%2FgoHld6BvW9Cu1puaopdsKi%2BbqPhaep%2BNrkPvViSmJiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2zKIWwW0mDqSDTDjKtwD6gaOECCyG3f9EHO%2FuoNn9xXCSPuZOzsUwBvtyNv%2Be7k73YGsv9n6ekvdRODoRcBIZd1dQehqDMXhJi5YqPW7we53n4ewx526dUPS%2BnNpwcxMrTfiI6lFzFMu7EdMnCuugAomawQv1bNL%2B%2B7dwRIpva22gcli92h7yp0sEzMJrELNO3jfs8gNzQsF2xfNKwPS7fvqDvcNAXlbHotPl1seyxUvgqqxnlpNSWcG5bLc1cIMCOtElxHWd%2F7irR%2Bs9VApPN2iorgHXWTUf5BbwBhMI1KNTKOMeA%2FqcKC6yHW6YsZxRegPpKeixWPfbxfUzwLy6U%2BxlzzgT5tgqnCLJb%2FsLYlUXc%2BkSitbE2i3uLZH3HvhNpnXSHIM%2BbP3ngaPRuN9V8%2B1863QOMRg2yKxhtuCJL76GqeRt%2BGUPKMircCdju%2Fkw3YgUbVyfF4EB58nsBCAkda1Vi5Rl9UGeHTtA6GB8ZalDE%2BRQg7m4aSA%2BdS%2BnrtUirtmSS1HUryOb9MY6zzPq7PmButOCgcM0CBwDj5UqOvxKcpSzpcP1cIGe8SGLiEDE5DOxC%2BYJ6iOf1Wu2HU5xLhK2duTQp%2BVMDNaw9AdCpQl2APakN%2B7xxqeX3%2FTMRaNHXL78A5PtUWn9QYwv7zWvQY6pgEvRd6WblTi3pGHkBYAPOa%2FRiHD1GYfoftUzUG98PlVqOKCcB%2F50mHNGx8nD7j2D2bEJjY%2Fk4rvmEukYKbyGiuL6SAm%2B3sB%2FIfo25mSs%2FFP2XJ7gwdB73PvBhPeCqpwbk2mA6gO8ikRvzZaD4AQUbO0hugCGv%2FCyr9H5PEmZg6kv%2F94uNk1Nf0fyrilX1C2BhRH9K5Y5vMg4iXVIjJrnqmbkJSGdGZ3&X-Amz-Signature=b0ef7f075ce48dc6a62809a458f02ec8dd18669c7b23f8ee18885323909bbaca&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNMMASYO%2F20250219%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250219T100850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJGMEQCIECZIdTqTXNvL%2FmoWoWoyvVd3IyNV26aMj%2FMBEUpbLOvAiB%2FgoHld6BvW9Cu1puaopdsKi%2BbqPhaep%2BNrkPvViSmJiqIBAii%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2zKIWwW0mDqSDTDjKtwD6gaOECCyG3f9EHO%2FuoNn9xXCSPuZOzsUwBvtyNv%2Be7k73YGsv9n6ekvdRODoRcBIZd1dQehqDMXhJi5YqPW7we53n4ewx526dUPS%2BnNpwcxMrTfiI6lFzFMu7EdMnCuugAomawQv1bNL%2B%2B7dwRIpva22gcli92h7yp0sEzMJrELNO3jfs8gNzQsF2xfNKwPS7fvqDvcNAXlbHotPl1seyxUvgqqxnlpNSWcG5bLc1cIMCOtElxHWd%2F7irR%2Bs9VApPN2iorgHXWTUf5BbwBhMI1KNTKOMeA%2FqcKC6yHW6YsZxRegPpKeixWPfbxfUzwLy6U%2BxlzzgT5tgqnCLJb%2FsLYlUXc%2BkSitbE2i3uLZH3HvhNpnXSHIM%2BbP3ngaPRuN9V8%2B1863QOMRg2yKxhtuCJL76GqeRt%2BGUPKMircCdju%2Fkw3YgUbVyfF4EB58nsBCAkda1Vi5Rl9UGeHTtA6GB8ZalDE%2BRQg7m4aSA%2BdS%2BnrtUirtmSS1HUryOb9MY6zzPq7PmButOCgcM0CBwDj5UqOvxKcpSzpcP1cIGe8SGLiEDE5DOxC%2BYJ6iOf1Wu2HU5xLhK2duTQp%2BVMDNaw9AdCpQl2APakN%2B7xxqeX3%2FTMRaNHXL78A5PtUWn9QYwv7zWvQY6pgEvRd6WblTi3pGHkBYAPOa%2FRiHD1GYfoftUzUG98PlVqOKCcB%2F50mHNGx8nD7j2D2bEJjY%2Fk4rvmEukYKbyGiuL6SAm%2B3sB%2FIfo25mSs%2FFP2XJ7gwdB73PvBhPeCqpwbk2mA6gO8ikRvzZaD4AQUbO0hugCGv%2FCyr9H5PEmZg6kv%2F94uNk1Nf0fyrilX1C2BhRH9K5Y5vMg4iXVIjJrnqmbkJSGdGZ3&X-Amz-Signature=dfbf2025d931282b11622e14d70de9d0f738dd72bd77b367dbccbfd3066d73c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
