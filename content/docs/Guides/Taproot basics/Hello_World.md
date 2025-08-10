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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5ZPC6S%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDjyFqeuxr1FISNL21Mdi9Q17QW3Etttle%2Boo%2FnMfhlgIgdwZa%2Bw5SZqSyg2I8WB915saiffKBTYN62qPixJqYp1AqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKOVxDYzQqMgsHOKSrcAwXE%2BZ2qQXT7hmPC26eV0Ocfus5wZtoNYPXCVdAp%2BrP3Sg87p1Ep0wn8C6Lbgu6URID2cGnPSs6Zn%2BwieAs7qq0gKEpwXyXQZwdSbrJKBmj%2B1BgstZYDuNZpCTyjG5BXyDlPKSuMXHN%2B%2BL6StdpKOIKEu2bZZfFLX6vtUB%2FSvtfXmgr2%2FfnU6u%2FLHQrZB8Mn2zzdqGTz7u9w7mfG%2BQEo7P0Wbb5E5WR3mIVLaslNB%2BOWZNQjxt2L0bv0DN8ATS7Qp1e6sn70oQ%2BGL%2Bc99P%2FbyzQ6cpj8yaMVJYx%2BG7HV1opXxPt5Q%2FnHtoVag10TiLx%2F9ugA%2F5P%2Bzkkkh2xFsp60sDqiDyq4eZyiK65UZVQQoVCwPC3XN4KYl3cFf0A96X0Un8BZqm0yWtXz%2Bh3FLyEwRuattN01Ydq5Qn%2F7dyf77etaBFHCnu33FZwzAaIUQlyzxRDylUmkDkB%2FzOitQos%2Fvhpnzn%2F1c%2FtW4Ejhv1Ssc%2BYuj9lXFYxPBOwb2GP1pKVtRXxnbyEBP8TY4tMwNcQtB95OCsphgMigGt8pc9T5i7R8EYJmKRgStDT09Awx9%2FUlTXv5OIqkKBWNpm9gFADtr5zZcf0eSLeN7%2FmxvT7pYaQd2p1hJVgk02j%2B4XDcMPbQ4MQGOqUB0AxK2Lpb%2BXCnGFPJJ5l9cBkJGGVo%2B7Juea5yri6xvWgvJK9gX8woYvb7sgWcmTZhkTZmUYVazTgJQTL2ZAx8BlTBQl1EJ8fhlOTmzPVjmq4UIEL3k4mebCIBkeTcJp1xqBdOrv%2Ba4yge05qXObNVM%2FU19VaXTWqI9L1RgyEUouetJ4yXiwAOPmNNcQwSHuV7rhGntAcBHJnNesiqOUT7Dsx3qVJz&X-Amz-Signature=dd1a1eac1b34d2edc2bdd5a4c0527694e514136514aba05e74087bf4fe587f70&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VF5ZPC6S%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T061250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDjyFqeuxr1FISNL21Mdi9Q17QW3Etttle%2Boo%2FnMfhlgIgdwZa%2Bw5SZqSyg2I8WB915saiffKBTYN62qPixJqYp1AqiAQIzv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEKOVxDYzQqMgsHOKSrcAwXE%2BZ2qQXT7hmPC26eV0Ocfus5wZtoNYPXCVdAp%2BrP3Sg87p1Ep0wn8C6Lbgu6URID2cGnPSs6Zn%2BwieAs7qq0gKEpwXyXQZwdSbrJKBmj%2B1BgstZYDuNZpCTyjG5BXyDlPKSuMXHN%2B%2BL6StdpKOIKEu2bZZfFLX6vtUB%2FSvtfXmgr2%2FfnU6u%2FLHQrZB8Mn2zzdqGTz7u9w7mfG%2BQEo7P0Wbb5E5WR3mIVLaslNB%2BOWZNQjxt2L0bv0DN8ATS7Qp1e6sn70oQ%2BGL%2Bc99P%2FbyzQ6cpj8yaMVJYx%2BG7HV1opXxPt5Q%2FnHtoVag10TiLx%2F9ugA%2F5P%2Bzkkkh2xFsp60sDqiDyq4eZyiK65UZVQQoVCwPC3XN4KYl3cFf0A96X0Un8BZqm0yWtXz%2Bh3FLyEwRuattN01Ydq5Qn%2F7dyf77etaBFHCnu33FZwzAaIUQlyzxRDylUmkDkB%2FzOitQos%2Fvhpnzn%2F1c%2FtW4Ejhv1Ssc%2BYuj9lXFYxPBOwb2GP1pKVtRXxnbyEBP8TY4tMwNcQtB95OCsphgMigGt8pc9T5i7R8EYJmKRgStDT09Awx9%2FUlTXv5OIqkKBWNpm9gFADtr5zZcf0eSLeN7%2FmxvT7pYaQd2p1hJVgk02j%2B4XDcMPbQ4MQGOqUB0AxK2Lpb%2BXCnGFPJJ5l9cBkJGGVo%2B7Juea5yri6xvWgvJK9gX8woYvb7sgWcmTZhkTZmUYVazTgJQTL2ZAx8BlTBQl1EJ8fhlOTmzPVjmq4UIEL3k4mebCIBkeTcJp1xqBdOrv%2Ba4yge05qXObNVM%2FU19VaXTWqI9L1RgyEUouetJ4yXiwAOPmNNcQwSHuV7rhGntAcBHJnNesiqOUT7Dsx3qVJz&X-Amz-Signature=fcfe8e849605e942ba3ccb6c0439d50ba3d0f8366c77d717bd69426d4dafb12b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
