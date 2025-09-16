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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3BR6Y6%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCMz0vF8BsJaAOTmB2w0MC7JbI7xu8NVjaZY3uiD5EcSwIgagyEfoWTog9yTh5pIz2pLFLXdiR5OVQaZRcvMGS%2Bo0YqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyRj3iMkHdQtKRg8CrcA8mjHYvEC1Fs8VsBhDMbQL%2Ft0PtCjmrnKAqIt3AKZKdJnTfyMqbhIRn3MQ2jDc7rgCs3TjT3nUjvLd3M8gqDiQmShudilfvb6CvltCj3V5bHKoIYIpdVFM4f5GvW73n5X9lq5nNfDSbej6u9y4vNmzzIdAs97CKGSTZ8oq%2B5U8mVcq2gi6TfXrqkybDWvBIGxKmb5OTJnGqAQ83B0dSxFSopbfU30xlOaH53eN5%2F5k3ycjlHVKsnozgqYw9nMXMRlBcmn7LSv%2FarIfPQkAFMF27%2BlmJ4IQdwJqiJ64PMDuLqRG4gabMnaOQGsZHQUI8SBPsJiYFSIPnu4YcHj6s7d8ct7FtAAT2WNMqmvVQmr89pmjTi%2B%2Bd0LBmRAIvLDQZQ0UVU%2FmDymTBy89GgqxnZYCOSYgXvgr4UCYX0Q0AAj3yhOOo%2FXfJZGZyX37baQu17LkWOhyiOYr0BaIEX0QBqmI9QwPfIuf7mYn0dikByCXyM4AB4g6U0r9QBlrsWJ42V7PKdq%2BuyxBjVp6uf2i%2Fu3wVVKHxQMJ2KH1xmwGcEk7%2BO1QdmxDA7jyo7Xt8%2ByEyBz2FfSXxXAT%2FD2jvNzsYljAHDPq4KaXfuESP3IQjjZdMOXejG7mpTZXht6wgGMNruosYGOqUB8sb3CVMl4cfFsRBI1UoC1GrhcFRm4Yjn1EZ6sQSM2%2FbfIRGRiMfKZWCzVm7JzxkBGoWq8vWSG1ICebbiUTTiVgexEuGEhKHPpKeTzt6ROt3Iz5ssrK2xH14flimOOvqfgUXzxgLGdEwEUmE0oWcPJJxYV%2FT5rA2RYZ%2F3xnpNfhLftf9x1lCr4urFMwSn%2FePvqNSp3qrmgnRstgANNYYljS14Z9MA&X-Amz-Signature=b62d23ca231a5ccd1cd979f9b11fd42539b3ae1d58c5680faf7d1e5346abb810&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665H3BR6Y6%2F20250916%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250916T012239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJHMEUCIQCMz0vF8BsJaAOTmB2w0MC7JbI7xu8NVjaZY3uiD5EcSwIgagyEfoWTog9yTh5pIz2pLFLXdiR5OVQaZRcvMGS%2Bo0YqiAQIgv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLyRj3iMkHdQtKRg8CrcA8mjHYvEC1Fs8VsBhDMbQL%2Ft0PtCjmrnKAqIt3AKZKdJnTfyMqbhIRn3MQ2jDc7rgCs3TjT3nUjvLd3M8gqDiQmShudilfvb6CvltCj3V5bHKoIYIpdVFM4f5GvW73n5X9lq5nNfDSbej6u9y4vNmzzIdAs97CKGSTZ8oq%2B5U8mVcq2gi6TfXrqkybDWvBIGxKmb5OTJnGqAQ83B0dSxFSopbfU30xlOaH53eN5%2F5k3ycjlHVKsnozgqYw9nMXMRlBcmn7LSv%2FarIfPQkAFMF27%2BlmJ4IQdwJqiJ64PMDuLqRG4gabMnaOQGsZHQUI8SBPsJiYFSIPnu4YcHj6s7d8ct7FtAAT2WNMqmvVQmr89pmjTi%2B%2Bd0LBmRAIvLDQZQ0UVU%2FmDymTBy89GgqxnZYCOSYgXvgr4UCYX0Q0AAj3yhOOo%2FXfJZGZyX37baQu17LkWOhyiOYr0BaIEX0QBqmI9QwPfIuf7mYn0dikByCXyM4AB4g6U0r9QBlrsWJ42V7PKdq%2BuyxBjVp6uf2i%2Fu3wVVKHxQMJ2KH1xmwGcEk7%2BO1QdmxDA7jyo7Xt8%2ByEyBz2FfSXxXAT%2FD2jvNzsYljAHDPq4KaXfuESP3IQjjZdMOXejG7mpTZXht6wgGMNruosYGOqUB8sb3CVMl4cfFsRBI1UoC1GrhcFRm4Yjn1EZ6sQSM2%2FbfIRGRiMfKZWCzVm7JzxkBGoWq8vWSG1ICebbiUTTiVgexEuGEhKHPpKeTzt6ROt3Iz5ssrK2xH14flimOOvqfgUXzxgLGdEwEUmE0oWcPJJxYV%2FT5rA2RYZ%2F3xnpNfhLftf9x1lCr4urFMwSn%2FePvqNSp3qrmgnRstgANNYYljS14Z9MA&X-Amz-Signature=74f6c3e05bbfa40fb1db6c2acbe7dcd4c2aa660aa8c8af4a25bbbaf897fd3853&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
