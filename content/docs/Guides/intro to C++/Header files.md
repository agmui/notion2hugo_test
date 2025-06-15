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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGTLHT5G%2F20250615%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250615T110552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFoaCXVzLXdlc3QtMiJHMEUCIEtBNbwg3EACppGFuEP1xE3j9dd6nJwQA30%2F59P8vPsDAiEA%2BdUDoZ%2B%2FeIc9KcgZ4rovxCUwnnjALb1Z8BPb2DfuZcwq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDLBHZP6rnus4Qttm0SrcAz13uQOPWAF5B5KWX5%2FOZoT%2B9WH8nw1T3WvflN23Sk%2BCydV4jW%2ByJu0cxcygF%2FW6L%2B2C5Fdi6JnCVJ5klQFITYElJkV2VATJpsyJqS2dPDeFH3LjU1lPmzvm6hj35AyIxYwu5L60tLtdHjgAs8kwKjRaHmWBTGXswuqiNM0cgpMHlMa6UtjRnJUSxANeWiB1GrQeESgB3i9kkMYhFLrsvtkrM0DOWZyuXfwc3usg83KAsqhJMZ4DWRgy3esGb%2BjljmhaXGsrX%2BVXxiAnnIpfoQrFZLJuyQRshV71JhgPdi6zSxMZEU2iZ8TtjboH7KE9eRT14NumjcRM%2FMNtxh4aIV6Ci9rA4y71G5C5zEMINVNOTfxklgMBB2f8Y882zaxfgULrKPlzjXgcuO%2F4zDorCdE3c6OAK0Agy%2F%2F8FmHj%2FRQPtICBsjS2PjyD9f%2FLZUZ2r10fEYLtzQwwTtxthz5K69JR1B3X88U9%2BfKOOGlt%2FCBfVCiV27VvcDiRfGcsPTK1yj7K3%2ByseEUOhm%2B0yejxDYDoj7py7XaEWyu%2FQp5Gp9fj4kgy6vQ1Uyi3elT%2Bjez97RsxjQE6bSh6faUJ5FQbAj%2FzxJoIdgrBgso6EpWPnbuwOkiPdlmvNepSZNFYMM%2BvusIGOqUBmrwOF6BQvdOQxDBTSkRkHZ8JMNTwKu%2BjgecCfljwCn6N4Y7M%2BAjzReKsttK6vs4xBhcl0%2FLDBndWEQ74CqzIyZAZUSZNVnMeOcLNkNH8%2FcGXzwH1gUKruBDeqJBw%2FoVEzdoLbP2eIabm6%2FKmvtImmm%2BoDbXWK74ZP5JcSYsd0KjW1rJ%2Bx2sNsttCYtG3YEb4OJEGZI6S%2FUXEkbfZ6%2F52l8CcvDQ5&X-Amz-Signature=177d484d5aa538e438631989e637a2c0761b212f30566fac732b5331b2171f50&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
