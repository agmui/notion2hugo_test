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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656JPV43K%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmpsi7o1hzghxQ5pySBI59%2F2J4wMmetY9nj77x%2Bi0skQIhAMlRKhV9nAY%2B16%2BbJPAiS0vdU%2F3nz08f8kFK4P3lNNzOKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSpNmmNYaL6pJZ2L0q3AM92HYtJqFSByt50TS2KEePOtp1Xz4X01g%2BGtX6xP282DPYP9JcpdN7BNcuk%2FJcKzEL2HLVtcsrJfTYA4jNd%2BcIWbV839UoLusVbs7IleH1%2Bu1jbe27Ovp5DDFkf%2BD%2BzCWWG3budgTpnNF4e74Nsq6WKXeK8x4l3%2Fo%2FJKtA06XTn%2F2qpW%2FkuyZFRwLXzjKKl7gz2MWAyDnz5WdufcOIZGmI8LBtypoRDdMFO7EFBW2HJDQGSFGRBMV1URyl%2BVo98pZ9%2Bj8nBtrDQIQk6DCZyhOM3q0F7IpwyKdNH%2B%2BMGW68VTEl4%2FVwnHAsO9r7g0ry3nu0KHzNHsEt5wx0%2FshpN7Tl2QX5DlkLM8biwSnl8qz1bGyEEC6%2BKlcacflTQ9MzN2rM9LT%2BEyk3zbHdGZtGYYZAd0n%2BbQYr4pdVUtxrK2COBusq7ylbrcZk8ibbmw5aeI%2Fxuu7WleQwy2cPvGplPgiTEzFgfGdj8X7XAlkRV3E6jR34uF224NQ9%2Fkbij95yLOzgYnKBn%2BLi%2FS9xLU88Aa6Ymoqp6pjSDyN5LF%2FkyfWKg8hHXTW00dYW8C0FytisyjYH5F1%2FlvPjTc%2BjNj45mSIpUoWZA%2FbipCZCEF9fAcm6WRmMN89uHBqG1rJT5jCe2qbEBjqkAR6mS%2FLh%2FtwKTjlSI1w%2B2qM34OAwQ998TVVKiI8GyZRsMQxu3AHXk2Dq4IBnIMU1HDla1Sgro6LFvwVnbNAP5d5emC3Bm0mIVpCZxwaMeOHovjF36%2FLEMTmm4GSpUm7p2O2PxancEoN9p54urgExHNZexG6w9IlPtWR5LL31%2FOG7U32aE92nPoPrmV7rK4hZ4TE5Fm0lwbTxyLYDebX3XzNb5vJg&X-Amz-Signature=cdea2134142095aca2f623f25bac2932d8c97204a6dc916c2a23e480d6e74582&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46656JPV43K%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T061544Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmpsi7o1hzghxQ5pySBI59%2F2J4wMmetY9nj77x%2Bi0skQIhAMlRKhV9nAY%2B16%2BbJPAiS0vdU%2F3nz08f8kFK4P3lNNzOKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzSpNmmNYaL6pJZ2L0q3AM92HYtJqFSByt50TS2KEePOtp1Xz4X01g%2BGtX6xP282DPYP9JcpdN7BNcuk%2FJcKzEL2HLVtcsrJfTYA4jNd%2BcIWbV839UoLusVbs7IleH1%2Bu1jbe27Ovp5DDFkf%2BD%2BzCWWG3budgTpnNF4e74Nsq6WKXeK8x4l3%2Fo%2FJKtA06XTn%2F2qpW%2FkuyZFRwLXzjKKl7gz2MWAyDnz5WdufcOIZGmI8LBtypoRDdMFO7EFBW2HJDQGSFGRBMV1URyl%2BVo98pZ9%2Bj8nBtrDQIQk6DCZyhOM3q0F7IpwyKdNH%2B%2BMGW68VTEl4%2FVwnHAsO9r7g0ry3nu0KHzNHsEt5wx0%2FshpN7Tl2QX5DlkLM8biwSnl8qz1bGyEEC6%2BKlcacflTQ9MzN2rM9LT%2BEyk3zbHdGZtGYYZAd0n%2BbQYr4pdVUtxrK2COBusq7ylbrcZk8ibbmw5aeI%2Fxuu7WleQwy2cPvGplPgiTEzFgfGdj8X7XAlkRV3E6jR34uF224NQ9%2Fkbij95yLOzgYnKBn%2BLi%2FS9xLU88Aa6Ymoqp6pjSDyN5LF%2FkyfWKg8hHXTW00dYW8C0FytisyjYH5F1%2FlvPjTc%2BjNj45mSIpUoWZA%2FbipCZCEF9fAcm6WRmMN89uHBqG1rJT5jCe2qbEBjqkAR6mS%2FLh%2FtwKTjlSI1w%2B2qM34OAwQ998TVVKiI8GyZRsMQxu3AHXk2Dq4IBnIMU1HDla1Sgro6LFvwVnbNAP5d5emC3Bm0mIVpCZxwaMeOHovjF36%2FLEMTmm4GSpUm7p2O2PxancEoN9p54urgExHNZexG6w9IlPtWR5LL31%2FOG7U32aE92nPoPrmV7rK4hZ4TE5Fm0lwbTxyLYDebX3XzNb5vJg&X-Amz-Signature=71c0618e152e82d384348856e8e7c72fb6eab4d5e73920e11bb4239a40b01839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
