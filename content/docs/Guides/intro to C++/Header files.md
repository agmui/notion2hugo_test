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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SGM4NQ33%2F20250408%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250408T100913Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAUFjQCW%2Fv5OFCIx4ekS%2F3Gf3bOtsoZ41mtBuo6lcP%2BXAiBDZlMQjjUhEFTFSjVeSpXSYVBwF6p13sTODwmsEBKcgir%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM8SEiCyeZxbMpcuU4KtwD83U8Z%2FGpMaazGEwwUeP%2BRRGsVwOcZSgWmSh5gsIlxEpbWeHzm2aQKEYeSn3Z%2FlSL65AAxlLHgCAf3qCkfaSjN3TenmXSz%2B0wrxRJaCdH7agmz%2BgUhKVNVV1aaOIKyRXvLdwNvgevwV9ty36efTntewd%2FhL8aq9FVyKwsjVNwbXsNIMwkboca6ocpggebHOkGGka%2FpCF%2F73Imz%2BuEsJ7tj6m1R%2BUK6%2BAncTW%2BQnna8vlgHrCGolyORlFMihZ834%2F0pRn583N6OMlQOKKN8BkBjLUs4LJxLNpfOzzYGZafK7Gih74Y89ZxLgnNz8QXnND8koGcddiEUauFiL3hciZ0F5QtvVVzslGlRjJP5w36JECzmnTE8aBDhTS%2FGj0hl0ecWy7wtsZlaDCsWHOSYyRzZvuk8RG7PD6R3FnHVTAjEhGmtGixeQ4VAmnNKXu6%2F8gTh%2FzBwHc0ewGQX1N%2BPE1hB6%2BbrXS8ONjUZBsB2Wh3v5YvfjukbBKfABuzYPJbbLcTJ0m%2BezPc5c60p64%2BuCJVXzo2t38zp5vWLVYj0PYg0JbgVSDKzPPSdecOMFzXqt90S3rK37CMwC7tSUPiaYE0sEusjiPEeO2DYpF0BeKULPxz84TvJ4dtT7ITUKMwv9XTvwY6pgF6irYGYTVFL55wIAsi376yFytfiR74rcLZjOKJLubqravEH0OziM3SlNoYim4gVMCbpYXJZjk9i5zIfTo1j74UxvnZMx4NKBwBLAkrm6DO%2B%2BWtlj6OsIJhq%2BYwoaFkjNzuHUif2GQTS5cfkgPeYL7VTqON5Kkt2vIEcw3Vd7vTBU9zgN3E7abdqSZBI5NCOGBI%2Bw5MzuzSMud6t0n%2Fumj%2B2qfiuThn&X-Amz-Signature=9c1651460850d17c25236243bb957240411d4a4b192d0193c3f23a22da56f1ff&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
