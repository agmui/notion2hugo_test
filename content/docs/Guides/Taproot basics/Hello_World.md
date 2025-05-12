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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHSE2WIN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD4NXNTF%2B%2FD9%2BT%2BUzZAikx%2BlUUzGRkO5al%2B1vfU%2FOUkggIgc%2FAjeUgOsowwtT1Rv3msD2awN4g87MUZqvtB3efEPFwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvJUaBLZOJzZfkjKyrcA3zdszjKOvb8NnQB8UbHsmwKH2XW58KHrqiwySixE48Eop%2FsNC4judBQPLbFV5rFys9jabtOQ3oqBtIx%2B0MNlnJ8vsvC%2F23kdIOjWMBnOrS%2BibCosfk6N9%2BpBOy4azRnNm3wLhXgCRzHnVLdnptuTrd0CUtY5V6U9VSs0d2vsLiyuANHeRTcTou6GuOSWwuZS5Z1FEmp0WLlxs%2F3ydU%2Bl0S%2Fr5%2BHqzjRIbomeRUVCtntIV0Sbb%2F6pFyy2sPCGCUiCCs4w9HEKkvbwHBRT8GPVyUxYdfNEPJh1vZD6fKOrWNlmotT7J4kiLjUeqKL1u2%2FIzm%2FWJVb71NWWyxhdvdokVdXE9LNTTCcD%2ByMKVAKAUEKNQ7nJod3uWm0vnoxjz0B%2FWBNvN2vHiwVvFELE38A2O7ZPiMOZ9kxUQq72mIdKxiKj%2BszdhnAjkyQTPs0of14eD9AppDj%2Bj8vT2uBclULeDMuOq%2BcKjJaX9hN0Qh3He1bN%2F3NP2I4oxl%2FIoWCIsHEibz52Utn0HM28AcC5f056nZjOUm3STN%2BQTfE1Wodo6OerMpWCqhhqTL%2BF01oEJFjySM0JKJny1ld2jj0iI3KmgREgjSf3ofD%2BNImnEmGWEXX352Ng7q1Yas%2FU4OqMPrCicEGOqUBu4M6AO%2BxXdNgx8Tmc5yhy2JCZjd5RTs%2BZsGNvVBohioZs6aculSBN4LE9if%2BWFHVov4RlSs0T9WtU0Kv3hwz55TpwGDoUJGhauhZr2awZKqEjSxhEfILGCckhXJNIjghR4ls8wWhyN3bouQSMe0zT9AbxFcDr9Sffob8qXCP336Eq0NrxggrByM5HaHUpFmxQ3Th%2FvkpE9L%2BBiT0wYizc8pa4yn7&X-Amz-Signature=fa9fb921939db4d5355199c7dba1aec7cd642ca3e9ce7bf31bb009c3dcac89f1&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UHSE2WIN%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T210731Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDUaCXVzLXdlc3QtMiJHMEUCIQD4NXNTF%2B%2FD9%2BT%2BUzZAikx%2BlUUzGRkO5al%2B1vfU%2FOUkggIgc%2FAjeUgOsowwtT1Rv3msD2awN4g87MUZqvtB3efEPFwqiAQI3v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNvJUaBLZOJzZfkjKyrcA3zdszjKOvb8NnQB8UbHsmwKH2XW58KHrqiwySixE48Eop%2FsNC4judBQPLbFV5rFys9jabtOQ3oqBtIx%2B0MNlnJ8vsvC%2F23kdIOjWMBnOrS%2BibCosfk6N9%2BpBOy4azRnNm3wLhXgCRzHnVLdnptuTrd0CUtY5V6U9VSs0d2vsLiyuANHeRTcTou6GuOSWwuZS5Z1FEmp0WLlxs%2F3ydU%2Bl0S%2Fr5%2BHqzjRIbomeRUVCtntIV0Sbb%2F6pFyy2sPCGCUiCCs4w9HEKkvbwHBRT8GPVyUxYdfNEPJh1vZD6fKOrWNlmotT7J4kiLjUeqKL1u2%2FIzm%2FWJVb71NWWyxhdvdokVdXE9LNTTCcD%2ByMKVAKAUEKNQ7nJod3uWm0vnoxjz0B%2FWBNvN2vHiwVvFELE38A2O7ZPiMOZ9kxUQq72mIdKxiKj%2BszdhnAjkyQTPs0of14eD9AppDj%2Bj8vT2uBclULeDMuOq%2BcKjJaX9hN0Qh3He1bN%2F3NP2I4oxl%2FIoWCIsHEibz52Utn0HM28AcC5f056nZjOUm3STN%2BQTfE1Wodo6OerMpWCqhhqTL%2BF01oEJFjySM0JKJny1ld2jj0iI3KmgREgjSf3ofD%2BNImnEmGWEXX352Ng7q1Yas%2FU4OqMPrCicEGOqUBu4M6AO%2BxXdNgx8Tmc5yhy2JCZjd5RTs%2BZsGNvVBohioZs6aculSBN4LE9if%2BWFHVov4RlSs0T9WtU0Kv3hwz55TpwGDoUJGhauhZr2awZKqEjSxhEfILGCckhXJNIjghR4ls8wWhyN3bouQSMe0zT9AbxFcDr9Sffob8qXCP336Eq0NrxggrByM5HaHUpFmxQ3Th%2FvkpE9L%2BBiT0wYizc8pa4yn7&X-Amz-Signature=fe9f6fbda5d6b8fa2bf7caba96cf4bb18044bd2497b86677486dcab266627f06&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
