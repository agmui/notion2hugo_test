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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THSW3QVG%2F20250718%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250718T042909Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGwaCXVzLXdlc3QtMiJGMEQCIDGbixTzMz6CY2c0vSZU1XqWu8NoqXd%2FUu7rVfn7x%2BitAiALrWLiMv0Xv1yC896QNDD%2BFfrsh16l9pUUzd%2BdglwuSSqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM6FNNoJFyUpCuRrBGKtwDp%2BqYRP%2FkQv2w2OthGU%2FrMkKrURr2Jq8pq34KWIpnycYEegVZcEH9mcUOreWfy6%2F77e6UKHoG7ltrEhG6ZF%2BAduSVD5kenoTC19LuxQvgy70IDbadYFctLAF72DrHY%2FgLtYq4YNuRtGqpAj3AKvOpP53bUBZif7KKNthkgiH9GOl%2FulldrzStAfYeKLvimMJKhMqewljIIDdFl%2F8RrQpsmq%2FDInVlhz1w7uNuM4rJuNe%2BSYfHp94ruNVJp%2FF2wR0JhzHaoghXsbtL5Cq5ize6mc0zOCdweimH5rIC3qtClYUpFs3Dz9BhU5%2FcmAIwsmUebLOBDA6Z%2BZy4aMGDjcFWD6hwVZKXKFggLIXJHEW84zOEhSBh27fQ3kXpsADVnGDzuhfyBWFiMmG%2Fq8ezz%2FDTZva2NGJltT0VRU5sM8E5ejY8q6a8h9Vq1VkSgfzbRwDb467ZlIwDUaSAPyBjZx3SP6O0wszMWPHw19kImA0kLnWTyXirIdrtsoI9eaicvMKR%2FRhORhtrh6tSPGtKB85zRYLog%2FjBz201eGxGR0cSBRy7Vd6yTr3KD1La5kDBPcbXYCWSgNOz12s8IzDgTU1ewssthY6nYuzSAN%2B57Tr%2B1mid%2BeKhdU2e2e3f2eQwx4jnwwY6pgHls9zuYYBnc3SZkA9LgbIH%2FpH5jKgUoAD%2BUzjhkQj9kUjXky16HTaxjw9x5ANvm6QbMauAq43tzz4c7Ol8Am%2FKz9NOjfy249gdEthQ2AW6iiYZbRbj4u%2BfwkpOsN5L8brcvSVqQNDytXkjbTIz95gL8OPz%2BPukwogiSbZVM0X1Z8Nfh4Zk2i1egSQfg2e5vu7ZZyW47QBLu%2BrYXrS9W9dG%2B3Z1FDM8&X-Amz-Signature=32eba316c85df0b2c788342bb3cdf5bcd84f38a13d9b60dc008f5bc25ad232c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
