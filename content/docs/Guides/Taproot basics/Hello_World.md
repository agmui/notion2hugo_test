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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAAR2TN%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDy81Lk%2F4BOT6t1csrBy63bj4PM5XEhmXrvVRSFQI7vTQIhAL0B3fburV8DU9Us%2B8ZgzgpxDNOpMVgS5fKlpQ51WocAKv8DCBoQABoMNjM3NDIzMTgzODA1IgxkJhbhUvmj37ZppvYq3AObGfIrjgCNSy2UnloZNpcp6D%2FQs%2FKq1HfjQYokNpWE28yxVnclrmmsmm3ne8sRaaxlD6ns%2BngdHwtyIOotmun1hW4x%2FJsm2HVU68RanrO2kTu%2Ftr2rILKp1uNLj6XEUvOnOsA%2FEdnurnmCJcgUndLtsYhgciUoJ68%2BdqtNRNd8IkUpjJoEuXcqVHJWoNKJbstKGfpGiaWPa8%2FGRtHb%2Bm15WpQBFCjWFdNM3ZrU%2BrdQT2gX0eVIe9rH5L1ou%2Btjuj1h2c3x7G2oayQQVXCtdWtW3sU5jpRehRGSaNTVNVTTYwuJMvWla61trmsxi4d1qR2gGmNpEYfmWRJTbEch7aXePEY1kVIwsXm9Z1pzybP6ruOKF4hRUFfLttsTZKnSS1Bpp69603rU9fmSGo124ZWPgOLCjvDN%2FcSNeIF6mnmeyF994c6Fbzrc4IbV5KWPBSg6zdJW6Rf3J6i5YojH5bTe2Owy9Ev6m0K%2BRLaSFH23LxmM2sDbpoj%2BI0VZVhEHNilwCLw4pnnefcx1wlLDefjZpfDVWqxtJOvmDJiUiwiGzL6syLs86YEh9qEy8HlP70YR5hbwQNoyKkOZAKRsahWBSOkYk57LUTAMTsfcF4zAY5HLU893YxDSebOwUTDC5prDBjqkAQ9%2Fb%2Fh3Vr1UgQtkVldUljg0fZN0ggnjo2WFTY%2BAxeCaKq0vY6YUv3Oil%2BXfJ9Hkch9tDSbdFYEO0N91kKA8kqLYAj%2B2lQYmS2w3akzh6eCYjyCF9YXumLG7ufsC1CgbhvTU2HBMMXx1pQ0WcQeXWzMWM57RY6%2FBfvJ34CKyiTzxTKO%2FJB%2BVr5DGUYz8NcFcZvzFgd67F3sAjB5xy9yZYC5Bpnhg&X-Amz-Signature=c3923a61e192f55c53d0f675f4214859096e71eda9596e07f351b85b4c548c59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWAAR2TN%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T170908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJIMEYCIQDy81Lk%2F4BOT6t1csrBy63bj4PM5XEhmXrvVRSFQI7vTQIhAL0B3fburV8DU9Us%2B8ZgzgpxDNOpMVgS5fKlpQ51WocAKv8DCBoQABoMNjM3NDIzMTgzODA1IgxkJhbhUvmj37ZppvYq3AObGfIrjgCNSy2UnloZNpcp6D%2FQs%2FKq1HfjQYokNpWE28yxVnclrmmsmm3ne8sRaaxlD6ns%2BngdHwtyIOotmun1hW4x%2FJsm2HVU68RanrO2kTu%2Ftr2rILKp1uNLj6XEUvOnOsA%2FEdnurnmCJcgUndLtsYhgciUoJ68%2BdqtNRNd8IkUpjJoEuXcqVHJWoNKJbstKGfpGiaWPa8%2FGRtHb%2Bm15WpQBFCjWFdNM3ZrU%2BrdQT2gX0eVIe9rH5L1ou%2Btjuj1h2c3x7G2oayQQVXCtdWtW3sU5jpRehRGSaNTVNVTTYwuJMvWla61trmsxi4d1qR2gGmNpEYfmWRJTbEch7aXePEY1kVIwsXm9Z1pzybP6ruOKF4hRUFfLttsTZKnSS1Bpp69603rU9fmSGo124ZWPgOLCjvDN%2FcSNeIF6mnmeyF994c6Fbzrc4IbV5KWPBSg6zdJW6Rf3J6i5YojH5bTe2Owy9Ev6m0K%2BRLaSFH23LxmM2sDbpoj%2BI0VZVhEHNilwCLw4pnnefcx1wlLDefjZpfDVWqxtJOvmDJiUiwiGzL6syLs86YEh9qEy8HlP70YR5hbwQNoyKkOZAKRsahWBSOkYk57LUTAMTsfcF4zAY5HLU893YxDSebOwUTDC5prDBjqkAQ9%2Fb%2Fh3Vr1UgQtkVldUljg0fZN0ggnjo2WFTY%2BAxeCaKq0vY6YUv3Oil%2BXfJ9Hkch9tDSbdFYEO0N91kKA8kqLYAj%2B2lQYmS2w3akzh6eCYjyCF9YXumLG7ufsC1CgbhvTU2HBMMXx1pQ0WcQeXWzMWM57RY6%2FBfvJ34CKyiTzxTKO%2FJB%2BVr5DGUYz8NcFcZvzFgd67F3sAjB5xy9yZYC5Bpnhg&X-Amz-Signature=75a4e467a9b40a79ebac0dd24276fd50aec1ec9d8218598a5da5f7dd7c3e20d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
