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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ4D62T3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT91v2at4Bt5YoLFhkodQtIQTYVegiIO5s2B%2Bqia05iAIgXQzbN5jf2fg6dXcNysFz3fmSef5eMk9RAnT852Ev%2B%2FAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIIaqsbKPwZYMzNEcCrcA48Q2daCcXbpX2%2Fj02UB%2BtxH0Piyarv6g5YKc121yr1F2nd63SpkPIwpyTmsVt7x6zxHyrABC4tNlIFJZIyKqxsKIWCA7SWk%2BxrWgXge6DUqnWKJWGKOp2ERfeXksgNh5mAQ5goF4IoIKltzDbdLWmtRua%2BZC9n80PUJh7WXimdfxPq6kvY70a%2B9XAtHMJ0NQRWltRTYbfPzYNier5%2FSK9zIfHiJ5%2FjVPXtxhQY6hvGCSNYbA2wb6oCx9uIPWFB5Ka%2FDx%2BynTCnZfGDlmWRau8FT8jQ9ria36JOCgRKKKNNIWmtdw8TokCiRyGh2LCNHGJEiun87OJ0y6wiFTshf1CzHHhSD9IaMChha%2FLXVxTSpBRfnM1HPE5JPh6uajTTnDtXShaRt4m5CkiklcdEC%2B83mnJzzV30jqK3doWLgcwHFOSD%2FdtX7nG%2FR62pLz50OTrNgvrmuqI51MkqtmWQd77WcjXoSsaoZAOM9XSLSfuyYEdZCii%2BYoy9hDAmNRgF8i1glY4%2BF9yqJ8RiAFC6h%2FXWvonfXPm8TWx3pGOEQxnYeZGTI7J3RWNWfUGkx4vJLaQSDg1CROUoBERLhF8W3BiXttxk3VokmYJgIHFu%2FBKyGa15FRcU1qbabmN3BMNS6zr8GOqUBasItk1cOB0RGQha3PQH2Z0BrCR53sAqz%2FBMrs%2B0y2U%2BgbwXL6YdfGQXDV02gDUROZr5q8vMUBge19vFn7ZZ0CQfu0XAAuqXedktP9AJ%2FXtLo6i219DL4%2FoGjVaCHhqEln4e6I7zFxy7in%2BfqH3zmSOQoeVGsb27Fc0ZppO6XrE4%2Fv56e80FrA1dW9P8A1fvuNYQJfJAJslW6rlG%2FBq9eRaWJ4kkU&X-Amz-Signature=dd897fc10b9db1e352e97b0d5877998b0233c79413e2ea81a1e15912230eeb3a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WZ4D62T3%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T100948Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDT91v2at4Bt5YoLFhkodQtIQTYVegiIO5s2B%2Bqia05iAIgXQzbN5jf2fg6dXcNysFz3fmSef5eMk9RAnT852Ev%2B%2FAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIIaqsbKPwZYMzNEcCrcA48Q2daCcXbpX2%2Fj02UB%2BtxH0Piyarv6g5YKc121yr1F2nd63SpkPIwpyTmsVt7x6zxHyrABC4tNlIFJZIyKqxsKIWCA7SWk%2BxrWgXge6DUqnWKJWGKOp2ERfeXksgNh5mAQ5goF4IoIKltzDbdLWmtRua%2BZC9n80PUJh7WXimdfxPq6kvY70a%2B9XAtHMJ0NQRWltRTYbfPzYNier5%2FSK9zIfHiJ5%2FjVPXtxhQY6hvGCSNYbA2wb6oCx9uIPWFB5Ka%2FDx%2BynTCnZfGDlmWRau8FT8jQ9ria36JOCgRKKKNNIWmtdw8TokCiRyGh2LCNHGJEiun87OJ0y6wiFTshf1CzHHhSD9IaMChha%2FLXVxTSpBRfnM1HPE5JPh6uajTTnDtXShaRt4m5CkiklcdEC%2B83mnJzzV30jqK3doWLgcwHFOSD%2FdtX7nG%2FR62pLz50OTrNgvrmuqI51MkqtmWQd77WcjXoSsaoZAOM9XSLSfuyYEdZCii%2BYoy9hDAmNRgF8i1glY4%2BF9yqJ8RiAFC6h%2FXWvonfXPm8TWx3pGOEQxnYeZGTI7J3RWNWfUGkx4vJLaQSDg1CROUoBERLhF8W3BiXttxk3VokmYJgIHFu%2FBKyGa15FRcU1qbabmN3BMNS6zr8GOqUBasItk1cOB0RGQha3PQH2Z0BrCR53sAqz%2FBMrs%2B0y2U%2BgbwXL6YdfGQXDV02gDUROZr5q8vMUBge19vFn7ZZ0CQfu0XAAuqXedktP9AJ%2FXtLo6i219DL4%2FoGjVaCHhqEln4e6I7zFxy7in%2BfqH3zmSOQoeVGsb27Fc0ZppO6XrE4%2Fv56e80FrA1dW9P8A1fvuNYQJfJAJslW6rlG%2FBq9eRaWJ4kkU&X-Amz-Signature=1ff72e45be3e5c66bf16ea1d1af1ef6e74869785ddb8422d13fadee9dfb5ec55&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
