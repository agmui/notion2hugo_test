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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6SDLC4B%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpScPKeQ7t%2BxPWhXw%2BVEy52h1DcChyuXGni1N1wFFZNAiEAgNEkeEf3THzlj0ZWR3MfAJnEbMxEaCfeTg8l0%2BBhx20qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Blv6rhlbdmQd22NSrcA3Mtef0cO1murhEoBejcvXXtO%2BeovE0EmhU9JVRIABX4J3j2W1aP7LKTqG3grV1Hjs6bYks4Yjr7Koy8GSZjtbA1YzVk7bNuHsZDZBmYMAyS0U5R8SrFhlRm588qY4C0L2FriICuIl1z4tXkyW2K9MQhFakM2Z19HHQXDN752SXnf1fsSGifKiXFkL%2BUGCV4c9aoBUQ4fc%2BL8ohZRkE1rz8a215hkEreTMHIu2qoBx%2Bj2ktyiNrA21ulJTgVMZjKcN%2BlT9KjBW%2F2Y1a6X8njmauwqSCFCUpGsuvU3R%2B1SvgKG0TXaPaSePq1fyzLJyeZuyQd%2FPvxdhq3VLKNn2E7A8drkvwtpQSMYNu9DfJl2kb7apKAA96YBedv4h6inlhiuVcuxjlzeUgHNJhMIYkD%2FzGA0E0I3vNJWiIEY0zuV4uxmEjOO8i82s28i4a%2BwoX8YEPxfJWb2Up8c%2FiofSaQSaFFOIWQgHQbcEd7bqOgfNZ2AtDAS4LozC%2B2xByj7rfLVlRoSXuGqweyzp5cX%2F2WQdt1W8%2BWgy5trRvzzq1QxV%2F%2F4cjDQ0VMcRcAdnvmXLZC9xeZ%2FJ6lgyzTm7vyqvq1HVRImC4q9WPNsMPAJxk2n%2BMisqr%2FtydHiem1gzVzMM3H5b0GOqUBeYmZyVANXR8HvX4ccqIr3V4vml9txEFWeKN4GxImAkKJTNV%2BFktrNaszrUv%2F0wOaUfptmZGJSC%2B1BZ%2BPu%2B%2BoDwn0mYchF%2B2cgXN3Br6yTzWk304NEd2qQXW6rz18cR3acT22Wfm7cM1HeziAKkVonh%2FjlpdLTZB0BL1prv1PHFoxv%2BSMywXACzE7lRlcU9DWWU0gMw4lUJLFoXBc%2BtqQfq7ygED4&X-Amz-Signature=59d2c6e6c8f9b3bcb7015852972b1cde0d9fbffb68fbf2b21b9b72fa99be5b5a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6SDLC4B%2F20250222%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250222T080855Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDpScPKeQ7t%2BxPWhXw%2BVEy52h1DcChyuXGni1N1wFFZNAiEAgNEkeEf3THzlj0ZWR3MfAJnEbMxEaCfeTg8l0%2BBhx20qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2Blv6rhlbdmQd22NSrcA3Mtef0cO1murhEoBejcvXXtO%2BeovE0EmhU9JVRIABX4J3j2W1aP7LKTqG3grV1Hjs6bYks4Yjr7Koy8GSZjtbA1YzVk7bNuHsZDZBmYMAyS0U5R8SrFhlRm588qY4C0L2FriICuIl1z4tXkyW2K9MQhFakM2Z19HHQXDN752SXnf1fsSGifKiXFkL%2BUGCV4c9aoBUQ4fc%2BL8ohZRkE1rz8a215hkEreTMHIu2qoBx%2Bj2ktyiNrA21ulJTgVMZjKcN%2BlT9KjBW%2F2Y1a6X8njmauwqSCFCUpGsuvU3R%2B1SvgKG0TXaPaSePq1fyzLJyeZuyQd%2FPvxdhq3VLKNn2E7A8drkvwtpQSMYNu9DfJl2kb7apKAA96YBedv4h6inlhiuVcuxjlzeUgHNJhMIYkD%2FzGA0E0I3vNJWiIEY0zuV4uxmEjOO8i82s28i4a%2BwoX8YEPxfJWb2Up8c%2FiofSaQSaFFOIWQgHQbcEd7bqOgfNZ2AtDAS4LozC%2B2xByj7rfLVlRoSXuGqweyzp5cX%2F2WQdt1W8%2BWgy5trRvzzq1QxV%2F%2F4cjDQ0VMcRcAdnvmXLZC9xeZ%2FJ6lgyzTm7vyqvq1HVRImC4q9WPNsMPAJxk2n%2BMisqr%2FtydHiem1gzVzMM3H5b0GOqUBeYmZyVANXR8HvX4ccqIr3V4vml9txEFWeKN4GxImAkKJTNV%2BFktrNaszrUv%2F0wOaUfptmZGJSC%2B1BZ%2BPu%2B%2BoDwn0mYchF%2B2cgXN3Br6yTzWk304NEd2qQXW6rz18cR3acT22Wfm7cM1HeziAKkVonh%2FjlpdLTZB0BL1prv1PHFoxv%2BSMywXACzE7lRlcU9DWWU0gMw4lUJLFoXBc%2BtqQfq7ygED4&X-Amz-Signature=9504a07fbad81d435f83e2c8dfcaab475df9fd6912bd8be8d898667f94f1681e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
