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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQFCU45%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCOn%2B3OaVr0JjYRJioClz2yViKz9QJ0yxYqVhkt0Gl6rgIhAP%2B1YXkeGWLPoauaiPCuvVpczCHmgIRqreGxsC3RTLpxKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9w3MCeHFzbEeMUWMq3AO5HVk1iqMNEOg7tp6MfBKQIIsKjxuGOKiOD63nIJroQVzRlMLaGSyFTYYUIGjH2Blw3hovZWDjK28s9K79xpS374l%2BvWAQ09Ino%2FiCOmLHmyqXUzjFUV4qtOOe1hJop2yhKZlotU%2F%2FT1w0Ix2CIP5o6npv%2FLgoq4%2BoUypD4NiVAjvFvpcAmgA96xj8a7ck6GONxsRVBpCYbKGBD4Uny82d8ugQ59qm8VOs5gT79Sc%2FXphRYnKYEZ8OAu4Wkc0fOr2MyUU2qNQ3rel7FtNLJ7i8bGM3OEm%2BkPVK%2F5Fal%2BFiZwgocYDk8FSi21bz%2FpyLX3sgwQ%2F20DR0Ye2UEWyOCBcP3Fc6OGelaNGxt5ZPLzMgklIJYkdLxosmQNqXs9GvsIst2hdXDBIqoRkV4lCtuqQqdnzs2RD7wXWoUpXrrjwbe6W0nHaJHcHeAtmAhrZdrIbmepBJLc0Sj6Wdp%2Fqza8sjEZ6GXuqsbeSpRyG41FU0tCgXjVuQuSbQGZguZJFYGWPwgfJnFqHu9Bf5%2FIHRR7EKogH%2F1jOj%2BL%2FB0aMbYCgIdE2tLJ%2BSvt%2B0RLSalYoqLFwB%2BptsfLZVXC5IMTFVRMl7xRALK96J%2BItG25pzb0f76WJROq4D1xot0W6uIDCQqaHHBjqkAcNWpxCrFBNC882oUvu7OPVu5lTET0JhP7%2B17ST2xtB%2BZ9u3jvPK3aNy7aikMRzBRXRrNbT3mWrkfE3fMAMpQ9wQ7MZXUjsFXQNpnf1GJmbFUTdMfmdrtStZCdFWSxrSiyu%2FBoHLb7TT4eA01ja1evmeKaVi%2Be72UXwf19NlQvQ2vjpAA8VSP8Ibo5Y1KWHPMZgNcCPfrk7WoViawM37XgZRCbAt&X-Amz-Signature=5d5073532c9639674fdfd01b982898a05e159750956385e94f1f7ddce33a9272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YAQFCU45%2F20251010%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251010T012440Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEkaCXVzLXdlc3QtMiJIMEYCIQCOn%2B3OaVr0JjYRJioClz2yViKz9QJ0yxYqVhkt0Gl6rgIhAP%2B1YXkeGWLPoauaiPCuvVpczCHmgIRqreGxsC3RTLpxKogECOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw9w3MCeHFzbEeMUWMq3AO5HVk1iqMNEOg7tp6MfBKQIIsKjxuGOKiOD63nIJroQVzRlMLaGSyFTYYUIGjH2Blw3hovZWDjK28s9K79xpS374l%2BvWAQ09Ino%2FiCOmLHmyqXUzjFUV4qtOOe1hJop2yhKZlotU%2F%2FT1w0Ix2CIP5o6npv%2FLgoq4%2BoUypD4NiVAjvFvpcAmgA96xj8a7ck6GONxsRVBpCYbKGBD4Uny82d8ugQ59qm8VOs5gT79Sc%2FXphRYnKYEZ8OAu4Wkc0fOr2MyUU2qNQ3rel7FtNLJ7i8bGM3OEm%2BkPVK%2F5Fal%2BFiZwgocYDk8FSi21bz%2FpyLX3sgwQ%2F20DR0Ye2UEWyOCBcP3Fc6OGelaNGxt5ZPLzMgklIJYkdLxosmQNqXs9GvsIst2hdXDBIqoRkV4lCtuqQqdnzs2RD7wXWoUpXrrjwbe6W0nHaJHcHeAtmAhrZdrIbmepBJLc0Sj6Wdp%2Fqza8sjEZ6GXuqsbeSpRyG41FU0tCgXjVuQuSbQGZguZJFYGWPwgfJnFqHu9Bf5%2FIHRR7EKogH%2F1jOj%2BL%2FB0aMbYCgIdE2tLJ%2BSvt%2B0RLSalYoqLFwB%2BptsfLZVXC5IMTFVRMl7xRALK96J%2BItG25pzb0f76WJROq4D1xot0W6uIDCQqaHHBjqkAcNWpxCrFBNC882oUvu7OPVu5lTET0JhP7%2B17ST2xtB%2BZ9u3jvPK3aNy7aikMRzBRXRrNbT3mWrkfE3fMAMpQ9wQ7MZXUjsFXQNpnf1GJmbFUTdMfmdrtStZCdFWSxrSiyu%2FBoHLb7TT4eA01ja1evmeKaVi%2Be72UXwf19NlQvQ2vjpAA8VSP8Ibo5Y1KWHPMZgNcCPfrk7WoViawM37XgZRCbAt&X-Amz-Signature=9e11713b8373b6077a8f4c060be09fc3ff4c0b2844cc6d1eb7d3d740070f5fab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
