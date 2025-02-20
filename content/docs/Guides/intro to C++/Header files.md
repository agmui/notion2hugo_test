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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y7LXJWU%2F20250220%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250220T061118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEI7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG%2BqPDnC4%2BEQuS8fusQzAZp0OyQfoRGOkpc9%2FC3MygOQIgLUWR87PwAex3DPntIOnKk1FmsoKNj5fovD9fa5BMYl4qiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMeItID96%2BrmeRmbMircA33y%2BY2jeqZfnHza%2F8DHaHa41NlfDARP6OZe9V5qIOUFC8IXV4%2FH7apt8h6ZwMHxSpwUXUHV8N%2FXTUKmlQpZuDPUXq9mMkSqyOptwzEMX3yBrzQyxRoWFSspyJiOshDs4bZQjrYgrL%2BoKgf64mAoMxrxWj49QsqwIUj3TbsR3yai3ou95TnifNB1eFeJBMixfJspSTDeGLdTUFCKDUq65zZOhBVPyiFLmN%2BauckyWei%2BuRIcGxtI90M6EAND%2Fwn7adHHNCnIO37%2B1KmUUDMsANzYJQ8fNYRJl%2Bo8igVHZXCv2%2BUa6MxGbjdfp1fBg2vJPK0CwOL4ED2b4%2FeJY3VEtH0grTNg%2BS%2Fz6NRCAg6B5gejt3zhDobpHNLrDv5zTnSSyWSQ1MCjHHfajvjs9iJDaMvDsoyjMPy7XohidbST6Bo%2Fjs4G7Pu1BkMGzMUmov%2BWJa3MqKoO%2BTxb3%2FvPhgKblLTZPzprjFSfdtzyNSIUVHIUJo8B9PHjHR8yJfWqUwDoFcwChaH4FGYpKuPRNytmkSh%2F0rBmEbAm4PWQo8NTRM9Bh5d2WI1dJsS7e9L4US4tMx33ob%2BKH%2FL6UjP67xzdgotLr7FzK87Wg9qcLPQQS%2BzoiXpBiEM%2FitTFsAVbMMT92r0GOqUBOVbKUZsp67ZLWP5p20ZXFYxsHi%2Feu1Kz6q%2FcvQeBnL4f5HWyf%2BbKcQc0W%2FTByd2eXLpaBmfi8rQu6%2B8L6McYj9whTwgsJUBSOwEu0wAwfzW5okmLIK1V85t8mPjj2eajQbjC6mM1PdJrTe3MpqifVnZaKwqdgTss3W%2FvBQTTrVWXiHEBW3viB7eiATnG29ad54xysE9d2fCq1KZvXwbEEgu8icT0&X-Amz-Signature=078f2d865f8301a89f92f8d057da1142f75c0e310f45c32c1939870c44daadab&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
