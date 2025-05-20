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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7NVM2HF%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM8XXOCp0wIXKZDsrXSTrRbQKgTHBd0gv1icQNU84CmAiBK78bE%2FPPkTSHZFpkbUTbPxewFwP8fAaIZOQpRqlliViqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM16fFVQpwaXPz4AY7KtwD2OCQQkfePVoz1hu5104TfITvmWAMBhSgKnk0kw4pvXQTiQ3V5EUgmgDqU1WKxFZV%2BBWq9gnzgyXwyPjKyoLNOosP5FJTxmd7aGep2LZXpGDIp1xDu5aA0u68GWzyViyrUJbMnhkfZJoUvAEm3cQ2o6rxc9whR7mwoOLsU2fm7kRFbISFX9js%2B4%2FNn25qDkEqeCM6o4RVZiiIA8vCni8EGpn800fQetWH%2BZuukPYTQ%2FxSEC5J8P6SrVSgVfzltIwtnNAy4cgWKre8qs3ERawuRkE96wazOgTgVBftY8JrxnS8MbPbIbXA2Ns%2BAlyeyW%2BoRwxKFEX5%2FWjTJm4QrMSBSy9BF0kC0h5fMhRyXtyf2cJoWpCd7aJa9vtDsveWtWJh0%2FgZ3NAwkSzuYdZJP90i0P8gty6rMyh86Nw4qfK8T1SHI1snwWSVu%2B4dsFDa1bP7Fv8%2BdjkmrbVog8lcFe6KXVkh2KMBdap5ecsu5zG10NS6U2HkeyCYLxp5ypqIjnI4wWMnXmZVtS%2FS6r4J4IeSVv6mCjRGSnGCTPTBued7VPN7EbjIMYrTz5%2BNJ7yF7NVtejT1BRu%2FCthNTkH2pDQ7SJECkByF1V9monj70zAdYNB38pRx37%2Bez3aQLaYwvMawwQY6pgGiGUxsQspxoFpxEPzWJVO00yB4gOLJvZkjfdHTAvJr1WV46ZIRlnPFStnxMTya2WFguMSINRIi47OdnK%2FilTjhuVmOo5eo4HPNklc%2BNHBn3%2BKRRWieynYYHn65fmZ7qy8RbO%2Fn7mzz79iMcv19M0kYudhPg296XPLjpX1qILE2SWkytV0%2Fke3P%2FrmnXh0698DIORiciqLUuJJQmWLRsISBqlSv4CaM&X-Amz-Signature=1bad11ea7479cf28cd21e57b19eb5e5318829044f97bcbfccff2623893b68bbe&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z7NVM2HF%2F20250520%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250520T081302Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEM8XXOCp0wIXKZDsrXSTrRbQKgTHBd0gv1icQNU84CmAiBK78bE%2FPPkTSHZFpkbUTbPxewFwP8fAaIZOQpRqlliViqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM16fFVQpwaXPz4AY7KtwD2OCQQkfePVoz1hu5104TfITvmWAMBhSgKnk0kw4pvXQTiQ3V5EUgmgDqU1WKxFZV%2BBWq9gnzgyXwyPjKyoLNOosP5FJTxmd7aGep2LZXpGDIp1xDu5aA0u68GWzyViyrUJbMnhkfZJoUvAEm3cQ2o6rxc9whR7mwoOLsU2fm7kRFbISFX9js%2B4%2FNn25qDkEqeCM6o4RVZiiIA8vCni8EGpn800fQetWH%2BZuukPYTQ%2FxSEC5J8P6SrVSgVfzltIwtnNAy4cgWKre8qs3ERawuRkE96wazOgTgVBftY8JrxnS8MbPbIbXA2Ns%2BAlyeyW%2BoRwxKFEX5%2FWjTJm4QrMSBSy9BF0kC0h5fMhRyXtyf2cJoWpCd7aJa9vtDsveWtWJh0%2FgZ3NAwkSzuYdZJP90i0P8gty6rMyh86Nw4qfK8T1SHI1snwWSVu%2B4dsFDa1bP7Fv8%2BdjkmrbVog8lcFe6KXVkh2KMBdap5ecsu5zG10NS6U2HkeyCYLxp5ypqIjnI4wWMnXmZVtS%2FS6r4J4IeSVv6mCjRGSnGCTPTBued7VPN7EbjIMYrTz5%2BNJ7yF7NVtejT1BRu%2FCthNTkH2pDQ7SJECkByF1V9monj70zAdYNB38pRx37%2Bez3aQLaYwvMawwQY6pgGiGUxsQspxoFpxEPzWJVO00yB4gOLJvZkjfdHTAvJr1WV46ZIRlnPFStnxMTya2WFguMSINRIi47OdnK%2FilTjhuVmOo5eo4HPNklc%2BNHBn3%2BKRRWieynYYHn65fmZ7qy8RbO%2Fn7mzz79iMcv19M0kYudhPg296XPLjpX1qILE2SWkytV0%2Fke3P%2FrmnXh0698DIORiciqLUuJJQmWLRsISBqlSv4CaM&X-Amz-Signature=654ba3b652f9d63e9961cf4dbab3494f0a6290bb93d47ced3a6c129bf8c92ca1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
