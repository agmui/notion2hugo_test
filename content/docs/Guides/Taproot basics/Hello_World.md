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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SXSPNU4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICs0B28y3Htx%2Fqnxpta2x83IRkiZPXTAtXg8zAGfIyiLAiEAwClnan1ASpj%2Bfv%2Fwm2HVZQVVzq1XZQRvbmlIeXkFDLIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNKIPqycsA3ZzkZ5AircA8h7QWiSStof%2FENfOCBXBbuh%2BEv9LXbp682MDM3syJpOJUNqPX7rVzaCRutAfxEKtTNQIfBLq4datW8q%2BCQFU8xwqLJxC2S0uco1CkVPP6TVUpapmNEmnUifFfVVV69iNjCYUoC12fUz3wP%2FbBiwgYGrBYj2KE3F%2F4RxeVWtaBQwR4MXsYBruFEOid5jDMDkq4PWiqrJn0Zsaj73fbejM%2B2r03tYDv9%2F%2FGshWt%2BOeOLJRCrTu3CGLFYttaZwNHQAAq3xtu7RFVewq%2BYN%2FIRFck%2F1RRnHkrTi3tEG4fbf8BhL64lsjMEDMIx9e2%2BMTM%2Flpo7q5MbnrUvHemyLiOk6FjZm%2Brx7ANPdMSWdjC2rXiBdCznrFM9J0ZTDgqCRGy2%2BA5OboAWtdsrztiAvkRI7xseRV5zt64ktgfUWS0gbEyN4HwDAVktJMw9h508CPST6CCS7HyKfzHV8OmWgt39ebyA1x7lftNEai8a%2FPrlv8JxA8OH13LZhG8wPqZh%2B6DMWykNu%2Ftd5SXDtAHPYSJhhEnvltrUxVylUQBP6%2BgmoOJAx0ks1UPNbRG9iel56crJB7uhlDcNcldirYJnqVk9a2AO3mwRBDCXFrd3pbgzybaAGtXH5LP8%2F29VrHWFrMJvBtcIGOqUBzOz8VGNYcmU2frZLJfXJLvPkYYGR082o8q73y7QdEYWIo1exh7zEa5VkTvvoKav21vQhNzpl8t540zy6I2iNTqVa09rKKKFypwTqBJrPV60kWuLs6519cK0pWyh4Zt9kyBnayYTbeJFo02fDPGlX988mza8DdgkWv31P59Tjo%2Bp%2BG5q7IkxOTI02SC4UxrwDFD%2BT10USxyDRfDhGfUTglSby%2BMOm&X-Amz-Signature=572eb0d83f3bf618677db0e70f1a8a180769707436a846c56422d55fefd2a26d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SXSPNU4%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T150717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJHMEUCICs0B28y3Htx%2Fqnxpta2x83IRkiZPXTAtXg8zAGfIyiLAiEAwClnan1ASpj%2Bfv%2Fwm2HVZQVVzq1XZQRvbmlIeXkFDLIq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDNKIPqycsA3ZzkZ5AircA8h7QWiSStof%2FENfOCBXBbuh%2BEv9LXbp682MDM3syJpOJUNqPX7rVzaCRutAfxEKtTNQIfBLq4datW8q%2BCQFU8xwqLJxC2S0uco1CkVPP6TVUpapmNEmnUifFfVVV69iNjCYUoC12fUz3wP%2FbBiwgYGrBYj2KE3F%2F4RxeVWtaBQwR4MXsYBruFEOid5jDMDkq4PWiqrJn0Zsaj73fbejM%2B2r03tYDv9%2F%2FGshWt%2BOeOLJRCrTu3CGLFYttaZwNHQAAq3xtu7RFVewq%2BYN%2FIRFck%2F1RRnHkrTi3tEG4fbf8BhL64lsjMEDMIx9e2%2BMTM%2Flpo7q5MbnrUvHemyLiOk6FjZm%2Brx7ANPdMSWdjC2rXiBdCznrFM9J0ZTDgqCRGy2%2BA5OboAWtdsrztiAvkRI7xseRV5zt64ktgfUWS0gbEyN4HwDAVktJMw9h508CPST6CCS7HyKfzHV8OmWgt39ebyA1x7lftNEai8a%2FPrlv8JxA8OH13LZhG8wPqZh%2B6DMWykNu%2Ftd5SXDtAHPYSJhhEnvltrUxVylUQBP6%2BgmoOJAx0ks1UPNbRG9iel56crJB7uhlDcNcldirYJnqVk9a2AO3mwRBDCXFrd3pbgzybaAGtXH5LP8%2F29VrHWFrMJvBtcIGOqUBzOz8VGNYcmU2frZLJfXJLvPkYYGR082o8q73y7QdEYWIo1exh7zEa5VkTvvoKav21vQhNzpl8t540zy6I2iNTqVa09rKKKFypwTqBJrPV60kWuLs6519cK0pWyh4Zt9kyBnayYTbeJFo02fDPGlX988mza8DdgkWv31P59Tjo%2Bp%2BG5q7IkxOTI02SC4UxrwDFD%2BT10USxyDRfDhGfUTglSby%2BMOm&X-Amz-Signature=07bddb423d77d5b09704e81b021555d3094976c8f4b56b869a4ff190d55db4fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
