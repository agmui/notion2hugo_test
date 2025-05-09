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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662H33WJ6H%2F20250509%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250509T061310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHNR2vyjNAbxcadXBSP7CsewO0pp7AQghpkG41DwZD1yAiEAnn6AeENtPQHixkzkNCfcJoxygUnKOQdSIFOAefhgZxgqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHm2xJ2tEipjB948BCrcA7JEyA4msz51tTL063GQowvzibQmfP2CD2L08%2B4NMkNJhgBaJ6kkl1HI%2BVgx9ZL%2B7LUP9eMGDQoqBUg5Ecp8tAN5WUohOJNs2JGYJ8ewIeovhhm4b4VO5ibNWyCUYFPGTJemOQyyAAOGj9zrkRZiJ9vgOAGkc02UO4f0MNutZJqMtrRXEOw24ztllWvRwBtI%2FNXFKuagZc3sUHxex3jVatL%2FPrDkoDqEiu6oejtAvpk3qtUPsXLilNFCIX2aqX%2BJOK6Od9BTcm9z7GEquDwv0sRXzwDmM1SySAJ%2F7K%2BbcDGAF%2F6nUF8d5SZDqR3Qq%2B1Wy%2Bc%2FbM6TsumOuP%2ForAcS%2FoLts2AcL0kBvJN86fe364vWUylEXnxLipzRJ5igRssy50ntHtxDiUUDcNrLzgyLzFinXytBYxt3983uMH9SiZo%2FgI0GGD7o0O3kZNNvRmLnceRu63YD79Dxm6%2F%2B7%2Bp1ABbByDjQQffJAtS%2BQGxJ6%2BEnIdjvS0d%2FjtUypqvAgDLnOYOLO5KqvmLWTEyH8vaKTsgDrH7%2FYcGGSOgzaiC8TlL2H8im95xnXWJPOAmAU0p0spsnff2KZG4Rt%2B4obBznefm%2FiHmQO4O7gcUsPO6jMaaNdYh9oDcxy5D4OHimMNmv9sAGOqUB2dNaHuEGebZWZswMGRm2owF2d8pumj1Udts9dSy0C6QutJTMG89AKrOeWdPsBr2Xq%2BIaoJd3khxnLTmp62v48iB%2FIza%2BVMAmu%2FVTmlaemBBToXOC5Ty8weV0KRgCgzDIsfg2KU5zhvKkHC0zmzeGGhZ5OhCHoR%2FwtUFaohxCxPmvARNldI1g3PC7KMMgcMFk2cgogCyV%2BFt0p32QBRbLWixL06bv&X-Amz-Signature=9dc3f4307a14f2473a3cff08efa593de22b697cb40ea8f2852f0b31f4a1a723d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
