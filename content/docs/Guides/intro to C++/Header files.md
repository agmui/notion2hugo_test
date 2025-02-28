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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VWMBSGJM%2F20250228%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250228T210704Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJHMEUCIAssxqNMeAiAy3dUj1rAhW6O3hBvh3zOR1735jf0RXdrAiEAgPnwmq0OUiqH%2FfYnOn7zK0C%2B8hqdjy9YLqPK%2BU2fOk4qiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBnF%2FA5sfTbwclzboSrcA26s6O9INyYj3wXRxDMdohp9SSLvODzY1aOyj%2BVF8FAmqa7oVwaNyPMRSjdEApw7OkDoRrOf0xrpOieiwSYVsvKofNHsHlN%2FLD3bFaleNkbnDnLt0Ive%2FuehP97ZW%2BhLdVYVyN0S8xRq6Zjh70vZhfWwHRzpG7NfJExHVA7Cmphuy31HEYHv4en15FzapG84wFBs847yQGiP00dn3R9We%2FP6fWqdTjlrogB8iJt4pG51hRbLZFb8%2BXXph9IVE374dF2vtlT%2BIOwAEbiZv%2FLsi8Oj2hoXbdYGOG%2BgfYIwp%2BqW8WULOKINe6ffWwcv8G35iMyYCvhm4ErKmquZ%2BbEv2SW%2FZq%2FY52cmb2cSYIw1kevrfLsfV7kP8qEW6Nm8H3z59VCEI7x6zvmlY9OH7Ht8ECRvvExbXNWRRZbzYlYmJFTdShwvXLll4U4EbZLoVhcELL0L7I78y29r3ICgfTQdvUe7vXN3B9S%2BXGUETl7st%2Fp01Wna8vvYL32N%2FhI%2FtgOrNrqWVLypRnWniYpRQKq8UdGemr%2Fp8nBeDqDKkrSdQbOjHd1wPi3kKQZS95rdSxFz%2BJg5U%2FLF22N1wpfLOAYUDGs2gQvwLJKmrKGPd04MWVcgMOW9mtmo1UIV%2Fm6gMNCLiL4GOqUBsKROSUfMMSSK%2FMZQ76YybncdEUhxE51U7UXKE4e7InGFNX5iEhzNidyefOokATnEwXySghGUk9hShmEPZUJ6OmV8mxRbZ274d2P2ykMJ%2BJ93pVztr%2Fm3XZWk7XZx9MkgJMIsoO%2FTPRcju4uFoxCCLYqOQOp6g8B8FU4EfE%2BbryZVzoaTQ4GCDS87hAwgHtPccjW%2BRKUH%2F9hoP84qW7ckOb829SEw&X-Amz-Signature=c4a4ca5d81ff322d2264bdfacd250fa7fea0b7916a44590fcbdd7bf754b5a11d&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
