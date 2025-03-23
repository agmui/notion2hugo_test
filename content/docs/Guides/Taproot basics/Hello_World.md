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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAPG6OS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCJ2bhxIeV93GUNQlyqCh10K%2FeeBk1y8FtDc8caqdpGkAIhAIWrUYc28%2B3heeAfJ8BIeTYebtcr1Wjfl%2B4RTMaamEn5KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAa6PCbXimxkBTr5cq3AOn%2BIUizfM4InMkEeALoiJa1RPGh5WJ%2BMmgIKMLRISSdDV%2B3Fi58YONC62K6mOnhRATALG1nHBKlBKgstF%2FFQIzuh3nA7doAsfqQLeaFdi5xZzfL%2Bda%2FOgwR6Ypq6lLWwQ6HHk9vqqLDUoVnDUzsd2HpCBDr5tMoi55xPSMGf63GXzisPWzUIhpr%2Fuy2cD6dhQZHhOsIIL8sLBRHSHLkR7j%2Fdn4asBrku31bQgZnzrGK1Vkaj8Al1P%2FkYZcxI2AxIdLMWVDtXajCm4wIttjnCCv5I%2Bm%2FfD1Ho8BKdTITJQ8i5RAX2SqyVYe3VMPo6JXzwktZl8dhw3mSvsCemKaoRIG%2FVK9hOLaeXTEl4aB%2F8PnDZjHPdNRQs%2BerPDab1TNRuvvZUL%2BqwrW2vaSa5Xgo5qudEsSOZ3v7MBe8SmJrL18waCaY2hPxexY5UOhxcWqlcZzI0FCa9vlqwKvJ9G5SgegsF3QGHk1a%2FcKTOOnf6VLv1aa8PBABnwpK%2BWuTxDcBKo1U7bVck88BnmEMJXN1Kz1n96X8K9cqkSfvQgitNL05fqu0qiZLYe9XFceI1qH1qfOPBDRmGjjRmN2jn2UIxvZ5Vl565i%2B7KguCxbfqMs5fglB9ICkHNhWonqnnTCe4%2F2%2BBjqkAQfURUbIYE%2FDImh7%2FcQEdZIzxjJVosvSY%2Fh4pDZ0e4BoVrEeQWgShtzfZPzWbSqPXy%2BXNrZVBxXy%2B%2B%2BNdsCxn0ZKEFpHQw3tn%2FUCwzU37ovrMf89VvCUcsRDB2HMTZuM85rJVVD7W%2FbaG%2BQinnzxzWl09ZcaYIfpTHmV4RbyVSYQEGpmedMAzrcMKIVTpa%2BMWzLzHTlT4JS1ZamiDqAneQseNqWl&X-Amz-Signature=d8debac99019fe59ede47b75891ca1503c342b44aad7bf910a5aea117858a1b2&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UAPG6OS%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T032540Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQCJ2bhxIeV93GUNQlyqCh10K%2FeeBk1y8FtDc8caqdpGkAIhAIWrUYc28%2B3heeAfJ8BIeTYebtcr1Wjfl%2B4RTMaamEn5KogECMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyAa6PCbXimxkBTr5cq3AOn%2BIUizfM4InMkEeALoiJa1RPGh5WJ%2BMmgIKMLRISSdDV%2B3Fi58YONC62K6mOnhRATALG1nHBKlBKgstF%2FFQIzuh3nA7doAsfqQLeaFdi5xZzfL%2Bda%2FOgwR6Ypq6lLWwQ6HHk9vqqLDUoVnDUzsd2HpCBDr5tMoi55xPSMGf63GXzisPWzUIhpr%2Fuy2cD6dhQZHhOsIIL8sLBRHSHLkR7j%2Fdn4asBrku31bQgZnzrGK1Vkaj8Al1P%2FkYZcxI2AxIdLMWVDtXajCm4wIttjnCCv5I%2Bm%2FfD1Ho8BKdTITJQ8i5RAX2SqyVYe3VMPo6JXzwktZl8dhw3mSvsCemKaoRIG%2FVK9hOLaeXTEl4aB%2F8PnDZjHPdNRQs%2BerPDab1TNRuvvZUL%2BqwrW2vaSa5Xgo5qudEsSOZ3v7MBe8SmJrL18waCaY2hPxexY5UOhxcWqlcZzI0FCa9vlqwKvJ9G5SgegsF3QGHk1a%2FcKTOOnf6VLv1aa8PBABnwpK%2BWuTxDcBKo1U7bVck88BnmEMJXN1Kz1n96X8K9cqkSfvQgitNL05fqu0qiZLYe9XFceI1qH1qfOPBDRmGjjRmN2jn2UIxvZ5Vl565i%2B7KguCxbfqMs5fglB9ICkHNhWonqnnTCe4%2F2%2BBjqkAQfURUbIYE%2FDImh7%2FcQEdZIzxjJVosvSY%2Fh4pDZ0e4BoVrEeQWgShtzfZPzWbSqPXy%2BXNrZVBxXy%2B%2B%2BNdsCxn0ZKEFpHQw3tn%2FUCwzU37ovrMf89VvCUcsRDB2HMTZuM85rJVVD7W%2FbaG%2BQinnzxzWl09ZcaYIfpTHmV4RbyVSYQEGpmedMAzrcMKIVTpa%2BMWzLzHTlT4JS1ZamiDqAneQseNqWl&X-Amz-Signature=f17ad604ecce72c009ae21e6b3f5b605aa452fcdb7d1d03d0e01ad50906cfde0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
