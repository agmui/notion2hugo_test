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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2FQ2RSA%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDRUswtfrJKnN910OP7ntG7vRYaLf8LymajaJJ6w%2F6iTgIhAO2yMAyTe7U5L5%2B1fbBN5AhwMuVc9x44Loa0VwNHUV4UKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWWLohBiNQdKjTFGkq3APmjPTcY8qWLHnMAtSvFKaV2bjkR%2BoJXcp1gSQ0jG1Sgwxm8EC2o4KP0JKLzH9zQVGFu8vG4Qo8voU05ctMSQmMGb5UWJNJghiOjSEfl1urJSUYGPmsYzp3W9btsIgvusEu52CaPBAFbouS1VxaA%2F5wjM62LxqsBBOGX0qSoYfHGYJh1xyQyOUJGcLUd%2B5CJ5Liv5jf2eFurDjV1bqDwVodc7CwoUEvH3Y%2B0OWlo%2BB8IAPDoTnMxsW6lJPs0jq5kS0qeSK1bcc4crOQtmCVYZGqsPm%2FtLZPCs9VCRzTYqSCbwmtnpZemHU0d5PAdRy%2FWcfWNNX32o0vq%2BhQ56HTQrgq%2FL0C%2B%2BU86kytkp8BwC%2BUeDTRbd2RnTZ4uNG6nfjz5bsX9ZehAfHmqiZBQFdTKxjW%2B%2FXfjotyL3lnUjXGYaERY%2BCmcFZPht8g9eoG6oWlQurJO1sIeXLSJj%2FgIwpaHWgc2Q2pXkmb4ih%2B5MlUE30Ndx88j69o3MEp%2BNT6cR8Wm2Vfj1Gt0choY5TJJR5VVjC3ZR9P9EnxfI0A8FdFUQBF4phYPOWwISp05WmwWQBU4Zq%2FhoSynfZ%2ByNaM%2BBN5JR44J3%2F5Fywgtd7ICAM6LFBBnpL6Utzy4FyxVJ2CQjCW2PTBBjqkAVWprsAp8mR5w42v3eWt4i%2FzzuLNZ1mUEAK%2FALOIe7i3x5wD0mXtixmVX0GecRf%2Bhd%2FdWSyJ5CBtwLb3DQxQ%2BwCRahf48vxQDHseXotaaUD%2FBZStnpef4QRV8NGdIepdqU9VeRTY8ZtaM6hXOGRlQvGKfbzB9hvLV8VDIzyS%2BoyC9ABNtbcSHqRvPmCn48dWhglRSiRkX7H%2Be%2Fh2Yn1hUDj9%2Fnxu&X-Amz-Signature=59df50b67be55ebb29a119c7cd06095b33c9b681698738b15ed7e1f482e1605a&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2FQ2RSA%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T051042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJIMEYCIQDRUswtfrJKnN910OP7ntG7vRYaLf8LymajaJJ6w%2F6iTgIhAO2yMAyTe7U5L5%2B1fbBN5AhwMuVc9x44Loa0VwNHUV4UKogECOb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyWWLohBiNQdKjTFGkq3APmjPTcY8qWLHnMAtSvFKaV2bjkR%2BoJXcp1gSQ0jG1Sgwxm8EC2o4KP0JKLzH9zQVGFu8vG4Qo8voU05ctMSQmMGb5UWJNJghiOjSEfl1urJSUYGPmsYzp3W9btsIgvusEu52CaPBAFbouS1VxaA%2F5wjM62LxqsBBOGX0qSoYfHGYJh1xyQyOUJGcLUd%2B5CJ5Liv5jf2eFurDjV1bqDwVodc7CwoUEvH3Y%2B0OWlo%2BB8IAPDoTnMxsW6lJPs0jq5kS0qeSK1bcc4crOQtmCVYZGqsPm%2FtLZPCs9VCRzTYqSCbwmtnpZemHU0d5PAdRy%2FWcfWNNX32o0vq%2BhQ56HTQrgq%2FL0C%2B%2BU86kytkp8BwC%2BUeDTRbd2RnTZ4uNG6nfjz5bsX9ZehAfHmqiZBQFdTKxjW%2B%2FXfjotyL3lnUjXGYaERY%2BCmcFZPht8g9eoG6oWlQurJO1sIeXLSJj%2FgIwpaHWgc2Q2pXkmb4ih%2B5MlUE30Ndx88j69o3MEp%2BNT6cR8Wm2Vfj1Gt0choY5TJJR5VVjC3ZR9P9EnxfI0A8FdFUQBF4phYPOWwISp05WmwWQBU4Zq%2FhoSynfZ%2ByNaM%2BBN5JR44J3%2F5Fywgtd7ICAM6LFBBnpL6Utzy4FyxVJ2CQjCW2PTBBjqkAVWprsAp8mR5w42v3eWt4i%2FzzuLNZ1mUEAK%2FALOIe7i3x5wD0mXtixmVX0GecRf%2Bhd%2FdWSyJ5CBtwLb3DQxQ%2BwCRahf48vxQDHseXotaaUD%2FBZStnpef4QRV8NGdIepdqU9VeRTY8ZtaM6hXOGRlQvGKfbzB9hvLV8VDIzyS%2BoyC9ABNtbcSHqRvPmCn48dWhglRSiRkX7H%2Be%2Fh2Yn1hUDj9%2Fnxu&X-Amz-Signature=9376242d4d587d4f98756a6efe56ff80ea7ca862eb4e53ad74dc42acaf18cd64&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
