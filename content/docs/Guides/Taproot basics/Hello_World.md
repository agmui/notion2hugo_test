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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KCWJRVJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCTsejhWMWUzKHsaFfewhzTCjjl%2FjFDmEOFxFKYu5UO8QIhALV2ELwA4EhMYbOIk25bahsS1di5hxcFGloH1yXL1bCaKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwE8xH0h0rWI9IdRAgq3AOKV0c2pPqmmsZLUie%2BXEojiwQCVN10ih6A2Lg%2B1V16f4eKe7%2BAwnG%2B85r5uBivpWQdxinTvD1NxwRubd%2Bw2wuHVO7Q4XSF7vNz7lztpg0358bGIMoi3unil%2F0zCNHLCjPNpKoG%2F50IUoYCJFuLbXZzRD2%2BWtuMDkFiPFzlbrYLgLGhAz7DHc%2BXb1HPYb9Enc5ulCK257lT%2BpZA8KFKe1bfZd4k7ffDxgZ%2FVz%2FMDPCCcsPoSXVbILzWFs2uIlRL1zMnQZzNSRF4gvZr5Zn4gnBb2EA7wcRpU%2BiBKQih9Hk9UTUBtGi0l7MuaDZ%2FXm%2BxsOxLNl4LLI6swlkhEiAzGSX6uR72AcxAdSzqy4hCtb%2B4eWOCMXSsTO7%2F4l%2F3mlIdtnG5%2BAeVFsZL%2FCXpY3ZrbYcRfBt9n0RG7YGriuw%2FaRBYwxJLLZIlR0yvUQMR4QA4fdx9Z6NGlFPSf1c6FcPcTW252%2BpjaS4WPTQXJJe8wwAL2QX5OukhF6za4aTOjQgbexIZKUVmsOG1xeaj%2B9orVaPa95W6cTzEIa0xw%2BVXP9QYPsiPPK0l%2FYDCmixZmHogfGGvmMMw0SKZ05slbKqL3T1h3RkRw1s1nuHQGigf8ZzN21NmUn%2BCXmAQf%2FsHyjCt2ovBBjqkAd4zjX11spmokPikTLxl9AzPbR7GSPwE%2FVDQ%2FRdsGR%2BO4VcrbJXVzSHaIg%2Bc7TqtBaNYB7M8RgBhhGtRYHp5XC7mTfBVqZtpBcTM6RmnYdNgVF45gGdx6lMGBjlL1Rtzd%2F9AisCHmLUnMGyWHCx%2B%2BK7VqyK47A0NWjYZKTrUrOpSOHoYR%2BwfxEkCJn6jna11wjs%2B8pZL6FcwPRfcsBvIAOMSZOUx&X-Amz-Signature=367d45ef76f464e8b9fdc20fe895cfbecae4ee8e5d0d5c2752b108e10dbd2f4b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KCWJRVJ%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T070935Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJIMEYCIQCTsejhWMWUzKHsaFfewhzTCjjl%2FjFDmEOFxFKYu5UO8QIhALV2ELwA4EhMYbOIk25bahsS1di5hxcFGloH1yXL1bCaKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwE8xH0h0rWI9IdRAgq3AOKV0c2pPqmmsZLUie%2BXEojiwQCVN10ih6A2Lg%2B1V16f4eKe7%2BAwnG%2B85r5uBivpWQdxinTvD1NxwRubd%2Bw2wuHVO7Q4XSF7vNz7lztpg0358bGIMoi3unil%2F0zCNHLCjPNpKoG%2F50IUoYCJFuLbXZzRD2%2BWtuMDkFiPFzlbrYLgLGhAz7DHc%2BXb1HPYb9Enc5ulCK257lT%2BpZA8KFKe1bfZd4k7ffDxgZ%2FVz%2FMDPCCcsPoSXVbILzWFs2uIlRL1zMnQZzNSRF4gvZr5Zn4gnBb2EA7wcRpU%2BiBKQih9Hk9UTUBtGi0l7MuaDZ%2FXm%2BxsOxLNl4LLI6swlkhEiAzGSX6uR72AcxAdSzqy4hCtb%2B4eWOCMXSsTO7%2F4l%2F3mlIdtnG5%2BAeVFsZL%2FCXpY3ZrbYcRfBt9n0RG7YGriuw%2FaRBYwxJLLZIlR0yvUQMR4QA4fdx9Z6NGlFPSf1c6FcPcTW252%2BpjaS4WPTQXJJe8wwAL2QX5OukhF6za4aTOjQgbexIZKUVmsOG1xeaj%2B9orVaPa95W6cTzEIa0xw%2BVXP9QYPsiPPK0l%2FYDCmixZmHogfGGvmMMw0SKZ05slbKqL3T1h3RkRw1s1nuHQGigf8ZzN21NmUn%2BCXmAQf%2FsHyjCt2ovBBjqkAd4zjX11spmokPikTLxl9AzPbR7GSPwE%2FVDQ%2FRdsGR%2BO4VcrbJXVzSHaIg%2Bc7TqtBaNYB7M8RgBhhGtRYHp5XC7mTfBVqZtpBcTM6RmnYdNgVF45gGdx6lMGBjlL1Rtzd%2F9AisCHmLUnMGyWHCx%2B%2BK7VqyK47A0NWjYZKTrUrOpSOHoYR%2BwfxEkCJn6jna11wjs%2B8pZL6FcwPRfcsBvIAOMSZOUx&X-Amz-Signature=8c71427ed5c6ead8244b27195dbd15356203e5e31bb32fd91d1fbf7c3f471764&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
