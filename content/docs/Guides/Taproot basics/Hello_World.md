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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVSQJLCV%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD5bgLlCMI98S0nV8kSJVN%2F54uVxb49HFGTLWNOhTtFZAIhAJKq8O1EUTvolWUFK5PB%2BFv28PCGs1hPw8hXH%2F9B5pl%2FKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK3%2F53m5Akg9vZQTAq3AOn794D7oTYC2uG8w0Bsm6n9W8rkxaLMYgKCAMVX9ZmA4zzLFKoOpFdTDzKY59qoApIUW8ru7HR%2BoYIAVSUTF1hANtqHmoU%2BKa5K%2BCBJF00TofAfzH%2BedUuOzS67oUM5dahiYfKNVRsT8ze7mmnV5Hld19qn%2FOfAQBRvmWIBgC7%2F1m9qetVEd5GmS849d%2FaFsVTnL6xVgmcEFWduViJfuhP5Nloe%2F7WUpQjBZyTaLOUc0yXnb7xXfKvNa6SleQ%2B8ndtGX70T0o9yGjVy2lWr%2ByZ8jve7OcVI3HPyf7NULBVhY6rABS55JvstULm3crDIIrZGY7vfyed7UCTB2XirY1Q%2F1rQZr3vJGKsuZ4b1pBEWea7ltzHurcuo2rdX%2F7Nk9c6tJx%2BE%2Bm9o6e4206fJS%2BdjELkAodNngwMNj0UR7kTdytka0smYshgQxV%2F%2Bm5yd%2BKtXhbM9%2B9rYhv8YRcMD19%2BFpdV525skM9Uu6e%2B%2BUuAwYDzXniBFVboJ%2BiCj4wGIK00xLLbhMBHTbookJhDlRKfHdPSPaMxz%2Bp7XICAJwo0rdsFhuid2kbgJh1eBum6XlLimpcwu%2FaS2KMm7ZXNEO7D5xNIx3aOWjSCO%2FQWLQGVnwwS9Ch%2FSSewfxDrWTCXxIDTBjqkAfljKHnjIILBT7ywuC5nakTysmPX1m6VXh78JXb0GuAXeR0uf93G%2Fm5XXkbtW22zpUPht65vcWfaJXDJsM%2B5nLvOIVg7BUIjqrnvj4fMIpgNzye9EbCLkIAErH2uW9%2BCHKjyiKxV%2BcIU2BTnUFlioZDIZcMWNgs1yMbWIn6wFrDUa1mGciGJc8iTxb%2FwphhHuvcz97hx20NwNh8Aq7UHBQpDgUIu&X-Amz-Signature=1898daebd21a9b9c02a7356f29742ff955c4e4bf83cb57893fb1ace94b07797d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XVSQJLCV%2F20260722%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20260722T023911Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAIaCXVzLXdlc3QtMiJIMEYCIQD5bgLlCMI98S0nV8kSJVN%2F54uVxb49HFGTLWNOhTtFZAIhAJKq8O1EUTvolWUFK5PB%2BFv28PCGs1hPw8hXH%2F9B5pl%2FKogECMv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyK3%2F53m5Akg9vZQTAq3AOn794D7oTYC2uG8w0Bsm6n9W8rkxaLMYgKCAMVX9ZmA4zzLFKoOpFdTDzKY59qoApIUW8ru7HR%2BoYIAVSUTF1hANtqHmoU%2BKa5K%2BCBJF00TofAfzH%2BedUuOzS67oUM5dahiYfKNVRsT8ze7mmnV5Hld19qn%2FOfAQBRvmWIBgC7%2F1m9qetVEd5GmS849d%2FaFsVTnL6xVgmcEFWduViJfuhP5Nloe%2F7WUpQjBZyTaLOUc0yXnb7xXfKvNa6SleQ%2B8ndtGX70T0o9yGjVy2lWr%2ByZ8jve7OcVI3HPyf7NULBVhY6rABS55JvstULm3crDIIrZGY7vfyed7UCTB2XirY1Q%2F1rQZr3vJGKsuZ4b1pBEWea7ltzHurcuo2rdX%2F7Nk9c6tJx%2BE%2Bm9o6e4206fJS%2BdjELkAodNngwMNj0UR7kTdytka0smYshgQxV%2F%2Bm5yd%2BKtXhbM9%2B9rYhv8YRcMD19%2BFpdV525skM9Uu6e%2B%2BUuAwYDzXniBFVboJ%2BiCj4wGIK00xLLbhMBHTbookJhDlRKfHdPSPaMxz%2Bp7XICAJwo0rdsFhuid2kbgJh1eBum6XlLimpcwu%2FaS2KMm7ZXNEO7D5xNIx3aOWjSCO%2FQWLQGVnwwS9Ch%2FSSewfxDrWTCXxIDTBjqkAfljKHnjIILBT7ywuC5nakTysmPX1m6VXh78JXb0GuAXeR0uf93G%2Fm5XXkbtW22zpUPht65vcWfaJXDJsM%2B5nLvOIVg7BUIjqrnvj4fMIpgNzye9EbCLkIAErH2uW9%2BCHKjyiKxV%2BcIU2BTnUFlioZDIZcMWNgs1yMbWIn6wFrDUa1mGciGJc8iTxb%2FwphhHuvcz97hx20NwNh8Aq7UHBQpDgUIu&X-Amz-Signature=eab11e18cd4388f879786b89617b67976d6b4e5a0ca66bc0d4a7994ae3e8c78e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

then hit **Start Monitoring**
