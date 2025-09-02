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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDDX3XQ3%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCa5yVMDaPlWDopVSGTTvYw1MHo0d3UPKX15W98ObFhAIgZMwW9ImY57qMxfL347KhHTw5llnsA0fBmaKzUQu4ZAEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIEF1DT%2BOlfjxkmE5yrcA1ZnCD6GJXHiYorttKmOKqPEehXcnj3x6g%2BoWPx9jGm5ESA0WAac0EFxxDFkQI0id7PUWfzS6nhuomDc%2FnSPCMg5eyJ49bq6QMk68HB9ZVfVzZt%2FRsOHUb4aZWkY9l%2F%2BuXq47RzgVi9kidxg7CwAe4%2BbAcsGTXbkPBFzO3f%2BdLFKRVoDrqC2ukdpa8ncqhrkekyBnB2eFIoA%2F%2FktSADV%2BldbMl75eHAt0UvtEKxtlKUE1dulG5EGvRaud9AMfpGBFYcm9BKz7TBD8yh3L3wuCxqOJIPnjzAgTb6SUcmczigFfsM9JcSbmvD8sYGur6xJygen%2FuWsMWJ9OJlE%2FdbyYRWRXiMiBxCL1hI%2BVx0yFrs%2Fab%2BanW6eihSM05Fw8evc9J1bS68z36vdC%2B9AIoduiA4oasOtCl1wRS66bqB%2F2rY5Nl%2Bh%2BS6eEYuCK0MtWbV88c35iKUtMhuL9UOvKpmP4xp0bo9JqUxs5N%2B88%2BP501M9PXXWZMJ3OcyVDfma5og5hj%2BSbN12wDpTCOE4UYKPwrM2%2BhVL9UszuRg7ZYVnqCdsrpvcznEvfhlxA2K77ID88esU8ZNt5dL%2BdtlxQHz%2BjYVtJqlw%2FNaKwi6J8YW7x7iORFiEwVCuD6KVPPZBMN2J2cUGOqUBLu5GcP%2FZLb%2BXfuPD%2BKcFz4NVSx4vigQXGmDy97%2Fn9%2F%2F8Gy6ypenNkcADhz5mR%2BNFXVYdilvqavLzlHSubdcIx8X44x6MXX1FU5IzhFw4%2FpbjXbxbVAl6hpECJiHikaAl6FGDyXsKiTzTeAGIxY10CMDQj%2BNAVFMj3Junb%2FKEzKuJccchbd8rLI5dVEOe%2BnQWZd3URwo%2BTZXYcXCrYnwvYJEfMOPK&X-Amz-Signature=aee275bf2d654c5e5acf174ddddd6b1f2d1a50bea86ca8d890fcdaca976e8afc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDDX3XQ3%2F20250902%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250902T012701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDCa5yVMDaPlWDopVSGTTvYw1MHo0d3UPKX15W98ObFhAIgZMwW9ImY57qMxfL347KhHTw5llnsA0fBmaKzUQu4ZAEq%2FwMIIhAAGgw2Mzc0MjMxODM4MDUiDIEF1DT%2BOlfjxkmE5yrcA1ZnCD6GJXHiYorttKmOKqPEehXcnj3x6g%2BoWPx9jGm5ESA0WAac0EFxxDFkQI0id7PUWfzS6nhuomDc%2FnSPCMg5eyJ49bq6QMk68HB9ZVfVzZt%2FRsOHUb4aZWkY9l%2F%2BuXq47RzgVi9kidxg7CwAe4%2BbAcsGTXbkPBFzO3f%2BdLFKRVoDrqC2ukdpa8ncqhrkekyBnB2eFIoA%2F%2FktSADV%2BldbMl75eHAt0UvtEKxtlKUE1dulG5EGvRaud9AMfpGBFYcm9BKz7TBD8yh3L3wuCxqOJIPnjzAgTb6SUcmczigFfsM9JcSbmvD8sYGur6xJygen%2FuWsMWJ9OJlE%2FdbyYRWRXiMiBxCL1hI%2BVx0yFrs%2Fab%2BanW6eihSM05Fw8evc9J1bS68z36vdC%2B9AIoduiA4oasOtCl1wRS66bqB%2F2rY5Nl%2Bh%2BS6eEYuCK0MtWbV88c35iKUtMhuL9UOvKpmP4xp0bo9JqUxs5N%2B88%2BP501M9PXXWZMJ3OcyVDfma5og5hj%2BSbN12wDpTCOE4UYKPwrM2%2BhVL9UszuRg7ZYVnqCdsrpvcznEvfhlxA2K77ID88esU8ZNt5dL%2BdtlxQHz%2BjYVtJqlw%2FNaKwi6J8YW7x7iORFiEwVCuD6KVPPZBMN2J2cUGOqUBLu5GcP%2FZLb%2BXfuPD%2BKcFz4NVSx4vigQXGmDy97%2Fn9%2F%2F8Gy6ypenNkcADhz5mR%2BNFXVYdilvqavLzlHSubdcIx8X44x6MXX1FU5IzhFw4%2FpbjXbxbVAl6hpECJiHikaAl6FGDyXsKiTzTeAGIxY10CMDQj%2BNAVFMj3Junb%2FKEzKuJccchbd8rLI5dVEOe%2BnQWZd3URwo%2BTZXYcXCrYnwvYJEfMOPK&X-Amz-Signature=7433084488e3196de337aa07a8bacd1ec3f318cea523ffdac503ec3623ef4536&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
