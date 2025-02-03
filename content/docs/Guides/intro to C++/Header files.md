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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666XRCA5CD%2F20250203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250203T081054Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGK%2F12VLWzD5Pl1m5qbSVd4dm9tXggxJuA%2FM2%2ByDMTi7AiBkt1ws1lG%2BjhXjF2cWo5kbcWn9MwBcN63NJKGo%2BFeE7yr%2FAwgQEAAaDDYzNzQyMzE4MzgwNSIMxCEHNSRLYo00nGkoKtwDZv%2BHDNYIIOgETwSSZ8bAHiUvzvB6nNPRe3yFj%2FhRaMLJtzmiKUeXhG7K21L4fpiVyajdPZnawbIbPWInPhCMdvl0DfiWoGXzSSodwwqU734UtiWE43g%2FPdsoHjPgwk%2B%2Fzyb0z9tV0eIe5zIYRN%2FkFAUCBATVrJ%2FK4W2cYy8T1jBu7T7rd1wTVtxhUGn9WFS%2Bk4SeA4i7Ap6mqZI9HvRXQkLbqNx0jds7MRqJKTWtk8uhCWlSa6S9I5grHQpiOfo3GW3mC7%2FYTs74O6LMF1ueV%2FeQaWViQu3RKt333szdkg7TYGpo0xv8wakRDRXuaU58GQD4tHLLGhZZBXM2cgHj5mua%2FSxCyBsp1ZVks8gQWK2uD7SER9%2BFICtRFi1WMXXJxfDtd%2FEui%2FBEOLwGdJnPULFq%2Fsy2TdExkwnq1d0HLAQ2KIGE6XefFkSdILGwbqjt%2BgIetw4z9judZHr2W3A9JZAuri3O6HaeCKZ3R18%2Bxx%2Bp1NN7BD7bO2F0Taufg1D7fo9rWiHBJAMIq1KA6S4fPwVjzvLFjofsDB3AKh0vX9JDBJy1OxQUMvF3bBQ26kaKzCSFZLi25Vxg4AHP5wZKiFl8EqY7EnGrLi%2BJZYWtKA3%2FWwrIX7TJQCTkl40w%2BtiBvQY6pgEQGWcDxl3u3I%2F%2FCnBgAXDaStHLv9eqDRu0gIsP%2B6LqyGx5qrW5nU7x9fe7REK1U24UNeMoJhq3DdSBqMQY1u90vwCx%2BcyBa7MMhBQuh5vGtJlGgAiXTes9gfyVA0RtLdRh3abpv1QMQQmE%2Fy%2FM4EHLXp7lolRxssBNSUQivrTaC9QV%2FOZWT2VjP9EkKYTbQOZK02w%2BIBen9vRvCeB3eRund4c32%2FCu&X-Amz-Signature=12b0483ce1883a248c9e2eed241f5cef3123832714becc74b446c65cf2e90e10&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
