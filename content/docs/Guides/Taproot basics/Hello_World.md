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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVAVSV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIDj0NHGGVY4Ki%2FZypGggOxEQTR9KsVtuwyqKpyHAE1SrAiAN0HiR9rpG5SAK%2FcPb7B7Ff8bIX2u%2F4cinyrKSraTMfir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMs1tmYSgiYdUTRImiKtwDrwTpU05thMf768k%2BkhF5D0r9tdGgk%2FvCi3%2FPfcKldDXSufEAz6SMshXnasBywlw0bkrM6GPTc2APIEDbMrUANn9ehJy86iy9yzPBuSheFXStFn3bd2e6%2BUztqeedgPbBCbVlNIRCk8IHCIQclTcznh7D3YQ9qNQndBfArnSdrYPcpw8VVHBHC7JSBwte3V5Rrg7mQhtFsWDKks7e9YCoZcKRbCo9xC39af3IsYw8xQ99Wc7nUko%2BGE01HWP%2FcDX0oiwnAWqj2h1cZ%2BXfm1grgYQUlI011nPURWMaWbn75r%2FWezfQ2zdbMefBD9tVy%2B2JYSFV0QParkf2W4vIXWREFr3GcSNUJLvkq%2BmeCltMclgQitYPjl2XR8jawwQ%2BFo1yFcp0R5kqd0AZ%2B%2BQe50720pirqfF%2F7U3SdJNcTcB%2F3Go8ilqkoSzUESe8iFPKK6lSqO5MLJ%2BZXirrdsOP4ILXCwrWQolmFy%2F7Y%2FPE0lMpWMd%2BahsjnrrowlaBLkZ3rMi%2FKAEkYalNJ3SSfY7IJnw6xAG8wOKisW7oGDbBJ5%2BMcumGw1gKaGEps5zgo4hFaR2%2Bo5%2BPMWEOEQDVZyUgLhB9YkbqUMfkTOJXsNLx6PhxAhh2xWZO6o0BMb0otb4wmrPzwgY6pgGWnUkeoYgR%2BZRyGx%2Fe%2Fo%2B5Trt5hHZM2JKkKP2NbmSaqsNWoEj2J3B%2BwbA0Rf8ie1gZBFb5jVQzRjnPQC8y0V5SJxXAllwY7UEX%2BFDzYKSg%2BT%2FNiWVXEYcztkXnrpOh7cJe6K3cpXAo3dZMTK4FTmDJTUotcl%2Fh72Pumd9uN9jVyRpxds%2FWjxmx3r1LC%2FZFYI6FvAv8d6xMgp9Bd5tRtzlieg4x3Fq4&X-Amz-Signature=cd163d032a0ce2cb048350b6a5794b02103e88cf221830997e7f1c0212d2322c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBXVAVSV%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T071025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF4aCXVzLXdlc3QtMiJGMEQCIDj0NHGGVY4Ki%2FZypGggOxEQTR9KsVtuwyqKpyHAE1SrAiAN0HiR9rpG5SAK%2FcPb7B7Ff8bIX2u%2F4cinyrKSraTMfir%2FAwhXEAAaDDYzNzQyMzE4MzgwNSIMs1tmYSgiYdUTRImiKtwDrwTpU05thMf768k%2BkhF5D0r9tdGgk%2FvCi3%2FPfcKldDXSufEAz6SMshXnasBywlw0bkrM6GPTc2APIEDbMrUANn9ehJy86iy9yzPBuSheFXStFn3bd2e6%2BUztqeedgPbBCbVlNIRCk8IHCIQclTcznh7D3YQ9qNQndBfArnSdrYPcpw8VVHBHC7JSBwte3V5Rrg7mQhtFsWDKks7e9YCoZcKRbCo9xC39af3IsYw8xQ99Wc7nUko%2BGE01HWP%2FcDX0oiwnAWqj2h1cZ%2BXfm1grgYQUlI011nPURWMaWbn75r%2FWezfQ2zdbMefBD9tVy%2B2JYSFV0QParkf2W4vIXWREFr3GcSNUJLvkq%2BmeCltMclgQitYPjl2XR8jawwQ%2BFo1yFcp0R5kqd0AZ%2B%2BQe50720pirqfF%2F7U3SdJNcTcB%2F3Go8ilqkoSzUESe8iFPKK6lSqO5MLJ%2BZXirrdsOP4ILXCwrWQolmFy%2F7Y%2FPE0lMpWMd%2BahsjnrrowlaBLkZ3rMi%2FKAEkYalNJ3SSfY7IJnw6xAG8wOKisW7oGDbBJ5%2BMcumGw1gKaGEps5zgo4hFaR2%2Bo5%2BPMWEOEQDVZyUgLhB9YkbqUMfkTOJXsNLx6PhxAhh2xWZO6o0BMb0otb4wmrPzwgY6pgGWnUkeoYgR%2BZRyGx%2Fe%2Fo%2B5Trt5hHZM2JKkKP2NbmSaqsNWoEj2J3B%2BwbA0Rf8ie1gZBFb5jVQzRjnPQC8y0V5SJxXAllwY7UEX%2BFDzYKSg%2BT%2FNiWVXEYcztkXnrpOh7cJe6K3cpXAo3dZMTK4FTmDJTUotcl%2Fh72Pumd9uN9jVyRpxds%2FWjxmx3r1LC%2FZFYI6FvAv8d6xMgp9Bd5tRtzlieg4x3Fq4&X-Amz-Signature=5d53eb6e6b6e1a17009320a3b796cbc1b997dd20cc8e89e1883ed38a949ecda0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
