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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4GCZLAM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIE4ETUzYN9Sh7kZhkay7VoF1oytdDkN0qdmr0dYVLKfXAiEA6HNTtHxcnO5h1elEgD%2BTIgd46Feolrn8xpoodDaD%2F08q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDN%2BwIRkmxE8NvNUo%2BCrcA98gNE%2BTmL06jt41r984E%2FHgfJkigPfnOr15rSxSF5carkeANEY5hWViRSXmck33a3oa7871le7rjiivm0FB5rh%2FgOqy6PKkOE3Z%2B79b6Zlj4f8mhtvaPoC7sX%2FK4SkZZnVlsFWvjgygxWh5Q0gNXMGSgGSPrTMdo7l9BwlcCTuQfZlIHjpWuWhMwY9IWFrShvYUtNkZapvnhlBdwD%2BXQ2Zg%2Ftzj5NZ2E3KKW7n2%2F2LRIyRW19azTnJ5gGDQN%2B7hxvYjw6PK4Wr0pgZJ1%2Fid28dMjFyGx%2FUKDPcPkUHazU7iduS0x%2BmMUfiUtTxtgaBWLmwBlH0HC5VZaG5YuCpw7aNB54jopUb7B%2BlB7uJ5G59jchvrzM1G%2F%2BHQpIKdGHkwwjmnIZGEXsKUwJayCgQo7k9QrU4EwOKiD9saWZUYnL%2BiCzPatp6lIXrJzhyE%2Bk7WGylQJNXzIP2kr24V2OVLa2TLMwV%2BY8iBV9aymLixrNhRKF91BFJx1affB8Zk%2B8L%2FZEQl%2FlCwCVOnLCqqSo7YJ9bAyGq%2BcmvIKn%2BVYkTJmkAFnaglJBVKk7DbBSg5ujT7Vd6Ztf4UF2u8Be7ggMHAAab6lnR9Ff2ATsgTbJVO1xF5OjVVLbbN3RI41rTQMLars74GOqUBV1MFl3XbwGRNCIFTprBB3Eb8vTOtwRKsZhc6fOfPftigf%2FBFEaMZGSA4XsdNpSC3ytrVaJ49FgJxaq4Y5fM8Bjwv8lS7m9USJNvBRfu023GDCtQB0lA1mQ939YOMLKAhOr%2FmoSNxADmzlF4tVKPY27KO2%2BTuJ0VCRJSurVZLuEyRnVOEE1v8r3ngL7xGh5e4ReqLSJNRG8dL4Q%2BHQNjJSnN%2B9nG5&X-Amz-Signature=c016d20a9cf0332638e59d85840ee0c44924eafca0118302a05ae49e54b139cf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4GCZLAM%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T003316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIE4ETUzYN9Sh7kZhkay7VoF1oytdDkN0qdmr0dYVLKfXAiEA6HNTtHxcnO5h1elEgD%2BTIgd46Feolrn8xpoodDaD%2F08q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDN%2BwIRkmxE8NvNUo%2BCrcA98gNE%2BTmL06jt41r984E%2FHgfJkigPfnOr15rSxSF5carkeANEY5hWViRSXmck33a3oa7871le7rjiivm0FB5rh%2FgOqy6PKkOE3Z%2B79b6Zlj4f8mhtvaPoC7sX%2FK4SkZZnVlsFWvjgygxWh5Q0gNXMGSgGSPrTMdo7l9BwlcCTuQfZlIHjpWuWhMwY9IWFrShvYUtNkZapvnhlBdwD%2BXQ2Zg%2Ftzj5NZ2E3KKW7n2%2F2LRIyRW19azTnJ5gGDQN%2B7hxvYjw6PK4Wr0pgZJ1%2Fid28dMjFyGx%2FUKDPcPkUHazU7iduS0x%2BmMUfiUtTxtgaBWLmwBlH0HC5VZaG5YuCpw7aNB54jopUb7B%2BlB7uJ5G59jchvrzM1G%2F%2BHQpIKdGHkwwjmnIZGEXsKUwJayCgQo7k9QrU4EwOKiD9saWZUYnL%2BiCzPatp6lIXrJzhyE%2Bk7WGylQJNXzIP2kr24V2OVLa2TLMwV%2BY8iBV9aymLixrNhRKF91BFJx1affB8Zk%2B8L%2FZEQl%2FlCwCVOnLCqqSo7YJ9bAyGq%2BcmvIKn%2BVYkTJmkAFnaglJBVKk7DbBSg5ujT7Vd6Ztf4UF2u8Be7ggMHAAab6lnR9Ff2ATsgTbJVO1xF5OjVVLbbN3RI41rTQMLars74GOqUBV1MFl3XbwGRNCIFTprBB3Eb8vTOtwRKsZhc6fOfPftigf%2FBFEaMZGSA4XsdNpSC3ytrVaJ49FgJxaq4Y5fM8Bjwv8lS7m9USJNvBRfu023GDCtQB0lA1mQ939YOMLKAhOr%2FmoSNxADmzlF4tVKPY27KO2%2BTuJ0VCRJSurVZLuEyRnVOEE1v8r3ngL7xGh5e4ReqLSJNRG8dL4Q%2BHQNjJSnN%2B9nG5&X-Amz-Signature=3201f5d6e1c786ca2837aa77054d677d67e22e905151c49ec8c89bdb123555e0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
