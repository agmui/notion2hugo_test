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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NACP6IW%2F20250211%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250211T220717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDavd9y%2F2vQRPBANbwbenlWjQEcRhZkxcvJdV%2FB8oSpKQIhAJvjnXcoYPqHsj0lG9%2ByEEiUQS3PveMv2P7cQ3tTsUB7KogECNz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx77sMIHGnWmbeCcRkq3AOyQTOyCKII5FyppMOHOOghxqFj1%2FslEJdAts2bAMTtnn6HQ%2FmI%2FgcBlmaOv3pJY11hcSJ2xo28T7nDPzV6j3xEJthrM1xxMGqnCAZt3g6%2BSO%2BAz5DNBQd4R%2BhDigw3JaSpMrL0YhSwvIZbsl0spX26Gutfbfeh5PExIXv0iOMY5l1Cx8btFDx%2FHKW0AcSdpjVhrXp859UcUxEZ13iBHxCjwUXZ9YIMtiOMEx%2Fc5bN%2BQ1C3hnzFajyKTgrZ5hWjNaZWCbUkWNt%2FmdD6%2FkN86XLem%2FYi67dP6U0LgiUEB%2FddwZi%2BwQ%2F6yYH1otMxbheoNx5%2F3t9HkrBrOuSZWybXKJ0uy7d4qa9MV%2FGKK5ktOo%2B3U1OQmnLZqoA3Vck5TQsNRDminIhlmWgPJhyXnihwVcBCZZExCS4Sv2D3nUC0E5DjlOjlHsOJHgwxOR4%2FST4oGASIshKaBIINKSI%2Fdmnhr%2FfHap%2F2Q581RdqHi69ryHU7ACCM%2BwGhzkl4pDkYbvA0PqNqH4mspTgCzyvWuhMbfdcb0R6T2rJ5pYJ6X0uTgtYzk8DuLTlS9u9iO3Bp1OshjaPomHJnfhs50xZRqNKF40I9FW75EXJNlfPGM0A5%2Bstfk9iEh92Ad9tRMB1o4TCtyK69BjqkAe46P%2BT5BOmBuAmzF4YCy4YMzZDmdBwbrPMNOttWervAa92njhq2eilKDOlRl1SYhvCiS5qgisZXbFNCco%2BSskLGWLKvUI5v9yh4eJBE8wD%2B6wSII6urvSbJ6n1QJl3IG3V6Xh97qDhBcD5wR%2BoRvxTAvIATnAEZf0fTcgqxRY6vZ%2F29DmzsaYsWoaWeyRrJscSqYfy%2FXpavMSbcNDMTl6YP45VS&X-Amz-Signature=11cb6d60c94b34bf9b0a9248d3bb0e9c1bbac7c1a1b9ea0b36a97c6a7722b41a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
