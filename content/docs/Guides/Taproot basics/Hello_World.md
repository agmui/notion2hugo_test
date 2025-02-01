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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42HQL2B%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcfQ6rjf2ymH0M2lwzeTNHustwrKmLxD5E4SK8a0bsAAiA8QORzX%2Ff662BiXKTS9mGMzVnBoLGyJzrVGoEVEcxR7iqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMteZliwZrXWsGButzKtwDkdPgmZNJBN58EQ6j3xYdQfpCORbOWHO6rnwQ6KfO6c3fju7rUoBPvHpaXlIBIww%2Bz9f3MLjjjy%2FV8xfUhqsLuTh9ztmtBcBOlyAU5R56lSoZMblyMwlspky9D0nFCqt8wYcA6jJplS4xghwjYNvW8uEBazT2bOCQabJJBDATecS%2FKZ7tzuThcEnkOJSFQdb4xLvlCM1VIfJzugGsrTo4RaA4qccI4k026QypY4u%2Bo0szbDvcPVCN0XnyOAHmJYztI2VhkI%2BEMs6MQc%2FHgyvxTQ0wgVe4Aw2TpIyGOwjy1TKSni5BFpo6HL6%2BcYxKImvyBzyrn90LA6%2F1w%2F2VOZnLmpBHvbjaCML4Lr%2BEyFg4%2F1FoM2Rgy%2F4znS3r%2B4vFYMGtW6JyMrzN5TdnEH1pNtjXerLTmIftb3x9%2B8YUa3il2BHAzkkf6UxYgBmgHNVz2pXeCw1cd2lnrEIgzsnHkMX5d5LER2MQ0v4HrJg9frbTo4%2BiNyG028Xf%2BF4%2BdwKsYCvAtpm0Wsgan7ip022kLeP29T4QqXkNUv1HutMr6rBUQWqcNUgl8x6iku6pWc0wVdDM24Iy5Dk9IW8qqnOlbAiFaycxfFs0%2FL5dHVBWVrWyNBtDmw4dcAzK4U7mshwwk6b3vAY6pgHeLr5rw9fjSF9ufSGqeA5PLyuTMIvuuAJiaUCzVKP8G%2BJZ7M6DpX86VVw9Au7zFJmQIBTH9FhpUx3LVrwfQyFRJX0u54dzgroJ9J4P2OZcinhYQCaMDTTP30KYcWanSPyYhWHZKxKNd0Qw9rxhw3cGKAYka4zlDNveJQYF6HMpr7sqLhBVuRYtUcu%2FzqrFhAz%2Bd8HTGfOPbpwD59XVY1e05q%2B%2F9rUq&X-Amz-Signature=1acd1d3c34bf3a80c89bb390f51f21b3fb990c57efce4bbdd07734f0e13133ae&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T42HQL2B%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T090352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFcfQ6rjf2ymH0M2lwzeTNHustwrKmLxD5E4SK8a0bsAAiA8QORzX%2Ff662BiXKTS9mGMzVnBoLGyJzrVGoEVEcxR7iqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMteZliwZrXWsGButzKtwDkdPgmZNJBN58EQ6j3xYdQfpCORbOWHO6rnwQ6KfO6c3fju7rUoBPvHpaXlIBIww%2Bz9f3MLjjjy%2FV8xfUhqsLuTh9ztmtBcBOlyAU5R56lSoZMblyMwlspky9D0nFCqt8wYcA6jJplS4xghwjYNvW8uEBazT2bOCQabJJBDATecS%2FKZ7tzuThcEnkOJSFQdb4xLvlCM1VIfJzugGsrTo4RaA4qccI4k026QypY4u%2Bo0szbDvcPVCN0XnyOAHmJYztI2VhkI%2BEMs6MQc%2FHgyvxTQ0wgVe4Aw2TpIyGOwjy1TKSni5BFpo6HL6%2BcYxKImvyBzyrn90LA6%2F1w%2F2VOZnLmpBHvbjaCML4Lr%2BEyFg4%2F1FoM2Rgy%2F4znS3r%2B4vFYMGtW6JyMrzN5TdnEH1pNtjXerLTmIftb3x9%2B8YUa3il2BHAzkkf6UxYgBmgHNVz2pXeCw1cd2lnrEIgzsnHkMX5d5LER2MQ0v4HrJg9frbTo4%2BiNyG028Xf%2BF4%2BdwKsYCvAtpm0Wsgan7ip022kLeP29T4QqXkNUv1HutMr6rBUQWqcNUgl8x6iku6pWc0wVdDM24Iy5Dk9IW8qqnOlbAiFaycxfFs0%2FL5dHVBWVrWyNBtDmw4dcAzK4U7mshwwk6b3vAY6pgHeLr5rw9fjSF9ufSGqeA5PLyuTMIvuuAJiaUCzVKP8G%2BJZ7M6DpX86VVw9Au7zFJmQIBTH9FhpUx3LVrwfQyFRJX0u54dzgroJ9J4P2OZcinhYQCaMDTTP30KYcWanSPyYhWHZKxKNd0Qw9rxhw3cGKAYka4zlDNveJQYF6HMpr7sqLhBVuRYtUcu%2FzqrFhAz%2Bd8HTGfOPbpwD59XVY1e05q%2B%2F9rUq&X-Amz-Signature=b43b66471a7608a07cb97cb478876e8fd8291e5f200ebe576908452852cd495e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
