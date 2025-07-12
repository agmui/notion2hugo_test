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

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/72690bef-2855-4fb7-bc56-e952c6e1f269/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZJPE73CE%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpfuXXdfyrsJ77jxe6LH05vhZn3Rjvotygmsfho0I0PAiEAi03%2FMGhJNr%2FojiE5dVeGkIeRFMkKtayQYEBnNvcc18IqiAQI9f%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM0YRj05n49RdjJFNircA8uZcrHMru7DGrBYBOyVTx6e%2F9QwpXA1zT%2FMVtY%2B9ATRS8pYBBhFBGxnTWSrblWOAXVEKTbQXhUe%2B0lPZUGC0ZBdpTfiEB1BiWUggiHGZxkiNt2Bk84s6SBY5CPllaru4uVmgjWRytN0Wu2LeN9I%2BN%2BtcFQMuAPXxgfMhPgikg2Ba3CPEti7KGYs8G1TUA03oCPJNWcVTbwqIKOmM15DnABCxVfaM9Ggr5H4WZUBXOx%2FgcRcOYfKfExNZwWDSJESedm9sQEI4R8tu6TrJUsoETmffQJZzvLwgbyFha5Rk6TapSP1Ne29csdCjLrGPyHi5mSx6VmlM%2BvD756UdnDwMVlKppuce6F601TnpBc32cU%2By2NojRyx%2FXDPGsRdXLPCho0SHKt1%2FJmGICHsHYk3qIHt2Hvb5OHgaJ2AQIQ2WYzu4XMeoK%2BuAwynzsjwUi12IeyWU2or03feZbMw5pGGgP8hb08vtqY8Vzob5xUyM3UhZ%2BFsZMWShHY60EA7cw3Sdk%2BweTDf0fLLXefXVIKtkI7vXgpnQ%2FkLSvyIzxtLQ5IVjHF%2BmRSRauFedx8T4%2B5fRvDy2zY%2B0ftmwIOMWwvdhtrJMqF3uTdVpWKOKccaRHz%2BB20luuzjQyN9DHFUMP%2BDy8MGOqUBhq%2B5SnpGhilJzvB27V6YIY7ch6mS3faGIhZLCbE8Ltlgn3SIhfsUtFibGAxRcek%2ByN6WSd%2F51AUgN5TBIVLwVDTxS87BpmQ1TFnPi9UWIWSge4oeLOioeT%2FYjy8tBowimNT7DQ2GZMDM40XIYbpFxIJZXTBe%2BRITDWhlK79XbXJmUr8RMFUKWmlNNV7tTXZ%2FdJHQxLia8zTeTpTDuI68WsOY09YB&X-Amz-Signature=f98947819dd229cfedf66549549b53a36deb26fb7914785548d43dc1c87e499e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

</div>
<div>

![Untitled.png](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/87421930-1007-4f71-86ec-25221b515fdd/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3CG4U5V%2F20250712%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250712T210709Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9WGfuzIJDHDtVknvPMr7RG4agWW7iLOpg6lG1bttncAIhAPoTCjJ1kiP0jeKiWoyCwrZqfNeBTRQ4ePn3js4wBmrDKogECPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxZ5GWz4BQ2VpID3hgq3ANK0W1%2FK%2BkdWo8gmIpoVfHZzu7Ft%2BC5H4ksUBpVivUgnWQgDH3tvE6Q4rjqQZrQqL0uyYm%2BMOyyq98ZwtK6HR%2BZHkQIwLkgAgGl7Vn%2BhaPtzs7IbX1qk9TWSEj%2FE73zeQ4%2F3CiMe6FO6m%2BwiNFPLxFzynJ8NHQtP9ICMCqBgrz8wFCEM7VUMLsKs%2BtG5NHVVYl59YusrU3Z9NOODBtKaP1CIYms7daBv24OH1PzVS2OLaXHvi6l5qeuw%2BSBVDSLO%2BdjLcM8ygosauEtihoL2xtYIgsAA%2BOP1N7sujwBu3VpGPIcaRAmr%2FiezzPuhkGmt2EokRMC5RtpWkegHVDtvSzK1VgLarsYGa5aitqyrBGvrc3EIpj1nrU9v%2FWhnZa4N4ZKwCqkvmsqkHgW6iNsr9Rnq7sSRZMpL%2FjoDrcGXTSWkIxeRW0yftmoKTFgXa%2BDITwXCC8nRRvTBOizsO1sk%2F7e5beraZGB6Di1q1wNlC6aenk1wo3mpy8pNskMpufaUuiGvKp60W8CmAiZs6sGrrbvzanp0qzYi%2FB6iOsUt4oerBEkKTLGTK1wTpXhFKjfHQT7AVB%2B658LX%2Bqxl2j0nlnQ3%2BEnr%2FexyZX6vzLa1WHgJw36AAgBrrJCat%2Bz6zCQhMvDBjqkAbAlBLYCMcStULImDnugiHqp59Bh%2FMONkimHuvVypTDXzMi1h1L1a%2F1JMCP8i7rSGvDl9dZJv1fkMW7EpgRab%2BdBMyy1tsLuRqcAuTrJQtmKz0RTSPGyKLEF%2F%2BPNcvP%2BXZ6HTh85oFNyaiNuMJNqt%2Bvbjk78SxACeburWzFb%2FsmoW20iUbayLvRvgpz5Y4Z35UrXS4DGdnDYYUmH%2BePPGBOfISsZ&X-Amz-Signature=60311609c77626ef966bbb5a852c07569274eaad9eb3f614f3e80ad5011020f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

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
