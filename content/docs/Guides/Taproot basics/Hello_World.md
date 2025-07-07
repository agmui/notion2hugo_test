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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666252ZYXC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBTVX5DhgvGaxn929%2F8P%2BTn9XttFwtASzZxZCs52s7AeAiAoleOIrgvrfQpRxEsbQQRg5tNJmQdreNQUx3eC2klRRCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMEDC7V21qufxxy8%2F2KtwDndi22OIvUxV15N5a6wqrmP8ZTVF1Jbi3b2xgaT3Agxqdh9KsN4AZNSN9nXWdo%2FIxAXOKSJDhzwdwmgL2CJU%2BfvOW6EnxLcs6Pkvpojrf6LIsjoAuvJnULho%2B9vD30Xr%2F2v2QDLi6o1bTN2g8K%2FVPBLOzhDrivXydpi2yMByG1sdpR29RATwi6Y6I27gmTsYmzssQw%2Fw2ynzI8ioTyJ%2B1aiVNoCWG8TNex4eZeHNycNlgCEuCnsozrHj%2B4ZrF8pDeudYMhJZa0YrL8pHnjooIr%2FQTAFk8Yhqt2Qq6Lji1fbVExoPdX83Xy27uRlQtzGqEw1xaQxKLvrSNjEbcNp9owGYrIKOyhDty3Pee6XC%2Fa9iBrpnpjdAy%2Fb8j%2FJvs4lU9%2BXC4wECVime2GcMAyfXHqRYAT4HAvixYW8L6BBp%2BqppeDA%2FW37Ee9fFnhSMgydhRKyry3wxcXKRmzfdN6rN8vKbEfAbs8YcmgWb4N2insCHmJW8zBW%2Fg4TiCn9VelBJGJOamUA1UH%2BlEEFazfVIG%2BcAsS01VdeJ2uZzyaOmU09xGvJDFqigzlQHEqJG0b0lUPYFNVwS8OI%2Flu2hLhbh%2FM%2B4AGouY57cWhmb0q5RLwDh3aCjYWzfIF%2FPpF1Mw0YuvwwY6pgFrZ3KGYCe85iQYkurE489rJVhYmUQJG1X5jNTn4PrpGH%2BAuUW1%2BBcdlxsltwEqlgxIUjOsRQ1vQlJ5cMco%2Fxxn4sjxBixpjvO%2BocE%2FZFTVoHooV9Dk1i%2BjrcKfmDPJ8UQCOUxTAsgjB2Te%2FkY8wchVOo7x9ZE48gznU54vojZSqgKCA9ybow02k8qOylNQy6uT27tsU8En0g36vaODqnvIG56ROvI9&X-Amz-Signature=cd85560483f4fffcc51f2042c24b013e4a1fde9911d9818b218c2829a41bfca3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666252ZYXC%2F20250707%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250707T132559Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJGMEQCIBTVX5DhgvGaxn929%2F8P%2BTn9XttFwtASzZxZCs52s7AeAiAoleOIrgvrfQpRxEsbQQRg5tNJmQdreNQUx3eC2klRRCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMEDC7V21qufxxy8%2F2KtwDndi22OIvUxV15N5a6wqrmP8ZTVF1Jbi3b2xgaT3Agxqdh9KsN4AZNSN9nXWdo%2FIxAXOKSJDhzwdwmgL2CJU%2BfvOW6EnxLcs6Pkvpojrf6LIsjoAuvJnULho%2B9vD30Xr%2F2v2QDLi6o1bTN2g8K%2FVPBLOzhDrivXydpi2yMByG1sdpR29RATwi6Y6I27gmTsYmzssQw%2Fw2ynzI8ioTyJ%2B1aiVNoCWG8TNex4eZeHNycNlgCEuCnsozrHj%2B4ZrF8pDeudYMhJZa0YrL8pHnjooIr%2FQTAFk8Yhqt2Qq6Lji1fbVExoPdX83Xy27uRlQtzGqEw1xaQxKLvrSNjEbcNp9owGYrIKOyhDty3Pee6XC%2Fa9iBrpnpjdAy%2Fb8j%2FJvs4lU9%2BXC4wECVime2GcMAyfXHqRYAT4HAvixYW8L6BBp%2BqppeDA%2FW37Ee9fFnhSMgydhRKyry3wxcXKRmzfdN6rN8vKbEfAbs8YcmgWb4N2insCHmJW8zBW%2Fg4TiCn9VelBJGJOamUA1UH%2BlEEFazfVIG%2BcAsS01VdeJ2uZzyaOmU09xGvJDFqigzlQHEqJG0b0lUPYFNVwS8OI%2Flu2hLhbh%2FM%2B4AGouY57cWhmb0q5RLwDh3aCjYWzfIF%2FPpF1Mw0YuvwwY6pgFrZ3KGYCe85iQYkurE489rJVhYmUQJG1X5jNTn4PrpGH%2BAuUW1%2BBcdlxsltwEqlgxIUjOsRQ1vQlJ5cMco%2Fxxn4sjxBixpjvO%2BocE%2FZFTVoHooV9Dk1i%2BjrcKfmDPJ8UQCOUxTAsgjB2Te%2FkY8wchVOo7x9ZE48gznU54vojZSqgKCA9ybow02k8qOylNQy6uT27tsU8En0g36vaODqnvIG56ROvI9&X-Amz-Signature=75f3a973d94e963eeb4f1719673bd44f5e230e73fb1e84f8e583f618751408cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
