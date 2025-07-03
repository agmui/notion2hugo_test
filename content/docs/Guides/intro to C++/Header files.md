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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IK3FYUN%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T091055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAkaCXVzLXdlc3QtMiJGMEQCIGMHMfiU8FXWiwfMMa1MX2SaI%2FAu6SaIt%2FJjRRzMDQbdAiB63GrFZ%2B4icudri%2FDVSbFe9VN%2FNlwWBCJnurqotone4Sr%2FAwgSEAAaDDYzNzQyMzE4MzgwNSIMQttifTGoKy53%2FNnaKtwDU8EqXndzs7HmIZPgf%2BBXNK3t%2BIXMpIOMD38X2uxI67GN%2BoPNKnQgIzCDbJV%2Bn0J9yFyJ7Z%2FC3lw9Fq1M%2FRcBOFAMERify7HQ37eg1gFVsXqHD9h1RcTcNuXWnKq4HBWESohF2hWciUrfNwd7jY08Ngsd1wpDmh8WAR3E4my9Koy5I2pVLaEb13xWZvz%2FxSv2bCf3h7a5Z%2BxA5ldK%2BIJMaeinnW%2Fs4hYBu%2BPfnTF4O9sBxD5JzQp5sLCMoG63vHeylX5psUKa7zK9zf2y323yExySA3ddtVzq8CD3NkZC9XJVZZjix80OSuXqzIsVG0HGrcL6pusCP44x%2Bj48VGTJbPohqx4E9Z6LyGG29D4%2FyMELNPWoTqDVCZMj6C%2BFCmhMDmr%2BsjBhNMkeY6Vjton3G0b%2BPhKk0R%2FolPd9%2FjOKmAGIVyKjv76%2FWtAHsDcKFcmBG0bqjgf6QvoolhrtWSFARv2yRRymbNAiAbO5fJdgsDK%2B0J3%2BXfv6lWAvAAb98Qlc%2B%2FPgeSM5pp3RgAKYpHS0uPS8UZgff7gNvxU%2FU8k4Ok8aHTI2iCLRRlq9korcpphL4LCCi9AgxmaWVcGJ7nH5679KaxlR%2BZHIqBFINYiA90AQIoZg7YnDS9iGMFIwmIiZwwY6pgGR28yO3tzlr%2B8o9JWEXr817CflQRyjE2c4OQfF3%2BeS20Ro19GoH6Iy9AjrqMk17Anl%2FV63n7fYZ9cpTrpxRL%2FV0xlS%2F2TT5TpWnBRowK61u0M3Fhs0C8HRFapwKphSOUXkBFiJ748MPHo9KLT265%2Fn51aHziAqv6NuZAY2WCDDPu9Hv%2Bc0Avybilu%2B%2BB84v1Ak5tGNy9YDND0tEurBwUVMyL12jA55&X-Amz-Signature=103cacc0e2d0243ac73360846b44678e78979211a297233054ed2269b69f98a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
