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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNUGTFAL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTljtad%2FrWAeD6J8KFG9TtzHi42OK44w5K9mZo3woB%2BAIhAKQ6RVpE1HxHaXGkdxTUSxx0PqHgyx7bXr2yDCFbr625KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFlwCYwFCeYHmBLusq3AOnZr3Ityt4dRq45MVVSMHJ8UeNzc8FfDgIWcFH%2Fh9uh9YfaOOsa5nDNSoDm%2BRYU6HgnbpU0fiafUliD%2Bfj1ZJQg37qLiN5UzXrFSkyf2ge4okOU4f5EWNep%2BtyyBJqowIlrNO5Uunk5iGII6g9Ockg2iW2lExLBeI6tuYu7XNkWV%2BhAf3kI4iUBYTKNJWb78Fl6iL9nYBx%2BGP1kk%2FjV57KKY2ti%2BWlP4yIhEJYQ8LqyCwTkhCAgFwGzhBZdAXdwrFNC7jzwSN4h0ixneIpBLDbbsNDQSEFZRdztSrBTeNu4LoFpaZaotmdE7jwHiI66g0ba7vY8xJLg78k6g951rJVB4mITTg6JF2OXshNfWT4qFXjlI5S8egjC0cfMjKnzhmuQP1HO6fEAM9Pni72e5RrlRIsbcpNmKn5mNntjw3XAtp5ONeU38jK6TRJf1C7zFlEmC2zv4hkh%2Fa9yhwLrgAKWchfylcG%2FF9jxihMSfIKNwk0vQ9p1nd01BbIuhRMZtg1l0Pd6AA1lXIGFgpYMk6rhY0%2FvNQKuVqsDTHrrfZDknqbcGuT1Mnfg8C9D45uDzyNNeqeKn23m7AsO2dTK8Vd2cQuAYdYKU%2B4%2F6u09fp9%2FGj%2BjVSCWsNplxdPeDCU%2FJC%2BBjqkASTk%2FCTMlwhRKCxfOlNJdIBXR4AC4ZkW4GkmskzJJkEIA814dnS3zdh%2Fn989m%2ByXnRT7medHahzwOn%2BSrui%2B%2Fec8%2FKPFP43hjgk8DVjjeAiCdxpHKOtnUCekLLwwc6pyeYJGaUdFqzQSX%2F0A81RqgrDHrVSsdMPRo2oDprlXPhO7dwSEYTT%2B5Xqf66GMjzY%2FH8Gi41Og7rJCqRwbJbl3dPGDt83t&X-Amz-Signature=3d307a7e6caca15b2fcc86c6d14e9b64b2fb4c6ba3c08edef34f8cf91b753712&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNUGTFAL%2F20250302%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250302T150404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTljtad%2FrWAeD6J8KFG9TtzHi42OK44w5K9mZo3woB%2BAIhAKQ6RVpE1HxHaXGkdxTUSxx0PqHgyx7bXr2yDCFbr625KogECLz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxFlwCYwFCeYHmBLusq3AOnZr3Ityt4dRq45MVVSMHJ8UeNzc8FfDgIWcFH%2Fh9uh9YfaOOsa5nDNSoDm%2BRYU6HgnbpU0fiafUliD%2Bfj1ZJQg37qLiN5UzXrFSkyf2ge4okOU4f5EWNep%2BtyyBJqowIlrNO5Uunk5iGII6g9Ockg2iW2lExLBeI6tuYu7XNkWV%2BhAf3kI4iUBYTKNJWb78Fl6iL9nYBx%2BGP1kk%2FjV57KKY2ti%2BWlP4yIhEJYQ8LqyCwTkhCAgFwGzhBZdAXdwrFNC7jzwSN4h0ixneIpBLDbbsNDQSEFZRdztSrBTeNu4LoFpaZaotmdE7jwHiI66g0ba7vY8xJLg78k6g951rJVB4mITTg6JF2OXshNfWT4qFXjlI5S8egjC0cfMjKnzhmuQP1HO6fEAM9Pni72e5RrlRIsbcpNmKn5mNntjw3XAtp5ONeU38jK6TRJf1C7zFlEmC2zv4hkh%2Fa9yhwLrgAKWchfylcG%2FF9jxihMSfIKNwk0vQ9p1nd01BbIuhRMZtg1l0Pd6AA1lXIGFgpYMk6rhY0%2FvNQKuVqsDTHrrfZDknqbcGuT1Mnfg8C9D45uDzyNNeqeKn23m7AsO2dTK8Vd2cQuAYdYKU%2B4%2F6u09fp9%2FGj%2BjVSCWsNplxdPeDCU%2FJC%2BBjqkASTk%2FCTMlwhRKCxfOlNJdIBXR4AC4ZkW4GkmskzJJkEIA814dnS3zdh%2Fn989m%2ByXnRT7medHahzwOn%2BSrui%2B%2Fec8%2FKPFP43hjgk8DVjjeAiCdxpHKOtnUCekLLwwc6pyeYJGaUdFqzQSX%2F0A81RqgrDHrVSsdMPRo2oDprlXPhO7dwSEYTT%2B5Xqf66GMjzY%2FH8Gi41Og7rJCqRwbJbl3dPGDt83t&X-Amz-Signature=1a9dac756ffe60d543d11dc53ed1e2f596e67d0d558f0ec87b8c6d36ddf723c0&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
