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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GEHT7KD%2F20250515%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250515T170755Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHkaCXVzLXdlc3QtMiJIMEYCIQDf1CPkIDXST5IMfPdtfuPeNfvm0U2lxGyieZ6KGv3h6wIhAOC4Ovhlb4lvOShdewuWNpbUILbDKMfyDGe4kMRFOryWKv8DCDIQABoMNjM3NDIzMTgzODA1Igx6mvpQM%2B0A9blgJD4q3AOFV%2BCcEG0CofsmJpOTacGyn4BrEQuVYSGpvkdbwAfNAg5PovKXYWIzzsBMWhEqkWY6QABGCJ3vmtTVbIDNLbw6356KDkklHMvdxHpDAniokPYnjLdMST8nQ51%2F%2FgYjrSYw5t1xuKm1M5LRSThZ8EzebHev1aW%2B2e9Kiq0%2F9CGZKZQu%2FndxNs%2BCUmrU1hOlo3Ycm%2FOcRdwzHK2fWVvm0xE2IDLFFegXOJGuqepW74DIVI7wGCSyRrzSYgKDwS5yHTu8mtvpkpqEdoVNg06E4fASiddQi%2BKkzZ%2BmDGq1UuoExyYBXYTCUSLv2cjdTCWB5CedOHUz%2FPMZtTqagFKpCX4a0nA5XT%2BOwABLhsPnmarklf5vhle7XENCq%2FSyxr8XhXRZqkUlUdgbsLznGHlFLO4uViGMuvjErP7qMH5wJYRQofHZ56YwlRIWbabtaZ%2F8VMSg8b704HMRa2rTozmUOnOfMjXjoneUt9sWri3DgIphEV4R8L38717C09EQbpFnUhT4ECInbIWlKAolfXFwce2Cogr7a3Y%2FDcTki88%2B1R1p3QF7yilNwI5BPYSRAnRDzVFpCip78yuA5mIrTUqcwBItIiVOlT38H3css8fKtPvfFyi7Js9GgCl9F%2BkSSTDTq5jBBjqkAd5OZ2p3fe2h9p5X6N3AjAOyA68jKr54aWUjjE9n9Ct4s8KfrxAicSnVWYFZlYwZrstT%2FxtzbTkVnIbJ1vscBy8klbHj4s9y8eIrmZ7lB3mU%2BEr%2BZqb%2BXkHBZIwsUqVUhGlWl3cj7XRiEanHMuJPLa6ssuEt9C7MC%2BAsIx6rlLvtcMu9sPtgnklCzqaWueM8tC3f%2BodETmu3R6GVHck9wFoz4IUc&X-Amz-Signature=17140e47077bce178499291859e77351267d2e6587d1bd030e350603d429b68d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
