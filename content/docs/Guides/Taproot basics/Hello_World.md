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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQIPXHMQ%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCnAliGeh4%2FcI%2FwaNRR4mgrVSoDvo4WC3yfy9x0CPdWagIgWN%2FL2w1%2B1bMQzwBkLE%2FsOziWHBDnYcTbr7S6T1EjsRwqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlkyWLoT8o9Wk4vBSrcAzqQgLPe2oOFNzmPXFCncqy%2FJcLDA3VUt4QQQg1chNnlmKJxrlHdJCXPLPLsrLyFnVsaGXmDPcV35cWWSJjiW6E3p4mfWB9Y%2FCIz9pidjjbdAwgqDNX7Ol8tAe1Xy3WHFWtZqlP1gbv6lFAujOiR7RnNCPzIhFQR0XZAeKdiNCcnKs%2F77qUTA1ZuPPPb3%2FlsuIUpFQ%2Bg0GHroNgdIGFT70Ua0xVic%2FPMu3FmFMsBI9jcqVDTrGJC9plPHLwtZd9Cv3MaLB8xOrLhvfUrU7%2FF7kUcHAG7jWz9Dvcvm937c86NTOBRP21W7aeqdpF5uoO0ox7rst1If7MtPfd%2BfDcsSq%2Fd02c4ApQJu7G5qitlICipkkWMW%2FOO8DX3FxIujnCvaXuXTRmqPK7WI6vXEPHt7%2BGVXwA8imp12cG27B9%2BrtfrYkzWpK406qLsCVdoeAVbted1mjXKcsb5x8t7SMSyoI1wrcoios1qBEDKIUSmj2KairByZFMBM1WNB1LGf%2FjsKGwsc15TGzxGwcvemmsCT2UL8O5ECpbcSHTsDBWeM2mfTYqik%2F%2BkkVfPzZl6NBDLQW9HA%2FsSJgzkO59k1NlnWUz4PsCbIS6kGUoSXCgLasqnJcAx8B1fUwUWIrE6MNalqNEGOqUBtZsUg1D%2FER29wUd6OIEOd%2BRARlTme7%2Fxm8b3vSBlcQsFcuLGT98GlGRWz4wz2xKqmD5s1xNgJcJO4agmMKaQFA5%2BKJ%2FdCyo8WpUoitytd2emgjh7ib9HXanjGZhW7w6rlQkggoCuF2PYHfXL0MrV3DIJVFw5%2FMJs2Zx%2Bzjps1YYj%2FxoCNkOjgI8IhaihTfkskQEjEbl2hVLQCuwWOt8zyMPYz5v3&X-Amz-Signature=131052b2a5a6346a19b4a6f685e766c7260326e21f01c51c411c52871804657d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQIPXHMQ%2F20260611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260611T040048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJHMEUCIQCnAliGeh4%2FcI%2FwaNRR4mgrVSoDvo4WC3yfy9x0CPdWagIgWN%2FL2w1%2B1bMQzwBkLE%2FsOziWHBDnYcTbr7S6T1EjsRwqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFlkyWLoT8o9Wk4vBSrcAzqQgLPe2oOFNzmPXFCncqy%2FJcLDA3VUt4QQQg1chNnlmKJxrlHdJCXPLPLsrLyFnVsaGXmDPcV35cWWSJjiW6E3p4mfWB9Y%2FCIz9pidjjbdAwgqDNX7Ol8tAe1Xy3WHFWtZqlP1gbv6lFAujOiR7RnNCPzIhFQR0XZAeKdiNCcnKs%2F77qUTA1ZuPPPb3%2FlsuIUpFQ%2Bg0GHroNgdIGFT70Ua0xVic%2FPMu3FmFMsBI9jcqVDTrGJC9plPHLwtZd9Cv3MaLB8xOrLhvfUrU7%2FF7kUcHAG7jWz9Dvcvm937c86NTOBRP21W7aeqdpF5uoO0ox7rst1If7MtPfd%2BfDcsSq%2Fd02c4ApQJu7G5qitlICipkkWMW%2FOO8DX3FxIujnCvaXuXTRmqPK7WI6vXEPHt7%2BGVXwA8imp12cG27B9%2BrtfrYkzWpK406qLsCVdoeAVbted1mjXKcsb5x8t7SMSyoI1wrcoios1qBEDKIUSmj2KairByZFMBM1WNB1LGf%2FjsKGwsc15TGzxGwcvemmsCT2UL8O5ECpbcSHTsDBWeM2mfTYqik%2F%2BkkVfPzZl6NBDLQW9HA%2FsSJgzkO59k1NlnWUz4PsCbIS6kGUoSXCgLasqnJcAx8B1fUwUWIrE6MNalqNEGOqUBtZsUg1D%2FER29wUd6OIEOd%2BRARlTme7%2Fxm8b3vSBlcQsFcuLGT98GlGRWz4wz2xKqmD5s1xNgJcJO4agmMKaQFA5%2BKJ%2FdCyo8WpUoitytd2emgjh7ib9HXanjGZhW7w6rlQkggoCuF2PYHfXL0MrV3DIJVFw5%2FMJs2Zx%2Bzjps1YYj%2FxoCNkOjgI8IhaihTfkskQEjEbl2hVLQCuwWOt8zyMPYz5v3&X-Amz-Signature=7f25b58edc54ab784b388e311fd2df06d7b3107498088a767460ce13440c7e9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
