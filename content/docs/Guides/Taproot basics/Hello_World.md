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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KYIC3I%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO1P4cKpcSossHM0GgEmzrqofTwNR9w4UxUy9AHgcXzgIgfLgEXAEtOzUyFBalJedlmtaxyWcS8NaCs%2FX%2FflndtpkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEacRSsLdj6aS7uZbyrcAxnZN9L4cJqokWslUqDJNvX8pQc5MXFlTkw0Vp7dFrfnufqHOHK0JRBQ6e99BRDCM5jBagAr4tIWw2fprHGtXkvE35OoEty%2BurjVV6AEYA3djPC%2BnFvSNhkadL1C8nCVUWbwkD7z1Wer125K9HfH1p12ANAHduTxT8g724VrULwvgraMV%2FpxhAMhQ1PS4oVR51Ag53Ouw9pX4d0%2FLe17pmLchrahs3tN7KNkvPtU7Pfcp63KhoZVRKSDEifStpZPt01NBNen%2FEzrM6luNPoxuDyMK%2Fpdwh2IehCGCTmBarSe4FXnqHBWEU9GARJOxrnD8LkbJP1KVV8csT8P%2FfaNkVSx4jGworpwlUu0g9iSkNw%2BPnUG29EQE%2BjKTxPzms%2F3i8OQrNbbJxAJFVJ7qUC9udGlJ%2BM51VlGKVOJeQcLzIT9M1FsKYPNCs73piU09odN20BAtuRiqX%2BPU7TvcuD7PCg0bBk%2BfVOTUtE3Y7sFL6J%2FhcMN%2BxqjSgQ6u8cn9W6oQY1Q50%2FI5aBeF3ungFekZzIHgpCfB%2BkFIseexZcEyKX4pkh4HdxtyVlrry6Js6j%2Bc3PvEq3Ug6KshyUG9N5o3vNtc8xu8zOTVFJuetiHDPJeIkY2pywzsMIqWhxwMLjttcEGOqUBDKo8xGbzZlAz%2FE4cphLNCU7EAnJ3dVt1AB6FhyBtvq6TcHgNR%2BLtUg7STT3emYwoqIAkOiD1p1S%2FtLfJPApxLdEHYY7EKHo%2FyjiBFhcqbKfrZhpoXxwAqxHj81eJGSn%2FCzLMscOW3frF%2BNneVfaPC%2BPKXcTOn6TnHaFRpG%2Fwrv6JXGWg1szBcjbl33cb2Vf7LJFxPCz7cUAwaGlz8uyGdt78vSEo&X-Amz-Signature=313740470a1ca5b61a812feb233a75f85e007dd5102c14ffc9bf52215524a0bb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5KYIC3I%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T070909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO1P4cKpcSossHM0GgEmzrqofTwNR9w4UxUy9AHgcXzgIgfLgEXAEtOzUyFBalJedlmtaxyWcS8NaCs%2FX%2FflndtpkqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEacRSsLdj6aS7uZbyrcAxnZN9L4cJqokWslUqDJNvX8pQc5MXFlTkw0Vp7dFrfnufqHOHK0JRBQ6e99BRDCM5jBagAr4tIWw2fprHGtXkvE35OoEty%2BurjVV6AEYA3djPC%2BnFvSNhkadL1C8nCVUWbwkD7z1Wer125K9HfH1p12ANAHduTxT8g724VrULwvgraMV%2FpxhAMhQ1PS4oVR51Ag53Ouw9pX4d0%2FLe17pmLchrahs3tN7KNkvPtU7Pfcp63KhoZVRKSDEifStpZPt01NBNen%2FEzrM6luNPoxuDyMK%2Fpdwh2IehCGCTmBarSe4FXnqHBWEU9GARJOxrnD8LkbJP1KVV8csT8P%2FfaNkVSx4jGworpwlUu0g9iSkNw%2BPnUG29EQE%2BjKTxPzms%2F3i8OQrNbbJxAJFVJ7qUC9udGlJ%2BM51VlGKVOJeQcLzIT9M1FsKYPNCs73piU09odN20BAtuRiqX%2BPU7TvcuD7PCg0bBk%2BfVOTUtE3Y7sFL6J%2FhcMN%2BxqjSgQ6u8cn9W6oQY1Q50%2FI5aBeF3ungFekZzIHgpCfB%2BkFIseexZcEyKX4pkh4HdxtyVlrry6Js6j%2Bc3PvEq3Ug6KshyUG9N5o3vNtc8xu8zOTVFJuetiHDPJeIkY2pywzsMIqWhxwMLjttcEGOqUBDKo8xGbzZlAz%2FE4cphLNCU7EAnJ3dVt1AB6FhyBtvq6TcHgNR%2BLtUg7STT3emYwoqIAkOiD1p1S%2FtLfJPApxLdEHYY7EKHo%2FyjiBFhcqbKfrZhpoXxwAqxHj81eJGSn%2FCzLMscOW3frF%2BNneVfaPC%2BPKXcTOn6TnHaFRpG%2Fwrv6JXGWg1szBcjbl33cb2Vf7LJFxPCz7cUAwaGlz8uyGdt78vSEo&X-Amz-Signature=1579ab738ccd3a7f05512b6c0df834f620c45d475e0535b7e59ea15df4d5bf19&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
