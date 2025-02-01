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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PXAL32Z%2F20250201%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250201T170153Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBgXAJRbqQZI05P9EmqfF6chYl0zOxpRodhZB2dqr2%2BHAiEAt9VxrE%2FY94xYB6037HH1AkKnBNms3nvSdpC0GbN0rm4qiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDJXsi%2BHeFRbB01lPCrcAx48%2F2WjqBFI%2Bu3o9mT3iTkggK6QnhA799ePNVbMUfUr40UMSTc5ZcaYv6kpcftbabPNnaW412ko920V9MnwWN4uM4r42gCB2Sag3QD1CHf5dJrzu21MPFIdUW6ZbkCcrBSbSoiNxA%2FvveJx7aQg0UwhX4b0%2FUayu9YdZMc8VknX5QdiWm6%2Byh8oRq6R1NyQldbBq0CaF%2BXp3dcsJ4RskXQUVJptKx8bKQzmb8uVKQhV3Nd0%2BHhZ9y1YOkZncnVr%2BT5CbWcYyRBsK3WWmA0mYo%2FNqw14GLzlA2odXWJx2TSO5%2FBksqFqbtn%2FECxCfTDl7G0MLnr8CJ28nxLNgfF7IW2%2Ff%2BVTUce0qsk0OoaAot0qK2Oc7vG%2FCLvtjyubanvkNEJhJSwNIBWmZAwAOepk%2FMCUOkRyYDHcVJgNobWD6fflBG0%2FQoxU8IQyGIyJ2z915B4QvND4lQLawhIoXvenvF2yGXWGh0jUv26eSJ5i%2FUMGe4yXCIpRDi6wRIyfYayLfr%2Bqf8GB2RI8gqCqgmCuFQyk6C29QQym2wQ36bajMPvnzvLzPqoKkGfx%2Bnk1MR7K5caaFamD%2BxN2S889HiwagGDYIJ9GiXgiJftNxIdCFyg2GEPPWAfihEAuX84KMJ%2FG%2BLwGOqUBzNAU4GmmRuhUJCiyZ%2BR4q%2F1ac6fj15MReg1CMF6opMV5n4a3ByxIAO4MIQIBZHemj%2FJYfr1n78fzGUTHob0FMXhmnLRK%2ByquzFpHFsobZVMnbNsPJ4gpopxKZrgQbD%2F6pseuEbtTuhXAnh%2FHMV2Tt6jQFouyqlWWM8jUyWslJifL7PWX0Fs%2FKHLkQhsmyZzZA6T4dZUZte%2BTvUXk1tP9EjAkDYr5&X-Amz-Signature=d3cb5123c579f0edf093026c7d9d621990ec1feb457d18a29798d9d0e7d84f9f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
