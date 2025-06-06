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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE3KF7SH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGGehcD4g%2FnQGbiLOlrRPtn%2BWVYyhz8c0ByuIcTftU%2FAIgKXKoyBuf37hTN2IbF5IfVcleEvWmAY6sjb5Q%2BH9BkOUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEEYKNkLXGWhpXSDOircA8R%2BgQFydvu4k0YB0l%2Falid%2B7KAk5w3TRgv2h4TJLUhy2xwoXJqRTGJ7eiUvw2WcyO7NpWJGNjbWZJGGY20deOEJ8Ik%2FpG3Lwk6HRIPZrqmbzZWGT8EkCR67qZeLXsMqBhDZaKIVVG5bzZARwIi3dZPXohXeK%2F6gqYDM17B7sQMpGh2%2BFkrpcUFRoQBbm63vFRPyuncEWKN%2B8iQjhEf8wtkkudCVWvHQahnOkBYq%2FTJYH0U5c%2BbZg9YetKZ7LhUSqw%2FhBRiUsUn%2FRRS3cd%2FN8ygQza7K7zCErbtENiCTuLVvjz96dGF%2F%2FUcfHzmD0bryRt12WNGwr%2Fidu%2FAUM4vrz16gp6EUKcOevQFuARjUv%2BoMBe6vyE6DaScOD6g2yaDiwGwcPSnmHe3wDnb5FieRv%2FM3jiGqtahpv%2Bzd61kbbRYoGBcTr%2FNS1%2FHQALVBoiJJZ6yek%2Fa8UMc6rkmC2Ra5zcpGAcXqMTX395jXriY8yh4LsV1ZGj8UgxUJp%2Fh%2B0wOXfRHv4G5xHrYRzMXrs53SY%2BwoqfBEMjzPSoGTk%2F5ZG8qG8Y8tYmJcn6JOjYgU5PU%2B22Wt%2FrfSAFqGNNGzw5VZ%2FKi7bQVRQjGZ%2BJcv1HboUiLXTrDLRZKLrJgqa3szMOyhjMIGOqUB4LtBqhU6YW0Jn2MFX44ebfZ1UXaQA8FOCqyZz43yheRsFOcduGNyc4r39l4qMfSOgawhRBhDIPTI1OGInABlm6rii2%2FqytVEerXJUs91Gb55wGAEiPDvExFbXUgSBG8PdQrVmriMa2FfnJJtTUNoVJvKXU9HAwHYPGiNxv5I5fQ%2FCXKTjLzWC5b1mtx1QwENgyksBLLO7kNzC10vTg6NwnmqhPK6&X-Amz-Signature=cf350c69bf686cc0e30d918b987bb98d8e5a08bf90b400b16bb430ab39ed1977&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SE3KF7SH%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T170803Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDGGehcD4g%2FnQGbiLOlrRPtn%2BWVYyhz8c0ByuIcTftU%2FAIgKXKoyBuf37hTN2IbF5IfVcleEvWmAY6sjb5Q%2BH9BkOUq%2FwMIYRAAGgw2Mzc0MjMxODM4MDUiDEEYKNkLXGWhpXSDOircA8R%2BgQFydvu4k0YB0l%2Falid%2B7KAk5w3TRgv2h4TJLUhy2xwoXJqRTGJ7eiUvw2WcyO7NpWJGNjbWZJGGY20deOEJ8Ik%2FpG3Lwk6HRIPZrqmbzZWGT8EkCR67qZeLXsMqBhDZaKIVVG5bzZARwIi3dZPXohXeK%2F6gqYDM17B7sQMpGh2%2BFkrpcUFRoQBbm63vFRPyuncEWKN%2B8iQjhEf8wtkkudCVWvHQahnOkBYq%2FTJYH0U5c%2BbZg9YetKZ7LhUSqw%2FhBRiUsUn%2FRRS3cd%2FN8ygQza7K7zCErbtENiCTuLVvjz96dGF%2F%2FUcfHzmD0bryRt12WNGwr%2Fidu%2FAUM4vrz16gp6EUKcOevQFuARjUv%2BoMBe6vyE6DaScOD6g2yaDiwGwcPSnmHe3wDnb5FieRv%2FM3jiGqtahpv%2Bzd61kbbRYoGBcTr%2FNS1%2FHQALVBoiJJZ6yek%2Fa8UMc6rkmC2Ra5zcpGAcXqMTX395jXriY8yh4LsV1ZGj8UgxUJp%2Fh%2B0wOXfRHv4G5xHrYRzMXrs53SY%2BwoqfBEMjzPSoGTk%2F5ZG8qG8Y8tYmJcn6JOjYgU5PU%2B22Wt%2FrfSAFqGNNGzw5VZ%2FKi7bQVRQjGZ%2BJcv1HboUiLXTrDLRZKLrJgqa3szMOyhjMIGOqUB4LtBqhU6YW0Jn2MFX44ebfZ1UXaQA8FOCqyZz43yheRsFOcduGNyc4r39l4qMfSOgawhRBhDIPTI1OGInABlm6rii2%2FqytVEerXJUs91Gb55wGAEiPDvExFbXUgSBG8PdQrVmriMa2FfnJJtTUNoVJvKXU9HAwHYPGiNxv5I5fQ%2FCXKTjLzWC5b1mtx1QwENgyksBLLO7kNzC10vTg6NwnmqhPK6&X-Amz-Signature=36a5eb8a914b04c10e3a7478849df682f0e91998d86d0b4ac66de18d4853175f&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
