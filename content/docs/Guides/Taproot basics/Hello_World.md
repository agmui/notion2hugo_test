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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JSF4GG2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX6UbNBGLW7JlEMa8q3d68bVsBNJZZkjBS50SJ0Nm19AIgVh73k0pNxz88%2F26TcTbIOAh7o6hi0T%2FO%2FaQ3u4eTEPoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIrqTGDhoDhbRLel0yrcAzVZv%2Bnoh9Y5pQWeszTfa5j7LWZ5pZrIIUJ8TlL90qXD7cKxsTDaXoUTx6PglrgK2qUAJk9E3XOhVb%2F6A7uaJ93H4GuyYIUR5G6Wo2r6CQ%2FJgWHc%2FVyzoSPPdNgGgzMdCOuk1EYdXu9WSgwIiEkZS6%2B9d%2BIC0vBmpNcAOpgVWytWhQIpgxgT2Oc9P21esQWbOwIj652fxCHW7ORI8nfIqjLBQ9CXByh7vwfyTR%2F83KHIE2PsAxl1UW%2BCtrnNfGeUTXX%2FLGSm8bidSHzG2FQm8ChaB7DhJFepjSuw9W%2B%2B%2BlzcNw6TskN36TfXqJNomuOo%2Fs0zmIgdD4BOk00j4um3EukVsrKIwFGEgeJR7PSdj%2FjA%2FDYbIVbMO1aszqLyFZ3I4v7CMNq7w6O64wfN3oiHmHED65eMz0UohDTDNlIgpuKZOmi5C9Q0%2BcKftzkdxKLfpfsfe6iDhZNISB9r%2BO4QVKc7v32yCliJV2Hcm%2BmPmvZPXA5OTCY%2BW4cY7kc8A3d8NlRFkxtRXESNrEvuqOF%2FKZUh3LWl08V2NP8mPEKIANcSZflLwKJrIrx%2FTApqgET15uwJvtTuMHbIMc8NpPS0Fay2A8xxd0NoCt0HFRuNt20AXRYlpyV2YJOdh0Y8MOGT2r4GOqUBiRp%2F4ofJ8WyiYCKNQFLsY5CM%2BrBsnFT%2FzHYH3ZYJYJ1yxWyT8l8XD2p8QZaiXufOwOA%2FsVOTaghqodIsb%2FvMj9cRhicYbjkwmRCIRMiT2dIuNmy%2BffKpUu6AjB32Aja5rsAgSG5z5DJWqKmghn1FMmy4ZRwD8NWwO4edSefBWHPuiuyzrZDYgnBnjWgb%2FQjGWIDHuui%2BA7%2FChUPt9PAQbtNgHg4V&X-Amz-Signature=2e7f99a34762f9baeb1081ef5b745554e37d5378517943fde7eb4dcc84f31553&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JSF4GG2%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T090703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX6UbNBGLW7JlEMa8q3d68bVsBNJZZkjBS50SJ0Nm19AIgVh73k0pNxz88%2F26TcTbIOAh7o6hi0T%2FO%2FaQ3u4eTEPoq%2FwMIKRAAGgw2Mzc0MjMxODM4MDUiDIrqTGDhoDhbRLel0yrcAzVZv%2Bnoh9Y5pQWeszTfa5j7LWZ5pZrIIUJ8TlL90qXD7cKxsTDaXoUTx6PglrgK2qUAJk9E3XOhVb%2F6A7uaJ93H4GuyYIUR5G6Wo2r6CQ%2FJgWHc%2FVyzoSPPdNgGgzMdCOuk1EYdXu9WSgwIiEkZS6%2B9d%2BIC0vBmpNcAOpgVWytWhQIpgxgT2Oc9P21esQWbOwIj652fxCHW7ORI8nfIqjLBQ9CXByh7vwfyTR%2F83KHIE2PsAxl1UW%2BCtrnNfGeUTXX%2FLGSm8bidSHzG2FQm8ChaB7DhJFepjSuw9W%2B%2B%2BlzcNw6TskN36TfXqJNomuOo%2Fs0zmIgdD4BOk00j4um3EukVsrKIwFGEgeJR7PSdj%2FjA%2FDYbIVbMO1aszqLyFZ3I4v7CMNq7w6O64wfN3oiHmHED65eMz0UohDTDNlIgpuKZOmi5C9Q0%2BcKftzkdxKLfpfsfe6iDhZNISB9r%2BO4QVKc7v32yCliJV2Hcm%2BmPmvZPXA5OTCY%2BW4cY7kc8A3d8NlRFkxtRXESNrEvuqOF%2FKZUh3LWl08V2NP8mPEKIANcSZflLwKJrIrx%2FTApqgET15uwJvtTuMHbIMc8NpPS0Fay2A8xxd0NoCt0HFRuNt20AXRYlpyV2YJOdh0Y8MOGT2r4GOqUBiRp%2F4ofJ8WyiYCKNQFLsY5CM%2BrBsnFT%2FzHYH3ZYJYJ1yxWyT8l8XD2p8QZaiXufOwOA%2FsVOTaghqodIsb%2FvMj9cRhicYbjkwmRCIRMiT2dIuNmy%2BffKpUu6AjB32Aja5rsAgSG5z5DJWqKmghn1FMmy4ZRwD8NWwO4edSefBWHPuiuyzrZDYgnBnjWgb%2FQjGWIDHuui%2BA7%2FChUPt9PAQbtNgHg4V&X-Amz-Signature=126f2cc0a6d456569e87fabc6c275546862c0413077af23f7942852ce74ba58b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
