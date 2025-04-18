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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SI75KFX3%2F20250418%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250418T190155Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD93uXqC%2BhmzwgTT0UihkewdJL3LKLPKwfFURU9r%2Fa4%2BwIhAO08SMywM8sLH0aWOhv0ilJTjMap1DmDCCls%2FYPVHVKYKv8DCHsQABoMNjM3NDIzMTgzODA1IgwXBz3ybRMRaSFXcCQq3ANAx%2FnLsPmTjMa16JNljjG%2FTzOGNhPVAbABeYqJWYszNzO5Q82DW7gb2%2BamhOdBHQGSdLFy3qUqBiz8UyxZdcdTJ9fOn5MKx8hsioM8HTUKKdhUkukhgMY6vuW1s0bVGCBXXCPrP4sOPQ6sqPHwIaycFB7UHCoJTd1XDV7m2n1BksHMyfu%2F5x9PMaeFzAJY4O0AjlU%2BgbDEETwQLaJdDFCH7NkVzH%2Fnuoqqn1q29UavefWBZIZSmAYAQsNuMIN4F0NTAEmuHzTp4NYgz0tDP8whvAlwDZ8pS8xHtL6hLGgG3enXU8ZnRu0a0xuRAcfJvpKP0GBFZqwdK4cgKiYdRU9xkdOhVGgtWkf8U6vt5sxRXb3w1TymqESM7Eew001Qg0j%2BkNDWiY9HqL7jo8RFWf0U6jwGQXVuCXdtwzp1veww1KumWN3oTSxhvE8cnOQm4kupdxMlriHIIYwq%2B6VjvxOstCM9ufAcKKpxkSP4RjMYjgZxnHHwtVOmbNc9cC%2BvV%2BOMhgv19FuurwupYC2jROCPEEd8NeuS%2Fx5lWY3u6f0TFHERU5O8E7vyE4rjH1V2J%2FjX6XdvoAFOk6MSn8WyIYgdgYwYR70qcJbm2loXO72L0%2BzbxKxULoh3i0pQdjDcsIrABjqkAZR4%2F2IAEMDiogQ1NhhR0JGyM9eoldFAi0Cf4QumesB0DaVuAUHipHAWP%2FBmckusZrv1OpW5s6GSkQ5JJaxh2YDXCyqZB2uHrl%2BMTgMTmnyHB4IcZqI6KLal3DStj14N6vMy5jhvFM0ayisl9u6xm8mnv2GiMFtg5u%2BTY337anMs7SJdLRxrzRguE%2B%2BqTs0i%2FQNMDO2gR6FBny89QYon2p9gwPn%2F&X-Amz-Signature=a01853ea00bf6400a55883ef8e51c500fd7bdce30047e61efb74f99f85603a34&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
