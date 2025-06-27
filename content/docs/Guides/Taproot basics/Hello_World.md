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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKW52K5S%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIGwTX969WqbITpiTYsBuewClGdsb433pElyB80kZ4UPZAiEA4oqZQO7EKf0LClEA0Trtl5vKfk9mgf1xagW61A09pcMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEvsw%2BgWOZYZPqK43yrcA1TYn13c0tSYqvHT%2Fxt2MRFKb7rBUiRgSjfEsZLkHWx98XYTDRd9qA%2FyN4eV6GFrWSv7tOi%2BvR%2B8qrTbvK7WndxmofVL8H8aAT8LOjc48CcwGsecxiyhgprSW3kj4ONILpbaPWgA4YBclhIJ70XT0la4Q1BPdfVnsSLJYNYlleYDOED7IcvQirlO7Xg5ZtlCtGGbEry5R892WDS24Ep7NgtO1HfQDIWKTV41mB%2B7VzDhiSFNPrumD5JELKjV1mGR4gyt64W42rAH%2BB5x7Ak%2FWFX0uvyFLQut44Csw5zJVLvWmgw0YLdJwvToziL69yJhPd0HImlx3HFROd7GYzMUeA%2Fmd9DE9r8TrxNgrBlY14POCFLSXyNNc8H27DaOs0fW1I8awEFaO0QlXJDeYEWigMLWyzLc3NTP4kxpP%2FzXieUmmMJL%2FIOT94KbYnBelQboHSPPc4kVv2ARBOtAbETOTujAyXv0nOncSYOLNcGXtiHi9NpWNwW7syGDjJ02p3OlcdmcP2nKv5qDtkqteCZTFRgf4ejLWgpYYCx57Tg8j9mkWR9vYaumImPy8M%2FwE5BLSLzA48EcBqhmUll7JFU%2FRYHyUTtDxQgq0fR3CJ%2BRdcW60GalDVzfzfC%2BOsZHMMbT%2BcIGOqUBp0ulQ3jX0KVyqpzfC5QNNuILUjOrqxLbZ1qwIXfvvso%2BxFFHLveS7RSuxRAx%2FNo%2BHkLVnSLwt4NCbk%2BH5SVdf7uwFgyErNDFLwDeXnNlFrHZT6LATr%2FMoQcmoWLJ4LlG1lB8rL3aMKJ%2BtZs1VqdLULz37BClDy7VrZ%2BEX94rQSN7awbJ%2FB6BJmGi4DJwymWdNka2Dlltx5Dpy4ym0B%2FHTjiTZviY&X-Amz-Signature=0a0bc2b6e11b39c9f05d6137a1c99f2de2aeee9fe2843439e67e08e19c9fd9bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RKW52K5S%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T110745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIGwTX969WqbITpiTYsBuewClGdsb433pElyB80kZ4UPZAiEA4oqZQO7EKf0LClEA0Trtl5vKfk9mgf1xagW61A09pcMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDEvsw%2BgWOZYZPqK43yrcA1TYn13c0tSYqvHT%2Fxt2MRFKb7rBUiRgSjfEsZLkHWx98XYTDRd9qA%2FyN4eV6GFrWSv7tOi%2BvR%2B8qrTbvK7WndxmofVL8H8aAT8LOjc48CcwGsecxiyhgprSW3kj4ONILpbaPWgA4YBclhIJ70XT0la4Q1BPdfVnsSLJYNYlleYDOED7IcvQirlO7Xg5ZtlCtGGbEry5R892WDS24Ep7NgtO1HfQDIWKTV41mB%2B7VzDhiSFNPrumD5JELKjV1mGR4gyt64W42rAH%2BB5x7Ak%2FWFX0uvyFLQut44Csw5zJVLvWmgw0YLdJwvToziL69yJhPd0HImlx3HFROd7GYzMUeA%2Fmd9DE9r8TrxNgrBlY14POCFLSXyNNc8H27DaOs0fW1I8awEFaO0QlXJDeYEWigMLWyzLc3NTP4kxpP%2FzXieUmmMJL%2FIOT94KbYnBelQboHSPPc4kVv2ARBOtAbETOTujAyXv0nOncSYOLNcGXtiHi9NpWNwW7syGDjJ02p3OlcdmcP2nKv5qDtkqteCZTFRgf4ejLWgpYYCx57Tg8j9mkWR9vYaumImPy8M%2FwE5BLSLzA48EcBqhmUll7JFU%2FRYHyUTtDxQgq0fR3CJ%2BRdcW60GalDVzfzfC%2BOsZHMMbT%2BcIGOqUBp0ulQ3jX0KVyqpzfC5QNNuILUjOrqxLbZ1qwIXfvvso%2BxFFHLveS7RSuxRAx%2FNo%2BHkLVnSLwt4NCbk%2BH5SVdf7uwFgyErNDFLwDeXnNlFrHZT6LATr%2FMoQcmoWLJ4LlG1lB8rL3aMKJ%2BtZs1VqdLULz37BClDy7VrZ%2BEX94rQSN7awbJ%2FB6BJmGi4DJwymWdNka2Dlltx5Dpy4ym0B%2FHTjiTZviY&X-Amz-Signature=5753eaa4d33cb3b26eb760c0bd6ba426bdce1d52adf2212286c9b43d7bf8bc00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
