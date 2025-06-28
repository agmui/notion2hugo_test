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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWA75QAB%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs%2FcdA8jmd69oX%2BPlyMqTG5w1A6%2FBDBkcUkVHHQb6AJAiEAygRHuueg9f8IKW%2BqNv0Kge%2BWfQY8H2rQ%2FA1tITcVd%2BYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeYqeupah8kip6bOSrcA%2BUadN80gQKaueSL26nZTL8tCDknDXEjX81FFdkoytQgT9MgzqyxqkDmJ%2FQ7p7WqfCNFpRH040zUJAUNc%2F1DaVJbydbmz9X1ZUxXVUfHOybbbj9DnwjzPA7j1K9X9eGC1cd7OARkpoCKkjKTMW4KtcKKv21ozvyWRNMgF4rHTbho5PnN%2FV%2BanAxBB43AjZfg4yWitL%2BXYqC3v2jaPOyDIzYfu99mwMLRL7iP9OovZFzLtIVZNvdfpVW%2BrvctVar2elPkrDpUor9eNMH0V5b1nFvu6S3CYbuJtpQyTTiGFv1D66aIz8MZH6K5ojYp08JLPDLt2pQLmqdpJFw%2B6lRWRLaQT79egsnKdzoIKzUkWukceRMoOksihIyZWjgxOVm0D2XQmmb%2FSlboPHYkkBw9dn31XdaQN%2F2uIOEt8hUmLBZOr0uJKHar4hoert067B1l1Acv6utu%2FZ7SlmeyOXFCCtpu10hz3PbFSJQwCnCeZQSCHD%2BZA%2F%2FziRB8gRaBE3a%2FXVlxEJ5Oli8mFbkEQLrWX%2B2rdoX3HCDc0RJ57oNBxuv%2FQLizaj1qXiSwEFP9pWvCydyzRQ5jc50zaU5Jjir12TI3xg2UwrleGzlRl9f0iIj9bjctPsKSwfBw4Ux0MNDR%2FcIGOqUBIiiIWmYBElAJ%2F5IsEZ3S%2FcotRZvU9b%2BjHThJRiAKEW7eA9sJs25ZSIUb2z2oUbY%2FMIGhwCa8WbuqfK3Wv%2FO3%2F%2FHfLMKI%2BphzdrucMlB3%2BIc%2BGKFNde8o9KCDBKOYMNHvjx7ieX22qKwvb%2Bpqd9I8%2BE%2Bx2X6iv11t98vVlwFVN6gQ0a6BitPdmOOXSQqCDO9UkBi0UfpcIq%2FzNQflr9tfB2rrFoS1&X-Amz-Signature=241b56be8371199ef68de693cfa024c5b911dd0d91064ca00b80f7ee7566e452&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWA75QAB%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T050901Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGs%2FcdA8jmd69oX%2BPlyMqTG5w1A6%2FBDBkcUkVHHQb6AJAiEAygRHuueg9f8IKW%2BqNv0Kge%2BWfQY8H2rQ%2FA1tITcVd%2BYqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKeYqeupah8kip6bOSrcA%2BUadN80gQKaueSL26nZTL8tCDknDXEjX81FFdkoytQgT9MgzqyxqkDmJ%2FQ7p7WqfCNFpRH040zUJAUNc%2F1DaVJbydbmz9X1ZUxXVUfHOybbbj9DnwjzPA7j1K9X9eGC1cd7OARkpoCKkjKTMW4KtcKKv21ozvyWRNMgF4rHTbho5PnN%2FV%2BanAxBB43AjZfg4yWitL%2BXYqC3v2jaPOyDIzYfu99mwMLRL7iP9OovZFzLtIVZNvdfpVW%2BrvctVar2elPkrDpUor9eNMH0V5b1nFvu6S3CYbuJtpQyTTiGFv1D66aIz8MZH6K5ojYp08JLPDLt2pQLmqdpJFw%2B6lRWRLaQT79egsnKdzoIKzUkWukceRMoOksihIyZWjgxOVm0D2XQmmb%2FSlboPHYkkBw9dn31XdaQN%2F2uIOEt8hUmLBZOr0uJKHar4hoert067B1l1Acv6utu%2FZ7SlmeyOXFCCtpu10hz3PbFSJQwCnCeZQSCHD%2BZA%2F%2FziRB8gRaBE3a%2FXVlxEJ5Oli8mFbkEQLrWX%2B2rdoX3HCDc0RJ57oNBxuv%2FQLizaj1qXiSwEFP9pWvCydyzRQ5jc50zaU5Jjir12TI3xg2UwrleGzlRl9f0iIj9bjctPsKSwfBw4Ux0MNDR%2FcIGOqUBIiiIWmYBElAJ%2F5IsEZ3S%2FcotRZvU9b%2BjHThJRiAKEW7eA9sJs25ZSIUb2z2oUbY%2FMIGhwCa8WbuqfK3Wv%2FO3%2F%2FHfLMKI%2BphzdrucMlB3%2BIc%2BGKFNde8o9KCDBKOYMNHvjx7ieX22qKwvb%2Bpqd9I8%2BE%2Bx2X6iv11t98vVlwFVN6gQ0a6BitPdmOOXSQqCDO9UkBi0UfpcIq%2FzNQflr9tfB2rrFoS1&X-Amz-Signature=2786e814ef591fbd768eb6a87b81b8322a67e0bc0ed6e1494a475e5dcadbceb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
