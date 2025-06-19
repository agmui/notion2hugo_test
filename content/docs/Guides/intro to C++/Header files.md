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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664SRKJGDQ%2F20250619%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250619T210758Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGsIy4rnaaXrMXoPPJgtX679kxxUauPQn3tMuNsgplqiAiEArQjxppTCOTvTFout0C%2BXbv%2BznaXQmpnyV%2BeBr%2BGt6IoqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKH%2F4URlcouCpuQaXyrcA1sUIDOiFPV2lFv2OcUiRVx1%2BKEysRfzAnHP%2FjFkpjW2o%2B8y9zmhjW1CjRhwrm6THfsTKBNIck41QRqMZ0ljEJhztonP7H07AhEnt2m5OnVHWcNgO05RXLVbmkgy3fqbR1FSKSiesvgjJqpRNt4dE8b9gyO2Cbh7XHiLoUmUv99zQFUydDDISOABOkHRpEjJYD2lOR9rm46zWG2pOCuJ3QmFtoJIm38EP6K90GlgqWTA2Mz1uHyNY7eul0OEZ6OXxoDD9J5gxeAksaPMaJ0sQyltzG1KmEUInPSA2Gytczg0afN4SuR4mZ2tALgFPhjZhp93%2B5J9cYhIuLxDmF42oW5VYHhfgsB47uEe7EyLWQgH%2Bdm0jOrFvc7SFMOs1TzzBYfuqUyMs%2Fjupzw9Q43N271QHuNuQvZWKc7YAphxv%2BZWwoa4owW%2Bs22T4dss3L7IGDnMDMFqZq0cnlK0oFA8W3Re7iXegHSAG7ypbioQCGeETrh8z0ElO3W8iM07ZM8WvYogzCK%2BTr4i1NEoJzuhuMm50yi3czJ5zJhsH%2Fl5QTwhg3E50nC0alT6yqzDmEXslJSKKevHgmQbYipX6LuC29k7l0xK0nJnJynTqXoWnI5UVV5AYe8Sdory5htoMOG10cIGOqUB7U%2BAEW%2Bc71ToUFERgEH8OQGMZ0QuurPA6sVjBFUFuGVz7VPnbf7%2FYIDVzTTBo1qVkPpteGGOdB8iF3YokuDw0qWs1Ogs8mhMAQEamLUatBMVCT1%2Bkd%2Br9wen2bAe9PB80C6rLpSHVquZV50qKLGTbMAJUWvYNGnU%2BD%2FbE8lcE%2Fs7vPKqPV7bbboo4GJgO3qcBQU8nWxznhqtCPZ859g8n5MD919G&X-Amz-Signature=c8755c180bf6f40aabf0b7ce931b0982848920d488721c0e9e73e0398608b398&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
