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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2UL7QSZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCjwy%2Bx9hZ2kjQk4MsoqII5tcjUGs3mlkNvt0QkNq0I7QIgBXqVPn1mC31GZXAqU2Mahh0UyjeGIVKYx359xqH8Z4oqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYUBYQHAORhh1mBmyrcA34wPFDBpIQHVX8BqSdkOR8FQQvbvReVrR8n7rOQXhMIzMtPEBzoP7Y6khwlW0B%2FK61jX1qXUp5wiPsQrAFhu4RrbBEuA2MOuKDXx90VfA1Pn3r6n5x9KfPlbnLw%2BS4SbqpR0vHUfj%2ByxC99cR0MvnG4hAVb%2FmwKzIeNnK7%2FKWSBqVhOlQ60hwRBHhn5K6qvmIpnxf8IJuRq2sXAIIoBrkoWtDUHsNKm%2FqOau5w%2Bf7xtkO9OnIDm7x4Zs0HS%2FC9dXArWJOiwBIdzqcQgdT768JAWAO5iW5zMV2Y20o2R8V8Rspjk19iTkcHPL1DDkTX0tNkeTcC7tes2fZWmdEj92HkN4%2FN9CeGq8%2BtkvTfXz3L8NY5AyFty0T8sW%2B%2BoNkg0Kflzs4i%2FvgFQBiYjo8Evcz%2FGVD7SkqqYfSjnxmd1%2BogdhlEnhdNCYfdJvN05Cb1YDp7C9%2Bwn4lnI7Bj1PjYkQYTp2iiX%2F0y5RNyV0mLfV%2BLo%2FlVRQDtoD7fFoIx56s9m%2FHslQWVHubqVg2NuEd2fzAkwMQSxT4QhzWNxW6nTzCY4qaeletjulKBhNcprlP5Zc5mJUUFiQCbDdGQ2pyGkcnVjFEpnxdE3qNAPbzfjLf7afcDbx4YlZ17bwfklMIPwo78GOqUBdOpEEI3dwILesgpIBC8Nis%2ByEE7Uv4h1Ndm6WaAwAAueHbdtgR5E3%2B4rqTjJ9xWlW1xULv4s82y%2B0N3F0xcjo0HmNeQ3QGJL60Z7HsNB0pY%2F93DQrmiBWXrJM3CGhAoOHBMiWc4OMjjPHIVOK5b3h45IFjxUHlYMF5Sl731ByZcUvIQFBNSM%2Fys4%2B00aRzwFhcLIOOMvzF%2FZ%2FRyC%2Fp58zwQUbvbT&X-Amz-Signature=733bcaf2e55e12b337071fb4cd7a84f3146f98c86080ebaddd5143c9abc5f43a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2UL7QSZ%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T100726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECAaCXVzLXdlc3QtMiJHMEUCIQCjwy%2Bx9hZ2kjQk4MsoqII5tcjUGs3mlkNvt0QkNq0I7QIgBXqVPn1mC31GZXAqU2Mahh0UyjeGIVKYx359xqH8Z4oqiAQIif%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIYUBYQHAORhh1mBmyrcA34wPFDBpIQHVX8BqSdkOR8FQQvbvReVrR8n7rOQXhMIzMtPEBzoP7Y6khwlW0B%2FK61jX1qXUp5wiPsQrAFhu4RrbBEuA2MOuKDXx90VfA1Pn3r6n5x9KfPlbnLw%2BS4SbqpR0vHUfj%2ByxC99cR0MvnG4hAVb%2FmwKzIeNnK7%2FKWSBqVhOlQ60hwRBHhn5K6qvmIpnxf8IJuRq2sXAIIoBrkoWtDUHsNKm%2FqOau5w%2Bf7xtkO9OnIDm7x4Zs0HS%2FC9dXArWJOiwBIdzqcQgdT768JAWAO5iW5zMV2Y20o2R8V8Rspjk19iTkcHPL1DDkTX0tNkeTcC7tes2fZWmdEj92HkN4%2FN9CeGq8%2BtkvTfXz3L8NY5AyFty0T8sW%2B%2BoNkg0Kflzs4i%2FvgFQBiYjo8Evcz%2FGVD7SkqqYfSjnxmd1%2BogdhlEnhdNCYfdJvN05Cb1YDp7C9%2Bwn4lnI7Bj1PjYkQYTp2iiX%2F0y5RNyV0mLfV%2BLo%2FlVRQDtoD7fFoIx56s9m%2FHslQWVHubqVg2NuEd2fzAkwMQSxT4QhzWNxW6nTzCY4qaeletjulKBhNcprlP5Zc5mJUUFiQCbDdGQ2pyGkcnVjFEpnxdE3qNAPbzfjLf7afcDbx4YlZ17bwfklMIPwo78GOqUBdOpEEI3dwILesgpIBC8Nis%2ByEE7Uv4h1Ndm6WaAwAAueHbdtgR5E3%2B4rqTjJ9xWlW1xULv4s82y%2B0N3F0xcjo0HmNeQ3QGJL60Z7HsNB0pY%2F93DQrmiBWXrJM3CGhAoOHBMiWc4OMjjPHIVOK5b3h45IFjxUHlYMF5Sl731ByZcUvIQFBNSM%2Fys4%2B00aRzwFhcLIOOMvzF%2FZ%2FRyC%2Fp58zwQUbvbT&X-Amz-Signature=ae8890d5349976a739bac213a83b56ddaf03646ddc0a8bbd8c4c1a49dce18d44&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
