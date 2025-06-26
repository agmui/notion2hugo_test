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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5X4BHON%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCHDUKVZGlLMKEw4g2E75o3ShaXwLjPHz8Ns9f7UdOPPwIhAN90aI3RFIYaaKAqUQsb6xj7buAwxc8tQqrtXqY8HSn1Kv8DCF0QABoMNjM3NDIzMTgzODA1Igwn3PDUO61x4IbRWNoq3ANREJvGYcMO0KDSDFfkzsaW4331DXhAkPsXuzCvxsF2YV3FsQcAGGkb2QJtN5DW8kEN5XVc1ZQQC2vf1sXF1LX%2B6I0uXTu4EXr7cSkGuJaFlEnEtsoiwXZsa5e6zgAtsq6Qnvn8Ut1OcDw9VYGnPT2FlNDKcgm15LBqxC3%2F9yTqDfbEbdF%2FUPY%2FzGz7JcoLtlC6Y6W5uSh55JztcAQsyD76OvI3TUgbyRvvoSpryZ8gCxQR93GGx97%2FYykzDVrQHz0Blf4QQW2fLVljLfWVFCpWmms499TUMrnkKzAgZ2QxTAuiZBR%2Fk3PtkkeXl%2FazTvpqwYnfoG7ERHSOhVdYgC0wD%2BcMkYYhTR0iiy%2FKYcgRXAp2RBtQUeBtq57spRLu1cj8HQDwinzXwiBWDKgJ0uQzRCuimzKNP%2FaaBJgNORSmtMj%2FWqkGi3owU%2FXnmVTSdaXKzLPE%2BdRe%2B%2FBjH6NOiOe2MZwKMR0s8hmB6uhxa0FVnEUvCZlVAzGoTGlb381yeRYrTlrTVcHeXh6Al7q2vGnxm9EiP5Clag0vh3Uizrs37LJA9yu8rXzH5YIszRiSYf3kw44NwF1B7JHdYmQq6R9OYwHTJGuJfjlYvkO%2FoOwbmH0k1y8VQPxImMelNzC48vTCBjqkAbLdF1LSe0wAf5uRaR7gkhhRp6F%2FZeExosKjV2znsL3PGyinyJQ3o7%2F9w4rbpGymPFiAJwZZif2zNXF6n%2FpxjLBsqBftIU6%2FSD%2B3kXtxJsZcRtZhR%2BJKshrjvP033m5HTgUt3%2BE7fVMZ3Ut9LkudAeFy1%2Fmk28MhvskBhlQep4X8qYNNdwb7SKaFR7vTI78hi%2B8S7mG25XjjbvHUoFrf%2FxVhePCD&X-Amz-Signature=c8a3b59f9b1d916fdcc9ff856333666d50db77970fe7b4c766779e36457a8897&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5X4BHON%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T121625Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGQaCXVzLXdlc3QtMiJIMEYCIQCHDUKVZGlLMKEw4g2E75o3ShaXwLjPHz8Ns9f7UdOPPwIhAN90aI3RFIYaaKAqUQsb6xj7buAwxc8tQqrtXqY8HSn1Kv8DCF0QABoMNjM3NDIzMTgzODA1Igwn3PDUO61x4IbRWNoq3ANREJvGYcMO0KDSDFfkzsaW4331DXhAkPsXuzCvxsF2YV3FsQcAGGkb2QJtN5DW8kEN5XVc1ZQQC2vf1sXF1LX%2B6I0uXTu4EXr7cSkGuJaFlEnEtsoiwXZsa5e6zgAtsq6Qnvn8Ut1OcDw9VYGnPT2FlNDKcgm15LBqxC3%2F9yTqDfbEbdF%2FUPY%2FzGz7JcoLtlC6Y6W5uSh55JztcAQsyD76OvI3TUgbyRvvoSpryZ8gCxQR93GGx97%2FYykzDVrQHz0Blf4QQW2fLVljLfWVFCpWmms499TUMrnkKzAgZ2QxTAuiZBR%2Fk3PtkkeXl%2FazTvpqwYnfoG7ERHSOhVdYgC0wD%2BcMkYYhTR0iiy%2FKYcgRXAp2RBtQUeBtq57spRLu1cj8HQDwinzXwiBWDKgJ0uQzRCuimzKNP%2FaaBJgNORSmtMj%2FWqkGi3owU%2FXnmVTSdaXKzLPE%2BdRe%2B%2FBjH6NOiOe2MZwKMR0s8hmB6uhxa0FVnEUvCZlVAzGoTGlb381yeRYrTlrTVcHeXh6Al7q2vGnxm9EiP5Clag0vh3Uizrs37LJA9yu8rXzH5YIszRiSYf3kw44NwF1B7JHdYmQq6R9OYwHTJGuJfjlYvkO%2FoOwbmH0k1y8VQPxImMelNzC48vTCBjqkAbLdF1LSe0wAf5uRaR7gkhhRp6F%2FZeExosKjV2znsL3PGyinyJQ3o7%2F9w4rbpGymPFiAJwZZif2zNXF6n%2FpxjLBsqBftIU6%2FSD%2B3kXtxJsZcRtZhR%2BJKshrjvP033m5HTgUt3%2BE7fVMZ3Ut9LkudAeFy1%2Fmk28MhvskBhlQep4X8qYNNdwb7SKaFR7vTI78hi%2B8S7mG25XjjbvHUoFrf%2FxVhePCD&X-Amz-Signature=c2433cb3631fa71e95806c3d433fb2711286c4708c5d761bab0bff4b9d1c6205&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
