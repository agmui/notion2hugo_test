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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZZ7H5TN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfk%2Fru44RQK%2BOsQ2HHmrDhYTnGGRfmvc4Of3N24KF14AiEAgn3NQLuXiWpD0RxUHLJYZLsBV4VtaqAyEp9nnwL9oO4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDATQnpOxGBUQiPYnsircA1eKdjqnvdMq1nzeSwaEOuwf5Qfjdyz%2BMu89XvCMVvANqvVxGKmHcHdGZIKyRnX1UbKsaHPkj9Mj98KQtsqO09NWtdeAMKBlTU8mPKYpam5ucIRR2vYf5WAZfLnTXZsYSAOclAJYAJh5RC5ezfZkTSao8oKI3MpXrMpAJ1KToEqvz5SfeqUWWO1urShL9DQ5V74M1nbOftZ2LcjgNrWLOUlv9IGPx0eviuhItQUPBXwsF0gRG55qrSoodJSSmferOlLBi6GQep41V0ogVxOi4zoYJl9NhbJBC4e2xMMr5DR4yXKQDvx2xA7q0ezrRF2BU6qQCc%2Fcxi3ZHrk7%2FJZ7d3wUSjdKxpMZbje0bZO3A2plEuMas55i8Hlvn%2Btsv7KT8v9qoMfxyIiT2eyqDCroAi2JS9HjasaraqaP8rnGD6GVyjudEzVm0%2FndGQ3tlUz6vPmaIp%2Bft%2BUlps5Tx%2FX2alJqdQn38g%2FfOFpGnRYSnEzxmGtjAlIOdqB68pO09Q0ZqehkKqhLvVGvr0aLKWScguf1%2F6QuRZvyBXEnPUQRLgogE0CybMw5PtNgc%2BMmINeLu3z9iXG2xO3IPYmPJmH1NkMST2Tz9jN6%2FGdBw9QeXdCcG06LcseAaqntKITfMLi5pL4GOqUBvXW8R7tN%2B4bZu37a3kZuKlwZDg%2FNbF%2BLMTb%2F8PAzI6yg6WOgPs9xGHyhWR2PFI3ZtFLbO%2Fep5BLoCmb0ntJMUkS3yzuMD5dXEGONbnsEFdESJmiJENNaVCLH2WiTCfRIn8R84TTEBTceJO3RfguNBoBntzEV0SOs3ieuWVdzcHS5PJmw09sRna3EXo8TFYn%2FjSuEVAKURa7EbKdWYofSNWssjiYC&X-Amz-Signature=f5524a23317ade7cccf8689434f87313426d030728ed37cc3e0ddb4af5fec545&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ZZ7H5TN%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T041003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFfk%2Fru44RQK%2BOsQ2HHmrDhYTnGGRfmvc4Of3N24KF14AiEAgn3NQLuXiWpD0RxUHLJYZLsBV4VtaqAyEp9nnwL9oO4q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDATQnpOxGBUQiPYnsircA1eKdjqnvdMq1nzeSwaEOuwf5Qfjdyz%2BMu89XvCMVvANqvVxGKmHcHdGZIKyRnX1UbKsaHPkj9Mj98KQtsqO09NWtdeAMKBlTU8mPKYpam5ucIRR2vYf5WAZfLnTXZsYSAOclAJYAJh5RC5ezfZkTSao8oKI3MpXrMpAJ1KToEqvz5SfeqUWWO1urShL9DQ5V74M1nbOftZ2LcjgNrWLOUlv9IGPx0eviuhItQUPBXwsF0gRG55qrSoodJSSmferOlLBi6GQep41V0ogVxOi4zoYJl9NhbJBC4e2xMMr5DR4yXKQDvx2xA7q0ezrRF2BU6qQCc%2Fcxi3ZHrk7%2FJZ7d3wUSjdKxpMZbje0bZO3A2plEuMas55i8Hlvn%2Btsv7KT8v9qoMfxyIiT2eyqDCroAi2JS9HjasaraqaP8rnGD6GVyjudEzVm0%2FndGQ3tlUz6vPmaIp%2Bft%2BUlps5Tx%2FX2alJqdQn38g%2FfOFpGnRYSnEzxmGtjAlIOdqB68pO09Q0ZqehkKqhLvVGvr0aLKWScguf1%2F6QuRZvyBXEnPUQRLgogE0CybMw5PtNgc%2BMmINeLu3z9iXG2xO3IPYmPJmH1NkMST2Tz9jN6%2FGdBw9QeXdCcG06LcseAaqntKITfMLi5pL4GOqUBvXW8R7tN%2B4bZu37a3kZuKlwZDg%2FNbF%2BLMTb%2F8PAzI6yg6WOgPs9xGHyhWR2PFI3ZtFLbO%2Fep5BLoCmb0ntJMUkS3yzuMD5dXEGONbnsEFdESJmiJENNaVCLH2WiTCfRIn8R84TTEBTceJO3RfguNBoBntzEV0SOs3ieuWVdzcHS5PJmw09sRna3EXo8TFYn%2FjSuEVAKURa7EbKdWYofSNWssjiYC&X-Amz-Signature=9b7eaae5c23b1a60a7d0e613cbfdb2ad9a796fcec00287bf794ac9758c9f510c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
