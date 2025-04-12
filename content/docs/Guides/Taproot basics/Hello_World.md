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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIB2LLWE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCID%2BgBGKl1gdDNxhuzCvuYs79ipD2DqaYoAdZyCE%2Fk6KEAiArGnaJx2lCs%2FeqQyazleehmGKAP2U24r0TpPFC9hQAOyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZtNMMQvvMu%2BUe1ITKtwDydEanRU42aEhA2wP7ScVLUn22dkpviXIZA%2FmnAEDolBD7vA4iq7Oj5piJhOfGUH5Ajd04nGq60gT4bCZQ0x%2BFfNKORbtLygG8lDx3ZRW2EQ2PvvwYuEK7%2BFUKrHyzXaayLkMgyzBa7AmnuTJ3LGKk8s%2FMiHB9mEvMqkPHgpTelrvovgCGil7uJ09b%2FnbAVM9TZNN2g%2BmsVwpNDMIOQrDcGclEp9qm4vmTXjEqfX%2B18xSfE1wa%2BIXjIcr4025AvMu%2F6gD%2FglOZWsuRps7os7%2FZ2G%2Frv6mXvHRG2%2BwEx7ygEDaZCOOJDBolq6M0%2BuMZd3k%2BaGWqIXoLmpEbT9801D%2F5A%2F46MYNNC8r3BvZ58BzLAuJejVPLLckPCxyWCsZS%2FiXtNB2JiijZZs2t%2Fvq3k0bk3d%2FgxKdTUs4%2FVJYcrjUlQL0jK7z1ydLsAgrVSlfFtgjbWrX6%2FfHhKgKl%2FGr8tSi5Z3ABaSRR18Yct7eutgV33SBvmVxI5YT%2Fh%2BnbkqNEZgMzjEJa0aqB5%2FfH6gqhOOOTr1BIpRCyvmV%2BemcJaqPQchgBa98wT2iDslS%2F9QNlignYywNgG5oMF6TYwW9D2sLcZYS8ZecXd5cUxN8JAZcI018YFep%2FH8mLfj2Ticw6tXmvwY6pgHq%2FD0HhibXvKr3iYJAgkLJ5Wma8nMMeyIj96WNAatxa8aaKTlWVVjXX2NLLpvuNgIME6Xj%2BL9x4iZXbw%2FdnbH2C%2FeeDZZ7tHVDT2DxvclltdyU5fJ1aKIS%2BBOCSl8nNnZKsDKpHtJXr%2B6wVMYk67j5Y%2FnTUsieiNOJVspS3eapoBucJ5qOWvvFo3hNnEETrMhNN0jwLnqkgABqGpnIgHb5fu5vkv%2Fk&X-Amz-Signature=b4d101f53498569c65a85a49d111a25995abd444c1e0222393e4cd6ed26ed8e6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIB2LLWE%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T003814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJGMEQCID%2BgBGKl1gdDNxhuzCvuYs79ipD2DqaYoAdZyCE%2Fk6KEAiArGnaJx2lCs%2FeqQyazleehmGKAP2U24r0TpPFC9hQAOyqIBAjJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZtNMMQvvMu%2BUe1ITKtwDydEanRU42aEhA2wP7ScVLUn22dkpviXIZA%2FmnAEDolBD7vA4iq7Oj5piJhOfGUH5Ajd04nGq60gT4bCZQ0x%2BFfNKORbtLygG8lDx3ZRW2EQ2PvvwYuEK7%2BFUKrHyzXaayLkMgyzBa7AmnuTJ3LGKk8s%2FMiHB9mEvMqkPHgpTelrvovgCGil7uJ09b%2FnbAVM9TZNN2g%2BmsVwpNDMIOQrDcGclEp9qm4vmTXjEqfX%2B18xSfE1wa%2BIXjIcr4025AvMu%2F6gD%2FglOZWsuRps7os7%2FZ2G%2Frv6mXvHRG2%2BwEx7ygEDaZCOOJDBolq6M0%2BuMZd3k%2BaGWqIXoLmpEbT9801D%2F5A%2F46MYNNC8r3BvZ58BzLAuJejVPLLckPCxyWCsZS%2FiXtNB2JiijZZs2t%2Fvq3k0bk3d%2FgxKdTUs4%2FVJYcrjUlQL0jK7z1ydLsAgrVSlfFtgjbWrX6%2FfHhKgKl%2FGr8tSi5Z3ABaSRR18Yct7eutgV33SBvmVxI5YT%2Fh%2BnbkqNEZgMzjEJa0aqB5%2FfH6gqhOOOTr1BIpRCyvmV%2BemcJaqPQchgBa98wT2iDslS%2F9QNlignYywNgG5oMF6TYwW9D2sLcZYS8ZecXd5cUxN8JAZcI018YFep%2FH8mLfj2Ticw6tXmvwY6pgHq%2FD0HhibXvKr3iYJAgkLJ5Wma8nMMeyIj96WNAatxa8aaKTlWVVjXX2NLLpvuNgIME6Xj%2BL9x4iZXbw%2FdnbH2C%2FeeDZZ7tHVDT2DxvclltdyU5fJ1aKIS%2BBOCSl8nNnZKsDKpHtJXr%2B6wVMYk67j5Y%2FnTUsieiNOJVspS3eapoBucJ5qOWvvFo3hNnEETrMhNN0jwLnqkgABqGpnIgHb5fu5vkv%2Fk&X-Amz-Signature=afb573e4d5434c23b226f3f1b37630b4a2a7b394ad8586170c6703b62d1c2dc9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
