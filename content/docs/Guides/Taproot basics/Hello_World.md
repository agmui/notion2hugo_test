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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVVSEMGP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu7r8746ukV6E3LktJLFZQCbWgcMh87nrJTu7x6GY%2FCwIhAIxy%2BS5hWo0fH5gs1hXKnIPNzCeZZxZLiUqsidCrg3htKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4Tu28wXWbG8gImHEq3AO9fWyxXrJqlA3yV14eXpDF8TDhItlJXsoy2bhtMI56DDYVOM%2F7y4Fvnsh42eOLwpDpV1hR4iCnyxZYK4tSpUFSZRzIGG%2B%2ByMJM8IywDgn9es8dhwVDxxiyB4nI3sm0%2FfjNAKbbvMNLh83BMdvr2f9JYUV%2FSpdcZ2AS9CmMkMDEaTvnSkbRf8%2BVaqL1rRBvhYb0W4kiOUbVc4ElHX0tsN3Qz2EAaS8kXOHCXbSlPe3vN35RAlcjxyo1F3quJpuUlWcMRwI46lg1Psmg5YMTKUManC1CsAI7PplGmN%2BUqlCjFmcHTEWDe4mLFxfTU3hTIzPnT2nTX%2F4yjLD89EaDFfKy0X4SjOxImEIiFxi3TkFvAAY0lucVxVVm539arQrDLIPcNvZaNP%2FGJq82AWeR6HfAS1Lv3iKunkj%2FEG%2BUJZV7ehVeio5JpFe0EpRk9gsfOCVvU0KzQkEulfVjb%2BUc%2BBKCJVbcSmS9EpqSrBTJ%2FagBQZEtsmms78UhA2BycZREXpo1eXmLONSKuyJapEAvMyDmRs8neqpMboxbaMGS8T37gMa%2FWjV9NuNu8dZ9DgfMLD47IBN6ShzsjqJMILgltQ0Y%2B%2FY2xb7KPy5sJ%2BYDHUsH26MWzIDriIPW%2FsBZ3zDL%2B8vCBjqkAYXDyOh1D7TnMxVZS1cZEA1tKRVRiN1beybed0N6TnYU5bNg8NeT039sdKYdHt24qKm09e20f%2BtjnDLhbjSiO8G48vAOrelW0P7nwdhoZjPKkXrkCBnQm4Vc9Mg85Ft0lo966EetJKbaKgRSEjpNY%2BV8InmA4tjOQkKDlNS1POcfHlDLKx%2BdPka0AwfSCK1LQDAzv0mAj5T4CY0GThPqA95nE3RV&X-Amz-Signature=89b5d3e7365aa4d9e44114ebeb75d4f3fc0cd3a4c5f5471d94de91cc29af2f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVVSEMGP%2F20250618%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250618T201053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDu7r8746ukV6E3LktJLFZQCbWgcMh87nrJTu7x6GY%2FCwIhAIxy%2BS5hWo0fH5gs1hXKnIPNzCeZZxZLiUqsidCrg3htKogECJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw4Tu28wXWbG8gImHEq3AO9fWyxXrJqlA3yV14eXpDF8TDhItlJXsoy2bhtMI56DDYVOM%2F7y4Fvnsh42eOLwpDpV1hR4iCnyxZYK4tSpUFSZRzIGG%2B%2ByMJM8IywDgn9es8dhwVDxxiyB4nI3sm0%2FfjNAKbbvMNLh83BMdvr2f9JYUV%2FSpdcZ2AS9CmMkMDEaTvnSkbRf8%2BVaqL1rRBvhYb0W4kiOUbVc4ElHX0tsN3Qz2EAaS8kXOHCXbSlPe3vN35RAlcjxyo1F3quJpuUlWcMRwI46lg1Psmg5YMTKUManC1CsAI7PplGmN%2BUqlCjFmcHTEWDe4mLFxfTU3hTIzPnT2nTX%2F4yjLD89EaDFfKy0X4SjOxImEIiFxi3TkFvAAY0lucVxVVm539arQrDLIPcNvZaNP%2FGJq82AWeR6HfAS1Lv3iKunkj%2FEG%2BUJZV7ehVeio5JpFe0EpRk9gsfOCVvU0KzQkEulfVjb%2BUc%2BBKCJVbcSmS9EpqSrBTJ%2FagBQZEtsmms78UhA2BycZREXpo1eXmLONSKuyJapEAvMyDmRs8neqpMboxbaMGS8T37gMa%2FWjV9NuNu8dZ9DgfMLD47IBN6ShzsjqJMILgltQ0Y%2B%2FY2xb7KPy5sJ%2BYDHUsH26MWzIDriIPW%2FsBZ3zDL%2B8vCBjqkAYXDyOh1D7TnMxVZS1cZEA1tKRVRiN1beybed0N6TnYU5bNg8NeT039sdKYdHt24qKm09e20f%2BtjnDLhbjSiO8G48vAOrelW0P7nwdhoZjPKkXrkCBnQm4Vc9Mg85Ft0lo966EetJKbaKgRSEjpNY%2BV8InmA4tjOQkKDlNS1POcfHlDLKx%2BdPka0AwfSCK1LQDAzv0mAj5T4CY0GThPqA95nE3RV&X-Amz-Signature=867dc4d718595521d446a815aac0e074d01b236e2a30d368f4f76bba95ab812e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
