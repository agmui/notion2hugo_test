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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466233XUJBA%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5mEtboiQ9OTQS%2BIS1nrQ76wv2%2B0OyQTXt%2BXBVjyP7DAIgYFB%2FajGlcuJMl8%2F4vL5ewXrNKOzB01JTmOJXT%2B%2FXvEQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDC8KfRufmFZz69aacircA6tf1vmdp7TK61AHgp8cFdfo4mbj6lm9%2B7od2Wxd80jOhuoDTNXTlamJmW8frjaDiZPvIukpGyWsaBvcZXyowViZt1gRv31qyXoBItp%2FgTTZ0Jzki94j8vujMht8dATydxUjC6i8w93bc4dq9EnD2%2B2PDTVHfhGVnBW4XFF41O72BeRBQJLR9U4YDdhEh8pHHOfFaVbT%2FCBLOiEolaGugAgp4LePF8e0rm%2FRGW59l%2FTbLHdscMOPb%2BuDpwsG9CRYQr%2FU2B0FwLiVA1DQznSY%2Fj9Yh%2FxgS3dQDxRHDxa%2FcmbS3eVDKTxMjAYgqw4xG4rw9yFmt%2FcMe%2B8yUfdJagelY3gXqw99Kkg5U1ig6OI1qYKAYNOxsncxi8L%2BVX9gKPulYyNNhLMIxwZn%2BXGxWZlf0Dlpuc1NhrQs24zcZVKf421BwXeZhGYCv1cJfvi88KeET3rD7rCvSO88nXhLuWq2AWqieaafF5fLX%2B76HuqUpAdhtbbLp0Q5Viny1lV8D1KNepN8pV2H6kl0NQM99vN%2Fj1jiN%2BfcXn2iofCtsEVts%2FqMH4MRRVtTCbubhJD3jLP4d375p%2F2wnE9RMqDrjfk%2BIyO0xrEqU7K3oLw6Y9W276IFt2cHVin7gMUDxgX1MPKIx8IGOqUBdkKSXR20z8sBficCDphi4sY8SjWVn5MrLmH90kV4rpyOmI2gommPMZWYAFG8QbyOfRKrowdT6ckJLb5AOmK6ckVxo3DWIdVIybcUg%2B%2BB1bf7WucVyzfZycI%2BDx4eQ52YuUwNcfXHfkU71AwdCD3qBGvqp3haw3dwi98i6oYqJ5KqT5CgphBC%2BYdVFdyGxWKSuCYaaOG7H7XZCKkfJ6zmbOdplZdc&X-Amz-Signature=3a52596fbaf57574cd6e715741879534b7c93617e36273bcb7b638dfd53be056&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466233XUJBA%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5mEtboiQ9OTQS%2BIS1nrQ76wv2%2B0OyQTXt%2BXBVjyP7DAIgYFB%2FajGlcuJMl8%2F4vL5ewXrNKOzB01JTmOJXT%2B%2FXvEQq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDC8KfRufmFZz69aacircA6tf1vmdp7TK61AHgp8cFdfo4mbj6lm9%2B7od2Wxd80jOhuoDTNXTlamJmW8frjaDiZPvIukpGyWsaBvcZXyowViZt1gRv31qyXoBItp%2FgTTZ0Jzki94j8vujMht8dATydxUjC6i8w93bc4dq9EnD2%2B2PDTVHfhGVnBW4XFF41O72BeRBQJLR9U4YDdhEh8pHHOfFaVbT%2FCBLOiEolaGugAgp4LePF8e0rm%2FRGW59l%2FTbLHdscMOPb%2BuDpwsG9CRYQr%2FU2B0FwLiVA1DQznSY%2Fj9Yh%2FxgS3dQDxRHDxa%2FcmbS3eVDKTxMjAYgqw4xG4rw9yFmt%2FcMe%2B8yUfdJagelY3gXqw99Kkg5U1ig6OI1qYKAYNOxsncxi8L%2BVX9gKPulYyNNhLMIxwZn%2BXGxWZlf0Dlpuc1NhrQs24zcZVKf421BwXeZhGYCv1cJfvi88KeET3rD7rCvSO88nXhLuWq2AWqieaafF5fLX%2B76HuqUpAdhtbbLp0Q5Viny1lV8D1KNepN8pV2H6kl0NQM99vN%2Fj1jiN%2BfcXn2iofCtsEVts%2FqMH4MRRVtTCbubhJD3jLP4d375p%2F2wnE9RMqDrjfk%2BIyO0xrEqU7K3oLw6Y9W276IFt2cHVin7gMUDxgX1MPKIx8IGOqUBdkKSXR20z8sBficCDphi4sY8SjWVn5MrLmH90kV4rpyOmI2gommPMZWYAFG8QbyOfRKrowdT6ckJLb5AOmK6ckVxo3DWIdVIybcUg%2B%2BB1bf7WucVyzfZycI%2BDx4eQ52YuUwNcfXHfkU71AwdCD3qBGvqp3haw3dwi98i6oYqJ5KqT5CgphBC%2BYdVFdyGxWKSuCYaaOG7H7XZCKkfJ6zmbOdplZdc&X-Amz-Signature=f51cbc4a8125888f8d5849ffe27bc06a4dfd73cd141232ebff5f0cd4359052b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
