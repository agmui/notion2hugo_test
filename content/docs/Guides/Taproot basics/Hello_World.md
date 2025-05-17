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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZETXUJ5N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2TOxnGWcCgYy5HSHqvo%2FM4Oubf4FnHkqggesJCfnflAiEAjnVxnU3TFX5TrYBtF2FizbKw0JGZ2Bjy84finOEY%2B8kq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDCsiDQOz9TUXRx9IhircA1tORUsut7PgCgA4l%2BHlSjpOJPmnWVug%2BpaIghKXtMKzdKMxe9TEKTDWaBOqdpm%2BS4vuWICTo6IXgMn74Kpwri2gdN1CMZ3CTFx2Wp71Q668XbgiELe3EBEq2zzjwuVjVgmDQ4kKoi269HxomUTsv%2B1w6DWLbspkRVpThpow2Tn%2F7P6lRw2d86ZWsbxChMiO%2FcAXphpyhCC%2BpCdbPDzRR%2F8B2rijpSpzRTCAglEsECPvSk8HlRaPw%2FcQqh108YBAlFfvT0U76fDRC1lTzDb%2BPMjK1QPm%2FlWzUmuDcy%2B8yNSjAkFsN6TB7aXWoj5Hd26AU%2B%2BXzOXMllZs6DVEIaEVUBfCRraqE%2FSmr9At5TQpW3b9EVga9G63GEttISmxwhE1ZJyfXw2sm9t1oT3G2Oka852v7pMBj5wNDwAHvdyRiMUcANGoLT5UA7meVL7RKduZa7xSxpsmA9Zk7icOft95%2F%2BC31KWPIhrT0sqtV0f7zdMsehIS9Dm19rP%2FYoY9JPG8JcQUy3vkBPcHgD2ln9cRS7jBiyaNshEtRBXQZkL%2FjyIOgmnfi2cL%2BhHlaDfektvCWP309mXlJSAV56Ds1ChPr%2Fr1GkdJZfXvvMSF1v%2FfjILnfEkoAg4kldlq1AqlMK%2BroMEGOqUBAerrLTJCmnm2EqAGXrLpIEp%2F%2BHaFftGLLyEklXe0UWD3wSYSGsqvIl1k2lN0ysBlc6z0jYI7NGkC%2FCLz6V1ILfEzYlAiExgGQAbImooe96zS5X%2Fuvb8LbnW7gpcMfbRLUpeLorAukil3%2BTVDMlkhZ6BDEmwHEFoFOhSz%2B5CVDHJPS4RAhHoeHcm%2F4ZdWltvqJAAZ954oLIdxdh5SbAuz7iwbyPxl&X-Amz-Signature=4ab0a661dd6cbe936272ffb35597baf7a548427558ebe976ae87f61c9bf3e186&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZETXUJ5N%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T050803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC2TOxnGWcCgYy5HSHqvo%2FM4Oubf4FnHkqggesJCfnflAiEAjnVxnU3TFX5TrYBtF2FizbKw0JGZ2Bjy84finOEY%2B8kq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDCsiDQOz9TUXRx9IhircA1tORUsut7PgCgA4l%2BHlSjpOJPmnWVug%2BpaIghKXtMKzdKMxe9TEKTDWaBOqdpm%2BS4vuWICTo6IXgMn74Kpwri2gdN1CMZ3CTFx2Wp71Q668XbgiELe3EBEq2zzjwuVjVgmDQ4kKoi269HxomUTsv%2B1w6DWLbspkRVpThpow2Tn%2F7P6lRw2d86ZWsbxChMiO%2FcAXphpyhCC%2BpCdbPDzRR%2F8B2rijpSpzRTCAglEsECPvSk8HlRaPw%2FcQqh108YBAlFfvT0U76fDRC1lTzDb%2BPMjK1QPm%2FlWzUmuDcy%2B8yNSjAkFsN6TB7aXWoj5Hd26AU%2B%2BXzOXMllZs6DVEIaEVUBfCRraqE%2FSmr9At5TQpW3b9EVga9G63GEttISmxwhE1ZJyfXw2sm9t1oT3G2Oka852v7pMBj5wNDwAHvdyRiMUcANGoLT5UA7meVL7RKduZa7xSxpsmA9Zk7icOft95%2F%2BC31KWPIhrT0sqtV0f7zdMsehIS9Dm19rP%2FYoY9JPG8JcQUy3vkBPcHgD2ln9cRS7jBiyaNshEtRBXQZkL%2FjyIOgmnfi2cL%2BhHlaDfektvCWP309mXlJSAV56Ds1ChPr%2Fr1GkdJZfXvvMSF1v%2FfjILnfEkoAg4kldlq1AqlMK%2BroMEGOqUBAerrLTJCmnm2EqAGXrLpIEp%2F%2BHaFftGLLyEklXe0UWD3wSYSGsqvIl1k2lN0ysBlc6z0jYI7NGkC%2FCLz6V1ILfEzYlAiExgGQAbImooe96zS5X%2Fuvb8LbnW7gpcMfbRLUpeLorAukil3%2BTVDMlkhZ6BDEmwHEFoFOhSz%2B5CVDHJPS4RAhHoeHcm%2F4ZdWltvqJAAZ954oLIdxdh5SbAuz7iwbyPxl&X-Amz-Signature=2c2108aa2deb15623d30ae49520536a6165a287125e12bae2dbae05fc2b08562&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
