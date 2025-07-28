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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKZO45UC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCDJyHFhwG%2F%2FTEMeqA3vLJBXZ5j1C8cFFO0NCbdoQ%2BSWAIgHwrD%2FQcn1fEV%2FxCSXFIIOVn%2F2Rjfjy8j9H6o7tfO0B8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmEbwFUhL0LiHvMGyrcAygssb%2FefPiXZEbWEvokgPET3Vn4ErBWrvxEOXVkiqOoz%2F%2Fwro8AZSvysdvlz0VoG5c%2BG8Y3FbpinxlwNtUsIY60wmfPCCeOQZvIi1eU%2BbLc50oLAUSXnAelEcFdPyouGxiymYdc0iFYxvC76iweU7fX%2B%2B465aqtzTz9n7oNmA09ykO4J%2BttdWOEqbXTEiSg%2BkAC9eriSSI%2BKjMLQkoH5SUK08E1vklq2rPW17YVqboeNJUbQKHweByKDg9b6t6M2%2BbzyTPfTo0j6Tze2nFUC3W4vN1v5H7OlUBaaZullZKdZphNtVEwNS8lTooOD3yMnmgblSN3caNZVUnPWOGD9YXvzR%2F8C23FsKRCCO6J5ziOTpjX3U5Jw%2Br0di88mh3YjxHAWdGhhQeIVaRyiyn2hc7DfSvsIu2yS9sJXiTOk1FHCbSW2taiRX7W3Hx2%2FPAv5qoMYKHz%2FtdhcrujaJv4qJjSpBM8RkLsX9xvmfmJvRHCmpFXBZlicIhUd8%2Fpbkz7CUs7PGKgmwkG%2BjfXt6UHMIFn5wybmKT%2BJdW%2FsEC1k6qZid6Val3P6falT4bEq2MoK2T8fF4GhMxZdXyhxQscSBhuUL00Kqn%2BEyST%2Fh3ou%2BKzuEixKn37te4jsCopMMeOnMQGOqUBZtnzk6fPT0xiqsMBHDMkiQj4%2FHvtf6h6lZG3kTzRGY2Oj31t4MW8Jb2%2F217elQugfTLQXrJZMFSuVpqr2CGn89cn0nfKL4uVbPXyuhBFBt23V932CFXpmEamuigwDxi%2BNYZ2yiWEJCPSSAUjy82qnAa3%2FPjag6LabhUaU9ZYWq4HNdEwWfXFXEiYWPoJzwSfcVrECt3AaFHda1KZgc6cQbaJXafZ&X-Amz-Signature=682f5c5e446298bb83f834b83ab430f1cdbaf467a7904419e35cba0513a16a72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WKZO45UC%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T061633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEF0aCXVzLXdlc3QtMiJHMEUCIQCDJyHFhwG%2F%2FTEMeqA3vLJBXZ5j1C8cFFO0NCbdoQ%2BSWAIgHwrD%2FQcn1fEV%2FxCSXFIIOVn%2F2Rjfjy8j9H6o7tfO0B8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKmEbwFUhL0LiHvMGyrcAygssb%2FefPiXZEbWEvokgPET3Vn4ErBWrvxEOXVkiqOoz%2F%2Fwro8AZSvysdvlz0VoG5c%2BG8Y3FbpinxlwNtUsIY60wmfPCCeOQZvIi1eU%2BbLc50oLAUSXnAelEcFdPyouGxiymYdc0iFYxvC76iweU7fX%2B%2B465aqtzTz9n7oNmA09ykO4J%2BttdWOEqbXTEiSg%2BkAC9eriSSI%2BKjMLQkoH5SUK08E1vklq2rPW17YVqboeNJUbQKHweByKDg9b6t6M2%2BbzyTPfTo0j6Tze2nFUC3W4vN1v5H7OlUBaaZullZKdZphNtVEwNS8lTooOD3yMnmgblSN3caNZVUnPWOGD9YXvzR%2F8C23FsKRCCO6J5ziOTpjX3U5Jw%2Br0di88mh3YjxHAWdGhhQeIVaRyiyn2hc7DfSvsIu2yS9sJXiTOk1FHCbSW2taiRX7W3Hx2%2FPAv5qoMYKHz%2FtdhcrujaJv4qJjSpBM8RkLsX9xvmfmJvRHCmpFXBZlicIhUd8%2Fpbkz7CUs7PGKgmwkG%2BjfXt6UHMIFn5wybmKT%2BJdW%2FsEC1k6qZid6Val3P6falT4bEq2MoK2T8fF4GhMxZdXyhxQscSBhuUL00Kqn%2BEyST%2Fh3ou%2BKzuEixKn37te4jsCopMMeOnMQGOqUBZtnzk6fPT0xiqsMBHDMkiQj4%2FHvtf6h6lZG3kTzRGY2Oj31t4MW8Jb2%2F217elQugfTLQXrJZMFSuVpqr2CGn89cn0nfKL4uVbPXyuhBFBt23V932CFXpmEamuigwDxi%2BNYZ2yiWEJCPSSAUjy82qnAa3%2FPjag6LabhUaU9ZYWq4HNdEwWfXFXEiYWPoJzwSfcVrECt3AaFHda1KZgc6cQbaJXafZ&X-Amz-Signature=2131731e5fe923fc701f5b185f881a258c8e9c55ac63de11b9e25a9cc976d730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
