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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SS6UFRD4%2F20250224%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250224T041004Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCrp3txRTQhbTHoMOMcpyJCMfCHSAwssQSfi4pKSaunDQIgeOiECvazzXdZA7ufJ6PP8B511Xj9xcymAoqCjiJ%2BUN8q%2FwMIJRAAGgw2Mzc0MjMxODM4MDUiDDDfRMmc9HiU1L63ZyrcA8M4Kwm71aHmyR81QZo9dwzXMLYEt6l6shSfX%2B1tOSlzr0UHMXGwuwVNiTx%2B2COJ5%2BNhAX3eHu%2FnMSeM7ya3HhPArHXvv1VDgy1noIQ5wXNsie4Ht2m1o%2FR%2B1fVhCef1Fcv9TfP8DPee88A1UIjgBu2WlOMTD8UxkvkVmASF0kYyGl9rI37UBV86z1jKXE745h0JPUbRGto6h%2FT6GFVy4R2glJz27UrARYgoNZWnclsjWQWBe1vFWc0xp47DQRTA3gMPTfW4Pw5xKsIwPfzV%2BTIIFym1LouFR3GahTdj71QmgcH02lRP1IB%2BwydMV52DNpq%2BzJwuYQuhGfvl8lNf8Zkt5E5E8bwUCBREMgLDPY9GOtDTbDDQ1bOMmbHoCtQ2DpMls2bo6cThang33UlkC9eQrcoE3rChUWheCcDQEJvY9K7ND25A3LUb2TTa5V4kMcBef7LVpJel%2BG9UT9nyHIst9I%2B7XtNs6ZOU2VA%2FFkNkuuNmui%2BuQTb4IXjTVolJGSR7bWQT66lxD1A%2FGlTHgLGb2pBzZL0sN2RujDyWqUF7OP59OmBOUYK1ZYL9tayaKDePEh8vIzI%2BjpgUdI0G4Qw6q4Bsq97qGKHtI1fG9p3GhfTDyjMLRNA%2F5pa6MNbh770GOqUBj8d8QDyAFZFcBfbryc8KnLt083VJD0yT55H0NdWV1tFiiCRCaGDECeC0pXdyTqV1j%2BwGmh%2FYlAXLT0FjDpzWzWojrbGM8UYPEfEVqu35v1JCucVxJXFVP4hV6YOK7bqvobhmbMBClgw%2F1tTfHCiOnt4vVn3in%2FEwTxyO3s4MUQci4q%2B1d1nPKU9JkBt4uaF9QhTmegMgO4jy8eO7uPmG0eSRO9fu&X-Amz-Signature=d02ba2a3b987e432f1c6287c1f392bbb21deb795688fa91677c57b405ecffe69&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
