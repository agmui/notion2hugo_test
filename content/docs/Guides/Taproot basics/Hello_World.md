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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT6ILHLY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcIZH8xr%2F23uhh%2B2F2b7Ta02lNDJDNZt3oSf2lUQQYiAiB7Any7JwFbfbU5g03O8tfKrFFTrWgpuUb1qofq7PJDKSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwqwnu4F%2F1TUseH98KtwDYs3jAgk1z020ZRq5b6x%2BNEWnYo6BrcGtBNVojgp69kq2gW76u7yBlB%2BeaaF28hd0OkgxUX8qF6d5tsQiw2tRvCeyxRy7VeHOXblb1UeGJoeG13jm8%2Fqsm0DOToV0zY02%2BwvbpHNbAy3I%2FvH%2BcOuZxpWk2LIUG%2BreSSQD45IWigkeEKtm9HRGhwl1iloRldr4TxiM2aLSP30glG5PD2vOQxZYrG1kza%2B2p%2BxDbjTcqooxfdHh1iBvIIHiRfsEd%2F%2BqN%2BaN5pZMQ264VdDbHgbG%2FaAo4doxWFLJoaAvEzkGI7vGbiZWfwCpw1oWisf6Z5sPCDsHurkDypaxmZAaRRkM4pnWiVhEfSJC37jF6bSih7h49E2fyRBIXzt1gXnXcEZFmxM6gFCik8IVTR92Sse7c%2BN9NzQzZe59DIRxk5EoTjCpMVCUo%2BYIKyKP2G70pPsQs7yLg%2BoBKnNSxXEPo%2Bcbma91A%2Bz5O2UsiyHEmigHd9Mk1LqNNO8w8CcPEK0kATQ%2BraNuNkazzzUxNsQNbvYQH60o5pHlaVakmmwpC8ltNjh38mxrr5pDBphCAtArjOfVjxSMIof16ZLiC7T9Ow5xH77sLCJzpLWSuUzb9H7UFsmc4vHws8Yhf83jBQAwwvCdwgY6pgHSdz9JRMM%2FJVXPcwSf7%2FJl6euKHegH7r8BvQ3TCDOiXlPxzNhzK0UkYFM2zvduXd1ySK2lc8zLBfHTfcEDN3TAz01xnkyPFuqc7m%2BvwHh2YZFNrBod%2BHD7HJSe0uz0GYaMyLScFfFHjHeedam0WpKI4CEhXAKpTkqbYhFl9TDmodi1o4VyPLszlx8mOJHL%2BJBhwixJN%2BDCUb2wdL0r0EtjTKle3OtU&X-Amz-Signature=f49573ee01439cb902a0fd9654615692a2f693ec9facb020ae8e5d2c82fb9083&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UT6ILHLY%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T004222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICcIZH8xr%2F23uhh%2B2F2b7Ta02lNDJDNZt3oSf2lUQQYiAiB7Any7JwFbfbU5g03O8tfKrFFTrWgpuUb1qofq7PJDKSqIBAix%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwqwnu4F%2F1TUseH98KtwDYs3jAgk1z020ZRq5b6x%2BNEWnYo6BrcGtBNVojgp69kq2gW76u7yBlB%2BeaaF28hd0OkgxUX8qF6d5tsQiw2tRvCeyxRy7VeHOXblb1UeGJoeG13jm8%2Fqsm0DOToV0zY02%2BwvbpHNbAy3I%2FvH%2BcOuZxpWk2LIUG%2BreSSQD45IWigkeEKtm9HRGhwl1iloRldr4TxiM2aLSP30glG5PD2vOQxZYrG1kza%2B2p%2BxDbjTcqooxfdHh1iBvIIHiRfsEd%2F%2BqN%2BaN5pZMQ264VdDbHgbG%2FaAo4doxWFLJoaAvEzkGI7vGbiZWfwCpw1oWisf6Z5sPCDsHurkDypaxmZAaRRkM4pnWiVhEfSJC37jF6bSih7h49E2fyRBIXzt1gXnXcEZFmxM6gFCik8IVTR92Sse7c%2BN9NzQzZe59DIRxk5EoTjCpMVCUo%2BYIKyKP2G70pPsQs7yLg%2BoBKnNSxXEPo%2Bcbma91A%2Bz5O2UsiyHEmigHd9Mk1LqNNO8w8CcPEK0kATQ%2BraNuNkazzzUxNsQNbvYQH60o5pHlaVakmmwpC8ltNjh38mxrr5pDBphCAtArjOfVjxSMIof16ZLiC7T9Ow5xH77sLCJzpLWSuUzb9H7UFsmc4vHws8Yhf83jBQAwwvCdwgY6pgHSdz9JRMM%2FJVXPcwSf7%2FJl6euKHegH7r8BvQ3TCDOiXlPxzNhzK0UkYFM2zvduXd1ySK2lc8zLBfHTfcEDN3TAz01xnkyPFuqc7m%2BvwHh2YZFNrBod%2BHD7HJSe0uz0GYaMyLScFfFHjHeedam0WpKI4CEhXAKpTkqbYhFl9TDmodi1o4VyPLszlx8mOJHL%2BJBhwixJN%2BDCUb2wdL0r0EtjTKle3OtU&X-Amz-Signature=fee80c0490a01e19f254e8ab87fc87c65b799afdfcd1607afce72116ed8ba193&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
