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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSM4XXC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjZ6WdaKW7CYVZHN0AEx%2F5XJT413pXWfvbWmQA2y7g%2FAIgPC9jUVOTdrfGaUzvinOnRekMHpSSuG2Cb%2BXKVz1r2v4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqKBKshvq1mObvX6ircA4T5f8C0BPzXB%2FVoj9OpHcNGU%2Bjd0XJlhfpPey3w5hhzsmuVpePMznJfMxVo8pVw0Vhf67LIONURH6%2BXdmcn8gUjvcfKYTMoWJg3MwpXAJyohq4Aq%2FgWS5%2FRer0sYB%2BzTcboflQXh9eezqFqKI1i0%2FHFwv4HM%2BOVIcR0d2SindVGziURpRaB8CSC2Br5hOfVk283e6sYJNYBpU8ftzSTKgykX%2B3r0IHd%2FjH9wf8cY5kRHMQOxLLeHRdnSTP0evoGTfYzEaw7sWu%2BLhYMGV%2BfkpdhBAzCGeLThnoakeSo5mAAID1ZxN1URIJWVshm5JsZYWxDcpwO44GHMSAFqH%2F3FCShlIVLwZTGbuZEeChLC1CFprtsnEvgW7yGCnyZhbNHj7P0NlkC2p4n7GsY0Fw8bUcgWnrqzm6rpsxqrjxO61WLuASUyda21zc1hw3KRjq62b9URVQpAksp7o4JwPXyILRtxQv7tu%2Bv3VYj2ZL3zPF7bPX4rch45V96mDg0EYtD9X0kG8q2ZviDUpzBg1FPXnaS%2BNJMVUeLCi2sRKRs2vUuGVLNiotZwLm0gUyyIRz3Ij9%2BWsBlzf3rsvVhCfLExbe4vRgUIn6naqHM2jfpL9h8TnY5%2FxwffUDtaZDsMJ3I9sMGOqUBur%2FLr7nM4FtAvqmVelUH%2BLdAe6VKoqxhSeef9S5yp3rgK4EahuQf3LNbb1%2FPKonFX1Km0cscJJiGcjiPuI3UhZXR5JnIFpbdJHDcIDKAKJyE3aAssKX%2BfJF9IIaMDGiRCPcj5oiubCXhhqMG7fQ8nHLhTZ2cQXCqU50Zhdi1ZM6%2FgGq%2BBwygpFHytN8em5Il4Ev0ricAuRYaotrRDqgJ5cKyeKmv&X-Amz-Signature=94bf31143226109609c2883234befffbd2e7080339ff5253170098f201cf9418&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBSM4XXC%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T040047Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCjZ6WdaKW7CYVZHN0AEx%2F5XJT413pXWfvbWmQA2y7g%2FAIgPC9jUVOTdrfGaUzvinOnRekMHpSSuG2Cb%2BXKVz1r2v4qiAQIy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCqKBKshvq1mObvX6ircA4T5f8C0BPzXB%2FVoj9OpHcNGU%2Bjd0XJlhfpPey3w5hhzsmuVpePMznJfMxVo8pVw0Vhf67LIONURH6%2BXdmcn8gUjvcfKYTMoWJg3MwpXAJyohq4Aq%2FgWS5%2FRer0sYB%2BzTcboflQXh9eezqFqKI1i0%2FHFwv4HM%2BOVIcR0d2SindVGziURpRaB8CSC2Br5hOfVk283e6sYJNYBpU8ftzSTKgykX%2B3r0IHd%2FjH9wf8cY5kRHMQOxLLeHRdnSTP0evoGTfYzEaw7sWu%2BLhYMGV%2BfkpdhBAzCGeLThnoakeSo5mAAID1ZxN1URIJWVshm5JsZYWxDcpwO44GHMSAFqH%2F3FCShlIVLwZTGbuZEeChLC1CFprtsnEvgW7yGCnyZhbNHj7P0NlkC2p4n7GsY0Fw8bUcgWnrqzm6rpsxqrjxO61WLuASUyda21zc1hw3KRjq62b9URVQpAksp7o4JwPXyILRtxQv7tu%2Bv3VYj2ZL3zPF7bPX4rch45V96mDg0EYtD9X0kG8q2ZviDUpzBg1FPXnaS%2BNJMVUeLCi2sRKRs2vUuGVLNiotZwLm0gUyyIRz3Ij9%2BWsBlzf3rsvVhCfLExbe4vRgUIn6naqHM2jfpL9h8TnY5%2FxwffUDtaZDsMJ3I9sMGOqUBur%2FLr7nM4FtAvqmVelUH%2BLdAe6VKoqxhSeef9S5yp3rgK4EahuQf3LNbb1%2FPKonFX1Km0cscJJiGcjiPuI3UhZXR5JnIFpbdJHDcIDKAKJyE3aAssKX%2BfJF9IIaMDGiRCPcj5oiubCXhhqMG7fQ8nHLhTZ2cQXCqU50Zhdi1ZM6%2FgGq%2BBwygpFHytN8em5Il4Ev0ricAuRYaotrRDqgJ5cKyeKmv&X-Amz-Signature=71f8ab7afeab757a00bdbcd68960bedbe6fdf83b9738ffb744212020d22ca8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
