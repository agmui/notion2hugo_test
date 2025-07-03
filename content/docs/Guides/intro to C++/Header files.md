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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632A7WHMO%2F20250703%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250703T230856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBcaCXVzLXdlc3QtMiJHMEUCIQCURAy%2BFo8%2FDDVMRP2RO81EEZcn58W%2BpC%2BBkgFZVC1LWgIgYK%2Fm6ikkqRgSj%2Fi11ZLIeL627SL73f1JIerxWTJVfiMq%2FwMIIBAAGgw2Mzc0MjMxODM4MDUiDE42vz8RI3DV%2FPm7GCrcA1k679J3LOQxfclmC7507q%2Bf7fapXb7Av3ZBaNte%2Fxjcyj8oGhQ9pwkb8WheMfsO1v84FS3ZgtxcJngq6EQWNAr92RhQFjNPHgSkz9JjRs48%2BLrpl2FJqI0grL3%2ByO4jrGP8Wnn%2BN0m2ybv2vcJ%2BCAYxDQydYoURPjy2RR%2BUJ4MSyZW9UbmuLyITA8vEuTRFNQrgoKLyt%2B%2Bqfh9jyBMG%2FRAKbfLT3c0AnqJN8jm10BTAKZ0TtZj8RWBq8buL1uxabDrXrnvxEFrsjmuUq1rjZCpTVO6BoVhLM659KqzZ7eTVyIbKqiUzCeYozdAbl%2Fd0AYb39yYCfRFyT5nLsORM7jPsORqNjeA4F04nGU2R%2Bor51FNobYW%2FP%2BsboLZlNDhvCwtuOz%2F5Z%2FSFOZ%2BATGGav6qabCech6uSvNAF7It8VdCtF%2FoVyqbiE%2FHacdHWCgviJTSdFBSjZQlj0F7DFCeX13CQkMzvCWc8ZUiOYZFZhGElQooMAXmHfyItag4%2FH%2FUO3tmpkLf7cpNtxku8O%2FrtqHryAgyDoYXSRAendsPFc0bpTIXo9twY7uYt%2F86LeuRcG4six3UtAM8aJAxgR3FhI8YOfm%2Ff5OOgki0I4er0qhMMxuk%2BPliGqZ47SooQMPiNnMMGOqUB5vEHKxS6Fc10k8qwEOb1UAmPFOTWhv%2FV%2B9eXXOsL1NblO3wNohjIHKcWOHctNhai8QnX6xspKHCsh7Kv1zJBedUmgn3dqBEt53OqFnjen%2Fd2FyMEDFuh88%2Bv7k6CrhvZzdtpIxclbNmlxjs7FlRWuonVMWOTeOncgXISzFlMAP5cQuXxIkJHeVoML%2FwV%2FU7bV96Kbm4QqIdDxpsypQJovuM4mzen&X-Amz-Signature=780451f901a46d95bd8e6b3e2c299353ee1e199a33ca6ecb6d8240408fdbb424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
