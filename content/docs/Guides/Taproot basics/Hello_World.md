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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHZ7DNCC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCbUgsjLM4Vz3Wccw9Z62psOzRVpVoDUKRGpdJ%2Fru0T0AIgVBNaOW1THgFqGg%2B%2BOSoVeM%2BMGOhVQ8XUDxw%2BKobQUO4qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNN%2FiHoNC%2BLUT1va8SrcAxWkyJzZbWy5XWW9QEqGSNfNdzU6uMsgjZRdtiucC2HIAO%2Fd5EB1ESlmK%2FKhHE8LHatatGHJqYy67KLFCI5vdO59uDI48qHjG1kStiHFeVMIEBUCiuF64pRv7UntvCJpCcMY6quDKz3gBLz%2Bxk%2Fl47j32fWj1NDeCet29Okfnogu02Ke0Q1tgVmn7AHLga0R4TIt0k%2BZx%2FNfVxQmKilnkhfTegvWhvNt9kW369UMkvkjbm4AggUgyFrsDtB5FMVKVO%2Fqdc5ckuAgv2CKZOhUvRKB9TpDj3eSDzfAFY51xupP6dJwCMPlUcObnUkulg8dO2fO%2Fq5awP2Q%2FhL3O0RMBtHA6tdOoIEVCWkBpsmrqOUClygqMl%2B5z1cY0B7nq0lo7u1FOvxScYuM3Yi%2BX1ejcdzoBX6P9G1gmzibblyFxvyE4OcIu8jCMaDiBV9o9RVJ44MOyN3pKA7vPHe23mhMLcBXjcNQr5cM4XPi7iNpwhypXQop5ne49JfaXwkDGbEE7byv4oAGzZmqOvhNFEGTrD7AhSDY5vnYi3j6PSft8MYRVT5EjEtECQounvyTp57MviNL3G9VTU4rs8mYWt%2Fq%2F1NkyqW%2FDXXuYVPSLkiRmYbGnIO1habhRM1afkddMJmkksAGOqUB15R7wq8agdVu8Om2OvA3CgIvKb%2BTAm7e1HCnNqREBc8Xc%2F68VzJIu1vN0hXTSyzoltyTUgtA1HLwC%2F1nUbwxLPOBDuWhTlFg7z6ss8ZkUBkQf0cJ2oslQ4dAo%2Fs1yFn6Ww3d7sH4YEMfUyByAL60ctJB7zKyZxdl1QlgD4YzTvIiKLDllBHsVG1zONNz%2BBf%2FVQhPC1oA6NYlhZ8TOjnhm5EUw8Kd&X-Amz-Signature=03d99c78ed5aa6c42a9f6ab190ccbcd1006f0365d5bbb299f6687db6da7a40a3&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHZ7DNCC%2F20250420%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250420T121259Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCbUgsjLM4Vz3Wccw9Z62psOzRVpVoDUKRGpdJ%2Fru0T0AIgVBNaOW1THgFqGg%2B%2BOSoVeM%2BMGOhVQ8XUDxw%2BKobQUO4qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNN%2FiHoNC%2BLUT1va8SrcAxWkyJzZbWy5XWW9QEqGSNfNdzU6uMsgjZRdtiucC2HIAO%2Fd5EB1ESlmK%2FKhHE8LHatatGHJqYy67KLFCI5vdO59uDI48qHjG1kStiHFeVMIEBUCiuF64pRv7UntvCJpCcMY6quDKz3gBLz%2Bxk%2Fl47j32fWj1NDeCet29Okfnogu02Ke0Q1tgVmn7AHLga0R4TIt0k%2BZx%2FNfVxQmKilnkhfTegvWhvNt9kW369UMkvkjbm4AggUgyFrsDtB5FMVKVO%2Fqdc5ckuAgv2CKZOhUvRKB9TpDj3eSDzfAFY51xupP6dJwCMPlUcObnUkulg8dO2fO%2Fq5awP2Q%2FhL3O0RMBtHA6tdOoIEVCWkBpsmrqOUClygqMl%2B5z1cY0B7nq0lo7u1FOvxScYuM3Yi%2BX1ejcdzoBX6P9G1gmzibblyFxvyE4OcIu8jCMaDiBV9o9RVJ44MOyN3pKA7vPHe23mhMLcBXjcNQr5cM4XPi7iNpwhypXQop5ne49JfaXwkDGbEE7byv4oAGzZmqOvhNFEGTrD7AhSDY5vnYi3j6PSft8MYRVT5EjEtECQounvyTp57MviNL3G9VTU4rs8mYWt%2Fq%2F1NkyqW%2FDXXuYVPSLkiRmYbGnIO1habhRM1afkddMJmkksAGOqUB15R7wq8agdVu8Om2OvA3CgIvKb%2BTAm7e1HCnNqREBc8Xc%2F68VzJIu1vN0hXTSyzoltyTUgtA1HLwC%2F1nUbwxLPOBDuWhTlFg7z6ss8ZkUBkQf0cJ2oslQ4dAo%2Fs1yFn6Ww3d7sH4YEMfUyByAL60ctJB7zKyZxdl1QlgD4YzTvIiKLDllBHsVG1zONNz%2BBf%2FVQhPC1oA6NYlhZ8TOjnhm5EUw8Kd&X-Amz-Signature=d19e51a63e44e53b912442e313de1e35eba03fd37ab3058814ff165fcd31d666&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
