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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645SQFIEO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDr6bhJOl%2B1vrYbpr0k5Ja2k5Fz66lDNehrGyCwOoXa%2BwIhAOhpaXHbn4Ztn9Nbwf57NO4AgBeZh%2FBXMceY%2BeLDN7tWKv8DCDIQABoMNjM3NDIzMTgzODA1IgwNHuqBXFlgxLIdE4Qq3APUjvzxMS2nbDgBHq9SiJvVtq1BY6nMP8bxh5rJpqkcAYzeJEyvU4f4hpVMmwLAMTvZOi%2BmV2wuJgMNG78bsD0yVcGO48tEt9312PD3cTSdG%2FGvUJN76Tx1mcweHMb0tQ2Ttha5rc%2BngmWGWk0byc%2BHNATc6m3CkOzqjMiUCIJdxRmhoTU0YIdAiyZJm%2BSIK6FetJIVeDeOhOJoJlOn1mqRXWJHPZb7SOPmTOyEeDlh0khSajfoS%2BW0dwQisz3ZQVsQYQE2pLKh6C9gncUHWVUMio5bWipfvma%2FPN41itSUwUqJK5MzRd%2F1C17Jrg9zkP1J6o%2B61B79%2BoOtkNu6%2Bwjim69w8NnJzvELH%2Fz1V8sCS%2FTMtV1PERRVUoU9EKyto0DHP2vk58LHj37fi3651%2BO1txb7KEQUqBlyVYZZYb2kTqmUlah85EQK%2BbEraX36TMGyEpMe1KP0irrEefm2u6L%2FWPAk7%2BSQd57IE5DLStlSJ8P2q%2FH%2FKmaj0Q%2F1RCjj%2F0YW%2Bd1QPolVYVE5dWsOZgUdtAOqlyuFIPmJfjwn7euGloQRGTwptROxDMpc4gL4Gj%2BFj486XwaLA6BBVAGr7WJ%2FnF4A2bfbyILBl7u%2BJI0S4BW4DZP1LlOz7dFLRzDB04nEBjqkATDQ4W%2FO3ar73vlP6oiKCfjYIGn9Zsjhn2UNPJXDlEAOACLfgarj%2BWAtvMUaM0Oz4H44nLQbZ45Si6kHcbkkKB%2BW0iRBNZOlIoK0XPpJSO8iE%2BMdZVSKgj4f2Yf6VNqIXEaoxPtyKnHy5tcDcdnbmKrbpV7AdRhEvChmxRjNiIGmZMTJ8H8Zolewbcc6k9crg1teVMSpLflrA%2F3i0gM%2F7i%2BXmw8d&X-Amz-Signature=8796e38e57f194440d8e31f74b5c80819e0d513002e8109950dd507a8bc04296&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645SQFIEO%2F20250724%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250724T190919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJIMEYCIQDr6bhJOl%2B1vrYbpr0k5Ja2k5Fz66lDNehrGyCwOoXa%2BwIhAOhpaXHbn4Ztn9Nbwf57NO4AgBeZh%2FBXMceY%2BeLDN7tWKv8DCDIQABoMNjM3NDIzMTgzODA1IgwNHuqBXFlgxLIdE4Qq3APUjvzxMS2nbDgBHq9SiJvVtq1BY6nMP8bxh5rJpqkcAYzeJEyvU4f4hpVMmwLAMTvZOi%2BmV2wuJgMNG78bsD0yVcGO48tEt9312PD3cTSdG%2FGvUJN76Tx1mcweHMb0tQ2Ttha5rc%2BngmWGWk0byc%2BHNATc6m3CkOzqjMiUCIJdxRmhoTU0YIdAiyZJm%2BSIK6FetJIVeDeOhOJoJlOn1mqRXWJHPZb7SOPmTOyEeDlh0khSajfoS%2BW0dwQisz3ZQVsQYQE2pLKh6C9gncUHWVUMio5bWipfvma%2FPN41itSUwUqJK5MzRd%2F1C17Jrg9zkP1J6o%2B61B79%2BoOtkNu6%2Bwjim69w8NnJzvELH%2Fz1V8sCS%2FTMtV1PERRVUoU9EKyto0DHP2vk58LHj37fi3651%2BO1txb7KEQUqBlyVYZZYb2kTqmUlah85EQK%2BbEraX36TMGyEpMe1KP0irrEefm2u6L%2FWPAk7%2BSQd57IE5DLStlSJ8P2q%2FH%2FKmaj0Q%2F1RCjj%2F0YW%2Bd1QPolVYVE5dWsOZgUdtAOqlyuFIPmJfjwn7euGloQRGTwptROxDMpc4gL4Gj%2BFj486XwaLA6BBVAGr7WJ%2FnF4A2bfbyILBl7u%2BJI0S4BW4DZP1LlOz7dFLRzDB04nEBjqkATDQ4W%2FO3ar73vlP6oiKCfjYIGn9Zsjhn2UNPJXDlEAOACLfgarj%2BWAtvMUaM0Oz4H44nLQbZ45Si6kHcbkkKB%2BW0iRBNZOlIoK0XPpJSO8iE%2BMdZVSKgj4f2Yf6VNqIXEaoxPtyKnHy5tcDcdnbmKrbpV7AdRhEvChmxRjNiIGmZMTJ8H8Zolewbcc6k9crg1teVMSpLflrA%2F3i0gM%2F7i%2BXmw8d&X-Amz-Signature=c3077e307bbf6007abe187b224565d938f6d330edd8a963f573b9b031d2c0511&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
