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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAGAOWFW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC2yP3j33UPmzRWqjie7bDyfKdnhCIYiF6ckQwzN7hHIgIgGyHohxqxcU%2BalDAFAcPNRpU9u8aId8DcpsP%2FmOBEIqUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDFAeOxmX6sAoh8VSrcAzqOEEEcY8s6C9BNobH4PhJX44dW2irWRDK9pYMuXdD1OGbp8voODQqNIrhN2oQW%2FVZxZY05XLFF4VdwIA%2B%2Fn5KbWmyOcrWRzb4wVSrkmkbGlS375KcJO32ZYB4B5YZCBevWQk49jpU6gP99ntcJvVowrSppkDX%2Fj7zstNURlcXC8DxG5jwuWWvNANwMqNGRIjOanBx6wq0YMo98OXnRwIskhyb2NSbZKtDn4FlRg1yxbd%2F9tuapR%2Bd1DE8VHNygBDHhVFv6QbzixEyGyPlVMOPMTz50Nb3Z3OPiu1Up8u6Cr3Iq27MDG8VK0pkovQb1ETomO5YhJcpMJp9lrtR0ftZ1rRppTgHoB%2FJD4V%2B47d30zlK8t9sG3Wm5U0cunawHD6GZf64%2BdxSEtA79e7V9eRdGmXcuFeUH4pjVZL%2F5hEdXriAAEWXrPpPzkHlGFpGFKHQmvqXWIu2I5f6tJhiOJotblN1l%2Bv0W%2BT54UDCRqTAWcRDV3jTueOf9upx%2FI5V5sQP94Xl5nEhRYZf89tgf5MtVGO0L7SNwXZFXFmmCNpiQCdNNxfFzder7mPLVpT%2B1qrWRsM1jmZDhUxCSwv0RyDyY8EiIczj5Vw%2Bp9uD%2BW1SmKXaUC3%2FmGyCSIQjPMK3I278GOqUB%2BBJ3ngvPoqFv3Ojx4slY536krPGGjwgQMIk673M1Or3ei6uVgiw2oVWUvfmj8iQepBuBBpSkG5eaMTyrJbm7CLVez5wfYBGp1s3eB195K%2Fz1sIMwhsodDEKGubaIUJwOeBDz1j5sO7nNkkkxwV4Iqj4d8dYgFV5CbLyx3g51gQ1wwWI2OKcLSEnKxYIBfE9Qf3sJDlIPoybSCM%2FdI9AKtRWjHva1&X-Amz-Signature=7bb58c37653420509b52334f515858b09782ea175330979e17d1d673a81c077b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UAGAOWFW%2F20250409%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250409T220752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJHMEUCIQC2yP3j33UPmzRWqjie7bDyfKdnhCIYiF6ckQwzN7hHIgIgGyHohxqxcU%2BalDAFAcPNRpU9u8aId8DcpsP%2FmOBEIqUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNDFAeOxmX6sAoh8VSrcAzqOEEEcY8s6C9BNobH4PhJX44dW2irWRDK9pYMuXdD1OGbp8voODQqNIrhN2oQW%2FVZxZY05XLFF4VdwIA%2B%2Fn5KbWmyOcrWRzb4wVSrkmkbGlS375KcJO32ZYB4B5YZCBevWQk49jpU6gP99ntcJvVowrSppkDX%2Fj7zstNURlcXC8DxG5jwuWWvNANwMqNGRIjOanBx6wq0YMo98OXnRwIskhyb2NSbZKtDn4FlRg1yxbd%2F9tuapR%2Bd1DE8VHNygBDHhVFv6QbzixEyGyPlVMOPMTz50Nb3Z3OPiu1Up8u6Cr3Iq27MDG8VK0pkovQb1ETomO5YhJcpMJp9lrtR0ftZ1rRppTgHoB%2FJD4V%2B47d30zlK8t9sG3Wm5U0cunawHD6GZf64%2BdxSEtA79e7V9eRdGmXcuFeUH4pjVZL%2F5hEdXriAAEWXrPpPzkHlGFpGFKHQmvqXWIu2I5f6tJhiOJotblN1l%2Bv0W%2BT54UDCRqTAWcRDV3jTueOf9upx%2FI5V5sQP94Xl5nEhRYZf89tgf5MtVGO0L7SNwXZFXFmmCNpiQCdNNxfFzder7mPLVpT%2B1qrWRsM1jmZDhUxCSwv0RyDyY8EiIczj5Vw%2Bp9uD%2BW1SmKXaUC3%2FmGyCSIQjPMK3I278GOqUB%2BBJ3ngvPoqFv3Ojx4slY536krPGGjwgQMIk673M1Or3ei6uVgiw2oVWUvfmj8iQepBuBBpSkG5eaMTyrJbm7CLVez5wfYBGp1s3eB195K%2Fz1sIMwhsodDEKGubaIUJwOeBDz1j5sO7nNkkkxwV4Iqj4d8dYgFV5CbLyx3g51gQ1wwWI2OKcLSEnKxYIBfE9Qf3sJDlIPoybSCM%2FdI9AKtRWjHva1&X-Amz-Signature=442c26ff026aa8e2c97e3e3cb8df12260a92b6b6d5cdcba42cdd5a96a8daae12&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
