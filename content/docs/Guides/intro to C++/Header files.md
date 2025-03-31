---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "docs/Guides/intro to C++/Header files.md"
title: "Header files"
date: "2024-07-08T23:43:00.000Z"
description: ""
tags:
  - "Onboarding"
author: "Overridden author"
draft: false
weight: 117
toc: false
icon: ""
---

Unlike python or Java C/C++ splits its files

<details>
      <summary>Why do we do this??</summary>
      In C++ we can’t use a function until we have defined it
  </details>

`.h` file (header file) is like we deleted the body of the function

ILoveBen.h

```cpp
int ILoveBen();

```

ILoveBen.cpp

```cpp
#include "ILoveBen.h"
int ILoveBen(){
    return 10;
}

```

main.cpp

```cpp
#include "ILoveBen.h"

int main(){
    printf("%d\\n",ILoveBen());
}

```

## Classes in header files example:

## TODO explain y classes have a :: in .cpp file

Ilk.h:

```cpp

class Ilk
{
private:
    int milk;
    int private_func();

public:
    Ilk(int milk);
    ~Ilk();
    void drink(int galOfPilk);
    int getMilk();
};

```

Ilk.cpp:

```cpp
#include "Ilk.h"


int Ilk::private_func() {
    return 69;
}

Ilk::Ilk(int milk) {
    this->milk = milk;
}
Ilk::~Ilk() {}

void Ilk::drink(int galOfPilk) {
    printf("drinking %dL of PILK\n", galOfPilk);
    printf("%d\n", this->private_func());
}
int Ilk::getMilk() {
    return this->milk;
}

```

main.cpp:

```cpp
#include "Ilk.h"


int main() {
    Ilk *i = new Ilk(420);
    printf("%d\n",i->getMilk());
}


```

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SNOMWFR%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T121439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDwaCXVzLXdlc3QtMiJHMEUCIQC5Qab5UdyMxusNrgz0jQ3PDSSzwkg4mlocC7JE3PrFugIgXXH4K7rZUcPiL2aTJuij2kaOFGrYf5JM35nQdtO55RAqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDI999jM8TFg%2BDPkBdircAxlekERZ09lqc1tt81N72vo8trkiDat8QfZyWglMZTDiKpgSKAZUJdIrTLv7FSyA37hOM6wgevjCTYHS1jAAOnugLvvYbldmjT0OWnaT0yu1VXo3QN4X50G7org1cQ3RJTMsjpc3VrWEH1FDEi1dSL9G5LZRXdg3bXMkWmcpbL8ZYJXP8bwG420Ryjd%2BWqKGk70m63dvzTk6alnP2B5nliyFjJliA874y75cBehpG7DcLQWfQ%2BrBW56qQa4qYGrzFmMK5aK9e56V3ZeX4uSlHrLP9RmmRpH1RLyQYM6zLCT5U1QD36ccP8iKhdZdsKNYZkwx%2Fdi%2Fe%2BWpSEsO1iSd4csX9RtwhUPAKZY1n21dHMj%2BL22li4KoBT0vOLKeoiJIBpW2Y9HM9%2BooZGNJ4K6BpTK8wXcpvh%2BicpnvgSiqfXg%2B1Rq8JW2zpDtZ3ai1YYMi6bjh4iSMYcI48QHCyf96HlxmscGyXVQxWLIfTVpLpVXXyqTw7vejSnJM%2BbhSbkFRPQzUSlWACNbnDdnL6LDbqlMEieqoTd%2B%2BgHA4DWvllHkA9XQn5FrShZaXf8C3oJceOcVZlPnsd6THAVYp621kyd%2FSCHL0nuQtzzqISGH7MROd1IrnxTu9E1FimU1WMOGIqr8GOqUBHlAwUPgc7bdDYK5sanEhlRTq58u61g5d71vUJcVkxwFABmrdG%2B8Jq5c5lpTRznOFXQKWNOWb3S7ggVBB5umYvV%2B0qtGHeiJcOT%2BqWI6HoKwExz6gAPxpEo6q03XsRXzm%2Boi9omxQZT89vOwfknHvQPO3gGFITtfhIQCDOpEWwsO79rN8NT9JBK4sdr%2B7n8JLqvUIby%2FaoNULu%2BjxFOc6XyI%2BtcFC&X-Amz-Signature=d34d26e845677cc427706b797fe6abda5b42360f3d7cb5445d2b64c62790fb4e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
