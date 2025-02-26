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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UXT666M%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T041030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIDokPZYC40DCypG%2BzNx7oGiNxG3Da02RuEkBt8zE4dXSAiEAoakqX3GF0n51PPov%2F2LP5m%2B6uEP75C90FufbgFM8bg4q%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDHBiI7QQoUOcgZzwaCrcA2t8N%2FqNFPRDuAe6ZNb%2BH%2ByHDbz0xQbmKimPF8%2Br20LM0XPQ%2FZr7PEiRPqJw1jYDLdW4GCOYyDo6T0yC%2BrIOnBxDNk6r9CrOoK56vX%2B1%2Bitw7RMXfwp6ZZZe8v9i6nVgjC8Pb3KaMB708vtBd8ZLran1UbEe2PcEWOnRRPIZsgE3psCZBug%2BSDQxCvGaRSZvXBL6HYAc1zgbzzCoPoZXdpq0pll9MdfChbRft8YPMMrDJj1Zx1My%2B%2BvLImafgKACJKt5pZrROkkaX59RSZLgF4oTzAifAytmPl%2BJB%2BqptbEkeG3RW7H1dduvoq0TqDVoB%2FCz8VjyXmyHGTkAR0XFJ9xPkess3IpqQN4EK9tkQFrLMsmTnOAaCNpapLTYytedTrUJ%2FDqn%2FcPz242m3B9mFQjkWkJ5XAA3q4dstBNKIjHyYfyyFED9g5tkJW1ifZNrRI%2F%2FoDj0rw2OR5z0tAxIjTJAFOX8He6KFaeXuNnrNgZKUvInEUvETsfVP2d5noEurtreEGZu%2B9P3SEyvmKijCGhgAOxfG9VuSGl5lyt1DWJWJKArLUaCCWGAIDHLdKLYkmPBCqGDf4e%2BNPKP8z1hnqrmwZ1oyzKQYs39pQhfl2YhBf%2FHS1JUZone2OerMOm8%2Bb0GOqUBejIafIv2hqJP5Boo4tDY9UjJYg%2FEpLs31Se3WhoapaOGXWeGtbNHcGtmtQyOa%2Fhz%2FtnN%2BDGheWCFHoxwTWj2K%2BCLpSs9wg1qJLXa2EuOmrdcgwXHqXMAg6HIAX0EI9y4AfRwZFw5yjmz77RRtxVCeSAMK4gyAVzu%2B7kNmtrC8bAPPR8s%2BZQ7hMIoC6VJGmQFjj4I5lolYjgzVMqCLb1YwN1c9Izx&X-Amz-Signature=7116a42433bcfddc314ba996130e0870b4f8159fe9a70b9e67467d4b82a6d3f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
