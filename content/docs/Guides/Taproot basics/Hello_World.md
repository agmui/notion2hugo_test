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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCVFOSSN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYIvW8FfV3it%2Bm%2BblnYAoGhp3tNzxtMDGS5FEJ14kbFAiAtQk%2BI%2BbVf8CTed%2FgTzsOkrUR%2BiSfR5NWf1Vhwfm9hhSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMGP9vEzQ%2FFLiHISg%2FKtwDwih1zbu0VgFxmkWF0PXLe42Wc%2FffxwnGnob3W89otP01qWZj%2BLE8Lirfy%2FUcT7W8DbvbcRHS0Q7IVwHsKvONfHd3PwpCKCrtTGgFlgajhYNYM7CYEJNXfDxwiygSmIOKtFVnBpH1MIKfCVLLMyYsbpxaa%2BzCbAnzBeN%2BUuCOCDLfxGRzs5t4YGh5kTt3oORv4eFbCiEvWrRiNBNNfvUfZJFow%2B4dgEDXFpsMivAIxY4zHcECe5wjFlRY93ivzyMBp9ejUMaz%2FW%2BREPWhW%2F%2FSk1u6H5eI3Jz7KX9ewtdYsUMVp7kkdYUov0VVssOcdlK8CIRf%2Fz51LVNOTYNWeW9ezsh%2FtjGxF7uXcw6tZqOM56jfWk6g%2FIJG822DlEcNkw%2BvH18FK3jgc1cQnc24XRuOYFhpuMqImAwNNmP5re3fcirzCwzMoinceApopIZaYJLpkaSecNI4yP5LUHIlzm73NW10YM8YN%2FgPt1vYwQcG8igRV6ePVSa1My4%2FEu1phr20cQpglrRBsEDYjYKGlSt73dVgoLaDGFWC0Oww9bCb1Vo5pkcIFnz14WHWaEJFOa7JVCfqLc7bq3niiBxheurlTCozrtWsRQYUwH3KEKNv66lu8cenih1gsFfonBkwrOnswAY6pgFum1%2Bzh9ekAn0gYc3mLlNEptJ7adBOs63myd92fLRI6hvSKcw0%2Bttplrc4o%2Fh2vgfLkxIrZexkeEHGSeS1MXUbZw04%2B4SKhuc19Bmb8duQ%2FU0zd6McCHMoBmyY1w8%2BWBdoYutNYbJ8DVN4xGSaUeR1VDo9WQ3Ujctlppc%2BSyaHTE025kw5UQwyHphUVNGVDFUAipAllhyo41b9s3mUbb3aui%2BhOHEd&X-Amz-Signature=db459f5d51ffff4358805ad32737e5b0edc45b12c6cd23f802493fdbc498161d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VCVFOSSN%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T110739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBYIvW8FfV3it%2Bm%2BblnYAoGhp3tNzxtMDGS5FEJ14kbFAiAtQk%2BI%2BbVf8CTed%2FgTzsOkrUR%2BiSfR5NWf1Vhwfm9hhSr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMGP9vEzQ%2FFLiHISg%2FKtwDwih1zbu0VgFxmkWF0PXLe42Wc%2FffxwnGnob3W89otP01qWZj%2BLE8Lirfy%2FUcT7W8DbvbcRHS0Q7IVwHsKvONfHd3PwpCKCrtTGgFlgajhYNYM7CYEJNXfDxwiygSmIOKtFVnBpH1MIKfCVLLMyYsbpxaa%2BzCbAnzBeN%2BUuCOCDLfxGRzs5t4YGh5kTt3oORv4eFbCiEvWrRiNBNNfvUfZJFow%2B4dgEDXFpsMivAIxY4zHcECe5wjFlRY93ivzyMBp9ejUMaz%2FW%2BREPWhW%2F%2FSk1u6H5eI3Jz7KX9ewtdYsUMVp7kkdYUov0VVssOcdlK8CIRf%2Fz51LVNOTYNWeW9ezsh%2FtjGxF7uXcw6tZqOM56jfWk6g%2FIJG822DlEcNkw%2BvH18FK3jgc1cQnc24XRuOYFhpuMqImAwNNmP5re3fcirzCwzMoinceApopIZaYJLpkaSecNI4yP5LUHIlzm73NW10YM8YN%2FgPt1vYwQcG8igRV6ePVSa1My4%2FEu1phr20cQpglrRBsEDYjYKGlSt73dVgoLaDGFWC0Oww9bCb1Vo5pkcIFnz14WHWaEJFOa7JVCfqLc7bq3niiBxheurlTCozrtWsRQYUwH3KEKNv66lu8cenih1gsFfonBkwrOnswAY6pgFum1%2Bzh9ekAn0gYc3mLlNEptJ7adBOs63myd92fLRI6hvSKcw0%2Bttplrc4o%2Fh2vgfLkxIrZexkeEHGSeS1MXUbZw04%2B4SKhuc19Bmb8duQ%2FU0zd6McCHMoBmyY1w8%2BWBdoYutNYbJ8DVN4xGSaUeR1VDo9WQ3Ujctlppc%2BSyaHTE025kw5UQwyHphUVNGVDFUAipAllhyo41b9s3mUbb3aui%2BhOHEd&X-Amz-Signature=5d6886c5196066934da69130b760f383f1ccc84a6bc1b2423fe239157be62f64&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
