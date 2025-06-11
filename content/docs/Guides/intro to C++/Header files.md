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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466622S3ELP%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T181217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAEaCXVzLXdlc3QtMiJIMEYCIQDX8zoaDHVZfNbQWvfc%2FoJ4ILDi6QnnMmyPSnwSA2BTigIhAMgcx7S2kEQ8Hb%2FlGLPsf9trNW5Ua5uVIRndRAgy0C6uKogECNr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx1ch%2B2lGyNwLAhUvoq3AMRs0Wje3oTscLl7iW5RdBfog%2FqIoBzM%2FxIU3knjilfvkAKfdDrjvVKQc9aM7OJTn1po%2FUtKYU5JDXdorwDopomRhjVieLfnbmFWRa4C2DwDnbi4WP6VRLjJaI8j2pZDDFhDvj16QNtVaXlmGCgC1yPiDU6NoLUZexY5AXLaR3RYWlNxC0kAOfECJ7mR9t0SEVugJmvfF3s118y1mUIPSnJtWnQ41VUmjjj7QqtXtyXzotlbbfBWjq%2FqvMHLSghnX857wVUiZhv930tglyUOMMKLwNiltYc6Y%2Fhbvjz9g6zl3ErduN2szXy4COVBVIZ2260S4MYFX69ebqO8WIZ2LMYglseQqWeO437URrtC%2BLe21Aqb3J9X4kKY61AWKyL5i%2Fxi15DtFR1UfCBJfSnzV6nyUfwgGuPT8QcdY0DBfqybh7wgqRyHKOObknkd7PgbyGurhfpRMguju5tHISNfTAxJQnQQi5LI%2Bxcim5C5eGCJ3D%2FwZ9id6Z4XBl2kMxSEWomIpsB2hr8xHlHPa%2FxrfI2%2FVbB1HlvSdc85tm45qp5K5fvgtFi0fPoGIfVQneuslZc%2FUetED%2Bnvmci%2FVMSpSycf3bw5QjD15W16pTiINdFrgNFF89Avr7T%2B98BYDDE56bCBjqkAf%2BxKOLrXwKshDU93ULbY%2F3kw2AI2iaZCulBsRRVkXb4k1wSVlSgkVvUQUqfRRZfxV%2BR%2Fjkxza%2Fo12BISKrcHggl7IV6TK46ejIAw688pXb8WbZzdynuRpnXoDMVK8E8y1D%2FqJ92FXk5eHSETI71rUfi4A4TM48ZffocyXQLAoMtZKalyJhsiG%2B7BE2CmE53aHr1MstSWzxSCPHxOqA%2Bx32wJvQ2&X-Amz-Signature=11f75814e6fd4ce8f2c4d1a0cc7f7b9e7fee07466c04585ba010db55fe9296bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
