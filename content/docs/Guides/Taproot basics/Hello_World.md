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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS252J2J%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZKtcu%2BGUpn5Z19nbNiNcx7fRGOAcW7fHoEZox%2FIoAxAiBW%2B4%2FlDJHhHH8np4mvfw2Y%2FutNUzjl1j9Ses%2F4IeuLryqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMETbYOKF59qpUHqUHKtwDA8vHC3CDXYLoRtp5OtAviw0nPCBAhuASrs%2BLktjPItX0u8Y2MUwcjnI4uCIbFNPbDI5NGsCkZTx0kqCCDwnxeBHXdOAu%2FVluooHsT%2FqsQCtBeavf0wNdz6FMTxwp9M%2FYPw5QQGBFjpGqFXW%2BxCUiTv27X%2BuBnfP8PJmJOX2ix7Ullgn2jCr6hDSEIYiTyujT34w2FzK9Y%2FGTtCmfXNXOSlAcD0N4Opxl%2BYcpTHZ1NTHkFypeckV1v2VGrWBEC8zUnBPG0Bl4LTu273qB1bBTpR%2B489ZwW7ZtUYEUDb2x5kaQtRt5RTWJ2oH9Pp%2Bof4VdwDbmZdccbiWqgtQwCylI%2FYoaH6X94lGPuEVFP%2FlaA4A%2BC2BuDV46X4XLbIA3FnScE0o%2Fuco4Dt%2FSZmPdPJFMXwJd5yGwOJQdlnx94DSxoi4u8sJMO8cE90HUeM%2Bx6uT2H%2BM2aqd%2BGFn2gbsIZZjr%2B9aal57VaCgxHuYmgO4B4K3oFNGZFpoCkB33RLXNBCTW6qg4jWRce9%2FNtSRphhtBOtMQHg8mVe1lhAMQkVrl7jiamI50ygEpFvjLcsIMMbSFsISAjzS3xzCE6GohT5lTHseftHU8tc4Nd8chxYWeYa2iTAykBp%2FTrLaffrYwjP3CwwY6pgFF81BsojBs2SeH53TZv%2F8Z9k0qIdgqNiTzwwdQiH9OdozsCFW%2FplKW7UHNgJ47MxHSfi9rAL7OomorGJLqqG%2BZKquCh%2BObeYk6TAKKuvNApJXX13hNxk8w0F%2B1%2BItnisWXIyGuxMIXxxCTqbwl3uuzIXNr7f%2BCEeSneo0XLZssQzThPqyk0Bfimb%2FtHS1EEXJBwca%2FV%2FTdBWUXIU6GGAOgU97aAGm8&X-Amz-Signature=273634b0af1c2fc6f75025193719c736b9fe28d979ccfe9100c28b9e1ec3525e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RS252J2J%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T081236Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDZKtcu%2BGUpn5Z19nbNiNcx7fRGOAcW7fHoEZox%2FIoAxAiBW%2B4%2FlDJHhHH8np4mvfw2Y%2FutNUzjl1j9Ses%2F4IeuLryqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMETbYOKF59qpUHqUHKtwDA8vHC3CDXYLoRtp5OtAviw0nPCBAhuASrs%2BLktjPItX0u8Y2MUwcjnI4uCIbFNPbDI5NGsCkZTx0kqCCDwnxeBHXdOAu%2FVluooHsT%2FqsQCtBeavf0wNdz6FMTxwp9M%2FYPw5QQGBFjpGqFXW%2BxCUiTv27X%2BuBnfP8PJmJOX2ix7Ullgn2jCr6hDSEIYiTyujT34w2FzK9Y%2FGTtCmfXNXOSlAcD0N4Opxl%2BYcpTHZ1NTHkFypeckV1v2VGrWBEC8zUnBPG0Bl4LTu273qB1bBTpR%2B489ZwW7ZtUYEUDb2x5kaQtRt5RTWJ2oH9Pp%2Bof4VdwDbmZdccbiWqgtQwCylI%2FYoaH6X94lGPuEVFP%2FlaA4A%2BC2BuDV46X4XLbIA3FnScE0o%2Fuco4Dt%2FSZmPdPJFMXwJd5yGwOJQdlnx94DSxoi4u8sJMO8cE90HUeM%2Bx6uT2H%2BM2aqd%2BGFn2gbsIZZjr%2B9aal57VaCgxHuYmgO4B4K3oFNGZFpoCkB33RLXNBCTW6qg4jWRce9%2FNtSRphhtBOtMQHg8mVe1lhAMQkVrl7jiamI50ygEpFvjLcsIMMbSFsISAjzS3xzCE6GohT5lTHseftHU8tc4Nd8chxYWeYa2iTAykBp%2FTrLaffrYwjP3CwwY6pgFF81BsojBs2SeH53TZv%2F8Z9k0qIdgqNiTzwwdQiH9OdozsCFW%2FplKW7UHNgJ47MxHSfi9rAL7OomorGJLqqG%2BZKquCh%2BObeYk6TAKKuvNApJXX13hNxk8w0F%2B1%2BItnisWXIyGuxMIXxxCTqbwl3uuzIXNr7f%2BCEeSneo0XLZssQzThPqyk0Bfimb%2FtHS1EEXJBwca%2FV%2FTdBWUXIU6GGAOgU97aAGm8&X-Amz-Signature=206bb1d1a35d952000c71e80f428783a2aac27b43c5a2dec185f6a9247e70310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
