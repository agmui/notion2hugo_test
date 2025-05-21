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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5HPWK3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO1FcL%2F63T36KvOEwjlUYXWwywBdf%2F4SsvlFgbvgiMzgIgAuMXothVQgNsQo6PLgWVNsm91m3PlMtcBRVgSNcnZz8qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdWh%2FCbJ7ZWHGRHvCrcAzhGhEkoCDgSZsvqoEq25NYg8CzD2w9Ac7h0N72K2ZujwVfCPJ8RD3r7ZKWjoOo5934XqXVif7BWZWDQmCY09qjKfq7UjzmR8p%2BVS4KqWGQxZo1JvwG%2F6kqAHXc70lJrh7NNKfn48%2BJ1uXM7jGLIOx6BavGK2N4343KBXmyvhJySxVQiblSvwVRhN0ys6ZWWoevpavXGBGDDep5U8X3Am3Mhic4leHcIUKdOXkWtZn%2Fgl%2BpUk7Kwmcp%2BZjCPUPfHCTvTSeEOZ4Z5Nig4HG2POrndHPH88KUwoq4eWdb23Nt8rVkYQB8w9VSMLCnD0QYmlhcbOc7P7XCt6%2BxVqw3K0wis3Tbluux4dw%2B2MW%2FuxeiKdZFowNI7QEUzAdE64z4UTV8fhOCyo6UXNH1n66fJzEXKDagiumprLaGWqx9K%2BpppQrPgII17QDpgpf4QrB4n2W2xUZ4%2B6eGWRVteBWXUlo7t6ySRhIAu7ZVcxXkc%2Bh%2BHK19OE%2FMvhw8SI3LK2NY7wRCwfXWryvSYvflylegtu7dqhCaYkrIWPe1GrH12C6OLvV3C8HL3u68DT9PEhtQCE2qLRy2z2pqSon5xOceiIgbxYEc5AfS4eLUB9lHDdZWjHxs39Wt6kTSoxlLtMOSutcEGOqUB7Q5dsgaYeWuwrQmHGMkgwaH41FLHuH3kjYvRKAEENeItSAXkvdho0afQVCNi0szQAGOdZZL%2FmpoXIiZfektDZNn40nPxHOB0CtpvNiiOnrLSjYNpz%2BU02EIGLwhP0aMABofpmZootUmH2oGlNxwGKXlv7SUS0OqhLPQPctBwMtduAylQzg19kbN7d%2B%2BnF0nNlz0DqfkvnEMC5Scg%2BlCmmFa3JeGE&X-Amz-Signature=c44b49ead3aaf7cfd37aed909dd9c096bd51140718a53398f01e631c46f64d01&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662N5HPWK3%2F20250521%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250521T050927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCO1FcL%2F63T36KvOEwjlUYXWwywBdf%2F4SsvlFgbvgiMzgIgAuMXothVQgNsQo6PLgWVNsm91m3PlMtcBRVgSNcnZz8qiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNdWh%2FCbJ7ZWHGRHvCrcAzhGhEkoCDgSZsvqoEq25NYg8CzD2w9Ac7h0N72K2ZujwVfCPJ8RD3r7ZKWjoOo5934XqXVif7BWZWDQmCY09qjKfq7UjzmR8p%2BVS4KqWGQxZo1JvwG%2F6kqAHXc70lJrh7NNKfn48%2BJ1uXM7jGLIOx6BavGK2N4343KBXmyvhJySxVQiblSvwVRhN0ys6ZWWoevpavXGBGDDep5U8X3Am3Mhic4leHcIUKdOXkWtZn%2Fgl%2BpUk7Kwmcp%2BZjCPUPfHCTvTSeEOZ4Z5Nig4HG2POrndHPH88KUwoq4eWdb23Nt8rVkYQB8w9VSMLCnD0QYmlhcbOc7P7XCt6%2BxVqw3K0wis3Tbluux4dw%2B2MW%2FuxeiKdZFowNI7QEUzAdE64z4UTV8fhOCyo6UXNH1n66fJzEXKDagiumprLaGWqx9K%2BpppQrPgII17QDpgpf4QrB4n2W2xUZ4%2B6eGWRVteBWXUlo7t6ySRhIAu7ZVcxXkc%2Bh%2BHK19OE%2FMvhw8SI3LK2NY7wRCwfXWryvSYvflylegtu7dqhCaYkrIWPe1GrH12C6OLvV3C8HL3u68DT9PEhtQCE2qLRy2z2pqSon5xOceiIgbxYEc5AfS4eLUB9lHDdZWjHxs39Wt6kTSoxlLtMOSutcEGOqUB7Q5dsgaYeWuwrQmHGMkgwaH41FLHuH3kjYvRKAEENeItSAXkvdho0afQVCNi0szQAGOdZZL%2FmpoXIiZfektDZNn40nPxHOB0CtpvNiiOnrLSjYNpz%2BU02EIGLwhP0aMABofpmZootUmH2oGlNxwGKXlv7SUS0OqhLPQPctBwMtduAylQzg19kbN7d%2B%2BnF0nNlz0DqfkvnEMC5Scg%2BlCmmFa3JeGE&X-Amz-Signature=10085ea21701e1203f3e13f63bdbdc48af467b481015ffad3a0bc508841cb669&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
