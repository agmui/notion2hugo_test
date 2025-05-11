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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT75E5NI%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBmekgcVQ7LVO1cCYyQvoeFiQ%2FvXjFORwsNT8qSxWyz0AiEAkqFtT3ZSXfzTeBUO%2FF%2FV0%2BQNJ1zEvCOifv3dlAKn2z0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCKG3PtZFQDLMUWjyrcAyKf9lwGiiDGKRE4QWkytRrw3ssc16BrnxrJWvoED29fXUGHJsOIBzoUVbNLPiiUnTk66etBNiSOoBtIG3HabGbpQs98TTakFLWJBQn%2F%2Fwf71HHE1sfoQaWnuJWs%2BC9vcsWfecFbLGM75lttRZPK%2Bq9wFRYkiRS193VAtRNxzRVcx2x2p2zJCWsrP%2FrLnN2pdLPbHZM55vS90OSoDlb1szRVHqlpzKUsIFXZ50y5sI%2FM7pxG80Lvp6qN%2BKKizw0ubgR1q1aFxfK776ogz0uidnIWMshWmmZ%2FGCL4Ld1ONpmhlMxMl4iNBLwAEKC8KkcapwRhd3OYYhcK0Shjd9oGgfjs4%2F4ba%2BA5XcWSgg8QztyvQtwDP4kmX94AO9J7ZmJYVq7Aax98VMBXwR7EW%2BWfAuusr06D%2BzSul%2BwDQSV87jjNkApO%2BekJwYqtznUbDLL5vvoMOVGnn4oOzafSw%2Fd7SNEB0BZp0CH0rSvm7e5wzYxDwrqz9PyYw2Qqxo3m87W6bv828SvAFOVEYFRfVS2bbSzgvKDSb955BegesGKOup6Sq5MiqKfGqK414Mxib0oUC1L1j3mxPqXIWwFb5A0eUGY1HmuXPiC%2BGspwGC41HitAgiLOF0VBRXe%2Bs%2FSCMJa7hMEGOqUBdegYKGZBJw2%2B1cHXWxo3u4xvt5fTxXwQJB1i8I0CbFEb5GrtdHHsCGumWcAknBGjgks6XHnOl95QXmXDsu%2Bhw5F7Vl3N%2BoYlhAqZ6L34A9z36Ti3fGPjV2s6uQg73ioRJZ4YcjdIWbbVSsIdEh%2F0iRXrS34nJ9RhQpw5GEktmC0F2CW9pXmCk4i%2FCH9CAzHrnLseSdBNVzBnS8ukFcdGi2t3cyHT&X-Amz-Signature=4fe8b0265af3880d3f9ec314aa9af24d93ab531d0b465fd07539c8fbee7ff3cf&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XT75E5NI%2F20250511%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250511T220712Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIBmekgcVQ7LVO1cCYyQvoeFiQ%2FvXjFORwsNT8qSxWyz0AiEAkqFtT3ZSXfzTeBUO%2FF%2FV0%2BQNJ1zEvCOifv3dlAKn2z0qiAQIx%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFCKG3PtZFQDLMUWjyrcAyKf9lwGiiDGKRE4QWkytRrw3ssc16BrnxrJWvoED29fXUGHJsOIBzoUVbNLPiiUnTk66etBNiSOoBtIG3HabGbpQs98TTakFLWJBQn%2F%2Fwf71HHE1sfoQaWnuJWs%2BC9vcsWfecFbLGM75lttRZPK%2Bq9wFRYkiRS193VAtRNxzRVcx2x2p2zJCWsrP%2FrLnN2pdLPbHZM55vS90OSoDlb1szRVHqlpzKUsIFXZ50y5sI%2FM7pxG80Lvp6qN%2BKKizw0ubgR1q1aFxfK776ogz0uidnIWMshWmmZ%2FGCL4Ld1ONpmhlMxMl4iNBLwAEKC8KkcapwRhd3OYYhcK0Shjd9oGgfjs4%2F4ba%2BA5XcWSgg8QztyvQtwDP4kmX94AO9J7ZmJYVq7Aax98VMBXwR7EW%2BWfAuusr06D%2BzSul%2BwDQSV87jjNkApO%2BekJwYqtznUbDLL5vvoMOVGnn4oOzafSw%2Fd7SNEB0BZp0CH0rSvm7e5wzYxDwrqz9PyYw2Qqxo3m87W6bv828SvAFOVEYFRfVS2bbSzgvKDSb955BegesGKOup6Sq5MiqKfGqK414Mxib0oUC1L1j3mxPqXIWwFb5A0eUGY1HmuXPiC%2BGspwGC41HitAgiLOF0VBRXe%2Bs%2FSCMJa7hMEGOqUBdegYKGZBJw2%2B1cHXWxo3u4xvt5fTxXwQJB1i8I0CbFEb5GrtdHHsCGumWcAknBGjgks6XHnOl95QXmXDsu%2Bhw5F7Vl3N%2BoYlhAqZ6L34A9z36Ti3fGPjV2s6uQg73ioRJZ4YcjdIWbbVSsIdEh%2F0iRXrS34nJ9RhQpw5GEktmC0F2CW9pXmCk4i%2FCH9CAzHrnLseSdBNVzBnS8ukFcdGi2t3cyHT&X-Amz-Signature=9f889e5f310b19a32f34898e02e27ae2fd60d53bce38ff364f6537b76a6f0df9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
