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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHMCWQP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDpVoGA9imo2h0nbhiRB%2F%2Byb0RrzuArQahpsyYVYBIieAIgZpwlUtkR841Mtut4RAcYZ50pDQkQ2IRoDLPfm0Q4mGoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATil9I5N%2Ba%2Fe%2B0mAircAwg4mYCGjJo8kOT45KIoTypLYfJ%2BElPKfFQ%2Fkb2vkKiRXo7IY3msK7Oja3D0w68zHNZG83i8sCaY4tiSJ9cNIxCFjPQWQbFxVMCQNUk6NQGz0QR8XsVbGxbqnSibxauTY4uK%2FD9rPgUBYOyyl3zfo7dsPJd8J1dO%2FxWA3HdssYqq5NXMRLP2lbw%2BWHdUzYfnrJ6cH%2BAWXCOKmgepYSnRgSxRh88dnw8fTuGw6l5Vdw9QmwYinohnvEQCcJ9FgWoAAEQ4LWjjCvFqviS0VyEUaOCS4PY13T7O%2BwPqexLzWIZJLaaknZVnBWZ%2F7AaPjBKreIZZuMNCuq2rZiJvE0QFiAcPnpLwYROASGap3KaQuz8JAoAJCgKitcBrcfF5eqhgZo2iRkkMXyZySQdY90Sq%2FAJB00njLkX%2Fm2FxyrzV87cfeb%2FUdIEcldhwQPj5JN00%2FYVdOOlYRzrGpRNC4knURU%2BQRnFPbArDeVTDtFE7mn1mqNKxq25KYwj%2BmaUph9qdOIdJcsjzFXamMiS3hx7Q4hZQsD0HgzvnZf0%2BeYGlHhm5bV6dOA0zc8qvZTZW8NFMMAu%2FgMwQpQZWZTfBr1zpc5ZCYHE2UtHJ0BXOXmj78LQwwvBHBa3yOsz29MwuMK7j%2Fb4GOqUBGTBWtkYf0Jrze1diUFo1FmGfIjqIsTqzzzLlbFJSxquq32F0nmH%2BVmnVXDWSUgwCjZYR%2BUgcmRxNx3u46tV%2B9ka8fLA%2Bu7u7z2FJlajcc2QIPC%2BqWCzlFTBGBzNezUsT1C92ii0uYnDHO0ll9ROdXHFIzBNCrk1tegrNrHy3QUw98hKhTPjIPK1F7upegG5RbwibmQZidZ%2BfjaRljKCop7HWYtw4&X-Amz-Signature=83e0edb0916153a3a6f6523c15795af4983a3256bed3fb1b01229840a1b68814&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOHMCWQP%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T061010Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIQDpVoGA9imo2h0nbhiRB%2F%2Byb0RrzuArQahpsyYVYBIieAIgZpwlUtkR841Mtut4RAcYZ50pDQkQ2IRoDLPfm0Q4mGoqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDATil9I5N%2Ba%2Fe%2B0mAircAwg4mYCGjJo8kOT45KIoTypLYfJ%2BElPKfFQ%2Fkb2vkKiRXo7IY3msK7Oja3D0w68zHNZG83i8sCaY4tiSJ9cNIxCFjPQWQbFxVMCQNUk6NQGz0QR8XsVbGxbqnSibxauTY4uK%2FD9rPgUBYOyyl3zfo7dsPJd8J1dO%2FxWA3HdssYqq5NXMRLP2lbw%2BWHdUzYfnrJ6cH%2BAWXCOKmgepYSnRgSxRh88dnw8fTuGw6l5Vdw9QmwYinohnvEQCcJ9FgWoAAEQ4LWjjCvFqviS0VyEUaOCS4PY13T7O%2BwPqexLzWIZJLaaknZVnBWZ%2F7AaPjBKreIZZuMNCuq2rZiJvE0QFiAcPnpLwYROASGap3KaQuz8JAoAJCgKitcBrcfF5eqhgZo2iRkkMXyZySQdY90Sq%2FAJB00njLkX%2Fm2FxyrzV87cfeb%2FUdIEcldhwQPj5JN00%2FYVdOOlYRzrGpRNC4knURU%2BQRnFPbArDeVTDtFE7mn1mqNKxq25KYwj%2BmaUph9qdOIdJcsjzFXamMiS3hx7Q4hZQsD0HgzvnZf0%2BeYGlHhm5bV6dOA0zc8qvZTZW8NFMMAu%2FgMwQpQZWZTfBr1zpc5ZCYHE2UtHJ0BXOXmj78LQwwvBHBa3yOsz29MwuMK7j%2Fb4GOqUBGTBWtkYf0Jrze1diUFo1FmGfIjqIsTqzzzLlbFJSxquq32F0nmH%2BVmnVXDWSUgwCjZYR%2BUgcmRxNx3u46tV%2B9ka8fLA%2Bu7u7z2FJlajcc2QIPC%2BqWCzlFTBGBzNezUsT1C92ii0uYnDHO0ll9ROdXHFIzBNCrk1tegrNrHy3QUw98hKhTPjIPK1F7upegG5RbwibmQZidZ%2BfjaRljKCop7HWYtw4&X-Amz-Signature=42bcb89fc761cc560ff4f7cd3b2cbf1ab8b62877edaaffe225eccd9ee3a0ed01&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
