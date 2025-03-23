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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z3QV2S53%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T022256Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQCVu6M4b%2B%2FvjsslY1RmvcW2JBMihS5p2l%2FC8MLmh17RDwIhAPpisr6J8fau6Zx%2FU4istPx%2BPSQWkHXZtTEq17jfqlrjKogECMn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxXBxanwyEclGESLakq3AMmS146EBhsE7I9stgqeWOO6u88%2FuBQCKFvLkS1lYx4f1bR6UZRSNQspsTcGzoUM%2BFZOwCjMMDQmBryQSz967i%2FFBr4a9YCq9aP50pQEzwuX2O6Ylfs4IvpWg0R3uXBHY8wgk4MtNkVXcYhuAuDJfrxjPiRWWSCmhKQNwxksJxPc%2FNAJu95rj84lMomyemD7Q77Xuo01tfU1WHMiTjm2Pw%2B10vJBJXDLbET2gZ7Vkjix%2FxdtThV%2BQKTW7qC9bnxA4SBJY6Ze6vC68PX06RE7vZs7uxSCGiA10b4n5xw4pU3LCCjNZbBSJmNBLzqKRETLD%2F52pGZBE3bc947Esy7IPObni1BjG4SQEljFPhHQ88nEF%2BPy8dWZdbd4iUiW9DWk9AIH5xHsh3BUBjEBmHbaI2kduLcyjst08Bldlk5RQey9k7IknN2X1QPmQBme80BIrfK%2FKfH200Aq%2FKlpz%2B0ImFol3e%2FFItgDV5GRmwhUTFCCiMcCuY4Tj2NOQ9EsB%2F2GbglJ4FwrzpIGPGnE9VBzjSODpXR9VWv24cIQEP%2FLf4ht%2BybqQyMFt8g2hDXMQtisnq0GTqXVEKTx7rB2Z0eDinzts1hums4CXU6LCXX986xRkpCkzugLTuO00VZGjCrnv2%2BBjqkAVxtjtFmUqrDyWguySmeaLwqXYPgrtJnhtR0TELYCiiWr61cWA5xbxPvsUtwkvZwab%2Bkpcpn5ROCh%2BVi%2ByDcvoQYKQ6Yi1ZHXpx23nFrqMkeEit7pzuQ%2FqZixaMP%2FhdfvSwiTHtuyjs0Qs%2Fq64AdgGjbaTTNS2cnX0%2BqtRE92vhB8CrHYcg7jppytMxxBfh7FRlnbP9%2BpMFeaOMKoRriJ4AHT2rw&X-Amz-Signature=54dac5ccb35f21ecf0dcd8977671f50aeaf685d3aadb5452d5709bea9e61122b&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
