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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X2A6JBEZ%2F20250518%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250518T041453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDM%2BhUOJDTmlgyPWc2c%2Fw44dUj%2Bdhoqbc5AZKEepfRVZQIgY3n8J8YVFkxAC7BU5PrkWx%2BnZLFh99eJuw11fUz1wAsq%2FwMIahAAGgw2Mzc0MjMxODM4MDUiDLm4ZLRhHiJGO9hxEircA8KBPIdTEEQ4KfdQT1I5mJgHjiDM2Afi9HvFQuhX3v3g1RDLgJKME0ev7%2BtRB0WbsK3A20fOd5N7dkv3f%2FxdM0atri%2FvevMr1otk2rA%2F0PdMc5Aqp0j6LEGP%2FndYhUEwKvFXOjn%2BuxkMKVeoljDH2sJ%2BKZ66n9eJh3WFOFsgskWU%2FMIYpyCgjlhSx1xCRENSR4ynzyU%2FZ7wDRKnhvGh%2FZ0%2B5F%2BP9kv91L5lAHMLc2he0BUFxGWP3pk%2Fm8Ti1C3kVuOM1MZ1bPj77iUOytIJrRXhebOPeKPCg6OU%2Fnukj8CPsvMbjMhT4fwQN4GXPPf%2BRkMcihHBD3NaGAmYA00v8V0pzQqIvdnykOkllsb%2F2ymANRFmMgdC9CP1DmCmMEwI%2Bz0zCjYDmdqE3My9Q3mY%2BdbXdC4EDI5IMGh%2FzkUmhogoKv148yYL6Qmf1G1EKeCDpmRJjvzD%2BaFQ7PEkY52Mb3mSC2gzSSMBYFSVD63gwU86gefXUz6RSoNnX8tIhB0FleKJcfY0FaIEMU4PT6oKdtgYlgNqg%2BCVU6cQPESiMX3ehyRt1Fq8VjuB75iXn8UDLZK6KzvWv31twSho%2BbKPSe9bmasLpNkpl0BbCvyS3SsVcLkfhwoDqnQqGIynaMO3rpMEGOqUBtHpkKrISRswZ9TSYfhPMaOWQekqucgmnhlx%2BGRlGbCbeHCiMbYNx%2F3f6jaQWbKxlex3JInjAHOldQsdnE4BnOQFCxQrBX%2BxNpAOrPlT3yanK9tMOwC3pVN67jfrMS7gry3ah1gLU9kC2xwHUu10ZJPNneSit0DkMYf1XQAfoqrdpL0QoramIYTktgehS5NZg4I7dj8il3RDZIEotJGOmfa8Bvkgi&X-Amz-Signature=3d124707285ba5b2a3a7fda86f94d256592984486351e5f3fb907aea83bd5808&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
