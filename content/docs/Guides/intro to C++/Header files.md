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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UI7N6UWA%2F20250411%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250411T061217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjED4aCXVzLXdlc3QtMiJHMEUCIQC%2BTiYZiT5CaRMH1oxDdmf5iUa2vXOLJ5hDYGPIuMog2QIgHEhCzpoV6FOacry50sjTyD%2BkqEmV2fTMMwfXAAvP39gqiAQIt%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK3F7hV1qg2%2FdNbi4ircA7diiqHyRjruU9mIX0C%2FywHLzqzuSz1XKtLor4ynzC%2BpcKj5qO1Q9B%2FhSqdL2DNk6ndWcAakZ%2Btbc2M5ru2m4UieqS3z9KhNvzRxO%2FOA7ubG75WvPg3kxN1WavrBH5M2Oo2%2Fxc0o9MuUcV7iLdlE7rJy22gpOe28qWUQWfztUKWw7iTxZ4%2FjW6REx7PvHPLmw%2B6tPhBs8ZcFFNKMqIeuWTiR%2FzkM%2FCR2W4YHnpV2z1%2F7CYUeT%2FqnwQhTJEXIctXcYp%2FVG4cKG50mM7UWQ8fMA%2F9f0jsj%2B%2BZAY5v8r3EtHWomcNjJF2hTbK5x2ufmFyAnRCy8rdH%2FEk7epj41s%2B24%2BugZZpjNpYXuHpaNQtOeG7QGsOO6OcSaR%2FCYkWqJkFOg1FQQjuDIqgYijZJgKxjIBhQdNjIqIXHLpCuZ12WXYZX0CZH0%2F%2FCxEv7dToZx1wSxY9pi2COouZvSvVxAhS2oFWxxIp%2Fc7wy9om3T9E6I0PvTsF53HELOaNmiEheGsdKeOpV5%2Byx3TmhZF3BA02mjS8DbJU5%2BJJoVXcp6L32lfVyJGvMsVLhyOddD0XXo5W4HEixTbVU71T5jU4g3C%2F%2FjX%2FQmdkhGi7YXK1Cdr2ZBloB5HD5YARRTgZMLbppOMMDd4r8GOqUBb4HMgwh7%2Fpw4m4HRiQ4k4WxSsTqFUfS9U3hZVKJFhFSNDKuyVRUOEgonLv8nsvObgDilm2CU4HY%2B4GVHI8NI7kFsRRyxU9XwACt8WI8JGfDK6mFx5GIehUoGD4gAdSlTquiGM417PMgJ81n4JSQs7SiYpM0uWS7QnktetEHZBBewyWJkfZs0piRWsD1pqZV4bwRqdk2ZsZOXuI1yZM5bozE2ZDzC&X-Amz-Signature=7c8a2c2067d4d623fe28f6dc54dfb3d5252dcd0cbac0e4fc16ebe765864898b7&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
