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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB3XEZZJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC%2BoYZDivZTlaW4OcWDvytYXiB5luDIy1f24jPfgfvVsAIhAOt3vp%2BmRFCiliRBUY9XtnIXGNAs8NOfnHU6IxXGPpACKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJAqihTEhh4n0Sy%2Fkq3AMFkMNguyG5g9NcoXjrT7gp1SPhCj0wyY5PLS%2FXzxyOsQvgaCzqY%2BIwuOQhm15eafVDlNNtOnETATpqUayIdDcLCFG6%2FRu5CK7q2j571NicxB7Z%2BgBVN2v1I8J3gG7mXnB115TH2piqbbrGstEgam4QhHJ9C4B5Z3c54rvb24lrxmkmAfErB5DsUe2%2BHHXv%2B0uILLkY3o6sHhRA1jGx%2F9oSzGv3J2kc8XO51wJAwwm8r%2BicyeCdnd76eflmaby3QWFYdGVlT3XzE6zp6taIg7AwIwncMStnKAWj5rKw3z8yOcnT535XCwFlexdHhRv9jez94fqTI%2FDr3SZZ8DK%2FrubqAnQKJ7LbiClPWKJKtSdR0Pey6VqsB0%2Bl0wGIXCmjC0NvUZMfMUQADib9YMgfoPvqXuEmuYosDzFeJyCCKSheGXbj6VSKl5zcNZqDhTOF3UsY15%2FcOXuBbLOracuDx5jnIySFp%2BC6Ht7ck%2BONaPKf%2BPLjtLbXTEr0M36Izqxs0320weCILQUpvMYpknJh8bV85FYT%2Blsw%2BSVc5E%2FDXMxtLKWc077SVd%2F1tUtH5i11SsxDoWEfLrFAqD0jSE02yiG7mY8wFKv9SE%2FxUN5PLo9Ye3KDaNThlv0G%2BlyJYzCaup%2FEBjqkAc2%2FSey%2Fok%2F7V96bAYo8Z6CFO06AAVaVX0%2B65uQIZAzDUsYU2mTL6qvlUe2%2F7AzxzrmuE11KXApI%2BM8uV6Y4%2BvVOUh118ALD0DgIs5jizBjTpXEzkKOLHl6TjVXSKPTBJXoL%2FYc08EAfWiHpSSCV5vOeqSFF%2FGFM%2Bwuvw8apJqdlNo1r%2FCX35GUWuAZoU8RXFwokfNPSxLGAFpOVievOZj6IZeiX&X-Amz-Signature=82826b654cb819cf1a3dc1a58d255c07d986bb08730428568f489cf525939b0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UB3XEZZJ%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T220915Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJIMEYCIQC%2BoYZDivZTlaW4OcWDvytYXiB5luDIy1f24jPfgfvVsAIhAOt3vp%2BmRFCiliRBUY9XtnIXGNAs8NOfnHU6IxXGPpACKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJAqihTEhh4n0Sy%2Fkq3AMFkMNguyG5g9NcoXjrT7gp1SPhCj0wyY5PLS%2FXzxyOsQvgaCzqY%2BIwuOQhm15eafVDlNNtOnETATpqUayIdDcLCFG6%2FRu5CK7q2j571NicxB7Z%2BgBVN2v1I8J3gG7mXnB115TH2piqbbrGstEgam4QhHJ9C4B5Z3c54rvb24lrxmkmAfErB5DsUe2%2BHHXv%2B0uILLkY3o6sHhRA1jGx%2F9oSzGv3J2kc8XO51wJAwwm8r%2BicyeCdnd76eflmaby3QWFYdGVlT3XzE6zp6taIg7AwIwncMStnKAWj5rKw3z8yOcnT535XCwFlexdHhRv9jez94fqTI%2FDr3SZZ8DK%2FrubqAnQKJ7LbiClPWKJKtSdR0Pey6VqsB0%2Bl0wGIXCmjC0NvUZMfMUQADib9YMgfoPvqXuEmuYosDzFeJyCCKSheGXbj6VSKl5zcNZqDhTOF3UsY15%2FcOXuBbLOracuDx5jnIySFp%2BC6Ht7ck%2BONaPKf%2BPLjtLbXTEr0M36Izqxs0320weCILQUpvMYpknJh8bV85FYT%2Blsw%2BSVc5E%2FDXMxtLKWc077SVd%2F1tUtH5i11SsxDoWEfLrFAqD0jSE02yiG7mY8wFKv9SE%2FxUN5PLo9Ye3KDaNThlv0G%2BlyJYzCaup%2FEBjqkAc2%2FSey%2Fok%2F7V96bAYo8Z6CFO06AAVaVX0%2B65uQIZAzDUsYU2mTL6qvlUe2%2F7AzxzrmuE11KXApI%2BM8uV6Y4%2BvVOUh118ALD0DgIs5jizBjTpXEzkKOLHl6TjVXSKPTBJXoL%2FYc08EAfWiHpSSCV5vOeqSFF%2FGFM%2Bwuvw8apJqdlNo1r%2FCX35GUWuAZoU8RXFwokfNPSxLGAFpOVievOZj6IZeiX&X-Amz-Signature=5f0e6fcd82fb891bdeee073082c4a464d4e30551065452866c3d1002042e0913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
