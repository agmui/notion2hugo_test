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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYWZQCLU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjMbu0WJRCC7B3qoEqkP2YbbbyBT%2BEjPulgbaGUjppMAIhALRDE2Zsn%2BCxEHc7ZLgXrILuj1oXJ5RPHUE2MU1VTjwDKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBxmDpUwNnue%2F0xk8q3AODbj6CbYU9l3VZbxJqJwrxlDyAcBkCGlaJym%2F4LzSMLlfirukPPcGLgGa6Pnw%2BDFloKYYg1eLjw3hYhPX1pj%2Fby%2FmjL2C5XcDIRXo9%2FXHlBWOA47dMSW58l2mm2NPsqe20dlVjlhyJj38EuXWDnPhQ3U1RpmJOf1AIKoB%2FiXA8jEBN61ib6nXpdI9MEQNHuSxadsT%2FsuVrXkO8A8mpgLvzk58g8jusLexCdBsPotbtvpAzR8bJ78628%2FPQJq4FpQRhm61xRaK9Xox6MkEAziUGwDia10TOMET0RhhOxfzlHHalaiXXdi%2FlRHWxlMCduQChoPFOBJ9mLYuQ0bGRjqZHfX45A6gq1SiBaM1maepYVrtiMPWcrDP0VM9823Qk0LvThhbza%2FquZbySyxLVHJpb8ftwNAiEv3mg5llCuLZDNq3ZqF984DBw8Hppln7wdZJqCcc8c%2BaKwJnijIeoAyemTEg2yaQ25iqHkgnwfH%2B78GLmbgdOV8gWAP2phfPjbfcT6Q1AJzaK%2BFsNYdw0upyT3c4uxLCSs%2FuNm0CXZ%2FQDlnIijPS83Sa14gkoOV%2BDvEhsuL%2B%2FfnGlSh5FxUcoG1A7qqG4z5tz%2FXUmcLWAQR3JJCUICLFY4HGJ%2Bik4GzCi%2FafJBjqkATG32m6AbzSzMsudTKJ3CyVtNxs8IST5JP0ILupDnsSOb111esn2%2BFyqh7Qj74Zt%2BhywL2f8V6ghyK%2FO0FtryKZCu4%2FASVv63har058xIhxGojCMYnVqw6GMVZi%2FBlB1lPXF98yz1ZRrh4SzJ8Ye0Qr7cMhV97gqJY%2FvsBtIc%2BhgWAu4ZkODEBYeYQwqD66uKCVjvAHyUWJqnbnM9U9IAZVvGERm&X-Amz-Signature=8b9f2c4062399c1d64e1482dedc9473ea065051d7960d22189a8afa32a3095d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYWZQCLU%2F20251129%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251129T012848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDjMbu0WJRCC7B3qoEqkP2YbbbyBT%2BEjPulgbaGUjppMAIhALRDE2Zsn%2BCxEHc7ZLgXrILuj1oXJ5RPHUE2MU1VTjwDKogECL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyBxmDpUwNnue%2F0xk8q3AODbj6CbYU9l3VZbxJqJwrxlDyAcBkCGlaJym%2F4LzSMLlfirukPPcGLgGa6Pnw%2BDFloKYYg1eLjw3hYhPX1pj%2Fby%2FmjL2C5XcDIRXo9%2FXHlBWOA47dMSW58l2mm2NPsqe20dlVjlhyJj38EuXWDnPhQ3U1RpmJOf1AIKoB%2FiXA8jEBN61ib6nXpdI9MEQNHuSxadsT%2FsuVrXkO8A8mpgLvzk58g8jusLexCdBsPotbtvpAzR8bJ78628%2FPQJq4FpQRhm61xRaK9Xox6MkEAziUGwDia10TOMET0RhhOxfzlHHalaiXXdi%2FlRHWxlMCduQChoPFOBJ9mLYuQ0bGRjqZHfX45A6gq1SiBaM1maepYVrtiMPWcrDP0VM9823Qk0LvThhbza%2FquZbySyxLVHJpb8ftwNAiEv3mg5llCuLZDNq3ZqF984DBw8Hppln7wdZJqCcc8c%2BaKwJnijIeoAyemTEg2yaQ25iqHkgnwfH%2B78GLmbgdOV8gWAP2phfPjbfcT6Q1AJzaK%2BFsNYdw0upyT3c4uxLCSs%2FuNm0CXZ%2FQDlnIijPS83Sa14gkoOV%2BDvEhsuL%2B%2FfnGlSh5FxUcoG1A7qqG4z5tz%2FXUmcLWAQR3JJCUICLFY4HGJ%2Bik4GzCi%2FafJBjqkATG32m6AbzSzMsudTKJ3CyVtNxs8IST5JP0ILupDnsSOb111esn2%2BFyqh7Qj74Zt%2BhywL2f8V6ghyK%2FO0FtryKZCu4%2FASVv63har058xIhxGojCMYnVqw6GMVZi%2FBlB1lPXF98yz1ZRrh4SzJ8Ye0Qr7cMhV97gqJY%2FvsBtIc%2BhgWAu4ZkODEBYeYQwqD66uKCVjvAHyUWJqnbnM9U9IAZVvGERm&X-Amz-Signature=d9826e6a0e170f18695481d84809764fd14b3e3b97550dd6eb84b4172b2e1644&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
