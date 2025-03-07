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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAS5WUNP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC4nXkqtb%2BIUgYpgSvha%2BUYh4bhfZqhqAVEJEWb6kqmYwIgNgy9CRjbxsnZZr9EQgSXM1LJ6lONJi%2FnlLxV1kzKEgwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJO8sWKskXKo76jBASrcA0xchiFbJFj%2BS%2BBwD9XknhUsh3BUU9MjTZyjn8qjJR%2F8s45QEkwTMza01Vo3oJLx9If730v97hXYGvyrEXkAwE%2FNx8Tt%2FsrIHQ%2B8qd%2Fs4%2F9HEytnjB1FiVCVowNz24V37qRlo9UbRsg3ENQvyXy9sh67FNAPRQ8SKj461fMbnWNzMV8SH%2FfisleTKoCdiqdxn742EeZdhyANhTzHXJ3RZLurH78C5gTWQe9CeIdNXxUHe0cl1NPGOk3ptxGMdEQpKvDiJyf2p8NJHtkjL%2FrKDd2Zqezj%2Fx20KyymJT7U8XEPq0lUiNeTktkIWIJsRGCSjQ5np9zH0Ldx1MQZOVKZwVUcz7iCoPcdeUXSC4nzpGJcr0Qyfb%2F9XZ9HT%2BJ4ImQnQMRccGtFeBQEHdfZA4XrYVdai%2B3bzC0PEO0HP%2FvmLv%2BYwTOudfB6c9BgoWUHSR6niR1mxiYb0tmgkv%2Fh%2BL%2BLuTHE39tESodE%2BJ9Mr6JtD0mnsbqAdux6HUHMkJbBAVia6RC5iOJVptgN92Qcvy69tGV5EXhk1eXQmDLHV6YnoCgTvK5Q46KH1JLwEb6sk3kHLaItQpywgTMEP2oxdNfQwnUtELY2bjgRqec13T470WuCbfkmZCqj%2FUk0VBlLMMS%2FrL4GOqUB%2FmpeuPJB2wPqakCFzrbZAK45LX2LB%2Bh7kOkJhBGrZAQfu%2BoeNdEysIHXI6uC3uUtzoWIwIUJPvAlEcGlvbubM8zX79sGkEzh8nND%2FqPewYdPdKPenypEfZfpCJivVdgKulV1eARvmKu3t3EqQRhhXe%2FkQ%2BtxxLrU4OJzGgCpb6fgUHhhbEFtk%2BxPBZpHzpdO7t4U%2FUNXXDZvq6RXBn%2F2hYHhfhW1&X-Amz-Signature=39f7a13d8af04e76d2f4439016cc1aa050500aa74c77103fa762108b932695bb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAS5WUNP%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T170658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJHMEUCIQC4nXkqtb%2BIUgYpgSvha%2BUYh4bhfZqhqAVEJEWb6kqmYwIgNgy9CRjbxsnZZr9EQgSXM1LJ6lONJi%2FnlLxV1kzKEgwq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDJO8sWKskXKo76jBASrcA0xchiFbJFj%2BS%2BBwD9XknhUsh3BUU9MjTZyjn8qjJR%2F8s45QEkwTMza01Vo3oJLx9If730v97hXYGvyrEXkAwE%2FNx8Tt%2FsrIHQ%2B8qd%2Fs4%2F9HEytnjB1FiVCVowNz24V37qRlo9UbRsg3ENQvyXy9sh67FNAPRQ8SKj461fMbnWNzMV8SH%2FfisleTKoCdiqdxn742EeZdhyANhTzHXJ3RZLurH78C5gTWQe9CeIdNXxUHe0cl1NPGOk3ptxGMdEQpKvDiJyf2p8NJHtkjL%2FrKDd2Zqezj%2Fx20KyymJT7U8XEPq0lUiNeTktkIWIJsRGCSjQ5np9zH0Ldx1MQZOVKZwVUcz7iCoPcdeUXSC4nzpGJcr0Qyfb%2F9XZ9HT%2BJ4ImQnQMRccGtFeBQEHdfZA4XrYVdai%2B3bzC0PEO0HP%2FvmLv%2BYwTOudfB6c9BgoWUHSR6niR1mxiYb0tmgkv%2Fh%2BL%2BLuTHE39tESodE%2BJ9Mr6JtD0mnsbqAdux6HUHMkJbBAVia6RC5iOJVptgN92Qcvy69tGV5EXhk1eXQmDLHV6YnoCgTvK5Q46KH1JLwEb6sk3kHLaItQpywgTMEP2oxdNfQwnUtELY2bjgRqec13T470WuCbfkmZCqj%2FUk0VBlLMMS%2FrL4GOqUB%2FmpeuPJB2wPqakCFzrbZAK45LX2LB%2Bh7kOkJhBGrZAQfu%2BoeNdEysIHXI6uC3uUtzoWIwIUJPvAlEcGlvbubM8zX79sGkEzh8nND%2FqPewYdPdKPenypEfZfpCJivVdgKulV1eARvmKu3t3EqQRhhXe%2FkQ%2BtxxLrU4OJzGgCpb6fgUHhhbEFtk%2BxPBZpHzpdO7t4U%2FUNXXDZvq6RXBn%2F2hYHhfhW1&X-Amz-Signature=d840426c589d0c31df29a61b8eb4be83562014bde25714775f8ffdf703483aa4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
