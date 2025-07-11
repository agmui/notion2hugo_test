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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666TFUDE54%2F20250711%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250711T190745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDV2gUUPfl9HNcirjVknpvMOTmmeC9%2FDbn%2BePgE9swkMgIgO8HlUNmRC53oMrcwuOhNjYgrt7YWchPlToVQF5NrejgqiAQI2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBVn299VrVw%2BCWMb1SrcAzLOxoeoKIbnxpAR7EhVcPMIPtBUbRTtOpU6QL8lUHzMthLE79kwxmloGFDm8%2BMMFHH0gBh0MTnciUurK12TzlCMReTloSV2qRQ82vF9i0lRaRxw5sTrRS6OD4UI5jdNN%2FxuAkDCA1Y3sgLgPhhT0y2xDycuHp7mqxXTjBFEkVX%2F9sGE2C%2FGjqL%2BsDpMKYX0%2B5BNdB9Mn6H1UywUpp2M%2F%2FTEqGRjYxvyT3BtDvn86uWQopNXehvU%2FWZ%2BsjT87P%2BEavPk%2FrY565zmUbOr1%2BNdxxGsYcd69pDTB5gXAzVtpdLpURUJr4mzLjWZRp4rtvq%2FTeAL1g%2BbZ66gIO5QCy0MZB2qmZAo3elipdBWXlBzQCBmzE9IUnBWGIcOQh%2FOTHa6uDNGjgt9FMnYUip9%2F6lt6%2BQaCsDZek1ZZDc26%2Bb4%2BzXLJ3f27Pz4ewBeJ9MA6UWValTKa2k5EWUUREnOf04u7C%2BtHtk19L0motjMYf0GM0LVDmWS9Pist7%2FYlpJxznltQkNQJ8T%2BzUOD36G6x1JE5iP4WHr8igVCnFXr3RmAi1dMH3LqXpRoU8zF0CJS3n%2Bo1JfL9AD%2BEK7lGeVO3jrA4x0a6MZ63wP1jwehC4y8LjgjL5pgriUGBgIMzcR1MOSoxcMGOqUBKrJcPW2Pk0o9%2BbIVIhydHuJUnneGBUjq5tlcPFcjNrTV2LTBZPDGs4EoZg2Te808TZGDtuZw0ymXhHMs%2FPaxQY8rqrW0Xg9ZXukbLBiSA9GiOp1heVM3hVXAGrWKUBWDHYpmkZU%2FAMRxQ7KZ%2BB%2BWjabNyE%2BSVadZOpuLdpByj1MfXvTS2tHjvayB73yxqp2mxSaEPKDmIhQajXRuE92pZXJKDyi%2B&X-Amz-Signature=4c3a27fd0b0f1760675611598121e26a4187c8130c3617148f270b38a1bb693a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
