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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQGVRS6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQP7S13zvTasQzT05mbjSmycfe2TByzDA3j9LRuCl9uAIhAJjmNMbZmUb06X2olfpnCkSlMOBN8KCqnhk9eSSE9PEJKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqTdcEuMdt8FB9t0sq3AOUZZ2oSLNNn%2FYwwIrZ5lky3gqE58dCJ5tSvX5SOSWS3tElqCVFnqO%2ByE8yvhwcSIYR6KfcgvezOxmQT77b79Ck%2BVV4SeGb1yyXVs0pNHIfjA8YFAtgFgYla7yI5FLHCwxE%2B14peUmK7sAGKyI%2BgsTlCX9Mj6zVEfmbozhaJ5S1BfUvkm9RuKkf6ZgDmpvL6qgnm9DSB0XDnhGA5qqFvLKq0kTc8IV17XfLcHpDWgFHC9nkk6Gc2Q%2FlmOn6iDwoDVwQ3goxaQOiaMC99tDLv3IXxAt6x0P7sUCvh7t9VNf1EfdzdHzojzDpwhB0SllDd1ulc0GbcR7ZFOUrxVlJM1GjEm9sHDRM9qXqhNUvmRwOolwTn9OWsD2SqzXUOZ2KV%2Fg1sJ4x8mYcjfo7UN0QCGTSRQalotyZE98DF2sGSemqhDuIRA5qGu%2FNR4xeWLWvnfmTNjw9KCeXMVh3UHrhryNnTRSsiRedkLjkPJKXgqX53yDkFwdI9k3Od8JivpH2O5Bt6RbHxPl1ncCEV9HW4lwW4Jm8%2FwDIg28vHYCLaLSg88B8lK6tHV5%2FHaytMgmdaUfCeMKd1QQJuxKa5tI4M6I2XRp5gkJkhrzTnOz4o%2F7UNv%2BNoFuJQY3DfseDSDD4jdPCBjqkAaXFiNwEVYG5DATtJsDm%2FvVbWYVJrza33WnG%2FYTdcGyiYQjFDrCAOqlunbmD3OQINwyXjt%2B4lxbl3ZkGlfEduH4ag1AV1bBFyzL28wzpqpc24NOV3vmcwn%2FDZq9kk%2BRTcBF7kucpI54XV4ldpCeCpbF6t4Zj%2F1ssiISeqPyQ64NPz4Rs56SLZGTEksp29uwDHr7EoVS378%2BUAk%2FCjzo6JyKlvyfy&X-Amz-Signature=04d60940ea1252bd99da2e3429f04884f8846c0b5c5d701a2a222c19d27f229f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QWQGVRS6%2F20250620%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250620T023057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQP7S13zvTasQzT05mbjSmycfe2TByzDA3j9LRuCl9uAIhAJjmNMbZmUb06X2olfpnCkSlMOBN8KCqnhk9eSSE9PEJKogECLT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzqTdcEuMdt8FB9t0sq3AOUZZ2oSLNNn%2FYwwIrZ5lky3gqE58dCJ5tSvX5SOSWS3tElqCVFnqO%2ByE8yvhwcSIYR6KfcgvezOxmQT77b79Ck%2BVV4SeGb1yyXVs0pNHIfjA8YFAtgFgYla7yI5FLHCwxE%2B14peUmK7sAGKyI%2BgsTlCX9Mj6zVEfmbozhaJ5S1BfUvkm9RuKkf6ZgDmpvL6qgnm9DSB0XDnhGA5qqFvLKq0kTc8IV17XfLcHpDWgFHC9nkk6Gc2Q%2FlmOn6iDwoDVwQ3goxaQOiaMC99tDLv3IXxAt6x0P7sUCvh7t9VNf1EfdzdHzojzDpwhB0SllDd1ulc0GbcR7ZFOUrxVlJM1GjEm9sHDRM9qXqhNUvmRwOolwTn9OWsD2SqzXUOZ2KV%2Fg1sJ4x8mYcjfo7UN0QCGTSRQalotyZE98DF2sGSemqhDuIRA5qGu%2FNR4xeWLWvnfmTNjw9KCeXMVh3UHrhryNnTRSsiRedkLjkPJKXgqX53yDkFwdI9k3Od8JivpH2O5Bt6RbHxPl1ncCEV9HW4lwW4Jm8%2FwDIg28vHYCLaLSg88B8lK6tHV5%2FHaytMgmdaUfCeMKd1QQJuxKa5tI4M6I2XRp5gkJkhrzTnOz4o%2F7UNv%2BNoFuJQY3DfseDSDD4jdPCBjqkAaXFiNwEVYG5DATtJsDm%2FvVbWYVJrza33WnG%2FYTdcGyiYQjFDrCAOqlunbmD3OQINwyXjt%2B4lxbl3ZkGlfEduH4ag1AV1bBFyzL28wzpqpc24NOV3vmcwn%2FDZq9kk%2BRTcBF7kucpI54XV4ldpCeCpbF6t4Zj%2F1ssiISeqPyQ64NPz4Rs56SLZGTEksp29uwDHr7EoVS378%2BUAk%2FCjzo6JyKlvyfy&X-Amz-Signature=21cb7deb8b4199587e40d643b218eb8fcfbf2363e833d06ffdeb2f8198a5e4db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
