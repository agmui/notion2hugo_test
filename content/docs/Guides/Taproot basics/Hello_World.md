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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H4WKZWN%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIFtQvi1qNPdLP4yCdFrCHgf4lcsPiuM1MXqR8dg9ekFzAiB2S5UBF5PfpP12fzw3TYCsFP0Uqfa%2F4PXpYTOuBtjemCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfBH4Uq7hWXFFo4qjKtwDYfb9jkiDMKnaUDLDojh1JKItVFkZk%2BP%2BDjARXdVxZQCf1DIX6w10PtyhkduBHIGU9hBZNekfLxu%2FUYTaMnReP6Tvi8MjFM3vz3x9yHgSOOqAbqSCy6JlJuOBDP6JIMl0QyWj67DMbq2CB5m4ui1lRmX8ugRMSNyHGZrA5mwHAlgzJ4NUhpkyDjAW%2FserR57mxuieEsTVvOkYWZ7pFjH%2Bsk19elLAvhi0fOdoTX%2FPLFINvg%2FEpLnyg2DbYK7F4rHVr7ZgmQeKromxoHo%2BvsT1mNdZ7dajyjPZOhM7TTEAc6WDsEFQRZv%2BFJONm6f8p36J%2FcRsTX0zYus9AL1ZGEHaBk5rAxFkUCrgm%2B2FJPAAqGw81SW9fDC8GyxcdZAOzYiKFl8UW6s%2B8ysb%2FYNib7SMywFYY%2BHCkCCSgaOceF4BrKbbVDbeT23S4%2F%2FDPsI3kC%2B4qAZmKdopcSmsDFo%2F23xXQMoZ6zcOeu%2FVII6N8k3VhDSnqLA3VB6Tz%2FrB1k4bdb5TroOJj37QG%2FjpAISeLq8U7VSm%2FTveEPv%2BhwXv%2FSKAiadTDjgNBfY6dqpMlMsxFyy78D0HKvOEov5U2E51aqQtChvzh6Wofjxg5OaKG8eJC%2BVaUYyqFkuixvYiqVUwn%2F%2B%2FwQY6pgH3A2Bjon9yLTJl6gV6HxanLx%2FWixPqk9bsLLvnD%2FCWAYMcIvmT4Rqvsy6L70i7ZnDprDrNO5G4LAXGPsGEDI3gj0exH0u6qKyGU8idwLE3OdAaY%2F2xPxM4PeckGTZljNo28%2BEYbsBUoo1oBf6WA792QSBfFsHpJje264owh18F3aaR6u8mlOtYac1jCS%2BG%2F6P8cp3c7at6bqr9crC1eMVO6%2FHnUW1V&X-Amz-Signature=fae3bc3015e50899ac8e71a43900aa6254f7a1a3ed313f8cdaedb603471f3fa9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664H4WKZWN%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T050912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJGMEQCIFtQvi1qNPdLP4yCdFrCHgf4lcsPiuM1MXqR8dg9ekFzAiB2S5UBF5PfpP12fzw3TYCsFP0Uqfa%2F4PXpYTOuBtjemCqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfBH4Uq7hWXFFo4qjKtwDYfb9jkiDMKnaUDLDojh1JKItVFkZk%2BP%2BDjARXdVxZQCf1DIX6w10PtyhkduBHIGU9hBZNekfLxu%2FUYTaMnReP6Tvi8MjFM3vz3x9yHgSOOqAbqSCy6JlJuOBDP6JIMl0QyWj67DMbq2CB5m4ui1lRmX8ugRMSNyHGZrA5mwHAlgzJ4NUhpkyDjAW%2FserR57mxuieEsTVvOkYWZ7pFjH%2Bsk19elLAvhi0fOdoTX%2FPLFINvg%2FEpLnyg2DbYK7F4rHVr7ZgmQeKromxoHo%2BvsT1mNdZ7dajyjPZOhM7TTEAc6WDsEFQRZv%2BFJONm6f8p36J%2FcRsTX0zYus9AL1ZGEHaBk5rAxFkUCrgm%2B2FJPAAqGw81SW9fDC8GyxcdZAOzYiKFl8UW6s%2B8ysb%2FYNib7SMywFYY%2BHCkCCSgaOceF4BrKbbVDbeT23S4%2F%2FDPsI3kC%2B4qAZmKdopcSmsDFo%2F23xXQMoZ6zcOeu%2FVII6N8k3VhDSnqLA3VB6Tz%2FrB1k4bdb5TroOJj37QG%2FjpAISeLq8U7VSm%2FTveEPv%2BhwXv%2FSKAiadTDjgNBfY6dqpMlMsxFyy78D0HKvOEov5U2E51aqQtChvzh6Wofjxg5OaKG8eJC%2BVaUYyqFkuixvYiqVUwn%2F%2B%2FwQY6pgH3A2Bjon9yLTJl6gV6HxanLx%2FWixPqk9bsLLvnD%2FCWAYMcIvmT4Rqvsy6L70i7ZnDprDrNO5G4LAXGPsGEDI3gj0exH0u6qKyGU8idwLE3OdAaY%2F2xPxM4PeckGTZljNo28%2BEYbsBUoo1oBf6WA792QSBfFsHpJje264owh18F3aaR6u8mlOtYac1jCS%2BG%2F6P8cp3c7at6bqr9crC1eMVO6%2FHnUW1V&X-Amz-Signature=65530effdeb62ecca7e7257cb121f8aaf872eddb4860f971f7eed578435852ce&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
