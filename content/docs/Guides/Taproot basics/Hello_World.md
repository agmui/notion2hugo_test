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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLUO7EZC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHZ8VlJf3Pkquhp%2BbIv5XUtuT8N5WmcHgVZdtHUlhbPpAiB6dfe5VHP1I%2Fjv6lG25KFOhG87cVBIYyGIYjIt76dnDCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCeNnX1CWV2XtLGRxKtwD2EIEWrFeC%2B6FJQ%2FiaKK%2FHorj4x%2Fx8%2FpvNIBWVWf6QFLny82Bim5zbzyarhyj5xid9vj3haGkfIsBIxgCULBphi3ZVW4FuC0bT9AY31XFocDLl6qTAUZS%2BfzCoUhExHyEOp18yz2JBzy7OLqu5S9t0GMWePN0augHTSl8asOZb1va9U5UvyOpkeTqji00XmaLkMDdW1mBfiTf8cPLEc8z6cAK%2BjdaAddclVh5RIkz34XYKHbxOYt9lflmt13F6aod00UNRc2PdxvEVhXxgzjIO3GS8twAo3OoMFh8fSC9%2F6vQrST4qqDErdHm8CcafKABr5usfKZeA%2F%2FukkIui3uwIA%2FTpJNBv3DWRjQOBHIwvasUnP%2BlWQ6rbqTjHonUk2Blv4NRPLjHPN07EBjRNb0Wk%2FWpX4MWNdrdtStFnydC7iOo3KrUPsDB4w6pANxqxxnnPI5SbftZxBrdgP9uZ8sQ4MXSNIbCgwNT0U7BMKnIg32N2Sr21UyUCACxNLJNbNzfGN4y3N1NAYpgWSm%2FQC7HTNunAolCBklvySHKmm2W3iq3LT0p5jZhPD94yoM5XFsOedvGPqq%2FOLU8rZyzcoCQEEG7z3Sp81JwRrUk%2BOAHB3gL7go9bTFzHHVrieswncKMwQY6pgHECfzbxgNt7MWhHk1DQesDIWcI2%2Byo5UKMYhfjfQP8wJg0Z7q3b2lVhhzx%2Bm1mQBp9xtILFt%2Bf8z3CJpUQ5Fxc4UuClooygeokmRMJlRqWZn%2B1zNNFtkdh3Cef6Qdv1wYHk2rbcHxwermsV9IW%2B0KxzewPVzr2wArDYcAGqShwg%2FRTxF64mssHxjjvHI0CP5GCj1jDSqsoorCsIC%2BqcW6ZyuGESkTX&X-Amz-Signature=40e29a3fa01f24f727b44ca59a75117733b2e485947483b2d0e1a3cc1c2e915c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RLUO7EZC%2F20250513%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250513T110731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJGMEQCIHZ8VlJf3Pkquhp%2BbIv5XUtuT8N5WmcHgVZdtHUlhbPpAiB6dfe5VHP1I%2Fjv6lG25KFOhG87cVBIYyGIYjIt76dnDCqIBAjs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCeNnX1CWV2XtLGRxKtwD2EIEWrFeC%2B6FJQ%2FiaKK%2FHorj4x%2Fx8%2FpvNIBWVWf6QFLny82Bim5zbzyarhyj5xid9vj3haGkfIsBIxgCULBphi3ZVW4FuC0bT9AY31XFocDLl6qTAUZS%2BfzCoUhExHyEOp18yz2JBzy7OLqu5S9t0GMWePN0augHTSl8asOZb1va9U5UvyOpkeTqji00XmaLkMDdW1mBfiTf8cPLEc8z6cAK%2BjdaAddclVh5RIkz34XYKHbxOYt9lflmt13F6aod00UNRc2PdxvEVhXxgzjIO3GS8twAo3OoMFh8fSC9%2F6vQrST4qqDErdHm8CcafKABr5usfKZeA%2F%2FukkIui3uwIA%2FTpJNBv3DWRjQOBHIwvasUnP%2BlWQ6rbqTjHonUk2Blv4NRPLjHPN07EBjRNb0Wk%2FWpX4MWNdrdtStFnydC7iOo3KrUPsDB4w6pANxqxxnnPI5SbftZxBrdgP9uZ8sQ4MXSNIbCgwNT0U7BMKnIg32N2Sr21UyUCACxNLJNbNzfGN4y3N1NAYpgWSm%2FQC7HTNunAolCBklvySHKmm2W3iq3LT0p5jZhPD94yoM5XFsOedvGPqq%2FOLU8rZyzcoCQEEG7z3Sp81JwRrUk%2BOAHB3gL7go9bTFzHHVrieswncKMwQY6pgHECfzbxgNt7MWhHk1DQesDIWcI2%2Byo5UKMYhfjfQP8wJg0Z7q3b2lVhhzx%2Bm1mQBp9xtILFt%2Bf8z3CJpUQ5Fxc4UuClooygeokmRMJlRqWZn%2B1zNNFtkdh3Cef6Qdv1wYHk2rbcHxwermsV9IW%2B0KxzewPVzr2wArDYcAGqShwg%2FRTxF64mssHxjjvHI0CP5GCj1jDSqsoorCsIC%2BqcW6ZyuGESkTX&X-Amz-Signature=eb394b80db8df00df24ca414441b6c7dedc88a2827331b7bed1050642603da15&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
