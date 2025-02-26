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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S3GMTLPP%2F20250226%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250226T031555Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBkaCXVzLXdlc3QtMiJHMEUCIQCpcm8aayDyjdx8qolxQ73YSB6p%2BE4CsUhq7seNH96hNwIgRAvHWX%2BtV5ITBj6gvS27ZkDxbOOUZ%2FhwQRsSAU7wlkUq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDMOqf4gIS%2BM5Dn08USrcA%2BMJ6zX7fS1gDIoFyj7q3eUQa1JIY8qnnJnIX2L6PQrkr1QrbWW66vgkB8W2%2FE0rxuwXnklNnH35Ul1igxLNqaEkSUP5ceM0kXP4lK6NzFT7gp9%2BIwtdIrUkph0ahFtAsjOX%2FIhAbpYfFTDjws%2FYW2DFkHHkLSYfq8sHPXB9iuALmhyI0%2FlykY8HCJTc7Oy9PH5OJB2xZORaQuB%2BtnHbXiaW4lzYEP8keXZee6AzgytYCXlbVFiROCKLy2Ey%2Bow2ngoRYLq2WfjSh%2BVFdvJV2m4YDvGJqH%2BjWS1nW9%2BR9BGs285f5SO%2Bjax5uQy7jRgA%2Fpz2IYYf7uoJx6D0OGF1pLJIILVau%2BNRAYl4PkblRc0ggpkxg6D7rvRXeroUqn%2BSUGVtUlbc%2FjNbKNXjFsNsgi3Y6OSpxzRF9xgiLyAf9QGPQEnlz%2FREICzPS3%2F97F6G0pLtiTSsNMQYolYaoOfZD%2FqYIpuxfXtF9PUvA16Iv8wMm7Dwi10QupiLVRTAoxS%2BMyokbX2%2BgyGuG5Ss0QPhGiL66%2BSLcd%2FPIWkg2BU8TwQbY3q68vW8IYwgGjVgXcuNTcS4i5mSuOxokFY%2FDvT01PCUZ8%2F9oHoDep7fH1SFKHeVHih8rHzuR9w8c3vjMOC8%2Bb0GOqUBezh4FK7UbdyPNjgZnhfLY%2FZFaRshzdMi2rhd1Jzl6Ar%2FrZNVX1jyEsn%2B4vLaLqyglU0xtD0686hyZmFGkk%2Fv8%2FkpaEbhOT2ZS60lzeXzuxqwinRoOTUXuFS%2BT%2FZbHvpNcfHVvtUYTaIk%2Fp1i36R6vsUxuz391odOY35Tx2HlmbkW4p2t44iRR4NmMP1FX4EP4GXSI1T2%2B6pqEqXZDCAFA7wZaUvr&X-Amz-Signature=3ed4461366c159ada888ad16eecfbfdfd00b522570da55ac7ac4b820b4cc1a10&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
