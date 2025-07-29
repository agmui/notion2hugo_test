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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX7OUKXY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9fBknvD5Z7IsMLohz0wJHL1%2FweTOulp6SIhRRwy7yyAiAkv2sxmRk%2BLfO5Sp21Zw8NfvaeQglb051JR5WEKeAcIyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAqByf10D%2Bha%2FqI3xKtwDSNrOGjnFAyrJHGon21lsL5ARLxa7KhdutBzltX6BpwR2uo8UkxnBoN1qvHYcuY614fiSuQAxUWpf2MjUHJwdT5gc0cZDMo%2Fyq3ANbJW9j%2FwRahs7WQqKuJoYd5NH05s2xmwhd07i0xXLTx8CxJIdfsexH2qOHQiVMSCLSNzb45CYqLy8Z3RqSmZklZjzj%2Fj0hUxMQMpZjMFBpNZpMWL5crfOFRycxs3FAhkG5C6pAm2sJka4Fsn3zfetfo3YvoaEDzTcxbdfBL0K7TKupseMffWFNOdTu1x7Ymfu2dmjwLDHMsGLCQySoK8f%2FPwn0lllQHqsTLb0KUO56fHNY1ivpW%2B6%2BSzWZNJfUbdDEhGwoPEnSMblqrel3RRuXRpCDB80%2FxdPgmonrf5XBzsbESusw2T7IQiHFGI1m3dDPaKMe%2BgV%2FewKhX4evCMNQPClrOpvVm9RYnE0jf%2B0%2FRbLwHRfMa04RcRIjY4DIP35V4wL%2BxFriJBb%2Ba6RXC35nYi1rB7CW1wQ%2FXXGF4ggALGv9V9XFqGafwMhqa7B3zeqiR08KsPqaUN%2BFkBwXKzFHG45ouF7MWHRwlr9cCjrwWGKy%2BIP3Qu9S6b2ilsAdl1P3Esv0TSm5AWjKxeELLwyxHMwwYqlxAY6pgE1s8V6I6kFSBGdFXbke2jlCX%2BGrwoYOl01V2WQ5ibiDnIMEzhgV%2FJFITUEZpDkyITx9clbg9Yc7NcKx%2B7cnpSgKwQQJXjgEj%2BFhaIoKxaYS0pJ18cXcVfqsaY9sWWrXCZYn77C6TDUltHzYeIEprfQ852b5I2zecnb4a0PEMyb3pc01nxeKAfILYCPR5lf9WQsMK68wLsjlUR5AWJxbAwK2ushLluq&X-Amz-Signature=7b3375f359c5ddb435f4195cac580523a15ba8ee772f6ba5ca51103a48d71674&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UX7OUKXY%2F20250729%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250729T220907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID9fBknvD5Z7IsMLohz0wJHL1%2FweTOulp6SIhRRwy7yyAiAkv2sxmRk%2BLfO5Sp21Zw8NfvaeQglb051JR5WEKeAcIyqIBAiv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAqByf10D%2Bha%2FqI3xKtwDSNrOGjnFAyrJHGon21lsL5ARLxa7KhdutBzltX6BpwR2uo8UkxnBoN1qvHYcuY614fiSuQAxUWpf2MjUHJwdT5gc0cZDMo%2Fyq3ANbJW9j%2FwRahs7WQqKuJoYd5NH05s2xmwhd07i0xXLTx8CxJIdfsexH2qOHQiVMSCLSNzb45CYqLy8Z3RqSmZklZjzj%2Fj0hUxMQMpZjMFBpNZpMWL5crfOFRycxs3FAhkG5C6pAm2sJka4Fsn3zfetfo3YvoaEDzTcxbdfBL0K7TKupseMffWFNOdTu1x7Ymfu2dmjwLDHMsGLCQySoK8f%2FPwn0lllQHqsTLb0KUO56fHNY1ivpW%2B6%2BSzWZNJfUbdDEhGwoPEnSMblqrel3RRuXRpCDB80%2FxdPgmonrf5XBzsbESusw2T7IQiHFGI1m3dDPaKMe%2BgV%2FewKhX4evCMNQPClrOpvVm9RYnE0jf%2B0%2FRbLwHRfMa04RcRIjY4DIP35V4wL%2BxFriJBb%2Ba6RXC35nYi1rB7CW1wQ%2FXXGF4ggALGv9V9XFqGafwMhqa7B3zeqiR08KsPqaUN%2BFkBwXKzFHG45ouF7MWHRwlr9cCjrwWGKy%2BIP3Qu9S6b2ilsAdl1P3Esv0TSm5AWjKxeELLwyxHMwwYqlxAY6pgE1s8V6I6kFSBGdFXbke2jlCX%2BGrwoYOl01V2WQ5ibiDnIMEzhgV%2FJFITUEZpDkyITx9clbg9Yc7NcKx%2B7cnpSgKwQQJXjgEj%2BFhaIoKxaYS0pJ18cXcVfqsaY9sWWrXCZYn77C6TDUltHzYeIEprfQ852b5I2zecnb4a0PEMyb3pc01nxeKAfILYCPR5lf9WQsMK68wLsjlUR5AWJxbAwK2ushLluq&X-Amz-Signature=75090f05c9c57d41895b5857a535ed0c2484b6256ae5e62c9005fedad1450583&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
