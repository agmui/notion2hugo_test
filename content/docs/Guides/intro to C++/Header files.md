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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ERRYVB5%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T191126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJHMEUCIQDCPZjsl8NlY%2FwM6h%2F68mqtkbECSbqTu6qD1rI8WuS9uAIgQeYqv54fVIpNzjgWqimlV6gZxNcnWhnCaD8VqIzem9Iq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDGD%2BKcLCCQ60YqoJGyrcA3vjOxqOcqNV3OpCdVZ5%2FFOW24hnafI3Eon7nBKD9ZAXDjbpjIWLolP0qt71xq1AILVflk6N8WJda7JnJdulyVEyEmXq%2BROcgKz7L3%2FXakJst5k1jDPgRgMu1Ti8AEXgDkyYR5bY%2FuP%2BzEWvvk59DPAqgCvrGTHTAkJ12xfQm6o4z0W3MxSv3CvSGjT3DWvTydJUEsLoSUDmr%2BfniRMEqudDYh%2FDqW6OdQ2b%2BUA%2BOfQTEMDAEdmP%2B2CoykKuGJen%2FPpzmM7J6iA60AdEPc9F5K9wEnIS9Pw0UB8LVlBJFP5eJR%2BLWGUlyBpakxdujSDXTtkNSIp1Pyt2fdeX3xZDBHYahBcXnIZbti0Vy7ymKMc0FvbaTdErgbmIk9IBihVfZcNeOl65FhE2xbp7EwlzNCVwZ3riPPhLSj3OsM8m%2FDGG7qgU3HIp39MIQ927t%2Ft7TrmqcBbgR9IysN6SlHNVfMcda3BhkkrrO3OJXuRl2KS21wKa23Y3UjKUIuXovq2ISNYL8G8W14tY6YkFIY6mZ2Dwr8l3Ks%2B1gvpefmNxHHppL8b80M34pdGstQJaXgroeIWGZrzO5ul7s3tcjTc3cS%2BH8krLj6qS1EKqGDaM6lkPhGW6QFqfK9XN9kQzMJzGzsQGOqUBJYW9aq%2FFpMMindXYuyzwsWZ3kD7jhUklI7xJ2VxWTgCwlc4ZxodbkYdS7GCNLbv%2B9jv7eWf38cOAiFAZKSvu2uztZeEsAfhgFK9aSdKmvL7pgD%2BucD3k4TfpeJFDX2NikifWLw8mHMgb%2F3v5UC59ezbzmOzk%2FkO%2FBgn%2B8LjO%2FTD8QsT%2FTSSWyjUvscUlx5BVeHxp9Z0yb1RaOqY6A0DzA7Vkhzp6&X-Amz-Signature=5210e275bff3041be3e98f89df69903b1828a1b125f78ed2f5e39b261afc2d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
