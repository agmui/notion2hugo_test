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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCWTUYC%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrWidUYumR2tiIQdaJAgI3u3A4lda9gzhFsJgY6088VAIhAIxT0FqtLrskYu22ZtEx5S%2FxpCkgSPEhNwBWh4ETpMV7Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyPQCqFyG81cEeYkcIq3AP5I%2Bcn%2FFwiwckMosb8SVDfvrhEaNRu5QSLJzeZN54GhJ8w0CaEy0h42Cr%2BTlTCkIMOBzgpIzS5S0XCTwFptq3OGgFaNmEUJYGB1uV8uxliY0T1G7kRDlgN%2FQQlWA99gTw4Q6gBJbDv9DxRIOYRAVl7t5RWk3FbWan0Hs26nRnkL%2F%2Ba1An3kMmA%2BpDWmf%2Blp4yj5JDOHJD7iCHk2gqm5AeNn%2FT4ZlYJRLJ7Ozcr94ZMb5cVPbkCdzSUbohJA3yB1jZi%2FsjMBnPT%2Fo32Jo9sTjEZTcj7UQ44kB04%2FvBsaMP1YUEzlyJGGGMPTC215NM2kmeB2S4%2BItvJK3mVN8NRqTt1jwGjLWFJ5AqgWdFpDH3IrgUGTX5Jg66G%2FB%2FD2gVDn0m6HaCXrim9sqktslXhN7RzQTBbMmawpjS%2BZz3nvEhFIZz6GBzwydAIIOEWibV4V4ErlBMZ6%2BuQtRyzUmv1CMO33CC5FjZ42OJIX6GaKOMy7AAYu1a%2BaQ2bUcxJq3TbkTkO%2F8nbTecGuPSA2TYrP1yQYbCg5UcGk6dC4uRtdqer%2BhWa4%2FdmwgEqmUqUOWOhtT5tBN3uAkozvL2dheVBvVRlUnx7cFOvsAWlDZMMftJrau7qQ0%2B0QwzmWgqi%2FjCZsb%2B%2FBjqkATt36F32%2Bh%2BF3frk7TU5wDsceupqtEcWozs4aj6nIUVKVhTOACiH%2Fp0tnfbz4jK7XySJl1fS92fc8MoIIfuTZB6VIdVu7r5dYFGIoyvBZDfRp3xeSNqPqUNB8P8Je2jzZ7jJg7eHLypvf8sj%2FMmZt5p9eTBq7o8LjGpU41%2F3U5scG4JHMHxMnAQNg0Sr1RQyLDI1U4U0CbjPUL7tt4GEEvssS9I2&X-Amz-Signature=7ac421eb313e98518f041ed8a381626a44087333c09c60d805698f6c8d855516&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZHCWTUYC%2F20250404%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250404T131849Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDrWidUYumR2tiIQdaJAgI3u3A4lda9gzhFsJgY6088VAIhAIxT0FqtLrskYu22ZtEx5S%2FxpCkgSPEhNwBWh4ETpMV7Kv8DCBYQABoMNjM3NDIzMTgzODA1IgyPQCqFyG81cEeYkcIq3AP5I%2Bcn%2FFwiwckMosb8SVDfvrhEaNRu5QSLJzeZN54GhJ8w0CaEy0h42Cr%2BTlTCkIMOBzgpIzS5S0XCTwFptq3OGgFaNmEUJYGB1uV8uxliY0T1G7kRDlgN%2FQQlWA99gTw4Q6gBJbDv9DxRIOYRAVl7t5RWk3FbWan0Hs26nRnkL%2F%2Ba1An3kMmA%2BpDWmf%2Blp4yj5JDOHJD7iCHk2gqm5AeNn%2FT4ZlYJRLJ7Ozcr94ZMb5cVPbkCdzSUbohJA3yB1jZi%2FsjMBnPT%2Fo32Jo9sTjEZTcj7UQ44kB04%2FvBsaMP1YUEzlyJGGGMPTC215NM2kmeB2S4%2BItvJK3mVN8NRqTt1jwGjLWFJ5AqgWdFpDH3IrgUGTX5Jg66G%2FB%2FD2gVDn0m6HaCXrim9sqktslXhN7RzQTBbMmawpjS%2BZz3nvEhFIZz6GBzwydAIIOEWibV4V4ErlBMZ6%2BuQtRyzUmv1CMO33CC5FjZ42OJIX6GaKOMy7AAYu1a%2BaQ2bUcxJq3TbkTkO%2F8nbTecGuPSA2TYrP1yQYbCg5UcGk6dC4uRtdqer%2BhWa4%2FdmwgEqmUqUOWOhtT5tBN3uAkozvL2dheVBvVRlUnx7cFOvsAWlDZMMftJrau7qQ0%2B0QwzmWgqi%2FjCZsb%2B%2FBjqkATt36F32%2Bh%2BF3frk7TU5wDsceupqtEcWozs4aj6nIUVKVhTOACiH%2Fp0tnfbz4jK7XySJl1fS92fc8MoIIfuTZB6VIdVu7r5dYFGIoyvBZDfRp3xeSNqPqUNB8P8Je2jzZ7jJg7eHLypvf8sj%2FMmZt5p9eTBq7o8LjGpU41%2F3U5scG4JHMHxMnAQNg0Sr1RQyLDI1U4U0CbjPUL7tt4GEEvssS9I2&X-Amz-Signature=9cf55a6c43a8ba9e030d6bd2c6447326566f2ec76433a97682d5cc6a9c5b9ac1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
