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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V65PTHY3%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCmv2J7%2By%2BDF4WrLB0paIp6xYIq6ZP4QQLQo33iEBlHeAIhAKkFKx6SHa%2BtQeMGRlM34aKRFNArjR6xAC2o7LRIAzl2KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F7%2BdPkSwsKAku35gq3AOBlJbfxn%2F4x9z44h3B9ZPbzrNOd7JRy32rmU6nNVji1euU0HgqG7sBrboBn9C6bJVQa8miNMiMmgxyIbK4yWvMNTZ7I6k1u4XFFrHoyv%2BseQJz2NfnKtsn05gopjNrAkHWSTjRINobhdMajACrpHCy%2B%2FkoIobJWisJKHPOgHPpesl%2BCPt874y8J3MzlYIv%2FVEh4f6Bi3QiMT8T%2BKedkC5bg5T%2Bgnx%2BugJqz5fBp2EeDn1yrm8EBlOefkTa1YB2Oczn4BoQmHVsW%2F0PFRHcOhu7FT%2FQzaZCyDT7KsRQA%2BW%2BieI3wSH0dB4UWwx2Rlv4ssu1v7zojdXS9z2W7%2Bwp7orTppHDCaAuF7G3lV6gMmn0b%2FVgenfDjxQ3c7AVH%2B9k7Ln7GuykuwBIcwVkdSHDW7DQ1awIcOKtxp%2BvCCHNBGWSzTs6ZJh7RmTiCXYOTdcSNiqCZSKxH04h3zTvWEqqs1Fb%2BJr7rvwQxX96U1lTNU8eOY7p%2BnOG8nXE5uuePyT2a5BNQW1qpHMuOtU1RmzI%2FQ3qBDQHK0%2F%2FhaL6RzfeCXZurwc5BfpEFt1KpqSz4LzxBN31DUO6H7gQImnIMk9E19EHrCJR4%2BXr6XrWjT8AtNLdMrIr40kIjn0ehYQN4zCVjPDBBjqkAVApIXm9qstFCkGeley6FQLCpWLBjn7DtRjWmwWXDR6rHJTFXPpV9XV1lG0FobeB8zDh8NGR71bRXRjPIckxsukdX64uDO8R%2B6UZ%2BuHiT96S%2BpTF7Pggw2O84DPNczvXK72r8rBJgyrEtMkKI8%2F312%2FqwWlMmJDjFE2p5jl%2F9IKecBKVEdiRNyTM9F7PCdiqmlWXAJM392JS399tIKf%2F0eCqWY9X&X-Amz-Signature=d5047e36e88cdbc1a134b5e0960280383408422c18cc2672b424bc40055dd908&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V65PTHY3%2F20250601%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250601T081044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAgaCXVzLXdlc3QtMiJIMEYCIQCmv2J7%2By%2BDF4WrLB0paIp6xYIq6ZP4QQLQo33iEBlHeAIhAKkFKx6SHa%2BtQeMGRlM34aKRFNArjR6xAC2o7LRIAzl2KogECNH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy%2F7%2BdPkSwsKAku35gq3AOBlJbfxn%2F4x9z44h3B9ZPbzrNOd7JRy32rmU6nNVji1euU0HgqG7sBrboBn9C6bJVQa8miNMiMmgxyIbK4yWvMNTZ7I6k1u4XFFrHoyv%2BseQJz2NfnKtsn05gopjNrAkHWSTjRINobhdMajACrpHCy%2B%2FkoIobJWisJKHPOgHPpesl%2BCPt874y8J3MzlYIv%2FVEh4f6Bi3QiMT8T%2BKedkC5bg5T%2Bgnx%2BugJqz5fBp2EeDn1yrm8EBlOefkTa1YB2Oczn4BoQmHVsW%2F0PFRHcOhu7FT%2FQzaZCyDT7KsRQA%2BW%2BieI3wSH0dB4UWwx2Rlv4ssu1v7zojdXS9z2W7%2Bwp7orTppHDCaAuF7G3lV6gMmn0b%2FVgenfDjxQ3c7AVH%2B9k7Ln7GuykuwBIcwVkdSHDW7DQ1awIcOKtxp%2BvCCHNBGWSzTs6ZJh7RmTiCXYOTdcSNiqCZSKxH04h3zTvWEqqs1Fb%2BJr7rvwQxX96U1lTNU8eOY7p%2BnOG8nXE5uuePyT2a5BNQW1qpHMuOtU1RmzI%2FQ3qBDQHK0%2F%2FhaL6RzfeCXZurwc5BfpEFt1KpqSz4LzxBN31DUO6H7gQImnIMk9E19EHrCJR4%2BXr6XrWjT8AtNLdMrIr40kIjn0ehYQN4zCVjPDBBjqkAVApIXm9qstFCkGeley6FQLCpWLBjn7DtRjWmwWXDR6rHJTFXPpV9XV1lG0FobeB8zDh8NGR71bRXRjPIckxsukdX64uDO8R%2B6UZ%2BuHiT96S%2BpTF7Pggw2O84DPNczvXK72r8rBJgyrEtMkKI8%2F312%2FqwWlMmJDjFE2p5jl%2F9IKecBKVEdiRNyTM9F7PCdiqmlWXAJM392JS399tIKf%2F0eCqWY9X&X-Amz-Signature=9c007bdc414fec8cd4e3e8d3a16fd7a95c55147cf474563efc5e13933403e2c7&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
