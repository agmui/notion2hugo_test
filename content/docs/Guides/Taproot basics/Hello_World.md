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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRI5V224%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3EaqOYCGtCiaADxt3papuDH2JVm2D%2FOwsloRmsVAk0QIhAOSDJ9j3cLbDAynJuh8Rva1MDjVf%2By4krEXaOqvsOqNmKv8DCFMQABoMNjM3NDIzMTgzODA1IgzFMw6G6sFGIul5EAQq3APPSpv77veiMjY%2FiC6zNTZaGK7qCRKWV%2B15hyIEZB0%2BNdw4pule01lk5Drt9qqTgr%2BHqklXDCrdrhABEjHnMFipvIaRonicJrontgv2%2FJP3rqxXCfmw1cSdAFDlbfrgSW%2FT8n3Ikf4OGkzPkQm4d%2BU3OKwFGac9ZKnjkDYdjgdL3qyjijtG8fUFm3j898wq7hxgNFO0vNGPa2hpjc%2F9PPhbG9Mm%2FrV76zdhmeqW3yyhINs86ta3AqLpnOgWP5VPHA30pQnfnyM%2BeERgiejTmSwTdE6371AbPFed97yRlBAJ6Nw1AappqEf7tyzUcs6AEU3w7%2B2cqSDvwrWTwLd%2B7iOVdoiefV8XCFnuOpLLa4gi22KipSI4IXrM1vMqOL5682ryJEnki46t3qxtasOBiAafTXeHLi3nq%2F6ew%2FxoQxseAfh2KrHZSE1FYErt5EsCINoMuqWuqbJVoV%2FdeCtXWrlmOjOBsiXfAXDQ%2FX7Jtic3PY94qZxVWTfzMxm6EVJHsG9k97p%2BDJindY7F5CO22i%2FQCUtTodVRrdzl%2FMCmgjF8RMHb%2F0UxzsneBFyrbw7Vr8FtKZqGu49q3xxv0R7Pp%2FRdDh4xHl%2Fsvbi1FQMSHV1fhKTuakpttKoQkF5ZozCExoHABjqkAZEsP%2FRyjv%2FP7HkSHquuPxyvY7fcwbeRqPDk6mNp%2BmX%2FjysvMQBNe5tHBAGziwtddbtvWw8tmfNaNqD4WUrZkWN4O%2BSHuYBTThzsrwYbLcFvMsG5%2FSq8P2OGzGd9cFoOvsUWnZ1%2F%2BFe62k%2B188a20XKx%2B0a1Ry08n%2FJ1wCfiBsImB2hyaeFmC4a4Tvz3UJY5%2FMykj9ryj972AF4qiOFz1qEI%2FFeY&X-Amz-Signature=42bf0dffb41529313813ad1cc1caba6ce28f71fd78b91121d6d896249c2ced4f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRI5V224%2F20250417%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250417T022107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC3EaqOYCGtCiaADxt3papuDH2JVm2D%2FOwsloRmsVAk0QIhAOSDJ9j3cLbDAynJuh8Rva1MDjVf%2By4krEXaOqvsOqNmKv8DCFMQABoMNjM3NDIzMTgzODA1IgzFMw6G6sFGIul5EAQq3APPSpv77veiMjY%2FiC6zNTZaGK7qCRKWV%2B15hyIEZB0%2BNdw4pule01lk5Drt9qqTgr%2BHqklXDCrdrhABEjHnMFipvIaRonicJrontgv2%2FJP3rqxXCfmw1cSdAFDlbfrgSW%2FT8n3Ikf4OGkzPkQm4d%2BU3OKwFGac9ZKnjkDYdjgdL3qyjijtG8fUFm3j898wq7hxgNFO0vNGPa2hpjc%2F9PPhbG9Mm%2FrV76zdhmeqW3yyhINs86ta3AqLpnOgWP5VPHA30pQnfnyM%2BeERgiejTmSwTdE6371AbPFed97yRlBAJ6Nw1AappqEf7tyzUcs6AEU3w7%2B2cqSDvwrWTwLd%2B7iOVdoiefV8XCFnuOpLLa4gi22KipSI4IXrM1vMqOL5682ryJEnki46t3qxtasOBiAafTXeHLi3nq%2F6ew%2FxoQxseAfh2KrHZSE1FYErt5EsCINoMuqWuqbJVoV%2FdeCtXWrlmOjOBsiXfAXDQ%2FX7Jtic3PY94qZxVWTfzMxm6EVJHsG9k97p%2BDJindY7F5CO22i%2FQCUtTodVRrdzl%2FMCmgjF8RMHb%2F0UxzsneBFyrbw7Vr8FtKZqGu49q3xxv0R7Pp%2FRdDh4xHl%2Fsvbi1FQMSHV1fhKTuakpttKoQkF5ZozCExoHABjqkAZEsP%2FRyjv%2FP7HkSHquuPxyvY7fcwbeRqPDk6mNp%2BmX%2FjysvMQBNe5tHBAGziwtddbtvWw8tmfNaNqD4WUrZkWN4O%2BSHuYBTThzsrwYbLcFvMsG5%2FSq8P2OGzGd9cFoOvsUWnZ1%2F%2BFe62k%2B188a20XKx%2B0a1Ry08n%2FJ1wCfiBsImB2hyaeFmC4a4Tvz3UJY5%2FMykj9ryj972AF4qiOFz1qEI%2FFeY&X-Amz-Signature=4e2505d4c1313e0efff1d2f40847221a46fcf740e9388a660c754373b5cbf1fa&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
