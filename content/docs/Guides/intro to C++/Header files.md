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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664UTB6UI4%2F20250810%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250810T090852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2NP3RG5QmAXZNc0JENChW2w3JnaRabsOUWAKPuyGT0AIgFWtQzgDTWqV4do%2FghArTOXaN%2FHzLeRr0tbCmq4QkU0QqiAQI0P%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDClx3WlzSlfJ7kglaSrcA9%2FDjT1waO8g5M8gy7C%2BoYaxdqKwNnbTYjSdwHCh7btV0ZAu0m556BuJCA4J4GT%2FLmLSkHXsJtNsfdpFfkovLt3tPz4glqX6gELISnwv7gxoIuFMEQxu0rpsc2gDymVUCST83M6ZjYh7ZNJEZ8Kz6gJFtQA18PfWGYjW8fiu2qjNfGP3yhX10qC3T12AcrlAILE4ip3elz3fRXohuqlSVjvGriTMM4KPKdbTHtQLf%2Ftw9xaRl%2BczKpclOmZcJ2HeWRf812OlgBSbdB5HcnkbGHXVB34E5j0AdxBgBk1%2B9S%2BV77550wgVCKI%2B%2FqS38%2BkRRIhJ4nhFe74Mt%2BHY4cNiR0%2FFMxXm6A1R1uWNWWaYWHXq9y9tLW8nk7zGUklheuHEQDONRtT5j5N6BkHDDHpRYC%2BvmWI52rBu9mBhkM3m06FgHSwqAlGf7SNDL5KTOKGmiX39SHYDiLyWHEp5d3bxl5emAa0QAihW%2BWcNfYyFR4n79x52FAWTh9nRanShBCmbBX672QZH3x%2FYdq1V5xqUNDNgRUGaR%2BUTITBYbYDIQErqheu34%2FWmHFQwCsBUCCuZTAHopRxVohy4SSFA2%2BUi8A2PPqaGtJRf5Ac4GWe4iMQlkPWNCfS5v7yi6iH1MNb14MQGOqUBg%2FMCVqLY6uzoJ%2BS1pfRISTvI7UjnV8AIe%2Bo0Mtt54yU3siMc1CjCeijlzgHmcXooRH15%2FKd4IEWWD28bxnaO9H9gnEIx4Qc09NW09QQUcWPqYG1OzGVO%2Fc6coDopW0rOhw%2F5ISBH94usHYlyKEN9Jhm3Hf0Bq%2FDdCCWbSw%2Fj9YYuHP2kd1gOxk77B6tFmLlbu3%2FLbjEV0Q2AxLZRpl0anZdDg56I&X-Amz-Signature=8eb01df564a01f8189b77d652d4144a33830c0ce5b8c43a9ade91ea935ef25ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
