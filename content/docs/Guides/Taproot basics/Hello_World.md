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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUNL62QB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIA4Q5s4tXCeIps2bj%2Fe3MNqvcNTYX6Wef3TqRP6q%2BhDBAiEAlIdzZYtnTu%2BGTYsHV%2Bhd4rYFMBz9k3JzOm5%2BSHIjDkoqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZMrCwi8BZ66117EyrcAyh3fnpZT1xzgy6BRFKQ2R2Bu9Z9P2qdfJ2ypeYwM%2BQP%2Bn7BPlXNS29EBXttKiJjkIV3xbHXmY6d7llkp66JzOONcZPuGcxHJvfb93GLB9eVnjycm5MTdCzfFNiRYgw4hWnCN%2FmDwNrd9Xu%2F6%2FjLzEA3Ea5aVOv44myb5TXjtloyy5cyYuWh3yvlA5My1oIXHffgsDeQFrWFmvoIoYI9hHRh0wbFCYmCPiS8B3LIj0cWYuP7p1d16snTqcbd6njUO1kLoOpsIBlTntNbL8xuvYXNGO69sMgilvqRkL8NkffpKNvHXIaKkjzmTl2eEHpvW5qi4Idd1WzFlPu9VIeKCA5y7PJNiXeTJe1vTebXhYcZjZj7teX3xrOY48gEQdCC9ZOBJrElSpFuJK1wUjeQfqjJnzsXy17OlhRb7hWsddY0w8uPyp2Y5YW5xgQIFer5HbrAEF6FD9kYUIjDNC7X4dIkejX3APSZ60CWpjMNfEynRF%2BymeSf38%2FrMid65iilftvT8sD7eG%2FhEjqG7OlvG8AK3lfpiwRo%2BthT6xeb71kD%2FVt5GupNDhqZIhGFA4hmd34uYvTKtndtyHl4MKcdT4DSZoHfkv04gjdIJ0G3%2Fd9sBDDnrfH%2BN4qNNlrrMPTC4b8GOqUBWMLMSyfP8D0n5w3zXhRYP%2FccC%2BQpK2pvkUvc1GcB8giM4HUepfK6sHhWjWR%2Bc4wPEcmUNK3pH3Ss4bZPi5k7roV9%2BsasUErN4eqSvOHRg8wMlg%2FWymtvRDX6AUfoTeL%2BVqEeIV3hyVFLQWsrNg52Kf4R8FfKoiL5t8Muv7aKVkQdiMuJi%2FF7lGwduHaK6pxPdVIM30A3Y12LWzCkA%2B%2FER0hD1kty&X-Amz-Signature=b880daf83efc8ed6a314a634f65b40db6fa1b8e6788366f8a57b0a66dd982c9d&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUNL62QB%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T003933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIA4Q5s4tXCeIps2bj%2Fe3MNqvcNTYX6Wef3TqRP6q%2BhDBAiEAlIdzZYtnTu%2BGTYsHV%2Bhd4rYFMBz9k3JzOm5%2BSHIjDkoqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKZMrCwi8BZ66117EyrcAyh3fnpZT1xzgy6BRFKQ2R2Bu9Z9P2qdfJ2ypeYwM%2BQP%2Bn7BPlXNS29EBXttKiJjkIV3xbHXmY6d7llkp66JzOONcZPuGcxHJvfb93GLB9eVnjycm5MTdCzfFNiRYgw4hWnCN%2FmDwNrd9Xu%2F6%2FjLzEA3Ea5aVOv44myb5TXjtloyy5cyYuWh3yvlA5My1oIXHffgsDeQFrWFmvoIoYI9hHRh0wbFCYmCPiS8B3LIj0cWYuP7p1d16snTqcbd6njUO1kLoOpsIBlTntNbL8xuvYXNGO69sMgilvqRkL8NkffpKNvHXIaKkjzmTl2eEHpvW5qi4Idd1WzFlPu9VIeKCA5y7PJNiXeTJe1vTebXhYcZjZj7teX3xrOY48gEQdCC9ZOBJrElSpFuJK1wUjeQfqjJnzsXy17OlhRb7hWsddY0w8uPyp2Y5YW5xgQIFer5HbrAEF6FD9kYUIjDNC7X4dIkejX3APSZ60CWpjMNfEynRF%2BymeSf38%2FrMid65iilftvT8sD7eG%2FhEjqG7OlvG8AK3lfpiwRo%2BthT6xeb71kD%2FVt5GupNDhqZIhGFA4hmd34uYvTKtndtyHl4MKcdT4DSZoHfkv04gjdIJ0G3%2Fd9sBDDnrfH%2BN4qNNlrrMPTC4b8GOqUBWMLMSyfP8D0n5w3zXhRYP%2FccC%2BQpK2pvkUvc1GcB8giM4HUepfK6sHhWjWR%2Bc4wPEcmUNK3pH3Ss4bZPi5k7roV9%2BsasUErN4eqSvOHRg8wMlg%2FWymtvRDX6AUfoTeL%2BVqEeIV3hyVFLQWsrNg52Kf4R8FfKoiL5t8Muv7aKVkQdiMuJi%2FF7lGwduHaK6pxPdVIM30A3Y12LWzCkA%2B%2FER0hD1kty&X-Amz-Signature=90d3970141c1c1d685fc43a485586d49015f6c974a8b83fbb75ecb576db0201b&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
