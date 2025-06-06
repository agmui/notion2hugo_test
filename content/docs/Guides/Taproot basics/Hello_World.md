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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B5HAWG5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIccPE3KaR0i45r5dHVneDCrsYAphOmTr9oU%2BaQMZUEAiACgB1ldJuAIvD52%2B86g50%2BWZwwKz2gGq%2BMwzdc3vOzcSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMFEdsGswrYH0kAxj2KtwDltrve2d008rB8zN8QEwGPtezp8C9%2BJF8jH%2FtwxzkRTKjN6UgrdvcJ3yK5CLvFAB0DgXKf6T4RDem66upg1ywyreDKmba5czqqy2og5J84y5fEC3tQOsfCyvUsjLWTWBPpznWKqFzzyxdaBOiLSFmGOsYlcLen4PWropZJhrpe%2Fa9PNAMLBGVTX0Z6fr6qfmttjFoehP5TzTchcgNx7KtP70ZePowz1HY0NsBJtDj8ePsp4bWD8evV%2FGW2H%2FxHGCcevjblVuM9EOrHJrL2cvXjG%2FCmijkV75z5R%2F5WIzLufgzHR%2FBmsF0x9Votrq0G1etuDrzickxkPd%2B2TNWypVTyyyBHzGe39lbPrYukvEINTaV7j9AUuowzJbYHj7W95v4STqf8wwveHH1AILJNRsFZE2zfJF9CHD69cUGfT7Vl4j5IPOExyvHDdLCTx9nl3FX9gI6VRyouRItTIJsiNOpBDARO12QgEv72l3LCLc2W10XJKkSMRfreZKtKlGkA36vKptog52UGTpJ0tbiQyV%2Bet7kiNe0EurNhiocwJ3Kpvpfte9%2FFdpavc%2BKVYRLLiicji1AwsXeh1gwRzBAH00vPsCL%2FZ%2BolmZTTtyrzh%2FlBGO7inRt6UQaU2OFcCUwpoaLwgY6pgEdr5P8twamX4mfGn%2BWgt9LCde%2FuLF9NHGGcjpp9utztGpYOGndL4Q9S2vIdvYAx06sHWmrQuw0TuF47D7zO1wUNwxKWyr8oWzqaEuHQta8NinPGY8v%2B80NOrUAOOmqYACz3UzmTgwYOAk7dA5mY9V9SGGerKrpujPtTLsKRbrG4a80vMZp%2FETSiiiT0TPqxNCD3K7nE9%2B%2Bb7KTfacdg1hsXEwHQnsV&X-Amz-Signature=ea81dd24d1aa4dc33294b1ca4d22e96bed41e59e4c2ce18c6462e22e2902fb39&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667B5HAWG5%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T121531Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICIccPE3KaR0i45r5dHVneDCrsYAphOmTr9oU%2BaQMZUEAiACgB1ldJuAIvD52%2B86g50%2BWZwwKz2gGq%2BMwzdc3vOzcSr%2FAwhcEAAaDDYzNzQyMzE4MzgwNSIMFEdsGswrYH0kAxj2KtwDltrve2d008rB8zN8QEwGPtezp8C9%2BJF8jH%2FtwxzkRTKjN6UgrdvcJ3yK5CLvFAB0DgXKf6T4RDem66upg1ywyreDKmba5czqqy2og5J84y5fEC3tQOsfCyvUsjLWTWBPpznWKqFzzyxdaBOiLSFmGOsYlcLen4PWropZJhrpe%2Fa9PNAMLBGVTX0Z6fr6qfmttjFoehP5TzTchcgNx7KtP70ZePowz1HY0NsBJtDj8ePsp4bWD8evV%2FGW2H%2FxHGCcevjblVuM9EOrHJrL2cvXjG%2FCmijkV75z5R%2F5WIzLufgzHR%2FBmsF0x9Votrq0G1etuDrzickxkPd%2B2TNWypVTyyyBHzGe39lbPrYukvEINTaV7j9AUuowzJbYHj7W95v4STqf8wwveHH1AILJNRsFZE2zfJF9CHD69cUGfT7Vl4j5IPOExyvHDdLCTx9nl3FX9gI6VRyouRItTIJsiNOpBDARO12QgEv72l3LCLc2W10XJKkSMRfreZKtKlGkA36vKptog52UGTpJ0tbiQyV%2Bet7kiNe0EurNhiocwJ3Kpvpfte9%2FFdpavc%2BKVYRLLiicji1AwsXeh1gwRzBAH00vPsCL%2FZ%2BolmZTTtyrzh%2FlBGO7inRt6UQaU2OFcCUwpoaLwgY6pgEdr5P8twamX4mfGn%2BWgt9LCde%2FuLF9NHGGcjpp9utztGpYOGndL4Q9S2vIdvYAx06sHWmrQuw0TuF47D7zO1wUNwxKWyr8oWzqaEuHQta8NinPGY8v%2B80NOrUAOOmqYACz3UzmTgwYOAk7dA5mY9V9SGGerKrpujPtTLsKRbrG4a80vMZp%2FETSiiiT0TPqxNCD3K7nE9%2B%2Bb7KTfacdg1hsXEwHQnsV&X-Amz-Signature=ef95e78fe43da41becaf7004215a1ae0f69798ec367571ceb5fa75bce3a7a72d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
