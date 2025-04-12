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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W66J3XCL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDeLYEwPRqKjo8p3SjJ4wXQaTiLng9NuZ870wwemx4HvgIgadbfmL26pOjlBiN%2BUJhehDfnQGv%2F3W%2FGy5MS8%2BtshG0qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyAMZwZIlJ%2FYWQOKircA3zjsoPjeUB%2FRLkpVFgxiFPRRxc%2BP8Lg6i7b%2FQqNmA9Ua0HH6ygphXZu34gXt8Hxn%2FCGFcGS5NDG6tLYipSPXKDaFc85ctp6OPwYzB8FviMWTH9XVX39SdHf%2B%2Fk9heDPbibYlWr%2Fp6LhOhiZuKOfOdpY1rwkhw%2FC7kCweCBwd%2FPPrVo3wvsj7PK0peUEH394%2BgVRJnwSTm0R9jMN1pjmDLN473MCdjAwzQR8WOlhpWh46h9DMX24TLYde%2FbC4mvBWUKjRCoLJZB2XyeDnx9OJDU0lPd71reCvoMhr4y3Qj2S8L8bx1a%2BMGKQPntPh3tabgY9yP22a%2BPqenyQUiaAmvZAa6qk2iSeutbRPJzsfo7EM24ZqSnvfBkYzdnbc2dmxjCcSl30zlq2eYtNexD7u1%2FvoJTxo68vjbLbi2ujLr9NyldjUpIpX%2Bkx%2B%2FSxbGVKwDHBm2E1zZGBRCe9YBHEhLJdRebi2HY867zhzrmu0%2FvvlEfSkpmn76aeyCaKEGVfAJSCFkXrakcPnP%2BKWZ3W1uevYowj%2FbspoIuCezOeN8Ib35%2BQCzM2WycwvEIRlVOqbFmWWu7ADKFvoBTdzR64uUICABH%2BsmjrkUhAuQV1AtiEWMbEDh82lww5PE8cMJPU578GOqUBy2JZ8kAjP%2BftLVESlByYzccyWLgecogH24zJiXldeXU5i96wRuvSyIcQsidhtgjGZJe3giWkr%2BsbQAP0xHgLsMfSFxqUzSl3AzxDaQ7eCCOGd%2Bx6uvQNjpIb8uNqcD9v9Y2dGrCfJFansepej3jXs7dkTyNPUyFV5rj42gaxuGPTMC2wxfEtYDmdemU1majS4vGpjHdFmBl52Q2kNPG%2F0WftAAj3&X-Amz-Signature=f0cd199adbd7fd2cf377283e42aa0a6584b41d3df347d5c8f6bd8743d94a29ce&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W66J3XCL%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T050802Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFUaCXVzLXdlc3QtMiJHMEUCIQDeLYEwPRqKjo8p3SjJ4wXQaTiLng9NuZ870wwemx4HvgIgadbfmL26pOjlBiN%2BUJhehDfnQGv%2F3W%2FGy5MS8%2BtshG0qiAQIzf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPyAMZwZIlJ%2FYWQOKircA3zjsoPjeUB%2FRLkpVFgxiFPRRxc%2BP8Lg6i7b%2FQqNmA9Ua0HH6ygphXZu34gXt8Hxn%2FCGFcGS5NDG6tLYipSPXKDaFc85ctp6OPwYzB8FviMWTH9XVX39SdHf%2B%2Fk9heDPbibYlWr%2Fp6LhOhiZuKOfOdpY1rwkhw%2FC7kCweCBwd%2FPPrVo3wvsj7PK0peUEH394%2BgVRJnwSTm0R9jMN1pjmDLN473MCdjAwzQR8WOlhpWh46h9DMX24TLYde%2FbC4mvBWUKjRCoLJZB2XyeDnx9OJDU0lPd71reCvoMhr4y3Qj2S8L8bx1a%2BMGKQPntPh3tabgY9yP22a%2BPqenyQUiaAmvZAa6qk2iSeutbRPJzsfo7EM24ZqSnvfBkYzdnbc2dmxjCcSl30zlq2eYtNexD7u1%2FvoJTxo68vjbLbi2ujLr9NyldjUpIpX%2Bkx%2B%2FSxbGVKwDHBm2E1zZGBRCe9YBHEhLJdRebi2HY867zhzrmu0%2FvvlEfSkpmn76aeyCaKEGVfAJSCFkXrakcPnP%2BKWZ3W1uevYowj%2FbspoIuCezOeN8Ib35%2BQCzM2WycwvEIRlVOqbFmWWu7ADKFvoBTdzR64uUICABH%2BsmjrkUhAuQV1AtiEWMbEDh82lww5PE8cMJPU578GOqUBy2JZ8kAjP%2BftLVESlByYzccyWLgecogH24zJiXldeXU5i96wRuvSyIcQsidhtgjGZJe3giWkr%2BsbQAP0xHgLsMfSFxqUzSl3AzxDaQ7eCCOGd%2Bx6uvQNjpIb8uNqcD9v9Y2dGrCfJFansepej3jXs7dkTyNPUyFV5rj42gaxuGPTMC2wxfEtYDmdemU1majS4vGpjHdFmBl52Q2kNPG%2F0WftAAj3&X-Amz-Signature=8b0bb4e7941ce9b4b6a0c0cf3d0a8e58f76506690a3be2ef5a7199b276911ab5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
