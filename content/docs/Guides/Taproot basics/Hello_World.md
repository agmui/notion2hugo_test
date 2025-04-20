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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFSSR6R4%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDHX16LwgWg1uCDjYedB2o6BhHFY7ncllnZyx7KVCL0lQIhAJVjiPjrMBDQ1%2FkNLtvbgxFJsQl5qiDrBf3dJOkpHjgFKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1pWQCrC1aTm7ckKsq3ANnxOErG0TR34WZ1lkswKGF2EAoUjhFkgXci8nMHWBvk%2B3%2BbTTQckMxqBWtty7Kg0wH6t5IXouCYIYC%2F%2Bm2Q5hzz3C7%2BPr0SScy2gM3%2Fx8a22E6ycOsyLvPHqar8SIOeMFEyXq1mfoDY%2Fu0sDRjZPEiOxTUXnf8z%2B7QJ%2BC8Jbz095I0xw1ZKn7jrnRT4p%2B1pjX9Zw0nuRMWN4nhIfLcwwzhv75FlmtbElGFFvuCi1WyAVKXlQiY05V8ba1jpkDj7uJLJZ4aOafIqzWXvUq%2BcFE9r1%2FJGUTbSCnm5%2BeBgpPui0cE6R8wxJ85aq0O8yoYHdE2AvtKR4mDzPhi%2Fd4OzFAIK3i5H%2BHHO3QvP%2BTwsO0y0AkK8PNxkKnPY0NLOE0g4sg2Kgm%2B%2F2Vc5ysRdoQDOQLqeWGKbXjvKkI9p93FdB0CtcRkTQrzZ47pIwHyrYt%2Fm5XFR5gDprV2Z%2Fjd2fmKxaDx8xc5qWCx6ASYGSlD7gEuw%2FEeI9vlUC0oRncIsK0lt2s%2F982lnG8fL8WOiwIs53IZZ4N4qh5WGCV7G4nfVYS5DIywyT%2BnS%2B1bGPODEgCrItlFc5JP17stIG%2FOvFIDqIM746rnGjBSRpv5FlZZVy1%2BPWw7mkZLuDFr7zNW%2FTDX25XABjqkATqwU9CJygnQl6DvsCfHyZ9Mu2XKy%2FpyDeuTTsrk94eY562636PDz2aSYOciBUPLTbSKIaRkE%2BRaibIa0ByEx8eEXL5iGx2HrWqvh5scdw8yw5fcJzWrWYw8ke1WsFO69kmjN8ELQdTgx%2FAY0hCRtItcnl%2BSQUyPHhlWVrNxCvaA20zoXCENUfXwRKRGnjQ1iPltuCKyxp4Mrf6UOlI0hHuz4NS3&X-Amz-Signature=6024321235a83d607a9e36e91445ad21fdefa8bc693f7aed8d39bde716852d65&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TFSSR6R4%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T230733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECYaCXVzLXdlc3QtMiJIMEYCIQDHX16LwgWg1uCDjYedB2o6BhHFY7ncllnZyx7KVCL0lQIhAJVjiPjrMBDQ1%2FkNLtvbgxFJsQl5qiDrBf3dJOkpHjgFKogECK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1pWQCrC1aTm7ckKsq3ANnxOErG0TR34WZ1lkswKGF2EAoUjhFkgXci8nMHWBvk%2B3%2BbTTQckMxqBWtty7Kg0wH6t5IXouCYIYC%2F%2Bm2Q5hzz3C7%2BPr0SScy2gM3%2Fx8a22E6ycOsyLvPHqar8SIOeMFEyXq1mfoDY%2Fu0sDRjZPEiOxTUXnf8z%2B7QJ%2BC8Jbz095I0xw1ZKn7jrnRT4p%2B1pjX9Zw0nuRMWN4nhIfLcwwzhv75FlmtbElGFFvuCi1WyAVKXlQiY05V8ba1jpkDj7uJLJZ4aOafIqzWXvUq%2BcFE9r1%2FJGUTbSCnm5%2BeBgpPui0cE6R8wxJ85aq0O8yoYHdE2AvtKR4mDzPhi%2Fd4OzFAIK3i5H%2BHHO3QvP%2BTwsO0y0AkK8PNxkKnPY0NLOE0g4sg2Kgm%2B%2F2Vc5ysRdoQDOQLqeWGKbXjvKkI9p93FdB0CtcRkTQrzZ47pIwHyrYt%2Fm5XFR5gDprV2Z%2Fjd2fmKxaDx8xc5qWCx6ASYGSlD7gEuw%2FEeI9vlUC0oRncIsK0lt2s%2F982lnG8fL8WOiwIs53IZZ4N4qh5WGCV7G4nfVYS5DIywyT%2BnS%2B1bGPODEgCrItlFc5JP17stIG%2FOvFIDqIM746rnGjBSRpv5FlZZVy1%2BPWw7mkZLuDFr7zNW%2FTDX25XABjqkATqwU9CJygnQl6DvsCfHyZ9Mu2XKy%2FpyDeuTTsrk94eY562636PDz2aSYOciBUPLTbSKIaRkE%2BRaibIa0ByEx8eEXL5iGx2HrWqvh5scdw8yw5fcJzWrWYw8ke1WsFO69kmjN8ELQdTgx%2FAY0hCRtItcnl%2BSQUyPHhlWVrNxCvaA20zoXCENUfXwRKRGnjQ1iPltuCKyxp4Mrf6UOlI0hHuz4NS3&X-Amz-Signature=8f4aec98c3d036c1243883262576838ebb7dcc1bf2febbb0d6187d282c5f4040&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
