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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4P5MF3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDLsE4TNpG1O4ZUO7vDhPP4suvUpvFB4NexehX9PF9nSgIgNtgNbB9M2Hj3itllj348vw9sqXGS%2Bh1VIXiRKRXaN3sq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBVQlnblS94%2BaCCJNSrcAwvcSf6FMLUhxACKj8dfOF0Kel2LC9IDFV%2BwoxoAvQSzLynxiT0BMa8%2BsAteZpjOIbGRR9M7o0ZlYqyPp3mxDBUGCJjVTWDhROoanaqf7YUuCt22GhjnApXsvIJ2iLqTwpq1GHso6sFSEzCVf88KeLkfpieU77LoH9OmO%2BF%2BzdBy%2F2UKcfJZF64KDF5ke9b7h%2FdERlpvpNiyBL2JcBVzNcXrOZlXV7YJywzVZb8tdhUgfZaW7kobPRf8GPSxBkG%2BeZWKWV3tZ0bR73%2BYWFQbU2s%2FlagsB1cr1yZ1rEdANJVEBY2bhQWPUK1BQvh1d%2B67PcwpH3j34keifcDo%2BKGkJ75jSiThzJVy41tSaepdsKJC6mMddyBtgBvwC0aoS7HWkC5LVi8LXNU7J6%2BWMIP9BRcaEhMzxXKYZ55El1Auh7AIkxT6y6qj%2BDl7NnNH%2FHY%2B%2BIz1YEM7KDxJ4JVXyEEI1w3zO7nG5Dni0fPxS9JC1K30COVURU%2B30%2F3DxDkLNTyLFUF%2FjOdaQEI4ikFS4WxNJIrSjXLa%2FcAJZJ3lMImNY9cvqrE3FQVHfZN1%2FXnJrk%2BouXONOPk8DJB6GrY%2FkjadL2q78p3JTrrfCif08QpaXs1F1kYX%2F49B8h6WvegwMJveqsMGOqUBe%2FVBey7QyNzQxzgDRlgpdBmzGnCxdAX8MnApebB0Z6Dr7DqeKP9k1u4v0Vg1u6jj3TGfEt6KlCxL6QNUMALKGtuYCvRSAZhn%2BhGbavdrkiKNx94ox7AAUeEQJnbAnwz8yka3LeTxWN7l6enEJ3NID0O9ujKBVUvMjlA1wTMIRy5Hbf8g%2B12SnTTfts3%2FMxU3KcyzfgZr%2Bg6zdMM0drMnTCUvnxWi&X-Amz-Signature=af48565f0e6ce136a50e81598e4ab816fe77be861dc41046e0526ca41d29472c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZ4P5MF3%2F20250706%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250706T230816Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFkaCXVzLXdlc3QtMiJHMEUCIQDLsE4TNpG1O4ZUO7vDhPP4suvUpvFB4NexehX9PF9nSgIgNtgNbB9M2Hj3itllj348vw9sqXGS%2Bh1VIXiRKRXaN3sq%2FwMIYhAAGgw2Mzc0MjMxODM4MDUiDBVQlnblS94%2BaCCJNSrcAwvcSf6FMLUhxACKj8dfOF0Kel2LC9IDFV%2BwoxoAvQSzLynxiT0BMa8%2BsAteZpjOIbGRR9M7o0ZlYqyPp3mxDBUGCJjVTWDhROoanaqf7YUuCt22GhjnApXsvIJ2iLqTwpq1GHso6sFSEzCVf88KeLkfpieU77LoH9OmO%2BF%2BzdBy%2F2UKcfJZF64KDF5ke9b7h%2FdERlpvpNiyBL2JcBVzNcXrOZlXV7YJywzVZb8tdhUgfZaW7kobPRf8GPSxBkG%2BeZWKWV3tZ0bR73%2BYWFQbU2s%2FlagsB1cr1yZ1rEdANJVEBY2bhQWPUK1BQvh1d%2B67PcwpH3j34keifcDo%2BKGkJ75jSiThzJVy41tSaepdsKJC6mMddyBtgBvwC0aoS7HWkC5LVi8LXNU7J6%2BWMIP9BRcaEhMzxXKYZ55El1Auh7AIkxT6y6qj%2BDl7NnNH%2FHY%2B%2BIz1YEM7KDxJ4JVXyEEI1w3zO7nG5Dni0fPxS9JC1K30COVURU%2B30%2F3DxDkLNTyLFUF%2FjOdaQEI4ikFS4WxNJIrSjXLa%2FcAJZJ3lMImNY9cvqrE3FQVHfZN1%2FXnJrk%2BouXONOPk8DJB6GrY%2FkjadL2q78p3JTrrfCif08QpaXs1F1kYX%2F49B8h6WvegwMJveqsMGOqUBe%2FVBey7QyNzQxzgDRlgpdBmzGnCxdAX8MnApebB0Z6Dr7DqeKP9k1u4v0Vg1u6jj3TGfEt6KlCxL6QNUMALKGtuYCvRSAZhn%2BhGbavdrkiKNx94ox7AAUeEQJnbAnwz8yka3LeTxWN7l6enEJ3NID0O9ujKBVUvMjlA1wTMIRy5Hbf8g%2B12SnTTfts3%2FMxU3KcyzfgZr%2Bg6zdMM0drMnTCUvnxWi&X-Amz-Signature=e5dfbebb195d40a0c01422d2e29c1dca2506a3d9c10cc9fe1aab48b7cd04440f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
