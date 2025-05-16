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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NHA73W%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPSC6%2B131I%2FRfgDe2JelaJrUJdXRj0hlMsU2taZSxe3AIgKUOP7X4j5fuHGChV8EvKpQLL2UFXzXk52OWYOLFthmMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKKNiQ66L1f5cYGIVCrcAwUFIT2Zh846pb6xARbwjDvw%2Bp5v1hjbKyyMs61jZzg3fNPAXELow%2FycAWKeGakjUDWbl7HUCQIFWh7d9jMWR7EospI2uyQy3IY%2FPw7ikV3h5wG5CuBCPchaOtlCBn1PUcdMljR%2BPVg9t1q9v88yVcVjh3qQtDqWB8Z2B00bWpj6fedMBRty5O0XDjyWc111bRhzRMShmM%2FZjMhqdGQGd13TufTfoPelc99Oc17HUs2V2ZOpmsqk5YNbFS0lSP%2BCYzpQXR%2B1JLPO63pU%2B8da735Kifq7ZuAgclPdtteRoKhh8GtJwRGOmlo09C2qAsNDsMJ%2Bdj0a9asLvv6K83IO5m4O5nrXO5S6PF1Y%2FtUtd9kqwulhOnp8uKqAvpBbuazCalaxsBIRzZ39xE63AgufVEeY1Taac36bxYvVLxFEgwC3S1P0av4HIFN%2FmZIB1M9jIStul3GIn4pjW%2F90oRX7wy8Lv2YbV5cswtaXgBztesvd6mRm0dwKILhix8MVQkQiCRafjZ4%2FKvA%2BB32V8sPqa2HF%2B3ov2bbNunDsgcr0FgMtOzkJp%2F1ulNRXxJrLQ4BsNf%2BNuIm%2FlQTZNLIsKNFbXGwi%2BPfvC0nSadF2bebWr8%2BajpEUcvCWaNInXXgXMI3EnsEGOqUB5ZErSnWocGd73w%2F5ivUfWEMV%2BXib1CZLOv%2BJqyAe%2Bf4J%2Ff1K52TVEFjZ9GujErJeZV4XPS5I2VNokjXBmuaKKF%2BD%2F%2FQFL2%2BX20enDAJWfyo2EN9tffeiL%2Bn77b3Ai4J4LL2Y23WXSF3QWXR40hPf3wK754kpMkWFh0cSTYittM66wfhXivSUksOnE6wfDSrs%2B8BIzcZT7Lhp37dERJ0rQ9TpiUL7&X-Amz-Signature=d143daed09f7034546d5f3188e8603b33705cf4df66edc71889086dcd1694d07&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675NHA73W%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T210726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDPSC6%2B131I%2FRfgDe2JelaJrUJdXRj0hlMsU2taZSxe3AIgKUOP7X4j5fuHGChV8EvKpQLL2UFXzXk52OWYOLFthmMq%2FwMIThAAGgw2Mzc0MjMxODM4MDUiDKKNiQ66L1f5cYGIVCrcAwUFIT2Zh846pb6xARbwjDvw%2Bp5v1hjbKyyMs61jZzg3fNPAXELow%2FycAWKeGakjUDWbl7HUCQIFWh7d9jMWR7EospI2uyQy3IY%2FPw7ikV3h5wG5CuBCPchaOtlCBn1PUcdMljR%2BPVg9t1q9v88yVcVjh3qQtDqWB8Z2B00bWpj6fedMBRty5O0XDjyWc111bRhzRMShmM%2FZjMhqdGQGd13TufTfoPelc99Oc17HUs2V2ZOpmsqk5YNbFS0lSP%2BCYzpQXR%2B1JLPO63pU%2B8da735Kifq7ZuAgclPdtteRoKhh8GtJwRGOmlo09C2qAsNDsMJ%2Bdj0a9asLvv6K83IO5m4O5nrXO5S6PF1Y%2FtUtd9kqwulhOnp8uKqAvpBbuazCalaxsBIRzZ39xE63AgufVEeY1Taac36bxYvVLxFEgwC3S1P0av4HIFN%2FmZIB1M9jIStul3GIn4pjW%2F90oRX7wy8Lv2YbV5cswtaXgBztesvd6mRm0dwKILhix8MVQkQiCRafjZ4%2FKvA%2BB32V8sPqa2HF%2B3ov2bbNunDsgcr0FgMtOzkJp%2F1ulNRXxJrLQ4BsNf%2BNuIm%2FlQTZNLIsKNFbXGwi%2BPfvC0nSadF2bebWr8%2BajpEUcvCWaNInXXgXMI3EnsEGOqUB5ZErSnWocGd73w%2F5ivUfWEMV%2BXib1CZLOv%2BJqyAe%2Bf4J%2Ff1K52TVEFjZ9GujErJeZV4XPS5I2VNokjXBmuaKKF%2BD%2F%2FQFL2%2BX20enDAJWfyo2EN9tffeiL%2Bn77b3Ai4J4LL2Y23WXSF3QWXR40hPf3wK754kpMkWFh0cSTYittM66wfhXivSUksOnE6wfDSrs%2B8BIzcZT7Lhp37dERJ0rQ9TpiUL7&X-Amz-Signature=666146fd007f6aba8c9549b1acac931b4b46784d23a36e8247732fd8bca9043e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
