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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SIILJZZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDSmout8ayVNDb9xYciDAGtOBvO3%2FmN85nDlJ8bGKlv0AiEA59nTGykPiEtukOMs1bA73qpgvg2tFHrYfMDURGDPs00q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDE%2FsMyq3l1R5K0fK1yrcA0wiZDfeuP7h2TTQUW0%2FxIrXjXaJ7YNJ2obuuCDtBRmHQsbwAOjofsljfYntnlK6tUt3Hoqa5jRTnpCztgT%2Bs9xLCATIEf5OMbP1WeO%2Fnk3fWv%2FIf0X9MQZZ1F23Oq2kAxIbnC2MSJ%2B%2F7LAoXNJY4rlY7Wp2fdSOH9nZfrh%2BcyhfoqIsO0GxVdCt%2F5dpo2Ul92qYYSF5ef8fiNrqxglxB4DQAN1XQTZshYk84sCvss5vcKZNpvBX7GGeqR6PkYeN2yf325dRgc%2FBH9N03JtpKY45ciLpH%2FsrmsCsIALAwa9Xsa3qlCNb7BfKo6%2FEc0NFJxwP%2FGhaZm09kJTCG5s7mc1liSrx5tBQNNpZid9xZ4JVol6nwOd%2F61vufkToi7e%2FspWfB%2BoxgNKBGcPi1HyuqJhiLOCjCcB5MZln5RHNY%2FEjKAblCBEM%2FYb9EHf6hZmSIkWqjCU0MiF8Rlln4ZhjfEkc59IGzPv0tvJDSTCklQ4q%2F3tVApePoLdlBiitEoJd680FGqwyWUQx8NxtpXGgmRe6DA8ccDKJFVSDIwdbgFLelVj159g%2FrjZmLdJ5qvztfRDN1vgcrqWcEuFWIRmAoBoNkN2FQeBXXEkQHfkACXoc2GkbbK678%2BIl5uM%2BMLmzv8IGOqUB1Pg%2FM181%2BqNpgDvZgVIHao4wTmpvysKCzWNr0wy%2BTw%2Bj9pzu3OYA86iJQEWgcitlfub%2F%2BNkgFnfzs7w6F6SjS0GjB4SOh7zeLckI9c2ccR0H%2FFC254MWpI9yGwD%2FPmM3SImZ7vWz3midpzf%2FKv7uEC4VjMCfjUahDVPl2kmCgnzNvl55MxA%2Ba6QQzTrBt%2Fsht7m0jzhwzEcAMgxLROKwhISWouCW&X-Amz-Signature=107f4fc7892e12033a56b0c7441690fe3e06d1894e4a76669a3280819ee711bf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SIILJZZ%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T091151Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIDSmout8ayVNDb9xYciDAGtOBvO3%2FmN85nDlJ8bGKlv0AiEA59nTGykPiEtukOMs1bA73qpgvg2tFHrYfMDURGDPs00q%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDE%2FsMyq3l1R5K0fK1yrcA0wiZDfeuP7h2TTQUW0%2FxIrXjXaJ7YNJ2obuuCDtBRmHQsbwAOjofsljfYntnlK6tUt3Hoqa5jRTnpCztgT%2Bs9xLCATIEf5OMbP1WeO%2Fnk3fWv%2FIf0X9MQZZ1F23Oq2kAxIbnC2MSJ%2B%2F7LAoXNJY4rlY7Wp2fdSOH9nZfrh%2BcyhfoqIsO0GxVdCt%2F5dpo2Ul92qYYSF5ef8fiNrqxglxB4DQAN1XQTZshYk84sCvss5vcKZNpvBX7GGeqR6PkYeN2yf325dRgc%2FBH9N03JtpKY45ciLpH%2FsrmsCsIALAwa9Xsa3qlCNb7BfKo6%2FEc0NFJxwP%2FGhaZm09kJTCG5s7mc1liSrx5tBQNNpZid9xZ4JVol6nwOd%2F61vufkToi7e%2FspWfB%2BoxgNKBGcPi1HyuqJhiLOCjCcB5MZln5RHNY%2FEjKAblCBEM%2FYb9EHf6hZmSIkWqjCU0MiF8Rlln4ZhjfEkc59IGzPv0tvJDSTCklQ4q%2F3tVApePoLdlBiitEoJd680FGqwyWUQx8NxtpXGgmRe6DA8ccDKJFVSDIwdbgFLelVj159g%2FrjZmLdJ5qvztfRDN1vgcrqWcEuFWIRmAoBoNkN2FQeBXXEkQHfkACXoc2GkbbK678%2BIl5uM%2BMLmzv8IGOqUB1Pg%2FM181%2BqNpgDvZgVIHao4wTmpvysKCzWNr0wy%2BTw%2Bj9pzu3OYA86iJQEWgcitlfub%2F%2BNkgFnfzs7w6F6SjS0GjB4SOh7zeLckI9c2ccR0H%2FFC254MWpI9yGwD%2FPmM3SImZ7vWz3midpzf%2FKv7uEC4VjMCfjUahDVPl2kmCgnzNvl55MxA%2Ba6QQzTrBt%2Fsht7m0jzhwzEcAMgxLROKwhISWouCW&X-Amz-Signature=315bef70fbc16c1f2ff534cd61c2fea2ce60f728377837913b831697aef67044&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
