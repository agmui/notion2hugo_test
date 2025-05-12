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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTVVR5Y4%2F20250512%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250512T230817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDcaCXVzLXdlc3QtMiJIMEYCIQDEnGM0B5HACY6idFV8AqxsaKycvvTT9%2BuauEXhsA8RgAIhAPeDb2seiyVw3CWrUojHJJueo2ZpFIcrMjuURMjxbb13KogECOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyE5r%2FJI8OebmkLYmEq3AMcH3O8dTb6NyC6GFzcugnx15wwW0WZjXkxn54vPZZWgaOvUKZgp7z7ffXdAaeHE4MMrohi%2FPbu6AVo6hODzHl%2B1kestJMAcau6yeJRtxCH3ljoPnOeCyBCYIAsd2hZFmu9l6wLeoIB%2BSHn%2FbLKrqzdmwJRzal8ob6ni1GakQ0jixNpVlRWi3N%2F3k0HCwrxqgt0fGnWXZ5xC9kYdTXyGlDoaNI8hz4lYDoh5r8qKmlMahjnSMN%2B16S6ANlW66lGFNC53YGCSGPGtQZW%2B%2B99EdQsBPjCqDmByCN364dumur%2FyJwMzQ%2B3BXuw9n%2FXDHhbQa9DsAcHdVVT455CL0mBfxKg7Rl1Vdb5Aj1rbvjjUWPbTv335%2BPrrvjeFn51WdoMox5QoyDXyzCIiBBYGY8YWLQYVF0Y%2BEGRATvD%2FiJxWKItilfosEI7b4j94fXD4GUoaH9TMypVz6s0hvHshCF7Yi6%2BI6sF1APc7e%2BgKmDwWRJ%2FzgfT9U3xdKfGBFc4WLygCXRxLfXDL5OdUA4q73gGSGJkijlncecoLg5Lsbpk8vk%2Fk%2BD1ZqGJ9YLnr9ikkCsdEgxJtTNU64412zcS0vkWnbYfmIjKA3vQdyBpVPL1v72reGPaLycS10hOZXWMHjDY94nBBjqkAbkYV3mez%2Bsv7%2FzZPuA9wodFJtvn0no8LnwGQJdQx2GYKSO4b5hwsESzD4nTpuV9ioFvmGvXWlX2NJs2Zcr47Nm%2Brzatb%2FkYrlzj82WM2juqinLvCeb7qMvusSrcFuxhLiYwtkDREZsrBsqZig9PAWSKGHK8kba%2FcKjjC5iVEBWrU9tQhZxENPYr2aOb%2B2CNPhqjjSSwfFAmB1kTGT2orgl4WKqa&X-Amz-Signature=70a085ce0a1c3b20197d238135419d2a53d3c71e6cfbc8b6dfb340a9a445fcad&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
