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

![image.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/a42f36e7-f896-41d1-bc6a-3236301092f6/image.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HGNFZRF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0lvGkpDisUEC6tV7Jupas9S1AfIAtlxpJ9hxYIYluRQIhANb8GmUtP7htAt9vnYpZj8beJTXq165uVawa6RXOn5ZlKv8DCB4QABoMNjM3NDIzMTgzODA1IgxaQge9kMPC%2B4zDysAq3ANwB0uqgU0zZP10zx2HsbFBsy5sDnLAXrDYC1rjihIU5GgZVzcQ8Pq1AGudNntWGmpfwYYMAS3FBUFYLU66HzEChZJesDtKEbL%2BCBK7nq6qRP25UCm5pc4cBKv0SjmcNnamBWTzYamHBs14w5gCvZHTGa2LN7KUm%2FyyLdHe5Z3fMr%2BBGB3%2Fk3VKK4GZGEKKJdj1%2BrPo%2FeymJK3TThKL1Va3rWbi5DzBlJq51DMQWABsqLThCwIJjt30sfWDnr%2FIRMB0izGvl1UNRTIguS4I90ptuD7ZI1IKOHeTp5QIsYjH7OKJdGa%2FfGIjv6Tt%2F4zBH3NIwumMjzxnJIWsmGtWfuSHPDcwDcDq7rTD6KjU8iS4N3K6kjkLuysbBSNnYgfnUgeVAlFq%2BE7Q10yd5FLhtQOBsgUu6PZ8%2BEdVtrbUWT8%2FHqmF33IJ6Mii014ovdcA3q%2FLAOUCTwpuGNyi46YFh9c7IY6vBTdEyrGEwOkV2JCF%2BrYFSPv9YK7%2F7S3geGpa5mUF6KZS14kgbNt5wVDnGTNhu7ddmlDl%2FM7C3B8XKBUavHbt515m8RRBvz%2FTTvWf1SJ9vlcHHEeYgnQl395FSP0NFiMfER163N5c2jkGTEgGhQpmlSOCQQpS3%2BUMdTCqrLm9BjqkAa2W%2F%2BTLg6XbGAb5sSIlXBP3sqnbyORRWRBIdb7KrL1lzG14e9LZ3SmIpknVGlpVBTQzEFPfDPIK5Qqa4KdPbnq2VLIt%2BEvCQIFvpX8gpKfqRmu2Xn7%2BBIj8urccbrBg8jFAtbgOcaGNacauFBvJnMhT1iWqb5x9ABNyN8h4HH8G%2FlaR6ZFDZIwuG7SzICkmiyO26%2B%2FO1lUj%2FMzImnp8EbD%2B3F6C&X-Amz-Signature=ef4f6f5c5176b294246b27c0f0fd52ebc78803e5f1d192a31d2fcbae7c4a3f85&X-Amz-SignedHeaders=host&x-id=GetObject)

select the usb port the type-c is plugged in it should look like this:

> if you don’t see the TTL to USB device on windows you need to install the drivers for it.  
> Follow the guide here to install the drivers: [https://www.pololu.com/docs/0j7/all](https://www.pololu.com/docs/0j7/all)

![serial_monitor.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/f03f4774-05d4-4393-b6a0-d5efb6d315ab/serial_monitor.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665HGNFZRF%2F20250213%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250213T210649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0lvGkpDisUEC6tV7Jupas9S1AfIAtlxpJ9hxYIYluRQIhANb8GmUtP7htAt9vnYpZj8beJTXq165uVawa6RXOn5ZlKv8DCB4QABoMNjM3NDIzMTgzODA1IgxaQge9kMPC%2B4zDysAq3ANwB0uqgU0zZP10zx2HsbFBsy5sDnLAXrDYC1rjihIU5GgZVzcQ8Pq1AGudNntWGmpfwYYMAS3FBUFYLU66HzEChZJesDtKEbL%2BCBK7nq6qRP25UCm5pc4cBKv0SjmcNnamBWTzYamHBs14w5gCvZHTGa2LN7KUm%2FyyLdHe5Z3fMr%2BBGB3%2Fk3VKK4GZGEKKJdj1%2BrPo%2FeymJK3TThKL1Va3rWbi5DzBlJq51DMQWABsqLThCwIJjt30sfWDnr%2FIRMB0izGvl1UNRTIguS4I90ptuD7ZI1IKOHeTp5QIsYjH7OKJdGa%2FfGIjv6Tt%2F4zBH3NIwumMjzxnJIWsmGtWfuSHPDcwDcDq7rTD6KjU8iS4N3K6kjkLuysbBSNnYgfnUgeVAlFq%2BE7Q10yd5FLhtQOBsgUu6PZ8%2BEdVtrbUWT8%2FHqmF33IJ6Mii014ovdcA3q%2FLAOUCTwpuGNyi46YFh9c7IY6vBTdEyrGEwOkV2JCF%2BrYFSPv9YK7%2F7S3geGpa5mUF6KZS14kgbNt5wVDnGTNhu7ddmlDl%2FM7C3B8XKBUavHbt515m8RRBvz%2FTTvWf1SJ9vlcHHEeYgnQl395FSP0NFiMfER163N5c2jkGTEgGhQpmlSOCQQpS3%2BUMdTCqrLm9BjqkAa2W%2F%2BTLg6XbGAb5sSIlXBP3sqnbyORRWRBIdb7KrL1lzG14e9LZ3SmIpknVGlpVBTQzEFPfDPIK5Qqa4KdPbnq2VLIt%2BEvCQIFvpX8gpKfqRmu2Xn7%2BBIj8urccbrBg8jFAtbgOcaGNacauFBvJnMhT1iWqb5x9ABNyN8h4HH8G%2FlaR6ZFDZIwuG7SzICkmiyO26%2B%2FO1lUj%2FMzImnp8EbD%2B3F6C&X-Amz-Signature=1e600c1f5da38f050eabb98842149ee3881d5c0165b079269bc64ef5a0427694&X-Amz-SignedHeaders=host&x-id=GetObject)

then hit **Start Monitoring**
