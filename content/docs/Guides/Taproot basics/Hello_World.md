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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TJMPNWU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BWuTAV5MiKceB7BRLEDlODh%2Ft%2FOmRIaEVNFY8aPg85AiBbIyd1svD%2BDaMWEMizv3%2Fu2nS%2BjUFnfSs9miTHFtlwCiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHbN%2BXNh8ZQunxefKtwDy2MPSQnewbBxigq6IfPqvtU1MywSvdoWp4qDSfEOqzbHww%2FoCCmWUhfNOLpAJS4pWbbhh1M49n0nie9EE3TeCVbtz79GP1%2FlCDG%2Bf%2FFMH1CI5Z6G5spUOBCA1t7By%2BChZgQd0Rp2rBn3ebiso2d62egjFY6TENRTmGrIx5UU0w9aMPdgnCR7SuG2MALmUUMYPgDHFeZEtVJw2i5C16yyPPAJToSvT83BwJD%2BQkUDN2uwQYgGaaqzWapkMdaV28CXiTw0CvBJQiymp7z1vcsJBCvTvz9xIGIcr1vsX0q%2FIeFG3lcVM69Xq%2BZLbcSISfa%2B3EXFx%2FagorrXVVsHtgD%2B%2B%2BqcMLfyb2zgX4wh1LyzT1ZZs6dI%2BDNSMrjGDkdtcNQ595OEAP3rQWl4cUcXgS5APbIDrXglE4QZpnhO5PX5oghgVrA0lWTTSVv1Zv1mDNnaRd6yoKzWS8xzmUt7Th6XQwWSauwGNQCJHNvTSogJjDf6mLY6TxzXUy4EBOkqVfyR0uHyHxt0cMkL0ExXwX0YONHHqvgHVzeDFJrYB6oi4x3SpNAR4SUHlRWYKzGJx4QsxSr%2FXIPQqPQNRAGyzbI5Qxdw2Q05BzHBpXlrL8wvR9YuTp59aRYXCklBqwEwxZyawgY6pgF3%2FQAGT%2BfP8OzzmKRAJ8uh9RABOpOvypDj1HdcV1vg%2FVVeq9RLxyyieNrbboFm%2FayIghC%2Fxm5QtEiCwAdBtd7CMAq0vEhxV9IiJ14Nw1SeGupyxEONP6S3aQEKY32c94Nn94r43jYinb4dif9xz70ca3fO%2FA73jaZRjlkwxnEPaDuq20f616XTfrNyLXOS79BpnIXbEpWcMp5eUOKURwKLl%2FmqKOpC&X-Amz-Signature=d02657620098b18bcc69223dc2d64ec5b3ba6c750aa199f2734dd97a387b1457&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TJMPNWU%2F20250609%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250609T091037Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE%2BWuTAV5MiKceB7BRLEDlODh%2Ft%2FOmRIaEVNFY8aPg85AiBbIyd1svD%2BDaMWEMizv3%2Fu2nS%2BjUFnfSs9miTHFtlwCiqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMfHbN%2BXNh8ZQunxefKtwDy2MPSQnewbBxigq6IfPqvtU1MywSvdoWp4qDSfEOqzbHww%2FoCCmWUhfNOLpAJS4pWbbhh1M49n0nie9EE3TeCVbtz79GP1%2FlCDG%2Bf%2FFMH1CI5Z6G5spUOBCA1t7By%2BChZgQd0Rp2rBn3ebiso2d62egjFY6TENRTmGrIx5UU0w9aMPdgnCR7SuG2MALmUUMYPgDHFeZEtVJw2i5C16yyPPAJToSvT83BwJD%2BQkUDN2uwQYgGaaqzWapkMdaV28CXiTw0CvBJQiymp7z1vcsJBCvTvz9xIGIcr1vsX0q%2FIeFG3lcVM69Xq%2BZLbcSISfa%2B3EXFx%2FagorrXVVsHtgD%2B%2B%2BqcMLfyb2zgX4wh1LyzT1ZZs6dI%2BDNSMrjGDkdtcNQ595OEAP3rQWl4cUcXgS5APbIDrXglE4QZpnhO5PX5oghgVrA0lWTTSVv1Zv1mDNnaRd6yoKzWS8xzmUt7Th6XQwWSauwGNQCJHNvTSogJjDf6mLY6TxzXUy4EBOkqVfyR0uHyHxt0cMkL0ExXwX0YONHHqvgHVzeDFJrYB6oi4x3SpNAR4SUHlRWYKzGJx4QsxSr%2FXIPQqPQNRAGyzbI5Qxdw2Q05BzHBpXlrL8wvR9YuTp59aRYXCklBqwEwxZyawgY6pgF3%2FQAGT%2BfP8OzzmKRAJ8uh9RABOpOvypDj1HdcV1vg%2FVVeq9RLxyyieNrbboFm%2FayIghC%2Fxm5QtEiCwAdBtd7CMAq0vEhxV9IiJ14Nw1SeGupyxEONP6S3aQEKY32c94Nn94r43jYinb4dif9xz70ca3fO%2FA73jaZRjlkwxnEPaDuq20f616XTfrNyLXOS79BpnIXbEpWcMp5eUOKURwKLl%2FmqKOpC&X-Amz-Signature=b98d1ce8f687ad100b14ce1685d371f8b23dd051278e0e8a38e06b8cdb5446a4&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
