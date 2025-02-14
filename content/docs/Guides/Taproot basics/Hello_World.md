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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB2LYAQP%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBY4SJSbOogTLhHwIQrZ4uyBltsZ544OHRL55mOS90eQIgQWhAeTMwFiY4JghejmeykGgiZlNEVIIzcHFmUB2qrkwq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGqdrn7fsknp9yhtPircA%2FEp3X8D48sE5%2BGQOZ8OVyXvqx1eWmwalKqwjEof02ROSbcgG1mPGpORxVBb0Y5laMRVwiFcvgfTUbWMbNWjPRFKu%2FF3q%2F8UbdLQhWr5Qo74S4Xi7yp26SpV1fNF9B5%2B6VhLGpH%2BggblLLM8rJd2Gqg1DeHGQk3DqVE9MGqwgM15EKdFiNeiM0ltmYeC%2FN34TuUXHE11lFCcHoJ%2FFX0k%2FkQmbDdHZzPQO14o9FxPOYmEIGK5tZedI60JzXxr58nS%2FJurjAgHMZgRtV%2FvM5KPF6xDrtJXNFLpWnsUpLkdmtXw13i5ZOHkh7gDWiJYc7EUFBsn7Xjk7m%2FljH9%2FWobxt2XYHwjMIDIksv11GxK5TZWqOSUZNYsrNJJx2MFDgBTwYHUsU7f6GCY2f0qVCpXJjiMuo7S2uaPkyXOWZTIjexf1%2FiOvUoZA%2FWeREF%2F0y4qcMqmlrTumx%2BuD7MLNqOuqDlke9mKZ4%2BpJMxAZud%2B26sG4lUPeRZUC740xfPhXfyFANpWNazmoz1DehlQj%2BJPrKfiBfXh9ANdSFRATTjQQQRDH%2FYuLzf5AetZSAHCjgOeTDQF4MTYEXDVxdfLGtE%2BFmCVMraz0XBDe4of0GbtaIsuux%2FblRlTD9AjSvA4aMLvBu70GOqUB0A411dv8sP0F9vYJnv3wLIpaGZv9WE59v7WDwwazYvSMKFcaVFGfosDM1TvKRrTQMBnYpwyIENZxma1gofNtcaXQtWhR42EIGom37h7nUQWeMWqJ4qe%2F7oUWhDjdBGY2MHTaL8%2BJm56RmAdgn5dMeFAnrgvkuOUrElNUW1LSJU8iJ5UOFRUEHAMITp7vqA51AH%2F%2FWr4RFQ8rOHCTSYLzAQPsOyCW&X-Amz-Signature=ae23cdbc9c13fb077754c486c67ca2036c26f5f161781ec8102ded793011c2ba&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB2LYAQP%2F20250214%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250214T070743Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDBY4SJSbOogTLhHwIQrZ4uyBltsZ544OHRL55mOS90eQIgQWhAeTMwFiY4JghejmeykGgiZlNEVIIzcHFmUB2qrkwq%2FwMIJxAAGgw2Mzc0MjMxODM4MDUiDGqdrn7fsknp9yhtPircA%2FEp3X8D48sE5%2BGQOZ8OVyXvqx1eWmwalKqwjEof02ROSbcgG1mPGpORxVBb0Y5laMRVwiFcvgfTUbWMbNWjPRFKu%2FF3q%2F8UbdLQhWr5Qo74S4Xi7yp26SpV1fNF9B5%2B6VhLGpH%2BggblLLM8rJd2Gqg1DeHGQk3DqVE9MGqwgM15EKdFiNeiM0ltmYeC%2FN34TuUXHE11lFCcHoJ%2FFX0k%2FkQmbDdHZzPQO14o9FxPOYmEIGK5tZedI60JzXxr58nS%2FJurjAgHMZgRtV%2FvM5KPF6xDrtJXNFLpWnsUpLkdmtXw13i5ZOHkh7gDWiJYc7EUFBsn7Xjk7m%2FljH9%2FWobxt2XYHwjMIDIksv11GxK5TZWqOSUZNYsrNJJx2MFDgBTwYHUsU7f6GCY2f0qVCpXJjiMuo7S2uaPkyXOWZTIjexf1%2FiOvUoZA%2FWeREF%2F0y4qcMqmlrTumx%2BuD7MLNqOuqDlke9mKZ4%2BpJMxAZud%2B26sG4lUPeRZUC740xfPhXfyFANpWNazmoz1DehlQj%2BJPrKfiBfXh9ANdSFRATTjQQQRDH%2FYuLzf5AetZSAHCjgOeTDQF4MTYEXDVxdfLGtE%2BFmCVMraz0XBDe4of0GbtaIsuux%2FblRlTD9AjSvA4aMLvBu70GOqUB0A411dv8sP0F9vYJnv3wLIpaGZv9WE59v7WDwwazYvSMKFcaVFGfosDM1TvKRrTQMBnYpwyIENZxma1gofNtcaXQtWhR42EIGom37h7nUQWeMWqJ4qe%2F7oUWhDjdBGY2MHTaL8%2BJm56RmAdgn5dMeFAnrgvkuOUrElNUW1LSJU8iJ5UOFRUEHAMITp7vqA51AH%2F%2FWr4RFQ8rOHCTSYLzAQPsOyCW&X-Amz-Signature=93130adbae8f4a03e4efab3a9b09caff9cfca54ca7e3493ae26c053b9f49e550&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
