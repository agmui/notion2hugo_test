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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2WSCVQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIHJSTUlxZLKqnVxZYsPXBfQ3yZ0cOjDjPYPkYrZcuIl7AiAmpbnfHmezLF%2B1T0XkxMXFUai9vr2m4BeoHQ2U%2FmcVvCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMSfS55EwTeic4AChEKtwDFTPXCsq0f%2FcTb8OTZ0CTtt7smzX1%2F2wvyGxQNl0JWciHSBOEzZpg11qrILh6%2FGApSoi4bwyL6ZemxpnyXP1xzdwB98vGdV6a9uivYRB%2B8gARKAKrquIga5NcBBpr9Ex8%2FYFf9z9g%2Bw%2Bj7GGY%2BOvUuSVW29U07ivFpKm9P%2FNj2ZT%2B8ftNxCPJzeG%2BgAwFmYONmGtpsC7f%2BVwAJuUF4FAcxLQxSgZX%2BVttMVyzjPindtdNurhowEWuu8dmc0H%2FlX7%2B6Vz36IH5Nqoxl%2BWYw6hD0QeAigE%2B%2F9TSUz42Xod5rxmWmcYTjte4FM5kf7z14vHjuH0g90%2BaUi2Iv7IdPW%2Fm6x3XGktdFT2dN6fLfVeYe3cDxMT7zqaQZtGHnqARONaxlZrxmnDYuYvzgDG4fRMPlqJtq0j%2BcPdXF33qmQC6DeLU4aKfu8q18jRmaPulHPsvxMUM%2BEastGDLsF4%2FGIxRDajt7YbRLe%2F5RZgNfoCQmyZusIOtdlKP4XcLErwOErCJlFm87lF36F0gRvbiS9VzcTxXWr18QBaqjs8N7tQj1deHj%2FjQj21d2HVsqr121JUjMxhSLMeO8TeP%2Bz3fgaSsaKh%2BVWpRRljAqfiRTPyfFkvI%2BKcfNi%2F5kWH%2B7wcwqdHwwgY6pgFU7%2B6Imzv7X9TiTAUU63Wl4bRa%2FtvNKXql5AzmYnijfMJpGCMSyNbNvNfWQhlpBFD1QXVECynuBeI6boODEtRq4E3%2FjwNERKPTka%2BzlwObwnBTwztf6IAncOEGmS5kWL2qTe0l%2Bh43tC53m7HNrMwM16MHmnYrLkVM1FnaMxk7NJvYK%2FiV%2BJwwQeOLKz%2BstH2g795fQxzQhmqn0D0USJvCLYG%2F34Q7&X-Amz-Signature=53f89ac9c62ac1a1f33c20448ff23a4d051e5202cfa3288bddf08d3386a3862e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RU2WSCVQ%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T170933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFEaCXVzLXdlc3QtMiJGMEQCIHJSTUlxZLKqnVxZYsPXBfQ3yZ0cOjDjPYPkYrZcuIl7AiAmpbnfHmezLF%2B1T0XkxMXFUai9vr2m4BeoHQ2U%2FmcVvCr%2FAwhKEAAaDDYzNzQyMzE4MzgwNSIMSfS55EwTeic4AChEKtwDFTPXCsq0f%2FcTb8OTZ0CTtt7smzX1%2F2wvyGxQNl0JWciHSBOEzZpg11qrILh6%2FGApSoi4bwyL6ZemxpnyXP1xzdwB98vGdV6a9uivYRB%2B8gARKAKrquIga5NcBBpr9Ex8%2FYFf9z9g%2Bw%2Bj7GGY%2BOvUuSVW29U07ivFpKm9P%2FNj2ZT%2B8ftNxCPJzeG%2BgAwFmYONmGtpsC7f%2BVwAJuUF4FAcxLQxSgZX%2BVttMVyzjPindtdNurhowEWuu8dmc0H%2FlX7%2B6Vz36IH5Nqoxl%2BWYw6hD0QeAigE%2B%2F9TSUz42Xod5rxmWmcYTjte4FM5kf7z14vHjuH0g90%2BaUi2Iv7IdPW%2Fm6x3XGktdFT2dN6fLfVeYe3cDxMT7zqaQZtGHnqARONaxlZrxmnDYuYvzgDG4fRMPlqJtq0j%2BcPdXF33qmQC6DeLU4aKfu8q18jRmaPulHPsvxMUM%2BEastGDLsF4%2FGIxRDajt7YbRLe%2F5RZgNfoCQmyZusIOtdlKP4XcLErwOErCJlFm87lF36F0gRvbiS9VzcTxXWr18QBaqjs8N7tQj1deHj%2FjQj21d2HVsqr121JUjMxhSLMeO8TeP%2Bz3fgaSsaKh%2BVWpRRljAqfiRTPyfFkvI%2BKcfNi%2F5kWH%2B7wcwqdHwwgY6pgFU7%2B6Imzv7X9TiTAUU63Wl4bRa%2FtvNKXql5AzmYnijfMJpGCMSyNbNvNfWQhlpBFD1QXVECynuBeI6boODEtRq4E3%2FjwNERKPTka%2BzlwObwnBTwztf6IAncOEGmS5kWL2qTe0l%2Bh43tC53m7HNrMwM16MHmnYrLkVM1FnaMxk7NJvYK%2FiV%2BJwwQeOLKz%2BstH2g795fQxzQhmqn0D0USJvCLYG%2F34Q7&X-Amz-Signature=3b0b49bb2ad670e1b0b2fd0d5ab137d92fee11d2bb7c196b35bf874c452e3f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
