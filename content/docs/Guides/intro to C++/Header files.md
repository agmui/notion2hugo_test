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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XR62VTMF%2F20250529%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250529T081238Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDp%2FXd7bYWxKN12V%2BaRwK4FgQPQmrMhgm8kGPstC6ltwAiEAjDm2KCI8jfMrqU2lIBodkpTMS9u5Fg0s5PnXkaMwelAqiAQIiP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH7ZQaNiLAyFNyTnVCrcAxgi%2FEyY02RgzHsjxZLK864Vz6iq9LkjwxSLMlo%2F6HP91a%2FBSsvgtfP4KIgOvuf%2BK2cQuL6PWS7qvdgGebmuaKqbQXLizKIMS6758vMmA9q8pCs4vy89WK9nI941fwP5rtHceBQT7hSf9Bg7RBTAUWyt4F3aqECfz0fmZlmE3qu6ze3lVL5RdBkNCfA8fuZNtk6IcvPVeRXdLALctPgelYGgnUCJVrDcvVPl05xbTowu2BNUzGBYdMcPFAf1HFFnKUd6iD6h7ej%2ByWGAnr8%2B6zBBM3OP1g4znxCJPCrRx%2Fj2QRp557HNkzS1lWfc27To7bRcAaBY3lgojaZT3dbNknemddGgY40Ett8YGd1na%2FGII8UGkqZ2FbuLQMhCzAlpFc2Qp2CxHXNmtmuJVu2E9i0tzJpRkgAHMVSzTfVO1pBP8%2B8toK0QA73DBz0LTfhcsWHmuikoVGhAqo%2BbNEdpUqXonoaddsfKfNHWpFNSJhCEz%2BUYWUHIa3YxwbthcYNen2ef5oHPQPC371Tv%2FMNxIJZMBzzaJvjOkADaSLDirRtOAq%2Bz9n9Rx%2FsgFc%2BiLp6gmDWMLWqaoW20TgyenEfth4n%2BVZbDothLkMZB9qO%2Fr3GmKN%2BrOsH40whGZ4kyMPD838EGOqUBOWYtqCoIKKqGfK1inZBbCiIhoUYRloMELCdIFhci%2BdJAhp0rNM1fZV3TzqCaJtVwAn%2BXbTL2JTugD52bUMTPvTi6rD68oGeR5hy%2FEF%2BH09OtQBCZxJ2iqvK0PD6NQpOSmmTr6nx%2BEPYHEig1eEprpCmXBZqBDYJSDVTA9JCVRFNvmyXpsBoY%2FrntPdCPFcXbF%2B9sTdH%2F3ozKEilG7dBHV3Qp9v5S&X-Amz-Signature=d8d57322345d0d97f1bac43b76621e9ee20e43a5ad53df45b0db26554260e241&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
