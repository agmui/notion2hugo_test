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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RRF4NOBL%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T210825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGUaCXVzLXdlc3QtMiJIMEYCIQDHGaDYqoq47viwpn4Es%2FkFgejWdxIAAGLg7LEZmwKrigIhAOIBsuTBR%2Bz7YU3nyXlMHQul2Mdep5Kh5ewyjQS%2BjAfaKv8DCH0QABoMNjM3NDIzMTgzODA1IgzGEBFo%2Bnn5OY5%2Bgtkq3AMSaMy%2B6ngP8v9QkCXl%2FFyYVyG5k6NJRvPNfXBidQlZAT9aDQY0ta8WxjUrztWTweX383wGtbbz2pAo%2Fdrp2jS0Y7S%2BfpICioh5SWhmqhZx8c60oxylynQ1WEgTYs%2FL%2Bd8daEgqk1nEZYrImHNa%2B0iVh1kaIu3en9tpDsUaa51Vcs1M417qPVYnYZJK1TUJyQdFgro2aLlwFnz3t4%2Fo0aQ3obbq8WPm7Ci9p%2Fjp695JGR5bVRE7yQn9bUAr0W5ZuTqJfvx2%2BrfrA7taatX%2B%2B1Eq4xxR7mFw%2FRYYvOhw9x1gxeTDIFoGz%2BLkhI5i6Fej6dJsriaS8pm41OoPH8GJ%2BTInNqNRUZB1444HGp%2BtQW%2Fyi9WYmvqMnKj%2FkIImv4uylQkcI7cSEUxyyNNYsLH8lKtRx11XqkdQG0BRPUCiMawaLpwqKi0rsBFiQsWJABwB2v6MlR4U2YdhKCA8YNqXGXgrt7TbyyL8tQWFEwu0M7fRRzDxfg0OM4kus1gFPAYUPVGMUZMTZNkTWN72KKfh218oFDJqC2TCt6jbyJiz4bHdECOag7fYPGylVCe4WWcXXFL2ievEOfMXc1RoU1z%2BCOv3lyknAdQIvexd%2Bfwmoyo5HXGdh3sEvyiQVjnr6jCMuOXDBjqkASZ1k0LUeCX4%2BKBzubH%2Bz50BgLfIim6EiVX0%2B4JpnzzKMaOfgu7L1TCtemxGydYmvgt6EsbQA4JA0M8ugeOH9JULRQA6ANwidWxj9eAIP0ltr4lm84Cig00Q2AO5VmOKZWyJfYbGE9%2FCFkSzT9t4NcllypmB5efNzE0x5BboIfxSxEWH86yYOoKwBTCfpyvAAf7%2BvyONQPgLm8H8HLUQlpXZ8fz2&X-Amz-Signature=0e3af5b8dc95e7ed3bc9ab2d8936155e8d59b43abcf187e5764779ba8f260ad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
