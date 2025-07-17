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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QCG3O722%2F20250717%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250717T042745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJIMEYCIQDzk9WW6GahFpOBgPBIR7N0K3SbvbF0VnKdljHFe1kGxAIhANCG4DmPIuOmeZK96w%2FuDqL6AbELh6xIdFM%2BI5%2BLRG%2F0Kv8DCG0QABoMNjM3NDIzMTgzODA1IgzOXnLIg1bo9cLBgj0q3AMIDXBX3jB1HuhBXGgdBjybIieMwQR4S%2Fa5D5JtasLiIIoL0UwCmSQY466By4j0Ys7H49O9onF%2FG5p96d4jDhZpJZdAmylBu4GAESl7%2BxhEuCsdrQ6570xwKvO17HC8VHRsR%2F5DYf%2BAb4mYG9sdbowAnqywe8XfpaLC%2F2jbVbWlHqsoruJziJ028w0YIWq8PO1uXFKv6famShfzfMenkUILRqcPR30Tu2lLv984WDCfQm%2B9udoQoscGky%2FAMEeASd3FoED5Hp2AYZ1puhY2Kz1WmCVlO40L1zjuPdfiPVGj%2FVRJUn3xXmmgE3AI5pjaq5YLxjocKXPJvex7aJkuFNv1OUbPlGzkiTlnN6y1emilWeAsYH9vDQyOG1F40Dgb%2F5XZ9ptBsQm3fNODcGICw2H%2Fi7zBAxtekxfynNbGb9jsQSAtvNHxh7%2F7IoZVjv2jo2Hk7votXLCV0KSeK9efwJELBXTAANFMYe3bvhU2e2081Pb90TBSDvUpfSoRajWgZmCEMQYBY1c9Kk9QDyoHn7itLLSASyWMe5Ks%2BPSS7bDbNy%2FRmRqXgrBdDsvJumSv9byfPtZZyRCcOqQmcf%2FAvh0oWeu0U1ravzZTV1VXB22x05xI7AHFhm6737L7xjCo7uHDBjqkAWbu7U1fLL5b5VZYQvqkJ7VUlbaoXlU7ysUZ8Ts6YqOKu4VH8nZ%2BtEAurGYuQTxmavPYR%2FRag%2B4LKliirJVHoXXJV%2BTemaNCV6jQKc0qSLPKYE2eTg8pp1fMSgYi1oa8UTQDGrevd%2FwmiFuAGsb2mEpevzvF6FP6aZXcryAqGCfkFpwVzXlt%2BQJ0BW1wuExXrF5bt62wpr%2F2x8xLc2zNkEnrgDZa&X-Amz-Signature=cca145bb81e1ed365a169848b954283cf1231005492f6e53a80c9fa04ca79a14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
