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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WEBU6NLV%2F20250501%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250501T033852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEBsaCXVzLXdlc3QtMiJGMEQCIEtWZwUW2zQLT%2F9zmh8IxBHkz%2Fq6BJbXvvj0YAcn0k5SAiAoEkVxDMajK%2BCYjiT%2BgQPizSD8GU%2FsMrexiSnzsbXJrCqIBAi0%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMIuFQ7cCSXPkms%2BZuKtwDSK9RrCOIz6ldryAgPnDqKO3VASvmXS%2BAt6Q9gGDXeZ16VYh08%2FC3COGwecm51RbpwjU3jzrmExGZyjgBsZsOqOEoehbcgJ5sAoqGRbxrzf%2B5kJY6KsFTrtYh2WB3TIewxXMqsJTPr8jtjvPefNypP%2FLpfBoq2GXF8qpW5KQvupZjwARZ7fpMkn3IRW347xFurqYM%2BuSqaecsVIJXIrblsgaDw%2Fa%2Fx%2BFLtqAGWX2Oeq2S4Q0C0Fm%2Bq3th7EAJMwI9%2FB8YvgiAXX63xu4%2FXu29hKSO%2Bqoscnxpi%2Fhh%2B5SvUXx%2BSYjrbcxIndG5PgLv1Kc7fh1Qe6FGttACmJ1ww0ZeBfEAbIgkTB2SYQEDAgz7eCsp9RjdyRHC6gCFy39wQ2LpMNNBJXa4981RqZiNv3xRTQF6dcYtBTc5F6ePTgElz5iVW4lrysUcPXS5VYyC55tkRfNCMryRHRPaUU%2F3WDn%2BegZr6FfzcsMG%2BLZ1AduFVD2ce9FsM9dPoEtrY90AhN5tLZHNCr2NI%2F2%2FUYglD6qdf%2FYX77KCA6NWtpfeVypslUtDUX%2BrOe5kd87esyo%2B0u9qRYyKzHGhPAvwBugLL5VgppBf63WpwGhks1nc7RJzlEYd4oX0HxUKDrFUMUEwx87LwAY6pgFMT8PMPQGUyMZPJLvGd%2BjwswedAi6U4nVrG81DKvBOkqDaH8mRoYOmro%2B3TD2bmXZB5rlaVcykZjy2JY2cQXKCUUqt97tH0pax%2FUaYzEJzIAnnF5yMTOQvSpUivkEsY3zuee0W6989jDZoAaa0tyfxuNgL8p8GrxqMk6aCdoQrGlxiYA0fjjbif0A8pWflKLjJeYiPFhQPi9qAeFc%2B5Jk4buJ6bgfj&X-Amz-Signature=05f785fc20c7179554ec0265f6c718e647da409e588aad059fc31e977ef8944f&X-Amz-SignedHeaders=host&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
