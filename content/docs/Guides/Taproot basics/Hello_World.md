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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VGQQGAM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD%2FxyF%2FdEIuzFVRIrxezwKh0K2BrQMQycbNh8UPOlT65QIgFrBRAqs5fTr9SqynZlKrzFRemarxj1sgNHsdpoQRp8sq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDMCB0ArVSxRm60br0yrcA3sFw6XEWB2MGFEQQgy3ZmnDmmu1R%2Fcv1aVS0jgRyJ%2BqLYfERqpmIEuCjWcUSe6syFCMNfHebIeTHZ5ZKVI876EDP%2BTJJrt%2FhDxKG35pc4X9FgjnP2yYQM3quQCn561xc8%2FqyrikneMnzB0NA7bak60loAU%2FtZXkYf%2BDs6RK5G3L2zibuJIYF09ybZOflvwD10IuRemQU1dPFafYsInHeIjkGA4TMD3jNp8KiGc14DijfAUIcioxXbfJ786UTRxFyqbfOcg4f3oQwnjoEjSTDhpPS4cSuXz3Yyeg8%2BIQmkMKm%2FxzhS5pCGmXp%2FPEj8STPbwH%2FPuuoX%2BE5npZHXmQcPxpnegXMQtKlTZ26d8scDu9foY5%2BbNU6aSjWFkJQeF0vFXUzEwvS0GmfbPFWey4ZKp0nz02Mk3Z3s5EpHKKwQDZPhRXwn%2F8k%2B78SL9bCv12QhVjWRp6VOvgDBV68xPkh2VnA6ptDwyMQkEtR8cNlrZdlLFjcAd8EUewh2lYNzqZNDrkEAdILzwAtKwoRiGB2WBgpMBut4BrV3CAZIxhDlbRfQjYTjkfSq8RsxYzCX12XMPLzdQCOjMbZdd90%2FSXnTJKeNwQnj%2B1osVoSF6uUtVLwpe4aS3ddHlAaYuMMIXb%2FcQGOqUBeqP0jCre4C3rYUW25i%2BSAZt0i5mQ2dALoF6w9Q0AeVN16yqVopVyBEX%2BO95U86%2F5oZWBj1%2FzLfKmDQ55OaYUx8kEKhVK7%2BWlnR98zUGTu7rr1wKkwiOr%2Frs2LTiprp7aAfnKbmxcXAu7UE7hk6UTk9uJiAxQBgdteYSIxbRDcYkU%2FbZp9sXKXYwWENBWP1NTKJ6%2B4EBdUHHpkLzwNMS5RC9krSlK&X-Amz-Signature=2fffbaee9a9cef185afee119263092a1dcf48325a3ebf0027bc95e105abd81f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VGQQGAM%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T210741Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIQD%2FxyF%2FdEIuzFVRIrxezwKh0K2BrQMQycbNh8UPOlT65QIgFrBRAqs5fTr9SqynZlKrzFRemarxj1sgNHsdpoQRp8sq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDMCB0ArVSxRm60br0yrcA3sFw6XEWB2MGFEQQgy3ZmnDmmu1R%2Fcv1aVS0jgRyJ%2BqLYfERqpmIEuCjWcUSe6syFCMNfHebIeTHZ5ZKVI876EDP%2BTJJrt%2FhDxKG35pc4X9FgjnP2yYQM3quQCn561xc8%2FqyrikneMnzB0NA7bak60loAU%2FtZXkYf%2BDs6RK5G3L2zibuJIYF09ybZOflvwD10IuRemQU1dPFafYsInHeIjkGA4TMD3jNp8KiGc14DijfAUIcioxXbfJ786UTRxFyqbfOcg4f3oQwnjoEjSTDhpPS4cSuXz3Yyeg8%2BIQmkMKm%2FxzhS5pCGmXp%2FPEj8STPbwH%2FPuuoX%2BE5npZHXmQcPxpnegXMQtKlTZ26d8scDu9foY5%2BbNU6aSjWFkJQeF0vFXUzEwvS0GmfbPFWey4ZKp0nz02Mk3Z3s5EpHKKwQDZPhRXwn%2F8k%2B78SL9bCv12QhVjWRp6VOvgDBV68xPkh2VnA6ptDwyMQkEtR8cNlrZdlLFjcAd8EUewh2lYNzqZNDrkEAdILzwAtKwoRiGB2WBgpMBut4BrV3CAZIxhDlbRfQjYTjkfSq8RsxYzCX12XMPLzdQCOjMbZdd90%2FSXnTJKeNwQnj%2B1osVoSF6uUtVLwpe4aS3ddHlAaYuMMIXb%2FcQGOqUBeqP0jCre4C3rYUW25i%2BSAZt0i5mQ2dALoF6w9Q0AeVN16yqVopVyBEX%2BO95U86%2F5oZWBj1%2FzLfKmDQ55OaYUx8kEKhVK7%2BWlnR98zUGTu7rr1wKkwiOr%2Frs2LTiprp7aAfnKbmxcXAu7UE7hk6UTk9uJiAxQBgdteYSIxbRDcYkU%2FbZp9sXKXYwWENBWP1NTKJ6%2B4EBdUHHpkLzwNMS5RC9krSlK&X-Amz-Signature=7c8046f74ce63f2dd28ce9e9f6409e079608f935549a37a982d5ac4c24616a9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
