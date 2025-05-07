---
sys:
  pageId: "dc03b680-5e9e-4779-a140-dd2523ca6202"
  createdTime: "2024-06-24T23:51:00.000Z"
  lastEditedTime: "2024-10-06T19:34:00.000Z"
  propFilepath: "docs/Guides/Taproot basics/Blink_Led.md"
title: "Blink_Led"
date: "2024-10-06T19:34:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 123
toc: false
icon: ""
---

> Note: These examples are mainly for the type-c

<div style="display: flex;flex-direction: row; column-gap:10px; max-width: 630px;justify-content: center;">
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NWOAAPY%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDAfuGgp9JhXIwUz6HNoLL6r8i3Eg8gL16sAFxsDv9j1AiBuO6k1gjl0K50E8d7JH%2BgnxHdt5GtHtVVTmTunE8OYrCr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIM4bIlFGMdqvKQiBUDKtwDSbOJX8lZKuvPSdxjhzCpHBkhu130h0ginkXhJ8FD4DQIxl%2B%2FbwLiSKbTt2XJDE9KVxLPBfGpRlQkQ90jpTV2k04xIfsVuT%2FQXj1mEc4CTKGoDgaZe76qcBSZluz0Yku0AVg%2FePB3m%2BfXMBowqVMVjF3KMz6khE0qGkRVlUg7fD%2F7dO4rh41V8CD5bmUJeClMzt1ifn3cW%2BeB5%2FOyWNk%2BiUThiDX2uCY%2F0UPeMCVCKCQuy4R6PNe6xcsTnh3p74bGa%2Fclo6rw%2BEQU0%2FEMGZKORx8w4Es%2B%2B5eGHDLhN0DDPVgkh3uaf5m4Ujup2W8zqNp4IFbjV4q5kbPctVV9TLOESPEmQTTZnlsniClR7o88vhorus132f%2FwYJCnMfybissgK03Td0mVUJqSNnM29gyMyavwRaY5iph%2B9YJ2Jzc1AGOIdzcKf6EgrQXfUhoV2SeZECDAkuaQArADQ8ZEdlTMJxtevqT9RGEyX4PTFEzcfdO5s7Nteguw5dx0t7s05Oz7LR8rSsoJrKg6czCUAsNfNgBG20Peej6XT4GVi5EFtjrKdrsTzAS1MJDR4npCeEtEAw0FaVjt3%2FqNbH8UrQIUMHuYODZYHdnIEpT17SlQx2f0pZ0SuBRz%2FLafxNcwkOnuwAY6pgG6rEVJWpYl8wGzGEeAVjSQdh2xrU4jGgvlPuv8bKVREHHVJ4WGm8WlOhpWANhy8tGPShQadRR3zZLP1v3gt2lK0elX2Ety2TFULIO5p3sJVplcwEE%2FkSW50VEoZfaQnP5LOh5mp5YZaP6sX1CvKTPBtYlG7lGfJ%2BX1OR0oQMZnvJ0ic9SRHEgJzBD4EwtSy1PofyWCDuQobVpdj99wLoTXHhd%2FfEBQ&X-Amz-Signature=9031e6017cef43da1d694fcb4b41c20a69ecc3cebfb6bd0d65003d6733cd8806&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RPV745RQ%2F20250507%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250507T200944Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEdd5eMgf7ZYqViz131yNU2Q3yhSCPQy1Jx4w3Ok6D0xAiEAmWtzHraSv2Ycm%2B0mNtedjTShJh7SF9wJ6Srza%2B56qq8q%2FwMIZRAAGgw2Mzc0MjMxODM4MDUiDBNmcBVnlK4D8nlRjSrcA%2BdLFxUfvm8rZMKmpYZuTr3iMQWRpB992xUa6xBQJy9dbMc0PgWlTZvcTDiYhXNRctucRGZ8HGGCyViRtxaYxghi6RZw4hOwrQfYS%2BD8NSFXHQ0n9GBSQ9ynl50WYpaVOAXE8ob1O9Gq2wz9zQwG5QkVJnLq%2BA04W3TexmFLMvZ9SfHuPDplfjxeBs2Auik1rD3PGKOIGOM%2BKBSWZi%2B2C0e05xVEISVyg8NU%2Bz6MNyf6gRTRD7NGx3mNJ1qsqe9OU6O%2FfCJsddV0ZXeTx8%2BwdEd%2Bw%2BzWBXUESSWnrsjcg9HQwtZaDhMmI%2BQ8rLVfoLgO3y6iN1IUC7dcgaPJAhZnnhJolrS%2FVi%2FOlXrIpx5yvdx9yDPtmmrS4aP6oUmIzOrPAYRDFwrmA4lDErAXtE5OnyN9g5RBc2cFU1xq7GXLKMJ5P%2BgXB23mItfKszhGbsfGcEBBL7mWd8%2FhU%2FY82ZAkIV3mqiMNBhGM8AOYD0k7YiAlZC9zOG9Ve1aG1WhiX7jhKW6pJ4Q4Am8IA5I2rV6eisPL3ueUgBpvNdmj7zocvQlCT2dOciVzLl%2B8%2BeA0oASqidzgzJaesg4Hw%2B0d8esnxkIoMwnnxo%2Fc83yqz161MdLbQEjqS0esrHwCRtITMIbp7sAGOqUBm3s0m39vo%2B4zSGWinzG7K06gkwrJJphOXCJsD7aGIjkWdS43DsWKuKDkcyWoFAYgcHjUJSrVNiwY0DfcEl101QvU03aXwFykctXhmiO2EFVMhpYlZtAy4elem1taaf8FZqEvMvgTUGtkMnziYPyfZjJTI66bGtDmCGmPYeUzTYEZv76aR7ysVYItEBoHAhArCo%2BaCsG%2B6lxbZwdTRVm11bqouD4C&X-Amz-Signature=98ff91fb98c753bcad43931d9511d48fbfabed8845770ac767765663075d2639&X-Amz-SignedHeaders=host&x-id=GetObject)

</div>
</div>

imports all the libraries that will be used

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot
```

The drivers object in taproot is king and basically controls all aspects of the type-c.

To get it we call `src::DoNotUse_getDrivers()`.

it says not to use it but what it means is only to use it once.

```cpp
src::Drivers *drivers = src::DoNotUse_getDrivers();     // gets the driver object
```

initialization

```cpp
Board::initialize();     // initialize the whole board
drivers->leds.init();    // initialize the led
```

Turn On LED to red

```cpp
drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
```

Turn Off LED

```cpp
drivers->leds.set(tap::gpio::Leds::Red, false);    // Turn Off LED
```

sleep for 500 ms

```cpp
modm::delay_ms(500);
```

### Code:

```cpp
#include "tap/board/board.hpp"     // import board specific settings
#include "drivers_singleton.hpp"   // import taproot

int main(){
    src::Drivers *drivers = src::DoNotUse_getDrivers(); // get the driver object
    
    Board::initialize();     // intalize the whole board
    drivers->leds.init();    // initalize the led
    
    while(true){
        drivers->leds.set(tap::gpio::Leds::Red, true);     // Turn On LED
        modm::delay_ms(500);
        drivers->leds.set(tap::gpio::Leds::Red, false);     // Turn On LED
        modm::delay_ms(500);
    }
}
```

{{< alert context="info" text="to upload to the type-c press `ctrl+shift+B`" />}}
