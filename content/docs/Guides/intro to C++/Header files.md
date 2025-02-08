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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QRLXXIZ%2F20250208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250208T121145Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDdrqq1M0pUrUwshjGyTiQmuyocVBEJmmTMGWGF3QLijQIgSZGAH2JWYPVZ5MnyX8ND%2FbQ8hajlAiaMrhUoSOghtq4qiAQIjf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKde4x%2B2tVU%2Fei9BASrcA497ul0GJpPZ2HKgAHcxRVlcbBbNhE2roTKmOZArD1doKO34xNgRKL%2Bhnxgy%2FvcN1SARXujpyptVdRdXRFVjp3H9lryVTaabaQFCbzAZjRzgGt6SjEuMHiGsK9tgzhbBOveI2pe4wyj5yHdQwxjBvHHnDhXdrr7DTBRzZ6vrgmt1cWemfGwI0xx%2BU%2FKZdlHG4KHnkoigb%2Bhrm%2B%2BN483gTZMx0HLt0g2kJz67DKVVhhQPegKWKFEW58muMe9lNT810IsLEXWTpV1761Si%2F7neBcEm0%2FwEhKOKsgZnfqdEJbYPC2vnV4FoqhzYLVsNpKJ%2Bn65Ufwv3mh8jVeu8gmUavEfIPWnJi0dOAHql31zdPiuNK0e%2BkoV3hhx%2FaM8SzauliUVjjmFaxCRNPicjitAXUkFVCsFOxlQu5u89A%2FxVlsE2qyzVpITAfw1iuebH6jt0rYbGO%2BUf%2BWu4yrBBU2e7zBZtN35vmCp%2FwGYonqID7B2J%2F7vcDhm3m%2BHS3Gq%2B1zsFC4pv66gRQCeic%2FmfyYndt313CwTXt%2FD3XFNJS25%2B3mBAblI8uTSaU%2B2V6%2Fn3YmPDCFPX2BQ141%2B0SUNZ7PVH657sVXE9a29cx76%2B7%2Ft7m4oYTHBlj5xT61viA8umMLaGnb0GOqUBPRrgoOYaTPt3yAjvziP68%2BCkbaDpjo5eQuTTGySIEiBLWSAb01vLh5sw35p%2FR4hF%2BK9tzbRmSNvN0mewLnLpHqm6%2Bauw6mBsmouAnM%2FfF7vTfIwjg1a1cF3iupperlfI%2F8v3ToJZ9FHcgLzlItnXTTY6CnuS8rY%2BNxMc2pUgcGIo6ESdtCzBKeOUr8GcGR6q1HnjwC%2BrVFxkg6xGzMOj%2FmGbSioD&X-Amz-Signature=8885e8749daef32648e5ac56ff2682a2fe2d32fe27b8a77785aada30ca435aa6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
