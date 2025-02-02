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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XPB5O6J%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrQrEZBH0AskgV6EXY0AXw8dBf3ZZwsIPDyJCQeNLaPgIgDO7DkR1YnHIYwJJv%2By26Gs3%2FoFSdeyG1YtxPLKm3OaYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ21dyc%2FZ8Q01iLVeSrcA7CfAcQMC6frhkSo%2Fs9lsfpPdztb2JkeZyOq5h6zkxRU9H3v5tVvGM0pNcUnpnpeiqfEB%2B2m13zm9ve5lJIIVOSkzD8icF4Yh6KZw0Bq22s2R7h7Sjvc0Wk8Uhx5UoXWdtqDkc9B6KsZLnbPjB5nu4fNi1bMHmlBTXxw5cRMfZzmXgD%2FS7JvXWDzzeddvNXgue2E3C5rM0V6dpe7LgUJQZdeHQAPByBdNGivWhspdXhNBA%2BQOGUfOZbCqMulQzDoK3ooLIYF3qM4ysR4wdjP2zxEB4CaEOLUwbIf%2BfG17FD00FZH2FRaN2sNTySmHR5DBzBKZP%2FxkDaGtI2EbpHln%2F8fM0jaK9A3SJx5BN8%2F9%2FjgMzbrbcMdyXOzAaw3ZvhOEoILNWWORn6HC9mqJcZ8t9N7uwVMd1KJH4gAwpf4nezVYQc9alPSgNknC9cuFtpml7La2jvzA9Vhk4%2B%2BZrq9pgFX0%2FNm6kPzYNIO%2F2LsaOkHlZ6mcL6KhWASRTvnvlvu%2Ba3Cqiz4eIJzGYNfM4WqfhseqjYhrHBX47t6IkQ%2BpBJ2fT9r%2BmKzC%2FcxdtYX6RJ48YWQanS%2FH2Vsjo6rS%2BLtiwVJfPvB%2F%2FEHs7MDcTdI0TRgJbfMc3f3aU%2Fct%2By7MO7c%2FrwGOqUBfRe3BPqcKvjhM8ne4fZ5Ao2My%2ByeCqVnVfpnoy06%2FWvsPxYwafTC2yRAQPjPbQzpweJE%2Fu9gt4gRptq8xAsNDykFWthUfJkKks6Qt%2Fo2LZusPqJOZCMyDTdq0ptpoHNAElC%2B6rYazYw6WECbWD5dqJFrbFF3dFSUV1K5%2BjgXJ4bVEA5XzJnDnykYoTEv0b5ds%2BlT3wXWl2JPG4Hv1joxBLP7i6VU&X-Amz-Signature=49c1a631bf5881d9c9723ef7e5e8dab3f4f0b546badc61b2674145809482713e&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XPB5O6J%2F20250202%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250202T210213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDrQrEZBH0AskgV6EXY0AXw8dBf3ZZwsIPDyJCQeNLaPgIgDO7DkR1YnHIYwJJv%2By26Gs3%2FoFSdeyG1YtxPLKm3OaYqiAQI8%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ21dyc%2FZ8Q01iLVeSrcA7CfAcQMC6frhkSo%2Fs9lsfpPdztb2JkeZyOq5h6zkxRU9H3v5tVvGM0pNcUnpnpeiqfEB%2B2m13zm9ve5lJIIVOSkzD8icF4Yh6KZw0Bq22s2R7h7Sjvc0Wk8Uhx5UoXWdtqDkc9B6KsZLnbPjB5nu4fNi1bMHmlBTXxw5cRMfZzmXgD%2FS7JvXWDzzeddvNXgue2E3C5rM0V6dpe7LgUJQZdeHQAPByBdNGivWhspdXhNBA%2BQOGUfOZbCqMulQzDoK3ooLIYF3qM4ysR4wdjP2zxEB4CaEOLUwbIf%2BfG17FD00FZH2FRaN2sNTySmHR5DBzBKZP%2FxkDaGtI2EbpHln%2F8fM0jaK9A3SJx5BN8%2F9%2FjgMzbrbcMdyXOzAaw3ZvhOEoILNWWORn6HC9mqJcZ8t9N7uwVMd1KJH4gAwpf4nezVYQc9alPSgNknC9cuFtpml7La2jvzA9Vhk4%2B%2BZrq9pgFX0%2FNm6kPzYNIO%2F2LsaOkHlZ6mcL6KhWASRTvnvlvu%2Ba3Cqiz4eIJzGYNfM4WqfhseqjYhrHBX47t6IkQ%2BpBJ2fT9r%2BmKzC%2FcxdtYX6RJ48YWQanS%2FH2Vsjo6rS%2BLtiwVJfPvB%2F%2FEHs7MDcTdI0TRgJbfMc3f3aU%2Fct%2By7MO7c%2FrwGOqUBfRe3BPqcKvjhM8ne4fZ5Ao2My%2ByeCqVnVfpnoy06%2FWvsPxYwafTC2yRAQPjPbQzpweJE%2Fu9gt4gRptq8xAsNDykFWthUfJkKks6Qt%2Fo2LZusPqJOZCMyDTdq0ptpoHNAElC%2B6rYazYw6WECbWD5dqJFrbFF3dFSUV1K5%2BjgXJ4bVEA5XzJnDnykYoTEv0b5ds%2BlT3wXWl2JPG4Hv1joxBLP7i6VU&X-Amz-Signature=310977b6a4eca4bcc80453eb3680f490c246a4596e068f9f9635a3c5b779ab82&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
