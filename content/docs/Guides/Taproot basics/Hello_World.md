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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHHHPM5G%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDejU7o%2BIZFuhuZ4%2B7nF2H%2BhBHQGV4tryS0qDqg5G%2BG6QIhANpZwR4BQy%2BydbPMxUSsQpAjq94qEqYxxq1pNdUVFtAtKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNeO9pPCMundrzMlwq3AOahoENxG1h0%2BHskohJvbEM2mdwIgWJuhWVp7%2BUjEq8BGXPjrBcyMvv9baLg7fLLtTTxcZFj2B2%2BtgLhM9sBnsHOVXYDYvxD8%2FJfbpWdMXHlGMPU1K5ajegAk9H9O646K%2FieWrAxeLXdA92T8yvw7C1%2B5yhlvCHmzvu9FoBNAPEjwUhdvGb1R1fk5%2F0MYyi8cajq2pyY5Bf4illTnpLN%2BUF3BVm%2F72aGNICM4j2Y%2BI9dsu%2F55DamzPcvN05NrqBRyCNSYavXIRXBKQ%2BZ4H3VigHMfvwVUQu1rF6YxQqaNpFNKQ69X6HLDzfn5Yv12o9JZd9e%2Bs0PKdS5lg3VJV%2FJduc12fp3HVFGToxRoFNnjOIP%2F5XJo2ejrrm4xGz0iRKD%2Fd%2B2ry6Fsw8hX%2BLwa%2BiWWECGHz12vGpGU2FtrHTsQ5BtViZG6cFokni70eUn9giuqYL77jTMUXWI838iOl8SDXxTaQB0gtcgn28STnS0phVpqlhVEuFr%2BGcLDtcH%2FXBB7aonRSNw%2BgLhPfMuK79FXZLJl%2B3SClOmE6IFQxPDHNH1Vr%2F0yJUTbony%2Bf1Eh7lDXF8NMq9Kl9CBF18d5y8csv0W756x8Ditkg7tYAz0uFhN8hSf%2Bjcz%2BUhIUkRojDH8qDABjqkAc7wE%2BHnHGfDBpKzrE12GDj2ipEAzuNWiFhmRwiqgLSuAAI0kAnOjJoU5zgGIZvSKiXm%2FDgeGEDbhXM8RwCFxBN66AuJWNwtirvOjCcwG92Xt61XCSFh%2FhIHUUBQAym5n%2Fn3%2FnD9QqfXli2FbQX6EH6XDBNLJAU5aM5OjuNT1e9B0RIzSaKoHaE%2F3TKHNde5K2rp449NNg4mwwWZyGKKgA5Yinm%2F&X-Amz-Signature=28d030df10697a4d170b8c8346e54a5f4b49da792fae6de3954623dcc21816d0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHHHPM5G%2F20250423%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250423T050852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQDejU7o%2BIZFuhuZ4%2B7nF2H%2BhBHQGV4tryS0qDqg5G%2BG6QIhANpZwR4BQy%2BydbPMxUSsQpAjq94qEqYxxq1pNdUVFtAtKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwNeO9pPCMundrzMlwq3AOahoENxG1h0%2BHskohJvbEM2mdwIgWJuhWVp7%2BUjEq8BGXPjrBcyMvv9baLg7fLLtTTxcZFj2B2%2BtgLhM9sBnsHOVXYDYvxD8%2FJfbpWdMXHlGMPU1K5ajegAk9H9O646K%2FieWrAxeLXdA92T8yvw7C1%2B5yhlvCHmzvu9FoBNAPEjwUhdvGb1R1fk5%2F0MYyi8cajq2pyY5Bf4illTnpLN%2BUF3BVm%2F72aGNICM4j2Y%2BI9dsu%2F55DamzPcvN05NrqBRyCNSYavXIRXBKQ%2BZ4H3VigHMfvwVUQu1rF6YxQqaNpFNKQ69X6HLDzfn5Yv12o9JZd9e%2Bs0PKdS5lg3VJV%2FJduc12fp3HVFGToxRoFNnjOIP%2F5XJo2ejrrm4xGz0iRKD%2Fd%2B2ry6Fsw8hX%2BLwa%2BiWWECGHz12vGpGU2FtrHTsQ5BtViZG6cFokni70eUn9giuqYL77jTMUXWI838iOl8SDXxTaQB0gtcgn28STnS0phVpqlhVEuFr%2BGcLDtcH%2FXBB7aonRSNw%2BgLhPfMuK79FXZLJl%2B3SClOmE6IFQxPDHNH1Vr%2F0yJUTbony%2Bf1Eh7lDXF8NMq9Kl9CBF18d5y8csv0W756x8Ditkg7tYAz0uFhN8hSf%2Bjcz%2BUhIUkRojDH8qDABjqkAc7wE%2BHnHGfDBpKzrE12GDj2ipEAzuNWiFhmRwiqgLSuAAI0kAnOjJoU5zgGIZvSKiXm%2FDgeGEDbhXM8RwCFxBN66AuJWNwtirvOjCcwG92Xt61XCSFh%2FhIHUUBQAym5n%2Fn3%2FnD9QqfXli2FbQX6EH6XDBNLJAU5aM5OjuNT1e9B0RIzSaKoHaE%2F3TKHNde5K2rp449NNg4mwwWZyGKKgA5Yinm%2F&X-Amz-Signature=c3a9214fdd7f86ea7e2239fca177896c9305a96c6601dcd499ae9113c8caae8b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
