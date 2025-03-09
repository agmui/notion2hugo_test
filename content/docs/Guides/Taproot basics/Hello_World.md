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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FWKXAQF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD2eBEHmp%2BwcwC2XT08oMAneU%2FW7mRg1kjxhTDY7a9UzAIgUYwPj74KrHmGSflphtK%2FQqZEsZkba3DgFAa5C7Cx1esq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDORk1FXZOP8amDke7CrcA4aqJnjFJ%2B%2FUKTGAyAjtYwFL%2F8wc994EFTVZMqeZSr4XNpoTTyrXDsV2HKV1kuEyKxoE2eyoTFwVW8oFmZ1j1WGBEfudgRkfrP0nkNPGU6%2BtC6n2ZG9EC%2FHxmbNzq8hfuJsWhSYDLyb42ezvl6lJzMBo9YuSnQYFdz%2Fixhql2UF2R98Ifglmf4AUITB4UyIL8H%2FUP7oqNt6TGDynJtMPFMPqxF4uWzRXupQiGR9ABDw3o7zrJGjUl3mNrR43KxekbdCvHU%2FORIKm6va1ZnOu3Mcwx0m0EjgbaJUnUxe5DRu9fpEcyx1pZ%2FDjiVhOXwPYvpa5jZP9cvVYLd1PO6YBtORn69WEqyt2mtji%2FZt7mlRCB5sopQcZ3S4nXTfa80Ou0kZSgZI6c2PhNxiYl95Ot%2FSYmP%2FTLKvhudY%2B3aMbyOfC9sFtpbgr9UrCVKL0tuNGjmfr0Bu%2Bmyhkmb4UlcoSN0e807ZGf8tbCzJnKfiN4eYA3wFQcotDBYV%2FwIBMpgBWrA%2BLtvSCI5i8rbJ6RnLzbyxExo3K301ocx20jxbv%2FfHvsP7x3NB%2FK1KKYeE2FPGEYUA6xUF4j9CzsDZXEVPruxE5G7PuOcgRZeMLpN6H%2FCsDmxN9iIl5GfzKAvlHMIrItL4GOqUBSLJFvuZF6bLFwg6aSEaHC%2F7z5XtYW%2B3coJ3dwF%2BbwhAQdTUWV2yY9tipDmgkkYUfzOu49QseWbRsSuRybozf3RFJ8GyttMFDcdImrElrPhBpjiAwg%2F083MGhOnuPYK%2BleUyF%2FyTK3Ch%2FbnuyWJ8eluJM3kNqaF8k2CMYrNCz5crLE7UpJaK37aknlCmlW1zHMKFRdzlSSQLHePcx4wvFUrPjx8o0&X-Amz-Signature=fc6f4fad00601740829370c580a0dd871a7d7dbc6856916c62cc3d6c53aa9fd4&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FWKXAQF%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T060835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECUaCXVzLXdlc3QtMiJHMEUCIQD2eBEHmp%2BwcwC2XT08oMAneU%2FW7mRg1kjxhTDY7a9UzAIgUYwPj74KrHmGSflphtK%2FQqZEsZkba3DgFAa5C7Cx1esq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDORk1FXZOP8amDke7CrcA4aqJnjFJ%2B%2FUKTGAyAjtYwFL%2F8wc994EFTVZMqeZSr4XNpoTTyrXDsV2HKV1kuEyKxoE2eyoTFwVW8oFmZ1j1WGBEfudgRkfrP0nkNPGU6%2BtC6n2ZG9EC%2FHxmbNzq8hfuJsWhSYDLyb42ezvl6lJzMBo9YuSnQYFdz%2Fixhql2UF2R98Ifglmf4AUITB4UyIL8H%2FUP7oqNt6TGDynJtMPFMPqxF4uWzRXupQiGR9ABDw3o7zrJGjUl3mNrR43KxekbdCvHU%2FORIKm6va1ZnOu3Mcwx0m0EjgbaJUnUxe5DRu9fpEcyx1pZ%2FDjiVhOXwPYvpa5jZP9cvVYLd1PO6YBtORn69WEqyt2mtji%2FZt7mlRCB5sopQcZ3S4nXTfa80Ou0kZSgZI6c2PhNxiYl95Ot%2FSYmP%2FTLKvhudY%2B3aMbyOfC9sFtpbgr9UrCVKL0tuNGjmfr0Bu%2Bmyhkmb4UlcoSN0e807ZGf8tbCzJnKfiN4eYA3wFQcotDBYV%2FwIBMpgBWrA%2BLtvSCI5i8rbJ6RnLzbyxExo3K301ocx20jxbv%2FfHvsP7x3NB%2FK1KKYeE2FPGEYUA6xUF4j9CzsDZXEVPruxE5G7PuOcgRZeMLpN6H%2FCsDmxN9iIl5GfzKAvlHMIrItL4GOqUBSLJFvuZF6bLFwg6aSEaHC%2F7z5XtYW%2B3coJ3dwF%2BbwhAQdTUWV2yY9tipDmgkkYUfzOu49QseWbRsSuRybozf3RFJ8GyttMFDcdImrElrPhBpjiAwg%2F083MGhOnuPYK%2BleUyF%2FyTK3Ch%2FbnuyWJ8eluJM3kNqaF8k2CMYrNCz5crLE7UpJaK37aknlCmlW1zHMKFRdzlSSQLHePcx4wvFUrPjx8o0&X-Amz-Signature=4c393bb5669e9c87985899732ed8de25f4ddee98c4564c44722d244a55c99be6&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
