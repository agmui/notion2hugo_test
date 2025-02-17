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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R66D4AVV%2F20250217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250217T200825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFQaCXVzLXdlc3QtMiJHMEUCIBn5wfrZfbzn9%2B2jcRU4AtcDWS5aQQ%2FTVgDPFqN6k2XrAiEAzD8KTpFykruS2QUd%2Bqg3J3vyRWZteHKGR47I57Y1FKYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDIS8Q8Sy%2FFPVieQUzSrcA70ysE9VcUHvDGJBIHkE7obzyYSQBUUG8GO8z72qBF7%2BQHZDIWI3LJNMW%2FVWOoEk%2BNjhhTAMCuYm3KWYWpgjRYObCnTfR2cbmmkUgmANS2qKPlNMpECoQWxtGO%2F1LwRv0XTCtGV4xGWR57ujmktcRIhcCp%2Fl4Kjye2ZwQi%2B3iYtA4eofdKtjm4GJ%2Be5wU%2BN7CnqE7Zsnp%2FK0vkJKRuFva3loGaJkz2uuu8CEGgaKnuMW8N0azq8zqMk6LHN7LuWTrz19DrsngDBSNIb8QCujVJYV%2BpQBqjzFKe6mmhElhNbusgws9oQO2XZG5IdYzuOfzwMQNUXaDL9L4TwDwAoHNGiXnadg7GSS%2B6zFuyYyi4cGsAyv%2FL3Z2w4xmrepYRzJw0Zpo5dB9QBT3MTmN0DyQaWTNvKlPDscMLC%2Fr%2BPoWLY%2BoQLT%2FI8yckm61nqaV%2FEWHiIdxKTZDv1exNnxbmiEaxpVMgo5KslkdvWNqhr96mJBy%2BJc4mwS2V4z2KUXSQhK10fD6mQKGFiJtDfDgfpZEpSF5CNV9B8J26ne26iz5P%2BnG6%2BL%2BBB2j%2B7Pz6lje997Bq5sA8aaUwRIirEMS3z4pzHw9duDaQnpQ%2FmpBZi87TYG%2BMzymfgz81o%2FNqBlMKmmzr0GOqUBXQvQclfVTMQHeTrfgXK7GZBbRs9OANHK7AlHiJq0O50ZCykoYcDZGyNuUYDHgSJf8WU%2FcpeW7VW0D2wMmWitDUYajPZZZK5%2F4PLKLhzb97c%2FZoRrBBTxldEuBFvZ8%2FDrrRAJAVlu2Tc1Iziz%2BA2eHULFwfdiSFzgnUSnBFH35BwBoAv0GZiZZxX88hWKC5vMKlftJ85M9%2BePWQDCDJ%2FlDGXYuZW4&X-Amz-Signature=9f65ba90f9a821bb4d3cd97f01caef1b21dee51f4989a5c9391bd681374788c3&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
