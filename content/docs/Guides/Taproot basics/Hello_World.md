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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L7EC3NC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfZTZdICb0fpV89sv6WTpGFV%2Fzd4bLh%2BAmkOr6MZAdagIhAJvaUEH2qbHaL4s0P7N5gtILaPS75YvnhF7gqH%2F7OCu0Kv8DCGwQABoMNjM3NDIzMTgzODA1IgziDdB9dmBfpt3cTAUq3AOvb2YuOoNT4hqwL%2Bwqe6oqv9Tf8hYuxG57Cgl4vuG3d%2BZzkDfuNgJ49NGvXCpxfFzBddo6GcDDNaCA%2Br2Xih8%2FkmGuIgX25MGtNsALS8hC6ftEjBTkljdP92W2c13JKbluBSsPN9YasDYsrRIhOPs8ZTodA7PZFEDO3TPgXdvF0fhuoX3jEqVY%2Be1VjMmgitXfOOYGmJeEnxl%2BPu9lFAMqnP5XgUl1D2wfvPftz%2FPIf5mDm5yTH0nj3qelmICQ4%2Fj573jBOEEndRJPQAuEbcNOBYoRKjEIk5U030oI5iJ3H7AnTC2hGGV2v2KLbesNc9sp4YgmcjC%2BBAO611yjFno4W63BSHYlyYOx3T9WDE29VI8TILi4Qx9JTOO2kbk0RNDzx5V04gqQjP%2FEVMGiKvQCdy3qjs5ZXuyPYjX65v%2B1cKUCW6xVxNMD5mqHym1%2B3jtii6Hz6jCHU2%2F6FYCprqxjVwlgFbjPo0t1QOw6vP%2F6j09f8JW0uUxcUMAo87FeOEU%2BIvjNPc9mNJZSQPTJsDaeTwrg%2FWxlMKxGXi57%2B1sYj0wRbyKHXvOYsmJEjaUCW8S8%2FC7mYCRuyZQVI%2F3WSKi878D3kY2MygWtZxd5Wdy0MNZDaG%2FBECPcP0cVEzDNwfDABjqkATzTVijX01cxEjbxAJQs8y0xqUyKTVJ6H6qWCt%2FWYiQMOVtURY4WtOs4k0a8SF8v%2FOEo1XMBEpY3JdY8C2PiFPuiGcXKm3imRFjAcYZx1WtHp9JOY4a8l1af%2F%2BT%2F76up%2FL7Nej61pqkmuB5QGUiFDZXd6c45wQw3quzifEYMOoWdyrHpzGQ4XJ%2FMQAlPY6Emz5Jltb9F4Sv4md8P%2BI1Vn0zDQQcF&X-Amz-Signature=a471226f9e7411f47a311837935aacf0076add37b433f070a6534e854ed1e6ba&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667L7EC3NC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T033500Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfZTZdICb0fpV89sv6WTpGFV%2Fzd4bLh%2BAmkOr6MZAdagIhAJvaUEH2qbHaL4s0P7N5gtILaPS75YvnhF7gqH%2F7OCu0Kv8DCGwQABoMNjM3NDIzMTgzODA1IgziDdB9dmBfpt3cTAUq3AOvb2YuOoNT4hqwL%2Bwqe6oqv9Tf8hYuxG57Cgl4vuG3d%2BZzkDfuNgJ49NGvXCpxfFzBddo6GcDDNaCA%2Br2Xih8%2FkmGuIgX25MGtNsALS8hC6ftEjBTkljdP92W2c13JKbluBSsPN9YasDYsrRIhOPs8ZTodA7PZFEDO3TPgXdvF0fhuoX3jEqVY%2Be1VjMmgitXfOOYGmJeEnxl%2BPu9lFAMqnP5XgUl1D2wfvPftz%2FPIf5mDm5yTH0nj3qelmICQ4%2Fj573jBOEEndRJPQAuEbcNOBYoRKjEIk5U030oI5iJ3H7AnTC2hGGV2v2KLbesNc9sp4YgmcjC%2BBAO611yjFno4W63BSHYlyYOx3T9WDE29VI8TILi4Qx9JTOO2kbk0RNDzx5V04gqQjP%2FEVMGiKvQCdy3qjs5ZXuyPYjX65v%2B1cKUCW6xVxNMD5mqHym1%2B3jtii6Hz6jCHU2%2F6FYCprqxjVwlgFbjPo0t1QOw6vP%2F6j09f8JW0uUxcUMAo87FeOEU%2BIvjNPc9mNJZSQPTJsDaeTwrg%2FWxlMKxGXi57%2B1sYj0wRbyKHXvOYsmJEjaUCW8S8%2FC7mYCRuyZQVI%2F3WSKi878D3kY2MygWtZxd5Wdy0MNZDaG%2FBECPcP0cVEzDNwfDABjqkATzTVijX01cxEjbxAJQs8y0xqUyKTVJ6H6qWCt%2FWYiQMOVtURY4WtOs4k0a8SF8v%2FOEo1XMBEpY3JdY8C2PiFPuiGcXKm3imRFjAcYZx1WtHp9JOY4a8l1af%2F%2BT%2F76up%2FL7Nej61pqkmuB5QGUiFDZXd6c45wQw3quzifEYMOoWdyrHpzGQ4XJ%2FMQAlPY6Emz5Jltb9F4Sv4md8P%2BI1Vn0zDQQcF&X-Amz-Signature=5185df35d751a28f0d9adb87fe07cb46cb8d50166f460f359247b5caff579152&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
