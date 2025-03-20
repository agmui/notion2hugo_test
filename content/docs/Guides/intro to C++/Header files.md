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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XIY4CXA%2F20250320%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250320T090823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEDEaCXVzLXdlc3QtMiJIMEYCIQDVkussbWH8xXR8giCiWDbN85zII0WmoNJPK3ccra1QxwIhAPSDnny3dkrmTb3%2FO5spNT9kTlj%2BwdZo%2B1QtVJQEJuV3KogECIr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxGLRbHtkjB54LCHW0q3ANs3uXiFjRXLnRB3Es2ZnCJdMBkTRqlB5zTza4XTPTQpHSRJhuQAKHmaHYRpM%2B0vdfRNlIlZuKTG4vJospynj9RLAVGjy7sEGohJnxz%2BpAdGcZUUBRocqTiD8sU5PP6O0LjVqC5ykd6yKOodsiRKMO6BZP2M7qyY3lB%2BCVzakAaiwmYf%2BJvdlKhkc0Stemlsj1PMq2MJ0A%2B1X5XzHl8tro8LQ%2FFEroNjHuzTuDDciwBWjiTvm0tPAUCy5S6kjELXcYUNhX1RmoHEMl6IFVUC%2FsKnv3v5xaoT5ppfrDFK9xrw7CmiszHKo3hxpF6brnHI3LrZU%2Ff9FIGHxsH6WhrdHvhyjD3h5oYD94DdWkmACJj8X%2BCdKgxPncU87fHDWPmJjXmHJg6oaiqFw8gz2JBz1NPgvI6nt4L4%2FJzgvaeGj1wp9r7sZyUETGCbOC9VuU9sbJsNZs6MBVHfpKkNWwXL3HrHkBkqK%2B7vS5mmDUGkwHWDJ7oFzxuUHoOk7RKTH722ZxtrePZATSu2U6IdosshRzgD2ty8Qdho5Sbg3SOt%2BjE%2B9%2BGxZ4j8hIRDym8zxV%2FSXVtbjvrCScnpZl1S2loXoBncPCUWpYJjxICkIU4YMz2XnppqG4HO97VxtSDpzDtpe%2B%2BBjqkAaqEZfB9rcJVK4ltYnldMyaOr0jcTVRJg8rBYY68g%2FXVFn7mfFlzxjVjHMmGmCpmszk6gr7o45CNEBAu1T4h10NXjEUgfTBfNMpYvXhLlw44n7L%2FM1vHpmrxkjiq0pu%2FBlEnVJy4AxCfRquj7To%2FucdmBXdIfP8mwnP3G6bLnBnRn6HT0GigfpoDEfYDCdGj%2FK8XrySfj9%2FVeQi6yqyKgrfP%2FQML&X-Amz-Signature=e2c60541555a83e88090ef8d6508efdadb9592ca79c6ce27b271ecf798c46eff&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
