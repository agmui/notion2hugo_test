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

![ezgif.com-video-to-gif-converter2.gif](https://prod-files-secure.s3.us-west-2.amazonaws.com/d518164a-d88e-44d1-a4ee-3adb3bd8bce0/9f103daa-e14d-4502-9172-47a4134fd049/ezgif.com-video-to-gif-converter2.gif?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HSONS2G%2F20250622%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20250622T081056Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICwoGhfFUU9VPdaejiTjQkYfZ3HOZNbE6J%2B%2FJyYWSkFEAiBFpu6%2B4nVx1OBtQoSKcdQNY5uw%2FKSb7QHTVtEpwzFirCqIBAjn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMl1P2secWp1HY7GfAKtwDh9qUJK%2B1ns1wmviIDkgViXKkABeJ9gvgfGexuFaq4vK2YY1E%2BM5I4Xaxhmw5sxbcYAQxQu%2Bi2VvAAgu3jiyT7xrqkBxy%2Fgf2htW8YG%2FHVJ%2FJfchzo7g42J%2FeSpTG%2B4GYsZfhaIM83NwMKa7u0tGf4Dlr9hFVLJ3gtayKulZITpUieRr4Hh5oQ%2BZkHSJb0a5Yw2XycnAomrnNGfG%2Fhd9%2BBnnYx%2BGAEMH0sr8QBlr%2BHshN9yBkV0ftP6sFeTX7CIQxf504gIHEg37hfQcv3lnW1Aa760%2BDBYfJSMcz97Zx7R7UQW6aGdNTp1xoFPFHg%2F6k3FbpSLHpimZU7b6UD8KVihDmDcFOrrP%2BM3EJrm1eiUO%2BP70S7L54c9DgU8Vq8Q6qW39VimHB8zG0iAL8878YDsFf3%2FP5OqgExcT3ntn14pGSuWCdMii4hO95PHyUkDhf%2B1oLHxaDbezviitsQMLCKOeM6XHd2A8JSk2PkHSmTHEoNSRCK1xDhljygvuKi%2F2ehI7cqKMgGGRMX9TJG2xOa38IpsDhkwID4uj4TbPX%2BemAikZNkFWWqnM4JBl6rhWOhtwDE2xPpWIVdMDBQgq%2BtKBU7P28KgBYDNhqiw50RgtJcc%2BfotQYvYDtOaYwoafewgY6pgH18raqpRPg1xJrO2xQpeorc%2F8697uEhJauMhaROksMms5IhSe7Ae%2FlpMLtydJnGAqdaM%2Fj8mZkT5dju9twDEYqOGANaMsdlXjuKRY5nRiAcj311GDuEEPNtzXsj2kOThppp0l7dI25DLH7a%2FYngIvhnBN7sZuCHf4M6TsiUENEXc2DtWQG9mUDJbSyp%2BRRaF3%2BeW1OwxK5cMCZC9daJ1XKIGXG55S%2B&X-Amz-Signature=4af69b23341c91754b808bec05cd03a74edda820bb34693167982a5350044278&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)

### Note: `.h` == `.hpp` (these are the same)
