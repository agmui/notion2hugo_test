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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAOXLRKB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyWr4EfjyVSkB%2BWRWjlDs55EbgaGVWae6kyXWwpE%2BL1AiEA7BSGCLn7hqn%2BOZ5lfJJnTmpWwEDjQug9m4TRrMbLjKgqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEsLX473mqNu9uYDircAytjOt29nG5Ix5B5D%2BIWpFmSGSwhuZkpyeJQ10Mb025rbc%2BqDfuo3AvQBMMO6COLlJCiwKL2CjX6uQMGIoSqQ1ZcI9331hSMsSX1NcXDPm6USR6vedgJFXznr00cCshWERMWuIr3zwp2A27zBrDxxJkd%2BlVXL0oLeOb7RdKBr580U%2BBT0pg57%2BWYZy%2F8rPCr1xNiqgL0HADCLGOOG%2BpULZdNlk3Anb2S3ZNHxFfbaNG1%2B3mpVeKG9l7FzrnA81tNB%2Bbe0TvEThxhOve0wtLtSb%2F0FFoYtGB3EXdGRmQ3oSTyqtd%2BDvIwCgxQJCcKvJFRk88i4wGitCJKKNPg1E8pIhASphY81j5UHMx0Seo0nmoXtJy1R4FywQhk2fDsIneOTCiIVSB8em5oR36sWLEeRYUBQ6AVb%2BRaTMFkHCIzZ9ZmrSh25qZRYFDDgRlwvT8JOWA%2FgF0OPqGg5uXXKd5yax9amIiatyalnRAjZQbNbaUfJhSObskdJUVEeKCBWtDaaT6cIC1O9a%2FG%2FeqsATtmb6fxIzaz7mw%2B%2BJJai8Xnxary4TNihMzT1EBsQ3uxLCx4BXwG5TyFYTsGKaBhOftaxafhzgrllyjngpuJa96otLfmq7RC8HIY9Sp0OBfDMKi4rsQGOqUBXQ5Xkr%2Fa29M7Vh1K3d1PQyp4UrYCvatHcWiaIiINz9uF33xhSjSD4Lu6EBq0%2F7NwR0ARPOjDBDfqswWZZdsDBt%2BpmaaH6CsouY%2Fwndwrb1KNH0h3Cs9byoG8V%2FxYimNEOCOMdviUUPnFyoctKrT9IxyGC5aMfpTOB9JyQuytSlbMjkkN2EgM6nmCwdts%2FYDVZua2OXxP4%2FLkKIYmUvm58T%2FNsyTI&X-Amz-Signature=a3badeed537f74e0180a96f1995204df495b5f822413701308328921a6497444&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAOXLRKB%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T171224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyWr4EfjyVSkB%2BWRWjlDs55EbgaGVWae6kyXWwpE%2BL1AiEA7BSGCLn7hqn%2BOZ5lfJJnTmpWwEDjQug9m4TRrMbLjKgqiAQI2v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJEsLX473mqNu9uYDircAytjOt29nG5Ix5B5D%2BIWpFmSGSwhuZkpyeJQ10Mb025rbc%2BqDfuo3AvQBMMO6COLlJCiwKL2CjX6uQMGIoSqQ1ZcI9331hSMsSX1NcXDPm6USR6vedgJFXznr00cCshWERMWuIr3zwp2A27zBrDxxJkd%2BlVXL0oLeOb7RdKBr580U%2BBT0pg57%2BWYZy%2F8rPCr1xNiqgL0HADCLGOOG%2BpULZdNlk3Anb2S3ZNHxFfbaNG1%2B3mpVeKG9l7FzrnA81tNB%2Bbe0TvEThxhOve0wtLtSb%2F0FFoYtGB3EXdGRmQ3oSTyqtd%2BDvIwCgxQJCcKvJFRk88i4wGitCJKKNPg1E8pIhASphY81j5UHMx0Seo0nmoXtJy1R4FywQhk2fDsIneOTCiIVSB8em5oR36sWLEeRYUBQ6AVb%2BRaTMFkHCIzZ9ZmrSh25qZRYFDDgRlwvT8JOWA%2FgF0OPqGg5uXXKd5yax9amIiatyalnRAjZQbNbaUfJhSObskdJUVEeKCBWtDaaT6cIC1O9a%2FG%2FeqsATtmb6fxIzaz7mw%2B%2BJJai8Xnxary4TNihMzT1EBsQ3uxLCx4BXwG5TyFYTsGKaBhOftaxafhzgrllyjngpuJa96otLfmq7RC8HIY9Sp0OBfDMKi4rsQGOqUBXQ5Xkr%2Fa29M7Vh1K3d1PQyp4UrYCvatHcWiaIiINz9uF33xhSjSD4Lu6EBq0%2F7NwR0ARPOjDBDfqswWZZdsDBt%2BpmaaH6CsouY%2Fwndwrb1KNH0h3Cs9byoG8V%2FxYimNEOCOMdviUUPnFyoctKrT9IxyGC5aMfpTOB9JyQuytSlbMjkkN2EgM6nmCwdts%2FYDVZua2OXxP4%2FLkKIYmUvm58T%2FNsyTI&X-Amz-Signature=cda993edecab031ea7bf20189d4812b653e1268ebf9821ac7b8bdbe6b1ccc53e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
