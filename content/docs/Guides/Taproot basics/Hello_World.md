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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GAHIGWS%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICd%2FrNwIh5b0usAWyqRbrWysH9JyD%2BJlgGteGvdSzMbtAiB2IBjTyMMJNjFiebdms%2Fod2TXGqxp3FC8oh2aTVbia7SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHaHzIIYxnkmQKxjAKtwD0qNAhh6%2BbDv9Um7Qgtb48cfIkSqsmCIfFQC%2BPXZe3wKvoPswJdI05Hnq3tFOUJFR39QSToiLqxukmpxyymkie1q4Bls8pBoYuqChQVM0oHjWSm6hTA6dhjsV44t4yhS8T%2Bx13i4v3SRcz5zB5WwYr9H0zbTwvH9ymxICfxTvkHDJHH92K%2B2PlNRSDciZ15NUbWXn%2Bt45OinIKGltlbGs7zgY11T4DPpS4MNC8esY%2ByyABZh%2FofSXTK%2F4mRPr1mHoza36RxQsh%2Bq2xvul2IhiYfRWnHUaIvtMmKOGnJ8yq65UmCPIDugvhC1A4CZzyt9tmN0%2BiPXB6sB1c6ddg7zio8hJQu2xQ7hiG8Vph3Gv7WIZJsHqQouAPocDDXUrLUCGpebN0rUFKUn5u0S0kNzRRZM4nSOUQaVRopY40a4%2FrTsm4XhhxG3wje3dfeHiX%2FZR3Rd%2F51IJGX0ExIAR8muO1jxDo5DLt0UK%2FrYmBJaxewi2DhneG3Yay1pUBd86tgNLmSof2v0uymH%2BiXAmQY7s5QEXOiT5N%2B8xiJbhFZqPu6SwxLIAddUROZfxfV4XIGUV%2BwxzMhEbUEuvUJuolU%2BMtnTA7TzL%2FYhs%2BtbrP9Eq1OQs1PQuBhsNOAT5Twow8c6pvwY6pgGA5bfjA07t19Nhxj9eRLW3%2FS5VDP86Vx%2BoutmjdB7uIHfWx46IinlaR%2BGxRHGZiBaeAzFMzBbT%2BvpPkeGOZn7dwjyBU4R1yU5aZgQkWvx%2FE6mf58UGFtwD1TQCcCnbTYagfgRo6GCv0uEVbHwvB57HiSvEeuNfI1hmbsdg9gPQbY%2B9sFlOivFgywBkZXB4WsZJWScfMrFMiHA2wFafPkYIBGZzK50E&X-Amz-Signature=c61b0ea4282a3ac70ed50691ed5ce965250bbf74fde634029fb2fe6570559509&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666GAHIGWS%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T100907Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDoaCXVzLXdlc3QtMiJGMEQCICd%2FrNwIh5b0usAWyqRbrWysH9JyD%2BJlgGteGvdSzMbtAiB2IBjTyMMJNjFiebdms%2Fod2TXGqxp3FC8oh2aTVbia7SqIBAij%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHaHzIIYxnkmQKxjAKtwD0qNAhh6%2BbDv9Um7Qgtb48cfIkSqsmCIfFQC%2BPXZe3wKvoPswJdI05Hnq3tFOUJFR39QSToiLqxukmpxyymkie1q4Bls8pBoYuqChQVM0oHjWSm6hTA6dhjsV44t4yhS8T%2Bx13i4v3SRcz5zB5WwYr9H0zbTwvH9ymxICfxTvkHDJHH92K%2B2PlNRSDciZ15NUbWXn%2Bt45OinIKGltlbGs7zgY11T4DPpS4MNC8esY%2ByyABZh%2FofSXTK%2F4mRPr1mHoza36RxQsh%2Bq2xvul2IhiYfRWnHUaIvtMmKOGnJ8yq65UmCPIDugvhC1A4CZzyt9tmN0%2BiPXB6sB1c6ddg7zio8hJQu2xQ7hiG8Vph3Gv7WIZJsHqQouAPocDDXUrLUCGpebN0rUFKUn5u0S0kNzRRZM4nSOUQaVRopY40a4%2FrTsm4XhhxG3wje3dfeHiX%2FZR3Rd%2F51IJGX0ExIAR8muO1jxDo5DLt0UK%2FrYmBJaxewi2DhneG3Yay1pUBd86tgNLmSof2v0uymH%2BiXAmQY7s5QEXOiT5N%2B8xiJbhFZqPu6SwxLIAddUROZfxfV4XIGUV%2BwxzMhEbUEuvUJuolU%2BMtnTA7TzL%2FYhs%2BtbrP9Eq1OQs1PQuBhsNOAT5Twow8c6pvwY6pgGA5bfjA07t19Nhxj9eRLW3%2FS5VDP86Vx%2BoutmjdB7uIHfWx46IinlaR%2BGxRHGZiBaeAzFMzBbT%2BvpPkeGOZn7dwjyBU4R1yU5aZgQkWvx%2FE6mf58UGFtwD1TQCcCnbTYagfgRo6GCv0uEVbHwvB57HiSvEeuNfI1hmbsdg9gPQbY%2B9sFlOivFgywBkZXB4WsZJWScfMrFMiHA2wFafPkYIBGZzK50E&X-Amz-Signature=29c4b00326246ee9a62156a5b688d7931a68fe98760129a3fd3c18e9890e5be7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
