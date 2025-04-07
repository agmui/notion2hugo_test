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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXQRVY4H%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX3BT%2Blz43NQplvC3socp43U6L6cjxBdp0bD6a9NShOgIgFFWKUjWbmp6wC3ZD%2BXv9vOC5CgaoBXmj9gKyA9W9lNUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLqN%2FoMRlWv8b91YCSrcAxj%2FpeT%2BLk0vM0wBfwybfkPCigpTmvVnRtZAU1RXeChyn0niQWXbhDDnic8XiRwlbTmLnVPikrU4nbbOHZEh9wbkffTa75W5YcbdsuCW4vDMOl5wIhEAcjFkhgUGmIrzJh0gdJyT3E8Gx4y6LTp2YRTxjiMbAz%2BCkvktB%2FmreMBl%2B1PJWNwQaTcARwVmbi2GiaFENhENiBtlvIF8%2Bw7j0dgPVVKkokDD%2BwQtcsdcyHimFukazlJjemoShC3F8po0Uvt4OjhGNHtvgYRu4iLD5SeTZBz4sEOkQWKPzm%2FGU9k9CdVa%2BGOxE2EP2osDN%2Byhad%2FF6sq1Qll2KXY%2FLRD0DgY2ZguN1qmaEFd4ZtbIYevFH2fofwb9kHNLYVC5Ome1QV0VXjYcbLle7ftDID3HFjFcwaPbL9uzhNSvGLgiHorghrPHLs1%2Fuur29O04Y2HlGiRMM1As0y7xqFX20YztRqZFuZBbyujF3BxtMXX%2Bpg1kPlaL0jKeN9GnVgLfGQTrdZIZ5d2TJQonlYWHCcmMhSek2wcPyGRb2XR4uBF3hbfrLq6kG%2FycGwUDSEE1cXBJTTHRgIADUcyr%2BW0HfDorWOXsA7cVfHR12QBhaOndp4kw7PhawSXyd9WofEREMNrtzr8GOqUBerlNIym0LpKSPafFjhfwhMTj%2BxSPVPTzdmY%2BSlmqlkyoVxxqk5OoLR7eSh2Hqid70R2kYLwKnrHHkKWE3HWH1TcHN35cT2KIL6rhNDGiiht3XMaO%2BzH%2FsAhXoowl8F1JvpS3uLOBsCOdgKCmBjqomibW1D7Bc6MzQbFzUqICFUA6WvZUkf%2FH%2Fn3HqPC0%2FfYCNzG6lSUMpOtfxmI9zR2NVYubQ5Zh&X-Amz-Signature=820a51b9d281b563be503bef0a2467329fc6864878ef40034b7ee2bdbb4a7bd8&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXQRVY4H%2F20250407%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250407T121459Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCX3BT%2Blz43NQplvC3socp43U6L6cjxBdp0bD6a9NShOgIgFFWKUjWbmp6wC3ZD%2BXv9vOC5CgaoBXmj9gKyA9W9lNUq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDLqN%2FoMRlWv8b91YCSrcAxj%2FpeT%2BLk0vM0wBfwybfkPCigpTmvVnRtZAU1RXeChyn0niQWXbhDDnic8XiRwlbTmLnVPikrU4nbbOHZEh9wbkffTa75W5YcbdsuCW4vDMOl5wIhEAcjFkhgUGmIrzJh0gdJyT3E8Gx4y6LTp2YRTxjiMbAz%2BCkvktB%2FmreMBl%2B1PJWNwQaTcARwVmbi2GiaFENhENiBtlvIF8%2Bw7j0dgPVVKkokDD%2BwQtcsdcyHimFukazlJjemoShC3F8po0Uvt4OjhGNHtvgYRu4iLD5SeTZBz4sEOkQWKPzm%2FGU9k9CdVa%2BGOxE2EP2osDN%2Byhad%2FF6sq1Qll2KXY%2FLRD0DgY2ZguN1qmaEFd4ZtbIYevFH2fofwb9kHNLYVC5Ome1QV0VXjYcbLle7ftDID3HFjFcwaPbL9uzhNSvGLgiHorghrPHLs1%2Fuur29O04Y2HlGiRMM1As0y7xqFX20YztRqZFuZBbyujF3BxtMXX%2Bpg1kPlaL0jKeN9GnVgLfGQTrdZIZ5d2TJQonlYWHCcmMhSek2wcPyGRb2XR4uBF3hbfrLq6kG%2FycGwUDSEE1cXBJTTHRgIADUcyr%2BW0HfDorWOXsA7cVfHR12QBhaOndp4kw7PhawSXyd9WofEREMNrtzr8GOqUBerlNIym0LpKSPafFjhfwhMTj%2BxSPVPTzdmY%2BSlmqlkyoVxxqk5OoLR7eSh2Hqid70R2kYLwKnrHHkKWE3HWH1TcHN35cT2KIL6rhNDGiiht3XMaO%2BzH%2FsAhXoowl8F1JvpS3uLOBsCOdgKCmBjqomibW1D7Bc6MzQbFzUqICFUA6WvZUkf%2FH%2Fn3HqPC0%2FfYCNzG6lSUMpOtfxmI9zR2NVYubQ5Zh&X-Amz-Signature=9727b2796e0940a31623bb09b105d5aa6fb79a6dd34319474e7488899b2577a9&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
