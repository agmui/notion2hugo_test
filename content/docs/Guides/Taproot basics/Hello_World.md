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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZRFHCV%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuFDBCoFArT1uR%2F4S3d5yL3zoWJWXiGEqo6BsFSY0fhAiA%2FcTqF3YBbJ1zlAij2nvC53uGswjbKLJhrt9wiovZ9Fyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM6Z5KpqL9y8oY1gi8KtwD6pjLFLE7%2BR20yzJWK7d%2BPpjuROBptwxyiYfHfG93fCXhQ1vGMmu2zkrXZHd8FabKrdxPBVlJ8VVfLIAA6587yKEV8fLObCDV8g%2FrUeM89IkuGjQ%2BtNlZ3ErmJfYqe4fwHoZ86MQhuHEnYoNgHm9zBtRHaf51DSHWycSjO0v0j4t3r63ZjJgffr%2FEJ1ySFqPe2dWeObxuUoDu8hVPcLOgO0jjxIuWFIyh5NppZQaKaLkZr%2BiuLFvBjcvfECn0%2FMY2ebmD8rYIRazxerow5JXFK4I4OVwBdJnvp6%2BRurwinr9t1aDUS9r96QgFFcTX8ov8zlXQZCFT2ERMii6r05Pv8J2GdKWHcwuPyeuJSbtSaUTpYLDY2ohbdmz6a4pGQJj7D3z8CoGbrROuL%2FQcIsi5nn0Pub0GZeeXkx7zzkOmZQ3XYV%2BiMTFZo4nsLIE2LN09v6ZGjC8wMedv0ygIqyJwlTR%2FH3qUlHp9fo8D%2FpuxHEB97gnwEFs8qybA0xXbpxSO%2BoufcbonMjV1PAhuZHg9jnYbFazSKhH6ZWke3uLHVNqyBCP3NU5dfQR8n89Qh9jXu9kc0cgsdc1i7W5Ekg2EVuqoQpRHr3dg3p%2BwkPibJ3ryPQFFh0T7vPF2Bk4w6f%2FIvwY6pgFXj0XgPKr%2FhAUNV%2F%2BtByYh42iKENAcUF4a8Yfm73d7ZKdbUpQfzhb%2Fq2nMHblLGzlVybTcHitsxTlkDS%2FmmRhQme0RlFzgpcTIX6EZ38jrWP2ysM%2FNI47Bu%2BlA7T4AkUj9busoneKuX5udVNeDLbaYDincF1OPRyjVcwBzrhj6VBggubNTP5FDCCDBotw9WVnr9rxSnEeA6QuYsegdPaHL9fu2XktQ&X-Amz-Signature=e5faa458ac012f38bd1c93f9b936fb4eeee46d639d4b8e12839bcc21ccc3de36&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662BZRFHCV%2F20250406%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250406T090706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFuFDBCoFArT1uR%2F4S3d5yL3zoWJWXiGEqo6BsFSY0fhAiA%2FcTqF3YBbJ1zlAij2nvC53uGswjbKLJhrt9wiovZ9Fyr%2FAwhCEAAaDDYzNzQyMzE4MzgwNSIM6Z5KpqL9y8oY1gi8KtwD6pjLFLE7%2BR20yzJWK7d%2BPpjuROBptwxyiYfHfG93fCXhQ1vGMmu2zkrXZHd8FabKrdxPBVlJ8VVfLIAA6587yKEV8fLObCDV8g%2FrUeM89IkuGjQ%2BtNlZ3ErmJfYqe4fwHoZ86MQhuHEnYoNgHm9zBtRHaf51DSHWycSjO0v0j4t3r63ZjJgffr%2FEJ1ySFqPe2dWeObxuUoDu8hVPcLOgO0jjxIuWFIyh5NppZQaKaLkZr%2BiuLFvBjcvfECn0%2FMY2ebmD8rYIRazxerow5JXFK4I4OVwBdJnvp6%2BRurwinr9t1aDUS9r96QgFFcTX8ov8zlXQZCFT2ERMii6r05Pv8J2GdKWHcwuPyeuJSbtSaUTpYLDY2ohbdmz6a4pGQJj7D3z8CoGbrROuL%2FQcIsi5nn0Pub0GZeeXkx7zzkOmZQ3XYV%2BiMTFZo4nsLIE2LN09v6ZGjC8wMedv0ygIqyJwlTR%2FH3qUlHp9fo8D%2FpuxHEB97gnwEFs8qybA0xXbpxSO%2BoufcbonMjV1PAhuZHg9jnYbFazSKhH6ZWke3uLHVNqyBCP3NU5dfQR8n89Qh9jXu9kc0cgsdc1i7W5Ekg2EVuqoQpRHr3dg3p%2BwkPibJ3ryPQFFh0T7vPF2Bk4w6f%2FIvwY6pgFXj0XgPKr%2FhAUNV%2F%2BtByYh42iKENAcUF4a8Yfm73d7ZKdbUpQfzhb%2Fq2nMHblLGzlVybTcHitsxTlkDS%2FmmRhQme0RlFzgpcTIX6EZ38jrWP2ysM%2FNI47Bu%2BlA7T4AkUj9busoneKuX5udVNeDLbaYDincF1OPRyjVcwBzrhj6VBggubNTP5FDCCDBotw9WVnr9rxSnEeA6QuYsegdPaHL9fu2XktQ&X-Amz-Signature=94f75a256acff503c1dd6fa682af5690b1ad387f15dd32b6de2b3b2e0f92b7f2&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
