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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662IUOL4SC%2F20250508%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250508T022703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH4hbxF2GcsPkAwWUyJv519iCnvZNaGsnGXZBUiB8UbmAiEAq1nQ6KkKfnWbFzlwLYxkUIgHlpw%2FlqbJ0uLeWoUDwicq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDDzVW1DAW6l8O71PHircAwC99qThJqmYqjb3MN6%2BDpSO1KIPRD6aP2b8hY7wITBfZbl8O%2FzrN45wowgoWf62vjd8rVoyPs5dzEBjozt6y1jidn%2FtO%2Frs%2FrwxYc6LTFoIF%2BTK1yZhTlH8QN%2Fxtc1MbT5HOADvbeSMMiNRxXIa%2Fbnm8tIxy2hKsjN6Y36e1fCHhUas2ht4bP%2F0LDjje%2F%2FQttjs3DAD1%2FAManPbdYPP9%2Fvy%2B52%2BCzXNqqJx1ueLC9kfK8lBPNFnSe9i89fVcPtmzAwbkSrRUDcah5VL1%2BdQI1Obbm4GJUbjs1nvgTi06LGAjrcWSPWttJTR1EZz8dBwMjLU%2Bxj%2Bj3PT%2FYOsKomRjwuQhhC4R7TTNnVu4B43MAMic6ACNN736s313xuA6C6hYWAjupKt%2Bs%2Bc8%2B5fmeTN34Kb%2Bj%2Fb8GJSkC4g6DoBolQSeOwIhTWEm%2FKzpFYRgD3I3aZN3mDYWyQAlB4MExMN45p5ZaO0nxiFoK%2BhsrtZKrafFEseLff8yehy4qCOa%2FL3ccneEXKPuEbIzDFX9vpH4XiFeYXllB6BIKgV5nz4y%2Fo%2B%2Bew%2B7wO1lPiSVznjQCWyuJ3oJty28JutsGT0MzyLX5YFOV8%2B0eVDCibjKGTJQs5PxP%2FEx2osaZTw4cX6MMio8MAGOqUBWANfPRiBoSULw2qT1HdvgfdPCksX2YNTRL1miYuj6jab7%2BlXL9ShEYzs1yZP%2BBwFYMK%2FshusuUa%2BWPzl8c28qXXbVWPY8%2FTC7kYyUhUtiqRFUCkVZ0alBuQTeer177s226Qvo16CGvRgy18OzX6ys9eJbPPoNepLQwqMLfImsEqKnTHujT9G0TlTVZJkvNoH2DDCl5ir2lfoA47%2FhfEPzmGucybS&X-Amz-Signature=28c55fccaa24d7c9b6ceb155efac1a67700caf5b64e18271cce001a58f1e970c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
