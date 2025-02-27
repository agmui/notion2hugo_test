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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AT5K22%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCdeTbPS0LFSk47fdpviMAtKzBhTmWVsAIs63STHTUmAQIgHX9%2BSIdgHI91SinQuAFwqLWeyHTCKZAMcKY2LIcIfNgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKfzAHF%2BpzcyNlRrzircA4reLmGXSQe1W0hLTJ4kTvLmXPr3TCJBDCkMrM5wzNEKDELwBSFTaz25CFPYH42JkxKaz67g2tb3ht0jT0ZsoNNvkXkrGucMk5jsw0T4pzzxadHGZ7%2FAAxLFvWLqKQdJ3hwE1b3u4yjSQdSZEtGUgXalxtLV%2F7Gb0uw1zxJ6XflicwWJ%2FrWm4%2FpCif%2BUNeZCN7pn7X1zU%2FJ90z0%2BBxb8Oe8s%2BR8vXsJOZfJ4uwmU1ttysjX4Rt0blDV50L7btbaYCaf66M5TPGFhWl4zv3k7eyGgxBfBeR4Bn9v%2BI4qJdsXRGZhhq5Zfyrt5e9xuDDNlmVn0RfczWTsmiq4N0uuuiSvzBb489GKU0Pq5kKmy1TG2X2Xd9SDQNFLEZKdvm%2FIztRzSI6nyVX5KZ1wMDD6zIWA9G7CoVz2Kx2xRiR6gJRswq8tEeM4jzunqYiAnvc9H%2Bkf0sYAcMsMxrOCaLPvlCVUluHO%2F7eG75%2Fm84OLKobUnq11FszuceMt8%2FY77O7kyR3B%2Frl4d6hPa5aMKQfbWtVcT0Ki27SESmhv8P%2FSvGPPPzR%2FiDg2nSYxK%2BCWxx3zMUl1aFlWQyEc%2BQ7sjo0VBE340YursS3Ou3V6l7j%2BhfTtYz0HJRb2OJfohoYZdMLLY%2Fr0GOqUBx%2BhC%2BnRKMQ38ljEilvtNgVH%2FQcFtz5Dfp5r3TxkxVKBmP0QHT%2B0dMpIGfLyweQ0UPAaPW08%2BQ6siNofxJvdkocnKtQuPK0caSXt0huvMrsC3ZUEVwtdVOXZsbdtDBRrPdeDq13B6Cm0dWlSv0YVa%2FMuw5Mt2MUpv4k8XZe5AQ5ALWfz85uMIVaEC3Iwz%2FI2CzZOwquY6EF3bNqGiFttVGDQmhVZZ&X-Amz-Signature=fb6ec7169f4b6cf254d0725701cd2218a6ce8409718649df7546caed7273654a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y3AT5K22%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T003653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDAaCXVzLXdlc3QtMiJHMEUCIQCdeTbPS0LFSk47fdpviMAtKzBhTmWVsAIs63STHTUmAQIgHX9%2BSIdgHI91SinQuAFwqLWeyHTCKZAMcKY2LIcIfNgq%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDKfzAHF%2BpzcyNlRrzircA4reLmGXSQe1W0hLTJ4kTvLmXPr3TCJBDCkMrM5wzNEKDELwBSFTaz25CFPYH42JkxKaz67g2tb3ht0jT0ZsoNNvkXkrGucMk5jsw0T4pzzxadHGZ7%2FAAxLFvWLqKQdJ3hwE1b3u4yjSQdSZEtGUgXalxtLV%2F7Gb0uw1zxJ6XflicwWJ%2FrWm4%2FpCif%2BUNeZCN7pn7X1zU%2FJ90z0%2BBxb8Oe8s%2BR8vXsJOZfJ4uwmU1ttysjX4Rt0blDV50L7btbaYCaf66M5TPGFhWl4zv3k7eyGgxBfBeR4Bn9v%2BI4qJdsXRGZhhq5Zfyrt5e9xuDDNlmVn0RfczWTsmiq4N0uuuiSvzBb489GKU0Pq5kKmy1TG2X2Xd9SDQNFLEZKdvm%2FIztRzSI6nyVX5KZ1wMDD6zIWA9G7CoVz2Kx2xRiR6gJRswq8tEeM4jzunqYiAnvc9H%2Bkf0sYAcMsMxrOCaLPvlCVUluHO%2F7eG75%2Fm84OLKobUnq11FszuceMt8%2FY77O7kyR3B%2Frl4d6hPa5aMKQfbWtVcT0Ki27SESmhv8P%2FSvGPPPzR%2FiDg2nSYxK%2BCWxx3zMUl1aFlWQyEc%2BQ7sjo0VBE340YursS3Ou3V6l7j%2BhfTtYz0HJRb2OJfohoYZdMLLY%2Fr0GOqUBx%2BhC%2BnRKMQ38ljEilvtNgVH%2FQcFtz5Dfp5r3TxkxVKBmP0QHT%2B0dMpIGfLyweQ0UPAaPW08%2BQ6siNofxJvdkocnKtQuPK0caSXt0huvMrsC3ZUEVwtdVOXZsbdtDBRrPdeDq13B6Cm0dWlSv0YVa%2FMuw5Mt2MUpv4k8XZe5AQ5ALWfz85uMIVaEC3Iwz%2FI2CzZOwquY6EF3bNqGiFttVGDQmhVZZ&X-Amz-Signature=416f3617a4c9393ce484f71e59fee72b69fb64b475d6dd81c7710f3c1ce95f64&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
