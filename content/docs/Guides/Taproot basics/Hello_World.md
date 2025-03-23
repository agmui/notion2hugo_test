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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZNDRBUT%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCctG3clRApKeOFIP3vRx1Tfak79QOGoFv6Az90wqWN3QIgXhji2YAsfSkyFx%2FUsu0Z56xOwKV96zIeRUVb1ScMkSYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDO%2BhX7glmKFfreZircAy2%2BX5l05JFRTfpkCpfQlytUhfSVwUWz5CpkQqZbKnuSi5SXSSL0xNoXP4RKl84tRwpfL8jIS0I0ynyGUIsuTIn04FHqbH9UP7gOAdVwOS22TGQVuWEU6vLhF4li8fky8kK%2Bmuf6k1rNcGIKX%2FaupUKFpp7A7UH%2FCynC1If9Wbb7WHi9CxsYDBel9FikD30Slm6XGcFnyBlSw5ejTDZS%2FQj2nEJZstzlaMgnIgYWQL%2FEaEeYT7nX9OWrLNEA%2BdYP7U%2FXHiu11GvGsKXwy0%2FD42YJx9tNK3zbKIqcQk8KejrmtrwYRLrm1cpAAjLKj1wVM5qvfB1mmNWU%2FKM7C9eKxRmXJfOYL%2BIU04kM%2FFw382SgbvbBn3o7vZ9FESyu9itFb8ZmJu1YK%2FOKzPixQ0AbQWif3ouGd3xCYVKycpInMFQt8JwfW0xR4q1PC%2B8O9dvrE9hZ8w8ZCOTSmCEcjf3vxGRldou4JE2fc5zp2NejxGodU30vUY7ldTsaX4V4H4PBrhprzym1cJzTH92TqG%2BUTmglh0kekG9P5czdGJtH4Q8oVxmbiOufNBHFtnHm%2FUPM7BDbNPLmd%2Br9dxF0mXSCXIw003A%2By3%2FLoFyFKT3tpHcL69l6nfzV%2BMNKxoAxMKPLgb8GOqUBAsOK3P3tdwMpCxBCMUGipCzBrWN5aEGncNrCSbeBBMyM%2BPZPb1kkU0ammxZZM71Z02CwbgROfsKjWkbLqNWBp39HltVHhJ%2BtY5Vi0LM9Vj%2Bl3hP5hKPIoNVw31%2FQg2MkaGtdNSz4BW6kvZmgNRntIcbrAMNIL00yMclxycqtVXoGGn7dLCi1QjJMMBcmBHqTs%2FN4UmZsfA54Mr%2FFH83KTP1ALPg6&X-Amz-Signature=c756eeac73546e58b1bd1cd6a4b3cd00cd5fd843b62670ae2366a01851c56b5f&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZNDRBUT%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T230057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCctG3clRApKeOFIP3vRx1Tfak79QOGoFv6Az90wqWN3QIgXhji2YAsfSkyFx%2FUsu0Z56xOwKV96zIeRUVb1ScMkSYqiAQI3f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDO%2BhX7glmKFfreZircAy2%2BX5l05JFRTfpkCpfQlytUhfSVwUWz5CpkQqZbKnuSi5SXSSL0xNoXP4RKl84tRwpfL8jIS0I0ynyGUIsuTIn04FHqbH9UP7gOAdVwOS22TGQVuWEU6vLhF4li8fky8kK%2Bmuf6k1rNcGIKX%2FaupUKFpp7A7UH%2FCynC1If9Wbb7WHi9CxsYDBel9FikD30Slm6XGcFnyBlSw5ejTDZS%2FQj2nEJZstzlaMgnIgYWQL%2FEaEeYT7nX9OWrLNEA%2BdYP7U%2FXHiu11GvGsKXwy0%2FD42YJx9tNK3zbKIqcQk8KejrmtrwYRLrm1cpAAjLKj1wVM5qvfB1mmNWU%2FKM7C9eKxRmXJfOYL%2BIU04kM%2FFw382SgbvbBn3o7vZ9FESyu9itFb8ZmJu1YK%2FOKzPixQ0AbQWif3ouGd3xCYVKycpInMFQt8JwfW0xR4q1PC%2B8O9dvrE9hZ8w8ZCOTSmCEcjf3vxGRldou4JE2fc5zp2NejxGodU30vUY7ldTsaX4V4H4PBrhprzym1cJzTH92TqG%2BUTmglh0kekG9P5czdGJtH4Q8oVxmbiOufNBHFtnHm%2FUPM7BDbNPLmd%2Br9dxF0mXSCXIw003A%2By3%2FLoFyFKT3tpHcL69l6nfzV%2BMNKxoAxMKPLgb8GOqUBAsOK3P3tdwMpCxBCMUGipCzBrWN5aEGncNrCSbeBBMyM%2BPZPb1kkU0ammxZZM71Z02CwbgROfsKjWkbLqNWBp39HltVHhJ%2BtY5Vi0LM9Vj%2Bl3hP5hKPIoNVw31%2FQg2MkaGtdNSz4BW6kvZmgNRntIcbrAMNIL00yMclxycqtVXoGGn7dLCi1QjJMMBcmBHqTs%2FN4UmZsfA54Mr%2FFH83KTP1ALPg6&X-Amz-Signature=fe16479c5839c9382f7812b2cfb6ed7979edc467c8566fb422c39bdb9f25aa70&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
