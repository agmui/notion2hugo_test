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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GYJ2WYB%2F20250606%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250606T022909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJHMEUCID0DBbPQU8%2B61kWSQTlPTt0hf0owZ0hKyk1i8WkwfGeIAiEA6M9wvbvJ577xy1rO8gHUBoeIv6MpDWnI8rHhzzuuzG4q%2FwMIUhAAGgw2Mzc0MjMxODM4MDUiDIempRqKafttFxKx8SrcA%2FINDigqBzc3qSLbZ3SrUfEbBQVMZrv4OdijEQjt0NSV3vpwI%2BwRUffNEytQXil8QXkmKk5jDaf00X4xXqQEIFJXZ9Jpe0%2FUm1kGXLWOLXCp%2BF%2BEdGv1lo9%2BQtnc5Fxa8w9kvOaiyEQGq%2FFj%2FJxsoq6kLdIRQI2%2Fwe6WJpxyUXaQGhy4vPy4dvBtOSMNBrj55hXRnezLKkaRIkXdQt741F4%2BGTNH6hUKdvb95%2Fp1vU8vfnWYr4j5fElmMBXDN8tfNTEhTbJKPN22CobuH8cSgmVnHa%2FXK8Ng1aJkMnmhfmRQRal%2FP%2F6YVOju1DLRFnPgKsqREsdPQnrFlJyu6p1SuF3SdBzVxunJYjia8ohnqacABpVFk32OzMTUCKv1G1v7stIWTagKdcCLpF1n0vquEvIcp4Jv745lMaCuywmgRQT94XZQc5nFRkWLJ%2FZ374yguEiCtJ0p3Tzj2R8vyV1UmHypXWkLFGb0x204KpEQqHqxyWE9OoohwObr610i7jXXQ%2F6E%2FT3CENvcLCjX5%2FNIuUQvPFnEOUlgkIGzEV0hFHhEtePADSbCSZPd8TwRaKVuaEtT5AuCKWZSviQowKnJBunPi3S6GxHc%2BUoMVPbuYGtwxT6ElDhRH9GIIWO%2BMJTziMIGOqUBpjK5TUbAhBaaBhPeRcu2CKPRP7dMbjMRdGAAfIjMO4%2Fvr0nezuwhuqEJsrkbGZ40RvI5JaesPgUa3NxQH1EvF8d7LHB333jAtgGdgdNOI%2F%2FtPURLAizFcO3HlEboJ1JJGRCb4bl6u9YzL5t3Xd4sXsaYQpfb%2BXICOVUNqHex2KaI5vlgyQSBX1pjCt77s9YJHNFCP%2BPGTeWj8QobbaNBUQ2hkzii&X-Amz-Signature=072c9c7e51a6d00145f11b66e7b1d0a25a71b8c3b35fad0d66fe88bb895d22f1&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
