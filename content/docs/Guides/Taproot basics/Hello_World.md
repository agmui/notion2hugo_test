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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYGUYK35%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIFaw%2BQnQTAfGM%2BAEcCu8PfSvZZ4IVCPdAMCNaANky5SNAiEAx55nVcJYxHhZBceCS2V0JT9ibtYRugWv%2FTjb%2BjtI%2FdEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPt11eJkmwx4qt9u1CrcAwAm%2BkIuDug%2B7y3t8TWW048xwGmaer%2F3yc2E5mq6%2FoNFxmE%2B7vP8Vw8dre5PjP1s2qykt7kTioyUbruumBME5o985dAlztwaWwICVk%2BCm8bGeQ6zrfiuE84ysw28dwNif4y%2BfNaNfbsXrNcRPkdsM0294cumgsjNcTdQ3PmeAcZXv1%2BGV%2B660Jubps1ltXHZ2esxEwNfpx6IlOQubb%2BkOXGM5LzAjySC%2BcEMfVawgzWcu%2FwMHP5gqbGnXY8DGQu3pCoU%2BjoFf3IAy2z4roz9%2FvmhcUO5jfRvMSRmro2GfgqN0hxX6ftPxjSP%2BNJfM67OZmKDplU7daBF9dix98tLe9l57gl1%2F7Czot06sAst4iMDzrlVRjoK%2FpA6dnVh9Ab3z3x270ZVgx1baZfBUkt00kzdP16VxJ%2BnhcWVBVHFEb9tKCISVTy0pLVnLnTYaz1CK9rIcO%2FD9n%2F%2ByxtqgrUGoTwbi5rr1A8Br1RMTJTN3ynQRa8E69QVgnGLc2ush8t1rgBlm6md2W2TY25yiS%2FhrdaKFPI7uL1fR7KNI0ePDWjKoMVOGv3AtvFSIqpN9F7dR4pbtGU%2B1qZ01lNQn4CdFIccxdt%2FecLa%2FLk4t99LTcSJ67Py6rS5HD6Giv%2BPMMLUsr4GOqUB8NcUkLYfKUPkhiHISazQegkrIGvnNj43MXinOmx1FpIoaGWnOnChoonwe1DiBldarUKfzGeMjuYG573r0j90%2FbqR0RbNuoBrJIfnBnDQ0v3OORm07dxwopEyKroKHsz6cF1HGXX0PTXADyS4sSseM7GUEbkYF3sVdGahSDC%2FHTKu23qAu40fPCvqCpb6D05u7Qu9oKIlDH%2Fq3ynLMCymsxVDWEHl&X-Amz-Signature=8e40f037595b7ab5bd2add5874e3e748417934894292e8123695adf2136557a4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UYGUYK35%2F20250308%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250308T210137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIFaw%2BQnQTAfGM%2BAEcCu8PfSvZZ4IVCPdAMCNaANky5SNAiEAx55nVcJYxHhZBceCS2V0JT9ibtYRugWv%2FTjb%2BjtI%2FdEq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDPt11eJkmwx4qt9u1CrcAwAm%2BkIuDug%2B7y3t8TWW048xwGmaer%2F3yc2E5mq6%2FoNFxmE%2B7vP8Vw8dre5PjP1s2qykt7kTioyUbruumBME5o985dAlztwaWwICVk%2BCm8bGeQ6zrfiuE84ysw28dwNif4y%2BfNaNfbsXrNcRPkdsM0294cumgsjNcTdQ3PmeAcZXv1%2BGV%2B660Jubps1ltXHZ2esxEwNfpx6IlOQubb%2BkOXGM5LzAjySC%2BcEMfVawgzWcu%2FwMHP5gqbGnXY8DGQu3pCoU%2BjoFf3IAy2z4roz9%2FvmhcUO5jfRvMSRmro2GfgqN0hxX6ftPxjSP%2BNJfM67OZmKDplU7daBF9dix98tLe9l57gl1%2F7Czot06sAst4iMDzrlVRjoK%2FpA6dnVh9Ab3z3x270ZVgx1baZfBUkt00kzdP16VxJ%2BnhcWVBVHFEb9tKCISVTy0pLVnLnTYaz1CK9rIcO%2FD9n%2F%2ByxtqgrUGoTwbi5rr1A8Br1RMTJTN3ynQRa8E69QVgnGLc2ush8t1rgBlm6md2W2TY25yiS%2FhrdaKFPI7uL1fR7KNI0ePDWjKoMVOGv3AtvFSIqpN9F7dR4pbtGU%2B1qZ01lNQn4CdFIccxdt%2FecLa%2FLk4t99LTcSJ67Py6rS5HD6Giv%2BPMMLUsr4GOqUB8NcUkLYfKUPkhiHISazQegkrIGvnNj43MXinOmx1FpIoaGWnOnChoonwe1DiBldarUKfzGeMjuYG573r0j90%2FbqR0RbNuoBrJIfnBnDQ0v3OORm07dxwopEyKroKHsz6cF1HGXX0PTXADyS4sSseM7GUEbkYF3sVdGahSDC%2FHTKu23qAu40fPCvqCpb6D05u7Qu9oKIlDH%2Fq3ynLMCymsxVDWEHl&X-Amz-Signature=b11b734caf3d0cda298f9c588f342417ed27b597e8bf10983d41deffb81e22ae&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
