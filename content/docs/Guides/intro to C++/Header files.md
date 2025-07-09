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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665VMYRMVC%2F20250709%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250709T121638Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEX9sS%2Fc2OQrxj%2FQ%2Bznw2kooozy3tThbRuBSnBrl2%2FzqAiBNnEcJleVkiZCbEu2syHS62CwE9WOl30VVajh8z0KvsSqIBAik%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFAb2wC6GQB2ybc3LKtwDbHJCeXgqJMyp6z0RvJwgsJBcseIfa%2BDCAHKAXiwmbIhowMfK2WDzwW8vb%2BlhKQilhStsuXjWCAfFv%2BhXwhSPumVREwKw6cmGXAzpeHbhSNUK0V1oNcL8uYNdBq8UXLWmdanF2QvTV85pmuYP0QjG075gH8wsL76V7RjXJGKfdMwTTaT8hVM72vC9R%2BQJD7YDPUYIiXlC%2BCCMQZtnotJbpUhgmHtd123d9vdSIsun7kxDESQXoaXLhQyU0Q7g5fPubJgDQUMHZ%2BIignfzbJJ%2Bdnz0YCJu%2FH6kdkBSL5c3UvP7MCxSnIsOB8NMutjUr5zIBi56YZtIkPkZSn9OQ27PKv62mIrHfPCiaFbTTnnMEiesX701K5MgFl0LdnxPV9J%2F2cE4JP9ZdAyFdexuEBiO1%2FTwg1wxCWftrWML67eI1cFTsrjSHwOK6Wl9YE5%2Fcee0BkmyuBz%2BiZGs74mdc46nBa%2F5CKswqwYGNypDIblN8OhmqYRQmUKLbl782oKDk5DzdJN0XAx7bximsjG1lPGb5AFCj7YZ%2BSPsP1U3VwVkaaI5A25SVQhNiNCtoHADTclFtI0d87xzx7nhNbO9cIbudDm%2Fz%2BTTcnwTzNj1gdNQUTRBeEhA5CIOCkl9eTkw8oq5wwY6pgH0bAsqmZVPbcleLOm3pZawvtl6I7It3pqYF4V%2BSJucQAOl0xWowMbIfItTn7LHLC1sqtF9k9OCIrt3NiuxiUggUubwioyM7xyb92X3JaG5amyRaGK9cYTJoc1Uv3%2BdpBaPWxW6LXXKyTZj%2FoiysNoH5waFKyUGxuOPzMu1CvNpgjY2fEgOuI5gy%2FWSLIBY%2BALNMq5NAW5At1SAFPuNgAoRd4%2FmZ7tC&X-Amz-Signature=fdf3ba1bdb0d53e461391e4423988af4ac25c6c5b8afe9ef6383effbc51b8192&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
