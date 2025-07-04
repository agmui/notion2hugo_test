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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665OG3ZZWK%2F20250704%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250704T041925Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIHeryF8DThuelVsbKEZCeQxCm1BvJfn3GaTRfbUTth19AiBrLKiIzdd8NjWZ455D3H5BdExMwCGdlK2YDmy4Uv2YHyr%2FAwgkEAAaDDYzNzQyMzE4MzgwNSIM68%2BGWZEwU5l39CZ1KtwD1FI2DEnWX0jrTXiqklcFiFcLy8dLWdYJQC2Dxj1pSPqd9rJpjd63F7%2F1Jx3wN%2BY0PjY9premVnN8znskGSGug5tBGicRmXgXEFX%2FvR3z3UBYGpQT%2BmCs5%2BBwgF8bFLGpjQkdE6HBYvnT2pVSMGI7KDdP%2FbPMp5Jn%2F%2Bzj5d8XVcIxYjDROWD%2FWUtfM2bdIahANEPuQn93%2BOO2k7Zdecjji3%2FlQK6VwmXZR5uVshGsbLqmdILWQsD2s6Lp7Jwuo%2FDa89gVEr0KECduO6YsXDpfHtL6INsZh6ixPFvt%2BbFh4%2FBU1n%2BoCh%2FuyII8iQ4rG%2FepVECTwtOOpoB%2BJlmHzKx%2Bx08HcCX07krorZaNg6WgqH9yofTskkb1FRjcjCo0XmJGvMbX9qqrqwSXszKTMAecNgbJoHUMF0HCXApWLeGz3%2F2wv1y85ebi2nLBDURiisCoR2DMqVUy07GwpXZQ45CeO6EF6UDPvmOHC6Fq8jeyHj9T07ylRVDKHhZqLrhxYw3d1zOX4SXl6T%2FuyKuUsddoylsStAG7JkZR%2BJt1Y65laN4Fow8VdvDaJKf0LuIDrlIiTF9IqPdXKwxBfuxp2hRNsoaR8meSXe23U8zThJerubs99hecyE9S1yzizRYw1Y2dwwY6pgGwoLiLBN1WO408uojKFCtrPOXSB7SKa%2FoO3une2wv0Scbu4AMvFCojldVgOEh0DckBlWGbz9VEyxighsNbiJnNImyQa6vZnE%2B%2F3qpl5Yk9apHEUfjd2Q9ZShooCiBkoX2uez%2FTgV8kWrri1p12rgSIXymFq6UU4U8Zg50FTLnqlbpyhnglYz9L%2BrDEediiaHDOzGDUl17wVmIWr2u23qvhLZwn11BM&X-Amz-Signature=f358d9286eab3dc685b12ef06ccfd9b91c7047acb404ba776c357938a3020285&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
