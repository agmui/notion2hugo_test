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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOQBYNY%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzsvTS7hPAzXrlJBdTcKvKSssBd1ksfDSgettDge1K%2FAiEAnbrWPEhdc%2FVd33qvfBs71WNqY8rdK2rK5J9tAa%2FVcgQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYXLFNpWzv97exn5SrcA9qU8v%2FCMvvPHWdZBD5Z3LAGZmBnakzCS2V%2BmLmWmeyFeh2mESmSze%2BFjHQ41UKRwXsSgs8dea2Z%2B58Qedz7EQqGqpLKNVArAsHcQkgzyTg%2BqbqW05n4evzH1xDkoxfVILcOfPLjaffmfK9ZxuVPU8f0By0ljs%2BJ%2Fi1FfQouMPsoXadDVBDts79DSUISUOoH5H0r0vsslyJ6QdrqgFheGZGgVxF59Ya1%2BHTYjEKS93%2BKrYWGrYmJo0KHCEREbErSquRvJUzFPIBLroPfkx7K6Ktx5GTkomFRYGWLcVHA%2Bq1serkR57PbmbvXZqdLat6Pn19%2FFG1agoaoJqdhbHaJRbcQOgISKHaEvCGukz9NeUBDyi224LN%2F%2BFY0RpRGGpmipYCAkRxUynDFqMU1epqKUNUtX2KbnRgVvmNBYlsktWE3UQVhgVohkrbh9emuTutZCKXm3aguDKt56%2BIRo8B%2FL7XZXfU6HF4GdMn1RawAYXBe565s8gOmA%2FpeFGPH%2B9BzZjeZFaSnMtYP44yxoM3j9n6idGJFACyrfCNoC5i%2FXAj8Lb066kvgUuSLPdoMmmbMwD271pBVab0qeg2KXrtJR%2BxGnv%2BR9rJAWhd1g3HX%2BclE562tIn2oiG1V%2FnsUMLXFu8MGOqUBauwdR5prZ6QM%2BUvkBdYYDS5zI3u71rXHriyZv0MqI4OvAu0yaVefcEkCDz9cp%2B5bHcGwhU1%2F5wEMaCG%2B8at6nrLbDcXTMnvtmntQkKYkFWKiQ3SxTLi2cBKXmy1nF5C5gb4UP2FeXBJPqo5Kybo4HzBB5T5S4bUh%2Fhvd9ddel8Oq%2F%2BifUUzfp3S8AZ1MT4TnF5AaB8YcIhOZQwPivkbNnOyfpJaK&X-Amz-Signature=e8c0797d65c1899f96cfd2985de062519295478eb50401cf2f4409fe9028c5bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWOQBYNY%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T220859Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEzsvTS7hPAzXrlJBdTcKvKSssBd1ksfDSgettDge1K%2FAiEAnbrWPEhdc%2FVd33qvfBs71WNqY8rdK2rK5J9tAa%2FVcgQqiAQIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAYXLFNpWzv97exn5SrcA9qU8v%2FCMvvPHWdZBD5Z3LAGZmBnakzCS2V%2BmLmWmeyFeh2mESmSze%2BFjHQ41UKRwXsSgs8dea2Z%2B58Qedz7EQqGqpLKNVArAsHcQkgzyTg%2BqbqW05n4evzH1xDkoxfVILcOfPLjaffmfK9ZxuVPU8f0By0ljs%2BJ%2Fi1FfQouMPsoXadDVBDts79DSUISUOoH5H0r0vsslyJ6QdrqgFheGZGgVxF59Ya1%2BHTYjEKS93%2BKrYWGrYmJo0KHCEREbErSquRvJUzFPIBLroPfkx7K6Ktx5GTkomFRYGWLcVHA%2Bq1serkR57PbmbvXZqdLat6Pn19%2FFG1agoaoJqdhbHaJRbcQOgISKHaEvCGukz9NeUBDyi224LN%2F%2BFY0RpRGGpmipYCAkRxUynDFqMU1epqKUNUtX2KbnRgVvmNBYlsktWE3UQVhgVohkrbh9emuTutZCKXm3aguDKt56%2BIRo8B%2FL7XZXfU6HF4GdMn1RawAYXBe565s8gOmA%2FpeFGPH%2B9BzZjeZFaSnMtYP44yxoM3j9n6idGJFACyrfCNoC5i%2FXAj8Lb066kvgUuSLPdoMmmbMwD271pBVab0qeg2KXrtJR%2BxGnv%2BR9rJAWhd1g3HX%2BclE562tIn2oiG1V%2FnsUMLXFu8MGOqUBauwdR5prZ6QM%2BUvkBdYYDS5zI3u71rXHriyZv0MqI4OvAu0yaVefcEkCDz9cp%2B5bHcGwhU1%2F5wEMaCG%2B8at6nrLbDcXTMnvtmntQkKYkFWKiQ3SxTLi2cBKXmy1nF5C5gb4UP2FeXBJPqo5Kybo4HzBB5T5S4bUh%2Fhvd9ddel8Oq%2F%2BifUUzfp3S8AZ1MT4TnF5AaB8YcIhOZQwPivkbNnOyfpJaK&X-Amz-Signature=ada659c00c3e3746e33938b5893ff4a726194a8cb6b20c8ae46976c2e4039298&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
