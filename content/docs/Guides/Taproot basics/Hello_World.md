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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PCC4XOX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkAzrNh56MWKDCQe%2FvbRsLPtBOnX5lPTxUvMC%2BJ1cV0AiArSxC2hInDoaWvyrdd0cVQ1jNWiliDRH4d1akH3qGnJSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM%2Fn%2BPBzAGOn6VV6AiKtwDUKSzvwHrUWNn3YOq2OKW%2B8dcelbQcr%2FiePw3kQSqtyaw%2BZNoi2gDXaXasDnCh3HZU%2F6S9zaZ0PC8yd5x%2FkEFtWDIdGtBhOamoH%2BnTCTV2F3LAmLyii257NV%2F0QLJCjbg%2FYTHB8w2LH8RCODxsBC6yGJJqwyd5vkaYjAWe%2FId7nC2cMWWx6KqSV95mzc8A4ZX3WTpw%2BGCaIfO6xOY1cRWCKFL59z4IgiX8PFgEYi8DEN%2FPQ2KqBu%2BVai8jKU6O5WiIxwr%2BC%2Fy0Y2yWZ7D%2Be5%2FBjUj1WtiHM51A9LmWjtNhIuMuDOk0rddpSY3SZMO1KUr96VGwMdVqm9%2FO1td%2FWR7Orj%2FAyhO3pXjqpcio8AMSPsq4K%2BmyNxwcyz4V1GW%2BxvWwVhn9F4cauavPZYNyisIi2GCQgpz579S17Hb7bUIa0hHQqx8pznv8IEX16rLDBUANZtT4DhrbLLll3V2VT5j%2BEJZr0X6eDFHARg3QsfW7MNc%2B%2FWKvfNJ1wd%2F3N6yKpFw6dlduU%2BtXY8T7aw%2Fjdr6s60OoB6ni7kl%2BvPZehzDzx6KBPnJ%2BtcvqeeGthBNzi9ZU3IYN2vzQnz4%2F3deJFY31543ZQjRoU6UHwLjHiTcizqerdVPK05RqdJuZ%2Bcwk4fwxAY6pgHjrv0bKDqewqLKADDHEehlYCQTArRGqI2MjXgLqbtbZW8g2s44fw1dXXfYbRt7EuKQjko5viNcTo8k0FKFqYO1lIZhHpd9ynn2nzOrOaNVCMccpwEvndemhQSB9g4%2F8Ihc4SdMYUiseTY2uOzBzaJ3TX%2BjcHP4oh8S5Iilm%2BnlqweDTQoRXaxYBKaIHR3DRp9Hj%2BZ60fAsp9tuwVdQ2Zp%2BnsHQ1%2B6E&X-Amz-Signature=c8400564cab08757a5d7f936131d9574d2d1f381088f4ba94b40dbd6022043a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PCC4XOX%2F20250813%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250813T034401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHkAzrNh56MWKDCQe%2FvbRsLPtBOnX5lPTxUvMC%2BJ1cV0AiArSxC2hInDoaWvyrdd0cVQ1jNWiliDRH4d1akH3qGnJSr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM%2Fn%2BPBzAGOn6VV6AiKtwDUKSzvwHrUWNn3YOq2OKW%2B8dcelbQcr%2FiePw3kQSqtyaw%2BZNoi2gDXaXasDnCh3HZU%2F6S9zaZ0PC8yd5x%2FkEFtWDIdGtBhOamoH%2BnTCTV2F3LAmLyii257NV%2F0QLJCjbg%2FYTHB8w2LH8RCODxsBC6yGJJqwyd5vkaYjAWe%2FId7nC2cMWWx6KqSV95mzc8A4ZX3WTpw%2BGCaIfO6xOY1cRWCKFL59z4IgiX8PFgEYi8DEN%2FPQ2KqBu%2BVai8jKU6O5WiIxwr%2BC%2Fy0Y2yWZ7D%2Be5%2FBjUj1WtiHM51A9LmWjtNhIuMuDOk0rddpSY3SZMO1KUr96VGwMdVqm9%2FO1td%2FWR7Orj%2FAyhO3pXjqpcio8AMSPsq4K%2BmyNxwcyz4V1GW%2BxvWwVhn9F4cauavPZYNyisIi2GCQgpz579S17Hb7bUIa0hHQqx8pznv8IEX16rLDBUANZtT4DhrbLLll3V2VT5j%2BEJZr0X6eDFHARg3QsfW7MNc%2B%2FWKvfNJ1wd%2F3N6yKpFw6dlduU%2BtXY8T7aw%2Fjdr6s60OoB6ni7kl%2BvPZehzDzx6KBPnJ%2BtcvqeeGthBNzi9ZU3IYN2vzQnz4%2F3deJFY31543ZQjRoU6UHwLjHiTcizqerdVPK05RqdJuZ%2Bcwk4fwxAY6pgHjrv0bKDqewqLKADDHEehlYCQTArRGqI2MjXgLqbtbZW8g2s44fw1dXXfYbRt7EuKQjko5viNcTo8k0FKFqYO1lIZhHpd9ynn2nzOrOaNVCMccpwEvndemhQSB9g4%2F8Ihc4SdMYUiseTY2uOzBzaJ3TX%2BjcHP4oh8S5Iilm%2BnlqweDTQoRXaxYBKaIHR3DRp9Hj%2BZ60fAsp9tuwVdQ2Zp%2BnsHQ1%2B6E&X-Amz-Signature=45c8b61b0814bbe499bc79f86d55601b33877f88d5535690a99f8c96773fab38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
