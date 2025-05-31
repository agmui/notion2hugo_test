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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMA35C2K%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkHmlsRiptwGZHpnN3M30E31fAcY6cRvpgCPR%2BCYkOaAiBPGo%2FdbKOed9JGoNWo8SgWANb%2FtVxy4O2uULwqpBXQaCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQcTbxba31lo0TCFwKtwDzu0zviie0bQ0Io9LuzCVA%2FbShrGpHUKLZwRErFA0hiJF7fHc5NLo4yV%2Bl24aFwJouIHs3uP%2FaUc0Lbz43ZvgjcvbpRmh8%2Bz9YYo7l5x%2Bf7iKaHsFc%2Fs0JEM8rZQPELyh0TMsHmleJhN4q8ihsFk%2B59ZPSis%2B%2B18AIjxVVW4yqk%2B7yKkJsZKUKEZC9KAybEEDH8qdQHapu9KN%2Bdc1HUxEL41GS%2BgyysVdthD%2FQ%2Foa7C%2FixYmlrBKi0LrFwHIth2VnfuqZy%2FNPFkAjuru3qmboGZzzCo91sCu2Q%2FI0aFabnRXVtSrcaQZfNlmVwwcxoxwPlVFEEUxFCFa%2FNiDj6WJ3lOwOiB083ynmbYDBxDvWdXipHKBh%2F3QHreNd21F59%2FVH5D3dJekCWIErnvhZrNi03ZBuF2nHNyr%2FUkLi2T5yPz%2FBYcWF0ZQ4mT5viXaYm4In5vpMrdhrlAAXjYeJyv2QRCI1lP6lQdem2QIhZhia3wj%2F66EwiJ268ZSaZY8hEVgwKMPkjjcz97WL3vXJ2NmctDiltJWsrb9JBbSB4COwq27efl9mO2ck2jN%2BVlrl1fDjwXeY1rotaR%2BbH10R1nLDLgiD8KEYli%2F1W0DZwB1EQCI5Xbofn4MJL%2FPi0%2Bsw6O7swQY6pgF3k8oyaQF%2F58tx6Y9TALPpQw62NERq6Drwj351St6iQfg6gnIR2z5E9lvyVvqaPK6uAzcnLcktK9L5%2Bt2Fh%2BNE2LoHAjMU8SiIEPg0MIPc7ZtdHSmsMMzvsZjJhCmFk333OPwx2qn4c4QSEQeXV46DfbjrHvvBVvTtsnN8jbO8HCOUlTCEGD6yx5eVk5Bz%2FW4MQaeAk%2Fa6ZC%2FQHVDp0ZwDL0MUpP4C&X-Amz-Signature=7c907919b639be0e0505cc484d864a8d9a13e584e05ecf950a594a5e2ac6f6bc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMA35C2K%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T220713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEkHmlsRiptwGZHpnN3M30E31fAcY6cRvpgCPR%2BCYkOaAiBPGo%2FdbKOed9JGoNWo8SgWANb%2FtVxy4O2uULwqpBXQaCqIBAjC%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQcTbxba31lo0TCFwKtwDzu0zviie0bQ0Io9LuzCVA%2FbShrGpHUKLZwRErFA0hiJF7fHc5NLo4yV%2Bl24aFwJouIHs3uP%2FaUc0Lbz43ZvgjcvbpRmh8%2Bz9YYo7l5x%2Bf7iKaHsFc%2Fs0JEM8rZQPELyh0TMsHmleJhN4q8ihsFk%2B59ZPSis%2B%2B18AIjxVVW4yqk%2B7yKkJsZKUKEZC9KAybEEDH8qdQHapu9KN%2Bdc1HUxEL41GS%2BgyysVdthD%2FQ%2Foa7C%2FixYmlrBKi0LrFwHIth2VnfuqZy%2FNPFkAjuru3qmboGZzzCo91sCu2Q%2FI0aFabnRXVtSrcaQZfNlmVwwcxoxwPlVFEEUxFCFa%2FNiDj6WJ3lOwOiB083ynmbYDBxDvWdXipHKBh%2F3QHreNd21F59%2FVH5D3dJekCWIErnvhZrNi03ZBuF2nHNyr%2FUkLi2T5yPz%2FBYcWF0ZQ4mT5viXaYm4In5vpMrdhrlAAXjYeJyv2QRCI1lP6lQdem2QIhZhia3wj%2F66EwiJ268ZSaZY8hEVgwKMPkjjcz97WL3vXJ2NmctDiltJWsrb9JBbSB4COwq27efl9mO2ck2jN%2BVlrl1fDjwXeY1rotaR%2BbH10R1nLDLgiD8KEYli%2F1W0DZwB1EQCI5Xbofn4MJL%2FPi0%2Bsw6O7swQY6pgF3k8oyaQF%2F58tx6Y9TALPpQw62NERq6Drwj351St6iQfg6gnIR2z5E9lvyVvqaPK6uAzcnLcktK9L5%2Bt2Fh%2BNE2LoHAjMU8SiIEPg0MIPc7ZtdHSmsMMzvsZjJhCmFk333OPwx2qn4c4QSEQeXV46DfbjrHvvBVvTtsnN8jbO8HCOUlTCEGD6yx5eVk5Bz%2FW4MQaeAk%2Fa6ZC%2FQHVDp0ZwDL0MUpP4C&X-Amz-Signature=0685c398e8769a0aa02fb40b5ea92db4404a6363f47a3a0acd48c94b4d3b35c9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
