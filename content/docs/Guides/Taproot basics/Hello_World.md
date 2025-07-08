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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FSJCNZG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIj9sbqI00PdS%2FbNkzpLBu08KaCMuZ0P1hhyqS%2FdJZVAiEApnHOHjgOqaGy3Qs8nVaZkcPPYuZUzQVsbTc%2FJ1u2tpkqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD12YCBXs61%2BmTkv8CrcA33EwXcUluoo8bZ7TxwaAOpYk103phMDZg4VkfDU7%2Fn2LY9eZONksoGJzb6DBrzuGqIl47y3iPWrmKKBfTzTTS5avcFSxsdZsuKKgLQoGLu52M8Hz%2F8M%2BC94wn%2FdWcIftvJFcIWCKUyJjz%2Bt%2FtjEE7xisgso6S1B2obf%2BIol7BqGHFzktM12MZ1LGLrb7vjSYsgW%2Fv9P7%2BGiE64OijN16tm2q4dm7P3wvZ%2BH79JIPgTVKlGmd%2FyGWnqe%2BDo2Me7F2MN5gICjKkZ3bmenbDY2y2bJg0BGL8OoK3wv2yYlR76GJPl2ufPqpD8c5pipKNWbvOSaV2uN60lZb%2Fp6Md5Ht%2Bo3gnsRoVZvzGqBC%2FWcEZq0%2BjFD0CZU0uAg1yIVAfHIFHugEsv3BGQAv%2FxnCVGVfKfMJwodF48gi4qMP5C78x2KLajZ%2F9pToKCMuvELc6EK6wPg9PGIq69p2mteBo1N7LYgc647v1Ptxfe7ItT1hIPLYuAJYIbqQtxEh%2FBTP0Ys2XBoZWMY7UJMIUMmq%2B7AB1UQD9YA2f%2Bo%2BFUQb6F9hzxfEmqFlnUm8l9YaDZ4ycz9McQ3PZUMNMaCialNV2U0myjPDKLcka1TxotMgWt6uT7hbb50A%2FZcaaXD6PfQMJKVs8MGOqUBanID86wd%2Be8cfKssWat9VmaDZlCaZucM8kxyb%2Fl1RxOg%2FkOgdlyF37rzn7JYdtagXJjmDKzBXTPBj2clvbuA%2Bg4SI2hR0Ww%2Bev0P5LucNSVBGH%2B9Acdiym7Ng4bS8UtXz1lLHWHPa530lrNpsDJckskzUi71hDw5JQJMxtIwQC80c0Ex0QHNwBYr7hOk03zZP%2Bn98zko88PzXB4BQT%2B1QL1X1mkx&X-Amz-Signature=96826bd467b40369515287575282abff93f4dca152d896f939ec0b7b0dd3f44f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FSJCNZG%2F20250708%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250708T081313Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHIj9sbqI00PdS%2FbNkzpLBu08KaCMuZ0P1hhyqS%2FdJZVAiEApnHOHjgOqaGy3Qs8nVaZkcPPYuZUzQVsbTc%2FJ1u2tpkqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD12YCBXs61%2BmTkv8CrcA33EwXcUluoo8bZ7TxwaAOpYk103phMDZg4VkfDU7%2Fn2LY9eZONksoGJzb6DBrzuGqIl47y3iPWrmKKBfTzTTS5avcFSxsdZsuKKgLQoGLu52M8Hz%2F8M%2BC94wn%2FdWcIftvJFcIWCKUyJjz%2Bt%2FtjEE7xisgso6S1B2obf%2BIol7BqGHFzktM12MZ1LGLrb7vjSYsgW%2Fv9P7%2BGiE64OijN16tm2q4dm7P3wvZ%2BH79JIPgTVKlGmd%2FyGWnqe%2BDo2Me7F2MN5gICjKkZ3bmenbDY2y2bJg0BGL8OoK3wv2yYlR76GJPl2ufPqpD8c5pipKNWbvOSaV2uN60lZb%2Fp6Md5Ht%2Bo3gnsRoVZvzGqBC%2FWcEZq0%2BjFD0CZU0uAg1yIVAfHIFHugEsv3BGQAv%2FxnCVGVfKfMJwodF48gi4qMP5C78x2KLajZ%2F9pToKCMuvELc6EK6wPg9PGIq69p2mteBo1N7LYgc647v1Ptxfe7ItT1hIPLYuAJYIbqQtxEh%2FBTP0Ys2XBoZWMY7UJMIUMmq%2B7AB1UQD9YA2f%2Bo%2BFUQb6F9hzxfEmqFlnUm8l9YaDZ4ycz9McQ3PZUMNMaCialNV2U0myjPDKLcka1TxotMgWt6uT7hbb50A%2FZcaaXD6PfQMJKVs8MGOqUBanID86wd%2Be8cfKssWat9VmaDZlCaZucM8kxyb%2Fl1RxOg%2FkOgdlyF37rzn7JYdtagXJjmDKzBXTPBj2clvbuA%2Bg4SI2hR0Ww%2Bev0P5LucNSVBGH%2B9Acdiym7Ng4bS8UtXz1lLHWHPa530lrNpsDJckskzUi71hDw5JQJMxtIwQC80c0Ex0QHNwBYr7hOk03zZP%2Bn98zko88PzXB4BQT%2B1QL1X1mkx&X-Amz-Signature=060c8a3e8775f219bad55e53f5e8614ecc7d0d58ae1e599db8b210d1e3c7e833&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
