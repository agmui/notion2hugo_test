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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU54ZZTG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxfkHUjFWD6g8Yr8qY63PlxD4iA8RwnEr%2FzNdgXrLYFAiAWCvBKppAfGOz4eWBZKlYupPXQ1aXUxVZ4L0qvT9ZRkyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdyk%2FcO4JGDI4sl8VKtwD7SFYAe85vVQ3E4%2F6jnpS%2BWy6tmNcqnNc5Pjar533Y5xRnKWHBx47%2BtSXoemmi08IK7zApmVYU0PIsopfdmuL2XVndGYgO%2FqJ8Bdog5wZVFQxKarLJfD48jWCYNE1kGV15y67fzZ4N309e%2BPXlAEOTnyN2UkeIgawky91JIvdalEzQATuxmbSc9m%2Fu%2BTHVlTq58uL8Pq8tVdqANsDL%2FT38ebDT4FziuKs%2FrfCdIUCf0XMYn8ovPT3CqJS1w2NQBMMXNHRwWpHSpIn0yJxDQgWC434UoYuQ2WPsARdGuuEvFtbqSEUnxd%2B3d8bOZRq1Av9evblmzHbf1TKO00RMPYafa8QW0KL7s3kjEkRW9QPxUOKPs1YZm1fBQtMSXXN84UHbQcmyJGX7COlpQsEMmUykEGKAfXiyYuYRqz8NYWCx5P6mFKmiWJk%2FsEUPBsGD15fHZnFVHe4oT7r4FEVhLts%2Bw0E5rzZkTEfJT%2B6Yu41dSVSrRO%2Bbw1gfQBftWxg1MrZN60%2BMpMB1g4oxM4v2u6f8%2FAl3a0iXXUZeYTZ13eBYLOM7ekDLFDbDq%2F0E0Rg8J8agsdiAh6U6XPg1g8zUFRXiyNava7TFBeX%2BvtsWdEcz9Jjs9iXt4ILW3rZfxgwv%2FHowQY6pgGR0BaS%2B4UyZDLo521gzMxHHvOrAaEgtSHutX5t4C6nI787D7N9Hz8ZnXHncEPem%2BZDiMVSmuSpuLTqoosuOK7lGBQh0tHRGPkypSf8gdKgmpT18i%2FweHo1WVlAPJffY%2BNg5aqT%2FZSO%2FmNYZDRP8RAaiJTaXSyX7lLQKgOLjeDrfdPaJPQ5bGNaxVmsSZoLPAvO5nigC5UABzuIB26qekvQtn%2BTuTFz&X-Amz-Signature=1d3602409d0a01132e2168712b0760f0c3499930aacfd9da87907319e45f72b7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZU54ZZTG%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T230813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGxfkHUjFWD6g8Yr8qY63PlxD4iA8RwnEr%2FzNdgXrLYFAiAWCvBKppAfGOz4eWBZKlYupPXQ1aXUxVZ4L0qvT9ZRkyqIBAiw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdyk%2FcO4JGDI4sl8VKtwD7SFYAe85vVQ3E4%2F6jnpS%2BWy6tmNcqnNc5Pjar533Y5xRnKWHBx47%2BtSXoemmi08IK7zApmVYU0PIsopfdmuL2XVndGYgO%2FqJ8Bdog5wZVFQxKarLJfD48jWCYNE1kGV15y67fzZ4N309e%2BPXlAEOTnyN2UkeIgawky91JIvdalEzQATuxmbSc9m%2Fu%2BTHVlTq58uL8Pq8tVdqANsDL%2FT38ebDT4FziuKs%2FrfCdIUCf0XMYn8ovPT3CqJS1w2NQBMMXNHRwWpHSpIn0yJxDQgWC434UoYuQ2WPsARdGuuEvFtbqSEUnxd%2B3d8bOZRq1Av9evblmzHbf1TKO00RMPYafa8QW0KL7s3kjEkRW9QPxUOKPs1YZm1fBQtMSXXN84UHbQcmyJGX7COlpQsEMmUykEGKAfXiyYuYRqz8NYWCx5P6mFKmiWJk%2FsEUPBsGD15fHZnFVHe4oT7r4FEVhLts%2Bw0E5rzZkTEfJT%2B6Yu41dSVSrRO%2Bbw1gfQBftWxg1MrZN60%2BMpMB1g4oxM4v2u6f8%2FAl3a0iXXUZeYTZ13eBYLOM7ekDLFDbDq%2F0E0Rg8J8agsdiAh6U6XPg1g8zUFRXiyNava7TFBeX%2BvtsWdEcz9Jjs9iXt4ILW3rZfxgwv%2FHowQY6pgGR0BaS%2B4UyZDLo521gzMxHHvOrAaEgtSHutX5t4C6nI787D7N9Hz8ZnXHncEPem%2BZDiMVSmuSpuLTqoosuOK7lGBQh0tHRGPkypSf8gdKgmpT18i%2FweHo1WVlAPJffY%2BNg5aqT%2FZSO%2FmNYZDRP8RAaiJTaXSyX7lLQKgOLjeDrfdPaJPQ5bGNaxVmsSZoLPAvO5nigC5UABzuIB26qekvQtn%2BTuTFz&X-Amz-Signature=ccbc9bf9a5423210b35ee92b149f77d478aa34d9769afc06fc6c69c776072e07&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
