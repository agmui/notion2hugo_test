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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SDJD3BAR%2F20250505%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250505T004334Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQClu5H9S1OfLH7HhwpcTTnpkABFNKgtcifqPfbRs0c8QAIhANlPNMaWY6FQrtRfe2KtLp233kPzfMSbLfN3Ih3YY2L6Kv8DCB4QABoMNjM3NDIzMTgzODA1Igziu%2FqPk3AfA8Z17wEq3AOeCEprWldrFlk6HSj2BeoggUi7EH890CdydpSB6Hp%2FYsRai6LDXxCL%2BZWEG9dsn9%2BlZfbj%2BxC3ekPb7M2Ds2lLUV0K7wnHC464%2BmsdLZjSy%2BTUcHmg4Dowl95JHTa2Sm%2Bt0YFQviLQgLtsIVgluE23GbjOz2wlDDS0BVwnyAiPPdiuV4zbTKCzC1aJAMWjmn8wq70b09UTF8oLyAiHvHLSLFCHWn71cSGkUF46Dprn4njW%2BtnLCxIZef46YY2Hhtbs%2BFisxMLwB6qrKw%2Fp25rz4Ffpxd0%2FqN6AR7gOtmcUBjAUSs%2FcFuKzXFSaALdGykPyrv0h2hqCQHYE6Rp5c8X9t%2Bn03xZRU7ZHyREa7hccIDyWSAcDeL01a63s6DXCephGcFMRxgiZfyZIlUexAWrXZLGuGktNS5wnq6WPUWefbmD5yVCz5HRSWfRnoVJXScSvQfjsyRbnvgLhAOOo1X%2Bzd3%2FAsXH0Oa4JibJ5uerOKC3NerxqWSZsIPC3IYGGcOn7uV7T%2BzE47w2BqeaO7nuBxhDieapPQDj%2FlT02nZIj2iXgHogeSs65dqBhJK4y%2Fxxa%2FM%2F4UaC%2BHg6U8CYbOgjgDdX4dIecZQrGzI6OfRRwFlJxXng6Jaw0iipD%2BzDdrN%2FABjqkAVy%2FLhS%2Bn89P%2B%2Bng%2BMLMwm1k2qN3UgWCkZfawz%2BYkWNkEKEjVzjiZi3AbgbzmQYUJVFeOSOe66NVx7m6KtzilWfXH6CKASfZWdqWQZJAQ5%2B%2BklObMTJl4g7DdGB49Rb59GBQpvdQs9z0sfP0giq52X5i%2BcjIlYF%2F7EHfMRsYbJ%2BDNtUQ3IrOrbarw9Tl5It%2Fxy%2BDzlLjY0ksPIgO5TdmaMRyBTFp&X-Amz-Signature=6d844a3d71e1e076802e0b9f6a694f1d86abf7fbeb688813a43860f9e2b21165&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
