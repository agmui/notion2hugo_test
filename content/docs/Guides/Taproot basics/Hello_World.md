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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYM3RI2A%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIFSb8dYVqGQvbXkQrWv3o%2BO8kEw%2FKP3ZFM1VP13MUoKDAiBUL1KpzCmoAbkHymG%2BoQjmGCuCCqXxHFx6fYtBo1jqKSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhqRXlQgd6qdwbkcxKtwDqjEZ7IrHHa4cqXaZfEF9JUcSmfDBjgSXCyPBLzz1noyL9Cf5cvH44XWIpfvujk1IZ2uogA0WfA2VAGRCHEfnj35MaBlESJb80%2FIrBvky34CPD0cniNAL0WsH1uDSC77zvKaHVus7JdmgJUoD5nCjURYfYZ4uRU%2BycitDtIakKStm0DMIUZpGtu%2FjfQesPLQP42%2BBbG45atD2cv6vMXpNyFLTS%2B48kuOlieIKYVCI7mr3BrQ0q%2BtHHOgh0jN9QcJ81p%2Fsd2uAVCW6eOdJ%2BR3q7YOYCu4vkr3tNJN5CGpizkPGMecIShGg01tLGIcgGMs9FH%2BnqOFOiw4c88uq9oVD3GvQA3xfbtaDGSAki5t16r6d9bx7gI45o3mfqT6G0PL9UQ7mEgsUDYVG30n5T0%2F2xWm2tpHv4t6BCXmo7pPNSiQ%2BCEr0bdGJwjvu2Xb%2F%2FJi%2Fw7Q6tMtmbDYG1wvU5KRpeflPj6tg7CueA8xwcJMMCkXdbiqjPHl7kJBGtYt5Akzxv5tCTZbuDal4rXLc9oGmUzYHK7hRiZLwtzPRMNwaiW8nMSCASflR4YyMii5dKeVI9tLaFXt4TvPLuUzsytdaeJCV2Vq31cPYnZFnnbgSBk4fqG05tB6lf3cPj3Iwy7vEyAY6pgH%2Bl6NSr9giqgMOQGs0hI4mwjppHwB57h8yx3USTNMvMaf5Y8CwSs8G%2FXjOjs7PzxgLGq1ksYT0Qoa9zJJpBL2URS%2BR8QEJhw6%2BdxMB1UKs5DiNhOOEiWrEq81b5BAJKIaPVJ07SN1NjqjPLi%2FdmHjvjf0Q2H4ObDZH1fAJtSOOccMsyngnJQq9VJIsaEF47N7XC1o%2BLJhb3lsFvCAfzwttkFWzzP2N&X-Amz-Signature=dd013994c4f3d10e45ed39acac3c7fa13fef407b4d32c66b35059a9d4cbda2ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYM3RI2A%2F20251110%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251110T014226Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJGMEQCIFSb8dYVqGQvbXkQrWv3o%2BO8kEw%2FKP3ZFM1VP13MUoKDAiBUL1KpzCmoAbkHymG%2BoQjmGCuCCqXxHFx6fYtBo1jqKSqIBAj4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhqRXlQgd6qdwbkcxKtwDqjEZ7IrHHa4cqXaZfEF9JUcSmfDBjgSXCyPBLzz1noyL9Cf5cvH44XWIpfvujk1IZ2uogA0WfA2VAGRCHEfnj35MaBlESJb80%2FIrBvky34CPD0cniNAL0WsH1uDSC77zvKaHVus7JdmgJUoD5nCjURYfYZ4uRU%2BycitDtIakKStm0DMIUZpGtu%2FjfQesPLQP42%2BBbG45atD2cv6vMXpNyFLTS%2B48kuOlieIKYVCI7mr3BrQ0q%2BtHHOgh0jN9QcJ81p%2Fsd2uAVCW6eOdJ%2BR3q7YOYCu4vkr3tNJN5CGpizkPGMecIShGg01tLGIcgGMs9FH%2BnqOFOiw4c88uq9oVD3GvQA3xfbtaDGSAki5t16r6d9bx7gI45o3mfqT6G0PL9UQ7mEgsUDYVG30n5T0%2F2xWm2tpHv4t6BCXmo7pPNSiQ%2BCEr0bdGJwjvu2Xb%2F%2FJi%2Fw7Q6tMtmbDYG1wvU5KRpeflPj6tg7CueA8xwcJMMCkXdbiqjPHl7kJBGtYt5Akzxv5tCTZbuDal4rXLc9oGmUzYHK7hRiZLwtzPRMNwaiW8nMSCASflR4YyMii5dKeVI9tLaFXt4TvPLuUzsytdaeJCV2Vq31cPYnZFnnbgSBk4fqG05tB6lf3cPj3Iwy7vEyAY6pgH%2Bl6NSr9giqgMOQGs0hI4mwjppHwB57h8yx3USTNMvMaf5Y8CwSs8G%2FXjOjs7PzxgLGq1ksYT0Qoa9zJJpBL2URS%2BR8QEJhw6%2BdxMB1UKs5DiNhOOEiWrEq81b5BAJKIaPVJ07SN1NjqjPLi%2FdmHjvjf0Q2H4ObDZH1fAJtSOOccMsyngnJQq9VJIsaEF47N7XC1o%2BLJhb3lsFvCAfzwttkFWzzP2N&X-Amz-Signature=d912f72af34c915ac5e852450bda362d289b8dd1985bcc59ffc775612950bfa9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
