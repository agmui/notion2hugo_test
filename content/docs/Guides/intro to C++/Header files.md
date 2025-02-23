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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XCJUVJCM%2F20250223%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250223T100703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE66U9BWbcIwINAeKTsnjYU9%2F%2BByyhM3iYabpyYrtAhYAiEA7aB4qHcqPn%2BkcpL%2Bn89pjJ%2FHfgjTSdPrKhixoCDnsskq%2FwMIEhAAGgw2Mzc0MjMxODM4MDUiDDuwCqq47F1Fnl8saircA8MeNDEspV98RaCRzQ7XFgOQHIEKDz65OehmKBFM2V3iiI5VYqmrHxnu6IfttRssursZjLw7fCK0FppgWLk%2Fx0lqkxC%2BzrXUoHPheIcLZIXB5VQ9KZyvJeTMalx17wL9l8analSY93afCLra39mx5YBq%2B%2BSNeKo28Jy9zRONuq1kR223gtPxQAXqpJvTO4Ekv5uBewBkh3EVRQRAZBbc7NIZkgUDhW81RAvuHNoYPw757rnOBSNmjdzVdIKz%2Fr8WJKpPG5HBLbJw9eb8cj6imMxRXC%2FpWd%2BCgEPkZqJB5wCmcgHSxXY1qy31pOj%2FGszclR85cELQRZztietcZCDhypm6XO6O2mBk6YH99hHuwZFc7dl8V3ibPCmzMMQVxtpkfv63LYaPCEVaVT3ng0BGZFtz3BjCCvpInV318PG3w2kaHkyszoqTFG%2FqOFZGtPZsGeL5S2mx1aCW3kM6QJ7Hf8eBRLf67Y2wpkSHMZl2zVNTyRQyst3cqnTRn9zxo%2BKJ37%2F8p0qhFBpSJFqcsu9OcxDAg9J43mN4ef%2F%2FxyGOXgl5VecsWhSolYh3J7swkSOclbO7uMX%2Fd1mvc6vyZKYXieJ4F7Hc5oauVvkpH5VmhCArtE8pD9N0IAOOM%2BfEMMzM670GOqUBP4tjpuC4bvHFqgJSYKQNdcw%2BlzOILzEvYomWVuc9E4DgSXZI1dgTSRQQA7i7SoVvfTBRXAa7mRvPmm0pOh8RIYVGgFYuf%2FjNuPOIXtxGPdF5ySlyrVcxeqbEmu1xVCnZzL78MejgIXrLp0Rpk0kJxFaW6vRhLQILleiclNRu9MDAYwtq0C1pmGcZB%2BDg9%2FMBLncZzj64wDpKgtC%2BpZKkiQSnmlhb&X-Amz-Signature=8b27af8ba878dc04e4a979cc4729bb76abefe94e0b63e7f3533fbd24532b40fb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
