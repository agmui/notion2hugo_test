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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZIGLPAJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCICxKYisvSgrvDEKhWkv7Qz80X%2BPeFhu8gdyhsWPVr7RWAiB6ZZskDREUzwSdo4p2B327j%2Br%2Bk%2FsvsFYdG7YV%2B9FyRCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVNNOgPwwAVl3KeAoKtwDOQvnfHiI6uRNDh38TPCdTQWk5eVMS%2BDTI8rXKOOzc6VKVx7j7mKq3sWpqw1oWO%2BBJhHFvdnYPu6PKsLs13eNCt541QFxmZpu9Jje5474wdXc3Jhj9C1wTjCrJpyFmGu1dh%2BQ4K9uFgzKKmjZFc1%2FK%2FL0PBaLSD3ZP4%2Fg%2FwdQ1BkCO6p5q6Gyuaiv3hxa1evOJmzs8V0gbyp7eDGI54H6tk%2FgTHzuVLEgpUzhf8jZVar7fnv3Jz1CHtu9dH5cU4A27bBV8lFD1NOxfk0hMRcQF1c7%2F9QaYcwo88Tz1pXkd13K9Kz%2Fr7i6ynFbkHLy0wVCGcvmgP60fG%2BSy0ePScGZ2Toe7YOs9fN9%2Fq6eFG6C%2Bcqjgi1r%2Bwb38xh12LmAPUaan5EaKE5107t2JN4f7w7k%2FtQkS2EGKr60U5UQOmqXIh8joDzAIyxNnSGL47HVV8WpUSk4w0BJ7FKVSSvdkduy9ID3DB5ZUOm18GK3MnDsGDGuKZPZDVfjKou7deFA7Vo%2BI%2B1IlWrQQcQL6ByE8YK%2BAH9y6T%2BXh2OieFIrhm9gvT2HIx5U726rlVaGnWsn6WJZEKyTrk9qBaExEPVn7NoWiZYhul0QJfcSwGyUmTPJIAimvW%2F7hX5Vk%2Bhq3l4wv%2ByvvwY6pgGYk91ph%2BWhX9bEOilbN4mUz4c5UY%2FnKGXYorix69oJ9q4uuYym040l7LdgE1ZclyMxRRWrVPAWkq%2FUTwecbYPi9aymio00CrtLxfR0PWmrqeteYazkcN2n5xduBq6SojTwQgRlxhc7E3GOh0yxSw02bfzbStCNG8ZCo3uELE1lhIIZJlWWIcPGaZtDoEdHlQzz3jwbJ6GYB%2BrQmsQQmOZ%2F22GCFGw2&X-Amz-Signature=89323f4e1bc5f388ac7f99cc0ba174e1c947db658a2e754cb56be0b81fc22146&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZIGLPAJ%2F20250401%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250401T150845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJGMEQCICxKYisvSgrvDEKhWkv7Qz80X%2BPeFhu8gdyhsWPVr7RWAiB6ZZskDREUzwSdo4p2B327j%2Br%2Bk%2FsvsFYdG7YV%2B9FyRCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVNNOgPwwAVl3KeAoKtwDOQvnfHiI6uRNDh38TPCdTQWk5eVMS%2BDTI8rXKOOzc6VKVx7j7mKq3sWpqw1oWO%2BBJhHFvdnYPu6PKsLs13eNCt541QFxmZpu9Jje5474wdXc3Jhj9C1wTjCrJpyFmGu1dh%2BQ4K9uFgzKKmjZFc1%2FK%2FL0PBaLSD3ZP4%2Fg%2FwdQ1BkCO6p5q6Gyuaiv3hxa1evOJmzs8V0gbyp7eDGI54H6tk%2FgTHzuVLEgpUzhf8jZVar7fnv3Jz1CHtu9dH5cU4A27bBV8lFD1NOxfk0hMRcQF1c7%2F9QaYcwo88Tz1pXkd13K9Kz%2Fr7i6ynFbkHLy0wVCGcvmgP60fG%2BSy0ePScGZ2Toe7YOs9fN9%2Fq6eFG6C%2Bcqjgi1r%2Bwb38xh12LmAPUaan5EaKE5107t2JN4f7w7k%2FtQkS2EGKr60U5UQOmqXIh8joDzAIyxNnSGL47HVV8WpUSk4w0BJ7FKVSSvdkduy9ID3DB5ZUOm18GK3MnDsGDGuKZPZDVfjKou7deFA7Vo%2BI%2B1IlWrQQcQL6ByE8YK%2BAH9y6T%2BXh2OieFIrhm9gvT2HIx5U726rlVaGnWsn6WJZEKyTrk9qBaExEPVn7NoWiZYhul0QJfcSwGyUmTPJIAimvW%2F7hX5Vk%2Bhq3l4wv%2ByvvwY6pgGYk91ph%2BWhX9bEOilbN4mUz4c5UY%2FnKGXYorix69oJ9q4uuYym040l7LdgE1ZclyMxRRWrVPAWkq%2FUTwecbYPi9aymio00CrtLxfR0PWmrqeteYazkcN2n5xduBq6SojTwQgRlxhc7E3GOh0yxSw02bfzbStCNG8ZCo3uELE1lhIIZJlWWIcPGaZtDoEdHlQzz3jwbJ6GYB%2BrQmsQQmOZ%2F22GCFGw2&X-Amz-Signature=2228acbf3e0b5ea246ed3b0449c2ae9896654769be824eec67869d99cb57fe72&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
