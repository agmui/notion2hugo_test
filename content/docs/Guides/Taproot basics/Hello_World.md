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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIAI6OVM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCC35ULfe6SsRaJktMxHXL%2BGKmXdxjcd3kqNXwW7%2Be2cgIhALUi9hdjHyVFedbhmJ%2BqAha27%2FCbvU0URHB5DV4AVSDiKv8DCEwQABoMNjM3NDIzMTgzODA1Igwk7JLU5i4vjPZobzQq3AN%2FA3PN1HclNo2yk%2FmLakrgubIHFqhaoemFmJAFeoGI82qOdCKZkzktrH7z1mBXInpTDVHubH7J3z7B%2BaB4dvQasehDhDrFktl%2BbbGMy6v9p1R7r7LKrIx%2F%2FPyHFlL1YAKD6IM98b6sW3w2SOJrbqOXX7peorpHar5njqMuKGEGQ%2Frd6fyULYtaIdCSMDxJRI%2FtgCHAoR0lRJ4EZGNni8985EeQHTcA2WyZ46u6AuoYI6v%2BN%2Bzjv%2BC74QJ1P5%2Bxi%2F7kI4iV95D2yrh%2BSXZLKukf1vXeI6uMMaNBBdraGc4CjINDZDiJb6MZl3Wtn9mhzfHPYIdB3IjAHicLYWR1viiEhX7kFn7SsXd1S6%2BOD%2FjZPjrsDRyqDbqlj9soChgwE6rnc1tCVM3LCeuPrfwSxjq3sB5Y%2BvQPwxljdYTpedWodb9ehCNcM4%2FfFbCUcHlqHJnwbyIU0DroilKKNYxt7%2B%2B7pXJYfzNkvmJCRxNZ9VxxNT%2BoDPo7AtwjHDDX3OrXggrLBQ%2FMklR5zFkbo0l2SuQIwJvb0g%2Bm9A0DaT4BK0iMYOZ3pe2amnWb53ntlDS1v0eHjRGOqntjGduh5GsWhNvMr53cTzOextAISzF00PPWLbbRMjYEL%2FabhD%2Bb9DD59aXDBjqkAVa2OmvdU8DixJmnbyYu9ulDE2%2F%2FI%2FuL03BPTXblCqWudeOTvmQTXbMdo80igoqttm%2F%2FNs2eywG6SHebGwiYmM4xjM058PTd6TLqU73uUCjt7jRbfuTJdzZPrd9E6YDKxOos6KBK601U4RuLlExjdhtSZQaagKh3J2xNeLtRzSRAUlVDCd2mHBrQWh9f2OFZNa%2F0hAsRu%2FdIFJQRllYqKtWnqHMf&X-Amz-Signature=bdd83b8f6af779eea1c175f8cbf9f00a43e9d0415d998c4a2c9628906d55c65d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TIAI6OVM%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T004831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEQaCXVzLXdlc3QtMiJIMEYCIQCC35ULfe6SsRaJktMxHXL%2BGKmXdxjcd3kqNXwW7%2Be2cgIhALUi9hdjHyVFedbhmJ%2BqAha27%2FCbvU0URHB5DV4AVSDiKv8DCEwQABoMNjM3NDIzMTgzODA1Igwk7JLU5i4vjPZobzQq3AN%2FA3PN1HclNo2yk%2FmLakrgubIHFqhaoemFmJAFeoGI82qOdCKZkzktrH7z1mBXInpTDVHubH7J3z7B%2BaB4dvQasehDhDrFktl%2BbbGMy6v9p1R7r7LKrIx%2F%2FPyHFlL1YAKD6IM98b6sW3w2SOJrbqOXX7peorpHar5njqMuKGEGQ%2Frd6fyULYtaIdCSMDxJRI%2FtgCHAoR0lRJ4EZGNni8985EeQHTcA2WyZ46u6AuoYI6v%2BN%2Bzjv%2BC74QJ1P5%2Bxi%2F7kI4iV95D2yrh%2BSXZLKukf1vXeI6uMMaNBBdraGc4CjINDZDiJb6MZl3Wtn9mhzfHPYIdB3IjAHicLYWR1viiEhX7kFn7SsXd1S6%2BOD%2FjZPjrsDRyqDbqlj9soChgwE6rnc1tCVM3LCeuPrfwSxjq3sB5Y%2BvQPwxljdYTpedWodb9ehCNcM4%2FfFbCUcHlqHJnwbyIU0DroilKKNYxt7%2B%2B7pXJYfzNkvmJCRxNZ9VxxNT%2BoDPo7AtwjHDDX3OrXggrLBQ%2FMklR5zFkbo0l2SuQIwJvb0g%2Bm9A0DaT4BK0iMYOZ3pe2amnWb53ntlDS1v0eHjRGOqntjGduh5GsWhNvMr53cTzOextAISzF00PPWLbbRMjYEL%2FabhD%2Bb9DD59aXDBjqkAVa2OmvdU8DixJmnbyYu9ulDE2%2F%2FI%2FuL03BPTXblCqWudeOTvmQTXbMdo80igoqttm%2F%2FNs2eywG6SHebGwiYmM4xjM058PTd6TLqU73uUCjt7jRbfuTJdzZPrd9E6YDKxOos6KBK601U4RuLlExjdhtSZQaagKh3J2xNeLtRzSRAUlVDCd2mHBrQWh9f2OFZNa%2F0hAsRu%2FdIFJQRllYqKtWnqHMf&X-Amz-Signature=39ec09bc9bfea65aa7bcb9728054515f612452f250c6e7ad72255eb0428afaeb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
