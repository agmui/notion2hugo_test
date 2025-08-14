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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZTVWJ4PX%2F20250814%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250814T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD%2Bon6FrBQav19w1uDXcRwWnnHqL2OdLvC%2BMDPevx2TFQIgfIEvtbObF5M9AfEBzkFmTnp%2BTvpnbQxhjFxJ1lXLBpwq%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDDHlDrVeu82BI2OrsyrcA7Ra4gxPlZWfNZPYkddO0tVTjsm7oKAHvG9QQV98ePMt42W%2FemorcR3%2FKfkGmEeBj5efEJvmRyezcq637e%2Bug34fYflJCqlp9nXQtG%2BPTpR1M6FYw8EaHyZxTeRifpawnjmSebntN8RP9fTSlY%2Bu%2FimotC%2BX5XXgnSRYOPF3iqNhPYlTE5LqJacqYg8JpPHGBLApAVPr3xZ1P6wL45Lv%2FwiPxHJN3V%2FfAMhqdB%2FoR%2BmOLQDtCfusHqaQ%2BpSqIRYobQfqBCpVNOZqcK4vX15SAfu7lUECTCGGFNFicHruvT%2BSU5vTxE9dphKf02Vv3W5O55GlMyXVM%2BFn7vWvJvy58effKJ6tuUmy4NsOnMPTPat8wi%2BXXcKYyM9dJpnNj01o%2BVMg0Y%2FF0L5KLfmh59F6eLdD8jrfFzDV7xmFczLt97f18Z8H1pnm0NFSqeX%2FILXVW5G8hnRffWQcCzKlyuMVBrjrpFVR5tj09xi73eBz2XgsISqN12qWn6%2BjMbb%2BV%2FTcLnzDuFVb%2Fzw3tPk9ScHEMEGI5QS%2FqzRmaeY1f2lxHligSiee%2FM03juMGF1mdsxmn2HzzTJR6px0tqNxf%2Biy3QyaFvnuMq7N%2FDZRLez%2FYeHrSO8uuxl2tnv%2FWfovKMIau9sQGOqUBBEK1hCF203Bgczh2lnh%2FUMXp%2FrBJyGL%2Bm%2FgKH2Bf3wwpcJaSdOQOF2FsqtcFA5jDN7JIoPxn75QbX6KR747%2B%2FaTm%2FV%2BXORbpNaBlPyJ7Jjzhs1yX6w8%2Bk01b0LfXOOm07zbXb7KSDEb8GuiT5pg9T2tRQHrDLtFmvqfjeXGQilybNcoJcjqdd85Q5o0kphuwzenul9t%2Bejx5u2Hdn8TtWe3mHwJV&X-Amz-Signature=a4d2b9d3d0095e9387e9da1e102fcc897a0339a8cf81a30d1c812fd6065650f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
