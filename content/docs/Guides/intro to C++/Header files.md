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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7PONGM3%2F20250327%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250327T121507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH3fonj4oBKehQ39%2BVknnFNpclqO0ALDfV1ahdslvMVGAiAPVjS2FGAIwhr3ku%2BJy63QK4jQHWUblgZGdoVcJ%2FFLSyr%2FAwhFEAAaDDYzNzQyMzE4MzgwNSIMkjf2X1KcF0a%2F6MnoKtwDZOxrxIUNiviutK4h3DeovAqPbtqZVqWMpijMPfTn10EEBIjs%2FErkgy1NmjryO4%2FbItUPt0uLJAVjtgR5HSNXHr1nYZejE0Ks2z%2B1V70bGA9tsnjaC9jB%2BYi2froeKyAjOgQLAMEmlh98XQkL0tjBB2mfw2CkN3eMGG3gApIYCRvQCesvxAO2umNOwwyhUwCG2As4%2B6Jz%2FlP%2BDcKd5h6P16Dse1kvQeKesvl5WcEXycbXYnTly86RO2X4dtRQL6VOX3GpBiO46pqAclh2Y3GUpRmRK63djB2CUCbqvzZagoqxJj9oB2hNsKvDr1P63M20TzH7mSb5UR5cPpDlpyN0y8hRce8lwd6yNtRVLyEapBqqMcf8TET7AFw6PMmd%2FdEWED4U5f0NoUm9wIMt8W%2BVx6c%2BbYzRnqCzxlv3%2FNnjnuzUyOWMNyxDMAf8cK1p3MbSbnYCu1hihOBbDVIObSW2yBPgAGy9uRvC7c%2BJV0xnx2VrQMshBalGb33uKuuB50BMt6d4Y1F8DYjJT7wWSDTKMhA2xiOxt0p5er9fI8XR0wz1We1d%2FQvDxX%2F5D45F1lKHKEV7a2MisPPlQiuKLwQ7r77b3NT7dbgN7jzIMm85ZlyAJQMSZNyBZ1uhXakwhPeUvwY6pgGQTAx6OnZ8lhX3IbN2%2B%2Fi72NUUt42RGNuiYB1zjo78BIm8YT%2FHgEP9Hpc4AKcfQksudIjtIjT353%2BHupwA7jgGq2cd0kqrde57KQrtkLTV8cwczzEnuT7B9jtxykuqTXNw9gqH2Ua9P%2F8VRs6Il%2Fe6JBnoTye7m7hMaaS3Ol5lrRdea22jksjes1WZpx7hOvJM26yLnXzazOZZWA9AiqJKaz7PCCA8&X-Amz-Signature=e56855dd5bd6c26fe52611d78779c924db37781ce1114c40c29b540f0cdc4ce5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
