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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z76EVH4I%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T121231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJak%2Fu7TP2oFI3Ubo1tNpft2cn3ecCuXin20tB9BoHrQIhAM6Dr40P7jjwRbgjLOyljS7To2psqUaqnLJAoMjmepsgKv8DCCwQABoMNjM3NDIzMTgzODA1Igy%2FzOLPT3OhndGGUhkq3AMp9VufH5GvcOgglre353Ab767qDW1ifsonrAUMsCn%2BQsMEUDzDQ8evA64v7JahH7qixAsg6fLXNHQf%2FGZryHXX3ryptO%2FGxQfpTTfjvkhw%2F6WSme6qtgSOm6egaD%2FSUEgjpkHr%2Fincj5nkl%2BntbBBvpIgy48fcvz57ZgC1xWvdlkOrMt0kbZXKMZrsrhVbWVii8dZepuhvZnz749MbKGbraudlGG5HU0sspnqMPr5cIRhZeJTNAMqvvK3dBTW3AtUbvnsFQcsPeG7iLqr9zgmyEDqfu9PPYsUSYzJLNUqj7fWIF5njdzhdv%2Fn1rVhaF17Urtf0ygpIURaEZ4qhp9EWZfMTnb1iK%2B0x0YWOeDGzyXXYBiQ1HMxyOeEFIA3hKIwaWDzKshhnENj62zmLyPIfdY5HFoIqow7MdUk57AawpPPPW5LXLNUIeZx%2BbjH7RmWHRMBM1FRTgt9azDqtsYt9zSyHGcHQea6t8dGh4MRjhpyAR7KkklVzAyjgmmp10FKfw6tLMzOl569aiyW2IECBC%2BHcS17t50kQ2fUYSqupEzNHJ7KZ6qiHYkrmQJHtSdThGCenCmDXAHVTaeUZTdDM7NFDb2rzcohN5Fpkm4lTuTwqdZegY6Kk53SZ8TC22Nq%2BBjqkASNCSi5DodhNMBKGgDXZCJZlmWtVRGeyFw3f973%2FGj3U1KwRzQXSAMzd3TOfKLEqyaEtmM3eeCMaKLZ2LaZy2%2BClttyw1e1ksEsYPvgXAWDGAQJfoQLRTrDo5%2BHh5FEprviqJdG23N%2FBzwk8EUioRFsJ92HKkrmi%2FfP68EFvX%2BhKg0rqFMIUrXGRuqx4jYyRsGiP5by2d0Y7Grqc%2BkYQ32meRYGh&X-Amz-Signature=d5b3be40342fababa0da4af5c9b8fbcc0fc1af380a3ac2a0276dce97996a652a&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
