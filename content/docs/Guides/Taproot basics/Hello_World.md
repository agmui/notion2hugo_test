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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK5UUWZ4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIA1U63UymaYPnFTZpjm5AA718Gb%2Feg5UhsIzNjypJCv%2FAiEAoALzpH2EYUGh1M8P%2B1pEIe4%2FPkP1N79tdwp8QObRMgEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIfSBOhHmE8qX4o5circA%2Bt8YZADTonfzwqObgbASTM9co0KEOn75Em7PJb%2Ft1mGD0W3icmUiWi3Jd5bb74HerCWcy%2BDWnpPIM8wIL2N87ESQ6oKZ4Yacvv3tF%2FtbE6kUG8wDqAJny4VHwyQ4vAoZZZbdKOLSbkSyIgeCc4%2BoHboWkBvWa3esJ8iqtJebutkXN90PiHdsdPEMQdVCfwZUN8GnHU%2ByL26ZeLWMX3ExJOr98et5X9qaYuZQKISFCy6tE1chwGYG7kCji69YOK07ZaP%2F2jA4pHUjg%2BR%2BhqLHHOqaxELCjZZyVj1tVbXldO6Z6Os1O5UsMqyGvyL0mAwf0tvvAFiFJalS7w9rpD6ZHEWcqCwNXQ3cX2Sro1KuIPV6ITFNw0nlMG8rx%2F1tZY73GetXgAKSe1g5f26ur1GGHU7n1uvtir4qsRZZpSdz8EXs%2BiDYVIrRWZgaPoKubjJ2j8s6BLPJpIDVM6CTSFkbPsO2hvHHldqgNBJKzGh%2FRmLK%2Bl%2FxWOaRnrVANlHPE3LwtkbHQqz6vTYtoHrveZ967qS9%2FEJ9KmV5uSnx90c2WjvlS44gkX21LREliAB5r%2FVkr2UNC6BcPoiP%2Fe%2BnD2%2B%2B8nKeBG3ZoUF1voNU6bEiQ2hJdOg587euOpJb5SDMI346MIGOqUB8jtrWdqhztLq85fhwL9vtBksXZSldZOrNlRpdlgMXnFcDNf88hiNB1tdm3AVUYq4mBV1e1%2BSbC4qIhnYbj3RAG9%2BfxPv0uVRwXjgmPbh5mIkCevCZCxzIq65NrHRj5faV%2FWX2Lp1H4onzeOBKrweLlM%2BiN7EoXDDn2jnz1hzB68aa3ewnpgTDGMTi3oK7dK7U6CHg6WiIidR%2F5o6UU2y5Yc5zqHF&X-Amz-Signature=6bb62702ef7375e55d24dbe9fe78d7c9b01290a4a6b5661973d459df087ac9e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UK5UUWZ4%2F20250624%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250624T061354Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIA1U63UymaYPnFTZpjm5AA718Gb%2Feg5UhsIzNjypJCv%2FAiEAoALzpH2EYUGh1M8P%2B1pEIe4%2FPkP1N79tdwp8QObRMgEq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDIfSBOhHmE8qX4o5circA%2Bt8YZADTonfzwqObgbASTM9co0KEOn75Em7PJb%2Ft1mGD0W3icmUiWi3Jd5bb74HerCWcy%2BDWnpPIM8wIL2N87ESQ6oKZ4Yacvv3tF%2FtbE6kUG8wDqAJny4VHwyQ4vAoZZZbdKOLSbkSyIgeCc4%2BoHboWkBvWa3esJ8iqtJebutkXN90PiHdsdPEMQdVCfwZUN8GnHU%2ByL26ZeLWMX3ExJOr98et5X9qaYuZQKISFCy6tE1chwGYG7kCji69YOK07ZaP%2F2jA4pHUjg%2BR%2BhqLHHOqaxELCjZZyVj1tVbXldO6Z6Os1O5UsMqyGvyL0mAwf0tvvAFiFJalS7w9rpD6ZHEWcqCwNXQ3cX2Sro1KuIPV6ITFNw0nlMG8rx%2F1tZY73GetXgAKSe1g5f26ur1GGHU7n1uvtir4qsRZZpSdz8EXs%2BiDYVIrRWZgaPoKubjJ2j8s6BLPJpIDVM6CTSFkbPsO2hvHHldqgNBJKzGh%2FRmLK%2Bl%2FxWOaRnrVANlHPE3LwtkbHQqz6vTYtoHrveZ967qS9%2FEJ9KmV5uSnx90c2WjvlS44gkX21LREliAB5r%2FVkr2UNC6BcPoiP%2Fe%2BnD2%2B%2B8nKeBG3ZoUF1voNU6bEiQ2hJdOg587euOpJb5SDMI346MIGOqUB8jtrWdqhztLq85fhwL9vtBksXZSldZOrNlRpdlgMXnFcDNf88hiNB1tdm3AVUYq4mBV1e1%2BSbC4qIhnYbj3RAG9%2BfxPv0uVRwXjgmPbh5mIkCevCZCxzIq65NrHRj5faV%2FWX2Lp1H4onzeOBKrweLlM%2BiN7EoXDDn2jnz1hzB68aa3ewnpgTDGMTi3oK7dK7U6CHg6WiIidR%2F5o6UU2y5Yc5zqHF&X-Amz-Signature=05387ab4545cb22bce6e5453d3dc81020de57ffc9cecf396ac9c58b8d22fb817&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
