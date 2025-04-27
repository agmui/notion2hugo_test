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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676AAHCZ3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaZ%2FxbkocbQ4zs0AdNfAPMxTGpfSpyvZOEBB4bNsQ5TgIgVoSsHuIKXEopx03VZ9%2FA%2BIKuaYn7mx9Yk9atvIAt7y8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDIaA7INkQC8LYRd4HSrcA5htR9PdBWTrxL4yp44LJxm%2FC0%2BcF83PHLSsyN4Rm%2BbmfJo3lRU2oz0y1n%2FKmpj3nuVBLlF5lTEuzaLhLdNeUD%2FwCmUuxvmIfxyf6rvVGpkm%2BpE04iHDxkL21xT02y6DGAtc2BmN%2BK237PybZqcoudr6BjFPmwEVlFpgV2Lx%2FPlIe06Ks3gPeS9yyiPJnkyTtThHuSy6p1kWphrx5Yt2%2BoKNNaYF4iAahCh2qA5gFppUomPRU9V8MX3UJhXapGT00dbzM82eTphWv0sDQObGyAj%2FI0qda1fua6bcUVh2%2F3wR4%2BtFMK%2FUXOoMqgGmoSbFOZaLSEHNuwCzsE1j9k6aIU9AlIseLUpt9PaW%2FKDBTF8zOWLXMe3%2BLan%2FS2kPyKK5ncSgmip117qXQ6IPwNKhTTrbR9dinuRZLEeb0c0S3jHimPoBr2ALAPjoqxFiebIse8T68igGVy8gH4VZRp2OL8BL1fdZ7Lm1XnsNYS%2B3%2BOzGVOZua7cR5kwF7JjYTqqCw9m9AQubYk%2Bprwrigl4wNDcWzgTRJrLkmFXUYZjw4R1pZ24QDiyvBZGr9qPwy7RtQ8d9FTqxw9ARmVh8ClbLI96UwZttHAY9%2F8uEyw0%2FZciwGKlDJRsIAWOP%2BtQ7MP6KusAGOqUB0nebVoUxYRJquSXvsKlPvVNiCmE6xyEG8E%2FN%2BI4h9kxbafqaaDZb2vFiKJvFqRFpBmvTxC7CNiky1%2BCiGTQYp2pT5iLmBPiEmNiP6fI0TugX1KlRTkFJjJuBXR3gOw1xalzcIdJm9eCKjo3R%2FoFmLDtqxFxp%2BGs0QnfjUDFW7QUftfpAQ3JFzipBN94NSWGZcMSH3p7PKrBD%2BPtXsGUjVEmN3tSz&X-Amz-Signature=5cd4759269f52147e8ab304dee23fc3c07563ce19f7d7d03bd9b1b9c5fe712fc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676AAHCZ3%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T210310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaZ%2FxbkocbQ4zs0AdNfAPMxTGpfSpyvZOEBB4bNsQ5TgIgVoSsHuIKXEopx03VZ9%2FA%2BIKuaYn7mx9Yk9atvIAt7y8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDIaA7INkQC8LYRd4HSrcA5htR9PdBWTrxL4yp44LJxm%2FC0%2BcF83PHLSsyN4Rm%2BbmfJo3lRU2oz0y1n%2FKmpj3nuVBLlF5lTEuzaLhLdNeUD%2FwCmUuxvmIfxyf6rvVGpkm%2BpE04iHDxkL21xT02y6DGAtc2BmN%2BK237PybZqcoudr6BjFPmwEVlFpgV2Lx%2FPlIe06Ks3gPeS9yyiPJnkyTtThHuSy6p1kWphrx5Yt2%2BoKNNaYF4iAahCh2qA5gFppUomPRU9V8MX3UJhXapGT00dbzM82eTphWv0sDQObGyAj%2FI0qda1fua6bcUVh2%2F3wR4%2BtFMK%2FUXOoMqgGmoSbFOZaLSEHNuwCzsE1j9k6aIU9AlIseLUpt9PaW%2FKDBTF8zOWLXMe3%2BLan%2FS2kPyKK5ncSgmip117qXQ6IPwNKhTTrbR9dinuRZLEeb0c0S3jHimPoBr2ALAPjoqxFiebIse8T68igGVy8gH4VZRp2OL8BL1fdZ7Lm1XnsNYS%2B3%2BOzGVOZua7cR5kwF7JjYTqqCw9m9AQubYk%2Bprwrigl4wNDcWzgTRJrLkmFXUYZjw4R1pZ24QDiyvBZGr9qPwy7RtQ8d9FTqxw9ARmVh8ClbLI96UwZttHAY9%2F8uEyw0%2FZciwGKlDJRsIAWOP%2BtQ7MP6KusAGOqUB0nebVoUxYRJquSXvsKlPvVNiCmE6xyEG8E%2FN%2BI4h9kxbafqaaDZb2vFiKJvFqRFpBmvTxC7CNiky1%2BCiGTQYp2pT5iLmBPiEmNiP6fI0TugX1KlRTkFJjJuBXR3gOw1xalzcIdJm9eCKjo3R%2FoFmLDtqxFxp%2BGs0QnfjUDFW7QUftfpAQ3JFzipBN94NSWGZcMSH3p7PKrBD%2BPtXsGUjVEmN3tSz&X-Amz-Signature=1aef8e207653656c95d7f90245134882ce34a0b1c14aed38267aaff26900c4db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
