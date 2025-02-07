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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GSYTXO5%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGrCnMizJIBctLDn244e2cnjLZ%2FaP0oqCMOUnSeBiLEtAiEAkcN5s%2FM3CoYRoud4K2IhMUBsBfkIDKRSW69vMidEeUIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDA0WpiH%2BW5Moo7%2Bj8SrcAyIZR%2BehG02RaxSBsoSmpekHUzwv2Lx%2BM8xUm183k4Tdww0SM7ROPQtqzDqL%2BXYFwNqz4zKKqijKew%2ByiteSTPz16ZTOx3lpBowyuoRTs4tpZn8xNVCjJScIDPWawxjZ45%2FP1I5VelqiXVtQbFLqzUwAAlu3GUzcyUukE5r%2BsDKmBKs%2F52hRoguZA%2BCsOgDcmo6R7xD7InpBpr6Two9p29FHQxtuVShdJjUNyybmJHTZbdZso1DODhAzuu%2FPIpSAvuhpa2spwY7tavW6bHQbVL4p0iwKei8Su%2FTZiB0J1aecH%2F%2FaPeK4iSYSMlq86FTT44XfsPcbuHBDKWw0D207ZIgXL0g0R17zZRZjHXyjXwzGpHEdviTx4MnOLUDpjDTwKTplDEVbJcn880qyWQq%2BgdXL14itdIE8ZuL7XUQYUe7dkDIvVByoQV6Au%2F77iBe69WHGEiG2oWI35d1ePZ%2FR1C%2BIFTjn%2FB3yCAeA65IjjsNSZi6IFOIcS4jt95MOeESFueu%2FOBldJiJ2dEmpm%2Fh8zYJm%2BX8QgUxEM59cXnSimZPSr8IssmistPM9FOl3gwvlK6Vds%2Fvy1g3cVf0sVfrnCDWlqfhAEDS0EMWUJj%2BqiYXcxqTSd9rQC1V%2FYmnIMN36lr0GOqUBfwuEaXN%2B8vFMrsKpj3z7i%2FY10R%2FQPDcQustsVeNJMpGSwZbmHUapcD1ksGLsZH70ERalCIztLIPA9UTdifKssbLg%2FPkfa3H%2BqqJuIdHpsfFK049Tc3zmENxOshbFr8sdixalt8QY5f5jDs0xh%2FDvwvd1oC3WVnZZlP9Oe8PKa39y%2BBEZNWv%2F2oVYRhDecV4ikn0cKOncKw0EKpmT%2BJSxGSf9m8cC&X-Amz-Signature=52ff577e16356ddc815ca47233135350e11f0247e9ffb15c2fcc72d0c73fac07&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GSYTXO5%2F20250207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250207T100815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFgaCXVzLXdlc3QtMiJHMEUCIGrCnMizJIBctLDn244e2cnjLZ%2FaP0oqCMOUnSeBiLEtAiEAkcN5s%2FM3CoYRoud4K2IhMUBsBfkIDKRSW69vMidEeUIq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDA0WpiH%2BW5Moo7%2Bj8SrcAyIZR%2BehG02RaxSBsoSmpekHUzwv2Lx%2BM8xUm183k4Tdww0SM7ROPQtqzDqL%2BXYFwNqz4zKKqijKew%2ByiteSTPz16ZTOx3lpBowyuoRTs4tpZn8xNVCjJScIDPWawxjZ45%2FP1I5VelqiXVtQbFLqzUwAAlu3GUzcyUukE5r%2BsDKmBKs%2F52hRoguZA%2BCsOgDcmo6R7xD7InpBpr6Two9p29FHQxtuVShdJjUNyybmJHTZbdZso1DODhAzuu%2FPIpSAvuhpa2spwY7tavW6bHQbVL4p0iwKei8Su%2FTZiB0J1aecH%2F%2FaPeK4iSYSMlq86FTT44XfsPcbuHBDKWw0D207ZIgXL0g0R17zZRZjHXyjXwzGpHEdviTx4MnOLUDpjDTwKTplDEVbJcn880qyWQq%2BgdXL14itdIE8ZuL7XUQYUe7dkDIvVByoQV6Au%2F77iBe69WHGEiG2oWI35d1ePZ%2FR1C%2BIFTjn%2FB3yCAeA65IjjsNSZi6IFOIcS4jt95MOeESFueu%2FOBldJiJ2dEmpm%2Fh8zYJm%2BX8QgUxEM59cXnSimZPSr8IssmistPM9FOl3gwvlK6Vds%2Fvy1g3cVf0sVfrnCDWlqfhAEDS0EMWUJj%2BqiYXcxqTSd9rQC1V%2FYmnIMN36lr0GOqUBfwuEaXN%2B8vFMrsKpj3z7i%2FY10R%2FQPDcQustsVeNJMpGSwZbmHUapcD1ksGLsZH70ERalCIztLIPA9UTdifKssbLg%2FPkfa3H%2BqqJuIdHpsfFK049Tc3zmENxOshbFr8sdixalt8QY5f5jDs0xh%2FDvwvd1oC3WVnZZlP9Oe8PKa39y%2BBEZNWv%2F2oVYRhDecV4ikn0cKOncKw0EKpmT%2BJSxGSf9m8cC&X-Amz-Signature=8f6404402e9e82f21f1e44fc193d11ff00818a623502b831d5ec885a638dca3b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
