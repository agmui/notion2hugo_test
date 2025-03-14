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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XOZMNIE5%2F20250314%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250314T131612Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdjM4SfMcafzHwrhpnZdCvyhvs%2B8rOhZnbUKrBM66KdwIhANJ8Y1eOrWpCoW8xLBxuWY1OLaIqmDatWohDUtUMJjN5KogECO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyG9wI1R%2Fnd5vXGde0q3ANystXrd9XCHHBSe5nayEFcFjlNpwtOEOKdYK6rNm%2FMZnVfKeFAjhXiUN%2BK0mfNTdhCfUTUeu2OIkmcqZQZWz8TN%2F2L9RMNJiIoRpGupwm1I8t24gH7nPthJixVTdErXP3AEPkAy3dT7vfNbv%2BnLzpJ4hvqCqIG%2FIfELTYOZnNq%2BUji2F%2BSagoslwHB1zN6FAkvRN3orw83YX00%2B8IqS9h7mhwjPIPiTRRVMmQZdgkkdAuhAWVWzMwUFlpzVrf90aYGI9FTkcNKRX7KuVisy880pJymezHRVcheVdw6nFs2m0Hbj92fAOElgrBEAdERNgKXBYyY9zSAFbUPBv%2FtBEEcIzpr2zl5P7fgZKyc2Xf8sZfqHILRHgwGrGf%2BjrqkkC6jE80gq8dJLaH865Gc31O7WFTh9y0pALLsOxAIooYSUNDmgtvCloLGeg1OmrOuK1RdUUvhV3su508qbTZ5GjxfL9ncypnpkXoGFLdOHMLNJhLH4b64OnF7bWekL3lwWK3%2Fqi46yTohjvQUv3ol%2FzdWsW7Us4klga1XXpw8R1kKTKps5bk%2BxQMccoctW3ms4mjeiVO%2FBXNh8ZMRU%2BJ0iHrTCmeaaU1c%2BurQyo%2B0HnTHbx3XBK4MTJfCNqizqzDuudC%2BBjqkAcMU2JUePvvXYF%2BoWOSyZIJEyDBu9plNl06WXdm9%2FgrC0%2BELR880q%2BdkbOy6zdX9C2A0XOV88IUUf2pVmhBO1sZ%2BxxtZD%2B08ds%2B7q8fEcxlWP1Q%2BM1tqHAR2P360I5my3BMk7crr2n4te3LE14Tsj%2F75d3p8SgkXdenny2PJu90DwjTTLk3TlY8XfdramQMD5Uc%2BVbjck5J7oJYGbslYVDdtj3hl&X-Amz-Signature=6bd8c38a6ebcfa6d1f42d88d515c1e19ea1687f4f41e446e8991c2c804881568&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
