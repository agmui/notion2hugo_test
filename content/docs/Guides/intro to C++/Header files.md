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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VKZC7AO5%2F20250325%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250325T081134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD7aDy9nWB8uSRgA2VYI4Gh6Vq7KD%2FSrSSnp6GztESeNgIgVd0NptAz1tZdafn3kYDgxIQlE5KnpO9PT%2F6VDz0UTOcq%2FwMIEBAAGgw2Mzc0MjMxODM4MDUiDMISkOksw%2Bg8qMvBjircA5l6xrBIK%2F9SAee0bXOOjEH4%2BAgzQPc3IlMMg%2FH6d4m%2BPNiqZu6RuYdUnvMq6Xwg7LS3dMWtTy5L6D2oX7sXozuO2PK8To61ZFyW1%2FaeRenjqDQE%2FD1hqXnz2phwYhquNICPLLb7n48agVY3E4jVffVoW3Wo8sVMhtVh9B2uVRL0hIOSLmKkiWqf1fTIBCEJCoO82d29yJMJtNcgotbsttZ9BIc%2Bh2X%2Bp9HsJGJ6DdLImcv2ux%2B5IE346kbIBo6hD0RQiAMc6IgWIqXnzISZuylXtu3Fkjn%2BhEkr0eDBoB0L2AApGKNnbITHPutpcBuczHdrui2uAIIi85xAy9xa2qNuqmvi7T6%2FvBx7utkHuYT%2BJCfib0zQbYHv187Mm6VrLw9gxDXdikQjy%2FKDxeWbx1Fw84JoC6lpT48x9HXlXvdSG85qo%2Fs9iNcMRCqKdMC%2F2xmxL9HVdfqKBOaEAiYpfy0DgWJigue%2BVEhR32BLsi7kjF2edmxJ706K78gzXqzVmQy%2FLe2AQjHKvlnENgHudblnGbdSrtvo%2Fmx%2FXE78uEdcI%2F45KIkiu0oro3XCzedFyY5s6JWDAar8w51FVBKfpin9ormegEl%2F%2FCaoR8S%2Bw6jLJ6L2i6HLb4vBXKcpMKGvib8GOqUBPEug68RWHNlPttidkYm%2BrOPBwwNls0YotwG%2BbI0%2BKCSdntf9uastyNdn52%2BAdj1xf9jjSgK0k5VasuOMr8AXnDTGUuy811PUgjuyjBZOlJ%2F3xaKPiypY%2BGC%2BA4o%2BE%2BOeGI90KrZs%2FVXSBxDoIrOZY%2F98SsLkjyzfEY%2FWNtpgwG%2FpnSqbgOHLbMAC7%2BPGmUHq3tB9G1WnlEDmaIWU4kW0gtmJYy%2B6&X-Amz-Signature=6dd345c07e03d2daee94c282dec04716d3fce4cc6477550b2af844700bc284f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
