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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VGJFLGF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe%2BuOaXINEuNu3v5YRwuGnVsBnTq5sxokq1cWYmYxFBAiAa6Rc9l4ydD7orJzZnoWlyPdnDoLCPjPkKjHc9N2N%2FoSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMDIlCsEvCeK8xkCkDKtwDG1BN%2FRwHREC6OOoGZBErF19QMAHIiDq6yNtURzut1QGE4rNJRN2zOlO88ZGiQa%2FpUEPx7Q1kW2L0M1RHQs3lULXDhvEX5ktmPPRKmu42Y1pvXPfgS9VbyNLr0tWovUIKsFJeT3cdjt83zNCDPPz%2B%2B9sXxe7dF6IZpvCYufIhNxlRuGyoiNWFMjJryrJzIvxl9oXeCFiB%2FO%2BcgaZkCWuiXH82SgZ56W1LaRRmCmFVKDN5UAuSzhyMEOYTMGg82AU%2FtkBhfalZTPXR87%2BeDh3jAYs0oRPFC5o6XvHkPSCZX%2BO4dOgvjWe%2FMzvWEonLyK%2FODZ3g%2BGPIdAvFf7mJ9UlOi06pZ3%2FTDLmAM6vbns%2BZV7X5XEhzhObHAio2co4%2FNXWcYB%2B0GomtROkpy%2FtYlDeRmSoxlxn9SbKAr%2FyDo%2FTgdxndNVww%2Fp%2FW4Hm2qqFYl99zqhwyFx%2BTG7YacHZuB2rVro5xFELs2wN5ILDfZknDder5N9%2FXYSzYbjwkYtOZKRok2LDt6fj7BZ2%2Bsz81ivyFf5CyDsa1W2XMJShi6B5bKTLlztX1zKenXRqKYsA9JlTae6f8PurhLOE54wkaJZTFzTCuGORPY4AYe8G2zKN9UzEmUy6cVoKLHy8KxBUw6aP7wgY6pgFmQC8fcy2%2FEdzaotHxULGBL7SNDyBU0GVs42rxS7pOXqZ7%2B1NUNSiEypICq%2Fru5lc6%2FMrdzzv44tXnDDHXmUfvewn1rRP%2BshDfcPcPKn4SYVWsAHSs1oH4ZL%2Fpi99i6a66Vhe%2FkYhBxhslGYFz5PIVyUGxk0%2F3MCqZFwdUohJD7u4odW9m5PT7cVYd2acnnqeui5ROgGdozqdCn33w0nyCXKN%2BZCCG&X-Amz-Signature=4cefacb56d8dd6aaff452b14edcecab95581b682e63c003edd882ca314e80957&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VGJFLGF%2F20250627%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250627T181200Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICe%2BuOaXINEuNu3v5YRwuGnVsBnTq5sxokq1cWYmYxFBAiAa6Rc9l4ydD7orJzZnoWlyPdnDoLCPjPkKjHc9N2N%2FoSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMDIlCsEvCeK8xkCkDKtwDG1BN%2FRwHREC6OOoGZBErF19QMAHIiDq6yNtURzut1QGE4rNJRN2zOlO88ZGiQa%2FpUEPx7Q1kW2L0M1RHQs3lULXDhvEX5ktmPPRKmu42Y1pvXPfgS9VbyNLr0tWovUIKsFJeT3cdjt83zNCDPPz%2B%2B9sXxe7dF6IZpvCYufIhNxlRuGyoiNWFMjJryrJzIvxl9oXeCFiB%2FO%2BcgaZkCWuiXH82SgZ56W1LaRRmCmFVKDN5UAuSzhyMEOYTMGg82AU%2FtkBhfalZTPXR87%2BeDh3jAYs0oRPFC5o6XvHkPSCZX%2BO4dOgvjWe%2FMzvWEonLyK%2FODZ3g%2BGPIdAvFf7mJ9UlOi06pZ3%2FTDLmAM6vbns%2BZV7X5XEhzhObHAio2co4%2FNXWcYB%2B0GomtROkpy%2FtYlDeRmSoxlxn9SbKAr%2FyDo%2FTgdxndNVww%2Fp%2FW4Hm2qqFYl99zqhwyFx%2BTG7YacHZuB2rVro5xFELs2wN5ILDfZknDder5N9%2FXYSzYbjwkYtOZKRok2LDt6fj7BZ2%2Bsz81ivyFf5CyDsa1W2XMJShi6B5bKTLlztX1zKenXRqKYsA9JlTae6f8PurhLOE54wkaJZTFzTCuGORPY4AYe8G2zKN9UzEmUy6cVoKLHy8KxBUw6aP7wgY6pgFmQC8fcy2%2FEdzaotHxULGBL7SNDyBU0GVs42rxS7pOXqZ7%2B1NUNSiEypICq%2Fru5lc6%2FMrdzzv44tXnDDHXmUfvewn1rRP%2BshDfcPcPKn4SYVWsAHSs1oH4ZL%2Fpi99i6a66Vhe%2FkYhBxhslGYFz5PIVyUGxk0%2F3MCqZFwdUohJD7u4odW9m5PT7cVYd2acnnqeui5ROgGdozqdCn33w0nyCXKN%2BZCCG&X-Amz-Signature=d5b92a1f416754113329206d125027ac2ed37b721cd528ff29a5b360c510fcab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
