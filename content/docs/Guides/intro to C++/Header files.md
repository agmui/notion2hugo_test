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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QZRL6VUJ%2F20250527%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250527T220806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfasxzKiLq8J59Kkej57QQyLOqpJwvUH4YTamk138GGAiEAqmv%2FVlLU2JJyaQyits5MDwHuq7xUU6F9dcv7MeJw9Z8q%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDLyHzpLc5hgdHCkgEyrcA34kqLyC5H9aru2Fe%2BERCHeI9OwjQ9UieIRwlZE2%2B2jmvKp7WVGj4q95ZyXHx2QqkfTJJcjIOJE1JL5GjpX0Rj6GwJPnURxCVh1Q6aJM9SQXwRD7HjRNmPVxJR3YUwBNDmdrTbf%2B3hByUbpqa%2FpJFUAhyF27GGGTjmIs0GtCgE9UumuSzXhK0NMM9Dr6M2QnsjhBc%2BjWVpippcP8uB2C1YSp1etKHlQ6IO5xvpX6zF5VsIaATZ6%2BmStaKapMWaj3zgA4DXs5NKK0z728UXVM5f3Ngf5xTvQWo7UMt%2Fm5UaOC%2FXRVkkJmsxdI5MknbhpnE3NSHXa4Iel23L6YYh8l7wB4wqgtQWNVFPS2fKAjNAjtQd5hGL0Xnk5VIIaVXf6a%2B3QPkpWg%2Ft%2BcQKrPhw7n6eHEIp4ryL2v6z2nL3LX9O8fJUYOHbJAC9cJM%2F48NkbJJcIqgS7imsoM2gax49vL15utG7zrTO6gGaMIwFl3yhPOi9KD9HEnzyjJQDZvJGg7DWYbfkfZgEa%2F4Ax12rKRyWS5oFwu3uAv8NVLvytY8b0P8LJnI3RsJv%2FkuV%2BWHqZ9mcncK4GoqIt9cE6mc4hhHnhhVgdoz8ySbOvFnGqMnvXNKFyJJbVI0l4yM4tlMM7J2MEGOqUBnqxEXZn72yMtAfITMpEONMGb9fphUUCEqcMhsKF7mAkFk5DkL0EDUd9uhv%2Bip5TtxH%2FwwMsM4cA62txkKKFE33H3HRqEp6UsFbz2K0PWIIq0XRVRpTPwUz2ZKyvfLU%2F1LCTyyF1I3harOPpDOy3iOTpQ8tqQV%2FDmZNeMtcAM%2FO5Lf%2B98boZAszW1K9tlzWwFbhY0Yb%2Boz9c5%2Ftd7TBMTHbpYXK6a&X-Amz-Signature=a965a61bc953a8fd3afff95f13b3584046bef2a936db339e6e0ca58b5e9298f8&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
