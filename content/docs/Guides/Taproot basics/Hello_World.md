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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AVVNT2Y%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh5bZRGwilEJq3TBqhAHOQ%2Ba4wlTCCzzF3T84Tfs5N0AIhALjdS5ZnZtwyUwFcMXHh0rXKt8MhBtaQGPS4%2BxwGK5bUKv8DCCwQABoMNjM3NDIzMTgzODA1IgwrnVcLe3MSIWKBoUkq3ANRWfridXkE9t3eeYMsv6uJO1KzySkM%2Ft68Vuk0tycLLSbxiejhxxBATOMdU%2BHPLkKUWoYcLGt1LcAd8w3Qe1jWrlk6H9GEfoipABEM77FYePZTrTuyTBu801pLlNrQ00Cu3zkezV51M60Cti2rtGHCp53V%2FwGOLoszjvF3yw5UmW09wey%2B1GXULxYa%2FRlbLK%2BtoY6IDyByNU581zxNTw28KdVxInPokPdNl%2B7sneXFi9NvS64Rs69hKr6jsLxVnOlQp5tGv%2FWdtmnKc1xhrlWkgWE%2FWbo97r%2BDDs7eE18Zf1cx8e9Z7SeVQK5NzLKdX0Dz3QM4AZd%2FbxJ9c%2BqChJioNtAlNeI1ujmDZcUgKK6%2FlZV5tbzJxYH12d%2FMJgalrJePNLltvpIpLk%2Fy93ZLdnSV%2BCIJ6ZJ0Sgyw41%2BtdGKvnrZ9oGvTpVnC64pmS8WcxoVvbR9Qt2Sv%2FD8X8M6v4YjJYkPePEi13gZzxmKesJXwT6GVLvGA8YQqQOwao3wMc3HAQPZ%2BXr6w8jexZKKrogawMQSzGY%2Bt7cjNN8B5LM65jCu6%2FaK4TNh7b4ZT8r9yfD4tmZ0gHn7gtLhrqsijHLlm7jl3mtIl%2BD0glq1djx4gbUAn16q83UnQ8WzBBDDv8qW%2BBjqkAZAz991JXiWLUq%2BpBcTxvKqfaa7RJF5Gk3ROom8zRbgswVQcATTmwWHW6LvHUId6IVIJzusqDoYHwwxDhVuVLUefpy3fkpnKJ4FNKSruZCTJIgbgPLWuz8kMh%2BqNDUHt3qcwMzn1jO%2BqV49LCb9lFRdIwepwrf8MND%2FqCKxLxch7LcJwxbWfMp14yL%2BQua8SB5lynxiKGhwqTGGf2AENkYiE2Io1&X-Amz-Signature=476f24039d6b9223c0a97dc4b38c379a34de15960dc8fb950a66a3274c1427e7&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665AVVNT2Y%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T110655Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCh5bZRGwilEJq3TBqhAHOQ%2Ba4wlTCCzzF3T84Tfs5N0AIhALjdS5ZnZtwyUwFcMXHh0rXKt8MhBtaQGPS4%2BxwGK5bUKv8DCCwQABoMNjM3NDIzMTgzODA1IgwrnVcLe3MSIWKBoUkq3ANRWfridXkE9t3eeYMsv6uJO1KzySkM%2Ft68Vuk0tycLLSbxiejhxxBATOMdU%2BHPLkKUWoYcLGt1LcAd8w3Qe1jWrlk6H9GEfoipABEM77FYePZTrTuyTBu801pLlNrQ00Cu3zkezV51M60Cti2rtGHCp53V%2FwGOLoszjvF3yw5UmW09wey%2B1GXULxYa%2FRlbLK%2BtoY6IDyByNU581zxNTw28KdVxInPokPdNl%2B7sneXFi9NvS64Rs69hKr6jsLxVnOlQp5tGv%2FWdtmnKc1xhrlWkgWE%2FWbo97r%2BDDs7eE18Zf1cx8e9Z7SeVQK5NzLKdX0Dz3QM4AZd%2FbxJ9c%2BqChJioNtAlNeI1ujmDZcUgKK6%2FlZV5tbzJxYH12d%2FMJgalrJePNLltvpIpLk%2Fy93ZLdnSV%2BCIJ6ZJ0Sgyw41%2BtdGKvnrZ9oGvTpVnC64pmS8WcxoVvbR9Qt2Sv%2FD8X8M6v4YjJYkPePEi13gZzxmKesJXwT6GVLvGA8YQqQOwao3wMc3HAQPZ%2BXr6w8jexZKKrogawMQSzGY%2Bt7cjNN8B5LM65jCu6%2FaK4TNh7b4ZT8r9yfD4tmZ0gHn7gtLhrqsijHLlm7jl3mtIl%2BD0glq1djx4gbUAn16q83UnQ8WzBBDDv8qW%2BBjqkAZAz991JXiWLUq%2BpBcTxvKqfaa7RJF5Gk3ROom8zRbgswVQcATTmwWHW6LvHUId6IVIJzusqDoYHwwxDhVuVLUefpy3fkpnKJ4FNKSruZCTJIgbgPLWuz8kMh%2BqNDUHt3qcwMzn1jO%2BqV49LCb9lFRdIwepwrf8MND%2FqCKxLxch7LcJwxbWfMp14yL%2BQua8SB5lynxiKGhwqTGGf2AENkYiE2Io1&X-Amz-Signature=0d82299ac0a11bbd43a4e0c099c5716a82533e81c48b0e0925835cf8caecfcd8&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
