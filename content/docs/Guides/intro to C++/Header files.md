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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WSUUM7E%2F20250526%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250526T190654Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFd%2Bq03eIzGvp294Ln%2FAz20YUs6t8Fr7zFNlPn7vPLk1AiBJrj%2BCwWbBFSRhx13ksWdoaYhpvmfKMerxTtBp52olVSr%2FAwhLEAAaDDYzNzQyMzE4MzgwNSIMGvHPeS1bcwR5cOvQKtwD%2FpqUFSPZZ%2F4jp%2BHYSdj0Xf356X2CPvI3z4ga5fERAdGM3CjCV7C0IOlhrT0CIvK7PISG%2FJH607OImdBRrHpKDGqFMw4i%2FeSBxCdy7T8aZz180AKHjhJQVOPOTlXRm6TDatWHVfWvlrySMjaCcGBJG%2FV2xN5pjSgVGQV%2BzAa%2FXN37l1nxW%2FH4%2FdVYgswXZnHFeWdiXOmRuyxtHcPf82Yoz7T2FUC2S4S9j7WOlkB4V6eKMfum3xPjrp%2FByjnr0S4GOZc%2BvEJ%2Feavy7pIojsm2VFzy%2B5nzBHL8tmSZDVI68LSgXkzgGktNiLvzXiVGr7aym56Pl49IMABrSOT9hXdQGdtXFGve37qpq4RS%2BZoODwOnj%2FGBeYbJS43j7t3hajqkHrb3qxBHV0ywb9vkKqUsdSAuTOrHsgUofZc%2FyujfGBuxaWef4XTUxozDMrfMqfutNj%2B%2BA%2FGnPJlRl9dta2LOijwY9X1iZriV0dGeCi364NtHFdbdYURSP0Zj18OHc0zBCXf2c5IT7KvUq51Rk1HE7PBWRbtbK6pOeyksatjpls2lO5CyxqRRPsYdJdu1jZ9mB65SYH8PuB0TRZeKgBmo2JwCK9iPz6xcF4%2BK8Ma4ag2nMGlriuwJquYUjXIwjdDSwQY6pgEb4PR0YkmwV%2BFOt5vYn9CN4xfnMzW5ll7uiSg7iDGVkQKqgjdeSRwLlW3f8zK8sfeEymA07PFG66N%2B25XNURlxkIo3qnSTmAP%2FHvLvp4sKYWT%2B0avEviVHB%2BTE3mohkrj4QRj27IW0hG07oQ0j64V%2BOyi95Y%2BwwUnB6R5foKfrQXMnKQk5k9gZwrqMv6egNBCZHyALXPR4pNdPOjhzXGygFL1z98Ah&X-Amz-Signature=c773bb135086fcf633fd72ce662f968f1c0b294b763f7e02ad0b5d4ffd4c4d75&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
