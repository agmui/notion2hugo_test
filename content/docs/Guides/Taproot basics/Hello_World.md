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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G7IAGGW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAbADRopJzdr7lhF36HCoiTTc%2BMRFBn%2B2Y6Z6anN32lsAiEAosZv4%2BU09jWW%2FUwP6czley%2Fam3%2BbCV6xO6QJE9KO6nMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZWh4F2qqNgOYOc%2ByrcA2bbPw64WEzfSDicv3BSYa33a1LbXYvXLf7kOSFWW%2BiBm%2FYNbtcfNWQYEoq1MKgaDD4wgcXRINsIEKm57qB29invva0n5VWsSCQTZfM%2BfjBe9AzPsEJ2ZgTERKTY3iuIjMIJhdS7HPeCAvsB4fgN%2FVrAQALPkW1cNmfEtCbmrCCXES7vb83lL5Xis0%2FkedeLFVTXKQV1NpxmvBGvUqbX8NAeXr%2Ban9%2BZ6RJUE3M1icWbWRehj16JGpsZskZueur%2FZB5QQ3UuX%2FqrKzaS7ij3ECeZAcOa4A8hypKaL%2BoRN4UxWtowIClzXbV1X5MRZ3DSeNOAP06MK4eki1B3LePSpY6wwX7jnKst9uH%2BZs9ojLNDaakOBMmIXMukAUeJ8n%2FgxUqgHMSxOM%2BxSvxq2QoWX9%2F9fEqNGdldw4ZJ0oVSXzQ%2FKpqdYlVGcztgeEBuMRM49HIgNpi1n9Asqy%2FMWkCQmmXZXWu0H%2FA%2Bz2dvkqvvngs3ab1iFMDfOreutQS4a6oMuuWLTrtWMj3wq9teNmNOenik4y3xp2db6gRvubZmMa9f1TbsgZmpagMhmXAG2SiHmN8WKB0As9%2FqHj76Hz41cxzItPO5og%2FC2MtBdlAfhZ0A0CGz4s1DX9np1YVPMNiLiL4GOqUB4tdMVhgtinJpy3KfMOhpBYQLScnOGWob6JhreBsIYhXKxE1ypjd4Ckq%2BAiUuW7CJ3%2BuOdthf%2FDsF0poyZfNtAT8AQdEboeRsyxutQ%2BkXnbiFZv%2FlDzQbhQBgD6iJPZsE1JUL2DLcqfIsrZ2%2FS2u2fEGupQpg%2FzTzPO%2F%2BV8hoMj4E6tQns1UmssUIX5myXET%2Fin42TuXa%2BIF0BeeMsedr%2FODb53xI&X-Amz-Signature=144e841921c2af7e1ca5391d4cb861d5bbf2f78045cc162dc570a85dd8bcd376&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666G7IAGGW%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAbADRopJzdr7lhF36HCoiTTc%2BMRFBn%2B2Y6Z6anN32lsAiEAosZv4%2BU09jWW%2FUwP6czley%2Fam3%2BbCV6xO6QJE9KO6nMqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZWh4F2qqNgOYOc%2ByrcA2bbPw64WEzfSDicv3BSYa33a1LbXYvXLf7kOSFWW%2BiBm%2FYNbtcfNWQYEoq1MKgaDD4wgcXRINsIEKm57qB29invva0n5VWsSCQTZfM%2BfjBe9AzPsEJ2ZgTERKTY3iuIjMIJhdS7HPeCAvsB4fgN%2FVrAQALPkW1cNmfEtCbmrCCXES7vb83lL5Xis0%2FkedeLFVTXKQV1NpxmvBGvUqbX8NAeXr%2Ban9%2BZ6RJUE3M1icWbWRehj16JGpsZskZueur%2FZB5QQ3UuX%2FqrKzaS7ij3ECeZAcOa4A8hypKaL%2BoRN4UxWtowIClzXbV1X5MRZ3DSeNOAP06MK4eki1B3LePSpY6wwX7jnKst9uH%2BZs9ojLNDaakOBMmIXMukAUeJ8n%2FgxUqgHMSxOM%2BxSvxq2QoWX9%2F9fEqNGdldw4ZJ0oVSXzQ%2FKpqdYlVGcztgeEBuMRM49HIgNpi1n9Asqy%2FMWkCQmmXZXWu0H%2FA%2Bz2dvkqvvngs3ab1iFMDfOreutQS4a6oMuuWLTrtWMj3wq9teNmNOenik4y3xp2db6gRvubZmMa9f1TbsgZmpagMhmXAG2SiHmN8WKB0As9%2FqHj76Hz41cxzItPO5og%2FC2MtBdlAfhZ0A0CGz4s1DX9np1YVPMNiLiL4GOqUB4tdMVhgtinJpy3KfMOhpBYQLScnOGWob6JhreBsIYhXKxE1ypjd4Ckq%2BAiUuW7CJ3%2BuOdthf%2FDsF0poyZfNtAT8AQdEboeRsyxutQ%2BkXnbiFZv%2FlDzQbhQBgD6iJPZsE1JUL2DLcqfIsrZ2%2FS2u2fEGupQpg%2FzTzPO%2F%2BV8hoMj4E6tQns1UmssUIX5myXET%2Fin42TuXa%2BIF0BeeMsedr%2FODb53xI&X-Amz-Signature=76e80f31e650097ad9d8ff5193ed848958abb3acca54ca20b078a89aa0c3cc95&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
