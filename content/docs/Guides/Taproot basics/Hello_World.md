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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBT4ICP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICmPRdvJTg%2Bp32rkt89p13kOJ04B5L64jm%2BT0YiJ7%2F7QAiAmBOsgXA1nuhiZLHO%2BVPCCQ4IyI6weIp5mVHEaxdo4WCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMmP96e8tm3LwBtcw3KtwD0fXMOufatpWItbn1bgAxuPmHDHne%2B5OlKtmu%2FdPwetFnpSfHxyGVofkIyUi0L9yMUTQVFR3SCIwwwxbjKqQ%2BuIttkPOrsc%2BBaeu93NKZpEbzETvxmoaccbgMlxaDlHbobdcmUeucHd%2FR4LilemQRpQvzcDmkYXT1tmtfH8XGcugO%2FHXM8hYT0JFJecVmToj3s2kV426IL%2BArWAVuB%2FK2G3Y7HLOyQEVDbh1ekgnhxNwse%2Bh59mP%2F9g%2FP4S8RKRmcstWW%2FPNsvQNQyCHgl6J3UTbegVL92b4f%2FCsUZYrFe9rs9xUuFXI2RLdMacDLtena8IkDfddBlC3XQWFurVAkSe%2Bjaz5LqbFrcnhenh8tr%2BYKuMg8cnPIkYWJNu%2Fe3Dvlp%2B6f2En3%2B912jZBkmGi398Av%2FZXUiX5l%2BpErBxcnBSm8yhj%2BdwoqInFHr5He1VmsSw9J4zqIzRIJeI%2BJXL33jq3e%2BiCCINZpemp0dr3fiQBT1neyH0dQ94oGe3DYqQFerQqyE6VpsqQ654RLxBI5JxalM46Cl%2BT66bgtcndOjABxMyYOxqSf03hXG7aDHDEIuU5a1CIKzbwty9dhGpIy8V3DChrGfxHyovfH%2FoylxnhhrN1Oig%2FRkxKTinAwpv6tvgY6pgGdno6B9SEQqz2a%2F5wN5%2BzDuNRfax2wCc5J7b4eTDLe0pYpyM49b2YnRmVwx7i%2FDB%2FLZUZ0TpI8I1XD3KRArRRK6HEaMlQvoOv4vDgiSpYgkbHH5uiXQ40feOmGoGabGySFHafTPXdkLTBVBILtmg8480zWX7CumSqtc5%2B6EEYyzXR8zt2JJBpQvX%2FwlRsr7ug3YVpL%2BIBjpv6MBzhJ9eows6MxqsMh&X-Amz-Signature=117c26bf37fc6870dfb4daebe9bdbf416b41560beaf2866cc72b5e50b22b8c80&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFBT4ICP%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T002941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJGMEQCICmPRdvJTg%2Bp32rkt89p13kOJ04B5L64jm%2BT0YiJ7%2F7QAiAmBOsgXA1nuhiZLHO%2BVPCCQ4IyI6weIp5mVHEaxdo4WCr%2FAwhQEAAaDDYzNzQyMzE4MzgwNSIMmP96e8tm3LwBtcw3KtwD0fXMOufatpWItbn1bgAxuPmHDHne%2B5OlKtmu%2FdPwetFnpSfHxyGVofkIyUi0L9yMUTQVFR3SCIwwwxbjKqQ%2BuIttkPOrsc%2BBaeu93NKZpEbzETvxmoaccbgMlxaDlHbobdcmUeucHd%2FR4LilemQRpQvzcDmkYXT1tmtfH8XGcugO%2FHXM8hYT0JFJecVmToj3s2kV426IL%2BArWAVuB%2FK2G3Y7HLOyQEVDbh1ekgnhxNwse%2Bh59mP%2F9g%2FP4S8RKRmcstWW%2FPNsvQNQyCHgl6J3UTbegVL92b4f%2FCsUZYrFe9rs9xUuFXI2RLdMacDLtena8IkDfddBlC3XQWFurVAkSe%2Bjaz5LqbFrcnhenh8tr%2BYKuMg8cnPIkYWJNu%2Fe3Dvlp%2B6f2En3%2B912jZBkmGi398Av%2FZXUiX5l%2BpErBxcnBSm8yhj%2BdwoqInFHr5He1VmsSw9J4zqIzRIJeI%2BJXL33jq3e%2BiCCINZpemp0dr3fiQBT1neyH0dQ94oGe3DYqQFerQqyE6VpsqQ654RLxBI5JxalM46Cl%2BT66bgtcndOjABxMyYOxqSf03hXG7aDHDEIuU5a1CIKzbwty9dhGpIy8V3DChrGfxHyovfH%2FoylxnhhrN1Oig%2FRkxKTinAwpv6tvgY6pgGdno6B9SEQqz2a%2F5wN5%2BzDuNRfax2wCc5J7b4eTDLe0pYpyM49b2YnRmVwx7i%2FDB%2FLZUZ0TpI8I1XD3KRArRRK6HEaMlQvoOv4vDgiSpYgkbHH5uiXQ40feOmGoGabGySFHafTPXdkLTBVBILtmg8480zWX7CumSqtc5%2B6EEYyzXR8zt2JJBpQvX%2FwlRsr7ug3YVpL%2BIBjpv6MBzhJ9eows6MxqsMh&X-Amz-Signature=78d24a90e85263db364a51550d665528cf31f2b11230e0dd0aa2db2cc4cf437f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
