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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662E5NAGOW%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T071100Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB4aCXVzLXdlc3QtMiJGMEQCID4uwhg4mAM1cQZ87E71fqAY%2BNfOTnjFPMc%2FxSX0n9E3AiAN%2FVQtuXG6Dr7Xd3C%2F%2FCT9GRsMGtZ31jpJGLtRrgEwIir%2FAwgnEAAaDDYzNzQyMzE4MzgwNSIM6B3XjCagxh79VjRJKtwDfzG63GHlHBDE%2BVI69QYE42xX2qxRV7EOGqCZTsMHIU7YVjRi9KQhdQWi%2B96FC3gLw%2FphyVeQD4MExrSbmquETNk%2BGnguURsEmJpccuXpOnchBgYkn7iCNeW7mZ1kc0qWaaJNFrNV9p2BN%2FhEM9PsNXEFW1%2F9T4FTfUZNRGEZc3ZKYFa3nPrjHiC3IRzXs8hVjhWL4f%2FfjeRr1CBmlYM3PNkF4FvYgmatZ79pRnYGVUarZvg08q1nMCyPKsHwJfP%2BCqDheJgFcjNcN2UEYknJ%2BY1C8a18aJGS2ftdl3tH34bR%2F5wdh5FRltnAhUtC13PfFN%2BSQ443moMkP2q78NA4mgOVWAXn78YzV%2BgeytkZrFELIkK1A4nbBeGCDQh8ZH%2F0GZVhpqwlDsG5xERF8eJ7sF238o6cH2MFpIPe93UmVZKI6Xiux9LdlSvUHK2SliVDnMhwf6DX8H4%2BmSse0eLXltZkcvqEhv%2B7gK6vHPs5j%2FiOHiX1%2F45549VxVGh%2BS939Mzg%2FFwVT75H5ZEerGirTREHOE1za3FMmvwhFmXnj730sCUx%2B%2FOj2IhJTH7Y7E2v0aTUKGlluFwkCXl%2Bq0%2BMjPapLF7rnmJg0SjoQopX%2FAkiy3qdKvbeT%2BuUpWh0w2OGdwwY6pgFFZsjA8CfweRQrl2hgcxv1XBhrxpWEX0apjfaAYu9TBn9EoVWtgiq6Qev7EcD2QfzLTmbs3w%2F3%2BZK%2Beu8FLc%2FWrzBswIedL2luV2SZwpAb24jXoNJ2y5ACRns5u%2B7kf5hZoUeaB92rmWij1aFGI97u7Oz5w6igWT0ypK5mzVfjOOEAKMQbfWLzaIgV2XdM439C4JCRAWKCryYMzwZeG4HGZFmeRI74&X-Amz-Signature=bf87a0c36590e397099c36dfb1763288e5c3da31c1bc75a21984bbc824960658&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
