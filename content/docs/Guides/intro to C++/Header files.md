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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NNOUSL5%2F20250510%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250510T050814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC12GzGu5nlz1%2FZdd7mqArsy%2FxLGTtwjKcX5apSnQM6DQIgW7W6IRrnBBrdeNlV0Enoi35d6N5vjae1fBkU7jv07RMqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ4cM%2BVMbRqy2bwH3ircA6yMaYOVfvDnqJhiD2nczausmpDy1DkTWJqbqvFZJQn7lFu70iWzg2c6DUx%2F0jkeRyBOsRuV%2BMZ3OOisXoLNo9nXzUNA5v3MkrKfH5E56rIkZlc5om8nE9HsPP4KX8pI4lnKg%2Bl7Zq%2B0zi8MkdEUi50Nk65QezaK8IjWGeDpJJPo8nbwVRHHYcJT2hcxF0NV6P1j5pESRZCuGpGo5e92xIv9FN6fJV4sUci8WfHfJEX4kuIVMz4ckODauSjFjhpYIk%2FCPrhzVVsPmx1tSKMRFnci1SSXrvA%2BK8T5jhhEqM9kSutNg5p4faYqcwWhfxnUujbJ%2Fusr5SBgSnU5Rni0S3Jp3Y8boW4EFt6YpkevleS86O7HxrwQwMrK1T1DHIMDnZUjz%2BhlBvMEOCNj95Kh2q7Mtl%2F5oO%2BZb8pk6xU9sEdlABoh4Kcc6fBmD%2Fv3UE0bxTVA1wkS%2B0Fdm6LUDFDF4SUfLXcLODA6K8T9mtx74oL%2FQ%2FwFJ5fpONMy8MhAy6AGnnV0hdK6zmLKDD0nYoYU2WZe8MAFEyBB7A8OKnawtJRkso9A%2BgmXJdaDMYC9Hnh8jVmJt3gTl%2BpM0RsstcfQOQ%2BazOXIzSeSQYLhprBoIB6Fo%2FFFuEns8JYaCMhPMIm7%2B8AGOqUBouJ4P0LMYuKTsgFgBoTiNtZ4fjqL9T6kS6ZpSL7CTfAOH64gRC9rSl77wA%2BS%2FBHrzIz7dD60FUYDTIeTtPzhKDtVprmMqT1NMFmNbiVG0%2FX%2FYgWwn4%2BaKsuE43NIXxFwGHZwXCZy8OuFpa0OFUUACUHbdZF3uZgyuhT6vvEFMfgNmf7rHjrG%2Fq6GFRpUqa8odZh4AGF1znp09CTxyM8Qhx%2BOO5ll&X-Amz-Signature=9639855eb34dbe4600f10dff9f487a84659b40513c5c0b4fe98c36d83b7eb24a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
