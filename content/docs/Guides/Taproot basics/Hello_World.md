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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4ETSBTN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIFgude6Hmx9IOvdXyKIbaTGeieXCKi3bZ35UZZ9u39HsAiEArmpKLybtVvoVoOdTJRppngTlaZMiow2Fk4NMJthmfGAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDGNgsF1OVcWGUkaG5ircAxgcotHThvVpXul5RXgzbis6biybCymbbqbfkpLDsBrnkgVQ%2Bxgxq62fU3rFbuy5mv0vKbsD1SWwBWqDcOIbXGh2tQNEcx%2FmS6hq4fSVY1eKeAKJAyT4Oaid8d3AFrDBsrKbTEG7hJtzkATDUjVIwZCc9VIr8rbm2%2FXyjlEN8WS2kOCfsAeND9wkLicoXB%2BuUvOn7bFqqQfIA8%2BSggHlQYZ55ZIrQWODJoy2Jwjj3jRPby4FlHgk6P8O1F6TG25gqitiNATs2FQuMPU0ypoyKO2vvS%2BRCFmTiQVZHROaAgGHDOutbJ%2BcqifKLA%2F4WvpnlPCx%2FF%2FWp4FFCR5Aju%2BMJ%2BWjYwPtu2B3irVS1ya9URRepWAIoVzKnljvAETd464RQptewZHqfxvoMEtHhMsvAMv5otFH1zuVTaVEDMwMgOQsea2uQABOqGhBMkxn6ie1Y%2FLfUTTs9Yi8CqPs88R%2FbarxbiHVeOFV2ctBE9LHJcoZG0LTWYLbQrOGbYctQwfVbgPoy%2FOIlQHes0jGkBkNzchVAYj0awDrNCywhJMRddsFQpi1DWNrWDiIiNkULh2CheignG6dhMi7lRFmX5aqoq22mXW4vsPGFnUBofSbyN8Ajsu1WwJOIzP5uaUPMJP%2Bxb0GOqUBnNYbWP%2B2YKw9MNuM3KvOOi0WquZfQGCI5w%2FNLIBf9oPjfSe7EbcqwhGMl8ck9XDBixx3z5jo56neHCjI4IlS2RL3ZbtvjIrRHV4ZgY1oclzzMSiziY0eLQ5YBbZm975hvleuw5nqow%2F9Et%2F4I%2Fy3fMqLJI2Wwz69B7clC781pTmPs9pH1DkRfL9vbgckBTNnX%2Bxrh61X0%2BM3XDpbiKApZ%2Bwiixiy&X-Amz-Signature=9326b296bcd982f39a4905afc3c902c97856aea19a3be38e19aaec04a67b3cbd&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4ETSBTN%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T110140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIFgude6Hmx9IOvdXyKIbaTGeieXCKi3bZ35UZZ9u39HsAiEArmpKLybtVvoVoOdTJRppngTlaZMiow2Fk4NMJthmfGAq%2FwMIVxAAGgw2Mzc0MjMxODM4MDUiDGNgsF1OVcWGUkaG5ircAxgcotHThvVpXul5RXgzbis6biybCymbbqbfkpLDsBrnkgVQ%2Bxgxq62fU3rFbuy5mv0vKbsD1SWwBWqDcOIbXGh2tQNEcx%2FmS6hq4fSVY1eKeAKJAyT4Oaid8d3AFrDBsrKbTEG7hJtzkATDUjVIwZCc9VIr8rbm2%2FXyjlEN8WS2kOCfsAeND9wkLicoXB%2BuUvOn7bFqqQfIA8%2BSggHlQYZ55ZIrQWODJoy2Jwjj3jRPby4FlHgk6P8O1F6TG25gqitiNATs2FQuMPU0ypoyKO2vvS%2BRCFmTiQVZHROaAgGHDOutbJ%2BcqifKLA%2F4WvpnlPCx%2FF%2FWp4FFCR5Aju%2BMJ%2BWjYwPtu2B3irVS1ya9URRepWAIoVzKnljvAETd464RQptewZHqfxvoMEtHhMsvAMv5otFH1zuVTaVEDMwMgOQsea2uQABOqGhBMkxn6ie1Y%2FLfUTTs9Yi8CqPs88R%2FbarxbiHVeOFV2ctBE9LHJcoZG0LTWYLbQrOGbYctQwfVbgPoy%2FOIlQHes0jGkBkNzchVAYj0awDrNCywhJMRddsFQpi1DWNrWDiIiNkULh2CheignG6dhMi7lRFmX5aqoq22mXW4vsPGFnUBofSbyN8Ajsu1WwJOIzP5uaUPMJP%2Bxb0GOqUBnNYbWP%2B2YKw9MNuM3KvOOi0WquZfQGCI5w%2FNLIBf9oPjfSe7EbcqwhGMl8ck9XDBixx3z5jo56neHCjI4IlS2RL3ZbtvjIrRHV4ZgY1oclzzMSiziY0eLQ5YBbZm975hvleuw5nqow%2F9Et%2F4I%2Fy3fMqLJI2Wwz69B7clC781pTmPs9pH1DkRfL9vbgckBTNnX%2Bxrh61X0%2BM3XDpbiKApZ%2Bwiixiy&X-Amz-Signature=77b6434967e1993d2a5b5d7f06aebec8d7c167df38158a5062b109df16b7b11e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
