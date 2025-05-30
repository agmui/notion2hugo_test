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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46676QEA62T%2F20250530%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250530T110101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxMeF6MCcqlVihCMTf%2Fd%2F79CmvlD3b5Rq%2FmcOqlj5GZgIhAMbajY2BxIp9W5IgudhtgbJkgMeoaOdDac5A9D%2F%2FD5HiKogECKP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxRMR%2Betg%2BwBC5fc%2Foq3AP0FrFaDRIiDchBkOr4mSMHhuuzF51825VpaOgkynPZubydHCGhxFZg0ky1YajsV64mAyJBqv56Lx1tsrsOIzUJuxlvKsyxgrkuTB0KxtEB1awfky27Oo8CgI%2FUb5D%2FkAz74wgsW%2B1mqZwZrM4JRR%2FFFZdHPB55mgzuCY6qzb7V3aEHCjWkBtRNiurL5utHNJKJ0qtB3ISb404iutcbb51vMUgoDrD3Lk0if72XptG%2BZk1JoRJ8CS9eWjgipH3lMF%2F9dxcynJl%2B%2F3QYqo4GvdSePzwGIV%2FJfzgzRA9Rqc7gxpwdaTYfxm54PQ9NddreBw%2FxK4Ydhgcqf9ITiZOLj4P%2FjeIwz%2FBUdjkpV8ftIDx91BBB9GwQbZSwqRIx1QqVEeCoRf9EKerJqOOfuGhMwwEXAl0ASvYrr1hsNwPP1YmuAEr4AUXU5aCbLsiOzh11at7twtvHuMrEzMtVaX5AGkUrnJ7OajERyug5LOBt6UOVFZLDrTwpADf9RDjCnM%2BFtnnvwoD%2FYzV8onroewM9tQkWiIp%2F9mWPQ%2B8n6hdamBXTRd0G8TjxB2F9M%2B7ZyT9TWUdwP29dMBCMXaK77wTjD9C7%2BWH5DuWEz97vxGzUNbP2EOYH3NHbe6XxVvzuFDDMj%2BbBBjqkAdG2u3Wt3VlExZPd5Z9hFS%2BKr6gkShZa85dfZR80Xzf1qCwntLlGNBHw40jvewsZvuJPFejz%2BYxDFskwJ%2BF%2BSHZnVxUTel6ebOyytnxeOwBcE88jU%2BcZsqsg3%2BNg%2BEf34voP43SImLWBSeSK4lzmn5DxRHN7d2KdHbAcwfOfq0yE2yb7vEQoYhNV2UAR5qrbfh0c%2B5cx%2B0nXQEQc4rlv8tsSuhJ3&X-Amz-Signature=27e820b335b7e2afa9ffde298209ed26b681cf8840b6d60db4a34d0165e4581b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
