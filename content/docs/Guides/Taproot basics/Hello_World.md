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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466456YLTE2%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKyaPcHjwY4RZUs5oLdb3ry5DH8yXf7OIzVUQoJkIDxAiEAiuW8B0%2BR72uvxF1oVN5S8GWoU9QZEsiC02XEm8YmMwoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3w1Zk2KTGwIvlNDyrcA6xcXvHI0KLmMhP0OGK5TmztGp7ZQXPjsENV2oN8q5oeszdSFkU4ULthqni8uUz%2FjI20NEjFlANbtCKv6tMsYzSatLhVi8%2BXY05Jt3mbud7ckcCIYgeUewHwsWdVxkz%2FLoOsAlBbpLFdoRiWYbfb7QiyS5Ak6gPWmbJCgLGWWmEocpslBk77gf23J%2BsJqYJdj96ESqfRweqk855CMgb5n7mOVvooDtbZTr%2FdaQuPXbg5cXpbjODfGROjyNFff5ViLkjUoK3EqT6%2FNcRXDnD%2FI0%2Bd6yQyYShUV6ne%2FxqqEOt3oIlJxvtQ%2BimUfPAiG9TQW9zz7cv6ewE9YpXwhaSAmEFDb0S%2FSF0Fttp6l9uhdAX57xuWFUILm7N5JQdSHx5JJu7aPkUTXjuMp%2BnbvbFH4%2BtGplGvi9sHugsmnK7GGEibXE9VvzS%2FkcGYxvcXKGxP4btoybFSBvefjfrT6Q7%2B44Rur7ZpwyJ8JNJuROXpKdNelheg3jaVMAHWieBkY7ZSvwTrAYVPuA124aY0exOnb6vU01RlFmULdnK7EO20wMEe94SVK%2BRfF2bj4bpgc2Bmg8OUBZvKjPdyS%2FzWp%2BUUSxOuOHoL2UAwPmsDYZ54%2FX3yNHuxOLKMkcUHtT6YMI%2FnpcIGOqUB7%2BuDN1e6ZTwpVaGUCsnxbvuU6p3A8A49z58xap5UBVB6E%2B3SlZoFJPH4iOLiwlZ3nG9UQvN2oA7I5Fa4HPUhqtMIh%2FYjAzNJ3XWlnkcAtaLySuRNJOAZgMWQ%2Bz9vBrbIMTRrxqeArTWh8M5vWhBmK%2BkC1MhfuacAUYlfl8FahQrLHu5M%2FbArYsQ03erY1HDFJmr538FzXDDhr7kSg1nF%2Bgqzyg5Q&X-Amz-Signature=1a3aecf489a134bb49f1f0f598d407b714c51cb96205de6411c66f296fff532e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466456YLTE2%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T140751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGKyaPcHjwY4RZUs5oLdb3ry5DH8yXf7OIzVUQoJkIDxAiEAiuW8B0%2BR72uvxF1oVN5S8GWoU9QZEsiC02XEm8YmMwoqiAQI1f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL3w1Zk2KTGwIvlNDyrcA6xcXvHI0KLmMhP0OGK5TmztGp7ZQXPjsENV2oN8q5oeszdSFkU4ULthqni8uUz%2FjI20NEjFlANbtCKv6tMsYzSatLhVi8%2BXY05Jt3mbud7ckcCIYgeUewHwsWdVxkz%2FLoOsAlBbpLFdoRiWYbfb7QiyS5Ak6gPWmbJCgLGWWmEocpslBk77gf23J%2BsJqYJdj96ESqfRweqk855CMgb5n7mOVvooDtbZTr%2FdaQuPXbg5cXpbjODfGROjyNFff5ViLkjUoK3EqT6%2FNcRXDnD%2FI0%2Bd6yQyYShUV6ne%2FxqqEOt3oIlJxvtQ%2BimUfPAiG9TQW9zz7cv6ewE9YpXwhaSAmEFDb0S%2FSF0Fttp6l9uhdAX57xuWFUILm7N5JQdSHx5JJu7aPkUTXjuMp%2BnbvbFH4%2BtGplGvi9sHugsmnK7GGEibXE9VvzS%2FkcGYxvcXKGxP4btoybFSBvefjfrT6Q7%2B44Rur7ZpwyJ8JNJuROXpKdNelheg3jaVMAHWieBkY7ZSvwTrAYVPuA124aY0exOnb6vU01RlFmULdnK7EO20wMEe94SVK%2BRfF2bj4bpgc2Bmg8OUBZvKjPdyS%2FzWp%2BUUSxOuOHoL2UAwPmsDYZ54%2FX3yNHuxOLKMkcUHtT6YMI%2FnpcIGOqUB7%2BuDN1e6ZTwpVaGUCsnxbvuU6p3A8A49z58xap5UBVB6E%2B3SlZoFJPH4iOLiwlZ3nG9UQvN2oA7I5Fa4HPUhqtMIh%2FYjAzNJ3XWlnkcAtaLySuRNJOAZgMWQ%2Bz9vBrbIMTRrxqeArTWh8M5vWhBmK%2BkC1MhfuacAUYlfl8FahQrLHu5M%2FbArYsQ03erY1HDFJmr538FzXDDhr7kSg1nF%2Bgqzyg5Q&X-Amz-Signature=dfa2c1bdfcc1d1937b123507372f156679a6c621328128531c5aefaa07d84fb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
