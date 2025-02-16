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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666YX2IFEX%2F20250216%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250216T121429Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDQaCXVzLXdlc3QtMiJHMEUCIEyzwV4Y%2BQGs5iN7pyt%2Fb%2Fqvyds%2BG59njPRu2du85xJ1AiEA2hntTIRMUoBB6qlYEK6p9ywaFmM8gh5EpxTjHLCdohQq%2FwMIXRAAGgw2Mzc0MjMxODM4MDUiDOIFs%2BSRiTb%2B2exypSrcA3u8YQ9AdWN1FxmKTrmOeLSfvI5%2BnvnJgZGjMe25JLz%2BNFBszqHshPcn7aUTYZDk2LmoCL62RsyAW5U3G%2FZHmNK4fHkPWQ%2BKRPNtECXLo1zQ8xK1SPSVMpbjxRCJlv8spsUz5CzgHYskRwWFMcoKJPIb5MyyW%2FyF%2F1XiaOAojOvE1YML%2FKEcAzJWS3De4ujHIZlfeVoiK7dgrEfWQ3Ubgu7rRWCTFJK4en%2FlGMqv4KD%2BNyEQ2yvVUTC3iPls8F711z1qGIyF1X%2BkLSab72aMNpCwBxilM47Iwhu3dJBPogsBanj4rhzwiGLPHVeb9cMjG2XVgS3IbityKlH%2B%2BxdDNCbmhAI8Lj8%2FjLzwSZUDx0Ppy7nsERoa0dLLEFcfPOFyHuouwTMP7GR6MR2LrV8w1NJOZ4MOU0xExkGXH0xPXgOIayVfJLvEyqSDE%2BLsI6ae%2BtI3KDYz8YX0ABJubhkMd6N6Cv%2BcPVrSWI0ssrlsrUTV83TWb2nnxeNg5DHKB2%2FH6KEn9ZdT7A7UtKUkI3TKw9cMswlF8wF8BOVDUkCAf5SMfuDV4dAd3Mpfk6OHzygwCAfd7%2Bkmh71%2Bwpw8BYUZs41PSn47yoK%2BTeA67GB8gz4NX1365qd7LHIB4nKZMPChx70GOqUB4iRTBHcrHs1%2F1k7SNS7MycsXIBYDUdCT%2BQLJpqXQzIt2hBpO8ZaXLUchudngH1kVui6AsmUxur932ce0vFcKdVhlKdwZZCDLL4CY6Zg5vWlcglgD99%2F7%2F6NtigMiwT09bMtJ4H3t3k55UPOHn4mTn7zkYW1SdSpJeEMxKUAjcQf1Sk0GavgqPjExggmQDvAEfyOYre56moYQL4KDKK6kIAh4Rg7a&X-Amz-Signature=3ae3bc2facf0052adb1e3715f4305bf73c723a9f71c01fa72fdb8cb5398d0546&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
