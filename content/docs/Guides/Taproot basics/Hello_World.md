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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX2X35QK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVuqSbct8DAu9U5gTnEw42fI4gned5%2FMUXT4f1jamkQQIhAMUpYOaK%2FA2NEkhI6ijz6fFNd5fQu8rq6G8olSJf3bpkKv8DCHwQABoMNjM3NDIzMTgzODA1IgzJaJW7I5Ch8THBi24q3APxIoPjt2quJO31vd2k1%2Blk%2BSYUa9wiekJeSN2sVhCQflq%2BUatuolOkmw4mIVuKLTisn4dW1ym8B%2FvZRFH6PpOrs%2BaULk8lVlsbuJP%2FPZ3aB0zDcsSwgBhIAh%2FyuH%2BBle%2Bp0hAa%2FFJGzfRyL4oErh2faGcP3bE2TJxxK8uJYoFQBoF%2F8OFENIBRcJi5uDun1%2BJU4rAjs1ngEuvfgA1co1m3JQ%2BTJ4yF4FUMneodoq0l0fzMaXGdVyD9iYNX6kMiu3ZY%2BQJCljHYeXGnBo3Mucmu7HOMZGViFOwCv8UIvMChybuoUz%2BgJUzjurNbsQN4Bjwo2V0VxMw3BKjXljHBmCFCLVSlJ523a119tma0LHI0iZeUTZ%2FGjMdljHeq3izpGRMoNts8D4GRiBm5Cgb61DgzIFAFWWa5EPlxCHLi%2Fs4tETGJyrDL7h4BIVZ1RJRrnnYBHL0CZdOYd4GcwTkzk%2F2lqwOFJbBbZc%2BOz2G2nTn1cKOaNBBmBRLzKjB2VEpZpGcqUhaH3jlpjyGDGfXwz5BYqNtARc1iRi%2F2TRayQAQY9d8eTBPeeZ9ILPcMpON9q3AFec4SRb%2F3lNwlkG3VVJW0wdX6NSka9KMMaFgzp0daDEVN3mRCfKoFHWaWfjDa56jBBjqkASdVm0%2BdBzo%2Fduk1A2V%2FaTW0wumwRMUfK71YkkRJgC2eGAMn6pCKJG799gQEs5BG%2FGWHgOk9ErsejBRPAdMOG71ty1a0jIP1IYJJHpdA5MI%2Fx%2Ffbi5KL%2B2LOhelCIe5%2Ba6b8kOJznN2y81Bkr2drWsOFanscHUpaszXlBHqpfGfXt4Jo0hChyBnApq5AsJ6JcUod59Xf8LnwkDUbhSuVLsgEED7m&X-Amz-Signature=a3df981a9bac81148ec06e086af7afe3012f33bd4edfccf369fee27d0f8ed464&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RX2X35QK%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T220714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVuqSbct8DAu9U5gTnEw42fI4gned5%2FMUXT4f1jamkQQIhAMUpYOaK%2FA2NEkhI6ijz6fFNd5fQu8rq6G8olSJf3bpkKv8DCHwQABoMNjM3NDIzMTgzODA1IgzJaJW7I5Ch8THBi24q3APxIoPjt2quJO31vd2k1%2Blk%2BSYUa9wiekJeSN2sVhCQflq%2BUatuolOkmw4mIVuKLTisn4dW1ym8B%2FvZRFH6PpOrs%2BaULk8lVlsbuJP%2FPZ3aB0zDcsSwgBhIAh%2FyuH%2BBle%2Bp0hAa%2FFJGzfRyL4oErh2faGcP3bE2TJxxK8uJYoFQBoF%2F8OFENIBRcJi5uDun1%2BJU4rAjs1ngEuvfgA1co1m3JQ%2BTJ4yF4FUMneodoq0l0fzMaXGdVyD9iYNX6kMiu3ZY%2BQJCljHYeXGnBo3Mucmu7HOMZGViFOwCv8UIvMChybuoUz%2BgJUzjurNbsQN4Bjwo2V0VxMw3BKjXljHBmCFCLVSlJ523a119tma0LHI0iZeUTZ%2FGjMdljHeq3izpGRMoNts8D4GRiBm5Cgb61DgzIFAFWWa5EPlxCHLi%2Fs4tETGJyrDL7h4BIVZ1RJRrnnYBHL0CZdOYd4GcwTkzk%2F2lqwOFJbBbZc%2BOz2G2nTn1cKOaNBBmBRLzKjB2VEpZpGcqUhaH3jlpjyGDGfXwz5BYqNtARc1iRi%2F2TRayQAQY9d8eTBPeeZ9ILPcMpON9q3AFec4SRb%2F3lNwlkG3VVJW0wdX6NSka9KMMaFgzp0daDEVN3mRCfKoFHWaWfjDa56jBBjqkASdVm0%2BdBzo%2Fduk1A2V%2FaTW0wumwRMUfK71YkkRJgC2eGAMn6pCKJG799gQEs5BG%2FGWHgOk9ErsejBRPAdMOG71ty1a0jIP1IYJJHpdA5MI%2Fx%2Ffbi5KL%2B2LOhelCIe5%2Ba6b8kOJznN2y81Bkr2drWsOFanscHUpaszXlBHqpfGfXt4Jo0hChyBnApq5AsJ6JcUod59Xf8LnwkDUbhSuVLsgEED7m&X-Amz-Signature=4c13a5047980b5465c73fae741eb8800b58713f8b183b871b81067f3ecbedaa3&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
