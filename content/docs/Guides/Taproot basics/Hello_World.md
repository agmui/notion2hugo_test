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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JU7QFLI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCID8uCfRU%2BvN06OTm25NtVrHSlgij5Ad5GAy7G8YFAI0LAiEAkffGjbm6SWl5vDditVFMlDyYLx%2FQOL5L%2Bqud8P8wRdcq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBzBEW2USI9ky4JHbSrcA3P8m0vfLM%2B1UFt6aDxcFgdDR4vwfPXgHagPCAhO%2Bkf6GKX97MdsPL0BdOba0OZt5yjBc0f%2BN8VEnZL%2FaJViABidH5bfrS%2FgbGGa659Jsfg%2BJ2vEP20C8%2F2kM5StFEOVHDcbfXNuNpmt6NG62Hd1Bhn5G%2BvqoJUqMfH2ZjVAIhKSYtloj2QRcHoJn5tAEW56Gup7NqqJctitpNNDQN1OLkrFpJcO9vPg7f2DTpr8RCnyEa1KdV%2FIxdtkThicgOiwJJL7%2BHmlvtQj17Qug8tbdXF6h5FF6qdz7NzRhxnurwgtH%2FKrdpcUNQZxyqcjo7Mz4J62UHvYM7njrWhyXO%2F0Uk5qPVkXx83VJwt8jsIJ9TEH%2FKVTp6ySIRRXtiMAj4j8IGvToYJpC6NUgibNMAglNCJSl5qZ7klgLVGs8LQZKMVR6uuSOqgJ2xRQtbNX12KbaI93hWLGrEbNiYE5hPE%2FoTNN3R3eld6ez5BcEauQ%2FfDXE2eBOUiTeaSVdfuLr5z2Adc4NAyOnQ0FopmY6XbAas26Yug8LRCCZRbFxZhB4%2B7e5s9BZKu7RrGmAFkgS2NqlmJTuiXTps1QoMx%2BDTMIcspYR7wSWu0y2Ck%2FGZ5tRPDrZYIAM66Uxglf4W4cMKvk%2Fb0GOqUBnBTMQ4pnIj58I1EwY8YAwyj7TBBJGg%2F3ARkJy4gdTiROrROQPSSJuNkHWJBCK9h%2B%2FueCaU6N3isIaum64tuQiymcj8wnl1sa9M6YsRLkRdobtC%2BIj4tTjgQV9PhblNhz75zIjyKwQrjdc81r0leAvxbrFU9HfrnPdI3CsTLJZ%2B8H0mSrEDRB4knvG16y8R%2BTPwp3Dq7ahciyRVLuibvPV%2FuV6%2F60&X-Amz-Signature=0e70fbaa266e479a6c37c437a1f205bd9af77cdc4bbf22985da9510fc5ff0a51&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663JU7QFLI%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T200841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECwaCXVzLXdlc3QtMiJHMEUCID8uCfRU%2BvN06OTm25NtVrHSlgij5Ad5GAy7G8YFAI0LAiEAkffGjbm6SWl5vDditVFMlDyYLx%2FQOL5L%2Bqud8P8wRdcq%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBzBEW2USI9ky4JHbSrcA3P8m0vfLM%2B1UFt6aDxcFgdDR4vwfPXgHagPCAhO%2Bkf6GKX97MdsPL0BdOba0OZt5yjBc0f%2BN8VEnZL%2FaJViABidH5bfrS%2FgbGGa659Jsfg%2BJ2vEP20C8%2F2kM5StFEOVHDcbfXNuNpmt6NG62Hd1Bhn5G%2BvqoJUqMfH2ZjVAIhKSYtloj2QRcHoJn5tAEW56Gup7NqqJctitpNNDQN1OLkrFpJcO9vPg7f2DTpr8RCnyEa1KdV%2FIxdtkThicgOiwJJL7%2BHmlvtQj17Qug8tbdXF6h5FF6qdz7NzRhxnurwgtH%2FKrdpcUNQZxyqcjo7Mz4J62UHvYM7njrWhyXO%2F0Uk5qPVkXx83VJwt8jsIJ9TEH%2FKVTp6ySIRRXtiMAj4j8IGvToYJpC6NUgibNMAglNCJSl5qZ7klgLVGs8LQZKMVR6uuSOqgJ2xRQtbNX12KbaI93hWLGrEbNiYE5hPE%2FoTNN3R3eld6ez5BcEauQ%2FfDXE2eBOUiTeaSVdfuLr5z2Adc4NAyOnQ0FopmY6XbAas26Yug8LRCCZRbFxZhB4%2B7e5s9BZKu7RrGmAFkgS2NqlmJTuiXTps1QoMx%2BDTMIcspYR7wSWu0y2Ck%2FGZ5tRPDrZYIAM66Uxglf4W4cMKvk%2Fb0GOqUBnBTMQ4pnIj58I1EwY8YAwyj7TBBJGg%2F3ARkJy4gdTiROrROQPSSJuNkHWJBCK9h%2B%2FueCaU6N3isIaum64tuQiymcj8wnl1sa9M6YsRLkRdobtC%2BIj4tTjgQV9PhblNhz75zIjyKwQrjdc81r0leAvxbrFU9HfrnPdI3CsTLJZ%2B8H0mSrEDRB4knvG16y8R%2BTPwp3Dq7ahciyRVLuibvPV%2FuV6%2F60&X-Amz-Signature=0cca74452f8c455d75978718014b2b36bb1755285326093a125f9a8b3ea10169&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
