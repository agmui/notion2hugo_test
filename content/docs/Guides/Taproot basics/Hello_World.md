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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WYYUPXZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDtNMTeShtMuA5sI1jYiiQdt05pjPtTDLaD9WiMo3fidgIhALCy2Kf6yY%2BUNevqyYaUUrL%2FWs%2BLHHkaKn7z83latuy4Kv8DCHgQABoMNjM3NDIzMTgzODA1IgwQtuTbe1RMaoTD%2FN4q3AMfCz21cZQS6TlfrL5Ivb4A0gcm%2BfhjIkf8ZuF%2B3vENPoKuknXOgc2iyoZnosiJ8wOWB6NOGyUBiatBsNvVqpS40%2FYKre5xbsAF%2Bt3KG7vusUCGhVcuMc8mEx%2BWQxGMBUgkGVETTV1kAexILG24qc7ANfXMI9pNPugJRJ8VIijwnoUPK3%2BxNcEc%2B2tnIEGZ1mFQNZmKMg5RfnxTMUhT2vvRalJgrDpDy0wv8jJ5t%2FWlsBktSdpCIv9nrpeDMS4zhPvi02pQ4kvxWhgZ9n0Vp64yPSktALJWh0jfv7rvnWHf3eZn2pitlsqAyNRNsN5gD3ettYKFJ%2FA9IhMWBJd7ZSO6Kz3swhuQWqFEgkegrxb7MJBkXDl32vLlTfzmSDw%2FxEZk%2FjY9RyGttV9jYauebWiSJqkANqSBLfBhE2T9wv1WJQgHN8bSfdn8D1vshbaWUUypBWHbyp81qjzWdF4Etc0PvCkUZtZcDrzTG5sOjQQa0G1tGeCGeTVoNfJ0niuhcQzmYO%2Bp%2BoK0hwnKQKOwPSS0uwsxg4lZmfaRdjYbQyNJWBNE1W0R1NXQbtgXjrxRzHYnudb1x5lPhJyVOsw3MiuQMd3Nx8BcKBbesmnTGyxVN1bTagvstqXWXbe6MDDQ%2FpjEBjqkAcrTbiHQzZtWtA%2F%2Bi8bycpxytXXby5A6OfnBudT37eWrfCkOl0RUaZnYIwpqGj3ufzmb98OJAUOrfZ9WFDYjs%2B%2FiFAp5wm2%2Bdj%2Fr6%2F%2FpNOkXDkXnwQK4kRpYAOhVPvh1akJAe7Rj6uibipeKoLJvc3pXLGFCFn8OZURnj3g%2F0BQ3tec84oLi%2F8VnTrwqJmI9y%2FOdbzWSPEabt1CrKb2x749JKO5F&X-Amz-Signature=09334584c4b3ac23766050a59e4897a052415f72bee56f53ade3ab0eae2d6df7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WYYUPXZ%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T160949Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQDtNMTeShtMuA5sI1jYiiQdt05pjPtTDLaD9WiMo3fidgIhALCy2Kf6yY%2BUNevqyYaUUrL%2FWs%2BLHHkaKn7z83latuy4Kv8DCHgQABoMNjM3NDIzMTgzODA1IgwQtuTbe1RMaoTD%2FN4q3AMfCz21cZQS6TlfrL5Ivb4A0gcm%2BfhjIkf8ZuF%2B3vENPoKuknXOgc2iyoZnosiJ8wOWB6NOGyUBiatBsNvVqpS40%2FYKre5xbsAF%2Bt3KG7vusUCGhVcuMc8mEx%2BWQxGMBUgkGVETTV1kAexILG24qc7ANfXMI9pNPugJRJ8VIijwnoUPK3%2BxNcEc%2B2tnIEGZ1mFQNZmKMg5RfnxTMUhT2vvRalJgrDpDy0wv8jJ5t%2FWlsBktSdpCIv9nrpeDMS4zhPvi02pQ4kvxWhgZ9n0Vp64yPSktALJWh0jfv7rvnWHf3eZn2pitlsqAyNRNsN5gD3ettYKFJ%2FA9IhMWBJd7ZSO6Kz3swhuQWqFEgkegrxb7MJBkXDl32vLlTfzmSDw%2FxEZk%2FjY9RyGttV9jYauebWiSJqkANqSBLfBhE2T9wv1WJQgHN8bSfdn8D1vshbaWUUypBWHbyp81qjzWdF4Etc0PvCkUZtZcDrzTG5sOjQQa0G1tGeCGeTVoNfJ0niuhcQzmYO%2Bp%2BoK0hwnKQKOwPSS0uwsxg4lZmfaRdjYbQyNJWBNE1W0R1NXQbtgXjrxRzHYnudb1x5lPhJyVOsw3MiuQMd3Nx8BcKBbesmnTGyxVN1bTagvstqXWXbe6MDDQ%2FpjEBjqkAcrTbiHQzZtWtA%2F%2Bi8bycpxytXXby5A6OfnBudT37eWrfCkOl0RUaZnYIwpqGj3ufzmb98OJAUOrfZ9WFDYjs%2B%2FiFAp5wm2%2Bdj%2Fr6%2F%2FpNOkXDkXnwQK4kRpYAOhVPvh1akJAe7Rj6uibipeKoLJvc3pXLGFCFn8OZURnj3g%2F0BQ3tec84oLi%2F8VnTrwqJmI9y%2FOdbzWSPEabt1CrKb2x749JKO5F&X-Amz-Signature=cf5c47268149518d1d64d94048924d27d8ff46fe20e9430444eb80a72fd7ac7d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
