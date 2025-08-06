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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666T7RC672%2F20250806%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250806T171359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEEAaCXVzLXdlc3QtMiJHMEUCIQC9p1P7SATGFDfPnsnPGz2P3obnvOdmYLB6v%2BbWZ9HcQQIgQCKarThXelK5ycqNZgDS60JaqK8JA522dW39AT1x%2BnQq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDOyHlH3X1bFlgGiF1yrcA%2BVuZ0f4kxZ8K9GnLE1B8Qpkem%2BTyxMPEDvenXdVsqSx9Glg8TfqfC%2BELLf4DPCwhBM2Xpprhgiz1euddNd91EpyKNSkgjoxkReSFBaLhaWjfjsTTkpXa0C%2FolBDoBP5prJuCpO%2ByyQ%2F0wJiP%2FrrIIeryHDmukpeOrZ7NT5AoUmlj9UmjRVy3mM7yf5n9kla9GyYvAeWLE%2FDFscVG10oOCCK21rmgOxG%2FeXYpIXTjozmY5ux8Lj%2By0%2FRwymyzmq7FxX7kc4boXYBtmLVwhwKZ67oeM0kXWW4069cS5AOYRpVtqeMTGwzUf0Z6jYFgkJb1jDqT89bmSORF7Dj%2Bg2yDNlmn1Ti3k%2BbrManjcU5xToBbuR3UsRoyF57Z5YeYf9vwXU2WcCcB8ytW%2BrsXWXOoiTxLKj1PdA6u1HzWPai%2BaTGpDdL9SAde%2BZf2iqfztLtJadb%2BG%2BtvfOcPyw%2BzV0ebX7MESp5fwrMWAij3C8fxuboaFx6zd3vzV3sPuC85uBMBwENn0lmPbw1crx0z4lTjczAPaMvXsv3VpsKiUV24KB3G9uwTJQFRZGODBnKFqqO4rdgGfUxzImZxG6i6T4qiBz3A4%2FlYhy367P1Gos%2FeVleck72e3RUzmu72mYQMOr6zcQGOqUBTT9BMtLpf1pmrxjpaTE7r7wNS246DUuOJVvjhaFTCsCkPRfeRlm3XbuOySAHV14wTqFRwLwLkkmya6CPaUxKC1NUrrpRRn373C3wLhF%2FedS%2BoFi%2Bs%2FB94dR%2F74nE9RNIzbJSZPdBBQchj%2F4OKBkrXfBw1UglwhrjWid2FAKfA49H7UHy%2Bo%2B9o%2B%2FEhvbzD%2BlU6lIn2CX8dEEYCyp7FQy00aZCSLrh&X-Amz-Signature=0110700afb4ea69e519dcc3bf5e131d81eef664a620203185370653b31ed6419&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
