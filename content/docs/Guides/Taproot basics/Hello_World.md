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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J6AXEZ3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCA9Txn63m5KjdJZRW6KTTOqRqW7rA7bV5944%2BFYFwzPwIhAOFsA0sI2uD1vuv%2Bs6B%2BBkZvu7ttZcvfGyltvljkYkNMKv8DCHMQABoMNjM3NDIzMTgzODA1IgwaONEQRptjSFxcu7sq3AOFOuzVj8zZFRZmzu%2FEmbW%2Bh0p49WuQSw1oov78Mx0ba0zGNodNQ44zU7Zl5wDwq6PgqiWReJ1BAoEF3ITxdjo2E4osLBQY3xn%2BO%2Fp1snyhpHURuvsCpSPA4AYoot9iDaBLz4esu0QD3kny%2BRTzq%2FOHH1QDPwNiRa5RX1qaFYTM6HtxvsIu4s9jjrcndU65ucJgg3V6iCdAedijod32qR33SQtqFWlrkQIgmD8%2FPxT40weG81cz33XpysnOMP0sBTzCt3Uw7TotH8xbWVVXHMDXIQZ22YURIgYm79eJ%2Bda0b00sdqMW9L7aNMYcpMhATlfRr5QVy%2BGGa6qnH1XY9m7Hv%2FmOrrsN%2B0651Xa5AoYFOX6hS56%2FVmROhzAbF%2BBMagpaJ7W3GCDwrVWcWchPlaIUEwk4DTYJT5ltekwul341uSLVRm8tZCoL4dN03jdXjtH3uuB6FjgXeHIB1bjZrDDenuUwGmBUOG4AVjsJLoKiMYakSBn13muZRzFJGVre3eACllFD1IMtcz9F465VVouhl83p4B0oo7NLKpxL7D8%2F3eHbzxZcVjxU2anSwu3lkh%2BlYN%2FdYyxJR0GcaAazSuBmLdlm%2FnXUM1YOPkJKd4msA0A9LvQvNadhimYr2DDlkePDBjqkAbps7BaGM2jA5%2B6eHNiphzxub2OEr0fssOCp0YLo90orgcTBI6sNvVXqZeo48U1LtESprYpHXjlTCEtx6xFeudioZBUm9%2FqDB9rLMSBtUS7MuC7vXaWKXd6g5RXEWP%2B49coC4NCyf1TYkz7qHBfsMpXd6Fr3q%2BU%2BgnpRTsymqyVMRhCXFKDcI1CnxzKV68C%2BDqqH8myKKTp96dNUNyVq7%2FZp8n2I&X-Amz-Signature=029dbe7e36232903c445567b8ab1f835163fd8c7153a2d300cc3b57906e6d638&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664J6AXEZ3%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T110828Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJIMEYCIQCA9Txn63m5KjdJZRW6KTTOqRqW7rA7bV5944%2BFYFwzPwIhAOFsA0sI2uD1vuv%2Bs6B%2BBkZvu7ttZcvfGyltvljkYkNMKv8DCHMQABoMNjM3NDIzMTgzODA1IgwaONEQRptjSFxcu7sq3AOFOuzVj8zZFRZmzu%2FEmbW%2Bh0p49WuQSw1oov78Mx0ba0zGNodNQ44zU7Zl5wDwq6PgqiWReJ1BAoEF3ITxdjo2E4osLBQY3xn%2BO%2Fp1snyhpHURuvsCpSPA4AYoot9iDaBLz4esu0QD3kny%2BRTzq%2FOHH1QDPwNiRa5RX1qaFYTM6HtxvsIu4s9jjrcndU65ucJgg3V6iCdAedijod32qR33SQtqFWlrkQIgmD8%2FPxT40weG81cz33XpysnOMP0sBTzCt3Uw7TotH8xbWVVXHMDXIQZ22YURIgYm79eJ%2Bda0b00sdqMW9L7aNMYcpMhATlfRr5QVy%2BGGa6qnH1XY9m7Hv%2FmOrrsN%2B0651Xa5AoYFOX6hS56%2FVmROhzAbF%2BBMagpaJ7W3GCDwrVWcWchPlaIUEwk4DTYJT5ltekwul341uSLVRm8tZCoL4dN03jdXjtH3uuB6FjgXeHIB1bjZrDDenuUwGmBUOG4AVjsJLoKiMYakSBn13muZRzFJGVre3eACllFD1IMtcz9F465VVouhl83p4B0oo7NLKpxL7D8%2F3eHbzxZcVjxU2anSwu3lkh%2BlYN%2FdYyxJR0GcaAazSuBmLdlm%2FnXUM1YOPkJKd4msA0A9LvQvNadhimYr2DDlkePDBjqkAbps7BaGM2jA5%2B6eHNiphzxub2OEr0fssOCp0YLo90orgcTBI6sNvVXqZeo48U1LtESprYpHXjlTCEtx6xFeudioZBUm9%2FqDB9rLMSBtUS7MuC7vXaWKXd6g5RXEWP%2B49coC4NCyf1TYkz7qHBfsMpXd6Fr3q%2BU%2BgnpRTsymqyVMRhCXFKDcI1CnxzKV68C%2BDqqH8myKKTp96dNUNyVq7%2FZp8n2I&X-Amz-Signature=f99870fb1eb3c79007c5ad789bd0adb3e85e9328919f1f4a8a67da05274f0a6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
