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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNV47OLQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJxLJpcRcjzajSGZDYPADi%2BTz3meuZc7PHh1eauHSTOAiB%2Bb0USgj6Z3haBsnMYPpHvZXM0IXWyue%2F%2BggsEGKitACqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhZJTkIHmMq2YLpgOKtwDMIOgFh8iyX0Qa2%2BawnDj%2BXRyILXbIDq4TqSj4yE5HU9bpHMclybwcy2x1sFQlN43DKfcjQvQXY%2BlxM%2F9FC4ryY00p2dmXA18uRez5W2PUfpN2F26zYTxnE2NxFJYuCqdf7BJ0wtyUGUGalCAGbhhKFCmxHC1GNGVdZUhg%2BQpqmZ7E6KcKpnkyY1eqJlcgq6x%2FxPjXuzE3kPmT4lHuvVURsrAB6y36uRDnZ18OhD43xjfw9BsNRwqXwarSqbih8k9zNimOv9buZVmJpIlbTZdFGLgW7ghCQWkHv0IGpvaD9cT91GvZTh2eTcJF2QTHMc%2Fwb7ScsfjeuY%2Ft0PcVgFsBdgn0ct0LS48Fj6G8dF2ceaY%2BGitjqtwFbsFJXSsdh4CXwxVBGMX5SE%2F0eu7NfUeRE1Mt%2FHlcqPCesrA03UJssqA2jAUfV%2BdJLwEhPcdtPqMQHIHn07d%2FnTNfXQw45i79OT9D4hzTTbBCwhXUYsox9TLwhRE28vXKz5a6eGM07K8B%2BR09jaGXPtfRy2bPJsOtNTyDead46lK7sl1WcCprG7Tv1Q5XZa81kdOMztq8efxP7%2Fc8fbtd%2FaNbV%2BfZY4llxagWmmqJ7kAn82p70YQ6ZkF4SV6pmVg3QXjNBEwz9DHwwY6pgHsseWZ1X%2BrYQlwECb%2BkSNlbPBnkjvB9%2BU40iOzp8pvUg4GxZjFHBhOkpT5hGQcWxM%2FX%2BZaQ56kq79cMa%2B3ayf11dKr4c5p1VzJmgljplLvzT1wNfxEXLO17DziyNaMU8Uecp3HcJiWfvx94eekd2Hd1Rb%2F411zWewNKfgBVkJiLmnTbjvDRBr32XWfJDYEfutJfhJ%2BhWR4Nm6Q31lDPXyoq4bCTak%2B&X-Amz-Signature=91fa25fb61091df19673503da1e78da4d89ec3b75be99119cdec0bba14225325&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VNV47OLQ%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T061212Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGJxLJpcRcjzajSGZDYPADi%2BTz3meuZc7PHh1eauHSTOAiB%2Bb0USgj6Z3haBsnMYPpHvZXM0IXWyue%2F%2BggsEGKitACqIBAjm%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhZJTkIHmMq2YLpgOKtwDMIOgFh8iyX0Qa2%2BawnDj%2BXRyILXbIDq4TqSj4yE5HU9bpHMclybwcy2x1sFQlN43DKfcjQvQXY%2BlxM%2F9FC4ryY00p2dmXA18uRez5W2PUfpN2F26zYTxnE2NxFJYuCqdf7BJ0wtyUGUGalCAGbhhKFCmxHC1GNGVdZUhg%2BQpqmZ7E6KcKpnkyY1eqJlcgq6x%2FxPjXuzE3kPmT4lHuvVURsrAB6y36uRDnZ18OhD43xjfw9BsNRwqXwarSqbih8k9zNimOv9buZVmJpIlbTZdFGLgW7ghCQWkHv0IGpvaD9cT91GvZTh2eTcJF2QTHMc%2Fwb7ScsfjeuY%2Ft0PcVgFsBdgn0ct0LS48Fj6G8dF2ceaY%2BGitjqtwFbsFJXSsdh4CXwxVBGMX5SE%2F0eu7NfUeRE1Mt%2FHlcqPCesrA03UJssqA2jAUfV%2BdJLwEhPcdtPqMQHIHn07d%2FnTNfXQw45i79OT9D4hzTTbBCwhXUYsox9TLwhRE28vXKz5a6eGM07K8B%2BR09jaGXPtfRy2bPJsOtNTyDead46lK7sl1WcCprG7Tv1Q5XZa81kdOMztq8efxP7%2Fc8fbtd%2FaNbV%2BfZY4llxagWmmqJ7kAn82p70YQ6ZkF4SV6pmVg3QXjNBEwz9DHwwY6pgHsseWZ1X%2BrYQlwECb%2BkSNlbPBnkjvB9%2BU40iOzp8pvUg4GxZjFHBhOkpT5hGQcWxM%2FX%2BZaQ56kq79cMa%2B3ayf11dKr4c5p1VzJmgljplLvzT1wNfxEXLO17DziyNaMU8Uecp3HcJiWfvx94eekd2Hd1Rb%2F411zWewNKfgBVkJiLmnTbjvDRBr32XWfJDYEfutJfhJ%2BhWR4Nm6Q31lDPXyoq4bCTak%2B&X-Amz-Signature=64d4e2afa02152c3dd815cc1e4217ed513962d59f805f617b795c4b6ffa6bdd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
