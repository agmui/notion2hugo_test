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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCI7FKNL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMBiohfKj7AdGV4CN9TbJaj1J9sR9o%2FBGrqUGjE8SN7gIgRTP6qTH9dYdqigqdvVcBpOmrKoLz29Pa5jkoTkBnFO0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtbh3DuMb2O6J%2BY7ircA%2BmtLIF99sHHcoSDFpHlHu%2FeWNwC6Cy%2Bjpe%2FCiyih3DG9ZMfjFBOG64yZmYkctWdZbuVujnJ9D9%2Bw95R240w0jtAWIDubN0TV%2BQU%2FyH9i2YYzdPBK6WinzeEF0qKxsEJIk1W9vUsP%2BPGl58GUiwy6vOQ53kMrK1tfUE%2BGDXyzZEy2F9Rrpyo9m1aLdF1i42LuAvhsDy2kALqpncJai56HNwGEfyrHgKDQk8sEQEVXeWy5qKr%2FkkCW6gviTVuOLqxPeWNsO9%2BhE%2FmyDNDZA%2Fja%2FSSj5K%2FVHzfBDWswmHExSvhaUlU7PmWqxpS%2BjV0BhMzBeKOLQwDqc8Jy6nx7bLIsFelu%2FqsWxUKz8NFY6S2lLyaPAN47P7I45h1nt%2BO75y9ecVIdvbZuhEOAWUNZjBjKfLyOZvHefhL68P8F7oIKCF3DcvwhlL%2BwdOx4TP0zN7tOpONSGOs9WJuaC7u3Ylq3vpISsahSw9xZ90zS1aRwRanz9uQrxoqRq4hVtRbxSUcivmpQVvk%2FdUIQaHQZFP%2FD5rA5r6bOzaZf0G9vkPUyAwYiriy4n1g6uhuyZN%2FWuy47LEHL2KhfRJKtJ%2F8SRoH6mjthwVpeRr0K2cWpcbb3%2FE63T%2B76UvxgEq6bKxmMMb14MQGOqUBHJaVRvbN12Fx3icbv0FMUG1RAyedxyT3SapHCifvoy%2FyCfSHeMfpsppA%2Be3YW4lvfT%2BrRaz1FEQd0cPLTP8vy4NlP%2FEV%2FpHNe0nOLWmWBBm%2BAk6dXGKwymIgF2ZAo95exc6ku%2B6c93Zvvw%2BRW5aI94Ls%2BltBlDc10HdVTd%2FZyfqAwuZjUW49hZ1LFZh7JlCMSdjuWWm2gEtFC%2Fl7I5a4Rw267n4O&X-Amz-Signature=867c8eb94efd9a60033c1f80f50e927cc634682bc24d5201e9aac18a7454224f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZCI7FKNL%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T070837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDMBiohfKj7AdGV4CN9TbJaj1J9sR9o%2FBGrqUGjE8SN7gIgRTP6qTH9dYdqigqdvVcBpOmrKoLz29Pa5jkoTkBnFO0qiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFtbh3DuMb2O6J%2BY7ircA%2BmtLIF99sHHcoSDFpHlHu%2FeWNwC6Cy%2Bjpe%2FCiyih3DG9ZMfjFBOG64yZmYkctWdZbuVujnJ9D9%2Bw95R240w0jtAWIDubN0TV%2BQU%2FyH9i2YYzdPBK6WinzeEF0qKxsEJIk1W9vUsP%2BPGl58GUiwy6vOQ53kMrK1tfUE%2BGDXyzZEy2F9Rrpyo9m1aLdF1i42LuAvhsDy2kALqpncJai56HNwGEfyrHgKDQk8sEQEVXeWy5qKr%2FkkCW6gviTVuOLqxPeWNsO9%2BhE%2FmyDNDZA%2Fja%2FSSj5K%2FVHzfBDWswmHExSvhaUlU7PmWqxpS%2BjV0BhMzBeKOLQwDqc8Jy6nx7bLIsFelu%2FqsWxUKz8NFY6S2lLyaPAN47P7I45h1nt%2BO75y9ecVIdvbZuhEOAWUNZjBjKfLyOZvHefhL68P8F7oIKCF3DcvwhlL%2BwdOx4TP0zN7tOpONSGOs9WJuaC7u3Ylq3vpISsahSw9xZ90zS1aRwRanz9uQrxoqRq4hVtRbxSUcivmpQVvk%2FdUIQaHQZFP%2FD5rA5r6bOzaZf0G9vkPUyAwYiriy4n1g6uhuyZN%2FWuy47LEHL2KhfRJKtJ%2F8SRoH6mjthwVpeRr0K2cWpcbb3%2FE63T%2B76UvxgEq6bKxmMMb14MQGOqUBHJaVRvbN12Fx3icbv0FMUG1RAyedxyT3SapHCifvoy%2FyCfSHeMfpsppA%2Be3YW4lvfT%2BrRaz1FEQd0cPLTP8vy4NlP%2FEV%2FpHNe0nOLWmWBBm%2BAk6dXGKwymIgF2ZAo95exc6ku%2B6c93Zvvw%2BRW5aI94Ls%2BltBlDc10HdVTd%2FZyfqAwuZjUW49hZ1LFZh7JlCMSdjuWWm2gEtFC%2Fl7I5a4Rw267n4O&X-Amz-Signature=ae14c67e8021ff5771f1e91f61c472fe1a36a6aa91dd5908ef310af4b5facb94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
