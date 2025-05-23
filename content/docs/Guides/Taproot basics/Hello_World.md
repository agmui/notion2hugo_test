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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRKOIWRO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCjDMXOaPVQylG5pqRKMuOA1xgEvnMWd%2FBW%2FOoe1tXJQgIgA8g%2F3Avu3TLA1JKEBWHd2pK3AzkEd1eMp1YxtO1ffkwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvITqjFpQXSOTsXUCrcA%2BTC2Hi0sAzNY9%2B0%2BGT2uR9DigfBtBAT0BTsHUhnCGOa%2B8CjjLNFqr9EbdVd0iD0W%2F3LyJ7hsSU5ZoHZSjt4%2FbUN3O7qKY1krFw%2FrEby2neK2fBkkMMgGLOp6n2VNXQTxOqz0N4Q%2BY2ru6qzXYq1ZBf8lAT8q23UicnreM2dzw52IlXn3fGFwX4ttczh0mK1izkz3kbD4gqB48AN8%2FXzY7iEilYUip9wh7yO82bjEM4JxmS9anc4cXB25XzC2Mhn65iiHyIyaC%2FpCImo9MaYXCF6R8GwbM%2BNZf%2BJITQeAJXA9oDZIEGWJ61a78EB9U4YylHZcVIYnycc6sBbqz%2Fhd3ttvSMppPQ8VlCCt3ClNl%2FHoVKIFdp7F8YJNERhp1cPRrjUeRE%2F4fJWchCG%2Bab5pZWR1mBjw%2BQs%2FFieQIwx8iy%2FwODr4Zk1bbk7NGJWTXPsampId9rscDSWD7POUZZL1h%2B8u3dV22KPkRA2az%2FFz1FIhohlYPs7CUUD%2FluN8GGs%2BBOBEBOi41c1HHgTYYK1Mf6ap9YaN3goX0FiukNhCS68njh9fhG0aaQyupRfHutePqghOnirtrWHd3W91LMdcnoZ6V5eroU%2BfwJ7kD1IdQXt0V7vKYPFmd85YIRoMLzxwcEGOqUB4ZyTtZnBlNomn%2FbYB%2BkqkwRP0VV%2Fp7H1YjkABuWxXsZpQ15AHs7Gxb4OnfXw51j%2B2ihr49x7DWzN2r8PFIVWn0e8NkXtiuwpD5BEICctO0%2FQUw9J4Z%2BPChJdGdhOuxfukLcTJMQeV2XkRYGSmMypkFVa18PbQZcvZFbpZh9d%2BIweJYI01ABjsNa1MV0848DFJMJ39QrcPYpexPaU2nyG7QvfRVh0&X-Amz-Signature=1daf59a2ae7b56e60c06f4a3e4a303a04d4e012519e6094bd376a3554aed7a0c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YRKOIWRO%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T140831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDYaCXVzLXdlc3QtMiJHMEUCIQCjDMXOaPVQylG5pqRKMuOA1xgEvnMWd%2FBW%2FOoe1tXJQgIgA8g%2F3Avu3TLA1JKEBWHd2pK3AzkEd1eMp1YxtO1ffkwqiAQI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJvITqjFpQXSOTsXUCrcA%2BTC2Hi0sAzNY9%2B0%2BGT2uR9DigfBtBAT0BTsHUhnCGOa%2B8CjjLNFqr9EbdVd0iD0W%2F3LyJ7hsSU5ZoHZSjt4%2FbUN3O7qKY1krFw%2FrEby2neK2fBkkMMgGLOp6n2VNXQTxOqz0N4Q%2BY2ru6qzXYq1ZBf8lAT8q23UicnreM2dzw52IlXn3fGFwX4ttczh0mK1izkz3kbD4gqB48AN8%2FXzY7iEilYUip9wh7yO82bjEM4JxmS9anc4cXB25XzC2Mhn65iiHyIyaC%2FpCImo9MaYXCF6R8GwbM%2BNZf%2BJITQeAJXA9oDZIEGWJ61a78EB9U4YylHZcVIYnycc6sBbqz%2Fhd3ttvSMppPQ8VlCCt3ClNl%2FHoVKIFdp7F8YJNERhp1cPRrjUeRE%2F4fJWchCG%2Bab5pZWR1mBjw%2BQs%2FFieQIwx8iy%2FwODr4Zk1bbk7NGJWTXPsampId9rscDSWD7POUZZL1h%2B8u3dV22KPkRA2az%2FFz1FIhohlYPs7CUUD%2FluN8GGs%2BBOBEBOi41c1HHgTYYK1Mf6ap9YaN3goX0FiukNhCS68njh9fhG0aaQyupRfHutePqghOnirtrWHd3W91LMdcnoZ6V5eroU%2BfwJ7kD1IdQXt0V7vKYPFmd85YIRoMLzxwcEGOqUB4ZyTtZnBlNomn%2FbYB%2BkqkwRP0VV%2Fp7H1YjkABuWxXsZpQ15AHs7Gxb4OnfXw51j%2B2ihr49x7DWzN2r8PFIVWn0e8NkXtiuwpD5BEICctO0%2FQUw9J4Z%2BPChJdGdhOuxfukLcTJMQeV2XkRYGSmMypkFVa18PbQZcvZFbpZh9d%2BIweJYI01ABjsNa1MV0848DFJMJ39QrcPYpexPaU2nyG7QvfRVh0&X-Amz-Signature=0e7db08852576998f86b5926f9a9a82e3a42253a172679156aadcf4d1634ad9c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
