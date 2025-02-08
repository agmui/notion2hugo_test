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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQM7NA44%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIF7nawDEo2aKwD2cBBcretbE0rpbdut7rI5j96NSHZg%2BAiEA1m01ksIkmsVnSW%2FQ4XUDx8AR8SICwKDB97dGVoMh5%2BAqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq5O9b%2F9BX18%2BeFAircA7Agbna2pbU0lTJ8EUzZFzHY9ZX22Ge0hIRPAedb7cjsjsHw6YEErv932zhN8Mm%2BRmsiHIEuePhSovlTant7c6L9r2G7pzYfZv1U4TfkcGkGtcHON2IIboCthSOGIDhmQmC0%2FR2CRhfbg%2FmNV6TlclGet0uxLEi9JgICcH9rBNulhPYrP2%2Fq%2B%2Fs8ibYhZj4QlxX%2BSFEyEshIKqA%2B7chflhqcvF8apGIweZPMZwBsN%2BXhXrI0n28g2T9GGoKUFbJCBWjgkYW4Kw791iaQ8BsT21jM2nvrAtKGsXUK6PI4qOXKQpUjU%2FDhDtpzzq0xGBRgzAwJstGmkpz07R9TPlaI%2Fv7D1Co7VHP1wTGL0u9lBPjiaMEIUHqOcbmunyIssqaf1vIsLkkwLikwomGj5ShrzRjgHrtri%2Fbnfwr6Ge8trSuuyF8fiHC8xdvzGZcgTnzEplSp8JJaD2u6zHS%2Bk72ukEwwj6dsGfLpfU%2F%2B2FKVm00pMgxGN7FArEWssr%2FWbdcc1Op4Wse84esNVP8z4c%2BfUrz7ngWqY%2BneXdqWq7k%2FdGUGLgXdPxHBe8prli%2FIg%2BMPaZ1GtS6qOu2%2F4MnRN1JiHTO3vqB8XWRRRAkekxLw5bCHWN8L%2BMefq5e7S12dMN%2BQnL0GOqUBtHceHHI9r8%2BeeECT59%2FAkgCDGH9b10NsvuGru49jLrXo6Az2CJX%2BysoULOBnzUYu3tzOSnnS69q%2FLZK26jnHo%2BmLV735YC02gEe5ZXZWE%2F9bZ0hitNtoesHtsIub3owHdcE2wwpIFj9so96lsO5C9HMZdvOia3I3gk8N9FBxJyOX8BnJ34hlUx9nKB4ub6IRCas5GCZ%2FRoIg9yajK5Gg40JdTVXL&X-Amz-Signature=81e734526e7c71acf46992bee897929273e7369406b0b854cc5aa9528b30f7cc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TQM7NA44%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T090324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJHMEUCIF7nawDEo2aKwD2cBBcretbE0rpbdut7rI5j96NSHZg%2BAiEA1m01ksIkmsVnSW%2FQ4XUDx8AR8SICwKDB97dGVoMh5%2BAqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBq5O9b%2F9BX18%2BeFAircA7Agbna2pbU0lTJ8EUzZFzHY9ZX22Ge0hIRPAedb7cjsjsHw6YEErv932zhN8Mm%2BRmsiHIEuePhSovlTant7c6L9r2G7pzYfZv1U4TfkcGkGtcHON2IIboCthSOGIDhmQmC0%2FR2CRhfbg%2FmNV6TlclGet0uxLEi9JgICcH9rBNulhPYrP2%2Fq%2B%2Fs8ibYhZj4QlxX%2BSFEyEshIKqA%2B7chflhqcvF8apGIweZPMZwBsN%2BXhXrI0n28g2T9GGoKUFbJCBWjgkYW4Kw791iaQ8BsT21jM2nvrAtKGsXUK6PI4qOXKQpUjU%2FDhDtpzzq0xGBRgzAwJstGmkpz07R9TPlaI%2Fv7D1Co7VHP1wTGL0u9lBPjiaMEIUHqOcbmunyIssqaf1vIsLkkwLikwomGj5ShrzRjgHrtri%2Fbnfwr6Ge8trSuuyF8fiHC8xdvzGZcgTnzEplSp8JJaD2u6zHS%2Bk72ukEwwj6dsGfLpfU%2F%2B2FKVm00pMgxGN7FArEWssr%2FWbdcc1Op4Wse84esNVP8z4c%2BfUrz7ngWqY%2BneXdqWq7k%2FdGUGLgXdPxHBe8prli%2FIg%2BMPaZ1GtS6qOu2%2F4MnRN1JiHTO3vqB8XWRRRAkekxLw5bCHWN8L%2BMefq5e7S12dMN%2BQnL0GOqUBtHceHHI9r8%2BeeECT59%2FAkgCDGH9b10NsvuGru49jLrXo6Az2CJX%2BysoULOBnzUYu3tzOSnnS69q%2FLZK26jnHo%2BmLV735YC02gEe5ZXZWE%2F9bZ0hitNtoesHtsIub3owHdcE2wwpIFj9so96lsO5C9HMZdvOia3I3gk8N9FBxJyOX8BnJ34hlUx9nKB4ub6IRCas5GCZ%2FRoIg9yajK5Gg40JdTVXL&X-Amz-Signature=bcc44e0706c171ff12806671745cc603d7230c04829cfd72cbf380844cc0f69d&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
