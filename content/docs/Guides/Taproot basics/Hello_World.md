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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XASW4UBJ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDp2OPyt%2FSF2UT%2FV1N3vF%2FoN%2F24QRsf6QKv6iDg49AQyAiEAi6J50%2BA8vrzWuPiInseo0BO8xmhna4rD5Bhxum7aVMwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNK3hNl8vFUvpZStRyrcAzQ29UQlU4%2BV5AbuCRyLfSigkhRegn2Qan7M48ekj7oHWsF%2BuHngJO8SxH4IFLcv85AeEYyOVLRTRWtcI7tETwmHf9%2BurX%2BTtImtdeaCm5SieUfCNY7e5Q3favHSODG3eU9cAkbYH87N5RZ0GSQLmxdvkh6%2BIu14GZwteXJBqFFOOCWk6P2AvESyRmtZa7iRhZhv7UldHm6EfPfJmhTKne%2BvZrTlIjbPxcwhCZfKNoauTcto3JDK5EnAqIaE1Ih1CSEABXKoXTZkdOoPhmtPa0AP%2B9peFnX5U%2FU25WFYUgizSlTLyC60PgwcNq%2BvJB%2F6yDsuiZ4X3RIj5L4Hj5cNKT%2FIBwSV2gzfp7n19q2kVtcNNotxbZP3LdQ2IbgjXeyPteo4eLsIpzNwRkenseLeYqkXBt%2BcWGw8N9GIICWwCixfCoyOErN3u1VSiE1q%2FNqvoG3e3HBe%2BSdcRJqvnsaA0m0gw%2BYKpILOXdgiC%2FiVTsozhduodqCw5OCNN4YxPkqWwFtk5rotdjje4CS90HZPP%2BWHYGhN%2Bs0yRBPciLBHzyXiB1iEgSb3c55G3fzxSO9e3C35rIMOCCnX3hEdozDEhs6j9Z2b9Kx6m0ragb9LBlT1gUplE%2F5dBMVBejLnMOmEisMGOqUBXetENNWLYQqca7zcnHgAB%2FtFAQbVrz0Z0hAuw%2FJrl73d9LwYw3sydVBRthvZ3H3ExAjIrWwmnV6BeuY3nV6mYIISlf8sNLbEnGyZwqlyTj5rvOKnS66g%2Fq5UIGnU0S7VE25hgv5UDNOy7yqfQKQ2RGbMImfyDaz6vpiWBg4BIUqjljI3JK1drW6lDh06g9bNHwpC1FlNoe%2Fz9KMNWTMeLXWO48UY&X-Amz-Signature=0f1fa1fd1106ad40eb87e31404b0e4a5c35e6c4055e0980212c215828134a19b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XASW4UBJ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T132546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDp2OPyt%2FSF2UT%2FV1N3vF%2FoN%2F24QRsf6QKv6iDg49AQyAiEAi6J50%2BA8vrzWuPiInseo0BO8xmhna4rD5Bhxum7aVMwqiAQIvv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNK3hNl8vFUvpZStRyrcAzQ29UQlU4%2BV5AbuCRyLfSigkhRegn2Qan7M48ekj7oHWsF%2BuHngJO8SxH4IFLcv85AeEYyOVLRTRWtcI7tETwmHf9%2BurX%2BTtImtdeaCm5SieUfCNY7e5Q3favHSODG3eU9cAkbYH87N5RZ0GSQLmxdvkh6%2BIu14GZwteXJBqFFOOCWk6P2AvESyRmtZa7iRhZhv7UldHm6EfPfJmhTKne%2BvZrTlIjbPxcwhCZfKNoauTcto3JDK5EnAqIaE1Ih1CSEABXKoXTZkdOoPhmtPa0AP%2B9peFnX5U%2FU25WFYUgizSlTLyC60PgwcNq%2BvJB%2F6yDsuiZ4X3RIj5L4Hj5cNKT%2FIBwSV2gzfp7n19q2kVtcNNotxbZP3LdQ2IbgjXeyPteo4eLsIpzNwRkenseLeYqkXBt%2BcWGw8N9GIICWwCixfCoyOErN3u1VSiE1q%2FNqvoG3e3HBe%2BSdcRJqvnsaA0m0gw%2BYKpILOXdgiC%2FiVTsozhduodqCw5OCNN4YxPkqWwFtk5rotdjje4CS90HZPP%2BWHYGhN%2Bs0yRBPciLBHzyXiB1iEgSb3c55G3fzxSO9e3C35rIMOCCnX3hEdozDEhs6j9Z2b9Kx6m0ragb9LBlT1gUplE%2F5dBMVBejLnMOmEisMGOqUBXetENNWLYQqca7zcnHgAB%2FtFAQbVrz0Z0hAuw%2FJrl73d9LwYw3sydVBRthvZ3H3ExAjIrWwmnV6BeuY3nV6mYIISlf8sNLbEnGyZwqlyTj5rvOKnS66g%2Fq5UIGnU0S7VE25hgv5UDNOy7yqfQKQ2RGbMImfyDaz6vpiWBg4BIUqjljI3JK1drW6lDh06g9bNHwpC1FlNoe%2Fz9KMNWTMeLXWO48UY&X-Amz-Signature=3c1d65aec71207c6b63a767ba86dc0a6a2a472f3398ce3d7b27593341b5c8990&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
