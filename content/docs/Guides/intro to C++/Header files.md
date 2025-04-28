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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W5CN7444%2F20250428%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250428T051246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF42eUzruMrwjH6QsrYEhbQU6mEmR3yKci36HAjDm8QXAiEAtYSjcRxirKUiPHij8iCQpogghg%2BQBLvmTQKvx0i%2BVxgq%2FwMIbhAAGgw2Mzc0MjMxODM4MDUiDKZNPXdgevOtegx9CSrcA53jR2XwL9K2QJFaH74yv75GS%2BCYPYYSxhgdQe%2FGFkQYhKhnjGD4TbnPyL7wFPLEz8rssxNeoUsiQLDn6sJCpRnEafRftZFLAedzulj2F2k%2BYtyOwETzVd3fqMcuCJhIKbazADPLmZp4aTIwxTzwJSDs104CFMQgvgVJVkpikGjcIcwZgWAODh8Ur9puEEiBmUxu1QHyKcn9LsJIlEfIMtLk0WsixJaWtpZwR8PDyTRRJm9qH7b7Zq6ykSch69I9eH%2F9I1vk5%2FqVApsPidSTtz1daMCrKJQte3uUgdRNYvIrrL%2BEqJ9aVvEqyszFKgxxZG84J12CnPuvt4yPumIbUrsijFIdclElAJLFee04id04bbp9oXklbtW%2BNdFHm6OGbREXunknDpPv2vGDq7G3H7aB9m1YgfYJ02hhY3ySqUqBG%2FT799OQOHpSKodmB%2Bb%2B8ueF%2FP5WBytjnK6yw9JKyAAUP02dcyIu8%2Fw7cbFAy8wHIUdBCe7K%2BxN94jZjBPsO6YmxaOknhjAMxC29AXNO5usC7eSCuTQKkTa30nzvAvyojgz5aJvb73%2BkRVAetyEsKKaKPbdqRBPMs4ulFKvORi6aqQOnyUkaWdA6gDyN5LagZjbQK8SfP0VjBgbvML2UvMAGOqUBXfdr9TirdmsF%2FnIgmKdz0B9KHqm%2By1QejQKZMSdwsIhloRJ4segPwXzQve22ag%2BRNaQWqSpLrM%2Fv4C0farGIOHvE06dZ%2BBobFmjA2o%2FMZievhosiu3pxZ8n7LA46%2BLv3Ly3kdSCjshOGKKInOeSbp%2BHwFmSAefRkS9HgHuRRKZnVVCnNV8wT%2BgCsbl8ba3ZM1b2S5QCAfRsm2vwQdk7FCHJZ6C1I&X-Amz-Signature=9d58437027ded3e017c572bdbdd452332c6eab5dda8305efb556657e11d16d31&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
