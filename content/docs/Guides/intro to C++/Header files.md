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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RUDVM5AL%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T081257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGp85qfgo3POVWvqvQ8K6NSHK4tZbXQVdF0IGskvYYAAAiBl0DmrX6fFWFV9c2fH%2FpRG6gCSEAOXielun1NeHjckriqIBAjR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMLhk9pM2%2BqnJplMl%2BKtwDyJrp3V9k43z3uVerXBgYevis5RMvQbsoD33d2ZUkFyJcwfFXGwMQkchQDxCCja8fCkyEA152tj0mxA53pR0EQae9zN0%2FwKPB2N6xkzY27jiWPO5qRREgxQfXcjJ47KLV3vUV6qAy6KOaSau7Gyk3KWYkAAAQbtZdoo26en%2BpeW2%2By6jrJQKTu32IPlUJ2eITk3h74p0uFxVeVt0xCElXBrgTz7hQfo%2FucLORVzxQCJq33%2BRBnWkr6F3idzWPrvLxXP2x2HedTq06sogyLk6%2FkXso%2Bi7civHT%2FpM9rG46APsWHar1DV34LcSuE0wU0jOroaWrQsIdK0wEkvElFSEtwvcoxY%2FUy5iWQlOMClDEqi7gMrG0rAU435Hl5Kc3D0E5%2BfRyh16K2YJbGzYAi9c8KqMTTCIwVeODUIXIwBKFVU3A4atuMWhCIpneRocmc59aapIPpM0xumrS29bAo9cdOis%2Brkwv9fYw9O7q3VEUWjBIxzXbpOfk%2BIoyeW3rT%2Fm5oIU7KVklEjGfwTlIuImz%2Fz8DWBcssbDXTUI49oHFoyNEiuKA1dCygBdoPDlOOS5Wx%2Fz%2Fmf1fyR4tZ0jIBWX%2B84z2vErBRw0QRhqjBLyXCoNN%2FBlyc45136Um5SMwgM%2BGwQY6pgEs%2BE2vAYQigg7FlAyqYsprl%2F1s4rLZdhlhlupZAu9iolL33zA83pAewnvZiBGc7iUb7AvI84geNDywu3U5fypt411cedHYmIA3%2F5W9MFsMiJOxRAQij0qkNuqOQ1lb5%2Bb1lFUVWFScy7A3OLB%2FqdLhhh%2FhSvyRnlyPD4INrzv5a5X8mjkfTzetMSz6J2keh1IMaUt4WcVM7znFPCBFwaZUC%2BgxCyPN&X-Amz-Signature=136d3c6f4b8da670d2ad628c3766fba8a8c8ab168b1decc4e6fc1572c7383365&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
