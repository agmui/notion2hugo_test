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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JFH252O%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T200823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDehhLKiSpDnnEiQHFZQRmhw8lTU0ZsR8M4%2FM%2BL3wrghQIhAP%2BqJAXnv%2BnqMuVe1Psedl%2FFFKQttUPEoqubBONfAJEwKv8DCHwQABoMNjM3NDIzMTgzODA1IgyIz2b3YiMbvNTtfHwq3AMlMYPPcbLI2Hq5baN2Nq%2FUrnyko5beVYCLmGEA4N9r8rkNII%2FVlHYrxbJQdLEdCNpiTb0lFh5yCq%2BzM8FaK7XzgEUdNcSL39A8v02GSgQwEqgGQ%2FQ2iuLt12Dc4oll8Jwt8%2Bupbc%2B34c1sF%2F4I2dyrmUokcOzKtUCXKKzOiqjGhWoz6nrkP0SXYQwkLs7znuunXvbmk5PLpBNATmpLunH5SPgYHpTr2X6kLySpH5%2Fnfa3eExHefpVesYvIfuBs%2Bl7HRt9Dm5HlCfJJb83698TVv39GY9fnCquFQX%2FziC3NKuoNa6%2BMedgYB5pBBdsJe73fQ5u%2F4rH7roTlJNz9j0idNmjr%2BP63z8YyzGTEfYOV0ISIPYsTmvSg1ofEapqYT8Jmzkh5kKZmyW%2BzvcM2JkT1ymRYnGeKd%2BdSSlDTkfusbixj8%2FHJwS2dHAIa9XfGE9lrzoUF4HTQnYquY%2FhU5nofke5LxrbYePOWSvJ9f6NdaYvJTTeEbMawsodHkVyrSRnqfdNaJ7ETiIgyOIoz64TKWB%2BHzStN5K34ZVPeAJhR01mZJuYsxqodws0ZCFJ%2FKJkurfOz2jnh4P4b1Tvh8Yhpd2UG6H3QzQjudpeuATiGB9hwyq4WfBdN8475vDDglZLCBjqkAfaV1OpuT2Y0edNkhMtnasuUb6wtzBoUIB3EYv%2FQCgbSt724Fd3RaBQfm%2BTZN8zrpko3MwlIw8PutnrqpRsAqydHdgzfW3joRTju9T3p4HJ9j8GoiSlrOiePdjiQZXWJK66COejj8ZJQ6WeaVLLCSMRg7axhzB%2Fwp7NrQGb0m7BYeePKV58rhZBzlv%2FLxDtmvCVWuoZ%2Fllf44b4MPy6FZ5gxbqHT&X-Amz-Signature=1dd4bb0b50d1998970b8dc1004b7bfaae3138ba3d1836af207755ea9f8c83834&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
