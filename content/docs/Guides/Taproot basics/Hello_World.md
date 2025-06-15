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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ67DO6W%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIHI9RSKYynG05ZHVupnZJ3xVU6p%2B2AhC9X7G6i5cymy9AiBkhbOfEtxqf8ZGnlxjwCqhSe8%2B0iO8DKfLLm%2BC9RoLKCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMYuDfzE4avtKFAx2qKtwDoLgGfyWWsODP7BC0%2FbCYB1FAs4Ov%2FS3yJRt4RFKHFxSzcddYsbTQvgAaJdqPBGJnOvB4cPqF0nK8d2Wwv8Wk5pmRNc%2Fxe3jQo1p2l098lD9mT2ROtcgkIoTnlgfa7%2FZpfm3g4UwI1pyWVIdGTcZgz4GXE%2FthAL%2BOJ8ajrOs2HJb0%2BXH3g8IwxHfHqxz7vvj4Wn08QydYD7NzKSH3%2F%2FEIoxr63LhsBRnqNEiCJsmKvQDe4lqcaP8wgTg%2FEHNw8v6js2w5CKcliKqyFT2SglXSLiwZqr4QiKbl4iYaVqOSFs3ycwbJ7uSveZeZv4rJxf8SLLFGA815BsxHSuCNnLJT%2Bo44umRG4qV8MXMQrHr6VX8IJavDwsZyodsWYN9ErXUh7qxhXOrBKAQWv5s4GAa61hh9V9uRF5DwamUMa4M7sdyqLrqQyhfUTmgGGX4tHOqXkd7wQb2ylrtfESRdThxkwjzvv01GzAyA44w2lUwnCvAu2QVeMS1a8O5kUvFqZSoHF%2FDG8ZnRJLKDweSGeIB3u3AQkgG7WnKDuP%2BYx%2FYl9%2BxoXNhqws0%2BscGpRall53tv3AHvtmsfy%2FkKNYECDilMuvpmnLcOj2gRVy66S%2BeVygWHm0MsPKoxvwmV738wh5C5wgY6pgFxVnanNj989C2wu%2BqVRUeQAX%2BxRBhz%2FdxVaDDuQ7hU%2Bka%2FXu9Kz6OH1OdCz2%2Fk3NRO2Wa50HyNFJIDJMtqbV26%2B1GnL27RJ1%2FS9LTDfGv6WE%2FdyhoXIvRI1CdXUuYwnUaaVazQcuT%2BVq20POhIO82DvxSG7sw5YbSYl9%2B62X%2BoWCKNTpQ1yh40hfILVNPIIIEwX2YD3VwiSwc8cSpcbGwqkBFeL%2Fkx&X-Amz-Signature=c21858e503758c95af6d70a9bf4729fce5d4e05c37c7f95358a633becafa6fbd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VQ67DO6W%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T050913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJGMEQCIHI9RSKYynG05ZHVupnZJ3xVU6p%2B2AhC9X7G6i5cymy9AiBkhbOfEtxqf8ZGnlxjwCqhSe8%2B0iO8DKfLLm%2BC9RoLKCr%2FAwg9EAAaDDYzNzQyMzE4MzgwNSIMYuDfzE4avtKFAx2qKtwDoLgGfyWWsODP7BC0%2FbCYB1FAs4Ov%2FS3yJRt4RFKHFxSzcddYsbTQvgAaJdqPBGJnOvB4cPqF0nK8d2Wwv8Wk5pmRNc%2Fxe3jQo1p2l098lD9mT2ROtcgkIoTnlgfa7%2FZpfm3g4UwI1pyWVIdGTcZgz4GXE%2FthAL%2BOJ8ajrOs2HJb0%2BXH3g8IwxHfHqxz7vvj4Wn08QydYD7NzKSH3%2F%2FEIoxr63LhsBRnqNEiCJsmKvQDe4lqcaP8wgTg%2FEHNw8v6js2w5CKcliKqyFT2SglXSLiwZqr4QiKbl4iYaVqOSFs3ycwbJ7uSveZeZv4rJxf8SLLFGA815BsxHSuCNnLJT%2Bo44umRG4qV8MXMQrHr6VX8IJavDwsZyodsWYN9ErXUh7qxhXOrBKAQWv5s4GAa61hh9V9uRF5DwamUMa4M7sdyqLrqQyhfUTmgGGX4tHOqXkd7wQb2ylrtfESRdThxkwjzvv01GzAyA44w2lUwnCvAu2QVeMS1a8O5kUvFqZSoHF%2FDG8ZnRJLKDweSGeIB3u3AQkgG7WnKDuP%2BYx%2FYl9%2BxoXNhqws0%2BscGpRall53tv3AHvtmsfy%2FkKNYECDilMuvpmnLcOj2gRVy66S%2BeVygWHm0MsPKoxvwmV738wh5C5wgY6pgFxVnanNj989C2wu%2BqVRUeQAX%2BxRBhz%2FdxVaDDuQ7hU%2Bka%2FXu9Kz6OH1OdCz2%2Fk3NRO2Wa50HyNFJIDJMtqbV26%2B1GnL27RJ1%2FS9LTDfGv6WE%2FdyhoXIvRI1CdXUuYwnUaaVazQcuT%2BVq20POhIO82DvxSG7sw5YbSYl9%2B62X%2BoWCKNTpQ1yh40hfILVNPIIIEwX2YD3VwiSwc8cSpcbGwqkBFeL%2Fkx&X-Amz-Signature=bc7b3ff96d5aae73be3e9ff3bf1598a83439dfc179dcb9906672a77536fbc1e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
