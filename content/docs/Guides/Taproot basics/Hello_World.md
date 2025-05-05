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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CWUAX2U%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIEfZc7paUASvcOKEK0NO2MuTnTTXAwdfKdIDv0Q8h0JtAiEA8LvOfUbQPZPCM2VmIKdRLbMDhnA3h3141OkXmVHjSYIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDKCQaaBZ30MlviX0wSrcA99GAeY1%2B%2B1kS1Tyc0xU3DowvJoZFykcyjg0B1DbkqnpwV621TKoaJqLPbQWrCDcKALjpR1l0l6A0NiQxvI407iAWfcPN1Iwl3Jr%2BkSzQwxDXEsAJyklJDTq5y7TX1oKaKxwg3xdKj3P5roq9U16h4RP%2BjnuErZunh2wjPrduIDvk9zcKYMmmRdhVkFeoNgZxNCSvlButJoPm2WvjEg%2BGdnhyVOz3YpR9IcqSTT71B529gL%2FtntxEcJn906aBoF1JB0gzhqxXOzrM03Et4P18BkYu%2FCgyB0ajch0meYjPsFQl7ljUG6v1tNSz%2BU1Tn4DMftXB60CURA4EO1rplVNtzB5g5UUbEnmaZ1X1hXyupKpiUprY%2F2KMlq244YduYDZ%2FiMa491MINPrBeGEgMx%2BXciCrtInnAEWpRJOrkyxexLXb0L3l1eIzrPGrTF4v8HoGU2d1xrxTtswG513DdiISddqxI1KBFuJKS%2Ftu5l7mRw1iG2tjnCPw2dS9uH8oF130RPsR%2BI8OQqEaRVLubWeeTZ4%2FDDcCby3wDi5G4AtmlJ0CtT5%2B9FTqmGsRB6ARa%2BhwXWxUJ0hQo9t560Ybtdm1gcFCFH7p1ADHhHg6hhPLMlHD56Oo4Hlb3n%2BFxqxMPSC4cAGOqUBzxYYsDBOh9%2Bw4KiIL28%2B8ktulmnOs9xWCW4guzynrkC5DSjXhe7g%2BtoqlH2HPzxFcknFC5WQTbvmUiEhIoSSpjpFb5tpxhzoZ%2BWhtZ4sOVBLA%2FQErC4DsXBqO3Kvt1BU4%2BAJb%2FzZoj1lPKavBROH4nh%2BIovjaWyaKAXdLkHZJ02FO3BBut5lJR7Yy5VkeR4zeeXjUf%2FceLdGWTSkXUaC0o%2BHM3nq&X-Amz-Signature=a9b75b86544c579aa14782ec094bd70da7e780cb6809c93f52c22e5366be50e9&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CWUAX2U%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T050943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIEfZc7paUASvcOKEK0NO2MuTnTTXAwdfKdIDv0Q8h0JtAiEA8LvOfUbQPZPCM2VmIKdRLbMDhnA3h3141OkXmVHjSYIq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDKCQaaBZ30MlviX0wSrcA99GAeY1%2B%2B1kS1Tyc0xU3DowvJoZFykcyjg0B1DbkqnpwV621TKoaJqLPbQWrCDcKALjpR1l0l6A0NiQxvI407iAWfcPN1Iwl3Jr%2BkSzQwxDXEsAJyklJDTq5y7TX1oKaKxwg3xdKj3P5roq9U16h4RP%2BjnuErZunh2wjPrduIDvk9zcKYMmmRdhVkFeoNgZxNCSvlButJoPm2WvjEg%2BGdnhyVOz3YpR9IcqSTT71B529gL%2FtntxEcJn906aBoF1JB0gzhqxXOzrM03Et4P18BkYu%2FCgyB0ajch0meYjPsFQl7ljUG6v1tNSz%2BU1Tn4DMftXB60CURA4EO1rplVNtzB5g5UUbEnmaZ1X1hXyupKpiUprY%2F2KMlq244YduYDZ%2FiMa491MINPrBeGEgMx%2BXciCrtInnAEWpRJOrkyxexLXb0L3l1eIzrPGrTF4v8HoGU2d1xrxTtswG513DdiISddqxI1KBFuJKS%2Ftu5l7mRw1iG2tjnCPw2dS9uH8oF130RPsR%2BI8OQqEaRVLubWeeTZ4%2FDDcCby3wDi5G4AtmlJ0CtT5%2B9FTqmGsRB6ARa%2BhwXWxUJ0hQo9t560Ybtdm1gcFCFH7p1ADHhHg6hhPLMlHD56Oo4Hlb3n%2BFxqxMPSC4cAGOqUBzxYYsDBOh9%2Bw4KiIL28%2B8ktulmnOs9xWCW4guzynrkC5DSjXhe7g%2BtoqlH2HPzxFcknFC5WQTbvmUiEhIoSSpjpFb5tpxhzoZ%2BWhtZ4sOVBLA%2FQErC4DsXBqO3Kvt1BU4%2BAJb%2FzZoj1lPKavBROH4nh%2BIovjaWyaKAXdLkHZJ02FO3BBut5lJR7Yy5VkeR4zeeXjUf%2FceLdGWTSkXUaC0o%2BHM3nq&X-Amz-Signature=f089bd992ae947119a70b2682c259a3cbd0eb012e9186f6e6ac7141f365fe000&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
