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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFXXWG36%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdluMTbJEguIRMEqLhTxXzV3RePaaCUudSUgNWaUTO6AiEAl1QeqAtJQTW5GyNLklFRH9B0e1S7SPu1VaahfsbBOm4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOv5PAStVO6qlDdMQircA6762kEjlAAIfF%2BQPtqMycadrBi7qrOCvOZDkxqNVV2cJfjlcgl5VjOHNNUnUftoTOaLYbUCMBM1cVhAT%2FQwy8HRYsH6Ta%2FDuwWqYptviCbUBUkxJaUmSIK1GxVwv78eTPH4qD25HItFSq%2BPV5ONVpIBW7Spx0F6sSBxIqbGXAN%2B3wmpztA8405hjK6k1zb3201VeYvrS2ymxvDMRPT9KrBAn91l9vuhNCToTvXxIAQSKyu94WEPDeP1WlB%2B%2FF%2F%2B5VCt21AaYvCj7vjCYKo5rB35%2BO2Cr9dXCY7jy4J9rw5qQEZpKqlv9U42j2OnLpZPfu%2BHqpMX7%2F6QMUdrWs149z5zAyGOe3d3wiNE%2BCfUUplpjFiPC%2FGEX0ylUK9ppi8hv%2FtvAkkAY%2Bb%2FUxWYDyl7ElmKjQBhrrT1yaQYiEaseGxgBdBckbgZ%2BXVZJTs7O9w61C5fzSwlvWY2DJbAVoKoN0krEw6bNlPT6GPfOO8h86J38ttu40%2BpfITnx42eOH7iKI4KJlMHnG6fSpcfBKdY3VSgm0F1sXGaDAgs5Wet1sw605LhkQHdJgQCowVSo9KlCLKjNJXqgyi9LlMcYTK4OAtw%2F%2Be%2BBJbunVg4o8aMidV%2Fe1Enxnf%2FrBiiPWXeMM3v%2B78GOqUBgMHnq0r7RmegUZZsOF0mpttXd%2BiWja9ka3kT1kud5nPyie0erP21jEVyaVETRC1qPVL8YSqbYSdZKnEuvzn2Qsqj0nDZsFf2WGsmSoYUbDRp3kKkjmW264IyVF9%2FpK1t616iaXBGWzKPVAuxFJfmGPWRfE9GqnZmJZCY0oLhwrl8ItgmiEbAdH%2BhxCRty%2Fpqaq%2BTR3BEA3Btperqbd9za4fqdXSc&X-Amz-Signature=009f372b751b2a21151903379ce925a8758a3ad31c38bac3c3ff9969f9fee695&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFXXWG36%2F20250416%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250416T004022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdluMTbJEguIRMEqLhTxXzV3RePaaCUudSUgNWaUTO6AiEAl1QeqAtJQTW5GyNLklFRH9B0e1S7SPu1VaahfsbBOm4q%2FwMIORAAGgw2Mzc0MjMxODM4MDUiDOv5PAStVO6qlDdMQircA6762kEjlAAIfF%2BQPtqMycadrBi7qrOCvOZDkxqNVV2cJfjlcgl5VjOHNNUnUftoTOaLYbUCMBM1cVhAT%2FQwy8HRYsH6Ta%2FDuwWqYptviCbUBUkxJaUmSIK1GxVwv78eTPH4qD25HItFSq%2BPV5ONVpIBW7Spx0F6sSBxIqbGXAN%2B3wmpztA8405hjK6k1zb3201VeYvrS2ymxvDMRPT9KrBAn91l9vuhNCToTvXxIAQSKyu94WEPDeP1WlB%2B%2FF%2F%2B5VCt21AaYvCj7vjCYKo5rB35%2BO2Cr9dXCY7jy4J9rw5qQEZpKqlv9U42j2OnLpZPfu%2BHqpMX7%2F6QMUdrWs149z5zAyGOe3d3wiNE%2BCfUUplpjFiPC%2FGEX0ylUK9ppi8hv%2FtvAkkAY%2Bb%2FUxWYDyl7ElmKjQBhrrT1yaQYiEaseGxgBdBckbgZ%2BXVZJTs7O9w61C5fzSwlvWY2DJbAVoKoN0krEw6bNlPT6GPfOO8h86J38ttu40%2BpfITnx42eOH7iKI4KJlMHnG6fSpcfBKdY3VSgm0F1sXGaDAgs5Wet1sw605LhkQHdJgQCowVSo9KlCLKjNJXqgyi9LlMcYTK4OAtw%2F%2Be%2BBJbunVg4o8aMidV%2Fe1Enxnf%2FrBiiPWXeMM3v%2B78GOqUBgMHnq0r7RmegUZZsOF0mpttXd%2BiWja9ka3kT1kud5nPyie0erP21jEVyaVETRC1qPVL8YSqbYSdZKnEuvzn2Qsqj0nDZsFf2WGsmSoYUbDRp3kKkjmW264IyVF9%2FpK1t616iaXBGWzKPVAuxFJfmGPWRfE9GqnZmJZCY0oLhwrl8ItgmiEbAdH%2BhxCRty%2Fpqaq%2BTR3BEA3Btperqbd9za4fqdXSc&X-Amz-Signature=5a2a2189d5f3e0b7dcd8bc04a4172d209a6751465d373438f8d57bee94938055&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
