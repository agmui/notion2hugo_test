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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOR6BXK%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICFYlHH0WeESAy2jjHWClzMyxK1NZ2t5lWRhfTZSzfyXAiEA435QSMa63MVDcGxP%2FiR71xsUgs1Qa3AvUiIwAc%2FRcJwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BSYgSsLaO%2F1qZcKircA4lsDnx4saeh1B4qoBjTZBs2mmUfW8Dk%2BKGYTdlEaBKaNKgJYrcFMZ5%2BYkpmnr24%2Fq138C3hL2t9uKLl3LX%2B0i3uYHmpD06ux%2BvuHC7BIezuYeWcZ42dLJPf6mR3e5mAcnDMgVKEymsGPMrfXX7vCRDF6rzcd0kqkPdYIBj3NaSSdcDAQLlT%2BYy3VfVAExeV5QtqQG5fWqu7FUpdX9KqgG5GmEk0VWVM4KxS2%2F2MUL2VvLr7m0esdwbaTMXjij7vcr%2FVHsIvsOmqst9Qev8u0tgh%2BheJqV%2FZLvUDSN%2FPn73NFXoejiHFVKbqpQFLYdtcpiMjloaVL%2BDrOP0chVbebBzbwoZX4PX%2FqiUdseVa74GP9pXTmR3o2pBg11eTC6Ss5wW8m60jbKl7o%2FZMf%2FmWN0usZSheBEW1sldYrQ0VlE90aPSF0C79%2BWxlfMh7djRKTIoq2CaLiKyRRVuvP8raLxHbWsybRhNvk3Frip35trKg8AbxARconGkKoq0ZjUyiQKSv%2Fv4XEYohl%2B5FTNofkM6%2B%2BYUGyQx803KF3rQhYMKqaqat0wJEmfdYZGvlBKOgmbV%2FG4MlhXH3KX1PcRdSbE0jDMmMLMBpgX58%2FzNs0GaQczbt%2BJowOMlpbrc%2FMKz%2Fxb4GOqUBKSN%2FONagg%2BJlj%2BX%2BjkFd3CbTYwkDw12sO1VpmudY0stHP5KItO%2B2%2FzSSB%2Fewz1ylkw2jYu3oGzzg5lokDbnc0yy9Bch4t2evGtTgn%2FpeuHqkxrKCNYDEX5QPzqlW%2FWF2VwXirL1PS2%2BE0FvgyaGs0WRgq5%2FMFnjsmOTCBjaGmCT7XsgAHQ5e1AdBclkisokrYNjPBfissmafldLKat9olaqMrLpc&X-Amz-Signature=2590013a892cebeaaccf390d45b3942123c1082762c1dc20f509a223bc1ec888&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GOR6BXK%2F20250312%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250312T131802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCICFYlHH0WeESAy2jjHWClzMyxK1NZ2t5lWRhfTZSzfyXAiEA435QSMa63MVDcGxP%2FiR71xsUgs1Qa3AvUiIwAc%2FRcJwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2BSYgSsLaO%2F1qZcKircA4lsDnx4saeh1B4qoBjTZBs2mmUfW8Dk%2BKGYTdlEaBKaNKgJYrcFMZ5%2BYkpmnr24%2Fq138C3hL2t9uKLl3LX%2B0i3uYHmpD06ux%2BvuHC7BIezuYeWcZ42dLJPf6mR3e5mAcnDMgVKEymsGPMrfXX7vCRDF6rzcd0kqkPdYIBj3NaSSdcDAQLlT%2BYy3VfVAExeV5QtqQG5fWqu7FUpdX9KqgG5GmEk0VWVM4KxS2%2F2MUL2VvLr7m0esdwbaTMXjij7vcr%2FVHsIvsOmqst9Qev8u0tgh%2BheJqV%2FZLvUDSN%2FPn73NFXoejiHFVKbqpQFLYdtcpiMjloaVL%2BDrOP0chVbebBzbwoZX4PX%2FqiUdseVa74GP9pXTmR3o2pBg11eTC6Ss5wW8m60jbKl7o%2FZMf%2FmWN0usZSheBEW1sldYrQ0VlE90aPSF0C79%2BWxlfMh7djRKTIoq2CaLiKyRRVuvP8raLxHbWsybRhNvk3Frip35trKg8AbxARconGkKoq0ZjUyiQKSv%2Fv4XEYohl%2B5FTNofkM6%2B%2BYUGyQx803KF3rQhYMKqaqat0wJEmfdYZGvlBKOgmbV%2FG4MlhXH3KX1PcRdSbE0jDMmMLMBpgX58%2FzNs0GaQczbt%2BJowOMlpbrc%2FMKz%2Fxb4GOqUBKSN%2FONagg%2BJlj%2BX%2BjkFd3CbTYwkDw12sO1VpmudY0stHP5KItO%2B2%2FzSSB%2Fewz1ylkw2jYu3oGzzg5lokDbnc0yy9Bch4t2evGtTgn%2FpeuHqkxrKCNYDEX5QPzqlW%2FWF2VwXirL1PS2%2BE0FvgyaGs0WRgq5%2FMFnjsmOTCBjaGmCT7XsgAHQ5e1AdBclkisokrYNjPBfissmafldLKat9olaqMrLpc&X-Amz-Signature=81be11549756ffc5593d2033af6a15fc4e4ed6fa65825261240268d5c6a95c23&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
