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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652I72OWH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIG%2FCEmPDMXPPTiIT3%2BDNjC9XQ7UfstqH5yF%2FzaZGMkmfAiAn8ZOaZUYi5cLNmW21%2FwAhdGYYASkHU0C1vh4ShucSjyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM27S%2FuxYHFomQgCR2KtwD61QI9fEdtbmw5yxf760hZKnt8LQ1F0cXcsKPeeNaIZx3%2BRiclPQ%2Fxexewobiu%2BjhweZ7guK%2F%2FW0uNea%2FCcipD%2BalKiCELH1MmD3IzOs7DpgA76IC8arx%2Fiw%2FdukZLBlU0wcseGGEJ2kDJHTzD9DoYaCcaCGKoL4OKiFrXnxkCVnexrUD2rJ3OMBFreJCGVfN35c9smzkvu4T1bLoGMUGFFKpPO8dVe%2FKdD%2BoeSIZM8IjCE5Fb%2BRs0K6z566GVI8NNjy%2BEMxXi3si51BfEHuBoNWBhNkOcUcrzSrF8lf6LfyRelqJPYuxRjVlSMFMntmaYjgOTbiKYAastTdXJY9eOwFDzMU0F7WlaXFMWQVVod7iC8Ym5bcOYyNyn6dWn%2FkoZ2sPeBFFTk1BHWsftHUBrKq5Se98pSNaxC4z19Z1JSsypbdPLM16Qp4EEgsKG9EbnbSwJ8Wf0Wthn2nH8utv2LH394AdnWdTp6Bc7KwIK1CfyEYJvrojjKNGCIaBaruotYIQNSI4KfMXL%2BgfvJa7intQ93ICXQFDObvkTpJEy%2Bhec%2FaTz7nryZVVCPzmbS7nJEBwxQINbBEt6Oyu3MrczqPJZCRrRcEm0%2BAaTUAokjBgKlfzf5cRQV1EYFMwzZ6%2BwgY6pgF8H1G6%2BW2Z2y78XnodSCyN1azETGkZgZU1WZXLDGQjoBG2BMv7cE6WU4dCpF80Ifbn3T3PuYX%2BXIAk5wlYIxPogOtdQinCqcWsMGPvLZ4ON%2FvmbQhy7kfYOuVaB3EBGW%2Finump9pQICBcqRTSM8it3ydAcNPe6Nq4Pceo1PCRNvADV7DWjWodLPnS4Rry%2FEcAgREzOr2OLLq47LTJ4Nt5m4YYaXNLu&X-Amz-Signature=80c0dafaeb1c492638349b60930e3a4577774216c7a5d1d616477d097341ecc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652I72OWH%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T051156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIG%2FCEmPDMXPPTiIT3%2BDNjC9XQ7UfstqH5yF%2FzaZGMkmfAiAn8ZOaZUYi5cLNmW21%2FwAhdGYYASkHU0C1vh4ShucSjyr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIM27S%2FuxYHFomQgCR2KtwD61QI9fEdtbmw5yxf760hZKnt8LQ1F0cXcsKPeeNaIZx3%2BRiclPQ%2Fxexewobiu%2BjhweZ7guK%2F%2FW0uNea%2FCcipD%2BalKiCELH1MmD3IzOs7DpgA76IC8arx%2Fiw%2FdukZLBlU0wcseGGEJ2kDJHTzD9DoYaCcaCGKoL4OKiFrXnxkCVnexrUD2rJ3OMBFreJCGVfN35c9smzkvu4T1bLoGMUGFFKpPO8dVe%2FKdD%2BoeSIZM8IjCE5Fb%2BRs0K6z566GVI8NNjy%2BEMxXi3si51BfEHuBoNWBhNkOcUcrzSrF8lf6LfyRelqJPYuxRjVlSMFMntmaYjgOTbiKYAastTdXJY9eOwFDzMU0F7WlaXFMWQVVod7iC8Ym5bcOYyNyn6dWn%2FkoZ2sPeBFFTk1BHWsftHUBrKq5Se98pSNaxC4z19Z1JSsypbdPLM16Qp4EEgsKG9EbnbSwJ8Wf0Wthn2nH8utv2LH394AdnWdTp6Bc7KwIK1CfyEYJvrojjKNGCIaBaruotYIQNSI4KfMXL%2BgfvJa7intQ93ICXQFDObvkTpJEy%2Bhec%2FaTz7nryZVVCPzmbS7nJEBwxQINbBEt6Oyu3MrczqPJZCRrRcEm0%2BAaTUAokjBgKlfzf5cRQV1EYFMwzZ6%2BwgY6pgF8H1G6%2BW2Z2y78XnodSCyN1azETGkZgZU1WZXLDGQjoBG2BMv7cE6WU4dCpF80Ifbn3T3PuYX%2BXIAk5wlYIxPogOtdQinCqcWsMGPvLZ4ON%2FvmbQhy7kfYOuVaB3EBGW%2Finump9pQICBcqRTSM8it3ydAcNPe6Nq4Pceo1PCRNvADV7DWjWodLPnS4Rry%2FEcAgREzOr2OLLq47LTJ4Nt5m4YYaXNLu&X-Amz-Signature=7358e4df06849b525da001776569a95299bb526116ce2bcd1e70fa5a672d558f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
