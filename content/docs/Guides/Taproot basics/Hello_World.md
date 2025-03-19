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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ZIL7BN%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGNaGT4YZ6fQ1acu1G0B43QwY%2BJrt8PjouCUQkkBlzqLAiEA7sK6CO7TJW9AthlUYoYYHlrd0oOI8HR%2BbcFGFmoHjzAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCex%2BREOOAeBpcOy3yrcAyFoGXW0NWfJ4nkEUF9B90l1ibwtl%2FnTHUJ5ECbAmnIf5%2BeHwkvorbqI0nnIiz%2FFPVruCdEA9u1WssgqTI9zGW4cXrcXGWzojYVMPfNiqktskrYe7i1YBoVZ92JCYeTFvrCYTW4qOG0hJPbOxckNR0P4yEHf%2F6c34ocdFA41PyBavpqBpTJHLakZ5UNLXy8MZYxCH0Qkm4aAYdnvXxUKxtFAOL45hIedhPRSbczVnx6QEkwRJt9jS5YVflRYJS2veHum%2BqRN7PzcFrPkxEriT0iHDl2AmT3MZ9eGVJ3ViLSPL%2BudqUGT9UfP15P8DGx9anSvXZN9H8Bq5XfoyXjxG4ee%2F16grh%2BEN9jInO29VdyvfC4YRWyizL3N7MLxFT%2FrK7HbNaMD7X6qEa96YuDJ8X%2F6jzWxRA9GAUf5z7aQm%2B%2FUN3GxSExrRa%2BKVOHKtsYtSqWgZPWdgBUYpbyOHsWmnM3urKdWO8eEsERwTovzsih2hrXeL7K%2FcF6doD3P2a4YckLJDi8%2FKDsIJJR%2FsGKgErdtvBzyk03cxSjypRKDF5k8vSGMjmS%2FIrvDiSH3Z14jnkR5ntse0U8qoqxmuy05w6Pmw3HF1u6O90boPXloO%2FNTy08hChzOBljpidTIMJ69674GOqUBWFNUlaK6n3gIRCavB9wdCd05SgDP8x8TAz3diL1l4DZ%2FTd4FtsmEqFfQrtN874WxIA4ZfVVj61yqCN9tp5TPJ6dD2tqPIn4kLHZ416rQNZruRKV4P6q6%2BRxXSDapSrCTG1LhR0Yywfg6T48h5bWw72hdypI%2FOqDiXT6CFAbTs%2BrN58X6B%2Fzf5MCXLJePBUqLw1pb2jgMXmSOUQMCZ7pTcgDc9ehv&X-Amz-Signature=c42191cdbe1e5ea533f3794e5c6fd9a09729fa8c36bac24a6e39d980246ed7eb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ZIL7BN%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T200849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB8aCXVzLXdlc3QtMiJHMEUCIGNaGT4YZ6fQ1acu1G0B43QwY%2BJrt8PjouCUQkkBlzqLAiEA7sK6CO7TJW9AthlUYoYYHlrd0oOI8HR%2BbcFGFmoHjzAq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDCex%2BREOOAeBpcOy3yrcAyFoGXW0NWfJ4nkEUF9B90l1ibwtl%2FnTHUJ5ECbAmnIf5%2BeHwkvorbqI0nnIiz%2FFPVruCdEA9u1WssgqTI9zGW4cXrcXGWzojYVMPfNiqktskrYe7i1YBoVZ92JCYeTFvrCYTW4qOG0hJPbOxckNR0P4yEHf%2F6c34ocdFA41PyBavpqBpTJHLakZ5UNLXy8MZYxCH0Qkm4aAYdnvXxUKxtFAOL45hIedhPRSbczVnx6QEkwRJt9jS5YVflRYJS2veHum%2BqRN7PzcFrPkxEriT0iHDl2AmT3MZ9eGVJ3ViLSPL%2BudqUGT9UfP15P8DGx9anSvXZN9H8Bq5XfoyXjxG4ee%2F16grh%2BEN9jInO29VdyvfC4YRWyizL3N7MLxFT%2FrK7HbNaMD7X6qEa96YuDJ8X%2F6jzWxRA9GAUf5z7aQm%2B%2FUN3GxSExrRa%2BKVOHKtsYtSqWgZPWdgBUYpbyOHsWmnM3urKdWO8eEsERwTovzsih2hrXeL7K%2FcF6doD3P2a4YckLJDi8%2FKDsIJJR%2FsGKgErdtvBzyk03cxSjypRKDF5k8vSGMjmS%2FIrvDiSH3Z14jnkR5ntse0U8qoqxmuy05w6Pmw3HF1u6O90boPXloO%2FNTy08hChzOBljpidTIMJ69674GOqUBWFNUlaK6n3gIRCavB9wdCd05SgDP8x8TAz3diL1l4DZ%2FTd4FtsmEqFfQrtN874WxIA4ZfVVj61yqCN9tp5TPJ6dD2tqPIn4kLHZ416rQNZruRKV4P6q6%2BRxXSDapSrCTG1LhR0Yywfg6T48h5bWw72hdypI%2FOqDiXT6CFAbTs%2BrN58X6B%2Fzf5MCXLJePBUqLw1pb2jgMXmSOUQMCZ7pTcgDc9ehv&X-Amz-Signature=bc649e05784f65ce51b6b05cd180217e7c65c3ab981f01640fe086113f63eda4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
