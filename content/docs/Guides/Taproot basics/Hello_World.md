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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYQ7LEK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIAah4f3vB9VGzQeygjItNYESj2y4DNRi4vKhao2oXrmTAiEA3sS6o%2Bl%2BvQ9wv99gwXCOR0sfUrileBtYSdBTWzPCg%2Fgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDO0XZ75YgnoPZnscRyrcA7c5uJhS5qizblEi7PyMhICoIjiIo%2FW%2BWSGoQXVSEQKfMA%2FP4zW1nZbMEHCrNS52v82wr7wBqULJs4BZbvUmMEVkknKTQ8mbaWclOHHprERL5MT%2F13XftqDx4eNPB%2F%2B9z8gz3oBeYdlPPVuL6wWpZtd6rk4aMDnehmdqhbfRwbrf1zztdbAQVMymTYntrTF46eRLT1FdZKuSU45v6lLkWDuCq3FlRX%2B5l47Vx4W0WkQEof3cNhzIl%2F1Qr790NVcVRQ6YkSny52e935u0ZuTZiEA06UYxlokqEILbe4j4SG9CbhdhqG6%2BnkPsTxYXVdyvhpWBFH65LqncAYkN1JPPGb0rbEhlRWFBgyU2jsmCOkHer5lab17s5nLbbkqBY%2BdOm8iRdeSGjQ6UtZOLqSCavIQIxXEKohvDaqgRHpA8pbka1bZDHuqVwqdYiOKGIkZeazAYlCCInuAt7FI%2FNpiiZSnizR%2B23jYqoXflXfDrboneNZ2ytrACYTAvSTixa%2FGBP4cQl1xxk3ztSy73nWjEw1BjdHysKAKycQ9hdiFaXVGxxpV1NedBI8i8d0cuXEZDHERiEzwiA%2BapYYy5ztuGUNQXXRvgsm13mwz4%2Fz8gbCmmmWMFbdrnw29v1%2BSNMN7JmsQGOqUBkvbsnpzridiBzWyiToOGFbW52T9Z1OiPl8tB1sCsjsm7Y54BT9tmspsVyrHKko1g2us%2B9%2Blp7lLA9M1T9%2BWaMaOlDB8pwAdj5%2F3ULlaLAFot9ZLPjFfgdfBQ2bWjG3qTaBVmhcf8IJHmqsyCqH09Ey%2BLOJI7m98BAtqoI2xSsUuZVF%2F3azqZrYLXeqsOukYTtXp5jOCMU6wp9k1K28Q6l30tmdlu&X-Amz-Signature=f4d6a53594b629cab4c6672a2557885185a238c37e9049acf0a1b1f6260e8bca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665DYQ7LEK%2F20250727%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250727T230852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFYaCXVzLXdlc3QtMiJHMEUCIAah4f3vB9VGzQeygjItNYESj2y4DNRi4vKhao2oXrmTAiEA3sS6o%2Bl%2BvQ9wv99gwXCOR0sfUrileBtYSdBTWzPCg%2Fgq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDO0XZ75YgnoPZnscRyrcA7c5uJhS5qizblEi7PyMhICoIjiIo%2FW%2BWSGoQXVSEQKfMA%2FP4zW1nZbMEHCrNS52v82wr7wBqULJs4BZbvUmMEVkknKTQ8mbaWclOHHprERL5MT%2F13XftqDx4eNPB%2F%2B9z8gz3oBeYdlPPVuL6wWpZtd6rk4aMDnehmdqhbfRwbrf1zztdbAQVMymTYntrTF46eRLT1FdZKuSU45v6lLkWDuCq3FlRX%2B5l47Vx4W0WkQEof3cNhzIl%2F1Qr790NVcVRQ6YkSny52e935u0ZuTZiEA06UYxlokqEILbe4j4SG9CbhdhqG6%2BnkPsTxYXVdyvhpWBFH65LqncAYkN1JPPGb0rbEhlRWFBgyU2jsmCOkHer5lab17s5nLbbkqBY%2BdOm8iRdeSGjQ6UtZOLqSCavIQIxXEKohvDaqgRHpA8pbka1bZDHuqVwqdYiOKGIkZeazAYlCCInuAt7FI%2FNpiiZSnizR%2B23jYqoXflXfDrboneNZ2ytrACYTAvSTixa%2FGBP4cQl1xxk3ztSy73nWjEw1BjdHysKAKycQ9hdiFaXVGxxpV1NedBI8i8d0cuXEZDHERiEzwiA%2BapYYy5ztuGUNQXXRvgsm13mwz4%2Fz8gbCmmmWMFbdrnw29v1%2BSNMN7JmsQGOqUBkvbsnpzridiBzWyiToOGFbW52T9Z1OiPl8tB1sCsjsm7Y54BT9tmspsVyrHKko1g2us%2B9%2Blp7lLA9M1T9%2BWaMaOlDB8pwAdj5%2F3ULlaLAFot9ZLPjFfgdfBQ2bWjG3qTaBVmhcf8IJHmqsyCqH09Ey%2BLOJI7m98BAtqoI2xSsUuZVF%2F3azqZrYLXeqsOukYTtXp5jOCMU6wp9k1K28Q6l30tmdlu&X-Amz-Signature=3eeb51ad3ce8b4dfce36e4d2c6963d8b9d5e3aeb485df20d7481205ae4b795d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
