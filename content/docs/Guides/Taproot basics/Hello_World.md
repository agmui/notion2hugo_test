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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MCZICCC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD%2BLmcGnxMpVy67AHmnfgpcs0zrZjIA08VDIL4LhujBdwIgPs2xvDkjx3II0bOdkIhvRcyYUf%2FlV74RjHrUoCd6Eg4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGoYOcC0BBJlTkauQyrcA5ddatg81CVRFTIN9%2BUf%2BjglzsNfx9%2B6MF18i5fvgCkDDOuHDrB87CI7NPmyW7fp71Mzk0UletpJC3iBWybhpnpmDqHPCmarmm9Kvp%2FynkVBD%2FPqg0uOp3OdZhkLthpoj5qK4JUK4qF5VY08URi6K%2BnZqE%2F2hxfDRe1AsKcQ357Z6mCqLI80hc%2Bx08ZNsiM8FcvWu7bapH3wr9wRSHD2ARwSDuO0C79O%2B49FODaQgrMBj%2FrJxWLlrfBIywmW7in4Ku4NcUynlpwY2iSus4S%2Bx%2FGUioKZ8Wctew10Oxnj3yssqr9GcYfxMPWLwqGakXdxja%2BuL%2BCppvyErnqupH7WqeJjj6y35OK4T403FQ9SZPzTPVdxs7bPaj8fPrt4h0i7TtJNfPZFozurvk3OHJcDeCn3zm%2FjN0MLDXQebtwccZ%2FuvC8iLSiqqfCsTxyHwYL3XodlOOxKBI7TqwEv8RWpJbMpc%2Bzq02z%2FdEI5Jqs%2BWBInn6fyXI9V5NrM3%2FAXMEd1kKv2OiVhheNad6JI6na1yEdhjLr0yWDGnfJfu3k6FP5noy4%2BNrVlI1sxVTg3cFPpDhbuCsho39ZeIsuOOnqHgGPTkQkwSPrqTPAPhjWq%2BeFxhV84avPHThIaLRXGMNngncMGOqUB%2FE%2BEZfSSLDytyzjxsWTLca1ORA0ns3lkc%2Frh8jflUIatjnnHQ5G9UXGD0U9cop3D7InF1KdfuXGQFPl%2FKgKE3kvArMlfvFt8utdPnaisbGG08olL8JWo47RMoPeJZY47MPK2Djk5G1YQbBBUyW1XK5CRPQ8EBr9TvqBb6ul8T61R7VwO3YmTiAvsnNNS7VkU7A6tzA%2BrbyUzKByC2gXMt87TFZv2&X-Amz-Signature=c3cd1f6ce9b05c31775f45cf7f31c124b33f9cf0ee5b1d4469b56f809fd4d408&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663MCZICCC%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQD%2BLmcGnxMpVy67AHmnfgpcs0zrZjIA08VDIL4LhujBdwIgPs2xvDkjx3II0bOdkIhvRcyYUf%2FlV74RjHrUoCd6Eg4q%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGoYOcC0BBJlTkauQyrcA5ddatg81CVRFTIN9%2BUf%2BjglzsNfx9%2B6MF18i5fvgCkDDOuHDrB87CI7NPmyW7fp71Mzk0UletpJC3iBWybhpnpmDqHPCmarmm9Kvp%2FynkVBD%2FPqg0uOp3OdZhkLthpoj5qK4JUK4qF5VY08URi6K%2BnZqE%2F2hxfDRe1AsKcQ357Z6mCqLI80hc%2Bx08ZNsiM8FcvWu7bapH3wr9wRSHD2ARwSDuO0C79O%2B49FODaQgrMBj%2FrJxWLlrfBIywmW7in4Ku4NcUynlpwY2iSus4S%2Bx%2FGUioKZ8Wctew10Oxnj3yssqr9GcYfxMPWLwqGakXdxja%2BuL%2BCppvyErnqupH7WqeJjj6y35OK4T403FQ9SZPzTPVdxs7bPaj8fPrt4h0i7TtJNfPZFozurvk3OHJcDeCn3zm%2FjN0MLDXQebtwccZ%2FuvC8iLSiqqfCsTxyHwYL3XodlOOxKBI7TqwEv8RWpJbMpc%2Bzq02z%2FdEI5Jqs%2BWBInn6fyXI9V5NrM3%2FAXMEd1kKv2OiVhheNad6JI6na1yEdhjLr0yWDGnfJfu3k6FP5noy4%2BNrVlI1sxVTg3cFPpDhbuCsho39ZeIsuOOnqHgGPTkQkwSPrqTPAPhjWq%2BeFxhV84avPHThIaLRXGMNngncMGOqUB%2FE%2BEZfSSLDytyzjxsWTLca1ORA0ns3lkc%2Frh8jflUIatjnnHQ5G9UXGD0U9cop3D7InF1KdfuXGQFPl%2FKgKE3kvArMlfvFt8utdPnaisbGG08olL8JWo47RMoPeJZY47MPK2Djk5G1YQbBBUyW1XK5CRPQ8EBr9TvqBb6ul8T61R7VwO3YmTiAvsnNNS7VkU7A6tzA%2BrbyUzKByC2gXMt87TFZv2&X-Amz-Signature=05aceece5aa64a580bdd5d0e9b06ff2ab8ef3e8185e5739318b1a553c8cdc13d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
