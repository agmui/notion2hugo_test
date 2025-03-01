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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYQ45WTB%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCICrK0AiiT9pRc2Cu788UG5e9M2J%2FPu%2BY5iEOlTTXtrKaAiEAzrNylrJuzU6NtWeHMK1WkW87RSTRlmxHyamACY2%2B6eEqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBA5gbgy91vvUu2PByrcA2VvDty2XEBpqH1ZgzkhDXsiSGpFpkfTBY%2FVrib%2BqOXDojb%2BRZE8Q2%2B%2F1lgcXSPkX7ogR2fVd1EEfEwFlDsFsn9b3W%2F9G91k3tyXhoxP%2B7LRcEmTkubnEiwA23A09B%2F2vWXYZPYmAXAf%2B9dtyIzgGz3w%2B%2BVqK4VUnHMXsD8RIRdPFYyO%2F1Gr7fsQBe4CWBkmFIoADLLbFqkzKY4oGCph%2FLMIyqMtDJEuQ%2FgU%2FG%2FnB4yZmmA9azKNg1rGVGs7%2BdkYkgwwEv5kBhC49eSaM%2BSHzWDI3FgS1H5mwUq8RyNy6qoiDJEJqwEYytHoKnlZG6rdXHDOc541%2BC6HleR0F6TxPjB4ic%2BTqZIwlKsuvCVSUp1X4hcl%2FPDje7Ve1CYvtiXelzavhoYbe7M4F%2BNBVcyZf1LUWAKBvVqlrSHnen%2Fqm1SIwBB2VTVcgtY7Kj8klfihFngSGMTnOJug08fnC09FQKcyDmNSdEZovkduAm2nmBy2N0jCCbr7IIlBq8royJkBQNN4sJRutzM2CUWTF1OeWOre7lMe13AZby%2FeN8VoruzclltTHeieujYEY4psVRkwZHkdYoILMuPZPjYD2g4oesTWjDwgmp2vNEAAk1mzrcj20OMEtVshUn1hgju0MJW6i74GOqUB%2FnsT%2Foayv0stEnBz3mXDYZfF2bOzi1nWhkT3KRq9aBu4FMMHFxqd5yAQtrYOcwB3PxbSgqs1CFop1OCv1p7919deBWGOpCE0AeD7TLqQbam6daiN3HbZKGoFjV1ea%2FA1R3a81ytwk9paSJFpRcosbjFNJeLB9HO%2F8APhPN3C0mj8lMMrfXx15Dr2qUy8I%2FOtVZd13RbduBNFT5vK036dsu8cIr7x&X-Amz-Signature=7920d20c8cb66998043e601310d8b99ce149135c90a684e715533206b40c78bf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYQ45WTB%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T131214Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJHMEUCICrK0AiiT9pRc2Cu788UG5e9M2J%2FPu%2BY5iEOlTTXtrKaAiEAzrNylrJuzU6NtWeHMK1WkW87RSTRlmxHyamACY2%2B6eEqiAQIo%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBA5gbgy91vvUu2PByrcA2VvDty2XEBpqH1ZgzkhDXsiSGpFpkfTBY%2FVrib%2BqOXDojb%2BRZE8Q2%2B%2F1lgcXSPkX7ogR2fVd1EEfEwFlDsFsn9b3W%2F9G91k3tyXhoxP%2B7LRcEmTkubnEiwA23A09B%2F2vWXYZPYmAXAf%2B9dtyIzgGz3w%2B%2BVqK4VUnHMXsD8RIRdPFYyO%2F1Gr7fsQBe4CWBkmFIoADLLbFqkzKY4oGCph%2FLMIyqMtDJEuQ%2FgU%2FG%2FnB4yZmmA9azKNg1rGVGs7%2BdkYkgwwEv5kBhC49eSaM%2BSHzWDI3FgS1H5mwUq8RyNy6qoiDJEJqwEYytHoKnlZG6rdXHDOc541%2BC6HleR0F6TxPjB4ic%2BTqZIwlKsuvCVSUp1X4hcl%2FPDje7Ve1CYvtiXelzavhoYbe7M4F%2BNBVcyZf1LUWAKBvVqlrSHnen%2Fqm1SIwBB2VTVcgtY7Kj8klfihFngSGMTnOJug08fnC09FQKcyDmNSdEZovkduAm2nmBy2N0jCCbr7IIlBq8royJkBQNN4sJRutzM2CUWTF1OeWOre7lMe13AZby%2FeN8VoruzclltTHeieujYEY4psVRkwZHkdYoILMuPZPjYD2g4oesTWjDwgmp2vNEAAk1mzrcj20OMEtVshUn1hgju0MJW6i74GOqUB%2FnsT%2Foayv0stEnBz3mXDYZfF2bOzi1nWhkT3KRq9aBu4FMMHFxqd5yAQtrYOcwB3PxbSgqs1CFop1OCv1p7919deBWGOpCE0AeD7TLqQbam6daiN3HbZKGoFjV1ea%2FA1R3a81ytwk9paSJFpRcosbjFNJeLB9HO%2F8APhPN3C0mj8lMMrfXx15Dr2qUy8I%2FOtVZd13RbduBNFT5vK036dsu8cIr7x&X-Amz-Signature=20b00668d359be176e2bc84fd094198e2c75b0209fb869b1ef560c624603a1b7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
