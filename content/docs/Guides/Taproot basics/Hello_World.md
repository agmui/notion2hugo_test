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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXL3YLMV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA197JKnCYoWAPA3hQw9PYvx06h8iDJ2cz5AoQUbKLSQIhAMe0uL8z7NBDvYOXw6vUGfVXfndczjT0bxCtyVNyJ9aVKv8DCBEQABoMNjM3NDIzMTgzODA1Igzq6kyhCidZCj%2BzsRgq3AOBIPXfczDLN6O0s4v3jfKIe7DfM2qNo2rf0hbmGTsxSVf9f0LKEe1oMB%2FXNrnVZvRBBS%2BXm1i3%2FUPTlKBNyRXqMnWwEs%2BCmFv6Au4VMH%2Bq5BYl8XhjDAjYelWpjfuUF%2FWfLC73IvmisR2b%2BBJuWfaXKVLWvTUatat0adYGhxqC%2BLQxTSN1FBswV%2FrkcoCdChCv9SrF343%2FsTlQrK7wK38%2BzAN7E0QFK1LYUdI%2Fb28xKKs89xHP8CzNeHDuWUBgIgsyLfhART6PaPT5V00FGAxRwFk6vKeZLzadKNHa1A7Ai9vz3u7KSuCBifmuyZgPD4%2BFlJnNJ%2FW5PsCa9cUKqliEuDKM%2FJJCqkzXZgHrNMhnYWUY4wWM9AMbVfufatlrukj0J99vear1gpySLSyPi1oC0t0WJwDScFDcipvAWO%2Fk6MqKVVU9SHtGphsfRdVRWJs2066XQHJzWMMjZscgrVf2KdLIldl6AVXqMuMGkB1XoVBnpyZ3xLmwbCw%2FBvDKqxWRc27v3b43Ow%2FFuMykZy%2BS%2B0X6AtMfg4jJiXKYI8zk%2F0XV%2BkeXsq9zFA2uT8693gXgsRErYMxhvsrBxlqt05g8anYJx6yO1eA7H6Xi2OMnCENsRKKNQf3xGLjFvTDsyra9BjqkAQ5NJuI8UNlVQohKMbcR48StGwbuKCP0tIo%2BBhp8LIcZII9Bp2D4f%2BBBRkBWPfaN6adeR6ioZsCqinVYk9VL5JiXzvi4Zp2IXpLSDtYLnev3GfIK%2BMSl0SwYLF0CIOz7cKcK0vTrawPk66olE%2BaG9SjR7r56FYPs12Yw7hPn%2FKMBq8zJo9OZe9qa4c6upac2yjfrqg7WLZkm5MhBI22RQo9zisvS&X-Amz-Signature=8d4466adfcfb0e9d2055dc6201e4a4651bb9a13f72c82625147480366c6b22bc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXL3YLMV%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T081040Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA197JKnCYoWAPA3hQw9PYvx06h8iDJ2cz5AoQUbKLSQIhAMe0uL8z7NBDvYOXw6vUGfVXfndczjT0bxCtyVNyJ9aVKv8DCBEQABoMNjM3NDIzMTgzODA1Igzq6kyhCidZCj%2BzsRgq3AOBIPXfczDLN6O0s4v3jfKIe7DfM2qNo2rf0hbmGTsxSVf9f0LKEe1oMB%2FXNrnVZvRBBS%2BXm1i3%2FUPTlKBNyRXqMnWwEs%2BCmFv6Au4VMH%2Bq5BYl8XhjDAjYelWpjfuUF%2FWfLC73IvmisR2b%2BBJuWfaXKVLWvTUatat0adYGhxqC%2BLQxTSN1FBswV%2FrkcoCdChCv9SrF343%2FsTlQrK7wK38%2BzAN7E0QFK1LYUdI%2Fb28xKKs89xHP8CzNeHDuWUBgIgsyLfhART6PaPT5V00FGAxRwFk6vKeZLzadKNHa1A7Ai9vz3u7KSuCBifmuyZgPD4%2BFlJnNJ%2FW5PsCa9cUKqliEuDKM%2FJJCqkzXZgHrNMhnYWUY4wWM9AMbVfufatlrukj0J99vear1gpySLSyPi1oC0t0WJwDScFDcipvAWO%2Fk6MqKVVU9SHtGphsfRdVRWJs2066XQHJzWMMjZscgrVf2KdLIldl6AVXqMuMGkB1XoVBnpyZ3xLmwbCw%2FBvDKqxWRc27v3b43Ow%2FFuMykZy%2BS%2B0X6AtMfg4jJiXKYI8zk%2F0XV%2BkeXsq9zFA2uT8693gXgsRErYMxhvsrBxlqt05g8anYJx6yO1eA7H6Xi2OMnCENsRKKNQf3xGLjFvTDsyra9BjqkAQ5NJuI8UNlVQohKMbcR48StGwbuKCP0tIo%2BBhp8LIcZII9Bp2D4f%2BBBRkBWPfaN6adeR6ioZsCqinVYk9VL5JiXzvi4Zp2IXpLSDtYLnev3GfIK%2BMSl0SwYLF0CIOz7cKcK0vTrawPk66olE%2BaG9SjR7r56FYPs12Yw7hPn%2FKMBq8zJo9OZe9qa4c6upac2yjfrqg7WLZkm5MhBI22RQo9zisvS&X-Amz-Signature=490cef75b64c87ef0377dc2b9952dcd2649feceee5dd60595d5c565378dc8829&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
