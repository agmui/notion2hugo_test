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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEGPRUNS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMl77r%2FNEPOuxDHNqr%2BNm2gakxhaYOPPrvNYGreJT9mAiEA%2BDWGdfzBYAK4ZgcUqDox8szOTNn5tlLt%2FFJMQ4B0LrAqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnpauWLBk3gIG0SlyrcA3iANbIRzLbACvQ5rMhQ4yZR5LZGPApMyzi22U1cNqUd0tDJ5G72jbzFZytAS4YcT4igVaG3%2BikSWNciAVHvYkdsW72PN6uS1CSZwgC15G5zA8FIsp3P3KP2XfwszU0rONDOlv5fkCHsKSYBAyDzX0lugzsV70Yq62xeSw2PIdTsnyhEu5%2F%2F9emOfg6pC80lr7NrWPoPMc%2FOXB5qXd%2Bshwd9Zzi5o5Eyc7ZueeGlPpb19m3TIwNqNNX2btG2%2FJPz%2BLmSrO5MAeYXGbZ%2FqVDI%2B2rhZQB0lNAFTbRCqrcmJrgnUQBZfFhqOSLgNZ1rGHYOL0d%2Ff19U8KTTwsU3MMsLjkAUhLBgBlwfs6MimGjE0b7p1VMnQmgqUhk6CJOHKqOJ9IlD4zMCrv3v6%2B36Sc47As5iNeUtU37cmP7kZh9WMYdER5nS7CWRdIV2RdRPOVMf3eITYPcg21om9Irq%2FlwZoJXRe74UATI4pu3z6Y3F2huuqZAXOKfyuuAQL0oQcrTdQtSqAQC0Z9K1UPTw1eb%2Bw8Vg%2FybGOvfmYyawnTRQthW48%2BBPNFJWjVQKHS5Ei7R6JPeXQy7VyYVFJSbK0xmS2VhqgrdIREOsed6VuKQzhKBWkmQhO2jz884bGLKCMKDcrb0GOqUBl%2BSoVLJpBwCGvuN15ujOpJhfYXaR57GmCBOE1KMn%2B7%2FDxWRNicJoQXxfZLibGpyZdlRE071iVcPGJKqwlt6XlY0lnRQrSOOtf1IOwMzzrZbPjy2GftnTD5G8621BmiidnpcgkvFvvy4LbA0hlAc6StxsQySB9mZ4yM3AcL77T%2Ba9ZDvrpT6YEqs7yuWIbd8WM1uU62D51xKZUa%2Blp6kBSjkHTsmj&X-Amz-Signature=a6e74f28759dc4878c247f2d82520cd6609fe585e73cca7e84a172be38483b81&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZEGPRUNS%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T160908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAMl77r%2FNEPOuxDHNqr%2BNm2gakxhaYOPPrvNYGreJT9mAiEA%2BDWGdfzBYAK4ZgcUqDox8szOTNn5tlLt%2FFJMQ4B0LrAqiAQI2f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEnpauWLBk3gIG0SlyrcA3iANbIRzLbACvQ5rMhQ4yZR5LZGPApMyzi22U1cNqUd0tDJ5G72jbzFZytAS4YcT4igVaG3%2BikSWNciAVHvYkdsW72PN6uS1CSZwgC15G5zA8FIsp3P3KP2XfwszU0rONDOlv5fkCHsKSYBAyDzX0lugzsV70Yq62xeSw2PIdTsnyhEu5%2F%2F9emOfg6pC80lr7NrWPoPMc%2FOXB5qXd%2Bshwd9Zzi5o5Eyc7ZueeGlPpb19m3TIwNqNNX2btG2%2FJPz%2BLmSrO5MAeYXGbZ%2FqVDI%2B2rhZQB0lNAFTbRCqrcmJrgnUQBZfFhqOSLgNZ1rGHYOL0d%2Ff19U8KTTwsU3MMsLjkAUhLBgBlwfs6MimGjE0b7p1VMnQmgqUhk6CJOHKqOJ9IlD4zMCrv3v6%2B36Sc47As5iNeUtU37cmP7kZh9WMYdER5nS7CWRdIV2RdRPOVMf3eITYPcg21om9Irq%2FlwZoJXRe74UATI4pu3z6Y3F2huuqZAXOKfyuuAQL0oQcrTdQtSqAQC0Z9K1UPTw1eb%2Bw8Vg%2FybGOvfmYyawnTRQthW48%2BBPNFJWjVQKHS5Ei7R6JPeXQy7VyYVFJSbK0xmS2VhqgrdIREOsed6VuKQzhKBWkmQhO2jz884bGLKCMKDcrb0GOqUBl%2BSoVLJpBwCGvuN15ujOpJhfYXaR57GmCBOE1KMn%2B7%2FDxWRNicJoQXxfZLibGpyZdlRE071iVcPGJKqwlt6XlY0lnRQrSOOtf1IOwMzzrZbPjy2GftnTD5G8621BmiidnpcgkvFvvy4LbA0hlAc6StxsQySB9mZ4yM3AcL77T%2Ba9ZDvrpT6YEqs7yuWIbd8WM1uU62D51xKZUa%2Blp6kBSjkHTsmj&X-Amz-Signature=9060581a46a25730553f9725610c445498276a81644f262451af8627566fc5c1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
