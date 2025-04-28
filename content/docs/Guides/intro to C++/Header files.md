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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665X3H7PI2%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T041152Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCU%2B400XoAzxjz1y69coOalIDAXINTEvG0VUbG%2BXEa1bAIhAPW26l7rEv9URH0J2fqydIcJAd5mDfOTpiC8wNXf9%2Bj7Kv8DCGoQABoMNjM3NDIzMTgzODA1IgzNQwoQ8lrIegJByq0q3APq18Mp8yyu%2BMm0JCjS25tTkiYyVhatfMnkYmen5CvFjH6KoqYuDX9rb%2BjvWvZKCrzVjY%2BCfTJ4%2FoijX8U5dqOLHkX8npiZQ%2Fot%2FhWOtdJ1fwfMNnvDyyAEgcKLCDn59XwVAysNiF8aD7N5HwcG39gprJv17veqQhAaltOfn4WwwQkjWLYS633ms8l0TkbVYGvxDnnRtno4pQB4TCJCNKLebRE3xSYSMBAiG5hVFFiYLHbtLXyTcCNFwyU%2BA07%2B31SBJphQ%2FVOfCP1MhAyDSkxk1H3asw7YanJsjjcvyrHIWVm7moSz16prO%2BIGF2yp%2B6sShg%2FtDPjE25lxWtTnnB5rwVbbKi1eqiG5hQM5MjgWB6zt8rMmjV5we%2FGTysjdxLEubw6uq2GRF%2BBpNtOTqBgRLr6e0xBnaDE5HyV4HZ7ceRMASYk1xlPQsxC1KqrfY5AWAc5RpjJ3Iyz%2BUbl3sRxAYbShlyOVSb%2BSICVEgV9f6US%2BOUoQgb1%2B0lpNluL4OYrky9SPUj53MkUeIpvo0pxSQKsgh91MB%2FaeEBRX4YGRkS176PZnOsk9HGQdu23kbsVq2FQwx36%2FOCbFOUfFlRin7xJnYjooKUNKE1ibdZHbTOelBmQFLWI%2FxbZEYDCNo7vABjqkAZlbF78qlFbxkuHJeG48vsNCwEzmPmSYIsIUOvlbAzjBrNrjImaYNh0ztcFznEf5ksKoCDgDqNSyHh3lRM5H3JKOYQyU2MEyK8euf%2FUo1UqsyyIkmOm5kHHE1r%2BXfepKDGIa3KAKYS8A5riH1N2%2BlRHi1zKA%2BR7PS8x9%2FxF4v%2BjDuvErwDppD6JFwtpxRXzJThZAVXfFmirArIx34mv2%2FGRkEUSL&X-Amz-Signature=5750f52223af837bae83834f4093e2175b72ded68a088bbeb351004b80434ae5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
