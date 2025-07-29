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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCKJCYU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBuu7IkkVJdSv8SmnuX6X2LgXqWggCEmruAgqCfbwqDeAiAaQVANWqZSALibCwj538TWRbOkGFcUkAHWEYT0UOiOsCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWm50whUywx6WaoS8KtwDjAdCedyoCyKCtIZ70WWkzbCti%2F1ECcXO%2B8Q7S6u8JBNyIiB7PWjbQNoMpkgcG7z%2FlfEe2tN7PEKo6FgJVpiKUJSEb1jkhU9%2BfevU1QDmxN%2Bgyfi0Wqlzfi35RmTJs9GmArQpx6D2%2FYe8jGR2H%2Bm2DSzir9maZ6j9sIyzrWeJiupY2JTbd866SrzJ37%2FR%2BUNCJdWV%2BjBj%2BW%2FIvqpl93qT3YgrH0fAsH12CRaVwq%2FKNhr8CeiDALY7bV6qqSdWdZU5nlE5uiJidnPGXjZSfR%2FuXEyQUSUfT%2F54Wd7YJRgxZvDK1f7hpECt7xbuieATAFCMJ%2BWy%2Bi3rRSOG36Fz1nG%2FD1qsNHt%2FxXSK3shwVEukA2DxFAbfl7XBQskp6ZzpgNlxQZ0H%2BPjnvuGb2DbSdy0bpTXVatOW0MpwjPEtp54%2BVU%2FqCSWTZIUTts2o6gzKV%2B7x%2BoTlwEUjcT8N5mLkKtim4HsjMOjWC8XHVq8d0SDB68IXU35RpHr0XknbVn46w%2BaxDgm2BRvlGmfbbT%2FVBZ2ildy2v0NAqeO8Je3rSOBPffryXZ76Ivg8adQYfgp6UjK3oe5ZrsOG5Aao%2BmaGMrXSa1dOqj1Rwkm8am11VpF8eHY%2Fv%2F24PSRn4ndCDzUwpIKixAY6pgGniIUvGTSoJAAv4uGd2KbPclYEUrtsANtqlZ7pxfIAPxNahOH%2Fv%2B5%2F4inoN%2F95AdZOfk5mKGk6J5HfFCfkpbovtTcHXquL0%2F8pOUPxqglCr%2F2yLPpR3uvyMcFh4dw1scwTyYy%2FPTcyXj3oi%2BQBJ5LoS4zx3mJhMC%2BE2%2BulxfLpGIa49TGfMaDxbqZUZuYhw6W%2FY0nO%2FVyNJymasHnubGk%2FYqCsNYzw&X-Amz-Signature=448a414c751643aa6831a9ecaf6671969092039ebbf35164717d9205150e5ff4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCKJCYU%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T081333Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJGMEQCIBuu7IkkVJdSv8SmnuX6X2LgXqWggCEmruAgqCfbwqDeAiAaQVANWqZSALibCwj538TWRbOkGFcUkAHWEYT0UOiOsCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWm50whUywx6WaoS8KtwDjAdCedyoCyKCtIZ70WWkzbCti%2F1ECcXO%2B8Q7S6u8JBNyIiB7PWjbQNoMpkgcG7z%2FlfEe2tN7PEKo6FgJVpiKUJSEb1jkhU9%2BfevU1QDmxN%2Bgyfi0Wqlzfi35RmTJs9GmArQpx6D2%2FYe8jGR2H%2Bm2DSzir9maZ6j9sIyzrWeJiupY2JTbd866SrzJ37%2FR%2BUNCJdWV%2BjBj%2BW%2FIvqpl93qT3YgrH0fAsH12CRaVwq%2FKNhr8CeiDALY7bV6qqSdWdZU5nlE5uiJidnPGXjZSfR%2FuXEyQUSUfT%2F54Wd7YJRgxZvDK1f7hpECt7xbuieATAFCMJ%2BWy%2Bi3rRSOG36Fz1nG%2FD1qsNHt%2FxXSK3shwVEukA2DxFAbfl7XBQskp6ZzpgNlxQZ0H%2BPjnvuGb2DbSdy0bpTXVatOW0MpwjPEtp54%2BVU%2FqCSWTZIUTts2o6gzKV%2B7x%2BoTlwEUjcT8N5mLkKtim4HsjMOjWC8XHVq8d0SDB68IXU35RpHr0XknbVn46w%2BaxDgm2BRvlGmfbbT%2FVBZ2ildy2v0NAqeO8Je3rSOBPffryXZ76Ivg8adQYfgp6UjK3oe5ZrsOG5Aao%2BmaGMrXSa1dOqj1Rwkm8am11VpF8eHY%2Fv%2F24PSRn4ndCDzUwpIKixAY6pgGniIUvGTSoJAAv4uGd2KbPclYEUrtsANtqlZ7pxfIAPxNahOH%2Fv%2B5%2F4inoN%2F95AdZOfk5mKGk6J5HfFCfkpbovtTcHXquL0%2F8pOUPxqglCr%2F2yLPpR3uvyMcFh4dw1scwTyYy%2FPTcyXj3oi%2BQBJ5LoS4zx3mJhMC%2BE2%2BulxfLpGIa49TGfMaDxbqZUZuYhw6W%2FY0nO%2FVyNJymasHnubGk%2FYqCsNYzw&X-Amz-Signature=c1ad439c4bff3df39562a95645796e077c12f1d2672b67ede677b0e37ed0547d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
