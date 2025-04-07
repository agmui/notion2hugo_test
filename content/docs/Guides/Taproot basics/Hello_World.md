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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H6UYQ5M%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhrSKNOpYI263FtN6%2FyDIjU8AWDqX%2FoRKypBtwnOznUAiB1S0OVacYVfn8BmrIvn4qA9S%2F4RezeZFRNtTXPcmZq4ir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMRiC5oSuhsQDU9FH2KtwDZpLWcahBLy3KiL8NMc2t4auEDO%2FIH2YRXGVP3%2B8rIJ3c1Sjq9GdjHcGBAQjUyFawFFcka8EPO5Yqdyp7gRFN2uTf9VUve%2BPdOkIDWy%2Fe0iY%2FBKqMepLNadoOvRj0Jlu8Ds73sCmahwCIWWP2UtynK%2BEbIeaS0cPOikWYqRijDCdX5dMp3U%2BYMIeS6QXqjivb8SDVnxGmf0wO34ibXKBAXBNE0M5yNnoR%2FKN3q8q4ceAw0XnLkNZxP5Jh6h8T%2BzI0v57bAnYFf3VJeFUPWKiUevrIf6HYF8f4iAtmwRi4GKOuub9Mp3TzF0Cx8jgxwDS4QQNuAV0YdYSY4qc3fbRwGdODq7dIL6XVScbbXCbzQRomqSqcuZg63i%2Fos%2FVE0hRSertLSkpHivJ2cu9tkAOaSYl8qT88tkbiElpfFI%2BjI%2BE3Zl0o2sisX8P7K5zsO5R6IFlEEoQypbqmasExl%2BImdckNa8CKM9c4NOvrErLIV%2BtKAygdXLQuaEmvPZHFJaKn1AY1R46Iyex%2FVp7PUko8QvLeZX%2BV6A5cRHN02M7y9bTH3Dv%2F6PGsRBT7th0gPTrnivlAfP6TqWeIMKuC6%2BCpCBfPi5hfl4NffIPfrhJr1plYAHwuZBSmJPAR%2BVYw6oXOvwY6pgEiJNnL5MbEn%2B2phY0RS1%2BL%2FzOy3qgDhxxjOsHdW%2BXlzUJF59uqEpPX6iC92V1FWALGselkYOFxojek8Dxil78jIbD4bKZ%2FiN%2F0R53Ka4%2BI7QiXpyZIHmW68BzgfiC%2F5rUsBu9vSfiSd%2BDsaT49OVNr%2BB4q%2FPh0HDag%2F7cly7LE0iaLwbhNBkAeyYiCKy44AGqo%2FjPvFbqcghCPlUGohqGWnnT4zMKk&X-Amz-Signature=96ee5120a8cff6cede6357f0b8ab78a4d92643bfd43d3976b056ea30d826f3b3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H6UYQ5M%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T081220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAhrSKNOpYI263FtN6%2FyDIjU8AWDqX%2FoRKypBtwnOznUAiB1S0OVacYVfn8BmrIvn4qA9S%2F4RezeZFRNtTXPcmZq4ir%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIMRiC5oSuhsQDU9FH2KtwDZpLWcahBLy3KiL8NMc2t4auEDO%2FIH2YRXGVP3%2B8rIJ3c1Sjq9GdjHcGBAQjUyFawFFcka8EPO5Yqdyp7gRFN2uTf9VUve%2BPdOkIDWy%2Fe0iY%2FBKqMepLNadoOvRj0Jlu8Ds73sCmahwCIWWP2UtynK%2BEbIeaS0cPOikWYqRijDCdX5dMp3U%2BYMIeS6QXqjivb8SDVnxGmf0wO34ibXKBAXBNE0M5yNnoR%2FKN3q8q4ceAw0XnLkNZxP5Jh6h8T%2BzI0v57bAnYFf3VJeFUPWKiUevrIf6HYF8f4iAtmwRi4GKOuub9Mp3TzF0Cx8jgxwDS4QQNuAV0YdYSY4qc3fbRwGdODq7dIL6XVScbbXCbzQRomqSqcuZg63i%2Fos%2FVE0hRSertLSkpHivJ2cu9tkAOaSYl8qT88tkbiElpfFI%2BjI%2BE3Zl0o2sisX8P7K5zsO5R6IFlEEoQypbqmasExl%2BImdckNa8CKM9c4NOvrErLIV%2BtKAygdXLQuaEmvPZHFJaKn1AY1R46Iyex%2FVp7PUko8QvLeZX%2BV6A5cRHN02M7y9bTH3Dv%2F6PGsRBT7th0gPTrnivlAfP6TqWeIMKuC6%2BCpCBfPi5hfl4NffIPfrhJr1plYAHwuZBSmJPAR%2BVYw6oXOvwY6pgEiJNnL5MbEn%2B2phY0RS1%2BL%2FzOy3qgDhxxjOsHdW%2BXlzUJF59uqEpPX6iC92V1FWALGselkYOFxojek8Dxil78jIbD4bKZ%2FiN%2F0R53Ka4%2BI7QiXpyZIHmW68BzgfiC%2F5rUsBu9vSfiSd%2BDsaT49OVNr%2BB4q%2FPh0HDag%2F7cly7LE0iaLwbhNBkAeyYiCKy44AGqo%2FjPvFbqcghCPlUGohqGWnnT4zMKk&X-Amz-Signature=921423ac3732378be1684065304ca5c0fe6a98a985844706b1ac549d0e6a953b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
