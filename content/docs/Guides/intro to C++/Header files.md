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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5YGM6NH%2F20250227%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250227T110654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDkaCXVzLXdlc3QtMiJHMEUCIAWJxloQcrSrurIjpFB9c1WB%2ByU98wxz%2BmvmXaun91c3AiEA0eyUMbLF5FRFcq8XdXv5Bib%2BC5%2BzMcNMdeGWlg1D7koq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDAuTWUu7WZakpQUY9yrcA5V5Ywb5GKTXfIM83h3g%2F3UQrlHHzeT8Ag4ornFzGt1jwAQ9YxJFWpKwHnmqH3UnGgdCsvo279XhfI7ea%2B5cBUgJ%2B5w8GJzC%2BwMUDJawnHUN7Cx07AYmC4EIqDaONTUC1Wu0ueGoyAuBEV522kvovnBdFLNe2PGi1J1gNI%2F872MVJ%2BBq6pNBz69AVXsYcU6PO9%2BUcWKDhI76H5VhjEjesnzLn%2BnVQbYNLcLEwGCwpDCZpYEIjogpqGIPIhCQXA7efmW%2FE53o2hXHS5S52yqKxAcQ4G%2B0lD9288F7cn3GbeDm85gkK3BfVUgC9y2mrO%2BVCATm41XpmJx%2FO%2BaTA%2FfwCaO6XokVstLCKDbGdNdhPQlX2zHTnAHV8bN78uULkzZjim2t2lLsu07FKJgb2Ts1l3hbOzIG2fe3y3QpSWoCw8UeJ%2BdFUGDxsnvornv9ebhzgc99ShxphPCcHddkHEU6vdZxlAo6vqDXTp9n%2F4yTb0XTk7mbLQVVF9ySAA0ydtr0LCUZwdoOUDwmGCSqbKBPngYkof9cWvSvXY0vbginRi0sQyP6YNIyg32TpaqKyZhZiUHsEK4bMuz77jWUgSeGwBmig6Y9xuUBGVykAu66pULOFVl%2B1d%2B832l%2FcJDeMI7RgL4GOqUB%2BAM7OinyXmEO6O6HKSEUY9bnH9cmfsZ05bOg13zczajH0CYNf8FR8lpBevnJ8X%2BRkUOnhJAU9trMjhK0facKzEseR8lLK%2BgvnDv%2BO6X%2FKgzuFHXgSBuxcALeZTZP8z1UHD6JXTkjee97%2FgRPhGe%2BfPZhw1%2BFb7HvVBrVNs66%2FnZklwMlpg6M0H6ccqDKjwfTQ%2BBVOKYSAMWkoX55RlQHNsyhh6bu&X-Amz-Signature=d0f7cbe15819ebe7b1e5abe88f2ab86213c386b3771e29f9f55ded82f78d466c&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
