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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNRDXDI%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC1suLYqzhrh2JLkua5v99oX9v5PlA5eK8bxUiJdtWlMwIgdHcQ2pFinIH%2F%2F8AaTjLBBRS%2BL6D2PefY9pwhEzfNkiwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLiOvSbS86QEfW9fsSrcA%2BuPJi7yxw1DkeGyAOjhYcxQ9X5gESWOnFK52Db2h3m7wdktUibjpCqS7pWK5ZsrgHIzis%2FtFmUIEowSrQuMZR%2BDEYjHLCnbDx51YSsUgaAD12EKNHPRjmfm1uPbIigba41AoeBWEXlD5LPNbq48AUNZkzweaU2Prv6Fxp676KxSC%2F9GzWO2h%2B2W5dezE9TXIB%2B3JXytF3SHktfmGQnxA3XxsnxijPuHySdeZYcfkYBHdleKEyABiYtsgrxXrwzH66%2FZ7%2Fq6zkqLS3siQqi8LG96Goo7sdzepGB%2BHmD4xpUmgt75M7meMt9y2YJhpYuNmH14xyddESccQRwZXyTat4U02VzWa%2B12orwbiM2GAauKdLXh8GrrMCADuUEosHfHMPfRJr7xY%2FWvS6C7Noa3H0VCAzMl5iR0IyuwAujeLTkz4f7o0H7B%2FsXF94Cn8Ep4C7IVrd4D7awiADhGreb0xVZ7%2Bl%2B9bEIQgFD0HchOy2BOC%2FokPw1eTRCqTS647IPIxxs2nePc2XUB7I4GPrnwRR%2FosJRjVjDp8kJzg6qcYI6xaFRp4zhwd31RL2i0f91i%2BQapfJI3RvrpDDpzXvQE6o1Scdtnd70N8tVgHxtG0HwnZ7kCRKVCMJ8IM8zQMKz%2BvcIGOqUBfg%2B7Db3i0pasW%2BIgmlOqEbFIZvvh%2FZW%2FV0zd186sNWBrEoAK9lT%2BuaU6eG436qUTD1st4LHpVdEVC9e07greA1ZhVZVPs39EWTHhohb97nWRuFMvU%2Ft600ZhygFWxpoFtsSQcgNQ9sJ5FwChiUJnNsLpshfeGEzhOSLZww0sdGkXRk4nrgLwMq1Ii%2FUhVWcE7ZEPMSrP69gTWqO0b%2FZYE3kXltjA&X-Amz-Signature=495f954b93ab3d7053b7310d7ddf1c1a61e851d3bd64f7e4fb389fe7044a5048&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDNRDXDI%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T061419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIQC1suLYqzhrh2JLkua5v99oX9v5PlA5eK8bxUiJdtWlMwIgdHcQ2pFinIH%2F%2F8AaTjLBBRS%2BL6D2PefY9pwhEzfNkiwq%2FwMIUxAAGgw2Mzc0MjMxODM4MDUiDLiOvSbS86QEfW9fsSrcA%2BuPJi7yxw1DkeGyAOjhYcxQ9X5gESWOnFK52Db2h3m7wdktUibjpCqS7pWK5ZsrgHIzis%2FtFmUIEowSrQuMZR%2BDEYjHLCnbDx51YSsUgaAD12EKNHPRjmfm1uPbIigba41AoeBWEXlD5LPNbq48AUNZkzweaU2Prv6Fxp676KxSC%2F9GzWO2h%2B2W5dezE9TXIB%2B3JXytF3SHktfmGQnxA3XxsnxijPuHySdeZYcfkYBHdleKEyABiYtsgrxXrwzH66%2FZ7%2Fq6zkqLS3siQqi8LG96Goo7sdzepGB%2BHmD4xpUmgt75M7meMt9y2YJhpYuNmH14xyddESccQRwZXyTat4U02VzWa%2B12orwbiM2GAauKdLXh8GrrMCADuUEosHfHMPfRJr7xY%2FWvS6C7Noa3H0VCAzMl5iR0IyuwAujeLTkz4f7o0H7B%2FsXF94Cn8Ep4C7IVrd4D7awiADhGreb0xVZ7%2Bl%2B9bEIQgFD0HchOy2BOC%2FokPw1eTRCqTS647IPIxxs2nePc2XUB7I4GPrnwRR%2FosJRjVjDp8kJzg6qcYI6xaFRp4zhwd31RL2i0f91i%2BQapfJI3RvrpDDpzXvQE6o1Scdtnd70N8tVgHxtG0HwnZ7kCRKVCMJ8IM8zQMKz%2BvcIGOqUBfg%2B7Db3i0pasW%2BIgmlOqEbFIZvvh%2FZW%2FV0zd186sNWBrEoAK9lT%2BuaU6eG436qUTD1st4LHpVdEVC9e07greA1ZhVZVPs39EWTHhohb97nWRuFMvU%2Ft600ZhygFWxpoFtsSQcgNQ9sJ5FwChiUJnNsLpshfeGEzhOSLZww0sdGkXRk4nrgLwMq1Ii%2FUhVWcE7ZEPMSrP69gTWqO0b%2FZYE3kXltjA&X-Amz-Signature=34388d5da93b9feaad273d1cbe09706b5e8cc42dd314c8b36e06c436588db2dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
