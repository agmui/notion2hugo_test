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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGAQHUXV%2F20250329%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250329T061022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEAYaCXVzLXdlc3QtMiJGMEQCIEBgYPtHayLbpo7fObdKDQn34Sqj46%2BKn5v4c8ODwWobAiBy4deaLdQDMzE3lq8bJv3QOl%2FXXRLsJoAYM%2FqEX4PJhyr%2FAwhvEAAaDDYzNzQyMzE4MzgwNSIM5IkKaIX0ZfHGb75PKtwDfZlJLO%2BH0WDeNJHSjkec4gDZf4Ob3E%2FE%2FGgFK5BU7sgP6lfIun9FaXZ5Gw9WmLPSE%2FlXe%2BxxErZ7OQU05VxBQcK4h%2Fjjvtd3KFE7W9V4w1uPV6A4D9CkKirX%2BbxHpaduhAh%2FREo44SbWSj0m%2Fk2Bi8DH9MzBMV%2FhLqK%2FFBKBqdXcWqhXqM0%2FA%2BQxyPMctw%2Bm2y4hJ1Ind%2Fg5E5I3NjE5EJAgKsPOcJuceUJnk5wH%2B1ezkZvbqa74U9FXKUvIn0EPnzYPlgU%2BjDvRd0peIghU3eoUp7Awg1q0QWTojqINhRCX%2F6HAuKZSuqbnz9B97SL6F%2FBIRmO79s1%2FfGqg%2F6%2BbBgRn8E0nv9MMeXM5TeRXzSfWjMW%2Fdqfxuy8cFSYxPaSY4YH1UIJJ%2FbdSUAyQTiPRche8obYd%2BK%2FHiKjlVNHNxNPFKUOaOfhovd0Gv%2FnVKHwpT7N7uPrnpnjFIwTx8oFPcEEzMd3TnOJaP868Zhe0QFGALk8qrdsc6mH12SFlcGIAssci9uLiAc5OgthkQKzIScGlIcWl16wXzAvPP7AaxvzWxOq7Fbo6rcauOQ7GiWT81oCv6YsBGdaInFlvXB4cI9chD45gxIi4dvc8bCbPdMzzJhBFqzjXOut3vd0wkJCevwY6pgGvcbRJ9RTyghoQalfu5u5giAEw0RYetq1c4c0nGefi85%2Bt2UaHUk%2BjO3%2B4CrkoR3KQX%2Ft7j%2FgtfQjdgA9ph1MfmquumSDtr06Lu3CqDdFDDUTdNtLvcQssqRn20ZYq%2Fhs2DRAK6ygzp1JwwOyKM%2B1AoK%2B7mD5Y1eI8mQjZLgvGQyzh%2F2EHtW%2FtSoRtjZeD37ci2oO3ShN0wJRVbRkJ8G%2BSZKj%2BUGKO&X-Amz-Signature=37f8ff88220f791a6d13e7c672e4a74c3856559e963a8188907bb2305795b15f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
