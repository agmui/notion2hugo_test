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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHHSNF6R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCn57sID7%2BhbsID9PLkK8x0kMxWJ339wNRGTVjAQOE5ZwIhAMBcJdeRhQfgixN7q7rLAkOYb8FNzHRVqIY3PEFM8DKwKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxalwPg42tKbfsxu4gq3APo3mH9zaXiTHZ5oX4DMq8mTo86fpFh8r8krERF%2BfgjxxXq8Bi0VDvVVQ1RPpm%2BdYMAYGPCi4IF5sJYD4gT3BmnE%2Bj9AYDLVKhTeoHxsQ%2FwHeVulzv3e3r19KxYjKvo1IA6LVO1zwBX8ZWaZ9OCIxqaftxsARIZwySaheOO8YSIawH2RDxmrZ39%2BdJvj8f6GCiwfmGX0JCDaI%2FzdLOiB%2BpIaW9AWRYSiXzxbTCEziaQKFdFoXFMMhZug9Bpmb8eKnRa99UuOwv570FrPQb7J%2Fqi2e2URXutFK2EY3LOCBXEQo9A9DJhcOoeI7wEEXb6mVSz7JDHfuDL8uLCHbLKSrv0D7DIJcMS68zyxrqO0ho6ic2eBThQk0e%2BymQBjY1ZhcYCWhPHIc3WzCkhwudPI2p2fl5gcoYFjoP7budLyxDRxgWKdJDE3WzKU866qRIilp0W97k5o5gHVxGwjsbPGEFYxHToYpwr8w6QUMcq5xf%2BNHTYP%2F9vU0vHNfE7s1QfqNLnoSMtC3QXy1VRf%2F23mtmtaCjNvTpzerLqoEagaQ8uqKZ5abmyJJTUeKfuwI4KGpc13SO9pE1pDTkpXbNX4yUTB%2FGbbmcgZQhssPnp0xHEZNr10YK1nLEIbB96PDCTsOPCBjqkAdZEBIGZ5BhDtTyeD2o8JBCrZkhApjn70sThs%2BlU81cocgHn6QSZJC7nUa6%2Fef0ACLVj4HtUVbuV9AQbmWtqa9S%2FoAwunAcI50VNTzNFlQ8V5m3RND84lEcTKHSAyq1TdXkLlmpSJyA62t1brePXxd1fKbw0LArsdvBXKw1DhVbYdcWY1Ijs%2BvIjlG7zarFMiyMw0XyPe6vsYgqeZduatwTrVOYK&X-Amz-Signature=06c06f95e90f976d069f05d8ceb7ba2fd1a7a4648e36232501fc2561cd7c9ef4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHHSNF6R%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T051219Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBUaCXVzLXdlc3QtMiJIMEYCIQCn57sID7%2BhbsID9PLkK8x0kMxWJ339wNRGTVjAQOE5ZwIhAMBcJdeRhQfgixN7q7rLAkOYb8FNzHRVqIY3PEFM8DKwKogECP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxalwPg42tKbfsxu4gq3APo3mH9zaXiTHZ5oX4DMq8mTo86fpFh8r8krERF%2BfgjxxXq8Bi0VDvVVQ1RPpm%2BdYMAYGPCi4IF5sJYD4gT3BmnE%2Bj9AYDLVKhTeoHxsQ%2FwHeVulzv3e3r19KxYjKvo1IA6LVO1zwBX8ZWaZ9OCIxqaftxsARIZwySaheOO8YSIawH2RDxmrZ39%2BdJvj8f6GCiwfmGX0JCDaI%2FzdLOiB%2BpIaW9AWRYSiXzxbTCEziaQKFdFoXFMMhZug9Bpmb8eKnRa99UuOwv570FrPQb7J%2Fqi2e2URXutFK2EY3LOCBXEQo9A9DJhcOoeI7wEEXb6mVSz7JDHfuDL8uLCHbLKSrv0D7DIJcMS68zyxrqO0ho6ic2eBThQk0e%2BymQBjY1ZhcYCWhPHIc3WzCkhwudPI2p2fl5gcoYFjoP7budLyxDRxgWKdJDE3WzKU866qRIilp0W97k5o5gHVxGwjsbPGEFYxHToYpwr8w6QUMcq5xf%2BNHTYP%2F9vU0vHNfE7s1QfqNLnoSMtC3QXy1VRf%2F23mtmtaCjNvTpzerLqoEagaQ8uqKZ5abmyJJTUeKfuwI4KGpc13SO9pE1pDTkpXbNX4yUTB%2FGbbmcgZQhssPnp0xHEZNr10YK1nLEIbB96PDCTsOPCBjqkAdZEBIGZ5BhDtTyeD2o8JBCrZkhApjn70sThs%2BlU81cocgHn6QSZJC7nUa6%2Fef0ACLVj4HtUVbuV9AQbmWtqa9S%2FoAwunAcI50VNTzNFlQ8V5m3RND84lEcTKHSAyq1TdXkLlmpSJyA62t1brePXxd1fKbw0LArsdvBXKw1DhVbYdcWY1Ijs%2BvIjlG7zarFMiyMw0XyPe6vsYgqeZduatwTrVOYK&X-Amz-Signature=a5eb396fdc06a87c462af2c654480d13e579e7d3745f31be80b8b8ed76419414&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
