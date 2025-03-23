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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRZZOGLE%2F20250323%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250323T070708Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJHMEUCIEQTK5uDeqELONgd4hINiwOxFGn5QtG7SgHpacJ5F%2FQNAiEA4M38Bq3t9TuyqHwVqGPaPFawPgfaD8DE6rQJFf5q0EwqiAQIzP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL4%2B9cPrmDN4YtxHTCrcA1VLI7ctCO8iLgCHnUnQdYnO0fb8aB5VbTVlXsPB7TE9w2s8afoEKBXvJsKKv9ueNB4gzjrWLfG1YUumNFwJTVGvP2jvWqUCNKrWqOokswLD6FIlXw8c5V%2FuOGvPyMKhaC8dnL5nrA87gkSAd5IFdvbpRPbxe77TZVvVk6Ed5OlUvrnzl%2BUsW9%2FIjJ1BuMag%2BaE9xkh5Tk5CtBFyuF6rwtht8UhL1R6EdVlTdzVYlhQ7WHoA7U4frDbpI22n279bc4nD3DuGp8suW5P7Wu%2BNg6Ik8ETfVRi9DEi8%2BpEI0BVvOU1SjRksZmoYRMXcCeF7XJW%2FRyjYgvFfbT3J4MpiIX7AXXSbwHJERLF0SNuVkbnk3vrY0yM0xRhLka6hN2co%2BfSXDv64cCrg2b3voJOfcRWxt7MlGBXpjzSaDkQBgxcEvvN%2F3d%2FjEKW7TDtGSf7L7%2BSalk9%2BgQ1tN3c%2FcUTIGv9mroikuYpzqGlkT4dVZQzUVNvoJtUaAxG4eaqPTg8W%2FH3TgNcYnSiArT89wZNl7wK%2BWu9mSw2YWhdiZQveIrle7ceBG%2Fc1AvixnkhkpRb5d%2Bi3QBo%2FZ8ae0NyXKxW4t%2FNqAKv6sgFm7tFzWw8Tb5Iq8IgoxU8ETaOsD0DaMJPj%2Fb4GOqUBv0my%2FTvswqrea9LkcYxYvt1TAOpS0wmM8P3vUpZWkOS2fCpKI2hdLjgQPNTcYdy8HuGkSXEaunR2zZiuuZHVCmSkWIqfoDKyuaK08SjcXatzfpWzr6C3M0UQWTXkmLyYvnbxXO3HHvK0GlLCLIYbg4npMO%2Fv4SxPyUgxqkFTaZbJSxtu9I4mRiEyWaScYLs7vlsC%2FLZ%2FT9HokaXkj9YhWRBViDkX&X-Amz-Signature=c2bd6bacbcf14e722fd721bc42d68eaaf7186a9e98b500b35fab9fb2483039ea&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
