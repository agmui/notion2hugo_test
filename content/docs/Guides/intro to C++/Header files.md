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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665UNVRGCN%2F20250726%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250726T090900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJHMEUCIQCCftzPO1RPbTNt1cW73uTdjvsKhDrrCEKA85bjE90QQwIgRe67K4oFeBjD8E9KycaZuQknUvHvD9K%2BUNL%2FLw7TP9cq%2FwMIWhAAGgw2Mzc0MjMxODM4MDUiDJVca3Bp5CXGCXxCvyrcA9UY2jzrhIQeZflzWAVJcFqBkPfdPi0uLIo%2BaakAXw3qXZJ7o%2FZVjnCgkA4xMXzdEPGIBzLkCW%2BqpD0iXbcXWgLjCQEFp%2Fl%2FYOV4xSQgRfazlVDfq%2FJW0Tz7MAujbOAfXNkuchTypBexa9IBgdmiWXEV2x74rbVKY3CdD95%2F9HEYZ1u%2Fun9Tar288UY5EPPbyklBTQRG9jvY9%2B1Ko3a1SGx4JOEHDnt8YsMbUsJNjikg%2B75NnSEjdI6LRvOAK1KzfK89N8z8d9kQR8fCAtelH0bFlgSPhCSCGMFILStWwNPbKjQfNcgLDeQXydguIow%2BC%2BKFwNd3caNoXvqsmzbgbF3DiDQ9CL%2FGrz12S3ucS8vLGGvauGdX8u2wD8UUHPHbJU2MevkUjV8doCqhw1Vqt9nlyCuqoV0ULSj4CQQCmy5E80GhGQUqaxlqyaI0UwkiFZnMH3HxTjaCO6IbRe70X2Hx%2FlUVJj3oSVcP%2B7LkZkvjch6EGl0YxWcl%2B50r3oIdEyvK11BblgaS7YQIkAYZeI7nLkRLIBzPZ68nGeWwmHimY3M8PQEKoGExOeLd4ePKw37gAL6SYzRarLXzhu3Z6DnvAZZvWiMxLs3ZVvseipVUuKoAqlTpUD2CSAHKMJyrksQGOqUBXTTYCk78I0SF7TFflkqzAipKIjWKiTxe6qvibydqH8KkicnGhCPp9%2FzC3rPrEtYSyJwzspnRu2P8b8tyMXumVLIY0fCRQmDep9zBX%2FmcY2PHmA4MktOUSoFFPiQrv7Yi2wQzBgJZ1el94pYaNGiJIl3g3Ird1STJThXM5wgxA7fCELV2PE9FJuljCBBPkj6iYR9W7nHLvOfgcG5qQ0hi88ZaQv5X&X-Amz-Signature=33314b89ab331e819b9c9fd3da9b167c489098ba02d5c97510c45866f1ace387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
