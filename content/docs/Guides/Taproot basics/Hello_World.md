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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B4OWGN4%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BcbXv90Ld7j5bEs%2B%2BYuy5RPwL5Bh%2B3pcJ0eWHix4lUAiEAn3Hj5zCdBh0thAu7kkgxX%2FePjfRXas1Cs99wKeFrBtgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYXYCq0cllmFNBfsSrcA2FSX9V%2B8BDK8QgZgdsz8PWaH3pOIKFRMsryr%2FniE1ZQxxylUNUQH%2FK2A%2BLzs6kNh5I7AvGiFOM%2FIoMoMx7n0g%2BhHIduFcidZmXazHbQJ33IEX1P8D8uB6Bj5IvbRCDyeZmImtdNeajqMkA0oA79L7w04%2Bg%2FUCFRjyChlBxwlykSkIZ5rfKiH0L%2BvkFaUNOESBiLePlcp773pmeL437NkNBy4GMoa7RYZUdBbEtXP1Tb59D7o2Mi7aB2BoLTL7mfvNakZ0cY8rcYLXfezBNSVB6cw34DLeNylb%2FQDTXuOsZVjc8L86k9qkKlIVG3VYcTg4ABpgI3Ga1ncl70IdL%2BngJvj2FRuhPN2na3OR8ehHbovbRrNHcMR8Ot6EH8gIaKlgsUB5Cpj0LQWmN00KVr87ejJc9ooeN9z3SYEhirViqkSd6ASRUixsZI6RwCOWDBsDdFSdtW07k7Tn2MGmkCnJxxg%2FJNAw7f5Jp3gCvhNIfKanIgkFxfcfjmtnbbtZD1ItienB1ujl6AX1pu8BNz95psFFiferbruvB7sle5MiJPjtIpKxyShBa1U%2BK9P3igZOfvKHxLILp41m9UtyHL5KACDdBvBvjo68V4DA8hwyIngz9AIVpCSf1YDtyOMMay%2BsMGOqUB1t7GoTW54edIqhvKppoIF3U43I0R5eL1ysu%2BXxn2OPlFh%2F7ZzS0JNuHeHG7uYHDm0X1JJF3btLdybmJiZNfYGUfxwC5LPeJ8Uf5zNnraOEvINRjcJoxsfKAp1bKJb8mjblqNhMDv1cYkGWb1LW%2F9FWWJ0Bd9TnJoWkxnLzrVDKUaSBDVvBe19YDb9Is%2F06TTGAVKAUE4JV24%2BNV0Z%2B1WBrJg83FW&X-Amz-Signature=58c26f4bb28eb49a266adf602a66212beecbd7bfd444c1a0e262a02676aefe88&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666B4OWGN4%2F20250721%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250721T201003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB%2BcbXv90Ld7j5bEs%2B%2BYuy5RPwL5Bh%2B3pcJ0eWHix4lUAiEAn3Hj5zCdBh0thAu7kkgxX%2FePjfRXas1Cs99wKeFrBtgqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHYXYCq0cllmFNBfsSrcA2FSX9V%2B8BDK8QgZgdsz8PWaH3pOIKFRMsryr%2FniE1ZQxxylUNUQH%2FK2A%2BLzs6kNh5I7AvGiFOM%2FIoMoMx7n0g%2BhHIduFcidZmXazHbQJ33IEX1P8D8uB6Bj5IvbRCDyeZmImtdNeajqMkA0oA79L7w04%2Bg%2FUCFRjyChlBxwlykSkIZ5rfKiH0L%2BvkFaUNOESBiLePlcp773pmeL437NkNBy4GMoa7RYZUdBbEtXP1Tb59D7o2Mi7aB2BoLTL7mfvNakZ0cY8rcYLXfezBNSVB6cw34DLeNylb%2FQDTXuOsZVjc8L86k9qkKlIVG3VYcTg4ABpgI3Ga1ncl70IdL%2BngJvj2FRuhPN2na3OR8ehHbovbRrNHcMR8Ot6EH8gIaKlgsUB5Cpj0LQWmN00KVr87ejJc9ooeN9z3SYEhirViqkSd6ASRUixsZI6RwCOWDBsDdFSdtW07k7Tn2MGmkCnJxxg%2FJNAw7f5Jp3gCvhNIfKanIgkFxfcfjmtnbbtZD1ItienB1ujl6AX1pu8BNz95psFFiferbruvB7sle5MiJPjtIpKxyShBa1U%2BK9P3igZOfvKHxLILp41m9UtyHL5KACDdBvBvjo68V4DA8hwyIngz9AIVpCSf1YDtyOMMay%2BsMGOqUB1t7GoTW54edIqhvKppoIF3U43I0R5eL1ysu%2BXxn2OPlFh%2F7ZzS0JNuHeHG7uYHDm0X1JJF3btLdybmJiZNfYGUfxwC5LPeJ8Uf5zNnraOEvINRjcJoxsfKAp1bKJb8mjblqNhMDv1cYkGWb1LW%2F9FWWJ0Bd9TnJoWkxnLzrVDKUaSBDVvBe19YDb9Is%2F06TTGAVKAUE4JV24%2BNV0Z%2B1WBrJg83FW&X-Amz-Signature=a188f7b2a8890d8159beb2f6dd3d6fd7b6c81fdd14860ca1ad11b1138e2636cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
