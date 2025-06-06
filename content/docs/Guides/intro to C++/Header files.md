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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIXITR4F%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T150745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCXL0wkgWIAxmRIH%2FiXCx3w26kWTVcWBuAG96TLZ7%2FXUQIgFj5LXYdj0EYowAl4i%2F3lmR9M0ctL%2Bp01z5Mcq8ikLIgq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDPr7lfnEJujBkPAGTircA%2BfXsMboSpx1GBFvDSbn2TM2IBox7Imn1LO5qWd%2F0UTS3PTyLcNvPTHgQd9c9ye4Oz0PU5MC0hAr1XLLIpUxYiIloGgxZP%2FZIsLEHsMOTM325947C4CgkioJVOL7a428%2FNPPnBZMPAtoBrQQIedZGamALtwHdaxkqkdoQFe7e393PBJnEGyqwxJzmU2VxhYPvhjlfV%2Bn2uQ6lkEdfn7tubcND7wpvrVqe8ATwtVx%2FjnjJei89Dg%2BOjSleHBFhv87Pf4CPzYLJbWDC0l6X9P9Xa%2BME3%2BYtfZkbAzF%2FeoTHUJ2bhctREL6qVVnFe60pboTCGbIjLc4hwNKBtGUlxttu7xUJ7vCTJFUIi2C7zPdYgloU95prq0%2FbmnKHw2b%2FU3N1AYTNKAN1K5pD8ZI7ggGZ9tx0312BMigRZfmqPZoQ5eioAitJOle7O30mI46uw1K71vktefDuRSObfSPvcmJhVVWU2eQh%2Fb%2Fl0tkUCOqS%2FcnUcxNUjXsxf%2B8h4zMaDAylnoTqwUEHh3iSQGfRIo4De%2BYvMjQAoi6bqdIcv5sJmdAuIvi66LLMa%2BV1cnpRPatPI3ZVilSHRkDlMMbaPxjgW%2BH0H%2BpqDvSUusnZcVVQQ5t7Dtshx3DOBkeyyv0MNTwi8IGOqUBbFgWWzlzxdQnJY2KVB7690o3VrOWP0WcGUwvZBj7oqN0KB%2FW6I3UaHIe57CL3Ofukj3R%2Bz6HRvHtS1usDmyhUEgKKfjTjH6HQgx9s0ExmiWgbFgTI3qk45lnbj1GWEhKU7e10fvsg%2FXDzLgg%2B9fpoXwAn3l3SSJyGDHJpfyVrxiHVgo1mwR2YtAmBn6h67RthZj8pU07695eulvaF2GeZ75tVDCc&X-Amz-Signature=af8a9a8b401b0302e015e214f9ee9b202f703dea291de05a146028eac3d5afbb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
