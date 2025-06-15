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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SD25TQX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCgPmd6YyMpQOr1Ey3L3CpQEHuPzPuatL4QX%2BAxiqIQWQIhAKYRmavDOnEWrUGzM%2BnQiscsMlr%2FdInld6deeLrL0IZWKv8DCEEQABoMNjM3NDIzMTgzODA1Igzle3WgJ5tbDdxWkLsq3AMSiErXm2eFtx3dHR8rqxnfU5KRVx8JTPBnccPvk%2BM4G9Rr3qZTzB5K0QmDcW%2FT1UfIgF8oK0%2BFA2crjDebP2n7YWpxF4w8aHfDsSyWxs0mpb248VNvl1VCYtziCvpuptoW3WzA5C0aalIt1a0cRWOH0VzL4qsao6EMGPiN3GkA%2BtqhHZbffZ0eWxryaSLrGVY%2FASlZEn9AWNiuKnAZlvSEFIODfH0H57WJLraVNiyLCp4UIMeWgG%2FJ8vjgXo39kIff%2Flae50BcRocQ2aTO9WTbzXDuBHWWCAifODwUd93fh0cFBriAUC0DZd2NjjthAMYo0yiVkLJz2Z8GJ%2BufauB0GBjjrWhglqeZoGLsIPKgFZXdc69ICqZMQA2rSPYNfe5lXjiL5gWJrRbP%2FNluzLUmIgUutOMW9duiIIwU%2BmCQmeLWKqX0XdwOAMBB%2FeGt%2F1IRPyTM6ucn4cSuDPqvqHQrD5asLvzP4hAc6H0KmBE%2FqAK6pQvIagEuvzHlhrI7Ko8sceU9pZkc%2F3%2BQW0XzilElsn0p6M8EKVZNkniE980KPKda2YO%2Bg1dS%2FpnaI%2BtxQVjpDIzWAJxhJI6HApq7WrIg%2BK3K4DFy3gKMgqfF5op5U88Zce4X9KsUBw1b%2FzDghLrCBjqkAc3erSKNSTwyu49oPylNRUdnqn1PB7RonGVmQgXV1Sova6UtQYvPDynJFa7mwJLZSpV%2B1Rl%2Fozj8ul3twHSPdBT4BAny2tuu3Y4awgY9m%2FIZw3JeolM4m5%2BUwImRvH39Czfvw44lqxDC3kwlygWrNnBMVsg2TAosPfKMQxWpxqqiq4QX%2FDfZHZzEsNstj1eljzx3ZfnlR5iQLFkLNgpcIKgd3jUU&X-Amz-Signature=1029722029124af3928a34cd49b08445129c157d710b674f2b6a8930af341b07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SD25TQX%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T090804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJIMEYCIQCgPmd6YyMpQOr1Ey3L3CpQEHuPzPuatL4QX%2BAxiqIQWQIhAKYRmavDOnEWrUGzM%2BnQiscsMlr%2FdInld6deeLrL0IZWKv8DCEEQABoMNjM3NDIzMTgzODA1Igzle3WgJ5tbDdxWkLsq3AMSiErXm2eFtx3dHR8rqxnfU5KRVx8JTPBnccPvk%2BM4G9Rr3qZTzB5K0QmDcW%2FT1UfIgF8oK0%2BFA2crjDebP2n7YWpxF4w8aHfDsSyWxs0mpb248VNvl1VCYtziCvpuptoW3WzA5C0aalIt1a0cRWOH0VzL4qsao6EMGPiN3GkA%2BtqhHZbffZ0eWxryaSLrGVY%2FASlZEn9AWNiuKnAZlvSEFIODfH0H57WJLraVNiyLCp4UIMeWgG%2FJ8vjgXo39kIff%2Flae50BcRocQ2aTO9WTbzXDuBHWWCAifODwUd93fh0cFBriAUC0DZd2NjjthAMYo0yiVkLJz2Z8GJ%2BufauB0GBjjrWhglqeZoGLsIPKgFZXdc69ICqZMQA2rSPYNfe5lXjiL5gWJrRbP%2FNluzLUmIgUutOMW9duiIIwU%2BmCQmeLWKqX0XdwOAMBB%2FeGt%2F1IRPyTM6ucn4cSuDPqvqHQrD5asLvzP4hAc6H0KmBE%2FqAK6pQvIagEuvzHlhrI7Ko8sceU9pZkc%2F3%2BQW0XzilElsn0p6M8EKVZNkniE980KPKda2YO%2Bg1dS%2FpnaI%2BtxQVjpDIzWAJxhJI6HApq7WrIg%2BK3K4DFy3gKMgqfF5op5U88Zce4X9KsUBw1b%2FzDghLrCBjqkAc3erSKNSTwyu49oPylNRUdnqn1PB7RonGVmQgXV1Sova6UtQYvPDynJFa7mwJLZSpV%2B1Rl%2Fozj8ul3twHSPdBT4BAny2tuu3Y4awgY9m%2FIZw3JeolM4m5%2BUwImRvH39Czfvw44lqxDC3kwlygWrNnBMVsg2TAosPfKMQxWpxqqiq4QX%2FDfZHZzEsNstj1eljzx3ZfnlR5iQLFkLNgpcIKgd3jUU&X-Amz-Signature=3fc98cb341c7bfcf5535c9c6bb5da79fce8ecad558b4b09d164876332d1dea41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
