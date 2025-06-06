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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGBLKCC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoKKciAoDdebUNkx5AsILBfvYAzTwYwyBfbWa8EO%2BkUAiB0YB31Zw0TqdFaWuAf%2F0RtDTpVPBSWGB9laAiS%2B1p%2BlCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMMWi5elzTqDvmTni%2FKtwDxU%2FE%2Bc1zRi8sjZKj5iHOMjz5H4GBfEZ9%2BX3CLvKlkREUxMXRavwk9k0zaX0tupUImsgn5gcaxJv7ZYvB4G20EWzs1r7E1M7dNXVvYquioGS7CnUrIjMIT3ZiJkX%2FqlaKNYAWsukC5CUst7inYbIZrThN9sfzeW4JjmwJPut4mBOHyQapGkxzvEy8xZ92foC596mRa38HfJBLuvMa5%2Fsie8B793I1VbXSbDgr7C7UlQjsEkO6BNgLjLNKDGTr3XWXaD24lwiKu27KgQIHLX7vmnbqZuVWRVBHGeApWG5Iv8YeurJYIoHquHeulcvSbc85aibn4mF%2FmzNoVADbJmxCX1DdDdARMYjNrqdDxJ305MOQVYNl%2Fr2Nuf6klcMMwxR1xNCHZBxabvTF1xHa9eGtPxUCaQB4DkzY1TWw84IKrH2wkMVt1Ww%2FKkYRyOGZ%2FJDlF9SXXNW6cUDb%2B9d%2Ferp6dMBKZ0XDemzAw2LXJf3P8GslTD1T5QL2XrlkZQPWJ9Z6buLgEpwwFZpFefyIMp29tRXuEHesvqc0uLEAV67ie10cwGN9zuuCT9V0LaEvQEho0iXt4XPzqayJwvdTFNqHEQ21BXrajnVzDRvzgWv%2FvVmEe2VGsw7VEyuugcgwy9aMwgY6pgFKCA6khqu7%2BIsdzFwd0hQTSxYjebBpItulojfs7%2FT33ZQi%2FsvSoLYD%2BChnJM28Sef2ttDZ3N36UuEassESDShxXOyEeB%2BVoLuFaNfDxbTksbCnZlfjZ8NqTZttvlkbmMWJmHnJUaoXlDhC8trwPhXwuwRla7bT5S2AhavvNXny%2FTjT%2BHEgGLQ2mhJyUGCBglGsHVZtVKp8rmGqrMhLTkBvQ1GasRPz&X-Amz-Signature=3e1ecd23a132bae568f76605c7d6e193dabfb3fa1b5029f25166e2d82e4d5bcc&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWGBLKCC%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T181209Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHoKKciAoDdebUNkx5AsILBfvYAzTwYwyBfbWa8EO%2BkUAiB0YB31Zw0TqdFaWuAf%2F0RtDTpVPBSWGB9laAiS%2B1p%2BlCr%2FAwhjEAAaDDYzNzQyMzE4MzgwNSIMMWi5elzTqDvmTni%2FKtwDxU%2FE%2Bc1zRi8sjZKj5iHOMjz5H4GBfEZ9%2BX3CLvKlkREUxMXRavwk9k0zaX0tupUImsgn5gcaxJv7ZYvB4G20EWzs1r7E1M7dNXVvYquioGS7CnUrIjMIT3ZiJkX%2FqlaKNYAWsukC5CUst7inYbIZrThN9sfzeW4JjmwJPut4mBOHyQapGkxzvEy8xZ92foC596mRa38HfJBLuvMa5%2Fsie8B793I1VbXSbDgr7C7UlQjsEkO6BNgLjLNKDGTr3XWXaD24lwiKu27KgQIHLX7vmnbqZuVWRVBHGeApWG5Iv8YeurJYIoHquHeulcvSbc85aibn4mF%2FmzNoVADbJmxCX1DdDdARMYjNrqdDxJ305MOQVYNl%2Fr2Nuf6klcMMwxR1xNCHZBxabvTF1xHa9eGtPxUCaQB4DkzY1TWw84IKrH2wkMVt1Ww%2FKkYRyOGZ%2FJDlF9SXXNW6cUDb%2B9d%2Ferp6dMBKZ0XDemzAw2LXJf3P8GslTD1T5QL2XrlkZQPWJ9Z6buLgEpwwFZpFefyIMp29tRXuEHesvqc0uLEAV67ie10cwGN9zuuCT9V0LaEvQEho0iXt4XPzqayJwvdTFNqHEQ21BXrajnVzDRvzgWv%2FvVmEe2VGsw7VEyuugcgwy9aMwgY6pgFKCA6khqu7%2BIsdzFwd0hQTSxYjebBpItulojfs7%2FT33ZQi%2FsvSoLYD%2BChnJM28Sef2ttDZ3N36UuEassESDShxXOyEeB%2BVoLuFaNfDxbTksbCnZlfjZ8NqTZttvlkbmMWJmHnJUaoXlDhC8trwPhXwuwRla7bT5S2AhavvNXny%2FTjT%2BHEgGLQ2mhJyUGCBglGsHVZtVKp8rmGqrMhLTkBvQ1GasRPz&X-Amz-Signature=4f3a7258f206bcedfd3e1f79800cf6c0a9d6859737e7c694ff33abc5a2da7956&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
