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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U46T6Y6S%2F20250221%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250221T140132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwcdkvYPljmy2tYjA5XTw3raOsU5BfBbpWTa2mQoa7fQIgN%2Fm%2FhIiQoNqUZJOFNkdU4hOreqK45jlvFjDurLLxP3IqiAQI1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCv1%2B%2B%2B0oVdJMFkOAircA2sYS3D47kM1IYUSq930UR919sKtnz3WpAUeqMDUVkGYOVDiw9SBJIgD9VBg7OhF0CUUuAnV4Khv9RlxVomf%2FAYDw7etnn2Ps3dnMgj0RNo8409AX2oPVMU7wswBEx1GsN9vx7a45LGzmG0uPaWbPInJi3JXyjFYeokeS2WN%2FGKgEG1C6xqviRWzNm3H23QPjKdlKAfAFhlTQcufE1mXSnEKn4qDjbuvaGUj9WWBNxpPHxxWk6SP8P3Hj4ypBjIIJyqGOfb6PE4Cy92DeX3l0l6Pi8TVAuUl2WfkuTkZpIVMj08RVVGI6xyoejF1i5tv6yxzLEBCvOJv2nIAc%2FaWZ3oSsl3Dvc2v2CtYcaiAylz356o5QzsTTYm49PhMvIIPiDh%2FQlA7PCqTJMQzdBjrI5vLVHBc2l8qotPzYK5zdiT6KFI7as4LJA2nBNq0b5aUYsG5zBgRpW6Qqh%2BHMfF33Q3OLXkf%2Ff8YiiO3n%2FcE55fEJGTOJ%2F4qzQZprVvVpK0fX2RDg%2FClKCJd1UZ0mEawfnNBXUd2pa4sioT37JiaL7CcZgQ0JLNMVAWSNSCIGPGWTeRe5w6U%2Bnyq%2BAwes74zamZ6UBceAWbidR%2B%2Bsmy1zWgpebm8v%2F1zxKxaFUIQMKuD4r0GOqUBQZHsFsUHAmHTilorJ3462JQp%2FXXhscTeKT7zaihT057J0bjVp%2FZ7zyhZRhFRlLnOq30bBNjOjBK1Ctl678nXrVkobqkxDDq%2FSh1naCye%2FkjvvvI6ptPnx3%2F3uwBURShcNlJscOJbpP42vzyLPukQZHDYcMTuncKJJWqn0sAZJk0j7Ak0EfmigiMbz7d6lENsw5b651G5FeulgZi70Yx%2BfWVCf6Mi&X-Amz-Signature=5aa5ad70f431951cab1636e76914db6623a544835b28e6a8dc5290d4dc8dca86&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
