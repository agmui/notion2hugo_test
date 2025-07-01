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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHNPN4W%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFofXwAJyFhAyzfWcNeS4HlFBfjWy%2B4t81aMwuLJ9I45AiBqMBSvOG%2BnaL%2FZvEbt9v270QCgAOIfbV%2BrkuPty%2FEvpSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMei28M%2FZu9BOk%2BPKbKtwDVFg5vL3hIpxCghysvFijfjn4HqdhLVC6kzool5x1OcbcUEeksyVsoaoG2VwoC%2Fg1F8egp5ImW1EtduSLNxTKmQ%2BdttgnLOR%2BqATBes4vFip2donxXIWrd4%2BDq72KU3crbBfGa3aM5xs0jzkkN7yK6s%2FYo%2BgJ8qV4UPujUisQCazY3apfnezih6RTHmCkArqG2OZNcz%2BFiBoFdcsIio%2FdYzpNQTnWnmpPH%2B9xmDVni%2F70pFdV5th4JS%2BHesH1TyROv9oGYdLqnXA0wXKmcEhCt3XevrHQ6ZjqzhofKrWFVSESMp%2Fpvp0XtPvckYBCxqvvvkTc7l9Mqk6NpIfBH4c51%2BH%2B545vrocQLk6OTZr6Jg1yzy4uzFpJf376zLXnv13k4X8XQoB7OyL3zkxcaA5U7ywfoXEnaSzMWcjuT9xHVvJwnEjl0Kk1Zaif8%2B3qQIqjjcrm1jMTONE%2BFx5rOfR4NcVwLtSkEZ5uQUPyOLQ5DCy1iyzN6U4kMT83OxisyYwbXbbhxc%2FzyYJsmaKanVZtSz2%2Fl9DxRIBZE1D4j4dzifiQJmhnc8z6s0K4ltgU7ocBf7xEQWAD4cJrm7cWHIUD3oxVNvofneTJYyPQAoEaqXjmsF1DLYCl%2BJOstysw8aWPwwY6pgEG74%2BuC%2FB6hVyscNPTnU7kejMCFN2ZGQqwClb5%2Fh9Qxao0BDRpH5esv3ciweHx2d4XlyHsT5s1TsEDAeRIZgizL2L2tZ6cyrXO%2BHs%2B5S%2FHcVtICThQVZV9O%2FnwmWkwQbLRXVM8G6Ygksjt4mlpsYaiGNlSkTgMAs8WSfbvDm5pDTyOE6TLzLND9zSkrYfzaBjnsc%2FGdybDTQMaT5UYTqzGtBQcetVI&X-Amz-Signature=96979d1bf5bbe469c472d48c97f9e4914736ab4b81da667c3b19873584588261&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FHNPN4W%2F20250701%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250701T132601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFofXwAJyFhAyzfWcNeS4HlFBfjWy%2B4t81aMwuLJ9I45AiBqMBSvOG%2BnaL%2FZvEbt9v270QCgAOIfbV%2BrkuPty%2FEvpSqIBAjV%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMei28M%2FZu9BOk%2BPKbKtwDVFg5vL3hIpxCghysvFijfjn4HqdhLVC6kzool5x1OcbcUEeksyVsoaoG2VwoC%2Fg1F8egp5ImW1EtduSLNxTKmQ%2BdttgnLOR%2BqATBes4vFip2donxXIWrd4%2BDq72KU3crbBfGa3aM5xs0jzkkN7yK6s%2FYo%2BgJ8qV4UPujUisQCazY3apfnezih6RTHmCkArqG2OZNcz%2BFiBoFdcsIio%2FdYzpNQTnWnmpPH%2B9xmDVni%2F70pFdV5th4JS%2BHesH1TyROv9oGYdLqnXA0wXKmcEhCt3XevrHQ6ZjqzhofKrWFVSESMp%2Fpvp0XtPvckYBCxqvvvkTc7l9Mqk6NpIfBH4c51%2BH%2B545vrocQLk6OTZr6Jg1yzy4uzFpJf376zLXnv13k4X8XQoB7OyL3zkxcaA5U7ywfoXEnaSzMWcjuT9xHVvJwnEjl0Kk1Zaif8%2B3qQIqjjcrm1jMTONE%2BFx5rOfR4NcVwLtSkEZ5uQUPyOLQ5DCy1iyzN6U4kMT83OxisyYwbXbbhxc%2FzyYJsmaKanVZtSz2%2Fl9DxRIBZE1D4j4dzifiQJmhnc8z6s0K4ltgU7ocBf7xEQWAD4cJrm7cWHIUD3oxVNvofneTJYyPQAoEaqXjmsF1DLYCl%2BJOstysw8aWPwwY6pgEG74%2BuC%2FB6hVyscNPTnU7kejMCFN2ZGQqwClb5%2Fh9Qxao0BDRpH5esv3ciweHx2d4XlyHsT5s1TsEDAeRIZgizL2L2tZ6cyrXO%2BHs%2B5S%2FHcVtICThQVZV9O%2FnwmWkwQbLRXVM8G6Ygksjt4mlpsYaiGNlSkTgMAs8WSfbvDm5pDTyOE6TLzLND9zSkrYfzaBjnsc%2FGdybDTQMaT5UYTqzGtBQcetVI&X-Amz-Signature=a5073438c0791d5c321a29e2a4760c0cbc3f5ad0ae5c886827fd7fe144033784&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
