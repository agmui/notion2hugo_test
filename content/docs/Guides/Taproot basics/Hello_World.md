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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTKAN5XD%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHjefM8b5MIwfSF5SiXT%2F7sQ8LIZQnp4ogBhQlLioigNAiArGcboQMc%2FNjZLIpyMikxRORkKJ7LwXb0BKGMUZiKWEyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9eg%2BQDaNtaWT3tmNKtwDstKtwTwPcfwa9pPR0afNgXsULjoY%2B3mAi33euvcmgde19tv8YGNQJR4oPiEy7IogTwI8CR4XAovzyiq0h%2BS%2F0YVbHIUIGhg2jqsp2FGoESbyx0r7GYcoVlzmzoZ6HL7UM6RARJVlEnL3vm0JeMlcauMdMc41zh1npR%2FjngpQzkZglzzcBg9C6tM9eH4DAs6u%2FN1lVNG67kp2nkS6LnJzmW3qb7KtbUvzLCP9LJUqf6pyKhQBtqGQBcKFRdTZ5m0MA5xgYi2GCkVS%2B8%2FxYw%2FEJBxuo1f2LfVDGbGxoMWlLt3sJZaS57Xtd98JlT9s72s4AbAA2T%2Fef2TvcFk63vZKN%2FDPTEW6BK%2FP2q1cxNEywaPAqHay4eszQ2o3dhM7Lozp9wGwrwVZWwdljc3mi2MVX2bfg4BEyIBSury%2BPvM50QWkw44xav2DewwwODZLyeIRYXfpoP0dhY3GavUwJRlcTE3jrdFjEkIp4Ulmm6eZ1hROGHQvgziQbsjsaUpxLsbwohRa7i7Vusm6MDW9fXS3ibs%2B%2F1eyEf9EbLmdfmi%2Bl0mVzAwtIELn6hNITFi57A3oRxdgeZWfKBm07vtiYqFdzFU3Pz%2Fke8QDXW5qU%2F0tBM%2FQ8Hdgk1twNvsqsIkwzuS%2F0wY6pgGV1h9smrAVapdDiOk9%2BIfUr4uaRq0qaE3JivnEaKPRNbD9c1TT6K2oulmWKatB7yYUWFPnam4wiLL1tIZVt9ChFsLNGpKU5fcmUyIvSWGeZIzkrknRkVLSNc9RHoRPZCJo3K5fFv%2FwrXJU4heEnBEv%2Br9j5jOhMMEONvFakAbpJdoQHInfSc2yLFh%2FsLnDKrhomiyS4DrdPYUhFiR1uG%2FkXp%2Fdu8EY&X-Amz-Signature=2f5ec6b342810a93e5f8737227c6907c07b7f8a775566b0a5a7964a5f7f94951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTKAN5XD%2F20260803%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260803T024805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECIaCXVzLXdlc3QtMiJGMEQCIHjefM8b5MIwfSF5SiXT%2F7sQ8LIZQnp4ogBhQlLioigNAiArGcboQMc%2FNjZLIpyMikxRORkKJ7LwXb0BKGMUZiKWEyqIBAjr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9eg%2BQDaNtaWT3tmNKtwDstKtwTwPcfwa9pPR0afNgXsULjoY%2B3mAi33euvcmgde19tv8YGNQJR4oPiEy7IogTwI8CR4XAovzyiq0h%2BS%2F0YVbHIUIGhg2jqsp2FGoESbyx0r7GYcoVlzmzoZ6HL7UM6RARJVlEnL3vm0JeMlcauMdMc41zh1npR%2FjngpQzkZglzzcBg9C6tM9eH4DAs6u%2FN1lVNG67kp2nkS6LnJzmW3qb7KtbUvzLCP9LJUqf6pyKhQBtqGQBcKFRdTZ5m0MA5xgYi2GCkVS%2B8%2FxYw%2FEJBxuo1f2LfVDGbGxoMWlLt3sJZaS57Xtd98JlT9s72s4AbAA2T%2Fef2TvcFk63vZKN%2FDPTEW6BK%2FP2q1cxNEywaPAqHay4eszQ2o3dhM7Lozp9wGwrwVZWwdljc3mi2MVX2bfg4BEyIBSury%2BPvM50QWkw44xav2DewwwODZLyeIRYXfpoP0dhY3GavUwJRlcTE3jrdFjEkIp4Ulmm6eZ1hROGHQvgziQbsjsaUpxLsbwohRa7i7Vusm6MDW9fXS3ibs%2B%2F1eyEf9EbLmdfmi%2Bl0mVzAwtIELn6hNITFi57A3oRxdgeZWfKBm07vtiYqFdzFU3Pz%2Fke8QDXW5qU%2F0tBM%2FQ8Hdgk1twNvsqsIkwzuS%2F0wY6pgGV1h9smrAVapdDiOk9%2BIfUr4uaRq0qaE3JivnEaKPRNbD9c1TT6K2oulmWKatB7yYUWFPnam4wiLL1tIZVt9ChFsLNGpKU5fcmUyIvSWGeZIzkrknRkVLSNc9RHoRPZCJo3K5fFv%2FwrXJU4heEnBEv%2Br9j5jOhMMEONvFakAbpJdoQHInfSc2yLFh%2FsLnDKrhomiyS4DrdPYUhFiR1uG%2FkXp%2Fdu8EY&X-Amz-Signature=16933bccd01c1115d208fafd9de310ac75c163207b0c37121a2e91cce2577e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
