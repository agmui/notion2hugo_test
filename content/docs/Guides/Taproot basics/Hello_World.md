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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XUZIQD4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIAVF%2BTbpAvy1LbxacQUwwvyh7BuGkyVrZVfNLJC%2B1PllAiAU28v7%2F6wdnfw5I%2B%2FgT1xOah1ICLSdTeZKw3ws0S0tSSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMonqfTxXSSHk7dswfKtwDtxlZ0oDUmuRLSK8qjA1q7kJq97By5H911tZEZXe1v%2B2ed48B0hoavZXRjQ13IjLWU0uiaTTIn2drjPHuGY6hZn8O7lKCPnK%2BZPxhBVE%2BOmnx0aVa1PQqSYipkGDKp0t7El90VoJLxtR0DwgiYRm6g9RruOBMqrxB5q2vEl2Z4KetsloyMWmRwBYazHvFBYO11J51GaRnU3sErDVfZDGaNS5u%2BdHXdbavmIhBHD5SFQHhPIrJEoObN5i2p8UnVD8fKDueiCkErevIbFaKHQtJWzOu8su1DNaMHF2TJDDpHglDZEPP3Ap9amwNes5NCiyKmQl15izO1rkyv8zIk3bSVExA1efW5ODG01%2FCuvDobsxUD%2B0i4FrW1qMRXgi26yedsdvAMRDUqeUltf3sZKOQd4Qfh%2F6o39Tfndirw56RLSOrCmvEsGmYP6E7hoGUiflECr%2F6%2Btr%2FlxA4Mx6%2F%2BlBgPosTBAYTHPRAgm1s%2BNjZC8kZocNToFJJUq55HZQBt6WmaeREhIAxNBgl%2F9BAQ2qVAcBInyz1ihoRvB4jrDK2d4qIwQOK3Jj5KSiNrRNfSP%2FjE2K8NkDvd5dc0NYr7nd9PCowC8C85sYyDJ2XTdFB91HaTNT%2Bb1Hj%2BQgXL%2BYwqqXwvgY6pgEJFhaYmM9Tpz6W%2BvxpuPZtfchBOxKH1U41c91QpMPp9YMymPukc7vvbW%2FnXU%2FlpZkMe5qccHinVfUL%2FkLx2cOoVDzAV%2FuRtSgP4oiI%2Fz9eOShPCMq8UGFEsqanTYZaO2hfdEN0KKJmFBFMstVtMAuebAzIGYEm97klAFrREzFaA%2FiKqpDWrtLl9gx74%2B0i2hjpoFqQ%2Bnr1nmecuLIcn9hantsxJLa%2F&X-Amz-Signature=47b80aab0ea24854335369d327288dd8fb2efba644734bf373cfd4f6f22c27a6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XUZIQD4%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T131716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJGMEQCIAVF%2BTbpAvy1LbxacQUwwvyh7BuGkyVrZVfNLJC%2B1PllAiAU28v7%2F6wdnfw5I%2B%2FgT1xOah1ICLSdTeZKw3ws0S0tSSqIBAiO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMonqfTxXSSHk7dswfKtwDtxlZ0oDUmuRLSK8qjA1q7kJq97By5H911tZEZXe1v%2B2ed48B0hoavZXRjQ13IjLWU0uiaTTIn2drjPHuGY6hZn8O7lKCPnK%2BZPxhBVE%2BOmnx0aVa1PQqSYipkGDKp0t7El90VoJLxtR0DwgiYRm6g9RruOBMqrxB5q2vEl2Z4KetsloyMWmRwBYazHvFBYO11J51GaRnU3sErDVfZDGaNS5u%2BdHXdbavmIhBHD5SFQHhPIrJEoObN5i2p8UnVD8fKDueiCkErevIbFaKHQtJWzOu8su1DNaMHF2TJDDpHglDZEPP3Ap9amwNes5NCiyKmQl15izO1rkyv8zIk3bSVExA1efW5ODG01%2FCuvDobsxUD%2B0i4FrW1qMRXgi26yedsdvAMRDUqeUltf3sZKOQd4Qfh%2F6o39Tfndirw56RLSOrCmvEsGmYP6E7hoGUiflECr%2F6%2Btr%2FlxA4Mx6%2F%2BlBgPosTBAYTHPRAgm1s%2BNjZC8kZocNToFJJUq55HZQBt6WmaeREhIAxNBgl%2F9BAQ2qVAcBInyz1ihoRvB4jrDK2d4qIwQOK3Jj5KSiNrRNfSP%2FjE2K8NkDvd5dc0NYr7nd9PCowC8C85sYyDJ2XTdFB91HaTNT%2Bb1Hj%2BQgXL%2BYwqqXwvgY6pgEJFhaYmM9Tpz6W%2BvxpuPZtfchBOxKH1U41c91QpMPp9YMymPukc7vvbW%2FnXU%2FlpZkMe5qccHinVfUL%2FkLx2cOoVDzAV%2FuRtSgP4oiI%2Fz9eOShPCMq8UGFEsqanTYZaO2hfdEN0KKJmFBFMstVtMAuebAzIGYEm97klAFrREzFaA%2FiKqpDWrtLl9gx74%2B0i2hjpoFqQ%2Bnr1nmecuLIcn9hantsxJLa%2F&X-Amz-Signature=8f6eb657824db22764df6d297a1dd2c881605663a5ba6cadadd0ffd9e42bbdd8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
