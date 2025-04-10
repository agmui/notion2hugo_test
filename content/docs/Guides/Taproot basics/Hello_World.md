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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDM6VTQP%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDBvtCw0hB7OIMwf%2Fg%2BH80cyegGiSwTXkXYJbJ7n5iEpwIhAIZe%2FiJQb915tNVuNSXjXdCP97FklEmqK%2BVT6xbfdU%2B5KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8tJdgAWOzVE%2FWrOYq3AOEe%2BTHBqznVRCaihGIAUTxqi0YqJ1pvcN0dzAWgZ3XKQzvZz5ki2oKpWRQIcQYrfGYnP84KRzqogEw6PHr0uq%2F4Ri4%2BaFG%2FftujmCqMcVKexv0jYQIMVwrnUchYtex33QYsNzvvS%2FFcfcyPPOQQblWLL96qVXqM5KfrRP6y1i3UmYJmcJmusWZLF8nSlIFW%2FzbAp9Axx4lXqxbRG4qFmmg4ToiNy1tZlE5822ymTvEZRV25s3kkaJUxhvpDHwRNrJiyJ5%2BAM1ji0lbqPVQgQIfKDr2xeC%2FW8riTbbVPk%2FRudi8aMeXQ0BUt66jxXfZd4Dd9%2Bav%2F6ohw7u2CzGiDFaV2Y6g96F%2BKpGCnnN%2Fd962eC6tQxCNnMkLQjY44%2F9Xo%2BPBYI1mQf50yMQXhIY%2B8hlmhRrjasoW3xDL%2BCvxMIp%2FWQdGBlDx%2BuwNJ6rRqxelBTjAceS4VXDi1c%2FuGV10AIr%2FAbh8%2F%2B5a%2BVsH8DVbWGkD0iLz2VevQhWjy0UQuDrUconxryc6jxbHh6ZAHZJ6OOLs27lRzR0o9lNwDvIrmVpdVcPLj4cdFygTqK0EBAUJcGJ%2BZLFzCnWn%2BO7vJjAbRuNiIHXGLd6ZakPhMF%2Bp667ouNszqeEb8awpcLj08zCXud%2B%2FBjqkAYaktqfRgKpfWwn0x%2ByebfTNZyblo45pK9eeAoLsAFYvqjnmluTkrZPz7r55r83MZJwoQ20QW4n6NUgMhpzm0oBe3F2SHFuiCBqNaPw1ZxwHUIdvexrccv5vyLNbQxTtKLl51zBS8mUXKpz3gZWnLcwVTDMsGBOb4RsrgH5PTQPLkEofbOoS3lkFqIIQHsuleGs5j4zzisXpqMCIRsq4hZuqlCFv&X-Amz-Signature=4d81c0a4b841ea1278d60b680d4987a820b4edd9585fe2069efe73f23c5f0148&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TDM6VTQP%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T150857Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC8aCXVzLXdlc3QtMiJIMEYCIQDBvtCw0hB7OIMwf%2Fg%2BH80cyegGiSwTXkXYJbJ7n5iEpwIhAIZe%2FiJQb915tNVuNSXjXdCP97FklEmqK%2BVT6xbfdU%2B5KogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8tJdgAWOzVE%2FWrOYq3AOEe%2BTHBqznVRCaihGIAUTxqi0YqJ1pvcN0dzAWgZ3XKQzvZz5ki2oKpWRQIcQYrfGYnP84KRzqogEw6PHr0uq%2F4Ri4%2BaFG%2FftujmCqMcVKexv0jYQIMVwrnUchYtex33QYsNzvvS%2FFcfcyPPOQQblWLL96qVXqM5KfrRP6y1i3UmYJmcJmusWZLF8nSlIFW%2FzbAp9Axx4lXqxbRG4qFmmg4ToiNy1tZlE5822ymTvEZRV25s3kkaJUxhvpDHwRNrJiyJ5%2BAM1ji0lbqPVQgQIfKDr2xeC%2FW8riTbbVPk%2FRudi8aMeXQ0BUt66jxXfZd4Dd9%2Bav%2F6ohw7u2CzGiDFaV2Y6g96F%2BKpGCnnN%2Fd962eC6tQxCNnMkLQjY44%2F9Xo%2BPBYI1mQf50yMQXhIY%2B8hlmhRrjasoW3xDL%2BCvxMIp%2FWQdGBlDx%2BuwNJ6rRqxelBTjAceS4VXDi1c%2FuGV10AIr%2FAbh8%2F%2B5a%2BVsH8DVbWGkD0iLz2VevQhWjy0UQuDrUconxryc6jxbHh6ZAHZJ6OOLs27lRzR0o9lNwDvIrmVpdVcPLj4cdFygTqK0EBAUJcGJ%2BZLFzCnWn%2BO7vJjAbRuNiIHXGLd6ZakPhMF%2Bp667ouNszqeEb8awpcLj08zCXud%2B%2FBjqkAYaktqfRgKpfWwn0x%2ByebfTNZyblo45pK9eeAoLsAFYvqjnmluTkrZPz7r55r83MZJwoQ20QW4n6NUgMhpzm0oBe3F2SHFuiCBqNaPw1ZxwHUIdvexrccv5vyLNbQxTtKLl51zBS8mUXKpz3gZWnLcwVTDMsGBOb4RsrgH5PTQPLkEofbOoS3lkFqIIQHsuleGs5j4zzisXpqMCIRsq4hZuqlCFv&X-Amz-Signature=1d3d680efa886a9db7115ab61f5b0431c7257f5a8185f8ac966ade436ea9bfec&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
