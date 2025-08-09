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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LIE7EB3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUrpxsEcXtG2TmF3cP9ndQSciDNNxUPYnH3Qyx%2BWHbdAiBOKof0cC2iYSV3qnpK9Xc6Ic8Oyxs8ao3Bsa75%2FEjKTyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM14jiBODddPRH3jb%2FKtwDSZD%2FJZeCpHHI2j6%2BZlXlbFlGc%2Fdotv51PF58FU3gtWHjPMyumPRSSIAl6rQN%2Fp4vo6tLdvAvJJJFSBNH8dW%2FZD5WR1Xxg2EAXNjalRcxLA342kzrG0gwYMQEs8qDRinx9%2FJwbBhiXVmzdKdLH5VmFBCsCcjnX5JhlRgPTX4k2jFtNv%2BULh4mf%2FWpdXd6mxrm7jy7XvhCJtCEz7iyavN5jukemo0YZ10zIx9XlpSI0TGagZNhJT3XTXL%2BCqXuMIEFcWpP6ZpPgqD2Tq87v%2B2VhyOO4voUKdAGUloODVfXirrN8JsfBRAo7JXKeismUMuxtC56ekH5bttSjmRxYqR8OzA9iClpC82k78TNCVEXsz05s177MnebxBa2hF8dmWbUH%2Bx%2BSTRBef7zQHEsB3lYBTAyV73rVzWPKG8i1xn3vpP7vZIp2GtVUKaS9zV3WrCVrGxisTOF7weSgsJK6yyjgOlpWRdAaV8opqDDhSeRXCWccwM1eeovQPXWC2dXUS7sQI3%2BxRtFnToM78d1EODbJrDtSlyH1%2B4isrZjua4O2l0RD1ehtJGhSaauw4%2FE4lDQZ3gPqGIPoi7ctPP61RHQ%2Fr294waJsILi503oYCOgKo5y9NcrdjPbOI6%2FX50wnuPcxAY6pgHPT8dZMqfVbRgemx1Y4cmhnY8fkQ5WJV7oWSOWBP0aT7%2BNZr7NEkBYvvx5p7QMoI7AhDXD2NPqAQGpTlLeXdWlz1s55OHXLnWluhWzDq20ZIPnfvWIBAKpwpFRYKe5WSWFQZf5tLFj1nygyQ1D8TVXooDgjmLZymOdcGwcImq%2FlcP7cJQeu8IyDCz1mawCzcsJJCt%2BHvKePa2Crs5JaxZOaCb1u2a1&X-Amz-Signature=d483d3a9dfead8cb7239447e1811c61fa32af47c4bc06db7e6b7941c5b0aafad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667LIE7EB3%2F20250809%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250809T170700Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBUrpxsEcXtG2TmF3cP9ndQSciDNNxUPYnH3Qyx%2BWHbdAiBOKof0cC2iYSV3qnpK9Xc6Ic8Oyxs8ao3Bsa75%2FEjKTyqIBAi9%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM14jiBODddPRH3jb%2FKtwDSZD%2FJZeCpHHI2j6%2BZlXlbFlGc%2Fdotv51PF58FU3gtWHjPMyumPRSSIAl6rQN%2Fp4vo6tLdvAvJJJFSBNH8dW%2FZD5WR1Xxg2EAXNjalRcxLA342kzrG0gwYMQEs8qDRinx9%2FJwbBhiXVmzdKdLH5VmFBCsCcjnX5JhlRgPTX4k2jFtNv%2BULh4mf%2FWpdXd6mxrm7jy7XvhCJtCEz7iyavN5jukemo0YZ10zIx9XlpSI0TGagZNhJT3XTXL%2BCqXuMIEFcWpP6ZpPgqD2Tq87v%2B2VhyOO4voUKdAGUloODVfXirrN8JsfBRAo7JXKeismUMuxtC56ekH5bttSjmRxYqR8OzA9iClpC82k78TNCVEXsz05s177MnebxBa2hF8dmWbUH%2Bx%2BSTRBef7zQHEsB3lYBTAyV73rVzWPKG8i1xn3vpP7vZIp2GtVUKaS9zV3WrCVrGxisTOF7weSgsJK6yyjgOlpWRdAaV8opqDDhSeRXCWccwM1eeovQPXWC2dXUS7sQI3%2BxRtFnToM78d1EODbJrDtSlyH1%2B4isrZjua4O2l0RD1ehtJGhSaauw4%2FE4lDQZ3gPqGIPoi7ctPP61RHQ%2Fr294waJsILi503oYCOgKo5y9NcrdjPbOI6%2FX50wnuPcxAY6pgHPT8dZMqfVbRgemx1Y4cmhnY8fkQ5WJV7oWSOWBP0aT7%2BNZr7NEkBYvvx5p7QMoI7AhDXD2NPqAQGpTlLeXdWlz1s55OHXLnWluhWzDq20ZIPnfvWIBAKpwpFRYKe5WSWFQZf5tLFj1nygyQ1D8TVXooDgjmLZymOdcGwcImq%2FlcP7cJQeu8IyDCz1mawCzcsJJCt%2BHvKePa2Crs5JaxZOaCb1u2a1&X-Amz-Signature=18b022bfae4ac768cbabc40dad95e933901c404ad8722085a743da4450730758&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
