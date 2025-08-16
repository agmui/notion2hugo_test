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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKJYAJE7%2F20250816%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250816T170443Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC4aCXVzLXdlc3QtMiJHMEUCIAnx4TQTZJCQH1Ka1usi%2BDO6CvNycR37ZrbsFB6QfBoXAiEA3W5fbCebFUaxPwG1Ab%2Bql%2BHJyjqpHRc7Ticl6sfaeF0q%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDF0x8Y6CpkOII5NpqircA13VYVIrClz6OyE1cQikC7oDRTN227T71pXFAr6K9%2BsgQpTtCAuSaSp2bBPS1R0OtU1BemWMXNRYHc7lndGDsLV3B4mqQVKKomL9jVWvpm2lpo3RvQp1mx1ib3SruMBLF6F%2By7nmT%2F5G4Uv74k36N0ln%2BRAyUlYXvwGbbXItoNpINk%2FVj2QsPRlk13ZxvfhU90%2Bxq%2FZ8k1NbGRK13jWOqSNRoSIg5cNI6ZlJXOTH1Fm8XSDWao3WVnB54lRouKQh7yhdJmwROY7ShA00pFhDf75JX9tLdW%2F97LtgXpTUBEcNAgCc2FdM2f7jK49lMFVsLzvnNYz2y9HRLMsS6zgPyrhw5RpyRgdp3jrl0S%2BhN341ci3oPOYB%2ByI8ZR%2FcAG9Ys48w0580BCpvoIqdnOL7T7oOpwWc6o%2B%2B9RTMXJudKyF2l5%2F4zrKnD8%2F3QnNVDStrhTIMiPIGjPxP4%2BMQTCgTMPeamhSJcT54Wdn%2BCM9oIrLwUdFufi7xitSDVo%2FIEqWBuw9%2F%2B8W1LWYmEtYy%2FjcbIrqJfeR1wVFLAqt0sisOnHwQTkG6P5zhUDwx7kEaL9b1Et4AIm2tQXDYI8g6jRmsy5yQIucb79S%2F6UZIpBhG1oAuwegmYayTl5WdfyqwMKeKgsUGOqUB%2FUZi1rzawr%2BMtOSGUzZf19LIlXB%2BvXy94DunufRYoLVHMfXpaXpNoxG2LghWShBxFT11eL2sFNXHOoWcCpApl0BDkl9AZvQLRpRxB3vosgBViP1cwOmGngD28UfVm3w2fni8AsSvJ8jqkV89y2fuLD8NXpbMCz2rHYdAUXdCzMj7lLp3Gzo3gXebegDf%2Bt6PR0AJYRL2P5VEMj%2F6QrhaHLYwJGcw&X-Amz-Signature=a02e747dec40434a3ad427b9ad32215810d613ab53371ae944b36c7a6b5e3ce5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
