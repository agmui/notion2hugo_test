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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LN45X3N%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJYvxNgW4%2FcyGSaWu5OSkoS2Q5qZDSoKCS%2Beoyl4EAPAIhAL%2Bi6QGN4PhY6bYmY2UGXpXuldhluNZLmOPSz60T1HY9KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnLGfJFESuNRULeu4q3ANVj5IYlMi5gQmgnFP%2FwObPNHzXg0T5GbIBmsnQcQ5o8dqDuMSMY1KEAnwsHhhqTAxOZXZjYsYHESoUZYMl79DDMOjj43V0EYL66Rk4MLjQXzxRUgGVSmoYR5k4VFB1r4iSOaIKkr2JICh6%2Bm8QM1Tg8BHAkTTO%2B4%2BJOITk33xrIqc9I%2B1ZnhFGOUME%2FGN0Oynv5YoA48OLI4UkUlLoqMoNSHoslM4nY8SGPW3m%2F2LKgGb%2F6wJhGReKW9%2FMMi%2F03fKmtHDmVTO%2FtBAyf5zBRN1mEcsLt%2B1onXukFq2YUK88%2B4PuIawP6MZ3OZ8gYkvn9Gbi87GZc9Aqt7z6K5dPyAyKAOgKZzbulLI1E00OhqszW3ldfQxx%2FUQMYN0Ui%2FXwWVZHj0Uv3DAfuO%2F%2FWLTcGK%2BzTZnfebEYMSbV0fokq30DyCHLqtTqdPCd2LugWoeXJKGZQrEDYeMapgkLh2bqYXlqJK6H%2BUh8LofThgqvDSgRh8qFcwHfLEoTjso9foEw6F3GUIfRxDGuNxArtT5oN1czDkBgUzKn1g707jVqNIqcDGJYqVCNWRw%2BUhexEYavICW1bdyYyG3RYTrnvcI%2BrrCkk8gdFgX3EZa43FIIQLysRPAh4K6PDfZXBrIRDTDjn57CBjqkAf6a%2BRmwzp3rgsyvFSSF3fxJplGITzjY%2BYq3RzuMxrAwa0WSX7%2FemGvDWVekSk6SqQZ0s0Gy9yZbX44lGkNXKDIovXXSiUHXgd2btY213Py1QPLcojh1Xml0upJ3QeAL5PODn05gzA6%2Bwmkdd4K7d9TcoG34jX722G4CUqb2VKAtYtgJL1MQBpkwboMHtSjDGVzNNzQjN7ytJbehOobZxW6ne2WT&X-Amz-Signature=0e8fe8f06456d7202749600293d3b51094b1af675294552781a34394a4d7a542&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LN45X3N%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T024018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJYvxNgW4%2FcyGSaWu5OSkoS2Q5qZDSoKCS%2Beoyl4EAPAIhAL%2Bi6QGN4PhY6bYmY2UGXpXuldhluNZLmOPSz60T1HY9KogECLP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxnLGfJFESuNRULeu4q3ANVj5IYlMi5gQmgnFP%2FwObPNHzXg0T5GbIBmsnQcQ5o8dqDuMSMY1KEAnwsHhhqTAxOZXZjYsYHESoUZYMl79DDMOjj43V0EYL66Rk4MLjQXzxRUgGVSmoYR5k4VFB1r4iSOaIKkr2JICh6%2Bm8QM1Tg8BHAkTTO%2B4%2BJOITk33xrIqc9I%2B1ZnhFGOUME%2FGN0Oynv5YoA48OLI4UkUlLoqMoNSHoslM4nY8SGPW3m%2F2LKgGb%2F6wJhGReKW9%2FMMi%2F03fKmtHDmVTO%2FtBAyf5zBRN1mEcsLt%2B1onXukFq2YUK88%2B4PuIawP6MZ3OZ8gYkvn9Gbi87GZc9Aqt7z6K5dPyAyKAOgKZzbulLI1E00OhqszW3ldfQxx%2FUQMYN0Ui%2FXwWVZHj0Uv3DAfuO%2F%2FWLTcGK%2BzTZnfebEYMSbV0fokq30DyCHLqtTqdPCd2LugWoeXJKGZQrEDYeMapgkLh2bqYXlqJK6H%2BUh8LofThgqvDSgRh8qFcwHfLEoTjso9foEw6F3GUIfRxDGuNxArtT5oN1czDkBgUzKn1g707jVqNIqcDGJYqVCNWRw%2BUhexEYavICW1bdyYyG3RYTrnvcI%2BrrCkk8gdFgX3EZa43FIIQLysRPAh4K6PDfZXBrIRDTDjn57CBjqkAf6a%2BRmwzp3rgsyvFSSF3fxJplGITzjY%2BYq3RzuMxrAwa0WSX7%2FemGvDWVekSk6SqQZ0s0Gy9yZbX44lGkNXKDIovXXSiUHXgd2btY213Py1QPLcojh1Xml0upJ3QeAL5PODn05gzA6%2Bwmkdd4K7d9TcoG34jX722G4CUqb2VKAtYtgJL1MQBpkwboMHtSjDGVzNNzQjN7ytJbehOobZxW6ne2WT&X-Amz-Signature=8009a7503659f57284579f7c0448523b9f152935aa361e1e7bdc0448f42f593a&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
