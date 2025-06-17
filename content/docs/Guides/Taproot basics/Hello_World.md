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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FHZWPYP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkjjH%2FEFNf6XK2mkSRIJF%2F3fA6CVQ0MpY%2FtTNLz0qBoAiEA58hjXYhbKpPma5SYuFrJk7sytWD8bVLAFUIv2dfG7u0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHrCKEv4fNfwcge%2BPircA79rI7epXK3WBm5Z5NuwYB5l3fNEKBa9f0Lwo5UQlZlWyu31gwUuJNoKt3QInyeffn6f7Hne%2F%2BlKkorVdgouuPQZvVK4d%2B8gTpmluFpuUSljgIOxZyB0GDVntwUbN2VyK98OOSjjUw%2F%2FbDBKx7b6LVR4LHW3XD79eNd0qfVW4womPfTnzvAUPdvU%2FAqMu1FRKKd3s9hKOgRjZN%2FqEswXBZmVLTv5IH0AD36TsNx3ZSWnkpC6pkMXKqZE%2Bpr3eO1hf8osMnV%2Bx1f%2Fn6ees15oTlYMdwrZ8%2FI9afSwHrZokEr11m68fwkZx5MIUso9BGe7t%2BmcAgXeysOHwsBfJmFBUOmOJu%2FM8MDWW4DIpm9YxqJTlsUNCdwDgsh8%2BmVp3NnZApKiVQIJuf9iMrAcL4tG54Z5KhhpFN4PLCt2e%2FXSJT6Xmw5o%2BrBJzsH0L7EOyzWNvXDcnZVrFbmpb4FFk3FnJ56jFJfvhVKFRWtZstbQ7Tz9gnGx3wmKEQGIRrpDYFx9hBXqPtCTiwER5cohKFHKw%2FjuxLGcizIqke8GUhoa7M6imE%2FWt5zCswllZMl2bBqZHZra0L06T2mpRxzFtOI09dh98r0zl28GvB98UdXXOH0teSwSq7lW8YqTcRxFMNzrw8IGOqUBosz%2B5u9zllEoaexOoHnUsxZNQUYsEHcOzz7705iyPqBg1SDrmAeeiZaEEPM4PFXZK%2FpGKuuu2RRxU6lbc7fBoMv%2FEI%2B52cm9U7SFn5RVDRVNilxMxgxu3KV5rk5eJnuBgjzqY3NszHQ46uda4wHynVh9YpAAP9AVZqxyIpRkCuAqHrb4TIAWcdRGqbJvSOidSbkeAjdpPFD%2B7IHIbMBoUeIcXpvF&X-Amz-Signature=975899cc98cf5d84c52e3538b5b90b41e4de0ba1fd79e4332ab0015b6bc81920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FHZWPYP%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T050941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkjjH%2FEFNf6XK2mkSRIJF%2F3fA6CVQ0MpY%2FtTNLz0qBoAiEA58hjXYhbKpPma5SYuFrJk7sytWD8bVLAFUIv2dfG7u0q%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDHrCKEv4fNfwcge%2BPircA79rI7epXK3WBm5Z5NuwYB5l3fNEKBa9f0Lwo5UQlZlWyu31gwUuJNoKt3QInyeffn6f7Hne%2F%2BlKkorVdgouuPQZvVK4d%2B8gTpmluFpuUSljgIOxZyB0GDVntwUbN2VyK98OOSjjUw%2F%2FbDBKx7b6LVR4LHW3XD79eNd0qfVW4womPfTnzvAUPdvU%2FAqMu1FRKKd3s9hKOgRjZN%2FqEswXBZmVLTv5IH0AD36TsNx3ZSWnkpC6pkMXKqZE%2Bpr3eO1hf8osMnV%2Bx1f%2Fn6ees15oTlYMdwrZ8%2FI9afSwHrZokEr11m68fwkZx5MIUso9BGe7t%2BmcAgXeysOHwsBfJmFBUOmOJu%2FM8MDWW4DIpm9YxqJTlsUNCdwDgsh8%2BmVp3NnZApKiVQIJuf9iMrAcL4tG54Z5KhhpFN4PLCt2e%2FXSJT6Xmw5o%2BrBJzsH0L7EOyzWNvXDcnZVrFbmpb4FFk3FnJ56jFJfvhVKFRWtZstbQ7Tz9gnGx3wmKEQGIRrpDYFx9hBXqPtCTiwER5cohKFHKw%2FjuxLGcizIqke8GUhoa7M6imE%2FWt5zCswllZMl2bBqZHZra0L06T2mpRxzFtOI09dh98r0zl28GvB98UdXXOH0teSwSq7lW8YqTcRxFMNzrw8IGOqUBosz%2B5u9zllEoaexOoHnUsxZNQUYsEHcOzz7705iyPqBg1SDrmAeeiZaEEPM4PFXZK%2FpGKuuu2RRxU6lbc7fBoMv%2FEI%2B52cm9U7SFn5RVDRVNilxMxgxu3KV5rk5eJnuBgjzqY3NszHQ46uda4wHynVh9YpAAP9AVZqxyIpRkCuAqHrb4TIAWcdRGqbJvSOidSbkeAjdpPFD%2B7IHIbMBoUeIcXpvF&X-Amz-Signature=9ddb2022f8048a2f84e41dee0e4949119675c42592f7b8e8ef244fa56cdb7eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
