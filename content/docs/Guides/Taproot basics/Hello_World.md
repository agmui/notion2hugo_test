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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CQYCPB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGlH4HCeuMcSS2KYHx73SmBVmK04GTlLiaEs0sZ5jXWgAiEAuxYaziisgRVTdKcw%2B0IYJnkWjFdWAIMPAHEumpwSKFYq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFkB1GusvsO8rLr2IircAyimJRIRUdEu38OG6%2FJeSD0AfC0pPJRvOzPgBzxpNzsntB6jUYSxsskMTj9ri7z1TQT21umxQp5udgXzbjoxd7nEr4j8PmJd8RCWQLwtrvNoq%2FpMVMLugwZo1HaDHCz3vwmsGLm95QaO7LE6LmymcCfVZrgdtuUiFMX5Htk7OWliAGYQFloXJtyM7UUYYME7xtjUmv31427BDnXN5lXzH8wV7BpS9cDnazLqNBk9UFI%2F45WCmHnQUFl2vKocTTF8wi5hxSDSujKPQ3kxY6azm1xI6cuNPyjTT2z%2BoyIMdw1qVnDk5PNz4LYFX6sBcAvxyJgoraluky3Y6r%2Fz6Y7bLoggQw9g%2FBfm3h43JwLgLTyM4ZvEvgQjHP1fdr6FkJb9ufMd8keiAMcf8agoAJHdTKU6fF%2FBWJryPb8vRWptxHgI9Aj2Gsxw%2F4Q4QJm0F1kGzyT1RGnoaAmXKBQFmDclWRUTESo%2Fdc7zk2sTYu%2Frz1SxuRSOSs29UpQ04ts5i2xjRKRhLtGr3qCZ6F%2Bb9Xs8FRaeGwUiBslWE9XdPkF4RQeBu3s5%2FmFddcnCEahwcvVapWy3l%2FQeQroXyxycz9%2F%2FYwZJx%2FkM3F9Tokn95fMqldqz9qPFgvikAKTybLRwMOe8tMIGOqUBveQfTTbo04NvS6A3kvr0%2FuM8ElBxgfzjp77BqGBxx9d%2ByHaCU2LHy0lm8A%2BZgpX%2FCjTXULSrsstbOcR9lw9%2FA2o6JZoGOnlY%2BENrrknINFxzmCa3QjX%2BeXggAa0v3nAm0Xu%2FGwdQNYhOpNPAi0ETyiCWVIwNCxLvv9CRB6vhxVYoOhQSm2b117dV%2BPfb81wNR2fAMzaYTI2AQggFrWd4EkHVuxXh&X-Amz-Signature=7a1e6411d2e90b330d34c64e0b5c6bc1c2d96700a193b05827ab7b0df59c35a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6CQYCPB%2F20250614%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250614T081017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED8aCXVzLXdlc3QtMiJHMEUCIGlH4HCeuMcSS2KYHx73SmBVmK04GTlLiaEs0sZ5jXWgAiEAuxYaziisgRVTdKcw%2B0IYJnkWjFdWAIMPAHEumpwSKFYq%2FwMIKBAAGgw2Mzc0MjMxODM4MDUiDFkB1GusvsO8rLr2IircAyimJRIRUdEu38OG6%2FJeSD0AfC0pPJRvOzPgBzxpNzsntB6jUYSxsskMTj9ri7z1TQT21umxQp5udgXzbjoxd7nEr4j8PmJd8RCWQLwtrvNoq%2FpMVMLugwZo1HaDHCz3vwmsGLm95QaO7LE6LmymcCfVZrgdtuUiFMX5Htk7OWliAGYQFloXJtyM7UUYYME7xtjUmv31427BDnXN5lXzH8wV7BpS9cDnazLqNBk9UFI%2F45WCmHnQUFl2vKocTTF8wi5hxSDSujKPQ3kxY6azm1xI6cuNPyjTT2z%2BoyIMdw1qVnDk5PNz4LYFX6sBcAvxyJgoraluky3Y6r%2Fz6Y7bLoggQw9g%2FBfm3h43JwLgLTyM4ZvEvgQjHP1fdr6FkJb9ufMd8keiAMcf8agoAJHdTKU6fF%2FBWJryPb8vRWptxHgI9Aj2Gsxw%2F4Q4QJm0F1kGzyT1RGnoaAmXKBQFmDclWRUTESo%2Fdc7zk2sTYu%2Frz1SxuRSOSs29UpQ04ts5i2xjRKRhLtGr3qCZ6F%2Bb9Xs8FRaeGwUiBslWE9XdPkF4RQeBu3s5%2FmFddcnCEahwcvVapWy3l%2FQeQroXyxycz9%2F%2FYwZJx%2FkM3F9Tokn95fMqldqz9qPFgvikAKTybLRwMOe8tMIGOqUBveQfTTbo04NvS6A3kvr0%2FuM8ElBxgfzjp77BqGBxx9d%2ByHaCU2LHy0lm8A%2BZgpX%2FCjTXULSrsstbOcR9lw9%2FA2o6JZoGOnlY%2BENrrknINFxzmCa3QjX%2BeXggAa0v3nAm0Xu%2FGwdQNYhOpNPAi0ETyiCWVIwNCxLvv9CRB6vhxVYoOhQSm2b117dV%2BPfb81wNR2fAMzaYTI2AQggFrWd4EkHVuxXh&X-Amz-Signature=7ace0026b9ceb4330e26efd38a4bf0fb77fb19e25536b2a79ebe8e2b6d4a1d01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
