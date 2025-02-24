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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU4ZAGNB%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWDpG3J6f7ubE0mNfDhHoNqsl1mcQ7eZAsbD1rY%2BOC7QIgQrPlK%2B%2BcZe6thGS2ZjjrcQu7%2F2djXWh0UhWc8dDRmH0q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDBEAtwdskdaidBDTgircA53N6Y96%2BU%2FQvNswsofqO0JMGvbcN4xJB7llC4dI21KwP1pGAzkgwv904%2FJan2ymhzxOSAvn9eqUTqrzVosMKFDCyb0OLp%2Fup32M1IivqKxtoAyfbqveEJjGsrCjtzlDqB2BCxWAywnsGvUCkE3q5x84JCyu%2F6mXihaX2ekV2jSi83Sb8BqydPjPTbHv7NIzQIqGsNC4LserXLlXnXIaglytBVTaLhEc6hYEr6nv98lf%2Bczi0uGZsaeucPKWtpjHOs6y2KPC4%2BMBGCHSB2ttQB22kUvQx5iapWmyzYRHLhI%2FfpocR%2BadflYKkTDUjsiizSeWs1%2F0yho5J7SzMDzW4b2e6sDBMcsRp8p%2FKyh%2BQALZRydT9F7C0Lv5n6YTLLeNJydGj88dP4lMQXowD75Xti5WXii6kVE7S4tdemRObwqcUn57Y3pYi8koB1regA3rHOpc57UU%2FjpsuRscXoJXM%2B0tjDMtZoNfkHzkyfSflSBLBAkYW4vTS2LGgH9XDmGQen5WfRD2ZMDsSPbLc3D1UleVO8gVt4tiYURLznqtl8CnSstYxcCUzwld7zte9j%2B6ee%2FSYa8WW6lZO9bvmCSHZ2tLaD8Gyll63ltS%2BFXrvezB%2FbPhd2oAcHGgeUFcMLTw7r0GOqUBbrga3VnnCSkoKCcA3VGuDJ%2FoJDNSUVe4yXxOv2A0mezSDG2xkSbc4Lklplq2Uq419%2BGtho2HzkUrs%2FGn5czzZiizKMgshAJ1vvTi%2BRmIc3OUjV%2F%2B94SJqpIXCXEROY7ujhWvf1o2wGBzA%2BFPua82Qyut8Vsm2t8N3tdgWFXdS0uPMMYqLlQR97Vu8hwK%2BXYu7JRKdoDG0L1umyr8AvpBbmDWSlD0&X-Amz-Signature=978f4f1ceed964545dda618de0655ef94f57a90ff97d75fe8495c2e2bd83ab8c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TU4ZAGNB%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWDpG3J6f7ubE0mNfDhHoNqsl1mcQ7eZAsbD1rY%2BOC7QIgQrPlK%2B%2BcZe6thGS2ZjjrcQu7%2F2djXWh0UhWc8dDRmH0q%2FwMIIRAAGgw2Mzc0MjMxODM4MDUiDBEAtwdskdaidBDTgircA53N6Y96%2BU%2FQvNswsofqO0JMGvbcN4xJB7llC4dI21KwP1pGAzkgwv904%2FJan2ymhzxOSAvn9eqUTqrzVosMKFDCyb0OLp%2Fup32M1IivqKxtoAyfbqveEJjGsrCjtzlDqB2BCxWAywnsGvUCkE3q5x84JCyu%2F6mXihaX2ekV2jSi83Sb8BqydPjPTbHv7NIzQIqGsNC4LserXLlXnXIaglytBVTaLhEc6hYEr6nv98lf%2Bczi0uGZsaeucPKWtpjHOs6y2KPC4%2BMBGCHSB2ttQB22kUvQx5iapWmyzYRHLhI%2FfpocR%2BadflYKkTDUjsiizSeWs1%2F0yho5J7SzMDzW4b2e6sDBMcsRp8p%2FKyh%2BQALZRydT9F7C0Lv5n6YTLLeNJydGj88dP4lMQXowD75Xti5WXii6kVE7S4tdemRObwqcUn57Y3pYi8koB1regA3rHOpc57UU%2FjpsuRscXoJXM%2B0tjDMtZoNfkHzkyfSflSBLBAkYW4vTS2LGgH9XDmGQen5WfRD2ZMDsSPbLc3D1UleVO8gVt4tiYURLznqtl8CnSstYxcCUzwld7zte9j%2B6ee%2FSYa8WW6lZO9bvmCSHZ2tLaD8Gyll63ltS%2BFXrvezB%2FbPhd2oAcHGgeUFcMLTw7r0GOqUBbrga3VnnCSkoKCcA3VGuDJ%2FoJDNSUVe4yXxOv2A0mezSDG2xkSbc4Lklplq2Uq419%2BGtho2HzkUrs%2FGn5czzZiizKMgshAJ1vvTi%2BRmIc3OUjV%2F%2B94SJqpIXCXEROY7ujhWvf1o2wGBzA%2BFPua82Qyut8Vsm2t8N3tdgWFXdS0uPMMYqLlQR97Vu8hwK%2BXYu7JRKdoDG0L1umyr8AvpBbmDWSlD0&X-Amz-Signature=c391c40c0861d52cee3f032fc4e5caeac254713900db5b4d6bce5152af6a167b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
