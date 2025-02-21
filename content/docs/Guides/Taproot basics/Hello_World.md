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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJQZEQ6P%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFszqfiZBvOW4EI9ffOjvCdAG844dojuakIQZ%2FEUCBDPAiB5e5KyW2yEK0mrhGJ5D16AdHiMl8Eza8Ywugxyn6JdcyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxrf%2BcIigeOWfOkKzKtwDDaMhUcPtcNN5lR7TWGt8lnEa%2BX170ic4nxoNvK8t6QRivPphs74t7QPP9Y0JPxCbmeDCSk21DL6O1K6mz1wKF6fvGzQhItez0czJkwHv6swpD0nggcqXmvqy8dqvnl9oBVyF8CRW9bA1%2BVyBvx0zmb3KsARhGbwvDNWgODLEbWSAly6SqR%2FELlEV7fiKPxLmn%2FflqTWPk9yeabQLqTN3d%2BxjNQqIybg%2BFvC4qFEOSr0G57szslEW2ago3IEE0Pn7BAy3S3rAFieY8Ro27g5xqde7Urpd5o6a3eRDRf4d1lgirmyvM0kpJW0O5DLIShjHOLjMRby0bh9AA%2F7JVyv8sI1RwPFrPuA8BgUJLLbGucemHGF9p77lPlvmP5Z6Z2G7Yrtbwql9jsaSUuPqsjYr%2Fb3UOuh6uxT7S2Em6Qf8rsmetYqSZJSeicCgXIBzFTvqOS3r9y%2FW02OzbNaIn5b5guiwhsFNYi2d4AReiMG1P3A%2BueTp4egVPRxT%2FQ39PnCCuSlmIvknFHF79vEzrX1Sft4hVtrcLSd%2FgVXMK64cMqVp9lIkeJ7b3fuIugXdYBSRp%2BQVdwyRllNmlCy9SeKHF12UfU0m2BhIf6wAHENJzqZCmxmTmP70YH9A%2Ff4wgMjhvQY6pgFjVHd8BQMQZ%2F6gNm6ScGu1yHNx%2FUjR4cJojqtSG70tca9zxGUfEIS5F1AfZTAjFl8XLEwV5MWTv4cG1%2BStjqRoZasivUX2eh%2FhQ2GqbcntqwdMSPn2mDGfcrSinyCL7uuRCOBeOybEpP03uVrCCIKhE7mMeubd2lqQOnpK35poBGGKpy3FqEgVa8ZapIYtZLinjp%2B6w%2Fit%2Fk9ha%2Fc9fZrewacgRs1r&X-Amz-Signature=8fd2f5297e4e0845e789cfc638f8d236bfc5834468b79e1a678977dffd02b55e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJQZEQ6P%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T121333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFszqfiZBvOW4EI9ffOjvCdAG844dojuakIQZ%2FEUCBDPAiB5e5KyW2yEK0mrhGJ5D16AdHiMl8Eza8Ywugxyn6JdcyqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxrf%2BcIigeOWfOkKzKtwDDaMhUcPtcNN5lR7TWGt8lnEa%2BX170ic4nxoNvK8t6QRivPphs74t7QPP9Y0JPxCbmeDCSk21DL6O1K6mz1wKF6fvGzQhItez0czJkwHv6swpD0nggcqXmvqy8dqvnl9oBVyF8CRW9bA1%2BVyBvx0zmb3KsARhGbwvDNWgODLEbWSAly6SqR%2FELlEV7fiKPxLmn%2FflqTWPk9yeabQLqTN3d%2BxjNQqIybg%2BFvC4qFEOSr0G57szslEW2ago3IEE0Pn7BAy3S3rAFieY8Ro27g5xqde7Urpd5o6a3eRDRf4d1lgirmyvM0kpJW0O5DLIShjHOLjMRby0bh9AA%2F7JVyv8sI1RwPFrPuA8BgUJLLbGucemHGF9p77lPlvmP5Z6Z2G7Yrtbwql9jsaSUuPqsjYr%2Fb3UOuh6uxT7S2Em6Qf8rsmetYqSZJSeicCgXIBzFTvqOS3r9y%2FW02OzbNaIn5b5guiwhsFNYi2d4AReiMG1P3A%2BueTp4egVPRxT%2FQ39PnCCuSlmIvknFHF79vEzrX1Sft4hVtrcLSd%2FgVXMK64cMqVp9lIkeJ7b3fuIugXdYBSRp%2BQVdwyRllNmlCy9SeKHF12UfU0m2BhIf6wAHENJzqZCmxmTmP70YH9A%2Ff4wgMjhvQY6pgFjVHd8BQMQZ%2F6gNm6ScGu1yHNx%2FUjR4cJojqtSG70tca9zxGUfEIS5F1AfZTAjFl8XLEwV5MWTv4cG1%2BStjqRoZasivUX2eh%2FhQ2GqbcntqwdMSPn2mDGfcrSinyCL7uuRCOBeOybEpP03uVrCCIKhE7mMeubd2lqQOnpK35poBGGKpy3FqEgVa8ZapIYtZLinjp%2B6w%2Fit%2Fk9ha%2Fc9fZrewacgRs1r&X-Amz-Signature=c6b7e272df6d41445cabd1c504d805b555083a1657e8b3b2953c80e050f185a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
