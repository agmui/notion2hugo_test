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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TJ576IQL%2F20250702%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250702T181242Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCstvP8mN8Fv1MGJlw6R%2Bo9Oe7uyn%2B8oWGxn4vhvkcVgwIhAO8CcpGrYP%2BTmsJ1PilTolnweryuidYogiO3RMp2wpIKKogECPP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgydLcDeL82Yj%2FTI3QMq3APNx%2FSI3ndtwGDoNXUFrsnZas%2FR6fq8GgUcksNX9ri36t6RRa0%2FPJdnDR8tMGF4nxu9g1SyAD3tSolCs3rJN8yxo71tyRs%2BtGA2z0onbOzp9Rw7kNpSrk1qfDQq1YZh3AJvZ5fhQf10fpbhcQcMIOY8dGK%2FYbgXHUpScWtj1zEne0UjHSoP9G1FrBxAR%2B8dNZTtub%2FBlOY7oIs%2By6J8%2BiiPA825J5C5OtMZ6NfmEHaMHqC%2BHBnjG92s%2FDnLvMG4%2FO0JdTdYD3Gp%2BWXitSY4NpuEyzYxwqW1iSzFDkedin%2FHwlODQcigbldzmiumNKn5i9tZBhqN%2BOO0k2jh7pPnCj3qkmJkfcpzVc%2BwT2X4LqTXZOF9h7dBc8AQR4AhIzh5T3fqZjFrvm7lnIOnSDoQWcuhrmrPvoaFfVHn9%2FPRKtUYlCaTCvm2lKsLTba0SUIKouwzKFM4Z2Pw6aEpwGnE%2F8SinHO7gKXPR76lavf4CzRODd96Z3usOGYLIOGqykaXH11zpckZ57EmlS5HVXiQd1nvJS4x2mV0onoP%2BjHrcW1sKdVz3KGWYUr2pEDD64cIFwTkTBxSE%2FeKvbJSpaUaW0w%2BDZHFRxhxp5oDlZ1CSRd7c17PCe5uKeEwItmqgjDL6pXDBjqkARxMRJdNolFE%2FxSeFSPaa4yPFRgpDnEd9jbnQAQXOqznjQDtzrGvSyMzC6dntbvJF9pZ50vjITEQK9efwgDsLPrKP4NyfcLu6WG7kh8%2Bfl79TGEDO8WQinKjuxHGNd2%2B5uQMw%2FBXst9PizcYZ9CZZbhtPjM98HVSS%2BOAU%2F2lPPlEFiL0yp7EP4%2FnXJY8uJCwjARHUd5IZ98vx77ya6WNm7N7Dal5&X-Amz-Signature=197cd1035035a2fea663db41b6af681917afc1789575945d3878fe7070afb8fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
