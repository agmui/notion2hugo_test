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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CNMICJL%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T181143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECoaCXVzLXdlc3QtMiJIMEYCIQC8kE9uIjXj2WwVu7YnSlzYhxOZ6%2BqGNgQFhFDIZ808bwIhAInGZXIRasjPScxjBcKZLYPH5FO9sRc%2B4wzvnKBc4p37KogECML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyhDS4u9m%2FLcz2LUZUq3AO3UdaPppYy16i4ezz67ey60h6p2U21VloHGNIgLVvQ6Yj4Vuy8aAxUJj7Tfww98PKhASf7jEwtAyYctrKkJ%2BW13MGyhJuD4I3KSmWS4E2ouZBx95qb15UqF4t0ndeVivCrGLBWbz2bJm1SDCN2AQkNKFEgjg5CCoobcMG7D112fFeaJr3gi6plZRN2wNgTFa072dP4BP%2FIAQAKY%2FuaC5gyIOPHH2eSEBeK%2Ft7BIqWgjnbbhF7KSqfHmZXd3RpzJrMIaoE2Orof0hykzv42XRRdreJYCK1cb%2BozNeQqg0rmyxmxJIOvDjuFG0Sf1IE7mIl8S4a2lZwVpjdjPIHfoPs8y4vYm121rMdfn5QD%2BAVjREAwO%2BVM6J0G6MUsMDZy8ep3f%2FY2d3IW6DSBbmkIgPmdqhnWPYI2nfDsiuP4TuAndmmu%2BUhOPE%2FtC19pxu1wdcR01J7OvozIUjooPGQxrA%2BBGLgok8limrQopas%2FmyP36sH81zWi5dxt06TGAAGob6XqrXKA80HtOTtjsV8KRJEEs7muYyGbBCFZjCEIh9WD7gBaT05RCxQPIo1I%2B7xb%2BGb2NSh8OYQuMkbRnsYlpUrv7F%2BM1NLBbXg5gMvz5%2BqaOzgmDyLR3uGsdzfehTDQ2c7ABjqkAS10ihmU0GDDvuigew4UR%2F4s5X2f1KtXX3ADlaxlg%2BtXfX2IXPUX0QhrlXIiOZq9AmmPjv2aLFOn1ia9xYQFN71GzszMR%2FOtWQL22nlQ40aGsVHtwH%2Bhb%2Fuj9EA0GeoIB%2FgKxgWA7DL7tAtYI9mW3o6ReIY2vHHlGQg4pvzmAOj8ngpi%2Fa08hGWck%2BrBRa8ZWPUXYhv2qW361hbveO%2FX0%2Fx2xS4Z&X-Amz-Signature=07fd0b9fb6d5c9c7ddc30b1dafc063ae57d1427907e5e27ede14f6cd385e0084&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
