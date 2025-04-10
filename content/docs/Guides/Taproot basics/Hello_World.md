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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KPEAWJR%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDDip1o43VW5lXb4TA%2BGKUvf85yY7ulLvJd9pUvRRX0JAiA85gK3tGoYTT%2FNyM%2BUAPL2iruVVqWkG%2F7grfMCxMczZCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH7coVwU%2F%2BdoC07ZhKtwDINXpCFtKxwQZffuu0Zogzwwns1S7mZj4AJ7vmnjqMTcdpzSY%2FA1GH2yenQ0o%2B9VjsxQF%2FcVgZRSlivUKBRLaeFKvzcFsV2UejluSxT1VMzMdkQoyLtHwCIf4UeX%2BI70oBYPA3xV1dYvk%2B8seZKDVxwMIm2Rlix7gc%2F70OdO8jnWKWe10Rfo5BeHFHACSSwzF%2BmVoVClR4Ho63G17yaZlOKt0VvsFigpSDDnn1EM2Zbi0TO8vXpdf3YAEcyqACBaUoaiUy0mL8mOY3FV%2BqHOiwIst5GeHkw%2FQr6vCcbWlsMxxGrqNOZrq9ePj8N5WJfUfIvx5wMzCuktjoyv7%2FbRXPwaFr6SEpmUNZuDR%2B6MP9LR0muXUqdn%2FAKa3s4AJXN2JQqzK4l2KyyQYq23odXG1T7gZjNWKTn5wUucSI%2FnudSsE8f3H%2BLWteR2Tlw1Zh%2BY%2FnjoB328a%2F%2BT4x8RGpM9Z8VJpp5SAthLykHJH67wOrZ4e8TZM9TWBgHjAwaTpmLD805NNErmEdyDQIW5J%2By6tDkVQF%2BGG9inAM%2BUlXjc0W88g6byS59Y8NzRJdv%2FSsutyUqxfsJ4j8EkvMVCK6k4kXbjRGzgpAJpdayah2XeH9njtXpq2HQDqTIlzRiAw4%2FLdvwY6pgGBhLIWhhmvgwmTeWC8obVjKiAei7BZ%2B0rZDAmThdGuuRe8fyT2sIBpUjYXBcjC12qW28rgBp%2FqCJS1p3SIjOxERoDX%2Bw8JA7XrFOM58yaGdgxHRqkjm4bZK92uPS5pwsHNF0AvfulYW%2BhoWoyW%2F95wggOlRSg462EQ5GG1bUcNsivDQYVfbwUyRQrZPoU4m4OswRUdAGzOzxa6eMyLmojJ%2BMAJ7A6j&X-Amz-Signature=29a4e531d8cd2de98efca230106a2b2c6b2c07e13ce8876cf52e643309909e8e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KPEAWJR%2F20250410%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250410T081137Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIDDip1o43VW5lXb4TA%2BGKUvf85yY7ulLvJd9pUvRRX0JAiA85gK3tGoYTT%2FNyM%2BUAPL2iruVVqWkG%2F7grfMCxMczZCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMH7coVwU%2F%2BdoC07ZhKtwDINXpCFtKxwQZffuu0Zogzwwns1S7mZj4AJ7vmnjqMTcdpzSY%2FA1GH2yenQ0o%2B9VjsxQF%2FcVgZRSlivUKBRLaeFKvzcFsV2UejluSxT1VMzMdkQoyLtHwCIf4UeX%2BI70oBYPA3xV1dYvk%2B8seZKDVxwMIm2Rlix7gc%2F70OdO8jnWKWe10Rfo5BeHFHACSSwzF%2BmVoVClR4Ho63G17yaZlOKt0VvsFigpSDDnn1EM2Zbi0TO8vXpdf3YAEcyqACBaUoaiUy0mL8mOY3FV%2BqHOiwIst5GeHkw%2FQr6vCcbWlsMxxGrqNOZrq9ePj8N5WJfUfIvx5wMzCuktjoyv7%2FbRXPwaFr6SEpmUNZuDR%2B6MP9LR0muXUqdn%2FAKa3s4AJXN2JQqzK4l2KyyQYq23odXG1T7gZjNWKTn5wUucSI%2FnudSsE8f3H%2BLWteR2Tlw1Zh%2BY%2FnjoB328a%2F%2BT4x8RGpM9Z8VJpp5SAthLykHJH67wOrZ4e8TZM9TWBgHjAwaTpmLD805NNErmEdyDQIW5J%2By6tDkVQF%2BGG9inAM%2BUlXjc0W88g6byS59Y8NzRJdv%2FSsutyUqxfsJ4j8EkvMVCK6k4kXbjRGzgpAJpdayah2XeH9njtXpq2HQDqTIlzRiAw4%2FLdvwY6pgGBhLIWhhmvgwmTeWC8obVjKiAei7BZ%2B0rZDAmThdGuuRe8fyT2sIBpUjYXBcjC12qW28rgBp%2FqCJS1p3SIjOxERoDX%2Bw8JA7XrFOM58yaGdgxHRqkjm4bZK92uPS5pwsHNF0AvfulYW%2BhoWoyW%2F95wggOlRSg462EQ5GG1bUcNsivDQYVfbwUyRQrZPoU4m4OswRUdAGzOzxa6eMyLmojJ%2BMAJ7A6j&X-Amz-Signature=1e9519e29baa02f0f61bfaade2c9facebefdfa66b4b73a478d30f013be715cdb&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
