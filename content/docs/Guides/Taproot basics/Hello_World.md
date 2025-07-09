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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHHII7YP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICohffjcubFBQECR8dAjbj4YhGfMhR04JRXqCRLViv2iAiAfoUNZpPVOqLceOl834igkB606RLyt0x0NVUL2RgWBsyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO3Xo7zBAyajfmyLOKtwDwf76%2BGTF%2BPDMOwtrNqBL%2FfGYBsmG57N79G9qui8Pd4webwoKq2VKYzm4mis8foaZmwsxB1TqpdvLhDq%2FMUbN%2BjsqE0gB4GmXQ7JsvpRA1QWRFXyMNPeAjUej4Tl0GZcMW%2FKulAXLrLp85pZfH7VFdXitBq%2BPCE03z3E8ajIcfmcihJS%2FtwD0HpufuQO5gltjpOIVcQod1bC7ZuZeM4rm2Q24wkdL4iUqlz9M79%2BsHUyoVZx8KO0fdBMgyatEKKMsl0K0IJfyDkITzlLDZQTAWmvBmbw7G1AA4%2FvDltCUpjK2LKrBnasu0xGpvGvBcR5EPJwzTp1gcU8Hm7mF%2BxszxnNDGO5%2FNujX2kSzDXV%2Fa6WD0CBJ4DaNTmyXwOJb8lPBwy6AEj2YIU4rHddyqq9jQIVUs%2Fmq8BxLAfn0oJUIm%2FFBs%2FdbdG3U80t9Bq%2B4Pqld3YmKxcC%2FWjchztYqfDTpqtG5N%2BMk96umFH2Nb6h%2BFfATvJ%2BvDn6LYXr4jZLyQHmFz5yopqHh%2BbYTKxLU0q8zXnhIkIeRx0%2BTUYg6EQJofPEhnPWZ0k3PfD88fbUi3NJD6NXAhj%2BQB3c3u0KVMUqK3KIN9pHtg1QAgZU6gFGsc2A2DQ7YFIc7YZyvpHEw%2BfS3wwY6pgG5mUIWYRsRa5oVqHg5%2Bro8G6Ksco1mwU84SgMn%2BKGzE%2BMTmBvoeds%2Fm6uNZKePeDoIaaoDfcVqiapufwN5VJ0DjFY7ITAZVCLRkNXBW6S%2BHbIb03dW3VAyM3u56ox7Ndcu1VDcQiaQipIK9M%2Bh7Dp2y49PjyBle7zvVNq18iwH2vzyGHaXS0%2FzyEfYqjKQlvkYJOWaCRJFVeu01XJXDSWC6MULd8Oz&X-Amz-Signature=846ea25d667247c2c785fbba5ff06acecf8e50a104d6527405be0966690cdb74&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHHII7YP%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T061351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICohffjcubFBQECR8dAjbj4YhGfMhR04JRXqCRLViv2iAiAfoUNZpPVOqLceOl834igkB606RLyt0x0NVUL2RgWBsyqIBAie%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO3Xo7zBAyajfmyLOKtwDwf76%2BGTF%2BPDMOwtrNqBL%2FfGYBsmG57N79G9qui8Pd4webwoKq2VKYzm4mis8foaZmwsxB1TqpdvLhDq%2FMUbN%2BjsqE0gB4GmXQ7JsvpRA1QWRFXyMNPeAjUej4Tl0GZcMW%2FKulAXLrLp85pZfH7VFdXitBq%2BPCE03z3E8ajIcfmcihJS%2FtwD0HpufuQO5gltjpOIVcQod1bC7ZuZeM4rm2Q24wkdL4iUqlz9M79%2BsHUyoVZx8KO0fdBMgyatEKKMsl0K0IJfyDkITzlLDZQTAWmvBmbw7G1AA4%2FvDltCUpjK2LKrBnasu0xGpvGvBcR5EPJwzTp1gcU8Hm7mF%2BxszxnNDGO5%2FNujX2kSzDXV%2Fa6WD0CBJ4DaNTmyXwOJb8lPBwy6AEj2YIU4rHddyqq9jQIVUs%2Fmq8BxLAfn0oJUIm%2FFBs%2FdbdG3U80t9Bq%2B4Pqld3YmKxcC%2FWjchztYqfDTpqtG5N%2BMk96umFH2Nb6h%2BFfATvJ%2BvDn6LYXr4jZLyQHmFz5yopqHh%2BbYTKxLU0q8zXnhIkIeRx0%2BTUYg6EQJofPEhnPWZ0k3PfD88fbUi3NJD6NXAhj%2BQB3c3u0KVMUqK3KIN9pHtg1QAgZU6gFGsc2A2DQ7YFIc7YZyvpHEw%2BfS3wwY6pgG5mUIWYRsRa5oVqHg5%2Bro8G6Ksco1mwU84SgMn%2BKGzE%2BMTmBvoeds%2Fm6uNZKePeDoIaaoDfcVqiapufwN5VJ0DjFY7ITAZVCLRkNXBW6S%2BHbIb03dW3VAyM3u56ox7Ndcu1VDcQiaQipIK9M%2Bh7Dp2y49PjyBle7zvVNq18iwH2vzyGHaXS0%2FzyEfYqjKQlvkYJOWaCRJFVeu01XJXDSWC6MULd8Oz&X-Amz-Signature=0759a45f4ad462c8cc51028a62734aeddb42624764ed4e97a700939c4ae5840f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
