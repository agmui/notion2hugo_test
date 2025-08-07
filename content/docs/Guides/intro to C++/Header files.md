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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM6CEVIL%2F20250807%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250807T191213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEFsaCXVzLXdlc3QtMiJGMEQCIDenvhkCdeDYU15W0BIF%2Fi%2BQNt741WEHmGsE6zhJCm5nAiBfuOJPmaEQsSbKkw4TqV6A2gZ9dMf2xMXiYzY48h2vnyqIBAiU%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdGxprEKDMZjyMMBpKtwDHCU8ThrDaZSZYjHnWKpGN55lLgB%2FneZGUH4a62B8B%2F08OUz0mWMIjJlX3ZczXWpaMSarIBNXDtzdGvodnRBFNMqBOGuw8Vp%2FSqISDY0eZdE0BeSjQIuQKyT8BOXuFyvw%2BSpxYBY%2B0xpYj3TNNCC83BbFouzuJ1NUhr9%2FdTx%2Bs2u1AfQfFELovydHsmcTOFOsLmGjt3xzf23Jyx3wzCERY0IBSRdnpu50wVSZ9kNwro5rFfY80eoAzXEAXu%2BIyM97rKelsp7t1sP65QMThTqjT%2BVDT0P1qZnc8Gg4tA4tIR%2FAwu5ANEoyrKNCPLOaWNulH9v3rjx1YKISYRy2TsP4xF6zLnIUxY3Dtqkl161C3LfuVKM0qwNm1N5fhpUI4uTj5yjte%2BRDO3XsNUWDFeOu2EkA5iUs97BlfWYH08Z0f1eU73149Z43FMbkwIIc6zdBCW7PFRbrQC7vtIdsLf6NWZ5ZBWNpEBhCAL4C0epFs7ME5xdH2MKqE%2FwENsdescXnxuWq4gXvIDELQ%2BabMzD8ecMVOLHeJwArWr8ZYz%2FdVrmav8Xs3MrgbFxlwKUUZLEhUNZ3inZ8bTqsaVub29bL%2BabObhbtGviJLPRL2rM8k23PpQDxIdEqJY%2B67RMwku7TxAY6pgEwD%2Fqky0oJr0wlk5rrvCbP5qIm9%2BFzA7zrD14%2Fmcc91GD0nJE%2FQN0yn21gb907AB9JzFWqQo79M3HPg8yf%2BjMF230AMkB2zJWZVyWXh7Jo8c5j6wRrQ0R4mprZKLwilmjfy6EgxjlnZv9GCfjpy1d%2Fvti%2BW7WtA2fjz4uilAqPckC5%2FAyfc7LqcZXWS1HokxWdTVqsOh2BEs8gOdKDFNuWXQI7W%2BM5&X-Amz-Signature=aad8e154e0319542e302bb8e19369d8ab1a513470ab8b0053056afc9eda2634b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
