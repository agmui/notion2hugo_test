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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662VQAYQZ3%2F20250731%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250731T151020Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNVIJm7ka%2B0I4GecBQn88tMix94MTKsGmSGFsd80BGGwIhAPL%2BpkCyLPzzQtTuGCdVjga6umHbztD%2Btzzbf6F8OGT5KogECNf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyJn8CmAgq2nLfQ2GQq3AMPLleLAf0t9Ia%2BuGhm%2BlZZnkJYhobNZoDcv8q0xK1A2hkAIoTRZMl8c0qY2pDmk6AEuF6CQfEW%2FYjAkiJdHGT1ibdBfwwTmuza8SVTKKzgxBqMAb1bKEiCcchYJ8AkwFSI7aSx22LzmesyBNI5LrB%2FqEexsKuK9QQ4iwxfI0fBAe5gTQ6vKxwJh38XyeA1zJJsgviHRrkd5ycjXldH4QsLb4aiM%2FvPiQFlG%2BZL%2BDjh%2F%2BbzfGkEvH%2BzEZCmEZDK3thAfoIizYGqHUE2IWrh7FPcmfq9A7bvshtRrsGVhfcHRUYf0gXjWXbjnPl6QxH7SvFsK7pq2Mt2vH9Qr28cXON5wDTKMu3jk2GjZiVW5SuWLqPi6PeAELnqAmCp4eRbY1%2BmwlVgeXRF2hB%2BfQ3GDxhE7U7cgki8TQy7OaPpoPqhW1niawM0mGe8TNJcIxrjHVJYSa1Tl1FYcb5V%2F3Gv7RDDjeBmZKoqHmm8VQ%2BoLeIMl4ntPBEF8PIjgjsDsrwtw2R1ZE%2BtiYAzCdiENjdzDukq6nHfNq2Mb9lzZnBu%2BOfVIxcC3lP%2FEZ2NQ84%2FeZR%2B9UG2LJ2RadQKI67ZMWlO8CN%2FPfNhJzscsMwirEWJ9Y7uS2X2uZSRLaCEkDZaazC36q3EBjqkAW413eoLVaO%2BtrA2f1qn30hUUfqy5I2YF%2Bvl9tZCWsuuquyU3LsfqJTPyF5gXLntjKLbXw0REUpTGhFs1iiqjwQQCHu4eKIL%2FVfwtkHP2BQjDpl7ig6FnZN24iZGUGERiZOCkJDP6FZOir1XCqUDWhDN5%2BAs61LuCH79dv0C5mfDzHcL%2FRURw%2BYw0URA1ovmgNbD4c8ZExqXR5E6r72sUyiQaz8i&X-Amz-Signature=48dc2777b6dfcb115e8a7371f9085c5243acf3f3c49859ce4bc8c0a1ec63ab1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
