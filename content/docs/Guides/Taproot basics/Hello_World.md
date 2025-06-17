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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2JF2OOQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4Vsh2TAP4rZ3b8Rh6N8GWM%2BN4mDmPMZhiSO4k6FOJwAiBuCgzY4cs5GfQPX1D4KnTBrthdnDAzONpJ5Vtm15LDKCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMfq3vykQZA27Lze3IKtwDcceo8agbhx40A%2FP8TJZpV8kZUdusLJUXRra1nXeslqw6T9B9sCFE8JbxXVsPvbtQ9gE09yORcpya8mka08o%2Bf5L01FKlVAz4UESgFoGJtGPjzMB0on4u%2FKCnah9VVq95F3fRR3EZimk5RVBumgBVl8572drE%2BbJobsieQXmyd2j%2FwtXwk4sKvVKzX%2FsM2raOxWLx7KGZsAYhvpCiwGeAy2NI3oELEGjf%2BjxgIzXGS%2FeZuVQ6QAPuPzeFgCBIlLKVbEJ6Ee0Gb8yPaU7mOi0ycdSxroCKa14gr6Af2EgYzRqbOEoKptsEcHDxh2lxQ6TOCvmeatnDk3Xf6KKPZt5wBGVM4aaTnxyQ6USsIJyPaa3qA3OOdaFIUvYtqWlVRsK6V6MC5Ouh9JNNtcIj9XUOZjHYZgHQc7AlJioberhCU%2BZdM9TNEvsu0Z5p4f7bJ0NIwbn6ED2bpL7%2BN1DZaTtHnA8phXlmxoZoOoHrDzrFL%2Bs2gs2mMIdzU9aRAkxMPxpv8kdSltgk1ieh4q6HiLsk%2BGIJmk3wMH%2FA2NDEczsox8XNGu5gAR58tT3p%2Bml8qjJWBsicsuS4nglhta2pVPe590vvhdN7wHLzIi8hIGHzlp3ESsT77fqAt3roXeQwjrHFwgY6pgFg7x1F839xlB8EbSLZE67eWboNVZ55BgiGP8zrLjQhLy9vBLRX39iVsPSp%2FWl36y45EHtRyiE16cRT1Dcfn8XPU5XV7ZLMiCKXljWuRTPjN8GUVMa%2Fcy77tedLd3SJMO%2BhlNlQf7cYi08HU9YRe1lmv0IxQ7qXNSkH%2FiF5IcO89wv%2F%2BsywK6mdbjdb0eK6M1Fj9Vwh%2FpRrGlum3%2FRvWodBVPzNGUxL&X-Amz-Signature=03cc48f07e8b4e213be25a53b443a9d9ddf70d1411b8e1d5d634eeb302cdd197&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2JF2OOQ%2F20250617%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250617T151025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA4Vsh2TAP4rZ3b8Rh6N8GWM%2BN4mDmPMZhiSO4k6FOJwAiBuCgzY4cs5GfQPX1D4KnTBrthdnDAzONpJ5Vtm15LDKCr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMfq3vykQZA27Lze3IKtwDcceo8agbhx40A%2FP8TJZpV8kZUdusLJUXRra1nXeslqw6T9B9sCFE8JbxXVsPvbtQ9gE09yORcpya8mka08o%2Bf5L01FKlVAz4UESgFoGJtGPjzMB0on4u%2FKCnah9VVq95F3fRR3EZimk5RVBumgBVl8572drE%2BbJobsieQXmyd2j%2FwtXwk4sKvVKzX%2FsM2raOxWLx7KGZsAYhvpCiwGeAy2NI3oELEGjf%2BjxgIzXGS%2FeZuVQ6QAPuPzeFgCBIlLKVbEJ6Ee0Gb8yPaU7mOi0ycdSxroCKa14gr6Af2EgYzRqbOEoKptsEcHDxh2lxQ6TOCvmeatnDk3Xf6KKPZt5wBGVM4aaTnxyQ6USsIJyPaa3qA3OOdaFIUvYtqWlVRsK6V6MC5Ouh9JNNtcIj9XUOZjHYZgHQc7AlJioberhCU%2BZdM9TNEvsu0Z5p4f7bJ0NIwbn6ED2bpL7%2BN1DZaTtHnA8phXlmxoZoOoHrDzrFL%2Bs2gs2mMIdzU9aRAkxMPxpv8kdSltgk1ieh4q6HiLsk%2BGIJmk3wMH%2FA2NDEczsox8XNGu5gAR58tT3p%2Bml8qjJWBsicsuS4nglhta2pVPe590vvhdN7wHLzIi8hIGHzlp3ESsT77fqAt3roXeQwjrHFwgY6pgFg7x1F839xlB8EbSLZE67eWboNVZ55BgiGP8zrLjQhLy9vBLRX39iVsPSp%2FWl36y45EHtRyiE16cRT1Dcfn8XPU5XV7ZLMiCKXljWuRTPjN8GUVMa%2Fcy77tedLd3SJMO%2BhlNlQf7cYi08HU9YRe1lmv0IxQ7qXNSkH%2FiF5IcO89wv%2F%2BsywK6mdbjdb0eK6M1Fj9Vwh%2FpRrGlum3%2FRvWodBVPzNGUxL&X-Amz-Signature=e32912d04a2b2a93f58964346f8f9ac913ed5635aa2b8a61efe0f4fb3d69d3a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
