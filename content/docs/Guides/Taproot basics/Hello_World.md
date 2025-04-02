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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2KXHHXF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDnav9M611Niju%2BNfmryiGy8KCiCQHHvJsl26hdIdEKpQIhALuIYwSzTyb1BnFo%2F24TcdveO9nBXVW%2BPm%2FGI1pO3pMxKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEu81QJRYmUB0udCsq3APO2imRHgZ3WFfg3n0xb%2BvK%2BOaT32ptv%2BmZBN7Oa8ZzOgoRfcussxPaMlsmy8CW5TpxyTRALbaFI%2FdAw2bHwnN7qfDc%2B2YRmXtltWbPvwr6rIneeqQH3gWv%2BhckHVnfrvaq2v8inmSm1lGLurRd6u69CXKR5qhLiZcn%2BsmFf41cIAcARb69k2IVNc6%2BYztaCdHnYxymSRDP6TNOxFENGuQT4JWBpovchQyUpSGBzrM%2B1SuguRtk065j1RldHnyi8lWngvIoxP61qnRjSczx8xQh67qaQA8ZOraMj0tKdWlu%2FnCbZalwz3b5YUKPfygZc%2Br8QIQg1GM4pBBMoPh0CvAg4NBe19GvlL3os8Fb2LVtV%2FO3CBaVaQC9YQIbbeOfnjY3croVDNpf7MGqSs%2B0VwcfP5kc0OE%2FZ%2BQF38itNjzqPR%2FXNsMH6qxEv%2FXjIwqCkLsZ0yMr8ZS92lop4hzkytD2vs11rI%2BmddcEgJLdc3o%2F%2FECtpxvthfi832oIX3JFneKqyHHhVsHFURlzWlkxN8DADloWnCVi1%2BQwQwkZBEZovpK%2BBX5IBghgL3jJzZrZowIGkODS%2FlYFpNZwW3iBT5DM1pbvYhZYCl8M5zpfGOHAnjibXAd8Ra9mD%2FKUOzC3%2B7S%2FBjqkAQwcGUwKY1%2BH1U1fujXAaAZQLGL5OkPbpj3T6u57pPceEifui3pMkEGHMQQZ6yDI9PfWFeI4XevjTPO8r4sCJMLLqTIu0v4KhSUjRbJMCiOc0H42D3sNwhrRuUMvLb58w%2FDxVIt%2BYFt3BUt%2BXQduAc1VhHgWEWVxTrp0Ggj2KfI469DXKDkRT8saFkPDClmvg1gA7IZeDVYAoP8OaTJa%2BaWO7U%2BZ&X-Amz-Signature=9f89a131fdf9e9b18ecb74b75604508a18b5ed5e97d125067c23c187355f4355&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2KXHHXF%2F20250402%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250402T161013Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDnav9M611Niju%2BNfmryiGy8KCiCQHHvJsl26hdIdEKpQIhALuIYwSzTyb1BnFo%2F24TcdveO9nBXVW%2BPm%2FGI1pO3pMxKogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwEu81QJRYmUB0udCsq3APO2imRHgZ3WFfg3n0xb%2BvK%2BOaT32ptv%2BmZBN7Oa8ZzOgoRfcussxPaMlsmy8CW5TpxyTRALbaFI%2FdAw2bHwnN7qfDc%2B2YRmXtltWbPvwr6rIneeqQH3gWv%2BhckHVnfrvaq2v8inmSm1lGLurRd6u69CXKR5qhLiZcn%2BsmFf41cIAcARb69k2IVNc6%2BYztaCdHnYxymSRDP6TNOxFENGuQT4JWBpovchQyUpSGBzrM%2B1SuguRtk065j1RldHnyi8lWngvIoxP61qnRjSczx8xQh67qaQA8ZOraMj0tKdWlu%2FnCbZalwz3b5YUKPfygZc%2Br8QIQg1GM4pBBMoPh0CvAg4NBe19GvlL3os8Fb2LVtV%2FO3CBaVaQC9YQIbbeOfnjY3croVDNpf7MGqSs%2B0VwcfP5kc0OE%2FZ%2BQF38itNjzqPR%2FXNsMH6qxEv%2FXjIwqCkLsZ0yMr8ZS92lop4hzkytD2vs11rI%2BmddcEgJLdc3o%2F%2FECtpxvthfi832oIX3JFneKqyHHhVsHFURlzWlkxN8DADloWnCVi1%2BQwQwkZBEZovpK%2BBX5IBghgL3jJzZrZowIGkODS%2FlYFpNZwW3iBT5DM1pbvYhZYCl8M5zpfGOHAnjibXAd8Ra9mD%2FKUOzC3%2B7S%2FBjqkAQwcGUwKY1%2BH1U1fujXAaAZQLGL5OkPbpj3T6u57pPceEifui3pMkEGHMQQZ6yDI9PfWFeI4XevjTPO8r4sCJMLLqTIu0v4KhSUjRbJMCiOc0H42D3sNwhrRuUMvLb58w%2FDxVIt%2BYFt3BUt%2BXQduAc1VhHgWEWVxTrp0Ggj2KfI469DXKDkRT8saFkPDClmvg1gA7IZeDVYAoP8OaTJa%2BaWO7U%2BZ&X-Amz-Signature=701eb9edb31579ca04e6a3dfc2b90f17d5d5788bf72a83986a995fee12263d4d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
