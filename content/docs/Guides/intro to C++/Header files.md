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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GLNZVGC%2F20250602%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250602T190601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECsaCXVzLXdlc3QtMiJGMEQCIGL%2BIPKyG0CkVu1NEoo%2FcTWh5Y8cnXxUqLReRdToLXcbAiAVsbr98CgcjvgF4tpOK9oTq6jRZ9NREl4HMbMvWEguxSqIBAj0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdbi%2Fvf9U6j3syBMxKtwD34OLK%2BoXIDuoSGdvFWeDXph8VEAJRcp8A3QM8Au74x37CdR1SfeEBGVaDM0p95ApJdcP1THe9i1iiS%2Bn8rPS2n79pXdSa6cJyqKMH%2FiYensq%2FXNouTd82fi%2FQIb8tWPYrfmmB%2FhVx9cjrQHnKJrBZoBZi5dtA4etxb29N5pnHnX89KLqiFziB4XTZNmuAEeh%2Fu8jqVAaycPoPFby05SfCUoE%2BvMRcTMqE2buKiJES9X2ZBYLF2ZEjFF4G87hMnZzp8JuL3DoXx47fpSbDZbGScxr4f%2B8Nm%2B3Zfw8y%2FUvnYfZVzbSzR4O8QWOWufcGn8Zxvpaaq779bI%2BYX9BZyQ9llxiSIb%2BvD8ytBYdC9J3zTIyxtxjI1GH2a9BfmM545fNBNMiEICbsXfM4kopIZnWo8jrgThnwXb6QncEuAPhN66F1JPa4OxHCLvWukPfEJ6u5KWGjmNMF1GePPpr3FlXAmFdYSpOvqTY9btiCVNhtHDv7eWg2S4pO6TMmWoH6b460ODlf5HCa6vi1piJAFJB9K0mAFi8sMgQ49VqJ6RQZmgtv3xPRUhYlesx4QwTn60vWG%2BzJUmvBiQhi82o8Ck00U6tFnjSYY4lygwheVsPmEL8Hey3vHoXrH1t9Pcw%2F%2BH3wQY6pgFcJ0FlKvvB0cP4Y5wLxjiTPjeWwvQ5pkwMrwdOabuO623I9ZWx%2Bakow1I%2BTZNjfOJWLn1IEwqRvEK%2FUJ70g0M%2FRqWnKNorA6QppItyTHDXn36c5ndjRFxCmTkbfm3yn8iHX%2Fc1Va6IVz0XbIVFCUpJKuaqtCFp7FeSqaGIKSxw7idmOSzznhJYMgVRkNblogMfexn0aCjvpNcLcLca2IPLe8TKaTVZ&X-Amz-Signature=868396c3cef206984b5dca49546cecd0fc8404344a2f2f3c7f3e7d9df4f917fc&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
