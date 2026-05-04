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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFM5M6N%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdhjRDxVyqu%2Foiuaz3GqNT4QnAaMri47WrkYb4RLqUGQIgDoqY0wq6kbBUK2W3Tjj%2F6r4sQUqkkz6Cp9T0b%2BOI9Dgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMTKWTDpNHtzVxRpvCrcA4ccYhgomliz1ZX05Gl9XcPyuf3ciFZaGRrvdpai20G6IHEMEGoOnqWOlWcWKGa2g3AnVWLfUJq%2BNznW9zupdYsDH2lc1SoEscYYAYQbJ4XyvP90euEAVHOMbtcarC0p7K2%2BP%2Bo4THdxV%2FEwGhE7ZLNMPPu8njTZy%2B%2B42%2BxQhT8Db281qeEZo%2BXM5oBmLgxJJ%2Bb99dEpzXjIgwbG4YoFCqk4RwP%2FL7CQgzy8z7CsTCNaNNst5Q%2FvlJ4n1WoOUp9if1ljIxh8fOPxeyqWNO6XdBJ%2BVxy2xcm7iY9RdstCJVBhWYV6P3b3Cs88CehG52NvMr2AtfEfklyQTCQLNcavW7XXuBdbG2U16hCkvtG17hDOzbViokGk0P4EQOo8WerDaSOgWGeiaQL74ZK2EXXGqr8yO%2FqpTDa%2BKK6Wn%2BC3Aw14ZvFZS7yZb%2FzvXoP8c4RaTZx6Bg2i6vgpzPBoCo6IelX6x7h%2FUgq795qduYxprvqQ%2FtAVjOMlWH5%2BgHlw48q%2BGuXgwxYCHo0sJ0m05k1LV49MYt7giJXw2dCXQz%2BNxsz6LPnrn9e%2B6o40wM0jNbItppMWEU9pL5mL%2BPwcQadz6%2BqsjUvoBeriDCDi2KRLisdebju5Ujnae6QrGAJXMPb2388GOqUBYS2WV%2B0kedfEHZnrpNAly9u9SGOEPrBsdFvYd6AvDSEx2BZ80Np6RRLldeCf9IzRAF7BSmmBkLtj62Kr%2FJdkXbublpmVU9kr5mIZVmb3577O3NM%2FZGAFsDPeZ9nNEvaN7Ogg%2F89qYp5z%2BvY8kPB1tUgPrXmfcYhymtTzOLH7%2B2HZfYaukR63JIwqTBZVj%2BfQoVK8EMmbGfkHk1jIRWLh3fcdeuBK&X-Amz-Signature=706f53866d314ab15142633327c1e177a91cb2334eeae17e1bf9720f3d5066d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDFM5M6N%2F20260504%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260504T025424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdhjRDxVyqu%2Foiuaz3GqNT4QnAaMri47WrkYb4RLqUGQIgDoqY0wq6kbBUK2W3Tjj%2F6r4sQUqkkz6Cp9T0b%2BOI9Dgq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDMTKWTDpNHtzVxRpvCrcA4ccYhgomliz1ZX05Gl9XcPyuf3ciFZaGRrvdpai20G6IHEMEGoOnqWOlWcWKGa2g3AnVWLfUJq%2BNznW9zupdYsDH2lc1SoEscYYAYQbJ4XyvP90euEAVHOMbtcarC0p7K2%2BP%2Bo4THdxV%2FEwGhE7ZLNMPPu8njTZy%2B%2B42%2BxQhT8Db281qeEZo%2BXM5oBmLgxJJ%2Bb99dEpzXjIgwbG4YoFCqk4RwP%2FL7CQgzy8z7CsTCNaNNst5Q%2FvlJ4n1WoOUp9if1ljIxh8fOPxeyqWNO6XdBJ%2BVxy2xcm7iY9RdstCJVBhWYV6P3b3Cs88CehG52NvMr2AtfEfklyQTCQLNcavW7XXuBdbG2U16hCkvtG17hDOzbViokGk0P4EQOo8WerDaSOgWGeiaQL74ZK2EXXGqr8yO%2FqpTDa%2BKK6Wn%2BC3Aw14ZvFZS7yZb%2FzvXoP8c4RaTZx6Bg2i6vgpzPBoCo6IelX6x7h%2FUgq795qduYxprvqQ%2FtAVjOMlWH5%2BgHlw48q%2BGuXgwxYCHo0sJ0m05k1LV49MYt7giJXw2dCXQz%2BNxsz6LPnrn9e%2B6o40wM0jNbItppMWEU9pL5mL%2BPwcQadz6%2BqsjUvoBeriDCDi2KRLisdebju5Ujnae6QrGAJXMPb2388GOqUBYS2WV%2B0kedfEHZnrpNAly9u9SGOEPrBsdFvYd6AvDSEx2BZ80Np6RRLldeCf9IzRAF7BSmmBkLtj62Kr%2FJdkXbublpmVU9kr5mIZVmb3577O3NM%2FZGAFsDPeZ9nNEvaN7Ogg%2F89qYp5z%2BvY8kPB1tUgPrXmfcYhymtTzOLH7%2B2HZfYaukR63JIwqTBZVj%2BfQoVK8EMmbGfkHk1jIRWLh3fcdeuBK&X-Amz-Signature=6703eba6f42d5cd43b6ec5e5f774f79157d4b2c86c3c1ddcab441f48c7354077&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
