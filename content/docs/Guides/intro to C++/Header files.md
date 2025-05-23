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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46663RSH2FT%2F20250523%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250523T081215Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJIMEYCIQDyTb0SP3tp5AGCyenQO7lIRH1x8%2BYflN4%2FqQTuh8nS0gIhAMXsLkWN7h7%2BtFju9T1tEsNh%2F0NP05gIjTvGxreuVG8OKogECOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzptMaaw9jQkJolnfQq3AOX49oh9KX0kovjgByIoRo896rZYjZL30H%2BvpdKNO66YwDQtvV46kd5rqbAKDAvVsr2NPVB3KzJag4Tbya6xQrrctwPEi%2FY%2F4KONIZ7u0mYsA6y%2Fnp0VIRbykWlqomiqGmqHEpTGxASabHW%2F7tlmdskto4JvbP%2FcdpfPrrsaiLD9ojMtoLAlxjFWP%2FI559di%2FHt1ObUgVzGJ1THWiUU14EyjCItGNcHgF5CpC%2FW9VeusAYRaqXulPqb%2B3aAQIccYruolYl%2BnKe%2FWAcNTbWQBeDNSR4ZqGPeSvRUPRfJf9Xp6vs8Ba6nZyoAItgxi02AbfBhrpccJHYMINM4cnV5I477OdiJ70ZbtfWgM99vjs6EvXhEuAZP7ps1ynT25u%2FIpmie88CJCoEeVoN7A74qga9er2cCEkmq94py2fm%2FlusIiHIUCDc%2Fhp0t8m616vVyuo2psfYqfFsY9Emmbs%2FSwtNX7NzqsivMHXSYbfvjU%2BGCJKsMDliY%2FMk2BBD7AOgnTtAlaJaO0XaSRcC9OTIEyc3sRP4EcnwJ06PTYBGjNdpk5Fp%2B9r%2FjxJqg0yt4NzTjmDlvkUXULsQZFhDMoOrim2iXOlKEp8DLrhSP22vRFSWxuP4uAnCpaXngWj3AFzCFwr%2FBBjqkAVRFCDt57KATxRU0z0xhkiEo4LMZd7M05CplDwqduXGK53Y847f5mIVgr2LUoRP2eTR90l3D7Kj%2F4S9wijTIXHbf2tgE1suFBuw9ag3nHfNZ7ogn1zsbiGvZhATxUi8mkBCNPgmJVLeYLbjrK%2BUDQk70uLG8vVfUOgW4kCe%2FOif2BWKnHbtHYYKxNYCqFyk7W3Y1c6OT1wnYHcYj8V3mdRZ0obAm&X-Amz-Signature=f1a51ad69fc574e120528c21028c6ecd2eda1ef601122862f86aabaa11497f84&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
