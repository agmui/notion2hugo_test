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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466US6KO2ZW%2F20250309%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250309T170106Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEC0aCXVzLXdlc3QtMiJIMEYCIQDpDBJQ%2FdB1lAyu%2B1Tsjuf3tH1fvYAIrrmR%2B90Ed%2FX87wIhAKWlsg6E1LdLPxV%2F5u2ZVARtjpD4JKMxP02VqrZKodomKv8DCHUQABoMNjM3NDIzMTgzODA1Igy8SL8GNy117PiBvdQq3AM4LcAXw5046zWQE77vy2iH7ChjCAlCmhcLcN%2B6v7r%2Fmsd%2FL3CwHsL0sbd1MBqk7S6s9oDQBspIOpBpn3TzjYiQdSW5mNFpbkHQb3%2FZJllWkyJHogs48N7B9mpqzLBOSVHZHlqc0Ihx4PP4jt0Zy5B2tgCgFNgw7hMp2menu%2BeWFlj6PAcO8VxhO5ZoQyG7en3ofIYhPKrXNA%2FMdJ7H1%2B9g31eOPeBn4YyIkmEPrgMWoxXyJCuIy%2FLzywL0AWgTXhxIahOXS6eLMGpFZX9J1XLVxCU2QDqIjpVI9aJm2dUvkp1ikYPU%2FWtB39iOVG6nqJuQpOxqWvlJJuAy1%2Fy6AVRI9p0NaNtsvF3oOhMy8ekMOUfQLOnw7ujjyYvplcVHUPFbjQ%2BXS7o4aRUmQkZWxuWab%2BKLBtcMsuqKvnl1Hi%2F4PrljKQoW52HURn%2Bn%2Fm77BZNeaJzc769N%2F5T%2FHgT1S%2FhCEiiE1%2BTyNeUVa3QkUZZC527VmKqjw1VLyqZOp75nA27AWjW16UyGtVA26EtM0P250luXIv3ubhEFTJ6E9NLiH3%2Fm3G3RCpq6e2R8y9QWtxW50DfduGaml%2F%2FFEBtUP9KZapmPg6l2GfjugOIXBWS6MldVuHVsfjnqs3tnJzC1j7a%2BBjqkAZWlfgLY7uUCIn97N0FrRDyIlO%2FyVculZRP0ZoPlpvYRawK%2FdJK2VHCyhdwANEjFUIqPWIdVVW5V1eb2zPPMn3LGvLJAXAtuimZFMANtdW3D9IReik0JsN9YNg3t0mBHj5LXudy0l51XkdiqFL4t04iBl87ofVGuX3RKK4i6vG%2F3Q8YtmwJhTZ3ritbHQLO2UjmljZkmAdQ3BfJvFzed1u6PS7U1&X-Amz-Signature=cfc8914cb13cd5f113e12054c3bba519f5f952b43f1da25fd7e1188a32a797b6&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
