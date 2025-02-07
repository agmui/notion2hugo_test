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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EV6WVJH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFTO%2Bdb9Qf78LQ%2FsJAvlRIx3qSA4nW8xUG%2BlXvAQgsUXAiEAte6fILLQXt9dPt8%2FXK1vNOmc093s4K4QQVafGdf5xY8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDC5Kpvk9F5hhMaA3VSrcAzJgjB0XUbWsv9CPVKyhPWfiHoLthR3IgdJPbDOUzCYmVgrDw%2FXJt3lvNSMOAXTNAyFepdYMWiYMLgU1jBK6xh7HNhth4dPlRGATnd8BmcLH4P7Gn2Afdx4mgsT1pKNswrDGO%2F%2B4SLzpAIclUSCKSpit7gpjgp4gagpynkm2TmNSg00V5muqNdLeZMN%2BHpSaroTE3idenBLHTj20YwE3UTy27zJpnE9OX8Fww6gI1tRW57xIt2rzT5gR1iEVe%2B5dXMdYIZEK9yXVQIwi7ec1tOB%2BtYkKB93dr3QhWDAKCJrZr1SMEfRhOpGqpW%2FMTpzH7rGHS5CJ%2FcHg3FG8x99rovpqq%2FAkEnPbTYyFkIatCGbM%2FCAO1emjUjE8hflIXOmMMPD66UBLlzkXtcqPNRZOqdEIJGXoYoU3u8nBSzMK7SqYHCvAMZXau0SpEIpUKRePMFjYFlnC6337HcgTeiS6CPhd6SPMWLrGha6n5C9EbnvMEji5QWwT3O%2BrDENz7lq6lhyUY%2B1jd4RLaO7fXVouLtMnMYOUBFa4leccAbpPSLA9rI0HChK7%2FDKvnnEHRZNwY%2F4H0UGxG%2FIkUOGzwKkvuh6TAmLbM%2BHfXxo%2BhAGnIOWrr%2BGWTUtDWxkGadXpMPb6lr0GOqUBHf9ivo5abIu3PlmXQ1L1e36l6DjCZTq07vn%2BSY1qjzCZenkAEB7CS5wWWdCjROcnErCFk9Js7SvOhO71Nx9tj8QUfGNjegUDNjJexqpeYSCT898rLcVsSSzZSN8gz0%2FFlZzZZUk34fbpDNie%2FNw1CVWMqvLKixlcgzoExhlxR4Rz3OTxnJgvqNOzipA8eSYINVr0X0qsdo1xywFlJzbn7PhOPqVj&X-Amz-Signature=a5e62f2bee912e6aca254499cc44eec249aa7d1b0d0e4b0e9a3832bbd2a9e7ea&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662EV6WVJH%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T090755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIFTO%2Bdb9Qf78LQ%2FsJAvlRIx3qSA4nW8xUG%2BlXvAQgsUXAiEAte6fILLQXt9dPt8%2FXK1vNOmc093s4K4QQVafGdf5xY8q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDC5Kpvk9F5hhMaA3VSrcAzJgjB0XUbWsv9CPVKyhPWfiHoLthR3IgdJPbDOUzCYmVgrDw%2FXJt3lvNSMOAXTNAyFepdYMWiYMLgU1jBK6xh7HNhth4dPlRGATnd8BmcLH4P7Gn2Afdx4mgsT1pKNswrDGO%2F%2B4SLzpAIclUSCKSpit7gpjgp4gagpynkm2TmNSg00V5muqNdLeZMN%2BHpSaroTE3idenBLHTj20YwE3UTy27zJpnE9OX8Fww6gI1tRW57xIt2rzT5gR1iEVe%2B5dXMdYIZEK9yXVQIwi7ec1tOB%2BtYkKB93dr3QhWDAKCJrZr1SMEfRhOpGqpW%2FMTpzH7rGHS5CJ%2FcHg3FG8x99rovpqq%2FAkEnPbTYyFkIatCGbM%2FCAO1emjUjE8hflIXOmMMPD66UBLlzkXtcqPNRZOqdEIJGXoYoU3u8nBSzMK7SqYHCvAMZXau0SpEIpUKRePMFjYFlnC6337HcgTeiS6CPhd6SPMWLrGha6n5C9EbnvMEji5QWwT3O%2BrDENz7lq6lhyUY%2B1jd4RLaO7fXVouLtMnMYOUBFa4leccAbpPSLA9rI0HChK7%2FDKvnnEHRZNwY%2F4H0UGxG%2FIkUOGzwKkvuh6TAmLbM%2BHfXxo%2BhAGnIOWrr%2BGWTUtDWxkGadXpMPb6lr0GOqUBHf9ivo5abIu3PlmXQ1L1e36l6DjCZTq07vn%2BSY1qjzCZenkAEB7CS5wWWdCjROcnErCFk9Js7SvOhO71Nx9tj8QUfGNjegUDNjJexqpeYSCT898rLcVsSSzZSN8gz0%2FFlZzZZUk34fbpDNie%2FNw1CVWMqvLKixlcgzoExhlxR4Rz3OTxnJgvqNOzipA8eSYINVr0X0qsdo1xywFlJzbn7PhOPqVj&X-Amz-Signature=72ab6febe5cc2afe17362b82d77652ce97c36d19c496e20d70f7de7408020ae1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
