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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ULSB674%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6eO%2BJThlZG1bGAfeFlnYNKUAgH1EZTSLyA35x%2FjXSHAIhAPp4Eu59PCeJkZFKTxSbldSerG%2B7EAxtYUuKt4lZKHyBKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJFUSWlDRRper0jwAq3APPKQh%2FFua6pOAfzy2qXxVkEFQcA%2FlWsjF7XeqnX7CQjfHORgDBEFcGCNPy2MEIyjxCV%2B8BEdtoC4%2BciXpvkkZUKqkQUKCnGrmmldAPs%2BE5rLuNnA52hE92YQN%2F5zxMv9L0bgNKNFYVVZnG25pMRMd7d38rbp2hXyIyM3FWvRWbMRHUHyprPojT2AI%2BdIt%2FbHdyu2z9hYaORlzuXHMz6Kc0nzT5XU1kT0WQui%2BqUUBnavHPaChDkAlW6oXjR8SkXlYU8gseFzgMatOpoLCBxVpdPosJwGa%2BLeBnq84HnVt02Ms7HRs5iILP8%2Bpg7d1rVvuyias0n8zm3y7%2B65peOooKpO4M32kKU4IzHlBRYFnIopgoBa%2FoaN0W7x6a6rm6uEuYo14O49pG8Kfyh9pSrNKVtzF9qpUSpiFNE7ifx3Nljh9KiVbjVIngGQ4vXyPn8TGaIoSz0uurdE9%2Bh7KYD3t1AHcuGg0jUYobE5Ff9aL68KsG6dWtpwkaDfw2eEfH0rnodcA3Kfx1djuEi96Lg8AkvM33QQIRI3Iqw6vgJtIvrEN8lbJ7sY7eYVItQgapOP13e%2Bf1ZUn2b7lBlsF5G4iIn3pMSKGkdauSDMYUGmtU2AGdcK5%2BBIraJPKWLTCRoqjEBjqkAQyXyx4EdAVFabPtlRurPg3yJx0kGBIGgRx58r2qy3bOxf3KfaiBdPePR%2Fs1yGn9r34TkvR7QSv%2FK0lHop2Vm9Dstyri9Seq%2FDx0saU67i3QifDZWvVoTG3c%2Fr1%2FXlWeJhf4J8QTEbq%2FTY0%2BQiU1ZDGemrXR8WS7umY6%2B9YHXVCq%2B0c8YGtfzrkoO0ETnxet%2BTp1P8xxkmzlZ5ZJ4SWi7RJ7Dyz%2B&X-Amz-Signature=2e3838ac10b404c0c8e0d4737f0cfcbbcaa068ccaf6aa13faf84347858471169&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ULSB674%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T150954Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC6eO%2BJThlZG1bGAfeFlnYNKUAgH1EZTSLyA35x%2FjXSHAIhAPp4Eu59PCeJkZFKTxSbldSerG%2B7EAxtYUuKt4lZKHyBKogECL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxJFUSWlDRRper0jwAq3APPKQh%2FFua6pOAfzy2qXxVkEFQcA%2FlWsjF7XeqnX7CQjfHORgDBEFcGCNPy2MEIyjxCV%2B8BEdtoC4%2BciXpvkkZUKqkQUKCnGrmmldAPs%2BE5rLuNnA52hE92YQN%2F5zxMv9L0bgNKNFYVVZnG25pMRMd7d38rbp2hXyIyM3FWvRWbMRHUHyprPojT2AI%2BdIt%2FbHdyu2z9hYaORlzuXHMz6Kc0nzT5XU1kT0WQui%2BqUUBnavHPaChDkAlW6oXjR8SkXlYU8gseFzgMatOpoLCBxVpdPosJwGa%2BLeBnq84HnVt02Ms7HRs5iILP8%2Bpg7d1rVvuyias0n8zm3y7%2B65peOooKpO4M32kKU4IzHlBRYFnIopgoBa%2FoaN0W7x6a6rm6uEuYo14O49pG8Kfyh9pSrNKVtzF9qpUSpiFNE7ifx3Nljh9KiVbjVIngGQ4vXyPn8TGaIoSz0uurdE9%2Bh7KYD3t1AHcuGg0jUYobE5Ff9aL68KsG6dWtpwkaDfw2eEfH0rnodcA3Kfx1djuEi96Lg8AkvM33QQIRI3Iqw6vgJtIvrEN8lbJ7sY7eYVItQgapOP13e%2Bf1ZUn2b7lBlsF5G4iIn3pMSKGkdauSDMYUGmtU2AGdcK5%2BBIraJPKWLTCRoqjEBjqkAQyXyx4EdAVFabPtlRurPg3yJx0kGBIGgRx58r2qy3bOxf3KfaiBdPePR%2Fs1yGn9r34TkvR7QSv%2FK0lHop2Vm9Dstyri9Seq%2FDx0saU67i3QifDZWvVoTG3c%2Fr1%2FXlWeJhf4J8QTEbq%2FTY0%2BQiU1ZDGemrXR8WS7umY6%2B9YHXVCq%2B0c8YGtfzrkoO0ETnxet%2BTp1P8xxkmzlZ5ZJ4SWi7RJ7Dyz%2B&X-Amz-Signature=90681735a29d9d48afe34cfad3d925c0f374a3b033fc7ed3a19bf2024fd2873d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
