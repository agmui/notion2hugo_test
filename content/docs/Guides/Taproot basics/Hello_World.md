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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CF6ZQRK%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlBErBBX4lvqxLPLiOwhdbkC0VLhVLRX%2Bk1iq%2BqneEaAiBQWrc6Lx2cUEle%2BQ9S3zdsHDdJTo9NwiKEI10jAZ00Nir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM4wo8klrwrt7QGUMkKtwDrgOXH0j2E1ksJNhZUDEAaLOMmaOneIqZX5Q47KCQu3pyHK2c1bvwVjeUYHJ1QP7rpB1Dj4higG9vQjvmRfBX6983J6PwA53c0%2BOnzgLqXAFNktUKtEeBDhLZBNo7As2H8r9GsOSeo3y2d3ZGxeqalilc7lUGJB0IC5Zs0%2FeEnj7WvRK%2BPWnlVlSeN29skGuD7feNwbgA0hHIjF4F1e0wHBSbgk2lfF72oYvBGdRt8KevKkTAZ26iWZSPwj2wJxQ8t7ibDgV%2BxKDALDfekwJCTI2x4CNSk%2Bq5ZPGb50w5ysMxTxF4T6zSG0pIJS94s1DiwLA0VDMShYxxF8JhCA%2BsrhDxZI7DNNX82pvfPUF%2FNoVWQLUve0bgG9LFmnypgUNNVhqvS%2BVJx8kHZhM84uT7uHiWNCcaxgPuVD%2F43w%2B4XKTtRRiSJQNByiBwOQYaXeTZqIU1XF%2B8HroriAUNOVAx8y6H5Yta%2Bs%2FI%2B%2BtbznoNK%2BmmS30yarxWF1jqDue4XbhVZdScg53NyvohcRsj5aQsoV1imSYH5QUhuej4nF4yO%2FmGii0GJljzPyR0uNzSSPDR9vyoB2QteGW1wt5UOEbQ0BGMAABPN6apTyfSCJF%2BuW3fUcp%2BL%2F5eJ8w89bswv5utwAY6pgHgP6yrSQa56IVsApMRIveQV%2FqKeN8F5AqLQt1np9a0hDoct4AXP1xhmW6gKKHbl6qGDwMhglDErUiBhbbEBEyxjaLfrWKOFatnEgvcPnL1qtlexgzncQwxrbK5P0A5HC32J26qjFYoUx6yDsjPyFHZ08w9eqP8RLHJnNblUbKXAX7hDkmbbw2%2Fva2mpx%2BdwhsYBoKzO2UxWOJ1j6zM44xMLVFYKkTR&X-Amz-Signature=4491b63c6c1d67b22f3210ea32d3386dda2ad1bac09b82bd1b3cacc57e884e71&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CF6ZQRK%2F20250425%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250425T090913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFlBErBBX4lvqxLPLiOwhdbkC0VLhVLRX%2Bk1iq%2BqneEaAiBQWrc6Lx2cUEle%2BQ9S3zdsHDdJTo9NwiKEI10jAZ00Nir%2FAwgqEAAaDDYzNzQyMzE4MzgwNSIM4wo8klrwrt7QGUMkKtwDrgOXH0j2E1ksJNhZUDEAaLOMmaOneIqZX5Q47KCQu3pyHK2c1bvwVjeUYHJ1QP7rpB1Dj4higG9vQjvmRfBX6983J6PwA53c0%2BOnzgLqXAFNktUKtEeBDhLZBNo7As2H8r9GsOSeo3y2d3ZGxeqalilc7lUGJB0IC5Zs0%2FeEnj7WvRK%2BPWnlVlSeN29skGuD7feNwbgA0hHIjF4F1e0wHBSbgk2lfF72oYvBGdRt8KevKkTAZ26iWZSPwj2wJxQ8t7ibDgV%2BxKDALDfekwJCTI2x4CNSk%2Bq5ZPGb50w5ysMxTxF4T6zSG0pIJS94s1DiwLA0VDMShYxxF8JhCA%2BsrhDxZI7DNNX82pvfPUF%2FNoVWQLUve0bgG9LFmnypgUNNVhqvS%2BVJx8kHZhM84uT7uHiWNCcaxgPuVD%2F43w%2B4XKTtRRiSJQNByiBwOQYaXeTZqIU1XF%2B8HroriAUNOVAx8y6H5Yta%2Bs%2FI%2B%2BtbznoNK%2BmmS30yarxWF1jqDue4XbhVZdScg53NyvohcRsj5aQsoV1imSYH5QUhuej4nF4yO%2FmGii0GJljzPyR0uNzSSPDR9vyoB2QteGW1wt5UOEbQ0BGMAABPN6apTyfSCJF%2BuW3fUcp%2BL%2F5eJ8w89bswv5utwAY6pgHgP6yrSQa56IVsApMRIveQV%2FqKeN8F5AqLQt1np9a0hDoct4AXP1xhmW6gKKHbl6qGDwMhglDErUiBhbbEBEyxjaLfrWKOFatnEgvcPnL1qtlexgzncQwxrbK5P0A5HC32J26qjFYoUx6yDsjPyFHZ08w9eqP8RLHJnNblUbKXAX7hDkmbbw2%2Fva2mpx%2BdwhsYBoKzO2UxWOJ1j6zM44xMLVFYKkTR&X-Amz-Signature=081199913d447c7f11cace71bb61416149905b7f246af539b489be178cb7f419&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
