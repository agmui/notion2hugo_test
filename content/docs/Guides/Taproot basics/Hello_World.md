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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2POQO5D%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1vz3uv9TW%2BnxEgoQIQ2cI%2BOLWya1T5%2Ft2UurWvHYHeAiEAhGsVw%2BDhPB0yqHardOlU5XJoTuQKUCnw5RS7Hkje1BUqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZifTfaWGX2xVrrmCrcAxilV0A1F8UnL0Pp2OUzMuq5ccMRf8GW9hONSrl8njxZxcFlKcm7oiK4MbCntIyeuuqN3sS%2BlXddlY8uRNgW6sTE8RCNc0skOGnLDgn8KFQvr7WqYOVHX96fUtStEpmNNdqRAw42V1yYfofKJBTZZE7U3Xyz1SFNcC4%2FKrgUevdn4aCqCmbYTMBL%2BJJSs8hJ4VhYmj8a0H87TtF9B02TlpV3NoPN8jIvmkYikPL6XQZjZWSpTZXJ4%2BeEWAX2vjhkKWYr67%2FntjHNSGzo7Jnnk5o2FxTy6KoX4%2FcOasukQ3loXO%2FtF06yGicU6YFXKBy6XyrFZWXaN5FJEg%2F6VLNXcv1Yl%2FSEa6SQ9lfu4aUqE9QlZxVH9TEwpMk0ORN7sfDZuoOLtmSc0jVXXJQ%2B8LWXUkao9CEYq98MY%2FtGbGwZTqn5EHQzVL2s799mg5jcIT5XtyBBv3s1prDVkc0bloiszl2e66QN1f8YWrPc75DE%2BdhcrJNNvxpks31wFCWIR%2F74flGa7nv4pFQOGyjNIXpds%2Bslz%2FKtY%2BRmrU763HL8dNTLzE3QnhHhMweb9URpquDQEH7KM7h4FSYn%2BsDnBv3sKTrPx%2FldYN1IHhRM0Uy7Ou70l4TTMxBcwbOeXEy6MOnfzsIGOqUBtq9UgvJSVJ7iN1quZob55XQVmKmRtVT88%2BwQGVanD4SjJJCSJHm2r4EZ4fpGg7RMV1SnfWLTyIPPHMpW1rLtRLRfhVUYbJWiOV%2BvqumzYhUG6mL601mPFttw%2F%2F8sgw3kPOiyuGQolcnPdDmvZI7tFfE4%2BwAziaNQk%2FLqVceaiYeHwBEaGgxAuf2%2BCszVd9%2F3eSeVga6ZPDInlGTDN7PGeM2%2FqaDP&X-Amz-Signature=9607b1f1e1bbe41d8a4ffbf4ac1d3c21e3996e0972be89168729488a9d63ea1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R2POQO5D%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T081252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG1vz3uv9TW%2BnxEgoQIQ2cI%2BOLWya1T5%2Ft2UurWvHYHeAiEAhGsVw%2BDhPB0yqHardOlU5XJoTuQKUCnw5RS7Hkje1BUqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJZifTfaWGX2xVrrmCrcAxilV0A1F8UnL0Pp2OUzMuq5ccMRf8GW9hONSrl8njxZxcFlKcm7oiK4MbCntIyeuuqN3sS%2BlXddlY8uRNgW6sTE8RCNc0skOGnLDgn8KFQvr7WqYOVHX96fUtStEpmNNdqRAw42V1yYfofKJBTZZE7U3Xyz1SFNcC4%2FKrgUevdn4aCqCmbYTMBL%2BJJSs8hJ4VhYmj8a0H87TtF9B02TlpV3NoPN8jIvmkYikPL6XQZjZWSpTZXJ4%2BeEWAX2vjhkKWYr67%2FntjHNSGzo7Jnnk5o2FxTy6KoX4%2FcOasukQ3loXO%2FtF06yGicU6YFXKBy6XyrFZWXaN5FJEg%2F6VLNXcv1Yl%2FSEa6SQ9lfu4aUqE9QlZxVH9TEwpMk0ORN7sfDZuoOLtmSc0jVXXJQ%2B8LWXUkao9CEYq98MY%2FtGbGwZTqn5EHQzVL2s799mg5jcIT5XtyBBv3s1prDVkc0bloiszl2e66QN1f8YWrPc75DE%2BdhcrJNNvxpks31wFCWIR%2F74flGa7nv4pFQOGyjNIXpds%2Bslz%2FKtY%2BRmrU763HL8dNTLzE3QnhHhMweb9URpquDQEH7KM7h4FSYn%2BsDnBv3sKTrPx%2FldYN1IHhRM0Uy7Ou70l4TTMxBcwbOeXEy6MOnfzsIGOqUBtq9UgvJSVJ7iN1quZob55XQVmKmRtVT88%2BwQGVanD4SjJJCSJHm2r4EZ4fpGg7RMV1SnfWLTyIPPHMpW1rLtRLRfhVUYbJWiOV%2BvqumzYhUG6mL601mPFttw%2F%2F8sgw3kPOiyuGQolcnPdDmvZI7tFfE4%2BwAziaNQk%2FLqVceaiYeHwBEaGgxAuf2%2BCszVd9%2F3eSeVga6ZPDInlGTDN7PGeM2%2FqaDP&X-Amz-Signature=344e97400c9f8871e470ecb5a64b0e94f93fee236c53364a2f0f701e3ce19d60&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
