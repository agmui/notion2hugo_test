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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHSTEGNK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDW4O%2FRmEDIssrlc%2BGFtBpXlWuvvtrv8kTu%2B8GbRZq14QIgCDt4k45c03eo1aTe4OzYjZjVwxEcOYVbGmiXjOmC2k0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDF3ocD8Wg0OosVUNdircAwzco3m2X5jDjrnj%2FzK2MAM1pGElCskXRbQ8zoCPM0cgX3c54JUd4wALPqDrMe6jffIOlVOxqA26kY8YIrQBeYk4k7IME8w%2FopVe7jV2Hst4IqjC2Fgs0Pgch%2Bkq%2F1hE75km5rqmnjm2FI%2F1TB9CdgkRElT1%2BXQPkdDabfJobkMgq6skUsY%2FiaDAKHtZ7JIWc7d6k4xzEhZ5jCfziMLPSDsI4xoh8yO1w2kIsH5IsJ460BNcj3o87fXUaVieDulZ9F%2BLil8AUtSliHh83oCHgA%2Fh7YCv%2B57qswOxJUdqt97Z2yyIU0a72Tz3KIKRAKCwSS3XjnyxQO4SJFlyyriTC28F9%2FpNKlgS%2BGdua6ZFZYh6TW8M7GrbxSUz1csBqnjuzuSNfz4f0ltIF2YfrJgCF9k7IxfDYwIKxz3npp0KU6rBPFxAyj8Rix3%2BjMJ%2B9qNkvlEYWhH9a7W5h8TdYEnePNnKo6G2WoTtmMxukCKYcpwnp9AEMkUyWF6c2t86HyI44YPtriaQh%2F17uk8XnsoFIsxbEq2wuiTC%2BPYMF8wc6QxMH6kcL5YXoa9abpY4jXC105OAJ2gjeGbUIZu324MCMmFFc0iJ%2BskeUOuMHIObEmmAgKB5eBOGsLgUxvmoMMGi6sIGOqUB421LuHQmmIdn%2FAeTeiRAWmexiviWOO%2F1Arunwc3ht0iAVSVpKg9iF%2B3cYQYxBWjBIdnPHsb%2FMyjgADzPuv1Z7mUBxlxaGo4yHbXVKsgAQMaVPaCZ41GyY0uO9Ea8fwLC9GTyC0l%2B2hljM0KuzqyorcXdUwwPx2UuPcZSx8mQcX6TLh5A4cI26s%2FOzfUQwLvh%2BQ0%2Bw7bluEEAlfX3RWUmBSWXmaAh&X-Amz-Signature=01b08b2c40d45b0a475e27d2ec94150c42d1dae5055324d93ac2ea6ed04a2a43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XHSTEGNK%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T132646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIQDW4O%2FRmEDIssrlc%2BGFtBpXlWuvvtrv8kTu%2B8GbRZq14QIgCDt4k45c03eo1aTe4OzYjZjVwxEcOYVbGmiXjOmC2k0q%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDF3ocD8Wg0OosVUNdircAwzco3m2X5jDjrnj%2FzK2MAM1pGElCskXRbQ8zoCPM0cgX3c54JUd4wALPqDrMe6jffIOlVOxqA26kY8YIrQBeYk4k7IME8w%2FopVe7jV2Hst4IqjC2Fgs0Pgch%2Bkq%2F1hE75km5rqmnjm2FI%2F1TB9CdgkRElT1%2BXQPkdDabfJobkMgq6skUsY%2FiaDAKHtZ7JIWc7d6k4xzEhZ5jCfziMLPSDsI4xoh8yO1w2kIsH5IsJ460BNcj3o87fXUaVieDulZ9F%2BLil8AUtSliHh83oCHgA%2Fh7YCv%2B57qswOxJUdqt97Z2yyIU0a72Tz3KIKRAKCwSS3XjnyxQO4SJFlyyriTC28F9%2FpNKlgS%2BGdua6ZFZYh6TW8M7GrbxSUz1csBqnjuzuSNfz4f0ltIF2YfrJgCF9k7IxfDYwIKxz3npp0KU6rBPFxAyj8Rix3%2BjMJ%2B9qNkvlEYWhH9a7W5h8TdYEnePNnKo6G2WoTtmMxukCKYcpwnp9AEMkUyWF6c2t86HyI44YPtriaQh%2F17uk8XnsoFIsxbEq2wuiTC%2BPYMF8wc6QxMH6kcL5YXoa9abpY4jXC105OAJ2gjeGbUIZu324MCMmFFc0iJ%2BskeUOuMHIObEmmAgKB5eBOGsLgUxvmoMMGi6sIGOqUB421LuHQmmIdn%2FAeTeiRAWmexiviWOO%2F1Arunwc3ht0iAVSVpKg9iF%2B3cYQYxBWjBIdnPHsb%2FMyjgADzPuv1Z7mUBxlxaGo4yHbXVKsgAQMaVPaCZ41GyY0uO9Ea8fwLC9GTyC0l%2B2hljM0KuzqyorcXdUwwPx2UuPcZSx8mQcX6TLh5A4cI26s%2FOzfUQwLvh%2BQ0%2Bw7bluEEAlfX3RWUmBSWXmaAh&X-Amz-Signature=9bfba45556c4fe4571ac83f7c7a3341f5a89a762d55eb9fc1647c132436d7e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
