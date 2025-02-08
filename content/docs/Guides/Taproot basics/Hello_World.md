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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7FR4KYP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T030956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCICPbiVZHBDj3lE%2BiRNzZKhwaLba%2FnOwvyldUtCxypNqeAiAWyNXsnG2W2TOuERXmo0uW6BI9aSRUtPSgW19Vrn4iGyqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0QWbgpE%2BzTgIN0pMKtwDzXhlFDab5YALSnCvA8aelzxh4%2Fy74skEhqHS3Yd0e6mChrGykipS1%2FiOvWALZGKNFjx5bs9%2BBJ96lObRw%2FamFD%2BGzsLKe%2F2dhyV39ic6E4mPYIkYNckh3LoNGncF2onTYqEhSiFxGv5W1a3zdVc%2F4ZnwbImBIoDMhojbop23NWLFENjF7YCPvjPC9Ixup83dO2pcHCiLDPZbczBaY5LiNJ4ICN9gi0o4e7RWubHELtfvKV01WQDHTSduMYXOZ4QlJJwASRC24YnWhc%2Fg5ouwQMfM5Gg%2B5CNpXz27cDa%2Bfxfzs%2B279MtARPDY4JapRdT7WB7Ou8PXX5aeZUPS831Mn8Ew%2Fps8Q8K2BspnZEHhJxn3AaLeJ6n9D%2FAYdb%2FzDzlDjsG743SNkkr3VqnCr4TeQRLC2OerCOid1zUp8qzIhK0BE7uEwDI60u2bmpQ7Njr4ewatiizm35APrbfQIq1K6Jt%2F2sHz380twCgBmkTq8kVoAz2X%2BpOHGK9ayz9MjaJDq58QNu4KXLlnxQsRGpdKkAUs7pa6jqZnfPdU1PFzkJI4sIUykx4YSRxoO9szmy5nCatEZzoWzV%2FAtB7dR3QZ8HQw5RMbhfQJSVv7suOA4f2OAQNk%2F5Qk8%2FFDpQEwofmavQY6pgGzIU%2FeECePPkr5S0BXm8BO%2FwEnVF%2FTzmP7cqLoTz10iVUy6Acos%2Bwa7Rgv7k7urnH3%2F%2BRzDOfUTPvl1iRa13p4G6Hp1zdSyThROm9nRYWNgYmJUKBmZ%2FaKJ9%2FTD%2Bc5yhjSm4HEynOVjZTxmohx4Bj5wlo0B7zYjJcChUev48HCslDHrGu5Q5VPBSaDz8gPyt%2BSoLQagWe0yl2ZxbWadBjZgsoVq2wc&X-Amz-Signature=0e4f3e8a88997b6916971949ab6d4db61f737a0342c1bab93d18cf4ac39bc47c&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7FR4KYP%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T030956Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGoaCXVzLXdlc3QtMiJGMEQCICPbiVZHBDj3lE%2BiRNzZKhwaLba%2FnOwvyldUtCxypNqeAiAWyNXsnG2W2TOuERXmo0uW6BI9aSRUtPSgW19Vrn4iGyqIBAiD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM0QWbgpE%2BzTgIN0pMKtwDzXhlFDab5YALSnCvA8aelzxh4%2Fy74skEhqHS3Yd0e6mChrGykipS1%2FiOvWALZGKNFjx5bs9%2BBJ96lObRw%2FamFD%2BGzsLKe%2F2dhyV39ic6E4mPYIkYNckh3LoNGncF2onTYqEhSiFxGv5W1a3zdVc%2F4ZnwbImBIoDMhojbop23NWLFENjF7YCPvjPC9Ixup83dO2pcHCiLDPZbczBaY5LiNJ4ICN9gi0o4e7RWubHELtfvKV01WQDHTSduMYXOZ4QlJJwASRC24YnWhc%2Fg5ouwQMfM5Gg%2B5CNpXz27cDa%2Bfxfzs%2B279MtARPDY4JapRdT7WB7Ou8PXX5aeZUPS831Mn8Ew%2Fps8Q8K2BspnZEHhJxn3AaLeJ6n9D%2FAYdb%2FzDzlDjsG743SNkkr3VqnCr4TeQRLC2OerCOid1zUp8qzIhK0BE7uEwDI60u2bmpQ7Njr4ewatiizm35APrbfQIq1K6Jt%2F2sHz380twCgBmkTq8kVoAz2X%2BpOHGK9ayz9MjaJDq58QNu4KXLlnxQsRGpdKkAUs7pa6jqZnfPdU1PFzkJI4sIUykx4YSRxoO9szmy5nCatEZzoWzV%2FAtB7dR3QZ8HQw5RMbhfQJSVv7suOA4f2OAQNk%2F5Qk8%2FFDpQEwofmavQY6pgGzIU%2FeECePPkr5S0BXm8BO%2FwEnVF%2FTzmP7cqLoTz10iVUy6Acos%2Bwa7Rgv7k7urnH3%2F%2BRzDOfUTPvl1iRa13p4G6Hp1zdSyThROm9nRYWNgYmJUKBmZ%2FaKJ9%2FTD%2Bc5yhjSm4HEynOVjZTxmohx4Bj5wlo0B7zYjJcChUev48HCslDHrGu5Q5VPBSaDz8gPyt%2BSoLQagWe0yl2ZxbWadBjZgsoVq2wc&X-Amz-Signature=65c0a519f780f87ae498ae2beb453c3e48d775cabbf16b69c81ce689fb5b1a6c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
