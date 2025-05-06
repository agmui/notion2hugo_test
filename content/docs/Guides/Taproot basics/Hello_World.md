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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466235UNFS5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvDl0WnyYGuCxKShgW70hrzdaivSdOZW1WGe1zXhYiyAiEAvzSB2qsHfUZ1xkxX%2FWftN9h81SahqE8v%2FWghGv32k3Uq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFjx2IP8xyhwRBBqrCrcAzfr2gyaIIRRpkYx%2FkYomXxLPDsxR%2FC0SUhc%2BrtyL95LsNK%2FVgx43ZB9duNsWRpbZGm9PGMToj8B2yUEq0yEk0fC%2BhjDYj8WwFmqxJxrkmYj54e1exXoZqJC2F6w1DVW1cTnj3IwxVfGbBwy9AxArlIA69ugC05qNUemoi1BhCnwyBogj5fhJEPQVHdDyLO4RwwnXH6y1Acr6ItzG94IYYQayjK186ETjE0S4iMFcqY61PE35IMrgtnres9pN52ZdclSwi4YdmUU2ALok5gNnwdWREMxKF62IMwirvNa6GSnuh13pMwL5cLfM%2FiAmEtKIzstwziwRBRiG%2B9rFmjEeJx6bc8EJLK5JvSBHQ6rGtmTUwRdyWeQ747FqenpvJSuPwIM6I6w3Ha67iqSEeV1rQViJFqiiTD7YAJBIkax%2BY5RwZpPjl0iBwIRvK%2FtYkh2CmUR09fHcBI8CV1luROeAT3X2%2FEzZWSfkHUt3%2BH%2FAIP4j9zywutu33LRuriBaOSIBZWW7SKjmlW6ec3Isml0moWWmiujFg3nnExkqkFOzo7rlkPoK03723mkcCZEo%2F7Z1Xun9eZTqjMkbSFHkNvIwFBxlJscfjCBz0rAkWuzP85RcVkX7fcIDFsTWhXqMMD%2B5cAGOqUBpN%2BUxKxmViWrEBqb1QTETbyozDlccn6ttkRu4ROuJ5L8fIYBKdmLHpd6x1CkBlqXgpxSu3Z2zhpF0VT6hCylIHLZoGvLJs2yaa2JAKfMZzwPYqbutiWXfoC6tkFi0HMUmBxzhHsai5TsY3I6tRqyc08nKq%2B0yQCZ%2FwwdSppMqe8Ra0nbGdpLC%2F0E6KNK2ZosAtXTDa0fdq%2B7by2IbZVTTHGdlR4w&X-Amz-Signature=0d4b2c127cf12d962d5716cdbe6dcfe7aadc441b92bd809b8b650de06e6efb06&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466235UNFS5%2F20250506%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250506T041116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGvDl0WnyYGuCxKShgW70hrzdaivSdOZW1WGe1zXhYiyAiEAvzSB2qsHfUZ1xkxX%2FWftN9h81SahqE8v%2FWghGv32k3Uq%2FwMIPBAAGgw2Mzc0MjMxODM4MDUiDFjx2IP8xyhwRBBqrCrcAzfr2gyaIIRRpkYx%2FkYomXxLPDsxR%2FC0SUhc%2BrtyL95LsNK%2FVgx43ZB9duNsWRpbZGm9PGMToj8B2yUEq0yEk0fC%2BhjDYj8WwFmqxJxrkmYj54e1exXoZqJC2F6w1DVW1cTnj3IwxVfGbBwy9AxArlIA69ugC05qNUemoi1BhCnwyBogj5fhJEPQVHdDyLO4RwwnXH6y1Acr6ItzG94IYYQayjK186ETjE0S4iMFcqY61PE35IMrgtnres9pN52ZdclSwi4YdmUU2ALok5gNnwdWREMxKF62IMwirvNa6GSnuh13pMwL5cLfM%2FiAmEtKIzstwziwRBRiG%2B9rFmjEeJx6bc8EJLK5JvSBHQ6rGtmTUwRdyWeQ747FqenpvJSuPwIM6I6w3Ha67iqSEeV1rQViJFqiiTD7YAJBIkax%2BY5RwZpPjl0iBwIRvK%2FtYkh2CmUR09fHcBI8CV1luROeAT3X2%2FEzZWSfkHUt3%2BH%2FAIP4j9zywutu33LRuriBaOSIBZWW7SKjmlW6ec3Isml0moWWmiujFg3nnExkqkFOzo7rlkPoK03723mkcCZEo%2F7Z1Xun9eZTqjMkbSFHkNvIwFBxlJscfjCBz0rAkWuzP85RcVkX7fcIDFsTWhXqMMD%2B5cAGOqUBpN%2BUxKxmViWrEBqb1QTETbyozDlccn6ttkRu4ROuJ5L8fIYBKdmLHpd6x1CkBlqXgpxSu3Z2zhpF0VT6hCylIHLZoGvLJs2yaa2JAKfMZzwPYqbutiWXfoC6tkFi0HMUmBxzhHsai5TsY3I6tRqyc08nKq%2B0yQCZ%2FwwdSppMqe8Ra0nbGdpLC%2F0E6KNK2ZosAtXTDa0fdq%2B7by2IbZVTTHGdlR4w&X-Amz-Signature=ea58aa21b460f107735eb1271057f1cefb77f4bd032108dbca437921cf82f1b9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
