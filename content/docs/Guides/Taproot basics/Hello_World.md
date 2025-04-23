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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5UPUVZ7%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCYI7n3LqXEz8GDpLVYe4BMNFryoiFZjEohYaAP6C5KzgIhAIwzkjYE7y%2FxzychSFYXboLu%2Bgs6Mqh4%2Fi2WBjTnFW6%2FKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkrCLa7fzsdldrV7Mq3AOMvVAFD6nAqGWNf3SFvPjg%2FUdM1b%2FWleLkBfJt%2F%2Bl160qZRWRiwqG1DHP04XvzH9inI184a2lxcevXcUrmo7AJrxuqsVOLdKTA2GEQu5hrZk6WxIcEnw0UC34bqP68Gwhya6iDdRe92aQ5mFE3zfFsEB2w1hUjNg7Rx%2FoDFmV1ECUf2BqgwxcVfFSaj4WN0HmHMP5HqqwUGdJWkrSrJE2jEZwtbxFClVMouJefyRjfcDLHoR%2ForowAVTVK3v0yX0go7yZni1%2FjukieMLnrv9ARm28SU3c8nW5Eo5ppEAR11ZECSCcbYzahOJ6pYquRChO3Mcxy7Yo9iUa9V3Tcp2oMEX4UL%2B%2BerkeRAu2Z2udkHzStiaEo0dNooszVEzRV0HGU4%2BomkHnJrGC9STJqPmwxziRBsU%2B%2FDUfyJe2jM%2FJ2fg2iDA4cZJm76QJWZDo4%2BKXo7TmFOyjQc6pNoKwX67GVKMCTVAXHZhf1OIhwUuZIyFOnNXB%2FctXXyK5GUEkiA6e08SWOd42VOmPK6V55%2FG3EnxvDpvwhLh%2FGRChi7yEo4Mva0j5BlZsJ9Zu0vbcMSihtE9Rq%2B8iEmDb2x2fz8DqsiN3fTLiuhl9dCnAdoow9dCiaq5wRfBQFqBTCtzCglKLABjqkAbieTfpO%2FQKT7FJ0wG8YFr2UOL%2BEvNQjh74hj5cHFtOe2GX2DxFgSIErbD1yYxrEVW1kSuzl9y9Zw12JdOe2tD6qqOM39rTTBGwZluU4X%2B08gLzGirDIuLeTfuMZYbiFCMYIOVg43tnvDdwHgyOzy%2BNQV5narIm75DeMpmUEb%2FQxDPSKZgcomR1e6hnvkHEGw994Kxp6D63RLfSjSStLhga7fgg5&X-Amz-Signature=d06adb0b742b9e897de277fc47803b00d826070dd0bb089d623b9b2d33ffeb2d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5UPUVZ7%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T081203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF8aCXVzLXdlc3QtMiJIMEYCIQCYI7n3LqXEz8GDpLVYe4BMNFryoiFZjEohYaAP6C5KzgIhAIwzkjYE7y%2FxzychSFYXboLu%2Bgs6Mqh4%2Fi2WBjTnFW6%2FKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkrCLa7fzsdldrV7Mq3AOMvVAFD6nAqGWNf3SFvPjg%2FUdM1b%2FWleLkBfJt%2F%2Bl160qZRWRiwqG1DHP04XvzH9inI184a2lxcevXcUrmo7AJrxuqsVOLdKTA2GEQu5hrZk6WxIcEnw0UC34bqP68Gwhya6iDdRe92aQ5mFE3zfFsEB2w1hUjNg7Rx%2FoDFmV1ECUf2BqgwxcVfFSaj4WN0HmHMP5HqqwUGdJWkrSrJE2jEZwtbxFClVMouJefyRjfcDLHoR%2ForowAVTVK3v0yX0go7yZni1%2FjukieMLnrv9ARm28SU3c8nW5Eo5ppEAR11ZECSCcbYzahOJ6pYquRChO3Mcxy7Yo9iUa9V3Tcp2oMEX4UL%2B%2BerkeRAu2Z2udkHzStiaEo0dNooszVEzRV0HGU4%2BomkHnJrGC9STJqPmwxziRBsU%2B%2FDUfyJe2jM%2FJ2fg2iDA4cZJm76QJWZDo4%2BKXo7TmFOyjQc6pNoKwX67GVKMCTVAXHZhf1OIhwUuZIyFOnNXB%2FctXXyK5GUEkiA6e08SWOd42VOmPK6V55%2FG3EnxvDpvwhLh%2FGRChi7yEo4Mva0j5BlZsJ9Zu0vbcMSihtE9Rq%2B8iEmDb2x2fz8DqsiN3fTLiuhl9dCnAdoow9dCiaq5wRfBQFqBTCtzCglKLABjqkAbieTfpO%2FQKT7FJ0wG8YFr2UOL%2BEvNQjh74hj5cHFtOe2GX2DxFgSIErbD1yYxrEVW1kSuzl9y9Zw12JdOe2tD6qqOM39rTTBGwZluU4X%2B08gLzGirDIuLeTfuMZYbiFCMYIOVg43tnvDdwHgyOzy%2BNQV5narIm75DeMpmUEb%2FQxDPSKZgcomR1e6hnvkHEGw994Kxp6D63RLfSjSStLhga7fgg5&X-Amz-Signature=3f64f3400351f39910df421f4f3014b715a9d464f5015b6868ebfa87b364f766&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
