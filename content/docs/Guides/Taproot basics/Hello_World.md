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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OAMWDBP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRUtmnMGteQhxUaGiLK90dnEmRM6yzonmwnOXJm2el9AiEAzD7D9ZwqQvUNhsoHTLtgpH4wN2B1AuSQR7s4c1cDgC8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd7QToZW8BZZG0hHSrcA%2FdUo926PkvmwlmXEj%2BAg%2FrK0ustlWcPQBXoTW%2BUUf6QuUsFkYz5hsphFntVfDSjL67x8krNf4cILMs0hqo8fXYZyh0Lt1UvZsSqnE9hKNmQSReJiWXa9FoDrY8NNFoTqJfCvA7oPqDTrBj3Y3yPffLRGqS9ySz3i0jGt4ohCg3rMnM1304cmgNV%2BUAFeoCPPrlnQuEovQOILaygMRtccaoyL5Y2irlOZinPAYVTOid%2FhRDMbMjucq4ARUu0m9cj8egQBX0n4Q%2FFhot0V3B13NNNqRmNLLrIv5f3XWYFuF6oBfVh36qjhkjraMA9wC%2F8YWBKmC02LcAtYOcxVJfytubbuSDZp%2BQS6LmrUPHDzqIr3pV%2B%2FNS1IbmZjR8ykA4KcYBWOU10bmBIX5LsULtnl%2ByolDeh0dQzytZqa6agO063ZqzivIJPUbkB9WfjNRnuZ9sDYjrWTXafGJUl2%2B96dJKGoEjoWn%2B5%2BZclGp26epooShjmpYWO0vkNX9ZX1BeUTNaIJyFeA%2FWs3Mw%2BNZYjT6pQ7ueoMAb9EnjIFd%2BHEL98ZkpwN%2BKZ5zGy%2BQcrWXWMzE3IovsLgrxdy7ft6ADqS8PriuaVsj7VFYCCdXQINyTNKz2EKq%2BU0NgB1KonMN6q3sIGOqUB4ZwLlfrR4vxQ402IDeq3Oy%2BUodJYlqH1QMvmsNVVAcYyFf%2FDD1ydZmwc8shPzfd1qh9BNG08Zw1kWpFFTCLplwhmfxLkAAhjT3WUXtOzMAYz0aoD5ow%2BWOR3%2BsXYn%2F2nYr5h7bldjJBUkZKTCycVXlsZ%2FGWTSKFExzkOwNyJpTabAlG9YxiYTFVdjemYzJ80P9wmSMvdGjDVyyaVsqPVbqzY5KkI&X-Amz-Signature=c7fc6e6ecb08df99c3e7f1c0492d4ef0a3d2f461a27c7e9cdd4c8526c77db5a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OAMWDBP%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T061228Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRUtmnMGteQhxUaGiLK90dnEmRM6yzonmwnOXJm2el9AiEAzD7D9ZwqQvUNhsoHTLtgpH4wN2B1AuSQR7s4c1cDgC8qiAQI5%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJd7QToZW8BZZG0hHSrcA%2FdUo926PkvmwlmXEj%2BAg%2FrK0ustlWcPQBXoTW%2BUUf6QuUsFkYz5hsphFntVfDSjL67x8krNf4cILMs0hqo8fXYZyh0Lt1UvZsSqnE9hKNmQSReJiWXa9FoDrY8NNFoTqJfCvA7oPqDTrBj3Y3yPffLRGqS9ySz3i0jGt4ohCg3rMnM1304cmgNV%2BUAFeoCPPrlnQuEovQOILaygMRtccaoyL5Y2irlOZinPAYVTOid%2FhRDMbMjucq4ARUu0m9cj8egQBX0n4Q%2FFhot0V3B13NNNqRmNLLrIv5f3XWYFuF6oBfVh36qjhkjraMA9wC%2F8YWBKmC02LcAtYOcxVJfytubbuSDZp%2BQS6LmrUPHDzqIr3pV%2B%2FNS1IbmZjR8ykA4KcYBWOU10bmBIX5LsULtnl%2ByolDeh0dQzytZqa6agO063ZqzivIJPUbkB9WfjNRnuZ9sDYjrWTXafGJUl2%2B96dJKGoEjoWn%2B5%2BZclGp26epooShjmpYWO0vkNX9ZX1BeUTNaIJyFeA%2FWs3Mw%2BNZYjT6pQ7ueoMAb9EnjIFd%2BHEL98ZkpwN%2BKZ5zGy%2BQcrWXWMzE3IovsLgrxdy7ft6ADqS8PriuaVsj7VFYCCdXQINyTNKz2EKq%2BU0NgB1KonMN6q3sIGOqUB4ZwLlfrR4vxQ402IDeq3Oy%2BUodJYlqH1QMvmsNVVAcYyFf%2FDD1ydZmwc8shPzfd1qh9BNG08Zw1kWpFFTCLplwhmfxLkAAhjT3WUXtOzMAYz0aoD5ow%2BWOR3%2BsXYn%2F2nYr5h7bldjJBUkZKTCycVXlsZ%2FGWTSKFExzkOwNyJpTabAlG9YxiYTFVdjemYzJ80P9wmSMvdGjDVyyaVsqPVbqzY5KkI&X-Amz-Signature=e3dff30d6c3139f32660e9b2ceb07e520aa590288a0af3e06ef8834de826a515&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
