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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSSVN47U%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T161052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBFF3oyJNIIHJ8hmw1sYtzts7I0RJ1L97HPEHAJWSWU7AiAzAC%2Bl6miRQF4%2Fr2HHGUxSQdaIhywL3bUy31wrGdzjNSqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhjwQPwSZi%2B3vRI6KKtwDyGJhnBhGGdiFvJykl0UmR0iBvxd82zAKiu5WzEcyPAuVu2Kd7NuCVOEAy3LbK8KYq%2FXXdViaV2vSfP2PsK%2Fq3VYzdJPum8jw6IgkgNOhAY2zEvvIkxOsrWSZnNv8pzRGSCwzpdlVElJF7Nk7JkmZCjTplHbpdsLM5mbxv7pmb2RmYm4KUvavoaMmnRnxIgTYFE%2BQ8CLHHdhTxtyGKadcpfXBkEQnNhWHtgwrhQWgqKXaQ%2FSwfcbYEg4qcToHMLMXvbG8ILz%2BamFVkXT6q%2BENzd5OVcrjxqFIVH3q3nDVXEsZzzQe2LfEXFzkDMp%2BbyI%2Bv9DqsgupsrPEHciKTnu6It%2Fq7thiczPaWKDYdLrjCJF6NtovONxzDBuMxhgcqvjCjYpzsYnCQeE4VHWoVkQ6l2fAPX3%2B9%2BBzdmBCa1TVmNz9quvbE8Mvyk6NsnSIIzYYUD%2F%2BYkJmzFDJfVCUCIsCq4BJVlMW0CFvu9hlRQqR8F%2Fg9inQMAtcuXYoGsKC2L4LTrLZtyDliDKDBxf9YZfCmr1Mi8y5jkVGXIriWOQ7OqbOMtaDQrvJoib2uucyHQLuAvWid4i%2F3EsF1HtcpzC8YOblwMp0KQDlPVs7nagkbMGZipV8OWGd3lNVa9cwrfHmwQY6pgGDcS47Yivj6cVeZ7f3iHu4C2F9Q6ux%2B0FvCxdCtzbB6u2Nd6OuWVbUq7cLY1CWPGtG3k2tao67IiVjf49Z2GKw%2BYgjKgS5Uryp4J2PLlzGdqj3gfaE9qGkG%2FAbmuz98K67CXLU0hYLimY5l8JaatHp2svajqlB6llTxb8ArFMMg55r5FUuHFv1D69B4I%2FkAfJRjPz7iikgU7iYYb0tMkCZzytT1bWH&X-Amz-Signature=21b4b9caac74c8acaa9712602f1336f59d0af49fdbbacc221bb1be80b7a7dcb6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
