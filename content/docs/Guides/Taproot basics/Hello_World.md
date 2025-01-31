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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQFY23VI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClsujB9rLYxs4nDA2HUQmFB%2FgjlOHUdnmol7TB6Fq7FAiEAvBTb7ypDrtQOHPXNoFKd7lIozthqrJerdj3faDntdIkqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHSqYXWwCS6e2apJSrcA34KZwAkrlGr6uNnDhFLsskxuEz7XuHiNcEp9mRblHvD8no5XncQ2md0WroBDbmaZL3F73Ea%2FjNBdVvnduTg7rilPIAI%2F2XIS3Y4ksPCdXvZ6OGc2%2BXFyyka%2FOLgMZEir1wTKwBiSXmVySAJVd5zqmDAs2kFplmetk7S1VOQ48hiiB%2FE%2BvLfn5kQREgBx3SsGZ%2FuTOTwr0jFYJrK%2FAkxHKyPwjyXhhrLz6egD7wCeu4Lq8YF4UC%2F0RjwtUZJq5pdm4Gyp5Pqa5h3lWOVgH7nLyMzBjymI5pFADwdm5flHUfWlJ1p7ycZ0OsyPLUs%2F%2B6t1mmrXSG86rFaOszWJSktA0ly0gIyVAGTN3r3k4AkQLhtzQoZUFnWiewqJsyjgcLg1GDIAm1sz6UdqU3IVSHGZxtgv7tnblAr5wc0uPrV1oNiDCV1Nm39fLEVnWXOHACwj3HMjGWGlThGchUe%2BXNVmFA1Y8VefXhBVs4J8Ib5ry%2Bw3LEGWm3mEP2QXT7gbJtuRpzTPgUqqYKdo5m3jZEvyRfhnQHESOpbuVkpV1ueE2WvrlR8stITlgmhnkb3Rl1b1dZBo1crEZMEUCCp202iHuoVzjfZH8RXTNvHpScANXTOUCzyrdFh2KP3dJJXMP%2FB9LwGOqUBL8XCfnVIs%2FmYpQFjpYSrF3QbIorbs9yBY1CSkpJ5cx5Yg%2F9NnJoninAn5v3dwrFXUGHAcsL6VKgKVMQ%2Fx9U2fqwijZWsFheO1E%2F8MpsNUqBZ2hlImQik3ebDT8MR5j237JHBK42%2BjgkXnrBk7Tjz6TRfsLRhYVE5ZF8eFRQJAqDu2JsKyL0DF%2FcygG1x%2BGRchBfZWbiYaX7gHHSPP3qo01MsVeiT&X-Amz-Signature=efa5c02b710f05255c482eb75b45eceeeaefd5fed84191450dff8e5c1bfbcacb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQFY23VI%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T200806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIClsujB9rLYxs4nDA2HUQmFB%2FgjlOHUdnmol7TB6Fq7FAiEAvBTb7ypDrtQOHPXNoFKd7lIozthqrJerdj3faDntdIkqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDHSqYXWwCS6e2apJSrcA34KZwAkrlGr6uNnDhFLsskxuEz7XuHiNcEp9mRblHvD8no5XncQ2md0WroBDbmaZL3F73Ea%2FjNBdVvnduTg7rilPIAI%2F2XIS3Y4ksPCdXvZ6OGc2%2BXFyyka%2FOLgMZEir1wTKwBiSXmVySAJVd5zqmDAs2kFplmetk7S1VOQ48hiiB%2FE%2BvLfn5kQREgBx3SsGZ%2FuTOTwr0jFYJrK%2FAkxHKyPwjyXhhrLz6egD7wCeu4Lq8YF4UC%2F0RjwtUZJq5pdm4Gyp5Pqa5h3lWOVgH7nLyMzBjymI5pFADwdm5flHUfWlJ1p7ycZ0OsyPLUs%2F%2B6t1mmrXSG86rFaOszWJSktA0ly0gIyVAGTN3r3k4AkQLhtzQoZUFnWiewqJsyjgcLg1GDIAm1sz6UdqU3IVSHGZxtgv7tnblAr5wc0uPrV1oNiDCV1Nm39fLEVnWXOHACwj3HMjGWGlThGchUe%2BXNVmFA1Y8VefXhBVs4J8Ib5ry%2Bw3LEGWm3mEP2QXT7gbJtuRpzTPgUqqYKdo5m3jZEvyRfhnQHESOpbuVkpV1ueE2WvrlR8stITlgmhnkb3Rl1b1dZBo1crEZMEUCCp202iHuoVzjfZH8RXTNvHpScANXTOUCzyrdFh2KP3dJJXMP%2FB9LwGOqUBL8XCfnVIs%2FmYpQFjpYSrF3QbIorbs9yBY1CSkpJ5cx5Yg%2F9NnJoninAn5v3dwrFXUGHAcsL6VKgKVMQ%2Fx9U2fqwijZWsFheO1E%2F8MpsNUqBZ2hlImQik3ebDT8MR5j237JHBK42%2BjgkXnrBk7Tjz6TRfsLRhYVE5ZF8eFRQJAqDu2JsKyL0DF%2FcygG1x%2BGRchBfZWbiYaX7gHHSPP3qo01MsVeiT&X-Amz-Signature=1f7bd5ba14241e1092eddbebe647dd88d9f721778bd8090c2449be27567752ea&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
