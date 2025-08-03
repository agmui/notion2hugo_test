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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W346FNJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLvXGiE48bq2N2FYTlFWVZON6%2FrL3iFT%2BDx%2FcYhfJh8gIhAPC4y%2FTkNyzwhQ2AOb2f2theZHsdkFHFFufT30qm6nnzKv8DCCQQABoMNjM3NDIzMTgzODA1IgzEI0WHpqZ4SzHX6Xcq3ANpndKA69TO9xV0oOmZ8pA4DU5%2Faq9SmmSvQ9Aue84N1JdPgV2I3U33jmz1OmYntHtxCyDioRE07WK64CeZMJlwkWgBmskXBxpj%2B%2BJXaZTX7OWYIbiroriwNO4uW%2FL6CMIp0fmpe1s7h3TbVwz73EXjOMwdlWnAhuOzkwexlRtmQgJPN2cQ41KK50jmpbYEeF80SkAAzwQANsRigfuzT4yVovFVReCkF8KzzN5gGx3IXswHRZ3UL2VsQYvcYstLLt%2BL2gj79DyB1fpOyzpxN7L%2BVq12sdu9g1xLlehARmwmuVmOaVGvsxT5JZnI18Z1qGgaV14L76I3XqSVnqINze2%2F8c%2FtnYx5SI6v2J2%2FHVIKsWYycURWCxSfH6zLRy8I3dRRm1yAxr%2B91RhNBoAZF%2FolwcrwJoIsnM9U%2FXx1b%2FTwyOiDphxsontSL2aj0Ai8mTRFr0eymSzSHMjcgA5klLLSWFJ3fQh1bpoWO%2BNRRu%2BXpKBxbZxDqMOeWtlujbn8Rxr%2BtFUCfeI4QwFR6CdnlzecMT%2FXExyl6ljJaBZODOoaXpaykF4AVQyes9qpQ%2FatH3oVcM%2F%2FIHrJ%2BhsJ6ca0tuIdgTDC1NbMO7fJhHJmAu6Roxq4wovUYIC9dAelojC2obvEBjqkAbdk7FmPbsAFMgCXWutztNyGmzEKr%2FgAWfrF1ij4P6T90kzsRoWVSk7hs2%2BKS3JObm44cpFlqzRNIFPMgkHjsEjx5dlmba6WaSVDmRbI9Ee3g3e2BxSgFWeUAF3RdiS5LGFgshDqBqF8OzyKP%2BTvRYdxJYUtXSRKd5lXodL1N%2BtEHLNKnCMLJPnar5uyOVH4vzVaXu59s1OKqGoCc14ktH4wQCpF&X-Amz-Signature=d7665b14ff13b35786fdfeaee54b360e99882937ad8032f02f10fc4077946c66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663W346FNJ%2F20250803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250803T061325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDLvXGiE48bq2N2FYTlFWVZON6%2FrL3iFT%2BDx%2FcYhfJh8gIhAPC4y%2FTkNyzwhQ2AOb2f2theZHsdkFHFFufT30qm6nnzKv8DCCQQABoMNjM3NDIzMTgzODA1IgzEI0WHpqZ4SzHX6Xcq3ANpndKA69TO9xV0oOmZ8pA4DU5%2Faq9SmmSvQ9Aue84N1JdPgV2I3U33jmz1OmYntHtxCyDioRE07WK64CeZMJlwkWgBmskXBxpj%2B%2BJXaZTX7OWYIbiroriwNO4uW%2FL6CMIp0fmpe1s7h3TbVwz73EXjOMwdlWnAhuOzkwexlRtmQgJPN2cQ41KK50jmpbYEeF80SkAAzwQANsRigfuzT4yVovFVReCkF8KzzN5gGx3IXswHRZ3UL2VsQYvcYstLLt%2BL2gj79DyB1fpOyzpxN7L%2BVq12sdu9g1xLlehARmwmuVmOaVGvsxT5JZnI18Z1qGgaV14L76I3XqSVnqINze2%2F8c%2FtnYx5SI6v2J2%2FHVIKsWYycURWCxSfH6zLRy8I3dRRm1yAxr%2B91RhNBoAZF%2FolwcrwJoIsnM9U%2FXx1b%2FTwyOiDphxsontSL2aj0Ai8mTRFr0eymSzSHMjcgA5klLLSWFJ3fQh1bpoWO%2BNRRu%2BXpKBxbZxDqMOeWtlujbn8Rxr%2BtFUCfeI4QwFR6CdnlzecMT%2FXExyl6ljJaBZODOoaXpaykF4AVQyes9qpQ%2FatH3oVcM%2F%2FIHrJ%2BhsJ6ca0tuIdgTDC1NbMO7fJhHJmAu6Roxq4wovUYIC9dAelojC2obvEBjqkAbdk7FmPbsAFMgCXWutztNyGmzEKr%2FgAWfrF1ij4P6T90kzsRoWVSk7hs2%2BKS3JObm44cpFlqzRNIFPMgkHjsEjx5dlmba6WaSVDmRbI9Ee3g3e2BxSgFWeUAF3RdiS5LGFgshDqBqF8OzyKP%2BTvRYdxJYUtXSRKd5lXodL1N%2BtEHLNKnCMLJPnar5uyOVH4vzVaXu59s1OKqGoCc14ktH4wQCpF&X-Amz-Signature=8c32575f8033d41e96d7b828a55359b371bfff0c494ef5c8679ac6191a712730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
