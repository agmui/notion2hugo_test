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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W6ELFFXI%2F20250331%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250331T220817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEMaCXVzLXdlc3QtMiJIMEYCIQD%2F758zVUo5z4jZkFNI8tmk6V6NeY4B%2FJvvWSmwlamBaQIhAOODMc3NzpBmrGZWPMnPxtjO0NO6rlEgo2%2BDgVzO8dAuKogECKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwwNcOjFGIG2pR4tEwq3AMQKNuq0zS25Ys%2FSSRmmh%2F%2BOtP1wIZnmeideIveCUEt7FSKGSVO0pjEXqHNe4YpP1wx4X9CUUUlgCPZmZGItoRGU25E2owXeJqA9i5Gy1hkIy6VQRGvW8RnBf%2BbbNc%2FEt4o3pnfVm0oYitlELa%2BE%2FpBU81DeIAywgELY2vlSK0OnFJ4%2FupUM3xbr4%2F2DP0aCbWNBB1riNvfnW64AtUZuWeBdkiuq%2B10EHhCb6qDE1uUBJSlaoq1hl3UFTcq3ImMyQZ1SH2sd0m7YnMnM5v6X5lObfpW6Z6KNvCVxJ9GffDgEOAAeSFownNUlhaFLGtWKt7RDIlkmy6ck1NruZaqB6jWb19wNiVFN18GhXG3tQM8DWV3%2F6IYxeYeerxuhkWFeIy5OPgHcj8uwKTWCg7%2BRcyEQRDtXOmnHYk7AtEJP8C6rEtt0aqbJ6tzJv6HfoPy9IIoHJKSF8bOY2MLTlN9zQY4eURJxd6LWb9WTM2sxHzAZZyO5S6VYsGW8Yj30126V9bTwYYwuuR8SNtoIWNfZW8og2cPepvMfy96vnU%2Btfe92p8dJYebaVu3WW1w9Lp%2FirtizcR65EThc6jnRgcMBRzYpla3tEGH201ljzoc6Z26%2FwTln6zldy%2BWtWPnHDDUuKu%2FBjqkAR0TAKpRSdNZhXV%2FeBloKTAGUKNZM0gzXc3IvHRqKXgMV7Giw9wt2%2FgCD5BoZcTbxiHvee4KRC5u%2BPnRZENde4Jz%2FKaJ3o3EfT%2F8R%2BCm%2BY7v5VmE301ceTlblb8fNxgcpVJH8j5Xq%2B2eWEWuDz6ilmjAHpIqY45FJh2SOpCGmjSzvlEfIlCaerhundOFWE0KNEWRxJHwjAdtx4UK%2FWNn4KFNd9zP&X-Amz-Signature=7c2b623a6b10e1495be776085605d512ff74b5a0e8371f3b4a3f6c6ec7fa81b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
