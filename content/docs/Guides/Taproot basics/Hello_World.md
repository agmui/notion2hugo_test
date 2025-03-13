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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S74AFGMF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf1g70ndqTFlUMCE7dshvbdwxm7OSK7uY4Pr2472cxhAiEA7QIWyMcAaIqPw4nUWr%2FH71a0yXg579y%2FPbIj95lLQRIqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKKsx9CVWSX1BAj4CrcA7EWN1ntUkLxmyXzDgA7xtC1Fy970Xs05gUMbO9BOk0PXkckfBRbX5Ftf%2Bsl7GglFO2wCjiHYsxsiO3yVBZTEuY%2Fm8c5EyVFrmOb4y6EGllC4sxbZO8sW9lLMQZL73Xon4IAk%2B1EWdhDPdl7g72OiwbBaMyYQuRH4Q3Zs76TNhZ0yL4WIQxK%2Bt00jEQ4U%2B9l14csJtOmykI1t08yr4VFCrOD7EuWss38WgPNElRdgnMotlEFuMIKvWIkL0XlRo7B5XnVcdd2eAAeKwN1b8nN3BSsTe8djxb4t%2FQlemNHdnOwA0DYNHGvxqTvsDWAVn%2Fs4nE1gX5Bi95bHv%2BeE7MlM0EJL1HeAU1JIDRmRXvX%2B1eBOHOYy2SbTzFM8iT3gSH5Nc05rkf7i3tPNZgjB4Wq7shpwn1f3IThf1cIkVazsJXRbv5XixRD41M1YkDFoGBo1JC0nRnumsh9VqPoXkXJNtOuOOX811zJMwAObiUCW9kpGAybfaOT6EFnVMkO46U6V7Gia7za%2FwlIh8fsfPDaH3BotTgLxmtOQmgvwpsc8gYndt%2FyNFd393sOBSWgl8UW%2B59SoPMsVAGx5XvSF%2Fsd4E64QmvkPQISCZY7s%2FCJyDk0JX8TjDgzLN1%2FFgR%2BMLzByr4GOqUBsP8goGWBR48I2GPttssJsNHH%2B8GbIa%2BvSD1VX37rKI%2F67xEuAh2elyvCwVU5ujqD%2Bze3x2e8moSBDj7L0%2BOcZffTQMPrrGniEVTsACa%2BSFN4KQ%2Fp%2FZpKKgjDF6v0y2jGNmwuoyZR07mRhwXfx7Y53MVchAbDEaVEyFUM%2FzMT9WBrZzxrrrGXnWkY2XeD6r5YcI4wqWvpYePicDd%2BHIvxzF0529u8&X-Amz-Signature=fd7a97dbb5eee38710ffb7895558aee8b2e0a1af62340b65f6a936d2130624f8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S74AFGMF%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T121430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFf1g70ndqTFlUMCE7dshvbdwxm7OSK7uY4Pr2472cxhAiEA7QIWyMcAaIqPw4nUWr%2FH71a0yXg579y%2FPbIj95lLQRIqiAQI0v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMKKsx9CVWSX1BAj4CrcA7EWN1ntUkLxmyXzDgA7xtC1Fy970Xs05gUMbO9BOk0PXkckfBRbX5Ftf%2Bsl7GglFO2wCjiHYsxsiO3yVBZTEuY%2Fm8c5EyVFrmOb4y6EGllC4sxbZO8sW9lLMQZL73Xon4IAk%2B1EWdhDPdl7g72OiwbBaMyYQuRH4Q3Zs76TNhZ0yL4WIQxK%2Bt00jEQ4U%2B9l14csJtOmykI1t08yr4VFCrOD7EuWss38WgPNElRdgnMotlEFuMIKvWIkL0XlRo7B5XnVcdd2eAAeKwN1b8nN3BSsTe8djxb4t%2FQlemNHdnOwA0DYNHGvxqTvsDWAVn%2Fs4nE1gX5Bi95bHv%2BeE7MlM0EJL1HeAU1JIDRmRXvX%2B1eBOHOYy2SbTzFM8iT3gSH5Nc05rkf7i3tPNZgjB4Wq7shpwn1f3IThf1cIkVazsJXRbv5XixRD41M1YkDFoGBo1JC0nRnumsh9VqPoXkXJNtOuOOX811zJMwAObiUCW9kpGAybfaOT6EFnVMkO46U6V7Gia7za%2FwlIh8fsfPDaH3BotTgLxmtOQmgvwpsc8gYndt%2FyNFd393sOBSWgl8UW%2B59SoPMsVAGx5XvSF%2Fsd4E64QmvkPQISCZY7s%2FCJyDk0JX8TjDgzLN1%2FFgR%2BMLzByr4GOqUBsP8goGWBR48I2GPttssJsNHH%2B8GbIa%2BvSD1VX37rKI%2F67xEuAh2elyvCwVU5ujqD%2Bze3x2e8moSBDj7L0%2BOcZffTQMPrrGniEVTsACa%2BSFN4KQ%2Fp%2FZpKKgjDF6v0y2jGNmwuoyZR07mRhwXfx7Y53MVchAbDEaVEyFUM%2FzMT9WBrZzxrrrGXnWkY2XeD6r5YcI4wqWvpYePicDd%2BHIvxzF0529u8&X-Amz-Signature=8624b02b0d3125cc6fd145b1a1c0e68c9777ab81382bec0151db2feb3322c03e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
