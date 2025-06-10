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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3VH4HM5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK%2BpR%2FJUvAZ9Xjr%2FFk1zUJQ%2F5L5dK5GYw%2F0E0vErKQcAiAfPeMfJAyvc2oGAxK5OaD4zcQAKlSUy5g3qgTfE8xC9yqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9HeGLahUmgURy9qKtwD9b6WKedREBZJqtaBfQ%2FFdfrbKniRKm3Jk9hsedDH8e7AocjhtZNxM0928tMbVeiLfvIZv8xbn17crQri3G8YHKtIXJXNZ5ABx%2BlSimBxMLac9ZNF9QFBJpKGBlzlBPgUbAFLdqReQgDo24zNm4KzP9VSemhCq9cN8Bt3hMvyc7MkhQH2qnj8Ujbr4L3fYSg9Ld9XSo8Bry%2F8j2TniB2fGSqkhbiAHste4ojJkMhZhxbFhqdzD4y5DyqbMqdEZzca1zhm6oCrub8BuW0opf0GH11uROauNPtVZobi3CUAd%2FfnnYBJ3H9sTuDlqtbjX3hhJSvoQZMiAOczbArz%2FnpPFZx3KN69fELQtH0lnT49RjW2cuOqsMOvAoP%2FhZ%2FYo8typB8OpYwsOGD1I324qxKMZ6rZSJRfmLdF8B6xPhaTQzFEiDFgduWsUzuK7Lx3R%2FJKXi8gfPc0hSM7vQRnREyT1xCvFrYND9psVipxPyrPzbJK8YdL8kMlpXCl3XARQhzi7Qaj1j0wQ1s%2Fuxn3%2FgYVm8P1yMhc2g20sCxoXtSl2z06EyRIoHjyHD8RTQPNsRnD6Yawwuwo6%2B%2Fr2eT9bFVs2PcgNobfENvaZY70z5iTso3lnahRM%2F9LFZ1lZwkw8tWewgY6pgHGRUmalRk0ME2h8Sw59KxoIbmkMcRpkDAQ%2BDsIPRWfdI1MW7TqoAMNJjC%2FtkHT6JJGSvVBetlIYebCMlkN0TOA9faoDv0o1AvU3VjvRKtAIDW%2FJ8pUgoVj3xjOdgY68zsLDBGotxI0yU2MTAYH96T9jKQXMsx4LFVXxp6xYTGP4tqiEodhgkmvR8gOPNYgXAplR0%2BHio%2BB98PC%2B1OwnkLKYY9jCIFy&X-Amz-Signature=200519dce1e8da2f250ad4671f09ceda31cc5a36898a049b151ef466d47a1587&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3VH4HM5%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T051000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICK%2BpR%2FJUvAZ9Xjr%2FFk1zUJQ%2F5L5dK5GYw%2F0E0vErKQcAiAfPeMfJAyvc2oGAxK5OaD4zcQAKlSUy5g3qgTfE8xC9yqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMq9HeGLahUmgURy9qKtwD9b6WKedREBZJqtaBfQ%2FFdfrbKniRKm3Jk9hsedDH8e7AocjhtZNxM0928tMbVeiLfvIZv8xbn17crQri3G8YHKtIXJXNZ5ABx%2BlSimBxMLac9ZNF9QFBJpKGBlzlBPgUbAFLdqReQgDo24zNm4KzP9VSemhCq9cN8Bt3hMvyc7MkhQH2qnj8Ujbr4L3fYSg9Ld9XSo8Bry%2F8j2TniB2fGSqkhbiAHste4ojJkMhZhxbFhqdzD4y5DyqbMqdEZzca1zhm6oCrub8BuW0opf0GH11uROauNPtVZobi3CUAd%2FfnnYBJ3H9sTuDlqtbjX3hhJSvoQZMiAOczbArz%2FnpPFZx3KN69fELQtH0lnT49RjW2cuOqsMOvAoP%2FhZ%2FYo8typB8OpYwsOGD1I324qxKMZ6rZSJRfmLdF8B6xPhaTQzFEiDFgduWsUzuK7Lx3R%2FJKXi8gfPc0hSM7vQRnREyT1xCvFrYND9psVipxPyrPzbJK8YdL8kMlpXCl3XARQhzi7Qaj1j0wQ1s%2Fuxn3%2FgYVm8P1yMhc2g20sCxoXtSl2z06EyRIoHjyHD8RTQPNsRnD6Yawwuwo6%2B%2Fr2eT9bFVs2PcgNobfENvaZY70z5iTso3lnahRM%2F9LFZ1lZwkw8tWewgY6pgHGRUmalRk0ME2h8Sw59KxoIbmkMcRpkDAQ%2BDsIPRWfdI1MW7TqoAMNJjC%2FtkHT6JJGSvVBetlIYebCMlkN0TOA9faoDv0o1AvU3VjvRKtAIDW%2FJ8pUgoVj3xjOdgY68zsLDBGotxI0yU2MTAYH96T9jKQXMsx4LFVXxp6xYTGP4tqiEodhgkmvR8gOPNYgXAplR0%2BHio%2BB98PC%2B1OwnkLKYY9jCIFy&X-Amz-Signature=27004e073884acc8d59c74c13580e34c0254927d469b26d258d0ab02810656c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
