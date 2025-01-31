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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665LWAMKGE%2F20250131%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250131T020640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICOYuit696EmM30vQPwcYWvZPYEigBjPFVlmH77cCTRyAiEA8Mz7yuUHwx0c0SeLkW%2BdvGKqT5f%2FdlJftN7EWec8WSUqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDt2Tlhm2P6But2NTSrcA8UiGxkgjqTLxY4DG1JofoaabgyZUVQIKdTLy4LGaKNmmSlALo9wztE67qMpoQvCqsEtzfzoIDGjjupc1z5o%2BZikDx3GjLIFThmWsvaojePRyNqPzjPtF5e6DglZhONF1ieTnWCzo2528valpD8Bwwi8or8iJTp8JJLmRniocMCpP0enRxQ0mXQk4Q%2FJwO1Lv%2FA5BqAtOJbWf6Ke%2Feum09xdMk6cQ6a%2B8Cj8M1qVncMecFnpp1R46pYC5Ov27ly9mvvSxqt7xcZGaxbM9OHsu8r3i8txY70cShLWkFoZbLpBofJCgyK0g5DHnkXt3J%2F%2FznRX3r0LWh%2BT0kJSViRv%2B2fws5Sw1VkmFS9MMB0w4mFCD4%2F78qu1y%2F7YUPpf7f0V2W552bWolGLW7YV0%2Bj%2FD02njuXhQX3UctWBQ0zwohFl8%2B%2B2H3aprzPv35QX6DSVGmfiAK%2BGbGaEHopmXxGyngjabl4cletsv0r9XixaGk4YYdp5xdJLy1YMHUL%2FV2PMt4Jv84ieVL92oPUNigORzqFe4CFXl7baFrl1HYfPFDZSckMBp6kIKgBeYPRU2yVEXRUJAZfFfJzX%2BQR8BtGmQLv4vFCH0627WrmCJvC5mSE%2BPTUhJsfG6YloP3sdPMPXR8LwGOqUBG88hdROCVH5%2BGkMDqQiSK1dh09Jv7m7A6bDZfaDeaQ3jPjS0fQnLMUOkcgxRYk3uRRYsxBIULEumbYxWCiLiGV2Ftzz0s6uTRVVo00fZUdZ77Tbs5MRSTPqWCdNz9PzW5Gn%2FZv%2Fo54ZOpfHY3S9uIPNPWJ6BpCmHC5VQP7CmMXxS54gVMqdWQlLMc4YzAIoeqDGSDUghuiXH%2FmV5BsJSFR%2B3Sx6K&X-Amz-Signature=dc38821e93e1bb08bfba1e9310bffa7b71c121b61e0c39632148c13838ad17f0&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
