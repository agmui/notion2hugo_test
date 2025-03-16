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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6BTPFET%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4WKwyJcAMSPAZ6QZW6uKRyumgMuvxV3El3cQ8nDHsXQIhANHXnJdvTiCS7j2SWEaUUh0MpMczZHPvaJtn77DfQKJKKv8DCCwQABoMNjM3NDIzMTgzODA1IgwHIv3eGHhkGCT%2BDFEq3AMuJrVtcbKtVZYauylAzq%2BnjlEWmFEwjX%2FrBXkzcvGRHT2UZh0Ayy9%2FSbmMHG8zUdU%2BZvUOWZXJRs54MLfcGvQUtymQsE5XwUmrlT3DaEg%2FfIPDDsb%2FiXeiu%2BB3jaXn43JmN1%2BsuVobgRsoKLdvPSY9zR7Bso8O0o7%2BehVdJJsHjsuCIYZTBUvhQxuDmRXMum2k333M7Yfl3rt4h3TJpI4vZT2YWkTw%2FIVVg1po0m3AVPRGm%2B8%2Fmvw1sbNBlAwaYKn4F3%2FqUuOI1W97IPCH1oclUIx9sTComrgKLVMPMoJcj5lK24h9L8bX29Jx6QFQtF2ntEnKv81N6NKZpCNxpa%2B4yXZkb2AqtWJDpbn0cFpFG3NDHCllZehW8IMBEjfrVAcU%2BWwPbgD80fqSoFK1YWgqtNHaMFDv6%2BHxygxe0tpAMtbl6J4GhKboJzRIDrSlpm5cFqNbA4RkphmpQZW0RZrwQ2Kg%2FVESjSPV7byPpsuGavrjBk%2BWbHu%2B7k3%2B0Jr0u2vgv7eTiDjzCtnAR6mickk0b%2BUY%2FlUg1I%2FEaEe9sVcVjiy2BCqzxDYBedNi3w5U4xYP5tsMksfZ%2BGo0LQg2LT6Qteih2LqCrk43hrmYxWzyb73xmtNFEIu1IPDz4TDT2Nq%2BBjqkAYmTkijAwHl33iKy36jUtERloBvCUGWyzwIEiOza7iMiFUxjrRV2TZiHHBQLwO0Z5gRZKpgkvhJzGCAg3HgeO29OlnuH%2B0ExuNIBNVQcth3UFN3Nob4gXUyfepb55LhwrARQgzNm%2FgvNSKWJg%2Fq1WNisMPbj4P1M64X3LZpzLDU8OnG8Q57eW6Msk%2FCs5SpDRaC5G%2BE3dyNzNvIpEz%2BJcGBnY48S&X-Amz-Signature=ad2db5ac07539707d810e8b8772748d2ab25d09cd370faa8348a5b7a94cbf22b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6BTPFET%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121225Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD4WKwyJcAMSPAZ6QZW6uKRyumgMuvxV3El3cQ8nDHsXQIhANHXnJdvTiCS7j2SWEaUUh0MpMczZHPvaJtn77DfQKJKKv8DCCwQABoMNjM3NDIzMTgzODA1IgwHIv3eGHhkGCT%2BDFEq3AMuJrVtcbKtVZYauylAzq%2BnjlEWmFEwjX%2FrBXkzcvGRHT2UZh0Ayy9%2FSbmMHG8zUdU%2BZvUOWZXJRs54MLfcGvQUtymQsE5XwUmrlT3DaEg%2FfIPDDsb%2FiXeiu%2BB3jaXn43JmN1%2BsuVobgRsoKLdvPSY9zR7Bso8O0o7%2BehVdJJsHjsuCIYZTBUvhQxuDmRXMum2k333M7Yfl3rt4h3TJpI4vZT2YWkTw%2FIVVg1po0m3AVPRGm%2B8%2Fmvw1sbNBlAwaYKn4F3%2FqUuOI1W97IPCH1oclUIx9sTComrgKLVMPMoJcj5lK24h9L8bX29Jx6QFQtF2ntEnKv81N6NKZpCNxpa%2B4yXZkb2AqtWJDpbn0cFpFG3NDHCllZehW8IMBEjfrVAcU%2BWwPbgD80fqSoFK1YWgqtNHaMFDv6%2BHxygxe0tpAMtbl6J4GhKboJzRIDrSlpm5cFqNbA4RkphmpQZW0RZrwQ2Kg%2FVESjSPV7byPpsuGavrjBk%2BWbHu%2B7k3%2B0Jr0u2vgv7eTiDjzCtnAR6mickk0b%2BUY%2FlUg1I%2FEaEe9sVcVjiy2BCqzxDYBedNi3w5U4xYP5tsMksfZ%2BGo0LQg2LT6Qteih2LqCrk43hrmYxWzyb73xmtNFEIu1IPDz4TDT2Nq%2BBjqkAYmTkijAwHl33iKy36jUtERloBvCUGWyzwIEiOza7iMiFUxjrRV2TZiHHBQLwO0Z5gRZKpgkvhJzGCAg3HgeO29OlnuH%2B0ExuNIBNVQcth3UFN3Nob4gXUyfepb55LhwrARQgzNm%2FgvNSKWJg%2Fq1WNisMPbj4P1M64X3LZpzLDU8OnG8Q57eW6Msk%2FCs5SpDRaC5G%2BE3dyNzNvIpEz%2BJcGBnY48S&X-Amz-Signature=d7478e476d62545db287fec0dd58c9aacd8d61173a3d638842a810c1a1b05d7a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
