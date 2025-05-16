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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4UTZCVZ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiAuC0f7Z0ofxuV8MQrm4ibFMHRKVniORZZOYVhzOyEAiB21SmAc%2Fq%2FzKlGF3lfM7t1LrFdJnMonMmw3ulrdc292Sr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMLa%2B7T7bStklQ6unSKtwDGenN64Cei%2Fm7bxVVBXbSiIlLwPSFSz2oBe55oZis1nCL0iOGMLGxiW3CqQ%2BBqGLItU2V1ePSsoCIEbj62uGMtsWJ3Z6%2BUMj%2BIl7Ad68yQjnCP1BXK6luOU4jzxg1NZdeC8GZu2nd9Ytmii%2FnBZZx5gAlqQ5yaByVAA9oz7%2BRpK4fU4sJYBtSIymytzbtrchGO0riBCfKkIgZqEWYr2bU3nqG%2FIMdpgBfcHhp7hJ41iO5nDklC2l8xVbV8DWOlmoSkdpNPH1OY6Us4loTbhCTTFfRZ0f%2FfUmFwF%2B0CMidiBFxqOwL3VC0CQbX8%2BvY2bqfQw6d4eUrLr0TmBhoWapuPRCcrStEWFi8jCK5E3DKniN5Q48%2FMdx3gPfuskbWS5jUGPJBq%2BxAx2aELQmOSMHoTpRCgKkb3mMLLsKxEOPL9Naq%2FMNkl8ZYlBc%2BHXnCWXkicyer7MM8fwBlZlQInoRW4GLb2I2RTwp0P6DC9JThqNbTlXf0tfIpmZMJXOZ%2FKf9VdIN2HbGJX6YvkyhDHhgorUgAce0tOWdQ6r9UF3Z6UAgcXnl3TgsmL8dFQ2%2B4YBJykiQYWPYaXoyubmmEQRdK5BUJyxaL1pxClolTDzfN31%2BDZ%2BNkBfuYvtTIKu0wq7qbwQY6pgFGWrfdnSy1ICfjYRM0KDrGaYkg407wwjDsjpN%2FAUNeTw5ByRyLRZKIQNKo3pUB3G8Px0o5nE1cyS08CvqgQYo1jrgLCJId0BTWwerwVh4bpKBFjXgbf%2B1Eb9UEH882XZJvdvhyrMaFLyNH2uzMxwnGygdcq8UMPJdLsjXnqRuuSQIQQyUjCQ4mNFSWf2uUL6bGkAV%2FNA8JxgxoTB0m0TnItoCE2gPE&X-Amz-Signature=0d8918ea6fda74d23342e8a229dac58cc9fe5fe9f3bc7db3f62ab684564298ab&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4UTZCVZ%2F20250516%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250516T070922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICiAuC0f7Z0ofxuV8MQrm4ibFMHRKVniORZZOYVhzOyEAiB21SmAc%2Fq%2FzKlGF3lfM7t1LrFdJnMonMmw3ulrdc292Sr%2FAwhAEAAaDDYzNzQyMzE4MzgwNSIMLa%2B7T7bStklQ6unSKtwDGenN64Cei%2Fm7bxVVBXbSiIlLwPSFSz2oBe55oZis1nCL0iOGMLGxiW3CqQ%2BBqGLItU2V1ePSsoCIEbj62uGMtsWJ3Z6%2BUMj%2BIl7Ad68yQjnCP1BXK6luOU4jzxg1NZdeC8GZu2nd9Ytmii%2FnBZZx5gAlqQ5yaByVAA9oz7%2BRpK4fU4sJYBtSIymytzbtrchGO0riBCfKkIgZqEWYr2bU3nqG%2FIMdpgBfcHhp7hJ41iO5nDklC2l8xVbV8DWOlmoSkdpNPH1OY6Us4loTbhCTTFfRZ0f%2FfUmFwF%2B0CMidiBFxqOwL3VC0CQbX8%2BvY2bqfQw6d4eUrLr0TmBhoWapuPRCcrStEWFi8jCK5E3DKniN5Q48%2FMdx3gPfuskbWS5jUGPJBq%2BxAx2aELQmOSMHoTpRCgKkb3mMLLsKxEOPL9Naq%2FMNkl8ZYlBc%2BHXnCWXkicyer7MM8fwBlZlQInoRW4GLb2I2RTwp0P6DC9JThqNbTlXf0tfIpmZMJXOZ%2FKf9VdIN2HbGJX6YvkyhDHhgorUgAce0tOWdQ6r9UF3Z6UAgcXnl3TgsmL8dFQ2%2B4YBJykiQYWPYaXoyubmmEQRdK5BUJyxaL1pxClolTDzfN31%2BDZ%2BNkBfuYvtTIKu0wq7qbwQY6pgFGWrfdnSy1ICfjYRM0KDrGaYkg407wwjDsjpN%2FAUNeTw5ByRyLRZKIQNKo3pUB3G8Px0o5nE1cyS08CvqgQYo1jrgLCJId0BTWwerwVh4bpKBFjXgbf%2B1Eb9UEH882XZJvdvhyrMaFLyNH2uzMxwnGygdcq8UMPJdLsjXnqRuuSQIQQyUjCQ4mNFSWf2uUL6bGkAV%2FNA8JxgxoTB0m0TnItoCE2gPE&X-Amz-Signature=46de1df1eb2c8570da42591e33a2a5c0a9ccef3d082aabf8a8d6ef9904e02378&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
