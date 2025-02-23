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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DEMATHW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFqIWOFzBOqDJlISP0m5%2FqIyrB3LOXE9JMHNshuXkm6AIhAMI9MzHuXuCjVs6CR%2BccG91fI5Ve2iu8J7RwqTd2O8ueKv8DCBcQABoMNjM3NDIzMTgzODA1IgwrCQuhhPptjbwECR8q3AMe8%2FOEUe4WTQuwGkvpJyz9GWVLRbyv2jJ96xWOTMh9SIYSw8b4CffWzr1LzPMmHyVKlGALhVQC0T9nt5pYAudTB5JvFJtYq6auWyVg4TeXmHfDVHDlNZtOzWrrVRmaIbxWCM0%2FJOKs4gaAnXtwvsVppvOjUBt7HNYdV4pR%2FPBroEXDpg8HDc%2FwMatWZjMavUgCO%2BdKtBKqfIA8JSHd0SrHfOAlw8fKrgCbZPlyhi%2FmDGzs55G5lkBX4NMrfb2e3A3hOzJCIm3FkgHqCq%2BffofDIf30vYsdfuKQD%2FNPHSFxYG0IzuwMkRsVvdbCOvFAu3lgjXBh6lUE44gQh%2BDlgOxyzci5waTfjQH00Z2RbO5aielwWuUJePRxOfdsrGQUTESDcvSaaZiTp6pGfCoagHZnvcEV51Hqy%2FJy8AxpV6WTtt8KVdOYsL6Hx4nR2%2BdsQr5FcE6Nj%2B2HjPIXXMMJ5e%2BsDpRbKH6a8%2BC7NCIuuKEiTbblv1PUXlX5JMUQSJ8HqL4J6p2dJL4pa88kd8qZgrbfOkfqPmppC8EC3DhaPOHdj1vt2s0ruDoqPobtEQgSubv0oGE4lgs3fPf3yAEahljyIJzxOkNIHsApoXUBD3H8XImPbpO69n1fSQeWgDCZyuy9BjqkAc6igsZwGe0OPF3Ux48QoSJ1zu29dioPcywJUIzQ1a1E6%2BJeJ8HbXIKz2iX7LKN%2FPigfbDdJP3dbt3aqpTxQg4%2B%2ByzWtZmzDHcGBjbJAaH4J70vD9jIIgtaQHWi%2B%2BmEMwGv%2BT3fSk3eCXcQ740HnpYxCf2sO%2BAXfh%2B1%2BHgrpsxn7xbxkc8l4Up2aKmqaqFReerGpaUyaKRM63QC7%2Bz7IIg5BeJmF&X-Amz-Signature=ebb87a16194278eff14d27ab4629933699c4c5eb2b6a663880765ff6262b965b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667DEMATHW%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T190150Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFqIWOFzBOqDJlISP0m5%2FqIyrB3LOXE9JMHNshuXkm6AIhAMI9MzHuXuCjVs6CR%2BccG91fI5Ve2iu8J7RwqTd2O8ueKv8DCBcQABoMNjM3NDIzMTgzODA1IgwrCQuhhPptjbwECR8q3AMe8%2FOEUe4WTQuwGkvpJyz9GWVLRbyv2jJ96xWOTMh9SIYSw8b4CffWzr1LzPMmHyVKlGALhVQC0T9nt5pYAudTB5JvFJtYq6auWyVg4TeXmHfDVHDlNZtOzWrrVRmaIbxWCM0%2FJOKs4gaAnXtwvsVppvOjUBt7HNYdV4pR%2FPBroEXDpg8HDc%2FwMatWZjMavUgCO%2BdKtBKqfIA8JSHd0SrHfOAlw8fKrgCbZPlyhi%2FmDGzs55G5lkBX4NMrfb2e3A3hOzJCIm3FkgHqCq%2BffofDIf30vYsdfuKQD%2FNPHSFxYG0IzuwMkRsVvdbCOvFAu3lgjXBh6lUE44gQh%2BDlgOxyzci5waTfjQH00Z2RbO5aielwWuUJePRxOfdsrGQUTESDcvSaaZiTp6pGfCoagHZnvcEV51Hqy%2FJy8AxpV6WTtt8KVdOYsL6Hx4nR2%2BdsQr5FcE6Nj%2B2HjPIXXMMJ5e%2BsDpRbKH6a8%2BC7NCIuuKEiTbblv1PUXlX5JMUQSJ8HqL4J6p2dJL4pa88kd8qZgrbfOkfqPmppC8EC3DhaPOHdj1vt2s0ruDoqPobtEQgSubv0oGE4lgs3fPf3yAEahljyIJzxOkNIHsApoXUBD3H8XImPbpO69n1fSQeWgDCZyuy9BjqkAc6igsZwGe0OPF3Ux48QoSJ1zu29dioPcywJUIzQ1a1E6%2BJeJ8HbXIKz2iX7LKN%2FPigfbDdJP3dbt3aqpTxQg4%2B%2ByzWtZmzDHcGBjbJAaH4J70vD9jIIgtaQHWi%2B%2BmEMwGv%2BT3fSk3eCXcQ740HnpYxCf2sO%2BAXfh%2B1%2BHgrpsxn7xbxkc8l4Up2aKmqaqFReerGpaUyaKRM63QC7%2Bz7IIg5BeJmF&X-Amz-Signature=fb51d805d4678217e1d8e17aefd39ffee71f5de90462e1444e8a0d061b947795&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
