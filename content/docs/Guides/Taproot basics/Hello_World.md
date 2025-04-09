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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TVSPPOB%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIE%2F9dDKVBdNfEhsfmyTqaJGomLckNVq0577H87r9PCp6AiAnrQJxV70G6g4wXT7ZyDMfabP6rc5QUIoQffjIazC%2BoCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkqPcn3jwA926SeUNKtwDV8iU566px8Nq5dkcaazBIyo4uLamCpmzaeL%2B%2BwYXMNe77ofc552GDKDvkYfAPiw5yusIrSmeb9fhuLr8%2Fkjbu54QGUatzdsVQZxFqCS4%2BDAqIf65MZGV6lRnZh90dA0gK2%2FaLvprhIKJzoU%2BQ7lBCQqW8fWONxU44aFIsxlRUQykpwMBrOVZXGqoohm5ARdqNqJYPgOo0ANV00wB7SBnkYAcY0hbQFDkJO4Vhumn%2B%2BTYVFcp3kRhYoqBfvSobzmQHflDTAhep3cuiuWudaBkgyCULRRHBhH%2FuIol%2FYWFneH84BHyc3lW1qaQZm8iiYvfPwM3dgyyJW%2BMjn11whVFqHkb18SBs0hgAuhVhZRm8HdPMiJOzNo4sd70ovatyh88Zz8yZinTx753D39FmmIDFgxj38v4hN8coz3sZv%2BtjMjy%2FSgvoxzPzlgjm2sMZldrsFNcDI7%2Bu4AKXHB1yql%2B3bD989cXA8HDeW%2FzwY7RIJBvawJVl761tHulDoaMLP5hf3mA4MIShrswl07W8h4pQp2nK1MisETMNMweZCyDO40yzm2ruBD9yznSjpDp0M1jhlFY2rw97qsmLFV2o0noVtkjrUEq136GS1Y85BV79XDNDXGqzp1qoWdAX3Uw1tbXvwY6pgFhylU0Cn76QhSU43abrRXM%2BLORXm1%2F8kZW6%2FW4W9eCukbXAkOc0VVktifAv%2BOBI54LtDtnLxCmLlx3fuqAwPoFb3eNNX%2F3dqVJhB%2FwvZbXrhWJ9lAPtguTLYhe7aQxul5YdFBG3VAYV7cQIRdzAC6cl7M2ZMSJvkyuR8bApNswXSozJZ4WZlVbtJ7VOXosrCe%2BVSbX5QQ1roa1z3B%2Fj4rk7MMRiMBG&X-Amz-Signature=fe9c94a1a43a70af8c3f9df7fd4ac86dec291e693bf548ccf7b903ea7bc0c3aa&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TVSPPOB%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T041027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAwaCXVzLXdlc3QtMiJGMEQCIE%2F9dDKVBdNfEhsfmyTqaJGomLckNVq0577H87r9PCp6AiAnrQJxV70G6g4wXT7ZyDMfabP6rc5QUIoQffjIazC%2BoCqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMkqPcn3jwA926SeUNKtwDV8iU566px8Nq5dkcaazBIyo4uLamCpmzaeL%2B%2BwYXMNe77ofc552GDKDvkYfAPiw5yusIrSmeb9fhuLr8%2Fkjbu54QGUatzdsVQZxFqCS4%2BDAqIf65MZGV6lRnZh90dA0gK2%2FaLvprhIKJzoU%2BQ7lBCQqW8fWONxU44aFIsxlRUQykpwMBrOVZXGqoohm5ARdqNqJYPgOo0ANV00wB7SBnkYAcY0hbQFDkJO4Vhumn%2B%2BTYVFcp3kRhYoqBfvSobzmQHflDTAhep3cuiuWudaBkgyCULRRHBhH%2FuIol%2FYWFneH84BHyc3lW1qaQZm8iiYvfPwM3dgyyJW%2BMjn11whVFqHkb18SBs0hgAuhVhZRm8HdPMiJOzNo4sd70ovatyh88Zz8yZinTx753D39FmmIDFgxj38v4hN8coz3sZv%2BtjMjy%2FSgvoxzPzlgjm2sMZldrsFNcDI7%2Bu4AKXHB1yql%2B3bD989cXA8HDeW%2FzwY7RIJBvawJVl761tHulDoaMLP5hf3mA4MIShrswl07W8h4pQp2nK1MisETMNMweZCyDO40yzm2ruBD9yznSjpDp0M1jhlFY2rw97qsmLFV2o0noVtkjrUEq136GS1Y85BV79XDNDXGqzp1qoWdAX3Uw1tbXvwY6pgFhylU0Cn76QhSU43abrRXM%2BLORXm1%2F8kZW6%2FW4W9eCukbXAkOc0VVktifAv%2BOBI54LtDtnLxCmLlx3fuqAwPoFb3eNNX%2F3dqVJhB%2FwvZbXrhWJ9lAPtguTLYhe7aQxul5YdFBG3VAYV7cQIRdzAC6cl7M2ZMSJvkyuR8bApNswXSozJZ4WZlVbtJ7VOXosrCe%2BVSbX5QQ1roa1z3B%2Fj4rk7MMRiMBG&X-Amz-Signature=97569460b9521738704f757277ae727cf734b19e9dc3286a9a46a72e6b2d579c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
