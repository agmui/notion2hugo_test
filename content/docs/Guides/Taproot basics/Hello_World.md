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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQOPDKJN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIAZs%2BUqqGITi7UZgMEUgzoxlnzX%2BMqhTLj%2F6kb%2FbUKUGAiEAo0XAbO5Gy2B9mO5ZNd2ApzzBmuB3vL%2BuMAVUlbx7HTwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOz1TwUphlOwbeaNzSrcA2MIFhU5yzQbdkgNQF8V%2F0CatCjXrQN1QZ%2BykyWLhUDu%2FUj8HpJ%2F0Pw2hQ96QG9s%2FtMenQhNjLN5Kw8o1OTGvrj9d%2Ffuh4q6Ia9f%2FC%2Fx9dNf4HVTeRMyZ%2BqMPIN6WURNDbrWBtIP7z5Gr1shR8UcWGsfoGA%2FiIo3ZwvG%2FnZ3T6BlFvFsr4cQ9Zp06kJCqekSgW7lE6LRBWBi%2BYPvg1%2F%2FnOQbFxbZErHXNo0UOnmjCp4Oeq1OhKr5JJtgS1Ykpaa4F1B%2Fne3VklKhNNnCRCkw6NoFatvkWx1vXggbbrmyE%2FHNAmDh1HqZ%2FOwnJBBHRnGfnyPADYQ%2Fs9njtm57SH%2BL9ykfPA2jJeC6jg7qtKrleAhNHwSuC2lIdmmlxP0E2l5xrlsROtcCkhAI1NjeJPi705maRiaZTnZ6QhUqsw81tUU9sYX2ZGqNfeVyDT%2Bb%2Fmzc3Z2LGClQvS0Nefw%2BMd0K3lRoucV%2FHzNIyG2d%2FRBX0PgO%2BKvo5aX3QixdcCBbGgOw90HFfL2J8V91y6DFsUF96IFxdXkjOB%2FugrAqBMDCQs3077kOVGV6%2FsNDOH3oGDk5DOVANz%2FUwkXRaeS8y%2FeHw3UW7ICI9k4czStx5KBHVQYLdzrfgMBzxA5WfWalMMLqor8GOqUB44FEs5iqjCu96LIXb2QqVK1yr9sEeNYZsoRVeSwwkQ6S7X3ja7h0xMjwS%2FZCAi4PWrBt%2FhbwjPHsatjzQ0U0iFqLQLLdRN7unXcZ6gIhcuv8hfTL7vkbG4DSADDjdN5Dk9hyNUSELbUBzjyQLN8EohyL9A%2FfNiAfCCHBuCeGyjVYZoNVIrs3zKfEh3ChNEKzjvZgLcoGlHpx4TckLp%2F8GEaI8U4C&X-Amz-Signature=f8fcadc7913de6ac99a35a9af47bc8a520b2c0f86c05a4f596df79ab7729916b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQOPDKJN%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T070712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJHMEUCIAZs%2BUqqGITi7UZgMEUgzoxlnzX%2BMqhTLj%2F6kb%2FbUKUGAiEAo0XAbO5Gy2B9mO5ZNd2ApzzBmuB3vL%2BuMAVUlbx7HTwqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOz1TwUphlOwbeaNzSrcA2MIFhU5yzQbdkgNQF8V%2F0CatCjXrQN1QZ%2BykyWLhUDu%2FUj8HpJ%2F0Pw2hQ96QG9s%2FtMenQhNjLN5Kw8o1OTGvrj9d%2Ffuh4q6Ia9f%2FC%2Fx9dNf4HVTeRMyZ%2BqMPIN6WURNDbrWBtIP7z5Gr1shR8UcWGsfoGA%2FiIo3ZwvG%2FnZ3T6BlFvFsr4cQ9Zp06kJCqekSgW7lE6LRBWBi%2BYPvg1%2F%2FnOQbFxbZErHXNo0UOnmjCp4Oeq1OhKr5JJtgS1Ykpaa4F1B%2Fne3VklKhNNnCRCkw6NoFatvkWx1vXggbbrmyE%2FHNAmDh1HqZ%2FOwnJBBHRnGfnyPADYQ%2Fs9njtm57SH%2BL9ykfPA2jJeC6jg7qtKrleAhNHwSuC2lIdmmlxP0E2l5xrlsROtcCkhAI1NjeJPi705maRiaZTnZ6QhUqsw81tUU9sYX2ZGqNfeVyDT%2Bb%2Fmzc3Z2LGClQvS0Nefw%2BMd0K3lRoucV%2FHzNIyG2d%2FRBX0PgO%2BKvo5aX3QixdcCBbGgOw90HFfL2J8V91y6DFsUF96IFxdXkjOB%2FugrAqBMDCQs3077kOVGV6%2FsNDOH3oGDk5DOVANz%2FUwkXRaeS8y%2FeHw3UW7ICI9k4czStx5KBHVQYLdzrfgMBzxA5WfWalMMLqor8GOqUB44FEs5iqjCu96LIXb2QqVK1yr9sEeNYZsoRVeSwwkQ6S7X3ja7h0xMjwS%2FZCAi4PWrBt%2FhbwjPHsatjzQ0U0iFqLQLLdRN7unXcZ6gIhcuv8hfTL7vkbG4DSADDjdN5Dk9hyNUSELbUBzjyQLN8EohyL9A%2FfNiAfCCHBuCeGyjVYZoNVIrs3zKfEh3ChNEKzjvZgLcoGlHpx4TckLp%2F8GEaI8U4C&X-Amz-Signature=e0e8ea817e7021ce2fe0dc90e4412c1c145dc0f39931472643e6b2570c48f0dc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
