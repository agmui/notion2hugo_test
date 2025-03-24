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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGCF6766%2F20250324%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250324T100922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdkvBunAGa6ze%2BUSSjlTuwTbKlLmny8cFn%2Bw2nx9LJsgIgaxQzD6COwoJjtCbHbrHZVJVs03s4kTLhI7dcehYkhf4qiAQI6v%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEDG6RvcOkauKT7IVircAwxXV197UqHi6IGR05fX7CKePYlkThSnDbss6XsG%2BvNUEK1WaSz3rb1F%2FWdC6Y6ddg9r8pA%2BYB8QDhKLE02rjysfSfgVaOAq1QB617LNjv5Vv7uDBMw5%2FfqMnOZaWsNoAJ3%2BulzicU50qE0jzJ3pO5LxugwNzZTg7FGuMPZNaWsi2YbNPf04BslyNP%2FssovbxoWn7Ywu1mopiFt7iaJW%2F4sB7373V3BokATa9Dlk%2FpqknRTOn%2Ff794KdDvrxUyHIrJGfeJV7zZaiZD58cLG6fV1zMWbnRkablOQIYp7%2F3d6KgPKURVHiXmu%2FvN5%2F%2BhAbIYe4eHVsEvx6rMc6F8seeHd38Cj%2F%2BeXI4PDnMWwAv5tXxo3UvDT1xpgPkZv%2FNZU00pB8MJyRBvx3n3tP6FUnraO88rNtHp2j%2F3CtZuD2SctAU7uDAj1prKRWGQooyn28OpCE3KZvcm%2Fmflq2m8hXRv7oLbFH1Kigxpe5wis1%2BnoJ9uuSLrkO4X25v2Dlc0TsSTUIGi4aER5UT80gYLV2VGQgu%2BaeAIck1jpsmXX7vgk%2Fa%2BrwBeFmpNO7b5QHo0js4JWn0ykxf4q2bphBuQoyyA4SPPFxrNhUgwz8emQC7lYhJuD11X6nnw0BlPkDMKbEhL8GOqUBT7o8%2B%2FRpp%2BC6OmpMfIDT8Ssq6ccB8I63SvaHHd%2FTjWq64rEx6uY10tw8VarzMTjeWmtQfAvwSUy0auLsbkHD6Qi%2Fw45B1xUFJa9qdFmRIv%2Fxuj6q4NlbD4t%2FBPTdgkgh65GCbbI21oeMxbm0JEE%2FGB4UFPwLHY88%2FDOg09fT5ledo5vlDJZ5qwRxssXEFW4dAvC3x7iscBnJI012i4WLIy5BpIG%2F&X-Amz-Signature=0e16449c07c01ad0818f9992c1d6697e0e1b058e6ba5d9d22b4cbba76d25476d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
