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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTXRVVOD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6e%2F8dlIk1EDL%2Fg8upzR9j88v4cV1eiYK4lG3DpEUbHAiEAkbEHy339AXcEA43w2Wc6Wt9hu%2BrXwjwoAC6dB52JbEYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJ7o7Hc4%2BshKnyYF%2FyrcA0HJ7jf%2FFBJJk0VEJ5VCwLeQFQ5RBzH2%2FZ7Xt1vWa745V4Vl92Cjydv2fikKBihiVwnGGbdou5Xmk06ELxatOzgRPy5MHCcy0GcOQloYmdwcN4lfx0HsS2I3P%2B4BLZD37uLvYdss%2BfBUNrGpHPkjSd20Kp%2B0pYoWF81fBd8nNolg47nSxDftciC7JX4GZZc672K6pORJI%2Bkfr%2B%2F5iYn2o%2BeEcIrACidsTVAxzKVvlgWCoUdkuW4SvR6fiVG1Ndz%2F5a864ROVPLghXxJwiuwNsk0ozswZhEdoQK48fgOk8EUyp5brJqskOML7RlHqjF66XROEOM58H8Ashk1sQBrs8SXp9jfxiXO1KjsUu4iDqHqyUhT1it1VgfiPu4Gp2VjtrfYdbsXcKbU%2B4AndlQWYmBNP21iY3fyMVUFQn5%2Fpt3XYW%2FL%2B%2FXOg1UI1QT3JOLrtKFXqqnWthOprnj6hK1u5DUEJRDGmUQyT%2FRDxVtjWMSvbeCOgkDvHyfiNOr8zpJzSOhEqv3JIP6j%2F%2BUNZdsoja53V6SFzcTniAc2QaJSkN%2F23ML5YKn38jn1w8WRoz57WTyj9edbJBxtpkVfzdPmkupGXK2yGKhTf9wSskE1ltIS4%2BMziaGpclgeP%2FJKoMIyBpcEGOqUBeXilxA5%2FJx%2Ffdc4WWwjZZp5fXwGbRt%2B%2Fn%2BCArWRwKCOHPvSNNYwBRypfkQOFw3qRE6epGtsUSNtic2wsm26WwxKp%2BD4NRb5vPA5Lz4Dx%2FSSqWR%2Bc5QjW74w4M3uy41V2fsM%2B1BCjy60V%2BsiYdJKmhWDq4nQv1f6Dg0DvxxBshdhLL%2B9rMQ2HqCs8LS04WiiHQAYN78w2iWrB0F31Ijj0EohHGBX1&X-Amz-Signature=42d75bf9884579b9cc14a92bd259a4f52e2bcd5f242afc3eed6af76dae102bac&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTXRVVOD%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T024041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG6e%2F8dlIk1EDL%2Fg8upzR9j88v4cV1eiYK4lG3DpEUbHAiEAkbEHy339AXcEA43w2Wc6Wt9hu%2BrXwjwoAC6dB52JbEYq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDJ7o7Hc4%2BshKnyYF%2FyrcA0HJ7jf%2FFBJJk0VEJ5VCwLeQFQ5RBzH2%2FZ7Xt1vWa745V4Vl92Cjydv2fikKBihiVwnGGbdou5Xmk06ELxatOzgRPy5MHCcy0GcOQloYmdwcN4lfx0HsS2I3P%2B4BLZD37uLvYdss%2BfBUNrGpHPkjSd20Kp%2B0pYoWF81fBd8nNolg47nSxDftciC7JX4GZZc672K6pORJI%2Bkfr%2B%2F5iYn2o%2BeEcIrACidsTVAxzKVvlgWCoUdkuW4SvR6fiVG1Ndz%2F5a864ROVPLghXxJwiuwNsk0ozswZhEdoQK48fgOk8EUyp5brJqskOML7RlHqjF66XROEOM58H8Ashk1sQBrs8SXp9jfxiXO1KjsUu4iDqHqyUhT1it1VgfiPu4Gp2VjtrfYdbsXcKbU%2B4AndlQWYmBNP21iY3fyMVUFQn5%2Fpt3XYW%2FL%2B%2FXOg1UI1QT3JOLrtKFXqqnWthOprnj6hK1u5DUEJRDGmUQyT%2FRDxVtjWMSvbeCOgkDvHyfiNOr8zpJzSOhEqv3JIP6j%2F%2BUNZdsoja53V6SFzcTniAc2QaJSkN%2F23ML5YKn38jn1w8WRoz57WTyj9edbJBxtpkVfzdPmkupGXK2yGKhTf9wSskE1ltIS4%2BMziaGpclgeP%2FJKoMIyBpcEGOqUBeXilxA5%2FJx%2Ffdc4WWwjZZp5fXwGbRt%2B%2Fn%2BCArWRwKCOHPvSNNYwBRypfkQOFw3qRE6epGtsUSNtic2wsm26WwxKp%2BD4NRb5vPA5Lz4Dx%2FSSqWR%2Bc5QjW74w4M3uy41V2fsM%2B1BCjy60V%2BsiYdJKmhWDq4nQv1f6Dg0DvxxBshdhLL%2B9rMQ2HqCs8LS04WiiHQAYN78w2iWrB0F31Ijj0EohHGBX1&X-Amz-Signature=75ee36e97ade3231a6f056128c9a80e73298d497dfb70eff28af1c36db048814&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
