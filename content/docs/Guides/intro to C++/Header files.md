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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WSRPSNCT%2F20250628%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250628T033753Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDzj5oZIGZ0f870W3EqW6OimqhPIcn4RLNSp79hkt3SnQIgAq4dL3DBIPm%2B00WhSNw2G5GQTFemgX7jN4YqXxfGagQqiAQIhP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNoKvxWA3PAdTgGzdyrcA%2BM07X1qYCQZ9VnsXYSezPG0fKEsaEkEwaTyRfbgxukQ8Dnpe8K4zr0Zcs9ANKfmcTA%2BBH31VP0zyl%2FOuoxWPVHCShQ0x5u%2FYKygw9fomaxsAeBZmRcRvL55XR2bRo36WwuVTbQ02TGjs2zEGzd0TUIRgJB1qEjAbNSs4DrxehX5W6q8Tootn6lCrzwVWg%2B%2BiTwfrrRTaUY%2Fm8ny7Bo9hiGcMKKkSeSs%2BYhtvJGjiPqAL3JdH2wX6UI%2BI9hnght23b1LC4KMulzU8CMfPwsEZER2tPkNHrC1lWEulXYhum%2FmFUg%2Fp38OZjgcRBu%2BlvjTcpwuLNr2rBfZA%2FW1VjLZ1%2BcohTfAzEgcqKe1igJyPIN4OvQAFwXC3Wj5e0RZ3MdQZkLX43%2FU9usOxtml%2FND%2BYmBwoyt3IKVqZbYSlJC1PihE%2FDR5y%2B6OsQ0GXd0Uy%2BJ4xDXd6TRPxTyAxgDOvCaf7ma22YaeL%2FB9b2zpaGzqM%2FtfHN%2BkoWEDc%2B7ijR2h7Jo4A%2Bg00XXE6%2BfioNH2n%2Fy8VpZPwP%2BhSbSii79PgbWpQnr0INkbLMx5WZ5zcHRFxnNb%2Bl6Brb6gCDbrtcKLhCQLxWeW1B%2B4Xn%2FMEzUSYv8VBpCLrHxmEWehlB9PrY7UMIqo%2FcIGOqUB11e6nzg7s1yBs8VaF7MHKmzsrfWN1PwL5p%2FwCj%2BSJJmYXdmMQqAJWHyoxr40CA3i5j8QDOG86g7sCxtfsstAa7cAZF7kPayQNdPlNEGla27ouSt0vctt2AfNTnRYwsdg63W0ckKVtG8ibqMVTA%2Fgv%2F8ve9pwHey8%2Fy1p0iojBvma7lxK2JEXPGPiig7SMnJHom8Vq%2F7Ch15kluBMQr1rbllOscOg&X-Amz-Signature=cc94836f53bba1b142f42222bb845e58fac7a6f375bb31b95e8e03630616451f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
