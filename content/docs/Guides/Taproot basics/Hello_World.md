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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666724ONA7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANp9kzfxPo1vmrW0k4px1FY%2BR7Cdpdo6P3mcygPlTDYAiBFwA9R47Vsv7UerSn8Vpl54TjrzDC%2BU7Eo3N7%2BocF2MSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGNtPkSxRmzY6Vd5DKtwDqfcN1C8slRp8%2F6tO8nAFTNaiepSHbul7U6Nx2I4mohh%2BQ%2BdpPQVdTR9AUdBQAnO%2BBkQ7UGFnMp%2FQgrpw2ik%2Fsly3%2FcSNZ6VcjzmYjiiKpgx8CDRUChSMFI4BbmiQIaHyn0TYe8knNRTFuX1drXtsmQLBIa8NFyW7SOKLbl%2B4wsSHuwcwi2sHbVtmWbpOItEM9si60c8ui1W1AsSLmfU8%2FldLnISC2I48ReYdgwYC6v4DUQlk8dwULr437Vs2TfK0%2BqRh%2FkxL44eTBMa9FdNexZhXw3ZsRPsMgNfg6kiX3xlcCd91k46C0E%2FbsP%2BXpl%2FBXH9tXxm2PAUS1hn0noB%2FehOT1Y2HtW%2FX4LOucXFMd8EAkcyqvCXdoi60nbEnJjCIg0r%2BJzaEDAZyubBIpzObYhGMJeWusN5060YoYul50qAxX0mYXI6KgRa6mOpsAtYg0TQPnANTqHGA5u5E5y5TGXNciQ6Vqt0ABduvjVPAE%2BWYNbUab5%2B7bWNCRuWcWNRzen1ouB1a60SRRe4MJVAo3KZrwJSn3SkvTz1qRvdBRwwh5BYl3MjjvPTkURyhAzlEtlGUczdzdKmyyavta1QVNIWGU6wybAQuSpI6dUGA5FasgcMWkFa97KVIEywwoe%2B6wwY6pgHXGG3R1mgj7IaO0BgYcC1Wp%2B5gw0kb0u41ZDbmh8t9oc2i59c3m5m1S1s1jLeei%2BX%2F37Gf0FRo1JzTM8rgIErsCcbzsFhnrsqx8btYsK4lzmgd%2B5FgwRPw%2FkayHr0EQFB5P5U2Iyoa%2FREd0OSJM83XRMIuAkN8Unf4%2BZaG28GLmUZ0zT9Ekq8KIrEAa4St6sHZ2S2WfdiOHXNOEEjdkjJRWMp1TG2b&X-Amz-Signature=8b1ad228e5e8c9575109373672f09225eb5c02384ee0e9ed99d55fa953e4a7f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666724ONA7%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T190817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIANp9kzfxPo1vmrW0k4px1FY%2BR7Cdpdo6P3mcygPlTDYAiBFwA9R47Vsv7UerSn8Vpl54TjrzDC%2BU7Eo3N7%2BocF2MSqIBAis%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGNtPkSxRmzY6Vd5DKtwDqfcN1C8slRp8%2F6tO8nAFTNaiepSHbul7U6Nx2I4mohh%2BQ%2BdpPQVdTR9AUdBQAnO%2BBkQ7UGFnMp%2FQgrpw2ik%2Fsly3%2FcSNZ6VcjzmYjiiKpgx8CDRUChSMFI4BbmiQIaHyn0TYe8knNRTFuX1drXtsmQLBIa8NFyW7SOKLbl%2B4wsSHuwcwi2sHbVtmWbpOItEM9si60c8ui1W1AsSLmfU8%2FldLnISC2I48ReYdgwYC6v4DUQlk8dwULr437Vs2TfK0%2BqRh%2FkxL44eTBMa9FdNexZhXw3ZsRPsMgNfg6kiX3xlcCd91k46C0E%2FbsP%2BXpl%2FBXH9tXxm2PAUS1hn0noB%2FehOT1Y2HtW%2FX4LOucXFMd8EAkcyqvCXdoi60nbEnJjCIg0r%2BJzaEDAZyubBIpzObYhGMJeWusN5060YoYul50qAxX0mYXI6KgRa6mOpsAtYg0TQPnANTqHGA5u5E5y5TGXNciQ6Vqt0ABduvjVPAE%2BWYNbUab5%2B7bWNCRuWcWNRzen1ouB1a60SRRe4MJVAo3KZrwJSn3SkvTz1qRvdBRwwh5BYl3MjjvPTkURyhAzlEtlGUczdzdKmyyavta1QVNIWGU6wybAQuSpI6dUGA5FasgcMWkFa97KVIEywwoe%2B6wwY6pgHXGG3R1mgj7IaO0BgYcC1Wp%2B5gw0kb0u41ZDbmh8t9oc2i59c3m5m1S1s1jLeei%2BX%2F37Gf0FRo1JzTM8rgIErsCcbzsFhnrsqx8btYsK4lzmgd%2B5FgwRPw%2FkayHr0EQFB5P5U2Iyoa%2FREd0OSJM83XRMIuAkN8Unf4%2BZaG28GLmUZ0zT9Ekq8KIrEAa4St6sHZ2S2WfdiOHXNOEEjdkjJRWMp1TG2b&X-Amz-Signature=bab6aea3d87bae389149c59fa04623124012fbd0e6a68abfead33fbd512f2019&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
