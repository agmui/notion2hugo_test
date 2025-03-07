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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JRV7P7%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIGlcxOY1gWnYIdAzAAjUyNYXQ8GfejM8AmvnbaJll4NFAiEA4VqCvnQ9llCDSNsZ1Vx9Fm6lmKi8tV2LxOeYQ3uMC2oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDOTCLRAIHDhWZ5s9vCrcAwjkTzwyRYayQpr%2B%2FkZxH0pla0%2FO%2B%2FHa8hjHmORXE0w33%2Fn8H9DsCVbIwPprye0fYmtb1dpZkOAkV8Tp1Mzp5MINEJXDNtgluko2BKgwROpFScOcNLI8CU0hUJRjp1SsfzxsZ93Bd8FnFtaolU3Ct3DV7z5%2B4wcNSPESQ3ohfD3Wn3I4o8BsnzAjxMdDfFwEgXpBzQmNKyV5CNZGY2xLUNSbbvqEpgkxNvDbM0BoBOmGFrU6h5yav%2B5rgZ8knDEBxSqlrJMff99kYbcaBoj%2FeJlCIggXcmzZUOHyrGhn1dngVsaRylXkWQDgGUvKMA%2BTD%2FvAq6%2F6VOIiIRpJPx2Q4ig7RUKbgZCX2CrG%2Fx8JyA42fUoomX%2Fr3H11T4PSlM9lSfIKdobhD9eM48B%2FuRx0027WVjgJ2VlVX8O8OliCC1SWQ8s4pWiz07y1tc9m7%2B9YjM3oGqBo2pJGD0%2BfvqGo1l3s3hmuO2ghOlBVglL28%2Bhq%2FNONCFSHe8VLoEIkT8KKUGvKYmiU8z0tFoZ1b%2Fn9wYr8fz1Ylw%2BegJhWeSGzO9f13fNKcnPYJ%2FV0EZX50nxUbxgtQeUefrXDLHA3ZMd4DFZSY6COntqQf%2Bv0vVjqjKxZ%2FG%2FRDHmGlz4AlakhMLGgrL4GOqUBg5OG%2FlAnnnup47m%2BOWmnmS5%2FIaUPWsxS9IrVq1ZFzqI%2BXrN%2B7DRP6S0T6l9OW%2BnkJxDI%2FZJoHRJF5EFGHnKPlebIXXug10p7aO5%2BT8fcbVXU6azI9KPKn5HPbrMM8EHjlEZCM5Q5dd3ViykJoZKUZAtzTLwjFaMHAJ7o6Xq5AIdqZhHlSNkhVQZbdb5cR5kxicHh1wktL4Vcc%2BiOn%2BvYeiCwxlkV&X-Amz-Signature=53fee2d617eda533ea99d5c93d4b99286abbdb21123608571b9bec40113ebf5c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46647JRV7P7%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T160930Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAAaCXVzLXdlc3QtMiJHMEUCIGlcxOY1gWnYIdAzAAjUyNYXQ8GfejM8AmvnbaJll4NFAiEA4VqCvnQ9llCDSNsZ1Vx9Fm6lmKi8tV2LxOeYQ3uMC2oq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDOTCLRAIHDhWZ5s9vCrcAwjkTzwyRYayQpr%2B%2FkZxH0pla0%2FO%2B%2FHa8hjHmORXE0w33%2Fn8H9DsCVbIwPprye0fYmtb1dpZkOAkV8Tp1Mzp5MINEJXDNtgluko2BKgwROpFScOcNLI8CU0hUJRjp1SsfzxsZ93Bd8FnFtaolU3Ct3DV7z5%2B4wcNSPESQ3ohfD3Wn3I4o8BsnzAjxMdDfFwEgXpBzQmNKyV5CNZGY2xLUNSbbvqEpgkxNvDbM0BoBOmGFrU6h5yav%2B5rgZ8knDEBxSqlrJMff99kYbcaBoj%2FeJlCIggXcmzZUOHyrGhn1dngVsaRylXkWQDgGUvKMA%2BTD%2FvAq6%2F6VOIiIRpJPx2Q4ig7RUKbgZCX2CrG%2Fx8JyA42fUoomX%2Fr3H11T4PSlM9lSfIKdobhD9eM48B%2FuRx0027WVjgJ2VlVX8O8OliCC1SWQ8s4pWiz07y1tc9m7%2B9YjM3oGqBo2pJGD0%2BfvqGo1l3s3hmuO2ghOlBVglL28%2Bhq%2FNONCFSHe8VLoEIkT8KKUGvKYmiU8z0tFoZ1b%2Fn9wYr8fz1Ylw%2BegJhWeSGzO9f13fNKcnPYJ%2FV0EZX50nxUbxgtQeUefrXDLHA3ZMd4DFZSY6COntqQf%2Bv0vVjqjKxZ%2FG%2FRDHmGlz4AlakhMLGgrL4GOqUBg5OG%2FlAnnnup47m%2BOWmnmS5%2FIaUPWsxS9IrVq1ZFzqI%2BXrN%2B7DRP6S0T6l9OW%2BnkJxDI%2FZJoHRJF5EFGHnKPlebIXXug10p7aO5%2BT8fcbVXU6azI9KPKn5HPbrMM8EHjlEZCM5Q5dd3ViykJoZKUZAtzTLwjFaMHAJ7o6Xq5AIdqZhHlSNkhVQZbdb5cR5kxicHh1wktL4Vcc%2BiOn%2BvYeiCwxlkV&X-Amz-Signature=0a0eb73c761c29ff4542cfa4459bd47724c15719c676c50e1d2a65fe1ca91a22&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
