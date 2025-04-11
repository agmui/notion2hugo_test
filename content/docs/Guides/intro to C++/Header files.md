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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WH23GMU5%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T200921Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEwaCXVzLXdlc3QtMiJIMEYCIQDPFTMAaeFmMjKqyOAUOnNmbrNNoGjsPuD9qZrMwoCccQIhAJAcuFiKLwJDGFZtTjB9MnTLORv2MTJYEzgBP2QW9YOBKogECMX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzFSplvCZFo3QDEU78q3ANBfwmU%2B4Lk03ghOFnhDjcsXREB3PKdKsVmUh%2Fkf0lFPbUMAHO%2FVJMb8nxeo8cCsO%2BRkxEE8sjBK0%2FcpeIkPgaIVTq4JlSn8aWVZDsDJm7sICMsm%2BsQJ6zPMduIWzHFi0ezAZc6r%2BSUR%2BykxobpDTRUl3Udgdusw%2F7VpmyyQ%2Fpo3CKYTbjMK8qdu73FtIk65yACmFt1W60AaQ9worIxKLQDCWcRnReiCLBZJrtPMX6DjJFsMkl1BwHsrg7EMsnAyhfSu5NgJXzCYUuZYVeQSDoj798JMlLZQNxsVoGolwVq7hZ98De1e5Hahz%2F1m%2FnLlA%2FZAC187pw5NzjiljTSy9q3mu%2FN1zfl4HVm3CpaZ3wYsRD2QoIKXIUFShvg8d6z0cqoCvkCBMx2IN93jwy3a1lSVcw69pyZumMxDm2hGwZh2cVGy3VsifI9xpEG%2BAbZYlhJyxbWvFwnO4uOZAHsBvihbV8%2F0xV%2Bo35fqGZKJyLHGsNuYphaY4p95kVGoP5ZRpNrDFTCQoq0cTSVa%2B%2FskaintvEUAqBTiFMPtuPy6SrtVVoSiEUmw%2BW7sTPA%2Fet1smTZ%2BzFO8TPOPgMrTd4CEYNkLTrCkyP0raTdnsIHT75SzBDZw211X7viyub97zCg2eW%2FBjqkARuUY7s7CdInkgP00BJ5MTDLURJInPsfSvmR2az3HC9DxGBwbJVroISyoMuay596yC7pMRcOyklW0thxDDAoaUnemOlEXNX5L4kub94SkYfBodVg1BCsNROqAgGI4vGP52m0weNmTTczvLJv8PP%2FGHUhaQGoyraMlAmDKPh7rrl06slUo1mA0h4NgcVVNXnh9e%2BzVKH0YgQv%2BVl2smhcn4higoZF&X-Amz-Signature=0538b488441622a4fa2e65b453b344f1e94155de5f0a88b88bfb38c2860dd741&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
