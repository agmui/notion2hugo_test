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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAQ5L6EC%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDTv1dGW5eQjpWAyAhA7P7nSG9HSCWeeH2S140fPjfnywIhAM2hYU6anRYlat1rpr6gKtAYqzFQdoPEqyuEphmSu31kKv8DCGwQABoMNjM3NDIzMTgzODA1IgydRGmrnG%2BvQ4cyyrMq3APoYNQqbWXRxiN0XZIK9Lo77VL5%2Bo0MjGEAKVg82kw4o5vGwrWtWzfZdA6B8nLb2XxexZcAFwALpmgN0DsHqTiP3wlTxhEszGomLjbtomkt2F9CCKAlBcXIUeq2HJ0nEyMnXclpTU%2FuX7CAOLocQ0P8Cm0Gx4fhvd3cZsbgRsvVkNy4zMfnXj6o1pC2rdzUIH1gsROccIF0arXQGImeFZXvLsPlWwqEpL%2B0j45a9nfOlhbPZbtOD0a7eaIuf%2FyZ3ON1JrkccDTjEhRWt%2FRmUn2ANeT53rdSfYyR9QfHBS9egHNvUThks%2FAm%2FXFl0bfqjagzhlZlCBnSxf3zBDu98PPw1eKaszn%2FIal80feDdUFCQeuLbUSpm9%2FVgp35xiQY1Yg%2Br6W%2F7bu8ScYU1FIs0dR3rdyyqTSjnQxaxCYhoFroN2pn9OkDrQDrfASCdmclhIPtOnoE82T%2FDyD1CaahYLTNXKjmt3ggMwjvUKbbrKLgivWaCYAeBHmDxhIopvEbU996PIkJR5BxSaimqa27gd%2FdTzA6p%2Fs84Pe30DK%2FstYn7CseSUdaF42nChKdLVDpy020awsWG%2F%2BEtlRgWictn30sn2WQYxAK1VAxU8fA1H81T70%2BvFRDWBWvqah%2BiTCH3ui%2BBjqkAVgqYhd8%2BWAszqJPAO19%2BnA%2FE9EeT9bOeXTp5Ln0b4faQiCrRAF69Qu6yn%2B%2BF6LIn1eGthdDL611HF%2FsZsiaSFdXeChv8p888LmOdMQEi6iXrcVedzMYcgLt1arKGFytSiqSXPWSD9eDJLEHm0cIagJMuxtGHSA50wGvG6BAlE2flo2IXpnUfeAPhjQVeRW14tgaVtvhBLKJuAkWtjPF606d%2BpLc&X-Amz-Signature=f0f4cba6f40d9864a6dfa71ce58e69dee243376d3afc58fdd04b54e28de3e42f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAQ5L6EC%2F20250319%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250319T032144Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBMaCXVzLXdlc3QtMiJIMEYCIQDTv1dGW5eQjpWAyAhA7P7nSG9HSCWeeH2S140fPjfnywIhAM2hYU6anRYlat1rpr6gKtAYqzFQdoPEqyuEphmSu31kKv8DCGwQABoMNjM3NDIzMTgzODA1IgydRGmrnG%2BvQ4cyyrMq3APoYNQqbWXRxiN0XZIK9Lo77VL5%2Bo0MjGEAKVg82kw4o5vGwrWtWzfZdA6B8nLb2XxexZcAFwALpmgN0DsHqTiP3wlTxhEszGomLjbtomkt2F9CCKAlBcXIUeq2HJ0nEyMnXclpTU%2FuX7CAOLocQ0P8Cm0Gx4fhvd3cZsbgRsvVkNy4zMfnXj6o1pC2rdzUIH1gsROccIF0arXQGImeFZXvLsPlWwqEpL%2B0j45a9nfOlhbPZbtOD0a7eaIuf%2FyZ3ON1JrkccDTjEhRWt%2FRmUn2ANeT53rdSfYyR9QfHBS9egHNvUThks%2FAm%2FXFl0bfqjagzhlZlCBnSxf3zBDu98PPw1eKaszn%2FIal80feDdUFCQeuLbUSpm9%2FVgp35xiQY1Yg%2Br6W%2F7bu8ScYU1FIs0dR3rdyyqTSjnQxaxCYhoFroN2pn9OkDrQDrfASCdmclhIPtOnoE82T%2FDyD1CaahYLTNXKjmt3ggMwjvUKbbrKLgivWaCYAeBHmDxhIopvEbU996PIkJR5BxSaimqa27gd%2FdTzA6p%2Fs84Pe30DK%2FstYn7CseSUdaF42nChKdLVDpy020awsWG%2F%2BEtlRgWictn30sn2WQYxAK1VAxU8fA1H81T70%2BvFRDWBWvqah%2BiTCH3ui%2BBjqkAVgqYhd8%2BWAszqJPAO19%2BnA%2FE9EeT9bOeXTp5Ln0b4faQiCrRAF69Qu6yn%2B%2BF6LIn1eGthdDL611HF%2FsZsiaSFdXeChv8p888LmOdMQEi6iXrcVedzMYcgLt1arKGFytSiqSXPWSD9eDJLEHm0cIagJMuxtGHSA50wGvG6BAlE2flo2IXpnUfeAPhjQVeRW14tgaVtvhBLKJuAkWtjPF606d%2BpLc&X-Amz-Signature=9c0a1a52448228bc6c6e8ae456e6240b8a4f81aa60f7832e00a41f795183621d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
