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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666W7V2YFF%2F20250316%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250316T140154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDXNFaieqjisE7YZe7qkBN60YT3sgrJIawSolAtTebbdwIhAI%2BoCQYZDBlA6nevEYnwGrUGimFZeVLYnR3DMQUtZPBfKv8DCCwQABoMNjM3NDIzMTgzODA1IgwJn7eGqc%2BuWhueHswq3AO%2Fz86t9gfLMDrv1rF3qRCF90wA8FjrgHnhEfPNgb1nKFAmIN29hK%2ByVGMxss%2Bw%2BSLQWcFJAJWO5BTvxLBcSWclR5rvTg3G%2BSbc5j2j6msvwMfbviyOSD6VfezKfUGr%2BFkwSB1p6fXlAqtqV3k%2BorUmOZoknskR318EkFBxF21YAcKMeeXxbCzlZ8n3S2MEhPPRe7udCpVIpFq6OOOuLad%2BE%2Fo8hz2Ig5hMkec%2BrTIzpr3ut16SnEd4sfgnS1NtbIXkZ9AiVD9XK6iVNrztP71W1w5Z7n2yke82zicMaCtd5wORCAfKU5MCT5P2pqVk%2BQTYvCZmK4cbeNk7n95Yx03DReqkw4E4CwEiry7a6pfn2Ot6hZmTGrU1x9juldoGIRn9XOD6PCZu38t%2FIOoBAr8XC1RnDPRsiELkVer%2FoFvY3PW%2BhqZ53kE%2F0aC9boS6LK%2FESzZq1EOLUs0T3p%2F97SEt7g%2BYxVEjLO54tEDC8hALgpl2xY3iXU2FcZOsadvdwYmqup3XA7i0teOQrjomMnhIzPV2V55LF279V%2BbA3sscES8BcCmkrSuRxgnbhtR%2BsXf3aYUGG%2FAxs5UvE%2Fh98OxF6g%2FnLYWHFqFnoPemfZ0hPTgxncp37%2FXTv1O4xzCA2dq%2BBjqkAVdPVPsZzW27e94i8B6Cc6Favu3UQtNGWsoG4HhImnYWYQ3xNhS6gkblzgVCoCYNKH1Yhz8oh1dflz79%2FV1%2BO%2Fc%2Fg3xFEFI7fsXv5lGrI2FYl%2BM5Z2eGufQ2O1mogABEr%2BbGGK5BGQifWtHXi8HxAeqXX6%2FN5m9VcdWiTcKRtvkHuJ78ozMWQnrDAQ%2B6XeLYFWSEcNB5sK3237hsvlUpD17AhpDv&X-Amz-Signature=f2e1066b1ddff007b4886212768b1a924b67e78a1770d5caef0f0df22322b532&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
