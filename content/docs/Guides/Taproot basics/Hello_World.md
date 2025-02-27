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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q3SKVKO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQC2fgD05t1nWODtAlrE88v6eyK1FteOlPgjzPu1CGCuKQIhAKCrzs0nx9pwoo6JCVZsRv%2FmC0rEmNFfmWH7ctQSidzsKv8DCGwQABoMNjM3NDIzMTgzODA1IgyiJTsIh3zO1R3bwIYq3AMu%2F9DYRysEWld%2BWOaXcZsYdSxaPrEfx6Q1ZydIpESZ8ZFE%2FNrgkjZHdWW9fA6nq77WAPmLWKIdyerynRvf5AE8J36lfk3fXnqNu77zsnQ5r6au5wi%2BkV9EeE97adm0ITJbqZUgSLFNuMh0gIXXx8Ld%2FxiUj43%2FwjIzJFXnlxF69MygCkzjaav8DQLo11qOaZTnPBokeSmY%2Fi%2FyQfK0dX%2Fe1JWI8FLppt6hsNE8rzqecDn4T7XXW3Dl7pcQ2dX9qr4eplmmZPCsZD1DCPBPMu7f1HKytE7mv6lZFfu7ipsZjjHYlsgWzZQA41RTl6rBOiOJWtH6ZTeaw1S5Ra4F14dvo0q92zgYgAokKs6AOr%2Brcgp%2FaBv5T%2FfHcq0wpqEK2ft4SYZ5uCgevjHhDV9tEgrHD3kZ9IR%2FDqwiOiPDitVIloTDllUdt40oLqSRo%2Fbv0utbqkNpZjA%2FBjnkG%2BHqXcWEBP8CUUXGkJr5LSD2VlwHHd%2FAM1gxEJhN9ye05HGIsfTr3P0oxSxcox5qD3LJc0kE2I9ktXUsXdixb%2FWV1A6O6VO1J6hWmqnvtK%2BXU%2FVATekb324DQ41YNE8EX%2BPdtsWieBHpYblR3%2Fi8FFnsl6A%2BbVkIJAUnxOxqqjgd3TDosf%2B9BjqkATzuDu2MPE5QW5UjsVjvDUSWuAoYD%2F1f6QQOaaKL8jor732NYUWAhgokeAQSnlCjRGBfuRy5G9J8WTycuuP9ReK4oMSUBVaUUSL%2BozM2h2yKIvg3Bd7ORlZIPgsdf4fCUZRv59sNSfp3%2FRwLgovqLydnP8MGSSuIrkQO6mNZ1gwT7C%2BwMJItm0URZM%2FvU5wNpXGkpKTxmOmyHDCmafY8KIFT1%2F%2BG&X-Amz-Signature=1212aa768b17342dea56099cc1c5fcb076c86798160824acfbf9933ed42921c8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q3SKVKO%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T041001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDMaCXVzLXdlc3QtMiJIMEYCIQC2fgD05t1nWODtAlrE88v6eyK1FteOlPgjzPu1CGCuKQIhAKCrzs0nx9pwoo6JCVZsRv%2FmC0rEmNFfmWH7ctQSidzsKv8DCGwQABoMNjM3NDIzMTgzODA1IgyiJTsIh3zO1R3bwIYq3AMu%2F9DYRysEWld%2BWOaXcZsYdSxaPrEfx6Q1ZydIpESZ8ZFE%2FNrgkjZHdWW9fA6nq77WAPmLWKIdyerynRvf5AE8J36lfk3fXnqNu77zsnQ5r6au5wi%2BkV9EeE97adm0ITJbqZUgSLFNuMh0gIXXx8Ld%2FxiUj43%2FwjIzJFXnlxF69MygCkzjaav8DQLo11qOaZTnPBokeSmY%2Fi%2FyQfK0dX%2Fe1JWI8FLppt6hsNE8rzqecDn4T7XXW3Dl7pcQ2dX9qr4eplmmZPCsZD1DCPBPMu7f1HKytE7mv6lZFfu7ipsZjjHYlsgWzZQA41RTl6rBOiOJWtH6ZTeaw1S5Ra4F14dvo0q92zgYgAokKs6AOr%2Brcgp%2FaBv5T%2FfHcq0wpqEK2ft4SYZ5uCgevjHhDV9tEgrHD3kZ9IR%2FDqwiOiPDitVIloTDllUdt40oLqSRo%2Fbv0utbqkNpZjA%2FBjnkG%2BHqXcWEBP8CUUXGkJr5LSD2VlwHHd%2FAM1gxEJhN9ye05HGIsfTr3P0oxSxcox5qD3LJc0kE2I9ktXUsXdixb%2FWV1A6O6VO1J6hWmqnvtK%2BXU%2FVATekb324DQ41YNE8EX%2BPdtsWieBHpYblR3%2Fi8FFnsl6A%2BbVkIJAUnxOxqqjgd3TDosf%2B9BjqkATzuDu2MPE5QW5UjsVjvDUSWuAoYD%2F1f6QQOaaKL8jor732NYUWAhgokeAQSnlCjRGBfuRy5G9J8WTycuuP9ReK4oMSUBVaUUSL%2BozM2h2yKIvg3Bd7ORlZIPgsdf4fCUZRv59sNSfp3%2FRwLgovqLydnP8MGSSuIrkQO6mNZ1gwT7C%2BwMJItm0URZM%2FvU5wNpXGkpKTxmOmyHDCmafY8KIFT1%2F%2BG&X-Amz-Signature=1441cd5c85276d91a8d70db5278157ad96976c4228c81c5ba4e4ee5c1b69ff57&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
