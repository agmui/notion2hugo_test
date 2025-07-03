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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T6J5QU52%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T034507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAMaCXVzLXdlc3QtMiJHMEUCIQCPfuVnnac%2BhrwMA4o%2FnVmEOt8Zb6ck%2B2nO0aCpZNSxpwIgEMcyTno7IhHaFxIgPmEhYJHROwbPNSGsfmrKmNg5he4qiAQI%2FP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDA7ZHpDfOckxsoONnCrcA3zBXjq7Q4NMMAg0IMnKyLaKXpyNlH4hEXf5gdSNhHpSONESrHiLTTHqfEWZ56g%2BE9P9AQD2XOJs%2BcoF%2FRvmnWjxg9NZgUJgPdGJuwxAD%2BfmaY252NtaiOB7Jp6khu%2FkTQPs5CTqiPOWIpaOD3qVDmb%2FChbbWuFbMkRO0XsBwkxXX3%2BXlfcGRk9VSBeAEADDB4z8zbyllQWbdDx01GQj5OOI8I8G6VDVJPv8yJ70vz7E86lvfpnR5WD2CYSo1KlAAOtb6MZl2kmA5CP%2BQnStxoI%2B0MchGTRwpWfvABISBG8gTsXbybRse6Nm4Wre42TqT9in5KSg8JL9Y6ow8%2Bp9p22bqLmc5JZGzTaFD3oqLjniPeDqAigqitBR5Wgd%2BnHUUQqmNry01m2ga%2BZdZSdP2e6r%2FdJNeCMcsoefvBdVR7squ%2FYsmTeIajKXsfyMuGyKkIxw2VyeHsN8m%2FlmPJ9NM5GBtPsjRF2lCqM2Jvx%2Bqvj6tv%2B8z94Ajet0WCvg3cb0NsY%2FFMDtTCUJjzUXEUBRf6RWeGTcqXgPWwBigkUnMx0ZINtGdkAlsuq7nmp2pfPlPHAwNAywxtxX%2B3%2F3XzUV2OVCQ4Dut9m80TuS8QGKyUaQ0ot59BZCP8epv84IMOvbl8MGOqUBWqOkBj%2F4oDRwdj2oF2M4nKccGpJdENaO1vhXyepwLe0p4n8wWyAg6pyZmShkwHg%2BouQ3VKIxNQJXhtgi9x3dbUury%2BSptCX1%2FCqN4Cs39QuefENnZbDwgKphlpugn5WrzIqYjun%2FT37f4gqRTkrMkAtA2aF%2FWlhsKzXnwWqCEkXxaT5X0lUVv9zHqT15xM5svT2WLL4nm2jrit8fToyh0VBGzSze&X-Amz-Signature=ae9ec4f7cc50e38415d6ee38ecfc10a692bc4200dcb29fe14f9587b7590e4020&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
