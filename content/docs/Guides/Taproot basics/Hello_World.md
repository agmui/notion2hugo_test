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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPERRDQR%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJFQpKY8GvWL0Z5Cg0lDknCn8B2l%2BsCdp3dc7lutS7DAiBzGPCu3WKyCvN0iyY%2BgX63zESoyqn6LaFyIM0g7cbmuSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2BuLQclSEfdK6QtjKtwDq%2FvtohSqSSxinTMHsg9LEjkmXhWLfZKeSN8ZIpIAaSdE6Ltdk9pcA0Gk%2FV%2Bl%2B3hBZihKIwZ2qQ02fk0xaK0kjp3IG6fPvnz0UuSylArdS%2BM8VLgVQ7f2AsaH%2BoDKZWl1TsnHJXKd4DKbWbcmQrJjAHM2QLrKq99D5Uwd4MxyYLKK3AI6Vy9xwoHc1pL0fnISNdD5jRcLMTdif1PZGKfWZgCxwhLRtriOieeV2TCZfJ9JqRhL9xG0tiNA3%2BBifySfV2ECzI5u3pKpjvdkhtTy6JR0t0Oex2%2FKTqqMMHHNDjJpZL6F1Lmbd1Y%2FUjYfy91Ibu8Ny0CEDXgTkIVXey34b6Du%2FV9LvROQgHP5Dj80TkpIcDRCej2%2BWcxcTywLE4fbJza8f8EOTMExuOnQESsNQSIxHRc1G3jZXSSC1dZ20X4i3h%2FtfHcrp0K%2BUId0vi2ordhO0hiQMuaRAysAVp0%2F3Z7%2FvGm%2FpaAvK3Xw%2F9flqK5BvVulmRr8f4Ch%2B04KM81TEZPdltQnCF8kmelqisrJzXQRwh8wsOuqdOAh7adm8vYgeimG%2BLjI7QonOiEz0RVD2PQCbyV9GkQRbrKD%2FK3nhhvBPh5JCjWxp4%2BHFdnTinCz%2FHoslmlSpo1qQPQw26GgvQY6pgFrR6rVV%2B2yPYbxGa2b0X5njwy4xF2Kxk4ACBd7G2O4eGuTQCeUMxkqml6FTUYhwJPXL%2FslN7IIrx3lzcOTL%2FuDnQ%2BOa%2FleSeq24WosYYnAh9HgxJrnhLLfH4aqgptwHqVrWhxuK%2BamitL%2FCECsOK3a4Lk2ZnU59WqMC7Qw%2F6TgDkOAFuj%2FeRAzPkqI1yabg2lO65X1ExjqD0jMet1xe3DrBnaGdro5&X-Amz-Signature=6cc4d6b1989afb32d7b4e8e8fca17dc20df9292d145d4b1bb60b7f8af15ee853&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPERRDQR%2F20250209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250209T031251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBJFQpKY8GvWL0Z5Cg0lDknCn8B2l%2BsCdp3dc7lutS7DAiBzGPCu3WKyCvN0iyY%2BgX63zESoyqn6LaFyIM0g7cbmuSqIBAib%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMt%2BuLQclSEfdK6QtjKtwDq%2FvtohSqSSxinTMHsg9LEjkmXhWLfZKeSN8ZIpIAaSdE6Ltdk9pcA0Gk%2FV%2Bl%2B3hBZihKIwZ2qQ02fk0xaK0kjp3IG6fPvnz0UuSylArdS%2BM8VLgVQ7f2AsaH%2BoDKZWl1TsnHJXKd4DKbWbcmQrJjAHM2QLrKq99D5Uwd4MxyYLKK3AI6Vy9xwoHc1pL0fnISNdD5jRcLMTdif1PZGKfWZgCxwhLRtriOieeV2TCZfJ9JqRhL9xG0tiNA3%2BBifySfV2ECzI5u3pKpjvdkhtTy6JR0t0Oex2%2FKTqqMMHHNDjJpZL6F1Lmbd1Y%2FUjYfy91Ibu8Ny0CEDXgTkIVXey34b6Du%2FV9LvROQgHP5Dj80TkpIcDRCej2%2BWcxcTywLE4fbJza8f8EOTMExuOnQESsNQSIxHRc1G3jZXSSC1dZ20X4i3h%2FtfHcrp0K%2BUId0vi2ordhO0hiQMuaRAysAVp0%2F3Z7%2FvGm%2FpaAvK3Xw%2F9flqK5BvVulmRr8f4Ch%2B04KM81TEZPdltQnCF8kmelqisrJzXQRwh8wsOuqdOAh7adm8vYgeimG%2BLjI7QonOiEz0RVD2PQCbyV9GkQRbrKD%2FK3nhhvBPh5JCjWxp4%2BHFdnTinCz%2FHoslmlSpo1qQPQw26GgvQY6pgFrR6rVV%2B2yPYbxGa2b0X5njwy4xF2Kxk4ACBd7G2O4eGuTQCeUMxkqml6FTUYhwJPXL%2FslN7IIrx3lzcOTL%2FuDnQ%2BOa%2FleSeq24WosYYnAh9HgxJrnhLLfH4aqgptwHqVrWhxuK%2BamitL%2FCECsOK3a4Lk2ZnU59WqMC7Qw%2F6TgDkOAFuj%2FeRAzPkqI1yabg2lO65X1ExjqD0jMet1xe3DrBnaGdro5&X-Amz-Signature=b552ba8e4e3ece3d47be7ac882243fb6c250d5b38bd9456be3ba546745237ebc&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
