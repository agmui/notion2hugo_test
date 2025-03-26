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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W345J5XF%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTvBp%2Fxk%2FCOwLlqnlrgiG%2FitTTyb1C2UPpTDXsCVwWGAiEA5jXfS6xMIlhZ9E%2BpcNdoPhHnDFgZFZloiY1phQtVV5Eq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFCUqgOd7WbslFkBOyrcAzENoyBJ0l9huIOUqkC0zwuyOp5XnaVDCzgYsfbXCwihyHieaQ6WB8BsCHQ4SXfMLnmNTafQ%2FVKYc8lMbwQchF9lEbN8lY1rBN0HUZxVQZE5XdDdT9CZzEnKuUXvS5zXduMyOsXm54Wgl3oEbh67I1S7Y9OXTPJjrH0D%2BgHYdqUhBHUkcx%2FY5aH3qeRXB0ofwG%2BgKMYfU7yHWeiN9LQeI9h1XDvfYgXmVth%2FaX1E1eaNAILc9x0l5RSivCEQ32Q%2BFqfr7TVZG4QceOJCle%2FrSCVITfZlGvclmh8W90d0eXhJu147MN2BNj28zBrfPuYQYi4KJIUQbxAC35yIuVjBl8B9KNQ0DChhORt8kCQ3wj2dK6J7DVh8TRbL0kaiXnh%2F0y%2Bc5RCxrB1jHwZRkbzY%2BkejpR5HG5j3UQe1ARatMYyIwm3erGW%2Fzo5m4phRARlcKjPMxKonrJmHAlG4qUnOj9Tn98aIyarJlv6gSUI1FE5FNUAlWQldoMDoasBGbVvPpm8OFMX%2FsyoqZA3Z0cnGI5xR3cTf1Lsqco4H4HpmBNciiFlDnsbFRQfmtsBfhahii3IbFHNl%2BGDvlZDKCNxVNnenJUnXFs%2BMVLZZ6sHv5py9DfDH63twuKL8dRSaMP%2Fpjb8GOqUB5dsTKpcOoLQkJbTYALLLa0K%2FjitCao3DhwDvWFkrN9am132HgH6FCSIABT1hg0%2BGoSiNwLyKeAUFrsJXaw1wmehJH9TFxWPbFmYDwyDqbtLI76bWvxHetJVOB7fztwJUBwyyEWkVZsnupI8I3Xfct1szCN87TzByx%2Bq0Zdxzy6vts9%2FUdVYvQDfUErRxw7ll951oS%2BPtvuCOaa2bGdDhxeZWtBmW&X-Amz-Signature=63c6ce55f64da3d1730065accc02d18cacb2007a14f1ee8ef76a2f30258e62cb&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W345J5XF%2F20250326%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250326T041011Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDTvBp%2Fxk%2FCOwLlqnlrgiG%2FitTTyb1C2UPpTDXsCVwWGAiEA5jXfS6xMIlhZ9E%2BpcNdoPhHnDFgZFZloiY1phQtVV5Eq%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDFCUqgOd7WbslFkBOyrcAzENoyBJ0l9huIOUqkC0zwuyOp5XnaVDCzgYsfbXCwihyHieaQ6WB8BsCHQ4SXfMLnmNTafQ%2FVKYc8lMbwQchF9lEbN8lY1rBN0HUZxVQZE5XdDdT9CZzEnKuUXvS5zXduMyOsXm54Wgl3oEbh67I1S7Y9OXTPJjrH0D%2BgHYdqUhBHUkcx%2FY5aH3qeRXB0ofwG%2BgKMYfU7yHWeiN9LQeI9h1XDvfYgXmVth%2FaX1E1eaNAILc9x0l5RSivCEQ32Q%2BFqfr7TVZG4QceOJCle%2FrSCVITfZlGvclmh8W90d0eXhJu147MN2BNj28zBrfPuYQYi4KJIUQbxAC35yIuVjBl8B9KNQ0DChhORt8kCQ3wj2dK6J7DVh8TRbL0kaiXnh%2F0y%2Bc5RCxrB1jHwZRkbzY%2BkejpR5HG5j3UQe1ARatMYyIwm3erGW%2Fzo5m4phRARlcKjPMxKonrJmHAlG4qUnOj9Tn98aIyarJlv6gSUI1FE5FNUAlWQldoMDoasBGbVvPpm8OFMX%2FsyoqZA3Z0cnGI5xR3cTf1Lsqco4H4HpmBNciiFlDnsbFRQfmtsBfhahii3IbFHNl%2BGDvlZDKCNxVNnenJUnXFs%2BMVLZZ6sHv5py9DfDH63twuKL8dRSaMP%2Fpjb8GOqUB5dsTKpcOoLQkJbTYALLLa0K%2FjitCao3DhwDvWFkrN9am132HgH6FCSIABT1hg0%2BGoSiNwLyKeAUFrsJXaw1wmehJH9TFxWPbFmYDwyDqbtLI76bWvxHetJVOB7fztwJUBwyyEWkVZsnupI8I3Xfct1szCN87TzByx%2Bq0Zdxzy6vts9%2FUdVYvQDfUErRxw7ll951oS%2BPtvuCOaa2bGdDhxeZWtBmW&X-Amz-Signature=46f02ae7011b0c4d2d55cc46691fdcd241aba52dd3be2df5c7ac7ba83874e5c1&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
