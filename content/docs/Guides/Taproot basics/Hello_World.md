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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSSWTOYR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3xNM0QiTSncMe84E1k6MCDkGOtCsBQO9VW79bAqZR0wIhAKoFqMiVJEioxA%2Boh6QESpUxbjsCsvCAVEiKV65XT2qmKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy83oMT5%2FnmENhJr74q3AOIFs48WDfPWKYmy9M6mikR5I5bSKmEI%2FV11xcThgeJUSITmXjIa36qGVvQYmrG4C3GvYCaGsokloukWTRL7gwwhUaXi2O3FOJ275MLI2OiWRal9smL0XFVfRJ8BdmG7cZatc84m2f1RgbhSqaDR%2B3l3xNJK0hMhRCnU9D%2BxUm%2FAlKHBc2jRB6FdtZpJa3HacI7aN6ppZtt%2FtJAvsKWEM3LknnNQ0isSFfVq7RGZPRSeWep%2BX%2BlVJ1mGW45YAr2vFMZNClMF0FNrH8cDIxwrDJ2MJlOqj0CQq4UUgWlM9xxJGKLpnM3lyy4uFDYj6QVKZJjYPFVow4ksEYThxYURZlIhWAFKBouVoH9TN567OiB0D7IGbu9WhKfgwCmp2gnb%2FLtvbN5Fa%2BPRWxlNPIhCWtKlZWlyEIQ4f1AB6qb8ufIblemIlyRk5syxBorT33%2B9MQ58edh2yfzfhhb8B7uM6wvmQT0dQKRFfT7R9ylaY3mZKo58wvDgsg%2Fpp0K%2FAwhAw9Dwg4aM9mBPrd1ILfiz%2BDrsIkPzoPcpG3DgwK4YXKll9H5cy%2BDUgFNW4TBpb7ew3kBCSf%2BT6Ql1QqshZMQq10Sr5Dhb641JkWDShD0OX7F17l%2BN8KW0CKZgjexgTDa8dTCBjqkASFULi7Sswwb5IPVDdG35ygjheX95FQWXnXjhwgu5u7HUE0%2BJZ2%2FQhopotPnniIGoE9pAUWY3O6eZ%2FjLddIn8uVV3yDz8UgBk7adXATN2M02Dhe3JMYUUSEEBd4R49BlF97ut42%2FiX%2FiR3pp95i%2Fd%2F15eZi%2BZ6hFyuNQ6KgjJ3PwLkZu1RAhdIHQMntSvKSGNgovgiK5o7sienXet73m%2ByO734p3&X-Amz-Signature=773242927e3a01e8aaa60c4c3c95a4864c278f6b0ba99a07d5b9ea667201ecdb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSSWTOYR%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T121608Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3xNM0QiTSncMe84E1k6MCDkGOtCsBQO9VW79bAqZR0wIhAKoFqMiVJEioxA%2Boh6QESpUxbjsCsvCAVEiKV65XT2qmKogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy83oMT5%2FnmENhJr74q3AOIFs48WDfPWKYmy9M6mikR5I5bSKmEI%2FV11xcThgeJUSITmXjIa36qGVvQYmrG4C3GvYCaGsokloukWTRL7gwwhUaXi2O3FOJ275MLI2OiWRal9smL0XFVfRJ8BdmG7cZatc84m2f1RgbhSqaDR%2B3l3xNJK0hMhRCnU9D%2BxUm%2FAlKHBc2jRB6FdtZpJa3HacI7aN6ppZtt%2FtJAvsKWEM3LknnNQ0isSFfVq7RGZPRSeWep%2BX%2BlVJ1mGW45YAr2vFMZNClMF0FNrH8cDIxwrDJ2MJlOqj0CQq4UUgWlM9xxJGKLpnM3lyy4uFDYj6QVKZJjYPFVow4ksEYThxYURZlIhWAFKBouVoH9TN567OiB0D7IGbu9WhKfgwCmp2gnb%2FLtvbN5Fa%2BPRWxlNPIhCWtKlZWlyEIQ4f1AB6qb8ufIblemIlyRk5syxBorT33%2B9MQ58edh2yfzfhhb8B7uM6wvmQT0dQKRFfT7R9ylaY3mZKo58wvDgsg%2Fpp0K%2FAwhAw9Dwg4aM9mBPrd1ILfiz%2BDrsIkPzoPcpG3DgwK4YXKll9H5cy%2BDUgFNW4TBpb7ew3kBCSf%2BT6Ql1QqshZMQq10Sr5Dhb641JkWDShD0OX7F17l%2BN8KW0CKZgjexgTDa8dTCBjqkASFULi7Sswwb5IPVDdG35ygjheX95FQWXnXjhwgu5u7HUE0%2BJZ2%2FQhopotPnniIGoE9pAUWY3O6eZ%2FjLddIn8uVV3yDz8UgBk7adXATN2M02Dhe3JMYUUSEEBd4R49BlF97ut42%2FiX%2FiR3pp95i%2Fd%2F15eZi%2BZ6hFyuNQ6KgjJ3PwLkZu1RAhdIHQMntSvKSGNgovgiK5o7sienXet73m%2ByO734p3&X-Amz-Signature=ba894a3f31dd5c23581cb19c1c906d148b950aa0e1fa9afe875ebc5c07bf15e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
