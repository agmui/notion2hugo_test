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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UGI7G3R%2F20250815%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250815T200957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBoaCXVzLXdlc3QtMiJHMEUCIFiAcxrJoBmx1RT%2Bq4KtbFXpNv9scdwCQXUABcrn%2BgMmAiEAmRU4Z%2BWF%2Bd%2BpRFxjRIeZ06mXu7ROCyzFuvug8BOhahsq%2FwMIYxAAGgw2Mzc0MjMxODM4MDUiDHZzfuYIB89wkcp9LCrcA4WYU74W6Y1W5H7A7U48DmRKDeMidYTnz4P5jaUJE52Hy1QMU%2FxMrfqQFOQRbugJs4NIXmLcS0gyZkUeHJwHBZTN4BAPgcIYTwYsSLAm4NDkERIjMNhj7UER0jbFA4vvGZbVxUFLcQOamSc2lDQ121uIMMtOKhOtEyPvH4WKyA1mlkQIowz%2FNI8t9CIoYs1QYXX2z5bkFh6YOHG7iY%2BwmgGwtoL2prgSmEZL3VeVefbyKUMgducUG%2F6y4LTFncy1KWTFfPiQUWZzrDCRC4aEdJeLrZhX%2FqjrJthUJOt5qeBMt%2Bg%2BOftaueHiPxcxKMrVOIgyW4%2BFP0GF5HBXcgVVGN3glKGYd6X2o5Yt0NhnV8JS%2BJnqPl4RUdodseL8bZDyt%2Bsi%2BSv7Sev1UB45TWHFOzCCy6oRbJ1R1phf9RFFkHl3n3KZL3d26FNdKxaNgDt3sPqmVlNVmchP%2B%2F8GeHmxDvN3Tzgx0mE%2FKV6BWXeewDvylJKxSr524DOLQooKn5VpA7r2g10M63%2B1rmSesMMU19fF9OTtSmmsXnPpMT0wBdNyl1xd%2FZ9FCsb6V1eaSmU3XgU%2BXpTluBLS64XU92T75%2BZVQXKzSy3%2F61m3SixqddfB4wIiyznnGPV7MFhtMJ%2Fb%2FcQGOqUBzfYiuAP8971eHX6h%2FB15eau8%2FXuA%2B%2B%2BFPqvISClc40osd7fAJEvpCarrwwzAHVgve7p%2BPeSDN%2FPkVGLU7CricxzInepKzCr%2ByJ1cmC39LeP9FuvSyRM3h5tUhCt%2Fj4JyphNEcZwDsW0TyJCgTret6Y7n14F3xVAgKUrFcnPw8rBG3ztuJBxVdwx09u9D4yR7UrAhLZizA0lxBrj4oXeMdY8aV597&X-Amz-Signature=6766b7277833acb7ba0709bf5b8d4406a0f4645e7d1d7a44e4b2e0b7c75b493e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
