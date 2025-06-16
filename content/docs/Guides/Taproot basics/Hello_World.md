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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KLH5KEG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDdeJH65U8NLuZRRsyqb5mSrdNm1NWfb8IrhlV1cCGxngIhAMdlPzdNR%2FHUHJZ0mAwJDRm%2FCzNuW3UG5C%2Bs4jmU9RWoKv8DCGYQABoMNjM3NDIzMTgzODA1IgxalqC9Q92h6nrTMtYq3AMOLVBJiIfkdPfnMY2sfcGEn2FPNWePolbcX%2BQczwzHmmu38mc9mpDUNxRvUVkFW350C3mUWkkVKM1mSbyCtBNlwaqG2C%2FQYgxoGRSkMmZuO6ADTl4a3Km281KfayXFAK9qnrr0DyCeXqi1qXFL5lXHtswOyMk4XmJzDe0m2oK648qUHxwJmX0uyv%2FFWtftLbnf1WaL%2FOyaELYkYkpXrBMhm1KeK5UyzCI3hJZzKe9cZHeB6YY%2FMdQPryz19f4RBaTwSFeQ7CGMi1RKsHJSOu58ALxDyFCTgRaRUKnPfCsOPbBxo4K%2B0duEHsfik4qGAKyXEBxBeNbwY7VlyrvKXjXgYUKAbwYXD80k9PiS46JBDf3hHBVevlvRNNw7iMa3uC7szWlZFTGK4j3%2FEJElUv7yzsICimues6%2B0yYfyekhn%2Bph2ofGWtM0srjtL2P2ZlJY07sHUPBTpaNMR1mHkCTFna4L6Z2JQzeqGaZIhFitQhRxOIBIC7mhxyUmbX4ZO4BPebFuF9noZNscul7oOVJ46sUAZa8lONHoB1aphExq4jvP%2Bwt88BAvkndxXgAWAggomnUr9bfgappE8459eU7MjdMaejy0MaPrzNjF3Uv6mSRUTB72NE3x9tahW%2FDCejsLCBjqkAUaaZWP4QA8axXqZmFa%2BCcMFMeGHNdGmfgHEnbhPxj88LBaM6jVVbOGMEhTzCkrP%2B1e0XCkPpN0n%2B%2B%2BUdFVy6KMQadxsd8IP30HlwAPhTyxU3G8goaDu1gmJID3P7mfCQRj8DqZKO3tX3a4HgeEZo3NIlopa954nTgILLNDpdi3Arf9oLHgKyiSLZ247MWaJkCYOH9raw6tCL1VlzNUcklPjJlEq&X-Amz-Signature=5686f34f02d4985149a8a5be15cac40fd1a6ccd6b0e5177a64a4a69c8260dc3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664KLH5KEG%2F20250616%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250616T210822Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDdeJH65U8NLuZRRsyqb5mSrdNm1NWfb8IrhlV1cCGxngIhAMdlPzdNR%2FHUHJZ0mAwJDRm%2FCzNuW3UG5C%2Bs4jmU9RWoKv8DCGYQABoMNjM3NDIzMTgzODA1IgxalqC9Q92h6nrTMtYq3AMOLVBJiIfkdPfnMY2sfcGEn2FPNWePolbcX%2BQczwzHmmu38mc9mpDUNxRvUVkFW350C3mUWkkVKM1mSbyCtBNlwaqG2C%2FQYgxoGRSkMmZuO6ADTl4a3Km281KfayXFAK9qnrr0DyCeXqi1qXFL5lXHtswOyMk4XmJzDe0m2oK648qUHxwJmX0uyv%2FFWtftLbnf1WaL%2FOyaELYkYkpXrBMhm1KeK5UyzCI3hJZzKe9cZHeB6YY%2FMdQPryz19f4RBaTwSFeQ7CGMi1RKsHJSOu58ALxDyFCTgRaRUKnPfCsOPbBxo4K%2B0duEHsfik4qGAKyXEBxBeNbwY7VlyrvKXjXgYUKAbwYXD80k9PiS46JBDf3hHBVevlvRNNw7iMa3uC7szWlZFTGK4j3%2FEJElUv7yzsICimues6%2B0yYfyekhn%2Bph2ofGWtM0srjtL2P2ZlJY07sHUPBTpaNMR1mHkCTFna4L6Z2JQzeqGaZIhFitQhRxOIBIC7mhxyUmbX4ZO4BPebFuF9noZNscul7oOVJ46sUAZa8lONHoB1aphExq4jvP%2Bwt88BAvkndxXgAWAggomnUr9bfgappE8459eU7MjdMaejy0MaPrzNjF3Uv6mSRUTB72NE3x9tahW%2FDCejsLCBjqkAUaaZWP4QA8axXqZmFa%2BCcMFMeGHNdGmfgHEnbhPxj88LBaM6jVVbOGMEhTzCkrP%2B1e0XCkPpN0n%2B%2B%2BUdFVy6KMQadxsd8IP30HlwAPhTyxU3G8goaDu1gmJID3P7mfCQRj8DqZKO3tX3a4HgeEZo3NIlopa954nTgILLNDpdi3Arf9oLHgKyiSLZ247MWaJkCYOH9raw6tCL1VlzNUcklPjJlEq&X-Amz-Signature=98eca5e23e9dc8b32a7b373b10971e7e9d7a08223999c3a992c7610ead285fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
