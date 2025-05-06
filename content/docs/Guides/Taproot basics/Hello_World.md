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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463RZFET%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmvtGfkWOVMlzXHVqSNnN56g%2FpKLly2u9xCh40%2BcOuFAiEAnueCtbuSkY2g3iHHYRPIrKHYJhtHTTJ29wrBEXBVZVwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGJrt0HiYSMqgMIHoircA9OYxTe9sPPfoR5Wvdbu3Y5KbgSx6i9ueB%2BZ9DVVZJDnqxDniiAmynhO52oJlVB%2Ba1nQZOE7vKrr9ca03fC4ZjgYWr2tHEcr50YGhQLDOVBvoJGQVfMGJqDTEFLsdJpjwxRR4DFhhejjJFtN8V6f0S5j%2FySdArEx87RTGvmkoXRm%2FMtkLrWc6QeWN15sL4TeCYwibeWICs2xEi2f8sshDrfAJsVRfZ7N2RHurK5OW890OarDi0xZ8MyJX%2BTmaWPw%2BJ3klJGGpoAVOuTrhj%2BfvJsOYTYCCW%2FG26bvkPGjs61Sl%2BGzdR3pdRsvPMG4mwTi0MVawN2c5OP2FnkhTSp4wvlPq0m%2BM6x54xC4WsLC5O08%2BM4U9u0WJJOoCi69TEXp%2B6e%2FcQDVpw9jNZJRKBHUateqCzwN%2BHBgV%2FheYYEJbAM7mE7bZT0hYNQnGKRZQ89RNlFtKSKXySha22lQ%2FUw9zIIHNIVoHOJWe1kbLp7XQveGEhEUiEs4VCSnGC5bGt24VH9DjUzeCDzVG%2B4hUENoQzmAFK7wXkWsPmNx4l%2By0exdfA%2Fk%2F%2BVl5wZT1FEgvjaYFzuJGocRA1PCIKutKmq637bN5q5H3Dj9k2fx0sOooGotjk2QWFC%2F7fTjq36vMNyX6MAGOqUBmROwodOvNJmNahn8076qRyuQF1FJ9lVRKpAxPCyXcZuXCRQhYziS1enIl5Aq7P7Bc8h8L3dJe42g7Y5zam7Bh9I5WHPb4eDZROe47tjKrj%2BgzMLdMww%2FHAKJ%2B5cZpHKzZR6GVGiA%2BqmRorWmoIvR9LossTYoLNKSZbp5vwCacNag%2BR%2FN5%2BPvgEsSvokGjtZT1Ig583x2yVAp%2FF14Bd0qVfI3yEj0&X-Amz-Signature=d0c694dd74a6c92953978870dac57e412424344e69b771f9ec830722000e8e52&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466463RZFET%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T132337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDmvtGfkWOVMlzXHVqSNnN56g%2FpKLly2u9xCh40%2BcOuFAiEAnueCtbuSkY2g3iHHYRPIrKHYJhtHTTJ29wrBEXBVZVwq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGJrt0HiYSMqgMIHoircA9OYxTe9sPPfoR5Wvdbu3Y5KbgSx6i9ueB%2BZ9DVVZJDnqxDniiAmynhO52oJlVB%2Ba1nQZOE7vKrr9ca03fC4ZjgYWr2tHEcr50YGhQLDOVBvoJGQVfMGJqDTEFLsdJpjwxRR4DFhhejjJFtN8V6f0S5j%2FySdArEx87RTGvmkoXRm%2FMtkLrWc6QeWN15sL4TeCYwibeWICs2xEi2f8sshDrfAJsVRfZ7N2RHurK5OW890OarDi0xZ8MyJX%2BTmaWPw%2BJ3klJGGpoAVOuTrhj%2BfvJsOYTYCCW%2FG26bvkPGjs61Sl%2BGzdR3pdRsvPMG4mwTi0MVawN2c5OP2FnkhTSp4wvlPq0m%2BM6x54xC4WsLC5O08%2BM4U9u0WJJOoCi69TEXp%2B6e%2FcQDVpw9jNZJRKBHUateqCzwN%2BHBgV%2FheYYEJbAM7mE7bZT0hYNQnGKRZQ89RNlFtKSKXySha22lQ%2FUw9zIIHNIVoHOJWe1kbLp7XQveGEhEUiEs4VCSnGC5bGt24VH9DjUzeCDzVG%2B4hUENoQzmAFK7wXkWsPmNx4l%2By0exdfA%2Fk%2F%2BVl5wZT1FEgvjaYFzuJGocRA1PCIKutKmq637bN5q5H3Dj9k2fx0sOooGotjk2QWFC%2F7fTjq36vMNyX6MAGOqUBmROwodOvNJmNahn8076qRyuQF1FJ9lVRKpAxPCyXcZuXCRQhYziS1enIl5Aq7P7Bc8h8L3dJe42g7Y5zam7Bh9I5WHPb4eDZROe47tjKrj%2BgzMLdMww%2FHAKJ%2B5cZpHKzZR6GVGiA%2BqmRorWmoIvR9LossTYoLNKSZbp5vwCacNag%2BR%2FN5%2BPvgEsSvokGjtZT1Ig583x2yVAp%2FF14Bd0qVfI3yEj0&X-Amz-Signature=4ad5230597a12ba8b91ccc02144043554bd43f3a2318a5227fe5e82fbc24d627&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
