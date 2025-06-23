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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDOTLHF5%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T110826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBYaCXVzLXdlc3QtMiJHMEUCIQDSV5JNAQ1rPI1FXM3NeVnP028eI6dYEt50cnxhpaIfIQIgQNqRZeicez1OUrrapGd3krWRGytoX29lbI3%2BQvV1kf0qiAQI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ7wyFQZ6r90rcH4DCrcA7GOg8y6nEMO1NvcqfoIaXh3i6RB8on183%2BVIXikhqQillqmi46gnUU0mOtSb%2FpBZevtBTSNMNci65Co4XbOgjuO%2F9bHXM71Rinc3xIFwIOdbLtFPKU46G2UWpkFD3xtXaN9aQbLjT4E2qDfdLNs68o%2BJC%2FP1DDOLVOTRnIzL11t1cmsEowFKcIWd8QvPG%2F8IdGubDXaEcTPgG8haTAJr4UoVqhgkY53plxoW6a4IwB6a4seiiIFH9uRFSf1mY8dxaeCypLD6k72IOd%2B3S4QxPh7l5g24rkK9A%2F9ysVXb7f6AIZUCq4KuGD%2BT5BfyUkxat%2FVBfgwBqvovDJyw2qKwYn5u4%2F9J8t6RkIii%2FtGAvq7IUGOOJzPnH%2Fa9b9EFXhmPqGX5xuUAarSKH56mplZMQqLLKFPH%2BKfsd0Otk8Lgncx4KVlZ0tDB%2F53IR%2BgpoZvR27M3%2BrEJ0kVGd4edxvqVn5AA84fgFtJ7t7LNm%2B6%2BwlXtJaS5TUCzwczDssjNBxApdr6hUw%2FMYYNgMFJm5LFpI5td%2BaEw0yrFMQCTQy7C4cOiuB150fKLg%2BpXw9iz7fDIxKcHnBEHPx6tk1qtWlJoLJe12B2NsD34nwYjxkHqHv8Oat405sEJtoe8gq8MJrY48IGOqUBmopi9ogQu7EeOrn9z07k%2Bs6dMBLeVG%2FYG%2F8MajoRz%2BC%2FUbyatV1ATnKVpTi6aw3GY8166m2ABZFkeJjzxYEValajkfKW5zaurGOU4kH0PC9n9xaocrz%2B2%2FQ1uxa0qRxi%2FAmYtMXR%2BJDH9M4SorYwz98SjDINbQRGGWnirde%2Fh12TL2ZgbA4HeGlcRpPG4ZfMjbC07%2Bnr%2FRyewhWslvskgq5SPzbI&X-Amz-Signature=58a4dbe8d50d122ae92e5155cb8dba17bd468dd9f705c5980a9d7ea1ce023a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
