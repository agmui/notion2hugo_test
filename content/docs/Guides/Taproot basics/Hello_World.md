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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VKVQBJZ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBdPUeTf7rNdbLoBVNqd9og5%2BDJQRfbxVqBjl5frrAFdAiEAqjuzxDl2qmzHxmN41xnP0%2B6ePaxlnzzTriJskrP8Hvsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGfl1pUDLTXu%2BNuz9yrcA5FDuJf4cVoAFdfkqmCR%2Fq%2BE6b6m6olRIOmJAluZyzCwzT0XO4CJ8BzTHazs%2FACgSSOrJw6ur6YVd5Wdz0U2LsaktWbMsUWvqCpI4Rd6nTuPbbXkTqx%2FyTsYIx4PdViVhv1cOpNDR7U6ihtE1TtMkCsapEXhTXl9wKxVVgcj8izy2OMliJyjnE2cWldAeVfoB5p42o949KtRalQNv1ydBknRpYoNaARJD1Fl7paHyNRaeZEeYjbqVJZGadzUly4w4ivFyFxnHjjGf1yAn9tGnkDofcEFbWdx%2B%2BNSzYNAE3HT0RkTztSbze%2FUCBPUXV%2FBwU0%2BfbRYCxt1DP%2FwdSMVTp90Hse9%2BGOx%2FQOP7v6n48rAl4cfYnqsA6hOHnzp87Vkt0tzqfT9AXJKgcO4IaFgMyL7Bm53ayHf4krUY0zIFZ7NRTZHBctWRPMmKXhdk8%2BQuRAUSx1R0n5cPw8vn07wH6k1C6GwPyQY4n%2F7RnpOU%2B%2BpPS8onOhvgA%2BpkJ%2B99NmYCufV%2FhTVZC6wj0UwpnIAxnszIKK4AIFpggWTL28Joj4%2B721MxogrzpI06Pq8bYE%2FUhMmSTO5CkgXiwf8VoL9vcwT9YSkTPR7lmhWBgcvZC%2BDQVjr6I%2F2xUgeot7oMJm5q8cGOqUBlOsmPwo5fLpU1wrYGkWikLTbvkmDYt6HURkXj8HIrjEQBE62saXsgGiGhjPcl%2Ffmgd9uTugXDtA7jVVphPfqcIOo9Gu2vm3rmrJILIwLFUIOV%2FRHb2K%2BStpoTk8otYEcHrm8IoIqhx%2FjujqJSTMcSAbKBMvS4iYXfYWEYxk4gvqgldEyzS8ng6VxVfEl1jg1Tra4OTIoFGhmmSMe0NAy5kAnS3Yx&X-Amz-Signature=40afecc6632e025381fbc9b41ac5f9156a497b0dce26a296b6b5f41e19a9f125&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663VKVQBJZ%2F20251012%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251012T012749Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIBdPUeTf7rNdbLoBVNqd9og5%2BDJQRfbxVqBjl5frrAFdAiEAqjuzxDl2qmzHxmN41xnP0%2B6ePaxlnzzTriJskrP8Hvsq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDGfl1pUDLTXu%2BNuz9yrcA5FDuJf4cVoAFdfkqmCR%2Fq%2BE6b6m6olRIOmJAluZyzCwzT0XO4CJ8BzTHazs%2FACgSSOrJw6ur6YVd5Wdz0U2LsaktWbMsUWvqCpI4Rd6nTuPbbXkTqx%2FyTsYIx4PdViVhv1cOpNDR7U6ihtE1TtMkCsapEXhTXl9wKxVVgcj8izy2OMliJyjnE2cWldAeVfoB5p42o949KtRalQNv1ydBknRpYoNaARJD1Fl7paHyNRaeZEeYjbqVJZGadzUly4w4ivFyFxnHjjGf1yAn9tGnkDofcEFbWdx%2B%2BNSzYNAE3HT0RkTztSbze%2FUCBPUXV%2FBwU0%2BfbRYCxt1DP%2FwdSMVTp90Hse9%2BGOx%2FQOP7v6n48rAl4cfYnqsA6hOHnzp87Vkt0tzqfT9AXJKgcO4IaFgMyL7Bm53ayHf4krUY0zIFZ7NRTZHBctWRPMmKXhdk8%2BQuRAUSx1R0n5cPw8vn07wH6k1C6GwPyQY4n%2F7RnpOU%2B%2BpPS8onOhvgA%2BpkJ%2B99NmYCufV%2FhTVZC6wj0UwpnIAxnszIKK4AIFpggWTL28Joj4%2B721MxogrzpI06Pq8bYE%2FUhMmSTO5CkgXiwf8VoL9vcwT9YSkTPR7lmhWBgcvZC%2BDQVjr6I%2F2xUgeot7oMJm5q8cGOqUBlOsmPwo5fLpU1wrYGkWikLTbvkmDYt6HURkXj8HIrjEQBE62saXsgGiGhjPcl%2Ffmgd9uTugXDtA7jVVphPfqcIOo9Gu2vm3rmrJILIwLFUIOV%2FRHb2K%2BStpoTk8otYEcHrm8IoIqhx%2FjujqJSTMcSAbKBMvS4iYXfYWEYxk4gvqgldEyzS8ng6VxVfEl1jg1Tra4OTIoFGhmmSMe0NAy5kAnS3Yx&X-Amz-Signature=ba55b8756534457da4593c916eb3fe10af76224116f154e527145812dde0c656&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
