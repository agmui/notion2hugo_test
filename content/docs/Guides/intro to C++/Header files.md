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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAESKZBI%2F20250710%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250710T081319Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIErh%2B1DZGyQHKbSczIDfO2Z4w2vMKMMni1eGpMGIPg6oAiBhoUzDljx5aj3ZRjwdZ9R5%2B30zeUkvrOAVy6zc7iSbuiqIBAi4%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM5JBKspEnB73NuUvyKtwDZsnmJDpvctlwwCEUrTvVcB6253DZcJrvzlE%2Fu16V48IgWELqsVx0k3SPgTfINotUPkOleOCI0J6UBLRJHLZhtmNF7Hd3viAPF6asEyuRmaptKU19abpjUGZoG9pyfFo14tKMRchy%2FgzUbofgPgDX8rEn7XVc265fdfBZNyJPMl9zp%2BxWAx3TQRGYFd0bTBvGCNt9BqRcvt%2BR1DIE4AYr6tjKNawI%2FfmoajFFr0uOImb8Iyx0H4Mf06vQ6RAx8gAxtgHmIsYxbSc2tP65JnfSjM9YILIiq5xJ42XzYSlnAImSgAH60pPKj0cEC6x9%2FTVzaSoqjvSgb5RCfF3MWczN2FJzcRGVkB2zow9wY7V3xrmasJLRbvqsxlmwpdeEUpAJn4SHCbljB3CAt3n9ChBakoVFoK8KyTO6Kyspt2B5juWslv1rMMMfGwU0gDp%2BYbHLLSOuVNPhjT6GNVz1C5qPzQ2U%2FAukohqZIdBhlny4NcO4nFuq3XNkchCRHi%2FkMmSni7wDPjjaRXB6bkcV0DSniEjoBJeAmonZenjNyel7nvQX6JO%2FgXGJVumtHIKSvfgLGGddUqqyvY3xrDHYhKGGb9j%2F8jqOoTVq8yzZCiACXl0jmQlW1LRpZdY1bzUwntW9wwY6pgF9xVugVJRRdJVq4Nu92KHZijY6KyfNzdWB2cFffL6Tg5Bz56jbab%2Bih0m9EUXedmwndrFFspNZrrgFs3bfn%2FDtP8pEwEAaDCuC0dqsBVlqs10jQPUflgBwGVxkrX0uU9%2F2lErtwf3rMap76z2pusKsgduPK4RrVBL1G%2BTr4C%2BIy15Z9cPXifC%2Fya%2BIz7slZq39o2D%2FczWwL8%2BndAZ1oonxS0r%2BsUUU&X-Amz-Signature=d372720d906de615cbc4ef299705ca31e6dc1fa1d705311567fd9cd277148222&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
