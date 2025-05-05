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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJRR6BH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDvE%2B3%2BLjBYAVKD9SZOM92ADKKKGyz5GU2hTVYxBfHCdQIgI5C6YlhcNIoSwps5YUSKDeHLm7%2FXlt5tGQr%2BKb3rrfIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJKK3HOYHizTP%2BiYyircAxuaq7IMe1b9akHT2xgOXXMfm1tVu5e2LG3iODQPFdccM8l18sdiVKxFxICYqmIlw6zOdeLCXSGC0vUIgzNtnGtNk5e%2Bd1bGyHNajssQuKDj5T2jbXFKaSYBayzMZyEy6g87q1qzDyxfj1Z5EfiNV2lsCZrnt3f2cI5Ks8OxUmnbo6%2FO%2FL4TUt2RvouBcNHVwGUZWGW5f3tnb%2BOi6KLEC1KLJpc%2BoE4hliGTQrHl5547nNqMorWPW6tatU4KDfO9PUq8h9RVMhEL5b81fAU9Ta2dPj6Rt2QWN9XiDm85yFcakLNTUSz4JDTF4cdK9ZQi%2FelM4hgDCgGzutUCPEYBRHlMeJP6%2FiuZUgobdXRfVVN9cBSA%2FVh%2BYv8iSIJqTBbntV7b7JQQL3ARBLgMfb%2F%2Fjcg8EbuK886F8Jxr%2FJXzWtoIUAOhSDSBzlX8z6Jh25O42J8YRt6dQCR%2FOzNUD1H8eYw9QB5n4nrUkBNk7Eat6tqI2C1OS%2FeT%2FJ6vylcwvurK8FtDX4HKs9ivzG4mXZIWcxztmKi90yL%2BKLbtQ%2Bo2MfcFMafzfemrpnkNSlFm0CsyBrgsn49hN3XkYijviShHb5IbtOTerGowal5ZALo90weX0RBJB8bt2IYAiyU4MMvp4MAGOqUBA%2FwtRofM%2FYu40UoW2VfVmxSZAOjpXywPCUhEiHe73%2BMonl81mRNlIXP06tKqFPCYFJ%2FVn2Anu62dUUUye%2Fd58%2FZQfeAwKabZE9VZcdHZOvuGUWzuokvM8RDahdFw7aQntJATzecdPZIrLaLAwlz5PKROcnO7dEg9BfEdyh6YzWHsyjMBg9f9wk2TfW6gEMALbJh111YjX3xVWVae%2F3mwChwbsXGv&X-Amz-Signature=35b9847d8ed572552a437c3abedb9a9d64bd94bb51f72faae643aa94bc7e9413&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QBJRR6BH%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T041231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCIQDvE%2B3%2BLjBYAVKD9SZOM92ADKKKGyz5GU2hTVYxBfHCdQIgI5C6YlhcNIoSwps5YUSKDeHLm7%2FXlt5tGQr%2BKb3rrfIq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDJKK3HOYHizTP%2BiYyircAxuaq7IMe1b9akHT2xgOXXMfm1tVu5e2LG3iODQPFdccM8l18sdiVKxFxICYqmIlw6zOdeLCXSGC0vUIgzNtnGtNk5e%2Bd1bGyHNajssQuKDj5T2jbXFKaSYBayzMZyEy6g87q1qzDyxfj1Z5EfiNV2lsCZrnt3f2cI5Ks8OxUmnbo6%2FO%2FL4TUt2RvouBcNHVwGUZWGW5f3tnb%2BOi6KLEC1KLJpc%2BoE4hliGTQrHl5547nNqMorWPW6tatU4KDfO9PUq8h9RVMhEL5b81fAU9Ta2dPj6Rt2QWN9XiDm85yFcakLNTUSz4JDTF4cdK9ZQi%2FelM4hgDCgGzutUCPEYBRHlMeJP6%2FiuZUgobdXRfVVN9cBSA%2FVh%2BYv8iSIJqTBbntV7b7JQQL3ARBLgMfb%2F%2Fjcg8EbuK886F8Jxr%2FJXzWtoIUAOhSDSBzlX8z6Jh25O42J8YRt6dQCR%2FOzNUD1H8eYw9QB5n4nrUkBNk7Eat6tqI2C1OS%2FeT%2FJ6vylcwvurK8FtDX4HKs9ivzG4mXZIWcxztmKi90yL%2BKLbtQ%2Bo2MfcFMafzfemrpnkNSlFm0CsyBrgsn49hN3XkYijviShHb5IbtOTerGowal5ZALo90weX0RBJB8bt2IYAiyU4MMvp4MAGOqUBA%2FwtRofM%2FYu40UoW2VfVmxSZAOjpXywPCUhEiHe73%2BMonl81mRNlIXP06tKqFPCYFJ%2FVn2Anu62dUUUye%2Fd58%2FZQfeAwKabZE9VZcdHZOvuGUWzuokvM8RDahdFw7aQntJATzecdPZIrLaLAwlz5PKROcnO7dEg9BfEdyh6YzWHsyjMBg9f9wk2TfW6gEMALbJh111YjX3xVWVae%2F3mwChwbsXGv&X-Amz-Signature=4599c5f7beaae861566bbd033159668d854cbd3bd4c50f9ea831e353eae1c106&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
