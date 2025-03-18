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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466URMOUJ4L%2F20250318%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250318T003745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJWfp8wBa8ucgoSUk7bRfyc0v3yY4ui0q%2BsscCIilkZgIgaQ1raOhcpirbdzyHGqeyZNjX2iuOLseEL2miEI2EFfQq%2FwMIURAAGgw2Mzc0MjMxODM4MDUiDCcAhlQRO4nn58XlxSrcA6NLBweKY9H0M0kAuPsbJwqGt8JZwQ7BYu7MEaA1ZGN8WZfdA%2BcKzyneq1PoV%2Bfikpk42G9XvK5GPW7jgh839%2FuuK4alGhN8klbtNVj%2FQvX9RGNg%2FFrSp2vdEvTcBpWQzbomkSChBwnruNpzI3kdZBGBdRh%2FHKZqIgDV2lcFmIksmXuv0BQWjIklnO9Ti7y7CdYx3slcoWTbPEwtUfa2qQWSSvXxzEpUZO5QR36tPUMFbZpToRUUt3FQ4e4bOAW3dTtlZ5rO%2B6s%2FEJCaTeutboAcghHzCUohW97nlJXegVo2XQXmQOEFUwSgq%2FDTb77771xFUTuDkSuNayN7dYvUr9vROmIspZfsbRqSuuSxlCGR48Q3F3VQ0oA4iK7w9kX3KrQdg%2BEa8KaUY0GZ4pMJtUW5WjeS3pVPtblEkZ%2BnhxdqCbStty9g6zOr4e6%2BcUEPbHJDwTCdzJ%2B1fmDRNLovZ0lEvPV6IXuQgbly9RR099hh20sHZRRZzMiP5XcwMPd7l0PRK1uYZMo56qCg6cjpdZ153VxEuK%2BXLCHA3TsCpn6q8yKqEkgfQ%2BIQyNOF56ncCX7lFp6hbntU2LNlS%2FPIcMXO3Cb1Ai7gYZ%2F6yn8KR9vV5FJ4Axx34pIXaABvMLns4r4GOqUBk2WgJ9D1qWygzBNfcaK9EdtJkSdfuB%2BjctYbbg0IQM0HAc69AicDbvif%2FgXcO93VZW0LxLdNnL7BUr%2FjCop%2B6I9W0UYaN726DRFeooch83iII7rw5w6LRpEFIWYb3JtVjKPjC9AbAMxOJjPawoEGhbl2eohdFpNddOfkWlzaIZi7RtDwsx5DHOuqHY6TgMRr2hF8RkL%2BsD05tCr6SnHNSH2eG2pA&X-Amz-Signature=33fe88964f7f7ee56be315173b2a1f87197ea53700d44fcb9f9ae1cdd688c5fa&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
