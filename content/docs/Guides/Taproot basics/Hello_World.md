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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XML334%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJnElKrwvY3Li0XXS0m3Jq3cPAKZE0mj8N3dAZ8qJFCAiAOggkCDn4BGa7l0JPxp2k6pQvtfS5F%2FDzdEcf%2Fk8lnYSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI2z2rABXw%2FS9CCkLKtwD29x%2F96maicagLTjDtaisixb79mbZiGMtT3HRvhn14g%2Bxqmzc4T9yWOrY7YkuikOyrea2FYgSxQLeSabWRvl5qa%2FCDBAwpgWmlx4bedrmA4T7K5CRP%2FK8xuZlMIq7qOuqRMkwnGa0M1tzCoSCIcTZJ%2BsvgJxx9mN%2BdPbZ%2FIdxtUDjEySdDfxWMolsy2HKS5sqNpkZaI4QBE8HEmpvSlNRhCdJr2wDsL1laYv2gg1F6EkVnE4YUM5f4Pi3REsjHq7yAQmxexth%2BNNfS1QCezR0NntyLTIFmfNcapyG0Ql7q70yJV9aQz5wKYYwJTIXvaFgOQZPgSdT4x7zaq%2BYO6JGEdM7nyxh6fH7w8udFNbXLRCowM3KbBdu5Q0vOyeN4xiykykZrvhqYuwwB56YJtKyjQMrvvv25hAcOXB0zL1fJ3BdOVXuAr4wzFUqhKSpyZJVAJSJLMMOuFb4yfCjel%2BvDHZaaPnuVPovuER7e1naK7K3Uh%2BNAgJLDkTGcpNYL4kClu1qbrXXl0IRqm1h%2BL%2FSGF8HPdan36ps7gc4UmDNZh7K7pgWZtvHYlUp8%2Fr%2Bzaq3025qzXY6hWC4VzKR%2FwVYjjUDPT3a36Gw0nH8ub4sEpf2CqZaKcSv3EJN3VEwhLGHvwY6pgGbF29aoe0IIDS0P0ieA%2BTiG3ulrjpoVJprj%2FbXoRZh%2FCsmlzkClrhCIktYXmzWqLy9W6KSiSkVHycM5uVcXCjBGmChRUrYH%2FTWwfvXphbk4k9%2BbfcChQxmgKr9yuRvsaaQzb4q5twIfsO7bBR3qB6FQtlJMyQQL12LqjMVHERTgC0JMLXliAOCDsBq4PPPR%2BLJ3Tv6FbQ%2FNRpHd%2FXEsB1Fhf3KUUty&X-Amz-Signature=412fa385ebb2a958ab6e8f9dcdbe1d481cf5feb4124dd59dba6d66d01db96841&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4XML334%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T230729Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAJnElKrwvY3Li0XXS0m3Jq3cPAKZE0mj8N3dAZ8qJFCAiAOggkCDn4BGa7l0JPxp2k6pQvtfS5F%2FDzdEcf%2Fk8lnYSqIBAj3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMI2z2rABXw%2FS9CCkLKtwD29x%2F96maicagLTjDtaisixb79mbZiGMtT3HRvhn14g%2Bxqmzc4T9yWOrY7YkuikOyrea2FYgSxQLeSabWRvl5qa%2FCDBAwpgWmlx4bedrmA4T7K5CRP%2FK8xuZlMIq7qOuqRMkwnGa0M1tzCoSCIcTZJ%2BsvgJxx9mN%2BdPbZ%2FIdxtUDjEySdDfxWMolsy2HKS5sqNpkZaI4QBE8HEmpvSlNRhCdJr2wDsL1laYv2gg1F6EkVnE4YUM5f4Pi3REsjHq7yAQmxexth%2BNNfS1QCezR0NntyLTIFmfNcapyG0Ql7q70yJV9aQz5wKYYwJTIXvaFgOQZPgSdT4x7zaq%2BYO6JGEdM7nyxh6fH7w8udFNbXLRCowM3KbBdu5Q0vOyeN4xiykykZrvhqYuwwB56YJtKyjQMrvvv25hAcOXB0zL1fJ3BdOVXuAr4wzFUqhKSpyZJVAJSJLMMOuFb4yfCjel%2BvDHZaaPnuVPovuER7e1naK7K3Uh%2BNAgJLDkTGcpNYL4kClu1qbrXXl0IRqm1h%2BL%2FSGF8HPdan36ps7gc4UmDNZh7K7pgWZtvHYlUp8%2Fr%2Bzaq3025qzXY6hWC4VzKR%2FwVYjjUDPT3a36Gw0nH8ub4sEpf2CqZaKcSv3EJN3VEwhLGHvwY6pgGbF29aoe0IIDS0P0ieA%2BTiG3ulrjpoVJprj%2FbXoRZh%2FCsmlzkClrhCIktYXmzWqLy9W6KSiSkVHycM5uVcXCjBGmChRUrYH%2FTWwfvXphbk4k9%2BbfcChQxmgKr9yuRvsaaQzb4q5twIfsO7bBR3qB6FQtlJMyQQL12LqjMVHERTgC0JMLXliAOCDsBq4PPPR%2BLJ3Tv6FbQ%2FNRpHd%2FXEsB1Fhf3KUUty&X-Amz-Signature=776d21191d793ad5defa8781d3efb671eb9c94106e965b0de5efe6d86f04a639&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
