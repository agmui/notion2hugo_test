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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXPLF2AR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBY5r0u1K%2BSyMsyxiC9HHY%2BFhnXMONiyLFJIViWt5oraAiEAsKD7v3IygueilS54v45EvPL%2BR1vpOohSYzTllGxMeVoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwlRJC%2But5hssDm9yrcA9Yf82UGgX4T%2BJbzQlziR0Mpm6K%2FF2Tpe6erB6cVYkpfVYBlViAttZMN5ZKyOam2GG7URk838q6BL1GBMsQjOl3fjBbN8oyHWt%2BaGUGHgAKaHYKFcB2ECo%2BbidxPWkZ0HHf%2FnPCSSzXNFCZbOoNYuXZBYB6VV7XijlDW3DqDqN3SvCG1PkiawboXQLu5kMLTa3z%2F7D2eQGgnmdy0iXYrKhjcTQTwBE4NiyPvBFycxI6HJQK5PG%2B0fxrPU%2FO1ID1ZyTm8UJL1ZeEYog%2Fzw5nh%2Bh%2B6LgWbqljkUI1qZ3gIaQR%2BpNZLtBUu6YcEBlTXYka1VgVAv5NIHVqjqjVOgMB81kMZc8krPkgcb7wpSyxDHjDd1vJijhEpgkOgEcFNsSJZzJEt2iDU1VsYp%2FR7qFpEXpLXgLgKw6rHGQQdei87SPKhiWyJWl2ZhS4GR%2Bab1iRTckg54CydLkYkuR4F4nVr51McTNE6v%2FMkhd2PHnn93XYNzzvmWLFKiKpPJvS3ovTnr6HF8hqSYZt4oLUC%2FhllWTfkfr1IMZU2DojrhTtRcxpAbK%2BUQ2y7oNl%2B4s4NWIJXh04eBoo7mDu46w5P1nSYxrl0r4xhtueP5RKAVnahT2hFHTEXDuKzWcizVn15MO6hg8EGOqUBytz%2FGhnWtmbf8CxwRGyKnMVLMDae1VpXmkMoiDgdLeYkFs0qv2vGd8r0VC%2Ft6XckQdQ%2FYB4K78LjVRc78B0UZMpcubFSjh%2Bm6w46c807tw%2BWMJ5l7QaOVn0gYCQqZ%2B8XyubfUI7f33nKk0Y2dd3h5h5vOJ2fMnnYNWIUvtM2iQN3hikNE%2Fb%2F96EUUM3UkWSaywVzhRnKTdGldg97RVoiAzZfnjS9&X-Amz-Signature=84f7e464c7013048f2463cab7985374511dba74bc36ffd8688368cad1bbb132e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXPLF2AR%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T181004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIBY5r0u1K%2BSyMsyxiC9HHY%2BFhnXMONiyLFJIViWt5oraAiEAsKD7v3IygueilS54v45EvPL%2BR1vpOohSYzTllGxMeVoqiAQIwf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOwlRJC%2But5hssDm9yrcA9Yf82UGgX4T%2BJbzQlziR0Mpm6K%2FF2Tpe6erB6cVYkpfVYBlViAttZMN5ZKyOam2GG7URk838q6BL1GBMsQjOl3fjBbN8oyHWt%2BaGUGHgAKaHYKFcB2ECo%2BbidxPWkZ0HHf%2FnPCSSzXNFCZbOoNYuXZBYB6VV7XijlDW3DqDqN3SvCG1PkiawboXQLu5kMLTa3z%2F7D2eQGgnmdy0iXYrKhjcTQTwBE4NiyPvBFycxI6HJQK5PG%2B0fxrPU%2FO1ID1ZyTm8UJL1ZeEYog%2Fzw5nh%2Bh%2B6LgWbqljkUI1qZ3gIaQR%2BpNZLtBUu6YcEBlTXYka1VgVAv5NIHVqjqjVOgMB81kMZc8krPkgcb7wpSyxDHjDd1vJijhEpgkOgEcFNsSJZzJEt2iDU1VsYp%2FR7qFpEXpLXgLgKw6rHGQQdei87SPKhiWyJWl2ZhS4GR%2Bab1iRTckg54CydLkYkuR4F4nVr51McTNE6v%2FMkhd2PHnn93XYNzzvmWLFKiKpPJvS3ovTnr6HF8hqSYZt4oLUC%2FhllWTfkfr1IMZU2DojrhTtRcxpAbK%2BUQ2y7oNl%2B4s4NWIJXh04eBoo7mDu46w5P1nSYxrl0r4xhtueP5RKAVnahT2hFHTEXDuKzWcizVn15MO6hg8EGOqUBytz%2FGhnWtmbf8CxwRGyKnMVLMDae1VpXmkMoiDgdLeYkFs0qv2vGd8r0VC%2Ft6XckQdQ%2FYB4K78LjVRc78B0UZMpcubFSjh%2Bm6w46c807tw%2BWMJ5l7QaOVn0gYCQqZ%2B8XyubfUI7f33nKk0Y2dd3h5h5vOJ2fMnnYNWIUvtM2iQN3hikNE%2Fb%2F96EUUM3UkWSaywVzhRnKTdGldg97RVoiAzZfnjS9&X-Amz-Signature=36176556c895c0ada8ae306db4b3463ce40fdc2e3b118974316809451a34124f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
