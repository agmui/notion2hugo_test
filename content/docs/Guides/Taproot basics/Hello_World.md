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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOS7H6QV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX8Oyi%2Bg%2BRsp42CZXWJsU9MhfISoGqm4R0nURsb3m25AIgCc5%2FOkh4eeyqiLnRlP2e1OL%2BeNSpS9uRk4%2B%2F%2Bu5Gqzsq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDP%2FqYpJgQygySu6oXircA60wQV7tSsOlNz2dStQjjR4Yp9AYWpJRB4y7INJbzvH5atT3PKuAbPzGDVneuv2VwLVtC7DEQj1GmsZ7L2gUxkSHOb6LWcio6DyQkfREMBTlWCnoUryzA3cdv1CN9On%2FoVOQm60uh0lwb%2B3EZ9Ul6Vyy9r%2FjW9FXmHC5GGMNNVOWAdHST%2BNz2crNXmlo7aGCdh0BiMmEEmFzOhsEKGKikTcBy3iVURYmxi5MTFdgMu3nfCPHU093iRGDJlIGApqpOASIq08qtufWKXApwIEO0OalkgX7la3c%2FvY1%2B5LzDYxo1I%2B7E2IQzoOE%2B19WxUe4Y56muTJvFekiSGl1J419knHNJ1F6HXQuhDqbiW6eHmO6Y%2BN6a111OMQyh14H9ez0dCiy0SMuIsYZJy52%2BqWIp7sXU8nsj1SH%2F9DaUr1BzWM2l9%2B%2F9CiMvXO2LNakaeIvjnu4MwvpP2Ov3HGwg4E6Z9N8i4d6M%2FH1mmeL9%2BpjypKLNq2tvQM%2BXsyDKrf6SB0wAfbOacpWBBTVKYW4PnwfHeoWdp7OAi2FWQ3%2FUEteIzKtjavArJGc6LkwLBR27KEEXEmQ3A8Am7FvhCyALlFZIO5%2Bnfkr%2BAozI97YZ74EOxBtSk%2BRlZbOWArVnCDGMNrQ978GOqUBxiqAiC%2B8XpeJGCiiyaAlVRLHa5Y4s9t5nt9uOC3SuJxEgoquPsXht73Yv7ksMArjytqm9kptxM4qvJwCf5OETcK7A0xAogv3zPCpDYYFS9xL6mSGb%2FSCzGYxo6CTL2g2mJRNSHaefaIbETQAoAFvKmo%2FS8JQpJXYa33LFbFFC5HXf1OvAi29wH9NTi4JU2kSUPW5hTL0hThHPYcLtcR97xeR3wUV&X-Amz-Signature=8a9a1fee4d18fac5bff2deeeab618b20b343cedcc84251675dfa2e1c22b3cb60&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOS7H6QV%2F20250415%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250415T050906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDX8Oyi%2Bg%2BRsp42CZXWJsU9MhfISoGqm4R0nURsb3m25AIgCc5%2FOkh4eeyqiLnRlP2e1OL%2BeNSpS9uRk4%2B%2F%2Bu5Gqzsq%2FwMIJhAAGgw2Mzc0MjMxODM4MDUiDP%2FqYpJgQygySu6oXircA60wQV7tSsOlNz2dStQjjR4Yp9AYWpJRB4y7INJbzvH5atT3PKuAbPzGDVneuv2VwLVtC7DEQj1GmsZ7L2gUxkSHOb6LWcio6DyQkfREMBTlWCnoUryzA3cdv1CN9On%2FoVOQm60uh0lwb%2B3EZ9Ul6Vyy9r%2FjW9FXmHC5GGMNNVOWAdHST%2BNz2crNXmlo7aGCdh0BiMmEEmFzOhsEKGKikTcBy3iVURYmxi5MTFdgMu3nfCPHU093iRGDJlIGApqpOASIq08qtufWKXApwIEO0OalkgX7la3c%2FvY1%2B5LzDYxo1I%2B7E2IQzoOE%2B19WxUe4Y56muTJvFekiSGl1J419knHNJ1F6HXQuhDqbiW6eHmO6Y%2BN6a111OMQyh14H9ez0dCiy0SMuIsYZJy52%2BqWIp7sXU8nsj1SH%2F9DaUr1BzWM2l9%2B%2F9CiMvXO2LNakaeIvjnu4MwvpP2Ov3HGwg4E6Z9N8i4d6M%2FH1mmeL9%2BpjypKLNq2tvQM%2BXsyDKrf6SB0wAfbOacpWBBTVKYW4PnwfHeoWdp7OAi2FWQ3%2FUEteIzKtjavArJGc6LkwLBR27KEEXEmQ3A8Am7FvhCyALlFZIO5%2Bnfkr%2BAozI97YZ74EOxBtSk%2BRlZbOWArVnCDGMNrQ978GOqUBxiqAiC%2B8XpeJGCiiyaAlVRLHa5Y4s9t5nt9uOC3SuJxEgoquPsXht73Yv7ksMArjytqm9kptxM4qvJwCf5OETcK7A0xAogv3zPCpDYYFS9xL6mSGb%2FSCzGYxo6CTL2g2mJRNSHaefaIbETQAoAFvKmo%2FS8JQpJXYa33LFbFFC5HXf1OvAi29wH9NTi4JU2kSUPW5hTL0hThHPYcLtcR97xeR3wUV&X-Amz-Signature=7444359ef48262c1190d5397f56663a521a93342e2f1dbdca31194d6a0574482&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
