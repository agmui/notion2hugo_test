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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBUBO5JW%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCIX2TkK2LvoVEYoqj%2FtkrKDesO6FGxH02zhQAIo7hpnQIgOENNR2sMtZc0eCHj7WQYC0xeLDJmR1wYiJ%2BQaJ6TRSoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBf%2FuYcDmVc6C744XSrcAz906FTHnQKZiTGWlNlk3ybffOPJrpuEzqbTYgLOEkImpNAqlGXKjjccpbXuC%2FhqkO4artwyEDyhMZvOAJyouF0vQtWeC4lxDqM0kYfomwjC6siiGUs1YgSDOfx%2BfDxl0JJj9fg6W1hqWPBD6ZpgT9zO7NRUa0HZ8AUYhtJgKUlAztfSFAKY1vmR%2FtMza7PT6F4NplkbxgNukyiHiuSutp0jlQsXfv5V12ZPVyX1f4NeTtvURi53CJplXGKkB2gZpL2dVGGm5H%2FWpMpCYySkaB93pc0gHNSFuuioYhvFujhDtHPJ5gqNE0RAGz2LtYuz2fppVfhn0mSDsruh7SZW5rdZfmk8fJy1%2FEs9iKq4Su4BL96udN4g1L%2BMnUSS4k5QOGLiNCjg%2Fe82cwWo8kaGK7ifeMQcZrEtGUcZQSr6bkv1lPYOCYKxeixEl7HsqnuRlN4mN0Ao9W7KNmAUgBP19YnnkKyA6tTWK57ByqmvT0mxzfC%2FuxRlgxG3wbz%2FJ8CDM4gUC3TaOUvi84JLU%2BGAoK1gBzbPc1Eo1WngSN7fLpodS%2Fs2SrMLpgDa7naEGXqLHLH5HYxRq2OtupkbS%2F125MhDrVv6jPDvBQILWOD0U2YQytVQbZpoqdUa3C%2B0MMaEusIGOqUBGGAPfC7kwJFa1f6zIWC8H%2Brxamk4JGMpbldP1T%2Fq%2BIqA2KpJOah8q%2FOHnVhG69NoIX0A1gXwH2%2FtE6mN8oNmpYoQjj8CoAoim6VydxNiT173UAjt7jNY6C6OPrCsjUHU7FQoARGfsFiiDvCnKjUZPsAOt2rPWYrSH2MrTeZURkj22f0%2B%2ByN7bGGx21Du%2FkBQ1x%2B8TSk%2FuEkvIE8sx1lB1xog2dlT&X-Amz-Signature=4697f1eddf31a71503c7a97b91eca48a02684c62f89b36178ca134c0ab106f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XBUBO5JW%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQCIX2TkK2LvoVEYoqj%2FtkrKDesO6FGxH02zhQAIo7hpnQIgOENNR2sMtZc0eCHj7WQYC0xeLDJmR1wYiJ%2BQaJ6TRSoq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDBf%2FuYcDmVc6C744XSrcAz906FTHnQKZiTGWlNlk3ybffOPJrpuEzqbTYgLOEkImpNAqlGXKjjccpbXuC%2FhqkO4artwyEDyhMZvOAJyouF0vQtWeC4lxDqM0kYfomwjC6siiGUs1YgSDOfx%2BfDxl0JJj9fg6W1hqWPBD6ZpgT9zO7NRUa0HZ8AUYhtJgKUlAztfSFAKY1vmR%2FtMza7PT6F4NplkbxgNukyiHiuSutp0jlQsXfv5V12ZPVyX1f4NeTtvURi53CJplXGKkB2gZpL2dVGGm5H%2FWpMpCYySkaB93pc0gHNSFuuioYhvFujhDtHPJ5gqNE0RAGz2LtYuz2fppVfhn0mSDsruh7SZW5rdZfmk8fJy1%2FEs9iKq4Su4BL96udN4g1L%2BMnUSS4k5QOGLiNCjg%2Fe82cwWo8kaGK7ifeMQcZrEtGUcZQSr6bkv1lPYOCYKxeixEl7HsqnuRlN4mN0Ao9W7KNmAUgBP19YnnkKyA6tTWK57ByqmvT0mxzfC%2FuxRlgxG3wbz%2FJ8CDM4gUC3TaOUvi84JLU%2BGAoK1gBzbPc1Eo1WngSN7fLpodS%2Fs2SrMLpgDa7naEGXqLHLH5HYxRq2OtupkbS%2F125MhDrVv6jPDvBQILWOD0U2YQytVQbZpoqdUa3C%2B0MMaEusIGOqUBGGAPfC7kwJFa1f6zIWC8H%2Brxamk4JGMpbldP1T%2Fq%2BIqA2KpJOah8q%2FOHnVhG69NoIX0A1gXwH2%2FtE6mN8oNmpYoQjj8CoAoim6VydxNiT173UAjt7jNY6C6OPrCsjUHU7FQoARGfsFiiDvCnKjUZPsAOt2rPWYrSH2MrTeZURkj22f0%2B%2ByN7bGGx21Du%2FkBQ1x%2B8TSk%2FuEkvIE8sx1lB1xog2dlT&X-Amz-Signature=d4e6994e49fed904c6ec6db49d5ec4496951ad41e4a96271f4c609aa0ba800f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
