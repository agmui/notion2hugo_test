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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QKUBRWJ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCl2lif02R9KLa4qAi2hV3oTaSRktxW0uOJlwCnJdbMMgIhAMugshVSkE%2F%2FOsLJrZvqwfk12Ipy0wGrumEPrp%2FTAl%2FpKv8DCB0QABoMNjM3NDIzMTgzODA1IgwDJ4W%2FKvEihBMe3Gsq3AOHrNXaIK92WPkeKEWC%2FexB6zo4bBKNwLJZFPq1Fm480hSmWU4qP4vpuPYO83JU7vKNW0cuDrevxwcN2U8cR0uXeXUYkLLRkgaiwUXzN9i7Iu5cQo2%2FHruKb0%2Bu51Ynu4wufNF0Tnl9KkYrwok8AdDX5oqXcfzAhW5GWhBGku3%2BF0LIg%2FGB2nEXvTb6rd14Bm4Jva9PH3EyUeDReTpP45Sp9v7G0uFBCcPWCRwRCISNEqOSUH2LiRjdZrrYWfACCcc6FSv2loT58omWdvHQ644dLCuLkHskjIluO3NFe75SuoNoTiSiWN0jo%2BCgrMbFy2cjGd%2FjDV%2Fj2%2BHhtl2m1tEGv5OmH5%2FKUx%2F4d0GqVo7xD2jik7GscVHsov9jcLJKOH5J6%2FHHKel8TUXRKh%2BxgkpNxUATmrjozN4tfffnQhl2raDiEdN96ECfkMUJrKyO0gu8s%2BQuWl6XzS5%2BAtdttCnsjuAay2wWr4GEp1lMs6B9JkASNojeXX78PHIsMTz5yCqSuu1%2ByEjicLRIQrerGZGZmy9tCZTdTs9hGEIIatFj65uJ8HhcMIL2Uhcxwn1ycTdUQUtIskSJIG6uELhJYK4%2FBHFc5zbS%2FmQNpPC9Wra3qpxSRiLo6gsCVXa7kDDQkNDDBjqkAUXXbOO8qFVWsj3lxwSv9PQel4L1cZxuoFMMkTdufu2rGFzEmxzzwKwMsTcn45B3WbwU5QMJYrsHY1q%2B32NmgL%2BMrMiV%2BZEvckLECj8xIsuDuKhp%2BXg19OmSd%2Bi6VplB5GTCVfuozUSnv2RwQ%2Bbj35nNQ3eTBt9f%2BxPzuobUHBtPsCpdSuY6%2BU4cuxXDL8GJFDLcYcpO9i2c9bDRpgRv7U0Kh6j7&X-Amz-Signature=8fa80df0e66290525b44880c4e342003abf7fd5e4f04b93e5a5c665051a0de96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667QKUBRWJ%2F20250713%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250713T200903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAQaCXVzLXdlc3QtMiJIMEYCIQCl2lif02R9KLa4qAi2hV3oTaSRktxW0uOJlwCnJdbMMgIhAMugshVSkE%2F%2FOsLJrZvqwfk12Ipy0wGrumEPrp%2FTAl%2FpKv8DCB0QABoMNjM3NDIzMTgzODA1IgwDJ4W%2FKvEihBMe3Gsq3AOHrNXaIK92WPkeKEWC%2FexB6zo4bBKNwLJZFPq1Fm480hSmWU4qP4vpuPYO83JU7vKNW0cuDrevxwcN2U8cR0uXeXUYkLLRkgaiwUXzN9i7Iu5cQo2%2FHruKb0%2Bu51Ynu4wufNF0Tnl9KkYrwok8AdDX5oqXcfzAhW5GWhBGku3%2BF0LIg%2FGB2nEXvTb6rd14Bm4Jva9PH3EyUeDReTpP45Sp9v7G0uFBCcPWCRwRCISNEqOSUH2LiRjdZrrYWfACCcc6FSv2loT58omWdvHQ644dLCuLkHskjIluO3NFe75SuoNoTiSiWN0jo%2BCgrMbFy2cjGd%2FjDV%2Fj2%2BHhtl2m1tEGv5OmH5%2FKUx%2F4d0GqVo7xD2jik7GscVHsov9jcLJKOH5J6%2FHHKel8TUXRKh%2BxgkpNxUATmrjozN4tfffnQhl2raDiEdN96ECfkMUJrKyO0gu8s%2BQuWl6XzS5%2BAtdttCnsjuAay2wWr4GEp1lMs6B9JkASNojeXX78PHIsMTz5yCqSuu1%2ByEjicLRIQrerGZGZmy9tCZTdTs9hGEIIatFj65uJ8HhcMIL2Uhcxwn1ycTdUQUtIskSJIG6uELhJYK4%2FBHFc5zbS%2FmQNpPC9Wra3qpxSRiLo6gsCVXa7kDDQkNDDBjqkAUXXbOO8qFVWsj3lxwSv9PQel4L1cZxuoFMMkTdufu2rGFzEmxzzwKwMsTcn45B3WbwU5QMJYrsHY1q%2B32NmgL%2BMrMiV%2BZEvckLECj8xIsuDuKhp%2BXg19OmSd%2Bi6VplB5GTCVfuozUSnv2RwQ%2Bbj35nNQ3eTBt9f%2BxPzuobUHBtPsCpdSuY6%2BU4cuxXDL8GJFDLcYcpO9i2c9bDRpgRv7U0Kh6j7&X-Amz-Signature=51b5abcd5a077ee11f36ebcf8e7aa2cd80c4a2a54109ffa268adc843b86d2fb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
