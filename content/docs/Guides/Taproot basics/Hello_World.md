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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKXSW3GA%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGguFekYI5w4HpqNRDkXD54J%2ByhlmggZCtbDtn1AdfS8AiAUvU8UE9oGvYOqVL5jOsaPMH2CyBajWV5ztNSRI%2BMxUir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMtAQNZf9OIL0ATUulKtwDcIS4x3m0lWgdnGyh7zTWYQP253XTD%2BEX7PwAGlM0fCEOpWTCySu1pHHlZL2COPKFegj%2FHb4oSoGBS%2Fsoc8jPQ2Tn7dRvfygiScxSkrpOu1IG%2FJGbtMRx6mcikSJ98pPgOBsNcxzTQvScQQqGIEAnBG1IpDR71vwQn03LG9n0D6rTNfwuR38L107aBjNfB%2FR3QUBTlAK4HG4qib%2B23xMYIYtS1R93nB8AEDDhP4eBn04oSNToxDhP7fFcbFXGEP7M6ujdFgdCOJ1YL2LceGE7hDC98QCvLOZ9zVAw673gMUM6PIyzaiCiwtlXXcjYB7HC1H4ERmZgfkmIuXXVgAQoNODp0nnI%2F2RevyHWvzoEFgCAHXhepKmEwTOJxhy%2BQkQXxGAn5O0Mb3Wke0PzVUM%2BwqCDfWNBXyw7L5aXmtk81MnXjWQLjnG6aFK1%2FCDQS9pp6oYFj34Kjd6r8v21pWjxFvzoPtpZ68oeAjVBX9XktGTbjbfHPJUxb81DjfuvMt%2FKCJ4ETRQsQrevKNrPi7ZCMJvfTwj%2BpyePD8yORNZs9rVKbKrKcF0HYYOzvgTJXmmkUa8rSzY8NuXIk8JFeQ1mh5lRZu3VxfnJmDBuJszmSO4zAcQdqDlV3fqjI64w2f%2BgywY6pgGXh2L88L8v2Vlb3pTXZKoZOGXNzj676M16Z1dQhT3WCvysBMgjw2wRsY4N9yqUF59JyPWjEhAOXVPIchWzrLaNqYicw32z%2BebxvXDJ19AhIf9NRqKTs%2Bf3IUtlK%2BnFaGHe8fZIND9CB4lrJdqfalhGMvn8Jx3ojMu6ALZ7JcjRpnyu1fpYeAr6ynZwUPU84s%2FOBRLUvubp5C6cf%2F3mrjkM0tMrIClI&X-Amz-Signature=1de212d7d6af19becdc49ce0d8b0ffbab89ab54b32eea83087e82efbd10a39c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKXSW3GA%2F20260115%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260115T014703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGEaCXVzLXdlc3QtMiJGMEQCIGguFekYI5w4HpqNRDkXD54J%2ByhlmggZCtbDtn1AdfS8AiAUvU8UE9oGvYOqVL5jOsaPMH2CyBajWV5ztNSRI%2BMxUir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIMtAQNZf9OIL0ATUulKtwDcIS4x3m0lWgdnGyh7zTWYQP253XTD%2BEX7PwAGlM0fCEOpWTCySu1pHHlZL2COPKFegj%2FHb4oSoGBS%2Fsoc8jPQ2Tn7dRvfygiScxSkrpOu1IG%2FJGbtMRx6mcikSJ98pPgOBsNcxzTQvScQQqGIEAnBG1IpDR71vwQn03LG9n0D6rTNfwuR38L107aBjNfB%2FR3QUBTlAK4HG4qib%2B23xMYIYtS1R93nB8AEDDhP4eBn04oSNToxDhP7fFcbFXGEP7M6ujdFgdCOJ1YL2LceGE7hDC98QCvLOZ9zVAw673gMUM6PIyzaiCiwtlXXcjYB7HC1H4ERmZgfkmIuXXVgAQoNODp0nnI%2F2RevyHWvzoEFgCAHXhepKmEwTOJxhy%2BQkQXxGAn5O0Mb3Wke0PzVUM%2BwqCDfWNBXyw7L5aXmtk81MnXjWQLjnG6aFK1%2FCDQS9pp6oYFj34Kjd6r8v21pWjxFvzoPtpZ68oeAjVBX9XktGTbjbfHPJUxb81DjfuvMt%2FKCJ4ETRQsQrevKNrPi7ZCMJvfTwj%2BpyePD8yORNZs9rVKbKrKcF0HYYOzvgTJXmmkUa8rSzY8NuXIk8JFeQ1mh5lRZu3VxfnJmDBuJszmSO4zAcQdqDlV3fqjI64w2f%2BgywY6pgGXh2L88L8v2Vlb3pTXZKoZOGXNzj676M16Z1dQhT3WCvysBMgjw2wRsY4N9yqUF59JyPWjEhAOXVPIchWzrLaNqYicw32z%2BebxvXDJ19AhIf9NRqKTs%2Bf3IUtlK%2BnFaGHe8fZIND9CB4lrJdqfalhGMvn8Jx3ojMu6ALZ7JcjRpnyu1fpYeAr6ynZwUPU84s%2FOBRLUvubp5C6cf%2F3mrjkM0tMrIClI&X-Amz-Signature=de8c3f032b74824e560a966257a2e214867257f0549aa87409cda32961bc8c51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
