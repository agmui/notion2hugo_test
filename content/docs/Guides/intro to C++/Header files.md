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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTELP6GY%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T081107Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjECgaCXVzLXdlc3QtMiJGMEQCIGkjAj7smDVk3igYbsDGm6SW%2FNSWyoiiXF183kE6hrF1AiATVRjPF7ofL0Aa0iRsjt3nujzlq1XFamzpEc0u0YVNWSr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMKNZ13F3mumAVs4VNKtwDo72KvHimKsHf8jrbTcg3Q9%2B21%2B6iifZTIkb%2BE%2BIK%2F1VqQHYsuXWB67Q87b%2Fw%2FVjrwPiv%2F4FLXDqzq2L7JRv0yL0mcURonEFzNit4ju3Xp1g0Paoyf0vijH%2BKpeBD82ASie5rE%2F7FVQpweTvlG6%2BoYEMOEygFmwA0ZfP5cm05wdwpRFXaISeVENYexOIpkw6WBIGv6KpFx2UYD%2BTALQFUVjfXzP%2FWKUOMYRIzPjq4c6%2B%2FdWQ8taD9iNNU0tcm0PR%2FYwbQuQzLO4teIPSWlFCQRnMaLE9r6u94Vroq3wU%2Bx4jwMKOqk5nUHKml2%2Fxy4tlZCN0Dq9UvEZBcHunrcq9S7e7SI5HnAi5ebOhAquRR1OZ2TcFxg%2F7SPgVtCCKFtin%2BXnBjQiwkaAogxKFOkYiGLU%2BRCh6e8FeTyH3fKv%2F3snF36HqSpJOKhdfLdCNzaq3cZQBjSktYOhEVHN4KvKaNWceeiB3rvpBKrRk6SNLrCSa3gyDtxtqf74nOcI1%2BGu0krmWh2YbNES2%2F11nkcBD1D4YCux%2BeZg9RHJ9UeR3iddjsfeUaXHZydyL5wYS9609Z8Vs82lu%2BPyT3YsMkNAEfXR4BHiGW2C4X%2B9%2F2fp%2BNzuBkOSFTc6X22Q%2FThv4w1feAxQY6pgGYBuOeMnMCOurS4xuTOa6UPwSCUgWiumTmN%2Ffy9HvE0WHcUGR4Wx8WLiJJWg80WTFzFE93qgFvODHdh9cvFlZ%2F1I1jiaebtwCTGKD9o9UJIqOaD2UfKO1O4RneiZ6sN2sQ03GYHdbWcFd88RRx4%2FJ6MoGWmihZdw2P07Xs9LDNWZShcldkfslvazyKkTHifrrCz8VRThYFs6E%2BApHjlvJLpwEGjjnu&X-Amz-Signature=68a8b70ba424ad0945a33c9cef942ebf58de86d2a01b451c87dd610303cd0450&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
