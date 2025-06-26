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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667SJVZVGW%2F20250626%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250626T051030Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFwaCXVzLXdlc3QtMiJHMEUCIHsVeiah8GJIexnqORa47iydXnnuXf82Vq5pOiSS%2F5imAiEAwg8a%2F3m7PgN%2Flzj%2BKTkKXFsuaK8PfpXOP53mq01nbMoq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOGnCfYyQvMphzKheSrcA9lORCGHd8JyHX08SaHhHgwHfvGhKGPmifGVW9E8ghe3qocRd%2FMHQdygbnei3EG3brDQTgvFOKqpn4%2Fs7EApKjLXWk%2FW8g9kZvrg1qmGumwcFGB%2BJ%2BHxp4MjadudGrc3wSozcUVvd%2FbM36l5u%2BuZvYXEIyMtcKs%2FCIeIzYRe%2Fjtj1LZR9xzne7TnUJnWI1EBiEl7Q9yPDOZijBNpqoRj7VPN9QaqXKL6PnY%2FgIF04AXQ2a7kFeJb2YnyWjLeABdo93VpO%2BBFVfSY8u9FLAGP8fR%2BSwTN5G7%2B1hM9x7sFJrQNkAXecaHmEKu6o3QcHqVs3ZiuyapRUQYoFbtDb0dQn7JmQoZFPpFy1jHiCP936e0aw77xP30tBajZOCuCZRDWek0orSV9JPIZZIGGj4Is7RNOrh4iO2MciIFQMqItaZymHlUMKd7ZT7P%2F2VZVaT5LR0f%2FNS1jM%2FVLio1uaWica8Pjo6f6PHWu9myyVJO39R%2F4%2FSl13oZhD8tupdLyLW%2FS%2FQFwdUhq6O7Has3ta1fGiEnl6ZzD3eT1L5b3VF8O4HsK7OgQ1Tq2rgf2xgXtoTRPf20GyL81IYh%2F85xVFHZbFZC%2FRttWD0V%2FMZBc2vH1JU5YJfffSy7uLGEaeEfAMPOI88IGOqUBJ1cOeZpv8CQP3nINY0dXI%2BmCTLGoPV6CAC9twRPl0e8ucU24qfNk61N3zSudff8FadkfA7UuYcfiwPPEZjCYeExGwsgn%2FyhppX8R%2FMX0MTe5vA7jvTzenI58TPN61J5ocPBG33FxvdVvMFrC7eJjFVOTUCgv7NdcSMYd4DJhTMuD8PEg%2B8iW19RrHVtdXbMKGs%2BP7tKHAN5ZgdLuwTT1RfmQ%2Fzd3&X-Amz-Signature=0ed76a1d9547dfc3d3b13d63eefa0f5c78b3f16d8a128ae3aa668fbb1680bb1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
