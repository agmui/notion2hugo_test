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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666OKQKSRJ%2F20250610%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250610T190649Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBi0Wpi8fNds9sXHtfEuVfwIb2v1vaWamv5k5e8lAuSFAiEAuKtB8Vj7oRS2d04k1Wj56gwS%2FMcdqTlPi6lHllgj7kwqiAQIwv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFAGXtZtQ50z3CqiIircA7pnKlv%2B3rDDbTlezM2hVqvAvo8b36pzhgDLMH8xc8v4p8qlbyx3uIu0%2BBI8tryOZxYihx20N62IOlpmQjOpr8PncbGwklX%2BNV0lKJ47E1eguNANxPUDyBiGdCJmN26QTRqVAoKGZbOz%2BaP%2F7Fvf2BMRSl%2BgJ6ujFPGtqx1WcInfAdUHLmk8Ng0lyy2liwR3mE1HaMjPHbPm5BegtI%2Bt9vP9f7D2B19Dq67HjzkfsExT1Sf57jCLdIYGuTkxFxmfPzRChk5UNpj%2B4wRJvPcpL2PX58mL63gBFw%2FwHR57cI4sldcn11tD3mgVOkjnp0CvpiqocNrSawizkolrQd9iFinxydPYerTqTgDHKmP08yhqWVDqx2ZOnld3JmSdi19%2Fqjo3YL0%2BOlB2A%2F%2FZN7VEPSHcHx3ewef2jM5Vme%2BY5gO7ePMOqQsZ1dVh8Syfdj2j7Tbws%2BPnK41gjPluh9VuqUUKei5g%2BP1LPYqS%2F8z6Kcku9GqcPj0bcmGCCb4pym6YrtwYg%2BGpcRoAWne9OojcxzzZdYUwFgCl0So50kgn9cdnhtHa%2FMmCS2pj65lT0HGi%2Fkrs%2FQaBA6a9%2By77MK2tIkJEt35O0GI7E0Xw5ePKiUUGNfTkGSS3nVqWoLUQMK7JocIGOqUBBsj0aYqVIh6XU%2BFOY2nlt22dvhR6giQWSgYgsg7p5U9ockAK3XlvTWw%2BZOjkkAAB%2BiI%2FhXcMkcS3eycZcRVBbodQ5s5Gkj%2BSDTgfTmkLcOhWPTQ9s9Sbxm6O1vFtrXsYdfUtP%2BZUA5C3pFaSynW4mJzmBFcvGMLf%2Fbb3vZgOofbFROtJ84HMwrhvGlN4EHw7bgl99vbdJjRG7ju7%2F3iAiIqrusLm&X-Amz-Signature=eca7f4b13270e8b5d3ca3a39e7cc1ab3562274f0a81384e29398ad162f32ed4e&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
