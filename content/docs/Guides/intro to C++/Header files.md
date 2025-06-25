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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664WEHBZUB%2F20250625%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250625T110838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEsaCXVzLXdlc3QtMiJGMEQCIHtlyE9MrU%2BumlWLTD14WX7uqPxn%2BIQhr9cVAIn4YdP6AiAk11bNe8E9bDNFmvg1eyZO7MyLWlR8FHrAto1tA12Nwir%2FAwhDEAAaDDYzNzQyMzE4MzgwNSIMdpMsCKrHtXFIz%2F%2FfKtwDZcUmE6FbMksnA2n6JY%2B39FG4vqgVp5G5OtM7n3ya1v60U1JC%2BRA31ye0HZRPn9PfraJeBkykjmZboYm76J4JJWhQcT4586hVwShlfSw%2B9JfdZwdK85V9RWTM2CsxStIGiZiilcmG0HGDnF%2FU1WC9t18vOwVQUzg94Ai2mugjl02u9ys8D52zyD4vzOJ9zOfrbOcc1GcdT4Dd7wnnPh%2BYjXc8G9zQ3TDYdgtumY7wn%2FvQr1Xozw99loJACAagm2tgn1%2By09wZFHC8rKRjUyPxdE%2BeCnyDs1LDxZyPPywWIVte33lJ2VpYcRZR9yyScWIJFoJ25Y2ASofpMrtUAJ800RA6gXkp5dFKPG05PRdjfOuQvsRKY%2FUBRVYXeBN5E0tS9bOALJ0GnTwcC0BhqdxVnYOwccUzDFUzEuzHlb1Pks%2BlqJcReiptt9E4qoujurpP59goPOI7kAR%2BzfLGVkfMrrqvlrIwrrjgygIFUi5XcLRhjalqoOji0FDW2970iPYoMxP3azmtCnDeuit0gvU2Mi6TdN%2Brrr2kUBnU4%2FVaNTZHRegFfymse0sh3z4sqhZln2q3rWVvr24lxCt6tPavfz6ppyLoNYoVPIsv9spGpQAJt7iny%2B%2BVFfZVUIUwh5rvwgY6pgFr1sgXSsZgLdy5%2FolXAqCi167ZDCIpV9u7tkgB0hXAU8Siq38%2FlgSqZ71THOKC%2BIu4BcK6LlTwEIFiYPwX2ULmmCvvXTpMu3xvS9jT6%2F%2FFuXt0pureosmxtckJOzjZVrNTj5nUsxC6yIggcfpHr9abvgMRFU1bdR8RenKcgYDqYuyPAfr1eQoOdh4roQ7%2FEinCeD5UcbT4KhEIcpca4Kmh7DjCveGU&X-Amz-Signature=29622697f94cee0c55ac351034ad3e556b72cafd687379516042dce4367aef6b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
