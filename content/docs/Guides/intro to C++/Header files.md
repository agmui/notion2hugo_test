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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2TJAMBD%2F20250607%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250607T033701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk2GpbQRJwOwceVX4rz8f89fOcxhdHLQhb8eyqGdRJMgIgQUz3cStaW%2FRWdW42%2FjUIQWuWW%2F3VA3bE7Zeyt7rrtbwq%2FwMIaxAAGgw2Mzc0MjMxODM4MDUiDNtagc6GaAa0sn7U%2FyrcA1KFtYTQazQVfY7QI2W8S1vDCtP9%2BQqEeBjipJJlGkm2SyWJLcKt5vXHTVJfLmUlURLq6ITFT8dF5iA5axmwWL2x6uCPAJoQM2LMRG05zCgLL0hGI1jvW9fGR9Iv2JSDb2MZ%2BQVcQUk53ih0I72IuA0rQ3ud6J%2Bkm7wrwnnI1BwkZmT5Llnt%2FvH%2FWO6CnzTuiw4QLwKwwTjgU2yCSW%2BF7pVBgHxORDLlhIIsg7Nukb6Jna4gTGYunQ6a5kKMwbnCkyn0vq2YMB4FJ%2FxXaeoAg5phr0EEMfU18IYe8z3Ms%2FIteoJ5zRis2PvkDSS94khV0tt6kFyUJ%2FF1fiMBYYfwgKXlBuF0iZnNDDq3LT6egc3b3SnQkrNSTZ1au7RMn%2FAE0noDNPB6QMOc5OTeAGk%2B5mVjHGo1kJEwmdrnAXJyYoT1AS34T%2BaszH7ht6G2agqdHYz3s8i0p%2B67p0%2FVSzS7bbiBB95usZ1Fn%2Bv7st0%2FaLP8Q9KU9LRzIWurbfJTkLUzc6ZotTWP9D8qvejy9ROsrkIvsqOpUA7U4GK0Kyl2lL%2F5RjpzWc2t06NiSsqYGKRihZEdIEn34AV%2BPEWtHVYZDNIE9osPRdR6aHOEq6I4M3N6A2RI8dFQ%2B%2BXIyuKvMOnAjsIGOqUB%2FEn7Dnc8ZwzaGVOTK2yLzMB9nvWCAClyqu7iHfQv%2BSklnYPR5EMe3DtaZ2M2DBK1UznG0XwrpoSJfy5OqOprtrg22ru3qObQPD5SaPpv5VdsSwiTujl2LwYFXW0Zte2rgQKxaqZemAtLWI6aYe2LtLIkRKJU%2FU%2Bjjr3binOH%2F87SIFeeduQYYhByoATYQcy1lOi5og%2B5rofvrkqrwst9F0%2FiuqSC&X-Amz-Signature=e97e596b8c680921bae3a49ab8a5ce1e9e03cd2c96f4f5d604b30c1dacfde127&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
