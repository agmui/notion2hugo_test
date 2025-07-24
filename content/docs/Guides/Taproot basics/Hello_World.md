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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTNEBJOR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIEILghlaq%2BPJd4MuwEpsAY1B%2FxWerBVNZZ%2F39siTVrfLAiEAkEO92X%2BEGJ8r3aaVvgossJY39pG5GE9odWHmor8p%2BGMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKTsfARvnN0FtagjQyrcA3Wotuw%2BTIUmYNdL16Ta3SDOy7%2FPzTAKKvu%2BBt3hb7X3%2Br5dLtmmo9l07uV61STkr7s%2FhUXWyOeDZzB5htds4yHNnBTktr27TfGNxoPa%2B%2B0uqGrN%2BCbzFDFAVP2EIdysd%2FfvxtWUZ5pP9nGkRFdZtv%2Bz0PBK6%2BdAGe%2BN7TV2R%2FfbRG8Pg4l58uRlqGSA4OGhlgHxU7kN0MAfajdQW67YkCp1trtkgqwv%2F7uIBV%2B8X0iMAsP4AmF5QsJs6EciHSeXcCeFS8%2BDg9YvV%2F%2F65XC%2FTi5f2rKkeWpl74gJjjyi4cf%2B6AizZeP9X5SWPB2IrSxiroDxxgy9YVaCmkkU4btP7fXv4MSZmp8H%2Fpq3fLtBzzuJt5qQxCbS1E2nZQIAuXAdFLAKiQVn%2Bc%2FR4%2FhOIdlhiMqVm9xOLLx6kQgDPeUCz4988yEmHbCi8Nk08pS%2FCyXFmXc7ToanzEE9GLUixDdnPPy3skSq5QVIxc76TPthg%2FTH4y3dBE3jGE%2BMrG1mX5JlyCn5x3Y3Mp30nV5nlfwhVAsQAXAQdrvc34XUWcITzdjtPqfjsFEEmmGvQ6CeTH%2BOwriFDQ5%2FCaDEb7j7BpvP6Z8qd94Dg4bt789%2FObKFokh8dIz4lHVjDHurymBuML%2B2iMQGOqUBDcPpObsPj8Q5JOu5D8wn%2FIvL29t9xbD0xkQugqMe%2FRyy7DcArtIbZuU4rO188Rb74rRP%2FysZHHCmzcA9iogJisS4Cj2yNCPjbPJzIf5ByN8RCvFLTNpjI5esxLKFKZXeNiCFrGhI93VtOtvy20yuGFjOQx27a0ZLKQt0ZhLz0ywmbDJkZwUtUXd9sXO11erAxokA6dXtyHF1zMMa9BFNJ%2FCTrTGE&X-Amz-Signature=5820cab10e04303cc7dce82c0ba43d0fb1b4824796617e4d19156fd4491ae476&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WTNEBJOR%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T121724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJHMEUCIEILghlaq%2BPJd4MuwEpsAY1B%2FxWerBVNZZ%2F39siTVrfLAiEAkEO92X%2BEGJ8r3aaVvgossJY39pG5GE9odWHmor8p%2BGMq%2FwMILRAAGgw2Mzc0MjMxODM4MDUiDKTsfARvnN0FtagjQyrcA3Wotuw%2BTIUmYNdL16Ta3SDOy7%2FPzTAKKvu%2BBt3hb7X3%2Br5dLtmmo9l07uV61STkr7s%2FhUXWyOeDZzB5htds4yHNnBTktr27TfGNxoPa%2B%2B0uqGrN%2BCbzFDFAVP2EIdysd%2FfvxtWUZ5pP9nGkRFdZtv%2Bz0PBK6%2BdAGe%2BN7TV2R%2FfbRG8Pg4l58uRlqGSA4OGhlgHxU7kN0MAfajdQW67YkCp1trtkgqwv%2F7uIBV%2B8X0iMAsP4AmF5QsJs6EciHSeXcCeFS8%2BDg9YvV%2F%2F65XC%2FTi5f2rKkeWpl74gJjjyi4cf%2B6AizZeP9X5SWPB2IrSxiroDxxgy9YVaCmkkU4btP7fXv4MSZmp8H%2Fpq3fLtBzzuJt5qQxCbS1E2nZQIAuXAdFLAKiQVn%2Bc%2FR4%2FhOIdlhiMqVm9xOLLx6kQgDPeUCz4988yEmHbCi8Nk08pS%2FCyXFmXc7ToanzEE9GLUixDdnPPy3skSq5QVIxc76TPthg%2FTH4y3dBE3jGE%2BMrG1mX5JlyCn5x3Y3Mp30nV5nlfwhVAsQAXAQdrvc34XUWcITzdjtPqfjsFEEmmGvQ6CeTH%2BOwriFDQ5%2FCaDEb7j7BpvP6Z8qd94Dg4bt789%2FObKFokh8dIz4lHVjDHurymBuML%2B2iMQGOqUBDcPpObsPj8Q5JOu5D8wn%2FIvL29t9xbD0xkQugqMe%2FRyy7DcArtIbZuU4rO188Rb74rRP%2FysZHHCmzcA9iogJisS4Cj2yNCPjbPJzIf5ByN8RCvFLTNpjI5esxLKFKZXeNiCFrGhI93VtOtvy20yuGFjOQx27a0ZLKQt0ZhLz0ywmbDJkZwUtUXd9sXO11erAxokA6dXtyHF1zMMa9BFNJ%2FCTrTGE&X-Amz-Signature=abd93027f2ec1329379be5b8884e1afe617d4f7f5e9ef9c8550be5932fce702b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
