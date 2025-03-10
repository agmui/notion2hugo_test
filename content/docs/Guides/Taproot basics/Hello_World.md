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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYKIGU7F%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDJpYo6qTZrpKQyzpTcnUGt%2BCZPTbdu3CPmTMS1Nmo1%2BwIgcBJZh%2FAh4g7v69t5Iq2yGZ5x%2BHs%2BQYYr9C0z5s5ogdkqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOL%2BJD%2FALvm4xG5nASrcA5zxHSprzhs2lYMdnJMg6p%2BtExb1Ir5j1Sf5PwImSQNxSo9OnN1LAEuDHVZ3iTf%2BgOKAQM%2BqBBhl%2FRracr8A30%2BKWvzIY%2BSF4ttLL2e6xLgpPgVRrF0u%2Bgb75JtTfJ14P0kkLJDgoZ0kUzYCW74mQD%2BUhT4TiznW%2BMLB2oi4L8wm8ODcTjSdmezLA1WPCQLoSmvO6INbfxPc0w93UPI%2FCCwawunCneu%2FgVpdvXcoOi9iTDJYSjFPBQl7teQ02R5AxZvphi4181gtDmYd674wzG%2FRUpMUPwA%2FI%2Fyo2O1SN%2FZ7%2Bdn0SxSYWrRu0761ISjI1uvsh7WMHEDD6o%2FmtYsXBDQIkXg463hVshn81f6kMhrf5kbosncAJHhIQ4K%2FlUo70Kyq%2BlJuk1UxwmFPQO3120nWSJa5ROi96qgb8C9mAinTn8ePnWWr%2BRyy7LMqo1ePsBWB4qTWIKOPpjcKAeMoFFtVgEy3OGjZRY06BIEYo6XQAybfEbsuyuNHVsjFufGvTYkcqtXkmtESpdXYhk9T3mHrS6re1MTTWP9xlFWrc4m90Av1H8HtG%2BJwDMG4QT1dNNatpj6zsPnIgDpGGC6AgD6PfTxcfGi3lXj0BrkOZdjY%2BRY577ZeeFLyJdbdMO6qvL4GOqUBkO5C6BtYo2GN17PIcUhIr9fNVaCY604QSd9LOZt%2BD8q6GCFpdqrYfI%2BmCFP6kE7vRDnWWpCkQRUB4nmKpEKRlTa%2FV8MhkssCwcuNfRoisDjkeG%2BuDC2O5bjy3slRni7rK3SOMMJo3ZzLPKPgpoc%2FgxNNCgnvTZp%2Fi1Nko%2BpQ1CXPFcsH%2F9KC5qma3OxJCRuTsKTS6LOI088bbfMDnRVIs3I%2BKQD%2B&X-Amz-Signature=2fe920405d5cc0c90d919f2be806c360b04b1b4db4814ff744339b2fc77501ae&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SYKIGU7F%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T170748Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJHMEUCIQDJpYo6qTZrpKQyzpTcnUGt%2BCZPTbdu3CPmTMS1Nmo1%2BwIgcBJZh%2FAh4g7v69t5Iq2yGZ5x%2BHs%2BQYYr9C0z5s5ogdkqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOL%2BJD%2FALvm4xG5nASrcA5zxHSprzhs2lYMdnJMg6p%2BtExb1Ir5j1Sf5PwImSQNxSo9OnN1LAEuDHVZ3iTf%2BgOKAQM%2BqBBhl%2FRracr8A30%2BKWvzIY%2BSF4ttLL2e6xLgpPgVRrF0u%2Bgb75JtTfJ14P0kkLJDgoZ0kUzYCW74mQD%2BUhT4TiznW%2BMLB2oi4L8wm8ODcTjSdmezLA1WPCQLoSmvO6INbfxPc0w93UPI%2FCCwawunCneu%2FgVpdvXcoOi9iTDJYSjFPBQl7teQ02R5AxZvphi4181gtDmYd674wzG%2FRUpMUPwA%2FI%2Fyo2O1SN%2FZ7%2Bdn0SxSYWrRu0761ISjI1uvsh7WMHEDD6o%2FmtYsXBDQIkXg463hVshn81f6kMhrf5kbosncAJHhIQ4K%2FlUo70Kyq%2BlJuk1UxwmFPQO3120nWSJa5ROi96qgb8C9mAinTn8ePnWWr%2BRyy7LMqo1ePsBWB4qTWIKOPpjcKAeMoFFtVgEy3OGjZRY06BIEYo6XQAybfEbsuyuNHVsjFufGvTYkcqtXkmtESpdXYhk9T3mHrS6re1MTTWP9xlFWrc4m90Av1H8HtG%2BJwDMG4QT1dNNatpj6zsPnIgDpGGC6AgD6PfTxcfGi3lXj0BrkOZdjY%2BRY577ZeeFLyJdbdMO6qvL4GOqUBkO5C6BtYo2GN17PIcUhIr9fNVaCY604QSd9LOZt%2BD8q6GCFpdqrYfI%2BmCFP6kE7vRDnWWpCkQRUB4nmKpEKRlTa%2FV8MhkssCwcuNfRoisDjkeG%2BuDC2O5bjy3slRni7rK3SOMMJo3ZzLPKPgpoc%2FgxNNCgnvTZp%2Fi1Nko%2BpQ1CXPFcsH%2F9KC5qma3OxJCRuTsKTS6LOI088bbfMDnRVIs3I%2BKQD%2B&X-Amz-Signature=cdf0fc4b82d3d162a0e016f62bf15f7cac0bd9cd4d8a08079d7bfcb2b0cdbf67&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
