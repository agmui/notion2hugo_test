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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDRZ745%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCxhLTxPcMEBHu80Z62NhasNO3BjnZsac7KsJJhwhs%2FJgIhAL6aoG2PMQWYo1rIaXe6iu9eJ%2F8F%2B8kfpjMrtRSvZnR5KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkFKg3Q9EGJonnaa0q3AMQvsDAQx6zgkA15OFysDjqR50LopxkthCH3M9%2FN5vZX9gcyikVGgJtXlL8fZkjJPfj38OQH88%2BbyFdZU6DXpn1pzJFFS1I9m45FGb3JTxTKydZt2GXM1A0KB7tuKj4Som43P7cDx%2FXTthXcBPnoqJUvVhEnAB5SVxmyweuS9IRJGGNJtonf6NMDdLBy%2FhWYTks8BTNjqAeSdw9%2BLfyRl%2FObhTqkX%2FGgEs7h6nbNyLVZCCIjuL3sf%2FIdsertkPoho6gmNUZUzel7bg9hOUExOrdkaeXcG%2FZdzFibYT9giawsgbusVUJhHd%2BZlE%2FkjTJcxTNVRl8t3S%2BQ2rXkD%2F9xnqdj4qRIOFoyRIZgbMUiBDDoHyHu9W5uyfT7g7nW6Vw7gM8lKl%2BSQU7L4vYYkN2S%2FFWj2fslWnau3HoIyHdcb%2Bs%2FW0LPHsPgtHTqKIKSWKrUkkYDt8eP4K8SRO%2FIFnEhCReVlgQNC1JwIEaZFDMt7GQDHNaMBgUFCCTKIfj5XZAOFpwbqp2oXewl%2B6XMLXB5AvE6sVRnNgFw4M4doZY%2BdjpcimMGT41STyEYym1V%2F%2FRghuxX%2BBrHxtODk65SDg6TZYimD5TDlYLuZYRoqO7MzmNr3hmLdBmfvcgyeGxVTDo6aK%2FBjqkAZ5hNgaCRRp0znugMuHAVCfFawbxhDqDL0DLsI0UkwvyHBw76XYEU7psw7jWwFsQ8XdGvQCimDbr5uOUVGFGH5%2FJaPKt6y%2FWa8gDWwMiSCW3knyah1VgjUNlaawpU%2FltViSZdL4mNDJnTyWbkYF7T%2FD25lWZDi%2BytKdanDVlWfX228QFkX%2FzJNv1oXazrEGAugGjDvNsTgKCVIEqHTyx5alzRHQL&X-Amz-Signature=1867134ac1b39385444de41cd5979d83517f5dbb59a34a6e71bdc2fff7f51f1b&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663XDRZ745%2F20250330%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250330T050755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJIMEYCIQCxhLTxPcMEBHu80Z62NhasNO3BjnZsac7KsJJhwhs%2FJgIhAL6aoG2PMQWYo1rIaXe6iu9eJ%2F8F%2B8kfpjMrtRSvZnR5KogECIT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxkFKg3Q9EGJonnaa0q3AMQvsDAQx6zgkA15OFysDjqR50LopxkthCH3M9%2FN5vZX9gcyikVGgJtXlL8fZkjJPfj38OQH88%2BbyFdZU6DXpn1pzJFFS1I9m45FGb3JTxTKydZt2GXM1A0KB7tuKj4Som43P7cDx%2FXTthXcBPnoqJUvVhEnAB5SVxmyweuS9IRJGGNJtonf6NMDdLBy%2FhWYTks8BTNjqAeSdw9%2BLfyRl%2FObhTqkX%2FGgEs7h6nbNyLVZCCIjuL3sf%2FIdsertkPoho6gmNUZUzel7bg9hOUExOrdkaeXcG%2FZdzFibYT9giawsgbusVUJhHd%2BZlE%2FkjTJcxTNVRl8t3S%2BQ2rXkD%2F9xnqdj4qRIOFoyRIZgbMUiBDDoHyHu9W5uyfT7g7nW6Vw7gM8lKl%2BSQU7L4vYYkN2S%2FFWj2fslWnau3HoIyHdcb%2Bs%2FW0LPHsPgtHTqKIKSWKrUkkYDt8eP4K8SRO%2FIFnEhCReVlgQNC1JwIEaZFDMt7GQDHNaMBgUFCCTKIfj5XZAOFpwbqp2oXewl%2B6XMLXB5AvE6sVRnNgFw4M4doZY%2BdjpcimMGT41STyEYym1V%2F%2FRghuxX%2BBrHxtODk65SDg6TZYimD5TDlYLuZYRoqO7MzmNr3hmLdBmfvcgyeGxVTDo6aK%2FBjqkAZ5hNgaCRRp0znugMuHAVCfFawbxhDqDL0DLsI0UkwvyHBw76XYEU7psw7jWwFsQ8XdGvQCimDbr5uOUVGFGH5%2FJaPKt6y%2FWa8gDWwMiSCW3knyah1VgjUNlaawpU%2FltViSZdL4mNDJnTyWbkYF7T%2FD25lWZDi%2BytKdanDVlWfX228QFkX%2FzJNv1oXazrEGAugGjDvNsTgKCVIEqHTyx5alzRHQL&X-Amz-Signature=f5c4d882b84b625f11628f31adc761fe81b4f717c21cec7939d563912465be4e&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
