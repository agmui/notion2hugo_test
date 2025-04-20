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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIJSXNGW%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCzCeDb4LT%2BHK4Ie6cWui2RJUYyLYoB7Q6A%2FyJ%2FLObWWgIgZ41rzpsG4hCHpHTDBCPZu5MeAdzoBeQGcg2XqftWh6MqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFL%2Bji8e69RFrB1Z3ircA7ueMbfAKecHVPTzynHXGuthz3fmC%2B8%2BmPaoD9yEz%2F3OH1JQothBt%2FdC%2BsEi2WgmeUNTsZSpyNqHipubWOXJb3tICBakVHRqX8tfzUG4Vbn355oi31Ac6eAynKSJYRTxm%2FCKQLlahe2Ra9oLJhkDiDYYJDiOshRKMs6%2FpuYpumNlfZVlRD%2FssjGqtpXo2UoBne%2FovW6aOk4orRA6JH0rAvy88VK6Lfh5O3V9ntlOE122D4TNAmrE7yLrVcVavLooMoV1Z2rAzZJwo5h%2FvkR1Q%2FH5dJydR7Ue%2Fj%2F1QaHguc8DmDcm0nT2j9OcI5b29UJOdRfvs5PDN3w%2FxEZCtb4kGl6QRK9bIDP6SZfbnegOO4DU1HfWFyS6Cnmc06aHnS6T9AIPcNz27exSkezmEofVW%2B1JZpvccv13ou2UwhlPK7V8EJ%2FHy4mRuyzQVzdggVbBzBlrnnEwVGd05DcJCSm6dMuh0e3cqJLIYTI08JMfgQXrgblwMpakGtxYSK0EpS6jtFgrWiL8IAmcderPqcNfW6yyFElu0VLyJGyXmFQiSSZZxWb4ZaQ9eu%2Bnx9Ep24JaKUtjprnjCkMf0srvYN8vEACg0NlRmrQxnPZiBn1nLZ0JLwzUnuf33cpA1ZVAMO6jksAGOqUBsyFLG9Ae8s8tI1a%2Bce8aJeoAVQPjdwZNd5%2B3rsaO7z%2FOROi2lK6tGnczfyog6IVgz49JObwBkojkbnChvK2sSTne%2BjLvW8a8OensAGpluy0%2BtjmlPWkAkc3pGoLCxb%2FnaPiG01%2B4FUnCNlnNjCpkSXe8hFMQrAj21VghJGINDD1fCVark8SuBMSXnLLXorbaXbOWwfxh%2BdXqdff6QMdSM0jH%2F80l&X-Amz-Signature=06ead077b559f8c1e1b36dc746106af57b2c319fa76d6df3bbfdd63c2f07f077&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIJSXNGW%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T100752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCzCeDb4LT%2BHK4Ie6cWui2RJUYyLYoB7Q6A%2FyJ%2FLObWWgIgZ41rzpsG4hCHpHTDBCPZu5MeAdzoBeQGcg2XqftWh6MqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFL%2Bji8e69RFrB1Z3ircA7ueMbfAKecHVPTzynHXGuthz3fmC%2B8%2BmPaoD9yEz%2F3OH1JQothBt%2FdC%2BsEi2WgmeUNTsZSpyNqHipubWOXJb3tICBakVHRqX8tfzUG4Vbn355oi31Ac6eAynKSJYRTxm%2FCKQLlahe2Ra9oLJhkDiDYYJDiOshRKMs6%2FpuYpumNlfZVlRD%2FssjGqtpXo2UoBne%2FovW6aOk4orRA6JH0rAvy88VK6Lfh5O3V9ntlOE122D4TNAmrE7yLrVcVavLooMoV1Z2rAzZJwo5h%2FvkR1Q%2FH5dJydR7Ue%2Fj%2F1QaHguc8DmDcm0nT2j9OcI5b29UJOdRfvs5PDN3w%2FxEZCtb4kGl6QRK9bIDP6SZfbnegOO4DU1HfWFyS6Cnmc06aHnS6T9AIPcNz27exSkezmEofVW%2B1JZpvccv13ou2UwhlPK7V8EJ%2FHy4mRuyzQVzdggVbBzBlrnnEwVGd05DcJCSm6dMuh0e3cqJLIYTI08JMfgQXrgblwMpakGtxYSK0EpS6jtFgrWiL8IAmcderPqcNfW6yyFElu0VLyJGyXmFQiSSZZxWb4ZaQ9eu%2Bnx9Ep24JaKUtjprnjCkMf0srvYN8vEACg0NlRmrQxnPZiBn1nLZ0JLwzUnuf33cpA1ZVAMO6jksAGOqUBsyFLG9Ae8s8tI1a%2Bce8aJeoAVQPjdwZNd5%2B3rsaO7z%2FOROi2lK6tGnczfyog6IVgz49JObwBkojkbnChvK2sSTne%2BjLvW8a8OensAGpluy0%2BtjmlPWkAkc3pGoLCxb%2FnaPiG01%2B4FUnCNlnNjCpkSXe8hFMQrAj21VghJGINDD1fCVark8SuBMSXnLLXorbaXbOWwfxh%2BdXqdff6QMdSM0jH%2F80l&X-Amz-Signature=feaf7f2c60baee7417798c66b9e4b97d14f3a4fac180e9aafaaf9d90d27f94f9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
