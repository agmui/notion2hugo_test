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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUIYMFD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD9YX3yWqDheRNHyPrJKmVrH2hzAJ4dbf6TxCPsiC9wwIhAPEuV1V062bXHw362cN5vRuaMuoyZRnABL2fj3qJFiJkKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyuz8Wbs751MZ4BvCQq3AMV4yo%2BK4gT5HpupOk5vKsRw6jLM04vopFrph73Ao%2Ff99gOgXk3MvNyrtsqbyDkONVfINF8%2Byz8PzRzZB1KVTD5UfxggC8bpmPyJthrGtO3sbX%2F%2B%2BEtNaKGi%2BT3BMgVR1bfrT5kaMWEVRaOrG1YxXs48hA59vgVGq6sawSH%2BRbnlGAvCJZbJlSK5U9RKBwH4IPwT0B%2BhWfVEGzd6r79Ns2j4yXFzIoE6OzZJ%2B51AXiDniAVdm%2BQl%2FaW1yGZtpcKEj%2FePbEPuu%2Bgl%2FxEszixqSNmKrsiR4DsDOJPv%2BD1UuiIOD2T6j3XOp%2FdbM%2F5ppIA1NlZoCC9OUQfgFi%2Fj2g45duKq0pjc3NPYKv9btDVBfe%2B00t4i0CJ7c0BLsAggudkZ4IcjBRAAH4tvP4qOXoMPrx1qUOl1W9l8lVOXOXzj7qtK%2Bryx59mHuZ6acb%2FPisThP1RPAJc5Wm2r9ieWfx%2FOb01X3hWWDvMn9USslNS3WbgiJd4DQW4ViHSFli3ERGqMkyXc1y5kimW9lV%2BSb3tolbcTFZS9i5dg1Pfzn%2FDAIb%2B4S1dRXowuPupHR8vmQCG0Vjef%2F%2BvR6SV9gOA4xf0himtx9GhgxM%2BtDfq1xC8GEw5%2FBxHn8lxPx2gIJhiUDC%2Bp8LABjqkAeAaBpKID6Vw3y51xcNtWyOWdcTm%2F%2BN9HDlYPeZOdadQHs01Zt%2Blj%2BEIHyWOJbPTD11S0ermulT6bLbK1fGNSmoE%2BVcrGOkRFSDO9EEmuSTeuzY4EBLxQ38Lklmi%2FKuLA7nyiZwGO4D6lO6iILhx%2Bhe7ANd4htnxSgPqSSkZ7qvkjhWJr053lTQvkuuijKl%2BHni3k64urVWlTOH4Oc%2B%2BrwAgAHry&X-Amz-Signature=7fc7c57dbd1ab404cea345dc2065cb6fefdaee48a68d625f9772841aa7826926&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GUIYMFD%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T090934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCD9YX3yWqDheRNHyPrJKmVrH2hzAJ4dbf6TxCPsiC9wwIhAPEuV1V062bXHw362cN5vRuaMuoyZRnABL2fj3qJFiJkKogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyuz8Wbs751MZ4BvCQq3AMV4yo%2BK4gT5HpupOk5vKsRw6jLM04vopFrph73Ao%2Ff99gOgXk3MvNyrtsqbyDkONVfINF8%2Byz8PzRzZB1KVTD5UfxggC8bpmPyJthrGtO3sbX%2F%2B%2BEtNaKGi%2BT3BMgVR1bfrT5kaMWEVRaOrG1YxXs48hA59vgVGq6sawSH%2BRbnlGAvCJZbJlSK5U9RKBwH4IPwT0B%2BhWfVEGzd6r79Ns2j4yXFzIoE6OzZJ%2B51AXiDniAVdm%2BQl%2FaW1yGZtpcKEj%2FePbEPuu%2Bgl%2FxEszixqSNmKrsiR4DsDOJPv%2BD1UuiIOD2T6j3XOp%2FdbM%2F5ppIA1NlZoCC9OUQfgFi%2Fj2g45duKq0pjc3NPYKv9btDVBfe%2B00t4i0CJ7c0BLsAggudkZ4IcjBRAAH4tvP4qOXoMPrx1qUOl1W9l8lVOXOXzj7qtK%2Bryx59mHuZ6acb%2FPisThP1RPAJc5Wm2r9ieWfx%2FOb01X3hWWDvMn9USslNS3WbgiJd4DQW4ViHSFli3ERGqMkyXc1y5kimW9lV%2BSb3tolbcTFZS9i5dg1Pfzn%2FDAIb%2B4S1dRXowuPupHR8vmQCG0Vjef%2F%2BvR6SV9gOA4xf0himtx9GhgxM%2BtDfq1xC8GEw5%2FBxHn8lxPx2gIJhiUDC%2Bp8LABjqkAeAaBpKID6Vw3y51xcNtWyOWdcTm%2F%2BN9HDlYPeZOdadQHs01Zt%2Blj%2BEIHyWOJbPTD11S0ermulT6bLbK1fGNSmoE%2BVcrGOkRFSDO9EEmuSTeuzY4EBLxQ38Lklmi%2FKuLA7nyiZwGO4D6lO6iILhx%2Bhe7ANd4htnxSgPqSSkZ7qvkjhWJr053lTQvkuuijKl%2BHni3k64urVWlTOH4Oc%2B%2BrwAgAHry&X-Amz-Signature=608bb02ac65bfeab0286e955525cd9e720ec0303ba2718641799a61fbbf47c85&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
