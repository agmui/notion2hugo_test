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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBU56WB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhFoi570bsTku9ZBQMo5s936JUHDFTJp7K%2Fo%2BEOMOrdAiBjC1hxy0UbDiFAspPDQ8JNz8lrwnQ9iJlpy46U8nzCFCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlpwD1dO8j8rTUPPmKtwDXD0ToH9tsl9M2XYMmDqz6SMYcd3cSK1gVeX1fdVmjl5aeEq%2FUSbRNyqDtIhPum6l0c04yTkZ3p%2B1xM5eJqVxN9mCelsJgNx%2B%2BOqBjZphWn%2F0dNuIpCjYHPRMvTs7GTp2UVjnUVNKHrqSjDhuyE5XpPJLIFmcqgQ4kwCGtbXzvwSJMnENBYk5lpWK%2BsyKDS03iuLSJc62zqQ9TkVY3J87y6PrrUayF6VMyaCR1avKYUf8dyNlrWQ%2FFmZmcV%2FM9k%2B9IqT5%2Bqz%2BUnRmc%2FmYP%2FinTI7CbMYFmxFPBXg6LSNIJoLT6Xne%2FZQl8K%2FYbjLThbUScHkxT7W6z%2B6k1GCt2LSTjCIpI3lLBrj31REGz0khLMSbXzuuT6k%2FChChDBv7f51%2B0X6QDX0%2BQRgf6ysmGn%2B2FDr6xeEWQKqVF7O5rqB%2FUfY%2BI9ZfRVQ0jXbEJz0aIzaXAIKh3wXWab862XK6IHLFTKch%2F9JI4PKKmcfzGoSW0OUssatUTl4T%2Bd0824bAE%2BwrtOb%2Ftm4RrAkZIutksf%2Bo1fGMqBAyry5MPFNyVTOVNr7TvUqeeaRBaa6sprTy8SOeASYwxMFcRPiQr6lKNGsQwsqmywTsmoWdP0u9qRft32kxUr%2BlwnxXgGFlz%2FUw7qDNwgY6pgHPeIwXgD9JOXLU9fKlfu1ixhfJnKuH3OE2Y%2FqtNjQnVSXWtvs5j1n9TQpMr1aZ1QSM3%2FkNldeuR%2Bzdim4vD4lZ1d9f1SqqUYzYMXUlPWZ5eEIkMGcfzVaF%2BpP9JuZRqOylGpSGCgh3ZxiTsGs66MPuG%2BRAFLc67X2XGaxbwVPdfBl4EQXdrJrxVuPPSL0ulX2bmlNuTzUEsG4HP9IqZogbxQ1lctCl&X-Amz-Signature=963176532582656f37a87faafefdec1226152e93eddb748153d28949f1e38eeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBU56WB%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T004248Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHhFoi570bsTku9ZBQMo5s936JUHDFTJp7K%2Fo%2BEOMOrdAiBjC1hxy0UbDiFAspPDQ8JNz8lrwnQ9iJlpy46U8nzCFCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlpwD1dO8j8rTUPPmKtwDXD0ToH9tsl9M2XYMmDqz6SMYcd3cSK1gVeX1fdVmjl5aeEq%2FUSbRNyqDtIhPum6l0c04yTkZ3p%2B1xM5eJqVxN9mCelsJgNx%2B%2BOqBjZphWn%2F0dNuIpCjYHPRMvTs7GTp2UVjnUVNKHrqSjDhuyE5XpPJLIFmcqgQ4kwCGtbXzvwSJMnENBYk5lpWK%2BsyKDS03iuLSJc62zqQ9TkVY3J87y6PrrUayF6VMyaCR1avKYUf8dyNlrWQ%2FFmZmcV%2FM9k%2B9IqT5%2Bqz%2BUnRmc%2FmYP%2FinTI7CbMYFmxFPBXg6LSNIJoLT6Xne%2FZQl8K%2FYbjLThbUScHkxT7W6z%2B6k1GCt2LSTjCIpI3lLBrj31REGz0khLMSbXzuuT6k%2FChChDBv7f51%2B0X6QDX0%2BQRgf6ysmGn%2B2FDr6xeEWQKqVF7O5rqB%2FUfY%2BI9ZfRVQ0jXbEJz0aIzaXAIKh3wXWab862XK6IHLFTKch%2F9JI4PKKmcfzGoSW0OUssatUTl4T%2Bd0824bAE%2BwrtOb%2Ftm4RrAkZIutksf%2Bo1fGMqBAyry5MPFNyVTOVNr7TvUqeeaRBaa6sprTy8SOeASYwxMFcRPiQr6lKNGsQwsqmywTsmoWdP0u9qRft32kxUr%2BlwnxXgGFlz%2FUw7qDNwgY6pgHPeIwXgD9JOXLU9fKlfu1ixhfJnKuH3OE2Y%2FqtNjQnVSXWtvs5j1n9TQpMr1aZ1QSM3%2FkNldeuR%2Bzdim4vD4lZ1d9f1SqqUYzYMXUlPWZ5eEIkMGcfzVaF%2BpP9JuZRqOylGpSGCgh3ZxiTsGs66MPuG%2BRAFLc67X2XGaxbwVPdfBl4EQXdrJrxVuPPSL0ulX2bmlNuTzUEsG4HP9IqZogbxQ1lctCl&X-Amz-Signature=249d78eb885f7cf0acaf00a6607d6e94e440cb5a2d265b7d3422cb9cfd8b1505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
