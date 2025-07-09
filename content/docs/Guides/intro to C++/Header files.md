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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZSKBKZT%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T150920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDVtz7%2BJK6hHrftp9kH%2FsHw9wxX1An3AR3CeXqJGuh4UAiAgnipclXJXZZp7FeYvuCtivxkzkZOoE5rJNVsO8UqQniqIBAin%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FLHQl844Ctp7avwNKtwDXbCvAHnGE%2B7t8LwiSij2V0SjbPkCf7YeN%2BkQc60dO2vfjqV9b3%2FDsSiJNHntGiYDfQFhbpCBeeS93hNq60PGVTREk2V%2BKv8kCC2LVXsjt0Kpt7mCWgbIWMINGOvomYh7PIBhzPQUZip4j%2B1ZSON5OwB2FOuLmvjr3l9GFYZacvDQ9YkgpHEjcITjTE4poB9SoJhf3UItG6v3ReyJVkWSaKIlmmMjcfyyY6%2BHsUDTmTzdPQESkYP%2Buz60okpotRPyJ012lyMZi2oFFxlwp5KBrqf90iKl7mgSfzd0t%2Fg8R8vvxOcbu9p%2B2rxfUDYMvqqFeyCZbc2bUizOGHZuXTxIncN1dU2WNB0ZEzElAbzS0UUha2Z8rqv5c3L%2FYopcEB0P8Xod6yQtwlNxqjW4kY5GSK9KanjQnq86q6Cg%2BGfuj0EKog9cfY5m7AcFSWpkuh9%2BMDj4edOK6wErr%2BYi1stvZGevEVWKjR%2FmTk8DYCqzsH3543JLn46gnufLFaydj031ly07E4n4G4zjO6TX7LcdKM4m6D1ZOc3uNWnpr7Qeh3Fz69uR1cJ7WRCkGypHxx67H7draW3csBcnID7A%2Bkw5Xowa16ugTZmnjbmLSKzwCU%2F005aVPAlR0c1Gji0wseu5wwY6pgFad9CDuS%2F1KTKC9TzP7Vx%2B8Xk2jxy5zLtcx8FKgIob%2FCnj79TB33ajcFvG1uBDqphrc8btFHl%2FiEPr6jjkoXVOPRZwqJR7SwPWAv7qDOQP0MaCmx1EeuY5BGLi%2BAujhY53ZmPfIIUXC163b7eW08e6JTRSig9J%2FWGcFueDQ4xU3ynK0F0Ff32eMLiM%2Fun6zVuBRS%2BPXoredp%2FRLvcHSHhxFIrW53O8&X-Amz-Signature=cdbd1243ac6a732f4b5069079fe43c9d5c3a96027a755fc56eb2cbdd9043b337&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
