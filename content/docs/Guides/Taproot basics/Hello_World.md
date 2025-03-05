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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363KK755%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLAkzkz1vixud%2BaUq94r2JGeX%2Bufyzpu8myBNFNzT4TgIgSX76zDc%2BXJXpxHUBwRbqCuN9sN7bmcL5bWQQKfsjhEkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPa2%2Fd%2Bvfy%2FwECg6yCrcAya%2FnCfeSlLlmldrctifpU%2F8PM31O8BEkNNozC8ri%2FKNf70ixShjfcuyfcVLwdMXRCxwbVaC9ZMUCCNgBREBdU%2B7vptJbLqIqViEBgXnG9x%2BwKGU2YAeDXYZhaIAiPa%2FoxEeyRTzIEPn60aG%2B8emvKv9JBu%2BrtnIWFrhX8apYN89NmyRcM4qGSs%2F%2BZcl76xgxxbXaXjvr9SrlI9sr5hh0KPeugaFooxgpUy0YUfY075eB4v4M%2BCrcgJZnIprACwXtJhrUacyuRxaarZcJFab1TGarqtE2cv10fORGAXxOweAGrFnqEt9FTh6u5LRrUVFrj0xmu84AThm9Fi%2BUEKvFLpMDeHM2vLAd3VCejntvY%2Bc8Gyo5o3UO6278wCNRF3MCfqf1jLhpwZXallsnynbxt3mZj%2BdJCPy55fnAVd%2BN5JwigIZUe8r4ZDz9ngBD%2Fcvm%2FtRhs5l3cNefvwrlN6vWBN3gNAW%2BSeW%2Bafo15hSK5uP8ZNEuEoprWZ5GVF%2BCrT4ey52OTVe6v4S7metEn9zIdU0ee0RtMYm%2FxnNbYp%2BI5nLIwx7efP1xSkS5DoMxFwUNjGfAzmhjsn%2BV9CtE3dMT9yxL3ENeVxc5tnjNgXl8LJmLA9QB91ex%2FnFHciyMNDDnr4GOqUB0W4k5iHVSGBA1eZN96jyvzOxMlGRjNEExsnVugXbuI0B6qxTTZaf2r24r72kOXV53nSbiZp2IRmme4Np%2FUV8aWhjcODQYe7BGJzt7iSLeI9wvy85YURILRxK4E7lGNmBg6dYwU9u%2BZSvGqgs%2F0ffG7GczYFLzAmaSuamtZ3P9OEJ6Ydh%2FJoCnypV89nPWhnlB%2FX7REScbVW69hvJhJH5IV6kyM8L&X-Amz-Signature=a72c20f42de95fe4a039deb31c0ee2f453c87f9ef866bc61dc3faefc26304222&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466363KK755%2F20250305%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250305T021433Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDLAkzkz1vixud%2BaUq94r2JGeX%2Bufyzpu8myBNFNzT4TgIgSX76zDc%2BXJXpxHUBwRbqCuN9sN7bmcL5bWQQKfsjhEkqiAQI%2Bv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPa2%2Fd%2Bvfy%2FwECg6yCrcAya%2FnCfeSlLlmldrctifpU%2F8PM31O8BEkNNozC8ri%2FKNf70ixShjfcuyfcVLwdMXRCxwbVaC9ZMUCCNgBREBdU%2B7vptJbLqIqViEBgXnG9x%2BwKGU2YAeDXYZhaIAiPa%2FoxEeyRTzIEPn60aG%2B8emvKv9JBu%2BrtnIWFrhX8apYN89NmyRcM4qGSs%2F%2BZcl76xgxxbXaXjvr9SrlI9sr5hh0KPeugaFooxgpUy0YUfY075eB4v4M%2BCrcgJZnIprACwXtJhrUacyuRxaarZcJFab1TGarqtE2cv10fORGAXxOweAGrFnqEt9FTh6u5LRrUVFrj0xmu84AThm9Fi%2BUEKvFLpMDeHM2vLAd3VCejntvY%2Bc8Gyo5o3UO6278wCNRF3MCfqf1jLhpwZXallsnynbxt3mZj%2BdJCPy55fnAVd%2BN5JwigIZUe8r4ZDz9ngBD%2Fcvm%2FtRhs5l3cNefvwrlN6vWBN3gNAW%2BSeW%2Bafo15hSK5uP8ZNEuEoprWZ5GVF%2BCrT4ey52OTVe6v4S7metEn9zIdU0ee0RtMYm%2FxnNbYp%2BI5nLIwx7efP1xSkS5DoMxFwUNjGfAzmhjsn%2BV9CtE3dMT9yxL3ENeVxc5tnjNgXl8LJmLA9QB91ex%2FnFHciyMNDDnr4GOqUB0W4k5iHVSGBA1eZN96jyvzOxMlGRjNEExsnVugXbuI0B6qxTTZaf2r24r72kOXV53nSbiZp2IRmme4Np%2FUV8aWhjcODQYe7BGJzt7iSLeI9wvy85YURILRxK4E7lGNmBg6dYwU9u%2BZSvGqgs%2F0ffG7GczYFLzAmaSuamtZ3P9OEJ6Ydh%2FJoCnypV89nPWhnlB%2FX7REScbVW69hvJhJH5IV6kyM8L&X-Amz-Signature=feb7ceea9e7714a21ce8d2a13624fd9593fc21b410e44a122bce76b0046ecb12&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
