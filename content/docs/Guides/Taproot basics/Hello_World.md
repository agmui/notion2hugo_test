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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GTMSQD3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICba%2F6Dx143wa097lr%2FZLW%2BQBz7oQQw3cWCXIfSoB5rfAiEAhwlT9M3DESPJd9FGDplFkLSb%2B2%2BXH9oDKeBZZsvSPSwqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxybamnYYOch%2BgcESrcAyttWeQz3wS7%2B8xSr7FOxxapSRPIGROTDwW7IW2hAlR1xNwIuyOUTKt4AzwCdDdXwKJovI%2BNEMnISZr3bxXreYzGBmzxODfHRjO8ah1gswx6AsFgNfzzDialei2IY2Q3fBjit6DfbJBXWfjgDo5T3GZEeCSOVl1jZYCEFxZopR%2BFNMlWtmXD7fk4EKs048v0ygj9g066rvd3fu8F2pRPFueMh7754bCGjUTGLUcvob%2Fg1Ue4WnslhsEzLD3UtyB%2BBT77jeSO3fSK7IQXvhMATt3NRqGVBB1ykIwwkmItqMnBGJpaxww55LSbnrr6%2B1pO%2F0tGW3KRro6af5CZ3xNGqdoYiegkD0H92AYo8PmTGyblbU8Rdk01yUx2lfK2Drse%2BhPj%2B%2BTmtCEvtHq5nzUjegyabxr6GrOv2eIk8PoXlipswPx8qlhL55JtId75Tm%2FJGAXQmP614tEIiycqSOkx0mQokDpvjUBiQOzxxotiSYMxjyx7dOjTCCHKBF%2FrI4UuWLdN5xyoVvtuLAfxC4aj0b8P8ml2z1aitUD8axRWrqf1zeyP%2BxYIN6NwersuwC%2F9CHD5JnZAkS86GzBTTbRpUR9hycK6Lz0KV6eKoWKZgCPY46y7hU%2Bs5yy%2FwAIcMLuji8MGOqUBaT%2Ft%2FX02Wb5%2FMb4HR6UByavOQO1rtXGG4Kz%2BtBxCRKcnk3EdS6zYxHdchaShjn1hzMmNa1JA3dcJbTyMcczTTx%2FiqQ2FOBspGeuWKl%2BYeSMYAiQphBkpF56%2BD1UCbq1l59e9B5E%2BP3YyL1UWSZ4qLryM1tUFvtw2dwFhQIPHUINPej7S03czCtOzF3Y%2B7ArGhkdXDAgQVvxXuwn8n4oNJBy7Q6XF&X-Amz-Signature=d733cb80093253f5ee2cf97a95037d08aa41e482b26644fa99c7fb32f5dee285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665GTMSQD3%2F20250630%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250630T181210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICba%2F6Dx143wa097lr%2FZLW%2BQBz7oQQw3cWCXIfSoB5rfAiEAhwlT9M3DESPJd9FGDplFkLSb%2B2%2BXH9oDKeBZZsvSPSwqiAQIw%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHxybamnYYOch%2BgcESrcAyttWeQz3wS7%2B8xSr7FOxxapSRPIGROTDwW7IW2hAlR1xNwIuyOUTKt4AzwCdDdXwKJovI%2BNEMnISZr3bxXreYzGBmzxODfHRjO8ah1gswx6AsFgNfzzDialei2IY2Q3fBjit6DfbJBXWfjgDo5T3GZEeCSOVl1jZYCEFxZopR%2BFNMlWtmXD7fk4EKs048v0ygj9g066rvd3fu8F2pRPFueMh7754bCGjUTGLUcvob%2Fg1Ue4WnslhsEzLD3UtyB%2BBT77jeSO3fSK7IQXvhMATt3NRqGVBB1ykIwwkmItqMnBGJpaxww55LSbnrr6%2B1pO%2F0tGW3KRro6af5CZ3xNGqdoYiegkD0H92AYo8PmTGyblbU8Rdk01yUx2lfK2Drse%2BhPj%2B%2BTmtCEvtHq5nzUjegyabxr6GrOv2eIk8PoXlipswPx8qlhL55JtId75Tm%2FJGAXQmP614tEIiycqSOkx0mQokDpvjUBiQOzxxotiSYMxjyx7dOjTCCHKBF%2FrI4UuWLdN5xyoVvtuLAfxC4aj0b8P8ml2z1aitUD8axRWrqf1zeyP%2BxYIN6NwersuwC%2F9CHD5JnZAkS86GzBTTbRpUR9hycK6Lz0KV6eKoWKZgCPY46y7hU%2Bs5yy%2FwAIcMLuji8MGOqUBaT%2Ft%2FX02Wb5%2FMb4HR6UByavOQO1rtXGG4Kz%2BtBxCRKcnk3EdS6zYxHdchaShjn1hzMmNa1JA3dcJbTyMcczTTx%2FiqQ2FOBspGeuWKl%2BYeSMYAiQphBkpF56%2BD1UCbq1l59e9B5E%2BP3YyL1UWSZ4qLryM1tUFvtw2dwFhQIPHUINPej7S03czCtOzF3Y%2B7ArGhkdXDAgQVvxXuwn8n4oNJBy7Q6XF&X-Amz-Signature=ad0cf020412111ebcfd358d1ec996a7b194174430924c5e5ba42b379a47a1a22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
