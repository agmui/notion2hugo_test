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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTCDUDZL%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFm%2F75RySAaszhapJgaCXXkqOXINPHMhsUhKoq5S%2FyWfAiEA%2BoZO46zJWr%2Fmgz5kJG1DS5%2FneSdRyKsbxnJA%2BJMlPq8qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy1CD5dBYmMO1qutSrcAykQiDF5xI9uds8GmjAWAHh3YluJlo5oOIYdWk%2FfY%2Ftv5xWf%2BElmwe7UzQojPqMp97GFxhUx0jDg%2Bj4R3q71l1IskMBuXOqaQypQgVyuVA0KCCJZK7jDcMW%2Fxj4MVOWCtXmshT5yPJsdG25rC9GSPIVV6CyOua%2BHEXUPtbteneZOIkMXZJ7xFTcYoE%2BQmM%2FzWj6JWuHGscM06d7YNSJ9slDu5Kwhgfcy7cQnBCuXji3NlgBDWaGwaC6ktWLQV2WDtKtpBj%2BoUH9hfy5mRv%2Bagrv0VlrQ5FIoPC%2FEO9fmbwSm%2FJEwCSqxm4cVlbb6R3wJmz6novZHuUkykK5KpnzYM2uny1C4VsNSntegGQbv%2F%2F3inp4J0K%2Fi0wEBiTJnrXutC3VJekslZnWpsMYiluYIbiHifiUffg4Kwx69jSl%2BDUigOT1EqsFbAY8esTPw83pmyspBxzgkg%2FJjpVxITLBhEl7CpICPO%2F191z%2FeiH3NO1FpC4zfCngcV2lGqVAnOYwgYdoQP%2FxCLYwEJeuhWrOQB46duLqwCd%2BimsirwebqUbAx6ol7ocgWhQZXco2W9NmYIGX8uY%2Fx1sKZzkvNLKw9Sfru78bGASHNX5%2Fpwq0Snn85LLm3nXSw4Lhw5haZMKyzlsIGOqUB8qoMTT0pU5GseaELEJwHynPMl%2B09dIXUd9nCuddqN9OG7WaGPUgdEfOnOYSJpmU2B5UOpnNSM50b9vM%2BLtSaA20xsNcajWwU3gXPGu4%2F8YrdgwFDez6qnxpy%2FT4j2kh6JOKIs8SDSn0W%2FtMiG%2FeTBSwKptVNX4cBERT%2BJ4SYBtfIEtfKzbIsYx1ndIHOzB8NarGHsZi8vz3hYGh5DUR8wBxWVgdJ&X-Amz-Signature=70134cb6b1a22af69b19cfac812d1bb998ff0b707541e79fd63476adbf7d791b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTCDUDZL%2F20250608%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250608T160913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFm%2F75RySAaszhapJgaCXXkqOXINPHMhsUhKoq5S%2FyWfAiEA%2BoZO46zJWr%2Fmgz5kJG1DS5%2FneSdRyKsbxnJA%2BJMlPq8qiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJy1CD5dBYmMO1qutSrcAykQiDF5xI9uds8GmjAWAHh3YluJlo5oOIYdWk%2FfY%2Ftv5xWf%2BElmwe7UzQojPqMp97GFxhUx0jDg%2Bj4R3q71l1IskMBuXOqaQypQgVyuVA0KCCJZK7jDcMW%2Fxj4MVOWCtXmshT5yPJsdG25rC9GSPIVV6CyOua%2BHEXUPtbteneZOIkMXZJ7xFTcYoE%2BQmM%2FzWj6JWuHGscM06d7YNSJ9slDu5Kwhgfcy7cQnBCuXji3NlgBDWaGwaC6ktWLQV2WDtKtpBj%2BoUH9hfy5mRv%2Bagrv0VlrQ5FIoPC%2FEO9fmbwSm%2FJEwCSqxm4cVlbb6R3wJmz6novZHuUkykK5KpnzYM2uny1C4VsNSntegGQbv%2F%2F3inp4J0K%2Fi0wEBiTJnrXutC3VJekslZnWpsMYiluYIbiHifiUffg4Kwx69jSl%2BDUigOT1EqsFbAY8esTPw83pmyspBxzgkg%2FJjpVxITLBhEl7CpICPO%2F191z%2FeiH3NO1FpC4zfCngcV2lGqVAnOYwgYdoQP%2FxCLYwEJeuhWrOQB46duLqwCd%2BimsirwebqUbAx6ol7ocgWhQZXco2W9NmYIGX8uY%2Fx1sKZzkvNLKw9Sfru78bGASHNX5%2Fpwq0Snn85LLm3nXSw4Lhw5haZMKyzlsIGOqUB8qoMTT0pU5GseaELEJwHynPMl%2B09dIXUd9nCuddqN9OG7WaGPUgdEfOnOYSJpmU2B5UOpnNSM50b9vM%2BLtSaA20xsNcajWwU3gXPGu4%2F8YrdgwFDez6qnxpy%2FT4j2kh6JOKIs8SDSn0W%2FtMiG%2FeTBSwKptVNX4cBERT%2BJ4SYBtfIEtfKzbIsYx1ndIHOzB8NarGHsZi8vz3hYGh5DUR8wBxWVgdJ&X-Amz-Signature=c08b344c3465380f25fb069be65b3c4a035e68fd05fdbcdd9a4306dc01c4a4bf&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
