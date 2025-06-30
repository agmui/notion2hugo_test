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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EMXOTXQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1H2j%2BiDqAsgbgWGBi5t%2FyUXeklVCM4TtEhOzHRGoRqAIhAIlBUCrvmId%2FyTENhtLA%2BBbg71NlPEgi%2Fq9Nl09WdfJbKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtthRz3h%2BXdfXACbcq3AP%2FhTB26xbISO82nzFGAn139x7ux2csWiXj9PoN9tWDun9qZgG%2FRecIDiyudFIBC2IC1qeCTvavucpvmA%2BxJb3mRviue4xLPivupEVZOmiJiYt1RvyTWfGcLPXKzy55fQ9Ea2Ty7efjUQGXeTFVJwDmMchN10BwJfCUklUoNQ4R3lvQXiawTjk2%2BHVGrxspMwvsKwe9rWjU0mO8aVP13x3bUyIEm6hyHcxZX5eWW25jA4hdemBqx1h%2Flgkv5F3sQY9sc5DcOi4lp0GE8BSiB59zhV9S7Ko2R9Cp%2BOfNg26No9VObjrLbFqX%2B8PNHFke1SfWEinnoUkH82Mqmo%2BZ%2FV0ZcK294cZ4gcPSntHoQyC%2FtaTo8lvc1gO7rSfUVQovwnI8wiELl0pMDKLo9PSkPNlwlITDErY%2FzjnYN1HKrg9Y1gd7Uz73GoTa1wv%2BB0dgbCCR8Y65XBCTzk2hDUxOIwUzfiTmPpzdobS9wCqkyyVCB3Ftel7hwCeUt4kLGXZJXdRee5FCGuNmqYzUVJyRzfIl4h2MekgdSLFagxHgE%2BxlzmyGHxQdomqxnSoPekuQIXQZJIUFKmW18hCLVfxLYhyoVemVfFTn9fqWFFzGIw%2FakYD%2BGkqNlLgL9mhgfDCLzojDBjqkAdEZEyH6RnbiQ1SNBmW4EjydmHyVv9X65Mmw2O7z9DitouOhLkJ%2FkY4vQEEnybiQP%2BN6DkxKoEQDXW159YeBbt%2BdzLQEFeBeWBSu6iigkZ3JbiWEabujtP%2FJs2pTC1sQUZmQIWGJsnit7XnvyoHJFEY5H9RLyEyvPFSMfyNC86hfKrrbIYIru2BpBT8zC4vZTPkTa0A6x50Z6Y3PkIDokw22Pcc0&X-Amz-Signature=9a487dcfc422b2a3718dbbc37475d5c26c1ba90f9955398c8f24c38ef93fe62e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EMXOTXQ%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T061409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC1H2j%2BiDqAsgbgWGBi5t%2FyUXeklVCM4TtEhOzHRGoRqAIhAIlBUCrvmId%2FyTENhtLA%2BBbg71NlPEgi%2Fq9Nl09WdfJbKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtthRz3h%2BXdfXACbcq3AP%2FhTB26xbISO82nzFGAn139x7ux2csWiXj9PoN9tWDun9qZgG%2FRecIDiyudFIBC2IC1qeCTvavucpvmA%2BxJb3mRviue4xLPivupEVZOmiJiYt1RvyTWfGcLPXKzy55fQ9Ea2Ty7efjUQGXeTFVJwDmMchN10BwJfCUklUoNQ4R3lvQXiawTjk2%2BHVGrxspMwvsKwe9rWjU0mO8aVP13x3bUyIEm6hyHcxZX5eWW25jA4hdemBqx1h%2Flgkv5F3sQY9sc5DcOi4lp0GE8BSiB59zhV9S7Ko2R9Cp%2BOfNg26No9VObjrLbFqX%2B8PNHFke1SfWEinnoUkH82Mqmo%2BZ%2FV0ZcK294cZ4gcPSntHoQyC%2FtaTo8lvc1gO7rSfUVQovwnI8wiELl0pMDKLo9PSkPNlwlITDErY%2FzjnYN1HKrg9Y1gd7Uz73GoTa1wv%2BB0dgbCCR8Y65XBCTzk2hDUxOIwUzfiTmPpzdobS9wCqkyyVCB3Ftel7hwCeUt4kLGXZJXdRee5FCGuNmqYzUVJyRzfIl4h2MekgdSLFagxHgE%2BxlzmyGHxQdomqxnSoPekuQIXQZJIUFKmW18hCLVfxLYhyoVemVfFTn9fqWFFzGIw%2FakYD%2BGkqNlLgL9mhgfDCLzojDBjqkAdEZEyH6RnbiQ1SNBmW4EjydmHyVv9X65Mmw2O7z9DitouOhLkJ%2FkY4vQEEnybiQP%2BN6DkxKoEQDXW159YeBbt%2BdzLQEFeBeWBSu6iigkZ3JbiWEabujtP%2FJs2pTC1sQUZmQIWGJsnit7XnvyoHJFEY5H9RLyEyvPFSMfyNC86hfKrrbIYIru2BpBT8zC4vZTPkTa0A6x50Z6Y3PkIDokw22Pcc0&X-Amz-Signature=62aeb8510843b48c56fb5ffcacb7157a71e946ee0cc5283fcbf33473ec07110e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
