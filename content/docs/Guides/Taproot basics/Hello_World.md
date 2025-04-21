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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BFKF3OO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDrXL07K2pOcanqxgzpWb4xf6lhw3pMjpTIcb66w8yIQwIhAJNsVUJ%2F%2BNW1Q5nFBE7cxoKYusVI0%2FmL5CWNGyh5ItGAKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQqMEuIttnKJ8WFQsq3AMrEpWInKBGM7Ft0fcGpkcLffQSX0752hKfdgL1mGgCxtwR9bKtjZmT1n1O2twMwBoBPjWMafRl2nKrd%2FWrVDpzxkUPLZCUcwQGr27bgKfNZ3wjSPxrGk8cpnnTBRqdXoo5rTuuCcq8W4vrcSeLTWEfyGUb7sRtUf5Uj00UQhdTpRlsnyYqI3Gxam0BNaw7Pp7XHgidIQ1cXfpQgHU52i0FFjMLFiQUS1091qPNBoAqu7aEI3wnAz%2FIRLeNdRtdLEjpUZaU1FwQ0f%2FAekmeJ6DazEWiBdEpYeZhegfGkK%2BGF7TcciSioapaKa9leV%2BMhRV7kBwqZFR0WNqLDTsgm3dnkPCk0QwF51vLi0a6n%2F0tZWvjr%2FKt41DzoULf5zRyiDgDRdXRuz7s0ztttc3jnZ%2Bq0k48v1hOuFgfeqMGf7y9hQ9yzoSaimbYc36OinN3oqoKWK4uUat30e0kRFi1uNtiqW%2FgWcqbPZexvHn%2FTlhd25u7suRfCg4PyhKMWP%2BgD8kTIGHGOiqKX%2FGuOFIBZAORgjkAWxvNpA6LGCGHUXWQWNq7QmGMO0gFBxETgVg%2FHntNV2QtPmsGB6RE6GPdAPqsLXPvI19l79XoXqo0J5v0aUZhQeI9FfTU1%2Fn6JjCduZrABjqkAYOT9ZGGdwWQb%2B5uNfHsbBN6VHvHS2enEzFwXESA7C%2FJMp%2FcUEvC5h73m3MXZVKKap7sudUq7M3eEfbVqotqiApC3VjEYpfQcc9916g42lgcGJPADLTWQGVBG6b4BCoFJLY%2FjnzhY09o7nPhE6NfyZ29wKDsKRVFRiIUs0wWDtenZIsdULkELdXj%2FKwb0%2BX%2Bs4Nk0yqiQVw4ShsPJr5mFYT41mEz&X-Amz-Signature=edfbf11a0f9e78d5da3b69f92d6d6f3451796cb5ca0b8a7492c056eba78b610a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665BFKF3OO%2F20250421%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250421T200919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJIMEYCIQDrXL07K2pOcanqxgzpWb4xf6lhw3pMjpTIcb66w8yIQwIhAJNsVUJ%2F%2BNW1Q5nFBE7cxoKYusVI0%2FmL5CWNGyh5ItGAKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzQqMEuIttnKJ8WFQsq3AMrEpWInKBGM7Ft0fcGpkcLffQSX0752hKfdgL1mGgCxtwR9bKtjZmT1n1O2twMwBoBPjWMafRl2nKrd%2FWrVDpzxkUPLZCUcwQGr27bgKfNZ3wjSPxrGk8cpnnTBRqdXoo5rTuuCcq8W4vrcSeLTWEfyGUb7sRtUf5Uj00UQhdTpRlsnyYqI3Gxam0BNaw7Pp7XHgidIQ1cXfpQgHU52i0FFjMLFiQUS1091qPNBoAqu7aEI3wnAz%2FIRLeNdRtdLEjpUZaU1FwQ0f%2FAekmeJ6DazEWiBdEpYeZhegfGkK%2BGF7TcciSioapaKa9leV%2BMhRV7kBwqZFR0WNqLDTsgm3dnkPCk0QwF51vLi0a6n%2F0tZWvjr%2FKt41DzoULf5zRyiDgDRdXRuz7s0ztttc3jnZ%2Bq0k48v1hOuFgfeqMGf7y9hQ9yzoSaimbYc36OinN3oqoKWK4uUat30e0kRFi1uNtiqW%2FgWcqbPZexvHn%2FTlhd25u7suRfCg4PyhKMWP%2BgD8kTIGHGOiqKX%2FGuOFIBZAORgjkAWxvNpA6LGCGHUXWQWNq7QmGMO0gFBxETgVg%2FHntNV2QtPmsGB6RE6GPdAPqsLXPvI19l79XoXqo0J5v0aUZhQeI9FfTU1%2Fn6JjCduZrABjqkAYOT9ZGGdwWQb%2B5uNfHsbBN6VHvHS2enEzFwXESA7C%2FJMp%2FcUEvC5h73m3MXZVKKap7sudUq7M3eEfbVqotqiApC3VjEYpfQcc9916g42lgcGJPADLTWQGVBG6b4BCoFJLY%2FjnzhY09o7nPhE6NfyZ29wKDsKRVFRiIUs0wWDtenZIsdULkELdXj%2FKwb0%2BX%2Bs4Nk0yqiQVw4ShsPJr5mFYT41mEz&X-Amz-Signature=2473563c81d6bd6337b7cbc5acf8fa0a5bd0c05b23d320059e966f92be6221dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
