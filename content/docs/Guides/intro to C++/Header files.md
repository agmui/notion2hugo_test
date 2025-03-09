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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VYDJY7IP%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T140124Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJHMEUCIQDcZRN6rs%2Bt9zmo9ia2BnCNf68gtXQ70J51rP%2BcsTD5HgIgW4LVABmbiSNvDbW6vrwfpiZ7JysVadgfAt5ReQwRT2Eq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDLuha0nldXUsKG93%2BircA8kNH2WyYJor34bvvHV0hFSnlont1U1iceglIOULnlmjU82i3XIyJ1%2Fm%2FTRyQ0ALHa%2BniGWGFE2FmquFBvJKqOxoyYl%2FvHWXspwkiw9JLTuAvgeZJ%2BcFNm%2B8JFhAS1cTfn6itOiopwRFLlzlTVS1%2BrhSMo8lrkbIE%2BUiD8ImLQxJa4WXxahNNM2Pgj6axyvdYQtDn5gIznBgOtrFBR8c1EJfboOkM8AQxV3zyJTn4J8qEeOngXLGSUFE4736Gz2%2FCHbSL7gOC7YvC%2F4Th857HZFISHoAAnUv44J0oWEGvCgcqlxD2ZG%2FZ7ObrZiMV2jzz1ALACsugBMUEI4E%2F2HsOHR6rYci%2BYiVpJ%2BI2guG52o7sNK5wmPDtfAV4SsIdiAoKA7SSW18WwFERyS3nxlgjZtPKRq88sNUAEeps7OM5jnomgurzxUwBNktNF0gJOLarORHB48mvVTvhT9S9GanA31NXrCxIUtUD2nCtWVlPj05kRQ2v4gal6hziSoa9y6T3a7mFIQ6FDCLX4UwJ8Ap6rbNKLP97pxGEd3onY%2FSJZ2Tc0qXR%2Bwjbl663XKOy0cqD1S6rCsUymxHUGCAGfFR0oDoVxw0vACarksMzrZUEt%2F2s1MawqjTEOahPpE7MNqRtr4GOqUBUXVDcnTlfiQi4utKVtwaRA3mS3vlEs9d%2BjgJnmZsZiPLjUEx7VddhNPQcy24wMpMlJuGLrmrwava5j2aWIiCtadzMOr5G%2FTupfJkxomuYTghz3R2FQimuKXkBn3an2BJPBDea1gGvqCUDXUb6lfdhAPDQWqm4uctGsXLRIicPGFMhN7FQus%2FI9EgnesnoDoX3%2BQMDjI4Beaa2nEkGDTBANmcuCcG&X-Amz-Signature=999063a18d53dd4a56868261527a4692fdaad30f6ae990e2e6038b0633815c66&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
