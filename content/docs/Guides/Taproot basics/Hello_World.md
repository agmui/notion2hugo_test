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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUK5BF3B%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsrD3K3aal2XyZQs1FP6slwiGsIwVZZo9E30R58%2F8mYAiBJ9pPB11GQ3UNAvjg1pYqvOludgBgQE0swq85N%2Bcho9ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM%2FGMSV9mG5RUj0rw8KtwDgzp4Zm1E%2Bh8as5jpE5SEHU%2FY7XrgkglLC%2B7kL%2BmKFhiOybHikGdXV5F7hj2owuLnxMsTNTQthnPzzcnIYjU9i3j2rUFz0JYm3OEOVI5mP5y7g6%2FFenZEohZAOEkoH%2BE0kWLQAX%2BsCu%2BRiGHxMYtNme%2FD358p%2FyiAXGjh3%2Fuiv3ThWvo6%2BKK9LBU%2FEI3uhOcAdEaRumfGD4apXCOVP%2BKI3%2FSdWefevN5M7DgesfLwaUVCdHakuiJ1jJJzovW4OJlAlAoXqZQ5OJ8QeSX2ZWxgMNVoDDQCZP3hYS%2Bwn6Ro7C5qAw8vudhTTX6WjlGgpA4%2B60FLmluCr%2BpHfjblzdJqFf6jw6DXCoEXWedF3M4DNfzh5SMAzgU%2FaZc7%2ByzwCHrHiXyq%2F941DXRbwjWir3s4x3nHYI5XS3oBdxK1os8mNSuffp0VdBQHumqfnTNr2Jg5HkuFI8Wxkov7S99yUZnn5tcdUw%2BaZWasSZlYzkzObKyH8c6ZEGOK%2BkwXatkgIL8ZgTvtgLXveNraZ5eiYpyKwCTqJfG%2B0iKXeGXSyieWJsxBGjqY0XzY1n%2FrnqzwqP%2BZhX9E15hp18lJcA9VoJnh9H8WBeYRBtditbTfaPmj8yTvx6z1PnRTRm4mu4EwpMiqvgY6pgFfGBKNh8i3XvWknUBJxNHUxSp%2FDOEo4nGMfuTJ2KL7N0NLhVMwdQNioHj21BT65ibSKW3Ypq25m2vBs%2B3jO7EGColRhFg7MIgxNvk9Ol59CUn3WYZf7wDv3rUnAjdc%2BtwJqVJ393Nn5af%2BLK%2F%2FJ3Cauk0Ndhp%2Bfb0Ux04bLxUnsMQfJIiMXVSKwu4DHVwx7%2FsvODOGefvNUh1O7YupuQj9J5pm1BKK&X-Amz-Signature=03c3a09de5315c6b03008b8789cb793448170bf3eb6660fb9eba798f9d6cf46b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TUK5BF3B%2F20250307%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250307T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBsrD3K3aal2XyZQs1FP6slwiGsIwVZZo9E30R58%2F8mYAiBJ9pPB11GQ3UNAvjg1pYqvOludgBgQE0swq85N%2Bcho9ir%2FAwhBEAAaDDYzNzQyMzE4MzgwNSIM%2FGMSV9mG5RUj0rw8KtwDgzp4Zm1E%2Bh8as5jpE5SEHU%2FY7XrgkglLC%2B7kL%2BmKFhiOybHikGdXV5F7hj2owuLnxMsTNTQthnPzzcnIYjU9i3j2rUFz0JYm3OEOVI5mP5y7g6%2FFenZEohZAOEkoH%2BE0kWLQAX%2BsCu%2BRiGHxMYtNme%2FD358p%2FyiAXGjh3%2Fuiv3ThWvo6%2BKK9LBU%2FEI3uhOcAdEaRumfGD4apXCOVP%2BKI3%2FSdWefevN5M7DgesfLwaUVCdHakuiJ1jJJzovW4OJlAlAoXqZQ5OJ8QeSX2ZWxgMNVoDDQCZP3hYS%2Bwn6Ro7C5qAw8vudhTTX6WjlGgpA4%2B60FLmluCr%2BpHfjblzdJqFf6jw6DXCoEXWedF3M4DNfzh5SMAzgU%2FaZc7%2ByzwCHrHiXyq%2F941DXRbwjWir3s4x3nHYI5XS3oBdxK1os8mNSuffp0VdBQHumqfnTNr2Jg5HkuFI8Wxkov7S99yUZnn5tcdUw%2BaZWasSZlYzkzObKyH8c6ZEGOK%2BkwXatkgIL8ZgTvtgLXveNraZ5eiYpyKwCTqJfG%2B0iKXeGXSyieWJsxBGjqY0XzY1n%2FrnqzwqP%2BZhX9E15hp18lJcA9VoJnh9H8WBeYRBtditbTfaPmj8yTvx6z1PnRTRm4mu4EwpMiqvgY6pgFfGBKNh8i3XvWknUBJxNHUxSp%2FDOEo4nGMfuTJ2KL7N0NLhVMwdQNioHj21BT65ibSKW3Ypq25m2vBs%2B3jO7EGColRhFg7MIgxNvk9Ol59CUn3WYZf7wDv3rUnAjdc%2BtwJqVJ393Nn5af%2BLK%2F%2FJ3Cauk0Ndhp%2Bfb0Ux04bLxUnsMQfJIiMXVSKwu4DHVwx7%2FsvODOGefvNUh1O7YupuQj9J5pm1BKK&X-Amz-Signature=18a998e0611f990e0bb8845a7e9421d0be562f9da9e728cab9d3a8910e702a95&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
