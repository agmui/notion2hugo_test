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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWYD3UPP%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIAmBfli3KQozQt1wZ0GcdZnVjmPnfDJ0Pn4QmHxyrHyVAiBlEp76lWnLWE8vIMtGB7Pmzn41UdDlCLz0o0VpM8fMWyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxrLatn0HgYe%2FMjJsKtwDLpCV26ZGjWvrAXKhV94s8KQouC2c4oTmMOHBIlR6Dm0IAR%2FtSJgg%2FyqBP5lpaRV06ifRxcwgKxFDEF6u3f%2BlkGsBljyheaucDh5z%2FIp2affUTnP%2Fts%2BQHsrCfweqszxH4qfMghR8%2BcGYIrNQz2hjHMpQuHL%2FmYajpzMAjdOTgwBxuqv%2FrpdnIY6P5UFT2BIuIr3%2F0S87390PI%2B6iEnWyXdmbVfV3w%2Bgu%2FDjqdRiW5YSNnmItK55Emq9m4IaHQZC9Gwuopmrr2gR2L1ixRwTWgwEtdpDH4k2vukmqjnsdRC5563PlBOTya3AASPuEsBb6JjWT2mqjBhyZwdLbNcyVOWlpT5jWM87OOE%2BdCqzzu%2BQ%2BvDc96xFJUw%2BYjjw4iPoDf76M9yo32HLCUTzsTxUYrt782uaxDRs6E6nXyB03qYy%2Bsuf5KYUMKUza0Rupebc4g%2FQqhiCcblHVEyGsximGDzZK%2BUpVt7ZFydHwcNVZnhfRWJuPv8LvZwnMY7uIjvPNct%2FlXfwut36OGVV2rWaKc9lUZAfeaFNbFaR4W7vmFEsk8%2Fa7MT72LiIkzBADei8g8%2FjTTO1R2MJSDvfAdSuZDyzloFspFul94bWNCLg9Z9Vppolx5e%2Bt40j6SJYwgsXIwAY6pgG4H81rA7l6KqQ0h7QW8MPkfCe0J%2B3BkXX5DOKH8DiowyNhUUWVMutiYaO0GgVKSsXfXnDx7ZV6f6Fgk3p238fUNrojWBa4hkuXxyjXRpE0jqL8A8LoaYyQZLSAYOlnJkrwpr9bNXVlKVUcmr86CP3AI7tukkxldr%2F4Do3kAEJ4FT%2FXP%2FUcBwRb8tgFqc%2BpwUu3oh8tAxn6vUVvsB7pteiet%2BcKq5dm&X-Amz-Signature=cb836c3e607012e2bc5da259a3078ed5ae9870d76d4db8f6e32e05b8f4fe62c5&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWYD3UPP%2F20250430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250430T140820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEA0aCXVzLXdlc3QtMiJGMEQCIAmBfli3KQozQt1wZ0GcdZnVjmPnfDJ0Pn4QmHxyrHyVAiBlEp76lWnLWE8vIMtGB7Pmzn41UdDlCLz0o0VpM8fMWyqIBAim%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMxrLatn0HgYe%2FMjJsKtwDLpCV26ZGjWvrAXKhV94s8KQouC2c4oTmMOHBIlR6Dm0IAR%2FtSJgg%2FyqBP5lpaRV06ifRxcwgKxFDEF6u3f%2BlkGsBljyheaucDh5z%2FIp2affUTnP%2Fts%2BQHsrCfweqszxH4qfMghR8%2BcGYIrNQz2hjHMpQuHL%2FmYajpzMAjdOTgwBxuqv%2FrpdnIY6P5UFT2BIuIr3%2F0S87390PI%2B6iEnWyXdmbVfV3w%2Bgu%2FDjqdRiW5YSNnmItK55Emq9m4IaHQZC9Gwuopmrr2gR2L1ixRwTWgwEtdpDH4k2vukmqjnsdRC5563PlBOTya3AASPuEsBb6JjWT2mqjBhyZwdLbNcyVOWlpT5jWM87OOE%2BdCqzzu%2BQ%2BvDc96xFJUw%2BYjjw4iPoDf76M9yo32HLCUTzsTxUYrt782uaxDRs6E6nXyB03qYy%2Bsuf5KYUMKUza0Rupebc4g%2FQqhiCcblHVEyGsximGDzZK%2BUpVt7ZFydHwcNVZnhfRWJuPv8LvZwnMY7uIjvPNct%2FlXfwut36OGVV2rWaKc9lUZAfeaFNbFaR4W7vmFEsk8%2Fa7MT72LiIkzBADei8g8%2FjTTO1R2MJSDvfAdSuZDyzloFspFul94bWNCLg9Z9Vppolx5e%2Bt40j6SJYwgsXIwAY6pgG4H81rA7l6KqQ0h7QW8MPkfCe0J%2B3BkXX5DOKH8DiowyNhUUWVMutiYaO0GgVKSsXfXnDx7ZV6f6Fgk3p238fUNrojWBa4hkuXxyjXRpE0jqL8A8LoaYyQZLSAYOlnJkrwpr9bNXVlKVUcmr86CP3AI7tukkxldr%2F4Do3kAEJ4FT%2FXP%2FUcBwRb8tgFqc%2BpwUu3oh8tAxn6vUVvsB7pteiet%2BcKq5dm&X-Amz-Signature=46dc87e386fdce461a07ae05d586fb1c34a289b7c481bee893ba2a816b37800a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
