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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVCB73OJ%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T081050Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEE8aCXVzLXdlc3QtMiJIMEYCIQCSCvnERpMFHAajWLaSpTP7UAlpPDU%2F3OTLrTDwP804cgIhAOxSx4ydzSkZ0WIm%2BIMcTHTikOtGaDzke72B22l7dTaBKogECIj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igxf2zQg8uYQhVU%2FQu0q3AMuD4gt3tJDYW0rTc%2B9FrXHibScD5LGZqfgXvlk5aQUKLw1RBkYmGTweECTHI4akqIQQc8apJNyab30JYCitUoRTOkBcsHTc4GM4rSvoaK9j%2B2iqOlGRQcr17qS45U4lOM0bhDtFDlHIZgrLbjtOv236kb0BPK%2F5WFjlkDW75w4iSyd5uwYmLWtV%2FU7EGYz9vnIjunMnDzro%2FGT2OE8iY25IeVkmVWgFWl5rScWpTWCAhr%2FgCHW%2BwBhsmu8e2hUCgE7XZeD1fRowuZ9sD4%2FPidXZ4oJGR2yNVEqAyuYaEe5sHHsMwjApXwhDPmoXwzE0poQVp1ODuf6zP%2BdiG5zHl4fTg9Nytl%2FHquWLwcYCFpePhtaekSI9ixwiu30327rIgw%2BkActGK3AOnXC7roVP82WHG04rdVPYcAeI%2B4vsn92I34KVMsrYMd54sPWc%2FIHrXjCn9jjj%2FdJU9o563QlsTI21E9cdqEgP4%2FaiCcbqum1%2FFXun1qebUvtAWb3NxyrV1eO1Wbt8Mpp%2FYo%2B2aNAOpmDVgoNj3J5bFI0Xpphp71NnFNwtwXSOv32k1ZEwD0znbvDJcwJUKG9%2FI7j6K2GX7RoQB9P5HVNuq6Ks1yXt8XX%2FRtAvwAkzsPjQN1p5TCgsIW%2BBjqkAeqw3yK5MIIzh65zdaBE6eee2nCKw%2BQp8KAFE8MTrGjL6ygtb1oOGfLfGfL90hzbUaCXKpDyzG2%2FkIxdnjnXBY4aZW%2Fj3Sn7cn3dSKMTEAQ49TBettrMvxgBMQ7XtStKCsEiDgnfBnFGS0Sy27L%2BdmYqdZfmOrvGM6MMwVcPOy6ylOs9Nkanu3OXqxeZJ86%2BArSt2QK14AQTf%2BBLHgxzHhasoXqW&X-Amz-Signature=be5b14b02a8b6cc9ffeb57d4c06bafba0823f54119056c88a0affbe6f61d0dc5&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
