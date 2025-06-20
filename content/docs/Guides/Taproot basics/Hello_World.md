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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M4RDOAF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRemUTtGBWB%2FeOl4VrIvuPSPSfSRQdMPesBfj%2FzMbFAIhAJLLDCw9mW4%2Ff90kIfbTO%2FUhJblw0wxyfImBo2WMUe3zKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIpHOj0RtwD0mpN2Aq3ANGuDyx7xRDTvv%2BxDkiD38eXUicNt%2Bue%2FStdWLgYM9fhfwgOjsyFfr6nrGrV6USecsuzZ8CC23bQrTKLtPw9cpsjmW0ouF7vhavjcz6zsxnmnbdhkSa9oZA9boq8aCyaPcvyCt5B%2BYDAklU1pNpMo8Ue8yP1X5QEaVovwvc%2FakJA1Al8KwJhoadChpuCeQP3Ce4CeA5sNPEyPTY6lsPngsjFyy3o8P9jciF97wvBTGUK5j0siHEZ3uYQXMPCZNLz%2FtNU9HJiU%2FvlMAHy9PCyCzmOUeauPxNKPd2%2BvshHqk%2BCq10nJ5ddjbydc1bl0uiyFVk1Ci1Ld1vtxFmTn6DjtCRU0zmJTpiFQlv%2Fp4AGpyCah7KCxMk8EHEzvbECetZowmKrSbjbIgTzUecXRkZEvFNvoAk37BYkKW0J1F%2Fg52YBJItEfK9yEle8%2BtM5eIEQGyrUcgmFPXjACGYboQrlDpMkoMbhrpvBVfQA%2BXFUnmxOatJRQAqId540bE19TLbQqaCswATDEhvVVfZld8yxJQg9HhB%2FRIJCId322qflTV5vTB49W%2BkAhqubicKeg%2BnUTcrKTO1%2FgFYpBlBrNQzL%2BEDUSPTBamMYRhhvZclg45YjaVgCUTNfgRQT0PfoDCVpNXCBjqkAWp5OnsBS5IceXN7bilFjgktVgM0Ni8nSxPpZrJJM43Hf0FneaXfGblddlYROM6hf6IVt%2Fx5urjok5YLuIeg7AnrMepzbrWRVr440IMNxWeL6d3f4bE8lVEavszFcpcJ3%2FMrXwA%2B9Xr8gO4X2OaNiq5z%2Ft2skDWwSTghLYjM0zA1sRlUQXQ3U9QgXTE5u660aSiUb9PJbDIkokjxuMXsDd16mmL6&X-Amz-Signature=314e9d82bb5c668110e7f2f8fb202068d79ed1d1f739e4057b2e21a24258f206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664M4RDOAF%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T150840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDMRemUTtGBWB%2FeOl4VrIvuPSPSfSRQdMPesBfj%2FzMbFAIhAJLLDCw9mW4%2Ff90kIfbTO%2FUhJblw0wxyfImBo2WMUe3zKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzIpHOj0RtwD0mpN2Aq3ANGuDyx7xRDTvv%2BxDkiD38eXUicNt%2Bue%2FStdWLgYM9fhfwgOjsyFfr6nrGrV6USecsuzZ8CC23bQrTKLtPw9cpsjmW0ouF7vhavjcz6zsxnmnbdhkSa9oZA9boq8aCyaPcvyCt5B%2BYDAklU1pNpMo8Ue8yP1X5QEaVovwvc%2FakJA1Al8KwJhoadChpuCeQP3Ce4CeA5sNPEyPTY6lsPngsjFyy3o8P9jciF97wvBTGUK5j0siHEZ3uYQXMPCZNLz%2FtNU9HJiU%2FvlMAHy9PCyCzmOUeauPxNKPd2%2BvshHqk%2BCq10nJ5ddjbydc1bl0uiyFVk1Ci1Ld1vtxFmTn6DjtCRU0zmJTpiFQlv%2Fp4AGpyCah7KCxMk8EHEzvbECetZowmKrSbjbIgTzUecXRkZEvFNvoAk37BYkKW0J1F%2Fg52YBJItEfK9yEle8%2BtM5eIEQGyrUcgmFPXjACGYboQrlDpMkoMbhrpvBVfQA%2BXFUnmxOatJRQAqId540bE19TLbQqaCswATDEhvVVfZld8yxJQg9HhB%2FRIJCId322qflTV5vTB49W%2BkAhqubicKeg%2BnUTcrKTO1%2FgFYpBlBrNQzL%2BEDUSPTBamMYRhhvZclg45YjaVgCUTNfgRQT0PfoDCVpNXCBjqkAWp5OnsBS5IceXN7bilFjgktVgM0Ni8nSxPpZrJJM43Hf0FneaXfGblddlYROM6hf6IVt%2Fx5urjok5YLuIeg7AnrMepzbrWRVr440IMNxWeL6d3f4bE8lVEavszFcpcJ3%2FMrXwA%2B9Xr8gO4X2OaNiq5z%2Ft2skDWwSTghLYjM0zA1sRlUQXQ3U9QgXTE5u660aSiUb9PJbDIkokjxuMXsDd16mmL6&X-Amz-Signature=ad0e6d92358e035621ffd9870faeec416174057ac37f65617d9091caecbae7d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
