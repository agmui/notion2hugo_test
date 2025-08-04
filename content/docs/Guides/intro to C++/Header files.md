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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632Y2MNDQ%2F20250804%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250804T171522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBEaCXVzLXdlc3QtMiJHMEUCIQChH%2Fug07Qy2c2IN5FRgYO%2FzjPYV1F28sEYkDkhBBIp3AIgIOtWSshiDo0%2BBskINkhygEASzqGQDr8Nmio%2FUJJO40Mq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDFjWNJzeulVl3092ECrcA72wTZS7dbmutHJP6oEcGm9vEVJpytbLlqaF1jwrWPfwakp5fcDfiI82lj79D4p3oV5FXZ2DRxA37M9AH62kIy8tYLS14%2B3EmPpnjDzBfYTeEh7M9aZlwkr%2Bl%2B7fBviwrvJYG3GnXgLRvD2ZoyWWYdT%2BbeyionB2p6E%2BHQQFNne6nJodKiV%2Bh0h7kiNh5VKL5gIfQfW53D4eoOcedaoVy2d12li8CSJMdJhwFhw0B98G9EfD8c1bw%2FcSnnQdMsvx56N%2Bs25g4cayPrkbOiSN480YW10wb31uWelRb0AiQEt8nYXRX9bzSE7a9c5yAcQznLc%2FQcYyxPo9TONaShV4NSmU7pXa6VT%2F0%2B%2FpsBySMqerB9XXpbzWsomtlkOn3uSkpLQg%2BoUvnvVMIXwW8qV73vn6x9gs118PxgihOA0P2KoTkZexOAekgU3gPe3NDX9ddQQ%2Bt4165oWAj2pNz8z7XjDwPMRTcpAaYCU3iP8B%2Ba7dqWxkfL2EMRYuA78pEdM2j1My2ZT1R%2Fkc74gghc4tzjOGtWEawrAPhGE9UH3MrY6wtn%2FXXJ3DZqrAYSr0jXYVo%2BfUn%2FexzyPpy9dRvitKF8wK1pkrsrczBGt3w4G3zqZQFG5Si7oVAVJUAPQqMMXOw8QGOqUBX82WaTmAzhqZ8Vrv4Eg8trcm98Y6tB3mpWCczMYaJ6WkgNVkWIUyROQ712bh3WvQntQ2zhYp%2BC2bV70IFcM4tDJfiZ5bD7L5YQAOm8EsSYlhmKmV0667neLXI47aJJ7LFecsSbA3jmLUn4tjCdNOOoCciPU0XQOopndgXXwxmxWXGnlmckZGFo7kQ3msX74kjtN8ifHtpM13nS9HfNL9Oz58VP7w&X-Amz-Signature=678a648a808e0fca640eb2fc2032553b4ee8065508507187fd54d4e9ca4ed867&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
