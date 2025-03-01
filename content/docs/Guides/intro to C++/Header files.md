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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O32GGOT%2F20250301%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250301T200721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIAobFBh0Iga0pTTmCLBbHyu1SBD4H%2Bw9CQsmuZDFTjjBAiEAtIbQ%2B3z9uHNAUJgCSvKdavWR2x3CfZhz74jl6zOgWFcqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBKiA1s%2F%2FydAihr2TyrcA7BBa0Z4bGbdQvkpdgTvWRAOpwlHrg2AQt3opnEudy%2FpAIcIgUXi%2Bf2p3M9NYBVvu%2F4siiGtqcFS9LhaGh%2BHc1%2B3B6Fyrz0u0BwSfQBZwA1NFWYQdFMNaiU3wPFTjBv7AkeLlHBUsBVzJfEILVQzalsG8rwt16fbqTpm1VxqXak6d3DQvp0zpQCELGBM3Z5H0kco26HdY9mtQ0pCc7OhuKV%2BcHnGu5GMDZ1EUUcDECZIUxrpg5YrlPrvMfqHBpigoG8QdlwBBLcsBZJaQ2WqmpFBKDTH5RNbhzOWI09g7w%2FqbpcBEKjYIc6E9C5n1ObqqxS1bbe%2F3Xuifk9jN3D61fxY6G1udSVbsRqeT5fqd9phZrRA4q7WFPE0YTexpBUn1q9IFLpghPMNcqW2pRk58XIvun%2FRlJ3KFPVPRIyS5gR6luWGLDQhrWsoCPA4ZS07CpNEe7nvvAnQkQgEC%2Fnh4a0ulyL44Mp1snQ4vxKoOcSEqYBEb3Ct1oshQjiYxhd1pxLb%2FQJobgQkjVYt%2BxcKbf2TictzacGK2PMuR7%2FM4KUO2BgTLmOSMKc9HoWpi9M7zjOfn8owkuhSvCOo6cRYPkNyWVIMGDdTljRKSQ3U2ZmL3cMnF7LHNHgVQH0hMMbHjb4GOqUBEDabuMbHHYP0YPzvMAbHYukXj3T1N8BNh122EgApOHupCdWxrx9Fm0AmnTkRQdSF7bNUzyEfW8Hbzk3rDs2r0Y%2F4KEHv0jmzj6lkgEOlWpoqd8vHTQZajrYYymZkUffdXzaHWpEAEjqDtbtBJKTSNaYZbNtnZ%2F%2Fglz3Dsjne8%2FHpSrciQEIi7mNUl6wONsv%2FduLY8NQu2znR3IBbpIDrSorxMXZq&X-Amz-Signature=ffca8e383f053f9ae0443e75587f175c114aeabc1f6661e1a6a18c851c90d487&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
