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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLVXKDDC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDI6SOmAgTfS8TBfJCdmcH7gNXzDTJYwNCR7%2BwjWd94HAiBdhGlGaSeKxhKpHCEt4W69Ha8dLQHMqbwfI20D0FaSqCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyGwRmF5%2BW%2FhlUyzjKtwDeEJ4wOig2csxxHZsebLfpHjScof5GOptj1WJlDTqJiCfmaZFgHrOcm359ekZGRFdmTn5C7h%2Bvdd65Tq53QR6ei8zvLw19z9s%2B0w6Ant%2B7jGTcaSrqnxZUeYhOVZJzKiWruA312qr6wJbKgbX0pa0RYdxF9wd3%2BS7bOe%2BJJ1d80V%2BWeEI4rbuheI%2FQOzIpoTHYeT8vi91tBNUMaF6CtM%2B9%2FSB37hZ8QNafYlx%2BhpqKsWCGePZFj9YKqTe4QHdReYmq6MVBfXj6m9a573IhdvBSY%2BuDqaczBWC5M%2FBnMtnZdmzO3HPh0LH6r9wwJEJyMJYKlyL%2BbqAqKmr9hJ4My3djscD0jl%2BMCYBvrbPYlL37E4bnn32LWVpOKl5uNy9Oq%2Ba0opTu%2F1gUDTHBe7zrbioTOqxt6yVIhVByGY0IDE2dJUWrxrlKMK259sPMB4aTttBcqme7zywVaogF5OceQss%2Bugu43LvTSKQ%2Bthot0QZN%2BvNbrnOh1brlOc%2B%2BmLfw2fJ%2F6RcEIDIW6rjBiVTV%2B8baRdOQ0Op6cW77bhh5W8uFgnvFHCmU00wVqPA4Lrc4K9nJgo561jUzO%2BGaABIvtijf%2FhtkcaHPI6uqXd4Mltj8%2BBQvjipryxKf%2F9%2BQq8wjZ%2FWxAY6pgFn3r1ZW3Z54pIfCREqZBX6unHEuoEUtsbwr8emj9HbmFeHOUffVjc1ZVR3ROPazawNpTSlxylzXGTn9W8V84NSlCIjJNfV7yKvu%2FatOuF0x0sWDfgTFJ93QpuZ%2FGKhx6OMWECCP9ZQwgCzcT1wbAcuhjCdoVL132kNExtfZKVp0zn%2F6YBfzy0iOqOChBQN2YhH5oYIWeMm4a8PEANRKYHKpUByByXf&X-Amz-Signature=07af5053f5de8988e955ba80d51bba11fdb0fad6fb0e8bbb9d33e4c15bc04ede&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YLVXKDDC%2F20250808%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250808T061549Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJGMEQCIDI6SOmAgTfS8TBfJCdmcH7gNXzDTJYwNCR7%2BwjWd94HAiBdhGlGaSeKxhKpHCEt4W69Ha8dLQHMqbwfI20D0FaSqCqIBAif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMyGwRmF5%2BW%2FhlUyzjKtwDeEJ4wOig2csxxHZsebLfpHjScof5GOptj1WJlDTqJiCfmaZFgHrOcm359ekZGRFdmTn5C7h%2Bvdd65Tq53QR6ei8zvLw19z9s%2B0w6Ant%2B7jGTcaSrqnxZUeYhOVZJzKiWruA312qr6wJbKgbX0pa0RYdxF9wd3%2BS7bOe%2BJJ1d80V%2BWeEI4rbuheI%2FQOzIpoTHYeT8vi91tBNUMaF6CtM%2B9%2FSB37hZ8QNafYlx%2BhpqKsWCGePZFj9YKqTe4QHdReYmq6MVBfXj6m9a573IhdvBSY%2BuDqaczBWC5M%2FBnMtnZdmzO3HPh0LH6r9wwJEJyMJYKlyL%2BbqAqKmr9hJ4My3djscD0jl%2BMCYBvrbPYlL37E4bnn32LWVpOKl5uNy9Oq%2Ba0opTu%2F1gUDTHBe7zrbioTOqxt6yVIhVByGY0IDE2dJUWrxrlKMK259sPMB4aTttBcqme7zywVaogF5OceQss%2Bugu43LvTSKQ%2Bthot0QZN%2BvNbrnOh1brlOc%2B%2BmLfw2fJ%2F6RcEIDIW6rjBiVTV%2B8baRdOQ0Op6cW77bhh5W8uFgnvFHCmU00wVqPA4Lrc4K9nJgo561jUzO%2BGaABIvtijf%2FhtkcaHPI6uqXd4Mltj8%2BBQvjipryxKf%2F9%2BQq8wjZ%2FWxAY6pgFn3r1ZW3Z54pIfCREqZBX6unHEuoEUtsbwr8emj9HbmFeHOUffVjc1ZVR3ROPazawNpTSlxylzXGTn9W8V84NSlCIjJNfV7yKvu%2FatOuF0x0sWDfgTFJ93QpuZ%2FGKhx6OMWECCP9ZQwgCzcT1wbAcuhjCdoVL132kNExtfZKVp0zn%2F6YBfzy0iOqOChBQN2YhH5oYIWeMm4a8PEANRKYHKpUByByXf&X-Amz-Signature=cca12295ff6d7758e76e8a19039ae3b095d05b8b752d6ce79846afd7b2493241&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
