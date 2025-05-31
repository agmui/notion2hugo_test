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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665IEHS2PJ%2F20250531%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250531T150717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICXtJFLI%2Fr7hE4Fj6A%2FW3KdxsN5%2BdrJGVDuO8A5Rj%2B4eAiBqsyhN55F9IGQpx6pFwhlGSDp5GlbZeyq%2FHqRuqUgcziqIBAjA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBA0T%2BUDcIC9yNnnfKtwD9Wgn0EHjz5qcipZtjKLDyUvtlWSjdLtz3f5mVl133MpbrwbrlVgFZ%2BvtvpasQ3n0vlZRL7yzw7LxTqBxsYC7eydZlTQCYoPueX4HNVz35Y0CbXF%2Fm5wJgY4f6ok5%2BFRKbgC%2F%2B%2F%2Bk0uEFQFpyYFnfloFqgLJgQ5YAirasEUw1MupoYLTZ4Ciw9vvLuX0GzlyRfhVVICmzhJDXOJgb%2BRpO1%2Bcx8YgTcN3TG63P4R%2F6cuoRKcNzsuaosAqsmgRmL7kMX0m3fHNs0Nicl%2FIlsFX%2FGl%2BmWHVRTqCoMuMd7d3ZxPy0t8i7kwhN0k%2BdEH0vmjnHc235ZoRJRfyffUn6vn1Cw%2FwtaazGMgXIMRZI1wIajwE2ch%2FmFBB2%2FaocHn78TTT7yYtPmuJ2WmQ0UMefreZdoEsuj7GCeeRGyWsYS3qT1QIV8xLJwaZqznEQiLGiOG2dLef7KDQtfQTZVKay56hcfki39JEMaCPsHQSGBzYGO2mDP3wNhTRCrCmTSXpUIthtpznRBi792LIR5pY8nZelZpyrQm39%2BBcuPlc2w4RHxrgMdSE9Jp8rJxriNw9h4vhjdALiiKpWTLm2igkRa9%2B2ptDlfG1uYSThLvc0utLlaaYTP%2Bvq2WwQMObxe%2F0wyqXswQY6pgF2dmMODEO0KQuucYg2ukrwy9f7pelbhWLwKVmzkldLpwUQFLVQaGy%2BfhTB3aGvxmfL1ZsmCkyXDmTc5z8lMjuvGGaAudYE0URjBxD0LIAgv0pNml2D80RCXAiSYPS4u%2F78VV4acHi%2F%2FdoxFEKnjlCE9r7tJTk6DYc1wowNr4h%2FG%2B5Uo2INSSXM%2FAHglC9wsTgyCcx8wvYCnhUDXKQyAl7Uvd3S0XGH&X-Amz-Signature=40d9813e69ca9fcc95843a7c72bc09db8f175526536a128d70c8e47d0deb1d80&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
