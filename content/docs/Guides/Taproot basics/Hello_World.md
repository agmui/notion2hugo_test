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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2SCCBJT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T051958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsa26olzBR1Iy1gTlo%2FcslPpVeE12lURMq6KggFasMkQIgVyj8riFw2n39CpKZK7Wm3Vqw5du%2F38c0FCbe3HLjZCwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOoUK0QBTZUKp%2FYgCrcA13L2aYLhsRkkODsiEYLYo2zFN%2BZqQHZ5c1JxCpIk9a0QMBnkXYkmyd3WowSOLRxOxGgq4lqSRm%2BnaU%2BBamsShUVLN%2BOvRp%2B8%2Bq0wxil%2BrTcm2I%2FqLFwYcnMevaHEY%2FLIRd935PmXSszqB47%2BWFGQEN1udJ48hOD2D%2FZRY3zbKWwlGxuA4nJaz%2FRJURgMwejclwvtN0%2BkEinGLR9r%2B37EXbNqDhIfGI90aRuUZ5%2B%2BAPP1X%2FrtFtdrN4hFgBBk1TSbBvufD0pgRjqM4RHHM9LC7YCsVEDASQOrAT1Favdl0kuv9UidIfqGbX3EyvXUp9dKY9RQdk9uSV4WIK2g1YexT5T0KcDOojIicq9E2F6cPnEwumw2p0CllERd2FMGhQVn6x6phZ1mpYu5Z%2Bx01%2B%2FA0bnEfsCmWbH%2F368BwvAUCv7UVT0dDU%2FTBV0Io%2Fh8TQf%2F49Yqj5ZX%2FBewTHfuMnAQIQ2FjpGcRhupqrkoyLEorQHMRTQu27zz8uXblZTWFcu0KXkI2zHXppncKcdZY0xlI8GxtJpfYS8LKY9oTwaQLwd13G6kYNiEBlegQBg7etxCRfNz0NRImYR1eqzBwW2fhGuLnQ8Yfvw%2FZEHolubRLpe3WT5H0saT6nMWEH5MLnypcQGOqUBzW8vtPeSO22S4amKNihqoRpBDbvccVDux4%2BcwzSsbkV5hpyIOc48Knx8rtwCfm7qizNGs2tXCjfaK0YBicPHmq5SAzuYnUZvcOOrhkmtewpnWNbdZCGFWCfs%2BeoOhkxKHV0PD%2B12jz%2FvQFv4yDupb2AZI7%2BRb2oaV8nVDAIzCq6JMf%2BQp0QDYd3MJLplRXwKy%2FOpcGM5Ux1OoHz6UscohQuhGnnw&X-Amz-Signature=3efd24df4f7d7016080bd2a5a74b45ae3a4fb3ef3d92914705e80de06c35cd90&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2SCCBJT%2F20250730%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250730T051958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCsa26olzBR1Iy1gTlo%2FcslPpVeE12lURMq6KggFasMkQIgVyj8riFw2n39CpKZK7Wm3Vqw5du%2F38c0FCbe3HLjZCwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNOoUK0QBTZUKp%2FYgCrcA13L2aYLhsRkkODsiEYLYo2zFN%2BZqQHZ5c1JxCpIk9a0QMBnkXYkmyd3WowSOLRxOxGgq4lqSRm%2BnaU%2BBamsShUVLN%2BOvRp%2B8%2Bq0wxil%2BrTcm2I%2FqLFwYcnMevaHEY%2FLIRd935PmXSszqB47%2BWFGQEN1udJ48hOD2D%2FZRY3zbKWwlGxuA4nJaz%2FRJURgMwejclwvtN0%2BkEinGLR9r%2B37EXbNqDhIfGI90aRuUZ5%2B%2BAPP1X%2FrtFtdrN4hFgBBk1TSbBvufD0pgRjqM4RHHM9LC7YCsVEDASQOrAT1Favdl0kuv9UidIfqGbX3EyvXUp9dKY9RQdk9uSV4WIK2g1YexT5T0KcDOojIicq9E2F6cPnEwumw2p0CllERd2FMGhQVn6x6phZ1mpYu5Z%2Bx01%2B%2FA0bnEfsCmWbH%2F368BwvAUCv7UVT0dDU%2FTBV0Io%2Fh8TQf%2F49Yqj5ZX%2FBewTHfuMnAQIQ2FjpGcRhupqrkoyLEorQHMRTQu27zz8uXblZTWFcu0KXkI2zHXppncKcdZY0xlI8GxtJpfYS8LKY9oTwaQLwd13G6kYNiEBlegQBg7etxCRfNz0NRImYR1eqzBwW2fhGuLnQ8Yfvw%2FZEHolubRLpe3WT5H0saT6nMWEH5MLnypcQGOqUBzW8vtPeSO22S4amKNihqoRpBDbvccVDux4%2BcwzSsbkV5hpyIOc48Knx8rtwCfm7qizNGs2tXCjfaK0YBicPHmq5SAzuYnUZvcOOrhkmtewpnWNbdZCGFWCfs%2BeoOhkxKHV0PD%2B12jz%2FvQFv4yDupb2AZI7%2BRb2oaV8nVDAIzCq6JMf%2BQp0QDYd3MJLplRXwKy%2FOpcGM5Ux1OoHz6UscohQuhGnnw&X-Amz-Signature=c50fbbed2f749b253f5128978a65bdb9ea7e5f1f183607aba6c2aa0a5aa78a0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
