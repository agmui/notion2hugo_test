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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645BOIPLN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnUPQoYfzBFesrBw6mBvBTmcSrLMBpkcA71cPh95r3jAIhAPIy136am3vkj6xA9ihYETcGTUOvGgc%2FiE6jfPLwKqDxKv8DCCYQABoMNjM3NDIzMTgzODA1IgzSba4pdQxIiPWLhLcq3AMiEh9sjj5Zd5JPHymZDCYu%2B%2BoPL4GL020oHV8w0%2B3sBnckWqX7qLFUdFzutR2rvo%2F%2FLGjQN7KY51vmSn5SJwgHKIRqKc3LC68dyvR%2FV83juvBTzXjhfKSasFqc6MWBhhFjRR%2F9wYZYnu8fJ4gs63KA87jiCveNFwj8DdX6WjbK%2BzTC0x6fBKUr%2Br6gGxuRHQzrjNIlvBYmzEYeb41%2BKDQdWfgSlIV1LED2v05tXyTXbDdyr9BfybKUJ3aQ8oAyIBv5FNZFuqLJLeQ03mh5W5fLuy05oQxEFXy7tBYbduSREY%2FOMhwXGVgG4EOoqhuEqwzgL%2Bpx2jZBedacJWqfFJXyZBIKhJdDzj2GAwBeQsx1t7Jj66i0PN3hvA4FR46qwr1tVYvhlolQEaF5x4zIPyYeGKSYoZz5YyCXpji%2BR2tbT3fooHONrHJfdav2pIuuO2QBXvw8KwdEX62zLV6DuY%2FmQDX%2BQNyBZmC%2BJy%2F8mNTFPpDcwS18gvtK9uON8Q3D%2BPIPjsYspes%2BqwOIhSesx%2FRNGTBQt6%2FFmNBEFnZb%2BxUx4fAL%2BP8eNMx%2BhetrWTGKZWUj6Zl32ZmaOMagXFlmtE%2FaAFYsdfUXHhuQPMt1NW%2BEzn1dh2%2FQY%2Br9VW80ujCd78K%2FBjqkARqQfGEEtQ50N9jT0N8cHEIp3MRFlsnB70AweJ5cz%2FD9rbrScV0EAv9YRCX07z0mIZ1syjZuswB02VWMKcw%2FQuEsDF%2BNKS2etkQEICmFzwPvCvz%2BaJTaOuO1uaXWJXdkDoGvFdZjvTPgJ8MUypkY1jH56q7Ut7aKMHnpv65i84AD0CgcwVu5NdJMqsA1cfBbAmZ%2BKGJcCeyN%2FiUlWbainD4APfmq&X-Amz-Signature=755fa0b03cc272ea1568db09d6013ba92176f63db0ada64728cb22bae00519ee&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645BOIPLN%2F20250405%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250405T061012Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDnUPQoYfzBFesrBw6mBvBTmcSrLMBpkcA71cPh95r3jAIhAPIy136am3vkj6xA9ihYETcGTUOvGgc%2FiE6jfPLwKqDxKv8DCCYQABoMNjM3NDIzMTgzODA1IgzSba4pdQxIiPWLhLcq3AMiEh9sjj5Zd5JPHymZDCYu%2B%2BoPL4GL020oHV8w0%2B3sBnckWqX7qLFUdFzutR2rvo%2F%2FLGjQN7KY51vmSn5SJwgHKIRqKc3LC68dyvR%2FV83juvBTzXjhfKSasFqc6MWBhhFjRR%2F9wYZYnu8fJ4gs63KA87jiCveNFwj8DdX6WjbK%2BzTC0x6fBKUr%2Br6gGxuRHQzrjNIlvBYmzEYeb41%2BKDQdWfgSlIV1LED2v05tXyTXbDdyr9BfybKUJ3aQ8oAyIBv5FNZFuqLJLeQ03mh5W5fLuy05oQxEFXy7tBYbduSREY%2FOMhwXGVgG4EOoqhuEqwzgL%2Bpx2jZBedacJWqfFJXyZBIKhJdDzj2GAwBeQsx1t7Jj66i0PN3hvA4FR46qwr1tVYvhlolQEaF5x4zIPyYeGKSYoZz5YyCXpji%2BR2tbT3fooHONrHJfdav2pIuuO2QBXvw8KwdEX62zLV6DuY%2FmQDX%2BQNyBZmC%2BJy%2F8mNTFPpDcwS18gvtK9uON8Q3D%2BPIPjsYspes%2BqwOIhSesx%2FRNGTBQt6%2FFmNBEFnZb%2BxUx4fAL%2BP8eNMx%2BhetrWTGKZWUj6Zl32ZmaOMagXFlmtE%2FaAFYsdfUXHhuQPMt1NW%2BEzn1dh2%2FQY%2Br9VW80ujCd78K%2FBjqkARqQfGEEtQ50N9jT0N8cHEIp3MRFlsnB70AweJ5cz%2FD9rbrScV0EAv9YRCX07z0mIZ1syjZuswB02VWMKcw%2FQuEsDF%2BNKS2etkQEICmFzwPvCvz%2BaJTaOuO1uaXWJXdkDoGvFdZjvTPgJ8MUypkY1jH56q7Ut7aKMHnpv65i84AD0CgcwVu5NdJMqsA1cfBbAmZ%2BKGJcCeyN%2FiUlWbainD4APfmq&X-Amz-Signature=a2d5924a2b0575c005a902bc654198c07e8894e8dd6aed081dcef8accdfbd7e5&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
