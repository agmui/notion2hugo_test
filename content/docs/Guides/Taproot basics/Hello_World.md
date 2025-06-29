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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMODGZW4%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnz%2F3jbpyZvf8VIhDY04%2FZG9JJCw7HQqWXtO6UzYufMAiEAuRqyEhIJRWmAGR6CoOv42hGEIm5XgUMMrCm8sjTKr5EqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQL0uzMfxu9cxW%2FbyrcA3cObnWtCZ7IbzCVfw8Ktj5KhC7uRHr6v7QunK1L1lWrbD8wjUuNstGcBewGjEVIE3lGJ%2BI6%2BGSIpxPINgEWhcc%2BvvRU7l2tvtw4eql%2BHJ5CuXoUlRwz6rfrZI%2F4cbTuW%2B%2BFddVuTVQjBzthat26x46wpBHOx4Yn5m79FEvZmFJo41uEiWSxK3y53KBMZzi4SiifpCBvDS%2F97k8mfV4%2B5NGh%2F5JNhklCiH3YmnU8oc5wSTNu5rhuVcizQJ6j2dStS3Koz60WKFwPNWcFJss56rA%2FE%2FloV2Fmu5JdDok5MXsbyWB%2B%2FaAGDlV0jeI9c1CUg3JUVmUKlAGiYeAey%2BZVRP599LEbiV%2FejdI54Z5WHlwb1JrV%2F0gmROEaZlwDUZxky3aYqpYK8%2BtjQ1NWdxNIRhuuKjTuzcUUQ1xsDQCnb%2BzkLwqUy%2B53c%2FTWRFh2Jp%2BeabJ8RGmHFSYwc1NasXDNOSBuyuy1lNm4S6dE9DecfdKzaaNHmknrrLHgIHOkb9CLvApPlk3nAsLYh9C941%2F2KO5biztgy5jcS%2F%2FjDLiuJFb2ctbfFweTfpLONTM18zmkMk92GZq1qkZ%2FBT0oF%2FYHnnL224I4unc8ckejylVcIpKY9h1DVR4VEJTn2pGUMLyBhMMGOqUBi%2Bih%2FSmwBeqZukv402I1FHq7wV37XyjrmN8jc8lzR0ne3H0XPDwTHnTI4LwdeJrUin7Zxz8doc2PEikGxPu5k0dwxht9Q7HQIPvwlNp9VtHWSTdJSgesqbvozdfHq9FppV9Np4s%2FrJnrmxkN%2Fc%2BCrFJ9NKd6YsasL0SWm82l8Vv7hbMeOu1mhHhvwgDgVONvNbw5xB%2FKYGXv5P84dVvKk1%2BNByGh&X-Amz-Signature=e2566b4fea39e7d08e3e9e46919ca4271ef9762f28f1ebc0ccfbbb7260b5363b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QMODGZW4%2F20250629%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250629T090805Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGnz%2F3jbpyZvf8VIhDY04%2FZG9JJCw7HQqWXtO6UzYufMAiEAuRqyEhIJRWmAGR6CoOv42hGEIm5XgUMMrCm8sjTKr5EqiAQIov%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHQL0uzMfxu9cxW%2FbyrcA3cObnWtCZ7IbzCVfw8Ktj5KhC7uRHr6v7QunK1L1lWrbD8wjUuNstGcBewGjEVIE3lGJ%2BI6%2BGSIpxPINgEWhcc%2BvvRU7l2tvtw4eql%2BHJ5CuXoUlRwz6rfrZI%2F4cbTuW%2B%2BFddVuTVQjBzthat26x46wpBHOx4Yn5m79FEvZmFJo41uEiWSxK3y53KBMZzi4SiifpCBvDS%2F97k8mfV4%2B5NGh%2F5JNhklCiH3YmnU8oc5wSTNu5rhuVcizQJ6j2dStS3Koz60WKFwPNWcFJss56rA%2FE%2FloV2Fmu5JdDok5MXsbyWB%2B%2FaAGDlV0jeI9c1CUg3JUVmUKlAGiYeAey%2BZVRP599LEbiV%2FejdI54Z5WHlwb1JrV%2F0gmROEaZlwDUZxky3aYqpYK8%2BtjQ1NWdxNIRhuuKjTuzcUUQ1xsDQCnb%2BzkLwqUy%2B53c%2FTWRFh2Jp%2BeabJ8RGmHFSYwc1NasXDNOSBuyuy1lNm4S6dE9DecfdKzaaNHmknrrLHgIHOkb9CLvApPlk3nAsLYh9C941%2F2KO5biztgy5jcS%2F%2FjDLiuJFb2ctbfFweTfpLONTM18zmkMk92GZq1qkZ%2FBT0oF%2FYHnnL224I4unc8ckejylVcIpKY9h1DVR4VEJTn2pGUMLyBhMMGOqUBi%2Bih%2FSmwBeqZukv402I1FHq7wV37XyjrmN8jc8lzR0ne3H0XPDwTHnTI4LwdeJrUin7Zxz8doc2PEikGxPu5k0dwxht9Q7HQIPvwlNp9VtHWSTdJSgesqbvozdfHq9FppV9Np4s%2FrJnrmxkN%2Fc%2BCrFJ9NKd6YsasL0SWm82l8Vv7hbMeOu1mhHhvwgDgVONvNbw5xB%2FKYGXv5P84dVvKk1%2BNByGh&X-Amz-Signature=e835db966d6a7268b91ea4d0af95a2b551496c5d13827757b319af186f7acf37&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
