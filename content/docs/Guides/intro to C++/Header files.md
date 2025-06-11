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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVRU7OEP%2F20250611%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250611T004229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCb0w32m%2FsppcwliAc7EogvnjcCWbZ%2FYOxEp0yGzISRqAIgHn91of25pN%2FuAwHpFwAXgSzKGSeJd7QtL84mugGPsoAqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIb3rMoT9fwQ4IemeCrcA4moILE6rrlm10Ei6FROrPUy9H5kuBbUS1pvjDuKNESLAn31gnxI%2FL50mUhllBEHmcmbkg%2BTXbvRRWByTrezjCXnwP%2FY8DjsI0NHH7E9N1e2IVjaxo9x5r5Mjco1GeG5m4j8SDv8XtOG8PLdFoFoorgS4bU0eALjUeaTxu2yzMIkRi6EC0DTc%2ByBv8GDRzxZBLFECVeTGiuj5rJglvFSGn9W%2BiQW7V4b4Blpx%2F%2B%2BcwMVyMVKXeGg9eMdLviDwcrwiWPpzTSp5VDTDysq6baeixdCdFHXJiv2Lh3dhMUzSfF1NMzYNcdZp6t9iNCZ12RGB1iqLobbjvScYygJREZM%2Fu%2F%2BRHC8ZBO%2BVeBQC1WHf%2B2U8fLzIA5ftddYxihA2YlRn1yE5FM1MXeJSitArgbeLhATg3kBQI7kpdO%2BlxuVY4DSbMQ9r8X2IijnPV3Mn8rRZcRSPRGivEO%2BmJZvAzbuSnHQkRXaTriEMPID6pdRRBSYqzj6ilDhM%2FYAexZuyaM6iyhJDm6F7NyarYv9DDOq%2F3CGlGirnUAGbbNT4LAS8qtV6wDkE%2Fa3ZCUq5U6DBwzfgE3ne2X%2FctLxbq77bByjeJnoYd1ZwjwfV8N7tMNOPETbZ1OwVGzLEZqBG8uSMPzkosIGOqUB%2BDrFl8%2FQvZq%2BnQMwS7WrKsVFKYLiGyskrQCgmLHQZys%2FMN55eqXhQ%2FKIJ7UE1iAk%2FEXzTvyd5Nvnyvoz4v6CioYCZpyjeZvNMeJdRFIWdNbCTe330wKo%2BkyUq%2Fl7uHfoi2%2Bch64Cz5WB4SN9igdNichxJvXpqP9beXLjckKL%2BOx1zTgCo20DqrXNPa76Iutte8%2BDSc1FD9FT3mpKA8t4czj7jRuo&X-Amz-Signature=150b9f794eada4bd9bc5eae8475891de22b791844bd7ae934c1b244a9b0450eb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
