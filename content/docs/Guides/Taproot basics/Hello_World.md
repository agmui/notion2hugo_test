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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZHKTUEW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIGAj9rq7FTomlY9%2B9nLjFO%2FIVvi8aNQGiKMX%2B636XkU1AiEA6w99hVbMzoBQLFc6mgvzQAcyP2O%2FhIrSqs0Ydr9KUnEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOqqQDQ3yJczfDSCxSrcA333nLhrA2EIBelSrDfeWf7GfvY8JLwucOIDxZYi9oLiJQ5h3pPXrj9tftzzseE70LxFDqM71%2F%2F6rIWNs2hGaDLFo%2BadOoL3v%2BTeRd9se6KIinYj8OvOBc18AiF04dfKsx4nFMx5XC9IfGgUcmd0aYExeqBX0DfzSwLo0iibpCbD5ALakRmd7%2Bxs6M3VdamVDcnp9mxGKn0%2Bv2864G9sUUSs70GbzxcZGm2BdLMnQPB9%2Bu55fAGX9%2FPxqitQ7i%2BoYzGgG6a%2BufEAgHFw3dNTXvC8QXOI2Nk4pbMKH1mXIO0tDNQMFZd30315jXOsbeXb0VTWSF5qrWC6YAbRK0rDI0jVmGeja%2BliMpSzIsOKyzOwQu5hR%2BdFhL6Ee5vSJVVeyXME29Z%2B556ommZy5MUzfTFMdqUdsgnBAb9CDVQQdX17gfNXxDekR60dkR5QSHl0RFCQHjdLJEDTvJ27AxOzP0jT2n3koL2icBspwlMVbISKIUUudUwwv3%2B0NsorKSODT784QEv4FHs3Q%2FTwWv1mFKA9gWE9RqGgpQhOhEEQlRDie2%2Bv66cUBEivZ2zl76zLC5R%2FDOq5DvTQL9d6P01li%2FIo0aY4ZUZr3LXkXbWpejGjpAiSHHOjiwxBvtT1MMrK9b0GOqUB004uOEHxm42e4Pnl6rm81DlrTLFRUw3OqYBIbj8nWCHfM0viTQqkz3MNy0zhc%2BfiRbcOR%2BWt8m29cjyUG%2FJLYO5hfDgz0ozgN38uCt7d%2BPnIp8T9%2Bf0DH%2F9o8IEO4BDFIxl6ZEAKm7A3ComgtniRew8hJiPj283ixNdg5ch2jClvgzw7XAgL4G8dnb2H1xQUI57%2FbMpyzN1P2HG%2FpyjfqXB1q02T&X-Amz-Signature=dc66b6be9bb55cf5a4a4955c2fcf59b87b634138e0e18941ec64f650459f6b73&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZHKTUEW%2F20250225%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250225T070810Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAcaCXVzLXdlc3QtMiJHMEUCIGAj9rq7FTomlY9%2B9nLjFO%2FIVvi8aNQGiKMX%2B636XkU1AiEA6w99hVbMzoBQLFc6mgvzQAcyP2O%2FhIrSqs0Ydr9KUnEq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDOqqQDQ3yJczfDSCxSrcA333nLhrA2EIBelSrDfeWf7GfvY8JLwucOIDxZYi9oLiJQ5h3pPXrj9tftzzseE70LxFDqM71%2F%2F6rIWNs2hGaDLFo%2BadOoL3v%2BTeRd9se6KIinYj8OvOBc18AiF04dfKsx4nFMx5XC9IfGgUcmd0aYExeqBX0DfzSwLo0iibpCbD5ALakRmd7%2Bxs6M3VdamVDcnp9mxGKn0%2Bv2864G9sUUSs70GbzxcZGm2BdLMnQPB9%2Bu55fAGX9%2FPxqitQ7i%2BoYzGgG6a%2BufEAgHFw3dNTXvC8QXOI2Nk4pbMKH1mXIO0tDNQMFZd30315jXOsbeXb0VTWSF5qrWC6YAbRK0rDI0jVmGeja%2BliMpSzIsOKyzOwQu5hR%2BdFhL6Ee5vSJVVeyXME29Z%2B556ommZy5MUzfTFMdqUdsgnBAb9CDVQQdX17gfNXxDekR60dkR5QSHl0RFCQHjdLJEDTvJ27AxOzP0jT2n3koL2icBspwlMVbISKIUUudUwwv3%2B0NsorKSODT784QEv4FHs3Q%2FTwWv1mFKA9gWE9RqGgpQhOhEEQlRDie2%2Bv66cUBEivZ2zl76zLC5R%2FDOq5DvTQL9d6P01li%2FIo0aY4ZUZr3LXkXbWpejGjpAiSHHOjiwxBvtT1MMrK9b0GOqUB004uOEHxm42e4Pnl6rm81DlrTLFRUw3OqYBIbj8nWCHfM0viTQqkz3MNy0zhc%2BfiRbcOR%2BWt8m29cjyUG%2FJLYO5hfDgz0ozgN38uCt7d%2BPnIp8T9%2Bf0DH%2F9o8IEO4BDFIxl6ZEAKm7A3ComgtniRew8hJiPj283ixNdg5ch2jClvgzw7XAgL4G8dnb2H1xQUI57%2FbMpyzN1P2HG%2FpyjfqXB1q02T&X-Amz-Signature=81f9fb7ce4ddc459cd2d38feb41245b901b97fd74a1ec3e90a5b663822c912b5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
