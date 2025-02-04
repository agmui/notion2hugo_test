---
sys:
  pageId: "790d67e8-cdf4-4955-a0c2-ca740556451a"
  createdTime: "2024-06-25T02:29:00.000Z"
  lastEditedTime: "2024-07-08T23:43:00.000Z"
  propFilepath: "null/Guides/intro to C++/Header files.md"
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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S5BKBH2P%2F20250204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250204T210600Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEB0aCXVzLXdlc3QtMiJHMEUCIDtxVsZVLXjZAVVMncJzZlQCJ4yW%2Fe%2B9cM0rux0fePGdAiEAs4gUnR4ulL0hAkRFWcjeWoAfdthvwcHZdH63Ge0VIJ0q%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDDLIzDPE9%2FPINzZBvSrcA5HUJW3HQDpS6B1kW8VH0vZ6N2%2Ff5kWeswigxr6Y2I%2FQqAoBZmjs8Rtuvt2rJaB9Kxa717xD8DGAzEYiC0KMKJSk0Fho7y0oXOgvaYA3qN%2FM9woccG1DcGSvKpBy7lMM0eMebQdkn0nmSW1%2BFrJ1V3QneLhqo%2B5LO9ShFhzzHLWTLVitiZO34BUWpYr5TQ2Pt6CCl7MO0L9LdEd4EiEzxLONPaIGwpx5NpwDW6gWV5ofN6pCnzXAK9xmbYEFFO7xMX5cZvXhRBYZNym%2B%2BBx4Uz0SEWlJGkKh%2ByXAU%2FZzr39tc%2FBzdWR9AouokT37oYIS9njwCm2%2FgA2w%2BOouCAjkvCOST9GqSlDsCMcSlOCbMguAkd4AyCWZsxw5mqxwW7eAtcL5%2BRysUeGpeChjzHmuhUdgWE43VF283sYF4us3eod5Tw5WcnfaeTNn6s2cyWQy9faBnOGxa22tpPImDR9128NMLNKiED7ITySO2onO18%2B%2BKRSNhKg0%2FEoMOz7uYtI2NJI%2F4n5ivoXsHEoOEjYRmdrhLiLVwcCrfOELAzkFbs72VHz3ti5A%2BffOf5a4%2FLhFDywB5OuqNr1G0LptKwDu0Ou5e3yd9D4lmdgn1qyL0D4pcVH3GxbJiSM2BsPwMNz9ib0GOqUB%2FnolVXcS72RFO8CEY007Bkcl6OS6nkuEF%2FQli7WpfdS6ompnbiLUCpiHTzL%2FhOv3D4H9ljQl8PwF3fgApoSrawKmtgjk%2BZ%2FMwQz8VXDMt3CG%2B6UvKdtbCcOb8RaCgaITgMe%2B6UxUm13Nm4rbEXfW51JjxfhX%2Bwz0zrIbgHoyV64h81%2BsAIIHRmWzXHEN4c5FKFcZTLpZ4WNRjP03GZGFCy9BRq0F&X-Amz-Signature=53155067f5003d4ad3730cf50d5edf39c830e53289f40f90e508638e837a67eb&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
