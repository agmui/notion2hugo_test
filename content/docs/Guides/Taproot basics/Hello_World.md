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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PMONFII%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiupcoFrCmONmqXIVu2TSYIR1dLijBWYGgHO%2BmwT7XwwIhANS3l923EM5s77yFvENzRwEHZA47K9zwgMn1%2BGdBjraTKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuhUwiNgg5wbJL8hsq3AM1VQvKxD%2BtvYZa50I0plPDmotBRyrS162CRsAt2GucS3qc1ChwttWuSmZy%2BDZa6iUwtYRJbklvbIRt7WNsvmT8tmJ1tVTXM9ObLiy4URt8WPrRXJET6mjzyPq787rPvfuv1e1xZ5ndM3f3sHj2rdy4WIS5jnD2kPl2Ya0U6wFJ0B00rxUMHdX8ee5uNfCVinSslJeII5Kd1ZyOmLur%2BAyDa3CB3PABszkFhOJiSUYp80s8PDzQN5SePZO8ZKrp38EC1A2p0I6BlUQuoviUxjjFRtE4AeFvGM1tBYJThk9BIeG2L98sEXi98a46KZbhgBBx4IuGp283nIjDNPFOiirbeDj2Q3mke9%2FOCkgSgNvVpOsYKCBNF5q3tuMyLnLikzMjeRvlDNasuQXAUBPVctBbPpyKMTJQwQRptxPH%2BAoVVY16sGWIuseruLB5HftSr%2FdJFu501%2F0fTFBWSvNB%2B5j2hlzDpipIyXVmca7Hkq%2BYy1Ux%2Fr2%2B4VTQB0XwWLG4SgHHyXXDi69aNyjS4LsLfkLEfNWMsOClAPDUR1bhN%2F1%2BtqauvjcPu3UktM%2F9VSpfT0yX%2Fn1c2qIFzwAdwarai25nKZIFFVtPPVp9YvKA2iH1QJ7Y%2F6NdQf40XNh17zDczYnDBjqkAQHKBheaviGEwupu2tgi1ZoruKw8Za3reh3Rm79YIFzNWeiJQ6eRz%2Fkm1YlBBeI8%2FU4bt5rige2fu8rJEZ4kO7EDoXAd1yqMx3OyUmMRtcqfg0mYkYGOIFV1KpSx%2FBv9AT9Q3P2pzpO4Hf48XiocxrSrylL6DpTk4zBnhDdQCNRPgT0tjJ7gmAKoj6QsUut7aWXe7vF5lhvYv0WCu4TLY%2FFTtUqg&X-Amz-Signature=d42beea2d9ef4cb14641484d09f6e5670c9af684ef3236ff0d2c236a3b51e7e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PMONFII%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T121627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCiupcoFrCmONmqXIVu2TSYIR1dLijBWYGgHO%2BmwT7XwwIhANS3l923EM5s77yFvENzRwEHZA47K9zwgMn1%2BGdBjraTKogECLv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwuhUwiNgg5wbJL8hsq3AM1VQvKxD%2BtvYZa50I0plPDmotBRyrS162CRsAt2GucS3qc1ChwttWuSmZy%2BDZa6iUwtYRJbklvbIRt7WNsvmT8tmJ1tVTXM9ObLiy4URt8WPrRXJET6mjzyPq787rPvfuv1e1xZ5ndM3f3sHj2rdy4WIS5jnD2kPl2Ya0U6wFJ0B00rxUMHdX8ee5uNfCVinSslJeII5Kd1ZyOmLur%2BAyDa3CB3PABszkFhOJiSUYp80s8PDzQN5SePZO8ZKrp38EC1A2p0I6BlUQuoviUxjjFRtE4AeFvGM1tBYJThk9BIeG2L98sEXi98a46KZbhgBBx4IuGp283nIjDNPFOiirbeDj2Q3mke9%2FOCkgSgNvVpOsYKCBNF5q3tuMyLnLikzMjeRvlDNasuQXAUBPVctBbPpyKMTJQwQRptxPH%2BAoVVY16sGWIuseruLB5HftSr%2FdJFu501%2F0fTFBWSvNB%2B5j2hlzDpipIyXVmca7Hkq%2BYy1Ux%2Fr2%2B4VTQB0XwWLG4SgHHyXXDi69aNyjS4LsLfkLEfNWMsOClAPDUR1bhN%2F1%2BtqauvjcPu3UktM%2F9VSpfT0yX%2Fn1c2qIFzwAdwarai25nKZIFFVtPPVp9YvKA2iH1QJ7Y%2F6NdQf40XNh17zDczYnDBjqkAQHKBheaviGEwupu2tgi1ZoruKw8Za3reh3Rm79YIFzNWeiJQ6eRz%2Fkm1YlBBeI8%2FU4bt5rige2fu8rJEZ4kO7EDoXAd1yqMx3OyUmMRtcqfg0mYkYGOIFV1KpSx%2FBv9AT9Q3P2pzpO4Hf48XiocxrSrylL6DpTk4zBnhDdQCNRPgT0tjJ7gmAKoj6QsUut7aWXe7vF5lhvYv0WCu4TLY%2FFTtUqg&X-Amz-Signature=e6b3cacfda7893054c3c919b0cbbd0b21e2d1e7e018e7ab4b5859129d3ad1eda&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
