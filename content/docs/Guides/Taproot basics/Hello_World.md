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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICGMUET%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3E7uy6ysHkZOhmZLUQrs0Z93QYZxskYqQK%2Fd8St4SOAiA%2BWOyjMs1WZO%2Ftj2GT8Y8vVHVretjpJn4nKQFsBXr%2F1iqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF8bYfdDwLqZve021KtwDK6ySo%2FSqEyF0aWVVp4a%2FkIfWWSEPU91DucDVz%2FXCM%2Fw5zYIWyOad5qXy7lsvwl5Eu8iN9BCaGSd3qmWFqo2s0w8a9rsl1tGzOrt6e%2FXQOhwscZdFbkj5f0cdXKYNdMjal5UDVg2%2Bxp%2FRh%2FgE4ueBLsf836eR8VCkmIK%2FUc9tPLP6dkWfBKJeENIeSvvTW7aMeBSx7a5J9ZzUKCz4LBj7mqKWrFBDuy0%2F5jLXKwErwhMbMmgUgCzftq1LTKfDqeeJCr15fEivC4dUIAtMXV1FtokCvdcB9W%2FoTfBpyPD5RA1oIdWvKo%2BrmxnHL4jOEZxnrADjH3stiXluoBhYbV4fVmJerF6BoFvd7av2Nq7mAA%2BxtJ8pQ1RPHHbeC5O5fjuUjJuUW%2F8X9BujfKYPO7H7ensuDi8WQ%2BtRH%2BoU0mWuLuM99gGxg4e39n6BRugE7TvOOih0yeFP1REFnyJnONXPRN9o0GA1jFDQd20BeCvKCzXvBasJrCtpuAayqkNwPaL%2BkJRp2IZkOGyZKe5HzCpeghrOGx5kT9oNNZJBMqeoBgzsMqSoESzlRAT70rdg5W8xsjazHuyQpXWpR0UoLcavI5BrxjYtfKQhPT1y2tN7Skbhf1vsu1HSkEjB0WUw4qP4wAY6pgEatLTRx9WNYzbx3lhekj2tYnx9Yr7ydPAayRUXDMEafeyA4QFqxU3I7MlGhUkQ%2Fk9NdgPFUoV521%2Fn7QcS3mjm2r1eQ94fiABrKpuJ%2F%2FUhZtlFVhWVTlJ%2Btmf5qbl1td9UFQa%2FF8kA3NsdbzW40YMcM3osDuKM%2BEaL56e4H61kSOOizZt8Df5RSNdICKKSNV8UmplPpovng688SNx4L7iTp165uIJo&X-Amz-Signature=1a257c745f17457cbbe51e00f22f4d3f8f89724613574300f98d7ab071dff0ff&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RICGMUET%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T150823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG3E7uy6ysHkZOhmZLUQrs0Z93QYZxskYqQK%2Fd8St4SOAiA%2BWOyjMs1WZO%2Ftj2GT8Y8vVHVretjpJn4nKQFsBXr%2F1iqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMF8bYfdDwLqZve021KtwDK6ySo%2FSqEyF0aWVVp4a%2FkIfWWSEPU91DucDVz%2FXCM%2Fw5zYIWyOad5qXy7lsvwl5Eu8iN9BCaGSd3qmWFqo2s0w8a9rsl1tGzOrt6e%2FXQOhwscZdFbkj5f0cdXKYNdMjal5UDVg2%2Bxp%2FRh%2FgE4ueBLsf836eR8VCkmIK%2FUc9tPLP6dkWfBKJeENIeSvvTW7aMeBSx7a5J9ZzUKCz4LBj7mqKWrFBDuy0%2F5jLXKwErwhMbMmgUgCzftq1LTKfDqeeJCr15fEivC4dUIAtMXV1FtokCvdcB9W%2FoTfBpyPD5RA1oIdWvKo%2BrmxnHL4jOEZxnrADjH3stiXluoBhYbV4fVmJerF6BoFvd7av2Nq7mAA%2BxtJ8pQ1RPHHbeC5O5fjuUjJuUW%2F8X9BujfKYPO7H7ensuDi8WQ%2BtRH%2BoU0mWuLuM99gGxg4e39n6BRugE7TvOOih0yeFP1REFnyJnONXPRN9o0GA1jFDQd20BeCvKCzXvBasJrCtpuAayqkNwPaL%2BkJRp2IZkOGyZKe5HzCpeghrOGx5kT9oNNZJBMqeoBgzsMqSoESzlRAT70rdg5W8xsjazHuyQpXWpR0UoLcavI5BrxjYtfKQhPT1y2tN7Skbhf1vsu1HSkEjB0WUw4qP4wAY6pgEatLTRx9WNYzbx3lhekj2tYnx9Yr7ydPAayRUXDMEafeyA4QFqxU3I7MlGhUkQ%2Fk9NdgPFUoV521%2Fn7QcS3mjm2r1eQ94fiABrKpuJ%2F%2FUhZtlFVhWVTlJ%2Btmf5qbl1td9UFQa%2FF8kA3NsdbzW40YMcM3osDuKM%2BEaL56e4H61kSOOizZt8Df5RSNdICKKSNV8UmplPpovng688SNx4L7iTp165uIJo&X-Amz-Signature=93bb956443cb9254b7a6e0e2c026203bc14c34671c5474fa2fcfebd790e8cd3c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
