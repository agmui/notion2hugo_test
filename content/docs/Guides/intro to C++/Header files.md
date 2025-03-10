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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6PSLB3D%2F20250310%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250310T100804Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEIaCXVzLXdlc3QtMiJIMEYCIQCCAZHJZnzNhVraQWjxz80wLA7gVcbMnrdx0JgdAqBGeAIhAMalKcr8egH5I2ueQnLKsiggsvNohr4Ev85SZdRDz34bKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgycuzxTAtkHysOGAPMq3AMAf%2BpSQJa7BGqI%2BUq4Q3ZSX5a1RGY0HD2sMVJREByIB0mgaw0epVCzDUqsv6QIFAjEijgQ6QlT9%2BGEgbx9AH2ZstFTV4fZTYJUussq61nJ46gJQDpVxwMfZdgYjEQpjzEdRZGf42QWuJcZ0zfEugt0v78X5LLskEy1989B8OUd0irENcC7aYN4cMDr5q23%2B0PbnJyYkAoA%2BU7cSboOKBk44eXwKdCWnu%2BkhSEDpOe8P1fiPdtKB0mhP89SskhA9HYho1oxJ6tdJNz4roOzNKP8AT8IwsUJ0b2irVnGo9VLWa%2FEHmhXO9%2Boio7pwQJLyLbfiUtD0%2BucqOGIhY08OAXJEk3lZxHRymdkLJ0CWuYOBokLpAH100p3NQ9zOuDLg9JEonSHabvEsdvYARBbkaoIGOP4d%2FJhU6UQCCzHTX%2Bk3vXLNfcqlgfYtAhGfdiCPfAb31a%2FEyquekKhE2cgAXGbghimGrF4Jj4kRkAVc93TJT3OeTH24z5GjqmhMCppCLa6c6gvP0V6m35vaXDziF6PVJQOOjdonqANnZI2pdr3vdwydusdhRG5VDSqmIG9%2B0E6JhFWe3u%2FuzHZwTLhRqvBEXJNxlPrCOztgMuU8Jsn1rHB1zhVpUQkfYi%2BzDDc6Lq%2BBjqkAfOz3%2BBO4K7BfsN0F2RU1k2RO9k%2FHdWtQ%2BKMI4ZAbDqOfvAG5gkQb2phvYS3jhArEml6VCGZuS4uekjDkbqSNbpIeKoG3op2BPGituSOXp%2BCFmvmI9QTQ%2BdgWA4lwLt8wUH2IR%2BDlmMjl525rfVvcNJLWQngHBDNr4P%2BrVvl5Kp7KCHTLVDAi8%2BVRPVh9fS3oDtycYWIerX5IeoAXo%2B27f4AGziX&X-Amz-Signature=7122adeca5b773a483507bd1a064907b0edd2d63a9dc3aadd865962c6080c150&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
