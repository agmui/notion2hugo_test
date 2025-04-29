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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKF76QY6%2F20250429%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250429T181201Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDUmn%2F17IbmLdJyKTzYDHaOUonE1TU%2BGtZFkxZv%2BmxmyAiEA5E4eiJEOWDP4JPjhcCW0WZ3%2FeEX26n9qV4FAUXyxS7IqiAQIkv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF39EPtEYILoL4DuySrcA1EUw6BigfHA7RYLMBa%2FGEIn8cLFy7mNfdU26lmICVuMFrlv3%2FF%2B8moR5higPMCtwjj1AyFJPwOIG%2Fs4yXF0xd%2FNPioSzqNviPZEKfyawS7SrmHgGtGhaTnvJHUZ8%2FuZfhsk%2Fo4NHJPL1C5DwKClAPW%2BqwVPTdMprKpttK4uA5LMdWbkNAfF%2BK%2BNX3luOxv2AlE4hzyn340ihsfbebHUHNtEBRdY2Uhhb9fFGgZxatObOsCK1qKds3pov8fEbTJK4RLGL0U9xTYHb7o6zogzpgLxkpjiJhAJ2LB5cS8SJOxJ1svyuQk%2BJCBZLTugQ%2FfAXUkILXRpeAZ5aLsFKty1j2lLGNRNRux%2BXT38IWjv2PWzm2%2BuUmlLmAt%2Fisa6prwgOzcyFAz9ZozaZPJf%2FVajiLINYnKYDD%2Fr9hooKeWDdinbcnqUK6kV3Xo0ekM%2BT4AOEEcX7HGxgYUukGg6NvN%2FPNI5dSdf91L9wt4XfYXuD7N80jTGDIgzRYexRKHiuN7mnX3cqlex1iGmQbgZyjc6OqwaLecNwnQbbaW5yoCFrmMrNNdZZHfjHz%2FBV42Vg26rDGfAMK%2BBHhSEs47Fjf32kUFyH%2FAUf37y6rjVgTkTCaH2iiiIvBseSVPrg%2FKDMJWUxMAGOqUB9hAfd0HPF264CwaX5C%2B4pHLwRHthZ%2B1bHw9NPE2buI55BCprP5pdXpIQU%2BJCH6vRfYkap2XOYXKFRssEO0a8NF8MOGMY%2FntURFueDJPwvj70GUHTfxAtPfkdQ38gKhvI%2FoIk9tIVEsagwMp9dQeVOzySS2rtm8tpiY%2BaEXT4a4nT%2BgI8r9xxwUF%2BTl5anzhpR58pLKZ0A3QzH1sig98KWeLkMlSR&X-Amz-Signature=6a90e0193bb50b3a2e08d5fa693caaa2479777022b7b192427d3853c113a2103&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
