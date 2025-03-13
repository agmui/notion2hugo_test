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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TCSES3LR%2F20250313%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250313T230750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCWOqjG0%2BKlvWxTPSqGd9TG4zNE3ZmHt7AQMgyxIeLndwIgecULkOfLjyX0PUAlCIQWUERx0mcDpYPh70f0jgMFFh0qiAQI3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF1ZGaEnEZSX0TlejCrcA%2BmSPAamiBoPUHOTGFnwDGoosmr2Uc1pXQ8cR4R1xQjK8203%2B7wV%2F1tXIkIXSmMusjbAlnJ8mSIS8cqEXc8pZReXjNlplgE2fKwKGyWia6jaAPbF0K%2F4%2Fd3h5xQTRq2UVF8n1WCZWKwoO4SUmEue2ZRKwtKWn9ZPBge%2F2hdPfZ%2FTd2aBfaJzF3%2F087KsTdaJjsYkmXrJNYBgQ4mZlQ3ZMlhA%2BZ0crq1Wn8aXE2VIOFK5paI23bVxsR%2FI4aYL50e1NasH0%2FrBHZABAUvUD0yv6z4WT%2BK39SO58hoTjEXUiAn0qFuccmsmpxFPHGZsH7ULWXcXaqa81eS48IPE2kdgKiGVcAN591NM3VmiT6jLi1VORzB%2BiakKRW8oUQianc2nx19yW4t9mRwb0mYqSeKnxDB86qtezp0hEL529V5qvCj8zigIrvm2MUoVtJ8sxfzt8YMVBzDajTTuktmu6nejI9S9s4Kzz0mUdqIuShartTmKp1Pvg%2BbKbKDSCmUykIY%2FMVg4HWV4Mn7V%2Fs1iXA24jFQj4kjSqAxwAB2tAhHLuDRNEa5QEM3UTMdob63U77u18ZFcuIO44tHUua77iq057DNmFp9EsZxhVK7B6yHGNxF%2Bzr%2Fxz4RVcAf2fv9oMLKxzb4GOqUBt9V6yeDcT5ZQTAdHb30%2FXW5GaQKnn7t3C4YPxLmQb%2BSvd5qnrz126%2BepjumSLeFqdkxhrLmA%2BRbDuI93mS2hkdRT9ggN0iKSXe3DHvV5sgfSzhKR7z4%2BJheCoJ6rzjrNjnsT7qydL%2BTjzKRKgf%2FPwxBdXgsxiKcVulVxr%2FpolIMtB%2Bug4orJD%2BgAzc23ZNLZ5tXxEv3cP4Kmb3Ni2o2QcyXtmh3b&X-Amz-Signature=7cfae9ebc18b2ba4ed1d94992f9ce0f62473265335a4479056b87cac47e17b01&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
