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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHUYIBNV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCID6TMN54nuYzuj9TnbfrJ9XkU6ZtcBlrdmAjzibscmxqAiBH6TH%2Fl%2Bt0LI6%2FkrbXHSNDwcAqtcMrrXADz6soGDWuLir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMbrN2peSdMJBwntH1KtwDzz6NambeFWEvY1aSvp3JkJ7vCubW9al%2FLiaG3yMED8YKCL5U%2BfOD4kxA58L0YiLGZsgjdBXUIY5NIaQUvb%2BVaiuQZkUx2JK42E%2BVfyixat0zlH6%2FTQH7iwtVv%2F2sfIqg0blEaNMmUXGEu3danca%2BOawfZzEBydNxfSfOIXvezXnhjZyZAJfyaQWTLtbpCW1ayAT5TUOT1mYkt%2Faruh38HqK5PgWqJzypSHkDfqud8oSG400R45zQYjnraO48EmSoEckVA1vHvoyc6SNayQPe8Rnrbf5HVigVMr5v0F6fGIE6MBYTZ%2BPzZ78NaFaXkFY4qkJk8NljQ%2FfhrMhSaMep1cYwypdQpYbHXvcbGCnGzeD%2FWfdUdFAjboCVoXYNmFSshfZjm2%2FMqUZgoSXgQkFCDHSTcI1zNU2Qyf4ZFhSGK9unmZcJNLh7LvYLEzCHwpVYl77hliswxrA1nhjgd8rkBi8OI053c%2Fkx6rtWzbXwIalDobsHWiU1vGC2aNSfk9BDllf6bm7Qg9H7MqfOkdvekl33pQRPyu2iVNN10b8hFx8whEPLq4I2ZYhBkUrUio387tlWCxgIsjFIo4%2BnyIXeoo7Nr2%2FyLA%2FZ9KLrMOhUvXS2ZF4GzrY9vv34E1swqN6JvQY6pgFtUOdgTJrGgA2eGNJ81%2BOVSSEVkHw%2BxIha0rXg9ZgBAjB2fUID9Rv8EsZbp%2BWhDD3uCjs73uX67k%2FPh962rKBu1j1DYF23yUpgAYmxihG0lwKvnoI66duTC9JtyD934d1fpROEgVvcUNs2b9%2B%2FF85tJ755%2Frp72BsQmA47gxcmlMGwkMedzd6Q30swk7K47pf%2FKiIs3IJOWid%2FHRwZuFpywGeoTEzi&X-Amz-Signature=599a0e599dcd5ec1e1c7e87cfe2c7cf991d8d7b02cdeb50ffec6e20f0c7be6a3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHUYIBNV%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T200827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBwaCXVzLXdlc3QtMiJGMEQCID6TMN54nuYzuj9TnbfrJ9XkU6ZtcBlrdmAjzibscmxqAiBH6TH%2Fl%2Bt0LI6%2FkrbXHSNDwcAqtcMrrXADz6soGDWuLir%2FAwg1EAAaDDYzNzQyMzE4MzgwNSIMbrN2peSdMJBwntH1KtwDzz6NambeFWEvY1aSvp3JkJ7vCubW9al%2FLiaG3yMED8YKCL5U%2BfOD4kxA58L0YiLGZsgjdBXUIY5NIaQUvb%2BVaiuQZkUx2JK42E%2BVfyixat0zlH6%2FTQH7iwtVv%2F2sfIqg0blEaNMmUXGEu3danca%2BOawfZzEBydNxfSfOIXvezXnhjZyZAJfyaQWTLtbpCW1ayAT5TUOT1mYkt%2Faruh38HqK5PgWqJzypSHkDfqud8oSG400R45zQYjnraO48EmSoEckVA1vHvoyc6SNayQPe8Rnrbf5HVigVMr5v0F6fGIE6MBYTZ%2BPzZ78NaFaXkFY4qkJk8NljQ%2FfhrMhSaMep1cYwypdQpYbHXvcbGCnGzeD%2FWfdUdFAjboCVoXYNmFSshfZjm2%2FMqUZgoSXgQkFCDHSTcI1zNU2Qyf4ZFhSGK9unmZcJNLh7LvYLEzCHwpVYl77hliswxrA1nhjgd8rkBi8OI053c%2Fkx6rtWzbXwIalDobsHWiU1vGC2aNSfk9BDllf6bm7Qg9H7MqfOkdvekl33pQRPyu2iVNN10b8hFx8whEPLq4I2ZYhBkUrUio387tlWCxgIsjFIo4%2BnyIXeoo7Nr2%2FyLA%2FZ9KLrMOhUvXS2ZF4GzrY9vv34E1swqN6JvQY6pgFtUOdgTJrGgA2eGNJ81%2BOVSSEVkHw%2BxIha0rXg9ZgBAjB2fUID9Rv8EsZbp%2BWhDD3uCjs73uX67k%2FPh962rKBu1j1DYF23yUpgAYmxihG0lwKvnoI66duTC9JtyD934d1fpROEgVvcUNs2b9%2B%2FF85tJ755%2Frp72BsQmA47gxcmlMGwkMedzd6Q30swk7K47pf%2FKiIs3IJOWid%2FHRwZuFpywGeoTEzi&X-Amz-Signature=c017c0ebc8b471d2373e491e5fb0e560863fccdf6fc5f4c1c783f80e144d83db&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
