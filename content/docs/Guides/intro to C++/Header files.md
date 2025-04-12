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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662U7CL3N5%2F20250412%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250412T070726Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFcaCXVzLXdlc3QtMiJHMEUCIQDpZaFoZWWed5zHQ4ZTvnx4yZ7OX1FtGr%2BV0RalAnJHFwIgM9Wv%2Bw6mjfnEJCW9ZiZfYmxa194ytVwXH%2BOsWQ%2FZ21EqiAQIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPlcxTTDAfGWbxIGfCrcA1n%2Bldgw1xDn%2F1T%2BHLDD5YOKVDOrliA%2Bez%2BBLS8JWBXtpc08yzgOAbDwzIbcd3yzHusWWik60vPnGGf9RC4UVxbv%2BHSLSL4HM9WUQ1pkX%2FBITujb9vQElbNOOiF%2FSo5H8PHweF1wy7bW7BdX%2Bk7F0Q70st5lcn8dTvcb%2BaIR%2BFZixt6JfXnGs851kgiqo2x1y2n5bMQ9HYq%2FtR69qNJiL1yGnvithe4mHyR1yci2AIq7mHjfJPHKRy7rdipLE8SidJoTamaJzIaB9eP%2BhJZAV3dUA8wnci8H2LL%2BSqMq3nUhrzMu%2FKTCcwNTEbi2cot0d3GhU6sTObZ1kwG85UAxhBfAh3DlRh3CwetXNkB%2BN%2FFRAeS4Lz0faFmpPk2SFDYsKEAddHZn8%2Bj2YvdVaP9wJchIHIiQupxH0zim0UTbBuKSH1UzGF2%2Bz4RndylZMacCrE%2FU2%2FcyDCnow%2Ftm2x%2BI6JQqRDhEdHKedO8MA4ZSLm30i2LVz8%2BNWcvhLafdoeQE4e07nBt7tcv2PNCdqkE22Iy7BXxkngrGN3puKFsGlGrcubRBOQaG9i1L255e2lSC0bJ41xZ%2FX5xyWyrM2KmmOcB9vz9GjUo%2F%2Fr%2FEzrQm3cakNOUU0UImBHljJJR2MLmN6L8GOqUBSOW6YjC2l4r0VLcQKzBElj23lhUSVLAYBmbIQ75dBYHYonKOkJvxrY46hUTko9FsDgl4%2B0Pp%2FkjEFVXSjpmgA%2FM0FHArCmMkwjptdER%2BfT3097qvNW50fX%2BOz7NcXqgRIndebmZ0qtc%2BE0Mj%2Fu6bVu%2F9XCdvHqQl3mxBj6Ufj9wnQkIvw%2FbFMyNKZJemWe%2B9ChgOBBGxGdrnlilRnWHQ2LAWAy4U&X-Amz-Signature=b65c5fdfaec88cb3a348e8cd6a004986758463caf583ab2f4869ea4237dc677b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
