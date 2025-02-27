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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665335RGOH%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIG0T3W0kDJ3PW0tO3vHIbjBp3dWkF8Ej0B2FMg7Xy9mmAiBdz5dPRf2oipUJykrmPieFN183ax5Gsdkgi46VdRD7lCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMF%2BWlTxVdXjbtNrqrKtwDWXLPUIlXoSDAj4VflHlS58Y1j97vC0pc3raSr3%2Bqv9VgYN48L%2F3lrX%2FITXKQ1tJl8Wp5bMMCqMtC%2FwcvU95tw%2BOPYx7MFXGMxDoBb7rOD4NFtgfseoIBA2AodM88Aefx2jBler9tRd6RuVfP7oN2H%2F71b1KROiksWl5GS7MKGwP%2FxWl9N%2FuoH6J3rlswRinFF3%2FWfgfSdOM3wlkgR2Cm2Ibe82QYlQdpEbWg1Xv1jVtGYIKlcAxz30qq66jFmi5F9mtrifyUa7K1LE6XHKAPa3biqoYv39PyPO%2B9hy2Tqj%2Fwa56pZua509qq1rBevUU6zdmtigkhXfStLVQ3BL7pDHbOJfEpgurJ38087W2Y0gNi%2B7lQqeQsyk8QDGTZDm3OS9aLxkjcGXCiUqnpek2MSTxjY%2FuVQF0Ic1QSC21QAZsQFJJnMAQ7UPGvA21EduJoxHqh1EzKwHRum3yIIe6T3sXEVagU%2BNfDYMU6U0oird%2BN9Nb3AGOoHeaDq52YOZASrjn9JuRyBJwRFh2l1lJcrGNA0vkkOr8xfw0kxGgaJKyDSwbV7Gp%2FocR4RiHMwOntUjsA2FIVV%2B1ge1iYoGXubqwnJM45zn6qUXgJWWVV4FdRB71jooSvJasMXygwstKCvgY6pgHA7HO1%2BAIyWF57GN20jRH6Z63Jf%2BES2AhlvhpMydVzdSMcm3ppUAmnwg9bgu2dfQj8DVTwDLAfw0woKh5furK4BDJUTIPXq%2B1zPYdTjx8hTeOFuet3eRp%2BUsHOmHyFE4nlnjjRi99pgTkGNRYXkuJAhFlMd9oBkzhZ654eSO%2BAPpn6L1AM2FiLT3lAf4E4qBsZp9%2Fa6EuMe9ISpk%2FQJHSbZJSeEhtg&X-Amz-Signature=6b2eb02302b638a9800f6c9afd1969c939c16654c1b864273c4d87a7ebaeb301&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665335RGOH%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T181057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJGMEQCIG0T3W0kDJ3PW0tO3vHIbjBp3dWkF8Ej0B2FMg7Xy9mmAiBdz5dPRf2oipUJykrmPieFN183ax5Gsdkgi46VdRD7lCr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMF%2BWlTxVdXjbtNrqrKtwDWXLPUIlXoSDAj4VflHlS58Y1j97vC0pc3raSr3%2Bqv9VgYN48L%2F3lrX%2FITXKQ1tJl8Wp5bMMCqMtC%2FwcvU95tw%2BOPYx7MFXGMxDoBb7rOD4NFtgfseoIBA2AodM88Aefx2jBler9tRd6RuVfP7oN2H%2F71b1KROiksWl5GS7MKGwP%2FxWl9N%2FuoH6J3rlswRinFF3%2FWfgfSdOM3wlkgR2Cm2Ibe82QYlQdpEbWg1Xv1jVtGYIKlcAxz30qq66jFmi5F9mtrifyUa7K1LE6XHKAPa3biqoYv39PyPO%2B9hy2Tqj%2Fwa56pZua509qq1rBevUU6zdmtigkhXfStLVQ3BL7pDHbOJfEpgurJ38087W2Y0gNi%2B7lQqeQsyk8QDGTZDm3OS9aLxkjcGXCiUqnpek2MSTxjY%2FuVQF0Ic1QSC21QAZsQFJJnMAQ7UPGvA21EduJoxHqh1EzKwHRum3yIIe6T3sXEVagU%2BNfDYMU6U0oird%2BN9Nb3AGOoHeaDq52YOZASrjn9JuRyBJwRFh2l1lJcrGNA0vkkOr8xfw0kxGgaJKyDSwbV7Gp%2FocR4RiHMwOntUjsA2FIVV%2B1ge1iYoGXubqwnJM45zn6qUXgJWWVV4FdRB71jooSvJasMXygwstKCvgY6pgHA7HO1%2BAIyWF57GN20jRH6Z63Jf%2BES2AhlvhpMydVzdSMcm3ppUAmnwg9bgu2dfQj8DVTwDLAfw0woKh5furK4BDJUTIPXq%2B1zPYdTjx8hTeOFuet3eRp%2BUsHOmHyFE4nlnjjRi99pgTkGNRYXkuJAhFlMd9oBkzhZ654eSO%2BAPpn6L1AM2FiLT3lAf4E4qBsZp9%2Fa6EuMe9ISpk%2FQJHSbZJSeEhtg&X-Amz-Signature=22324b850f0a23a2cd77697e92efedd3acc927d10a531a369ec7d89029a1a93b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
