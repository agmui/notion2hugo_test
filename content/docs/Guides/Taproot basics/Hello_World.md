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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ7XTNPS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJhF3AM9NigU2svGBOgBCCNxdW8d9SUujREsX5wEUX3wIgeobP5CoDDBDD0VNskY0qLZE0b0sBIBGi8AxASh2Ti8IqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbPKKk%2B1ljVzDta5CrcA82DjbL1%2B8vl4TqCScudwV5uJUG98l%2BDfxU3elmMAzKBQXmy%2BLzN1I9EeBnQLbmBYCyGz%2F1mviajdz8VNwZBAPXHtNlkthClFkv4%2Fdo9qRC5IHNNZAD1UooLPtFq4EpZHUXKacDPLJdrpPc5DTXnytQQgTa%2FFEVJBOneeo7ej2U%2FBCHp3BxZFUIIip124mD1LeER15LiTDLMOEAZzb0EmA2SszOFylBVkxycpdc1FXqsKxHnI9gikzs7829tb3SIBb3M2Jth04vNp80vHeDGkdbQHdEhE8M%2ByUN%2FBLzBN2WvnY2IZsacX7tc9wckz6QFD5o9KuDr8l9pVz3D%2Fn5NQiHIv79NueC7zEkQWhy30jcORUJd6Wq%2BELEb7sYQ13%2BzNEvahSgXaHa1DbARbGQNq%2BWcglQ2xXxYUKzLHypwzBJ9nAlEL95Xh76uug5gVk86cFmhAoXp5zH6BIHcIlPVkcKbCHYiu2oeRQOhSe%2FkaxAl3nSHf7XBtJyehVux4qbBC%2B82fRg8wmInAVb80a4qO0t6eU%2BqQfcqFt805ancvW%2FqB1E9i80yEm%2Fin3cRYgGGMy3JUSF%2F7%2Batqq2nba1KcBoQgN3EXzTR5qqjoOyaxty6D%2FSYHZoRydJ6sdFMMIjSiL8GOqUBv1942aU0%2BSm8RoujAgWmC0JTDsW3mBKJu5kFXxOXz0UQoci5kiYpf%2FDwFPfX9nvh7qaBVC3ggPczWZDJF8KDuRkX%2BhvEtO3DBJ9e9mQDNSOKHHidX1tPhhk3oAulesxaTLQHWEEJ%2Bj6gwO10xBazbuSywuYOw4pyqbSib5%2BbB2WjHOfArfZ1ouH6y5t%2BsLbk7AukjcIJ1qpVc66u3iR6D3w68mih&X-Amz-Signature=5edf020da769b25c4b0b99d4d8bdef8ad87f3a202d40625586036f72a13e6c5c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJ7XTNPS%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T041021Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJhF3AM9NigU2svGBOgBCCNxdW8d9SUujREsX5wEUX3wIgeobP5CoDDBDD0VNskY0qLZE0b0sBIBGi8AxASh2Ti8IqiAQI%2Ff%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLbPKKk%2B1ljVzDta5CrcA82DjbL1%2B8vl4TqCScudwV5uJUG98l%2BDfxU3elmMAzKBQXmy%2BLzN1I9EeBnQLbmBYCyGz%2F1mviajdz8VNwZBAPXHtNlkthClFkv4%2Fdo9qRC5IHNNZAD1UooLPtFq4EpZHUXKacDPLJdrpPc5DTXnytQQgTa%2FFEVJBOneeo7ej2U%2FBCHp3BxZFUIIip124mD1LeER15LiTDLMOEAZzb0EmA2SszOFylBVkxycpdc1FXqsKxHnI9gikzs7829tb3SIBb3M2Jth04vNp80vHeDGkdbQHdEhE8M%2ByUN%2FBLzBN2WvnY2IZsacX7tc9wckz6QFD5o9KuDr8l9pVz3D%2Fn5NQiHIv79NueC7zEkQWhy30jcORUJd6Wq%2BELEb7sYQ13%2BzNEvahSgXaHa1DbARbGQNq%2BWcglQ2xXxYUKzLHypwzBJ9nAlEL95Xh76uug5gVk86cFmhAoXp5zH6BIHcIlPVkcKbCHYiu2oeRQOhSe%2FkaxAl3nSHf7XBtJyehVux4qbBC%2B82fRg8wmInAVb80a4qO0t6eU%2BqQfcqFt805ancvW%2FqB1E9i80yEm%2Fin3cRYgGGMy3JUSF%2F7%2Batqq2nba1KcBoQgN3EXzTR5qqjoOyaxty6D%2FSYHZoRydJ6sdFMMIjSiL8GOqUBv1942aU0%2BSm8RoujAgWmC0JTDsW3mBKJu5kFXxOXz0UQoci5kiYpf%2FDwFPfX9nvh7qaBVC3ggPczWZDJF8KDuRkX%2BhvEtO3DBJ9e9mQDNSOKHHidX1tPhhk3oAulesxaTLQHWEEJ%2Bj6gwO10xBazbuSywuYOw4pyqbSib5%2BbB2WjHOfArfZ1ouH6y5t%2BsLbk7AukjcIJ1qpVc66u3iR6D3w68mih&X-Amz-Signature=d156488a87f498a24d7b689de4e54ee9ed4fcc935bd6f57e104d079798734e7b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
