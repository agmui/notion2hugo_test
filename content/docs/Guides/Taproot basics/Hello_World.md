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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWSAWALS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCcKEOs2e34uav0GipK5HG3wUCZCz5ixd25glvyAw9MsQIgGx%2FM44KawjPyAfoIqiWtriqHgumzkbJgYO7LvJW%2FxqYqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbLVt5uyqxaEuY6LircAytgYQpbDumF9DR5qcg24GAdk74llNdjbOJIFzxJBJsdqpLz1gOaO41cdId7nRc98GbrzZDQ9D9jRHsyxe5543rIOPTaUb9Q6sedkyXHtsb0sqbwExrD9DeLhL4kKETiNPkH1TBvJkWw%2BinJ%2FGxeYE5dZ7mfkCUrjS32uyzNFUqi8nL1Q7XzzvNabjPg9WihI7zF0Rc47HHb0zH0%2B5HA9sXIQm4AGSuSaVkRPwfDjFfwnPeKswLeQ2I2NFh6eLCokNH50zptJiTkAUlDCCwhNdEG34OOxx5awTlYav1Yf%2B3D6%2FHXVHxQf9ekUgqda23hAOy1PCEOSWYz0b1Hv0ksHUolFN00jggFHuPzvolA9BXwJpuLCq4kTneafNeApEo1qzVxl%2BpVYPpeokeDPwRCAuPDkH2bXlsRtYZSHm5qQTPXgXmPTExDI64IeNdAxWxCLgt1%2FpW1rQxovYH2kLsm93KpEJ9BZfBYK1368ZETjWg%2FDVtmgA97XHNoL4ZxDtglnOXF68uj0i8ugkzkdUuMJTpxmBlRzikWNn8jpjAQkQdjMMvh8YMBwgq9RfScthl%2Bw%2B90M4laZ7y16vc%2FRccjzf%2Fnj4OrL08OSBPQwvwhyrelJPhPE5F0X1Rrv8bYMLj8ncQGOqUBSDt47Y1krNbqdWQ%2BESeteRgehyRePTp%2FViFvjiUjEa%2Fq3yKlm4OHWaX68wiSUqo3wV3oLTHH36PEJqXvQmllMGcGutRX3Y%2FbYPXoX3EcA3J49eXw8nJTHNKglAhsW9rfSPxrhvHgfU3rQ772XY6VNl0PsB1Loejsh8Fvarh466lqvfYUucpbPfCIqTwzx%2BoAXHC%2FkHSCazP81LOTTjMr8PJBC8SX&X-Amz-Signature=e28e1f0fe639564ba5863d692233e5e837b970e70e8e06cd66bca2229d1439cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWSAWALS%2F20250728%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250728T141244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGYaCXVzLXdlc3QtMiJHMEUCIQCcKEOs2e34uav0GipK5HG3wUCZCz5ixd25glvyAw9MsQIgGx%2FM44KawjPyAfoIqiWtriqHgumzkbJgYO7LvJW%2FxqYqiAQIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPbLVt5uyqxaEuY6LircAytgYQpbDumF9DR5qcg24GAdk74llNdjbOJIFzxJBJsdqpLz1gOaO41cdId7nRc98GbrzZDQ9D9jRHsyxe5543rIOPTaUb9Q6sedkyXHtsb0sqbwExrD9DeLhL4kKETiNPkH1TBvJkWw%2BinJ%2FGxeYE5dZ7mfkCUrjS32uyzNFUqi8nL1Q7XzzvNabjPg9WihI7zF0Rc47HHb0zH0%2B5HA9sXIQm4AGSuSaVkRPwfDjFfwnPeKswLeQ2I2NFh6eLCokNH50zptJiTkAUlDCCwhNdEG34OOxx5awTlYav1Yf%2B3D6%2FHXVHxQf9ekUgqda23hAOy1PCEOSWYz0b1Hv0ksHUolFN00jggFHuPzvolA9BXwJpuLCq4kTneafNeApEo1qzVxl%2BpVYPpeokeDPwRCAuPDkH2bXlsRtYZSHm5qQTPXgXmPTExDI64IeNdAxWxCLgt1%2FpW1rQxovYH2kLsm93KpEJ9BZfBYK1368ZETjWg%2FDVtmgA97XHNoL4ZxDtglnOXF68uj0i8ugkzkdUuMJTpxmBlRzikWNn8jpjAQkQdjMMvh8YMBwgq9RfScthl%2Bw%2B90M4laZ7y16vc%2FRccjzf%2Fnj4OrL08OSBPQwvwhyrelJPhPE5F0X1Rrv8bYMLj8ncQGOqUBSDt47Y1krNbqdWQ%2BESeteRgehyRePTp%2FViFvjiUjEa%2Fq3yKlm4OHWaX68wiSUqo3wV3oLTHH36PEJqXvQmllMGcGutRX3Y%2FbYPXoX3EcA3J49eXw8nJTHNKglAhsW9rfSPxrhvHgfU3rQ772XY6VNl0PsB1Loejsh8Fvarh466lqvfYUucpbPfCIqTwzx%2BoAXHC%2FkHSCazP81LOTTjMr8PJBC8SX&X-Amz-Signature=559635a8673211c56b9d27246c26dfcfa2b1be165b61a91db56851834fec84d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
