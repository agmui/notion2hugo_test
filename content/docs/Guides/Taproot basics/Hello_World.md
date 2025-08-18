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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHAYHENN%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDWDdVSxyUrFuPoJluZEu%2B9alkMeU9Ct%2FIK5HRcWtKNHgIhAKnKIIkOXv1m93X1UySIujRwkRLlaXrJsaQFI03E7%2FCwKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgGd0E8SoTOSB%2B2mQq3AO4XqsaHGLlBikzLlTGcRH5E%2Fe4LUdwfbX60JGlAKkyKYFASGTet7Ul21HZwVAYkYtlccrq0oLVXK4eON2g%2FDQ%2F3MGbdyQzkZ56ZD2%2FC1Ex140wgfArwPw4KbdcSyg7LsJ37LbLfywAHzSsKKf%2BeTNIURvPa%2FoBGwado55XcAecka8NGlY%2BDp8vxuDLa703kDf%2FERBoSS9dzxbu9LyvHjd%2BGxsk5NmESXB5uVVatNiGrHBGbIDxbKMwPDup2OkSWLF%2B3arUtoOoO6%2FEU%2BfGiWFLo1l5MVXwqXHNfcDVbDNs1Mhzd0cnooyGdZU9650x%2Fh5V4IIznoujrchzmU3csZBLM63tchTRMOuQegXcqXYM5ygDX3S%2Fg%2FczIQqniDfhpOqc6vsoKOjlX7k%2B1ixtiwj%2FWglhbiPc3aKN%2FmyBSbPb4ikiRzDF%2Bi0mPY9NfCQIlAt%2Bj%2BtE2k6t0Oq%2FnD1QdU0W07g9xZ4Ep4F4C%2F2eacpNSajLSwTXO00vVYXnbB%2FoBit0nqOQKQb53zXvTJOlFOrKZVQFQE2LxfPex8OK7hOrkjR4Fw4ueY1An05rx%2BlHAvkQpib5ZqB3RSJ7lEkduB98LVwFlaZbVtR5fFVKfHEuixrola1tIJi1pjLrfDC%2B64nFBjqkAXDKxeg4RL8wjFkPkyQUYQXCAr3Z%2BzGZiLrHOtTl2ye3UdUjlvWpXliKgqgZ58sIyEkINghQFyka6Exqy53MsPpXPoeRuxAYkP2txw1KDX4%2FuRaQleqgHf%2Bhr4oIpkgi9LEuIuKFdpLSVJ6GNZ30Fnm%2BCGo0qHhtQA1VEbsd%2BEiIicpZ%2F80lZyFqTNN45%2FDpPFoeTQprnF%2BTHJO1npyLNzgMGv4r&X-Amz-Signature=4eddd7d14a7d5c22323aeffb8e13df1d5bb64f0b5923aae4f03f7ac2b3499470&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHAYHENN%2F20250818%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250818T014922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJIMEYCIQDWDdVSxyUrFuPoJluZEu%2B9alkMeU9Ct%2FIK5HRcWtKNHgIhAKnKIIkOXv1m93X1UySIujRwkRLlaXrJsaQFI03E7%2FCwKogECJr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxgGd0E8SoTOSB%2B2mQq3AO4XqsaHGLlBikzLlTGcRH5E%2Fe4LUdwfbX60JGlAKkyKYFASGTet7Ul21HZwVAYkYtlccrq0oLVXK4eON2g%2FDQ%2F3MGbdyQzkZ56ZD2%2FC1Ex140wgfArwPw4KbdcSyg7LsJ37LbLfywAHzSsKKf%2BeTNIURvPa%2FoBGwado55XcAecka8NGlY%2BDp8vxuDLa703kDf%2FERBoSS9dzxbu9LyvHjd%2BGxsk5NmESXB5uVVatNiGrHBGbIDxbKMwPDup2OkSWLF%2B3arUtoOoO6%2FEU%2BfGiWFLo1l5MVXwqXHNfcDVbDNs1Mhzd0cnooyGdZU9650x%2Fh5V4IIznoujrchzmU3csZBLM63tchTRMOuQegXcqXYM5ygDX3S%2Fg%2FczIQqniDfhpOqc6vsoKOjlX7k%2B1ixtiwj%2FWglhbiPc3aKN%2FmyBSbPb4ikiRzDF%2Bi0mPY9NfCQIlAt%2Bj%2BtE2k6t0Oq%2FnD1QdU0W07g9xZ4Ep4F4C%2F2eacpNSajLSwTXO00vVYXnbB%2FoBit0nqOQKQb53zXvTJOlFOrKZVQFQE2LxfPex8OK7hOrkjR4Fw4ueY1An05rx%2BlHAvkQpib5ZqB3RSJ7lEkduB98LVwFlaZbVtR5fFVKfHEuixrola1tIJi1pjLrfDC%2B64nFBjqkAXDKxeg4RL8wjFkPkyQUYQXCAr3Z%2BzGZiLrHOtTl2ye3UdUjlvWpXliKgqgZ58sIyEkINghQFyka6Exqy53MsPpXPoeRuxAYkP2txw1KDX4%2FuRaQleqgHf%2Bhr4oIpkgi9LEuIuKFdpLSVJ6GNZ30Fnm%2BCGo0qHhtQA1VEbsd%2BEiIicpZ%2F80lZyFqTNN45%2FDpPFoeTQprnF%2BTHJO1npyLNzgMGv4r&X-Amz-Signature=9a54a7091726bff6b7ddd5e1a49b7f1a4d0716dd6dcae2aca2652da2dc627e93&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
