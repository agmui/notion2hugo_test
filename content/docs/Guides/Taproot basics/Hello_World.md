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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NYH472%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDfm0DqxH2D3ekoAIbT6bKNmebgN0Zoqrc2WvimjJpf9wIgIMsQghQy19x5sncW%2BjxruQcunC8C1kLBZa%2BuS85DLq0qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfawmmt2eInziVKGircA2GavJYLlv6y1hMjZm%2BGcmVFTourq4p7q44a%2Bv8gnyaPaIb1sXGy1oWZifP1dq4XToNRjq%2Fe1%2Be%2FL2XvjEkPSyULOWYmMKT6AE8MdSySqKR3FKqPUfF%2BNNv5ED%2Fm7NmLAXnN6g8Rpp5chabwehVi3W2IpKzjK53rTuRqNDkdwdC4a%2BoL4YxDLZMqn0qGwXQhGgU2NsSuP5B2BmqVw0x2fW%2BsDTbikeECns6ekTZFt2sEGBQiPxO3TfxCO0bSuitdQa7Wpy%2Br5LNDMlnD20EpivzHGg15LMfrqN9F%2Flc8E4MfRAx%2F971uOF3svJwgUpVkMpcBfBz3JtZ70u4q59fg4Ns5lPKmWF8tQuDY%2FQD6BEG8mbrOwVhGN3MnXk56xvk30XuPzWyxGmNu6EG9THkFniyglcpuExiv%2FsWjuWcM%2B5lg2KVvItk4O%2BCzRJXqSUcoa%2F5%2BT2KUyAXuI6yikjI9llRN%2FfgszTvSrvj%2F7lJ8s9yetIE57c%2FiSRsNPwawudCudpAHMU69J4dzIdibYT%2B57ziZTG1HbFDgSYnZwmd2%2F%2Brl%2FQYZUkX9fA5WP7pWscWcTm4S0sCnzU7ReuKEJEB76rRprazaHHvNaf30wpVowHz84lWvnCdB%2FyYzOtK%2BMJDI0MQGOqUB1FEx1AA7rCQu0CNfBtURbYqMaH2TwEaAiJ%2FlkQelkJVpRdCUIvbWAgWxdVH%2BT6Cz%2BQtc%2B52%2F8%2FSAgOk3DnIugmChBGwKce3eMpCy7xdc7QH4HT806VO4n%2Bqj8xwY%2FffB4Bz9I9SrxJK680hDQxiFby6p37StHOUyKQeGp1s3t0M1q39P1oXTBRQZB7GgCt6NW9n748E3Ktr8KxONs35qNDbn2JsS&X-Amz-Signature=8589690d3ba9e488b191366dfd23707678d63f61e258dfc6cb6809c81230c3b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656NYH472%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T044316Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJHMEUCIQDfm0DqxH2D3ekoAIbT6bKNmebgN0Zoqrc2WvimjJpf9wIgIMsQghQy19x5sncW%2BjxruQcunC8C1kLBZa%2BuS85DLq0qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNfawmmt2eInziVKGircA2GavJYLlv6y1hMjZm%2BGcmVFTourq4p7q44a%2Bv8gnyaPaIb1sXGy1oWZifP1dq4XToNRjq%2Fe1%2Be%2FL2XvjEkPSyULOWYmMKT6AE8MdSySqKR3FKqPUfF%2BNNv5ED%2Fm7NmLAXnN6g8Rpp5chabwehVi3W2IpKzjK53rTuRqNDkdwdC4a%2BoL4YxDLZMqn0qGwXQhGgU2NsSuP5B2BmqVw0x2fW%2BsDTbikeECns6ekTZFt2sEGBQiPxO3TfxCO0bSuitdQa7Wpy%2Br5LNDMlnD20EpivzHGg15LMfrqN9F%2Flc8E4MfRAx%2F971uOF3svJwgUpVkMpcBfBz3JtZ70u4q59fg4Ns5lPKmWF8tQuDY%2FQD6BEG8mbrOwVhGN3MnXk56xvk30XuPzWyxGmNu6EG9THkFniyglcpuExiv%2FsWjuWcM%2B5lg2KVvItk4O%2BCzRJXqSUcoa%2F5%2BT2KUyAXuI6yikjI9llRN%2FfgszTvSrvj%2F7lJ8s9yetIE57c%2FiSRsNPwawudCudpAHMU69J4dzIdibYT%2B57ziZTG1HbFDgSYnZwmd2%2F%2Brl%2FQYZUkX9fA5WP7pWscWcTm4S0sCnzU7ReuKEJEB76rRprazaHHvNaf30wpVowHz84lWvnCdB%2FyYzOtK%2BMJDI0MQGOqUB1FEx1AA7rCQu0CNfBtURbYqMaH2TwEaAiJ%2FlkQelkJVpRdCUIvbWAgWxdVH%2BT6Cz%2BQtc%2B52%2F8%2FSAgOk3DnIugmChBGwKce3eMpCy7xdc7QH4HT806VO4n%2Bqj8xwY%2FffB4Bz9I9SrxJK680hDQxiFby6p37StHOUyKQeGp1s3t0M1q39P1oXTBRQZB7GgCt6NW9n748E3Ktr8KxONs35qNDbn2JsS&X-Amz-Signature=a24282450dc6fc401a284dbdcec06333f7cbb2f485a72160ddd64d5ae7f3c7f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
