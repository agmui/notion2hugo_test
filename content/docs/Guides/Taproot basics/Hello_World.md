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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY22NE3O%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzf5AFXocJBIVTbL4ZbROe%2BuPTpHGdHdQhwbutvmq4EwIgFvOLE8oxwm9YKh9QSrD1FUJdgWkWSazxewJTe9WymXIqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0qYzLf4mKAf4ercCrcA22BsDsqJJU%2BmQAdLpfakDxPzUpFaWwc0ygte1Y44HwlfZ80emQAhaArek%2BYPZ27Biqzkshytye7BzpmPxxvEyXN6hGtxQwDDcsZq%2Bkg5qUthHLkxaeHEkfiaVlWVtAvoG23FW%2FcsmS0ydzP0wIWOrgE4oA3H82p2lUwLouQTO3jS%2Bhkh3ZhL9L4p00kbxUHKR6iBQd%2F5%2BS2J8JpSslJDPyCfbDHJ2KjuTZn7ra0jTHpao8je9GWkjtu2RxTycCxjWU%2FUowkLWYJ1aN4V1DfvV%2BOIQhfwOflHq4NM4hq95ygoASQQmD7AVPAw%2F3XWkdcIlP04iSh93c7Q%2BKyKRfWMQ3l2ZYD8%2B9MJN8FXksWZ4jyw7J8mB6nQ2UqlIoYja%2FM%2BH3oZKrF24wYrqYZee2Uxr4f3VH%2BtdS10ywaNAdBKKes%2B1S4e4Up7YWVjZHI9wwRyPdDxdOGlS7Kimy2rs2riyuKYgpCtijaOdaviZ7%2F0uZDX8zEQuFpP1UIEZ2Fzq95YaCr7VvEVz%2BWpcftYaXOPXZONGBYvsQbf2Equ0IApqs9nHYAz7lGj4K6jLmWx8zgs%2BgUiiAyQY4WCXlWX0sxppdATbE4gd602llZiS21s%2F2A%2F5GSyLV%2FhtkNTnMiMKfqlcMGOqUBrtE3paMH%2BWsQ2bc%2FhUsN1rvjYE%2Biw8DuvSnMuAt3HozBW5lKMstNndUbTpbSo%2BPnRJwiejFCvCoRWiqa96D1HuIUBMX7kC6KIjfB1Z84zohOfA7OSnugcNsX%2FxY6Uc2cKHU3YIDvO2kY%2Ba2wR9G6jMcuKSInELQaCXHSjQzQV7G6PJ9FT6iHJh0cHNK6YYq8obKVVvleJ2r9E0kJS7LbWnfAp8b2&X-Amz-Signature=c2af4763cacdce5fa8f869bd2b14dd4e34a6150f8497f4d4fbd480d640ff4b34&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZY22NE3O%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T190106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCzf5AFXocJBIVTbL4ZbROe%2BuPTpHGdHdQhwbutvmq4EwIgFvOLE8oxwm9YKh9QSrD1FUJdgWkWSazxewJTe9WymXIqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDP0qYzLf4mKAf4ercCrcA22BsDsqJJU%2BmQAdLpfakDxPzUpFaWwc0ygte1Y44HwlfZ80emQAhaArek%2BYPZ27Biqzkshytye7BzpmPxxvEyXN6hGtxQwDDcsZq%2Bkg5qUthHLkxaeHEkfiaVlWVtAvoG23FW%2FcsmS0ydzP0wIWOrgE4oA3H82p2lUwLouQTO3jS%2Bhkh3ZhL9L4p00kbxUHKR6iBQd%2F5%2BS2J8JpSslJDPyCfbDHJ2KjuTZn7ra0jTHpao8je9GWkjtu2RxTycCxjWU%2FUowkLWYJ1aN4V1DfvV%2BOIQhfwOflHq4NM4hq95ygoASQQmD7AVPAw%2F3XWkdcIlP04iSh93c7Q%2BKyKRfWMQ3l2ZYD8%2B9MJN8FXksWZ4jyw7J8mB6nQ2UqlIoYja%2FM%2BH3oZKrF24wYrqYZee2Uxr4f3VH%2BtdS10ywaNAdBKKes%2B1S4e4Up7YWVjZHI9wwRyPdDxdOGlS7Kimy2rs2riyuKYgpCtijaOdaviZ7%2F0uZDX8zEQuFpP1UIEZ2Fzq95YaCr7VvEVz%2BWpcftYaXOPXZONGBYvsQbf2Equ0IApqs9nHYAz7lGj4K6jLmWx8zgs%2BgUiiAyQY4WCXlWX0sxppdATbE4gd602llZiS21s%2F2A%2F5GSyLV%2FhtkNTnMiMKfqlcMGOqUBrtE3paMH%2BWsQ2bc%2FhUsN1rvjYE%2Biw8DuvSnMuAt3HozBW5lKMstNndUbTpbSo%2BPnRJwiejFCvCoRWiqa96D1HuIUBMX7kC6KIjfB1Z84zohOfA7OSnugcNsX%2FxY6Uc2cKHU3YIDvO2kY%2Ba2wR9G6jMcuKSInELQaCXHSjQzQV7G6PJ9FT6iHJh0cHNK6YYq8obKVVvleJ2r9E0kJS7LbWnfAp8b2&X-Amz-Signature=88a228d189c2d020f23e1538f0e8a70a999a53e6af2c1dc00f49e690e77ca446&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
