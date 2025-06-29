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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T7HLIWJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0Oa68Nejhchq3UoQKusv2DotF0nMSQIfW1NXqx3H8XAiEA7xPdydmTAWWO%2F97CQMDoxGwLbz7WjvGFbtNZpnP3aAQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiI%2BX0JLLNp7lGp8yrcAxcfNd6xpaVmA1Wulh36MAI00bypqx76pLGbaGvdaq64L4vgaV2Nxvg%2F11wRbZD0%2FwK7od70ycjIKYL0qV7p43bSxzzNZa3uhukZak6nqRyIba5%2Bv7MGZXxFSavoTdTi1c9ueIrtfMaSoo5k3%2FB2I%2F0%2BTKCaSvy5QyN3N6lWMGJF2m92amLJsSNbJFNxeodt1yuHYsl9ZMoCMJx9x8UyS%2FZpGOBK9s5h%2BYp3sMCzuDfakUSTP1kAN7hm6Ln4lirdy9Ms2qu9xYvRRm1Dt36Hq1NgrKxGi%2FHO7t2S2v10m2AVnduUPhDT4rMRRLjd6dFBynhviJecjm6MRPQ26E30FMtq%2FJoP4qOYHm7IYxkgQ76DdIHE4pNEZORrLaebu4kUbRXLODhIN2vgaygc7hv1YAYFwslKBp3BwtzKyheNUVbUzrP3pa49bSK9pJoNa0CVu2LM9Rrt2k9goJ%2Fwln6f7v1abR2Bx5RIY7K7xa5pa873fR99CAGpp6%2FYUbCed44c6ozxOxXgast0E2qKl5iPvs8awDlKcwJKy%2Fzi0BV3%2BeyE2Q%2BkAECbV87L7yKOsLEuqR6PLI%2FnX8JAJM6Cmu4IvBP1lmWQIJfo9bhlKMuMsaA8MPrec35s0WSiEagmMJ%2FNhsMGOqUBEYIoJpZSQMuYbLmaE6R99dhDX0QoMRzs%2BKpsuM3f%2BnQMYUqaY6Ne8AApyTEloJ99Iav8EQy3WDYpQbQXGGeqn84OTGG26g5ntweyxgQsc%2BjvGh%2FlJrsZ9wMHGkqzYRsgYdGfgwu2dCiUubspac%2B%2FUC6zTQyXy%2F0cDuWjl5%2BHmdNISVeANXB%2FIDUOfvmQJzrKgHPyRSpb%2B%2BCL9fechV2hRlSmOzil&X-Amz-Signature=9265d01a54af0211c0abb7d4186ee31b3a64a46d2184b74c9b01dc8c5a2c4bfd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667T7HLIWJ%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T230800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC0Oa68Nejhchq3UoQKusv2DotF0nMSQIfW1NXqx3H8XAiEA7xPdydmTAWWO%2F97CQMDoxGwLbz7WjvGFbtNZpnP3aAQqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHiI%2BX0JLLNp7lGp8yrcAxcfNd6xpaVmA1Wulh36MAI00bypqx76pLGbaGvdaq64L4vgaV2Nxvg%2F11wRbZD0%2FwK7od70ycjIKYL0qV7p43bSxzzNZa3uhukZak6nqRyIba5%2Bv7MGZXxFSavoTdTi1c9ueIrtfMaSoo5k3%2FB2I%2F0%2BTKCaSvy5QyN3N6lWMGJF2m92amLJsSNbJFNxeodt1yuHYsl9ZMoCMJx9x8UyS%2FZpGOBK9s5h%2BYp3sMCzuDfakUSTP1kAN7hm6Ln4lirdy9Ms2qu9xYvRRm1Dt36Hq1NgrKxGi%2FHO7t2S2v10m2AVnduUPhDT4rMRRLjd6dFBynhviJecjm6MRPQ26E30FMtq%2FJoP4qOYHm7IYxkgQ76DdIHE4pNEZORrLaebu4kUbRXLODhIN2vgaygc7hv1YAYFwslKBp3BwtzKyheNUVbUzrP3pa49bSK9pJoNa0CVu2LM9Rrt2k9goJ%2Fwln6f7v1abR2Bx5RIY7K7xa5pa873fR99CAGpp6%2FYUbCed44c6ozxOxXgast0E2qKl5iPvs8awDlKcwJKy%2Fzi0BV3%2BeyE2Q%2BkAECbV87L7yKOsLEuqR6PLI%2FnX8JAJM6Cmu4IvBP1lmWQIJfo9bhlKMuMsaA8MPrec35s0WSiEagmMJ%2FNhsMGOqUBEYIoJpZSQMuYbLmaE6R99dhDX0QoMRzs%2BKpsuM3f%2BnQMYUqaY6Ne8AApyTEloJ99Iav8EQy3WDYpQbQXGGeqn84OTGG26g5ntweyxgQsc%2BjvGh%2FlJrsZ9wMHGkqzYRsgYdGfgwu2dCiUubspac%2B%2FUC6zTQyXy%2F0cDuWjl5%2BHmdNISVeANXB%2FIDUOfvmQJzrKgHPyRSpb%2B%2BCL9fechV2hRlSmOzil&X-Amz-Signature=d40d1307cce1ac84b5473f8c9017f37d4653ab36e9a2a3670973dbe2fb48eef3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
