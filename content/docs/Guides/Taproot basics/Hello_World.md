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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAOR3RUI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxV7Q6xkQd1At5d3Q2RBY0LiV07yLEHpxynxik6vNu1AiALpNplYk3Rms%2BTt6aYToFqZC2upnuWoAehfZFUrnlj8CqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT7o4PY2F02h4OXmaKtwDXeWZBJskYXNDMay597DG%2FcR5bu2WksUV6nADK%2BquPnEdtzt6afigQhHR1GT9h8GRVvn66%2FQUWN1gFJk0aUOxysGVAuJaJqeRnwkuL1txAEbRaqIlLXcWe8k9R95wDUcDbjERp2fw9spOueM%2BgcSkzXz3X9Iiu2uJvhVrSy0OHF2PGi5MrfEjAplIv9ZnykNwPpGkdZgnIj3c0Bihfcx5dF2SfhAls3gVOimSdQDBjZJ64LSoj5YszP40IdmPbX40m%2B0RBrqAuTmtTdK99JkGRBI52EdhAVDEz9kvqQuI4y38NOgZMUEv5MQhoMq7X79zFMaErysF%2BxG09vQjxcLjPRs0BfNd%2B%2FqF3gv2INh%2FZ2qMzkwrzrd55ANRQhtaLGtjTWpwlXyLAa5gfWO9ksWdqLOTHFwYLAAK48BNW4uwfKVRkuRzxKj8u5B5WdxGTkw%2FZx0NtkyYDXp4qkP%2FI1ddQH6bn0vKBIE58AqpP4Qvk5F%2Bdgu9GsAL2pT1F%2FW4Qo61P2fyU0raLascgy2DuoEK%2BC5aFGSZVhi6KuqOMVjA3QgofIELtUFLo0UNiy7wqR54MIHTpP%2BRapX6pI8sJt6DXjmcThouScCLVo92hORGE%2B4TJlydAr0JB9FcAQEwnOD2wAY6pgHdWAl7Row50bHzHOoUCL4XWXXKmTocsXJ5G3uQsma0ZiyQrYaIzLlrs%2BnasDZGQNTynviUElrJhI%2B6Lk6%2BNRnby4%2BAAMY%2Bd6jbkB75fCZ1O36W26gSEBOAL1VGorqz6545tv1Ohq1FXq6mEePewkIFzW5EeBv8mlMUyDmZqneLTFf3hHMDkEQeHwmqhixXS%2ByqpnJ87rl2WxYLquuXj6ZX5el6uUWn&X-Amz-Signature=1028fcdac22e58c3d480ed1307ac1a1cafee3243c3d7b6adc5deb1b321f0c42a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WAOR3RUI%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T081157Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxV7Q6xkQd1At5d3Q2RBY0LiV07yLEHpxynxik6vNu1AiALpNplYk3Rms%2BTt6aYToFqZC2upnuWoAehfZFUrnlj8CqIBAiJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMT7o4PY2F02h4OXmaKtwDXeWZBJskYXNDMay597DG%2FcR5bu2WksUV6nADK%2BquPnEdtzt6afigQhHR1GT9h8GRVvn66%2FQUWN1gFJk0aUOxysGVAuJaJqeRnwkuL1txAEbRaqIlLXcWe8k9R95wDUcDbjERp2fw9spOueM%2BgcSkzXz3X9Iiu2uJvhVrSy0OHF2PGi5MrfEjAplIv9ZnykNwPpGkdZgnIj3c0Bihfcx5dF2SfhAls3gVOimSdQDBjZJ64LSoj5YszP40IdmPbX40m%2B0RBrqAuTmtTdK99JkGRBI52EdhAVDEz9kvqQuI4y38NOgZMUEv5MQhoMq7X79zFMaErysF%2BxG09vQjxcLjPRs0BfNd%2B%2FqF3gv2INh%2FZ2qMzkwrzrd55ANRQhtaLGtjTWpwlXyLAa5gfWO9ksWdqLOTHFwYLAAK48BNW4uwfKVRkuRzxKj8u5B5WdxGTkw%2FZx0NtkyYDXp4qkP%2FI1ddQH6bn0vKBIE58AqpP4Qvk5F%2Bdgu9GsAL2pT1F%2FW4Qo61P2fyU0raLascgy2DuoEK%2BC5aFGSZVhi6KuqOMVjA3QgofIELtUFLo0UNiy7wqR54MIHTpP%2BRapX6pI8sJt6DXjmcThouScCLVo92hORGE%2B4TJlydAr0JB9FcAQEwnOD2wAY6pgHdWAl7Row50bHzHOoUCL4XWXXKmTocsXJ5G3uQsma0ZiyQrYaIzLlrs%2BnasDZGQNTynviUElrJhI%2B6Lk6%2BNRnby4%2BAAMY%2Bd6jbkB75fCZ1O36W26gSEBOAL1VGorqz6545tv1Ohq1FXq6mEePewkIFzW5EeBv8mlMUyDmZqneLTFf3hHMDkEQeHwmqhixXS%2ByqpnJ87rl2WxYLquuXj6ZX5el6uUWn&X-Amz-Signature=78f6655e03332ad94f21f3622c0a9fa7a6e815c2db58364abb54dd812086634c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
