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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7II6IPH%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDcRu6Ijx3zBF2e2NyxsXuCzgVwmWpQC0BZlKNqluGN%2FAIhAP9HB5pPegYLAE1djMIbqA0XzKhRy0LrJNYJWkhRF2WFKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbLHhh2KrvwmEsxZIq3AOYooEcZDWV2eT0VRaE4cDZXDAyQnDe4BNYgpj%2F0DpQ3lcm8ne1H%2BxY0ddBrN4YqtwZWUR0B8ECOtZ4Gq1K9otPEglLvxzeyvCmdAlivPezFLCMcv6retP1J0jC%2BhSxRhgYBaSyt3ExLycyHIeHkQT89kWPSEqlW4vmaLkIqIvuOU2OKN%2Fg9KxPiKxLrC2%2Bnd6fpjuyOzib7Hjx5A6KRSjuNdvsAVBhmOslRwv9thAKlGCn8Qvji7ECujz%2B9zr0UyvokpQt5mJUaBAHUnx6djdddo5SuQuG%2BtQoYQKqyOVoRWZaGRbB245g5hKYW5Fc2r3VbvXLKeUtig7kJ%2BMawwcLrM70pWk5uyTGPhsfM%2B2k2vc4JbVIyDK0MKFaHGHFi4nABKRmoX2JS2qhQgTkt1XFbSBEOUXDDqQJ1FtMJmNhheX74kUIU5mFcAdA1WBIvtZimd91eq9SI2n8fNjJ%2Fy3l%2FbD8OQZp8Fgmt6iZ9fu%2BI1k%2BTlV6EfIZkqSZVi8xhKbxx4hcAFCNPRNuHSNmjvMRJFWWPfbA5dVwjrYSMKVnAtDNPqRuiTybYyb%2FbMoe4EjkfyHByBQF0kYwWec5pc3ZYBpoPhHe%2BGbnMe0uoWO2Av9oLKq0SKIblRZe4DCl0K%2B%2FBjqkAYChdFpCGS9Y0UHnmXZxuZF%2Fd3Wkpulr%2BOd7jNt34t35ouD54vcg%2BX73g3iRtwN%2F6pCSsEsepfl6GR%2BSUbxNXZVu4aImUoLzcGsF68m8H2qT%2FMBLG63DQTtsd4MLThS95KzfP2ClvJS5ZxIqYwE%2FqcdVtERF0HO1x%2FJNk0ni7%2BwER4rS8qmPB9jnxgmLMkKIgnWok%2B0YXDHrJpX2moWEEwGEhtDb&X-Amz-Signature=f5393d4607f75aa366ffd2dfdfd561646ede0c0e301c1d4ce1022c6c3e2cd818&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V7II6IPH%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T140832Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJIMEYCIQDcRu6Ijx3zBF2e2NyxsXuCzgVwmWpQC0BZlKNqluGN%2FAIhAP9HB5pPegYLAE1djMIbqA0XzKhRy0LrJNYJWkhRF2WFKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxbLHhh2KrvwmEsxZIq3AOYooEcZDWV2eT0VRaE4cDZXDAyQnDe4BNYgpj%2F0DpQ3lcm8ne1H%2BxY0ddBrN4YqtwZWUR0B8ECOtZ4Gq1K9otPEglLvxzeyvCmdAlivPezFLCMcv6retP1J0jC%2BhSxRhgYBaSyt3ExLycyHIeHkQT89kWPSEqlW4vmaLkIqIvuOU2OKN%2Fg9KxPiKxLrC2%2Bnd6fpjuyOzib7Hjx5A6KRSjuNdvsAVBhmOslRwv9thAKlGCn8Qvji7ECujz%2B9zr0UyvokpQt5mJUaBAHUnx6djdddo5SuQuG%2BtQoYQKqyOVoRWZaGRbB245g5hKYW5Fc2r3VbvXLKeUtig7kJ%2BMawwcLrM70pWk5uyTGPhsfM%2B2k2vc4JbVIyDK0MKFaHGHFi4nABKRmoX2JS2qhQgTkt1XFbSBEOUXDDqQJ1FtMJmNhheX74kUIU5mFcAdA1WBIvtZimd91eq9SI2n8fNjJ%2Fy3l%2FbD8OQZp8Fgmt6iZ9fu%2BI1k%2BTlV6EfIZkqSZVi8xhKbxx4hcAFCNPRNuHSNmjvMRJFWWPfbA5dVwjrYSMKVnAtDNPqRuiTybYyb%2FbMoe4EjkfyHByBQF0kYwWec5pc3ZYBpoPhHe%2BGbnMe0uoWO2Av9oLKq0SKIblRZe4DCl0K%2B%2FBjqkAYChdFpCGS9Y0UHnmXZxuZF%2Fd3Wkpulr%2BOd7jNt34t35ouD54vcg%2BX73g3iRtwN%2F6pCSsEsepfl6GR%2BSUbxNXZVu4aImUoLzcGsF68m8H2qT%2FMBLG63DQTtsd4MLThS95KzfP2ClvJS5ZxIqYwE%2FqcdVtERF0HO1x%2FJNk0ni7%2BwER4rS8qmPB9jnxgmLMkKIgnWok%2B0YXDHrJpX2moWEEwGEhtDb&X-Amz-Signature=c646b3e4466028dff2df0d71098813cf38bac0c6ab5c8c01bd0bfbb356dbd3cd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
