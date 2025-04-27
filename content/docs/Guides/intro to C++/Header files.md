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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X36VRKLU%2F20250427%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250427T081005Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDAM4grVb0VSV6hM187fQ5l5ee9okASkBaI23dQbBETMAiEA1mV%2F8iaEva7djKwUyZZB%2Bp7pfyRM%2F4AZkoLMV%2Bndw4Aq%2FwMIVhAAGgw2Mzc0MjMxODM4MDUiDCuEULfU3AO%2FpimrISrcA9YkyWoLIx5OuMmCI2sPYWCkVUJL4j6uBdw8pN2ZSyEl%2FBOnkc24g5fbwgF2%2BZ10dpLlq8faOHWy19KW34S8MdNTzYAP0c8hl%2FgmYx%2BXmAUTU47JKGW1GUcnrcv4H37O8kKOIuDvYlaXhYD5uMowjPSmMv2mC2tjvqiNpsLFGnxz%2BPkHsTGEtMuEAzPHhsiM0v8uj9Ul%2BVV5NMsq49IR35cfvXTNDaEskABcG6j81VX%2FyXIUfe%2BKuvgGG%2B4w7WhAhBsrMLVbxhIHQlz78D5yDYxotOTXfuOJk%2BxV4h%2BE4CcqbxIUGCKxd78%2BCQ5zMbwwdZJidLOkLrY7AQEpF6uxiza2Wm8o59GD%2FuWomFs%2F3k2fkLuFfTWJMyPmAegGc05wa08SardDeVFJjV8jCc7sUny4OGPXkdeuuLQU6du4UvnACrtsMDr98N5E9dG4J3V7uJ717x1L1SSwspH6H%2BqU8uqFSUeFz5%2B%2BAvZdX0FeYrl0%2BuqcLsnvoM%2FkbqGCCngvA7oYVuu6vG7eWQzwdux6%2FAeWExQNjmd0PoKi13NrYLtavk%2FCE8XR5jTpIz4XsTjI0GP4gGYVK%2FPWj%2BK%2B347velv5MbXvWMcj6oZ5toVBlzQiiAyGx%2Bt1R13zZprGMI3ttsAGOqUBkDyo%2FpHD6%2BsGpGu%2FEtBK%2BaZTW3eRfP9T%2B0FFrTzyRSSjwNYLgJzJpKewpBeN5CdxUfV3J2Cmcnm0Yd3I84%2BxUJOfm0BJqc%2FcfWINw09Ey%2BPBepZoMcx2dwIGjpoTAMjtNCGsJYYPV3Vl2yR%2FkGDnHALOhgRicnER71qwTPlaVjDF7B8q9GHCEgv6XJovUl96OTJWpEAABgfxerV9qeRqKVBcn0Sp&X-Amz-Signature=8c900f63ec0c10df6b92eee111a647f519119042525e5f29f1c181921cfede1b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
