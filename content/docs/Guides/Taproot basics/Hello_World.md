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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WD7FCLK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIC6omNjyEIxq%2BxOu1m390IKPB8%2FDYw5P5AVdF2yh6CRsAiEA222IDhIeHyz2DSLUJpnWJ%2FmtlnkEeg7BlAQVUp2n%2Fekq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDBkCcroKjcGavz1I7SrcAwla3WV519I51SwxCh2HCPbxOCdwH4%2BbwOVeU0lMiA0ot7bZkKau%2Fn%2Bb51SDOb%2FGbd%2Bjjt3xMYC%2B%2Fb7crIeLoDdmpNZ3aMu45aA06PMK5vYEebY3NT76K%2Fj6ebQrn62A2DI0IBCl8TrLwi9JsBtcu%2F0GebyzRwIY5gDezDdPolLAn5wL9gdWa8S2EjFd%2BeqOzgk0Mf15HnmdnBw9pHYOORkEPhYzPlI2pS38glUUNNbP3WKul%2FJkxpxql%2FgkwyjyfiDwQbM4YJwvYUAegKWdATisI5%2F8FrgGK%2FBc7mv5Pog%2BLLG0TEv3ClmkN2b%2BthLPDmMG5gnoew2mnzc9XXu7f4LGcXUCevhuF%2B9a%2BqIOzxn0hGFQ2NcvzDQBmsdIPh7ZWwpNI93mg3EcNAOtbCbMcErn02lZqD9v2KtImvk9fASkxCTeMw1sPIpzAzYukHUO9wEXBoZqEBSlp%2BdVLutO5hIcdxnnuZuR%2Fyk%2Fpc2%2B%2B4flYBVKIBxH8hrl3eTr72waIQJTu8v6O4IQuotfVaKNSBsUhWKm%2BZTo%2FzX%2BzXXxZ%2Bicd9Ug7aTGyupLO3yPYcOgOoM%2FZTBdN1J%2BqifD4cDK%2B70QggKsErFE935RJnHf9t87hAeZs8HznG8pPNagMJXNx8EGOqUBCi5FoMQxeiKTBaNjqVe5vxuv9lNtFBMgrPN0OyJ08lH%2FkGCyZAURK5R6fvo0Vl6%2Ft1ZaxV%2F1shWLSbQSAyLKjxf7ud1hUmR4AQhHKJD6qF3OIJwkt5bLkBliowK%2B%2FeiK%2Baa5NHrtJ6HFQZlrwO0U6Q7%2BCA2xxcZ2WUMjRdZSXTlSduyfDQulaJzaJBLmbzpolgfphlZMuNTKRmgBEWnmpwEM9RKw&X-Amz-Signature=266b82aae4de52b842498f9baa38abce3d72e86a4ad2d884c5f06fd71b256165&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WD7FCLK%2F20250524%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250524T160833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFAaCXVzLXdlc3QtMiJHMEUCIC6omNjyEIxq%2BxOu1m390IKPB8%2FDYw5P5AVdF2yh6CRsAiEA222IDhIeHyz2DSLUJpnWJ%2FmtlnkEeg7BlAQVUp2n%2Fekq%2FwMIGRAAGgw2Mzc0MjMxODM4MDUiDBkCcroKjcGavz1I7SrcAwla3WV519I51SwxCh2HCPbxOCdwH4%2BbwOVeU0lMiA0ot7bZkKau%2Fn%2Bb51SDOb%2FGbd%2Bjjt3xMYC%2B%2Fb7crIeLoDdmpNZ3aMu45aA06PMK5vYEebY3NT76K%2Fj6ebQrn62A2DI0IBCl8TrLwi9JsBtcu%2F0GebyzRwIY5gDezDdPolLAn5wL9gdWa8S2EjFd%2BeqOzgk0Mf15HnmdnBw9pHYOORkEPhYzPlI2pS38glUUNNbP3WKul%2FJkxpxql%2FgkwyjyfiDwQbM4YJwvYUAegKWdATisI5%2F8FrgGK%2FBc7mv5Pog%2BLLG0TEv3ClmkN2b%2BthLPDmMG5gnoew2mnzc9XXu7f4LGcXUCevhuF%2B9a%2BqIOzxn0hGFQ2NcvzDQBmsdIPh7ZWwpNI93mg3EcNAOtbCbMcErn02lZqD9v2KtImvk9fASkxCTeMw1sPIpzAzYukHUO9wEXBoZqEBSlp%2BdVLutO5hIcdxnnuZuR%2Fyk%2Fpc2%2B%2B4flYBVKIBxH8hrl3eTr72waIQJTu8v6O4IQuotfVaKNSBsUhWKm%2BZTo%2FzX%2BzXXxZ%2Bicd9Ug7aTGyupLO3yPYcOgOoM%2FZTBdN1J%2BqifD4cDK%2B70QggKsErFE935RJnHf9t87hAeZs8HznG8pPNagMJXNx8EGOqUBCi5FoMQxeiKTBaNjqVe5vxuv9lNtFBMgrPN0OyJ08lH%2FkGCyZAURK5R6fvo0Vl6%2Ft1ZaxV%2F1shWLSbQSAyLKjxf7ud1hUmR4AQhHKJD6qF3OIJwkt5bLkBliowK%2B%2FeiK%2Baa5NHrtJ6HFQZlrwO0U6Q7%2BCA2xxcZ2WUMjRdZSXTlSduyfDQulaJzaJBLmbzpolgfphlZMuNTKRmgBEWnmpwEM9RKw&X-Amz-Signature=6e497a83c7b15c0dace78ea1ec38a5870db2f8369dd35de5d0c5e725f61b4d90&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
