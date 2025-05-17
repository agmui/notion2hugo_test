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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2AWTN7F%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOpCTQVv%2FAvZ%2FDFjBoyjjYgEUb1NxdqecVp3DLROvKqAiAgMWIUoFtzAavSK%2BmEphkDCngLTGnZBjp10TtOPsrUZSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMd8xQzm7dnk%2FUCn3EKtwDBGJOxSR4kTDpyN0VabUCSrc5jAwe%2B%2Fq3wma6MW0bjY7XYlXEfljSHHWkwaUi7rR49emlNiD3%2FkXS9qXqfsEhoBjaFHdxD4VFZNxc20ZducZYpw1BCAIM7LZsfD3G7AP%2BDxQDvns4GfwbAb3IUJVdE1aU0UQFHaIb%2Fmq7Mbc90BzFP7%2BhmvR4L%2Bnaurqcg9WoC21jiH2SXk9kdqU7HgFu8fvzWATXmgIHeBTJ%2F4axLBISlmZwy4aWu%2FvOS%2FqpbFxPrUqoL99e8x0rqXKH6Lgzc3LFvK9OfZtiKsmdBz0%2B%2FLVCKL3bcfM506D2LupCg%2F%2BTLAwvaFvKHjW90mDNlSUHVSwGz1XgTNh7bMEhfMSxwqdEUydkSbGWEkKkxGNL9cdPDYNz6sbWORYZE4tuk1HUUo78%2Bd%2Fg2uT86bnyp2m7NCiYz60iChETxlt9tlWoQb9N%2BayHg8mWDi4Wi7bVaIg04TlpAutvV0%2BlZS7VixnTZ0aJFAdDKkRIdjAQ91jfgv%2BV5NVKQCdh48xzf8a196U%2Bg3KLyBDMWrWxyrrlkJsPsVDI9qLmGj934ndFiXpkqX19gWweVMfQSBBwHB6yYM7oLFEeyELQgeBPABJb64z4nU1m6915HzhYROTF0UYw%2FI%2BgwQY6pgHYzDWFVnShgZ8DKIvjx7vuLrgwRxnD72MJadRGMhRAuBnOKZv%2FaOFNMWOIQNGjNxQlYTnaUaJ2SmPOVHsYO8PcQBd9NofTNzbTHmPa3NO017mOmgVossxyJ27IKflXSayrYBzQxP%2BpaeNgvMvdLY1nElW5cQvRyie2JeMNB1PuZbLZRr1ysIoMuBf3JcQ5VHw3C5%2FoAoIVrQsMxQwTdNisTXkQKGZ8&X-Amz-Signature=e1aa6f1411032bc54388a22125d10edf242bc923b886e9f1e6951ddfb7355236&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2AWTN7F%2F20250517%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250517T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICOpCTQVv%2FAvZ%2FDFjBoyjjYgEUb1NxdqecVp3DLROvKqAiAgMWIUoFtzAavSK%2BmEphkDCngLTGnZBjp10TtOPsrUZSr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMd8xQzm7dnk%2FUCn3EKtwDBGJOxSR4kTDpyN0VabUCSrc5jAwe%2B%2Fq3wma6MW0bjY7XYlXEfljSHHWkwaUi7rR49emlNiD3%2FkXS9qXqfsEhoBjaFHdxD4VFZNxc20ZducZYpw1BCAIM7LZsfD3G7AP%2BDxQDvns4GfwbAb3IUJVdE1aU0UQFHaIb%2Fmq7Mbc90BzFP7%2BhmvR4L%2Bnaurqcg9WoC21jiH2SXk9kdqU7HgFu8fvzWATXmgIHeBTJ%2F4axLBISlmZwy4aWu%2FvOS%2FqpbFxPrUqoL99e8x0rqXKH6Lgzc3LFvK9OfZtiKsmdBz0%2B%2FLVCKL3bcfM506D2LupCg%2F%2BTLAwvaFvKHjW90mDNlSUHVSwGz1XgTNh7bMEhfMSxwqdEUydkSbGWEkKkxGNL9cdPDYNz6sbWORYZE4tuk1HUUo78%2Bd%2Fg2uT86bnyp2m7NCiYz60iChETxlt9tlWoQb9N%2BayHg8mWDi4Wi7bVaIg04TlpAutvV0%2BlZS7VixnTZ0aJFAdDKkRIdjAQ91jfgv%2BV5NVKQCdh48xzf8a196U%2Bg3KLyBDMWrWxyrrlkJsPsVDI9qLmGj934ndFiXpkqX19gWweVMfQSBBwHB6yYM7oLFEeyELQgeBPABJb64z4nU1m6915HzhYROTF0UYw%2FI%2BgwQY6pgHYzDWFVnShgZ8DKIvjx7vuLrgwRxnD72MJadRGMhRAuBnOKZv%2FaOFNMWOIQNGjNxQlYTnaUaJ2SmPOVHsYO8PcQBd9NofTNzbTHmPa3NO017mOmgVossxyJ27IKflXSayrYBzQxP%2BpaeNgvMvdLY1nElW5cQvRyie2JeMNB1PuZbLZRr1ysIoMuBf3JcQ5VHw3C5%2FoAoIVrQsMxQwTdNisTXkQKGZ8&X-Amz-Signature=60770737253720c0cc4d5754dd8467d8a86bafabe372c6e7a1b19a11f43511bd&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
