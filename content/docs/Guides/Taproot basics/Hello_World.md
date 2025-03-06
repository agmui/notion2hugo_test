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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KBGOF77%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPAt8RGXh9M%2Fm2SIqIFZf79aI19NBgoMpYKh1h6pM1jgIhAKAl1opQluIgwihny0b7IDeqfFFYqSHSSNOs6%2FTvEYdgKv8DCCcQABoMNjM3NDIzMTgzODA1IgweEtYtA61Y8MPxKjkq3AOAZC74ZgK1LA9ct%2BhnmbCo6km%2FYVbzfUmrXt0knaZPBljFFmW%2BHLwlPcJyGcqFFT%2Be8sk2q6Kbl6agZzwC35Ylm7HwZnIUicgABzALSlNtBaNfabRPAYD5QR9x5pMhCovw2VX3apzrG2%2FL9FSFykuVIT1ky81Hz%2BPbfZz3cmpvIWozeXq%2Fg8y8e1apKBq%2BG1CZPX%2BMm90niasJiDIz%2BgE2oCY0mAzo1f%2FNN%2BnPYOpC%2FcvyzTsqHqRT1pdkwbc1RG%2Fadumtwy%2F9Pke6SSLpYDZX9dgA0UI6f5CQN%2FbfJNZQymYD7cJXtlhA9U2%2FYmuyJW0tdiYV5fVkFjoqVqywDEiZ71W8%2BS8T0BYp26OB5o%2F%2FOB3kqWV1MQxc%2Fx6YXtggfAHEyg%2Bxd2Mg7ssVsvYIyd5Zlmne2GA2oP8prF7EL12RYpIq6N07hnY2ZlU4s9Sq2mRMmci5DXpppeH1EINYeyhi59Wv%2FNhQ1I0SHUBRTu6b%2BPkk%2B1c85k5ylzdE3VbQIRRU3aSuZ0HMnANnv%2B2AsoRp0QBFYSlPCoTECc9ALgGIO8%2BAPwNAgAgIXLpwUO5jOFa31DhWtdL4HSDNPLg2AI4YsPc8xhdo986KH4q4Kf16mkcVcidKFmJqV%2FcvTTD39qS%2BBjqkAVe%2BRdwLCPokbb8MEvkCw9l3ecMuQklBO0Omb5XCWs1vM3pSUo72g0ORNSsb4HpQX3aTS97Op1ilYaHX9FkyM%2FnJFhl3%2FDUjpMVbN7rMET07W7v0eUQxjrxE7duQaz%2Bl%2Ba1xVSYpvOH00uHq2btxKu2e7tr%2FCLgOBSDqJyVWW83r33vRWhwS2xmSK96QEHC6KBhoXRqZm7SInCQvoS7NQS2QK%2FjF&X-Amz-Signature=4465e992934e82f384def4e55e31b88531cff6bd158e56da7add379e721863e0&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662KBGOF77%2F20250306%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250306T070819Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPAt8RGXh9M%2Fm2SIqIFZf79aI19NBgoMpYKh1h6pM1jgIhAKAl1opQluIgwihny0b7IDeqfFFYqSHSSNOs6%2FTvEYdgKv8DCCcQABoMNjM3NDIzMTgzODA1IgweEtYtA61Y8MPxKjkq3AOAZC74ZgK1LA9ct%2BhnmbCo6km%2FYVbzfUmrXt0knaZPBljFFmW%2BHLwlPcJyGcqFFT%2Be8sk2q6Kbl6agZzwC35Ylm7HwZnIUicgABzALSlNtBaNfabRPAYD5QR9x5pMhCovw2VX3apzrG2%2FL9FSFykuVIT1ky81Hz%2BPbfZz3cmpvIWozeXq%2Fg8y8e1apKBq%2BG1CZPX%2BMm90niasJiDIz%2BgE2oCY0mAzo1f%2FNN%2BnPYOpC%2FcvyzTsqHqRT1pdkwbc1RG%2Fadumtwy%2F9Pke6SSLpYDZX9dgA0UI6f5CQN%2FbfJNZQymYD7cJXtlhA9U2%2FYmuyJW0tdiYV5fVkFjoqVqywDEiZ71W8%2BS8T0BYp26OB5o%2F%2FOB3kqWV1MQxc%2Fx6YXtggfAHEyg%2Bxd2Mg7ssVsvYIyd5Zlmne2GA2oP8prF7EL12RYpIq6N07hnY2ZlU4s9Sq2mRMmci5DXpppeH1EINYeyhi59Wv%2FNhQ1I0SHUBRTu6b%2BPkk%2B1c85k5ylzdE3VbQIRRU3aSuZ0HMnANnv%2B2AsoRp0QBFYSlPCoTECc9ALgGIO8%2BAPwNAgAgIXLpwUO5jOFa31DhWtdL4HSDNPLg2AI4YsPc8xhdo986KH4q4Kf16mkcVcidKFmJqV%2FcvTTD39qS%2BBjqkAVe%2BRdwLCPokbb8MEvkCw9l3ecMuQklBO0Omb5XCWs1vM3pSUo72g0ORNSsb4HpQX3aTS97Op1ilYaHX9FkyM%2FnJFhl3%2FDUjpMVbN7rMET07W7v0eUQxjrxE7duQaz%2Bl%2Ba1xVSYpvOH00uHq2btxKu2e7tr%2FCLgOBSDqJyVWW83r33vRWhwS2xmSK96QEHC6KBhoXRqZm7SInCQvoS7NQS2QK%2FjF&X-Amz-Signature=333e8dafaa28d432bc04b208d65c89048a267fe1e42cc6e8113963fff632811c&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
