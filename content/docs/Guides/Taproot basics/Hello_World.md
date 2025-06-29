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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBFJ53FB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFOvB%2FNTHrbP3ZwJrxCY8W7iOGvm8MSKAwYgvc%2FATi%2BAiBK3tXJSpDhtGVEE3m6YYWCQ4YnmVXkCBnEkNbauQnqoCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo3feG3ZY65NeNa92KtwD%2BuYAkcwtHqWGy45C5u8ON%2BgP1BsL2a1J5BhQlC%2BDtEAiOQco%2B2hjum%2B0IdqvzZfeQk1WLuycqTyXgVU9u%2FIqcn2XAp%2FmOm6T8CXWSyPB5Qq1AO5ZFaqB4L8JLYlwv8mIhh6tI1NvWwyx5DuoD2OagxM1vAFj3GJhDOL5ds79eCdd9AUHagOtHJD5SxwnnpUU1PQ4zRVhGcVJ9p83bHnx2ykCXxSP5Vj%2BogW2CWo4AyEcYh9I5jy%2F0tPdUuuxKH5I4DtnW4%2BbCKFDMbqVFXRoa5M0BXiq5SzNZl1gXdk6hIN%2FUpg6Dt2dLwAAiesYt1Zq4jAUeSLJOFd3Qk0cL4eNNVHl2PyVRfqrE%2Brb4RqZSsmELiot22RFwtm1ZxUnS8pYCUUIGC6CsTf9EaCveh3aC%2FCeETSGCu2%2B5wuxSgF0jHqkQDPdjFZXKnc9kLDCKweZzHLmpZJhyZ%2BER%2Bp0MTUEYO2sFFl2SoJQVflXyaiuD97y3R6o%2FtsUoRZ1eNY%2BUnjw17%2BgM03hkGuZAXRRobQwZwI3bq9Rh%2FbmcTpu16OM23zz8fdzO%2F1FbFugk6N4eIXaVxJK4Ml5JIsnGSYerui%2BlK3eWULvvCRNYlUPm6t6cdLr0oWcvFExT7BfTasw0taDwwY6pgHPJ3mtgct286hHY5735Vcz%2BaZnSK5XfVcaQ0GY%2FVAadnWUTkWh4S1fJj9PIxZcfoBRzhFn1z2qN6p7SGvIMFedxOUdJJ8qsSYE3Kac7XFxTi71rHyxUVB1GYdx9nX2a2L0gJTqKeM6QAu%2F7Qr1Hz7TmHmJ4IfzO%2BL%2B%2F4fpjoQdS%2FKR%2BXcUrEsDhbC7GF5THSYmgq1Gypz2SlTgcll9Bv10HuYwouIC&X-Amz-Signature=787d433fcc6bdf8ec7dfe7064ba2459e33106a3b92f3483da7a4db9db75026c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VBFJ53FB%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T081027Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFOvB%2FNTHrbP3ZwJrxCY8W7iOGvm8MSKAwYgvc%2FATi%2BAiBK3tXJSpDhtGVEE3m6YYWCQ4YnmVXkCBnEkNbauQnqoCqIBAih%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMo3feG3ZY65NeNa92KtwD%2BuYAkcwtHqWGy45C5u8ON%2BgP1BsL2a1J5BhQlC%2BDtEAiOQco%2B2hjum%2B0IdqvzZfeQk1WLuycqTyXgVU9u%2FIqcn2XAp%2FmOm6T8CXWSyPB5Qq1AO5ZFaqB4L8JLYlwv8mIhh6tI1NvWwyx5DuoD2OagxM1vAFj3GJhDOL5ds79eCdd9AUHagOtHJD5SxwnnpUU1PQ4zRVhGcVJ9p83bHnx2ykCXxSP5Vj%2BogW2CWo4AyEcYh9I5jy%2F0tPdUuuxKH5I4DtnW4%2BbCKFDMbqVFXRoa5M0BXiq5SzNZl1gXdk6hIN%2FUpg6Dt2dLwAAiesYt1Zq4jAUeSLJOFd3Qk0cL4eNNVHl2PyVRfqrE%2Brb4RqZSsmELiot22RFwtm1ZxUnS8pYCUUIGC6CsTf9EaCveh3aC%2FCeETSGCu2%2B5wuxSgF0jHqkQDPdjFZXKnc9kLDCKweZzHLmpZJhyZ%2BER%2Bp0MTUEYO2sFFl2SoJQVflXyaiuD97y3R6o%2FtsUoRZ1eNY%2BUnjw17%2BgM03hkGuZAXRRobQwZwI3bq9Rh%2FbmcTpu16OM23zz8fdzO%2F1FbFugk6N4eIXaVxJK4Ml5JIsnGSYerui%2BlK3eWULvvCRNYlUPm6t6cdLr0oWcvFExT7BfTasw0taDwwY6pgHPJ3mtgct286hHY5735Vcz%2BaZnSK5XfVcaQ0GY%2FVAadnWUTkWh4S1fJj9PIxZcfoBRzhFn1z2qN6p7SGvIMFedxOUdJJ8qsSYE3Kac7XFxTi71rHyxUVB1GYdx9nX2a2L0gJTqKeM6QAu%2F7Qr1Hz7TmHmJ4IfzO%2BL%2B%2F4fpjoQdS%2FKR%2BXcUrEsDhbC7GF5THSYmgq1Gypz2SlTgcll9Bv10HuYwouIC&X-Amz-Signature=5bb80dc46d9d0215d7ad7ad7ecaac3ef4ba1a006e107462238e6476d36014c60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
