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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GVMVI6C%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCID1SpWYZ1gQAGtQcxIGs56N%2B6nAE93n97ncYB%2BbCM2UtAiEAiLWYCG%2BiyOgFFqLyc875Sp5jGg12lXBbibLosuizuKgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJzq%2BqUaJNqOmhC3yrcA%2F9PQFodHMrT%2BrDWXEUuyWiCBLOaqPYVazeo%2BUcCrahk3%2F5fWxpyyn%2FtktxR272H1%2F0gFLw5gh6O7vv8bx1zhypIMI1fXLrGey%2BF1ChKljhIKngMMUB%2BP6%2FUgTnBA9XwCoiXAFdanAkb%2FEGRGBqoov2TG33Hvge5nuts1UcvUrNRI9VaCxswfX5s7e1EYV5AtsXxTGv0qBSm1dL6Qte1EB5zohruaArzwuKZk5j3rqSRg2w5CeGT44Zub4ITm9MzaqG9%2FoxIy3hPKdsFixChWdbsaJKBlwIbyMOebyVm1fb2EOGQyVi5ppfhKmfFM3xmFxDYE6NryBRjLM3O21w1BrwJb4INN%2F42pO%2B4tJJj64VKQsL744ydTfHD9ynUIp9DHxfjhLLjREAmVnBmONxy5nDhwX5rMXrWDVAaGH6%2FAczP6Y%2BYPZyl72o1eQik%2F5VG6mYihiCZZx%2BmvL8QFRHyFzGZEvB3dcVV0S2U4Z9VnSyaoMV43Sd4ccLLZ8pamaDeMiIt8SdcTSJ25ESoNAodU%2Fo%2Fc5aqVIN2cygj2lPBuzJywqC42XCIjpMn%2B9QpyWZk58m8xt9rsFUttiLZFApavK8jaYmTCygFCImRdwlNfBnz9SkVyrfnS%2FBI1sghMLykrb8GOqUB5uJQS5tHwlfuKvOW6oBm9B%2Fd7KUH7IY1mV9uZ5Bqurgvw8HdgeIgtHkctvRQqtRFRa%2BIlCaTXh2Ts092d2zvEXipUQgSdiJz%2BhUhANwigOkDS%2FaRCJaue14GOfY5VERXQ9Iycsivuz72%2FBj%2BdpJBuEF2IUKgXtCE310feh%2B2VYfwPZR1j6zWx0vJ6WdKYo8OiKq8v0OxX%2Fqqzu4uw1xsf7OzuyYC&X-Amz-Signature=d9c46786cc6e02cde8dd780155cef6874f53dfed52b24067daff0a235770d9e6&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GVMVI6C%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T050850Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJHMEUCID1SpWYZ1gQAGtQcxIGs56N%2B6nAE93n97ncYB%2BbCM2UtAiEAiLWYCG%2BiyOgFFqLyc875Sp5jGg12lXBbibLosuizuKgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFJzq%2BqUaJNqOmhC3yrcA%2F9PQFodHMrT%2BrDWXEUuyWiCBLOaqPYVazeo%2BUcCrahk3%2F5fWxpyyn%2FtktxR272H1%2F0gFLw5gh6O7vv8bx1zhypIMI1fXLrGey%2BF1ChKljhIKngMMUB%2BP6%2FUgTnBA9XwCoiXAFdanAkb%2FEGRGBqoov2TG33Hvge5nuts1UcvUrNRI9VaCxswfX5s7e1EYV5AtsXxTGv0qBSm1dL6Qte1EB5zohruaArzwuKZk5j3rqSRg2w5CeGT44Zub4ITm9MzaqG9%2FoxIy3hPKdsFixChWdbsaJKBlwIbyMOebyVm1fb2EOGQyVi5ppfhKmfFM3xmFxDYE6NryBRjLM3O21w1BrwJb4INN%2F42pO%2B4tJJj64VKQsL744ydTfHD9ynUIp9DHxfjhLLjREAmVnBmONxy5nDhwX5rMXrWDVAaGH6%2FAczP6Y%2BYPZyl72o1eQik%2F5VG6mYihiCZZx%2BmvL8QFRHyFzGZEvB3dcVV0S2U4Z9VnSyaoMV43Sd4ccLLZ8pamaDeMiIt8SdcTSJ25ESoNAodU%2Fo%2Fc5aqVIN2cygj2lPBuzJywqC42XCIjpMn%2B9QpyWZk58m8xt9rsFUttiLZFApavK8jaYmTCygFCImRdwlNfBnz9SkVyrfnS%2FBI1sghMLykrb8GOqUB5uJQS5tHwlfuKvOW6oBm9B%2Fd7KUH7IY1mV9uZ5Bqurgvw8HdgeIgtHkctvRQqtRFRa%2BIlCaTXh2Ts092d2zvEXipUQgSdiJz%2BhUhANwigOkDS%2FaRCJaue14GOfY5VERXQ9Iycsivuz72%2FBj%2BdpJBuEF2IUKgXtCE310feh%2B2VYfwPZR1j6zWx0vJ6WdKYo8OiKq8v0OxX%2Fqqzu4uw1xsf7OzuyYC&X-Amz-Signature=463c23f4d6b1e0bebdebef579f26e20aae469b335bf26a7c8e4ac76217344e8a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
