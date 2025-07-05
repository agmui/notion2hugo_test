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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSANK2YE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGcvuaqELGmDMvW0XIMnF4Mhfg%2Fh1m%2FRAo9NjCZj8jYXAiBgHeTWfZwp7KNd6oqhlMrwZoWxzSz6S6nNiVvaxnWpUSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2FOQWthvZhC5%2FNZzeKtwDTsFJ0ZXn81nDAlxxqP8GD8gJykXImzOSEa7EmZl%2FPDT4cT13M6RD8PQYNMtcK%2FJnKfs0lrzJQ7iKOjT3pb4HUtyE5x7QW8Yx1KZoursBqkhwT8uqOm6uerNjBQ%2BofOUS15%2FuR10JG8ZJXi4tjl%2FpRNAlXSIybOQijaH5xgU%2BYHHWDzDYmuWS3NmgJ8gCjen8cdojUzLkBGsyOkLi3lC%2FW%2F40QpHxoiTxp%2F%2FfMGhS5kwS2uOA6nuT9DmAjsjaeX91cvlrcE9%2BrTlz5LAy0cJzyHw9wAsupqVue2Bbskv8HtysvRsFX7sZhfiMlSoSYJc8lQbIKxB85dastWwgsbRbRJ83swB7Hc1f6UwveGdcZ4ukhqUCOrTM1F0M3QxUqtZfyScA4RNUTkgNU5r9BEjr37Ci5LJt3T%2FH%2B7nNOwChHkmWcEaWrHOlrLvbVK2Wmz9OIjKvzxDIVTg0RhHPojLz8aBNFTE67MLe%2FeY7qNZAheXiVwUw%2B%2FzDUJQbR2DEIaZWjiNZnKUElAanONw527GgMwiobuZZ4PaRtTwU40mp%2F2vnw79FozbXXOfgK5hT9b9%2BE%2FWD%2BE3j6CW9EBNuJqqlLXv8Qmwi5xQWPKkVh0Z8kYgaSfk22xGtNuj8fcowwoiiwwY6pgFvX0UmbuYjPtmE9HxIZqUBYOg%2BA10XtrEuKlrQ3WPYd8q%2BWcGLfdngkFKCLohyAqb8beWy1nN%2FuGReWa%2FGI6iZON%2BKbAKorsawD%2FHA4m2%2B%2FR2rdUT6Vn75JxLC72hT7ffyZNUPz%2Bgyxm7R3ZLz6zjuKqIzUcHXY55ovVpHL1oQHyG3LlVMHbb%2BQsuAkuYJ4B27QdZPmseFKToKU%2BDW3lvzOg8k99NX&X-Amz-Signature=f8c5b87f273bbc7de858adf0ad6c9f2b42ac2e7458e2ca669fc83a526633630a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSANK2YE%2F20250705%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250705T070806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDIaCXVzLXdlc3QtMiJGMEQCIGcvuaqELGmDMvW0XIMnF4Mhfg%2Fh1m%2FRAo9NjCZj8jYXAiBgHeTWfZwp7KNd6oqhlMrwZoWxzSz6S6nNiVvaxnWpUSr%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIM%2FOQWthvZhC5%2FNZzeKtwDTsFJ0ZXn81nDAlxxqP8GD8gJykXImzOSEa7EmZl%2FPDT4cT13M6RD8PQYNMtcK%2FJnKfs0lrzJQ7iKOjT3pb4HUtyE5x7QW8Yx1KZoursBqkhwT8uqOm6uerNjBQ%2BofOUS15%2FuR10JG8ZJXi4tjl%2FpRNAlXSIybOQijaH5xgU%2BYHHWDzDYmuWS3NmgJ8gCjen8cdojUzLkBGsyOkLi3lC%2FW%2F40QpHxoiTxp%2F%2FfMGhS5kwS2uOA6nuT9DmAjsjaeX91cvlrcE9%2BrTlz5LAy0cJzyHw9wAsupqVue2Bbskv8HtysvRsFX7sZhfiMlSoSYJc8lQbIKxB85dastWwgsbRbRJ83swB7Hc1f6UwveGdcZ4ukhqUCOrTM1F0M3QxUqtZfyScA4RNUTkgNU5r9BEjr37Ci5LJt3T%2FH%2B7nNOwChHkmWcEaWrHOlrLvbVK2Wmz9OIjKvzxDIVTg0RhHPojLz8aBNFTE67MLe%2FeY7qNZAheXiVwUw%2B%2FzDUJQbR2DEIaZWjiNZnKUElAanONw527GgMwiobuZZ4PaRtTwU40mp%2F2vnw79FozbXXOfgK5hT9b9%2BE%2FWD%2BE3j6CW9EBNuJqqlLXv8Qmwi5xQWPKkVh0Z8kYgaSfk22xGtNuj8fcowwoiiwwY6pgFvX0UmbuYjPtmE9HxIZqUBYOg%2BA10XtrEuKlrQ3WPYd8q%2BWcGLfdngkFKCLohyAqb8beWy1nN%2FuGReWa%2FGI6iZON%2BKbAKorsawD%2FHA4m2%2B%2FR2rdUT6Vn75JxLC72hT7ffyZNUPz%2Bgyxm7R3ZLz6zjuKqIzUcHXY55ovVpHL1oQHyG3LlVMHbb%2BQsuAkuYJ4B27QdZPmseFKToKU%2BDW3lvzOg8k99NX&X-Amz-Signature=d18f161b60af3b66a090b7af4b2498062e70c9dd025e652fcf67274dd7acd551&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
