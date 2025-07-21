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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXBQ4JXB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOt7saJ8IcYMYxxFpmJDzjxMNTfH8Xhx%2FRLEi01XvLCAiAXMIVeSauVwDgMEILayvZR21HUDI0KZuPYCRiB6ltHVCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5oq6p9pA4SwMVRJ%2BKtwDzosgwIXSM1BFAmSJTCiCgyyN43y%2FnUoNT%2BoD9r9PkVtP3Su0lJHfCNNXUJ0BH6QwrQmZfGAAK2gPzjgYPX%2BEcRxT0mO3GVRcBtlb4fwv%2Faow%2FJ0KMQ4pjTwrJ2MyxkdSEuRwlaXkOqgQs4TesaKWX339FHdVkxVVUU1s1TgEi8a6kazAk%2F%2B%2BmF8amr1ABET81Qnks1NFnlrryPVLo31sEcGWl4icpSNlAOG52aCFDeESO%2FZRZWatxFiwSrbZC26%2B1TwHxKvta0FHUUJHBoEw0G1paAYU6f5d%2BVk3v6h%2BAutI5%2FP8L4CGJDOBaHye616mTWbWARbpF08HutGbzFezEKH2PXLvB6%2BgwnP7LtZrQrkvOSssDYwVFnFJg4PxJj0upmn2ICXnzssXAR4paoeJo8Ln2m8PscfmF%2F%2BXaku9Vmw2B%2BRvnqKgX92T9pfDY0G%2FuV9LGmgjT1U7Xz%2BQDNzPmm6qXhC5uXq3cyJsN%2BV1xZKy0B7LnVlH%2B3XK7BDEcHVSH24W60AhwqRxw2KRlrC9cSwF6S30znHrsU1F8GZr006z%2B44QSTkifoCOysHk5sju0KnZaestD%2BBK61xXbg%2BCtn2hIGbZR6pSP2zSQcw7NPKJS7DrPw7D9M%2FNSE0w8ZL3wwY6pgE%2BtQTLMvk2EwwWLxO1nX54wM5kTXFIT2Bh%2F6wBH0bRfQU0hfPuogkOqbOUmVTghy5DU9iXtfhBJnPe9UrZkQgjtmYgVZVoZEXs8cQLrb65ziuaYvxIAwT3NWo5qJY6pUcTQkuB2Upy%2F%2FBk8ydBjA4MA3hFLrpA8nWL26vO0RQPNTbAdeiRFUDSjJMluClTu%2Bib4EPT3fLtDkZChr4HiKICB6znZjk9&X-Amz-Signature=15403267944714ba7a700f7f66959fd7724792b0c9035dafddb60e695c6f1558&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXBQ4JXB%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T081541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBOt7saJ8IcYMYxxFpmJDzjxMNTfH8Xhx%2FRLEi01XvLCAiAXMIVeSauVwDgMEILayvZR21HUDI0KZuPYCRiB6ltHVCqIBAjO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5oq6p9pA4SwMVRJ%2BKtwDzosgwIXSM1BFAmSJTCiCgyyN43y%2FnUoNT%2BoD9r9PkVtP3Su0lJHfCNNXUJ0BH6QwrQmZfGAAK2gPzjgYPX%2BEcRxT0mO3GVRcBtlb4fwv%2Faow%2FJ0KMQ4pjTwrJ2MyxkdSEuRwlaXkOqgQs4TesaKWX339FHdVkxVVUU1s1TgEi8a6kazAk%2F%2B%2BmF8amr1ABET81Qnks1NFnlrryPVLo31sEcGWl4icpSNlAOG52aCFDeESO%2FZRZWatxFiwSrbZC26%2B1TwHxKvta0FHUUJHBoEw0G1paAYU6f5d%2BVk3v6h%2BAutI5%2FP8L4CGJDOBaHye616mTWbWARbpF08HutGbzFezEKH2PXLvB6%2BgwnP7LtZrQrkvOSssDYwVFnFJg4PxJj0upmn2ICXnzssXAR4paoeJo8Ln2m8PscfmF%2F%2BXaku9Vmw2B%2BRvnqKgX92T9pfDY0G%2FuV9LGmgjT1U7Xz%2BQDNzPmm6qXhC5uXq3cyJsN%2BV1xZKy0B7LnVlH%2B3XK7BDEcHVSH24W60AhwqRxw2KRlrC9cSwF6S30znHrsU1F8GZr006z%2B44QSTkifoCOysHk5sju0KnZaestD%2BBK61xXbg%2BCtn2hIGbZR6pSP2zSQcw7NPKJS7DrPw7D9M%2FNSE0w8ZL3wwY6pgE%2BtQTLMvk2EwwWLxO1nX54wM5kTXFIT2Bh%2F6wBH0bRfQU0hfPuogkOqbOUmVTghy5DU9iXtfhBJnPe9UrZkQgjtmYgVZVoZEXs8cQLrb65ziuaYvxIAwT3NWo5qJY6pUcTQkuB2Upy%2F%2FBk8ydBjA4MA3hFLrpA8nWL26vO0RQPNTbAdeiRFUDSjJMluClTu%2Bib4EPT3fLtDkZChr4HiKICB6znZjk9&X-Amz-Signature=35902410243dc800eddbaf0a04d8f95ef1ce56835145fcdae954b217102e4c1b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
