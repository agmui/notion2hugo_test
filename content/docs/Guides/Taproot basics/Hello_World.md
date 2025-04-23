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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W44SF246%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDeexonhHhiPjCsIXgVsz%2BTC0D2yAS1o%2FKqx7fdbfqqAQIgGy0mXHRsuo%2BdjH%2B7tZuDpd0eP0V4PZkdN4J58gLD0uMqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqH8vtWzq7FGnaHCircA1CXTHJkuhAwz48%2FCfIZr5fqPBMldC61t8EvQwP%2FmKiJZLawV%2FG8IXqOKt8IqJhSW64r51w8wElB6dW2AA4jWe8pRn1DlZTribc%2BjH5DS8VYY2puU5PQ7qTPZwgCZ1ks5DuMkSaDSeqb8akvVrmrj31AkRAX92pJs5T7gk45j6IOj2RnNObex54zLlLg0n7LkxLNACvF%2FathtYMKuxZ5BkkcclPMgTY7ykrpbXQw5Kv5RCzwEG9aL9I%2FIM%2B726fvF07rm%2FvFQJuW2sOD8twiZG9R3TebQGFYHC6tBau54sowxCGQysz53MY5mG61cNubA21VCQFWiE5VTiIRISnQbQwxtDfeOEPvuZEYxW96Mr0Hs313WXh4IvE4R7KhTIBex%2Bh2lScZYEMjaf13UFiHtwoGgVeezYQx3EQ6ED7W7Hp1pHj1oUEERlgyf1Ys6Fq54UtsuXrpdPz1CbJixViJFZQsej%2BBP%2BZTT%2FcMG%2BMVI%2FXySE7Daz8vMSAwx%2F51NyYKGymKNmRsVwasyhReuDmaCydHCM5mbjPIQMUNys8PL%2Fx4p%2BikJuRt8Q%2FYkc%2Fci%2BSWhm%2FqVeqO6cFCQnBzCtgfr8y4M7xPxRyTIegkNoUALE9SKQ3kwNEtV2EL0LT3MP77o8AGOqUBh409IrzJVf4jCnVWDMmEs0jtz99LTTww9OGaARRZxdIC3JHqQurRUspGKJjihlSE1CSjvddT7k7S4W%2BDPytNVmaWBsdvxNq7vRdlHYPOUz62IPVh0LdZxWzsJMSd8F%2By2udjQF2I25%2BNC6E3JxL9ylOXaWgPdfXQI8bTYTnozbEHjitcRR%2FtaId7zXtCZ3HrH29ylSFnIngxzjSz8NLTrcnKyBHf&X-Amz-Signature=320616a3a47c6154c475175773cf5ab2ba395274dcce046429b1d34ee3615601&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W44SF246%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T150851Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGcaCXVzLXdlc3QtMiJHMEUCIQDeexonhHhiPjCsIXgVsz%2BTC0D2yAS1o%2FKqx7fdbfqqAQIgGy0mXHRsuo%2BdjH%2B7tZuDpd0eP0V4PZkdN4J58gLD0uMqiAQI8P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFqH8vtWzq7FGnaHCircA1CXTHJkuhAwz48%2FCfIZr5fqPBMldC61t8EvQwP%2FmKiJZLawV%2FG8IXqOKt8IqJhSW64r51w8wElB6dW2AA4jWe8pRn1DlZTribc%2BjH5DS8VYY2puU5PQ7qTPZwgCZ1ks5DuMkSaDSeqb8akvVrmrj31AkRAX92pJs5T7gk45j6IOj2RnNObex54zLlLg0n7LkxLNACvF%2FathtYMKuxZ5BkkcclPMgTY7ykrpbXQw5Kv5RCzwEG9aL9I%2FIM%2B726fvF07rm%2FvFQJuW2sOD8twiZG9R3TebQGFYHC6tBau54sowxCGQysz53MY5mG61cNubA21VCQFWiE5VTiIRISnQbQwxtDfeOEPvuZEYxW96Mr0Hs313WXh4IvE4R7KhTIBex%2Bh2lScZYEMjaf13UFiHtwoGgVeezYQx3EQ6ED7W7Hp1pHj1oUEERlgyf1Ys6Fq54UtsuXrpdPz1CbJixViJFZQsej%2BBP%2BZTT%2FcMG%2BMVI%2FXySE7Daz8vMSAwx%2F51NyYKGymKNmRsVwasyhReuDmaCydHCM5mbjPIQMUNys8PL%2Fx4p%2BikJuRt8Q%2FYkc%2Fci%2BSWhm%2FqVeqO6cFCQnBzCtgfr8y4M7xPxRyTIegkNoUALE9SKQ3kwNEtV2EL0LT3MP77o8AGOqUBh409IrzJVf4jCnVWDMmEs0jtz99LTTww9OGaARRZxdIC3JHqQurRUspGKJjihlSE1CSjvddT7k7S4W%2BDPytNVmaWBsdvxNq7vRdlHYPOUz62IPVh0LdZxWzsJMSd8F%2By2udjQF2I25%2BNC6E3JxL9ylOXaWgPdfXQI8bTYTnozbEHjitcRR%2FtaId7zXtCZ3HrH29ylSFnIngxzjSz8NLTrcnKyBHf&X-Amz-Signature=36c688634e1c9dfd61df43e29274bd394cabedcc2a2d4a2e10109105b0c5b341&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
