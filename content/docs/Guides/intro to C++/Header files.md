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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VT2PSDKN%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T190650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy81V9qVv2QbtWWUklqZZ0iik49%2FdDOlG6Z43oqSDTJAIhALw393bjfo2Ylx4YV%2BFZrtQ7wn11Rl4v7iUCEoZPPDEZKv8DCHwQABoMNjM3NDIzMTgzODA1IgyA%2B135004gKzk8FLoq3AOFvGXq3rxjz26WM27DgEDYGWKWilAz7ffIVB6ZjTR%2BntmCMvXMVjUhWfl3cequBuw1vAF2p3mkp%2FsdZilIp%2BSbKD1MDBH%2FPI9jSGt8VIXjiDYoixf4HpADfzStezs%2ByiRZhaHYb8vz02md3U34OiB%2FPBaAi772CpR2oPm9%2BvdFTaca6TSwgH0fd%2FdcsaZh8aMTsAWaLxbuPKKdvg9f0s2a7o2J0qLLYg9q4JMMelPhYjMnhwwNlklcDr8L3%2BONO2lbBFRz98a%2B8Y3MWmlB7a7lg0JrUaZjbX6GQN1luS8p1QDInnEXMCTXP5bTj9bwTt2tTU2B4MTIbCA6z60XPqeBczxKZvjU97bETYVZ61GA3yDNvUYFcwaLjGpSkyd9i8lN%2Bfo%2BJOThIRzUciCgNTpjq14zYYITLyIo56j3xeWEZMuXI4XVQuMRxXBtvBjsFEIUNBr%2FtHxPrs23l8%2FQi7%2Bzq1xWANmsFg9tSPfHWGOK80nvBspfhCAYrpo3frmwpQbeS%2BkFLBYaMy7PkC7aglJdZuV7vZfEbOsYGfpJK7q4k5byIOp8ZFkI9sYwd%2B3pfp2oYVTyNnjjWOL9ea4pifuEnVeascZPlCDFeAO%2FcJqWtK4mhsZsWOuC044ihDCdm7%2FABjqkAU4Yc8FXJxu0oTz3%2BCqHE23QwF0dRGxQExfU3tugRIylPTXlacq6XfyIRVdzQUg4v0MRhgsaSrSm3GcIP224DjnVCzYRayz%2BzkVyUbl9ks8H3oSwwO%2BzUA6KROyt5lkP8i6%2Bm1JQt1CswewRvV7nX%2BtsPJIvs9BFu73XX3VH9JgWzhsoT4NCog%2FfZsyAGQdM4tgkj1A0pnUnww9KuXA44TG2TcLA&X-Amz-Signature=5be3842cf58697cc7718d9a8b321194d2a18a05d7c81885e1034f50affd0190f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
