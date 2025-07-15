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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZHNVKYH%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCx%2Butwgt5MYupVrQR%2FXupn1SqSGe%2F%2FSWpePwuQgx4kLwIhAKEwcYwDuS6tEdlwze74qSrI%2FtY%2B8aBi6%2BaRVoSe%2FcXGKv8DCE4QABoMNjM3NDIzMTgzODA1IgwYch7XZIT68erlWoEq3AOuNlK0Nc0zfG75%2BoWSBb1tO8aEFJEjpowI4zMoHcQICL0B1PCh%2F1TBWyY2xDXlYJhrLIpy064AtX2LOCJ3j1OdSl4H3zJb1XlrBWJniVzvTXSgDTzVObJHYGmKjRFTCovoHBfSAlGzytNBTRA%2FDjZKGOU4RUb0tj3WKaCCYpaXulz0U9KXU4Y%2BuS7MCLmAz%2B1saPQXZYzP%2Bo8JxrXwkR%2BE6RII7cysXKQBcz5%2BqkDarOgavozJXPpcx0po2d6iwZl2vxlD0XCEW22YVN%2FkYbXPaMBsRCEchy9pbTULzjEbA9cjhAsLTz3av5bRFQtFVCWbWUepD745Ppf%2B30TY9nGt2vaDjM4aUuj3wfXeFzd2kiL1OCzVaM66Sa2BwI0aNEtaZ1pttjUmXLLEEoQyMH15VuxBcUO8QVIeqOvDcSCJzjmsiNGTm9tUyqt1dELENTAvPA8HS8M3TjCr4k43qB0maJzX5iKinO9q38cj1M9eJigkgyBtqx5RfmllTDgKh1ZshQNZCrAyfrnPWChYLlef2cTkHmsh5CBogT8%2F4Czmcmsjmf9Krzfag4NSK7TpSdqd4QcE3lOT8X%2BoHjSlpr58fvsWPbx7%2BKFqYawbry5bCJ9z9oCuNNKa4Ry0dDCx9trDBjqkAaqS8wiZUsfWSudVWi%2FBOIXrDvT4qAKzmQcl0h3Q%2F6tsRbdAQccW6Xdu%2B3VPggjEt%2FdQQq3perXBX9LrH4xqIN7LPI3mH9NpwYqAy0CNXaGxDKyhY2ATBztn9ZTiTsEkbofayivRY6eX6tFN2WhtFHYunjT9cNhzx08Ig2QWq%2F8QAY1QeuvZLmgWY%2Bti1i%2FrIFvzLgTmyGmfecFou483pS4OFDZh&X-Amz-Signature=376b7f9a612e68a3a642c41d13ea820a45ba9a115aed44717ab925de5dc39007&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZHNVKYH%2F20250715%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250715T210715Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJIMEYCIQCx%2Butwgt5MYupVrQR%2FXupn1SqSGe%2F%2FSWpePwuQgx4kLwIhAKEwcYwDuS6tEdlwze74qSrI%2FtY%2B8aBi6%2BaRVoSe%2FcXGKv8DCE4QABoMNjM3NDIzMTgzODA1IgwYch7XZIT68erlWoEq3AOuNlK0Nc0zfG75%2BoWSBb1tO8aEFJEjpowI4zMoHcQICL0B1PCh%2F1TBWyY2xDXlYJhrLIpy064AtX2LOCJ3j1OdSl4H3zJb1XlrBWJniVzvTXSgDTzVObJHYGmKjRFTCovoHBfSAlGzytNBTRA%2FDjZKGOU4RUb0tj3WKaCCYpaXulz0U9KXU4Y%2BuS7MCLmAz%2B1saPQXZYzP%2Bo8JxrXwkR%2BE6RII7cysXKQBcz5%2BqkDarOgavozJXPpcx0po2d6iwZl2vxlD0XCEW22YVN%2FkYbXPaMBsRCEchy9pbTULzjEbA9cjhAsLTz3av5bRFQtFVCWbWUepD745Ppf%2B30TY9nGt2vaDjM4aUuj3wfXeFzd2kiL1OCzVaM66Sa2BwI0aNEtaZ1pttjUmXLLEEoQyMH15VuxBcUO8QVIeqOvDcSCJzjmsiNGTm9tUyqt1dELENTAvPA8HS8M3TjCr4k43qB0maJzX5iKinO9q38cj1M9eJigkgyBtqx5RfmllTDgKh1ZshQNZCrAyfrnPWChYLlef2cTkHmsh5CBogT8%2F4Czmcmsjmf9Krzfag4NSK7TpSdqd4QcE3lOT8X%2BoHjSlpr58fvsWPbx7%2BKFqYawbry5bCJ9z9oCuNNKa4Ry0dDCx9trDBjqkAaqS8wiZUsfWSudVWi%2FBOIXrDvT4qAKzmQcl0h3Q%2F6tsRbdAQccW6Xdu%2B3VPggjEt%2FdQQq3perXBX9LrH4xqIN7LPI3mH9NpwYqAy0CNXaGxDKyhY2ATBztn9ZTiTsEkbofayivRY6eX6tFN2WhtFHYunjT9cNhzx08Ig2QWq%2F8QAY1QeuvZLmgWY%2Bti1i%2FrIFvzLgTmyGmfecFou483pS4OFDZh&X-Amz-Signature=6f37e04a11a8cf91b7a332543cf2f165e28568cc7b70c175ddd1ffad58d9f789&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
