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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667BN3IL44%2F20250212%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250212T100820Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVSgnGlWyNZv13bcZpQfQ%2Be7DzZEL56tN9Q7rrf%2Frf%2BQIhAOUYaTjLlOPmrH5Nt49B4h84N%2FW4ORbnRegKhGRMLkgGKogECOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzMSh2X6i1ty5z7xxIq3AO%2Bl3Owy5%2FXsPsSU6gB%2F8lne%2B9coy5uuS95hsvgfF88mLFoOH%2B8gWkmY24zfEsQQ8sG%2FU9QpAK8qLlsoJWFCuIb4Rhueu2dnLrcUknRxF6AERzOnWcMighhDQVdZM6oT87u9y67FQxrVtWmx4I8zkVjTmPygyPxRiaIUrKZxJHxHHzW4ljFzd8lCZTfV39PkurhXIPaJmWF%2BDCd4hxzekQ78nSoD%2FVAKm1ewBBgc6X2SbjCT2XUu4LLwISUsBM3vxV5wBpK75cGjoASvwdkDpiSZ347It1ZXjLOXtfu2taA%2Bl6lCVM5hHAK1lHoF2FLQeZzi1ZRMIhLJhMMKlHKMrVBwj1j0uwghU4Gnq1iQbSVRCds1U4x4GHxrAsaAz9qmueEPJ%2BrEmiU75Gu2dS2zGINREB2KEeAqeDH7OQarXZhHjR%2BZI8CswNudxhxZydGzyfeMIXfqxxrh%2FenvzxYlQ6OFqD1j1U06StInLvcI2BVyeL%2FfYN7sG8R2p5M2Ha6J0agh4A184ffffKIYu3C%2BFRRf5WRmgu7JezoEfuts4E9uo5yGminD5Fvv2i%2FQ33dXEsy%2Fo6anTXXYZToUyHitz26T%2FmaQmAGownlg4Gp%2F406u3p0zRqzhccDRcHO1DDFiLG9BjqkAbLv1zPQZRM8g9i5EDJX%2B%2FHqlV%2BehCAJuRh1qtgG7y8YfOMH1gDdUztQuJu%2BNmIh%2FDXwB%2FaiLhsJ2cohtbKhlihg%2FWDkfxyIwdskpTcmlcy8HgJfBpx9em4og2P9m2ONb9xcp7kNvbHJvEhy%2Ft230dt%2F7Q3qize9k%2BHUcJ0vzxYKW5jkqJbaZT0it7Mg1Re35l4VYBsMKehs%2FTIPcfduSDIUv0Tw&X-Amz-Signature=71c5dac1a6874b125196a736405c3a9113f13759b75ca885ef6d23fe6fe25a8a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
