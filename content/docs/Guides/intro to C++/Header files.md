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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QW4K4UUJ%2F20250716%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250716T051627Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED0aCXVzLXdlc3QtMiJGMEQCIFC6nC8WBHc3SXfFW%2F2Gk0jyclStQUPt0KvwZNeCcTRsAiALB111cg70BGOMJ3tKqx91tgoXSUOtDn6fpz9FLPzM3yr%2FAwhWEAAaDDYzNzQyMzE4MzgwNSIMpkvqdVXctu8jhvsJKtwDJ0JRNMe9Wp%2BXtKOf3VcZgD9X%2FSreJKIMqQTyHGZ1ohLrV2px3C2lNlblMj7ewCnJpTteIzNLj0pqm6eD2emZGZSChG4Wl905AsMsv%2BROS%2F7xF5Bk17ikfGCFwxuuszQ4dWkQItsNYdP6SsEa5vjBdq4l5wIuntJVtfAI7ighb2PLvtbedGfJ0qPWCzBhMJULIfpZT4Zpuolyokm2pXMEGKIIH9YUQ4f0rRl0NcC%2FwQc242im8iFl%2Fd43h2cxU3w9QIujTBMWvdFPUDpY1a%2FiUNyuf4n%2FiWXpAxtqQtbWxVKMF6Euaz4%2BKR1B9VrLm0DLohik2Oe72V%2FAgjIaeqQkq7AAQjpKObVDxi6e%2F5EJQ79TeLmofLBNxEZtGJzX0tctHTfnjP0KNJhcKXXf3P19rga8MA4fkJfw2sJbMxYrmTXbkG3ls%2Fz89wYC7t8bbEHfPaJvXlAyrSaYgc1lEQBbq%2BIpc1KFX%2FGWkBbvaX4vksKiiJOFFsVEYlV%2FSc4%2FMgSP8OVFdLj3rus2GBzyogz4e8XTatn3rL0xFM%2FPwXjLnkmfL2zo28SDhEFbpcbKfpPer93Y7xcc3utFdxVla7XB6l9HyGcKPQeyRsNd7B9ftD769ii3JUvhVCtD85kwm93cwwY6pgEWThUyXJdnQX8%2BbEcEeRUuKNb2AmgpbELVMmfScvUTG3dDdcaJ%2B7oP6WJJx6t3PU80a6g1qe5u76Gqo15W4eQnspE3KFBxP7NdHUjX7%2Bwam%2BLRQfoBttRxDm4ZWgMyHzXyr4rFIgqekHtShgS8bDjF1f9IQRzlsJy3J%2BT1ZPIyCsgS4pQp9vb4eM05zfieao07pOsYsA4d5SIXdir%2BB%2BhhBqT59%2Ft3&X-Amz-Signature=e2bfa2f0d886c37be502bed70359fe57ab0007d286bc820bbd3e67f4770cdb69&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
