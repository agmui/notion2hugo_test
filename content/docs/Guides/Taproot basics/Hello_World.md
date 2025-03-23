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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKKGYPPM%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCw9izvzGCxlxK1s6IWASqQkIrdAdRk4bf%2FiUakt5nwGAIgGbWJVDudsckVdyWq%2Bdlt9y4gXqCihyRn2iN1KaRy8%2FcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFX%2FvvSs9b9%2By0l%2FBSrcAwDYli8dsEkDP1NHZckw94TR1BHEUtX2Pfg7x3H%2BHmEPcWw7H5YAMbk5WqB5WIg1w3F7lNIvkZo2sAEBCkGaLGbpV0kbMdQ%2BDO6Lf6A5ZKMjafEVH5%2BBRc%2FdBwN4g4FcV9%2BhzS6s2sRcLO63NtVrB6VxXFF%2B4nYfIusmN9Y5kLu4Ri51m%2Fe2Cim8lSuVsbDRO1O6YcO1ZSTXPIbodxPTvvZnJuwavIsy1mQnsIcwlhgzVz8%2FvZ5bl%2BcTHRfiO0LTyApbSEgg%2BBQJ33F7AwATSxgEEybUaV2jJ53vfqWLaIrvKRKEFuGZaP3RHjMPhUVnX1bliH0cduwU5P%2B9cZvnDM6AW0paIsO7RfSiSqAIPf5%2BfdcCCgsvD4k%2BD9sCbvE0tGthy%2FxAZAjorSvAn%2FpUeK9hjB2kfpovi6D7Pwy7pnMS4wvpJUQcW0jioivh7KUAvWFOUiEbtuNnQRgcTWNSrT488eggkKTwdCd9nxgT4XB0plR9bh%2F%2BdcnlFCgBxJw6phGcy1ulG2gP1JhXRzqvKXaypoTnr7y6r2g%2FNre5uxuuaBXvHkVwILxqQxrcnUWbdoHCPobekupTjemH%2FlwavSIwQ9YZFJUstdUSF9QIoS%2FkHCqFziXMLVOdJJO9MK6jgL8GOqUBbKT0m%2BxEsJ%2BYAXYJiOWA8BNzC3YNEFMlTvZomICHMNXA%2BuSXL541S6bXdmP9lSqQG1At2WjFGp0kmyu0Wxu3rWH8laGw7KtbYWLUsIvjqQDJV4Z6hkSQPFBir6GpOKK4CxEX6OaZJxXkIvEm%2B%2FNIcWiCefs%2BoMW5YHhYpxjteJTDubRO8jlQetxnTWXrRGrHKT%2BC3Y8OD8vto7J%2FBlOu0scekjmu&X-Amz-Signature=10f3f3124bc53910ff8592a9d9f20566761d20d2135a66afb95b2ca1ce95bbae&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QKKGYPPM%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T140235Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCw9izvzGCxlxK1s6IWASqQkIrdAdRk4bf%2FiUakt5nwGAIgGbWJVDudsckVdyWq%2Bdlt9y4gXqCihyRn2iN1KaRy8%2FcqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFX%2FvvSs9b9%2By0l%2FBSrcAwDYli8dsEkDP1NHZckw94TR1BHEUtX2Pfg7x3H%2BHmEPcWw7H5YAMbk5WqB5WIg1w3F7lNIvkZo2sAEBCkGaLGbpV0kbMdQ%2BDO6Lf6A5ZKMjafEVH5%2BBRc%2FdBwN4g4FcV9%2BhzS6s2sRcLO63NtVrB6VxXFF%2B4nYfIusmN9Y5kLu4Ri51m%2Fe2Cim8lSuVsbDRO1O6YcO1ZSTXPIbodxPTvvZnJuwavIsy1mQnsIcwlhgzVz8%2FvZ5bl%2BcTHRfiO0LTyApbSEgg%2BBQJ33F7AwATSxgEEybUaV2jJ53vfqWLaIrvKRKEFuGZaP3RHjMPhUVnX1bliH0cduwU5P%2B9cZvnDM6AW0paIsO7RfSiSqAIPf5%2BfdcCCgsvD4k%2BD9sCbvE0tGthy%2FxAZAjorSvAn%2FpUeK9hjB2kfpovi6D7Pwy7pnMS4wvpJUQcW0jioivh7KUAvWFOUiEbtuNnQRgcTWNSrT488eggkKTwdCd9nxgT4XB0plR9bh%2F%2BdcnlFCgBxJw6phGcy1ulG2gP1JhXRzqvKXaypoTnr7y6r2g%2FNre5uxuuaBXvHkVwILxqQxrcnUWbdoHCPobekupTjemH%2FlwavSIwQ9YZFJUstdUSF9QIoS%2FkHCqFziXMLVOdJJO9MK6jgL8GOqUBbKT0m%2BxEsJ%2BYAXYJiOWA8BNzC3YNEFMlTvZomICHMNXA%2BuSXL541S6bXdmP9lSqQG1At2WjFGp0kmyu0Wxu3rWH8laGw7KtbYWLUsIvjqQDJV4Z6hkSQPFBir6GpOKK4CxEX6OaZJxXkIvEm%2B%2FNIcWiCefs%2BoMW5YHhYpxjteJTDubRO8jlQetxnTWXrRGrHKT%2BC3Y8OD8vto7J%2FBlOu0scekjmu&X-Amz-Signature=45800f264df50d3c68d3182c318e321960c6cc277ddbfea7420b339c74cb3b86&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
