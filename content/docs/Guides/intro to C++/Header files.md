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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662WIXQJWI%2F20250623%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250623T004615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBAaCXVzLXdlc3QtMiJHMEUCIHzd7QIlWq8whXvklWBw4SxuSrxzKyHySQ20R3NcwohNAiEA5KtBTjp97K6Nv%2FEE6T%2FRAL5WHwtZPQ3qN%2Bg%2Fe16rzo4qiAQI%2Bf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIHqUrkchWSJrYHOcyrcAzwi2S365mVTLmzP%2FxoHKai7%2FFGE%2FxkHncD9TRexhfj9xrbXzcMLhmnMeAqUrRGDFo5ObBzUEM1M%2BGrg49h152Ny5t2sS741bq286BYanpoZgVNsUG5dnK0pYBp6bZVlY%2B%2FnGb1YpXuoZm1usen%2Fbi9%2F%2FyCd4UVIJDWoD61LQC%2FjhSNRjt8IYCDlE3d2FkbyjkJUEyDYqXTDEG3tkqtkZjOX2rAZPjmyYMCe8lTJrAGV2NxWy6pphdy61Keny2p86vbfNwbLK%2Bw0ZvsqbbQMuz4XZx4Yip4OPVhNlqBChAJqbCarocnbi5H0rDwrs6qdPrO3t4230%2BpDnw%2F8I4JTX69XxtBlwkfD8G0CwWyBIHGlzO2XIELZYxIXshIqsCO0HTv23JATBY8go18gUt0DogpZrM4P%2BScmcUKNsNyD4wXD5C1yU%2BemSGFreieTPO%2B4zFlOLXC3pHRVnV%2FkGf0vBAg6xXNz1Ju1Uz4VNNu4BjVzKllwidMVPc%2B5y%2FFqsBwLOVdjF8TkuQvjnRltVVLrUfX5J3hcexPCwZ%2BtVEKl3gu1jjjoRZCYZ5IFHUCVmXI6dEM1ZzFytrTgeMALz4IIz9oOxr7q36l3XnlU1SRAyfDZNaNjKe2%2F7LfwqbHdML6z4sIGOqUB8c7tTASYtrFgh6G86SJjT5FGUzuvePi7kG082xNl2Rr5hrSlXG%2FKQSszLyvP3jMekNbNFjCkejXyJO9lSmFOxFSQN4FWFlEEyjhiS%2FLczb2w8SYoH8gFVMlFPbGn0KTpHGPsB2JBI5PDrq1D4z3sxYCpgHZr%2B1UQbHnnF8722Qo2dq4vf5okDbsWiA%2BC0iQsZJ9NLmCMGfbeMz29QPQqjH2uhrt4&X-Amz-Signature=ec8d42096a7846a266f8d3c9604527274fbdbbd17c7dda14779fa6feabb1bf78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
